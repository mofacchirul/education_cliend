import { useQuery } from "react-query";
import Publicaxios from "../../../Axios/Publicaxios/Publicaxios";

const Coursestan = () => {
    const axios = Publicaxios();
    const { data: course,isLoading:loding } = useQuery({
        queryKey: ['course'],
        queryFn: async () => {
            const res = await axios.get('/courses');
         
            return res.data; 
        }
    });

    return [course,loding]; 
};

export default Coursestan;
