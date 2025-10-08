// Toggle mobile menu
/* function toggleMenu() {
  const nav = document.getElementById("navbarNav");
  nav.classList.toggle("show");
}

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 992) {
      document.getElementById("navbarNav").classList.remove("show");
    }
  });
});

window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".custom-navbar");

  if (window.innerWidth >= 992) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  const sections = document.querySelectorAll("section");
  const scrollPos = window.scrollY + 100;
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});
 */



// Toggle mobile menu
function toggleMenu() {
  const nav = document.getElementById("navbarNav");
  nav.classList.toggle("show");
}

// Close mobile menu when clicking link
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", function(e) {
    const href = link.getAttribute("href");

    // Smooth scroll for internal links on the same page
    if (href.startsWith("#") && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80, // adjust for fixed navbar
          behavior: "smooth"
        });
      }
    }

    // Close mobile menu
    if (window.innerWidth < 992) {
      document.getElementById("navbarNav").classList.remove("show");
    }
  });
});

// Desktop scroll effect & active link highlighting
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".custom-navbar");

  if (window.innerWidth >= 992) {
    if (window.scrollY > 1) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  // Active link highlight
  const sections = document.querySelectorAll("section");
  const scrollPos = window.scrollY + 100;
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// ✅ Smooth scroll on page load if URL has hash (for redirecting links like Home.html#about)
window.addEventListener("load", function() {
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      // delay slightly to allow page render
      setTimeout(() => {
        window.scrollTo({
          top: target.offsetTop - 80, // adjust for fixed navbar
          behavior: "smooth"
        });
      }, 50);
    }
  }
});
