<template>
  <li class="flex-1">
    <a v-bind="$attrs" class="tet-xs flex flex-col items-center capitalize">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>