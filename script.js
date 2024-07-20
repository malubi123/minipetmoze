document.addEventListener('DOMContentLoaded', () => {
    const animal = document.getElementById('animal');
    const maxX = window.innerWidth - 50;
    const maxY = window.innerHeight - 50;
    const speed = 2; // Ustaw prędkość poruszania się

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

    function askForPermission() {
        const userConfirmed = confirm('Czy chcesz przejść do innej otwartej strony w tej przeglądarce?');
        if (userConfirmed) {
            // Otwórz nową stronę w tej samej zakładce
            window.location.href = 'https://www.youtube.com/';
        }
    }

    animal.addEventListener('click', () => {
        askForPermission();
    });

    setInterval(moveAnimal, 100); // Zmniejszono czas dla płynniejszego ruchu
});
