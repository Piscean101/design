const backClick = document.getElementById("backClick")
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

    function savePalette(pal = p,name=null) {
        navigator.clipboard.writeText(pal);
        const navChoice = confirm(`Copied ${name} to clipboard. Continue on this page?`);
        navChoice ? null : backClick.click();
    }

    newPalette.addEventListener("click", (e) => {
        savePalette(p,name);
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

addPalette('Amethyst Haze',['#341C67','#472F5B','#DCCE40','#C4AEF4','#CCA4B4'],['Purple','Yellow']);
addPalette('Apricot',['#6B7A8F','#F7882F','#F7C331','#DCC7AA'],['Orange','Grey','Yellow']);
addPalette('Autumn Harvest',['#B45309','#92400E','#EAB308','#FEF3C7','#451A03'],['Beige','Orange','Yellow']);
addPalette('Banking and Finance',['#FBE3E8','#5CBDB9','#EBF6F5'],['Blue','Pink']);
addPalette('Black Rose',['#000000','#3B0A0A','#761515','#B12020','#EC2B2B'],['Black','Red']);
addPalette('Block Party',['#FBF579','#005995','#FA625F','#000000','#600473'],['Black','Blue','Pink','Purple','Yellow']);
addPalette('Blue Jeans',['#3D52A0','#7091E6','#8697C4','#ADBBDA','#EDE8F5'],['Blue','White']);
addPalette('Bright Beach',['#51E2F5','#9DF9EF','#EDF7F6','#FFA8B8','#A28089'],['Blue','Pink']);
addPalette('Bright Power',['#FF1D58','#F75990','#FFF685','#00DDFF','#0049B7'],['Blue','Pink','Yellow']);
addPalette('Brilliant Accents',['#CD5554','#91684A','#00C07F','#313D4B'],['Beige','Green']);
addPalette('Burgers and Fries',['#92400E','#F59E0B','#DC2626','#FEF3C7','#44403C'],['Beige','Red','White','Yellow']);
addPalette('Calcite',['#DDDCDB','#FD7B41','#EDBF9B','#3C4044'],['Grey','Orange','Pink']);
addPalette('Candy Shop',['#EC4899','#8B5CF6','#FBBF24','#FDF4FF','#831843'],['Pink','Purple','White','Yellow']);
addPalette('Celestial',['#2323FF','#807D52','#FFBD24','#FFF224'],['Blue','Grey','Yellow']);
addPalette('Classic',['#FF3A22','#C7AF6B','#A4893D','#628078'],['Beige','Orange']);
addPalette('Cocoa Monday',['#742F14','#5A84AC','#5C3C2C','#C7AC9F','#FC9C44'],['Beige','Blue','Orange']);
addPalette('Cool and Collected',['#003135','#024950','#964734','#0FA4AF','#AFDDE5'],['Blue','Orange']);
addPalette('Copper Aquamarine',['#DCAA89','#30525C','#635627','#D6794D','#4C848D'],['Beige','Grey','Pink']);
addPalette('Coral and Cream',['#FB7185','#FECACA','#10B981','#FFFBEB','#991B1B'],['Green','Red','Pink']);
addPalette('Cosmic',['#000000','#1A1A2E','#16213E','#0F3460','#533483'],['Black','Purple']);
addPalette('Cotton Candy',['#E0AFFF','#C4D6FF','#DD68E3','#8866DE'],['Blue','Pink','Purple']);
addPalette('Dark Horse',['#FEDA6A','#D4D4DC','#393F4D','#1D1E22'],['Black','Grey','Yellow']);
addPalette('Deep Sand',['#E1B382','#C89666','#2D545E','#12343B'],['Beige','Grey']);
addPalette('Download',['#000000','#363636','#1DB954'],['Black','Green']);
addPalette('Driftwood Pearl',['#BC7B6F','#5A322A','#CCCDC7','#E4A499','#7A8A9E'],['Grey','Pink']);
addPalette('Earthy and Serene',['#3E362E','#865D36','#93785B','#AC8968','#A69080'],['Beige']);
addPalette('Easter Egg',['#8BF0BA','#0E0FED','#94F0F1','#F2B1D8','#FFDC6A'],['Blue','Pink','Yellow']);
addPalette('Easy Warm',['#CAE4DB','#DCAE1D','#00303F','#7A9D96'],['Grey','Yellow']);
addPalette('Elegant',['#EDC7B7','#EEE2DC','#BAB2B5','#123C69','#AC3B61'],['Blue','Grey','Pink']);
addPalette('Emerald Lake',['#248C54','#89618E','#95DCE4'],['Blue','Green','Purple']);
addPalette('Entertainment',['#EB1736','#5252D4','#7575DD','#781A44'],['Blue','Purple','Red']);
addPalette('Environment',['#9BC400','#8076A3','#F9C5BD','#7C677F'],['Green','Pink','Purple']);
addPalette('Exquisite',['#6B21A8','#A855F7','#EAB308','#FAF5FF','#581C87'],['Purple','White','Yellow']);
addPalette('Extra Snug',['#3A4660','#C9AF98','#ED8A63','#845007'],['Beige','Grey']);
addPalette('Fantasy Evening',['#2323FF','#24AEFF','#C04AFF','#7E3DFF'],['Blue','Purple']);
addPalette('Fireside',['#E76814','#D8D4BC','#891A10','#DC8236','#B8210F','#714236'],['Beige','Grey','Orange','Red']);
addPalette('Forest',['#15803D','#22C55E','#F59E0B','#F0FDF4','#14532D'],['Green','White','Yellow']);
addPalette('Freshly Squeezed',['#FFBF00','#F2EF7C','#FFE642','#FF7900'],['Orange','Yellow']);
addPalette('Futuristic Litebright',['#BCCBDE','#C2DDE6','#431C5D','#E05915','#CDD422'],['Orange','Purple','Yellow']);
addPalette(`Gentleman's Club`,['#D8AB4E','#B48C36','#040404'],['Beige','Black']);
addPalette('Global Charity',['#F43A09','#FFB766','#C2EDDA','#68D388'],['Green','Orange']);
addPalette('Goldifox',['#A39274','#DFD8C8','#252523'],['Beige','Grey']);
addPalette('Gradient Pop',['#141414','#273DB4','#C50900','#F95CA4','#ED7845'],['Black','Blue','Orange','Pink','Red']);
addPalette('Hibiscus Aura',['#EA44D4','#DD3027','#733D6F','#5848B3'],['Pink','Purple','Red']);
addPalette('High Contrast',['#B11A21','#E0474C','#7ACFD6','#F1F0EE'],['Blue','Red','White']);
addPalette('Honey Opal Sunset',['#ECB914','#F6D579','#4F3D35','#938108','#CBB8A0'],['Beige','Yellow']);
addPalette('Inkwash',['#252525','#CFCFCF','#7D7D7D','#545454'],['Black','Grey']);
addPalette('Innovation',['#272727','#747474','#FF652F','#FFE400','#14A76C'],['Green','Grey','Orange','Yellow']);
addPalette('Inspired',['#101357','#FEA49F','#FBAF08','#00A0A0','#007F4F'],['Blue','Green','Pink','Yellow']);
addPalette('Intellectual',['#6ED3CF','#9068BE','#E1E8F0','#E62739'],['Blue','Purple','Red']);
addPalette('Intense',['#BEEF00','#FF0028','#657A00','#1400C6'],['Blue','Green','Red']);
addPalette('Inviting',['#E7717D','#C2CAD0','#C2B9B0','#7E685A','#AFD275'],['Green','Pink','Grey']);
addPalette('Ivy League',['#0A2947','#F3E4C9','#D3D4C0','#8B5E3C'],['Beige','Grey']);
addPalette('Jade Morning',['#7B9669','#E6E6E6','#40403B','#6C8480','#BAC8B1'],['Green','Grey','White']);
addPalette('Lapis Velvet',['#213885','#ECDFD2','#5F3475','#081849','#893172'],['Blue','Purple']);
addPalette('Leather Sandals',['#000000','#233D4D','#FE7F2D','#EAECF0'],['Black','Grey','Orange']);
addPalette('Lifestyle',['#F5F5F5','#E0E0E0','#8B7355','#FFFFFF','#424242'],['Beige','Grey','White'])
addPalette('Lively',['#5D001E','#E3E2DF','#E3AFBC','#9A1750','#EE4C7C'],['Pink','Red','White']);
addPalette('Luxury',['#CA8A04','#FDE047','#000000','#FFFBEB','#78350F'],['Beige','Black','White','Yellow']);
addPalette('Manual',['#C53211','#2E3830','#E6DBC9'],['Grey','Orange']);
addPalette('Metallic',['#0F2862','#9E363A','#091F36','#4F5F76'],['Blue','Grey','Red']);
addPalette('Midnight',['#1E1B4B','#4C1D95','#F59E0B','#312E81'],['Purple','Yellow']);
addPalette('Minimal',['#000000','#404040','#3B82F6','#FAFAFA','#171717'],['Black','Blue','Grey','White']);
addPalette('Mode',['#000000','#2C1A1A','#583434','#854E4E','#B26868'],['Black','Pink']);
addPalette('Moon Dust',['#D3D3FF','#CEB5FF','#8EC1DE','#80A8FF'],['Blue','Grey']);
addPalette('Museum',['#D79922','#EFE2BA','#F13C20','#4056A1','#C5CBE3'],['Beige','Orange','Blue']);
addPalette('Minty Fresh',['#4CB69F','#F5F5F5','#201D3A'],['Green','White']);
addPalette('Nautical',['#0E7490','#06B6D4','#F59E0B','#ECFEFF','#164E63'],['Blue','Yellow']);
addPalette('Neutral Elegance',['#FFDBBB','#CCBEB1','#997E67','#664930'],['Beige','Grey','Pink']);
addPalette('Passion',['#60241E','#95271D','#B34A44','#E77B49'],['Red','Pink']);
addPalette('Pastel',['#DEA6AF','#8CBCD0','#E6DBC9'],['Blue','Pink']);
addPalette('Photographic Memory',['#3D7C47','#0986B8','#76C1D4','#F7F7F7'],['Blue','Green','White']);
addPalette('Playful',['#4ABDAC','#FC4A1A','#F7B733','#DFDCE3'],['Blue','Grey','Orange','Yellow']);
addPalette('Precious Metals',['#BD8C7D','#D1BFA7','#8E8E90','#49494B'],['Beige','Grey']);
addPalette('Punch',['#393939','#FF5A09','#EC7F37','#BE4F0C'],['Grey','Orange']);
addPalette('Purple 90s',['#A0D2EB','#E5EAF5','#D0BDF4','#8458B3','#494D5F'],['Blue','Purple']);
addPalette('Retro Gaming',['#8B5CF6','#EC4899','#06B6D4','#1E1B4B','#F5F3FF'],['Blue','Pink','Purple']);
addPalette('Rose Quartz',['#64242F','#B44446','#FC8F8F','#DFD9D8'],['Grey','Red','Pink']);
addPalette('Royal Glimmer',['#AD7C4B','#293C7C','#812B4A','#C7984F','#024944'],['Beige','Blue','Green','Purple']);
addPalette('Royal Palace',['#345C32','#9CAC54','#A7F0DD','#97CD97'],['Blue','Green']);
addPalette('Sapphire',['#0474C4','#5379AE','#2C444C','#A8C4EC','#064575','#262B40'],['Blue']);
addPalette('Scenery',['#FFDE22','#FF414E','#FF8928','#FFFFFF'],['Orange','White','Yellow']);
addPalette('Skilled Trade',['#244855','#E64833','#874F41','#90AAED','#FBE9D0'],['Beige','Blue','Orange','Grey']);
addPalette('Sleepy Green',['#7DCE94','#3D3D3F','#F6F5F3','#F9F8FD'],['Green','Grey','White']);
addPalette('Sorbet',['#FF6A1B','#FFDA62','#FFAE56','#F5788B'],['Orange','Pink','Yellow']);
addPalette('Striking',['#0B0C10','#1F2833','#C5C6C7','#66FCF1','#45A29E'],['Black','Blue','Grey']);
addPalette('Subtle',['#ACB7AE','#82716E','#E4DECD','#C2B490'],['Beige','Grey']);
addPalette('Swiss',['#EF4444','#1F2937','#F9FAFB','#000000'],['Black','Red','White']);
addPalette('Tropical Heat',['#00CEC8','#FCEFC3','#FF9C5F','#EB4203'],['Beige','Blue','Orange']);
addPalette('Tropical Vibe',['#10B981','#F59E0B','#EC4899','#ECFDF5','#065F46'],['Green','Pink','White','Yellow']);
addPalette('Trustbuilding',['#368CBF','#7EBC59','#33363B','#EAEAEA'],['Blue','Green','Grey','White']);
addPalette('Trustworthy',['#1561AD','#1C77AC','#1DBAB4','#FC5226'],['Blue','Orange']);
addPalette('Under the Sea',['#000000','#001F3F','#003366','#004C99','#0066CC'],['Black','Blue']);
addPalette('Urban Slate',['#E9E6E7','#5E5653','#6B7C98','#7B7F8A','#AB878C'],['Grey','White']);
addPalette('Valentine',['#FFF5D7','#FF5E6C','#FEB300','#FFAAAB'],['Pink','Yellow']);
addPalette('Vibrant',['#E43D12','#D6536D','#FFA2B6','#EFB11D','#EBE9E1'],['Orange','Pink','Yellow']);
addPalette('Warm Cranberry',['#810B38','#F1E2D1','#DCC3AA','#541A1A'],['Beige','Red']);
addPalette('Wonderful Weekend',['#5003c0','#AB03A9','#FF467A','#FFD51E'],['Pink','Purple','Yellow']);
addPalette('White Space',['#FCEED1','#7D3CFF','#FFFFFF','#F2D53C','#C80E13'],['Red','Purple','White','Yellow']);
addPalette('Woodland',['#9F7560','#9E9E9E','#525034','#AAD31E','#D4AF9F'],['Beige','Green','Grey']);

// statistics();