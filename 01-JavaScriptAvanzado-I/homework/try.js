var global = 'Hola!';

function b(){
	var global = 'Chao'; 
	console.log(global); // Chao
	function a() {
		// como no hay una variable llamada global en este contexto,
		// busca en el outer que es scope de b;
		console.log(global); //Chao 
		global = 'Hello!'; // cambia la variable del contexto de b()
	}		
	a();
    console.log(global);
}

//a(); Ya no puedo llamar a a desde el scope global, acá no existe.
b();
console.log(global); // 'Hola!'
