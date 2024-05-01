import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const isAuthenticated = computed(() => !!user.value);

  const setUser = (userData) => {
    user.value = userData;
    if (userData) {
      console.log(userData.uid);
      user.value = {
        uid: userData.uid,
        photoURL: userData.photoURL,
        displayName: userData.displayName,
        email: userData.email,
      };
    } else {
      user.value = null;
    }
    console.log("userData: ", user.value.uid);
  };

  return {
    user,
    isAuthenticated,
    setUser,
  };
});
