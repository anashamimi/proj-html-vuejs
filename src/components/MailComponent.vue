<template>
    <div class="bg-grey py-5">
        <div class=" d-flex align-content-center justify-content-around p-5">
            <div class="d-flex align-items-center gap-5">
                <div class="bg-mail rounded-circle p-4 d-flex align-items-center justify-content-center">
                    <i class="fa-regular fa-envelope fs-2"></i>
                </div>                
                <p class=" fs-3 monsterrat text-white fw-bolder">Subscribe now and get special offers</p>
            </div>

            <div class="d-flex align-items-center gap-5">
                <input type="email" class="form-control form-control-sm rounded-5 p-2 ah-input" id="email" placeholder="Insert your email">
                <button class="text-uppercase text-white rounded-5 fw-bold">Send</button>
            </div>            
        </div>  
    </div>
</template>

<script>
    export default {
        name: 'MailComponent',
    }
</script>

<style lang="scss" scoped>
.bg-grey{
    background-color: #2e3238;
}

.bg-mail{
    background-color: #2b2e32;
    width: 75px;
    height: 75px;

    i{
        color: var(--grey);
    }
}

.ah-input{
    width: 20rem;
    color: var(--grey);
}

button{
    background-color: var(--blue);
    padding: 0.5rem 3rem;
    border: 0;
    transition: background-color 0.5s;
    &:hover{
        background-color: var(--blue-hover);
    }
}
</style>