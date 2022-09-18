import axios from "axios";

const baseURL = "https://swapi.dev/api";

export const fetcher = (url: string, search: string) =>
  axios
    .get(url, { baseURL: baseURL, params: { search: search } })
    .then((res) => res.data);
