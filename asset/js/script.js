// First observer for technical and professional skills animation
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.progress-line').forEach(line => {
                line.classList.add('animate');
            });
            entry.target.querySelectorAll('.path').forEach(path => {
                path.classList.add('animate');
            });
        } else {
            entry.target.querySelectorAll('.progress-line').forEach(line => {
                line.classList.remove('animate');
            });
            entry.target.querySelectorAll('.path').forEach(path => {
                path.classList.remove('animate');
            });
        }
    });
}, { threshold: 0.5 });

// Observe both technical and professional skills sections
document.querySelectorAll('.technical-bars, .professional-bars').forEach(section => {
    skillsObserver.observe(section);
});


document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animate class to progress bars and paths
                entry.target.querySelectorAll('.progress-bar, .path').forEach(element => {
                    element.classList.add('animate');
                });
            }
        });
    }, { threshold: 0.5 });

    // Observe the professional-bars section
    const professionalBars = document.querySelector('.professional-bars');
    if (professionalBars) {
        observer.observe(professionalBars);
    }
});





document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel .list');
    const items = document.querySelectorAll('.carousel .list .item');
    const nextBtn = document.querySelector('#next');
    const prevBtn = document.querySelector('#prev');
    
    let active = 2; // Start with item 2 as active (middle item)
    
    function loadShow() {
        // Update position of all items
        items.forEach((item, index) => {
            // Reset classes and styles
            item.style.transform = '';
            item.style.filter = '';
            item.style.zIndex = '';
            item.style.opacity = '';
            
            // Apply appropriate CSS variables based on position
            if (index === active) {
                item.style.transform = 'var(--item2-transform)';
                item.style.filter = 'var(--item2-filter)';
                item.style.zIndex = 'var(--item2-zIndex)';
                item.style.opacity = 'var(--item2-opacity)';
            } else if (index === active - 1 || (active === 0 && index === items.length - 1)) {
                item.style.transform = 'var(--item1-transform)';
                item.style.filter = 'var(--item1-filter)';
                item.style.zIndex = 'var(--item1-zIndex)';
                item.style.opacity = 'var(--item1-opacity)';
            } else if (index === active + 1 || (active === items.length - 1 && index === 0)) {
                item.style.transform = 'var(--item3-transform)';
                item.style.filter = 'var(--item3-filter)';
                item.style.zIndex = 'var(--item3-zIndex)';
                item.style.opacity = 'var(--item3-opacity)';
            } else if (index === active + 2 || (active >= items.length - 2 && index === active - items.length + 2)) {
                item.style.transform = 'var(--item4-transform)';
                item.style.filter = 'var(--item4-filter)';
                item.style.zIndex = 'var(--item4-zIndex)';
                item.style.opacity = 'var(--item4-opacity)';
            } else {
                item.style.transform = 'var(--item5-transform)';
                item.style.filter = 'var(--item5-filter)';
                item.style.zIndex = 'var(--item5-zIndex)';
                item.style.opacity = 'var(--item5-opacity)';
            }
        });
    }

    nextBtn.addEventListener('click', () => {
        active = active + 1 >= items.length ? 0 : active + 1;
        loadShow();
    });

    prevBtn.addEventListener('click', () => {
        active = active - 1 < 0 ? items.length - 1 : active - 1;
        loadShow();
    });

    // Initialize the carousel
    loadShow();
});





function updateIntro(direction) {
    const intro = document.querySelector('.intro-content');
    
    // Add slide out animation
    intro.classList.add(direction === 'next' ? 'slide-left' : 'slide-right');
    intro.classList.remove('active');
    
    // After slide out, update content and slide in
    setTimeout(() => {
        // Update your intro content here
        intro.classList.remove('slide-left', 'slide-right');
        intro.classList.add('active');
    }, 500);
}

// Add this to your existing next/prev click handlers
document.querySelector('#next').addEventListener('click', () => {
    updateIntro('next');
    // Your existing next slide logic
});

document.querySelector('#prev').addEventListener('click', () => {
    updateIntro('prev');
    // Your existing prev slide logic
});



    

// Select all sections and navigation links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

// Add scroll event listener
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

