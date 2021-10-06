<template>
  <div>
    <AuthHeader />
    <!--  -->
    <AuthBody />
  </div>
</template>

<script>
export default {
  components: {
    AuthHeader: () => import('@/components/home/auth/AuthHeader.vue'),
    AuthBody: () => import('@/components/home/auth/AuthBody.vue'),
  },
};
</script>

<style lang="scss" scoped></style>
