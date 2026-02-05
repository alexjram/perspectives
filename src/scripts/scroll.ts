export function initScrollToSection() {
  const scrollButton = document.querySelector<HTMLButtonElement>(".hero__bottom_button");
  
  if (scrollButton) {
    scrollButton.addEventListener("click", () => {
      const benefitsSection = document.getElementById("benefits-section");
      
      if (benefitsSection) {
        benefitsSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  }
}
