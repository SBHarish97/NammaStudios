const customFooterCode = `
<style>
/* =========================================
   STUDIO NAMMA REPLICA CSS (PIXEL PERFECT)
   ========================================= */

@import url('https://fonts.googleapis.com/css2?family=Anton&family=Space+Mono&display=swap');

/* HIDE SCROLLBAR GLOBALLY */
body::-webkit-scrollbar {
    display: none;
}
body {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.namma-replica {
    --bg-color: #E6E5E3; /* Exact warm light gray from screenshot */
    --text-color: #111111;
    --blue-color: #0000ff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    padding: 5vw 0vw 2vw 0vw;
    position: relative;
    overflow: hidden;
}

.namma-replica a {
    color: inherit;
    text-decoration: none;
}

.text-mono {
    font-family: 'Space Mono', "Courier New", Courier, monospace;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

/* =========================================
   TOP SECTION: LET'S WORK TOGETHER
   ========================================= */
.footer-line-mask {
    display: inline-block;
    overflow: hidden;
    vertical-align: bottom;
}

.footer-line-reveal {
    display: inline-flex;
    align-items: center;
    transform: translateY(120%);
}

.is-visible .footer-line-reveal {
    animation: footerWaveReveal 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
}

@keyframes footerWaveReveal {
    0% { transform: translateY(120%); }
    100% { transform: translateY(0); }
}

.footer-top-section {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 6vw;
    padding:0vw 1vw 0vw 1vw;
}

.footer-hero-text {
    display: flex;
    flex-direction: column;
}

.footer-hero-line {
    font-family: 'Anton', sans-serif;
    font-size: 9vw;
    line-height: 1; /* Tightly packed like the screenshot */
    font-weight: 400; /* Anton is naturally bold */
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    color: var(--text-color);
    letter-spacing: 0.01em; /* Extremely tight letter spacing */
    display: flex;
    align-items: center;
}

.footer-hero-img {
    height: 0.87em;
    width: auto;
    background-color: #ccc;
    border-radius: 8px;
    margin-right: 2vw;
    object-fit: cover;
    display: inline-block;
}

.footer-img-reveal {
    width: 0;
    opacity: 0;
    margin-right: 0;
    transition: width 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000), opacity 0.5s ease-out, margin-right 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000);
}

.is-visible .footer-img-reveal {
    width: 1.8em; /* Shorter expanded width */
    opacity: 1;
    margin-right: 2vw;
    transition-delay: 0.8s;
}

.footer-side-text {
    max-width: 30vw;
    margin-top: 0.5vw;
    margin-right: 5vw;
    // background-color: red;
}

.footer-side-text p {
    font-size: 1.5vw;
    line-height: 1.3;
    font-weight: 500;
    margin: 0 0 2vw 0;
}

.say-hello-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    padding-bottom: 2px;
}
.hello-arrow {
    display: inline-flex;
    align-items: center;
    font-size: 1.4em;
    line-height: 1;
    position: relative;
    top: -3px; /* Moved further up */
    transition: transform 0.3s ease;
}
.say-hello-btn:hover .hello-arrow {
    transform: translateX(6px);
}

/* =========================================
   MIDDLE SECTION: VIDEO CARDS
   ========================================= */
.footer-videos-row {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1.5vw;
    // justify-content: space-between;
    margin: 10vw 1.2vw 0vw 1.2vw;
}

@keyframes footerVideoCascade {
    0% { opacity: 0; transform: translateY(40px); }
    100% { opacity: 1; transform: translateY(0); }
}

.footer-video-card {
    opacity: 0; /* Starts hidden */
    transform: translateY(40px);
    width: 96%;
    height:90%;
    aspect-ratio: 3.8/2.6;
    background-color: #333;
    border-radius: 7px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 0.8rem;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
}

.is-visible .footer-video-card {
    animation: footerVideoCascade 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
}

.footer-video-card video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* =========================================
   NEW BOTTOM INFO SECTION
   ========================================= */
.footer-info-section {
    display: flex;
    // justify-content: space-between;
    gap:46.5vw;
    padding: 0 1.2vw;
    margin-top: 4vw;
    margin-bottom: 4vw;
    // background-color:rgb(238, 129, 129);
}

.footer-info-left {
    display: flex;
    flex-direction: column;
    gap: 2vw;
    
}

.footer-links-group {
    display: flex;
    flex-direction: column;
    gap: 0.1vw;
    
}

.footer-links-group a {
    transition: opacity 0.3s ease;
    font-size:0.9rem;
}

.slide-link-box {
    align-self: flex-start;
    overflow: hidden;
    display: inline-flex;
}

.slide-text-wrapper {
    position: relative;
    display: inline-flex;
}

.slide-text-original {
    display: inline-block;
    transform: translate(0%, 0%);
    transition: transform 0.8s cubic-bezier(0.95, 0, 0.05, 1);
}

.slide-text-hover {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(15%, 100%);
    display: inline-block;
    transition: transform 0.8s cubic-bezier(0.95, 0, 0.05, 1);
}

.slide-link-box:hover .slide-text-original {
    transform: translate(-15%, -100%);
}

.slide-link-box:hover .slide-text-hover {
    transform: translate(0%, 0%);
}

/* Prevent opacity fade for slide links specifically */
.footer-links-group a.slide-link-box:hover {
    opacity: 1;
}

.footer-links-group a:hover {
    opacity: 0.5;
}

.footer-info-right {
    display: flex;
    flex-direction: column;
    gap: 1.9vw;
    text-align: left;
    // background-color: rgb(238, 220, 129);
}

.footer-text-block {
    line-height: 1.4;
    font-size:0.89rem;
    // background-color: rgb(169, 238, 129);
}

/* =========================================
   GIANT STRETCH TEXT AT BOTTOM
   ========================================= */
.footer-giant-text-container {
    width: 100%;
    text-align: center;
    overflow: hidden;
    height: 0px;
    margin-bottom: 1.5vw; /* distance from bottom of screen */
    display: flex;
    align-items: flex-end;
    // justify-content: center;
}

.footer-giant-text {
    font-family: 'Anton', sans-serif;
    font-size: 35.5vw; /* Giant text to fill width */
    line-height: 0.8;
    font-weight: 400;
    letter-spacing: -0.04em; /* Reduced letter spacing */
    text-transform: uppercase;
    color: var(--text-color);
    white-space: nowrap;
    transform-origin: bottom center;
    transform: scaleY(0.05); /* starts very compressed */
    will-change: transform;
}

</style>

<div class="namma-replica">
    
    

    <!-- TOP: LET'S WORK TOGETHER -->
    <div class="footer-top-section">
        <div class="footer-hero-text footer-animate-on-scroll">
            <div class="footer-hero-line">
                <span class="footer-line-mask"><span class="footer-line-reveal" style="animation-delay: 0.0s;">LET'S WORK</span></span>
            </div>
            <div class="footer-hero-line">
                <span class="footer-line-mask"><span class="footer-line-reveal" style="animation-delay: 0.15s;">
                    <!-- Team Image perfectly aligned -->
                    <img src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68dce0426bc778f79210aebb_CTA-Team_Namma.webp" alt="Team" class="footer-hero-img footer-img-reveal">
                    TOGETHER
                </span></span>
            </div>
        </div>

        <div class="footer-side-text footer-animate-on-scroll">
            <p>
                <span class="footer-line-mask" style="display: block;">
                    <span class="footer-line-reveal" style="animation-delay: 0.1s;">Work with us if average isn't your thing.</span>
                </span>
                <span class="footer-line-mask" style="display: block;">
                    <span class="footer-line-reveal" style="animation-delay: 0.2s;">Drop it, we'll build it!</span>
                </span>
            </p>
            <a href="#contact" class="say-hello-btn text-mono">
                <span class="footer-line-mask" style="display: block;">
                    <span class="footer-line-reveal" style="animation-delay: 0.3s;">SAY HELLO <span class="hello-arrow">&rarr;</span></span>
                </span>
            </a>
        </div>
    </div>

    <!-- MIDDLE: 6 VIDEO CARDS ROW -->
    <div class="footer-videos-row footer-animate-on-scroll">
        <div class="footer-video-card" style="animation-delay: 0.1s;">
            <video src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa249c8ad1d2624abf3d5_Footer-Service-designV2-transcode.mp4" autoplay loop muted playsinline></video>
        </div>
        <div class="footer-video-card" style="animation-delay: 0.2s;">
            <video src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa1926bb2adbd4315d488_Zefir%20footerV2-transcode.mp4" autoplay loop muted playsinline></video>
        </div>
        <div class="footer-video-card" style="animation-delay: 0.3s;">
            <video src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa2440a49684a10b9e055_FOOTER%20-%20BRANDINGV2-transcode.mp4" autoplay loop muted playsinline></video>
        </div>
        <div class="footer-video-card" style="animation-delay: 0.4s;">
            <video src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa20fc54b7796aaa5edf6_SILVR-Video%201%20footersV3-transcode.mp4" autoplay loop muted playsinline></video>
        </div>
        <div class="footer-video-card" style="animation-delay: 0.5s;">
            <video src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa0feb2681e0616dc3b3a_Footer-supercomics-transcode.mp4" autoplay loop muted playsinline></video>
        </div>
        <div class="footer-video-card" style="animation-delay: 0.6s;">
            <video src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa22f852959114b6c7b56_OSOL-COVER-footer-V2-transcode.mp4" autoplay loop muted playsinline></video>
        </div>
    </div>

    <!-- NEW FOOTER INFO SECTION -->
    <div class="footer-info-section text-mono footer-animate-on-scroll">
        <div class="footer-info-left">
            <div class="footer-links-group">
                <span class="footer-line-mask" style="display: block;"><span class="footer-line-reveal" style="display: block; animation-delay: 0.1s;"><a href="#" class="slide-link-box"><span class="slide-text-wrapper"><span class="slide-text-original">HOME</span><span class="slide-text-hover">HOME</span></span></a></span></span>
                <span class="footer-line-mask" style="display: block;"><span class="footer-line-reveal" style="display: block; animation-delay: 0.2s;"><a href="#" class="slide-link-box"><span class="slide-text-wrapper"><span class="slide-text-original">WORK</span><span class="slide-text-hover">WORK</span></span></a></span></span>
                <span class="footer-line-mask" style="display: block;"><span class="footer-line-reveal" style="display: block; animation-delay: 0.3s;"><a href="#" class="slide-link-box"><span class="slide-text-wrapper"><span class="slide-text-original">SERVICES</span><span class="slide-text-hover">SERVICES</span></span></a></span></span>
                <span class="footer-line-mask" style="display: block;"><span class="footer-line-reveal" style="display: block; animation-delay: 0.4s;"><a href="#" class="slide-link-box"><span class="slide-text-wrapper"><span class="slide-text-original">STUDIO</span><span class="slide-text-hover">STUDIO</span></span></a></span></span>
                <span class="footer-line-mask" style="display: block;"><span class="footer-line-reveal" style="display: block; animation-delay: 0.5s;"><a href="#" class="slide-link-box"><span class="slide-text-wrapper"><span class="slide-text-original">PLANS</span><span class="slide-text-hover">PLANS</span></span></a></span></span>
                <span class="footer-line-mask" style="display: block;"><span class="footer-line-reveal" style="display: block; animation-delay: 0.6s;"><a href="#" class="slide-link-box"><span class="slide-text-wrapper"><span class="slide-text-original">APPROACH</span><span class="slide-text-hover">APPROACH</span></span></a></span></span>
                <span class="footer-line-mask" style="display: block;"><span class="footer-line-reveal" style="display: block; animation-delay: 0.7s;"><a href="#" class="slide-link-box"><span class="slide-text-wrapper"><span class="slide-text-original">NEWS</span><span class="slide-text-hover">NEWS</span></span></a></span></span>
            </div>
            <div class="footer-links-group">
                <span class="footer-line-mask" style="display: block;"><span class="footer-line-reveal" style="display: block; animation-delay: 0.8s;"><a href="#" class="slide-link-box"><span class="slide-text-wrapper"><span class="slide-text-original">YOUTUBE</span><span class="slide-text-hover">YOUTUBE</span></span></a></span></span>
                <span class="footer-line-mask" style="display: block;"><span class="footer-line-reveal" style="display: block; animation-delay: 0.9s;"><a href="#" class="slide-link-box"><span class="slide-text-wrapper"><span class="slide-text-original">LINKEDIN</span><span class="slide-text-hover">LINKEDIN</span></span></a></span></span>
                <span class="footer-line-mask" style="display: block;"><span class="footer-line-reveal" style="display: block; animation-delay: 1.0s;"><a href="#" class="slide-link-box"><span class="slide-text-wrapper"><span class="slide-text-original">INSTAGRAM</span><span class="slide-text-hover">INSTAGRAM</span></span></a></span></span>
                <span class="footer-line-mask" style="display: block;"><span class="footer-line-reveal" style="display: block; animation-delay: 1.1s;"><a href="#" class="slide-link-box"><span class="slide-text-wrapper"><span class="slide-text-original">LEGAL</span><span class="slide-text-hover">LEGAL</span></span></a></span></span>
                <span class="footer-line-mask" style="display: block;"><span class="footer-line-reveal" style="display: block; animation-delay: 1.2s;"><a href="#" class="slide-link-box"><span class="slide-text-wrapper"><span class="slide-text-original">SITE EN FRANCAIS</span><span class="slide-text-hover">SITE EN FRANCAIS</span></span></a></span></span>
            </div>
        </div>
        
        <div class="footer-info-right">
            <div class="footer-text-block">
                <span class="footer-line-mask" style="display: block;"><span class="footer-line-reveal" style="display: block; animation-delay: 1.3s;">WE ARE A CREATIVE STUDIO BASED IN PARIS, BARCELONA</span></span>
                <span class="footer-line-mask" style="display: block;"><span class="footer-line-reveal" style="display: block; animation-delay: 1.4s;">& LONDON.</span></span>
            </div>
            <div class="footer-text-block">
                <span class="footer-line-mask" style="display: block;"><span class="footer-line-reveal" style="display: block; animation-delay: 1.5s;">BIG PROJECT? CRAZY THOUGHT? OR JUST FEEL LIKE</span></span>
                <span class="footer-line-mask" style="display: block;"><span class="footer-line-reveal" style="display: block; animation-delay: 1.6s;">CHATTING?</span></span>
            </div>
            <div class="footer-text-block">
                <span class="footer-line-mask" style="display: block;"><span class="footer-line-reveal" style="display: block; animation-delay: 1.7s;">LET'S TALK!</span></span>
            </div>
            <div class="footer-text-block">
                <span class="footer-line-mask" style="display: block;">
                    <span class="footer-line-reveal" style="display: block; animation-delay: 1.8s;">
                        <a href="mailto:HELLO@STUDIONAMMA.COM" class="slide-link-box mailto-link" style="text-decoration:none; color:inherit;">
                            <span class="slide-text-wrapper">
                                <span class="slide-text-original">HELLO@STUDIONAMMA.COM</span>
                                <span class="slide-text-hover">HELLO@STUDIONAMMA.COM</span>
                            </span>
                        </a>
                    </span>
                </span>
            </div>
            <div class="footer-text-block">
                <span class="footer-line-mask" style="display: block;"><span class="footer-line-reveal" style="display: block; animation-delay: 1.9s;">COPYRIGHT 2025</span></span>
                <span class="footer-line-mask" style="display: block;"><span class="footer-line-reveal" style="display: block; animation-delay: 2.0s;">STUDIO NAMMA</span></span>
            </div>
        </div>
    </div>

    <!-- GIANT STRETCH TEXT AT BOTTOM -->
    <div class="footer-giant-text-container">
        <div class="footer-giant-text" id="bottomStretchText">NAMMA</div>
    </div>

</div>
`;

