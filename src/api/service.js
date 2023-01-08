export const imageUpload = async (image) => {
  // console.log(image);
  if (image) {
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=a2eac3412bfd4e6bda4a2aa756954a26`;

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data;
  }
};
// add news
export const addNews = async (publishedData) => {
  const response = await fetch(`http://localhost:8000/news`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("news-token")}`,
    },
    body: JSON.stringify(publishedData),
  });

  const data = await response.json();
  return data;
};
