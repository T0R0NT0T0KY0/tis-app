import {base_api_url} from "../envs.js";

const query = window.location.search ?? "";

export const createURL = (url) => base_api_url + url + query;
