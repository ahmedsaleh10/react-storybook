import React from 'react';
import Button from "./Button"

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'text'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    color: { control: 'color' },
    label:{ control:'text'}
  },

} ;

const Template = (args) => <Button {...args}>Button</Button>;

export const PrimarySmall = Template.bind({});
PrimarySmall.args = { variant: 'primary', size: 'small', color: 'red' };

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = { variant: 'secondary', size: 'medium', color: 'blue' };

export const TextLarge = Template.bind({});
TextLarge.args = { variant: 'text', size: 'large', color: 'green' };
