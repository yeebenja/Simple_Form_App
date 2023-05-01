var number = 10;
var string = "Hello";
var isRad = true; 
var vector = [];

function one_through_x(x){
	for(var i = 0; i < x; ++i) console.log(i);
}

one_through_x(10);

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

document.getElementById('box').addEventListener('click', function(){
	alert('I got clicked');
	document.getElementById('box').innerHTML = 'I have just been clicked';
});

document.getElementById('submit_button').addEventListener('click', function(){
	// document.getElementById('box').innerHTML = 'Yeah buddy';
	// document.getElementById('box_2').innerHTML = 'Lightweight';
	var first_name = document.getElementById('first_name').value;
	var last_name = document.getElementById('last_name').value;
	var address = document.getElementById('address').value;

	vector.push(first_name);
	vector.push(last_name);
	vector.push(address);

	document.getElementById('first_name').value = '';
	document.getElementById('last_name').value = '';
	document.getElementById('address').value = '';

});


document.getElementById('print_button').addEventListener('click', function(){

	for(var i = 0; i < vector.length; i = i + 3){
		const para = document.createElement("p");
		const node = document.createTextNode(vector[i]);
		para.appendChild(node);

		const element = document.getElementById("print_div");
		element.appendChild(para);

		const para2 = document.createElement("p");
		const node2 = document.createTextNode(vector[i + 1]);
		para2.appendChild(node2);

		element.appendChild(para2);

		const para3 = document.createElement("p");
		const node3 = document.createTextNode(vector[i + 2]);
		para3.appendChild(node3);

		element.appendChild(para3);


	}
});

document.getElementById('clear_button').addEventListener('click', function(){
	clearBox('print_div');
	vector = [];
	document.getElementById('first_name').value = '';
	document.getElementById('last_name').value = '';
	document.getElementById('address').value = '';
});

