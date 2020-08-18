const URL_BASE = " https://reactsessions-ac545.firebaseio.com/";

const getPosts = async () => {
  const response = await fetch(`${URL_BASE}equipocuatro.json`);
  return await response.json();
};

const getPost = async (key) => {
  const response = await fetch(`${URL_BASE}equipocuatro/${key}.json`);
  return await response.json();
};

export { getPosts, getPost };
