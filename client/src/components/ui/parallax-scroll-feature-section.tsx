import { motion } from 'framer-motion'
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`min-h-[60vh] flex flex-col md:flex-row items-center justify-center md:gap-24 gap-12 py-16 ${section.reverse ? 'md:flex-row-reverse' : ''}`}
        >
            <div className="flex-1 w-full text-center md:text-left">
                <div className="text-primary text-3xl md:text-4xl mb-4 font-serif">{section.symbol}</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 md:mb-6">{section.title}</h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                    {section.description}
                </p>
                <div className="mt-8">
                    <Button asChild size="lg" variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <a href="#book">Book Now</a>
                    </Button>
                </div>
            </div>
            <div className="flex-1 w-full flex justify-center">
                <div className="relative w-full max-w-[320px] md:max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-black/20 z-10 transition-opacity hover:opacity-0" />
                    <img 
                        src={section.imageUrl} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                        alt={section.title}
                    />
                </div>
            </div>
        </motion.div>
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
