<template>
  <label
    :class="{ 'text-red-600': hasError }"
    class="font-medium text-gray-500 text-sm">{{ label }}
    <input
      v-model="localValue"
      :type="type"
      :class="{ 'border-red-400': hasError }"
      class="
        bg-gray-200
        block
        border-2
        border-gray-200
        border-white
        focus:bg-white
        focus:border-indigo-400
        mb-4
        mt-1
        outline-none
        p-2
        rounded
        text-gray-800
        w-full
      "/>
  </label>
</template>

<script>
export default {
  props: {
    type: String,
    label: String,
    value: String,
    hasError: Boolean
  },

  computed: {
    localValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
