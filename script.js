document.addEventListener('DOMContentLoaded', () => {
    // Price calculation logic (common for all pages)
    const basePriceSpan = document.querySelector('.price-para1');
    if (basePriceSpan) {
        const basePriceValue = parseInt(basePriceSpan.getAttribute('data-original-price'));
        const quantitySelect = document.getElementById('coffeeQuantity');
    
        if (quantitySelect) {
            quantitySelect.addEventListener('change', function () {
                const quantity = parseInt(this.value);
                basePriceSpan.textContent = basePriceValue * quantity;
            });
        }
    }

    // Buy button logic (common pattern)
    const coffeePages = [
        { id: 'buy-americano-btn', redirect: 'americano.html' },
        { id: 'buy-cappuccino-btn', redirect: 'Cappuccino.html' },
        { id: 'buy-Caffe-macchiato-btn', redirect: 'Caffe-macchiato.html' },
        { id: 'buy-Affogato-btn', redirect: 'Affogato.html' },
        { id: 'buy-mocha-btn', redirect: 'Mocha.html' }
    ];

    coffeePages.forEach(coffee => {
        const buyButton = document.getElementById(coffee.id);
        if (buyButton) {
            buyButton.addEventListener('click', (event) => {
                event.preventDefault();
                window.location.href = coffee.redirect;
            });
        }
    });
});
