let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slide = document.querySelector('.slide');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    // Move the first item to the end of the slide
    slide.style.transition = "transform 0.5s ease";
    slide.appendChild(items[0]);

    // Reset the transform to position correctly after the transition
    slide.addEventListener('transitionend', function() {
        slide.style.transition = "none";
        slide.style.transform = "translateX(0)";
    }, { once: true });

    // Apply the transform to move the slide left
    slide.style.transform = "translateX(-100%)";
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    // Move the last item to the start of the slide
    slide.style.transition = "transform 0.5s ease";
    slide.prepend(items[items.length - 1]);

    // Reset the transform to position correctly after the transition
    slide.addEventListener('transitionend', function() {
        slide.style.transition = "none";
        slide.style.transform = "translateX(0)";
    }, { once: true });

    // Apply the transform to move the slide right
    slide.style.transform = "translateX(100%)";
});
