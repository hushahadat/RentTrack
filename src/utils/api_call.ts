import { decryptData, encryptData } from "./crypto_";
const base_url = process.env.NEXT_PUBLIC_BASE_URl;

export const loginUserByEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY || "";
    const api_key = process.env.NEXT_PUBLIC_API_KEY || "";
    const encryptedBody = encryptData(
      {
        email,
        password,
        api_key,
      },
      secretKey
    );
    let res = await fetch(`${base_url}auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: encryptedBody, decrypt: true }),
    });

    const response = await res.json();
    if (response && response.status === "failed") {
      return response;
    }

    if (response.decrypt) {
      const decryptedData = decryptData(response.data, secretKey);
      return { ...response, data: decryptedData };
    } else {
      return response;
    }
  } catch (er) {
    console.log("====================================");
    console.log("error  ==> ", er);
    console.log("====================================");
  }
};

export const getAppdata = async ({
  userId,
  roleId,
  auth_token,
}: {
  userId: string;
  roleId: string;
  auth_token: string;
}) => {
  try {
    const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY || "";
    const encryptedBody = encryptData(
      {
        userId,
        roleId,
        auth_token,
      },
      secretKey
    );
    const res = await fetch(`${base_url}rent/getAppdata`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: encryptedBody, decrypt: true }),
    });
    const response = await res.json();
    if (response && response.status === "failed") {
      return response;
    }
    if (response.decrypt) {
      const decryptedData = decryptData(response.data, secretKey);
      return { ...response, data: decryptedData };
    } else {
      return response;
    }
  } catch (er) {
    console.log("error    ==== > ", er);
  }
};
