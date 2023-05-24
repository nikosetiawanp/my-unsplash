// get all movies
const URL = "http://localhost:3000/images/";
const contents = document.getElementById("contents");

async function renderAll() {
  let response = await fetch(URL);
  let data = await response.json();

  for (let i = 0; i < data.length; i++) {
    contents.innerHTML += `
    <div id="${data[i]._id}" class="relative rounded-3xl overflow-hidden bg-black mb-6">
        <div class="absolute bg-black/60 opacity-0 hover:opacity-100 w-full h-full">
            <button class="absolute top-4 right-4 hover:bg-red-600 border border-red-600 rounded-full font-semibold text-red-600 hover:text-white text-xs p-1 px-6">delete</button>
            <p class="absolute bottom-4 left-4 text-white font-bold">${data[i].label}</p>
        </div>
        <img class="object-cover" src="${data[i].url}" alt="${data[i].label}">
    </div>
    `;
  }
}
renderAll();

// fetch(URL)
//   .then((response) => response.json())
//   .then((data) => console.log(data));
