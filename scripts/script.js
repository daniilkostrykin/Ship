const hangmanImage = document.querySelector(".hangman-box img");
const keyboardDiv = document.querySelector(".keyboard");
const guessesText = document.querySelector(".guesses-text b");
const wordDisplay = document.querySelector(".word-display");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");
let currentWord,
  correctLetters = [];
wrongGuessCount = 0;
const maxGuesses = 8;
let usedWords = [];
let currentDifficulty = "easy";
let currentCategory = "all";

const difficultySelect = document.getElementById("difficulty-select");
if (difficultySelect) {
  difficultySelect.addEventListener("change", (e) => {
    currentDifficulty = e.target.value;
    usedWords = [];
    getRandomWord();
  });
}

const categorySelect = document.getElementById("category-select");
if (categorySelect) {
  categorySelect.addEventListener("change", (e) => {
    currentCategory = e.target.value;
    usedWords = [];
    getRandomWord();
  });
}

function getWordsByDifficultyAndCategory(level, category) {
  let filtered = wordList.filter((w) => w.level === level);
  if (category !== "all") {
    filtered = filtered.filter((w) => w.category === category);
  }
  return filtered;
}

const resetGame = () => {
  correctLetters = [];
  wrongGuessCount = 0;
  wordDisplay.classList.remove("long-word"); // Удаляем класс long-word
  wordDisplay.innerHTML = currentWord
    .split("")
    .map(() => '<li class="letter"></li>')
    .join("");

  if (currentWord.length > 8) {
    wordDisplay.classList.add("long-word"); // Добавляем класс long-word
  }

  gameModal.classList.remove("show");
  hangmanImage.src = `images/ship${wrongGuessCount}.png`;
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
  keyboardDiv
    .querySelectorAll("button")
    .forEach((btn) => (btn.disabled = false));
};

const getRandomWord = () => {
  const availableWords = getWordsByDifficultyAndCategory(
    currentDifficulty,
    currentCategory
  );
  if (availableWords.length === 0) {
    alert("Нет слов для выбранной категории и сложности!");
    return;
  }
  if (usedWords.length === availableWords.length) {
    alert(
      "Все слова этого уровня и категории были использованы. Перезапускаем список."
    );
    usedWords = [];
  }

  let wordObj;
  do {
    wordObj = availableWords[Math.floor(Math.random() * availableWords.length)];
  } while (usedWords.includes(wordObj.word));

  usedWords.push(wordObj.word);
  currentWord = wordObj.word;
  document.querySelector(".hint-text b").innerText = wordObj.hint;
  resetGame();
};

const gameOver = (isVictory) => {
  setTimeout(() => {
    const modalText = isVictory ? `Вы угадали слово:` : `Правильное слово:`;
    gameModal.querySelector("img").src = `images/${
      isVictory ? `victory` : `lost`
    }.gif`;
    gameModal.querySelector("h4").innerText = `${
      isVictory ? `Поздравляем!` : `Игра окончена!`
    }`;
    gameModal.querySelector(
      "p"
    ).innerHTML = `${modalText} <b> ${currentWord}</b>`;
    gameModal.classList.add("show");
  }, 300);
};

const initGame = (button, clickedLetter) => {
  if (currentWord.includes(clickedLetter)) {
    // Showing correct letters
    [...currentWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        correctLetters.push(letter);
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
      }
    });
  } else {
    wrongGuessCount++;
    hangmanImage.src = `images/ship${wrongGuessCount}.png`;
  }

  button.disabled = true;
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

  if (wrongGuessCount === maxGuesses) return gameOver(false);
  if (correctLetters.length === currentWord.length) return gameOver(true);
};

for (let i = 1040; i < 1072; i++) {
  const button = document.createElement("button");

  if (i == 1046) {
    const buttonYo = document.createElement("button");
    buttonYo.innerText = String.fromCharCode(1025);
    keyboardDiv.appendChild(buttonYo);
    buttonYo.addEventListener("click", (e) =>
      initGame(e.target, String.fromCharCode(1025))
    );
  }

  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button);
  button.addEventListener("click", (e) =>
    initGame(e.target, String.fromCharCode(i))
  );
}

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);

// Добавляем обработчик для ввода с клавиатуры на ПК
document.addEventListener("keydown", (e) => {
  if (!/Mobi|Android/i.test(navigator.userAgent)) {
    const letter = e.key.toUpperCase();
    if ((letter >= "А" && letter <= "Я") || letter === "Ё") {
      const button = [...keyboardDiv.querySelectorAll("button")].find(
        (btn) => btn.innerText === letter
      );
      if (button && !button.disabled) {
        initGame(button, letter);
      }
    }
  }
});

// Добавляем обработчик для нажатия Enter, чтобы перезапустить игру
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && gameModal.classList.contains("show")) {
    getRandomWord();
  }
});
