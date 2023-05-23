function encriptarNumero() {
    const numero = document.getElementById('numero').value;
    const digito1 = (parseInt(numero[0]) + 7) % 10;
    const digito2 = (parseInt(numero[1]) + 7) % 10;
    const digito3 = (parseInt(numero[2]) + 7) % 10;
    const digito4 = (parseInt(numero[3]) + 7) % 10;
  
    const numeroEncriptado = '' + digito3 + digito4 + digito1 + digito2;
    document.getElementById('numero-encriptado').value = numeroEncriptado;
}

function desencriptarNumero() {
    const numeroEncriptado = document.getElementById('numero-encriptado').value;
    const digito1 = (parseInt(numeroEncriptado[2]) + 3) % 10;
    const digito2 = (parseInt(numeroEncriptado[3]) + 3) % 10;
    const digito3 = (parseInt(numeroEncriptado[0]) + 3) % 10;
    const digito4 = (parseInt(numeroEncriptado[1]) + 3) % 10;
  
    const numeroDesencriptado = '' + digito1 + digito2 + digito3 + digito4;
    document.getElementById('numero-desencriptado').value = numeroDesencriptado;
}