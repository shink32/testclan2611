// お問い合わせ先メールアドレス
const CONTACT_EMAIL = "todayfull@kocoiro.com";

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".global-nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const emailLink = document.getElementById("email-link");
const emailHelp = document.getElementById("email-help");
if (CONTACT_EMAIL.trim()) {
  emailLink.href = `mailto:${CONTACT_EMAIL.trim()}?subject=${encodeURIComponent("クランへの見学・体験について")}`;
  emailHelp.textContent = "メールソフトが起動します。";
} else {
  emailLink.addEventListener("click", event => {
    event.preventDefault();
    emailHelp.textContent = "公開前に script.js の CONTACT_EMAIL にメールアドレスを設定してください。";
  });
}
