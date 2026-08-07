export default function addPalette(name='John Doe',p = [],themes=['blank']) {
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
    themes.forEach(e => newPalette.classList.add(e))
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
        console.log(e.target.classList)
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

addPalette('Apricot',['#6B7A8F','#F7882F','#F7C331','#DCC7AA'],['Orange','Grey','Yellow']);
addPalette('Banking and Finance',['#FBE3E8','#5CBDB9','#EBF6F5'],['Blue','Pink']);
addPalette('Blue Lightning',['#51D0DE','#BF4AA8','#D9D9D9'],['Blue','Purple']);
addPalette('Bright Beach',['#51E2F5','#9DF9EF','#EDF7F6','#FFA8B8','#A28089'],['Blue','Pink']);
addPalette('Bright Power',['#FF1D58','#F75990','#FFF685','#00DDFF','#0049B7'],['Blue','Pink','Yellow']);
addPalette('Bright Scene',['#FFDE22','#FF414E','#FF8928','#FFFFFF'],['Orange','Pink','White','Yellow']);
addPalette('Classic',['#FF3A22','#C7AF6B','#A4893D','#628078'],['Beige','Grey','Orange']);
addPalette('Deep Sand',['#E1B382','#C89666','#2D545E','#12343B'],['Beige','Blue']);
addPalette('Entertainment',['#EB1736','#5252D4','#7575DD','#781A44'],['Blue','Pink','Purple']);
addPalette('Environment',['#9BC400','#8076A3','#F9C5BD','#7C677F'],['Green','Pink','Purple']);
addPalette('Futuristic Litebright',['#BCCBDE','#C2DDE6','#431C5D','#E05915','#CDD422'],['Orange','Purple','Yellow']);
addPalette('Global Charity',['#F43A09','#FFB766','#C2EDDA','#68D388'],['Green','Orange']);
addPalette('Inspired',['#101357','#FEA49F','#FBAF08','#00A0A0','#007F4F'],['Blue','Green','Pink','Purple','Yellow']);
addPalette('Intense',['#BEEF00','#FF0028','#657A00','#1400C6'],['Blue','Green','Red']);
addPalette('Metallic',['#0F2862','#9E363A','#091F36','#4F5F76'],['Grey','Purple','Red']);
addPalette('Photographic Memory',['#3D7C47','#0986B8','#76C1D4','#F7F7F7'],['Blue','Green','White']);
addPalette('Purple 90s',['#A0D2EB','#E5EAF5','#D0BDF4','#8458B3','#494D5F'],['Blue','Purple']);
addPalette('Subtle',['#ACB7AE','#82716E','#E4DECD','#C2B490'],['Grey','White']);
addPalette('Trustworthy',['#1561AD','#1C77AC','#1DBAB4','#FC5226'],['Blue','Orange']);
addPalette('Valentine',['#FFF5D7','#FF5E6C','#FEB300','#FFAAAB'],['Pink','Yellow']);
addPalette('White Space',['#FCEED1','#7D3CFF','#FFFFFF','#F2D53C','#C80E13'],['Red','Purple','White','Yellow']);






