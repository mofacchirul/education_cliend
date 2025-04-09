import axios from 'axios';

const axiossecure= axios.create({
    baseURL:'https://education-server-gilt.vercel.app'
})
const Publicaxios = () => {
    return axiossecure
};

export default Publicaxios;