import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { jest } from '@storybook/jest';
import Header from '../components/Header/Header';
import Logo from '../components/Logo/Logo';
import AddMovieBtn from '../components/AddMovieBtn/AddMovieBtn';
import { withDarkBg } from '../../.storybook/decorators';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'App Header',
  component: Header,
  decorators: [withDarkBg],
  layout: 'fullscreen',
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args}>
    <Logo />
    <AddMovieBtn handleClick={jest.fn()} />
  </Header>
);

export const AppHeader = Template.bind({});
