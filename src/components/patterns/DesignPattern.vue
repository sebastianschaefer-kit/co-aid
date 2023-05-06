<!-- eslint-disable vue/valid-v-for -->
<template>
  <v-expansion-panels v-model="expanded">
    <v-expansion-panel bg-color="green-lighten-5">
      <template v-slot:title>
        <DesignPatternHeader
          :title="pattern.title"
          :maternity="maternity"
          cls="pr-6"
        ></DesignPatternHeader>
      </template>
      <template v-slot:text>
        <div class="d-flex flex-column" style="gap: 12px">
          <div class="text-body-2 text-justify">{{ pattern.description }}</div>
          <DesignPatternImages :images="pattern.images"></DesignPatternImages>
          <div v-if="pattern.tipps">
            <div class="text-body-1">Tipps</div>
            <v-list density="compact" bg-color="green-lighten-5">
              <v-list-item v-for="tipp in pattern.tipps" class="text-body-2 text-justify">
                {{ tipp }}
                <template v-slot:prepend>
                  <v-icon
                    color="primary"
                    class="mr-4"
                    icon="mdi-lightbulb-variant"
                  ></v-icon>
                </template>
              </v-list-item>
            </v-list>
          </div>
          <div v-if="pattern.tradeOffs">
            <div class="text-body-1">Possible Trade-Offs</div>
            <v-list density="compact" bg-color="green-lighten-5">
              <v-list-item
                v-for="tradeOff in pattern.tradeOffs"
                class="text-body-2 text-justify"
              >
                {{ tradeOff }}
                <template v-slot:prepend>
                  <v-icon color="primary" class="mr-4" icon="mdi-alert-circle"></v-icon>
                </template>
              </v-list-item>
            </v-list>
          </div>
          <div v-if="pattern.synergies">
            <div class="text-body-1">Synergies</div>
            <DesignPatternPreview
              v-for="id in pattern.synergies"
              :key="id"
              :patternId="id"
              @scrollToPattern="$emit('scrollToPattern', $event)"
            ></DesignPatternPreview>
          </div>
          <div v-if="pattern.related">
            <div class="text-body-1">Related Patterns</div>
            <DesignPatternPreview
              v-for="id in pattern.related"
              :key="id"
              :patternId="id"
              @scrollToPattern="$emit('scrollToPattern', $event)"
            ></DesignPatternPreview>
          </div>
          <div>
            <div class="text-body-1">References</div>
            <v-list density="compact" bg-color="green-lighten-5">
              <v-list-item
                v-for="ref in pattern.references"
                class="text-body-2 text-justify"
              >
                <div class="font-weight-medium">{{ getReferenceTitle(ref.id) }}</div>
                <div>{{ getReferenceAuthorYear(ref.id) }}</div>
                <a>www.linktothepaper.com</a>
                <template v-slot:prepend>
                  <v-icon class="mr-4" icon="mdi-book-open"></v-icon>
                </template>
              </v-list-item>
            </v-list>
          </div>
        </div>
      </template>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
import { mapActions } from "pinia";
import DesignPatternHeader from "./DesignPatternHeader.vue";
import DesignPatternPreview from "./DesignPatternPreview.vue";
import DesignPatternImages from "./DesignPatternImages.vue";
</script>

<script>
import { usePatternsStore } from "@/store/patterns";

export default {
  name: "DesignPattern",
  props: ["pattern"],
  data() {
    return {
      expanded: undefined,
    };
  },
  computed: {
    maternity() {
      return this.getMaternity(this.pattern);
    },
  },
  watch: {
    pattern: {
      handler(changed) {
        this.expanded = changed.expanded;
        this.$emit("scrollToPattern", changed.id);
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions(usePatternsStore, ["getPattern", "getReference", "getMaternity"]),
    getReferenceAuthorYear(id) {
      const ref = this.getReference(id);
      return ref.authors + " (" + ref.year + ")";
    },
    getReferenceTitle(id) {
      const ref = this.getReference(id);
      return ref.title;
    },
  },
};
</script>

<style>
/* v-expansion-panel-title {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
} */
</style>
