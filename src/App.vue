<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
  <div class="App">
    <Header/>
     <router-view></router-view>
  </div>
</template>

<style>

.App{
  height: 100%;
  width:100%;
  display: flex;
  flex-direction: column;

}



</style>
