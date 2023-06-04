<template>
  <div class="d-flex flex-column align-center" style="gap: 16px">
    <div class="d-flex flex-column align-center mb-4">
      <font class="text-h4" color="#455A64">Patterns</font>
      <font class="text-h7" color="#455A64">Best Practices from Research</font>
    </div>
    <PatternGroup
      v-for="group in patternGroups"
      :group="group"
      :key="group.id"
      :ref="group.id"
      @scrollToPattern="scrollToPattern($event)"
    ></PatternGroup>
  </div>
</template>

<script setup>
import PatternGroup from "./PatternGroup.vue";
</script>

<script>
import { mapState } from "pinia";
import { usePatternsStore } from "@/store/patterns";

export default {
  name: "PatternPanel",
  computed: {
    ...mapState(usePatternsStore, ["patternGroups"]),
  },
  methods: {
    scrollToPattern(patternId) {
      for (let parentEl of Object.values(this.$refs)) {
        const el = parentEl[0].$refs[patternId];

        if (el) {
          el[0].$data.expanded = 0;
          el[0].$el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
    },
  },
};
</script>
