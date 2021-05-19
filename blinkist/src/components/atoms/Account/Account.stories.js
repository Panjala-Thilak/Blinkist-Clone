import React from 'react';
import Account from './Account';

export default {
    title: 'atoms/AccountAvathar',
};

const Template = (args) => <Account {...args} />;

export const Primary = Template.bind({});

Primary.args = {
   firstName:'Thilak',
   lastName:'Panjala'
};