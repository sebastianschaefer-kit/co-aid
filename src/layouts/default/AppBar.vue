<template>
  <v-app-bar color="secondary">
    <template v-slot:title>
      <v-container>
        <v-row>
          <v-col cols="4">
            <div class="text-h3 font-weight-medium" color="white" style="line-height: normal">
              Co.<font color="primary">AI</font>D
            </div>
          </v-col>
          <v-col cols="8" class="pa-0">
            <v-row style="height: 100%; gap: 32px;" class="justify-start align-center">
              <NavButton title="What is Co.AID?" path="/"></NavButton>
              <NavButton title="Design Patterns"  path="/patterns"></NavButton>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-app-bar>
</template>

<script setup>
import NavButton from "@/components/base/NavButton.vue"
</script>
