<template>
    <div class="container">
        <h1>{{ header }}</h1>
        <button>Back</button>
    </div>
</template>

<script setup lang="ts">

const header = 'Block name'
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
}
</style>