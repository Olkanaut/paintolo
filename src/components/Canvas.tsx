import React, {
  useEffect,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";

interface ParamsFormProps {
  numberOfFigures: number;
  transparency: number;
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

  setColor(newColor: string) {
    this.color = newColor;
  }
}

class DrawingTools {
  ref: React.RefObject<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  shapes: Shape[] = [];

  constructor(
    ref: React.RefObject<HTMLCanvasElement>,
    context: CanvasRenderingContext2D
  ) {
    this.ref = ref;
    this.ctx = context;
    this.shapes = [];
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //[min, max)
  }

  getRandomColor(transparency: number) {
    Math.random();
    let color =
      "rgba(0,0," +
      this.getRandomInt(10, 255) +
      "," +
      this.getRandomInt(10, 255) / transparency / 20 +
      ")";
    return color;
  }

  createShapes(numOfFigures: number, transparency: number) {
    Math.random();

    let randNums = [];
    for (let i = 0; i < numOfFigures * 4; ++i)
      randNums[i] = this.getRandomInt(10, 255);

    for (let i = 0; i < numOfFigures; ++i) {
      this.shapes.push(
        new Shape(
          randNums[i * 4],
          randNums[i * 4 + 1],
          randNums[i * 4 + 2],
          randNums[i * 4 + 3],
          this.getRandomColor(transparency)
        )
      );
    }
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  drawList() {
    this.shapes.forEach((shape) => shape.print(this.ctx));
  }

  draw(props: ParamsFormProps) {
    this.createShapes(props.numberOfFigures, props.transparency);
    this.drawList();
  }

  updateColors(transparency: number) {
    console.log("sh", this.shapes);
    console.log("sh[0]", this.shapes[0]);

    this.shapes.forEach((shape) =>
      shape.setColor(this.getRandomColor(transparency))
    );
  }
}

function saveImageAsPNG(canvas: HTMLCanvasElement) {
  const fileName = "gen";
  const canvasElement = canvas;
  if (!canvasElement) return;
  const MIME_TYPE = "image/png";
  const imgURL = canvasElement.toDataURL(MIME_TYPE);
  const dlLink = document.createElement("a");
  dlLink.download = fileName;
  dlLink.href = imgURL;
  dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(
    ":"
  );
  document.body.appendChild(dlLink);
  dlLink.click();
  document.body.removeChild(dlLink);
}

const Canvas = forwardRef<
  { saveImage: Function; changeSeed: Function },
  ParamsFormProps
>((props, forwardedRef) => {
  const ref = React.useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  let drawingTools: DrawingTools;
  if (ctx) {
    drawingTools = new DrawingTools(ref, ctx);
  }

  useEffect(() => {
    if (ref.current !== null) {
      setCtx(ref.current.getContext("2d"));
    }
  }, [ctx]);

  useImperativeHandle(forwardedRef, () => ({
    saveImage: () => {
      if (ctx) return saveImageAsPNG(ctx.canvas);
    },

    changeSeed: () => {
      if (ctx) {
        drawingTools.updateColors(props.transparency);
        drawingTools.clearCanvas();
        drawingTools.drawList();
      }
    },
  }));

  useEffect(() => {
    if (ctx) {
      drawingTools.clearCanvas();
      drawingTools.draw(props);
    }
  });
  return <canvas ref={ref} width="510" height="510"></canvas>;
});

export default Canvas;
