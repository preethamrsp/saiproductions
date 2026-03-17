function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

// Load components
loadComponent("header", "../components/header.html");
loadComponent("footer", "../components/footer.html");

// MENU TOGGLE (works after load)
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}

setTimeout(() => {
  const links = document.querySelectorAll(".desktop-nav a");
  const current = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
}, 100);