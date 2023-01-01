<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          totam, ratione, voluptas eveniet soluta incidunt itaque optio beatae
          id temporibus, ex exercitationem sint ad earum in sed? Quam, cum sunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          totam, ratione, voluptas eveniet soluta incidunt itaque optio beatae
          id temporibus, ex exercitationem sint ad earum in sed? Quam, cum sunt.
        </p>
      </div>
    </div>
  </div>
  <router-link :to="{name:'user'}" class="btn btn-dark mx-5">go to user</router-link>
  <!-- <button @click="test">go to user</button> -->
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  data() {
    return {
    router:useRouter()
  }
  },
  methods: {
    test() {
    this.router.push('/user')
  }
}
};
</script>

<style>
</style>