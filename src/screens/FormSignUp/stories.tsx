import { Story, Meta } from '@storybook/react/types-6-0';
import { FormSignUp } from '.';

export default {
  title: 'Screen/FormSignUp',
  component: FormSignUp,
} as Meta;

export const Default: Story = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <FormSignUp />
  </div>
);
