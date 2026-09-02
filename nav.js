// nav.js
const customNavCode = `
<style>
/* =========================================
   STUDIO NAMMA REPLICA NAVBAR CSS
   ========================================= */

.namma-navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    padding: 24px 28px;
    display: grid;
    grid-template-columns: 18% 1fr auto 18%;
    align-items: center;
    box-sizing: border-box;
    font-family: 'Space Mono', monospace;
    font-size: 14px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--text-color, #111111);
    pointer-events: none;
    transition: color 0.4s ease, padding 0.4s ease;
}

.namma-navbar.is-scrolled {
    padding: 16px 28px;
    background-color: rgba(230, 229, 227, 0.85);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

body.dark-mode .namma-navbar.is-scrolled {
    background-color: rgba(17, 17, 17, 0.85);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.namma-navbar a,
.namma-navbar button {
    pointer-events: auto;
    color: inherit;
    text-decoration: none;
    background: none;
    border: none;
    font: inherit;
    cursor: pointer;
    padding: 0;
    margin: 0;
    display: inline-flex;
}

/* 4-Column Alignments */
.nav-col-1 { text-align: left; justify-self: start; }
.nav-col-2 { text-align: left; justify-self: start; }
.nav-col-3 { text-align: right; justify-self: end; }
.nav-col-4 { text-align: right; justify-self: end; }

/* =========================================
   SIGNATURE VERTICAL SLIDE HOVER EFFECT
   ========================================= */
.nav-slide-box { overflow: hidden; display: inline-flex; }
.nav-slide-wrapper { position: relative; display: inline-flex; }

.nav-slide-original {
    display: inline-block;
    transform: translate(0%, 0%);
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-slide-hover {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0%, 100%);
    display: inline-block;
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-slide-box:hover .nav-slide-original { transform: translate(0%, -100%); }
.nav-slide-box:hover .nav-slide-hover { transform: translate(0%, 0%); }

/* =========================================
   FULLSCREEN MENU DRAWER (WITH STAGGER ANIMATIONS)
   ========================================= */
.namma-menu-drawer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--bg-color, #E6E5E3);
    color: var(--text-color, #111111);
    z-index: 9995;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 120px 4vw 40px 4vw;
    box-sizing: border-box;
    opacity: 0;
    pointer-events: none;
    /* Dramatic slide easing to match Studio Namma */
    transform: translateY(-100%);
    transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.5s ease, background-color 0.4s ease, color 0.4s ease;
    overflow-y: auto;
}

.namma-menu-drawer.is-open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
}

/* 4-Row Grid Layout */
.namma-menu-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, auto);
    column-gap: 6vw;
    row-gap: 0;
    width: 100%;
    max-width: 1800px;
    margin: 0 auto;
}

.namma-menu-grid a {
    font-family: 'Anton', sans-serif;
    font-size: clamp(55px, 11.5vw, 175px);
    text-transform: uppercase;
    text-decoration: none;
    color: inherit;
    line-height: 0.88; 
    letter-spacing: -2px;
    margin: 0;
    padding: 0;
    display: block;
    width: fit-content;
    
    /* Animation Base State (Hidden, moved down) */
    opacity: 0;
    transform: translateY(60px);
    transition: opacity 1.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.drawer-link {
    position: relative;
    display: block;
    width: fit-content;
    overflow: visible;
}

.drawer-link-text {
    display: block;
    position: relative;
    z-index: 2;
    transition: transform 1.5s ease;
    will-change: transform;
}

.drawer-link-gif {
    position: absolute;
    left: 0;
    top: 50%;
    height: clamp(50px, 7vw, 110px);
    width: auto;
    object-fit: cover;
    border-radius: 4px;
    opacity: 0;
    pointer-events: none;
    transform: translate(-12px, -50%) scale(0.95);
    z-index: 1;
    transition: opacity 1.5s ease, transform 1.5s ease;
}

/* Base hover state for the hovered item itself */
.drawer-link:hover .drawer-link-text {
    transform: translateX(13vw);
    opacity: 1 !important;
}

.drawer-link:hover .drawer-link-gif {
    opacity: 1;
    transform: translate(0, -50%) scale(1);
}

/* Animation Active State (Visible, moved up) */
.namma-menu-drawer.is-open .namma-menu-grid a {
    opacity: 1;
    transform: translateY(0);
}

//  menu hover effect


.namma-menu-grid:has(.left-col:hover) .right-col .drawer-link-text {
    transform: translateX(15vw);
    opacity: 0.5; 
}

/* Prevent double-shifting if you directly hover a right-column link */
.namma-menu-grid:has(.right-col:hover) .right-col .drawer-link-text {
    opacity: 1; 
}

/* Stagger Delays mapped to grid position */
.namma-menu-drawer.is-open .link-home     { transition-delay: 0.30s; }
.namma-menu-drawer.is-open .link-work     { transition-delay: 0.40s; }
.namma-menu-drawer.is-open .link-studio   { transition-delay: 0.40s; } /* Aligns with work */
.namma-menu-drawer.is-open .link-services { transition-delay: 0.50s; }
.namma-menu-drawer.is-open .link-plans    { transition-delay: 0.50s; } /* Aligns with services */
.namma-menu-drawer.is-open .link-approach { transition-delay: 0.60s; }
.namma-menu-drawer.is-open .link-news     { transition-delay: 0.60s; } /* Aligns with approach */


/* Explicit Grid Placement */
.link-home     { grid-column: 1; grid-row: 1; }
.link-work     { grid-column: 1; grid-row: 2; }
.link-services { grid-column: 1; grid-row: 3; }
.link-approach { grid-column: 1; grid-row: 4; }

.link-studio   { grid-column: 2; grid-row: 2; } 
.link-plans    { grid-column: 2; grid-row: 3; } 
.link-news     { grid-column: 2; grid-row: 4; } 

/* =========================================
   DARK MODE GLOBALS
   ========================================= */
body.dark-mode {
    --bg-color: #111111 !important;
    --text-color: #E6E5E3 !important;
    background-color: #111111 !important;
    color: #E6E5E3 !important;
}

body.dark-mode .hero,
body.dark-mode #playground,
body.dark-mode .namma-replica {
    background-color: #111111 !important;
    color: #E6E5E3 !important;
}

body.dark-mode .hero-line span,
body.dark-mode .play-header h2,
body.dark-mode .animate,
body.dark-mode #cta h2,
body.dark-mode .service-row.active {
    color: #E6E5E3 !important;
}

body.dark-mode #statusBar {
    background: #1a1a1a !important;
    border-top: 1px solid rgba(255, 255, 255, 0.15) !important;
    color: #E6E5E3 !important;
}

/* =========================================
   MOBILE RESPONSIVENESS
   ========================================= */
@media (max-width: 768px) {
    .namma-navbar {
        grid-template-columns: 1fr auto auto;
        padding: 18px 20px;
    }
    .nav-col-2 { display: none; }
    .nav-col-3 { margin-right: 20px; }
    
    .namma-menu-drawer {
        padding-top: 100px;
    }

    .namma-menu-grid {
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    .namma-menu-grid a {
        font-size: clamp(50px, 16vw, 100px);
        line-height: 0.9;
    }
    
    /* Sequential stagger for mobile stack */
    .namma-menu-drawer.is-open .link-home     { transition-delay: 0.3s; }
    .namma-menu-drawer.is-open .link-work     { transition-delay: 0.4s; }
    .namma-menu-drawer.is-open .link-services { transition-delay: 0.5s; }
    .namma-menu-drawer.is-open .link-approach { transition-delay: 0.6s; }
    .namma-menu-drawer.is-open .link-studio   { transition-delay: 0.7s; }
    .namma-menu-drawer.is-open .link-plans    { transition-delay: 0.8s; }
    .namma-menu-drawer.is-open .link-news     { transition-delay: 0.9s; }
}
</style>

<!-- TOP NAVBAR -->
<header class="namma-navbar" id="nammaNavbar">
    <a href="/" class="nav-col-1 nav-slide-box" id="navLogo">
        <span class="nav-slide-wrapper">
            <span class="nav-slide-original">STUDIO NAMMA</span>
            <span class="nav-slide-hover">STUDIO NAMMA</span>
        </span>
    </a>

    <button class="nav-col-2 nav-slide-box" id="darkModeBtn" type="button" aria-label="Toggle Dark Mode">
        <span class="nav-slide-wrapper">
            <span class="nav-slide-original" id="darkModeTextOriginal">DARK MODE</span>
            <span class="nav-slide-hover" id="darkModeTextHover">DARK MODE</span>
        </span>
    </button>

    <button class="nav-col-3 nav-slide-box" id="menuToggleBtn" type="button" aria-label="Toggle Navigation Menu">
        <span class="nav-slide-wrapper">
            <span class="nav-slide-original" id="menuTextOriginal">MENU</span>
            <span class="nav-slide-hover" id="menuTextHover">MENU</span>
        </span>
    </button>

    <a href="#contact" class="nav-col-4 nav-slide-box say-hello-btn">
        <span class="nav-slide-wrapper">
            <span class="nav-slide-original">LET'S TALK!</span>
            <span class="nav-slide-hover">LET'S TALK!</span>
        </span>
    </a>
</header>

<!-- FULLSCREEN MENU OVERLAY (MATCHING IMAGE_92FCEC) -->
<div class="namma-menu-drawer" id="nammaMenuDrawer">
    <div class="namma-menu-grid">
        <a href="index.html" class="drawer-link link-home">
            <span class="drawer-link-text">HOME</span>
            <img class="drawer-link-gif" src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/687f51f589db1d6a1057cde2_shared%20(4).gif" alt="" loading="lazy">
        </a>
        <a href="#playground" class="drawer-link link-work">
            <span class="drawer-link-text">WORK</span>
            <img class="drawer-link-gif" src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/687f520f976b04b16bc61d2b_shared%20(5).gif" alt="" loading="lazy">
        </a>
        <a href="service.html" class="drawer-link link-services">
            <span class="drawer-link-text">SERVICES</span>
            <img class="drawer-link-gif" src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/687f52905775f96448c20208_shared%20(8).gif" alt="" loading="lazy">
        </a>
        <a href="approach.html" class="drawer-link link-approach">
            <span class="drawer-link-text">APPROACH</span>
            <img class="drawer-link-gif" src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/687f52f85a6d01903d3b0903_shared9-ezgif.com-optimize.gif" alt="" loading="lazy">
        </a>

        <a href="studio.html" class="drawer-link link-studio">
            <span class="drawer-link-text">STUDIO</span>
            <img class="drawer-link-gif" src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/687f52743978d71c86ce864a_shared%20(7).gif" alt="" loading="lazy">
        </a>
        <a href="#plans" class="drawer-link link-plans">
            <span class="drawer-link-text">PLANS</span>
            <img class="drawer-link-gif" src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/687f53340fd0b3d13f6ce6ec_shared%20(10).gif" alt="" loading="lazy">
        </a>
        <a href="#news" class="drawer-link link-news">
            <span class="drawer-link-text">NEWS</span>
            <img class="drawer-link-gif" src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/687f539812c66351fb6ee1cc_shared%20(11).gif" alt="" loading="lazy">
        </a>
    </div>
</div>
`;

