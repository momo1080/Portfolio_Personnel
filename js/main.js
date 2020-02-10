/*global $, jQuery, alert*/
$( document ).ready( function () {

  'use strict';

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  $( document ).on( "scroll", onScroll );

  $( 'a[href^="#"]' ).on( 'click', function ( e ) {
    e.preventDefault();
    $( document ).off( "scroll" );

    $( 'a' ).each( function () {
      $( this ).removeClass( 'active' );
      if ( $( window ).width() < 768 ) {
        $( '.nav-menu' ).slideUp();
      }
    } );

    $( this ).addClass( 'active' );

    var target = this.hash,
      menu = target;

    target = $( target );
    $( 'html, body' ).stop().animate( {
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function () {
      window.location.hash = target.selector;
      $( document ).on( "scroll", onScroll );
    } );
  } );


  function onScroll( event ) {
    if ( $( '.home' ).length ) {
      var scrollPos = $( document ).scrollTop();
      $( 'nav ul li a' ).each( function () {
        var currLink = $( this );
        var refElement = $( currLink.attr( "href" ) );
      } );
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //


  $( window ).scroll( function () {
    var scroll = $( window ).scrollTop();
    if ( scroll > 200 ) {
      $( "#main-nav, #main-nav-subpage" ).slideDown( 700 );
      $( "#main-nav-subpage" ).removeClass( 'subpage-nav' );
    } else {
      $( "#main-nav" ).slideUp( 700 );
      $( "#main-nav-subpage" ).hide();
      $( "#main-nav-subpage" ).addClass( 'subpage-nav' );
    }
  } );

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $( '.responsive' ).on( 'click', function ( e ) {
    $( '.nav-menu' ).slideToggle();
  } );

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $( ".typed" );

  $( function () {
    typed.typed( {
      strings: ["Fayçal karim.", "Designer web junior.", "Developer web junior.", "Modeleur 3D"],
      typeSpeed: 100,
      loop: true,
    } );
  } );


  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //


  $( '.services-carousel' ).owlCarousel( {
    autoplay: true,
    loop: true,
    margin: 20,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
  } );


  // ========================================================================= //
  //  Porfolio isotope et filter
  // ========================================================================= //


  var portfolioIsotope = $( '.portfolio-container' ).isotope( {
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  } );

  $( '#portfolio-flters li' ).on( 'click', function () {
    $( "#portfolio-flters li" ).removeClass( 'filter-active' );
    $( this ).addClass( 'filter-active' );

    portfolioIsotope.isotope( { filter: $( this ).data( 'filter' ) } );
  } );


  // ========================================================================= //
  //  magnificPopup
  // ========================================================================= //

  var magnifPopup = function () {
    $( '.popup-img' ).magnificPopup( {
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,// Par défaut c'est faux, alors n'oubliez pas de l'activer 


        duration: 300,// durée de l'effet, en millisecondes 
        easing: 'ease-in-out',// fonction d'accélération de la transition CSS 


        // La fonction "opener" devrait retourner l'élément à partir duquel la fenêtre contextuelle sera agrandie
        // et à quel popup sera réduit
        // Defailt cherche une balise d'image:
        opener: function ( openerElement ) {
          // openerElement est l'élément sur lequel la popup a été initialisée, dans ce cas sa balise <a>
          // vous n'avez pas besoin d'ajouter l'option "opener" si ce code correspond à vos besoins, il en est un.
          return openerElement.is( 'img' ) ? openerElement : openerElement.find( 'img' );
        }
      }
    } );
  };



  // Appelle les fonctions
  magnifPopup();

} );



chItems = document.querySelectorAll( '.ch-item' ); //selectionne les div //
colonneCompetencesAppear = document.querySelector( '#colonneCompetencesAppear' ); //selectionne le container//
console.log( colonneCompetencesAppear );


window.addEventListener( 'scroll', function () {
  if ( window.pageYOffset >= colonneCompetencesAppear.offsetTop ) {
    console.log( 'mange' );
    chItems.forEach( element => {
      // element.classList.remove('unviewable');
      element.classList.add( 'chadow' );
      element.style.transition = "2s ease";
    } );
  }
  else {
    chItems.forEach( element => {
      element.classList.remove( 'chadow' );

    } );
  };
} );