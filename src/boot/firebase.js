import { boot } from "quasar/wrappers";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useAuthStore } from "src/stores/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4FtglklIbvVp3f3fdilvrXHC_A7FVINI",
  authDomain: "app01-cf78b.firebaseapp.com",
  projectId: "app01-cf78b",
  storageBucket: "app01-cf78b.appspot.com",
  messagingSenderId: "572189049393",
  appId: "1:572189049393:web:aebc95faf3ca978a0d8b10",
  measurementId: "G-2ZZJR1YEJE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };

export default boot(async () => {
  const authStore = useAuthStore();
  onAuthStateChanged(auth, (user) => {
    authStore.setUser(user);
  });
});
