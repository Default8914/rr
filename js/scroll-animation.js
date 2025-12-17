// Intersection Observer для анимации при скролле
const observerOptions = {
    threshold: 0.3, // Срабатывает когда 30% элемента видно
    rootMargin: '0px 0px -50px 0px' // Дополнительный отступ снизу
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Добавляем класс animate когда элемент попадает в viewport
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Находим все блоки product и наблюдаем за ними
document.addEventListener('DOMContentLoaded', () => {
    const productBlocks = document.querySelectorAll('.product');
    
    productBlocks.forEach(block => {
        observer.observe(block);
    });
});
