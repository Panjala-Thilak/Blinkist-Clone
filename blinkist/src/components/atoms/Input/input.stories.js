
import React from 'react';
import CustomInput from './input';

export default {
    title: 'atoms/CustomInput',
    component: CustomInput,
    argTypes:{
    variant: {
        control: {
          type: 'radio',
          options: ['filled', 'standard','outlined']
        }
      }
    }
};

const Template = (args) => <CustomInput {...args} />;

export const Default = Template.bind({});

Default.args = {
    variant: "outlined",
    label: "input",
    type:"text",
    placeholder:"Enter Name"
    
};