import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ modalImage, isModalOpen, setIsModalOpen }) => {
  return (
    <ReactModal
      isOpen={isModalOpen}
      appElement={document.getElementById("root")}
      onRequestClose={() => setIsModalOpen(false)}
      preventScroll={true}
      className={css.modal}
    >
      <img src={modalImage} className={css.modalImg} />
    </ReactModal>
  );
};

export default ImageModal;
