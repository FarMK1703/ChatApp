<template>
    <div class="add-chat-modal-wrapper" :class="{ modal_active: modalIsActive }" @click="toggleModal('close')">
        <div class="add-chat-modal">

            <h3>
                Choose contact
            </h3>
            <div class="add-chat-modal__contact-list" v-for="contact in contacts"
                @click="createChat(contact); toggleDrawer()">
                <div class="contact-list__avatar">
                    {{ contact.name[0] }}
                </div>

                <div class="contact-list__info">
                    <p>{{ contact.name }}</p>
                    <p>{{ contact.number }}</p>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup lang="ts">

import { storeToRefs } from 'pinia';
import { useContactsStore } from '../services/useContactsStore';
import { useModalIsActiveStore } from '../services/useModalisActiveStore';
import { useChatsListStore } from '../services/useChatsListStore';
import { useMobileDrawer } from '../services/useMobileDrawerStore';


const { toggleModal } = useModalIsActiveStore()

const { contacts } = storeToRefs(useContactsStore())

const { modalIsActive } = storeToRefs(useModalIsActiveStore())


const { addChat, setCurrentChatName } = useChatsListStore()


const { toggleDrawer } = useMobileDrawer()


const createChat = (contact: any) => {
    setCurrentChatName(contact.name)
    addChat(contact.name)
}



</script>



<style lang="scss">
.add-chat-modal-wrapper {
    top: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: none;
    align-items: center;
    justify-content: center;

    &.modal_active {
        display: flex;
    }

    .add-chat-modal {

        width: 400px;
        height: 600px;
        border-radius: .50rem;
        background-color: #1F1F1F;
        opacity: 1;
        padding: 10px;
        overflow-y: auto;
        padding-bottom: 40px;

        @media(max-width: 769px) {
            z-index: 6;
            height: 500px;
        }
        


        @media(max-width:426px){
            height: 100%;
            width: 100%;
            border-radius: 0;
        }


        &::-webkit-scrollbar {
            display: none;

        }


        .add-chat-modal__contact-list {
            width: 100%;
            padding: 15px;
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #121212;
            border-radius: .35rem;
            cursor: pointer;
            border: 1px solid transparent;
            transition: 0.3s all linear;

            &:hover {
                border-color: #646cff;
                transition: 0.3s all linear;
            }


            .contact-list__avatar {
                width: 70px;
                height: 70px;
                background-color: #646cff;
                border-radius: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 25px;

            }

            .contact-list__info {
                width: 70%;

                p:nth-child(1) {
                    font-size: 18px;
                }

                p:nth-child(2) {
                    font-size: 14px;
                }
            }

        }


    }
}
</style>