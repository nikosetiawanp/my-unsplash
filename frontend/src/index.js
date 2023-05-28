// get all movies
const URL = "http://localhost:3000/images/";
const contents = document.getElementById("contents");

const addPhotoButton = document.getElementById("add-photo-button");
const cancelButton = document.getElementById("cancel-button");
const newPhotoForm = document.getElementById("new-photo-form");

const labelInput = document.getElementById("label-input");
const urlInput = document.getElementById("url-input");
const submitButton = document.getElementById("submit-button");

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

const submitPhoto = async function () {
  //   console.log(labelInput.value);
  console.log(urlInput.value);
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify({
      label: labelInput.value,
      url: urlInput.value,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });

  if (response.ok) {
    console.log("Post Success!");
  } else {
    alert(response.statusText);
  }
};

// Open and close photo form
const openPhotoForm = function () {
  newPhotoForm.classList.replace("hidden", "absolute");
};
const closePhotoForm = function () {
  newPhotoForm.classList.replace("absolute", "hidden");
};

renderAll();
addPhotoButton.addEventListener("click", openPhotoForm);
cancelButton.addEventListener("click", closePhotoForm);
submitButton.addEventListener("click", submitPhoto);
