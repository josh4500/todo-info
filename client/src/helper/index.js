const key = "AIoKliV2";
const host = "https://todo-info-davinci4500.herokuapp.com";
export async function postData(url = "", data = {}) {
  const response = await fetch(`${host}${url}?key=${key}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
export async function getData(url, header) {
  const response = !header
    ? await fetch(`${host}${url}?key=${key}`, { method: "GET" })
    : await fetch(`${host}${url}?key=${key}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${header}`,
        },
      });
  return response.json();
}
export async function deleteData(url = "") {
  const response = await fetch(`${host}${url}?key=${key}`, {
    method: "DELETE",
  });
  return response.json();
}
export async function patchData(url = "", data = {}) {
  const response = await fetch(`${host}${url}?key=${key}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
export const validateEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email.toLowerCase()
  );
};

export const validatePassword = (password) => {
  return /^[0-9a-zA-Z]+$/.test(password) && password >= 8;
};
