<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        label="Your Email *"
        hint="Name and surname"
        lazy-rules
      />
      <q-input filled type="password" v-model="password" label="Your age *" />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script lang="js">
import { ref } from "vue";
export default {
  name: "Login",
  setup() {
    const name = ref("");
    const password = ref("null");

    const onSubmit = () => {
      console.log("name", name.value);
      console.log("password", password.value);
    };

    return {
      name,
      password,
      onSubmit,
    };
  },
};
</script>

<style scoped></style>
