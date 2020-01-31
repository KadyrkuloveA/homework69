import axios from 'axios';

const axiosTeahouse = axios.create({
    baseURL: 'https://teahouse-js5.firebaseio.com/'
});

axiosTeahouse.interceptors.request.use(req => {
    return req;
});

axiosTeahouse.interceptors.response.use(res => {
    return res;
}, err => {
    throw err;
});

export default axiosTeahouse;