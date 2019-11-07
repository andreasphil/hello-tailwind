<template>
  <button
    @click="emitClick"
    :class="type"
    class="
      flex-grow
      font-medium
      last-child:mb-0
      last-child:mr-0
      mb-3
      mr-0
      px-3
      py-2
      rounded
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
  props: {
    label: String,
    type: String
  },

  methods: {
    emitClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="postcss" scoped>
.primary {
  @apply bg-indigo-600 shadow-md text-white
}

.primary:hover {
  @apply bg-indigo-500;
}

.ghost {
  @apply text-gray-500;
}

.ghost:hover {
  @apply bg-gray-100;
}
</style>
