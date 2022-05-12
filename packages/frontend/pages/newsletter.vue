<template>
    <NewsletterForm/>
</template>

<script>
export default {
    name: 'NewsletterPage',
    layout: 'blog',
    created() {
        this.$store.commit('header/setTitle', 'Newsletter')
    },
}
</script>