import axios from 'axios';

const submitCode = async (code) => {
  const response = await axios.post('http://localhost:5000/submit', { code });
  return response.data;
};

export default submitCode;
