
<template>
  <div class="home">
      <h1>Please review you order</h1>
      <div class="menu">
          <md-content class="menu-item md-elevation-8" v-for="(item) in selectedProducts" :key = item.id>
                <h3 class="item__text">{{item.name}}</h3>
                <h3 class="item__price">INR {{item.totalCost}}</h3>
                <div class="item__action">
                    <counter v-if="item.count > 0" :qtyObj= "{ count: item.count, id: item.id }"  @change="onChangeQty($event)"></counter>
                </div>   
            </md-content>
            <md-divider></md-divider>
            <md-content class=" total-bill md-elevation-5"> 
                <h3>TOTAL BILL</h3>    
                <h3>INR {{ totalBill }}</h3>
            </md-content>
        <div class="home__action" >
          <md-button v-if="totalBill > 0" class="md-raised md-primary" @click="proceedToPay()">Proceed to Payment</md-button>
          <md-button v-if="totalBill === 0" class="md-raised md-primary" @click="restartOrder()">Start Order Again</md-button>
        </div>
      </div>
  </div>
</template>

<script src="./checkout.js"></script>

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
    .total-bill {
        padding: 1rem;
        box-sizing: border-box;
        display: flex;
    }
    .total-bill h3{
        flex: 1;
        text-align: center;
    }
</style>
