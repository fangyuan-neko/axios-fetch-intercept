import fetchLikeAxios from "asios-fetch-intercept";

// a request interceptor
fetchLikeAxios.interceptors.request.use(function (config) {
  // do something before request is sent
  return config;
});

// a response interceptor
fetchLikeAxios.interceptors.response.use(function (response) {
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
