# axios-fetch-intercept

To install:

```bash
bun add axios-fetch-intercept # bun
pnpm add axios-fetch-intercept # pnpm
```

Example:

```javascript
import fetchLikeAxios from "axios-fetch-intercept";

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
```

This project was created using `bun init` in bun v1.1.33. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
