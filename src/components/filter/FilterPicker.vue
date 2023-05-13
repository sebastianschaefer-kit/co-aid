<template>
  <div>
    <v-container v-if="multiple" fluid>
      <v-checkbox
        v-for="[i, option] in options.entries()"
        :key="i"
        v-model="filters[filterId]"
        :label="option.text"
        :value="option.value"
        color="primary"
        hide-details
        density="compact"
      >
        <template v-slot:label>
          <div class="d-flex flex-row justify-start align-center">
            <font>{{ option.text }}</font>
            <InfoButton
              v-if="option.infoText"
              :text="option.infoText"
              cls="ml-1"
            ></InfoButton>
          </div>
        </template>
      </v-checkbox>
    </v-container>
    <div v-else class="d-flex flex-column align-center">
      <v-btn
        :disabled="filters[filterId] === undefined"
        @click="filters[filterId] = undefined"
        size="x-small"
        variant="plain"
        >Clear</v-btn
      >
      <v-radio-group
        v-model="filters[filterId]"
        style="align-self: flex-start"
        hide-details
      >
        <v-radio
          v-for="[i, option] in options.entries()"
          :label="option.text"
          :value="option.value"
          :key="i"
          color="primary"
        >
          <template v-slot:label>
            <div class="d-flex flex-row justify-start align-center">
              <font>{{ option.text }}</font>
              <InfoButton
                v-if="option.infoText"
                :text="option.infoText"
                cls="ml-1"
              ></InfoButton>
            </div>
          </template>
        </v-radio>
      </v-radio-group>
    </div>
  </div>
</template>

<script setup>
import InfoButton from "../base/InfoButton.vue";
</script>

<script>
import { mapWritableState } from "pinia";
import { useStateStore } from "@/store/state";

export default {
  name: "DataPicker",
  props: ["multiple", "options", "filterId"],
  computed: {
    ...mapWritableState(useStateStore, ["filters"]),
  },
};
</script>
