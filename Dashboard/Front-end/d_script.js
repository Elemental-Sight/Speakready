const words = [
    {
        image: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
        word: "Cat",
        ipa: "/kæt/",
        meaning: "Con mèo",
        example: "My cat loves to sleep all day."
    },
    {
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
        word: "Hamburger",
        ipa: "/ˈhæmˌbɜːrɡɚ/",
        meaning: "Bánh hamburger",
        example: "I ate a delicious hamburger for lunch."
    },
    {
        image: "https://cdn.glitch.global/1e96932a-d952-49ea-bc7d-ae0b66abcbeb/20Ounce_NYAS-Apples2.png?v=1741326440464",
        word: "Apple",
        ipa: "/ˈæp.l̩/",
        meaning: "Quả táo",
        example: "An apple a day keeps the doctor away."
    }
];

// Hàm cập nhật nội dung từ vựng
function updateWordCard() {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const wordCard = document.getElementById('word-card');

    wordCard.innerHTML = `
        <img src="${randomWord.image}" alt="${randomWord.word}" class="word-image">
        <h3 class="word">${randomWord.word}</h3>
        <p class="ipa">${randomWord.ipa}</p>
        <p class="meaning"><strong>Meaning:</strong> ${randomWord.meaning}</p>
        <p class="example"><strong>Example:</strong> ${randomWord.example}</p>
    `;
}

// Hàm hiển thị nội dung dựa trên tab
// Hàm hiển thị nội dung dựa trên tab
function showContent(tab) { 
    const content = document.getElementById('content');
    let htmlContent = '';

    switch (tab) {
        case 'learn':
            htmlContent = `
                <div class="card-container">
                    <div class="card">
                        <i class="fas fa-book-open"></i>
                        <div class="card-content">
                            <h3>Vocabulary</h3>
                            <p>Expand your vocabulary with new words and phrases.</p>
                        </div>
                    </div>
                    <div class="card">
                        <i class="fas fa-pencil-alt"></i>
                        <div class="card-content">
                            <h3>Grammar</h3>
                            <p>Learn grammar rules to enhance your English proficiency.</p>
                        </div>
                    </div>
                    <div class="card">
                        <i class="fas fa-microphone"></i>
                        <div class="card-content">
                            <h3>Pronunciation</h3>
                            <p>Improve your pronunciation with guided exercises.</p>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'practice':
            htmlContent = `
                <div class="card-container">
                    <div class="card">
                        <i class="fas fa-comments"></i>
                        <div class="card-content">
                            <h3>Speak with Sample</h3>
                            <p>Practice speaking using provided sample sentences.</p>
                        </div>
                    </div>
                    <div class="card">
                        <i class="fas fa-robot"></i>
                        <div class="card-content">
                            <h3>Talk with AI</h3>
                            <p>Engage in a conversation with AI for speaking practice.</p>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'test':
            htmlContent = `
                <div class="card-container">
                    <div class="card">
                        <i class="fas fa-chalkboard-teacher"></i>
                        <div class="card-content">
                            <h3>Test IELTS Speaking</h3>
                            <p>Take a mock IELTS speaking test to assess your skills.</p>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'game':
            htmlContent = `
                <div class="card-container">
                    <div class="card">
                        <i class="fas fa-gamepad"></i>
                        <div class="card-content">
                            <h3>Game 1</h3>
                            <p>Play an interactive learning game.</p>
                        </div>
                    </div>
                    <div class="card">
                        <i class="fas fa-puzzle-piece"></i>
                        <div class="card-content">
                            <h3>Game 2</h3>
                            <p>Challenge yourself with another fun game.</p>
                        </div>
                    </div>
                </div>
            `;
            break;
        default:
            htmlContent = `
                <h2>Chào mừng bạn đến với Dashboard</h2>
                <p>Chọn một tab từ thanh bên trái để bắt đầu.</p>
            `;
    }

    content.innerHTML = htmlContent;
}




// Gọi hàm khi trang tải xong
document.addEventListener("DOMContentLoaded", () => {
    updateWordCard();
    setInterval(updateWordCard, 10000); // Cập nhật từ vựng mỗi 10 giây
    showContent('learn'); // Mặc định hiển thị tab Learn khi load trang
});

document.addEventListener("DOMContentLoaded", function () {
    let learnedDays = [1, 3, 5]; // Giả sử đã học thứ 2, 4, 6 (T2, T4, T6)

    let circles = document.querySelectorAll(".day-circle");
    circles.forEach(circle => {
        let day = parseInt(circle.getAttribute("data-day"));
        if (learnedDays.includes(day)) {
            circle.classList.add("active");
        }
    });
});


