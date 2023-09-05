<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="(navIcon, navTitle) in NAV_ITEMS"
        :key="navTitle"
        :href="`#${navTitle}`"
        :class="{ 'pointer-events-none bg-gray-200': navTitle === currentPage }"
        @click="emit('navigate', navTitle)"
      >
        <component :is="navIcon" class="h-6 w-6" />
        {{ navTitle }}
      </NavItem>
    </ul>
  </nav>
</template>

<script setup>
import { NAV_ITEMS } from '@/constants'
import NavItem from '@/components/NavItem.vue'
import {isPageValid} from "@/validators";

defineProps({
  currentPage: {
    required: true,
    type: String,
    validator: isPageValid
  }
})
const emit = defineEmits({
  navigate: isPageValid
})
</script>