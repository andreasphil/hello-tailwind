<template>
  <button
    @click="emitClick"
    :class="typeClasses"
    class="
      flex-grow
      last-child:mb-0
      last-child:mr-0
      mb-3
      mr-0
      px-3
      py-2
      rounded-lg
      sm:mb-0
      sm:mr-2
      sm:w-0
      w-full
    ">
    {{ label }}
  </button>
</template>

<script>
export default {
  data () {
    return {
      primaryModifiers: {
        'bg-pink-600': true,
        'hover:bg-pink-500': true,
        'shadow-md': true,
        'text-white': true
      },
      ghostModifiers: {
        'hover:bg-gray-100': true,
        'text-gray-500': true
      }
    }
  },

  props: {
    label: String,
    type: String
  },

  computed: {
    typeClasses () {
      if (this.type === 'primary') {
        return this.primaryModifiers
      } else {
        return this.ghostModifiers
      }
    }
  },

  methods: {
    emitClick () {
      this.$emit('click')
    }
  }
}
</script>
