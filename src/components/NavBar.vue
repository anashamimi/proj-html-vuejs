<template>
    <nav class="navbar navbar-expand-lg">
        <div class="d-flex align-items-center">
            <ul>
                <li class="py-4">{{ link }}</li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    props: ['link', 'image'],

}
</script>

<style lang="scss" scoped>
ul {
    color: var(--dark-grey);
    li {
        cursor: pointer;
    }
}
</style>