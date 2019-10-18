import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            baseURL: 'http://localhost:5000',
            Authorization: token
        }
    })
}

export default axiosWithAuth;