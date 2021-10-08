<template>
  <v-container fluid>
    <v-row justify="center">
      <v-card
        class="d-flex flex-column flex-grow-1 pa-2"
        style="background-color: #b7e5ec; justify:center"
        elevation="0"
        max-width="400px"
        height="100%"
      >
        <v-card-text>
          <v-text-field
            v-model="email"
            :rules="[rules.required]"
            :validate-on-blur="false"
            :error="error"
            label="Email"
            class="pt-1"
            name="email"
            outlined
            @change="resetErrors"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="showPassword ? 'text' : 'password'"
            :error="error"
            :error-messages="errorMessages"
            label="Mot de passe"
            name="password"
            outlined
            @change="resetErrors"
            @keyup.native.enter="$router.push('humeur')"
            @click:append="showPassword = !showPassword"
          ></v-text-field>

          <v-row>
            <v-checkbox v-model="remember" label="Me reconnaitre"></v-checkbox>
            <v-spacer></v-spacer>
            <span style="text-decoration:underline; cursor:pointer; font-family:'Garamond'" class="mt-5"
              >mot de passe oublié</span
            >
          </v-row>
          <span
            style="text-decoration:underline; cursor:pointer"
            class="mt-5"
            @click="$router.push('CGU')"
            >Cliquez ici pour consulter les conditions générales
            d'utilisations</span
          >
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outlined width="50%" @click="signin">Connexion</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
      <!-- </v-row> -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      // form error
      error: false,
      errorMessages: '',
      remember: false,

      errorProvider: false,
      errorProviderMessages: '',
      showPassword: false,

      email: '',
      password: '',
      rules: {
        required: (value) => (value && Boolean(value)) || 'Champs requis',
      },
    };
  },
  methods: {
    resetErrors() {
      this.error = false;
      this.errorMessages = '';

      this.errorProvider = false;
      this.errorProviderMessages = '';
    },
    signin() {
      console.log('this.email :>> ', this.email);
      console.log('this.password :>> ', this.password);
      this.$router.push('humeur');
    },
  },
};
</script>

<style lang="scss" scoped></style>
