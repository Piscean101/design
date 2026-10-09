import addPalette from './palettes.js';

// ADD FAVOURITES FEATURE

const colorFilterBtns = document.querySelectorAll(".colorFilter");
const palettes = document.querySelectorAll(".palette");

colorFilterBtns.forEach((e) => {
    e.addEventListener("click", (c) => {
        const choice = c.target.value;
        palettes.forEach((p) => {
            if(choice == 'All') { return p.classList.remove('hidden') }
            p.classList.contains(choice) ? p.classList.remove('hidden') : p.classList.add('hidden')
        })
    })
})