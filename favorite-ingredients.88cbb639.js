!function(){var e={input:document.querySelector(".header-input"),btn:document.querySelector(".menu-batton"),mobileMenu:document.querySelector(".header-mobile-menu"),list:document.querySelectorAll(".is-hidden"),lisBtn:document.querySelector(".favorite-btn-desctop"),coctailTitel:document.querySelector(".coctails-section__title"),cocktalisTitel:document.querySelector(".coctails-section__coctails-list")};e.btn.addEventListener("click",(function(){var t="true"===e.btn.getAttribute("aria-expanded")||!1;e.btn.classList.toggle("is-open"),e.mobileMenu.classList.toggle("is-open"),e.btn.setAttribute("aria-expanded",!t);document.querySelector(".header-input-mobile");var n=document.querySelector(".favorite-btn"),i=document.querySelectorAll(".is-hidden");n.addEventListener("click",(function(){i.forEach((function(e){e.classList.toggle("is-hidden")}))}))})),e.lisBtn.addEventListener("click",(function(){e.list.forEach((function(e){e.classList.toggle("is-hidden")}))}))}();
//# sourceMappingURL=favorite-ingredients.88cbb639.js.map