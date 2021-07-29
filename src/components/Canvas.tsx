import React, {
  FC,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";

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

  createShapes(numOfFigures: number, transparency: number) {
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
      this.shapes.push(
        new Shape(
          randNums[i * 10 + 1],
          randNums[i * 10 + 2],
          randNums[i * 10 + 3],
          randNums[i * 10 + 4],
          color
        )
      ); //'rgba(0,0,255,0.5)')
    }
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  draw(props: ParamsFormProps) {
    this.createShapes(props.valObjNum, props.valTransp);
    this.shapes.forEach((shape) => shape.print(this.ctx));
  }
}

function saveImageAsPNG(canvas: HTMLCanvasElement) {
  const elemId: string = "mycanvas";
  const fileName = "gen01";
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

const Canvas = forwardRef<{ drawImage: Function }, ParamsFormProps>(
  (props, forwardedRef) => {
    const ref = React.useRef<HTMLCanvasElement>(null);
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
      if (ref.current !== null) {
        setCtx(ref.current.getContext("2d"));
      }
    }, [ref.current]);

    useImperativeHandle(forwardedRef, () => ({
      drawImage: () => {
        if (ctx) return saveImageAsPNG(ctx?.canvas);
      },
    }));

    useEffect(() => {
      if (ref.current) {
        const res = ref.current.getContext("2d");
        if (!res || !(res instanceof CanvasRenderingContext2D)) {
          throw new Error("error with canvas rendering");
        }
        const ctx: CanvasRenderingContext2D = res;
        const drawingTools = new DrawingTools(ref, ctx); //
        drawingTools.clearCanvas();
        drawingTools.draw(props);
      }
    });

    return <canvas ref={ref} width="700" height="700"></canvas>;
  }
);

export default Canvas;
