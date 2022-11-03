import React from 'react';
import './style.css'

import { Badge } from '../lib/components/Badge/Badge';

export default{
    title: 'Components-TP1/Badge',
    component: Badge
}

const Template = (args) => <Badge {...args} />;

export const Green = Template.bind({});
Green.args={
    text:'citron vert',
    color:'lime'
}

export const Cyan = Template.bind({});
Cyan.args={
    text:'bleu cyan',
    color:'cyan'
}

export const Pink = Template.bind({});
Pink.args={
    text:'rose pétant',
    color:'pink'
}