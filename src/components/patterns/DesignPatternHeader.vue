<template>
  <div :class="'d-flex flex-row align-center ' + cls" style="gap: 8px; width: 100%">
    <font class="text-h6" color="#455A64">{{ title }}</font>
    <v-spacer></v-spacer>
    <v-divider color="primary" class="border-opacity-50" vertical></v-divider>
    <div class="d-flex flex-column align-center" style="width: 120px; gap: 8px">
      <div class="d-flex flex-row justify-space-around align-center" style="width: 100%">
        <font
          class="text-overline"
          style="opacity: 50%; line-height: normal"
          color="#455A64"
          >Maternity</font
        >
        <InfoButton :text="maternityInfoText"></InfoButton>
      </div>
      <font class="text-button" style="line-height: normal" :color="maternity.color">{{
        maternity.grade
      }}</font>
    </div>
    <v-divider color="primary" class="border-opacity-50" vertical></v-divider>
    <slot name="append"></slot>
  </div>
</template>

<script setup>
import InfoButton from "../base/InfoButton.vue";
</script>

<script>
export default {
  name: "DesignPatternHeader",
  props: ["title", "maternity", "cls"],
  data() {
    return {
      maternityInfoText:
        "Maternity grade is computed based on the number of scientific papers reporting CTP or positive effects on team performance of given pattern.\nNegative results are not considered in maternity grades.",
    };
  },
};
</script>
