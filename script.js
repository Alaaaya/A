// تغيير شفافية شريط التنقل عند التمرير
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    let opacity = Math.min(0.8, window.scrollY / 300);
    navbar.style.background = `rgba(0, 0, 0, ${opacity})`;
});