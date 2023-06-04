<template>
  <div class="d-flex flex-row justify-space-evenly" style="width: 100%">
    <div
      v-for="img in images"
      :key="img.fileName"
      class="d-flex flex-column justify-space-between"
      :style="{ width: img.width }"
    >
      <v-img
        :src="'/co-aid/assets/' + img.fileName"
        class="mx-5"
        width="100%"
        style="align-self: center"
      ></v-img>
      <font
        v-if="img.description"
        class="mt-1 text-caption text-right font-weight-medium"
        style="line-height: 1rem"
        >{{ img.description }}</font
      >
      <font
        v-if="img.source"
        class="mt-1 text-caption text-right"
        style="line-height: 1rem"
        >{{ this.getCaptionText(img.source) }}</font
      >
    </div>
  </div>
</template>

<script>
import { usePatternsStore } from "@/store/patterns";
import { mapActions } from "pinia";

export default {
  name: "DesignPatternImages",
  props: ["images"],
  methods: {
    ...mapActions(usePatternsStore, ["getReference"]),
    getCaptionText(id) {
      const ref = this.getReference(id);
      const firstAuthor = ref.authors.split(", ")[0].split(" ")[1];
      const title = ref.title;
      const year = ref.year;
      return firstAuthor + " et al. (" + year + "): " + title;
    },
  },
};
</script>
