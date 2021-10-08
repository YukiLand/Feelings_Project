<template>
  <div>
    <v-row justify="center" class="pa-2">
      <v-img src="@/assets/girlWelcome.jpeg" max-width="300" contain></v-img>
    </v-row>
    <v-window v-model="step">
      <v-window-item :value="1">
        <AuthButton @signin="step_signin" @signup="step_signup" />
      </v-window-item>
      <v-window-item :value="2" class="pa-2">
        <AuthSignin />
      </v-window-item>
      <v-window-item :value="3">
        <AuthSignup />
      </v-window-item>
    </v-window>
  </div>
</template>

<script>
export default {
  components: {
    AuthButton: () => import('@/components/auth/AuthButton'),
    AuthSignin: () => import('@/components/auth/AuthSignin'),
    AuthSignup: () => import('@/components/auth/AuthSignup'),
  },
  props: {
    step1: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    step1() {
      this.step = this.step1;
    },
  },
  data() {
    return {
      step: 1,
    };
  },
  methods: {
    step_signin(item) {
      console.log(item);
      this.step = item;
    },
    step_signup(item) {
      this.step = item;
      console.log(item);
    },
  },
};
</script>

<style scoped>
.smiley {
  background-image: url('../../assets/blueBGCropped.jpg');
  background-size: 100% 100%;
}
.reverseSmiley {
  background-image: url('../../assets/blueBGCropped.jpg');
  background-size: 100% 100%;
  transform: rotate(180deg);
}
.rotateText {
  transform: rotate(180deg);
}
</style>
