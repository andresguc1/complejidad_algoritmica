function contar(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

console.time("Duracion del algortimo contar");
contar(5);
console.timeEnd("Duracion del algortimo contar");
