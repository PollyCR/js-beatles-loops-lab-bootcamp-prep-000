'use-strict';

const musicians = ["John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
function theBeatlesPlay(musicians,instruments) {
  var phrases = [];
  for (var i = 0; i < musicians.length; i++)
{
    phrases.push(musicians[i] + " plays " + instruments[i]);
  }
  return phrases;
}

var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout",
"He hated the sound of his own voice"];

function johnLennonFacts(facts) {
var newFacts=[];
var i = 0;
while (i < 4) {

newFacts[i] = facts[i] +"!!!";
i++;
}
return newFacts;
}

function iLoveTheBeatles(1) {