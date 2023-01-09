import React, { useEffect, useState } from "react";

const AddNewsForm = ({
  handleSubmit,
  loading,
  handleImageChange,
  preview,
  uploadButtonText,
}) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/news")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  // console.log(category);
  // category name
  const categoryNames = category.map((category) => category.category);

  //unique category name
  const uniqueCategory = [...new Set(categoryNames)];
  // console.log(uniqueCategory);
  return (
    <>
      <div className="flex justify-center mt-6">
        <div className="w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                Name of title
              </label>

              <input
                className="w-full px-4 py-5 border rounded-md border-gray-300 focus:outline-green-500  text-gray-900"
                name="title"
                id="title"
                type="text"
                placeholder="Enter Your News Titel"
                required
              />
            </div>
            <div>
              <div className="space-y-1 text-sm">
                <label htmlFor="description" className="block text-gray-600">
                  Description
                </label>
                <textarea
                  className="w-full px-4 py-5 border rounded-md border-gray-300 focus:outline-green-500  text-gray-900"
                  name="description"
                  id="description"
                  type="text"
                  placeholder="description"
                  required
                />
              </div>
            </div>

            <div className="flex space-x-4 items-center">
              <label
                htmlFor="image"
                className="p-3 text-center rounded-md cursor-pointer text-gray-500 font-bold border  hover:bg-[#3BB77E]  hover:border-white hover:text-white"
              >
                {uploadButtonText}
                <input
                  type="file"
                  onChange={(event) => handleImageChange(event.target.files[0])}
                  name="image"
                  id="image"
                  accept="image/*"
                  hidden
                />
              </label>
              {preview && (
                <img src={preview} className="w-16 h-16" alt="preview_img" />
              )}
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="useraccount" className="text-sm">
                  Choice Your News Type
                </label>
              </div>
              <select
                name="option"
                className="select select-bordered  w-full bg-white "
              >
                {uniqueCategory.map((data, uxi) => (
                  <option data={data} key={uxi} value={data}>
                    {data}
                  </option>
                ))}
                {/* <option value="seller">Seller</option>
                <option value="buyer">Buyer</option> */}
              </select>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  classes="w-full px-8 py-5 font-semibold rounded-lg bg-[#3BB77E] text-white"
                >
                  Save & Continue
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewsForm;
