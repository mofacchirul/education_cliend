import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Img_key = import.meta.env.VITE_IMG_KEY;
const image_hosting = `https://api.imgbb.com/1/upload`;

const Admin_blog = () => {
  const [formData, setFormData] = useState({
    title: "",
    thumbnail: "",
    description: "",
    details: "",
    author: "",
    published_date: "",
    images: [],
  });

  const [previewThumbnail, setPreviewThumbnail] = useState(null);
  const [previewImage1, setPreviewImage1] = useState(null);
  const [previewImage2, setPreviewImage2] = useState(null);
  const [previewImage3, setPreviewImage3] = useState(null);
  const [imageFile1, setImageFile1] = useState(null);
  const [imageFile2, setImageFile2] = useState(null);
  const [imageFile3, setImageFile3] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e, setImageFile, setPreview) => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrls = [];
    let thumbnailUrl = "";

    const uploadImage = async (imageFile) => {
      if (!imageFile) return null;
      const formDataImage = new FormData();
      formDataImage.append("image", imageFile);
      const response = await fetch(`${image_hosting}?key=${Img_key}`, {
        method: "POST",
        body: formDataImage,
      });
      const imgData = await response.json();
      return imgData.success ? imgData.data.url : null;
    };

    // Upload Thumbnail
    thumbnailUrl = await uploadImage(imageFile1);
    if (thumbnailUrl) imageUrls.push(thumbnailUrl);

    // Upload Other Images
    const image1Url = await uploadImage(imageFile2);
    const image2Url = await uploadImage(imageFile3);
    if (image1Url) imageUrls.push(image1Url);
    if (image2Url) imageUrls.push(image2Url);

    // Update formData
    const updatedFormData = {
      ...formData,
      thumbnail: thumbnailUrl,
      images: imageUrls.slice(1), // First is Thumbnail, rest are Images array
    };

  

    try {
      const response = await axios.post("https://education-server-gilt.vercel.app/blog", updatedFormData);
   
      Swal.fire({
        title:"✅ Blog added successfully!",
        icon: "success",
        draggable: true
      });
     
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "❌ Failed to add blog.",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-5">Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-bold">Blog Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Thumbnail Image */}
        <div className="mt-4">
          <label className="block font-bold">Upload Thumbnail Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setImageFile1, setPreviewThumbnail)}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          />
          {previewThumbnail && <img src={previewThumbnail} alt="Thumbnail Preview" className="mt-4 w-32 h-32 object-cover rounded-lg" />}
        </div>

        <div className="mb-4">
          <label className="block font-bold">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block font-bold">Details:</label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleInputChange}
            className="w-full p-2 border mb-2"
            required
          />
        </div>

        <div>
          <label className="block font-bold">Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            className="w-full p-2 border mb-2"
            required
          />
        </div>

        <div>
          <label className="block font-bold">Published Date:</label>
          <input
            type="date"
            name="published_date"
            value={formData.published_date}
            onChange={handleInputChange}
            className="w-full p-2 border mb-2"
            required
          />
        </div>

        {/* Image 1 */}
        <div className="mt-4">
          <label className="block font-bold">Upload Image 1:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setImageFile2, setPreviewImage1)}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          />
          {previewImage1 && <img src={previewImage1} alt="Image 1 Preview" className="mt-4 w-32 h-32 object-cover rounded-lg" />}
        </div>

        {/* Image 2 */}
        <div className="mt-4">
          <label className="block font-bold">Upload Image 2:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setImageFile3, setPreviewImage2)}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          />
          {previewImage2 && <img src={previewImage2} alt="Image 2 Preview" className="mt-4 w-32 h-32 object-cover rounded-lg" />}
        </div>

        {/* Image 3 */}
        <div className="mt-4">
          <label className="block font-bold">Upload Image 3:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setImageFile3, setPreviewImage3)}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          />
          {previewImage3 && <img src={previewImage3} alt="Image 3 Preview" className="mt-4 w-32 h-32 object-cover rounded-lg" />}
        </div>

        <div>
          <button type="submit" className="bg-yellow-500 py-3 text-white px-2 mt-3 btn btn-block rounded-lg">
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin_blog;
