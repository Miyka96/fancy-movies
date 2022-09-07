const BASE_URL = "https://api.themoviedb.org/3/movie/popular";
const API_KEY = "?api_key=e2870b1d2bcde1e9ce0efac1ebcac75f";

const GET = async(page,genre) => {
  const res = await fetch(BASE_URL+API_KEY+'&page='+page+'&with_genres='+genre);
  return await res.json()
  .then(console.log(res));
}

export { GET };