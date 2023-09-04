<template>
    <Navbar></Navbar>
    <slot></slot>
    <Sidebar></Sidebar>
</template>

<script setup>
import Navbar from "../../pages/admin/navbar.vue";
import Sidebar from "../../pages/admin/sidebar.vue";
</script>

<style scoped>

</style>
