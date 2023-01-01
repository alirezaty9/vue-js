import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Post from './pages/Post.vue';
import User from './pages/User.vue';
import showUser from './pages/showUser.vue';
import showPost from './pages/showPost.vue';
import createPost from './pages/createPost.vue';
import editPost from './pages/editPost.vue';






const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/createPost", name: "createPost", component: createPost },
 


    {
        path: "/user", name: "user", component: User, children: [
            { path: ':id', name: 'showUser', component: showUser }
        ]
    },
    {
        path: "/post", name: "post", component: Post, children: [
            {
                path: ':id', name: 'showpost', component: showPost,
            },
            { path: "/post/edit/:id", name: "edit", component: editPost },
        ]
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;