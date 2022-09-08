const BASE_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "?api_key=e2870b1d2bcde1e9ce0efac1ebcac75f";

const GET = async(type,page,genre) => {
  const res = await fetch(BASE_URL+type+API_KEY+'&page='+page+'&with_genres='+genre);
  return await res.json();
}

export { GET };