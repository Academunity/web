import { Story, Meta } from '@storybook/react/types-6-0';
import { Home } from '.';

export default {
  title: 'Screen/Home',
  component: Home,
} as Meta;

export const Default: Story = () => <Home />;
