<template>
  <div>
    <v-row justify="center" class="pa-2" style="color:#DCC63C">
      <h1 color="black" style="font-family:'Garamond'">Feelings</h1>
    </v-row>
    <v-row
      v-if="
        $vuetify.breakpoint.name == 'xs' || $vuetify.breakpoint.name == 'sm'
      "
      justify="center"
      class="pa-2"
    >
      <v-img src="@/assets/place.png" max-width="80%"></v-img>
    </v-row>
    <v-row v-else justify="center" class="pa-2">
      <v-img src="@/assets/place.png" max-width="40%"></v-img>
    </v-row>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$vuetify.breakpoint.name);
  },
};
</script>

<style scoped></style>
