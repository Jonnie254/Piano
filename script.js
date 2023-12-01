document.addEventListener('DOMContentLoaded', function () {
    const keys = document.querySelectorAll('.key');

    function playSound(note) {
        const audio = document.getElementById(`audio${note}`);
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    }

    keys.forEach(key => {
        key.addEventListener('click', () => {
            // Updated from 'key' to 'Key'
            const note = key.id.replace('Key', ''); 
            playSound(note);
        });
    });

    document.addEventListener('keydown', (event) => {
        const keyIndex = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I'].indexOf(event.key.toUpperCase());

        if (keyIndex !== -1) {
            const note = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I'][keyIndex];
            playSound(note);
        }
    });
});
