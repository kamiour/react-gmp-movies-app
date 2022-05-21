import { useState } from 'react';
import { sortOptions } from '../../mocks/sortOptions';
import { Movie } from '../../models/Movie';
import FormField from '../FormField/FormField';
import FormSelect from '../FormSelect/FormSelect';
import './EditMovie.scss';

interface EditMovieProps {
  movie: Movie | null;
  onSubmit: (formValue: Partial<Movie>) => void;
}

const EditMovieForm = ({ movie, onSubmit }: EditMovieProps) => {
  const initialFormValue: Partial<Movie> = {
    title: movie?.title || '',
    release_date: movie?.release_date || '',
    poster_path: movie?.poster_path || '',
    vote_average: movie?.vote_average,
    runtime: movie?.runtime,
    overview: movie?.overview || '',
    genres: movie?.genres || [],
  };

  const [formValue, setFormValue] = useState(initialFormValue);

  function onChange(event) {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  }

  function resetForm() {
    setFormValue(initialFormValue);
  }

  function onFormSubmit(event) {
    // add typings for SyntheticBaseEvent
    event.preventDefault();
    onSubmit(formValue);
  }

  return (
    <form className="edit-movie-form" onSubmit={onFormSubmit}>
      <div className="form-fields">
        <FormField labelTitle="Title: " id="title">
          <input
            id="title"
            type="text"
            name="title"
            className="form-input"
            placeholder="Title"
            value={formValue.title}
            onChange={onChange}
          />
        </FormField>

        <FormField labelTitle="Release date:" id="release_date">
          <input
            id="release_date"
            type="date"
            name="release_date"
            className="form-input"
            placeholder="Select Date"
            value={formValue.release_date}
            onChange={onChange}
          />
        </FormField>

        <FormField labelTitle="Poster Url:" id="poster_path">
          <input
            id="poster_path"
            type="url"
            name="poster_path"
            className="form-input"
            placeholder="https://"
            value={formValue.poster_path}
            onChange={onChange}
          />
        </FormField>

        <FormField labelTitle="Rating:" id="vote_average">
          <input
            id="vote_average"
            type="number"
            name="vote_average"
            className="form-input"
            placeholder="7.8"
            value={formValue.vote_average}
            onChange={onChange}
          />
        </FormField>

        <FormField labelTitle="Genre:" id="genres">
          <FormSelect value={null} options={sortOptions} isMulti={true} onChange={(value) => {}} />
        </FormField>

        <FormField labelTitle="Runtime:" id="runtime">
          <input
            id="runtime"
            type="number"
            name="runtime"
            className="form-input"
            placeholder="minutes"
            value={formValue.runtime}
            onChange={onChange}
          />
        </FormField>

        <FormField labelTitle="Runtime:" id="overview">
          <textarea
            id="overview"
            name="overview"
            className="form-textarea"
            placeholder="Movie description"
            value={formValue.overview}
            onChange={onChange}
          />
        </FormField>
      </div>

      <div className="edit-movie-form-actions">
        <button className="app-btn app-btn-reverse" type="button" onClick={resetForm}>
          Reset
        </button>
        <button className="app-btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default EditMovieForm;
