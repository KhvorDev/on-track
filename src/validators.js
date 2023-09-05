import { HOURS_IN_DAY, MIDNIGHT_HOUR, NAV_ITEMS, BUTTON_TYPES } from '@/constants'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isButtonTypeValid(buttonType) {
  return BUTTON_TYPES.includes(buttonType)
}

export function validateTimelineItems(timelineItems) {
  return timelineItems.every(isTimelineItemValid)
}

export function isTimelineItemValid({ hour }) {
  return isHourValid(hour)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionsValid)
}

export function isUndefinedOrNull(value) {
  return isNull(value) || isUndefined(value)
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}

export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}

export function validateActivities(activities) {
  return activities.every(isActivityValid)
}

export function isActivityValid({ id, name, secondsToComplete }) {
  if(isNull(id)){
    return true
  }
  return [isNotEmptyString(id), isNotEmptyString(name), isNumber(secondsToComplete)].every(Boolean)
}

export function isUndefined(value) {
  return value === undefined
}

export function isString(value) {
  return typeof value === 'string'
}

export function isNull(value) {
  return value === null
}

export function isSelectValueValid(value){
  return isNotEmptyString(value) || isNumberOrNull(value)
}

function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}

function isBetween(value, start, end) {
  return value >= start && value <= end
}

function isSelectOptionsValid({ value, title }) {
  return (isNumber(value) || isNotEmptyString(value)) && isNotEmptyString(title)
}

export function isNumber(value) {
  return typeof value === 'number'
}
