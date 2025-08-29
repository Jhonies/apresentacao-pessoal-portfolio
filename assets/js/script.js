const toggleCheckbox = document.getElementById("toggleTheme");
const body = document.body;

// Verifica se já existe tema salvo
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  toggleCheckbox.checked = true; // Marca o checkbox se o tema for dark
}

// Alterna tema
toggleCheckbox.addEventListener("change", () => {
  if (toggleCheckbox.checked) {
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});