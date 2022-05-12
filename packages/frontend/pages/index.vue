<template>
    <Posts />
</template>

<script>
export default {
    name: 'PostsPage',
    layout: 'blog',
    created() {
        this.$store.commit('header/setTitle', 'Blog')
    },
}
</script>
