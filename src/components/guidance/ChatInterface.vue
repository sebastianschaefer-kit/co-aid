<!-- eslint-disable vue/valid-v-for -->
<template>
  <div class="d-flex flex-column" style="gap: 16px">
    <ChatInteraction
      v-for="interaction in interactions"
      :interaction="interaction"
    ></ChatInteraction>
  </div>
</template>

<script setup>
import ChatInteraction from './ChatInteraction.vue';
</script>

<script>
import { mapState } from 'pinia';
import { useStateStore } from '@/store/state';

export default {
  name: "ChatInterface",
  computed: {
    ...mapState(useStateStore, ['interactions'])
  }
}
</script>