

function revealHeroLines() {

  const lines =
    document.querySelectorAll(
      ".hero-line span"
    );


  lines.forEach((line, index) => {

    setTimeout(() => {

      line.classList.add(
        "show-text"
      );

    }, 400 + index * 220);

  });

}


if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    revealHeroLines
  );

} else {

  revealHeroLines();

}



(function pixelsGallery() {

  const gallery =
    document.getElementById(
      "pixelsGallery"
    );


  if (!gallery) return;


  const images = [

    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14af05e0d62345efe539e_1.webp",

    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14af0ad06d6cb6a11f0dc_2.webp",

    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14af0d28853d645efac55_3.webp",

    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14af0e4de88224bccf8ef_4.webp",

    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14af01a3fa852ba2a7072_5.webp",

    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14af09756369410ed98e4_6.webp",

    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14af0e32d9020185d375c_7.webp",

    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14af03318c8d4c2c72efd_8.webp",

    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14af0f6e2255e9bdcec98_9.webp",

    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14af0c932cd819bc78a58_10.webp",

    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14af01d4e65bdb3fd6819_11.webp",

    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14b19faca9f664068f531_12.webp",

    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14b226acaaf0b497117be_13.webp",

    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14b29ea0da1a26a3927a7_14.webp",

    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14b362961da02c8f079f1_15.webp",

    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14b3ce4e3aa1f748a9546_16.webp",

    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14b4288c7c082f7eb977b_17.webp"

  ];


  images.forEach((src) => {

    const img =
      document.createElement("img");


    img.src = src;

    img.alt = "";


    img.style.setProperty(
      "--r",
      `${(Math.random() * 16 - 8).toFixed(1)}deg`
    );


    gallery.appendChild(img);

  });


  const imgs =
    gallery.querySelectorAll("img");


  const hero =
    document.getElementById(
      "studioHero"
    );


  let currentImage = -1;

  let lastX = 0;

  let lastY = 0;

  let imageTimer;


  function showNextImage(x, y) {

    if (!imgs.length) return;


    let nextImage;


    do {

      nextImage =
        Math.floor(
          Math.random() * imgs.length
        );

    } while (
      nextImage === currentImage &&
      imgs.length > 1
    );


    currentImage = nextImage;


    imgs.forEach(img => {

      img.classList.remove(
        "show"
      );

    });


    const img =
      imgs[currentImage];


    img.style.left =
      `${x}px`;

    img.style.top =
      `${y}px`;


    requestAnimationFrame(() => {

      img.classList.add(
        "show"
      );

    });


    clearTimeout(
      imageTimer
    );


    imageTimer =
      setTimeout(() => {

        img.classList.remove(
          "show"
        );

      }, 650);

  }


  hero.addEventListener(
    "mousemove",
    (e) => {

      const rect =
        hero.getBoundingClientRect();


      const x =
        e.clientX - rect.left;


      const y =
        e.clientY - rect.top;


      const distance =
        Math.hypot(
          x - lastX,
          y - lastY
        );


      if (
        distance > 70
      ) {

        lastX = x;

        lastY = y;

        showNextImage(
          x,
          y
        );

      }

    }
  );


  hero.addEventListener(
    "mouseleave",
    () => {

      clearTimeout(
        imageTimer
      );


      imgs.forEach(img => {

        img.classList.remove(
          "show"
        );

      });


      currentImage = -1;

    }
  );

})();



(function about() {

  const textEl =
    document.getElementById(
      "aboutText"
    );


  const teamEl =
    document.getElementById(
      "teamRow"
    );


  if (
    !textEl ||
    !teamEl
  ) return;


  const aboutCopy =
    "Namma started in 2021, when a group of independent freelancers decided to team up around one idea: build things differently. Same standards, same eye for detail, same itch to do more than one-off gigs. That idea grew into a full creative studio spread across Paris, Barcelona and Los Angeles — a lab where every digital experience is meant to be noticed, felt and remembered. The obsession is simple: a great idea deserves flawless execution, so every result ships pixel-perfect.";


  textEl.innerHTML =
    aboutCopy
      .split(" ")
      .map(
        (word, i) => `<span class="word" style="transition-delay:${i * 25}ms">${word}</span>`
      )
      .join(" ");


  const team = [

    {
      name: "Gabriel, CEO",

      photo:
        "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d157ee856072b2f05c9945_llupscalemedia-transformed.webp"
    },

    {
      name: "Isaac, COO",

      photo:
        "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68b76a47c1eed839d8f12bea_Frame%202147255615.webp"
    },

    {
      name: "Carla, CMO",

      photo:
        "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68da9fce4c07cb190966e26b_ssssdFrame%201171274908.webp"
    }

  ];


  teamEl.innerHTML =
    team.map(
      (t, i) => `

        <div class="team-member" style="transition-delay:${i * 180}ms">

          <img
            src="${t.photo}"
            alt="${t.name}"
            style="transition-delay:${i * 180}ms"
          >

          <span>
            ${t.name}
          </span>

        </div>

      `
    ).join("");




  const aboutObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "reveal"
              );



              entry.target.classList.add(
                "words-active"
              );

              aboutObserver.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: 0.2
      }
    );


  aboutObserver.observe(
    textEl
  );




const teamCards =
  document.querySelectorAll(".team-member");

const teamObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          const card = entry.target;

          card.classList.add("visible");

          teamObserver.unobserve(card);

        }

      });

    },
    {
      threshold: 0.2
    }
  );


