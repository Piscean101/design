var fullThemeList = [];
var callCount = 0;
export default function addPalette(name='John Doe',p = [],themes=['blank']) {
    callCount++;
    const newPalette = document.createElement("div");
    const paletteInfo = document.createElement("div");
    const paletteTitle = document.createElement("h1");
    const paletteBackground = document.createElement("span");
    
    paletteInfo.appendChild(paletteTitle);
    paletteInfo.appendChild(paletteBackground);
    paletteInfo.classList.add('paletteInfo')
    
    paletteTitle.innerHTML = name;
    paletteTitle.classList.add('paletteTitle')
    
    paletteBackground.classList.add('paletteBackground');
    paletteBackground.style.backgroundImage = `linear-gradient(to right, ${p})`;
    
    themes.forEach(e => newPalette.classList.add(e));
    fullThemeList.push(...themes);

    newPalette.classList.add('palette');
    newPalette.appendChild(paletteInfo);
    newPalette.setAttribute("title",'click : copy palette to clipboard');

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

function statistics() {
    let colorMap = new Map();
    fullThemeList.forEach(e => {
        colorMap.has(e) ? colorMap.set(e,Number(colorMap.get(e)) + 1) : colorMap.set(e,1);
    });
    console.log("Total Palettes:",callCount);
    console.log(colorMap);
}

addPalette('Apricot',['#6B7A8F','#F7882F','#F7C331','#DCC7AA'],['Orange','Grey','Yellow']);
addPalette('Banking and Finance',['#FBE3E8','#5CBDB9','#EBF6F5'],['Blue','Pink']);
addPalette('Block Party',['#FBF579','#005995','#FA625F','#000000','#600473'],['Blue','Pink','Purple','Yellow']);
addPalette('Bright Beach',['#51E2F5','#9DF9EF','#EDF7F6','#FFA8B8','#A28089'],['Blue','Pink']);
addPalette('Bright Power',['#FF1D58','#F75990','#FFF685','#00DDFF','#0049B7'],['Blue','Pink','Yellow']);
addPalette('Bright Scene',['#FFDE22','#FF414E','#FF8928','#FFFFFF'],['Orange','Pink','White','Yellow']);
addPalette('Brilliant Accents',['#CD5554','#91684A','#00C07F','#313D4B'],['Beige','Green','Pink']);
addPalette('Classic',['#FF3A22','#C7AF6B','#A4893D','#628078'],['Beige','Grey','Orange']);
addPalette('Dark Horse',['#FEDA6A','#D4D4DC','#393F4D','#1D1E22'],['Grey','Yellow']);
addPalette('Deep Sand',['#E1B382','#C89666','#2D545E','#12343B'],['Beige','Grey']);
addPalette('Easter Egg',['#8BF0BA','#0E0FED','#94F0F1','#F2B1D8','#FFDC6A'],['Blue','Pink','Yellow']);
addPalette('Easy Warm',['#CAE4DB','#DCAE1D','#00303F','#7A9D96'],['Grey','Yellow']);
addPalette('Entertainment',['#EB1736','#5252D4','#7575DD','#781A44'],['Purple','Red']);
addPalette('Environment',['#9BC400','#8076A3','#F9C5BD','#7C677F'],['Green','Pink','Purple']);
addPalette('Extra Snug',['#3A4660','#C9AF98','#ED8A63','#845007'],['Beige','Grey','Pink']);
addPalette('Futuristic Litebright',['#BCCBDE','#C2DDE6','#431C5D','#E05915','#CDD422'],['Orange','Purple','Yellow']);
addPalette(`Gentleman's Club`,['#D8AB4E','#B48C36','#040404'],['Beige']);
addPalette('Global Charity',['#F43A09','#FFB766','#C2EDDA','#68D388'],['Green','Orange']);
addPalette('Goldifox',['#A39274','#DFD8C8','#252523'],['Beige','Grey']);
addPalette('High Contrast',['#B11A21','#E0474C','#7ACFD6','#F1F0EE'],['Blue','Red','White']);
addPalette('Inspired',['#101357','#FEA49F','#FBAF08','#00A0A0','#007F4F'],['Blue','Green','Pink','Yellow']);
addPalette('Intellectual',['#6ED3CF','#9068BE','#E1E8F0','#E62739'],['Blue','Purple','Red']);
addPalette('Intense',['#BEEF00','#FF0028','#657A00','#1400C6'],['Blue','Green','Red']);
addPalette('Manual',['#C53211','#2E3830','#E6DBC9'],['Grey','Orange']);
addPalette('Metallic',['#0F2862','#9E363A','#091F36','#4F5F76'],['Blue','Grey','Red']);
addPalette('Minty Fresh',['#4CB69F','#F5F5F5','#201D3A'],['Blue','White']);
addPalette('Pastel',['#DEA6AF','#8CBCD0','#E6DBC9'],['Blue','Pink']);
addPalette('Photographic Memory',['#3D7C47','#0986B8','#76C1D4','#F7F7F7'],['Blue','Green','White']);
addPalette('Playful',['#4ABDAC','#FC4A1A','#F7B733','#DFDCE3'],['Blue','Orange','White','Yellow']);
addPalette('Precious Metals',['#BD8C7D','#D1BFA7','#8E8E90','#49494B'],['Beige','Grey']);
addPalette('Punch',['#393939','#FF5A09','#EC7F37','#BE4F0C'],['Grey','Orange']);
addPalette('Purple 90s',['#A0D2EB','#E5EAF5','#D0BDF4','#8458B3','#494D5F'],['Blue','Purple']);
addPalette('Sleepy Green',['#7DCE94','#3D3D3F','#F6F5F3','#F9F8FD'],['Green','Grey','White']);
addPalette('Subtle',['#ACB7AE','#82716E','#E4DECD','#C2B490'],['Grey','White']);
addPalette('Trustbuilding',['#368CBF','#7EBC59','#33363B','#EAEAEA'],['Blue','Green','Grey','White']);
addPalette('Trustworthy',['#1561AD','#1C77AC','#1DBAB4','#FC5226'],['Blue','Orange']);
addPalette('Valentine',['#FFF5D7','#FF5E6C','#FEB300','#FFAAAB'],['Pink','Yellow']);
addPalette('White Space',['#FCEED1','#7D3CFF','#FFFFFF','#F2D53C','#C80E13'],['Red','Purple','White','Yellow']);

// statistics();