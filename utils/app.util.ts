import * as CryptoJS from 'crypto-js';
import { format } from 'date-fns';
const AES_ENCRYPTION_KEY= 'tg0m1k1hgYJmKkq2WiQNMoE0zjLjdvDuspGqnDoFRhk=';

// Generate HmacSHA512
export function generateHmacSHA512Base64(key: string, data: string): string {

  return CryptoJS.HmacSHA512(data, key).toString(CryptoJS.enc.Base64);
}

export function getCurrentUnixTimestamp(): number {

  return Number(Date.parse(format(new Date(), 'yyyy-MM-dd HH:mm:ss'))) / 1000;
}

/**
 * Encrypt JSON data using AES-128-ECB
 */
export function aesEncrypt(data: any): string {

  const key = CryptoJS.enc.Base64.parse(AES_ENCRYPTION_KEY);

  const jsonData = JSON.stringify(data);

  const encrypted = CryptoJS.AES.encrypt(jsonData, key, {

    mode: CryptoJS.mode.ECB,

    padding: CryptoJS.pad.Pkcs7,
  });

  return encrypted.toString(); // Return encrypted data as Base64 string
}