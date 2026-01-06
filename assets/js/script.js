document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.product-card');

    // Staggered Animation Effect
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, 200 * index); // Each card waits 200ms longer than the last
    });

    // Simple interaction: Alert price on click
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').innerText;
            const price = card.querySelector('.price').innerText;
            console.log(`Added ${title} to cart for ${price}`);
        });
    });
});