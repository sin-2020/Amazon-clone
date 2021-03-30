import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL:"https://us-central1-clone-6e341.cloudfunctions.net/api",
  
  // "http://localhost:5001/clone-e2b17/us-central1/api", //Local URL
});

export default instance;
