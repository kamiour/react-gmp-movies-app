import * as Yup from 'yup';

export const validationSchema = Yup.object({
  title: Yup.string()
    .trim('There must be no trailing whitespaces')
    .strict(true)
    .max(50, 'Must be 50 characters or less')
    .required('Title is required'),
  release_date: Yup.string().required('Release date is required'),
  poster_path: Yup.string().url('Invalid URL').required('Poster URL is required'),
  vote_average: Yup.number()
    .typeError('Rating must be a number')
    .min(0, 'Must be 0 or higher')
    .max(10, 'Must be 10 or lower')
    .required('Rating is required'),
  runtime: Yup.number()
    .typeError('Runtime must be a number')
    .min(0, 'Must be 0 or higher')
    .max(400, 'Must be 400 or less')
    .required('Runtime is required'),
  overview: Yup.string().trim().max(400, 'Must be 400 characters or less').required('Overview is required'),
  // genres: movie?.genres.map((value: string): Genre => ({ value, label: value })) || [],
});
