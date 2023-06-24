import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserNickNameStore = defineStore("userNickName", () => {
    const userNickName = ref<string>("");
    const setUserNickName = (NickName: string) => {
        userNickName.value = NickName;
    };

    return { userNickName, setUserNickName };
});
