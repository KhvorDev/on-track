<script setup>
import BaseSelect from '@/components/BaseSelect.vue'
import {
  isActivityValid,
  isTimelineItemValid,
  validateSelectOptions,
  validateActivities
} from '@/validators'
import { defineEmits } from 'vue'
import TimelineHour from '@/components/TimelineHour.vue'
import {NULLABLE_ACTIVITY} from "@/constants";

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  },
  activitySelectOptions: {
    type: Array,
    required: true,
    validator: validateSelectOptions
  },
  activities: {
    type: Array,
    required: true,
    validator: validateActivities
  }
})

const emit = defineEmits({
  selectActivity: isActivityValid

})
function selectActivity(id) {
  emit('selectActivity', findActivityById(id))
}

function findActivityById(id){
  return props.activities.find((activity) => activity.id === id) || NULLABLE_ACTIVITY
}

</script>

<template>
  <li class="border-grey-200 relative flex flex-col gap-2 border-t px-4 py-10">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      placeholder="Rest"
      @select="selectActivity"
    />
  </li>
</template>