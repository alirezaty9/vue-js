<template>
  <!-- <store-resource></store-resource>
  <add-resoursce></add-resoursce> -->

  <div>
    <button @click="changeComponents('storeResource')" class="btn btn-info">
      storeResource
    </button>
    <button @click="changeComponents('addResoursce')" class="btn btn-info">
      addResoursce
    </button>
  </div>
  <keep-alive>
    <component
      :is="whichComponents"
      @add-resource="reciveResource"
      @delete-resource="deleteRes"
      :resource="resources"
    ></component>
  </keep-alive>
</template>

<script>
import storeResource from './components/storeResource.vue';
import addResoursce from './components/addResoursce.vue';

export default {
  inheritAttrs: false,
  data() {
    return {
      whichComponents: 'addResoursce',
      resources: [],
    };
  },
  methods: {
    deleteRes(id) {
      this.resources = this.resources.filter((findfreind) => {
        return findfreind.id != id;
      });


    },

    changeComponents(status) {
      this.whichComponents = status;
      
    },
    reciveResource(title, desc, link, id) {
      let form = {
        title: title,
        desc: desc,
        link: link,
        id: id,
      };

      console.log('hello');
      this.resources.push(form);
      console.log(this.resources);
    },
  },

  components: { storeResource, addResoursce },
};
</script>

<style scoped></style>
