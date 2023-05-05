<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container style="height: 100%">
    <v-row style="height: 100%">
      <v-col cols="4" style="height: 100%">
        <SideBar></SideBar>
      </v-col>
      <v-col cols="8" style="height: 100%; overflow-y: auto">
        <PatternPanel></PatternPanel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import SideBar from "@/components/base/SideBar.vue";
import PatternPanel from "@/components/patterns/PatternPanel.vue";
</script>
