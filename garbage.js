window.onload = () => {
	if(screen.width <= 850){
		alert("Hi. This site looks best with a width > 850 px. Sorry!");
	}
	// Modify some stuff with a links
	let links = document.getElementsByTagName("a");
	for(let i = 0; i < links.length; i++){
		let href = links.item(i).href;
		if(href.includes("html")){ // Blog post, add date based on href
			let original = links.item(i).innerHTML;
			let date     = href.substr(href.indexOf("202"), 10);

			// Format it and send!
			let formatted_date = new Date(Date.parse(date)).toLocaleString("en-US", { month: "long", day: "numeric", year: "numeric" });
			links.item(i).innerHTML = `${formatted_date}: ${original}`;
		}
	}
}
