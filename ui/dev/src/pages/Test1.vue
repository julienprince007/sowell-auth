<template>
  <q-page padding>
    <Login :store="$store" />
    <p>{{ $store.state.auth.jwt }}</p>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    console.log("store ", store.state.auth.jwt);

    return {};
  },
};
</script>

<style lang="sass" scoped>
.directive-target
  width: 50px
  height: 50px
</style>
