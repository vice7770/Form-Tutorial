export const BASE_URL = "http://localhost:4000/Form";

export interface Form {
  name: string;
  age: string;
}

export const getForm = async (): Promise<Form[]> =>
  fetch(BASE_URL).then((res) => res.json());

export const updateForm = async (form: Form): Promise<Form> =>
  fetch(`${BASE_URL}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  }).then((res) => res.json());