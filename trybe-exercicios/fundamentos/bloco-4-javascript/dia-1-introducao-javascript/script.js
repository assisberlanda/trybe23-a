let nota = 80;
if (nota >= 80) {
    console.log("Parabéns, você foi aprovada(o)!");
    estado = 'Parabéns'
}
else if (60 <= nota < 80) {
    console.log("Você está na nossa lista de espera");
    estado = 'Lista'
}
else {
    console.log("Você foi reprovada(o)");
    estado = 'Reprovada'
}
