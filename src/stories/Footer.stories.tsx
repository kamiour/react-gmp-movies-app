import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Footer from '../components/Footer/Footer';
import Logo from '../components/Logo/Logo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'App Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args}>
    <Logo />
  </Footer>
);

export const AppFooter = Template.bind({});
