
<template>
  <div class="home">
      <h1>Please select items from menu</h1>
      <div class="menu">
                <md-content class="menu-item md-elevation-8" v-for="(item) in products" :key = item.id>
                    <h3 class="item__text">{{item.name}}</h3>
                    <h3 class="item__price">INR {{item.price}}</h3>
                    <div class="item__action">
                        <counter v-if="item.count > 0" :qtyObj= "{ count: item.count, id: item.id }"  @change="onChangeQty($event)"></counter>
                        <md-button v-if="item.count === 0" class="md-raised md-primary" @click="selectMenuItems(item)">Add</md-button>
                    </div>
                </md-content>
          
        <div class="home__action">
          <md-button v-if="isMenuItemSelected" class="md-raised md-primary" @click="proceedToCheckout">Checkout</md-button>
          <md-button v-if="!isMenuItemSelected" class="md-raised" disabled>Checkout</md-button>
        </div>
      </div>
  </div>
</template>

<script src="./home.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home{
        max-width: 1000px;
        padding: 2rem;
        box-sizing: border-box;
        margin:auto;
    }
    .home__action>.md-button{
        width: 50%;
        height: 60px;
        font-size: 18px;
        text-transform: capitalize;
    }
    .menu{
        display: flex;
        flex-flow:column;
        max-width: 650px;
        margin: auto;
    }
    .menu-item {
        font-size: 18px;
        display: flex;
        margin: 0.4rem;
    }
    .item__text{
        flex: 1
    }
    .item__price{
        flex: 1;
    }
    .item__action{
        flex: 1;
        text-align: center;
        margin-bottom: auto;
        margin-top: auto;
    }
</style>
