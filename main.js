document.addEventListener('DOMContentLoaded', () => {
    const recommendBtn = document.getElementById('recommendBtn');
    const resultDiv = document.getElementById('result');

    const celebrities = [
        { name: '공유' },
        { name: '현빈' },
        { name: '박서준' },
        { name: '차은우' },
        { name: '송강' },
        { name: '이민호' },
        { name: '박보검' },
        { name: '송중기' },
        { name: '지창욱' },
        { name: '남주혁' },
        { name: 'Timothée Chalamet' },
        { name: 'Tom Holland' },
        { name: 'Chris Hemsworth' },
        { name: 'Brad Pitt' },
        { name: 'Leonardo DiCaprio' },
        { name: 'Dwayne Johnson' },
        { name: 'Ryan Reynolds' },
        { name: 'Harry Styles' },
        { name: 'Justin Bieber' },
        { name: 'The Weeknd' }
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
                <h2>${celebrity.name}</h2>
            </div>
        `;
    });
});