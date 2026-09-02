const approachCode = `
<style>
    /* =========================================
       APPROACH PAGE CSS
       ========================================= */
    .approach-main {
        width: 100%;
        background-color: transparent;
        color: inherit;
        overflow: hidden;
        padding-top: 100px; /* Offset for navbar */
    }

    .mono-label {
        font-family: 'Space Mono', monospace;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-size: 13px;
    }

    /* =========================================
       HERO 1: SHARP MINDS
       ========================================= */
    .approach-hero {
        min-height: 85vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 4vw;
    }

    .giant-text {
        font-family: Mixtape, Verdana, sans-serif;
       font-family:'Anton',sans-serif;
        font-size:clamp(90px, 12vw, 200px);
        font-weight:400;
        line-height:1;
        letter-spacing:2px;
        text-transform: uppercase;
        font-weight: bold;
        text-align: center;
        margin: 0;
    }

    /* =========================================
       HERO 2: MAKE IT AS SIMPLE...
       ========================================= */
    .approach-manifesto {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0 4vw;
        margin-top: 5vh;
    }

    .approach-manifesto .giant-text {
        text-align: left;
    }

    .manifesto-inline-wrap {
        display: block;
        margin-top: 1rem;
    }

    .manifesto-hover-card {
        position: relative;
        display: inline-block;
        min-height: clamp(90px, 13vw, 180px);
    }

    .manifesto-possible {
        margin: 0;
        display: block;
        position: relative;
        z-index: 1;
        transition: transform 1.5s ease;
        will-change: transform;
    }

    .manifesto-img {
        position: absolute;
        left: 0;
        top: 50%;
        height: clamp(60px, 10vw, 150px);
        width: auto;
        border-radius: 12px;
        object-fit: cover;
        opacity: 0;
        transform: translate(-12px, -50%) scale(0.95);
        pointer-events: none;
        z-index: 2;
        transition: opacity 1.5s ease, transform 0.35s ease;
    }

    .manifesto-hover-card:hover .manifesto-possible {
        transform: translateX(20vw);
    }

    .manifesto-hover-card:hover .manifesto-img {
        opacity: 1;
        transform: translate(0, -50%) scale(1);
    }

    /* =========================================
       STEPS SECTION (THE GRID)
       ========================================= */
    .approach-steps {
        padding: 15vh 4vw 20vh 4vw;
        display: flex;
        flex-direction: column;
        gap: 30vh; /* Massive spacing between rows matching the design */
    }

    .step-row {
        display: grid;
        grid-template-columns: 25% 1fr;
        align-items: flex-start;
        gap: 4vw;
    }

    .step-label {
        padding-top: 15px;
        padding-left: 200px;
    }

    .step-content {
        max-width: 850px;
    }

    .step-content h2 {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: clamp(40px, 5.5vw, 60px);
        line-height: 1.05;
        letter-spacing: -2px;
        margin: 0 0 40px 0;
    }

    .step-content p {
        font-family: 'Inter', sans-serif;
        font-size: clamp(18px, 1.8vw, 22px);
        line-height: 1.5;
        font-weight: 400;
        margin: 0px;
        padding-right: 140px; 
    }

    /* =========================================
       SCROLL REVEAL ANIMATIONS
       ========================================= */
    .reveal-up {
        opacity: 0;
        transform: translateY(80px);
        transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .reveal-up.is-visible {
        opacity: 1;
        transform: translateY(0);
    }

    /* Stagger the inner elements of the grid */
    .step-row .step-label,
    .step-row h2,
    .step-row p {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .step-row.is-visible .step-label { transition-delay: 0s; opacity: 1; transform: translateY(0); }
    .step-row.is-visible h2 { transition-delay: 0.1s; opacity: 1; transform: translateY(0); }
    .step-row.is-visible p { transition-delay: 0.2s; opacity: 1; transform: translateY(0); }

    /* =========================================
       MOBILE RESPONSIVENESS
       ========================================= */
    @media (max-width: 768px) {
        .step-row {
            grid-template-columns: 1fr;
            gap: 20px;
        }
        .step-label {
            padding-top: 0;
            margin-bottom: 10px;
        }
        .approach-steps {
            gap: 15vh;
        }
    }
</style>

<main class="approach-main" id="approach">
    <!-- HERO 1 -->
    <section class="approach-hero">
        <h1 class="giant-text reveal-up">SHARP MINDS</h1>
        <h1 class="giant-text reveal-up" style="transition-delay: 0.1s;">ICONIC MOVES</h1>
    </section>

    <!-- HERO 2 -->
    <section class="approach-manifesto">
        <h1 class="giant-text reveal-up">MAKE IT AS</h1>
        <h1 class="giant-text reveal-up" style="transition-delay: 0.1s;">SIMPLE AS</h1>
        <div class="manifesto-inline-wrap reveal-up" style="transition-delay: 0.2s;">
            <div class="manifesto-hover-card">
                <h1 class="giant-text manifesto-possible">POSSIBLE</h1>
                <img src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/687f56a74fa459d00e17ee4e_shared12-ezgif.com-optimize%20(1).gif" alt="Visual Reference" class="manifesto-img" loading="lazy">
            </div>
        </div>
    </section>

    <!-- PROCESS STEPS -->
    <section class="approach-steps">
        
        <div class="step-row reveal-trigger">
            <div class="step-label mono-label">START</div>
            <div class="step-content">
                <h2>Own your difference</h2>
                <p>No one remembers second place. Or third. We dissect your market with surgical precision, hunting for the blind spots that others overlook. Our mission? To unearth what sets you apart. To put it under the spotlight. And to turn it into your strategic advantage.</p>
            </div>
        </div>

        <div class="step-row reveal-trigger">
            <div class="step-label mono-label">IDEA</div>
            <div class="step-content">
                <h2>Challenge everything</h2>
                <p>Innovation doesn’t come from comfort. It comes from doubt. We question everything. Relentlessly. Methodically. Trends? Best practices? Market certainties? All of them are suspect. All of them are challenged. Pixel by pixel. So we can reach places no one else has.</p>
            </div>
        </div>


        <div class="step-row reveal-trigger">
            <div class="step-label mono-label">DESIGN</div>
            <div class="step-content">
                <h2>Beyond aesthetics</h2>
                <p>It’s not just about winning awards. It’s about winning customers. Our design is built to solve, to sell, to make an impact. Every color is tested. Every spacing calculated. Every interaction optimized. The result? A design that performs as well as it impresses.</p>
            </div>
        </div>

        <div class="step-row reveal-trigger">
            <div class="step-label mono-label">CODING</div>
            <div class="step-content">
                <h2>Performance mindset</h2>
                <p>User patience? A myth. Their tolerance for slow websites? Zero. We build solutions that move fast and stay fast. No-code, pushed to the limit. Resources refined. Load times cut. Verified performance. Smoothness isn’t a luxury, it’s the baseline. Every millisecond counts.</p>
            </div>
        </div>

        <div class="step-row reveal-trigger">
            <div class="step-label mono-label">OPTIMISATION</div>
            <div class="step-content">
                <h2>Never satisfied,<br>never done</h2>
                <p>The launch is just the first chapter, not the final one. We stay by your side long after launch day. We monitor the numbers. Listen to the feedback. Continuously refine and improve. A site that doesn’t evolve is a site that falls behind. We refuse to stagnate, for you and for us.</p>
            </div>
        </div>

    </section>
</main>
`;

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject the Approach HTML into the DOM
    // Checking if the footer exists so we can safely inject right above it.
    const footerElement = document.querySelector('.namma-replica');
    if (footerElement) {
        footerElement.insertAdjacentHTML('beforebegin', approachCode);
    } else {
        document.body.insertAdjacentHTML('beforeend', approachCode);
    }

    // 2. Set up Intersection Observer for scroll animations
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-trigger');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
    
    // 3. Immediately trigger the top hero section elements so they animate in smoothly on page load
    setTimeout(() => {
        document.querySelectorAll('.approach-hero .reveal-up').forEach(el => {
            el.classList.add('is-visible');
        });
    }, 150);
});