import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MoviesListCard from '../components/MovieListCard/MovieListCard';
import { movies } from '../mocks/movies';
import { withDarkBg } from '../../.storybook/decorators';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Movies List Card',
  component: MoviesListCard,
  decorators: [withDarkBg],
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
