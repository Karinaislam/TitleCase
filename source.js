function input(){

	var input = document.getElementById('input').value;
	var output = titleCase(input);
	document.getElementById('output').innerHTML= output;


}

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}
