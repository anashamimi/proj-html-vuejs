<template>
    <div class="card col-4">
        <div class="card-img overflow-hidden">
            <img class="img-fluid" :src="image" :alt="title">
        </div>
        <div class="card-body">
            <p class="hover-blue">{{ title }}</p>
            <p class="small">{{ date }} | <span class="hover-blue">{{ comments }} Comments</span></p>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardZoom',
    props: ['image', 'title', 'date', 'comments', 'description']
}
</script>

<style lang="scss" scoped>
img {
    transition: transform 1s, opacity 0.8s 0.2s;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        opacity: 0.8;
    }
}

.hover-blue {
    cursor: pointer;
    transition: color 0.5s;
    &:hover {
        color: var(--blue);
    }
}
</style>