<!-- eslint-disable vue/valid-v-for -->
<template>
  <ChatMessage>
    <div class="d-flex flex-row justify-center">
      <v-btn
        v-for="action in interaction.actions"
        class="ma-2"
        color="white"
        @click="handleClick(action)"
        >{{ action.text }}</v-btn
      >
    </div>
  </ChatMessage>
</template>

<script setup>
import ChatMessage from "./ChatMessage.vue";
</script>

<script>
import { mapActions } from "pinia";
import { useStateStore } from "@/store/state";

export default {
  name: "ChatAction",
  props: ["interaction"],
  methods: {
    ...mapActions(useStateStore, [
      "showNextQuestion",
      "markActionExecuted",
      "resetFilters",
    ]),
    handleClick(action) {
      this.markActionExecuted(this.interaction.questionIndex);
      this.showNextQuestion();

      if (action.reset) {
        this.resetFilters();
      }
    },
  },
};
</script>
