document.addEventListener('DOMContentLoaded', () => {
    const animal = document.getElementById('animal');
    const message = document.getElementById('message');
    const maxX = window.innerWidth - 50;
    const maxY = window.innerHeight - 50;
    const speed = 2; // Prędkość poruszania się

    function randomPosition() {
        return {
            x: Math.floor(Math.random() * maxX),
            y: Math.floor(Math.random() * maxY)
        };
    }

    function moveAnimal() {
        const { x, y } = randomPosition();
        animal.style.transform = `translate(${x}px, ${y}px)`;
    }

    function showMessage() {
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 3000); // Ukryj wiadomość po 3 sekundach
    }

    function askForPermission() {
        showMessage();
        setTimeout(() => {
            const userConfirmed = confirm('Czy chcesz przejść do innej otwartej strony w tej przeglądarce?');
            if (userConfirmed) {
                window.location.href = 'https://example.com';
            }
        }, 3000); // Wyświetl komunikat po 3 sekundach
    }

    animal.addEventListener('click', () => {
        askForPermission();
    });

    setInterval(moveAnimal, 100); // Płynniejsze ruchy
    setInterval(() => {
        askForPermission();
    }, 10000); // Wyświetlaj komunikaty co 10 sekund
});
