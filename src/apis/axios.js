import axios from "axios";

export const axiosInstanse = axios.create({
  baseURL: "https://api-factory.simbirsoft1.com/api",
  headers: {
    "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
    "Content-Type": "application/json",
    "Authorization": "Basic aGFzaDo0Y2JjZWE5NmRl"
  },
})
