import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { MdImageSearch } from "react-icons/md";

const SearchBar = ({ search, isDisabled }) => {
  const handleSubmit = (values) => {
    if (values.query.trim() === "") {
      toast.error("Please enter a search term.");
      return;
    }
    search(values.query);
  };
  return (
    <div className={css.searchContainer}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form>
          <div className={css.searchBoxContainer}>
            <MdImageSearch className={css.searchIcon} />
            <Field
              name="query"
              disabled={isDisabled}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              className={css.searchBox}
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default SearchBar;
