import { PrismicImageProps } from '@prismicio/react';
import { RecipeVariants } from '@vanilla-extract/recipes';

import { image } from './image.css';

export type ImageVariants = NonNullable<RecipeVariants<typeof image>>;

export type ImageProps = PrismicImageProps & ImageVariants;
