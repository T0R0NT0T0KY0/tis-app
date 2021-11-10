import {base_api_url} from "../envs.js";

export const query = window.location.search ?? "";

export const createURL = (url) => base_api_url + url + query;
