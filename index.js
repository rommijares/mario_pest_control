document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault()
})
document.getElementById('button').addEventListener('click', function() {
    let goombaT = document.getElementById('goombaTotal').value
    let price = goombaT * 5; 
    let bobombT = document.getElementById('bobTotal').value
    let price2 = bobombT * 7;
    let cheepsT = document.getElementById('cheepTotal').value
    let price3 = cheepsT * 11;   
    var totalPrice = price + price2 + price3 
    document.getElementById('total').textContent = totalPrice
});


document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('goombaTotal').value = " "
    document.getElementById('bobTotal').value = " "
    document.getElementById('cheepTotal').value = " " 
    document.getElementById('total').textContent = " "
});