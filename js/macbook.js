function updateTotal() {
    const memoryCost = parseInt(memoryInput.innerText);
    const storageCost = parseInt(storageInput.innerText);
    const deliveryCost = parseInt(deliveryChargeInput.innerText);
    const bestPriceCost = parseInt(bestPrice.innerText);
    const totalCost = memoryCost + storageCost + deliveryCost + bestPriceCost;
    totalPrice.innerText = totalCost;

}
function verifyCupon() {
    if (kuponCodeInput = "stevekaku") {
        const finalTotalCost = totalCost / 20;
    }
    finalTotalinput.innerText = finalTotalCost;
}



const totalPrice = document.getElementById('total-price');
const finalTotalinput = document.getElementById('final-total');





const bestPrice = document.getElementById('best-price');

const memoryInput = document.getElementById('memory-cost');
document.getElementById('memory-slot-2').addEventListener('click', function () {
    console.log("hello")
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

document.getElementById('apply-btn').addEventListener('click', function () {
    const kuponCode = document.getElementById('kupon-code');
    const kuponCodeInput = kuponCode.value
    verifyCupon();
    kuponCodeInput.value = '';
})


