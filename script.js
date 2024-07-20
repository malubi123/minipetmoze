document.addEventListener('DOMContentLoaded', () => {
    const animal = document.getElementById('animal');

    function randomPosition() {
        const x = Math.floor(Math.random() * (window.innerWidth - 50));
        const y = Math.floor(Math.random() * (window.innerHeight - 50));
        return { x, y };
    }

    function moveAnimal() {
        const { x, y } = randomPosition();
        animal.style.left = `${x}px`;
        animal.style.top = `${y}px`;
    }

    function askForPermission() {
        const userConfirmed = confirm('Czy chcesz przejść do innej zakładki?');
        if (userConfirmed) {
            // Na potrzeby przykładu, otwórzmy nową stronę w tym samym oknie
            window.location.href = 'https://example.com';
        }
    }

    animal.addEventListener('click', () => {
        askForPermission();
    });

    setInterval(moveAnimal, 1000);
});
