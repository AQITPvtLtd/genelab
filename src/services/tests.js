import { httpAxios } from "../helper/httpHelper";

export async function getAllTests() {
  try {
    const result = await httpAxios
      .get("/api/getTests")
      .then((response) => response.data);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
