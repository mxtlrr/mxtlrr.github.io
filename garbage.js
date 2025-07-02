window.onload = () => {
	// age so i don't have to manually update it
  let bluh =  `${Math.floor(Math.abs((new Date("09/14/2007") - new Date()) / (1000 * 60 * 60 * 24 * 365)))}`;
  document.getElementById("bluh").innerHTML = bluh;

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
