document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.c-searchButton');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
        const selectedButton = document.querySelector('.c-searchButton.is-select');
        const category = button.getAttribute('data-category');
        button.classList.add('is-select');

        if (selectedButton !== button) {
            selectedButton.classList.remove('is-select');
        }

        const cards = document.querySelectorAll('.p-cards__item');
        cards.forEach(card => {
            card.style.display = 'none';
        });

        if (category === 'all') {
            cards.forEach(card => {
            card.style.display = 'block';
        });
        } else {
        const categoryCards = document.querySelectorAll(`[data-category="${category}"]`);
        categoryCards.forEach(card => {
            card.style.display = 'block';
        });
        }
    });
    });
});