import { Story, Meta } from '@storybook/react/types-6-0';
import { Subject, SubjectProps } from '.';

export default {
  title: 'Subject',
  component: Subject,
  argTypes: {
    children: {
      type: 'string',
    },
    color: { control: 'color' },
  },
} as Meta;

export const Default: Story<SubjectProps> = (args) => (
  <div style={{ width: '300px' }}>
    <Subject {...args} />
  </div>
);

Default.args = {
  children: 'Biology',
  color: '#26FF56',
};
