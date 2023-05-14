<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="d-flex flex-column">
    <div v-for="[i, filter] in filters.entries()" class="d-flex flex-column" :key="i">
      <div class="d-flex flex-row justify-center align-center" style="width: 100%">
        <font class="text-h7 text-center" style="line-height: normal" color="#455A64">{{
          filter.text
        }}</font>
        <InfoButton
          v-if="filter.infoText"
          :text="filter.infoText"
          cls="ml-1"
        ></InfoButton>
      </div>
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
import InfoButton from "../base/InfoButton.vue";
</script>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Filters",
  data() {
    return {
      filters: [
        {
          text: "Perspective",
          id: "perspective",
          infoText: "Use this filter to see design patterns from one perspective only",
          multiple: true,
          options: [
            {
              text: "Data Science",
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
          infoText: "You can select multiple task types",
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
              infoText:
                "Detection refers to feature detection in unstructured data. It is used in text or image annotation as first step to determine, which parts of text or image are classified.",
            },
          ],
        },
        {
          text: "Data Type(s)",
          id: "dataType",
          infoText: "You can select multiple data types",
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
          infoText:
            "Use this filter to get design patterns specificly for this project phase.\nUse with care as this classification might be subjective and not perfectly fit your situation.",
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
          text: "Do users tend to be over- or underconfident in AI?",
          id: "overReliance",
          infoText:
            "There are design patterns that increase or decrease adherence to AI. Use this filter if you have a specific problem in this regard.",
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
