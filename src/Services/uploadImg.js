import axios from "axios";
import BACKEND_URI from "../../public/backend/uri.js"
const uploadImage = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append("image", imageFile);
    const response = await axios.post(
      `${BACKEND_URI}/api/v1/uploadimage`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data.data.secure_url;
  } catch (err) {
    return err.message;
  }
};

export default uploadImage