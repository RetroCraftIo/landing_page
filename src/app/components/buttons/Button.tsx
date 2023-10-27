import { FC, HTMLAttributes, useMemo } from 'react';

import { mergeClasses } from '@/app/utils';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: 'primary';
}

export const Button: FC<ButtonProps> = ({
  variant,
  className,
  children,
  ...props
}) => {
  const variantClass = useMemo(() => {
    switch (variant) {
      case 'primary':
        return ' text-white';

      default:
        return '';
    }
  }, [variant]);

  return (
    <button
      className={mergeClasses(
        'relative z-0 flex h-auto w-auto items-center justify-center gap-[8px] bg-primary1/90 text-[14px] font-bold leading-[19px] before:absolute before:left-[-4px] before:top-0 before:z-[-1] before:block before:h-full before:w-[calc(100%_+_8px)] before:bg-primary1/90 after:absolute  after:left-0 after:top-[-4px] after:z-[-2] after:block after:h-[calc(100%_+_4px)] after:w-full after:bg-primary3 lg:text-[18px]',
        variantClass,
        className
      )}
      {...props}
    >
      <span className="absolute bottom-[-4px] left-0 h-[4px] w-full bg-primary1/90"></span>
      {children}
    </button>
  );
};
