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
});

layoutPaletteInput.addEventListener("click", async function(e) {
    const text = await navigator.clipboard.readText();
    e.target.value = text;
});

generateLayoutBtn.addEventListener("click", (btn) => {
    const palette = layoutPaletteInput.value.split(',');
    var templateName = [...navLayoutOptions].filter((e) => { return e.checked });
    templateName = templateName[0].id;
    const paletteLength = Number(palette.length);
    const [first,second,third,fourth,fifth,sixth,spec] = [document.querySelectorAll(".first"),document.querySelectorAll(".second"),document.querySelectorAll(".third"),document.querySelectorAll(".fourth"),document.querySelectorAll(".fifth"),document.querySelectorAll('.sixth'),document.querySelectorAll('.spec')]
    const allLayoutObj = document.querySelectorAll(".tempObj");

    first.forEach((e) => {
        e.style.backgroundImage = '';
    })
    // allLayoutObj.forEach((e) => { 
    //     e.style.color = palette[2];
    //     // e.style['-webkit-text-stroke'] = `1px ${palette[2]}`;
    // }); 
    first.forEach((e) => { 
        e.style.backgroundColor = palette[0];
        // e.style['-webkit-text-stroke'] = `1px ${palette[1]}`;
    });
    second.forEach((e) => {
        paletteLength > 3 ? e.style['-webkit-text-stroke'] = `0.5px ${palette[2]}` : e.style['-webkit-text-stroke'] = `0.5px ${palette[0]}`;
    });
    fourth.forEach((e) => {
        e.style['-webkit-text-stroke'] = `0.5px ${palette[0]}`;
    });
    fifth.forEach((e) => {
        e.style['-webkit-text-stroke'] = `0.5px ${palette[1]}`;
    });
    if (templateName == 'focus') {
    } else {
        first.forEach((e) => { 
            e.style.boxShadow = ``;
        });
    }

    second.forEach((e) => { e.style.backgroundColor = palette[1] });
    
    third.forEach((e) => { e.style.backgroundColor = palette[2] });
   
    paletteLength >= 4 ? fourth.forEach((e) => { e.style.backgroundColor = palette[3]; }) : fourth.forEach((e) => { templateName == 'brochure' ? e.style.backgroundColor = palette[0] : e.style.backgroundColor = palette[1] });
    
    paletteLength >= 5 ? fifth.forEach((e) => { e.style.backgroundColor = palette[4]; }) :
    paletteLength >= 4 ? fifth.forEach((e) => { e.style.backgroundColor = palette[3]; }) : fifth.forEach((e) => { e.style.backgroundColor = palette[2] });
    
    paletteLength >= 6 ? sixth.forEach((e) => { e.style.backgroundColor = palette[5]; e.style.color = palette[1] }) : sixth.forEach((e) => { e.style.backgrondColor = palette[2] });

    switch(paletteLength) {
        case 4:
            allLayoutObj.forEach((e) => { 
                e.style.color = palette[3];
            }); 
            break;
        case 5:
            allLayoutObj.forEach((e) => { 
                e.style.color = palette[4];
            }); 
            break;
        case 6:
            allLayoutObj.forEach((e) => { 
                e.style.color = palette[5];
            }); 
            break;
        default: 
            allLayoutObj.forEach((e) => { 
                e.style.color = palette[2];
            });
        break; 
    }

    fifth.forEach((e) => { e.style.color = palette[2] });
    
    switch(templateName) {
        case 'standard': 
            fourth.forEach((e) => {
                e.style.color = palette[1];
            });
        break;
        case 'focus':
            first.forEach((e) => { 
                e.style.backgroundColor = palette[2];
                e.style.boxShadow = `0px 0px 18px 8px ${palette[0]} inset`;
                e.style['-webkit-text-stroke'] = `1px ${palette[0]}`;

            });
            // spec.forEach((e) => {
            //     e.style.color = palette[1];
            // });
        break;
        case 'brochure':
            paletteLength >= 4 ? fifth.forEach((e) => { e.style.backgroundColor = palette[2] }) : fifth.forEach((e) => { e.style.backgroundColor = palette[0] })
            paletteLength >= 5 ? fifth.forEach((e) => { e.style.color = palette[4] }) : fifth.forEach((e) => { e.style.color = palette[0] });
            break;
        case 'illustrative':
            second.forEach((e) => {
                e.style.color = palette[0];
            })
            third.forEach((e) => {
                paletteLength >= 4 ? e.style.color = palette[3] : null;
                e.style['-webkit-text-stroke'] = `1px ${palette[1]}`;
            });
            fifth.forEach((e) => {
                paletteLength >= 4 ? e.style.backgroundColor = palette[3]: null;
                
            })
        default: break;
    }
    
});

const layout = () => {}

export default layout;