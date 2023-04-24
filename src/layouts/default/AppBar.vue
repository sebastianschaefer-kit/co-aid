<template>
  <v-app-bar color="secondary" elevation="4">
    <template v-slot:prepend>
      <div class="text-h3 font-weight-medium mr-10" color="white" style="line-height: normal">
        Co.<font color="primary">AI</font>D
      </div>
    </template>
    <template v-slot:title>
      <v-layout style="gap: 40px">
        <NavButton title="What is Co.AID?" path="/"></NavButton>
        <NavButton title="Design Patterns"  path="/patterns"></NavButton>
      </v-layout>
    </template>
  </v-app-bar>
</template>

<script setup>
import NavButton from "@/components/base/NavButton.vue"
</script>
