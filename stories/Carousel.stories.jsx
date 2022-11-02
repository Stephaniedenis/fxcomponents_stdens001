import React from 'react';
import './style.css'

import { Carousel } from '../components/Carousel/Carousel';

export default{
    title: 'Components-TP1/Carousel',
    component: Carousel
}

const Template = (args) => <Carousel {...args} />;

export const Small = Template.bind({});
Small.args={
    width: '200px',
    background:'#ac9a66',
    height: '180px',
    color: '#fff',
    lineHeight: '180px',
    textAlign: 'center'
}

export const Medium = Template.bind({});
Medium.args={
    width: '500px',
    background:'#027060',
    height: '180px',
    color: '#fff',
    lineHeight: '180px',
    textAlign: 'center'
}

export const Large = Template.bind({});
Large.args={
    width: '800px',
    background:'#79639d',
    height: '180px',
    color: '#fff',
    lineHeight: '180px',
    textAlign: 'center'
}