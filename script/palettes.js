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
        const navChoice = confirm(`Copied ${name} to clipboard. Move to Layout page?`);
        navChoice ? backClick.click() : null;
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

// BROWSE AND TEST COLOR SCHEMES
// ORANGE RED BLACK PURPLE


addPalette('Abstract',['#009FDD','#D8036F','#FFF20B','#000200'],['Black','Blue','Pink','Yellow']);
addPalette('Activate',['#BEEF00','#FF0028','#657A00','#1400C6'],['Blue','Green','Red']);
addPalette('Alpine Glow',['#FFFFFF','#F0FFF0','#98FB98','#00FA9A','#00FF7F'],['Green','White']);
addPalette('Always True',['#A25F3E','#67342C','#04181F','#103C4F','#4C8088'],['Beige','Blue']);
addPalette('Amethyst Haze',['#341C67','#472F5B','#DCCE40','#C4AEF4','#CCA4B4'],['Purple','Yellow']);
addPalette('Apricot',['#6B7A8F','#F7882F','#F7C331','#DCC7AA'],['Orange','Grey','Yellow']);
addPalette('Architect',['#952210','#c34729','#ECC8AF','#C18C5D','#373D42'],['Beige','Grey','Red']);
addPalette('Arctic Breeze',['#FFFFFF','#E0FFFF','#AFEEEE','#B0E0E6','#ADD8E6'],['Blue','White']);
addPalette('Attention',['#FFFFFF','#F2F5F7','#C9D3DC','#FFB347','#1E2A33'],['Grey','White','Yellow']);
addPalette('Autumn Harvest',['#B45309','#92400E','#EAB308','#FEF3C7','#451A03'],['Beige','Yellow']);
addPalette('Bakery',['#FDF4D2','#B0CDE6','#A290B7','#946D6D'],['Beige','Blue','Purple']);
addPalette('Banking and Finance',['#082F49','#0E7490','#22C55E','#BAE6FD','#F0FDFF'],['Blue','Green']);
addPalette('Black Rose',['#000000','#3B0A0A','#761515','#B12020','#EC2B2B'],['Black','Red']);
addPalette('Block Party',['#FBF579','#005995','#FA625F','#000000','#600473'],['Black','Blue','Pink','Purple','Yellow']);
addPalette('Blue Jeans',['#3D52A0','#7091E6','#8697C4','#ADBBDA','#EDE8F5'],['Blue','White']);
addPalette('Blush',['#FFFFFF','#FFF0F5','#FFB6C1','#FF69B4','#FF1493'],['Pink','White']);
addPalette('Bold Botanical',['#DEB71D','#02831E','#F03869','#FC8811'],['Green','Orange','Pink','Yellow']);
addPalette('Bright Beach',['#51E2F5','#9DF9EF','#EDF7F6','#FFA8B8','#A28089'],['Blue','Pink']);
addPalette('Bright Power',['#FF1D58','#F75990','#FFF685','#00DDFF','#0049B7'],['Blue','Pink','Yellow']);
addPalette('Brilliant Accents',['#CD5554','#91684A','#00C07F','#313D4B'],['Beige','Green']);
addPalette('Building Blocks',['#99CC00','#005BEF','#CC3333','#006600'],['Blue','Green','Red']);
addPalette('Burgers and Fries',['#92400E','#F59E0B','#DC2626','#FEF3C7','#44403C'],['Beige','Red','White','Yellow']);
addPalette('Calcite',['#DDDCDB','#FD7B41','#EDBF9B','#3C4044'],['Beige','Grey','Orange']);
addPalette('Calm Clinic',['#2F7FA3','#8FC3D9','#58B09C','#F6FAFC','#14303C'],['Blue','Green','White']);
addPalette('Candy Garden',['#66CC00','#CC3399','#43123C','#CCFF99'],['Green','Purple']);
addPalette('Candy Shop',['#EC4899','#8B5CF6','#FBBF24','#FDF4FF','#831843'],['Pink','Purple','White','Yellow']);
addPalette('Celestial',['#2323FF','#807D52','#FFBD24','#FFF224'],['Blue','Grey','Yellow']);
addPalette('Change the System',['#C68970','#E3ED38','#E47190','#5756A0','#FEC139'],['Green','Pink','Purple','Yellow']);
addPalette('Chroma Creep',['#0A0000','#E46707','#EEDE2B','#70B706','#6E0070'],['Black','Green','Orange','Purple','Yellow']);
addPalette('Circus',['#DA0C16','#FFA200','#4AE88C','#13D1FF','#2997FF'],['Blue','Green','Red','Yellow']);
addPalette('Classic',['#FF3A22','#C7AF6B','#A4893D','#628078'],['Beige','Orange']);
addPalette('Clay and Sea',['#C7522A','#E5C185','#FBF2C4','#74A892','#008585'],['Beige','Blue']);
addPalette('Cloudy Sky',['#FFFFFF','#F0F8FF','#B0E0E6','#87CEEB','#4682B4'],['Blue','White']);
addPalette('Coastal Breeze',['#BDDBE8','#2C8769','#00CC00','#6699CC'],['Blue','Green']);
addPalette('Cocoa Monday',['#742F14','#5A84AC','#5C3C2C','#C7AC9F','#FC9C44'],['Beige','Blue','Orange']);
addPalette('Cocoa Vanilla',['#421604','#952C05','#F25218','#FF9F5F','#FCEEE5'],['Beige','Orange','Red','White']);
addPalette('Cool and Collected',['#003135','#024950','#964734','#0FA4AF','#AFDDE5'],['Blue','Orange']);
addPalette('Copper Aquamarine',['#DCAA89','#30525C','#635627','#D6794D','#4C848D'],['Beige','Grey','Orange']);
addPalette('Coral and Cream',['#FB7185','#FECACA','#10B981','#FFFBEB','#991B1B'],['Green','Red','Pink']);
addPalette('Cosmic',['#000000','#1A1A2E','#16213E','#0F3460','#533483'],['Black','Purple']);
addPalette('Cotton Candy',['#E0AFFF','#C4D6FF','#DD68E3','#8866DE'],['Blue','Pink','Purple']);
addPalette('Couple of Hearts',['#E1CBB4','#E40A22','#A50318','#6B060E'],['Beige','Red']);
addPalette('Crystal Lake',['#FFFFFF','#E0FFFF','#00FFFF','#00CED1','#20B2AA'],['Blue','White']);
addPalette('Cupcake',['#FFF5D7','#FF5E6C','#FEB300','#FFAAAB'],['Pink','Yellow']);
addPalette('Dandelion',['#FFFFFF','#FFF5EE','#FFE4E1','#FFDEAD','#FFD700'],['Beige','White','Yellow']);
addPalette('Dark Horse',['#FEDA6A','#D4D4DC','#393F4D','#1D1E22'],['Black','Grey','Yellow']);
addPalette('Deep Sand',['#E1B382','#C89666','#2D545E','#12343B'],['Beige','Grey']);
addPalette('Download',['#000000','#363636','#1DB954'],['Black','Green']);
addPalette('Dreamscape',['#809BCE','#95B8D1','#B8E0D4','#D6EADF','#EAC4D5'],['Blue','Pink']);
addPalette('Driftwood Pearl',['#BC7B6F','#5A322A','#CCCDC7','#E4A499','#7A8A9E'],['Grey','Pink']);
addPalette('Dusk Sky',['#080C0E','#343E47','#724D4C','#D0684C','#E88444','#FCD995'],['Beige','Black','Grey']);
addPalette('Earthy and Serene',['#3E362E','#865D36','#93785B','#AC8968','#A69080'],['Beige']);
addPalette('Easter Egg',['#8BF0BA','#0E0FED','#94F0F1','#F2B1D8','#FFDC6A'],['Blue','Pink','Yellow']);
addPalette('Easy Warm',['#CAE4DB','#DCAE1D','#00303F','#7A9D96'],['Grey','Yellow']);
addPalette('Electric Canvas',['#000000','#DC09AF','#F58F00','#F7E308','#00A0F0'],['Black','Blue','Orange','Pink','Yellow']);
addPalette('Elegant',['#EDC7B7','#EEE2DC','#BAB2B5','#123C69','#AC3B61'],['Beige','Blue','Grey','Red']);
addPalette('Elements',['#18004D','#017903','#E5A01F','#B01166','#420000'],['Blue','Green','Pink','Red','Yellow']);
addPalette('Emerald Lake',['#248C54','#89618E','#95DCE4'],['Blue','Green','Purple']);
addPalette('Enchanted Forest',['#1C2A18','#6EEA8E','#826CF6','#006600'],['Green','Purple']);
addPalette('Entertainment',['#EB1736','#5252D4','#7575DD','#781A44'],['Blue','Purple','Red']);
addPalette('Environment',['#9BC400','#8076A3','#F9C5BD','#7C677F'],['Green','Pink','Purple']);
addPalette('Eucalyptus and Rose',['#275C42','#E1AAB0','#D0EEDF','#FBEFF5'],['Green','Pink']);
addPalette('Exquisite',['#6B21A8','#A855F7','#EAB308','#FAF5FF','#581C87'],['Purple','White','Yellow']);
addPalette('Extrasensory',['#4235D4','#CA0F94','#BA8AD4','#E7EBFF','#F7C2FB','#7475AC'],['Grey','Pink','Purple']);
addPalette('Extra Snug',['#3A4660','#C9AF98','#ED8A63','#845007'],['Beige','Grey','Orange']);
addPalette('Fantasy Evening',['#2323FF','#24AEFF','#C04AFF','#7E3DFF'],['Blue','Purple']);
addPalette('Festivities',['#870903','#E90C00','#F9DD9C','#418B24','#1A4734'],['Green','Red']);
addPalette('Fireside',['#E76814','#D8D4BC','#891A10','#DC8236','#B8210F','#714236'],['Beige','Grey','Orange','Red']);
addPalette('Forbidden',['#1A0A0E','#650304','#D71515','#33080B','#4C0507'],['Black','Red']);
addPalette('Forest',['#15803D','#22C55E','#F59E0B','#F0FDF4','#14532D'],['Green','White','Yellow']);
addPalette('Freshly Squeezed',['#FFBF00','#F2EF7C','#FFE642','#FF7900'],['Orange','Yellow']);
addPalette('Funky Music',['#595Fb5','#4DBD60','#FFD154','#EE475E','#5E1D6E'],['Blue','Green','Pink','Purple','Yellow']);
addPalette('Futuristic Litebright',['#BCCBDE','#C2DDE6','#431C5D','#E05915','#CDD422'],['Orange','Purple','Yellow']);
addPalette('Garden Bistro',['#99CC66','#254222','#ECE2B1','#CAE4C5'],['Beige','Green']);
addPalette(`Gentleman's Club`,['#D8AB4E','#B48C36','#040404'],['Beige','Black']);
addPalette('Global Charity',['#F43A09','#FFB766','#C2EDDA','#68D388'],['Green','Orange']);
addPalette('Glossy',['#D807BB','#EAEAEA','#E01267','#141414'],['Black','Pink','White']);
addPalette('Goldifox',['#A39274','#DFD8C8','#252523'],['Black','Grey']);
addPalette('Gradient Pop',['#141414','#273DB4','#C50900','#F95CA4','#ED7845'],['Black','Blue','Orange','Pink','Red']);
addPalette('Graffiti',['#80609F','#E66C8B','#F2E8F3','#E1D161','#F97B55','#0E0E0E'],['Black','Orange','Pink','Purple','White','Yellow']);
addPalette('Grand Brand',['#BA1010','#F00000','#FFE100','#FFC917','#EBA625'],['Red','Yellow']);
addPalette('Green Oasis',['#66CC99','#D3FEEA','#07301A','#339966'],['Green']);
addPalette('Gumball',['#08FA08','#0100F1','#FCFD01','#F803F6','#02F7F2','#ED0101'],['Blue','Green','Pink','Red','Yellow']);
addPalette('Heartbeat',['#32004F','#7323A8','#E154B9','#F31365','#C3122F'],['Pink','Purple','Red']);
addPalette('Hibiscus Aura',['#EA44D4','#DD3027','#733D6F','#5848B3'],['Pink','Purple','Red']);
addPalette('High Contrast',['#B11A21','#E0474C','#7ACFD6','#F1F0EE'],['Blue','Red','White']);
addPalette('Honey Opal Sunset',['#ECB914','#F6D579','#4F3D35','#938108','#CBB8A0'],['Green','Grey','Yellow']);
addPalette('Inkwash',['#252525','#CFCFCF','#7D7D7D','#545454'],['Black','Grey']);
addPalette('Innocence',['#FFFAD3','#FFDBB0','#FFCCB8','#FFB1B1'],['Beige','Pink']);
addPalette('Innovation',['#272727','#747474','#FF652F','#FFE400','#14A76C'],['Green','Grey','Orange','Yellow']);
addPalette('Inspired',['#101357','#FEA49F','#FBAF08','#00A0A0','#007F4F'],['Blue','Green','Pink','Yellow']);
addPalette('Intellectual',['#6ED3CF','#9068BE','#E1E8F0','#E62739'],['Blue','Purple','Red']);
addPalette('Intense',['#FF0000','#C80018','#1D1E27','#4B4E53','#EDF2F4'],['Black','Grey','Red','White']);
addPalette('Inviting',['#E7717D','#C2CAD0','#C2B9B0','#7E685A','#AFD275'],['Green','Pink','Grey']);
addPalette('Ivory Elegance',['#FFFFF0','#FAFAD2','#FFFACD','#FFF8CD','#F5DE8B'],['Beige','White']);
addPalette('Ivy League',['#0A2947','#F3E4C9','#D3D4C0','#8B5E3C'],['Beige','Grey']);
addPalette('Jade Morning',['#7B9669','#E6E6E6','#40403B','#6C8480','#BAC8B1'],['Green','Grey','White']);
addPalette('Jelly Donut',['#FBF5A7','#FF97D0','#FF62BB','#B331F1'],['Beige','Pink','Purple']);
addPalette('Jewel of the Jungle',['#FF9900','#00CC99','#597931','#003300'],['Green','Yellow']);
addPalette('Lapis Velvet',['#213885','#ECDFD2','#5F3475','#081849','#893172'],['Blue','Purple']);
addPalette('Lavender Blanket',['#FDF4F5','#E8A0BF','#BA90C6','#C0DBEA'],['Blue','Purple']);
addPalette('Leather Sandals',['#000000','#233D4D','#FE7F2D','#EAECF0'],['Black','Grey','Orange']);
addPalette('Lifestyle',['#F5F5F5','#E0E0E0','#8B7355','#FFFFFF','#424242'],['Beige','Grey','White']);
addPalette('Light Elegance',['#000000','#FFB3D9','#FFFFFF','#FFE5E5','#FFCC99'],['Beige','Black','Pink','White']);
addPalette('Light in the Dark',['#1B1B1E','#713D3B','#D55B07','#F3C545','#F9F9F9','#567E98'],['Black','Grey','Orange','White','Yellow']);
addPalette('Lively',['#5D001E','#E3E2DF','#E3AFBC','#9A1750','#EE4C7C'],['Pink','Red','White']);
addPalette('Love Letter',['#92003A','#F62477','#FFADEE','#FFE185'],['Pink','Yellow']);
addPalette('Luxury',['#CA8A04','#FDE047','#000000','#FFFBEB','#78350F'],['Beige','Black','White','Yellow']);
addPalette('Majesty',['#F5AD18','#9E1C60','#811844','#561530'],['Purple','Yellow']);
addPalette('Manual',['#C53211','#2E3830','#E6DBC9'],['Grey','Orange']);
addPalette('Marble Rose',['#FFFDFC','#F3EEEE','#E3CFD3','#B07A86','#3A2A2D'],['Pink','White']);
addPalette('Matcha Macaron',['#02824F','#99CC99','#B22616','#EBE7E9'],['Green','Grey','Red']);
addPalette('Matte Vintage',['#F7F6E5','#76D2DB','#DA4848','#36064D'],['Blue','Grey','Pink','Purple']);
addPalette('Mermaid Lagoon',['#28BCA9','#FB4673','#99CCCC','#223634'],['Blue','Green','Pink']);
addPalette('Metallic',['#0F2862','#9E363A','#091F36','#4F5F76'],['Blue','Grey','Red']);
addPalette('Midnight',['#1E1B4B','#4C1D95','#F59E0B','#312E81'],['Purple','Yellow']);
addPalette('Midwest Bloom',['#FFEAD3','#BFE7EA','#E89B5B','#D46743'],['Beige','Blue','Pink']);
addPalette('Milk Lavender',['#FFFEFE','#F5F0FF','#D9CFF5','#9A84D8','#2A2141'],['Purple','White']);
addPalette('Minimalast',['#000000','#404040','#3B82F6','#FAFAFA','#171717'],['Black','Blue','Grey','White']);
addPalette('Minimal Moonlight',['#FFFFFF','#F8F8FF','#D3D3D3','#A9A9A9','#696969'],['Grey','White']);
addPalette('Mode',['#000000','#2C1A1A','#583434','#854E4E','#B26868'],['Beige','Black']);
addPalette('Moody Sunset',['#003F5C','#58508D','#BC5090','#FF6361','#FFA600'],['Pink','Purple','Yellow']);
addPalette('Moon Dust',['#D3D3FF','#CEB5FF','#8EC1DE','#80A8FF'],['Blue','Purple']);
addPalette('Morning Mist',['#FFFFFF','#F5FFFA','#E0FFFF','#AFEEEE','#7FFFD4'],['Blue','White']);
addPalette('Museum',['#D79922','#EFE2BA','#F13C20','#4056A1','#C5CBE3'],['Beige','Orange','Blue']);
addPalette('Minty Fresh',['#4CB69F','#F5F5F5','#201D3A'],['Green','White']);
addPalette('Natural Neutrals',['#999933','#CCCC99','#996633','#000000'],['Beige','Green','Black']);
addPalette('Nautical',['#0E7490','#06B6D4','#F59E0B','#ECFEFF','#164E63'],['Blue','Yellow']);
addPalette('Neon Terminal',['#00C2A8','#4361EE','#F72585','#0D1117','#E6EDF3'],['Black','Blue','Grey','Green','Pink']);
addPalette('Neutral Elegance',['#FFDBBB','#CCBEB1','#997E67','#664930'],['Beige','Grey']);
addPalette('Olive Course',['#606C38','#A3B18A','#BC6C25','#FEFAE0','#283618'],['Beige','Green','White']);
addPalette('Paperback',['#FCFBF7','#F0EFE8','#CFCBBD','#6A6A66','#1B1B1A'],['Black','Grey','White']);
addPalette('Passion',['#60241E','#95271D','#B34A44','#E77B49'],['Orange','Red']);
addPalette('Pastel',['#DEA6AF','#8CBCD0','#E6DBC9'],['Blue','Pink']);
addPalette('Pearl Essence',['#FFFFFF','#F5F5F5','#E0E0E0','#CCCCCC','#B3B3B3'],['Grey','White']);
addPalette('Pearl Sage',['#FFFEFC','#E9EFE9','#C6D6CC','#6F8A79','#243028'],['Green','White']);
addPalette('Photographic Memory',['#3D7C47','#0986B8','#76C1D4','#F7F7F7'],['Blue','Green','White']);
addPalette('Pineapple Donut',['#FBD23F','#558C49','#F6F3D3','#82DDD6'],['Blue','Green','White','Yellow']);
addPalette('Playful',['#4ABDAC','#FC4A1A','#F7B733','#DFDCE3'],['Blue','Grey','Orange','Yellow']);
addPalette('Plum Serenade',['#660E60','#893F71','#AC6F82','#CFA093','#F3D0A4'],['Pink','Purple']);
addPalette('Porcelain',['#FDFEFE','#E8F1F8','#B7D3E8','#4B87B3','#1B2A38'],['Blue','White']);
addPalette('Possibility',['#6B3F69','#8D5F8C','#A376A2','#DDC3C3'],['Purple']);
addPalette('Precious Metals',['#BD8C7D','#D1BFA7','#8E8E90','#49494B'],['Beige','Grey']);
addPalette('Primary',['#DC2504','#F5F5F5','#F4E406','#040404','#0671E0'],['Blue','Black','Red','White','Yellow']);
addPalette('Princess',['#ED5757','#F77979','#F09393','#F2B1B1','#F3CFCE'],['Pink']);
addPalette('Prized Possesion',['#6E026F','#ABDADC','#F1E6C9','#FA891A'],['Beige','Blue','Orange','Purple']);
addPalette('Punch',['#393939','#FF5A09','#EC7F37','#BE4F0C'],['Grey','Orange']);
addPalette('Purple Clouds',['#CAC7FF','#D7CDFE','#E4D3FC','#F1DAFB','#FEE0F9'],['Pink','Purple']);
addPalette('Purple 90s',['#A0D2EB','#E5EAF5','#D0BDF4','#8458B3','#494D5F'],['Blue','Purple']);
addPalette('Raven',['#0F0F0F','#545454','#B4B1B1','#8A6B94','#350B42'],['Black','Grey','Purple']);
addPalette('Red Alert',['#050505','#8C0000','#FAF3CD','#FFC917','#CD8417'],['Black','Red','White','Yellow']);
addPalette('Red Velvet',['#D60032','#FF3D5A','#FF7092','#000000','#7A7A7A'],['Black','Grey','Pink','Red']);
addPalette('Retro Gaming',['#8B5CF6','#EC4899','#06B6D4','#1E1B4B','#F5F3FF'],['Blue','Pink','Purple']);
addPalette('Reverie',['#62109F','#DC0E0E','#FE6244','#FFDEB9'],['Pink','Purple','Red']);
addPalette('Rich Wine',['#B11226','#921C2F','#732537','#983257','#BD3E77'],['Purple','Red']);
addPalette('Rose Quartz',['#64242F','#B44446','#FC8F8F','#DFD9D8'],['Pink','White']);
addPalette('Rosewater Invite',['#B8496B','#E8A2B8','#7D9F85','#FDF5F7','#43222E'],['Black','Green','Pink','White']);
addPalette('Rosewood',['#650A0B','#9A0101','#A9A6A6','#5B595B','#1F1515'],['Black','Grey','Red']);
addPalette('Royal Glimmer',['#AD7C4B','#293C7C','#812B4A','#C7984F','#024944'],['Beige','Blue','Green','Red']);
addPalette('Royal Palace',['#345C32','#9CAC54','#A7F0DD','#97CD97'],['Blue','Green']);
addPalette('Rustic',['#8C262C','#5D2207','#E6CDB5','#44444B','#CDCBC9'],['Beige','Grey','Red']);
addPalette('Sage and Spice',['#C1E899','#9A6735','#E6F0DC','#55883B'],['Beige','Green','Grey']);
addPalette('Sapphire',['#0474C4','#5379AE','#2C444C','#A8C4EC','#064575','#262B40'],['Blue']);
addPalette('Scenery',['#FFDE22','#FF414E','#FF8928','#FFFFFF'],['Orange','White','Yellow']);
addPalette('Signature',['#333D6D','#723EC3','#FFCF95','#FFF0D9'],['Beige','Purple']);
addPalette('Skilled Trade',['#244855','#E64833','#874F41','#90AAED','#FBE9D0'],['Beige','Blue','Orange','Grey']);
addPalette('Sleepy Green',['#7DCE94','#3D3D3F','#F6F5F3','#F9F8FD'],['Green','Grey','White']);
addPalette('Snowy Dawn',['#FFFFFF','#F0F8FF','#E6E6FA','#D8BFD8','#DDA0DD'],['Grey','Pink','White']);
addPalette('Soft Contrast',['#D0E7E7','#292929','#E3A0A0','#FFE6C7','#000000'],['Black','Blue','Pink']);
addPalette('Sorbet',['#FF6A1B','#FFDA62','#FFAE56','#F5788B'],['Orange','Pink','Yellow']);
addPalette('Spearmint',['#FFFFFF','#F0FFF0','#98FB98','#90EE90','#8FBC8F'],['Green','White']);
addPalette('Star Baby',['#B053B0','#523C91','#1E99B2','#FCC962','#FFEB82'],['Blue','Purple','Yellow']);
addPalette('Stimulating Citrus',['#FFBA08','#FF8104','#FF4700','#FA2400','#F50000'],['Orange','Red','Yellow']);
addPalette('Striking',['#0B0C10','#1F2833','#C5C6C7','#66FCF1','#45A29E'],['Black','Blue','Grey']);
addPalette('Subtle',['#ACB7AE','#82716E','#E4DECD','#C2B490'],['Beige','Grey']);
addPalette('Super Hero',['#CB1111','#F32727','#CAD5ED','#3B75E9','#2832C4'],['Blue','Red']);
addPalette('Sunset',['#5003C0','#AB03A9','#FF467A','#FFD51E'],['Pink','Purple','Yellow']);
addPalette('Sweetest Pie',['#FF6082','#FFE4F6','#B26CFF','#705EFF'],['Beige','Pink','Purple']);
addPalette('Swiss',['#EF4444','#1F2937','#F9FAFB','#000000'],['Black','Red','White']);
addPalette('Terracotta Patio',['#C65D3B','#E0A487','#5B7553','#FDF6F0','#3C2A21'],['Beige','Green','Pink','White']);
addPalette('Toxic Voltage',['#4100C2','#00E6FB','#C0FF38','#EE1111','#000000'],['Black','Blue','Red','Yellow']);
addPalette('Translucent',['#1A05A2','#8F0177','#DE1A58','#F67D31'],['Blue','Orange','Pink','Purple']);
addPalette('Tropical Heat',['#00CEC8','#FCEFC3','#FF9C5F','#EB4203'],['Blue','Orange']);
addPalette('Tropical Punch',['#FD358A','#027D27','#CC3333','#FD358A'],['Green','Pink','Red']);
addPalette('Tropical Vibe',['#10B981','#F59E0B','#EC4899','#ECFDF5','#065F46'],['Green','Pink','White','Yellow']);
addPalette('Trustbuilding',['#368CBF','#7EBC59','#33363B','#EAEAEA'],['Blue','Green','Grey','White']);
addPalette('Trustworthy',['#1561AD','#1C77AC','#1DBAB4','#FC5226'],['Blue','Orange']);
addPalette('Tuscan Sunset',['#B9B26C','#576D2C','#CC6633','#E78169'],['Beige','Green','Pink']);
addPalette('Under the Sea',['#000000','#001F3F','#003366','#004C99','#0066CC'],['Black','Blue']);
addPalette('Under the Sun',['#FF9D50','#FFF9D8','#1DCED8','#55E07E'],['Beige','Blue','Green']);
addPalette('Urban Slate',['#E9E6E7','#5E5653','#6B7C98','#7B7F8A','#AB878C'],['Grey','White']);
addPalette('Valentine',['#FF0022','#FF3046','#FE5F6A','#FE8F8E','#FDBEB2'],['Pink','Red']);
addPalette('Vanilla Cream',['#FFFFFF','#FFF8E7','#FFE4B5','#FFDA89','#FFEFD5'],['Beige','White']);
addPalette('Vibrant',['#E43D12','#D6536D','#FFA2B6','#EFB11D','#EBE9E1'],['Orange','Pink','Yellow']);
addPalette('Warm Approach',['#E8162E','#AD1920','#711C11','#3F2311','#1B1A0A'],['Black','Red']);
addPalette('Warm Cranberry',['#810B38','#F1E2D1','#DCC3AA','#541A1A'],['Beige','Red']);
addPalette('Wedding Invitation',['#FFFDFB','#F7E9EA','#E9C7CF','#B57A86','#3A2A2F'],['Black','Pink','White']);
addPalette('White Space',['#FCEED1','#7D3CFF','#FFFFFF','#F2D53C','#C80E13'],['Red','Purple','White','Yellow']);
addPalette('Wickedly Vibrant',['#DD1C5C','#771E43','#12050B','#0E2062','#FFCE0F'],['Black','Blue','Pink','Yellow']);
addPalette('Woodland',['#9F7560','#9E9E9E','#525034','#AAD31E','#D4AF9F'],['Beige','Green','Grey']);

statistics();