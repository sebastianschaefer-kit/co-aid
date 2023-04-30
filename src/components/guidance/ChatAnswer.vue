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
    ...mapWritableState(useStateStore, ["info", "filters"])
  },
  watch: {
    value() {
      this.handleUpdate();
    }
  },
  methods: {
    ...mapActions(useStateStore, ["showNextQuestion", "setAnswer"]),
    handleUpdate() {
      let info;
      let filters;
      if (this.interaction.multiple) {
        let answerList = this.value.map(x => this.interaction.answers[x]);
        info = {};
        filters = {};

        for (let answer of answerList) {
          for (let field in answer.info) {
            if (!Array.isArray(info[field])) info[field] = [];
            info[field].push(answer.info[field]);
          }

          for (let field in answer.filters) {
            if (!Array.isArray(filters[field])) filters[field] = [];
            filters[field].push(answer.filters[field]);
          }
        }


      } else {
        let answer = this.interaction.answers[this.value];
        info = answer.info;
        filters = answer.filters;
      }
      
      for (let field in info) {
        this.info[field] = info[field]
      }

      for (let field in filters) {
        this.filters[field] = filters[field]
      }

      if (!this.interaction.answer || this.interaction.answer.length === 0) {
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