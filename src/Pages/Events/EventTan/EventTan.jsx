import { useQuery } from "react-query";
import Publicaxios from "../../../Axios/Publicaxios/Publicaxios";

const EventsTan = () => {
    const axios = Publicaxios();
    const { data: events,isLoading:loding } = useQuery({
        queryKey: ['events'],
        queryFn: async () => {
            const res = await axios.get('/events');
          
            return res.data; 
        }
    });

    return [events,loding]; 
};

export default EventsTan;
