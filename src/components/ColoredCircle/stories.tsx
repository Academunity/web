import { Story, Meta } from '@storybook/react/types-6-0';
import { ColoredCircle, ColoredCircleProps } from '.';

export default {
  title: 'ColoredCircle',
  component: ColoredCircle,
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
  },
} as Meta;

export const Default: Story<ColoredCircleProps> = (args) => (
  <ColoredCircle {...args} />
);

Default.args = {
  color: '#FF4747',
};
