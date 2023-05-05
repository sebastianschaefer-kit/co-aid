<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="d-flex flex-column">
    <div v-for="[i, filter] in filters.entries()" class="d-flex flex-column" :key="i">
      <p style="color: #455a64" class="text-h7 text-center">{{ filter.text }}</p>
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
import FilterPicker from "./FilterPicker.vue";
</script>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Filters",
  data() {
    return {
      filters: [
        {
          // TODO
          text: "Perspective",
          id: "perspective",
          multiple: true,
          options: [
            {
              text: "Data-Science",
              value: "ds",
            },
            {
              text: "User Experience (UI/UX)",
              value: "ux",
            },
          ],
        },
        {
          text: "Task Type(s)",
          id: "taskType",
          multiple: true,
          options: [
            {
              text: "Estimation/Regression",
              value: "reg",
            },
            {
              text: "Classification",
              value: "class",
            },
            {
              text: "Detection",
              value: "det",
            },
          ],
        },
        {
          text: "Data Type(s)",
          id: "dataType",
          multiple: true,
          options: [
            {
              text: "Structured (tabular)",
              value: "tab",
            },
            {
              text: "Image",
              value: "img",
            },
            {
              text: "Text",
              value: "text",
            },
          ],
        },
        {
          text: "State of your Project",
          id: "projectState",
          multiple: false,
          options: [
            {
              text: "Ideation phase",
              value: "early",
            },
            {
              text: "Concept/Implementation",
              value: "concept",
            },
            {
              text: "System is operating",
              value: "running",
            },
          ],
        },
        {
          text: "Do you have problems with Over- or Underconfidence in AI?",
          id: "overReliance",
          multiple: false,
          options: [
            {
              text: "Overconfidence (Automation Bias)",
              value: true,
            },
            {
              text: "Underconfidence (Insufficient trust)",
              value: false,
            },
          ],
        },
      ],
    };
  },
};
</script>
