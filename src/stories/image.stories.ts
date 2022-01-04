// import { moduleMetadata } from '@storybook/angular';
// import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';

import {AvengersComponent} from "../app/avengers/avengers.component";

export default {
  title: 'ForAvengers/Avengers Component',
  component: AvengersComponent,
} as Meta;

const Template: Story<AvengersComponent> = (args: AvengersComponent) => ({
  component: AvengersComponent,
  props: args,
});

export const NoImageCaption = Template.bind({});
NoImageCaption.args = {
  figCaptionTxt: '',
};

export const WithImageCaption = Template.bind({});
WithImageCaption.args = {
  figCaptionTxt:  'The picture of all the avengers.'
};

export const WithZeroOpacity = Template.bind({});
WithZeroOpacity.args = {
  imgOpacity: 1
};

export const WithHalfOpacity = Template.bind({});
WithHalfOpacity.args = {
  imgOpacity: 0.5
};
