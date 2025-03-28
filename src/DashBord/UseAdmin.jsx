import { useContext } from "react";
import { useQuery } from "react-query";
import SecureAxios from "../Axios/SecureAxios/SecureAxios";
import { AuthContext } from "../Auth/Provider/Auth";

const UseAdmin = () => {
    const { user } = useContext(AuthContext);
    const axios = SecureAxios();
    const { data: isadmin } = useQuery({
        queryKey: [user?.email, 'isadmin'],
        enabled: !!user?.email, // Prevents query from running if user is null
        queryFn: async () => {
            const res = await axios.get(`/user/${user.email}`);
            return res.data?.admin;
        },
    });

    return [isadmin ]; // Ensures a valid return value
};

export default UseAdmin;
