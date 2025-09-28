const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent = document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Atlanta Georgis Temple",
		location: "Sandy Springs, Georgia, United States",
		dedicated: "1983, June 4",
		area: 34500,
		imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg"
	},
	{
		templeName: "Ciudad Juárez Mexico Temple",
		location: "Ciudad Juárez, Mexico",
		dedicated: "2000, February 27",
		area: 107000,
		imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/ciudad-juarez-mexico-temple/ciudad-juarez-mexico-temple-53312-main.jpg"
	},
	{
		templeName: "Yorba Linda California Temple",
		location: "Yorba Linda, California, United States",
		dedicated: "2025",
		area: 30872,
		imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/yorba-linda-california-temple/yorba-linda-california-temple-27767-main.jpg"
	}

];

createTempleCard(temples);

const old = document.querySelector("#old");
old.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.dedicated.startsWith("18")))
});

const newTemple = document.querySelector("#new");
newTemple.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.dedicated.startsWith("20")))
});

const large = document.querySelector("#large");
large.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.area > 90000))
});

const small = document.querySelector("#small");
small.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.area < 10000))
});

const home = document.querySelector("#home");
home.addEventListener("click", () => {
	createTempleCard(temples)
});

function createTempleCard(filteredTemples) {
	document.querySelector(".temple-cards").innerHTML = "";
	filteredTemples.forEach(temple => {
		const card = document.createElement("div");
		card.classList.add("temple-card");
		const img = document.createElement("img");
		img.src = temple.imageUrl;
		img.alt = temple.templeName;
		img.loading = 'lazy';
		const h2 = document.createElement("h2");
		h2.textContent = temple.templeName;
		const loc = document.createElement("p");
		loc.textContent = `Location: ${temple.location}`;
		const dedic = document.createElement("p");
		dedic.textContent = `Dedicated: ${temple.dedicated}`;
		const size = document.createElement("p");
		size.textContent = `Size: ${temple.area} sq ft`;

		card.append(img, h2, loc, dedic, size);
		document.querySelector(".temple-cards").appendChild(card);
	}
	);
}

