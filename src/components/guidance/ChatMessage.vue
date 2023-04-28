<template>
  <v-sheet
    :color="isQuestion ? 'primary' : 'secondary'"
    :style="{ width: '90%', alignSelf: isQuestion ? 'start' : 'end' }"
    class="pa-2"
    rounded
  >
    <slot></slot>
  </v-sheet>
</template>

<script>
export default {
  name: "ChatMessage",
  props: ["isQuestion"]
}
</script>