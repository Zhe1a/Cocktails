'use strict';
const refst = {
  heroList: document.querySelector('.hero-list'),
  heroTitle: document.querySelector('.hero-text'),
  hero: document.querySelector('.hero'),
  select: document.querySelector('.hero-select'),


  isHiden: document.querySelector('.is-hiden'),
  coctailTitel: document.querySelector('.coctails-section__title'),
  cocktalisTitel: document.querySelector('.coctails-section__coctails-list'),
 

  herospan : document.querySelector('.hero-span'),
  heroBox : document.querySelector('.hero-div'),
  heroSelect : document.querySelector('.hero-boxList'),
  heroListUl:document.querySelector('.hero-list__ul'),
 
  headerinput:document.querySelector('.header-input'),
};
import mainFunction from './coctails';
const coctailsList = document.querySelector('.coctails-section__coctails-list');

let arrayLength = 0;

const { heroList, heroTitle, hero, select, isHiden, 
  heroItem ,headerinput,herospan,coctailTitel,cocktalisTitel,heroBox,
  heroSelect,heroListUl } = refst;

const heroTitleImg = () => {
  return `<div class="hero-container">
</div>`;
};

function creaitMarkapArr(e) {
  return e.map(e => {
    return `<li class=hero-item >
        <button class=hero-button data-name=${e}>${e}</button>
        </li>`;
  });
}

const arrr = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
];


function creaitMarkap(e) {
  return e.map(e => {
    return `<li class=hero-item value=${e} id=${e}>${e}</li>`;
  });
}

function clickHeroTitel(e) {
  headerinput.value = " "


  const target = e.target.dataset.name;
  const hover = e.target;
  const item = e.currentTarget.querySelectorAll('.hero-button');
  if (!target) {
    return;
  }
  if (innerWidth > 767) {
    item.forEach(e => {
        if(!e.classList.contains('is-hover')){return}
        e.classList.remove('is-hover')
    })
    // try {
    //   const removeTarget = document.querySelector('.is-hover');
    //   removeTarget.classList.remove('is-hover')
    //   item.classList.add('is-hover');
    // } catch {}
 

    hover.classList.add('is-hover');
    cocktalis(target);
  }
}

heroList.addEventListener('click', clickHeroTitel);

const hiden = creaitMarkap(arrr);
const markap = creaitMarkapArr(arrr);
const heroWidth = heroTitleImg();

if (innerWidth > 767) {
  isHiden.classList.add('is-hiden');
  heroList.insertAdjacentHTML('beforeend', markap.join(''));
  hero.insertAdjacentHTML('beforeend', heroWidth);
}

if (innerWidth < 767) {
  isHiden.classList.remove('is-hiden');
  heroTitle.insertAdjacentHTML('beforebegin', heroWidth);
  select.insertAdjacentHTML('beforeend', hiden.join(''));

  heroList.addEventListener("click", heroSelectA)

  function heroSelectA(e) {
    const heroSvg = document.querySelector('.hero-svg');
    const HeroSpann = document.querySelector('.hero-span');
      const targetMo = e.target
      if(targetMo === heroSelect || targetMo === HeroSpann || targetMo === heroSvg){
        heroListUl.classList.remove("is-hiden-select")
        heroListUl.classList.add("is-hden-select_display")
      }else{
        heroListUl.classList.add("is-hiden-select")
        heroListUl.classList.remove("is-hden-select_display")

      }
      const targetValue = e.target;
         if(targetValue){
  const targetId = e.target.id

     if(targetId){;

cocktalis(targetId).then(e =>{;
  herospan.textContent = targetId
})
     }
 }
 }
}

function cocktalis(name) {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${name}`;
  return fetch(URL)
    .then(response => {
      if (!response) {
        throw new Error(response.message);
      }

      return response.json();
    })
    .then(response => {
    
         const {drinks} = response
      if (drinks === null) {
       return responsNull()
      } else{
        coctailTitel.classList.add("coctails-section__title")
        coctailTitel.classList.remove("coctails-section-coctailTitel")

        coctailsList.classList.remove("coctails-section-hover")
       cocktalisTitel.innerHTML =  '';
       coctailTitel.textContent = `Searching results`;
      arrayLength = response.drinks.length;
      mainFunction(1, URL, arrayLength, coctailsList);
      }
     });
}


function responsNull() {
  coctailsList.classList.add("coctails-section-hover")

  cocktalisTitel.innerHTML =  '';
const sorryCocktaili = sorryCocktailFor();

coctailTitel.classList.remove("coctails-section__title")
coctailTitel.classList.add("coctails-section-coctailTitel")

coctailTitel.textContent = `Sorry, we didn't find  any cocktail for you`;
  cocktalisTitel.innerHTML = sorryCocktaili


}


function sorryCocktailFor() {
  return `<div class='coctails-section__coctails-img-div'>
  <div class='coctails-section__coctails-img'></div>
  </div>`
}

