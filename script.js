document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "&#9776;";
    document.querySelector("header").prepend(menuToggle);
    const nav = document.querySelector("nav ul");
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Smooth Scroll Effect
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Scroll Fade-in Effect
    const sections = document.querySelectorAll("section");
    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                section.classList.add("visible");
            }
        });
    };
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();

    // Back to Top Button
    const backToTop = document.createElement("button");
    backToTop.classList.add("back-to-top");
    backToTop.innerHTML = "&#8679;";
    document.body.appendChild(backToTop);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Typing Effect
    const typingText = document.querySelector(".typing-text");
    if (typingText) {
        const words = ["Welcome to Goodness Schools!", "Where Excellence is Our Priority!", "Shaping Future Leaders!"];
        let wordIndex = 0, charIndex = 0;
        const typeEffect = () => {
            if (charIndex < words[wordIndex].length) {
                typingText.textContent += words[wordIndex][charIndex];
                charIndex++;
                setTimeout(typeEffect, 100);
            } else {
                setTimeout(() => {
                    typingText.textContent = "";
                    charIndex = 0;
                    wordIndex = (wordIndex + 1) % words.length;
                    typeEffect();
                }, 2000);
            }
        };
        typeEffect();
    }

    // Dark Mode Toggle
    const darkModeToggle = document.createElement("button");
    darkModeToggle.classList.add("dark-mode-toggle");
    darkModeToggle.innerHTML = "🌙";
    document.body.appendChild(darkModeToggle);
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".testimonial-slide");
    const totalSlides = slides.length;

    // Function to show a slide
    const showSlide = (index) => {
        slides.forEach(slide => slide.style.display = "none");
        slides[index].style.display = "block";
    };

    // Show the first slide
    showSlide(currentSlide);

    // Auto-Slide every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 5000);

    // Manual Navigation
    document.querySelector(".prev-btn").addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    document.querySelector(".next-btn").addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });
});

 (function($) {
	    "use strict";

      $(document).ready(function () {
          var counterId        = '1036212609',
              counterValue     = '160',
              counterDuration  = '2.5',
              counterSuffix    = '',
              counterSeparator = '',
              counterGrouping  = 'true',
              svgAnimated      = 'true',
              svgWidth         = '',
              iconColor        = $("#counter_" + counterId).closest(".stm-stats").find(".stm-stats__icon").css("color"),
              options          = {
                  useEasing: true,
                  useGrouping: false
              };

              if( counterSuffix ) {
                  options['suffix'] = counterSuffix;
              }

              if( counterSeparator ) {
                  options['separator'] = counterSeparator;
              }

              if( counterGrouping ) {
                  options['useGrouping'] = counterGrouping;
              }

          var counter = new countUp("counter_" + counterId, 0, counterValue , 0, counterDuration, options);

          $(window).load(function () {
              if ($("#counter_" + counterId).is_on_screen()) {
                  counter.start();
              }
          });

          $(window).scroll(function () {
              if ($("#counter_" + counterId).is_on_screen()) {
                counter.start();
              }
          });

          if( svgAnimated ) {
			var svgPath;

            new Vivus('stm-stats-svg-' + counterId, {
                type: 'async',
                duration: 250,
                pathTimingFunction: Vivus.EASE_OUT,
                animTimingFunction: Vivus.EASE_OUT,
                onReady: function (svgInit) {
                    if( svgWidth ) {
                        svgInit.el.setAttribute('width', svgWidth);
                        svgInit.el.setAttribute('height', 'auto');
                    }

                    svgPath = svgInit.el.getElementsByTagName('path');
                    for( var i = 0; i < svgPath.length; i++ ) {
                        svgPath[i].style.stroke = iconColor;
                    }
                }
            });

            if( $("#site-skin-color").length ) {
                $(document).on("click", "#site-skin-color span", function() {
                    setTimeout(function(){
                        for( var i = 0; i < svgPath.length; i++ ) {
                            svgPath[i].style.stroke = $("#counter_" + counterId).closest(".stm-stats").find(".stm-stats__icon").css("color");
                        }
                    }, 500);
                });
            }
          }
      });
    })(jQuery);

