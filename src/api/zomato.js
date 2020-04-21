import axios from 'axios';

export default axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: {
    'user-key': '3cc1806b4a58a3a7a7f247afa358c8ec'
  }
});