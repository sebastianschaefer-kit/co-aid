<template>
  <div class="f-dlex flex-column" style="gap: 16px">
    <Filters></Filters>
  </div>
</template>

<script setup>
import Filters from "./Filters.vue";
</script>

<script>
export default {
  name: "FilterPanel",
};
</script>
