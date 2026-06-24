const STORAGE_KEY = "insync_lang";
let currentLang = localStorage.getItem(STORAGE_KEY) || "ar";

function applyLanguage(lang) {
  const t = translations[lang];
  document.documentElement.lang = t.lang;
  document.documentElement.dir = t.dir;
  document.title = t.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });

  const submitBtn = document.querySelector(".submit-btn");
  if (submitBtn && !submitBtn.disabled) submitBtn.textContent = t.submitBtn;

  document.getElementById("langToggle").textContent = t.langToggleLabel;
  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
}

document.getElementById("langToggle").addEventListener("click", () => {
  applyLanguage(currentLang === "ar" ? "en" : "ar");
});

applyLanguage(currentLang);

const form = document.getElementById("leadForm");
const formError = document.getElementById("formError");
const successView = document.getElementById("successView");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  formError.textContent = "";

  const t = translations[currentLang];
  const submitBtn = form.querySelector(".submit-btn");

  if (!form.checkValidity()) {
    formError.textContent = t.errorRequired;
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = t.submitBtnLoading;

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    });
    const data = await res.json();

    if (data.success) {
      form.classList.add("hidden");
      successView.classList.remove("hidden");
    } else {
      throw new Error(data.message || "submit failed");
    }
  } catch (err) {
    formError.textContent = t.errorSubmit;
    submitBtn.disabled = false;
    submitBtn.textContent = t.submitBtn;
  }
});
