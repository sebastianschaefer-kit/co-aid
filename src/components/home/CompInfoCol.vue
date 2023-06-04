<!-- eslint-disable vue/valid-v-for -->
<template>
  <div class="d-flex flex-column">
    <div class="text-container">
      <font class="text-normal">
        In general, the capabilities of humans and AI are different. The goal is to enable AI and
        humans to <font class="text-hl">leverage their respective strengths</font> and
        <font class="text-hl">overcome each other's weaknesses</font>. If the team
        performance exceeds the performance of both the AI and the the human(s), the
        result is called
        <font class="text-hl">complementary team performance (CTP)</font>.
      </font>
      <font class="text-normal">
        To achieve this goal, the AI and the system's collaboration mechanisms must be designed in a way that capitalizes on the strengths of both humans and AI.
      </font>
    </div>
    <v-container>
      <v-row>
        <v-col id="hs-list">
          <v-card height="100%" color="primary" variant="tonal">
            <v-card-title> Humans' Strengths </v-card-title>
            <v-card-text>
              <v-list density="compact">
                <v-list-item color="secondary" v-for="item in humanStrengths">
                  <template v-slot:prepend
                    ><v-icon color="secondary" icon="mdi-plus-circle"></v-icon
                  ></template>
                  <v-list-item-title class="text-wrap"
                    ><font color="#455A64" class="font-weight-medium">{{
                      item
                    }}</font></v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col id="ais-list">
          <v-card height="100%" color="primary" variant="tonal">
            <v-card-title> AI's Strengths </v-card-title>
            <v-card-text>
              <v-list density="compact">
                <v-list-item color="secondary" v-for="item in aiStrengths">
                  <template v-slot:prepend
                    ><v-icon color="secondary" icon="mdi-plus-circle"></v-icon
                  ></template>
                  <v-list-item-title
                    ><font color="#455A64" class="font-weight-medium">{{
                      item
                    }}</font></v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
//
</script>

<script>
export default {
  name: "CompInfoCol",
  data() {
    return {
      humanStrengths: ["Contextualization", "Intuition", "Empathy", "Creativity"],
      aiStrengths: [
        "Processing large amounts of data",
        "Consistency",
        "Finding patterns in data",
        "Probilistic methdos",
      ],
    };
  },
};
</script>

<style>
.v-list-item-title {
  white-space: break-spaces !important;
}
#ais-list {
  padding: 20px 0px 20px 10px !important;
}
#hs-list {
  padding: 20px 10px 20px 0px !important;
}
</style>
