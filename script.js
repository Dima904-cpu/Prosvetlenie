// Переключение языка
document.getElementById("lang-toggle").addEventListener("click", () => {
  const btn = document.getElementById("lang-toggle");
  const isRU = btn.textContent === "EN";
  btn.textContent = isRU ? "RU" : "EN";

  document.querySelectorAll("[data-ru]").forEach(el => {
    el.textContent = isRU ? el.dataset.en : el.dataset.ru;
  });
});

