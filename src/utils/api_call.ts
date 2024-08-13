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
    let res = await fetch("/api/login", {
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
    console.log("error", er);
    console.log("====================================");
  }
};

const getAppdata = async ({ body, token }: { body: any; token: string }) => {
  try {
    const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY || "";
    const encryptedBody = encryptData(
      {
        body,
        auth_token: token,
      },
      secretKey
    );
    const res = await fetch(`${base_url}arent/getAppdata`, {
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
    console.log("error", er);
  }
};
