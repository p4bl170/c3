document.getElementById('menu').addEventListener('click', function () {
    document.getElementById('navega').classList.toggle('mostrar');
})

lightbox.option({
    'wrapAround': true,
    'albumLabel': "Imagen %1 de %2",
    'fadeDuration': 1000,
})