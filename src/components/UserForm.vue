<template>
  <form @submit.prevent="executeUserNickNameAction" class="user-form">
    <input type="text" placeholder="Enter your nickname" v-model="userInputValue" />
    <div v-if="emptyInputError">
      {{ emptyInputError }}
    </div>
    <button type="submit">
      Confirm
    </button>
  </form>
</template>



<script setup lang="ts">
import { ref } from 'vue'
import { useUserNickNameStore } from '../services/useUserNickNameStore.js'
import { useRouter } from 'vue-router'

const store = useUserNickNameStore()
const userInputValue = ref('')
const emptyInputError = ref('')
const router = useRouter()



const executeUserNickNameAction = () => {
  if (userInputValue.value !== '') {
    store.setUserNickName(userInputValue.value)
    emptyInputError.value = ''
    router.push('/main')
  }
  else {
    emptyInputError.value = 'Enter something'
  }

}

</script>


<style lang="scss">
.user-form {
  height: 250px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: #1F1F1F;
  border-radius: .50rem;
}


.user-form {
  input {
    width: 300px;
    padding: 10px;
    font-size: 16px;
    outline-offset: none;

    &:hover,
    &:focus {
      border-color: #646cff;
      border-color: #646cff;
      outline: none;
    }

  }
}
</style>