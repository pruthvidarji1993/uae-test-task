import CryptoJS from 'crypto-js';

/**
 * @name encyptData
 * @description this funcation will encrypt the given data
 */
export const encyptData = (data) => {
  let b64 = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    process.env.REACT_APP_CRYPTO_KEY
  ).toString();
  let e64 = CryptoJS.enc.Base64.parse(b64);
  let eHex = e64.toString(CryptoJS.enc.Hex);
  return eHex;
};

/**
 * @name decryptData
 * @description this funcation will decrypt the given data
 */
export const decryptData = (ciphertext) => {
  let reb64 = CryptoJS.enc.Hex.parse(ciphertext);
  let bytes = reb64.toString(CryptoJS.enc.Base64);
  let decrypt = CryptoJS.AES.decrypt(bytes, process.env.REACT_APP_CRYPTO_KEY);
  let plain = decrypt?.toString(CryptoJS.enc.Utf8);
  plain = JSON?.parse(plain);
  return plain;
};
