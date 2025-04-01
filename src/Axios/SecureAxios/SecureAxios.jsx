import axios from "axios"

import { AuthContext } from "../../Auth/Provider/Auth"; // ✅ Ensure Correct Import
import { useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Create Secure Axios Instance
const secureAxios = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
});

const SecureAxios = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) {

        return secureAxios;
    }

    const { signOutUser } = authContext;
    const navigate = useNavigate();
    

    // ✅ useCallback to Prevent ESLint Warning
    const handleNavigate = useCallback(() => {
        navigate("/login");
    }, [navigate]);

    useEffect(() => {
        const interceptor = secureAxios.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response?.status === 401 || error.response?.status === 403) {
                    signOutUser()
                        .then(() => handleNavigate()) // ✅ Now it won’t show an error
                       
                }
                return Promise.reject(error);
            }
        );

        return () => {
            secureAxios.interceptors.response.eject(interceptor);
        };
    }, [signOutUser, handleNavigate]); // ✅ useCallback used here

    return secureAxios;
};

export default SecureAxios;
