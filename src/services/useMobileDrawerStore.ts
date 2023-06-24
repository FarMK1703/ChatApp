import { defineStore } from "pinia";
import { ref } from "vue";

export const useMobileDrawer = defineStore("mobileDrawer", () => {
    const isActive = ref<boolean>(false);

    const toggleDrawer = () => {
        isActive.value = !isActive.value;
        console.log(isActive.value);
    };

    return { toggleDrawer, isActive };
});
