import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import MoviesListCard from '../components/MovieListCard/MovieListCard';
import { movies } from '../mocks/movies';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'MoviesListCard',
  component: MoviesListCard,
  argTypes: {
    handleSelect: { action: true },
    handleClose: { action: true },
  },
} as ComponentMeta<typeof MoviesListCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MoviesListCard> = (args) => <MoviesListCard {...args} />;

export const MovieCard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MovieCard.args = {
  movie: movies[1],
};

export const MovieCardImgError = Template.bind({});
MovieCardImgError.args = {
  movie: { ...movies[1], poster_path: 'https://img.notfound' },
};
