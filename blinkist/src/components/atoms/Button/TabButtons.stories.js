import React from 'react';
import TabsButton from './TabButtons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default {
    title: 'TabsButton',
};

const Template = (args) => <TabsButton {...args} />;

export const Primary = Template.bind({});

Primary.args={
    name:"Currently Reading"
}

export const DropDown = Template.bind({});

DropDown.args={
    name:"Currently Reading",
    endIcon:<ExpandMoreIcon />
}




