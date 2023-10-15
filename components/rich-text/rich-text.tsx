import { wrapMapSerializer, serialize } from '@prismicio/richtext';
import { ReactNode, useMemo } from 'react';

import { Heading } from '@/components/heading';
import { Image } from '@/components/image';
import { Stack } from '@/components/stack';
import { Text } from '@/components/text';

import { alignEnd, blockquote, richText } from './rich-text.css';
import { RichTextProps } from './rich-text.types';

const replaceMap = {
  '« ': '«\u202F',
  ' »': '\u202F»',
  ' :': '\u202F:',
  ' ;': '\u202F;',
  ' !': '\u202F!',
  ' ?': '\u202F?',
};

function replaceSpaces(text: string, nb: number) {
  const regex = /\u{0020}(?=[\u{00A0}\u{202F}\S]*$)/gu;

  for (let i = 0; i < nb; i++) {
    text = text.replace(regex, '\u00A0');
  }

  return text;
}

function parseText(text: unknown): ReactNode {
  if (Array.isArray(text)) {
    return text.map(parseText);
  }

  if (typeof text !== 'string') {
    return text as ReactNode;
  }

  let formattedText: string = text;

  for (const [key, value] of Object.entries(replaceMap)) {
    formattedText = formattedText.replaceAll(key, value);
  }

  formattedText = formattedText.trim();

  return replaceSpaces(formattedText, 2);
}

const markdownSerializer = wrapMapSerializer({
  heading1: ({ children }) => <Heading use="h1">{parseText(children)}</Heading>,
  heading2: ({ children }) => <Heading use="h2">{parseText(children)}</Heading>,
  heading3: ({ children }) => <Heading use="h3">{parseText(children)}</Heading>,
  heading4: ({ children }) => <Heading use="h4">{parseText(children)}</Heading>,
  heading5: ({ children }) => <Heading use="h5">{parseText(children)}</Heading>,
  heading6: ({ children }) => <Heading use="h6">{parseText(children)}</Heading>,
  paragraph: ({ node, children }) => {
    const labelSpan = node.spans.find((span) => span.type === 'label');

    const parsedText = parseText(children) as NonNullable<ReactNode>;

    if (!labelSpan || labelSpan.type !== 'label') {
      return <Text use="p">{parsedText}</Text>;
    }

    switch (labelSpan.data.label) {
      case 'quote':
        return (
          <Text use="blockquote" className={blockquote}>
            {parsedText}
          </Text>
        );
      case 'align-end':
        return (
          <Text use="p" className={alignEnd}>
            {parsedText}
          </Text>
        );
      case 'legend':
        return (
          <Text use="p" variant="bodySmall" align="end" className={alignEnd}>
            {parsedText}
          </Text>
        );
      default:
        return <Text use="p">{parsedText}</Text>;
    }
  },
  preformatted: ({ text }) => <pre>{text}</pre>,
  strong: ({ children }) => <strong>{parseText(children)}</strong>,
  em: ({ children }) => <em>{parseText(children)}</em>,
  listItem: ({ children }) => <li>{parseText(children)}</li>,
  oListItem: ({ children }) => <li>{parseText(children)}</li>,
  list: ({ children }) => <ul>{parseText(children)}</ul>,
  oList: ({ children }) => <ol>{parseText(children)}</ol>,
  image: ({ node }) => <Image field={node} />,
  embed: ({ node }) => `${node.oembed.html}\n\n`,
  hyperlink: ({ node, children }) => (
    <Text use="a" variant="bodySmall" color="primary" href={node.data.url}>
      {parseText(children)}
    </Text>
  ),
  label: ({ node, children }) => {
    switch (node.data.label) {
      case 'codespan':
        return <Text use="code">{parseText(children)}</Text>;
      case 'quote':
      case 'align-end':
      case 'legend':
      case 'link':
        return <>{parseText(children)}</>;
      default:
        return <Text className={node.data.label}>{parseText(children)}</Text>;
    }
  },
  span: ({ text }) => text.replace('\n', '<br/>'),
});

export function RichText({ field }: RichTextProps) {
  const rendered = useMemo(
    () => serialize(field, markdownSerializer) as ReactNode,
    [field],
  );

  return (
    <Stack space="lg" className={richText}>
      {rendered}
    </Stack>
  );
}
