<template>
  <v-sheet
    class="d-flex flex-column"
    color="green-lighten-5"
    style="height: 100%;"
    theme="light"
    rounded
  >
    <v-tabs
      v-model="tab"
      color="primary"
      slider-color="primary"
      style="overflow: unset;"
    >
      <v-tab
        v-for="item in items"
        :key="item.key"
        :value="item.key"
        width="50%"
        class="px-2"
      >
        {{ item.text }}
      </v-tab>
    </v-tabs>
    <v-window v-model="tab" class="pa-4" style="overflow-y: auto;">
      <v-window-item
        :key="items[0].key"
        :value="items[0].key"
      >
        <ChatInterface></ChatInterface>
      </v-window-item>
      <v-window-item
        :key="items[1].key"
        :value="items[1].key"
      >
        <!-- <FilterInterface></FilterInterface> -->
      </v-window-item>
    </v-window>
  </v-sheet>
</template>

<script setup>
import ChatInterface from "@/components/guidance/ChatInterface.vue"
</script>

<script>
import { mapWritableState } from "pinia";
import { useStateStore } from "@/store/state";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "SideBar",
  data() {
    return {
      items: [{
        key: "guidance",
        text: "Guide me!",
      }, {
        key: "filters",
        text: "Filters",
      }]
    }
  },
  computed: {
    ...mapWritableState(useStateStore, ["tab"])
  }
}
</script>