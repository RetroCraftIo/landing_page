import ImageNext, { ImageProps } from 'next/image';
import { FC } from 'react';

export const Image: FC<ImageProps> = ({ src, ...props }) => {
  return (
    <ImageNext
      src={(process.env?.NEXT_PUBLIC_ROOT_PATH ?? '') + src}
      {...props}
    />
  );
};
