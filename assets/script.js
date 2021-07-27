 // Change style of header navbar on scroll on tablet mode
 var headerNav = document.querySelector('.header__navigation');
    window.onscroll = function () { myFunction() };
        function myFunction() {
            if (headerNav.clientHeight <=44 && (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)) {
                headerNav.classList.add('bg-white','box-shadow')
            } else {
                headerNav.classList.remove('bg-white','box-shadow')
            }
        }
