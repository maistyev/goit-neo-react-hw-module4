import axios from "axios";

const API_KEY = "4uaVMDRrjI-qg-sPRegzNVkIkZMREUU6vyrsli8Y_AI";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;

export const fetchImages = async (query, page) => {
  try {
    const response = await axios.get("/search/photos", {
      params: {
        query,
        page,
        per_page: 15,
      },
    });
    console.log("Response data:", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
