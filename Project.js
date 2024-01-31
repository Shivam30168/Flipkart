let counters = Array(14).fill(0);

function inc(index) {
    counters[index - 1]++;
    updateCounter(index);
}

function dec(index) {
    if (counters[index - 1] > 0) {
        counters[index - 1]--;
        updateCounter(index);
    }
}

function updateCounter(index) {
    document.getElementById('box' + index).innerHTML = counters[index-1];
}

function addToCart(index) {
    let selectedQuantity = counters[index - 1];
    let cartMessageElement = document.getElementById('cartMessage' + index);
    let i = document.getElementById('inc'+index );
    let d = document.getElementById('dec'+index );
    let ab = document.getElementById('cart'+index );
    if (selectedQuantity > 0) { 
        let message = `Product added to cart `;
        cartMessageElement.innerHTML = message;
        ab.style.display='none';
        i.style.display='none';
        d.style.display='none';

    } else {
        
        let errorMessage = `Please select a quantity `;
        cartMessageElement.innerHTML = errorMessage;
    }
}





