//your JS code here. If required.
let color = document.querySelector('#colorSelect');
let btn = document.getElementsByTagName('input')[0];

btn.addEventListener("click", () =>{
	let option = document.getElementsByTagName('option');
	for(let t of option){
		if(t.innerText === color.value){
			return color.removeChild(t);
		}
	}
})
