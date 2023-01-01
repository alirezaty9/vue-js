<template>

  <div class=" container-fluid mt-5">
    <div class="row g-3">
      <div class="col-md-3">
        <div class="card">
          <div class="card-header">

            {{ post.title }}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"> {{ post.body }} </li>

          </ul>
          <div class="card-footer">
            <button class="btn btn-danger m-1">delete</button>
            <button class="btn btn-dark m-1" @click="goToEdit">edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>



</template>

<script>
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router'
export default {

  data() {
    return {
      post: '',
      route: useRoute(),
      router: useRouter()

    }
  },
  mounted() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.route.params.id}`)
      .then(response => (this.post = response.data))


  },
  methods: {
    goToEdit() {

      this.router.push({ name: 'edit', })
    }
  }
}
</script>

<style>
.router-link-active {
  color: rgba(0, 0, 0, 0.9) !important;
  border-bottom: 2px solid rgba(0, 0, 0, 0.9) !important;
}
</style>