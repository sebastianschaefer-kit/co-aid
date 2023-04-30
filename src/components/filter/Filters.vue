<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="d-flex flex-column">
    <p class="text-h6 text-center text-medium mb-3" style="color: #455A64;">Filters</p>
    <div
      v-for="[i, filter] in filters.entries()"
      class="d-flex flex-column"
      :key="i"
    >
      <p style="color: #455A64;" class="text-h7 text-center">{{ filter.text }}</p>
      <FilterPicker
        :multiple="filter.multiple"
        :options="filter.options"
        :filterId="filter.id"
      ></FilterPicker>
      <v-divider v-if="i < filters.length - 1" class="my-3"></v-divider>
    </div>
  </div>
</template>

<script setup>
import FilterPicker from './FilterPicker.vue';
</script>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Filters",
  data() {
    return {
      filters: [{
        text: "Perspective",
        id: "perspective",
        multiple: true,
        options: [{
          text: "Data-Science",
          value: "ds"
        }, {
          text: "User Experience (UI/UX)",
          value: "ux"
        }],
      }, {
        text: "Task Type(s)",
        id: "taskType",
        multiple: true,
        options: [{
          text: "Estimation/Regression",
          value: "reg"
        }, {
          text: "Classification",
          value: "class"
        }, {
          text: "Detection",
          value: "det"
        }],
      }, {
        text: "Data Type(s)",
        id: "dataType",
        multiple: true,
        options: [{
          text: "Structured (tabular)",
          value: "tab"
        }, {
          text: "Image",
          value: "img"
        }, {
          text: "Text",
          value: "text"
        }],
      }, {
        text: "User AI Literacy",
        id: "aiLiteracy",
        multiple: false,
        options: [{
          text: "Very good",
          value: "good"
        }, {
          text: "Broad Understanding",
          value: "mid"
        }, {
          text: "Little to no understanding",
          value: "bad"
        }, {
          text: "Very heterogenous",
          value: "diverse"
        }],
      }]
    }
  }
}
</script>