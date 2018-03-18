<template>
    <div class="counter">
        <div class="counter__icon" @click="decrement">
            <md-icon>remove</md-icon>
        </div>
        <div class="counter__input">
            <input v-model="quantity.count" type="text" readonly/>
        </div>
        <div class="counter__icon" @click="increment">
            <md-icon>add</md-icon>
        </div>
    </div>
</template>

<script src="./counter.js"></script>

<style scoped>
    .counter{
        display: flex;
        flex-flow: row nowrap;
    }
    .counter__icon{
        background-color: #BDBDBD;
    }
    .counter__input{
        width: 30px;
    }
    .counter__input>input{
        width: 100%;
        padding-left: 9px;
    }
</style>
