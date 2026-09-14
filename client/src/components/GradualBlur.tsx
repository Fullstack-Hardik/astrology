import { CSSProperties, useMemo } from "react";
import "./GradualBlur.css";

interface GradualBlurProps {
  position?: "top" | "bottom";
  strength?: number;
  height?: string;
  divCount?: number;
  opacity?: number;
  className?: string;
}

const GradualBlur = ({
  position = "bottom",
  strength = 2,
  height = "8rem",
  divCount = 6,
  opacity = 1,
  className = "",
}: GradualBlurProps) => {
  const layers = useMemo(() => Array.from({ length: divCount }, (_, index) => {
    const start = (index / divCount) * 100;
    const end = Math.min(100, ((index + 2) / divCount) * 100);
    const blur = ((index + 1) / divCount) ** 2 * strength;
    return {
      backdropFilter: `blur(${blur.toFixed(2)}rem)`,
      WebkitBackdropFilter: `blur(${blur.toFixed(2)}rem)`,
      maskImage: `linear-gradient(to ${position}, transparent ${start}%, black ${end}%)`,
      WebkitMaskImage: `linear-gradient(to ${position}, transparent ${start}%, black ${end}%)`,
      opacity,
    } as CSSProperties;
  }), [divCount, opacity, position, strength]);

  return (
    <div className={`gradual-blur gradual-blur-${position} ${className}`} style={{ height }} aria-hidden="true">
      {layers.map((style, index) => <div key={index} style={style} />)}
    </div>
  );
};

export default GradualBlur;