var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=e.parcelRequire22cb;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var i=o[e];delete o[e];var s={id:e,exports:{}};return t[e]=s,i.call(s.exports,s,s.exports),s.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},e.parcelRequire22cb=i);var s=i("dXVlG");const c={heroList:document.querySelector(".hero-list"),heroTitle:document.querySelector(".hero-text"),hero:document.querySelector(".hero"),select:document.querySelector(".hero-select"),isHiden:document.querySelector(".is-hiden"),coctailTitel:document.querySelector(".coctails-section__title"),cocktalisTitel:document.querySelector(".coctails-section__coctails-list"),herospan:document.querySelector(".hero-span"),heroBox:document.querySelector(".hero-div"),heroSelect:document.querySelector(".hero-boxList"),heroListUl:document.querySelector(".hero-list__ul"),headerinput:document.querySelector(".header-input")},n=document.querySelector(".coctails-section__coctails-list");let r=0;const{heroList:l,heroTitle:a,hero:d,select:u,isHiden:h,heroItem:m,headerinput:f,herospan:v,coctailTitel:L,cocktalisTitel:p,heroBox:y,heroSelect:S,heroListUl:T}=c;const _=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];l.addEventListener("click",(function(e){f.value=" ";const t=e.target.dataset.name,o=e.target,i=e.currentTarget.querySelectorAll(".hero-button");t&&innerWidth>767&&(i.forEach((e=>{e.classList.contains("is-hover")&&e.classList.remove("is-hover")})),o.classList.add("is-hover"),b(t))}));const g=_.map((e=>`<li class=hero-item value=${e} id=${e}>${e}</li>`));const q=_.map((e=>`<li class=hero-item >\n        <button class=hero-button data-name=${e}>${e}</button>\n        </li>`));if(innerWidth>767&&(h.classList.add("is-hiden"),l.insertAdjacentHTML("beforeend",q.join("")),d.insertAdjacentHTML("beforeend",'<div class="hero-container">\n</div>')),innerWidth<767){h.classList.remove("is-hiden"),a.insertAdjacentHTML("beforebegin",'<div class="hero-container">\n</div>'),u.insertAdjacentHTML("beforeend",g.join("")),l.addEventListener("click",(function(e){const t=document.querySelector(".hero-svg"),o=document.querySelector(".hero-span"),i=e.target;i===S||i===o||i===t?(T.classList.remove("is-hiden-select"),T.classList.add("is-hden-select_display")):(T.classList.add("is-hiden-select"),T.classList.remove("is-hden-select_display"));if(e.target){const t=e.target.id;t&&b(t).then((e=>{v.textContent=t}))}}))}function b(e){const t=`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e}`;return fetch(t).then((e=>{if(!e)throw new Error(e.message);return e.json()})).then((e=>{const{drinks:o}=e;if(null===o)return function(){n.classList.add("coctails-section-hover"),p.innerHTML="";const e="<div class='coctails-section__coctails-img-div'>\n  <div class='coctails-section__coctails-img'></div>\n  </div>";L.classList.remove("coctails-section__title"),L.classList.add("coctails-section-coctailTitel"),L.textContent="Sorry, we didn't find  any cocktail for you",p.innerHTML=e}();L.classList.add("coctails-section__title"),L.classList.remove("coctails-section-coctailTitel"),n.classList.remove("coctails-section-hover"),p.innerHTML="",L.textContent="Searching results",r=e.drinks.length,(0,s.default)(1,t,r,n)}))}
//# sourceMappingURL=index.339f4e5a.js.map