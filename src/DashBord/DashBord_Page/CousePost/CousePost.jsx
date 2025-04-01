import React, { useState } from 'react';
import SecureAxios from '../../../Axios/SecureAxios/SecureAxios';
import Swal from 'sweetalert2';
// import SecureAxios from '../../../Axios/SecureAxios/SecureAxios';


const Img_key = import.meta.env.VITE_IMG_KEY;
const image_hosting = `https://api.imgbb.com/1/upload`;

const CoursePost = () => {
  const axios=SecureAxios();
  const [formData, setFormData] = useState({
    title: '',
    thumbnail: '',
    description: '',
    details: '',
    power_of_choice: '',
    course_requirement: ['', '', '', ''],
    professional_experience: '',
    images: ['', ''],
  });

  const [previewThumbnail, setPreviewThumbnail] = useState(null);
  const [previewImage1, setPreviewImage1] = useState(null);
  const [previewImage2, setPreviewImage2] = useState(null);
  const [imageFile1, setImageFile1] = useState(null);
  const [imageFile2, setImageFile2] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange1 = (e) => {
    const file = e.target.files[0];
    setImageFile1(file);
    setPreviewThumbnail(URL.createObjectURL(file)); // For Thumbnail
  };

  const handleImageChange2 = (e) => {
    const file = e.target.files[0];
    setImageFile2(file);
    setPreviewImage1(URL.createObjectURL(file)); // For Image 1
  };

  const handleImageChange3 = (e) => {
    const file = e.target.files[0];
    setImageFile2(file);
    setPreviewImage2(URL.createObjectURL(file)); // For Image 2
  };

  const handleRequirementChange = (index, value) => {
    const updatedRequirements = [...formData.course_requirement];
    updatedRequirements[index] = value;
    setFormData({
      ...formData,
      course_requirement: updatedRequirements,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let imageUrls = [];
    let thumbnailUrl = '';
    
    // Uploading Thumbnail Image
    if (imageFile1) {
      const formDataThumbnail = new FormData();
      formDataThumbnail.append('image', imageFile1);
      const imgResponse1 = await fetch(`${image_hosting}?key=${Img_key}`, {
        method: 'POST',
        body: formDataThumbnail,
      });
      const imgData1 = await imgResponse1.json();
      if (imgData1.success) {
        thumbnailUrl = imgData1.data.url;
        imageUrls.push(thumbnailUrl);
      }
    }
    
    // Uploading Second Image
    if (imageFile2) {
      const formDataImage2 = new FormData();
      formDataImage2.append('image', imageFile2);
      const imgResponse2 = await fetch(`${image_hosting}?key=${Img_key}`, {
        method: 'POST',
        body: formDataImage2,
      });
      const imgData2 = await imgResponse2.json();
      if (imgData2.success) {
        imageUrls.push(imgData2.data.url);
      }
    }
  
    // Update formData with image URLs
    const updatedFormData = {
      ...formData,
      thumbnail: thumbnailUrl,
      images: imageUrls
    };
  
    
    // Send the data to the backend API
    try {
      const response = await axios.post("/courses", updatedFormData);
   
      Swal.fire({
        title: "Product added successfully!",
        icon: "success",
        draggable: true
      });
      

  
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to add product.",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    
    }
  };
  
  
  
  

  return (
    <div className='max-w-4xl mx-auto p-5  shadow-lg rounded-lg'>
      <h2 className="text-2xl font-semibold text-teal-900 text-center mb-5">Add New Course</h2>
      <form onSubmit={handleSubmit} className=" ">
        {/* Title */}
        <div className="mb-4">
          <label className="block text-yellow-500">Course Title</label>
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
          <label className="block text-yellow-500 font-bold">Upload Thumbnail Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange1}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          />
          {previewThumbnail && (
            <img
              src={previewThumbnail}
              alt="Thumbnail Preview"
              className="mt-4 w-32 h-32 object-cover rounded-lg"
            />
          )}
        </div>


        {/* Description */}
        <div className="mb-4">
          <label className="block text-yellow-500">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg"
            required
          />
        </div>
 {/* Power of Choice */}
        <div className="mb-4">
          <label className="block text-yellow-500">Power of Choice</label>
          <textarea
            name="power_of_choice"
            value={formData.power_of_choice}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Course Requirements */}
        <div className="mb-4">
          <label className="block text-yellow-500">Course Requirements</label>
          {formData.course_requirement.map((requirement, index) => (
            <input
              key={index}
              type="text"
              value={requirement}
              onChange={(e) => handleRequirementChange(index, e.target.value)}
              className="w-full px-4 py-2 mt-1 mb-2 border border-gray-300 rounded-lg"
              required
            />
          ))}
        </div>

        {/* Professional Experience */}
        <div className="mb-4">
          <label className="block text-yellow-500">Professional Experience</label>
          <textarea
            name="professional_experience"
            value={formData.professional_experience}
            onChange={handleInputChange}
            className="w-full block  px-4 py-2 mt-1 border border-gray-300 rounded-lg"
            required
          />
        </div> <br />
      
        {/* Additional fields (Details, Power of Choice, Requirements, etc.) */}

        {/* Image 1 */}
        <div className="mt-4">
          <label className="block text-yellow-500 font-bold">Upload Image 1:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange2}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          />
          {previewImage1 && (
            <img
              src={previewImage1}
              alt="Image 1 Preview"
              className="mt-4 w-32 h-32 object-cover rounded-lg"
            />
          )}
        </div>

        {/* Image 2 */}
        <div className="mt-4">
          <label className="block text-yellow-500 font-bold">Upload Image 2:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange3}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          />
          {previewImage2 && (
            <img
              src={previewImage2}
              alt="Image 2 Preview"
              className="mt-4 w-32 h-32 object-cover rounded-lg"
            />
          )}
        </div>

        {/* Submit Button */}
        <div className="">
          <button type="submit" className="bg-yellow-500 py-3 text-white px-2 mt-3  btn btn-block rounded-lg">
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default CoursePost;
