import axios from 'axios';

export const getForms = async (url: string) => {
  console.log(`${url}form/all`);
  const json = await axios({
    method: 'GET',
    url: `${url}form/all`,
  });
  return json;
};

export const postForm = async (url: string, name: string, email: string) => {
  const json = await axios({
    method: 'POST',
    url: `${url}form/submit_form`,
    params: {
      name,
      email,
    },
  });
  return json;
};
