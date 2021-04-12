export const baseURL = "http://localhost3000";

export const loginRequest = (email, password) => {
  return fetch(baseURL + "/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => res.json());
};

export const getUsers = () => {
  return fetch(baseURL + "/users/allusers").then((res) => res.json());
};

export const deleteUser = (token, id) => {
  return fetch(baseURL + "/users/delete/:id", {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  }).then((res) => res.json());
};

export const updateUser = (token, id, newUserInfo) => {
  return fetch(baseURL + "/users/update/:id", {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserInfo),
  }).then((res) => res.json());
};

export const getMyTodos = (token) => {
  return fetch(baseURL + "/tasks/mytasks", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const postMyTodos = (token, title, details, dueDate, category) => {
  return fetch(baseURL + "/tasks/mytasks", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      details,
      dueDate,
      category,
    }),
  }).then((res) => res.json());
};

export const toggleComplete = (token, id, title, details, dueDate) => {
  return fetch(baseURL + "/tasks/update/completion/:id", {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  }).then((res) => res.json());
};

export const patchTodoInfo = (token, id) => {
  return fetch(baseURL + "/tasks/update/task/:id", {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      title,
      details,
      dueDate,
    }),
  }).then((res) => res.json());
};

export const deleteTodo = (token, id) => {
  return fetch(baseURL + "/tasks/delete/:id", {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  }).then((res) => res.json());
};
