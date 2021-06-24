function slider({
    container,
    slide,
    nextArrow,
    prevArrow,
    totalCounter,
    currentCounter,
    wrapper,
    field
}) {
    //slider
    const slides = document.querySelectorAll(slide);
    const slidesInner = document.querySelector(field);
    const slidesWrapper = document.querySelector(wrapper);
    const prev = document.querySelector(prevArrow);
    const next = document.querySelector(nextArrow);
    const current = document.querySelector(currentCounter);
    const total = document.querySelector(totalCounter);
    const width = window.getComputedStyle(slidesInner).width;

    let offset = 0;
    let slideIndex = 1;

    slidesInner.style.width = 100 * slides.length + "%";
    slidesInner.style.display = "flex";
    slidesInner.style.transition = "0.5s all";
    slidesWrapper.style.overflow = "hidden";

    if (slideIndex < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slides.forEach(slide => {
        slide.style.width = width;
    });

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, "");
    }

    next.addEventListener("click", () => {
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        slidesInner.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slideIndex < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        dots.forEach(dot => dot.style.opacity = "0.5");
        dots[slideIndex - 1].style.opacity = 1;
    });

    prev.addEventListener("click", () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }
        slidesInner.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slideIndex < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        dots.forEach(dot => dot.style.opacity = "0.5");
        dots[slideIndex - 1].style.opacity = 1;
    });

    //dots slider
    const slider = document.querySelector(container);
    const indicators = document.createElement("ol");
    const dots = [];

    slider.style.position = "relative";
    indicators.classList.add("carousel-indicators");
    slider.append(indicators);


    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("li")
        dot.classList.add("dot");
        dot.setAttribute("data-slide-to", i + 1);
        indicators.append(dot);
        dots.push(dot);

        if (i == 0) {
            dot.style.opacity = 1;
        }
    }

    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            const slideTo = e.target.getAttribute("data-slide-to");
            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);

            if (slideIndex < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }

            slidesInner.style.transform = `translateX(-${offset}px)`;

            dots.forEach(dot => dot.style.opacity = "0.5");
            dots[slideIndex - 1].style.opacity = 1;
        });
    });
}

export default slider;