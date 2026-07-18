const header = document.querySelector('.header');
        const button = document.querySelector('.button');

        button.addEventListener('click', function() {
            header.classList.toggle('header--hidden');
            
            if (header.classList.contains('header--hidden')) {
                button.textContent = 'Показать';
                button.classList.add('button--active');
            } else {
                button.textContent = 'Скрыть';
                button.classList.remove('button--active');
            }
        });