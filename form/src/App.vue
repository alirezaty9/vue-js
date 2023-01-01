<template>
  <div class="" v-for="i in display" :key="i">
    {{ i.names }}  {{i.family}}
  </div>
<!-- {{display}} -->

  <form @submit.prevent="">
    <div class="">
      <label for="">name</label>
      <input type="text" v-model="name" />
    </div>

    <div class="">
      <label for="">family</label>
      <input type="text" v-model="family" />
    </div>

    <div class="">
      <button @click="sendRequest">send</button>
    </div>
  </form>
</template>

<script>
import Axios from 'axios';
export default {
  data() {
    return {
      name: '',
      family: '',
      display: [],
    };
  },

  methods: {
    sendRequest() {
      Axios.post(
        'https://vue-js--maximillian-default-rtdb.asia-southeast1.firebasedatabase.app/test.json',
        {
          name: this.name,
          family: this.family,
        }
      );

    
    },
  },
  mounted() {
    Axios.get(
      'https://vue-js--maximillian-default-rtdb.asia-southeast1.firebasedatabase.app/test.json'
    ).then((res) => {
      for (let i in res.data) {
        let names = res.data[i].name;
        let family = res.data[i].family;

        this.display.push({names, family});
         console.log(this.display);
      }
    })

  },
};
</script>

<style></style>
