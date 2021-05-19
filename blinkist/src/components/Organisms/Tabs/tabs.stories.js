import React from 'react';
import Tabs from './tabs';

export default {
    title: 'Organisms/Tabs',
};

const Template = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});

Primary.args={
    name:"Currently Reading"
}



