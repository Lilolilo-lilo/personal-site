document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('navMenu');
    const hamburgerIcon = document.getElementById('hamburgerIcon').querySelector('.icon');

    const toggleMenu = () => {
        const isHidden = navMenu.classList.toggle('hidden');
        hamburgerIcon.src = isHidden ? 'images/Icon menu.svg' : 'images/Icon close.svg';
    };

    document.getElementById('hamburgerIcon').addEventListener('click', toggleMenu);
});
