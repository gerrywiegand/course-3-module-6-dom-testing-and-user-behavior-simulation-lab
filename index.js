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
