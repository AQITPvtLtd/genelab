import { httpAxios } from "../helper/httpHelper";

export async function sendFormData(data) {
  console.log(data);
  try {
    const result = await httpAxios
      .post("/api/contact", data)
      .then((response) => response.data);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
