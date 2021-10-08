<template>
  <div>
    <v-row justify="center" class="pa-2 my-5" style="background-color:#98cbcf">
      <v-spacer></v-spacer>
      <span style="font-weight:bold; font-size:24px; font-family:'Garamond'" class="ml-15">Confidentialité</span>
      <v-spacer></v-spacer>
      <span @click="$router.push('auth')" style="cursor:pointer; font-family:'Garamond'" class="mr-5"> Retour</span>
    </v-row>
    <v-row justify="center" class="pa-4">
      <p style="font-weight:bold; text-align:center; font-family:'Garamond'">
        Pour une meilleure utilisation de ton application, nous t’encourageons à
        autoriser les notifications sur ton appareil !
      </p>
    </v-row>
    <v-row justify="center" class="pa-4">
      <v-checkbox
        v-model="accept"
        label="J’accepte les conditions générales d’utilisation et récolte des données"
      >
      </v-checkbox>
    </v-row>
    <v-row justify="center" class="pa-4">
      <v-checkbox
        v-model="more"
        label="En savoir plus sur la gestion de vos données et vos droits de rétractation"
      >
      </v-checkbox>
    </v-row>
    <v-row justify="center" class="pa-4 my-5" style="background-color:#98cbcf">
      <span style="font-weight:bold; font-size:24px; font-family:'Garamond'"
        >Conditions d'utilisations</span
      >
    </v-row>
    <v-row justify="center" class="pa-4">
      <v-checkbox
        v-model="notif"
        label="Je souhaite recevoir les notifications"
      >
      </v-checkbox>
    </v-row>
    <v-row justify="center" class="pa-4">
      <v-checkbox
        v-model="contact"
        label="J’accepte d’être contacté par les utlisateurs du chat"
      >
      </v-checkbox>
    </v-row>
    <v-row justify="center" class="pa-4">
      <p
        style="font-weight:bold; font-size:24px; color:purple; text-align:center;font-family:'Garamond'"
      >
        Pour ton bien être, et en toute intimité, Feelings te propose de
        partager ton ressenti avec ton employeur
      </p>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['acceptCGU', 'moreInfo', 'notifs', 'contactChat']),
  },
  data() {
    return {
      accept: null,
      more: null,
      notif: null,
      contact: null,
    };
  },
  watch: {
    accept() {
      this.$store.commit('update_acceptCGU', this.accept);
    },
    more() {
      this.$store.commit('update_moreInfo', this.more);
    },
    notif() {
      this.$store.commit('update_notifs', this.notif);
    },
    contact() {
      this.$store.commit('update_contactChat', this.contact);
    },
  },
};
</script>

<style lang="scss" scoped></style>
