<template>
  <div>
    <v-row justify="center" class="pa-2 mt-15">
      <!-- <div class="smiley" style="width: 250px"> -->
      <v-img
        src="@/assets/blueBGSmiley.jpg"
        max-height="80px"
        max-width="250px"
      >
        <v-btn
          style="border-radius:10px; font-size:18px; font-weight:bold"
          height="80px"
          width="100%"
          text
          outlined
          @click="go_signin()"
        >
          <span style="opacity: 1; font-family:'Garamond'" >
            Connexion
          </span>
        </v-btn>
      </v-img>
      <!-- </div> -->
    </v-row>
    <v-row justify="center" class="pa-2 mt-6">
      <v-img
        src="@/assets/blueBGSmiley.jpg"
        max-height="80px"
        max-width="250px"
        style="transform: rotate(180deg);"
      >
        <v-btn
          style="border-radius:10px"
          height="80px"
          width="100%"
          text
          outlined
          @click="go_signup()"
        >
          <span class="rotateText" style="font-family:'Garamond'">
            Inscription
          </span>
        </v-btn>
      </v-img>
    </v-row>
  </div>
</template>

<script>
export default {
  methods: {
    go_signin() {
      this.$emit('signin', 2);
    },
    go_signup() {
      this.$emit('signup', 3);
    },
  },
};
</script>

<style scoped>
.smiley {
  background-size: 200px 100%;
}
.reverseSmiley {
  transform: rotate(180deg);
}
.rotateText {
  transform: rotate(180deg);
}
</style>
