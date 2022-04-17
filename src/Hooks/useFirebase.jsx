import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { auth } from "../Firebase/Firebase.config";
const useFirebase = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const signInWithSocial = async (provider) => {
    await signInWithPopup(auth, provider)
      .then((res) => {
        toast.success("User LoggedIn successfully done.");
      })
      .catch((err) => {
        toast.error(err.message.split(":")[1]);
        console.log(err);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      user?.uid ? setIsAuth(true) : setIsAuth(false);
    });
  }, []);

  return { signInWithSocial, isAuth, user, setIsAuth };
};

export default useFirebase;
