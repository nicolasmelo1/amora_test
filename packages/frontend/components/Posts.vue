<template>
    <div class="h-full">
        <NuxtLink 
        v-for="post in posts" 
        :key="post.id" 
        :to="`/posts/${post.id}`" 
        class="w-full p-5 flex flex-row items-center"
        >
            <img :href="post.image" class="w-5 h-5"/>
            <p
            class="text-xl font-bold text-left flex-1 ml-5"
            >
                {{ post.title }}
            </p>
        </NuxtLink>
    </div>
</template>

<script>
export default {
    name: 'PostsList',
    data() {
        return {
            posts: [{
                id: 1,
                title: 'Post 1',
                image: 'https://via.placeholder.com/300x200',
            }],
        }
    }
}
</script>   