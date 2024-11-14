/**
 * @author: fangyuan
 * @description based on fetch, added functionality of interceptor, API is same as axios interceptor
 */
declare function fetchLikeAxios(url: string, init?: RequestInit): Promise<RequestInit>;
declare namespace fetchLikeAxios {
    var interceptors: {
        request: {
            use: (callback: (_: RequestInit) => {}) => void;
        };
        response: {
            use: (callback: (_: ResponseInit) => {}) => void;
        };
    };
}
export default fetchLikeAxios;