</script>
<div class="stm-spacing" id="stm-spacing-67ab099d6a0cc"></div>
<script>
	(function($){
		"use strict";
		var spacingID = 'stm-spacing-67ab099d6a0cc',
			  lgSpacing = '12px',
			  mdSpacing = '12px',
			  smSpacing = '12px',
			  xsSpacing = '12px';

		function smartySpacing() {
			if ( window.matchMedia("(min-width: 1200px)").matches && lgSpacing ) {
				$( '#' + spacingID ).css ( "height", lgSpacing );
			} else if ( window.matchMedia("(max-width: 1199px) and (min-width: 992px )").matches && mdSpacing ) {
				$( '#' + spacingID ).css ( "height", mdSpacing );
			} else if ( window.matchMedia("(max-width: 991px) and (min-width: 768px )").matches && smSpacing ) {
				$( '#' + spacingID ).css ( "height", smSpacing );
			} else if ( window.matchMedia("(max-width: 767px)").matches && xsSpacing ) {
				$( '#' + spacingID ).css ( "height", xsSpacing );
			} else {
				$( '#' + spacingID ).css ( "height", "" );
			}
		}

		$(document).ready(function() {
			smartySpacing();
		});

		$(window).resize(function() {
			smartySpacing();
		});

	})(jQuery);
</script>

</div></div></div><div class="wpb_column vc_column_container vc_col-sm-3 vc_col-lg-3 vc_col-md-3 vc_col-xs-12"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="stm-stats stm-stats_counter clearfix stm-stats_icon_left">
    
								<div class="stm-stats__icon stm-font_color_green" >
				<object id="stm-stats-svg-1830028072" type="image/svg+xml" data="https://www.emeraldschools.com/wp-content/uploads/2015/11/students-enrolled.svg"></object>
			</div>
		
    <div class="stm-stats__content">
                    <div class="stm-stats__value">
                <span class="stats__value-number" id="counter_1830028072" style="color:#ffffff">6</span>
            </div>
        
                 <div class="stm-stats__descr" style="color:#fcfcfc">Schools</div>
              </div>
</div>

<script>

    (function($) {
	    "use strict";

      $(document).ready(function () {
          var counterId        = '1830028072',
              counterValue     = '6',
              counterDuration  = '2.5',
              counterSuffix    = '',
              counterSeparator = '',
              counterGrouping  = 'true',
              svgAnimated      = 'true',
              svgWidth         = '',
              iconColor        = $("#counter_" + counterId).closest(".stm-stats").find(".stm-stats__icon").css("color"),
              options          = {
                  useEasing: true,
                  useGrouping: false
              };

              if( counterSuffix ) {
                  options['suffix'] = counterSuffix;
              }

              if( counterSeparator ) {
                  options['separator'] = counterSeparator;
              }

              if( counterGrouping ) {
                  options['useGrouping'] = counterGrouping;
              }

          var counter = new countUp("counter_" + counterId, 0, counterValue , 0, counterDuration, options);

          $(window).load(function () {
              if ($("#counter_" + counterId).is_on_screen()) {
                  counter.start();
              }
          });

          $(window).scroll(function () {
              if ($("#counter_" + counterId).is_on_screen()) {
                counter.start();
              }
          });

          if( svgAnimated ) {
			var svgPath;

            new Vivus('stm-stats-svg-' + counterId, {
                type: 'async',
                duration: 250,
                pathTimingFunction: Vivus.EASE_OUT,
                animTimingFunction: Vivus.EASE_OUT,
                onReady: function (svgInit) {
                    if( svgWidth ) {
                        svgInit.el.setAttribute('width', svgWidth);
                        svgInit.el.setAttribute('height', 'auto');
                    }

                    svgPath = svgInit.el.getElementsByTagName('path');
                    for( var i = 0; i < svgPath.length; i++ ) {
                        svgPath[i].style.stroke = iconColor;
                    }
                }
            });

            if( $("#site-skin-color").length ) {
                $(document).on("click", "#site-skin-color span", function() {
                    setTimeout(function(){
                        for( var i = 0; i < svgPath.length; i++ ) {
                            svgPath[i].style.stroke = $("#counter_" + counterId).closest(".stm-stats").find(".stm-stats__icon").css("color");
                        }
                    }, 500);
                });
            }
          }
      });
    })(jQuery);

