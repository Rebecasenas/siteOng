const button = document.getElementById('budget');
        const colors = ['#D20103', '#000000', '#04ACF9', '#FDF001', '#FD9801', '#FF0505'];

        button.addEventListener('mouseover', function() {
            let colorIndex = 0;
            const colorChange = setInterval(() => {
                button.style.backgroundColor = colors[colorIndex];
                colorIndex = (colorIndex + 1) % colors.length;
            }, 500);

            button.addEventListener('mouseout', function() {
                clearInterval(colorChange);
                button.style.backgroundColor = ''; // Reseta a cor ao sair do botão
            }, { once: true });
        });