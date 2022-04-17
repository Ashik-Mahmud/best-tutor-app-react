import { signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
const useFirebase = () => {
  const signInWithSocial = async (provider) => {
    await signInWithPopup(auth, provider).then((res) => {
      console.log(res.user);
    });
  };

  return { signInWithSocial };
};

export default useFirebase;
