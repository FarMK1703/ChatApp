<template>
    <div class="message-list">
        <div class="message-list__wrapper">
            <div class="message-list__message" :class="{ my_message: message.sender === userNickName }"
                v-for="message of getChatByName.messages">
                <div class="message-list__message_text">
                    <p>{{ message.msg }}</p>
                </div>
            </div>
        </div>
        <MessageListInput />
    </div>
</template>


<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { useChatsListStore } from '../services/useChatsListStore'
import MessageListInput from '../components/MessageListInput.vue'
import { useUserNickNameStore } from '../services/useUserNickNameStore';


const { userNickName } = useUserNickNameStore()




const chatListStore = useChatsListStore()

const { getChatByName } = storeToRefs(chatListStore)







</script>


<style lang="scss">
.message-list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 20px 5px 20px;
    position: relative;

    @media(max-width:769px) {
        padding: 5px 10px 5px 10px;
    }


    .message-list__wrapper {
        width: 100%;
        height: 100%;
        max-height: 70vh;
        overflow-y: auto;
        padding: 10px 20px 10px 20px;

        &::-webkit-scrollbar {
            display: none;
        }

        @media(max-width:769px) {
            padding: 5px 10px 5px 10px;
        }
    }


    .message-list__message {
        display: flex;
        justify-content: start;
        margin-top: 30px;



        .message-list__message_text {
            background-color: #646cffaa;
            padding: 10px;
            border-radius: .5rem;

            p {
                margin: 0;
            }
        }
    }


    .my_message {
        justify-content: end;
    }


}
</style>