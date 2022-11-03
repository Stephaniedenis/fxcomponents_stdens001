import React from 'react';
import './style.css'

import { Progress } from '../lib/components/Progress/Progress';

export default {
  title: 'Components-TP1/Progress',
  component: Progress
};

const Template = (args) => <Progress {...args} />;

export const Petit = Template.bind({});
Petit.args = {
    percent:30
};
 
export const Moyen = Template.bind({});
Moyen.args ={
    percent:50
};

export const Grand = Template.bind({});
Grand.args = {
    percent:100
};