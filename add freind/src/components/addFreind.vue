<template>
 <form @click.prevent>
    <div>
    <input type="text" v-model="addFrind">


    </div>
    <button @click="addFreindHandler">click</button>
 </form>
</template>

<script>
export default {
data(){
    return{
        addFrind:''
    }
},
methods:{
    addFreindHandler(){
        // console.log(this.addFrind);
        this.$emit('add-freind',this.addFrind)
    }
}
}
</script>

<style>

</style>