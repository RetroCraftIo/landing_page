import { FC, HTMLAttributes } from 'react';

import { GamingControllerIcon } from '@/app/assets/icons/GamingController';
import { mergeClasses } from '@/app/utils';

import { Button } from '../buttons/Button';

export const WelcomeBanner: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  return (
    <section
      className={mergeClasses(
        `h-[211px] bg-mb-welcome-banner bg-cover bg-right bg-no-repeat p-[16px] lg:h-[calc(100vh_-_97px)] lg:bg-welcome-banner lg:p-[156px_160px]`,
        className
      )}
      {...props}
    >
      <div className="lg:max-w-[534px]">
        <h1 className="text-[18px] font-bold leading-[25px] lg:text-[36px] lg:leading-[49px]">
          WELCOME TO
        </h1>
        <h2 className="mb-[12px] text-[28px] font-bold leading-[38px] lg:mb-[24px] lg:text-[64px] lg:leading-[87px]">
          RETROCRAFT
        </h2>
        <p className="mb-[12px] text-[12px] font-[600] leading-[16px] lg:mb-[24px] lg:text-[18px] lg:leading-[25px]">
          With new games, new updates, and new ways to play, join one of the
          biggest communities in gaming and start crafting today!
        </p>
        <Button
          variant="primary"
          className="h-[43px] w-[135px] lg:h-[57px] lg:w-[171px]"
        >
          <GamingControllerIcon />
          PLAY NOW
        </Button>
      </div>
    </section>
  );
};
