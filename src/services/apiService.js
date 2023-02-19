const API_KEY = '32302956-bbb850179db0fe460a4f0a5f2';

export const getImages = async (imageQ, page = 1) => {
  const API_URL = `https://pixabay.com/api/?q=${imageQ}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  const images = await fetch(API_URL);

  return await images.json();
};
