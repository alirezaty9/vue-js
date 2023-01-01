
<template>
  <h1 class="text-center">

    {{ success }}

  </h1>
  <div class="row col-6 container m-5">
    <form @submit.prevent="sendPost">

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
          v-model.lazy="email">
        <p class="text-danger">
          {{ emptye }}

        </p>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model.lazy="text"></textarea>
        <p class="text-danger">
          {{ emptyt }}

        </p>
      </div>
      <button class="btn btn-dark " :disabled="loading">
        <div class="spinner-border spinner-border-sm" role="status" v-if="loading"></div>
      create post
      </button>
    </form>
  </div>

</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2'


export default {

  data() {
    return {
      email: '',
      text: '',

      success: 'Alireza',
      loading: false,

      emptye: '',
      emptyt: ''

    }
  },

  methods: {
    sendPost() {
      this.validate()
      if (this.emptye == '' && this.emptyt == '') {
        this.loading = true
        axios.post('https://jsonplaceholder.typicode.com/posts', {
          email: this.email,
          text: this.text

        })
          .then(() => {
            this.success = 'success'
            this.loading = false
            Swal.fire(
              'Good job!',
              'post created successfuly!',
              'success'
            )
          })
          .catch(() => {
            this.success = 'fail'
            this.loading = false
          });

      }


    },
    validate() {
      {
        if (this.email === '') {
          this.emptye = 'no cant'
        } else {
          this.emptye = ''
        }
        if (this.text === '') {
          this.emptyt = 'no cant'
        } else {
          this.emptyt = ''
        }
      }
    }
  },

}
</script>

<style>
.router-link-active {
  color: rgba(0, 0, 0, 0.9) !important;
  border-bottom: 2px solid rgba(0, 0, 0, 0.9) !important;
}
</style>