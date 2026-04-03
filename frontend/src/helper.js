export const toggleClass = (el,className) => {
  let elem = document.querySelector(el);
  elem.classList.toggle(className);
};

export const removeClass = (el,className) => {
  let elem = document.querySelector(el);
  elem.classList.remove(className);
};


export const api_base_url = "http://localhost:8000";

export const getAuthToken = () => localStorage.getItem("token");

export const getJsonHeaders = (withAuth = false) => {
  const headers = {
    "Content-Type": "application/json"
  };

  if (withAuth) {
    const token = getAuthToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }

  return headers;
};