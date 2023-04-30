<template>
  <div class="f-dlex flex-column" style="gap: 16px;">
    <!-- <Sorters></Sorters> -->
    <Filters></Filters>
  </div>
</template>

<script setup>
import Filters from './Filters.vue';
// import Sorters from './Sorters.vue';
</script>

<script>
export default {
    name: "FilterPanel",
}
</script>