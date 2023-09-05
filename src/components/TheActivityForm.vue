<script setup>
import {ref, nextTick} from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { isActivityValid } from '@/validators'
import {generateId} from "@/functions"
import {SECONDS_IN_HOUR} from "@/constants";

const emit = defineEmits({
  submit: isActivityValid
})

async function submit(){
  emit('submit', {
    id: generateId(),
    name: name.value,
    secondsToComplete: 0
  })
  name.value = ''

  await nextTick()
  window.scrollTo(0, document.body.scrollHeight)
}

const name = ref('')
</script>

<template>
  <form
    @submit.prevent="submit"
    class="sticky bottom-[32px] flex gap-2 border-t p-4"
  >
    <input
      type="text"
      v-model="name"
      class="w-full rounded border px-4 text-xl"
      placeholder="Activity Name"
    />
    <BaseButton :disabled="name.trim() === ''">
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>
