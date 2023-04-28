<template>
  <v-card density="compact" variant="tonal" color="primary" style="width: 100%;" class="pa-2">
    <v-card-text style="font-size: 16px;">{{ subtitle }}</v-card-text>
    <v-card-actions>
      <v-btn variant="tonal" class="text-h5" size="large" href="/patterns" @click="setTab">{{ title }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { useStateStore } from '@/store/state';
import { mapWritableState } from 'pinia';

export default {
  name: "StartButton",
  props: ["title", "subtitle", "tabName"],
  computed: {
    ...mapWritableState(useStateStore, ["tab"])
  },
  methods: {
    setTab() {
      this.tab = this.tabName;
    }
  }
}
</script>
