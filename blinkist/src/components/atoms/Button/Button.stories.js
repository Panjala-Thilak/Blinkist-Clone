import { Save } from '@material-ui/icons';
import React from 'react';
import CustomButton from './Button';
import CustomMenuButton from './MenuButton';

export default {
    title: 'atoms/CustomButton',
    component: CustomButton,
    argTypes:{
        color: {
            control: {
              type: 'radio',
              options: ['primary', 'secondary']
            }
          }
        }
};

const Template = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    color: "primary",
    variant: "outlined",
    label:"click me"
};


const Template1 = (args) => <CustomMenuButton {...args} />;

export const CustomizedButton = Template1.bind({});

CustomizedButton.args = {
    color: "primary",
    variant: "outlined",
    label:"click me",
    
    icon:<Save />
};


