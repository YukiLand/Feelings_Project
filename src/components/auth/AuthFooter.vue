<template>
  <v-row justify="center" class="mt-15">
    <v-btn outlined text color="#DCC63C" @click="go_home()" class="mt-5" style="font-family:'Garamond'"
      >Retourner à l'accueil</v-btn
    >
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      step1: 0,
    };
  },
  methods: {
    go_home() {
      this.$emit('stepTo0', 1);
      console.log('this.step :>> ', this.step);
      this.timeOut = setTimeout(() => {
              this.$emit('stepTo0', 0);

      }, 10);
    },
  },
};
</script>

<style lang="scss" scoped></style>
