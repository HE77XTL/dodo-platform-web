import axios from 'axios';

// const Authorization = localStorage.getItem('Authorization');
// axios.defaults.headers.Authorization = `Bearer ${Authorization}`;
axios.defaults.headers.Authorization = localStorage.getItem('Authorization');


// axios.interceptors.request.use(config => {
//     //设置默认的请求头
//     // 对于 Authorization，在需要更新token 的地方更新就好
//     const Authorization = localStorage.getItem('Authorization');
//     config.headers.Authorization = `Bearer ${Authorization}`;
//     return config;
// }, err => {
//     return Promise.resolve(err);
// });


const baseUrl = 'http://127.0.0.1:7001'

const request = {
    get(url: string, params?: object) {
        //const reqUrl = params ? `${PKGLOBAL.apiBaseUrl}${url}${params}` : `${PKGLOBAL.apiBaseUrl}${url}`;

        // todo
        // 参数处理
        return axios({
            method: 'get',
            url: baseUrl + url
        });
    },
    post(url: string, params?: object) {
        return axios({
            method: 'post',
            url: baseUrl + url,
            data: params
        });
    }
};

export default request




