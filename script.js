const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

const serviceItems = document.querySelectorAll('.service-item, .offer-item');
serviceItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.05)';
    item.style.transition = 'transform 0.3s ease';
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
  });
});

const companyItems = document.querySelectorAll('.company, .companies img');
companyItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.1)';
    item.style.transition = 'transform 0.3s ease';
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
  });
});

const backToTop = document.createElement('button');
backToTop.innerText = "↑";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.padding = "10px 15px";
backToTop.style.fontSize = "20px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.backgroundColor = "#fad24b";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

document.querySelectorAll('.social').forEach(icon => {
  icon.addEventListener('click', e => {
    e.preventDefault();
    const socialClass = icon.classList[1];
    let url = "#";
    switch (socialClass) {
      case "facebook":
        url = "https://facebook.com/yourprofile";
        break;
      case "twitter":
        url = "https://twitter.com/yourprofile";
        break;
      case "instagram":
        url = "https://instagram.com/yourprofile";
        break;
      case "pinterest":
        url = "https://pinterest.com/yourprofile";
        break;
    }
    window.open(url, "_blank");
  });
});

document.querySelectorAll('.show-more, .card-show-more').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector("#services");
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

document.querySelectorAll('.arrow').forEach(arrow => {
  arrow.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector("#services");
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

function toggleMenu() {
  const navLinks = document.querySelector(".mobile-nav .nav-links");
  navLinks.classList.toggle("show");
}
