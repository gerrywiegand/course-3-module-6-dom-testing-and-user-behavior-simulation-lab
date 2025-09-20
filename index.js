function addElementToDOM(containerId, text) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const p = document.createElement("p");
  p.textContent = text;
  container.appendChild(p);
}

function removeElementFromDOM(id) {
  const remove = document.getElementById(id);
  if (remove) {
    remove.remove();
  }
}

function simulateClick(containerId, text) {
  const container = document.getElementById(containerId);
  if (container) {
    container.textContent += text;
  }
}

function handleFormSubmit(formId, containerId) {
  const input = document.getElementById("user-input");
  const error = document.getElementById("error-message");
  const container = document.getElementById(containerId);

  const value = document.getElementById("user-input").value.trim();

  if (!value) {
    error.textContent = "Input cannot be empty";
    error.classList.remove("hidden");
    return;
  }

  error.textContent = "";
  error.classList.add("hidden");

  const li = document.createElement("li");
  li.textContent = value;
  container.appendChild(li);

  input.value = "";
}
module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
};

/*const button = document.getElementById("simulate-click");

const form = document.getElementById("user-form");
const input = document.getElementById("user-input");
const dynamic = document.getElementById("dynamic-content");
const errorBox = document.getElementById("error-message");

button.addEventListener(`click`, () => {
  document.body.style.backgroundColor = "rgba(0, 255, 13, 1)";
});

button.addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "";
});

function ensureList() {
  let ul = document.getElementById("user-list");
  if (!ul) {
    ul = document.createElement("ul");
    ul.id = "user-list";
    dynamic.appendChild(ul);
  }
  return ul;
}

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  const value = input.value.trim();

  if (!value) {
    errorBox.textContent = "Please enter some text.";
    errorBox.classList.remove("hidden");
    return;
  }
  errorBox.textContent = "";
  errorBox.classList.add("hidden");

  const ul = ensureList();
  const li = document.createElement("li");
  li.textContent = value;
  ul.appendChild(li);

  form.reset();
}

form.addEventListener("submit", submitForm);

// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.
*/
