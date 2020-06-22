import axios from "axios"

const BggClient = axios.create({
  baseURL: process.env["BGG_API_HOST"],
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
});

const ImageClient = axios.create({
  responseType: 'arraybuffer'
});

export { BggClient, ImageClient }
