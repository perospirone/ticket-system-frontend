import axios from 'axios';

const token = localStorage.getItem('token');

export const apiWithToken = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: { Authorization: `Bearer ${token}`, Accept: 'application/json'  }
});

export const apiWithoutToken = axios.create({
  baseURL: 'http://localhost:8000/',
});

