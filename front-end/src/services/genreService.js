import htttp from "./httpService";
import { apiUrl } from "../config.json";

export function getGenres() {
  return htttp.get(apiUrl + "/genres");
}
