import { Story, Meta } from '@storybook/react/types-6-0';
import { ColoredCircle } from '.';

export default {
  title: 'ColoredCircle',
  component: ColoredCircle,
} as Meta;

export const Default: Story = () => <ColoredCircle />;
