import React from 'react';
import IconButton from './IconButton';
import iconPack from '../../styles/assets/icons/sprite.svg';
import { ReactComponent as BellIcon } from '../../styles/assets/icons/bell.svg';
import { ReactComponent as ArrowIcon } from '../../styles/assets/icons/arrow_forward_ios-24px.svg';

export default {
  title: 'IconButton',
  component: IconButton,
  decorators: [
    (story: () => React.ReactNode) => (
      <div className="story-wrap">{story()}</div>
    )
  ]
};

export const Icons = (args) => {
  return (
    <div className="buttons-stories">
      <div>
        <IconButton
          {...args}
          iconSrc={ArrowIcon}
        />
      </div>
      <div>
        <IconButton size={30} iconHref={`${iconPack}#icon-heart-full`} />
      </div>
      <div>
        <IconButton size={60} textColor="orangered" iconSrc={BellIcon} />
      </div>
      <div>
        <ArrowIcon height={50} fill="orangered" />
      </div>
    </div>
  );
};
