// scripts.js

document.querySelectorAll('.social-icon').forEach(item => {
    item.addEventListener('click', event => {
        console.log(`Navigating to ${event.target.parentElement.href}`);
    });
});

const faqs = document.querySelectorAll('.faq');

        faqs.forEach(faq => {
            faq.addEventListener('click', () => {
                faq.classList.toggle('active');
            });
        });