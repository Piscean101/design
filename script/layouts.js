const generateLayoutBtn = document.getElementById("generateLayoutBtn");
const layoutPaletteInput = document.getElementById("layoutPaletteInput");
const navLayoutOptions = document.querySelectorAll(".chooseLayout");
const templates = document.querySelectorAll(".template");

const handleNavLayouts = (type) => {
    if (localStorage.getItem("layoutType") == type) { return }
    let current = [...templates].filter((template) => { return !template.classList.contains('hidden') })
    let target = document.getElementById(`${type}Template`);
    if (current == target) { return }
    target.classList.remove('hidden');
    current[0].classList.add('hidden');
    localStorage.setItem("layoutType",type);
}

navLayoutOptions.forEach((radio) => {
    if (radio.checked) { handleNavLayouts(radio.value) }
    radio.addEventListener("click", (e) => {
        handleNavLayouts(e.target.value)
    })
})

generateLayoutBtn.addEventListener("click", (btn) => {
    const palette = layoutPaletteInput.value.split(',');
    const paletteLength = palette.length;
    const [first,second,third,fourth,fifth] = [document.querySelectorAll(".first"),document.querySelectorAll(".second"),document.querySelectorAll(".third"),document.querySelectorAll(".fourth"),document.querySelectorAll(".fifth")]
    const allLayoutObj = document.querySelectorAll(".tempObj");

    first.forEach((e) => { e.style.backgroundColor = palette[0] });
    second.forEach((e) => { e.style.backgroundColor = palette[1] });
    // third.forEach((e) => { e.style.color = palette[2] });
    allLayoutObj.forEach((e) => { e.style.color = palette[2] })
    paletteLength >= 4 ? fourth.forEach((e) => { e.style.backgroundColor = palette[3] }) : fourth.forEach((e) => { e.style.backgroundColor = palette[1] });
    paletteLength >= 5 ? fifth.forEach((e) => { e.style.backgroundColor = palette[4] }) : fifth.forEach((e) => { e.style.backgroundColor = palette[0] });

});

const layout = () => {}

export default layout;