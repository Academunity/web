import { Story, Meta } from '@storybook/react/types-6-0';
import { UncontrolledTextField, UncontrolledTextFieldProps } from '.';

export default {
  title: 'Form/TextField',
  component: UncontrolledTextField,
} as Meta;

export const Default: Story<UncontrolledTextFieldProps> = (args) => (
  <UncontrolledTextField {...args} />
);
