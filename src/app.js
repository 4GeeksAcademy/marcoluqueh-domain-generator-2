/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adjective = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".es", ".com", ".net"];

  let textFor = '<ul class="list-group">';
  textFor += '<li class="list-group-item bg-success text-light">Using for</li>';

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          textFor +=
            '<li class="list-group-item">' +
            pronoun[i] +
            adjective[j] +
            noun[k] +
            extension[l] +
            "</li>";
        }
      }
    }
  }
  textFor += "</ul>";
  document.querySelector("#for").innerHTML = textFor;

  let textForOf = '<ul class="list-group">';
  textForOf +=
    '<li class="list-group-item bg-success text-light">Using for of</li>';
  for (const pronounForOf of pronoun) {
    for (const adjectiveForOf of adjective) {
      for (const nounForOf of noun) {
        for (const extensionForOf of extension) {
          textForOf += `<li class="list-group-item"> 
          ${pronounForOf}${adjectiveForOf}${nounForOf}${extensionForOf}
          </li>`;
        }
      }
    }
  }
  textForOf += "</ul>";

  document.querySelector("#forOf").innerHTML = textForOf;

  let textMap = '<ul class="list-group">';
  textMap +=
    '<li class="list-group-item bg-success text-light">Using .map()</li>';
  pronoun.map(pronounMap => {
    adjective.map(adjectiveMap => {
      noun.map(nounMap => {
        extension.map(extensionMap => {
          textMap += `<li class="list-group-item"> 
          ${pronounMap}${adjectiveMap}${nounMap}${extensionMap}
          </li>`;
        });
      });
    });
  });
  textMap += "</ul>";
  document.querySelector("#map").innerHTML = textMap;
};
