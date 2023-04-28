<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container style="height: 100%;">
    <v-row style="height: 100%;">
      <v-col cols="4" style="height: 100%;">
        <SideBar></SideBar>
      </v-col>
      <v-col cols="8" class="d-flex flex-column align-center" style="height: 100%;">
        <div>Patterns</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import SideBar from '@/components/base/SideBar.vue';
</script>