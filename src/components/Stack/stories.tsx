import { Story, Meta } from '@storybook/react/types-6-0';
import { Stack, StackProps } from '.';

export default {
  title: 'Layout/Stack',
  component: Stack,
  argTypes: {
    align: {
      control: {
        type: 'select',
        options: ['flex-start', 'center', 'flex-end', 'stretch'],
      },
    },
    justify: {
      control: {
        type: 'select',
        options: [
          'flex-start',
          'center',
          'flex-end',
          'space-between',
          'space-around',
        ],
      },
    },
    wrap: {
      control: {
        type: 'select',
        options: ['nowrap', 'wrap', 'wrap-reverse'],
      },
    },
    spacing: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

export const Default: Story<StackProps> = (args) => (
  <Stack style={{ color: '#FFF' }} {...args}>
    <div>Child 1</div>
    <div>Child 2</div>
    <div>Child 3</div>
  </Stack>
);
