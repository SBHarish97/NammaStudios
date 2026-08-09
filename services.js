const lenis = new Lenis({
    autoRaf: true,
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

// Auto-wrap characters and inject a CSS variable for the animation delay stagger
let globalCharIndex = 0;
document.querySelectorAll('.hero-word').forEach(word => {
    word.innerHTML = word.textContent.split('').map(char => {
        let index = globalCharIndex++;
        return `<span class="hero-char" style="--char-index: ${index};">${char === ' ' ? '&nbsp;' : char}</span>`;
    }).join('');
});

// Handle dynamically animated text (description, mono-text, paragraphs)
document.querySelectorAll('.animate-text').forEach(desc => {
    let descCharIndex = 0; // Reset index for each element
    let newHtml = '';
    desc.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            let words = node.textContent.trim().split(/\s+/);
            if (words.length > 0 && words[0] !== "") {
                newHtml += words.map(word => {
                    let charsHtml = word.split('').map(char => {
                        let index = descCharIndex++;
                        return `<span class="hero-char" style="--char-index: ${index};">${char}</span>`;
                    }).join('');
                    return `<span class="word-mask">${charsHtml}</span>`;
                }).join(' ') + ' ';
            }
        } else if (node.nodeName === 'BR') {
            newHtml += '<br>';
        } else {
            newHtml += node.outerHTML + ' ';
        }
    });
    desc.innerHTML = newHtml.trim();
});

// Trigger animations when scrolled into view (0% vh by default)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { rootMargin: "0px 0px 0px 0px" });

// Late trigger specifically for the craft text/img at 70% vh
const lateObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { rootMargin: "0px 0px -30% 0px" });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

document.querySelectorAll('.animate-on-scroll-late').forEach(el => {
    lateObserver.observe(el);
});

// Text trigger specifically at 95% vh
const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { rootMargin: "0px 0px -5% 0px" });

document.querySelectorAll('.animate-on-scroll-text').forEach(el => {
    textObserver.observe(el);
});

// Trigger at 90% vh
const observer90 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { rootMargin: "0px 0px -10% 0px" });

document.querySelectorAll('.animate-on-scroll-90').forEach(el => {
    observer90.observe(el);
});

// Trigger at 80% vh
const observer80 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { rootMargin: "0px 0px -20% 0px" });

document.querySelectorAll('.animate-on-scroll-80').forEach(el => {
    observer80.observe(el);
});
