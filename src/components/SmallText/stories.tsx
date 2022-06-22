import { Story, Meta } from '@storybook/react/types-6-0';
import { SmallText } from '.';

export default {
  title: 'SmallText',
  component: SmallText,
} as Meta;

export const Default: Story = (args) => <SmallText {...args} />;

Default.args = {
  children: 'This is the small text. It will always be upper case',
};
