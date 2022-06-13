import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FilterPanel from '../components/FilterPanel/FilterPanel';
import { genres } from '../containers/MoviesListOptionsContainer/genres';
import { withDarkBg } from '../../.storybook/decorators';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Genres Panel',
  component: FilterPanel,
  argTypes: {
    handleSelect: { action: true },
  },
  decorators: [withDarkBg],
} as ComponentMeta<typeof FilterPanel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FilterPanel> = (args) => <FilterPanel {...args}></FilterPanel>;

export const GenresPanel = Template.bind({});
GenresPanel.args = {
  genres,
  selectedGenre: genres[1].value,
};
