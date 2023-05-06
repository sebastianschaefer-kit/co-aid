<template>
  <div class="d-flex flex-column" style="gap: 16px">
    <ChatInteraction
      v-for="interaction in interactions"
      :interaction="interaction"
      :key="prefix + interaction.questionIndex"
      :ref="prefix + interaction.questionIndex"
    ></ChatInteraction>
    <v-tooltip location="top" max-width="280px" :text="clearTooltip">
      <template v-slot:activator="{ props }">
        <v-btn
          v-if="true"
          v-bind="props"
          density="comfortable"
          color="secondary"
          icon="mdi-rewind"
          floating
          @click="restartQuestions()"
        ></v-btn>
      </template>
    </v-tooltip>
  </div>
</template>

<script setup>
import ChatInteraction from "./ChatInteraction.vue";
</script>

<script>
import { mapState, mapActions } from "pinia";
import { useStateStore } from "@/store/state";
import { usePatternsStore } from "@/store/patterns";

export default {
  name: "ChatPanel",
  data() {
    return {
      prefix: "interaction-",
      clearTooltip: "Restart and clear all answers and filters",
    };
  },
  computed: {
    ...mapState(useStateStore, ["interactions"]),
  },
  methods: {
    ...mapActions(useStateStore, ["restartQuestions"]),
    ...mapActions(usePatternsStore, ["openPattern"]),
  },
  watch: {
    interactions: {
      handler() {
        this.$nextTick(() => {
          const current = this.interactions[this.interactions.length - 1];
          const ref = current.questionIndex;
          const el = this.$refs[this.prefix + ref];
          el[0].$el.scrollIntoView({ behavior: "smooth" });

          if (current.focus) {
            this.openPattern(current.focus);
          }
        });
      },
      deep: true,
    },
  },
};
</script>
