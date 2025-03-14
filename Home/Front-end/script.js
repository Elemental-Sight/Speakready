// Hàm mở modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

// Hàm đóng modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Đóng modal khi nhấn bên ngoài
window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
};
