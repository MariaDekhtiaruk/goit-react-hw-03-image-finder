const Modal = ({ selectedImage, onClose }) => {
  if (!selectedImage) return null;

  const { largeImageURL, tags } = selectedImage;

  return (
    <div className="Overlay" onClick={onClose} >
      <div className="Modal">
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

export default Modal;
