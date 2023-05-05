<template>
  <v-sheet
    v-if="group.patterns && group.patterns.length > 0"
    width="100%"
    class="d-flex flex-column align-center rounded pa-4"
    elevation="2"
  >
    <font color="#455A64" class="pb-4 text-h6"
      >{{ group.text }} ({{ group.patterns.length }} Patterns)</font
    >
    <div class="d-flex flex-column" style="width: 100%; gap: 8px">
      <DesignPattern
        v-for="pattern in group.patterns"
        :pattern="pattern"
        :key="pattern.id"
        :ref="pattern.id"
        @scrollToPattern="$emit('scrollToPattern', $event)"
      ></DesignPattern>
    </div>
  </v-sheet>
</template>

<script setup>
import DesignPattern from "./DesignPattern.vue";
</script>

<script>
export default {
  name: "PatternGroup",
  props: ["group"],
};
</script>
