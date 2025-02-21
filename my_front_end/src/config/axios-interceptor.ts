import axios from 'axios';

import { useStore } from '@u3u/vue-hooks';

const TIMEOUT = 1000000;
const onRequestSuccess = config => {
  const token = localStorage.getItem(NAME + '-jhi-authenticationToken') || sessionStorage.getItem(NAME + '-jhi-authenticationToken');
  if (token) {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = `Bearer ${token}`;

    const functionId = useStore().value.getters.currentFunctionId;
    if (functionId) {
      config.headers['X-FUNCTION-ID'] = functionId;
    }
  }
  config.timeout = TIMEOUT;
  config.url = `${config.url}`;
  return config;
};
const setupAxiosInterceptors = (onUnauthenticated, onServerError) => {
  const onResponseError = err => {
    const status = err.status || err.response.status;
    if (status === 403 || status === 401) {
      return onUnauthenticated(err);
    }
    if (status >= 500) {
      return onServerError(err);
    }
    return Promise.reject(err);
  };

  if (axios.interceptors) {
    axios.interceptors.request.use(onRequestSuccess);
    axios.interceptors.response.use(res => res, onResponseError);
  }
};

export { onRequestSuccess, setupAxiosInterceptors };
