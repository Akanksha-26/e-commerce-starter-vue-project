<template>
  <div>
    <md-content class="payment-form md-elevation-9">
        <md-field>
            <label>Name</label>
            <md-input v-model="name" placeholder="Enter your name"></md-input>
        </md-field>
        <md-field>
            <label>Card Number</label>
            <md-input v-model="cardNumber" placeholder="Enter your card number"></md-input>
        </md-field>
        <md-field>
            <label>CVV</label>
            <md-input v-model="cvv" placeholder="Enter your cvv"></md-input>
        </md-field>

        <md-button class="md-raised md-primary" @click="pay()">Pay</md-button>
    </md-content>
    <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
        <span>Payment Successful!!</span>
    </md-snackbar>
  </div>
</template>

<script src="./payment.js"></script>

<style scoped>
.payment-form {
    max-width: 1000px;
    margin: auto;
    background-color: #FFFFFF;
    padding: 1rem;
    box-sizing: border-box;
}
</style>