teamCards.forEach((card) => {

  teamObserver.observe(card);

});



  function teamParallax() {

    teamCards.forEach(
      (card, i) => {

        const rect =
          card.getBoundingClientRect();


        const center =
          rect.top +
          rect.height / 2;


        const viewport =
          window.innerHeight / 2;


        const distance =
          center - viewport;


        const speed =
          [0.04, 0.07, 0.05][i];


        if (
          card.classList.contains(
            "visible"
          )
        ) {

          card.style.transform =
            `translateY(${
              -distance * speed
            }px)`;

        }

      }
    );

  }


  window.addEventListener(
    "scroll",
    () => {

      requestAnimationFrame(
        teamParallax
      );

    }
  );


})();


/* =========================================================
   4. FUEL CARDS (value props under "The fuel behind the craft")
   ========================================================= */

(function fuelCards() {

  const listEl =
    document.getElementById(
      "fuelList"
    );


  if (!listEl) return;


  const cards = [

    {
      label: "Craft",
      title: "The art<br>of detail",
      text:
        "Anyone can make something look nice. Making it work is the hard part. Every element we place earns its spot — to tell a story, to pull people in, to turn a scroll into a click. That balance of beauty and performance is what makes people stop and pay attention. Nothing here happens by accident, except maybe how we take our coffee."
    },

    {
      label: "No-Code & Beyond",
      title: "Faster.<br>Smoother.<br>No code.",
      text:
        "Digital is where we play. We're fluent in Webflow, GSAP, Three.js and whatever's newest in UI/UX. But the tools are never the point — the experience they create is. A site that doesn't function well is just an expensive screensaver."
    },

    {
      label: "Brightness",
      title: "Serious,<br>but not<br>too much",
      text:
        "We like a challenge — the kind of project that pushes us to raise our own bar. We aim high and hit our deadlines, without losing our heads along the way. Panic never solved anything; clear thinking, honest conversation and sharp execution do. There's usually a smarter way forward, sometimes even an elegant one. We move fast, we don't burn out, and yes, we still sleep fine at night."
    },

    {
      label: "Agility",
      title: "Speed is<br>a mindset",
      text:
        "Digital moves fast, and we stay a step ahead of it rather than just keeping pace. We're always testing new ideas and questioning what's possible, because in this line of work, what's relevant today has a short shelf life."
    },

    {
      label: "Transparency",
      title: "No<br>bullshit",
      text:
        "We skip the jargon and skip the red tape. Everything about a project stays visible — what's happening, who's doing it, how, and why. Openness isn't a value we put on a slide, it's just how we work. The only unclear thing around here might be a shaky video-call connection."
    }

  ];


  listEl.innerHTML =
    cards.map(
      c => `

        <div class="fuel-card">

          <div class="fuel-label">
            ${c.label}
          </div>

          <h3>${c.title}</h3>

          <p>${c.text}</p>

        </div>

      `
    ).join("");


  const fuelCardsEls =
    listEl.querySelectorAll(".fuel-card");


  const fuelObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "reveal"
              );

              fuelObserver.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: 0.15
      }
    );


  fuelCardsEls.forEach(
    card => fuelObserver.observe(card)
  );

})();


/* =========================================================
   FUEL BIG TEXT REVEAL — "THE FUEL / BEHIND / THE CRAFT"
   slides up line by line once the section enters view
   ========================================================= */

(function fuelTextReveal() {

  const heroBlock =
    document.getElementById("fuelHero");


  const lines =
    document.querySelectorAll(
      ".fuel-reveal"
    );


  if (
    !heroBlock ||
    !lines.length
  ) return;


  function revealFuelLines() {

    lines.forEach((line, index) => {

      setTimeout(() => {

        line.classList.add(
          "show-text"
        );

      }, index * 220);

    });

  }


  const fuelTextObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              entry.isIntersecting
            ) {

              revealFuelLines();

              fuelTextObserver.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: 0.1
      }
    );


  fuelTextObserver.observe(
    heroBlock
  );

})();


/* =========================================================
   5. CTA
   ========================================================= */

(function cta() {

  const section =
    document.getElementById(
      "cta"
    );


  if (!section) return;


  section.innerHTML = `

    <div class="cta-inner">

      <div class="cta-label">
        Let's work together
      </div>

      <h2 class="cta-title">
        LET'S<br>WORK<br>TOGETHER
      </h2>

      <p class="cta-text">
        Work with us if average isn't your thing.<br>
        Drop the idea, we'll build it.
      </p>

      <a
        href="#"
        class="cta-link"
      >
        Say hello →
      </a>

    </div>

  `;


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              entry.isIntersecting
            ) {

              section.classList.add(
                "show"
              );

              section.classList.add(
                "active"
              );

            }

          }
        );

      },
      {
        threshold: 0.3
      }
    );


  observer.observe(
    section
  );

})();


/* =========================================================
   6. CITY CLOCK
   ========================================================= */

(function statusBar() {

  const el =
    document.getElementById(
      "statusClock"
    );


  if (!el) return;


  const cities = [

    {
      label: "Paris, France",
      tz: "Europe/Paris"
    },

    {
      label: "Los Angeles, CA",
      tz: "America/Los_Angeles"
    },

    {
      label: "Barcelona, Spain",
      tz: "Europe/Madrid"
    },

    {
      label: "Hong Kong, China",
      tz: "Asia/Hong_Kong"
    }

  ];


  let current = 0;


  function render() {

    const city =
      cities[current];


    const time =
      new Intl.DateTimeFormat(
        "en-US",
        {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,

          timeZone:
            city.tz
        }
      ).format(
        new Date()
      );


    el.style.opacity = "0";


    setTimeout(
      () => {

        el.textContent =
          `${city.label}  ${time}`;

        el.style.opacity = "1";

      },
      150
    );

  }


  render();


  setInterval(
    render,
    1000
  );


  setInterval(
    () => {

      current =
        (current + 1) %
        cities.length;

    },
    3000
  );

})();