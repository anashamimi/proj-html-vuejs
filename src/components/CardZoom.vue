<template>
    <div class="card col-4 border-0 mb-5">
        <div class="card-img overflow-hidden rounded-0 pb-3">
            <img class="img-fluid" :src="image" :alt="title">
        </div>
        <div class="card-body p-0">
            <p class="hover-blue fw-bolder montserrat">{{ title }}</p>
            <p class="small pb-3">{{ date }} | <span class="hover-blue">{{ comments }} Comments</span></p>
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