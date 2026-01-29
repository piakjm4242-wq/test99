document.addEventListener('DOMContentLoaded', () => {
    const pressMeButton = document.getElementById('pressMeButton');
    const greetingDisplay = document.getElementById('greetingDisplay');

    const greetings = [
        "Hello, friend! (English)",
        "안녕, 친구! (Korean)",
        "Hola, amigo! (Spanish)",
        "Bonjour, mon ami! (French)",
        "Hallo, Freund! (German)",
        "Ciao, amico! (Italian)",
        "Olá, amigo! (Portuguese)",
        "Привет, друг! (Russian)",
        "你好, 朋友! (Chinese)",
        "こんにちは、友達！(Japanese)",
        "مرحبا يا صديقي! (Arabic)",
        "नमस्ते दोस्त! (Hindi)",
        "Hej, ven! (Danish)",
        "Hei, ystävä! (Finnish)",
        "Hei, venn! (Norwegian)",
        "Hallå, vän! (Swedish)",
        "Ahoj, kamaráde! (Czech)",
        "Witaj, przyjacielu! (Polish)",
        "Xin chào, bạn! (Vietnamese)",
        "Merhaba, arkadaşım! (Turkish)"
    ];

    if (pressMeButton && greetingDisplay) {
        pressMeButton.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * greetings.length);
            greetingDisplay.textContent = greetings[randomIndex];
        });
    } else {
        console.error('Button or greeting display element not found.');
    }
});
