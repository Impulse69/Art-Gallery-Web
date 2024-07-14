document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile menu
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar__menu');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('is-active');
        navbarMenu.classList.toggle('active');
    });
});

const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}

// Add event listeners to all image wrappers for opening full image
document.querySelectorAll('.img-wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', function() {
        const img = wrapper.querySelector('img');
        openFullImg(img.src);
    });
});

// Add event listener for closing full image on 'Esc' key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeFullImg();
    }
});

