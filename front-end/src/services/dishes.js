import axios from 'axios';

const baseURL = 'http://localhost:4000';

const getDishes = async () => {
  const result = await axios.get(baseURL);

  return result.data;
};

const dishes = { getDishes };

export default dishes;
