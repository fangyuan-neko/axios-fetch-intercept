/**
 * @author: fangyuan
 * @description based on fetch, added functionality of interceptor, API is same as axios interceptor
 */
// configuration set of fetch
let interceptors_req = [];
// array composed of response callbacks
let interceptors_res = [];
function fetchLikeAxios(url, init = {}) {
    if (!init.method) {
        init.method = 'GET';
    }
    interceptors_req.forEach(interceptors => {
        init = interceptors(init);
    });
    return new Promise((resolve, reject) => {
        fetch(url, init).then((res) => {
            interceptors_res.forEach(interceptors => {
                res = interceptors(res);
            });
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
}
fetchLikeAxios.interceptors = {
    request: {
        use: function (callback) {
            interceptors_req.push(callback);
        }
    },
    response: {
        use: function (callback) {
            interceptors_res.push(callback);
        }
    }
};
export default fetchLikeAxios;
