function defuseBomb(wires) {
  var states = {
    white: ["red", "orange", "green", "purple"],
    red: ["green"],
    black: ["red", "black", "purple"],
    orange: ["red", "black"],
    green: ["white", "orange"],
    purple: ["red", "black"]
  }

  var isDefused = true

  for (var i = 1; i < wires.length; i++) {
    isDefused &= states[wires[(i-1)]].includes(wires[i])
  }

  return isDefused ? "Bomb defused" : "Boom"
}

console.log(defuseBomb(["white","red","green","white"]) === "Bomb defused")
console.log(defuseBomb(["white","orange","green","white"]) === "Boom")
console.log(defuseBomb(["green","orange","black","black","red","green","white"]) === "Bomb defused")
console.log(defuseBomb(["red","green","orange","white"]) === "Boom")
console.log(defuseBomb(["red","green","orange","red"]) === "Bomb defused")
console.log(defuseBomb(["purple","red","green","orange"]) === "Bomb defused")
console.log(defuseBomb(["white","orange","black","blue"]) === "Boom")
