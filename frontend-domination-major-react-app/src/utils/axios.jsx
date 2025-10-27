import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODI4MmYwZTE3ZjE5NDQyZjY3Yzc3NTllNzk3ZmIzZiIsIm5iZiI6MTc2MTU3NDMzNi4wMDMsInN1YiI6IjY4ZmY3ZGJmYjgxOTMzMWUyNmJiZjgzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iMwKXZLfsbecdqqRMn8sLo46P7C8ZYuM65BJqNzFNTI",
  },
});

export default instance;
