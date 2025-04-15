// import photos from './photos.json';
// import photosQuery from './photos_query.json';
// import axios from 'axios';

// const myKey = 'VCOnMe1DpUA-YflVb2CuIdDFtorjZPzeH0ijBeaY1fo';

// export const searchImages = async (query, page, signal) => {
//   const response = await axios.get(
//     `https://api.unsplash.com/search/photos/?client_id=${myKey}&per_page=5&query=${query}&page=${page}`,
//     { signal }
//   );
//   return response.data;
// };

const API = {
  BASE: 'https://api.unsplash.com/',
  SEARCH: 'search/photos',
  HEADERS: ['Accept-Version: v1', 'Authorization: Client-ID YOUR_ACCESS_KEY'],
  ACCESS_KEY: 'VCOnMe1DpUA-YflVb2CuIdDFtorjZPzeH0ijBeaY1fo',
};

export const searchImages = async (query, page = 1, per_page = 12) => {
  const params = new URLSearchParams({
    query,
    client_id: API.ACCESS_KEY,
    per_page,
    page,
    orientation: 'landscape',
  });
  const searchUrl = `${API.BASE}${API.SEARCH}?${params.toString()}`;
  const response = await fetch(searchUrl);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export const fakeSearch = async (query, per_page = 12, page = 1) => {
  return photosQuery;
};