</script>
</div></div></div><div class="wpb_column vc_column_container vc_col-sm-3"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="stm-stats stm-stats_counter clearfix stm-stats_icon_left">
    
								<div class="stm-stats__icon stm-font_color_green" >
				<object id="stm-stats-svg-1397236345" type="image/svg+xml" data="https://www.emeraldschools.com/wp-content/uploads/2015/11/passing-to-universities.svg"></object>
			</div>
		
    <div class="stm-stats__content">
                    <div class="stm-stats__value">
                <span class="stats__value-number" id="counter_1397236345" style="color:#ffffff">100</span>
            </div>
        
                 <div class="stm-stats__descr" style="color:#ffffff">Passing to Universities</div>
              </div>
</div>

<script>

    (function($) {
	    "use strict";

      $(document).ready(function () {
          var counterId        = '1397236345',
              counterValue     = '100',
              counterDuration  = '2.5',
              counterSuffix    = '%',
              counterSeparator = '',
              counterGrouping  = 'true',
              svgAnimated      = 'true',
              svgWidth         = '',
              iconColor        = $("#counter_" + counterId).closest(".stm-stats").find(".stm-stats__icon").css("color"),
              options          = {
                  useEasing: true,
                  useGrouping: false
              };

              if( counterSuffix ) {
                  options['suffix'] = counterSuffix;
              }

              if( counterSeparator ) {
                  options['separator'] = counterSeparator;
              }

              if( counterGrouping ) {
                  options['useGrouping'] = counterGrouping;
              }

          var counter = new countUp("counter_" + counterId, 0, counterValue , 0, counterDuration, options);

          $(window).load(function () {
              if ($("#counter_" + counterId).is_on_screen()) {
                  counter.start();
              }
          });

          $(window).scroll(function () {
              if ($("#counter_" + counterId).is_on_screen()) {
                counter.start();
              }
          });

          if( svgAnimated ) {
			var svgPath;

            new Vivus('stm-stats-svg-' + counterId, {
                type: 'async',
                duration: 250,
                pathTimingFunction: Vivus.EASE_OUT,
                animTimingFunction: Vivus.EASE_OUT,
                onReady: function (svgInit) {
                    if( svgWidth ) {
                        svgInit.el.setAttribute('width', svgWidth);
                        svgInit.el.setAttribute('height', 'auto');
                    }

                    svgPath = svgInit.el.getElementsByTagName('path');
                    for( var i = 0; i < svgPath.length; i++ ) {
                        svgPath[i].style.stroke = iconColor;
                    }
                }
            });

            if( $("#site-skin-color").length ) {
                $(document).on("click", "#site-skin-color span", function() {
                    setTimeout(function(){
                        for( var i = 0; i < svgPath.length; i++ ) {
                            svgPath[i].style.stroke = $("#counter_" + counterId).closest(".stm-stats").find(".stm-stats__icon").css("color");
                        }
                    }, 500);
                });
            }
          }
      });
    })(jQuery);

</script>
<div class="stm-spacing" id="stm-spacing-67ab099d6a5c9"></div>
<script>
	(function($){
		"use strict";
		var spacingID = 'stm-spacing-67ab099d6a5c9',
			  lgSpacing = '12px',
			  mdSpacing = '12px',
			  smSpacing = '12px',
			  xsSpacing = '12px';

		function smartySpacing() {
			if ( window.matchMedia("(min-width: 1200px)").matches && lgSpacing ) {
				$( '#' + spacingID ).css ( "height", lgSpacing );
			} else if ( window.matchMedia("(max-width: 1199px) and (min-width: 992px )").matches && mdSpacing ) {
				$( '#' + spacingID ).css ( "height", mdSpacing );
			} else if ( window.matchMedia("(max-width: 991px) and (min-width: 768px )").matches && smSpacing ) {
				$( '#' + spacingID ).css ( "height", smSpacing );
			} else if ( window.matchMedia("(max-width: 767px)").matches && xsSpacing ) {
				$( '#' + spacingID ).css ( "height", xsSpacing );
			} else {
				$( '#' + spacingID ).css ( "height", "" );
			}
		}

		$(document).ready(function() {
			smartySpacing();
		});

		$(window).resize(function() {
			smartySpacing();
		});

	})(jQuery);
