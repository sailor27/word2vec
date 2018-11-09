let data;
preload = () => {
    data = loadJSON('xkcd.json');
}

setup = () => {
    noCanvas();
    processData();
}

processData = () => {
    let vectors = {};
    let hexes = data.colors;
    hexes.map((hex) => {
        console.log(color(hex.color));
    });

}


