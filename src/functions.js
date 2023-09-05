import {HOURS_IN_DAY, MIDNIGHT_HOUR, SECONDS_IN_HOUR} from '@/constants'
import {isPageValid, isNull} from "@/validators";

export function normalizePageHash() {
  const page = window.location.hash.slice(1)

  if (isPageValid(page)) {
    return page
  }
}

export function generateActivities(){
  return ['Coding', 'Reading', 'Training'].map((name, hour) => ({
    id: generateId(),
    name,
    secondsToComplete: hoursToSeconds(hour)
  }))
}
export function generateTimelineItems() {
  const timelineItems = []

  for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({
      hour,
      activityId: null
    })
  }

  return timelineItems
}

export function generateActivitySelectOptions(activities){
  return activities.map((activity) => ({title: activity.name, value: activity.id}))
}

export function hoursToSeconds(hours){
  return hours * SECONDS_IN_HOUR
}

export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function normalizeSelectValue(value){
  return isNull(value) || isNaN(value) ? value : +value
}

