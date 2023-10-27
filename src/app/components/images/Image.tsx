import { DetailedHTMLProps, FC, ImgHTMLAttributes } from 'react';

interface ImageProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  unoptimized?: boolean;
}

export const Image: FC<ImageProps> = ({ src, alt, unoptimized, ...props }) => {
  console.log(unoptimized);
  return (
    <img
      src={(process.env?.NEXT_PUBLIC_ROOT_PATH ?? '') + src}
      alt={alt}
      {...props}
    />
  );
};
