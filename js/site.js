document.addEventListener('DOMContentLoaded', function () {
    var $burger = document.querySelector('.navbar-burger');
    var $contactForm = document.querySelector('#contact-form');
    var $menu = document.querySelector('.navbar-menu');
    var $successMessage = document.querySelector('#success-message');

    // Toggle burger
    $burger.onclick = function () {
        $burger.classList.toggle('is-active');
        $menu.classList.toggle('is-active');
    };

    // Form submission
    $contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        $successMessage.style.display = 'block';
    });

    // Hook up smooth-scrolling
    var $hashLinks = document.querySelectorAll('a[href*="#"]:not([href="#"]):not([href="#0"])');

    for (var i = 0; i < $hashLinks.length; i++) {
        var $link = $hashLinks[i];

        $link.onclick = function (e) {
            e.preventDefault();
            var m = /#([^$]+)$/.exec(e.target.href);
            var hash = m[1];
            var $target = document.getElementById(hash);
            window.scroll({
                top: $target.offsetTop,
                left: 0,
                behavior: 'smooth'
            });
        };
    }
});