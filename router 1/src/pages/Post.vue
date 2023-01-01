<template>

   <div v-if="!route.params.id" class=" container-fluid mt-5">
 <button class="btn btn-dark mb-3" @click="createpostHandler">create post</button>

    <div class="row g-3">
      <div class="col-md-3" v-for='post in posts' :key="post.id">
  <div class="card" >
  <div class="card-header">
    <router-link :to="{ name: 'showpost' ,params:{ id: post.id}}">{{post.title}}</router-link>

   <li>{{post.title}}</li>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> {{post.body}} </li>
 
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
import {useRoute,useRouter}from 'vue-router'
export default {

  data(){
    return{
      posts:[],
      route: useRoute(),
            router:useRouter()
            

    }
  },
  methods:{
    getID(e){
  console.log(e);

    },
    createpostHandler() {
      this.router.push('/createPost')
    },
  },
  mounted(){
     axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => (this.posts = response.data ,console.log(this.route)) )
                                                              
  }
}
</script>

<style>
.router-link-active {
  color: rgba(0, 0, 0, 0.9) !important;
  border-bottom: 2px solid rgba(0, 0, 0, 0.9) !important;
}


</style>