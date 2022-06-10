import { initializeApp } from "firebase/app";
import { collection, getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB52MQgHBAy6HnZr50w30wOc81Kt5HDqTY",
    authDomain: "panuchis-2f308.firebaseapp.com",
    projectId: "panuchis-2f308",
    storageBucket: "panuchis-2f308.appspot.com",
    messagingSenderId: "231618548307",
    appId: "1:231618548307:web:077063c4916ab06308eca6",
    measurementId: "G-YKVJV2QD8V"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth();

const productsCollection = collection(db, "products");


export { db, auth, storage, productsCollection };