import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
export class ImageGallery extends Component {
  render() {
    const { imageItems, onImageClick } = this.props;
    return (
      <>
        <ul className="ImageGallery">
          {imageItems.map(imageItem => {
            return (
              <ImageGalleryItem
                key={imageItem.id}
                imageItem={imageItem}
                onClick={onImageClick}
              />
            );
          })}
        </ul>
      </>
    );
  }
}
