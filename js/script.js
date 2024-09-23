

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa fa-close')
})


document.addEventListener('DOMContentLoaded', function () {
    const changeText = document.getElementById('change-text');

    setTimeout(() => {
        changeText.textContent = "Frontend Developer";
    }, 6000); // After 3 seconds, the text will change to "Frontend Developer"
});



