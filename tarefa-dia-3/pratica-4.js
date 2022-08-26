let numero;
divisivel = 0;
i = 1;

while (i <= numero) {
  if (numero % i == 0) {
    divisivel++;
  }
  i++;
}

if (divisivel == 2) {
  console.log(`Sim, o número ${numero} é primo!`);
} else {
  console.log(`Não, o número ${numero} não é primo!`);
}
