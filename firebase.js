import { initializeApp } from "firebase/app";
import { addDoc,
      collection,
      getFirestore } from 'firebase/firestore'
import { createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut } from "firebase/auth";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: "netflix-clone-706b6",
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSEGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

const signup=async (name,email,password)=>{
    try {
        const response=await createUserWithEmailAndPassword(auth,email,password)
        const user=response.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        })
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
}

const login=async (email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error);
        toast.error(error,message);
    }
}

const logout = async ()=>{
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Logout error:", error.message);
  }
}


export { auth , db , login , signup , logout };