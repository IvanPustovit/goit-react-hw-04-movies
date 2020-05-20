import axios from "axios";
import { ApiKey } from "../api";

export const fetchHomePage = async () => {
  return await axios
    .get(`/trending/movie/week?api_key=${ApiKey}`)
    .then((res) => res.data.results);
};

export const fetchMovieDetails = (id) => {
  return axios.get(`/movie/${id}?api_key=${ApiKey}`).then((res) => res.data);
};

export const fetchCast = (id) => {
  return axios
    .get(`/movie/${id}/credits?api_key=${ApiKey}`)
    .then((res) => res.data);
};

export const fetchReviews = (id) => {
  return axios
    .get(`/movie/${id}/reviews?api_key=${ApiKey}`)
    .then((res) => res.data);
};

export const fetchMoviesSearch = (query) => {
  return axios
    .get(`/search/movie?api_key=${ApiKey}&query=${query}`)
    .then((res) => res.data);
};
