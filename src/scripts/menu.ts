const openMenuClass = "header__mobile_menu--open";
const scrolledClass = "header--scrolled";
export default function initMobileMenu() {
  const mobileToggles = document.querySelectorAll(".header__menu_toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const header = document.querySelector(".header");

  if (!mobileMenu || !mobileToggles.length) return;
  console.log("has the menu and the toggle");

  mobileToggles.forEach((mt) =>
    mt.addEventListener("click", () => {
      if (!mobileMenu.classList.contains(openMenuClass)) {
        mobileMenu.classList.add(openMenuClass);
      } else {
        mobileMenu.classList.remove(openMenuClass);
      }
    }),
  );

  // Add scrolled class on scroll
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add(scrolledClass);
      } else {
        header.classList.remove(scrolledClass);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Check initial scroll position
    handleScroll();
  }
}
