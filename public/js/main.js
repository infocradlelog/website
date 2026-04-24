document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('play-video-btn');
    const modal = document.getElementById('video-modal');
    const closeBtn = document.getElementById('close-modal-btn');
    const video = document.getElementById('promo-video');

    if (playBtn && modal && closeBtn && video) {
        // Open Modal
        playBtn.addEventListener('click', () => {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
            video.play();
        });

        // Close Modal function
        const closeModal = () => {
            modal.classList.add('hidden');
            document.body.style.overflow = ''; // Restore scrolling
            video.pause();
            video.currentTime = 0;
        };

        // Close on X button
        closeBtn.addEventListener('click', closeModal);

        // Close on click outside video
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });
    }

    // Google Play Modal Logic
    const googlePlayBtn = document.getElementById('google-play-btn');
    const playStoreModal = document.getElementById('play-store-modal');
    const closePlayModalBtn = document.getElementById('close-play-modal-btn');
    const okPlayModalBtn = document.getElementById('ok-play-modal-btn');

    if (googlePlayBtn && playStoreModal) {
        const openPlayModal = () => {
            playStoreModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        };

        const closePlayModal = () => {
            playStoreModal.classList.add('hidden');
            document.body.style.overflow = '';
        };

        googlePlayBtn.addEventListener('click', openPlayModal);
        closePlayModalBtn?.addEventListener('click', closePlayModal);
        okPlayModalBtn?.addEventListener('click', closePlayModal);

        // Close on click outside
        playStoreModal.addEventListener('click', (e) => {
            if (e.target === playStoreModal) {
                closePlayModal();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !playStoreModal.classList.contains('hidden')) {
                closePlayModal();
            }
        });
    }
});
