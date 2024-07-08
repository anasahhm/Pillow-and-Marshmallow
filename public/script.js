document.addEventListener('DOMContentLoaded', function () {
    const soundSelector = document.getElementById('sound-selector');
    const playButton = document.getElementById('play-sound');
    const stopButton = document.getElementById('stop-sound');
    const spotifyButton = document.getElementById('spotify-button');
    const spotifyButtonText = document.getElementById('spotify-button-text');
    const currentSong = document.getElementById('current-song');
    const audio = document.querySelector('audio');
    let currentAudio = null;

    // Sound file paths
    const soundFiles = {
        'neighbor_practicing_violin': 'sounds/neighbor_practicing_violin-51417.mp3',
        'cozy_soft_rain_under_umbrella': 'sounds/cozy-soft-rain-under-umbrella-116183.mp3',
        'rain_inside_a_car': 'sounds/rain-inside-a-car-113602.mp3',
        'mocha': 'sounds/making-a-coffee-latte-56561.mp3',
        'coffee_at_a_museum': 'sounds/museum-cafe-55154.mp3',
        'chit_chats': 'sounds/people-talking-at-cafe-ambience-6159.mp3'
    };

    soundSelector.addEventListener('change', function () {
        const selectedSound = soundSelector.value;
        const soundPath = soundFiles[selectedSound];
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        audio.src = soundPath;
    });

    playButton.addEventListener('click', function () {
        if (audio.src) {
            audio.play();
            currentAudio = audio;
        }
    });

    stopButton.addEventListener('click', function () {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    });

    // Tip Button Logic
    const tipButton = document.getElementById('tip-button');
    tipButton.addEventListener('click', function () {
        tipButton.classList.toggle('expanded');
    });

    // Spotify Button Logic
    spotifyButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        if (spotifyButton.classList.contains('playing')) {
            spotifyButton.classList.remove('playing');
            spotifyButtonText.textContent = 'Open Spotify';
            currentSong.style.display = 'none';
        } else {
            spotifyButton.classList.add('playing');
            spotifyButtonText.textContent = 'Playing...';
            currentSong.textContent = 'Current Song: [Song Title]'; // Dynamically set this based on actual song title
            currentSong.style.display = 'block';
        }
    });
});
