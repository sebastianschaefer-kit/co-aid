<template>
  <ChatMessage :isQuestion="true">
    {{ question }}
  </ChatMessage>
</template>

<script setup>
import ChatMessage from './ChatMessage.vue';
</script>

<script>
export default {
  name: "ChatQuestion",
  props: ["question"],
}
</script>