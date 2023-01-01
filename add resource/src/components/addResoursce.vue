<template>
  <div>
    <label for="">title</label>
    <input type="text" v-model='title'/>
  </div>
  <div>
    <label for="">desc</label>
    <input type="text" v-model='desc'/>
  </div>
  <div>
    <label for="">link</label>
    <input type="text" v-model='link'/>
  </div>


    <button @click="addresource">addresource</button>
</template>

<script>
export default {

  data(){
    return{
      id:'',
      title:'',
      desc:'',
      link:''
    }
  },
  methods:{
    addresource(){
      this.id=Date.now()
    // console.log(this.title,this.desc,this.link);
    this.$emit('add-resource',this.title,this.desc,this.link,this.id)
    }
  }
};
</script>

<style></style>
