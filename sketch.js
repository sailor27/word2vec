let data;
let position; //random vector starting position
let vectors;

preload = () => {
    data = loadJSON('xkcd.json');
}

function setup(){
    position = createVector(random(255), random(255), random(255));
    vectors = getVectors(data);
    noCanvas();
}

function draw() {
    let colorName;
    colorName = findNearest(position, vectors);
    createDiv(colorName); //put div on the page for the color name
    let r = p5.Vector.random3D();
    position.add(r.mult(50)); //move by increasing the value of the position bector
    frameRate(1);
}

getVectors = (data) => {
    let vectors = {};
    let colors = data.colors;
    colors.forEach((c) => {
        let key =  c.color;
        let rgb = color(c.hex);
        //create a vector using each hex value's r, g, and b values
        vectors[key] = createVector(red(rgb), green(rgb), blue(rgb))
    });
    return vectors;
}

findNearest = (position, vectors) => {
    let keys = Object.keys(vectors);

    keys.sort((a,b) => {
        let d1 = distance(position, vectors[a]);
        let d2 = distance(position, vectors[b]);
        // console.log(`d1: ${d1}, d2: ${d2}`)
        return d1 - d2;
    });
    return keys[0];
};

distance = (v1, v2) => {
    return p5.Vector.dist(v1, v2);
    //calculate the euclidian distance between position and each vector from the colors json
};

