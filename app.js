const canvas = document.getElementById('canvas');
if (!canvas.getContext) {
    throw 'Error while getting canvas occured';
}

const ctx = canvas.getContext('2d');

class Shape {
    constructor(x, y, w, h, c){
    this.pos = { x, y };
    this.width = w;
    this.height = h;
    this.color = c;
    }
    print(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    }
}

function createShapes(numOfFigures, transparency){
    let shapes = [];
    Math.random();
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);//[min, max)
    }

    let randNums = [];
    for (let i = 0; i < numOfFigures*10; ++i)
        randNums[i] = getRandomInt(10, 255);
    
    for (let i = 0; i < numOfFigures; ++i){
        let color = "rgba(0,0," + randNums[i*10] + "," + randNums[i*10+5]/transparency + ")";
        shapes.push(new Shape(randNums[i*10+1], randNums[i*10+2], randNums[i*10+3], randNums[i*10+4], color));//'rgba(0,0,255,0.5)')
    }
    return shapes;
}

function showActionInfo(elemName, message, showingTime){
    const log = document.getElementById(elemName);
    log.textContent = message;

    setTimeout(function() {
        log.textContent = ``;
    }, showingTime);
}

function exportCanvasAsPNG(id, fileName) {
    var canvasElement = document.getElementById(id);
    var MIME_TYPE = "image/png";

    var imgURL = canvasElement.toDataURL(MIME_TYPE);
    var dlLink = document.createElement('a');
    dlLink.download = fileName;
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);

    showActionInfo('logSave', 'Saved', 3000);
}

function clearCanvas(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function getUpdatesFromForm(){
    function logSubmit(event) {
        showActionInfo('log', `Form submitted`, 800);
        event.preventDefault();
        clearCanvas();
        draw({ numOfFigures: event.target.elements.numOfFigures.value, transparency: event.target.elements.transparency.value} );
    }

    const form = document.getElementById("generatorID");
    form.addEventListener('submit', logSubmit);

    return { numOfFigures: form.numOfFigures.value, transparency: form.transparency.value}
}

function drawList(shapes){
    shapes.forEach( shape => shape.print(ctx) );
}

function draw(properties){
    let shapes = createShapes(properties.numOfFigures, properties.transparency);
    drawList(shapes);
}

function createScene() {
    let properties = getUpdatesFromForm();
    draw(properties);
}

createScene();
