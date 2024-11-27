import axios from "axios";
// import { ExceptionType, SMXException } from "../models/SMXException";

export const post = async (apiUrl, bodyContent) => {
  return fetch_api(apiUrl, bodyContent, "POST");
};

export const get = async (apiUrl, bodyContent) => {
  return fetch_api(apiUrl, bodyContent, "GET");
};

const fetch_api = async (apiUrl, bodyContent, actionType) => {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Flex-Url": window.location.pathname,
  };

  try {
    const response = await axios({
      method: actionType.toLowerCase(),
      url: apiUrl,
      headers: headers,
      data: bodyContent,
    });

    // If successful with status code 200
    if (response.status === 200) {
      return response.data;
    } else {
    }
  } catch (err) {
    // Server connection error or unexpected errors

    throw err;
  }
};
