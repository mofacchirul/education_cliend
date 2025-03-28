
import SecureAxios from '../../../Axios/SecureAxios/SecureAxios';
import { useQuery } from 'react-query';

const UseAdmin =  () => {
  
     const axios = SecureAxios();
     const {data:admin_status}=useQuery({
        queryKey:['admin_status'],
        queryFn: async ()=>{
                const res = await axios.get('/admin-Stutus');
                return res.data;
        }
     }) 
     return [admin_status];
};

export default UseAdmin;