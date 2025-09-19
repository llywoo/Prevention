// app.js

document.addEventListener("DOMContentLoaded", () => {

  // Logo click - go to homepage
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  // Dashboard buttons
  const familyBtn = document.querySelector(".button.family");
  const hotlineBtn = document.querySelector(".button.hotline");
  const angelBtn = document.querySelector(".button.angel");

  // Utility function to show modal
  function showModal(title, message) {
    let modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.background = "rgba(0,0,0,0.6)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = "10000";

    let content = document.createElement("div");
    content.style.background = "#fff";
    content.style.padding = "30px";
    content.style.borderRadius = "15px";
    content.style.maxWidth = "400px";
    content.style.textAlign = "center";

    let h2 = document.createElement("h2");
    h2.textContent = title;

    let p = document.createElement("p");
    p.textContent = message;

    let closeBtn = document.createElement("button");
    closeBtn.textContent = "Close";
    closeBtn.style.marginTop = "20px";
    closeBtn.style.padding = "10px 20px";
    closeBtn.style.border = "none";
    closeBtn.style.borderRadius = "10px";
    closeBtn.style.background = "#4a90e2";
    closeBtn.style.color = "#fff";
    closeBtn.style.cursor = "pointer";

    closeBtn.addEventListener("click", () => {
      modal.remove();
    });

    content.appendChild(h2);
    content.appendChild(p);
    content.appendChild(closeBtn);
    modal.appendChild(content);
    document.body.appendChild(modal);
  }

  if (familyBtn) {
    familyBtn.addEventListener("click", () => {
      // Replace with actual family messaging integration
      showModal("Send to Family", "Your message would be sent to a trusted family member.");
    });
  }

  if (hotlineBtn) {
    hotlineBtn.addEventListener("click", () => {
      // Replace with actual hotline messaging integration
      showModal("Send to Crisis Hotline", "Your message would be sent to a crisis hotline.");
    });
  }

  if (angelBtn) {
    angelBtn.addEventListener("click", () => {
      showModal("Coming Soon", "The 'Send to Angel' feature will be available shortly.");
    });
  }

  // Highlight current nav link
  const navLinks = document.querySelectorAll(".nav-column a");
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.style.fontWeight = "bold";
      link.style.textDecoration = "underline";
    }
  });

  // Smooth scrolling for anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  console.log("App.js fully loaded with modal functionality");
});
