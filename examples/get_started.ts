import fetchLikeAxios from "fetchLikeAxios";

// a request interceptor
fetchLikeAxios.interceptors.request.use((config: RequestInit) => {
  // do something before request is sent
  return config;
});

// a response interceptor
fetchLikeAxios.interceptors.response.use((response: ResponseInit) => {
  // do something with response data
  // be like:
  switch (response.status) {
    case 200:
      console.log("no error");
      break;
  }
  return response;
});

fetchLikeAxios("http://bing.com/");
