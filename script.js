function cycleImage(){
	delayInSeconds = 2;
	var rotator = document.getElementById('rotator');
	var imageDir = "images/";

	var images = ["old_man_1", "old_man_2", "old_man_3", "old_man_4", "old_man_5", "old_woman_1", "old_woman_2", "old_woman_3"];

	var num = 0;
	var changeImage = function(){
		rotator.src = imageDir + images[num++] + ".jpg";
		if (num == images.length){
			num = 0;
		}
	};
	setInterval(changeImage, delayInSeconds * 1000);
}

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting){
			entry.target.classList.add('fadeInAnimation');
			return;
		}
	});
});

observer.observe(document.querySelector('.quote p'));
observer.observe(document.querySelector('.quote b'));
observer.observe(document.querySelector('.information p'));
observer.observe(document.querySelector('.information_media p'));
observer.observe(document.querySelector('.information_neuroplasticity p'));
observer.observe(document.querySelector('.information_final h3'));
observer.observe(document.querySelector('.wingding'));


function cycleIcon(){
	delayInSeconds = 2;
	var num = 0;
	var wingdings = ["&#11217", "&#9776", "&#9991", "&#8999", "&#8984", "&#11216"];
	var changeIcon = function (){
		document.getElementById("wingding_1").innerHTML = wingdings[num];
		num++;
		if (num == wingdings.length){
			num = 0;
		}
	}
	setInterval(changeIcon, delayInSeconds * 1000);
}

window.onload=function(){
	cycleImage();
	cycleIcon();
	document.getElementById('rotator').src = ["images/old_man_1.jpg"];
}