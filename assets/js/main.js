document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const navbar = document.querySelector("[data-navbar]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const scrollTopButton = document.querySelector("[data-scroll-top]");
  const page = body.dataset.page || "";

  const setActiveNav = () => {
    document.querySelectorAll("[data-nav]").forEach((link) => {
      const isActive = link.dataset.nav === page;
      link.classList.toggle("is-active", isActive);
    });
  };

  const updateChrome = () => {
    if (navbar) {
      navbar.classList.toggle("is-scrolled", window.scrollY > 20);
    }

    if (scrollTopButton) {
      scrollTopButton.classList.toggle("is-visible", window.scrollY > 450);
    }
  };

  const closeMenu = () => {
    if (!mobileMenu || !menuToggle) {
      return;
    }

    mobileMenu.classList.remove("is-open");
    menuToggle.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    body.classList.remove("overflow-hidden");
  };

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("is-open");
      menuToggle.classList.toggle("is-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      body.classList.toggle("overflow-hidden", isOpen);
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  if (scrollTopButton) {
    scrollTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.querySelectorAll("[data-year]").forEach((yearNode) => {
    yearNode.textContent = String(new Date().getFullYear());
  });

  const initCounters = () => {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length || !("IntersectionObserver" in window)) {
      return;
    }

    const animateCounter = (counter) => {
      const target = Number(counter.dataset.count || 0);
      const prefix = counter.dataset.prefix || "";
      const suffix = counter.dataset.suffix || "";
      const duration = Number(counter.dataset.duration || 1600);
      const start = performance.now();

      const step = (timestamp) => {
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(target * eased);
        counter.textContent = `${prefix}${value}${suffix}`;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.55 }
    );

    counters.forEach((counter) => observer.observe(counter));
  };

  const initTilt = () => {
    document.querySelectorAll("[data-tilt]").forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 14;
        const rotateX = (0.5 - y / rect.height) * 14;
        card.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
      });

      card.addEventListener("mouseleave", () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
      });
    });
  };

  const initSpotlights = () => {
    document.querySelectorAll(".spotlight-card").forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        card.style.setProperty("--spotlight-x", `${x}px`);
        card.style.setProperty("--spotlight-y", `${y}px`);
      });
    });
  };

  const initMagnetic = () => {
    document.querySelectorAll("[data-magnetic]").forEach((button) => {
      button.addEventListener("mousemove", (event) => {
        const rect = button.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) - 0.5;
        const y = ((event.clientY - rect.top) / rect.height) - 0.5;
        button.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
      });

      button.addEventListener("mouseleave", () => {
        button.style.transform = "";
      });
    });
  };

  const initParallax = () => {
    const nodes = document.querySelectorAll("[data-parallax]");
    if (!nodes.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    window.addEventListener("mousemove", (event) => {
      const x = (event.clientX / window.innerWidth) - 0.5;
      const y = (event.clientY / window.innerHeight) - 0.5;

      nodes.forEach((node) => {
        const depth = Number(node.dataset.depth || 20);
        node.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
      });
    });
  };

  if (window.AOS) {
    window.AOS.init({
      duration: 850,
      once: true,
      offset: 16,
      easing: "ease-out-cubic",
      mirror: false
    });
  }

  setActiveNav();
  updateChrome();
  initCounters();
  initTilt();
  initSpotlights();
  initMagnetic();
  initParallax();

  window.addEventListener("scroll", updateChrome, { passive: true });
  window.addEventListener("resize", updateChrome);
});

window.addEventListener("load", () => {
  const loader = document.querySelector("[data-loader]");
  if (!loader) {
    return;
  }

  loader.classList.add("is-hidden");
  document.body.classList.add("is-loaded");
  window.setTimeout(() => loader.remove(), 700);
});
