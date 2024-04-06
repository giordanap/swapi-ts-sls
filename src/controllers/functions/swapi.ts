import axios from "axios";
import { URLConstants } from "../constants/url";

const getValue = async (url: string, field: string) => {
  const { data } = await axios({ method: "get", url });

  return data[field];
};

const getPeople = async () => {
  const url = URLConstants.URL;
  const { data } = await axios({ method: "get", url });
  const { results } = data;

  return results;
};

export { getValue, getPeople };
