const questions = [
  {
    image: "images/Beaker.png",
    correct: "كأس زجاجي (Beaker)",
    options: ["أنبوب اختبار", "كأس زجاجي (Beaker)", "ماصة", "ميزان حرارة"]
  },
  {
    image: "images/Test Tube.png",
    correct: "أنبوب اختبار",
    options: ["أنبوب اختبار", "دورق مخروطي", "قُمع", "عدسة مكبرة"]
  },
  {
    image: "images/Microscope.png",
    correct: "ميكروسكوب",
    options: ["ميكروسكوب", "ميزان حساس", "كأس زجاجي", "فرن تجفيف"]
  },
  {
    image: "images/Conical Flask (Erlenmeyer Flask).png",
    correct: "دورق مخروطي",
    options: ["دورق مخروطي", "أنبوب اختبار", "عدسة", "قُمع"]
  },
  {
    image: "images/Safety Gloves.png",
    correct: "قفازات واقية",
    options: ["نظارات واقية", "قفازات واقية", "ماء مقطر", "قُمع"]
  },
  {
    image: "images/distilled water bottle.png",
    correct: "زجاجة ماء مقطر",
    options: ["زجاجة ماء مقطر", "كأس", "مِجس حرارة", "أنبوب اختبار"]
  }
];

let currentQuestion = 0;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("tool-image").src = q.image;
  document.getElementById("feedback").textContent = "";
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  const shuffledOptions = shuffle([...q.options]);

  shuffledOptions.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "option";
    btn.onclick = () => checkAnswer(opt, q.correct);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected, correct) {
  const feedback = document.getElementById("feedback");
  if (selected === correct) {
    feedback.textContent = "إجابة صحيحة ✅";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "إجابة خاطئة ❌";
    feedback.style.color = "red";
  }
}

document.getElementById("next-button").onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question-container").innerHTML = "<h2>انتهى الاختبار! 🎉</h2>";
  }
};

showQuestion();


// تحميل الأصوات
const correctAudio = new Audio("sounds/correct.mp3");
const wrongAudio = new Audio("sounds/wrong.mp3");
const endAudio = new Audio("sounds/end.mp3");

function checkAnswer(selected, correct) {
  const feedback = document.getElementById("feedback");
  if (selected === correct) {
    feedback.textContent = "إجابة صحيحة ✅";
    feedback.style.color = "green";
    correctAudio.play();
  } else {
    feedback.textContent = "إجابة خاطئة ❌";
    feedback.style.color = "red";
    wrongAudio.play();
  }
}

document.getElementById("next-button").onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question-container").innerHTML = "<h2>انتهى الاختبار! 🎉</h2>";
    endAudio.play();
  }
};