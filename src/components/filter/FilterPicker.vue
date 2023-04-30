<template>
  <div>
    <v-container v-if="multiple" fluid>
      <v-checkbox
        v-model="filters[filterId]"
        v-for="[i, option] in options.entries()"
        :label="option.text"
        :value="option.value"
        :key="i"
        color="primary"
        hide-details
        density="compact"
      ></v-checkbox>
    </v-container>
    <div v-else class="d-flex flex-column align-center">
      <v-btn
        :disabled="filters[filterId] === undefined"
        @click="filters[filterId] = undefined"
        size="x-small"
        variant="plain"
      >Clear</v-btn>
      <v-radio-group
        v-model="filters[filterId]"
        style="align-self: flex-start;"
        hide-details
      >
        <v-radio
          v-for="[i, option] in options.entries()"
          :label="option.text"
          :value="option.value"
          :key="i"
          color="primary"
        ></v-radio>
      </v-radio-group>
    </div>
  </div>
</template>

<script setup>
//
</script>

<script>
import { mapWritableState } from 'pinia';
import { useStateStore } from '@/store/state';

export default {
  name: "DataPicker",
  props: [
    "multiple",
    "options",
    "filterId"
  ],
  computed: {
    ...mapWritableState(useStateStore, ["filters"]),
  },
}
</script>