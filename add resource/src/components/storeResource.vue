<template>
  <!-- <button @click="test">show resource</button> -->
  <ul>
    <li v-for="res in resource" :key="res.id" >
      <span>{{res.title}}</span>
      <span>{{res.desc}}</span>
      <span>{{res.link}}</span>
        <button @click="$emit('delete-resource',res.id)">show resource</button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['resource'],
  methods: {
    // test(id) {
    // // eslint-disable-next-line vue/no-mutating-props
    // this.resource= this.resource.filter((res)=>{
    //   return res.id !==id
    // })
    // },
  },
};
</script>

<style></style>
