import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useChatsListStore = defineStore("chatsList", () => {
    interface Chat {
        id: number;
        name: string;
        messages:
            | [
                  {
                      msg?: string;
                      sender?: string;
                  }
              ]
            | [];
    }

    let id: number = 0;

    const currentChatName = ref<string>("John");

    const setCurrentChatName = (name: string) => {
        currentChatName.value = name;
    };

    const chats = ref<Chat[]>([
        {
            id: id,
            name: "John",
            messages: [
                {
                    msg: "Hello, how are you?",
                    sender: "John",
                },
            ],
        },
    ]);

    const addChat = (chatName: string): void => {
        const found = chats.value.find((item) => {
            return item.name === chatName;
        });
        if (!found) {
            chats.value.push({
                id: id,
                name: chatName,
                messages: [],
            });

            id++;
        }
    };

    const sendMessageToChat = (
        chatName: string,
        user_message: string,
        sender: string
    ) => {
        const index = chats.value.map((chat) => chat.name).indexOf(chatName);
        if (user_message !== "") {
            chats.value[index].messages.push({
                sender: sender,
                msg: user_message,
            });
        }

        console.log(chats.value[index]);
    };

    const getChatByName = computed(() => {
        console.log("dad");
        const index = chats.value
            .map((chat) => chat.name)
            .indexOf(currentChatName.value);

        return chats.value[index];
    });

    return {
        chats,
        addChat,
        getChatByName,
        setCurrentChatName,
        sendMessageToChat,
        currentChatName,
    };
});
