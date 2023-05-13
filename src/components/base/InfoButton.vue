<template>
  <v-tooltip location="bottom" max-width="280px" :text="text">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        icon="mdi-information"
        variant="plain"
        size="x-small"
        density="comfortable"
        :class="cls"
      ></v-btn>
    </template>
  </v-tooltip>
</template>

<script>
export default {
  name: "InfoButton",
  props: ["text", "cls"],
};
</script>
