<template>
  <div>
    <v-row justify="center" class="pa-2" style="color:#DCC63C">
      <h1 color="black" style="font-family:'Garamond'">Feelings</h1>
    </v-row>
    <v-row justify="center" class="pa-2">
      <v-img
        v-if="choosenSmiley == 'content'"
        src="@/assets/Emoji/content.svg"
        max-width="100px"
      ></v-img>
      <v-img
        v-if="choosenSmiley == 'detendu'"
        src="@/assets/Emoji/detendu.svg"
        max-width="100px"
      ></v-img>
      <v-img
        v-if="choosenSmiley == 'enerve'"
        src="@/assets/Emoji/enerve.svg"
        max-width="100px"
      ></v-img>
      <v-img
        v-if="choosenSmiley == 'perdu'"
        src="@/assets/Emoji/perdu.svg"
        max-width="100px"
      ></v-img>
      <v-img
        v-if="choosenSmiley == 'tranquille'"
        src="@/assets/Emoji/tranquille.svg"
        max-width="100px"
      ></v-img>
      <v-img
        v-if="choosenSmiley == 'triste'"
        src="@/assets/Emoji/triste.svg"
        max-width="100px"
      ></v-img>
    </v-row>
    <v-row justify="center" class="pa-2 mt-15">
      <div
        style="background-color: #d8d435; width:300px; height:80px; border-radius:10px; font-family:'Garamond'"
        class="pa-6 mr-10"
      >
        Que se passe-t'il ?
      </div>
    </v-row>
    <v-row justify="center" class="pa-2">
      <div
        style="background-color: #d0df8c; width:300px; height:80px; border-radius:10px; font-family:'Garamond'"
        class="pa-6 ml-10"
      >
        Je me sens {{ text }}
      </div>
    </v-row>
    <v-row justify="center" class="pa-2">
      <div
        style="background-color: #d8d435; width:300px; height:80px; border-radius:10px; font-family:'Garamond'"
        class="pa-6 mr-10"
      >
        Nous allons t'aider
      </div>
    </v-row>
    <v-row justify="center" class="pa-2">
      <div
        v-for="(item, i) in img"
        :key="i"
        class="dot pt-5 pl-3 mx-2"
        style="cursor:pointer"
        :style="item.color"
        @click="displayText = true"
      >
        <span style="font-size:14px; font-family:'Garamond'">
          {{ item.text }}
        </span>
      </div>
    </v-row>
    <v-row justify="center" class="pa-2">
      <span v-if="displayText" style="font-family:'Garamond'">
        Merci, ton choix à bien été pris en compte, Tu vas être rapidement
        redirigé vers ton choix.
      </span>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['choosenSmiley']),
  },
  mounted() {
    console.log(this.choosenSmiley);
    this.display_icon(this.choosenSmiley);
  },
  data() {
    return {
      text: null,
      displayText: false,
      img: [
        {
          text: 'Contacter une personne',
          color: 'background-color:#6ac98f',
        },
        {
          text: 'Se rendre dans un espace détente',
          color: 'background-color:#97dbc2',
        },
        {
          text: 'En parler sur un chat',
          color: 'background-color:#6bc891',
        },
        {
          text: 'Conseil médical',
          color: 'background-color:#afe4da',
        },
      ],
    };
  },
  methods: {
    display_icon(status) {
      if (status == 'content') {
        this.text = 'content';
      } else if (status == 'detendu') {
        this.text = 'détendu(e)';
      } else if (status == 'enerve') {
        this.text = 'énervé(e)';
      } else if (status == 'perdu') {
        this.text = 'perdu(e)';
      } else if (status == 'tranquille') {
        this.text = 'tranquille';
      } else if (status == 'triste') {
        this.text = 'triste';
      }
    },
  },
};
</script>

<style scoped>
.dot {
  height: 120px;
  width: 120px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
</style>
