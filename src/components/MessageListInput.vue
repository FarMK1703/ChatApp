<template>
    <div class="message-input">
        <textarea v-model="user_input">

    </textarea>

        <button @click="sendMessageToChat(currentChatName, user_input, userNickName), user_input = ''">send</button>
    </div>
</template>



<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useChatsListStore } from '../services/useChatsListStore';
import { useUserNickNameStore } from '../services/useUserNickNameStore';
import { ref } from 'vue'


const { sendMessageToChat } = useChatsListStore()
const { userNickName } = useUserNickNameStore()
const { currentChatName } = storeToRefs(useChatsListStore())
const user_input = ref<string>('')



</script>



<style lang="scss">
.message-input {
    position: absolute;
    bottom: 0;

    display: flex;
    width: 90%;
    justify-content: center;


    textarea {
        min-width: 90%;
        max-width: 90%;
        min-height: 80px;
        max-height: 300px;
        border-radius: .5rem;
        background-color: #1F1F1F;
        border-color: transparent;
        resize: none;

        &:focus {
            outline: none;
            border-color: #646cffaa;
            padding: 15px;
            font-size: 16px;
        }


        &::-webkit-scrollbar {
            display: none;

        }




    }


    button {
        width: 10%;

        @media(max-width:769px) {
            width: 20%;
        }

        @media(max-width:426px){
            width: 30%;
        }
    }
}
</style>