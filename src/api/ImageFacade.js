// const API_URL = "http://172.105.95.18:5019/api/images";
const API_URL = "http://localhost:5019/api/images";

const ImageFacade = {

  saveImage: async (image) => {
    try {
      const token = JSON.parse(sessionStorage.getItem("loginData"))?.token;
  
      if (!token) {
        throw new Error("Not authenticated");
      }
  
      const response = await fetch(`${API_URL}/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          imageUrl: image.url,
          title: image.alt || "Untitled",
          photographer: image.photographer,
          sourceLink: image.profileLink,
        }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to save image");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Save Image Error:", error);
      throw error;
    }
  },

  getSavedImages: async () => {
    try {
      const token = JSON.parse(sessionStorage.getItem("loginData"))?.token;
  
      if (!token) {
        throw new Error("Not authenticated");
      }
  
      const response = await fetch("http://localhost:5019/api/images/mine", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to fetch saved images");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Get Saved Images Error:", error);
      throw error;
    }
  },  

  deleteSavedImage: async (imageId) => {
    try {
      const token = JSON.parse(sessionStorage.getItem("loginData"))?.token;
  
      if (!token) throw new Error("Not authenticated");
  
      const response = await fetch(`http://localhost:5019/api/images/${imageId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to delete image");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Delete Image Error:", error);
      throw error;
    }
  },  
  
};

export default ImageFacade;
