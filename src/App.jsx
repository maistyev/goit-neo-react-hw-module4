import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import { fetchImages } from "./api/images-api";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import { PropagateLoader } from "react-spinners";
import LoadMoreButton from "./Components/LoadMoreBtn/LoadMoreBtn";
import { Toaster } from "react-hot-toast";
import ImageModal from "./Components/ImageModal/ImageModal";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({});

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (targetId) => {
    setIsModalOpen(true);
    setModalImage(images.find(({ id }) => id === targetId)?.urls.regular || "");
  };

  useEffect(() => {
    if (!searchQuery) return;

    const fetching = async () => {
      try {
        setIsLoading(true);
        setError("");
        const data = await fetchImages(searchQuery, page);
        setImages((prev) =>
          page === 1 ? data.results : [...prev, ...data.results]
        );
      } catch {
        setError("Something went wrong. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetching();
  }, [searchQuery, page]);

  return (
    <>
      <SearchBar search={handleSearch} isDisabled={false} />
      {!error && <ImageGallery images={images} openModal={openModal} />}
      {error && <ErrorMessage />}
      {isLoading && <PropagateLoader color="#36d7b7" />}
      {images.length > 0 && (
        <LoadMoreButton handleLoadMore={handleLoadMore} isLoading={isLoading} />
      )}
      <Toaster />
      <ImageModal
        modalImage={modalImage}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
}

export default App;
