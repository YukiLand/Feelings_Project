<template>
  <div>
    <SmileyHeader />
    <SmileyBody />
  </div>
</template>

<script>
export default {
  components: {
    SmileyHeader: () => import('@/components/smiley/SmileyHeader'),
    SmileyBody: () => import('@/components/smiley/SmileyBody'),
  },
};
</script>

<style lang="scss" scoped></style>
