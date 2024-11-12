// Toggle Navbar for smaller screens
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Slideshow functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
  });

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].classList.add('active');
}
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) { // نقطة التمرير التي تبدأ منها الناف بار التثبيت
      navbar.style.position = "fixed";
      navbar.style.top = "0";
  } else {
      navbar.style.position = "relative"; // التأكد من أنها غير ثابتة
  }
});

// Change slide every 3 seconds
setInterval(showSlides, 3000);
function toggleReadMore() {
  const description = document.getElementById("description");
  const button = document.getElementById("read-more-btn");
  
  if (button.textContent === "قراءة المزيد") {
      description.textContent =
"شركة مقاولات رائدة في الرياض تقدم خدمات البناء والإنشاء المتكاملة للمشاريع السكنية والتجارية، نضمن جودة عالية، التزامًا بالمواعيد، وأسعار تنافسية. بفضل فريقنا الخبير وتجهيزاتنا المتطورة، نحقق أعلى معايير السلامة والجودة في كل مشروع. تواصل معنا لتحقيق رؤيتك الإنشائية باحترافية "
;
      button.textContent = "إخفاء";
  } else {
      description.textContent = description.textContent.split(" ").slice(0, 20).join(" ") + "...";
      button.textContent = "قراءة المزيد";
  }
}

// لتشغيل الاختصار عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("description").textContent = document.getElementById("description").textContent.split(" ").slice(0, 20).join(" ") + "...";
});
