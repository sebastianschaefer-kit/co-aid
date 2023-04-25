<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container style="height: 100%;">
    <v-row class="align-center">
      <v-col cols="4">
        <div class="text-h4"><font color="primary">Co</font><font color="#455A64">mplementarity</font></div>
        <div class="text-h4"><font color="primary">AI</font></div>
        <div class="text-h4"><font color="primary">D</font><font color="#455A64">esign</font></div>
      </v-col>
      <v-col cols="8">
        <div class="text-h4 text-center"><font color="#455A64">Human and AI</font></div>
        <div class="text-h4 text-center"><font color="#455A64">Complementarity</font></div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <CoAIDInfoCol></CoAIDInfoCol>
      </v-col>
      <v-col cols="8">
        <CompInfoCol></CompInfoCol>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import CoAIDInfoCol from "@/components/home/CoAIDInfoCol.vue"
import CompInfoCol from "@/components/home/CompInfoCol.vue"
</script>