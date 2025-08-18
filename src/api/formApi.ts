import axios from 'axios';

export const getForms = async (url: string) => {
  const json = await axios({
    method: 'GET',
    url: `${url}/form/all`,
  });
  return json;
};

export const postForm = async (url: string, name: string, email: string) => {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  const json = await axios({
    method: 'POST',
    url: `${url}/form/submit_form`,
    data: formData,
    params: {
      name,
      email,
    },
  });
  return json;
};
