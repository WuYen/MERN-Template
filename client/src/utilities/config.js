const useLocalServer = true;

const isDev = process.env.NODE_ENV === 'development';

export const dataAPI = isDev && useLocalServer ? 'http://localhost:8088/api' : '';

export default {
  dataAPI,
  isDev,
};
