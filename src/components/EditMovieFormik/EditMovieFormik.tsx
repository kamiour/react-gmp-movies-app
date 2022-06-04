import { useId } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import { genres } from '../../containers/MoviesListOptionsContainer/genres';
import { EditMovieFormValue } from '../../models/EditMovieFormValue';
import { Genre } from '../../models/Genre';
import { Movie } from '../../models/Movie';
import FormSelect from '../FormSelect/FormSelect';
import TextField from '../TextField/TextField';
import { validationSchema } from './validationSchema';
import { getMovieFromFormValue } from '../../utils/getMovieFromFormValue';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { createMovie, editMovie, fetchMovies } from '../../store/moviesReducer';
import { useQueryParams } from '../../hooks/useQueryParams';
import './EditMovie.scss';

interface EditMovieProps {
  movie: Movie | null;
  handleClose: () => void;
}

const EditMovieFormik = ({ movie, handleClose }: EditMovieProps) => {
  const dispatch = useAppDispatch();
  const routerQueryParams = useQueryParams();

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
  const getIdFor = (fieldName: string): string => `${inputIdPrefix}_${fieldName}`;

  const handleFormSubmit = async (formValue: EditMovieFormValue, { setSubmitting }) => {
    const isEditing = !!movie?.id;

    const formMovie: Partial<Movie> = getMovieFromFormValue(formValue);
    const actionToDispatch = isEditing ? editMovie({ ...formMovie, id: movie.id }) : createMovie(formMovie);

    try {
      await dispatch(actionToDispatch).unwrap();
      setSubmitting(false);
      handleClose();
      dispatch(fetchMovies(routerQueryParams));
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError);
    }
  };

  return (
    <Formik initialValues={initialFormValue} validationSchema={validationSchema} onSubmit={handleFormSubmit}>
      {({ isSubmitting }: FormikProps<EditMovieFormValue>) => (
        <Form className="edit-movie-form">
          <div className="form-fields">
            <TextField name="title" id={getIdFor('title')} label="Title:" type="text" placeholder="Title" />
            <TextField name="release_date" id={getIdFor('release_date')} label="Release date:" type="date" placeholder="Select Date" />
            <TextField name="poster_path" id={getIdFor('poster_path')} label="Poster Url:" type="url" placeholder="https://" />
            <TextField name="vote_average" id={getIdFor('vote_average')} label="Rating:" type="text" placeholder="7.8" />
            <FormSelect name="genres" inputId={getIdFor('genres')} label="Genre:" isMulti options={genres} />
            <TextField name="runtime" id={getIdFor('runtime')} label="Runtime:" type="text" placeholder="minutes" />
            <TextField name="overview" id={getIdFor('overview')} label="Overview:" textarea type="text" placeholder="Movie description" />
          </div>

          <div className="edit-movie-form-actions">
            <button className="app-btn app-btn-reverse" type="reset">Reset</button>
            <button className="app-btn" disabled={isSubmitting} type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditMovieFormik;
