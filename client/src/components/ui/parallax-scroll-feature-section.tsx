import { useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from "lucide-react"

export interface ParallaxSection {
    id: number | string;
    title: string;
    description: string;
    imageUrl: string;
    symbol?: string;
    reverse?: boolean;
}

interface ParallaxScrollFeatureSectionProps {
    title: string;
    description?: string;
    sections: ParallaxSection[];
}

const SectionItem = ({ section }: { section: ParallaxSection }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
    const clipPath = useTransform(scrollYProgress, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
    const translateY = useTransform(scrollYProgress, [0, 1], [-50, 0]);

    return (
        <div 
            ref={ref} 
            className={`min-h-[80vh] flex flex-col md:flex-row items-center justify-center md:gap-32 gap-16 py-12 ${section.reverse ? 'md:flex-row-reverse' : ''}`}
        >
            <motion.div style={{ y: translateY }} className="flex-1">
                <div className="text-primary text-4xl mb-4 font-serif">{section.symbol}</div>
                <h2 className="text-4xl md:text-5xl font-serif mb-6">{section.title}</h2>
                <motion.p 
                    style={{ y: translateY }} 
                    className="text-muted-foreground text-lg leading-relaxed max-w-md"
                >
                    {section.description}
                </motion.p>
            </motion.div>
            <motion.div 
                style={{ 
                    opacity: opacity,
                    clipPath: clipPath,
                }}
                className="flex-1 relative w-full flex justify-center"
            >
                <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-black/20 z-10" />
                    <img 
                        src={section.imageUrl} 
                        className="w-full h-full object-cover" 
                        alt={section.title}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export const ParallaxScrollFeatureSection = ({ title, description, sections }: ParallaxScrollFeatureSectionProps) => {
  return (
    <div className="bg-background text-foreground py-20 overflow-hidden">
      <div className='min-h-[60vh] w-full flex flex-col items-center justify-center text-center px-6'>
        <p className="mb-4 text-xs font-semibold uppercase tracking-editorial text-primary">Explore</p>
        <h1 className='text-4xl md:text-6xl max-w-3xl'>{title}</h1>
        {description && <p className="mt-6 max-w-xl text-lg text-muted-foreground">{description}</p>}
        <p className='mt-20 flex items-center gap-2 text-sm uppercase tracking-widest text-primary/70 animate-bounce'>
          Scroll to view <ArrowDown size={15} />
        </p>
      </div>
      
       <div className="flex flex-col md:px-0 px-6 container-narrow">
            {sections.map((section) => (
                <SectionItem key={section.id} section={section} />
            ))}
        </div>
    </div>
  );
};
