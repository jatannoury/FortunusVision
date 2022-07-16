import axios from "axios";
const hostname = "192.168.100.192";
const portname = 3001;
const BACKEND_URL = `http://${hostname}:${portname}/api/v1`;
axios.defaults.baseURL = BACKEND_URL;
import { useState } from "react";
let data;
export async function registerUser(email, password, username) {
  const response = await axios({
    method: "post",
    url: "/user/register",
    data: {
      email: email,
      password: password,
      userName: username,
    },
  }).then(
    (response) => {
      data = response.data;
      response.data;
    },

    (error) => {
      data = error;
      throw error;
    }
  );

  return data;
}

export async function signUserIn(email, password) {
  const response = await axios({
    method: "post",
    url: "/user/signIn",
    data: {
      email: email,
      password: password,
    },
  })
    .then((response) => {
      data = response.data;
      response.data;
    })
    .catch((error) => {
      data = error;
      console.log(error);
    });
  return data;
}

export async function getExperts(type) {
  const response = await axios({
    method: "post",
    url: "/user/getExperts",
    data: {
      userType: type,
    },
  })
    .then((response) => {
      data = response.data;
      response.data;
    })
    .catch((error) => {
      data = error;
      console.log(error);
    });
  return data;
}
