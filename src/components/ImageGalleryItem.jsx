const ImageGalleryItem = ({ imageItem, onClick }) => (
  <li
    className="ImageGalleryItem"
    key={imageItem.id}
    value={imageItem.id}
    onClick={() => onClick(imageItem)}
  >
    <img
      className="ImageGalleryItem-image"
      src={imageItem.webformatURL}
      alt={imageItem.tags}
    />
  </li>
);

export default ImageGalleryItem;
