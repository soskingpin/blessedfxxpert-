// Create falling money animation
function createMoney() {
    const moneyContainer = document.getElementById('moneyContainer');
    const moneyIcons = ['💰', '💵', '💲', '💶', '💷', '💴'];
    
    for (let i = 0; i < 30; i++) {
        const money = document.createElement('div');
        money.className = 'money';
        money.textContent = moneyIcons[Math.floor(Math.random() * moneyIcons.length)];
        money.style.left = `${Math.random() * 100}vw`;
        money.style.animationDuration = `${5 + Math.random() * 10}s`;
        money.style.animationDelay = `${Math.random() * 5}s`;
        moneyContainer.appendChild(money);
    }
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    createMoney();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Animate currency prices
    const prices = document.querySelectorAll('.price');
    setInterval(() => {
        prices.forEach(price => {
            const randomChange = (Math.random() * 0.02 - 0.01).toFixed(4);
            const currentValue = parseFloat(price.textContent.split(' ')[0]);
            const newValue = (currentValue + parseFloat(randomChange)).toFixed(4);
            
            price.classList.remove('up', 'down');
            
            if (parseFloat(randomChange) > 0) {
                price.classList.add('up');
                price.innerHTML = `${newValue} <i class="fas fa-caret-up"></i>`;
            } else {
                price.classList.add('down');
                price.innerHTML = `${newValue} <i class="fas fa-caret-down"></i>`;
            }
        });
    }, 3000);
});