document.addEventListener("DOMContentLoaded", () => {
    document.body.insertAdjacentHTML('beforeend', customFooterCode);

    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { rootMargin: "0px 0px -10% 0px" });

    document.querySelectorAll('.footer-animate-on-scroll').forEach(el => {
        footerObserver.observe(el);
    });

    // Overscroll animation for the giant bottom text
    const bottomStretchText = document.getElementById('bottomStretchText');
    const bottomContainer = document.querySelector('.footer-giant-text-container');
    
    if (bottomStretchText && bottomContainer) {
        let extraHeight = 0;
        const MAX_HEIGHT = window.innerWidth * 0.325; // 30vw max height
        
        const updateStretch = () => {
            bottomContainer.style.height = `${extraHeight}px`;
            const progress = extraHeight / MAX_HEIGHT;
            const scale = 0.05 + (progress * 1.0);
            bottomStretchText.style.transform = `scaleY(${Math.max(0.05, scale)})`;
            
            // Keep Lenis in sync with the new page height
            if (typeof lenis !== 'undefined') {
                lenis.resize();
            }
        };
        
        const handleOverscroll = (deltaY) => {
            // Check if at the absolute bottom of the page
            const scrollY = typeof lenis !== 'undefined' ? lenis.scroll : window.scrollY;
            const maxScroll = document.body.offsetHeight - window.innerHeight;
            const isAtBottom = scrollY >= maxScroll - 5;
            
            if (isAtBottom && deltaY > 0) {
                // Scrolling down past the bottom
                if (extraHeight < MAX_HEIGHT) {
                    extraHeight += deltaY * 0.6; // sensitivity
                    if (extraHeight > MAX_HEIGHT) extraHeight = MAX_HEIGHT;
                    
                    updateStretch();
                    if (typeof lenis !== 'undefined') {
                        lenis.scrollTo(document.body.scrollHeight, {immediate: true});
                    } else {
                        window.scrollTo(0, document.body.scrollHeight);
                    }
                    return true;
                }
            } else if (extraHeight > 0 && deltaY < 0) {
                // Scrolling up while stretched
                extraHeight += deltaY * 0.6;
                if (extraHeight < 0) extraHeight = 0;
                
                updateStretch();
                if (typeof lenis !== 'undefined') {
                    lenis.scrollTo(document.body.scrollHeight, {immediate: true});
                } else {
                    window.scrollTo(0, document.body.scrollHeight);
                }
                return true;
            }
            return false;
        };

        window.addEventListener('wheel', (e) => {
            if (handleOverscroll(e.deltaY)) {
                e.preventDefault();
            }
        }, { passive: false });

        let lastTouchY = 0;
        window.addEventListener('touchstart', (e) => {
            lastTouchY = e.touches[0].clientY;
        }, { passive: true });

        window.addEventListener('touchmove', (e) => {
            const touchY = e.touches[0].clientY;
            const deltaY = lastTouchY - touchY;
            lastTouchY = touchY;
            
            if (handleOverscroll(deltaY)) {
                e.preventDefault();
            }
        }, { passive: false });
        
        // Initialize
        updateStretch();
    }
});
