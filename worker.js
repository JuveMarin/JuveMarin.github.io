const factorial = numero => {
	if (numero < 0n) numero = numero * -1n;
	if (numero <= 0n) return 1n;
	let factorial = BigInt(1);
	while (numero > 1) {
		factorial = factorial * numero;
		numero--;
	}
	return factorial;
}

onmessage = evento => {
	let numero = BigInt(evento.data);
	postMessage(factorial(numero));
};