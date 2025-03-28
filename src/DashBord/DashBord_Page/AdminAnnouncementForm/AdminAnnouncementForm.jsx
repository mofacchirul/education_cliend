import { useState } from "react";
import SecureAxios from "../../../Axios/SecureAxios/SecureAxios";
import Swal from "sweetalert2";



const AdminAnnouncementForm = () => {
 const axios=SecureAxios()
  const [announcement, setAnnouncement] = useState({
    title: "",
    category: "",
    description: "",
    date: ""
  });

  const handleChange = (e) => {
    setAnnouncement({ ...announcement, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post("/announcements", announcement);
      Swal.fire({
              title:"✅Announcement posted successfully",
              icon: "success",
              draggable: true
            });
  
      setAnnouncement({ title: "", category: "", description: "", date: "" });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error posting announcement",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
     
    }
  };

  return (
    <div className="max-w-lg py-10 mx-auto bg-white p-6 shadow-md rounded-md">
      <h2 className="text-xl font-bold  mb-4">Post New Announcement</h2>
      <form onSubmit={handleSubmit}>
        <label className="block font-semibold">Title</label>
        <input name="title" value={announcement.title} onChange={handleChange} placeholder="Enter title"             className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg" required />
        
        <label className="block font-semibold">Category</label>
        <input name="category" value={announcement.category} onChange={handleChange} placeholder="Enter category"             className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg" required />
        
        <label className="block font-semibold">Description</label>
        <textarea name="description" value={announcement.description} onChange={handleChange} placeholder="Enter description"             className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg" required />
        
        <label className="block font-semibold">Date</label>
        <input type="date" name="date" value={announcement.date} onChange={handleChange}             className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg" required />
        
        <button type="submit" className="bg-yellow-500 btn btn-block mt-2 text-white px-4 py-2 rounded-md">Post Announcement</button>
      </form>
    </div>
  );
};

export default AdminAnnouncementForm;