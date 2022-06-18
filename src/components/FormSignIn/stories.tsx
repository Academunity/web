import { Story, Meta } from '@storybook/react/types-6-0';
import { FormSignIn } from '.';

export default {
  title: 'FormSignIn',
  component: FormSignIn,
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
    <FormSignIn />
  </div>
);
