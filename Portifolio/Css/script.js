// Simulando dados de projetos para Lucas
const projectsData = [
    { name: "Projeto 1", description: "Descrição do Projeto 1" },
    { name: "Projeto 2", description: "Descrição do Projeto 2" },
    // Adicione mais projetos conforme necessário
];

document.addEventListener("DOMContentLoaded", function () {
    const projectCarousel = document.querySelector(".project-carousel");

    projectsData.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        `;
        projectCarousel.appendChild(projectCard);
    });

    // Inicializando o QR Code
    const qrcode = new QRCode(document.getElementById("qrcode"), {
        text: "https://seulink.com", // Substitua com o link desejado
        width: 150,
        height: 150
    });
});

// Função para abrir o WhatsApp
function openWhatsApp() {
    window.location.href = "https://api.whatsapp.com/send?phone=seunumerodetelefone";
}
