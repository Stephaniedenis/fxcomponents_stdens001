import { Button } from '../lib/components/Button/Button';

export default{
    title: 'Components-TP1/Button',
    component: Button
};

const Template = (args) => <Button {...args} />;

export const Principal = Template.bind({});
Principal.args={
    variant: 'outlined',
    color:'primary',
    size:'medium',
    disabled:false,
    text:'Principal'
}

export const Disabled = Template.bind({});
Disabled.args={
    variant: 'outlined',
    color:'error',
    size:'medium',
    disabled:true,
    text:'Disabled'
}

export const Danger = Template.bind({});
Danger.args={
    variant: 'outlined',
    color:'warning',
    size:'medium',
    disabled:false,
    text:'Danger'
}

export const Patate = Template.bind({});
Patate.args={
    variant: 'outlined',
    color:'warning',
    size:'medium',
    disabled:false,
    text:'Patate'
}
