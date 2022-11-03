import React from 'react';
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

import { Card } from '../lib/components/Card/Card';

export default {
  title: 'Components-TP1/Card',
  component: Card
};

const Template = (args) => <Card {...args} />;

export const Small = Template.bind({});
Small.args = {
  width: '200px',
  title:'Petit titre',
  variant:'primary'
};

export const Medium = Template.bind({});
Medium.args = {
  width: '300px',
  title:'Moyen titre',
  variant:'secondary'
};

export const Large = Template.bind({});
Large.args = {
  width: '500px',
  title:'Super grand giga titre',
  variant:'danger'
};