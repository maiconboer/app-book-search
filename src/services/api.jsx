import axios from 'axios';

export const apiAllBooks = axios.create({
  baseURL: `https://www.googleapis.com/books/v1/volumes?q=`
})

export const apiDetailBook = axios.create({
  baseURL: `https://www.googleapis.com/books/v1/volumes`
})
