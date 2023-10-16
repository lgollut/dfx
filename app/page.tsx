import * as prismic from '@prismicio/client';
import { SliceZone } from '@prismicio/react';
import { Metadata } from 'next';

import { Container } from '@/components/container/container';
import { createClient } from '@/prismicio';
import { components } from '@/slices';

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const homepage = await client.getByUID('page', 'homepage');

  return {
    title: prismic.asText(homepage.data.title),
    description: homepage.data.meta_description,
    openGraph: {
      title: homepage.data.meta_title || undefined,
      images: [
        {
          url: homepage.data.meta_image.url || '',
        },
      ],
    },
  };
}

export default async function Index() {
  const client = createClient();
  const [homepage, concerts] = await Promise.all([
    client.getByUID('page', 'homepage', {
      graphQuery: `{
        page {
          slices {
            ...on hero {
              variation {
                ...on default {
                  primary {
                    ...primaryFields
                  }
                }
              }
            }
            ...on overlay_section {
              variation {
                ...on default {
                  primary {
                    ...primaryFields
                  }
                }
              }
            }
            ...on reel {
              variation {
                ...on default {
                  primary {
                    ...primaryFields
                  }
                  items {
                    ...itemsFields
                  }
                }
              }
            }
            ...on revealed_content {
              variation {
                ...on concert {
                  primary {
                    ...primaryFields
                  }
                }
              }
            }
            ...on document_link {
              variation {
                ...on default {
                  primary {
                    document {
                      ...on media_section {
                        ...media_sectionFields
                      }
                    }
                  }
                }
              }
            }
            ...on contact {
              variation {
                ...on default {
                  primary {
                    ...primaryFields
                  }
                }
              }
            }
          }
        }
      }`,
    }),
    client.getAllByType('concert'),
  ]);

  return (
    <Container space="none" maxWidth="md">
      <SliceZone
        slices={homepage.data.slices}
        components={components}
        context={{ concerts }}
      />
    </Container>
  );
}
