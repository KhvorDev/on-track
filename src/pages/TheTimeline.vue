<script setup>
import TimelineItem from '@/components/TimelineItem.vue'
import {
  validateActivities,
  validateSelectOptions,
  validateTimelineItems,
  isTimelineItemValid,
  isActivityValid
} from "@/validators";

defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validator: validateTimelineItems
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  },
  activities: {
    type: Array,
    required: true,
    validator: validateActivities
  }
})

defineEmits({
  setTimelineItemActivity(timelineItem, activity) {
    return [
        isTimelineItemValid(timelineItem), isActivityValid(activity)].every(Boolean)
}
})

</script>

<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        :activity-select-options="activitySelectOptions"
        :activities="activities"
        @select-activity="$emit('setTimelineItemActivity', timelineItem, $event)"
      />
    </ul>
  </div>
</template>