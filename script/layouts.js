const generateLayoutBtn = document.getElementById("generateLayoutBtn");
const layoutPaletteInput = document.getElementById("layoutPaletteInput");
const navLayoutOptions = document.querySelectorAll(".chooseLayout");
const templates = document.querySelectorAll(".template");

const handleNavLayouts = (type) => {
    let current = [...templates].filter((template) => { return !template.classList.contains('hidden') })
    let target = document.getElementById(`${type}Template`);
    current[0].classList.add('hidden');
    if (localStorage.getItem("layoutType") == type) { current = target }
    target.classList.remove('hidden');
    target.classList.remove('hidden');
    localStorage.setItem("layoutType",type);
}

navLayoutOptions.forEach((radio) => {
    radio.addEventListener("click", (e) => {
        handleNavLayouts(e.target.value)
        generateLayoutBtn.click();
    })
})

generateLayoutBtn.addEventListener("click", (btn) => {
    const palette = layoutPaletteInput.value.split(',');
    var templateName = [...navLayoutOptions].filter((e) => { return e.checked });
    templateName = templateName[0].id;
    const paletteLength = palette.length;
    const [first,second,third,fourth,fifth,sixth] = [document.querySelectorAll(".first"),document.querySelectorAll(".second"),document.querySelectorAll(".third"),document.querySelectorAll(".fourth"),document.querySelectorAll(".fifth"),document.querySelectorAll('.sixth')]
    const allLayoutObj = document.querySelectorAll(".tempObj");

    first.forEach((e) => {
        e.style.backgroundImage = '';
    })
    // if (templateName == 'canvas') {
    //     first.forEach((e) => { 
    //         // e.style.backgroundImage = `linear-gradient(to bottom, ${palette[0]},${palette[2]},${palette[2]},${palette[2]},${palette[2]}`;
    //         e.style.backgrondcolor = palette[2];
    //         allLayoutObj.forEach((e) => { e.style.color = palette[0] });
    //     });
    // } else {
        first.forEach((e) => { e.style.backgroundColor = palette[0] });
        allLayoutObj.forEach((e) => { e.style.color = palette[2] });
    // }
    if (templateName == 'canvas') {
        first.forEach((e) => { 
            e.style.backgroundColor = palette[2];
            e.style.boxShadow = `0px 0px 18px 8px ${palette[0]} inset`;
        });
        allLayoutObj.forEach((e) => { e.style.color = palette[0] });
    } else {
        first.forEach((e) => { 
            e.style.boxShadow = ``;
        });
    }
    second.forEach((e) => { e.style.backgroundColor = palette[1] });
    third.forEach((e) => { e.style.backgroundColor = palette[2] });
    console.log(paletteLength)
    paletteLength >= 4 ? fourth.forEach((e) => { e.style.backgroundColor = palette[3]; second.forEach((s) => { s.style.color = palette[0] }) }) : fourth.forEach((e) => { e.style.backgroundColor = palette[1] });
    paletteLength >= 5 ? fifth.forEach((e) => { e.style.backgroundColor = palette[4]; e.style.color = palette[0] }) : fifth.forEach((e) => { e.style.backgroundColor = palette[0] });
    paletteLength >= 6 ? sixth.forEach((e) => { e.style.backgroundColor = palette[5]; e.style.color = palette[1] }) : sixth.forEach((e) => { e.style.backgrondColor = palette[2] });
    fifth.forEach((e) => { e.style.color = palette[0] })
});

const layout = () => {}

export default layout;