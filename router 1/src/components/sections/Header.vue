<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">WebProg.ir</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/user">Users</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/post">Posts</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
// import axios from 'axios';
export default {
  data(){
    return{
post:''

    }
  },
  

};
</script>

<style>
.router-link-active {
  color: rgba(0, 0, 0, 0.9) !important;
  border-bottom: 2px solid rgba(0, 0, 0, 0.9) !important;
}
</style>