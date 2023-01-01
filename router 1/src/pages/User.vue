<template>

  <!-- <router-link to="/showUser" @click="getID(user.id)">  </router-link> -->
   <div v-if="!this.route.params.id" class=" container-fluid mt-5">
    <div class="row g-3">
      <div class="col-md-3" v-for='user in Users' :key="user.id">
  <div class="card" >
  <div class="card-header">
  <router-link :to='{name:"showUser" , params:{id:user.id}}'>  {{user.name}}</router-link>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> {{user.username}} </li>
    <li class="list-group-item"> {{user.email}}</li>
    <li class="list-group-item">{{user.phone}}</li>
  </ul>
</div>
</div>
</div>
</div>

  <div v-else>
<router-view></router-view>

  </div>


</template>

<script>
import axios from 'axios';
import {useRoute}from 'vue-router'
export default {

  data(){
    return{
      Users:[],
            route:useRoute()

    }
  },
  methods:{
    getID(e){
console.log(e);

    },
  },
  mounted(){
     axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => (this.Users = response.data ,console.log(this.route.params.id)) )
     
  }   
}
</script>

<style>
.router-link-active {
  color: rgba(0, 0, 0, 0.9) !important;
  border-bottom: 2px solid rgba(0, 0, 0, 0.9) !important;
}


</style>