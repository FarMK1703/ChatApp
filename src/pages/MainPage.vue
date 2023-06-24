<template>
  <div class="app-main-page">
    <ChatList />
    <MessageList />



    <AddChatModal />
  </div>
</template>


<script setup lang="ts">
import ChatList from '../components/ChatList.vue';
import AddChatModal from '../components/AddChatModal.vue';
import MessageList from '../components/MessageList.vue';
</script>


<style>
.app-main-page {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px;
  position: relative;
}
</style>