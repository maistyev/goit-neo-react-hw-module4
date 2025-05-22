import css from "./ImageCard.module.css";

const ImageCard = ({ url, alt }) => {
  return (
    <div className={css.imageCard}>
      <img className={css.image} src={url} alt={alt} />
    </div>
  );
};

export default ImageCard;
