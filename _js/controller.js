/*Início verificação de preenchimento de campos do formulário*/

function verificar(){
	var nome = document.getElementById('nome').value;
	var dtNasci = document.getElementById('dtNasci').value;
	var CPF = document.getElementById('cpf').value;
	var telefone = document.getElementById('telefone').value;
    var CEP = document.getElementById('cep').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

if (!nome || !dtNasci || !cpf || !telefone || !cep || !email || !senha){
	alert("Campos não preenchidos, favor preenchê-los");
} else {
	alert("Campos preenchidos com sucesso")

;}

}

/*Fim verificação de preenchimentos de campos de formulário*/

/*Início da função de validação de campo do telefone*/

function maskFone (){
	const numeroAtual = document.getElementById('fone').value
	const isCelular = numeroAtual.lenght  === 11;
	const isFone = numeroAtual.lenght === 10; 
	let = numeroAjustado;
	if(isCelular){
		const part1 = numeroAtual.slice(0,2);
		const part2 = numeroAtual.slice(2,7);
		const part3 = numeroAtual.slice(7,11);
		numeroAjustado = `(${part1}) ${part2}-${part3}`
	}
	if(isFone){
		const part1 = numeroAtual.slice(0,2);
		const part2 = numeroAtual.slice(2,6);
		const part3 = numeroAtual.slice(6,10);
		numeroAjustado = `(${part1}) ${part2}-${part3}`
	}
}