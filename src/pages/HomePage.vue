<template>
  <div>
    <HomeHeader/>
  </div>
</template>

<script>
export default {
    components: {
        HomeHeader: () => import("@/components/home/HomeHeader"),
    },
};
</script>

<style lang="scss" scoped></style>
