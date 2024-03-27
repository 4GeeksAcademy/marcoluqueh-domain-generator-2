/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".es", ".com", ".net"];

  let textFor = '<ul class="list-group">';
  textFor += '<li class="list-group-item bg-success text-light">Using for</li>';

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < ext.length; l++) {
          textFor +=
            '<li class="list-group-item">' +
            pronoun[i] +
            adj[j] +
            noun[k] +
            ext[l] +
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
    for (const adjForOf of adj) {
      for (const nounForOf of noun) {
        for (const extForOf of ext) {
          textForOf += `<li class="list-group-item"> 
          ${pronounForOf}${adjForOf}${nounForOf}${extForOf}
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
    adj.map(adjMap => {
      noun.map(nounMap => {
        ext.map(extMap => {
          textMap += `<li class="list-group-item"> 
          ${pronounMap}${adjMap}${nounMap}${extMap}
          </li>`;
        });
      });
    });
  });
  textMap += "</ul>";
  document.querySelector("#map").innerHTML = textMap;
};
