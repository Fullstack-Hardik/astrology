import { useEffect, useId, useMemo, useRef, useState } from "react";
import "./CurvedLoop.css";

interface CurvedLoopProps {
  marqueeText?: string;
  speed?: number;
  className?: string;
  curveAmount?: number;
  direction?: "left" | "right";
  interactive?: boolean;
}

const CurvedLoop = ({
  marqueeText = "",
  speed = 1,
  className,
  curveAmount = 220,
  direction = "left",
  interactive = true,
}: CurvedLoopProps) => {
  const text = useMemo(() => `${marqueeText.trimEnd()}\u00A0`, [marqueeText]);
  const measureRef = useRef<SVGTextElement>(null);
  const textPathRef = useRef<SVGTextPathElement>(null);
  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const directionRef = useRef(direction);
  const velocityRef = useRef(0);
  const [spacing, setSpacing] = useState(0);
  const pathId = `curve-${useId().replace(/:/g, "")}`;
  const pathD = `M-100,20 Q500,${20 + curveAmount} 1540,20`;

  useEffect(() => {
    if (measureRef.current) setSpacing(measureRef.current.getComputedTextLength());
  }, [text, className]);

  useEffect(() => {
    if (!spacing || !textPathRef.current) return;
    textPathRef.current.setAttribute("startOffset", `${-spacing}px`);
  }, [spacing]);

  useEffect(() => {
    if (!spacing || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const step = () => {
      if (!dragRef.current && textPathRef.current) {
        const delta = directionRef.current === "right" ? speed : -speed;
        const current = Number.parseFloat(textPathRef.current.getAttribute("startOffset") ?? "0");
        let next = current + delta;
        if (next <= -spacing) next += spacing;
        if (next > 0) next -= spacing;
        textPathRef.current.setAttribute("startOffset", `${next}px`);
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [spacing, speed]);

  const moveText = (delta: number) => {
    if (!textPathRef.current || !spacing) return;
    const current = Number.parseFloat(textPathRef.current.getAttribute("startOffset") ?? "0");
    let next = current + delta;
    if (next <= -spacing) next += spacing;
    if (next > 0) next -= spacing;
    textPathRef.current.setAttribute("startOffset", `${next}px`);
  };

  const totalText = spacing ? Array(Math.ceil(2000 / spacing) + 3).fill(text).join("") : text;

  return (
    <div
      className="curved-loop-jacket"
      aria-hidden="true"
      onPointerDown={(event) => {
        if (!interactive) return;
        dragRef.current = true;
        lastXRef.current = event.clientX;
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={(event) => {
        if (!interactive || !dragRef.current) return;
        const delta = event.clientX - lastXRef.current;
        lastXRef.current = event.clientX;
        velocityRef.current = delta;
        moveText(delta);
      }}
      onPointerUp={() => {
        dragRef.current = false;
        directionRef.current = velocityRef.current > 0 ? "right" : "left";
      }}
      onPointerLeave={() => {
        dragRef.current = false;
      }}
    >
      <svg className="curved-loop-svg" viewBox="0 0 1440 360">
        <text ref={measureRef} className={className} style={{ visibility: "hidden" }}>
          {text}
        </text>
        <defs>
          <path id={pathId} d={pathD} fill="none" />
        </defs>
        {spacing > 0 && (
          <text className={className}>
            <textPath ref={textPathRef} href={`#${pathId}`}>
              {totalText}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
};

export default CurvedLoop;