import { useId } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import TextField from '../TextField/TextField';
import styles from './SearchForm.module.scss';
import btnStyles from '../../scss/components/button.module.scss';
import inputStyles from '../../scss/components/form-input.module.scss';

export default function SearchForm() {
  const router = useRouter();
  const { search: searchQuery } = router.query;
  const inputIdPrefix = useId();

  const handleSubmit = ({ searchValue }: { searchValue: string }) => {
    if (searchValue) {
      router.pathname = '/search/[search]';
      router.query.search = searchValue.toLocaleLowerCase();
    } else {
      router.pathname = '/search';
      delete router.query.search;
    }

    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div className={styles.searchformWrapper}>
      <h1 className={styles.searchformTitle}>Find your movie</h1>

      <Formik initialValues={{ searchValue: (searchQuery as string) || '' }} onSubmit={handleSubmit}>
        <Form className={styles.searchform}>
          <TextField
            name="searchValue"
            className={inputStyles.formInput}
            id={`${inputIdPrefix}_search-input`}
            label=""
            type="text"
            placeholder="What do you want to watch?"
          />

          <button className={`${btnStyles.appBtn} ${styles.searchformBtn}`} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
}
