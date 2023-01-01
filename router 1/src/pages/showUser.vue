<template>

 <div class=" container-fluid mt-5">
    <div class="row g-3">
      <div class="col-md-3" >
  <div class="card" >
  <div class="card-header">
   {{User.name}}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> {{User.username}} </li>
    <li class="list-group-item"> {{User.email}}</li>
    <li class="list-group-item">{{User.phone}}</li>
  </ul>
</div>
</div>
</div>
</div>
  


</template>

<script>
import axios from 'axios';
import {useRoute} from 'vue-router'
export default {

  data(){
    return{
      User: '',
      route:useRoute()
    }
  },
  mounted() {
     axios
      .get(`https://jsonplaceholder.typicode.com/users/${this.route.params.id}`)
      .then(response => (this.User = response.data, console.log(this.User)))
    
  
  }
}
</script>

<style>
.router-link-active {
  color: rgba(0, 0, 0, 0.9) !important;
  border-bottom: 2px solid rgba(0, 0, 0, 0.9) !important;
}
</style>