</script>

</div></div></div><div class="wpb_column vc_column_container vc_col-sm-3"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="stm-stats stm-stats_counter clearfix stm-stats_icon_left">
    
								<div class="stm-stats__icon stm-font_color_green" >
				<object id="stm-stats-svg-401744428" type="image/svg+xml" data="https://www.emeraldschools.com/wp-content/uploads/2015/11/students-enrolled.svg"></object>
			</div>
		
    <div class="stm-stats__content">
                    <div class="stm-stats__value">
                <span class="stats__value-number" id="counter_401744428" style="color:#ffffff">26</span>
            </div>
        
                 <div class="stm-stats__descr" style="color:#ffffff">Years Old</div>
              </div>
</div>

<script>

    (function($) {
	    "use strict";

      $(document).ready(function () {
          var counterId        = '401744428',
              counterValue     = '26',
              counterDuration  = '3.5',
              counterSuffix    = '',
              counterSeparator = ',',
              counterGrouping  = 'true',
              svgAnimated      = 'true',
              svgWidth         = '',
              iconColor        = $("#counter_" + counterId).closest(".stm-stats").find(".stm-stats__icon").css("color"),
              options          = {
                  useEasing: true,
                  useGrouping: false
              };

              if( counterSuffix ) {
                  options['suffix'] = counterSuffix;
              }

              if( counterSeparator ) {
                  options['separator'] = counterSeparator;
              }

              if( counterGrouping ) {
                  options['useGrouping'] = counterGrouping;
              }

          var counter = new countUp("counter_" + counterId, 0, counterValue , 0, counterDuration, options);

          $(window).load(function () {
              if ($("#counter_" + counterId).is_on_screen()) {
                  counter.start();
              }
          });

          $(window).scroll(function () {
              if ($("#counter_" + counterId).is_on_screen()) {
                counter.start();
              }
          });

          if( svgAnimated ) {
			var svgPath;

            new Vivus('stm-stats-svg-' + counterId, {
                type: 'async',
                duration: 250,
                pathTimingFunction: Vivus.EASE_OUT,
                animTimingFunction: Vivus.EASE_OUT,
                onReady: function (svgInit) {
                    if( svgWidth ) {
                        svgInit.el.setAttribute('width', svgWidth);
                        svgInit.el.setAttribute('height', 'auto');
                    }

                    svgPath = svgInit.el.getElementsByTagName('path');
                    for( var i = 0; i < svgPath.length; i++ ) {
                        svgPath[i].style.stroke = iconColor;
                    }
                }
            });

            if( $("#site-skin-color").length ) {
                $(document).on("click", "#site-skin-color span", function() {
                    setTimeout(function(){
                        for( var i = 0; i < svgPath.length; i++ ) {
                            svgPath[i].style.stroke = $("#counter_" + counterId).closest(".stm-stats").find(".stm-stats__icon").css("color");
                        }
                    }, 500);
                });
            }
          }
      });
    })(jQuery);

</script>
<div class="stm-spacing" id="stm-spacing-67ab099d6a6f7"></div>
<script>
	(function($){
		"use strict";
		var spacingID = 'stm-spacing-67ab099d6a6f7',
			  lgSpacing = '12px',
			  mdSpacing = '12px',
			  smSpacing = '12px',
			  xsSpacing = '12px';

		function smartySpacing() {
			if ( window.matchMedia("(min-width: 1200px)").matches && lgSpacing ) {
				$( '#' + spacingID ).css ( "height", lgSpacing );
			} else if ( window.matchMedia("(max-width: 1199px) and (min-width: 992px )").matches && mdSpacing ) {
				$( '#' + spacingID ).css ( "height", mdSpacing );
			} else if ( window.matchMedia("(max-width: 991px) and (min-width: 768px )").matches && smSpacing ) {
				$( '#' + spacingID ).css ( "height", smSpacing );
			} else if ( window.matchMedia("(max-width: 767px)").matches && xsSpacing ) {
				$( '#' + spacingID ).css ( "height", xsSpacing );
			} else {
				$( '#' + spacingID ).css ( "height", "" );
			}
		}

		$(document).ready(function() {
			smartySpacing();
		});

		$(window).resize(function() {
			smartySpacing();
		});

	})(jQuery);
