document.addEventListener( 'DOMContentLoaded', () => {

    const burger     = document.querySelector( '#burger' ),
          burgerMenu = document.querySelector( '#nav-burger-menu' ),
          anchors    = burgerMenu.querySelectorAll( 'a' );

    burger.addEventListener( 'click', () => {
        burger.classList.toggle( 'active' );
        burgerMenu.classList.toggle( 'hidden' );
    });

    anchors.forEach( item => {

        item.addEventListener( 'click', () => {

            burger.classList.toggle( 'active' );
            burgerMenu.classList.toggle( 'hidden' );

        });

    });

});