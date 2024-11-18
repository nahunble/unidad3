document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', () => {
        const links = item.nextElementSibling;
        if (links.style.display === "block") {
            links.style.display = "none";
        } else {
            document.querySelectorAll('.links').forEach(link => link.style.display = "none"); // Cerrar otros
            links.style.display = "block";
        }
    });
});