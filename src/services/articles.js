import { httpAxios } from "../helper/httpHelper";

export async function getAllArticles() {
  try {
    const result = await httpAxios
      .get("/api/getarticles")
      .then((response) => response.data);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
