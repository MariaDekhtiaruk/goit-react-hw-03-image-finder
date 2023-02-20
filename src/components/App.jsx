import { Component } from 'react';
import SearchBar from './SearchBar';
import { getImages } from 'services/apiService';
import { ImageGallery } from './ImageGallery';
import { Notify } from 'notiflix';
import Button from './Button';
import '../index.css';
import '../styles.css';
import Loader from './Loader';
import Modal from './Modal';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    imageQ: '',
    isLoading: false,
    selectedImage: null,
  };
  handleFormSubmit = async imageQ => {
    this.setState({ isLoading: true });
    const images = await getImages(imageQ);

    if (images.hits.length === 0) {
      Notify.warning(
        'Unfortunately we don`t find your search query, please try something else'
      );
      return;
    }
    this.setState({ images: images.hits, imageQ, isLoading: false });
    this.scrollToBottom();
  };

  scrollToBottom = () => {
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 100);
  };

  loadMoreHandler = async () => {
    this.setState({ isLoading: true });
    const { imageQ, page, images } = this.state;
    const nextPage = page + 1;
    const nextPageImages = await getImages(imageQ, nextPage);

    this.setState({
      images: [...images, ...nextPageImages.hits],
      page: nextPage,
      isLoading: false,
    });

    this.scrollToBottom();
  };

  showSelectedImage = image => {
    console.log(image);
    this.setState({ selectedImage: image });
  };

  onCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  escFunction(event) {
    if (event.key === 'Escape') {
      this.setState({ selectedImage: null });
    }
  }

  componentDidMount() {
    document.addEventListener(
      'keydown',
      event => this.escFunction(event),
      false
    );
  }

  render() {
    const { images, isLoading, selectedImage } = this.state;
    return (
      <div className="App">
        <SearchBar onSubmit={this.handleFormSubmit}></SearchBar>
        <ImageGallery
          imageItems={images}
          onImageClick={this.showSelectedImage}
        />
        {images.length ? (
          isLoading ? (
            <Loader />
          ) : (
            <Button title="Load More" onClickHandler={this.loadMoreHandler} />
          )
        ) : null}
        <Modal selectedImage={selectedImage} onClose={this.onCloseModal} />
      </div>
    );
  }
}
