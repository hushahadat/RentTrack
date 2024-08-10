// EncryptionUtils.ts
import * as CryptoJS from "crypto-js";
// Encrypt data
export const encryptData = (data: object, secretKey: string): string => {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    secretKey
  ).toString();
  return ciphertext;
};

// Decrypt data
export const decryptData = (ciphertext: string, secretKey: string): object => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};
