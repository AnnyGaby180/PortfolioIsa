// Lista de imagens
const images = [
    "imagens/circo2.jpg",
    "imagens/isa no circo.JPG",
    "imagens/isacamila.JPG",

    
    // Adicione mais imagens conforme necessário
];

let currentImageIndex = 0;

// Função para exibir a imagem atual
function showCurrentImage() {
    const imageElement = document.getElementById("gallery-image");
    imageElement.src = images[currentImageIndex];
}

// Função para avançar para a próxima imagem
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showCurrentImage();
}

// Função para retroceder para a imagem anterior
function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showCurrentImage();
}

// Event listeners para navegar pelas imagens
document.getElementById("next-button").addEventListener("click", nextImage);
document.getElementById("previous-button").addEventListener("click", previousImage);

// Inicialmente, exiba a primeira imagem
showCurrentImage();
