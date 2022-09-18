const BASE_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "?api_key=e2870b1d2bcde1e9ce0efac1ebcac75f";

const GET = async(type,page,genre) => {
  const res = await fetch(BASE_URL+type+API_KEY+'&page='+page+'&with_genres='+genre+'&language=en-US');
  return await res.json();
}
const SEARCH = async(query,page) => {

  const res = await fetch(`https://api.themoviedb.org/3/search/movie/${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`);
  return await res.json();
}

export { GET, SEARCH };