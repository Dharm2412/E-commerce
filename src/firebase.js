// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCwWEKyRVO83aH31HUpFq1SG3TJBRsE0Qg",
  authDomain: "trand-mall.firebaseapp.com",
  databaseURL: "https://trand-mall-default-rtdb.firebaseio.com",
  projectId: "trand-mall",
  storageBucket: "trand-mall.appspot.com",
  messagingSenderId: "879751164360",
  appId: "1:879751164360:web:98122e82badc8deda3d0fd",
  measurementId: "G-PG3NDJT56Z",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);

export { database, storage };
