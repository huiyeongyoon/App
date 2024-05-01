import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "src/boot/firebase";

// 구글 로그인
export async function loginAuthGoogle() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
}
