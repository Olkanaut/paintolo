import React, { FC, useEffect, useRef } from "react";

interface ParamsFormProps {
  valObjNum: number;
  valTransp: number;
}

interface XY {
  x: number;
  y: number;
}

class Shape {
  pos: XY;
  dims: XY;
  color: string;

  constructor(x: number, y: number, w: number, h: number, c: string) {
    this.pos = { x: x, y: y };
    this.dims = { x: w, y: h };
    this.color = c;
  }

  print(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos.x, this.pos.y, this.dims.x, this.dims.y);
  }
}

// class DrawingTools {
//   ctx: CanvasRenderingContext2D;

//   constructor(context: CanvasRenderingContext2D) {
//     this.ctx = context;
//   }

//   clearCanvas() {
//     this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
//   }

//   draw(props: ParamsFormProps) {
//     let shapes = createShapes(props.valObjNum, props.valTransp);
//     shapes.forEach((shape) => shape.print(ctx));
//     // drawList(this.ctx, shapes);
//   }
// }

function createShapes(numOfFigures: number, transparency: number) {
  let shapes: Shape[] = [];
  Math.random();
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //[min, max)
  }

  let randNums = [];
  for (let i = 0; i < numOfFigures * 10; ++i)
    randNums[i] = getRandomInt(10, 255);

  for (let i = 0; i < numOfFigures; ++i) {
    let color =
      "rgba(0,0," +
      randNums[i * 10] +
      "," +
      randNums[i * 10 + 5] / transparency +
      ")";
    shapes.push(
      new Shape(
        randNums[i * 10 + 1],
        randNums[i * 10 + 2],
        randNums[i * 10 + 3],
        randNums[i * 10 + 4],
        color
      )
    ); //'rgba(0,0,255,0.5)')
  }
  return shapes;
}

function drawList(ctx: CanvasRenderingContext2D, shapes: Shape[]) {
  shapes.forEach((shape) => shape.print(ctx));
}

function draw(ctx: CanvasRenderingContext2D, props: ParamsFormProps) {
  let shapes = createShapes(props.valObjNum, props.valTransp);
  drawList(ctx, shapes);
}

function createScene(ctx: CanvasRenderingContext2D, props: ParamsFormProps) {
  // let properties = getUpdatesFromForm();
  draw(ctx, props);
}

function clearCanvas(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

const Canvas: FC<ParamsFormProps> = (props) => {
  const ref = React.useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (ref.current) {
      const res = ref.current.getContext("2d");
      if (!res || !(res instanceof CanvasRenderingContext2D)) {
        throw new Error("error CanvasRenderingContext2D");
      }
      const ctx: CanvasRenderingContext2D = res;
    //   const tools = new DrawingTools(ctx);
      clearCanvas(ctx);
      draw(ctx, props);

      console.log("ctx:", ctx);
    }
  });

  return <canvas ref={ref} width="700" height="700"></canvas>;
};

export default Canvas;
