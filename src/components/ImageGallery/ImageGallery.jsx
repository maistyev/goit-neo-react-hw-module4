import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.gallery}>
      {images.map(({ id, urls: { small }, description }) => (
        <li key={id} onClick={() => openModal(id)}>
          <ImageCard url={small} alt={description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
