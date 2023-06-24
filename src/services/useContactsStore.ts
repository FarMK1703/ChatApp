import { defineStore } from "pinia";
import { ref } from "vue";

export const useContactsStore = defineStore("Contacts", () => {
    interface Contact {
        id: number;
        name: string;
        number: string;
    }

    const contacts = ref<Contact[]>([
        {
            id: 0,
            name: "John",
            number: "+1 202-918-2132",
        },

        {
            id: 1,
            name: "Sally",
            number: "+1 505-206-8857",
        },

        {
            id: 2,
            name: "Steve",
            number: "+1 214-351-3992",
        },

        {
            id: 3,
            name: "Mary",
            number: "+1 505-427-5012",
        },
    ]);

    return { contacts };
});
