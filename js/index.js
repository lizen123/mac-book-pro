
// 8gb Memory

document.getElementById('default_price_memory').addEventListener('click', function () {
document.getElementById('default_cost_memory').innerText = 0;
    updateTotal();
});

// 16gb memory

document.getElementById('extra-amount').addEventListener('click', function () {
document.getElementById('default_cost_memory').innerText = 180;
    updateTotal();
});

// Storage - 1

document.getElementById('default_price_storage').addEventListener('click', function () {
document.getElementById('default_cost_storage').innerText = 0;
    updateTotal();
});

// Storage - 2

document.getElementById('extra-price').addEventListener('click', function () {
document.getElementById('default_cost_storage').innerText = 100;
    updateTotal();
});

// Storage - 3

document.getElementById('2xl-price').addEventListener('click', function () {
document.getElementById('default_cost_storage').innerText = 180;
    updateTotal();
});

// Delivery-25 Aug

document.getElementById('default-delivery').addEventListener('click', function () {
document.getElementById('default_delivery').innerText = 0;
    updateTotal();
});

// Delivery-21 Aug

document.getElementById('delivery-charge').addEventListener('click', function () {
document.getElementById('default_delivery').innerText = 20;
    updateTotal();
});

// Total Price

function updateTotal() {

const memoryPrice = document.querySelector('.memory_cost').innerText ;
const storagePrice1 = document.querySelector('.storage_cost').innerText;
const deliveryPrice = document.querySelector('.delivery_cost').innerText;
const defaultPrice = 1299;
const total_price = document.querySelector('.total_price');
const total = document.querySelector('.total');

total_price.innerText = defaultPrice + parseInt(memoryPrice) + parseInt(storagePrice1) + parseInt(deliveryPrice)
const tot = total.innerText = defaultPrice + parseInt(memoryPrice) + parseInt(storagePrice1) + parseInt(deliveryPrice);

    // promo-code

const input_promo_code = document.querySelector(".input_promo_code");
const promo_btn = document.querySelector(".promo_btn");

// final balance

promo_btn.addEventListener('click', function () {
const promo_code = "stevekaku"
    if (promo_code == input_promo_code.value) {
        total.innerText =parseInt(tot - (tot * 20 / 100));
    }
    else if(promo_code != input_promo_code.value){
const error =  document.querySelector(".wrong_promo_code")
      error.innerText = "Wrong promo code";
    }
    input_promo_code.value='';
})
}

