<script setup>
import ActivityItem from '@/components/ActivityItem.vue'
import TheActivityForm from '@/components/TheActivityForm.vue'
import { isActivityValid, validateActivities } from '@/validators'
import TheActivitiesEmptyState from "@/components/TheActivitiesEmptyState.vue";

defineProps({
  activities: {
    type: Array,
    required: true,
    validator: validateActivities
  }
})

const emit = defineEmits({
  deleteActivity: isActivityValid,
  createActivity: isActivityValid
})
</script>

<template>
  <div class="flex grow flex-col">
    <ul v-if="activities.length" class="grow divide-y">
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
    <TheActivitiesEmptyState v-else/>
    <TheActivityForm @submit="emit('createActivity', $event)" />
  </div>
</template>
