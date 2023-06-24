import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalIsActiveStore = defineStore("modalIsActive", () => {
    const modalIsActive = ref<boolean>(false);

    const toggleModal = (action: string): void => {
        switch (action) {
            case "close":
                modalIsActive.value = false;
                console.log("work");
                break;

            case "open":
                modalIsActive.value = true;
                break;
        }
    };

    return { modalIsActive, toggleModal };
});
