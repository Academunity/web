import { Story, Meta } from '@storybook/react/types-6-0';
import { Email } from 'styled-icons/material-outlined';
import { Button, ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    as: {
      type: 'symbol',
    },
    children: {
      type: 'string',
    },
    icon: {
      type: 'symbol',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    disabled: {
      type: 'boolean',
    },
  },
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

Default.args = {
  children: 'Sign in',
};

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />;

WithIcon.args = {
  children: 'Sign in',
  icon: <Email />,
};

export const AsLink: Story<ButtonProps> = (args) => <Button {...args} />;

AsLink.args = {
  children: 'Sign in',
  as: 'a',
  href: '/link',
};
