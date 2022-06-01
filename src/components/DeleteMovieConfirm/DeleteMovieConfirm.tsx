import { Formik, FormikProps, Form } from 'formik';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useMovies } from '../../hooks/useMovies';
import { deleteMovieById, fetchMovies } from '../../store/moviesReducer';
import './DeleteMovieConfirm.scss';

interface DeleteMovieFormValue {
  movieId: number;
}

interface DeleteMovieProps extends DeleteMovieFormValue {
  handleClose: () => void;
}

const DeleteMovieConfirm = ({ movieId, handleClose }: DeleteMovieProps) => {
  const { queryParams } = useMovies();
  const dispatch = useAppDispatch();

  const handleFormSubmit = async ({ movieId }, { setSubmitting }) => {
    try {
      await dispatch(deleteMovieById(movieId)).unwrap();
      setSubmitting(false);
      handleClose();
      dispatch(fetchMovies(queryParams));
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError);
    }
  };

  return (
    <Formik initialValues={{ movieId }} onSubmit={handleFormSubmit}>
      {({ isSubmitting }: FormikProps<DeleteMovieFormValue>) => (
        <Form className="edit-movie-form">
          <div className="confirm-modal">
            <p className="confirm-text">Are you sure you want to delete this movie?</p>

            <button className="app-btn confirm-btn" type="submit" disabled={isSubmitting}>
              Confirm
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DeleteMovieConfirm;
