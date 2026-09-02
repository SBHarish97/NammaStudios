const lenis = new Lenis({
    autoRaf: true,
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});
let globalCharIndex = 0;
document.querySelectorAll('.hero-word').forEach(word => {
    word.innerHTML = word.textContent.split('').map(char => {
        let index = globalCharIndex++;
        return `<span class="hero-char" style="--char-index: ${index};">${char === ' ' ? '&nbsp;' : char}</span>`;
    }).join('');
});


document.querySelectorAll('.animate-text').forEach(desc => {
    let descCharIndex = 0;
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


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { rootMargin: "0px 0px 0px 0px" });


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
