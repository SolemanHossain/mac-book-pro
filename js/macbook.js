function updateTotal() {
    const memoryCost = parseInt(memoryInput.innerText);
    const storageCost = parseInt(storageInput.innerText);
    const deliveryCost = parseInt(deliveryChargeInput.innerText);
    const bestPriceCost = parseInt(bestPrice.innerText);
    const totalCost = memoryCost + storageCost + deliveryCost + bestPriceCost;
    totalPrice.innerText = totalCost;

}

const bestPrice = document.getElementById('best-price');

const memoryInput = document.getElementById('memory-cost');
document.getElementById('memory-slot-2').addEventListener('click', function () {
    memoryInput.innerText = "180"
    updateTotal()
});
document.getElementById('memory-slot-1').addEventListener('click', function () {
    memoryInput.innerText = "0"
    updateTotal()
});
const storageInput = document.getElementById('storage-cost');
document.getElementById('first-storage').addEventListener('click', function () {
    storageInput.innerText = '0'
    updateTotal()
});
document.getElementById('second-storage').addEventListener('click', function () {
    storageInput.innerText = '100'
    updateTotal()
});
document.getElementById('third-storage').addEventListener('click', function () {
    storageInput.innerText = '180'
    updateTotal()
});
const deliveryChargeInput = document.getElementById('delivery-cost');
document.getElementById('free-delivery').addEventListener('click', function () {
    deliveryChargeInput.innerText = '0'
    updateTotal()
});
document.getElementById('delivery-with-charge').addEventListener('click', function () {
    deliveryChargeInput.innerText = '20'
    updateTotal()
});

const totalPrice = document.getElementById('total-price');

