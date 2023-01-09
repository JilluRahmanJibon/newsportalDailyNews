import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { addNews, imageUpload } from "../../../api/service";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import AddNewsForm from "./AddNewsForm";

const AddNews = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("");
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  // const [selected, setSelected] = useState(new Date());
  // const date = format(selected, "Pp");
  // console.log(date);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const option = form.option.value;
    const description = form.description.value;
    const image = event.target.image.files[0];
    const date = useState(new Date());

    // console.log(product, price, shopName, rating, category, image, description);
    setLoading(true);
    imageUpload(image)
      .then((res) => {
        const publishedData = {
          title,
          description,
          category: option,
          image: res.data.display_url,
          email: user?.email,
          author: {
            name: user?.displayName,
            img: user?.photoURL,
            email: user?.email,
            published_date: date,
          },
        };
        // console.log(publishedData);
        addNews(publishedData).then((data) => {
          // console.log(data);
          setLoading(false);
          toast.success("Published Successfuly !");
          navigate("/");
        });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleImageChange = (image) => {
    // console.log(image);
    setPreview(window.URL.createObjectURL(image));
    setUploadButtonText(image?.name?.slice(0, 30));
  };
  return (
    <div className="lg:px-20 md:px-10">
      <h1 className="text-3xl font-bold text-gray-800  text-center">
        Add News
      </h1>
      <AddNewsForm
        handleSubmit={handleSubmit}
        loading={loading}
        handleImageChange={handleImageChange}
        preview={preview}
        uploadButtonText={uploadButtonText}
      />
    </div>
  );
};

export default AddNews;
