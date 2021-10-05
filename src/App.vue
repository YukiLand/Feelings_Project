<template>
  <v-app>
    <!-- Layout component -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </v-app>
</template>

<style scoped>
/**
 * Transition animation between pages
 */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
/* 
@font-face {
  font-family: "GintoNordMedium";
  src: local("GintoNordMedium"),
    url("./assets/fonts/GintoNord/ABCGintoNord-Medium.woff") format("truetype");
}

@font-face {
  font-family: "GintoNordRegular";
  src: local("GintoNordRegular"),
    url("./assets/fonts/GintoNord/ABCGintoNord-Regular.woff") format("truetype");
} */
</style>
