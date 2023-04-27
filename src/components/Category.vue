<template>
    <div class="container">
        <div>
            <ul class="d-flex justify-content-center align-items-center">
                <li v-for="(category, index) in categories" :key="index" :class="{ 'selected': category.selected }">
                    {{ category.name }}</li>
            </ul>
        </div>

        <div class="row mb-5">
            <div class="col-3" v-for="(card, index) in cards">
                <div class="card border-0">
                    <div class="card-image position-relative">
                        <img class=" img-fluid" :src="card.img" :alt="card.title">
                        <div class="position-absolute top-50 start-50 translate-middle text-white text-center hover-effect">
                            <div class="d-flex gap-1 align-items-center">
                                <i class="fa-solid fa-cart-shopping small"></i>
                                <span class="small">Add to cart</span>
                            </div>
                            <div class="d-flex gap-1 align-items-center">
                                <i class="fa-solid fa-list-ul small"></i>
                                <span class="small">Details</span>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="fw-bolder">{{ card.title }}</p>
                        <p class="small">{{ card.description }}</p>
                        <div>
                            <span class="small text-decoration-line-through text-primary">{{ card.oldPrice }}</span>
                            <span v-show="card.oldPrice != ''">&nbsp;</span>
                            <span class="text-primary">{{ card.price }}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { categories } from '../data/data';
import { categoryCards } from '../data/data';
export default {
    name: 'Category',
    data() {
        return {
            categories,
            cards: categoryCards
        }
    }
}
</script>

<style lang="scss" scoped>
li {
    border: 1px solid var(--light-grey);
    padding: 0.5rem 3rem;
    font-weight: bolder;
    background-color: var(--bg-white);
    transition: background-color 0.5s;

    &:hover {
        cursor: pointer;
        background-color: var(--white);
    }
}

ul {
    margin-bottom: 3rem;
}

.selected {
    background-color: var(--white);
}

.card-body {
    p {
        cursor: pointer;
        transition: color 0.5s;

        &:hover {
            color: var(--blue);
        }
    }

}

.card-image {
    transition: display 0.5s;
    cursor: pointer;
}

.card-image:hover {

    .hover-effect {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
}
</style>