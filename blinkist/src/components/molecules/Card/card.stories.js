import React from 'react';
import Card from './card';

export default {
    title: 'molecules/Cards',
    
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
   
    buttonName:"Finished",
    title: "Dropshipping",
    author: "James Moore",
    time: "20",
    category: "Entrepreneurship",
    image: "https://images.blinkist.com/images/books/60701b716cee070008b8b7a1/1_1/470.jpg",
};

