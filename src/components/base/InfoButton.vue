<template>
  <v-tooltip location="bottom" max-width="280px" :text="text">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        icon="mdi-information"
        width="16px"
        height="16px"
        variant="plain"
        size="x-small"
      ></v-btn>
    </template>
  </v-tooltip>
</template>

<script>
export default {
  name: "InfoButton",
  props: ["text"],
};
</script>
