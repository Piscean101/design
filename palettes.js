function addPalette(name='John Doe',p = []) {
    const newPalette = document.createElement("div");
    const paletteInfo = document.createElement("div");
    const paletteTitle = document.createElement("h1");
    const paletteBackground = document.createElement("span");

    
    paletteInfo.appendChild(paletteTitle);
    paletteInfo.appendChild(paletteBackground);
    paletteInfo.classList.add('paletteInfo')
    
    paletteTitle.innerHTML = name;
    
    paletteBackground.classList.add('paletteBackground');
    paletteBackground.style.backgroundImage = `linear-gradient(to right, ${p})`;
    
    newPalette.classList.add('palette');
    newPalette.appendChild(paletteInfo);
    newPalette.setAttribute("title",'click : copy palette to clipboard')

    function savePalette(pal = p) {
        navigator.clipboard.writeText(pal);
    }

    newPalette.addEventListener("click", (e) => {
        if (e.target.classList.contains("color")) {
            savePalette(e.target.innerHTML);
            return;
        }
        savePalette()
    });

    p.forEach(color => {
        const newColor = document.createElement("span");
        newColor.classList.add("color");
        newColor.style.backgroundColor = color;
        newColor.innerHTML = color;
        newPalette.appendChild(newColor);
        newColor.setAttribute("title","click : copy hex # to clipboard");
    });
    document.body.appendChild(newPalette);
}

addPalette('Banking and Finance',['#FBE3E8','#5CBDB9','#EBF6F5']);
addPalette('Bright Beach',['#51E2F5','#9DF9EF','#EDF7F6','#FFA8B8','#A28089']);
addPalette('Bright Power',['#FF1D58','#F75990','#FFF685','#00DDFF','#0049B7']);
addPalette('Deep Sand',['#E1B382','#C89666','#2D545E','#12343B']);
addPalette('Environment',['#9BC400','#8076A3','#F9C5BD','#7C677F']);
addPalette('Global Charity',['#F43A09','#FFB766','#C2EDDA','#68D388']);
addPalette('Intense',['#BEEF00','#FF0028','#657A00','#1400C6']);
addPalette('Painting',['#FFF5D7','#FF5E6C','#FEB300','#FFAAAB']);
addPalette('Purple 90s',['#A0D2EB','#E5EAF5','#D0BDF4','#8458B3','#494D5F']);
addPalette('White Space',['#FCEED1','#7D3CFF','#FFFFFF','#F2D53C','#C80E13']);




