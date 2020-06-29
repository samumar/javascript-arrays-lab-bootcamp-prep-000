var kittens = [] //define your array here

// Add your functions and code here
kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(kitten) {
  const appendKitten = kittens.concat(kitten);
  return appendKitten;
}