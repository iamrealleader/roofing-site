(function(a){"use strict";var c='',f=0,g,b,d;a(window).on('load',function(){a(".pxl-loader").fadeOut("slow"),a(".pxl-loader").addClass("is-loaded"),g=a(window).width(),j(),i(),h(),e(),m()}),a(document).ready(function(){l()}),a(window).on('scroll',function(){b=a(window).scrollTop(),d=a(window).height(),g=a(window).width(),b<f?c='up':c='down',f=b,j(),i(),h()}),a(document).ready(function(){var d,e;k(),d=a('.pxl-header-elementor-main'),d.find('.pxl-menu-primary li').each(function(){var b=a(this).find('> ul.sub-menu');b.length==1&&a(this).hover(function(){b.offset().left+b.width()>a(window).width()?b.addClass('pxl-sub-reverse'):b.offset().left<0&&b.addClass('pxl-sub-reverse')},function(){b.removeClass('pxl-sub-reverse')})}),a('.pxl-header-menu li.menu-item-has-children').append('<span class="pxl-menu-toggle"></span>'),a('.pxl-menu-toggle').on('click',function(){a(this).hasClass('active')?(a(this).closest('ul').find('.pxl-menu-toggle.active').toggleClass('active'),a(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle()):(a(this).closest('ul').find('.pxl-menu-toggle.active').toggleClass('active'),a(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle(),a(this).toggleClass('active'),a(this).parent().find('> .sub-menu').toggleClass('active'),a(this).parent().find('> .sub-menu').slideToggle())}),a("#pxl-nav-mobile").on('click',function(){a(this).toggleClass('active'),a('.pxl-header-menu').toggleClass('active')}),a(".pxl-menu-close, .pxl-header-menu-backdrop").on('click',function(){a(this).parents('.pxl-header-main').find('.pxl-header-menu').removeClass('active'),a('#pxl-nav-mobile').removeClass('active')}),a('.pxl-type-header-clip > .elementor-container').append('<div class="pxl-header-shape"><span></span></div>'),a('.pxl-scroll-top').click(function(){return a('html, body').animate({scrollTop:0},800),!1}),a('.pxl-grid-masonry').each(function(){var b=100,d=a(this).children().length,c=d-1;a(this).find('> .pxl-grid-item > .wow').each(function(e,f){a(this).css('animation-delay',b+'ms'),c===e?(b=100,c=c+d):b=b+60})}),a('.pxl-item--text').each(function(){var b=0,d=a(this).children().length,c=d-1;a(this).find('> .pxl-text--slide > .wow').each(function(e,f){a(this).css('transition-delay',b+'ms'),c===e?(b=0,c=c+d):b=b+80})}),a('.btn-video, .pxl-video-popup').magnificPopup({type:'iframe',mainClass:'mfp-fade',removalDelay:160,preloader:!1,fixedContentPos:!1}),a('.images-light-box').each(function(){a(this).magnificPopup({delegate:'a.light-box',type:'image',gallery:{enabled:!0},mainClass:'mfp-fade'})}),a('.comment-reply a').append(''),a('#pxl-page-title-default').hasClass('pxl--parallax')&&a(this).stellar(),a('.btn-nina').each(function(){var b=.045,c=a(this).children().length,d=c-1;a(this).find('> .pxl--btn-text > span').each(function(c,d){a(this).css('transition-delay',b+'s'),b=b+.045})}),a(".pxl-search-popup-button").on('click',function(){a('#pxl-search-popup').addClass('active'),a('#pxl-search-popup .search-field').focus()}),a(".pxl-item--close").on('click',function(){a('body').removeClass('body-overflow'),a('#pxl-search-popup').removeClass('active')}),a(".pxl-cart-popup-button").on('click',function(){console.log('asddas'),a('.pxl-widget-cart-wrap').toggleClass('open'),a('.pxl-widget-cart-wrap').focus()}),a(".pxl-cart-popup-button .pxl-item--close").on('click',function(){a('.pxl-widget-cart-wrap').removeClass('open')}),a(".pxl-widget-cart-wrap .pxl-item--overlay").on('click',function(){a('.pxl-widget-cart-wrap').removeClass('open')}),a(".pxl-hidden-button").on('click',function(){a('body').addClass('body-overflow'),a('#pxl-hidden-sidebar').addClass('active')}),a("#pxl-hidden-sidebar .pxl-item--overlay, #pxl-hidden-sidebar .pxl-item--close").on('click',function(){a('body').removeClass('body-overflow'),a('#pxl-hidden-sidebar').removeClass('active')}),a('.pxl--widget-hover').each(function(){a(this).hover(function(){a(this).parents('.elementor-row').find('.pxl--widget-hover').removeClass('pxl--item-active'),a(this).parents('.elementor-container').find('.pxl--widget-hover').removeClass('pxl--item-active'),a(this).addClass('pxl--item-active')})}),a('.pxl-image-carousel5 .pxl-swiper-wrapper .pxl-swiper-slide:nth-child(1)').addClass('pxl--item-active'),a('.btn-plus-text').hover(function(){a(this).find('span').toggle(300)}),a(".pxl-nav-button").on('click',function(){a(this).toggleClass('active'),a(this).parent().find('.pxl-nav-wrap').toggle(400)}),a('.pxl-btn-effect4').append('<span class="pxl-btn-mask"></span>'),e=a('.el-bounce, .pxl-image-effect1'),a.each(e,function(c,a){b(a,'bounce-active')});function b(d,f){d=a(d);let e=0;d.hasClass(f)?c(function(){return e++,e==2},function(){e=0,d.removeClass(f),b(d,f)},'Deactivate',1e3):c(function(){return e++,e==3},function(){e=0,d.addClass(f),b(d,f)},'Activate',1e3)}function c(d,e,a,b){(a==null||a==''||typeof a=='undefined')&&(a='Timeout'),(b==null||b==''||typeof b=='undefined')&&(b=100);var f=d();f?e():setTimeout(function(){console.log(a),c(d,e,a,b)},b)}setTimeout(function(){a('.md-align-center').parents('.rs-parallax-wrap').addClass('pxl-group-center')},300),a('.pxl-image-tilt').length&&a('.pxl-image-tilt').each(function(){var b=a(this).data('maxtilt'),c=a(this).data('speedtilt');a(this).tilt({maxTilt:b,speed:c})}),a('.pxl-item--button').on('click',function(){a(this).toggleClass('active'),a(this).parent().toggleClass('active')}),a(".pxl-image-box2 .pxl-item--inner").hover(function(){a(this).find('.pxl-item--description').slideToggle(220)},function(){a(this).find('.pxl-item--description').slideToggle(220)}),a('.wpcf7-select').each(function(){var b=a(this),f=a(this).children('option').length,c,e,d,g;b.addClass('pxl-select-hidden'),b.wrap('<div class="pxl-select"></div>'),b.after('<div class="pxl-select-higthlight"></div>'),c=b.next('div.pxl-select-higthlight'),c.text(b.children('option').eq(0).text()),e=a('<ul />',{class:'pxl-select-options'}).insertAfter(c);for(d=0;d<f;d++)a('<li />',{text:b.children('option').eq(d).text(),rel:b.children('option').eq(d).val()}).appendTo(e);g=e.children('li'),c.click(function(b){b.stopPropagation(),a('div.pxl-select-higthlight.active').not(this).each(function(){a(this).removeClass('active').next('ul.pxl-select-options').addClass('pxl-select-lists-hide')}),a(this).toggleClass('active')}),g.click(function(d){d.stopPropagation(),c.text(a(this).text()).removeClass('active'),b.val(a(this).attr('rel'))}),a(document).click(function(){c.removeClass('active')})})});function m(){setTimeout(()=>{a('.pxl-tabs6 .pxl-item--content:not(:first-child)').css({display:"none"})},1e3)}function l(){a(document).on('click','.pxl-view-layout .view-icon a',function(b){b.preventDefault(),a(this).parent('li').hasClass('active')||(a('.pxl-view-layout .view-icon').removeClass('active'),a(this).parent('li').addClass('active'),a(this).parents('.pxl-content-area').find('ul.products').removeAttr('class').addClass(a(this).attr('data-cls')))})}setTimeout(function(){a('.pxl-close, .pxl-close .pxl-icon-close').click(function(b){b.preventDefault(),a(this).parents('.pxl-widget-cart-wrap').removeClass('open'),a(this).parents('.pxl-modal').addClass('remove').removeClass('open'),a(this).parents('#page').find('.site-overlay').removeClass('open'),a(this).parents('body').removeClass('ov-hidden')})},300);function k(){setTimeout(function(){jarallax(document.querySelectorAll('.pxl-section-bg-parallax'),{speed:.4})},300)}function j(){a('#pxl-header-elementor').hasClass('is-sticky')&&(b>100?a('.pxl-header-elementor-sticky.pxl-sticky-stb').addClass('pxl-header-fixed'):a('.pxl-header-elementor-sticky.pxl-sticky-stb').removeClass('pxl-header-fixed'),c=='up'&&b>100?a('.pxl-header-elementor-sticky.pxl-sticky-stt').addClass('pxl-header-fixed'):a('.pxl-header-elementor-sticky.pxl-sticky-stt').removeClass('pxl-header-fixed')),a('.pxl-header-elementor-sticky').parents('body').addClass('pxl-header-sticky')}function i(){b<d&&a('.pxl-scroll-top').addClass('pxl-off').removeClass('pxl-on'),b>d&&a('.pxl-scroll-top').addClass('pxl-on').removeClass('pxl-off')}function h(){setTimeout(function(){var b=a('.pxl-footer-fixed #pxl-footer-elementor').outerHeight()-1;a('.pxl-footer-fixed #pxl-main').css('margin-bottom',b+'px')},600)}function e(){a('#pxl-main .quantity').append('<span class="quantity-icon"><i class="quantity-down fas fa-sort-down"></i><i class="quantity-up fas fa-sort-up"></i></span>'),a('.quantity-up').on('click',function(){a(this).parents('.quantity').find('input[type="number"]').get(0).stepUp()}),a('.quantity-down').on('click',function(){a(this).parents('.quantity').find('input[type="number"]').get(0).stepDown()}),a('.woocommerce-cart-form .actions .button').removeAttr('disabled')}jQuery(document).on('updated_wc_div',function(){e()})})(jQuery)