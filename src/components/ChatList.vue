<template>
    <div class="chat-list" :class="{ active: isActive }">
        <div class="chat-list__options">
            <h4>Chats</h4>
            <span @click="toggleModal('open')">+</span>

        </div>

        <div class="chat-list__chats" v-for="chat of chats" @click="setCurrentChatName(chat.name); toggleDrawer()">
            <p>
                {{ chat.name }}
            </p>
        </div>
    </div>
</template>



<script setup lang="ts">
import { useModalIsActiveStore } from '../services/useModalisActiveStore';
import { useChatsListStore } from '../services/useChatsListStore';
import { storeToRefs } from 'pinia';
import { useMobileDrawer } from '../services/useMobileDrawerStore';


const { toggleModal } = useModalIsActiveStore()

const { chats } = storeToRefs(useChatsListStore())

const { setCurrentChatName } = useChatsListStore()

const { isActive } = storeToRefs(useMobileDrawer())

const { toggleDrawer } = useMobileDrawer()





</script>



<style lang="scss">
.chat-list {
    min-width: 400px;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: #1F1F1F;
    flex-direction: column;
    padding: 10px;

    @media(max-width: 769px) {
        min-width: 250px;
    }

    @media(max-width: 426px) {
        position: absolute;
        z-index: 5;
        width: 95%;
        transform: translateY(150%);
        height: 100%;
        transition: .3s all linear;

        &.active {
            transform: translateY(0);
            transition: .3s all linear;
        }
    }




    .chat-list__options {
        width: 95%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
            font-size: 22px;
            cursor: pointer;

            &:hover {
                filter: drop-shadow(0 0 0.35em #646cffaa);
                cursor: pointer;
            }
        }
    }


    .chat-list__chats {
        padding: 10px 30px 10px 30px;
        background-color: #121212;
        border-radius: .50rem;
        margin-top: 15px;
        width: 100%;
        cursor: pointer;
        border: 1px solid transparent;
        transition: .3s all linear;

        &:hover {
            border-color: #646cffaa;
            transition: .3s all linear;
        }
    }
}
</style>