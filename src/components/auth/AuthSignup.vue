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
        <v-text-field
          v-model="name"
          :rules="[rules.required]"
          :validate-on-blur="false"
          :error="error"
          label="Prénom"
          class="pt-1"
          name="name"
          outlined
          @change="resetErrors"
        ></v-text-field>

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
          @click:append="showPassword = !showPassword"
          @keyup.native.enter="$router.push('humeur')"
        ></v-text-field>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outlined width="50%" @click="signup" style="font-family:'Garamond'">Inscription</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
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

      errorProvider: false,
      errorProviderMessages: '',
      showPassword: false,

      email: '',
      password: '',
      name: '',
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
    signup() {
      console.log('this.email :>> ', this.email);
      console.log('this.name :>> ', this.name);
      console.log('this.password :>> ', this.password);
      this.$router.push('humeur');
    },
  },
};
</script>

<style lang="scss" scoped></style>