document.addEventListener("DOMContentLoaded", () => {
    document.body.insertAdjacentHTML('afterbegin', customNavCode);

    const navbar = document.getElementById("nammaNavbar");
    const darkModeBtn = document.getElementById("darkModeBtn");
    const darkOriginal = document.getElementById("darkModeTextOriginal");
    const darkHover = document.getElementById("darkModeTextHover");
    const menuBtn = document.getElementById("menuToggleBtn");
    const menuOriginal = document.getElementById("menuTextOriginal");
    const menuHover = document.getElementById("menuTextHover");
    const drawer = document.getElementById("nammaMenuDrawer");
    const drawerLinks = document.querySelectorAll(".drawer-link");
    const navLogo = document.getElementById("navLogo");

    navLogo.addEventListener("click", (e) => {
        if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
            e.preventDefault();
            if (typeof lenis !== "undefined") {
                lenis.scrollTo(0, { duration: 1.2 });
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        }
    });

    const handleScroll = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        if (scrollY > 30) {
            navbar.classList.add("is-scrolled");
        } else {
            navbar.classList.remove("is-scrolled");
        }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    let isDarkMode = false;
    darkModeBtn.addEventListener("click", () => {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle("dark-mode", isDarkMode);
        
        const newText = isDarkMode ? "LIGHT MODE" : "DARK MODE";
        darkOriginal.textContent = newText;
        darkHover.textContent = newText;
    });

    let isMenuOpen = false;
    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
        drawer.classList.toggle("is-open", isMenuOpen);

        const newLabel = isMenuOpen ? "CLOSE" : "MENU";
        menuOriginal.textContent = newLabel;
        menuHover.textContent = newLabel;

        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
            if (typeof lenis !== "undefined") lenis.stop();
        } else {
            document.body.style.overflow = "";
            if (typeof lenis !== "undefined") lenis.start();
        }
    };

    menuBtn.addEventListener("click", toggleMenu);

    drawerLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (isMenuOpen) toggleMenu();
        });
    });
});
