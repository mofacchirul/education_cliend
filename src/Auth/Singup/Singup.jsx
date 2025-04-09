import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import singups from "../../Lottie/singup.json";
import { FaEye, FaRegEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../Provider/Auth";
import Swal from "sweetalert2";
import Google from "../Google/Google";
import SecureAxios from "../../Axios/SecureAxios/SecureAxios";


const SignupForm = () => {
  const [view, setView] = useState(true);
  const [views, setViews] = useState(true);
  const { singup } = useContext(AuthContext);
const axios= SecureAxios();

const location = useLocation();
const navigate = useNavigate();

const from = location.state || '/';
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user types
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    if (!validatePassword(formData.password)) {
        setError("Password must contain at least 1 uppercase, 1 lowercase, 1 number, and be 6+ characters long.");
        return;
      }

    singup(formData.email,formData.password)
    .then(() => {
         const userInfos ={
          email: formData.email,
          name:formData.name
         }
           
      axios.post('/user',userInfos)

        Swal.fire({
          title: `${formData.email} signed up successfully!`,
          icon: "success",
          draggable: true,
        });
        navigate(from)

      })
   
    // Backend logic goes here
  };

  return (
    <div className="flex justify-center lg:flex-row-reverse items-center h-screen bg-gray-100">
      <div className="w-96 hidden lg:block">
        <Lottie animationData={singups} />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4 text-yellow-500">
          Sign Up
        </h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-teal-800 font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-teal-800 font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          {/* Password Field */}
          <div className="relative">
            <label className="block text-teal-800 font-semibold">Password</label>
            <input
              type={view ? "password" : "text"}
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-[70%] transform -translate-y-1/2 text-teal-800 text-lg"
              onClick={() => setView(!view)}
            >
              {view ? <FaRegEyeSlash /> : <FaEye />}
            </button>
          </div>
          {/* Confirm Password Field */}
          <div className="relative">
            <label className="block text-teal-800 font-semibold">
              Confirm Password
            </label>
            <input
              type={views ? "password" : "text"}
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword} // Correct value binding
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-[70%] transform -translate-y-1/2 text-teal-800 text-lg"
              onClick={() => setViews(!views)}
            >
              {views ? <FaRegEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-amber-500 text-white py-2 rounded-tr-4xl rounded-bl-4xl  hover:bg-teal-800 transition"
          >
            Sign Up
          </button>

          <div>
            <Google></Google>
          </div>
          <div className="text-center">
            <h3 className="text-xl text-teal-800 font-semibold">
              Create your account
            </h3>
            <p className="text-teal-800">
              Have an account?{" "}
              <Link to="/login" className="underline text-yellow-500">
                Log in now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
