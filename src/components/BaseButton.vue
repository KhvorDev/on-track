<script>
import {BUTTON_TYPE_PRIMARY, BUTTON_TYPE_DANGER, BUTTON_TYPE_NEUTRAL} from "@/constants";

const typeClasses = {
  [BUTTON_TYPE_PRIMARY]: 'bg-purple-500 enabled:hover:bg-purple-200 text-white',
  [BUTTON_TYPE_NEUTRAL]: 'bg-gray-100 enabled:hover:bg-gray-200',
  [BUTTON_TYPE_DANGER]: 'bg-red-500 enabled:hover:bg-red-200 text-white'
}

</script>

<script setup>
import {isButtonTypeValid} from "@/validators";

defineProps({
  type: {
    type: String,
    default: BUTTON_TYPE_PRIMARY,
    validator: isButtonTypeValid
  }
})

</script>

<template>
  <button :class="`${typeClasses[type]} rounded p-3 disabled:cursor-not-allowed disabled:opacity-50`">
    <slot></slot>
  </button>
</template>