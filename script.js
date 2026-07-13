// Welcome message
console.log("Career Counselling Website Loaded");

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Book button action
const btn = document.querySelector("button");

if (btn) {
  btn.addEventListener("click", function () {
    alert("Thank you! Our counsellor will contact you soon.");
  });
}
