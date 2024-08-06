const valorContaInput = document.getElementById('valorConta');
const servicoSelect = document.getElementById('servico');
const calcularGorjetaButton = document.getElementById('calcularGorjeta');
const resultadoDiv = document.getElementById('resultado');
 
const calcularGorjeta = (valorConta, qualidadeServico) => {
  let gorjeta = 0;
  switch (qualidadeServico) {
    case 'bom':
      gorjeta = valorConta * 0.2; 
      break;
    case 'regular':
      gorjeta = valorConta * 0.15; 
      break;
    case 'ruim':
      gorjeta = valorConta * 0.1; 
      break;
  }
  return gorjeta;
};
 
const exibirResultado = (gorjeta) => {
  resultadoDiv.innerHTML = `Gorjeta: R$ ${gorjeta.toFixed(2)}`;
};
 
calcularGorjetaButton.addEventListener('click', () => {
  const valorConta = parseFloat(valorContaInput.value);
  const qualidadeServico = servicoSelect.value;
 
  const gorjeta = calcularGorjeta(valorConta, qualidadeServico); //  
  exibirResultado(gorjeta); 
});
