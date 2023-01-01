<template>
<h1 class="text-center">

    {{ success }}

</h1>
<div class="row col-6 container m-5">
    <form @submit.prevent="updatePost">

        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">title</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                v-model.lazy="title">
            <p class="text-danger">
                {{ emptye }}

            </p>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">body</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" v-model.lazy="body"></textarea>
            <p class="text-danger">
                {{ emptyt }}

            </p>
        </div>
        <button class="btn btn-dark" :disabled="loading">
            <div class="spinner-border spinner-border-sm" role="status" v-if="loading"></div>
            edit post
        </button>
    </form>
</div>




</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2'
import { useRoute, useRouter } from 'vue-router'
export default {

    data() {
        return {
            post: "",
            route: useRoute(),
            router: useRouter(),
            title: "" ,
            body: "",

            success: 'Alireza',
            loading: false,

            emptye: '',
            emptyt: ''
        }
    },
    mounted() {
       
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${this.route.params.id}`)
            .then(response => (this.body = response.data.body, this.title=response.data.title))


    },
    
   methods: {
    updatePost() {
        this.validate()
        if (this.emptye == '' && this.emptyt == '') {
            this.loading = true
            axios.put(`https://jsonplaceholder.typicode.com/posts/${this.route.params.id}`, {
                id: this.route.params.id,
                title:this.title,
                body: this.body,


            })
                .then(() => {
                    this.success = 'success'
                    this.loading = false
                    Swal.fire(
                        'Good job!',
                        'post edited successfuly!',
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
            if (this.title === '') {
                this.emptye = 'no cant'
            } else {
                this.emptye = ''
            }
            if (this.body === '') {
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

    <!-- methods: {
        sendPost() {
            this.validate()
            if (this.emptye == '' && this.emptyt == '') {
                this.loading = true
                axios.post('https://jsonplaceholder.typicode.com/posts', {
                    title: this.title,
                    body: this.body

                })
                    .then(() => {
                        this.success = 'success'
                        this.loading = false
                    })
                    .catch(() => {
                        this.success = 'fail'
                        this.loading = false
                    });

            }


        },
        validate() {
            {
                if (this.title === '') {
                    this.emptye = 'no cant'
                } else {
                    this.emptye = ''
                }
                if (this.body === '') {
                    this.emptyt = 'no cant'
                } else {
                    this.emptyt = ''
                }
            }
        }
    }, -->