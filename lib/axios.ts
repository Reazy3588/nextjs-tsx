import { generateHmacSHA512Base64, getCurrentUnixTimestamp } from '@/utils/app.util';
import instant, { InternalAxiosRequestConfig } from 'axios';
import { UAParser } from 'ua-parser-js';

const BASED_URL = 'https://fakestoreapi.com/';
const SECRET_KEY = 'ebb024af-bbd3-4739-87bb-1d24dd5bca4c';

const axios = instant.create({
  baseURL: BASED_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request Interceptor
 */

axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {

    const ua = new UAParser();
    const browser = ua.getBrowser();
    const os = ua.getOS();
    const device = ua.getDevice();
    const currentUnixTimestamp = getCurrentUnixTimestamp();
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const secretVaule = device?.model ?? '' + os.name + os.version + currentUnixTimestamp;
    const secretKeyEncrypted = generateHmacSHA512Base64(SECRET_KEY, secretVaule);

    console.log("DEVICE >>> ", device, " browser >>> ", browser, " os >>> ", os);

    config.headers['Accept'] = 'application/json';
    config.headers['Accept-Language'] = 'en';
    config.headers['Timezone'] = timezone;
    config.headers['Current-Branch-Id'] = '';
    config.headers['Device-Token'] = '';
    config.headers['Notification-Platform'] = 'Onesignal';
    config.headers['Device-Platform'] = browser.name;
    config.headers['Device-Name'] = device.model;
    config.headers['Device-OS'] = os.name;
    config.headers['Device-Version'] = os.version;
    config.headers['App-Version'] = '1.0.0';
    config.headers['Build-Number'] = '250319001';
    config.headers['Secret-Key'] = secretKeyEncrypted ?? '';
    config.headers['Request-Time'] = currentUnixTimestamp ?? '';

    if (typeof window !== 'undefined') {

      const token = localStorage.getItem('accessToken');

      if (token) {

        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Response Interceptor
 */
axios.interceptors.response.use(
  (response) => response.data, // return only data
  (error) => {
    if (error.response?.status === 401) {
      // handle logout / redirect
      console.error('Unauthorized');
    }
    return Promise.reject(error);
  }
);

export default axios;
