import axios from "axios";

export const CreateModule = (payload: { name: string }) =>
  axios.post("http://localhost:4000/createModule", payload);
