import { useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import SecureAxios from "../../Axios/SecureAxios/SecureAxios";
import Swal from "sweetalert2";

// ✅ Environment variable ঠিক করা
const IMG_KEY = import.meta.env.VITE_IMG_KEY;
const IMAGE_HOSTING_URL = `https://api.imgbb.com/1/upload`;

const StudentApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    programType: "",
    degreeLevel: "",
    fathersName: "",
    mothersName: "",
    contactNumber: "",
    email: "",
    presentAddress: "",
    dateOfBirth: "",
    idNumber: "",
    gender: "",
    currentStatus: "",
  });
  const axios= SecureAxios();


  const [previewImages, setPreviewImages] = useState({
    studentPhoto: null,
    passportDocument: null,
  });

  const [imageFiles, setImageFiles] = useState({
    studentPhoto: null,
    passportDocument: null,
  });

  // ✅ ইনপুট চেঞ্জ হ্যান্ডলার
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ ফাইল আপলোড হ্যান্ডলার (Student Photo & Passport Document আলাদা)
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setImageFiles({ ...imageFiles, [name]: files[0] });
      setPreviewImages({ ...previewImages, [name]: URL.createObjectURL(files[0]) });
    }
  };

  // ✅ ফর্ম সাবমিশন
  const handleSubmit = async (e) => {
    e.preventDefault();

    let uploadedImages = {};

    for (let key of Object.keys(imageFiles)) {
      if (imageFiles[key]) {
        const formData = new FormData();
        formData.append("image", imageFiles[key]);

        try {
          const imgResponse = await fetch(`${IMAGE_HOSTING_URL}?key=${IMG_KEY}`, {
            method: "POST",
            body: formData,
          });

          const imgData = await imgResponse.json();

          if (imgData.success) {
            uploadedImages[key] = imgData.data.url;
          } else {
           
            return;
          }
        } catch (error) {
          console.error("Image upload failed:", error);
      
          return;
        }
      }
    }

    const finalData = {
      ...formData,
      studentPhoto: uploadedImages.studentPhoto || "",
      passportDocument: uploadedImages.passportDocument || "",
    };
  
const res= await axios.post('/apply',finalData);
if(res.data){
  Swal.fire({
    title: "submitted successfully!",
    icon: "success",
    draggable: true
  });
}
else{
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Why do I have this issue?</a>'
  });
}



  };

  return (
    <div>
      <div
        className="hero min-h-[350px] relative"
        style={{
          backgroundImage: "url(https://i.ibb.co/yc3wmkV1/slider-3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        <div className="hero-content text-white text-center relative z-10">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold"></h1>
            <h1 className="lg:text-3xl text-2xl font-bold flex gap-2">
              <span className="uppercase text-transparent text-bg-clip bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-600">
                <Typewriter options={{ strings: ["Student Application Form"], autoStart: true, loop: true }} />
              </span>
            </h1>
            <h1 className="flex items-center gap-3 text-xl">
              <Link to={"/"}>Home</Link> <FaAnglesRight /> <span> Student Application Form</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl py-10 mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl text-yellow-500 font-bold mb-4 text-center">Student Application Form</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-teal-800 font-medium">First Name</label>
            <input type="text" name="firstName" onChange={handleChange} className="p-2 border rounded w-full" required />
          </div>

          <div>
            <label className="block text-teal-800 font-medium">Last Name</label>
            <input type="text" name="lastName" onChange={handleChange} className="p-2 border rounded w-full" required />
          </div>

                  {/* Program Type */}
        <div>
          <label className="block text-teal-800 font-medium">Program Type</label>
          <select name="programType" value={formData.programType} onChange={handleChange} className="p-2 border rounded w-full">
            <option>Choose Program Type</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Postgraduate">Postgraduate</option>
          </select>
        </div>

        {/* Degree Level */}
        <div>
          <label className="block text-teal-800 font-medium">Degree Level</label>
          <select name="degreeLevel" value={formData.degreeLevel} onChange={handleChange} className="p-2 border rounded w-full">
            <option>Choose Engineering Level</option>
            <option value="Computer_Science_Engineering">Computer Science And Engineering</option>
            <option value="Software_Engineering">Software Engineering</option>
            <option value="Data_Science">Data Science</option>
            <option value="Artificial_Intelligence">Artificial Intelligence</option>
            <option value="Cloud_Computing">Cloud Computing</option>
            <option value="Cybersecurity">Cybersecurity</option>
          </select>
        </div>

          <div>
            <label className="block text-teal-800 font-medium">Student Photo</label>
            <input type="file" name="studentPhoto" accept="image/*" onChange={handleFileChange} className="w-full p-2 mt-2 border rounded" />
            {previewImages.studentPhoto && <img src={previewImages.studentPhoto} alt="Preview" className="mt-4 w-32 h-32 object-cover rounded-lg" />}
          </div>

          <div>
            <label className="block text-teal-800 font-medium">Passport Document</label>
            <input type="file" name="passportDocument" accept="image/*" onChange={handleFileChange} className="w-full p-2 mt-2 border rounded" />
            {previewImages.passportDocument && <img src={previewImages.passportDocument} alt="Preview" className="mt-4 w-32 h-32 object-cover rounded-lg" />}
          </div>
  {/* Father's Name */}
  <div>
          <label className="block text-teal-800 font-medium">Father's Name</label>
          <input type="text" name="fathersName" value={formData.fathersName} onChange={handleChange} className="p-2 border rounded w-full" required />
        </div>

   {/* Mother's Name */}
   <div>
          <label className="block text-teal-800 font-medium">Mother's Name</label>
          <input type="text" name="mothersName" value={formData.mothersName} onChange={handleChange} className="p-2 border rounded w-full" required />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-teal-800  font-medium">Contact Number</label>
          <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="p-2 border rounded w-full" required />
        </div>

        {/* Email */}
        <div>
          <label className="block text-teal-800 font-medium">Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="p-2 border rounded w-full" required />
        </div>

        {/* Present Address */}
        <div>
          <label className="block text-teal-800 font-medium">Present Address</label>
          <input type="text" name="presentAddress" value={formData.presentAddress} onChange={handleChange} className="p-2 border rounded w-full" required />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-teal-800 font-medium">Date of Birth</label>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="p-2 border rounded w-full" required />
        </div>

        {/* ID Number */}
        <div>
          <label className="block text-teal-800 font-medium">National ID or Passport ID</label>
          <input type="text" name="idNumber" value={formData.idNumber} onChange={handleChange} className="p-2 border rounded w-full" required />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-teal-800 font-medium">Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange} className="p-2 border rounded w-full">
            <option>Choose Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Current Status */}
        <div className="col-span-2">
          <label className="block text-teal-800 font-medium">Current Status</label>
          <select name="currentStatus" value={formData.currentStatus} onChange={handleChange} className="p-2 border rounded w-full">
            <option>Choose Current Status</option>
            <option value="Studying">Studying</option>
            <option value="Graduated">Graduated</option>
          </select>
        </div>


          <div className="col-span-2">
            <button type="submit" className="bg-yellow-500 text-white p-2 rounded w-full font-bold">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentApplicationForm;
