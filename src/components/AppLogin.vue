<template>
  <div
    class="
      bg-white
      m-auto
      my-16
      p-5
      shadow-xl
      sm:max-w-sm
      sm:my-32
      sm:rounded-lg
    ">
    <div
      class="
        -mt-16
        bg-gray-300
        h-24
        mb-6
        mx-auto
        object-contain
        overflow-hidden
        rounded-full
        shadow-xl
        w-24
      ">
      <img src="../assets/profile.jpeg" class="h-full max-w-6xl w-auto"/>
    </div>

    <form @submit.prevent="">
      <app-input v-model="email" label="Email" type="text" :hasError="emailInvalid"/>
      <app-input v-model="password" label="Password" type="password"/>

      <div class="flex flex-wrap mt-8">
        <app-button label="Login" type="primary"/>
        <app-button label="Forgot password" type="ghost"/>
      </div>
    </form>
  </div>
</template>

<script>
import AppInput from '@/components/AppInput.vue'
import AppButton from '@/components/AppButton.vue'

export default {
  components: { AppInput, AppButton },

  data () {
    return {
      email: ''
    }
  },

  computed: {
    emailInvalid () {
      // Close enough for demonstration purposes
      return this.email.trim() !== '' && !this.email.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]/)
    }
  }
}
</script>
