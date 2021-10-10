<template>
  <div height="90vh">
    <v-row justify="center" class="pa-2 my-5" style="background-color:#98cbcf">
      <span
        style="font-weight:500; font-size:24px; font-family:'Garamond'"
        class="white--text"
        >Ton humeur du jour</span
      >
    </v-row>
    <div>
      <v-row justify="center" class="pa-2 mt-5">
        <v-img
          src="@/assets/Emoji/content.svg"
          contain
          max-width="80"
          style="cursor:pointer; margin-right:10%"
          @click="go_to_detail('content')"
        ></v-img>
        <v-img
          src="@/assets/Emoji/detendu.svg"
          contain
          max-width="80"
          style="cursor:pointer"
          @click="go_to_detail('detendu')"
        ></v-img>
      </v-row>
      <v-row justify="center" class="pa-2 mt-5">
        <v-img
          src="@/assets/Emoji/perdu.svg"
          contain
          max-width="80"
          style="cursor:pointer; margin-right:30%"
          @click="go_to_bad_detail('perdu')"
        ></v-img>
        <v-img
          src="@/assets/Emoji/tranquille.svg"
          contain
          max-width="80"
          style="cursor:pointer"
          @click="go_to_detail('tranquille')"
        ></v-img>
      </v-row>
      <v-row justify="center" class="pa-2">
        <v-img
          src="@/assets/Emoji/triste.svg"
          contain
          max-width="80"
          style="cursor:pointer; margin-right:8%"
          @click="go_to_bad_detail('triste')"
        ></v-img>
        <v-img
          v-if="$vuetify.breakpoint.name != 'xs'"
          src="@/assets/bonhomme.jpg"
          contain
          max-width="300"
        ></v-img>
        <v-img
          src="@/assets/Emoji/enerve.svg"
          contain
          max-width="80"
          style="cursor:pointer; margin-left:8%"
          @click="go_to_bad_detail('enerve')"
        ></v-img>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenSize: null,
    };
  },
  watch: {
    screenSize() {
      console.log(window.innerWidth);
    },
  },
  mounted() {
    console.log(window.innerWidth);
    this.screenSize = window.innerWidth;
  },
  methods: {
    go_to_bad_detail(status) {
      this.$store.commit('update_choosenSmiley', status);
      this.$router.push('detail');
    },
    go_to_detail(status) {
      this.$store.commit('update_choosenSmiley', status);
      this.$router.push('good');
    },
  },
};
</script>

<style scoped></style>
