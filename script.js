// Menu burger sur téléphone : ouvre et ferme la navigation.
// Sans JavaScript, le bouton reste caché et tous les liens restent visibles.

const boutonMenu = document.querySelector('.menu-bouton');
const menu = document.getElementById('menu-principal');

if (boutonMenu && menu) {
    document.documentElement.classList.add('js');
    boutonMenu.hidden = false;

    function ouvrirMenu() {
        boutonMenu.setAttribute('aria-expanded', 'true');
        menu.classList.add('est-ouvert');
    }

    function fermerMenu() {
        boutonMenu.setAttribute('aria-expanded', 'false');
        menu.classList.remove('est-ouvert');
    }

    boutonMenu.addEventListener('click', () => {
        const estOuvert = boutonMenu.getAttribute('aria-expanded') === 'true';
        if (estOuvert) {
            fermerMenu();
        } else {
            ouvrirMenu();
        }
    });

    // Quand on choisit un lien, le menu se referme
    menu.addEventListener('click', (evenement) => {
        if (evenement.target.closest('a')) {
            fermerMenu();
        }
    });

    // La touche Échap referme le menu et remet le focus sur le bouton
    document.addEventListener('keydown', (evenement) => {
        if (evenement.key === 'Escape' && menu.classList.contains('est-ouvert')) {
            fermerMenu();
            boutonMenu.focus();
        }
    });
}
