<template>
    <header>
        <section class="border-bottom">
            <div class="container d-flex justify-content-between">
                <div>
                    <ul class="d-flex align-items-center gap-3 py-3">
                        <li>
                            <i class="fa-brands fa-facebook-f"></i>
                        </li>
                        <li>
                            <i class="fa-brands fa-twitter"></i>
                        </li>
                        <li>
                            <i class="fa-brands fa-instagram"></i>
                        </li>
                        <li>
                            <i class="fa-brands fa-youtube"></i>
                        </li>
                    </ul>

                </div>

                <div class="d-flex align-items-center text-grey">
                    <div class="p-3 cursor">
                        <p>Shopping Cart</p>
                    </div>

                    <div class="p-3 border-start border-end cursor">
                        <p>My Account</p>
                    </div>

                    <div
                        class="d-flex align-items-center justify-content-center gap-2 p-3 fw-semibold bg-light ah-cart text-dark cursor">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <p>CART</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="container d-flex align-items-center justify-content-between">
            <img src="../../public/images/classic_shop_logo1x.png" alt="logo">
            <div class="d-flex align-items-center gap-5">
                <NavBar v-for="links in linkList" :link="links.link" :class="{'active': links.active}"/>
                <button class="text-uppercase text-white rounded-5 fw-bold">shop now!</button>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            
        </section>
    </header>
</template>

<script>
import NavBar from './NavBar.vue';
import { links } from '../data/data';
export default {
    name: 'HeaderComponent',
    components: {
        NavBar,
    },

    data() {
        return {
            linkList: links,
        }
    }
}
</script>

<style lang="scss" scoped>
ul {
    color: var(--dark-grey);
    li {
        cursor: pointer;
    }
}

.text-grey{
    color: var(--grey);
}

.ah-cart {
    width: 200px;
}

button{
    background-color: var(--blue);
    padding: 0.5rem 2rem;
    border: 0;
    transition: background-color 0.5s;
    &:hover{
        background-color: var(--blue-hover);
    }
}

i{
    cursor: pointer;
}
</style>