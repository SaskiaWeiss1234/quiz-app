const bookmark = document.querySelector('[data-js="bookmark"]');
const showAnswer = document.querySelector('[data-js="Show-Answer"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');
const questionCardAnswer = document.querySelector('[data-js="question-card-answer"]');

bookmark.addEventListener("click",() => {
bookmarkIcon.classList.toggle('active');
})

showAnswer.addEventListener("click",() => {
questionCardAnswer.toggleAttribute('hidden');
if (questionCardAnswer.hasAttribute('hidden')) {
    showAnswer.textContent = "Show Answer";}
    else {showAnswer.textContent = "Hide Answer"}
});