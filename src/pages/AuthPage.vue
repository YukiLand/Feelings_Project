<template>
  <div>
    <AuthHeader />
    <AuthBody :step1="step1" />
    <AuthFooter @stepTo0="stepNum" />
  </div>
</template>

<script>
export default {
  watch: {
    // stepTo0() {
    //   console.log(this.stepNum);
    // },
  },
  components: {
    AuthHeader: () => import('@/components/auth/AuthHeader.vue'),
    AuthBody: () => import('@/components/auth/AuthBody.vue'),
    AuthFooter: () => import('@/components/auth/AuthFooter.vue'),
  },
  data() {
    return {
      step1: null,
    };
  },
  methods: {
    stepNum(item) {
      this.step1 = item;
    },
  },
};
</script>

<style lang="scss" scoped></style>
