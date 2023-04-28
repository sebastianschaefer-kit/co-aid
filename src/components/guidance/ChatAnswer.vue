<template>
  <ChatMessage>
    <v-container v-if="interaction.multiple" fluid>
      <v-checkbox
        v-model="value"
        v-for="[i, answer] in interaction.answers.entries()"
        :label="answer.text"
        :value="i"
        :key="i"
        hide-details
        density="compact"
      ></v-checkbox>
    </v-container>
    <v-radio-group
      v-else
      v-model="value"
      hide-details
    >
      <v-radio
        v-for="[i, answer] in interaction.answers.entries()"
        :label="answer.text"
        :value="i"
        :key="i"
        color="white"
      ></v-radio>
    </v-radio-group>
  </ChatMessage>
</template>

<script setup>
import ChatMessage from './ChatMessage.vue';
</script>

<script>
import { mapActions, mapWritableState } from 'pinia';
import { useStateStore } from '@/store/state';

export default {
  name: "ChatAnswer",
  props: ["interaction"],
  data() {
    return {
      value: this.interaction.answer
    }
  },
  computed: {
    ...mapWritableState(useStateStore, ["info"])
  },
  watch: {
    value() {
      this.handleUpdate();
    }
  },
  methods: {
    ...mapActions(useStateStore, ["showNextQuestion", "setAnswer"]),
    handleUpdate() {
      for (let field in this.value.implications) {
        this.info[field] = this.value.implications[field]
      }

      if (!this.interaction.answer) {
        this.showNextQuestion();
      }

      this.setAnswer(this.interaction.questionIndex, this.value)
    }
  },
};
</script>

<style>
.v-selection-control__wrapper {
  margin: 0px 8px;
}
</style>