import axios from "axios"

axios.defaults.baseURL = process.env.SERVER_BASE_URL + "/3";

const api = {
  getConfig: () =>
    axios
      .get(`/configuration`, {
        params: { api_key: process.env.API_KEY }
      })
      .then(res => res.data)
      .catch(error => console.log(error)),
  getLatestMovies: () =>
    axios
      .get(`/discover/movie`, {
        params: {
          api_key: process.env.API_KEY,
          primary_release_year: 2022,
          sort_by: "popularity.desc"
        }
      })
      .then(res => res.data.results)
      .catch(error => console.log(error)),
  getGenres: () =>
    axios
      .get(`/genre/movie/list`, {
        params: { api_key: process.env.API_KEY }
      })
      .then(res => res.data.genres)
      .catch(error => console.log(error)),
  getMovieDetails: (id) =>
    axios
      .get(`/movie/${id}`, {
        params: { api_key: process.env.API_KEY }
      })
      .then(res => res.data)
      .catch(error => console.log(error)),
  getReviews: (id) =>
    axios
      .get(`/movie/${id}/reviews`, {
        params: { api_key: process.env.API_KEY }
      })
      .then(res => res.data)
      .catch(error => console.log(error)),
  getSimilar: (id) =>
    axios
      .get(`/movie/${id}/similar`, {
        params: { api_key: process.env.API_KEY }
      })
      .then(res => res.data)
      .catch(error => console.log(error)),
  getUpcomingMovies: () =>
  axios
    .get(`/movie/upcoming`, {
      params: { api_key: process.env.API_KEY }
    })
    .then(res => res.data.results)
    .catch(error => console.log(error)),
}

export default api
