<template>
  <div>
    <div>
      <v-row justify="center" class="pa-2" style="color:#DCC63C">
        <h1 color="black" style="font-family:'Garamond'">Feelings</h1>
      </v-row>
    </div>
    <v-row justify="center" class="pa-2 mt-15">
      <v-img src="@/assets/emojiStar.png" max-width="150" contain></v-img>
    </v-row>
    <v-row justify="center" class="pa-2 mt-15">
      <div
        style="background-color: #d8d435; width:300px; height:120px; border-radius:10px"
        class="pa-6"
      >
        <span style="text-align:center; font-family:'Garamond'">
          Je suis fier de toi, continues comme ca ! <br />
          Dit nous en plus sur ton ressentis !
        </span>
      </div>
    </v-row>
    <v-row justify="center" class="pa-2">
      <div
        style="background-color: #d0df8c; width:300px; height:80px; border-radius:10px"
        class="pa-6"
      >
        ...
      </div>
    </v-row>
    <v-row justify="center" class="px-15 py-5">
      <span style="font-size:20px; font-weight:bold; text-align:center; font-family:'Garamond'">
        Pour en profiter encore plus, nous te proposons des
        <u @click="$router.push('place')" style="cursor:pointer; font-family:'Garamond'"
          >lieux de détentes</u
        >
        à proximité de chez toi !</span
      >
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
