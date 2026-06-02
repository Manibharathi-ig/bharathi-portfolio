import axios from "axios";

// const API = "http://localhost:5000/api/contact";

const API =
  "https://bharathi-portfolio-api.onrender.com/api/contact";

export const getContacts = async () => {
  const response = await axios.get(API);
  return response.data;
};