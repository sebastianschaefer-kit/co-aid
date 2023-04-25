<template>
  <v-card density="compact" variant="tonal" color="primary" style="width: 100%;" class="pa-2">
    <v-card-text style="font-size: 16px;">{{ subtitle }}</v-card-text>
    <v-card-actions>
      <v-btn variant="tonal" class="text-h5" size="large" href="/patterns">{{ title }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "StartButton",
  props: ["title", "subtitle"],
}
</script>
