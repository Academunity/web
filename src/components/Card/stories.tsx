import { Story, Meta } from '@storybook/react/types-6-0';
import theme from 'styles/themes/default';
import { Card, CardProps } from '.';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Default: Story<CardProps> = (args) => (
  <div
    style={{
      maxWidth: 500,
      margin: '0 auto',
      fontSize: theme.font.sizes.xxlarge,
      color: theme.colors.text,
      fontWeight: theme.font.bold,
    }}
  >
    <Card {...args} />
  </div>
);

Default.args = {
  children: 'This is the Card component used to wrap content',
};
