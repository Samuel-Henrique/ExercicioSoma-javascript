let num1 = document.querySelector('input#num1')
let num2 = document.querySelector('input#num2')
let res = document.querySelector('div#res')

function somar(){
	
	let soma = Number(num1.value) + Number(num2.value)
	res.innerHTML = `A soma é ${soma}`

	num1.value = ''
	num2.value = ''
	num1.focus()
}