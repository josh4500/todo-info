const key = "AIoKliV2";
const host = "http://localhost:4000";
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
export async function getData(url) {
  const response = await fetch(`${host}${url}?key=${key}`, { method: "GET" });
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
