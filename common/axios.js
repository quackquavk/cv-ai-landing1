import axios from 'axios';
console.log(process.env.NEXT_PUBLIC_SCRUM_API_URL , 'process.env.NEXT_PUBLIC_SCRUM_API_URL')
export const scrumAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SCRUM_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

scrumAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log("scrumAxios", error);
    return Promise.reject(error);
  }
);

scrumAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Scrum API Error:', error.response?.data || error.message);
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);
