const submitButton = document.querySelector('[data-js="Submit-Button"]');
const remainingCharsNumberQuestion = document.querySelector('[data-js="remaining-Chars-Number-Question"]');
const remainingCharsNumberAnswer = document.querySelector('[data-js="remaining-Chars-Number-Answer"]');
const yourQuestion = document.querySelector('[data-js="yourQuestion"]');
const yourAnswer = document.querySelector('[data-js="yourAnswer"]');
const form = document.querySelector('[data-js="Question-Card-Submit"]');

// Submit the event and add a new Question card
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // create elements
  const card = document.createElement("div");
  const title = document.createElement("h2");
  const question = document.createElement("h3");
  const answer = document.createElement("p");
  const showAnswerButton = document.createElement("button");
  const tags = document.createElement("p");
  const bookmark = document.createElement("button");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  // create svg paths
  const paths = [
    "m36.067 6.067 -2.133 -2.133a2.017 2.017 0 0 0 -2.867 0L3.933 31.067a2.017 2.017 0 0 0 0 2.867l2.133 2.133a2 2 0 0 0 2.867 0L36.067 8.933a2 2 0 0 0 0 -2.867",
    "m23.333 11.667 5 5",
    "M8.333 10v6.667",
    "M31.667 23.333v6.667",
    "M16.667 3.333v3.333",
    "M11.667 13.333H5",
    "M35 26.667h-6.667",
    "M18.333 5H15"
  ];

  paths.forEach((d) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    svg.append(path);
  });

  // set svg attributes
  svg.setAttribute("width", "40");
  svg.setAttribute("height", "40");
  svg.setAttribute("viewBox", "0 0 40 40");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "#43270F");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.classList.add("bookmark-icon");
  svg.setAttribute("data-js", "bookmark-icon");

  // set bookmark attributes
  bookmark.setAttribute("type", "button");
  bookmark.classList.add("bookmark");
  bookmark.setAttribute("data-js", "bookmark");
  bookmark.append(svg);

  // create tags
  const tag1 = document.createElement("a");
  const tag2 = document.createElement("a");
  const tag3 = document.createElement("a");
  tag1.classList.add("tag");
  tag2.classList.add("tag");
  tag3.classList.add("tag");
  tag1.setAttribute("href", "#");
  tag2.setAttribute("href", "#");
  tag3.setAttribute("href", "#");
  tag1.textContent = yourQuestion.value;
  tag2.textContent = "Harry Potter";
  tag3.textContent = "Fiction";

  // set card content
  card.classList.add("question-card");
  title.classList.add("title-of-the-card");
  title.textContent = "Question";
  question.classList.add("question-card_question");
  question.textContent = yourQuestion.value;
  answer.classList.add("question-card_answer");
  answer.setAttribute("data-js", "question-card-answer");
  answer.setAttribute("hidden", "");
  answer.textContent = yourAnswer.value;
  showAnswerButton.setAttribute("type", "button");
  showAnswerButton.classList.add("Show-Answer");
  showAnswerButton.setAttribute("data-js", "Show-Answer");
  showAnswerButton.textContent = "Show Answer";
  tags.classList.add("tags");

  // build card
  tags.append(tag1, tag2, tag3);
  card.append(title, question, bookmark, answer, showAnswerButton, tags);
  document.querySelector('[data-js="question-cards"]').append(card);

  form.reset();
});

yourQuestion.addEventListener("input", () => {
    const yourQuestionLength = yourQuestion.value.length;
    const remainingChar = 150 - yourQuestionLength;
    remainingCharsNumberQuestion.textContent = remainingChar;
});
yourAnswer.addEventListener("input", () => {
    const yourAnswerLength = yourAnswer.value.length;
    const remainingChar = 150 - yourAnswerLength;
    remainingCharsNumberAnswer.textContent = remainingChar;
});
ShowAnswer.addEventListener("click",() => {
questionCardAnswer.toggleAttribute('hidden');
if (questionCardAnswer.hasAttribute('hidden')) {
    showAnswer.textContent = "Show Answer";}
    else {showAnswer.textContent = "Hide Answer"}
});


