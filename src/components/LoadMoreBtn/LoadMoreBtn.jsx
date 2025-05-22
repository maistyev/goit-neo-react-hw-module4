import css from "./LoadMoreBtn.module.css";

const LoadMoreButton = ({ handleLoadMore, isLoading }) => {
  return (
    <button
      onClick={handleLoadMore}
      disabled={isLoading}
      className={css.loadMoreBtn}
    >
      Load More
    </button>
  );
};

export default LoadMoreButton;
