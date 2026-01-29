document.addEventListener('DOMContentLoaded', () => {
    const recommendBtn = document.getElementById('recommendBtn');
    const resultDiv = document.getElementById('result');

    const celebrities = [
        {
            name: '공유',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Gong_Yoo_in_2021_-_2.png'
        },
        {
            name: '현빈',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Hyun_Bin_at_the_2024_Toronto_International_Film_Festival_2_%28cropped%29.jpg/800px-Hyun_Bin_at_the_2024_Toronto_International_Film_Festival_2_%28cropped%29.jpg'
        },
        {
            name: '박서준',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Park_Seo-joon_in_June_2019.png'
        },
        {
            name: '차은우',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Cha_Eun-woo.jpg/842px-Cha_Eun-woo.jpg'
        },
        {
            name: '송강',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/231124_Song_Kang.jpg/908px-231124_Song_Kang.jpg'
        }
    ];

    recommendBtn.addEventListener('click', () => {
        // 사용자 입력 가져오기 (현재는 랜덤 추천이라 사용하지 않음)
        const userInput = document.getElementById('userInput').value;

        // 랜덤으로 연예인 선택
        const randomIndex = Math.floor(Math.random() * celebrities.length);
        const celebrity = celebrities[randomIndex];

        // 결과 표시
        resultDiv.innerHTML = `
            <h3>당신의 이상형은...</h3>
            <div class="result-card">
                <img src="${celebrity.imageUrl}" alt="${celebrity.name}">
                <h2>${celebrity.name}</h2>
            </div>
        `;
    });
});