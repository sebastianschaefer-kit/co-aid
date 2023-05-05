<template>
  <v-sheet elevation="4" class="mt-2 py-2 px-4" rounded="lg" width="100%">
    <DesignPatternsHeader :title="pattern.title" :maternity="maternity">
      <template v-slot:append>
        <v-btn class="ml-2" color="primary" @click="$emit('scrollToPattern', patternId)"
          >Go to</v-btn
        >
      </template>
    </DesignPatternsHeader>
  </v-sheet>
</template>

<script setup>
import DesignPatternsHeader from "./DesignPatternHeader.vue";
</script>

<script>
import { usePatternsStore } from "@/store/patterns";
import { mapActions } from "pinia";

export default {
  name: "DesignPatternPreview",
  props: ["patternId"],
  computed: {
    pattern() {
      return this.getPattern(this.patternId);
    },
    maternity() {
      return this.getMaternity(this.pattern);
    },
  },
  methods: {
    ...mapActions(usePatternsStore, ["getPattern", "getMaternity"]),
  },
};
</script>
