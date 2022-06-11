import { useId } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import TextField from '../TextField/TextField';
// import './SearchForm.scss';

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
    <div className="searchform-wrapper">
      <h1 className="searchform-title">Find your movie</h1>

      <Formik initialValues={{ searchValue: (searchQuery as string) || '' }} onSubmit={handleSubmit}>
        <Form className="searchform">
          <TextField
            name="searchValue"
            className="form-input"
            id={`${inputIdPrefix}_search-input`}
            label=""
            type="text"
            placeholder="What do you want to watch?"
          />

          <button className="app-btn searchform-btn" type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
}
