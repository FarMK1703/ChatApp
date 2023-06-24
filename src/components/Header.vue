<template>
  <div class="header">
    <div class="header__logo">
      <h2>Chat App</h2>
    </div>

    <div class="header__items">
      <div v-if="store.userNickName" class="header__user-nickname">
        <p> Hello, <span>{{ store.userNickName }}</span></p>
      </div>

      <div class="hedaer__menu-button">
        <button @click="toggleDrawer">

          <li></li>
          <li></li>
          <li></li>

        </button>
      </div>
    </div>

  </div>
</template>



<script setup lang="ts">
import { useUserNickNameStore } from '../services/useUserNickNameStore.js'
import { useMobileDrawer } from '../services/useMobileDrawerStore';


const store = useUserNickNameStore()
const { toggleDrawer } = useMobileDrawer()





</script>



<style lang="scss" scoped>
.header {
  width: 100%;
  max-height: 80px;
  background-color: #1F1F1F;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 30px 5px 30px;


  .header__items {
    display: flex;
    align-items: center;
  }

  .header__user-nickname {
    span {
      color: #646cff
    }
  }

  .hedaer__menu-button {

    button {


      padding: 10px 15px 10px 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: min-content;

      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;





      li {
        list-style-type: none;
        width: 5px;
        height: 5px;
        background-color: #fff;
        border-radius: 100%;

        &:nth-child(2) {
          margin-top: 10px;
          margin-bottom: 10px;
        }
      }

    }

    @media(min-width:426px) {
      display: none;
    }
  }


}


.header__logo:hover {
  filter: drop-shadow(0 0 0.35em #646cffaa);
  cursor: pointer;
}
</style>