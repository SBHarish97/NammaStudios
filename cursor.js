// cursor.js
document.addEventListener("DOMContentLoaded", () => {
    // Inject the custom cursor HTML and CSS
    const cursorHTML = `
        <style>
            @keyframes rotateTwoPhase {
                0% { transform: rotate(0deg); }
                10% { transform: rotate(-2deg); }
                100% { transform: rotate(-5deg); }
            }
            .custom-cursor-box {
                position: fixed;
                top: 0;
                left: 0;
                width: 32px;
                height: 32px;
                /* border removed as requested */
                pointer-events: none; /* So it doesn't block clicks */
                z-index: 10000;
                display: none; /* Hidden until mouse moves */
                will-change: transform;
            }
            .custom-cursor-dot {
                position: absolute;
                top: 41px;
                left: 41px;
                width: 16px;
                height: 16px;
                // background-color: #0044ff;
                background-color: #1616feff;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                transform: rotate(0deg); /* Initial rotation */
                /* Fast width expansion, slower height expansion */
                transition: width 0.05s ease-out, 
                            height 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.05s, 
                            border-radius 0.4s ease,
                            transform 0.15s ease; /* Fast snap back when un-hovered */
            }
            .custom-cursor-text {
                color: #E6E5E3;
                font-family: 'Anton', sans-serif;
                font-size: 28px;
                font-weight: 400;
                letter-spacing:0px;
                white-space: nowrap;
                opacity: 0;
                transition: opacity 0.3s ease;
                
            }
            /* When hovering the say-hello button */
            .custom-cursor-dot.is-hovering-btn {
                width: 130px;
                height: 46px;
                border-radius: 6px; /* Rectangle shape */
                transform: rotate(-10deg);
                animation: rotateTwoPhase 0.8s forwards; /* 2-phase rotation */
            }
            .custom-cursor-dot.is-hovering-btn .custom-cursor-text {
                opacity: 1;
                transition: opacity 0.4s ease 0.2s; /* Slight delay for text appearance */
            }
        </style>
        <div class="custom-cursor-box" id="customCursorBox">
            <div class="custom-cursor-dot" id="customCursorDot">
                <span class="custom-cursor-text">LET'S TALK</span>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', cursorHTML);

    const cursorBox = document.getElementById('customCursorBox');

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let isInitialized = false;

    // Follow the mouse
    document.addEventListener('mousemove', (e) => {
        if (cursorBox.style.display === 'none' || cursorBox.style.display === '') {
            cursorBox.style.display = 'block';
        }
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!isInitialized) {
            cursorX = mouseX;
            cursorY = mouseY;
            isInitialized = true;
        }
    });

    const smoothAnimate = () => {
        if (isInitialized) {
            // LERP (Linear Interpolation) for smoothness
            // The 0.15 value determines the speed/smoothness. Lower is slower.
            cursorX += (mouseX - cursorX) * 0.05;
            cursorY += (mouseY - cursorY) * 0.05;

            // Offset by half the width/height (16px) to center the 32x32 box around the mouse
            cursorBox.style.transform = `translate3d(${cursorX - 16}px, ${cursorY - 16}px, 0)`;
        }
        requestAnimationFrame(smoothAnimate);
    };

    requestAnimationFrame(smoothAnimate);

    // Hide cursor when it leaves the window
    document.addEventListener('mouseleave', () => {
        cursorBox.style.display = 'none';
    });

    // Show cursor when it enters the window
    document.addEventListener('mouseenter', () => {
        cursorBox.style.display = 'block';
    });

    // Hover effect for the "SAY HELLO" button and email link
    const dot = document.getElementById('customCursorDot');
    const cursorText = dot.querySelector('.custom-cursor-text');

    // Using event delegation since the button is dynamically inserted by footer.js
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.say-hello-btn')) {
            cursorText.textContent = "LET'S TALK";
            dot.classList.add('is-hovering-btn');
        } else if (e.target.closest('.mailto-link')) {
            cursorText.textContent = "SEND LOVE";
            dot.classList.add('is-hovering-btn');
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('.say-hello-btn') || e.target.closest('.mailto-link')) {
            dot.classList.remove('is-hovering-btn');
        }
    });
});
