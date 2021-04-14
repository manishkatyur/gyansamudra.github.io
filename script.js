const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress-bar");

window.onload = () => {
	setTimeout( () => {
		for(let i = 0; i <= 100; i++){
			progressBar.innerHTML = i;
			progressBar.style.width = i + "%";
		}
	}, 2000);
	
}