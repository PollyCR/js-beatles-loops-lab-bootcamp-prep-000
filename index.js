const musicians = ["John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
function theBeatlesPlay(musicians,instruments) {
  var i = [];
  for (i = 0; i < musicians.length; i++)
{
    phrases.push(musicians[i] + " plays " + instruments[i]);
  }
  return phrases;
}