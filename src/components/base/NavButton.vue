<template>
 <v-btn
   :active="path === $route.path"
   :href="path"
   variant="text"
 >
    <div class="font-weight-medium">{{title}}</div>
    <!--<hr v-show="active" color="primary" style="border-width: 2px;border-radius: 0px;">-->
  </v-btn>
</template>

<script>
export default {
  name: "NavButton",
  props: ["title", "path"]
}
</script>