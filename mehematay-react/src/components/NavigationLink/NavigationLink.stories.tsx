import NavigationLink from './NavigationLink';

export default {
  title: 'NavigationLink',
  component: NavigationLink,
  tags: ['autodocs'],
};
export const navigationLink = (args) => {
  return (
    <div className="navigation-stories">
      <div>
        <p>Default (with knobs)</p>
        <NavigationLink
          {...args}
          to="#"
        >
          Controlled
        </NavigationLink>
      </div>
      <div>
        <p>Sizes</p>
        <NavigationLink to="#" size="tiny">
          tiny
        </NavigationLink>
        <NavigationLink to="#" size="small">
          small
        </NavigationLink>
        <NavigationLink to="#" size="medium">
          medium
        </NavigationLink>
        <NavigationLink to="#" size="large">
          large
        </NavigationLink>
      </div>
      <div>
        <p>Round</p>
        <NavigationLink to="#" rounded size="tiny">
          tiny
        </NavigationLink>
        <NavigationLink to="#" rounded size="small">
          small
        </NavigationLink>
        <NavigationLink to="#" rounded size="medium">
          medium
        </NavigationLink>
        <NavigationLink to="#" rounded size="large">
          large
        </NavigationLink>
      </div>
    </div>
  );
};
