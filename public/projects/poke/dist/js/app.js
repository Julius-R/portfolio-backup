!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";var o=document.getElementById("pkmn_num"),r=document.getElementById("pkmn_name"),u=document.querySelector(".search_pkmn"),c=document.getElementById("pkdx_num"),i=document.getElementById("pkdx_name"),a=document.getElementById("pkmn_img"),m=document.getElementById("pkdx_height"),p=document.getElementById("pkdx_weight"),d=document.getElementById("pkdx_type"),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"01";fetch("https://pokeapi.co/api/v2/pokemon/"+e).then(function(e){return e.json()}).then(function(e){var t=e;c.textContent="Pokedex # "+function(e){return e<10?"00"+e:e>=10&&e<=99?"0"+e:e}(t.id),i.textContent=t.name,a.src=t.sprites.front_default,m.textContent="Height: "+t.height+"m",p.textContent="Weight: "+t.weight+"kg",d.innerText="",d.innerText="Type: ",t.types.forEach(function(e){d.innerText+=" "+e.type.name+" "})}).catch(function(){alert("Your search did not match any pokemon, maybe your spelling was off.")})};fetch("https://pokeapi.co/api/v2/pokemon/?limit=802").then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){var t=document.createElement("option");t.setAttribute("value",e.name),t.innerText=e.name.toUpperCase(),o.appendChild(t)})}),o.addEventListener("change",function(){l(this.value)}),u.addEventListener("click",function(){var e=r.value.toLowerCase();l(e)}),l("01")}]);