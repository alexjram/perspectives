const openMenuClass = "header__mobile_menu--open";
export default function initMobileMenu() {
  const mobileToggles = document.querySelectorAll(".header__menu_toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!mobileMenu || !mobileToggles.length || mobileToggles.length < 2) return;
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
}
