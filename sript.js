const questions = [
    {
        question: "Apa singkatan dari HTML?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Tech Modern Language", correct: false },
            { text: "Hyper Tool Multi Language", correct: false }
        ]
    },
    {
        question: "Aplikasi Acode digunakan untuk apa?",
        answers: [
            { text: "Edit Foto", correct: false },
            { text: "Coding/Edit Teks", correct: true },
            { text: "Main Game", correct: false }
        ]
    },
    {
        question: "Warna #000000 adalah kode untuk warna...",
        answers: [
            { text: "Putih", correct: false },
            { text: "Merah", correct: false },
            { text: "Hitam", correct: true }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hide');
    document.getElementById('quiz').classList.remove('hide');
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.onclick = () => selectAnswer(answer.correct);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(correct) {
    if (correct) score++;
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz').classList.add('hide');
    resultContainer.classList.remove('hide');
    scoreElement.innerText = score + " / " + questions.length;
}
// Ganti baris paling bawah di script.js menjadi ini:
window.onload = () => {
    startQuiz();
};
