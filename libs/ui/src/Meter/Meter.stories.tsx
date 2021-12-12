import { Story, Meta } from '@storybook/react';
import { Meter, MeterProps } from './Meter';

export default {
  component: Meter,
  title: 'Meter',
} as Meta;

const Template: Story<MeterProps> = (args) => <Meter {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
