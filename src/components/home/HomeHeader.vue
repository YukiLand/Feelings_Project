<template>
  <div class="biggest">
    <v-row justify="center" class="pa-15">
      <h3 style="font-family:'Garamond'">Feelings</h3>
    </v-row>
    <div>
      <v-row justify="center">
        <v-img
          src="@/assets/blueBGSmiley.jpg"
          max-width="800px"
          @click="go_to_auth()"
          style="height: 350px;width: 350px; cursor:pointer"
        ></v-img>
      </v-row>
    </div>
    <v-row justify="center" class="pa-2 mt-2">
      <span
        style="font-size:24px; font-weight:600; font-family:'Garamond'"
        class="white--text"
        >A l'écoute de vos sentiments</span
      >
    </v-row>
  </div>
</template>

<script>
export default {
  methods: {
    go_to_auth() {
      this.$router.push('auth');
    },
  },
};
</script>

<style scoped>
.biggest {
  background-color: #cbecf1;
}
h3 {
  font-family: 'EB Garamond', serif;
  color: #dcc63c;
  font-size: 70px;
}
</style>
