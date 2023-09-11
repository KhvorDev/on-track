import {
  HOURS_IN_DAY,
  MIDNIGHT_HOUR,
  MINUTES_IN_HOUR,
  SECONDS_IN_HOUR,
  SECONDS_IN_MINUTE
} from '@/constants'
import { isNull, isPageValid } from '@/validators'

export function normalizePageHash() {
  const page = window.location.hash.slice(1)

  if (isPageValid(page)) {
    return page
  }
}

export function generateActivities() {
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

export function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({ title: activity.name, value: activity.id }))
}

export function generatePeriodSelectOptions(periodInMinutes) {
  return periodInMinutes.map((periodInMinutes) => ({
    value: periodInMinutes * SECONDS_IN_MINUTE,
    title: generatePeriodSelectOptionsLabel(periodInMinutes)
  }))
}

function generatePeriodSelectOptionsLabel(periodInMinutes) {
  const hours = Math.floor(periodInMinutes / MINUTES_IN_HOUR)
    .toString()
    .padStart(2, '0')
  const minutes = (periodInMinutes % MINUTES_IN_HOUR).toString().padStart(2, '0')

  return `${hours}:${minutes}`
}

export function hoursToSeconds(hours) {
  return hours * SECONDS_IN_HOUR
}

export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function normalizeSelectValue(value) {
  return isNull(value) || isNaN(value) ? value : +value
}

