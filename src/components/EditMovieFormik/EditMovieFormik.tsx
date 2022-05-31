import { useId } from 'react';
import { Formik, Form, FormikProps } from 'formik';

import { genres } from '../../containers/MoviesListOptionsContainer/genres';
import { EditMovieFormValue } from '../../models/EditMovieFormValue';
import { Genre } from '../../models/Genre';
import { Movie } from '../../models/Movie';
import FormSelect from '../FormSelect/FormSelect';
import TextField from '../TextField/TextField';

import './EditMovie.scss';
import { validationSchema } from './validationSchema';

interface EditMovieProps {
  movie: Movie | null;
  onSubmit: (formValue: EditMovieFormValue) => void;
}

const genreSelectOptions = genres;

const EditMovieFormik = ({ movie, onSubmit }: EditMovieProps) => {
  const initialFormValue: EditMovieFormValue = {
    title: movie?.title || '',
    release_date: movie?.release_date || '',
    poster_path: movie?.poster_path || '',
    vote_average: movie?.vote_average?.toString() || '',
    runtime: movie?.runtime?.toString() || '',
    overview: movie?.overview || '',
    genres: movie?.genres.map((value: string): Genre => ({ value, label: value })) || [],
  };

  const inputIdPrefix = useId();

  function getIdFor(fieldName: string): string {
    return `${inputIdPrefix}_${fieldName}`;
  }

  return (
    <Formik
      initialValues={initialFormValue}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 3000);

        // onSubmit(values); // use this
      }}
    >
      {({ isSubmitting }: FormikProps<EditMovieFormValue>) => (
        <Form className="edit-movie-form">
          <div className="form-fields">
            <TextField name="title" id={getIdFor('title')} label="Title:" type="text" placeholder="Title" />
            <TextField name="release_date" id={getIdFor('release_date')} label="Release date:" type="date" placeholder="Select Date" />
            <TextField name="poster_path" id={getIdFor('poster_path')} label="Poster Url:" type="url" placeholder="https://" />
            <TextField name="vote_average" id={getIdFor('vote_average')} label="Rating:" type="text" placeholder="7.8" />
            <FormSelect name="genres" inputId={getIdFor('genres')} label="Genre:" isMulti options={genreSelectOptions} />
            <TextField name="runtime" id={getIdFor('runtime')} label="Runtime:" type="text" placeholder="minutes" />
            <TextField name="overview" id={getIdFor('overview')} label="Overview:" textarea type="text" placeholder="Movie description" />
          </div>

          <div className="edit-movie-form-actions">
            <button className="app-btn app-btn-reverse" type="reset">
              Reset
            </button>
            <button className="app-btn" disabled={isSubmitting} type="submit">
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditMovieFormik;
