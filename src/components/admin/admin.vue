<template>
    <div class="admin">
      <h1>Hi Admin</h1>
      <div class="menu" v-if="productList.length > 0 ">
            <md-content class="menu-item md-elevation-8" v-for="(item) in products" :key = item.id>
                 <md-field class="item__text">
                    <label>Price</label>
                    <md-input v-model="item.name" placeholder="Enter Name"></md-input>
                </md-field>
                <md-field class="item__price">
                    <label>Price</label>
                    <md-input v-model="item.price" type="number" placeholder="Enter Price"></md-input>
                </md-field>
            </md-content>
      </div>
      <md-button class="md-raised md-primary" @click="addItem()">Add</md-button>
      <md-button class="md-raised md-primary" @click="saveChanges">Save</md-button>
    </div>
</template>
<script src="./admin.js"></script>

<style scoped>
    .admin{
        max-width: 1000px;
        padding: 2rem;
        box-sizing: border-box;
        margin:auto;
    }
    .menu{
        display: flex;
        flex-flow:column;
        max-width: 650px;
        margin: auto;
    }
    .admin__action>.md-button{
        width: 50%;
        height: 60px;
        font-size: 18px;
        text-transform: capitalize;
    }
    .menu-item {
        font-size: 18px;
        display: flex;
        margin: 0.4rem;
        padding: 0.5rem;
        box-sizing: border-box;
    }
    .item__text{
        flex: 1;
        margin-right: 1rem;
    }
    .item__price{
        flex: 1;
        margin-left: 1rem;
    }
    .item__action{
        flex: 1;
        text-align: center;
        margin-bottom: auto;
        margin-top: auto;
    }
</style>


