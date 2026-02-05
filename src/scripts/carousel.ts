import EmblaCarousel, { type EmblaOptionsType } from "embla-carousel";

export function initCarousel() {
  const carouselNodes = document.querySelectorAll<HTMLDivElement>(".carousel");

  const options: EmblaOptionsType = {
    loop: true,
    active: window.innerWidth < 768,
  };

  carouselNodes.forEach((n) => {
    const embla = EmblaCarousel(n, options);
    const slides = embla.slideNodes();

    // Create dot navigation container
    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("carousel__dots");

    // Create dots for each slide
    const dots: HTMLButtonElement[] = [];
    slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.classList.add("carousel__dot");
      dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
      dot.addEventListener("click", () => {
        embla.scrollTo(index);
      });
      dots.push(dot);
      dotsContainer.appendChild(dot);
    });

    // Append dots container after the carousel
    n.appendChild(dotsContainer);

    // Update dot states on slide change
    const updateDots = () => {
      const selectedIndex = embla.selectedScrollSnap();
      dots.forEach((dot, index) => {
        if (index === selectedIndex) {
          dot.classList.add("carousel__dot--active");
        } else {
          dot.classList.remove("carousel__dot--active");
        }
      });
    };

    // Set initial state
    updateDots();

    // Listen for slide changes
    embla.on("select", updateDots);

    const reinitOnResize = () => {
      const isMobile = window.innerWidth < 768;

      embla.reInit({ active: isMobile });

      // CSS handles dots visibility based on breakpoint
      if (isMobile) {
        updateDots();
      }
    };



    window.addEventListener("resize", reinitOnResize);
  });
}
