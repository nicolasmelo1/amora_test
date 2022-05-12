<template>
    <nav class="flex flex-row p-5 items-center">
        <div class="flex-1">
            <h1>{{ title }}</h1>
        </div>
        <button class="bg-indigo-500 rounded p-2">
            <NuxtLink to="/newsletter">
                Assinar Newsletter
            </NuxtLink>
        </button>
    </nav>
</template>

<script>
export default {
    name: 'HeaderLayout',
    computed: {
        title() {
            return this.$store.getters['header/getTitle']
        }
    }
}
</script>