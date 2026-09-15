import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Clock3, Globe2, HeartHandshake, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import CurvedLoop from "@/components/CurvedLoop";
import MarqueeSection from "@/components/MarqueeSection";
import DriftWall from "@/components/ui/DriftWall";
import { ParallaxScrollFeatureSection } from "@/components/ui/parallax-scroll-feature-section";
import { FeaturedProducts } from "@/components/ui/FeaturedProducts";
import Carousel_003 from "@/components/ui/Carousel_003";
import Aurora from "@/components/ui/Aurora";

// Removed broken heroVideo import
const services = [
  { title: "Tarot Card Reading", description: "Receive intuitive perspective on the questions and crossroads present in your life.", symbol: "✦" },
  { title: "Cord-Cutting Ritual", description: "A guided energetic ritual created to support release, renewal, and clearer boundaries.", symbol: "∞" },
  { title: "Akashic Records Reading", description: "Explore reflective insights through a contemplative reading of your soul journey.", symbol: "☼" },
  { title: "Reiki & Money Reiki", description: "Gentle energy work focused on balance, receptivity, and your relationship with abundance.", symbol: "◈" },
  { title: "Past Life Regression", description: "A guided inner journey to explore recurring themes, memories, and personal meaning.", symbol: "◌" },
  { title: "Numerology Reading", description: "Discover the symbolism and patterns held within your name and birth date.", symbol: "Ⅸ" },
  { title: "Chakra Balancing", description: "A calming session to support energetic alignment and a renewed sense of equilibrium.", symbol: "❋" },
  { title: "Astrology Consultation", description: "A personal conversation exploring your birth chart, cycles, and current season.", symbol: "☾" },
];

const parallaxServices = services.map((service, index) => ({
  id: index + 1,
  title: service.title,
  description: service.description,
  symbol: service.symbol,
  imageUrl: `/images/${service.title.toLowerCase().replace(/ & /g, '_').replace(/ /g, '_').replace(/-/g, '_')}.png`,
  reverse: index % 2 !== 0
}));

const shopCategories = [
  { name: "Rudraksha", image: "/images/rudraksha.png", note: "Sacred beads" },
  { name: "Gemstones & Crystals", image: "/images/gemstones_crystals.png", note: "Earth-born energy" },
  { name: "Malas", image: "/images/mala.png", note: "Prayer & practice" },
  { name: "Sacred Books", image: "/images/sacred_book.png", note: "Wisdom for the path" },
  { name: "Power Coins", image: "/images/power_coin.png", note: "Intention talismans" },
];

const comments = [
  { text: "A truly transformative reading. Will definitely book again!", user: "@sarah_m", avatar: "https://i.pravatar.cc/100?img=1" },
  { text: "Natassha Sharrma's guidance was exactly what I needed right now.", user: "@james_leo", avatar: "https://i.pravatar.cc/100?img=11" },
  { text: "Such a calming and clarifying session. Thank you so much!", user: "@elena.r", avatar: "https://i.pravatar.cc/100?img=5" },
  { text: "The cord-cutting ritual changed everything for me. ✨", user: "@michael_t", avatar: "https://i.pravatar.cc/100?img=8" },
  { text: "Amazing energy and such a beautiful space.", user: "@chloe_w", avatar: "https://i.pravatar.cc/100?img=9" },
  { text: "I feel so much lighter after my session.", user: "@david_k", avatar: "https://i.pravatar.cc/100?img=12" },
  { text: "The Akashic Records reading was mind-blowing.", user: "@amy.jones", avatar: "https://i.pravatar.cc/100?img=20" },
  { text: "Highly recommend the Numerology reading! Very insightful.", user: "@sam_smith", avatar: "https://i.pravatar.cc/100?img=33" },
];

const commentItems = comments.map((comment, i) => ({
  id: i,
  content: (
    <div className="flex items-center gap-4 bg-white/10 hover:bg-white/15 transition-colors backdrop-blur-md rounded-2xl px-6 py-4 shadow-lg border border-white/10 w-full h-full text-left">
      <img src={comment.avatar} alt={comment.user} className="w-12 h-12 rounded-full border border-primary/50 object-cover" />
      <div className="flex flex-col flex-1">
        <span className="text-[12px] font-semibold tracking-wide text-primary">{comment.user}</span>
        <span className="text-sm font-medium text-white/90 line-clamp-2">{comment.text}</span>
      </div>
    </div>
  )
}));

const faqs = [
  ["Which session length should I choose?", "A 30-minute session suits one focused question, 60 minutes allows deeper exploration, and 90 minutes offers the most spacious experience."],
  ["How are online sessions held?", "After booking, you receive the session details and a private video-call link. You can join from anywhere."],
  ["Do you ship outside India?", "Yes. The sacred shop supports delivery across India and international shipping to selected destinations."],
  ["How should I prepare?", "Find a quiet place, bring your questions or intentions, and arrive with an open mind. No other preparation is required."],
];

const SectionHeading = ({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) => (
  <div className="max-w-2xl">
    <p className="mb-4 text-xs font-semibold uppercase tracking-editorial text-primary">{eyebrow}</p>
    <h2 className="text-4xl leading-tight md:text-6xl">{title}</h2>
    {copy && <p className="mt-5 max-w-xl leading-7 text-muted-foreground">{copy}</p>}
  </div>
);

const Index = () => {
  const [duration, setDuration] = useState(60);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <section className="relative min-h-[88svh] overflow-hidden bg-black">
        <video className="absolute inset-0 h-full w-full object-cover contrast-125 saturate-110 brightness-110 filter" autoPlay muted loop playsInline preload="metadata" aria-label="Natassha Sharrma welcoming you to Divine Wheel Of Fortune">
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        
        <div className="container-full relative flex min-h-[88svh] items-end pb-24 pt-32 md:pb-16 z-10">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-screen" />

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.25 } }
            }}
            className="max-w-3xl text-white drop-shadow-2xl mb-6 md:mb-0 relative z-10"
          >
            <motion.p 
              variants={{ hidden: { opacity: 0, filter: "blur(10px)", y: 15 }, visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 1, ease: "easeOut" } } }}
              className="mb-5 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/90 flex items-center gap-3"
            >
              <span>Intuitive guidance</span>
              <Star className="w-3 h-3 text-primary/70 fill-current" />
              <span>Energy work</span>
              <Star className="w-3 h-3 text-primary/70 fill-current" />
              <span>Sacred living</span>
            </motion.p>
            
            <motion.h1 
              variants={{ hidden: { opacity: 0, filter: "blur(10px)", y: 20 }, visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 1, ease: "easeOut" } } }}
              className="text-5xl leading-[1.05] md:text-7xl lg:text-[5rem] text-white font-serif tracking-tight drop-shadow-2xl"
            >
              Divine Wheel<br /><span className="italic font-light text-white/90">Of Fortune</span>
            </motion.h1>
            
            <motion.p 
              variants={{ hidden: { opacity: 0, filter: "blur(10px)", y: 20 }, visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 1, ease: "easeOut" } } }}
              className="mt-7 max-w-xl text-base leading-relaxed text-white/80 md:text-lg font-medium drop-shadow-md"
            >
              A quiet space with Natassha Sharrma for insight, healing, and deeper connection to your own inner wisdom.
            </motion.p>
            
            <motion.div 
              variants={{ hidden: { opacity: 0, filter: "blur(10px)", y: 20 }, visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 1, ease: "easeOut" } } }}
              className="mt-10 grid grid-cols-2 sm:flex sm:flex-row gap-4 w-full sm:w-auto max-w-md sm:max-w-none"
            >
              <Button asChild size="lg" className="h-14 rounded-2xl bg-white px-2 sm:px-8 text-black hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-white/10 text-xs sm:text-sm font-semibold group"><a href="#book" className="flex items-center justify-center">Book session <ArrowRight className="hidden sm:block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></a></Button>
              <Button asChild size="lg" variant="outline" className="h-14 rounded-2xl border-white/20 bg-black/40 backdrop-blur-md px-2 sm:px-8 text-white hover:bg-white/10 hover:text-white active:scale-[0.98] transition-all text-xs sm:text-sm font-semibold"><a href="#services" className="flex items-center justify-center">Explore services</a></Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <MarqueeSection />

      <section id="about" className="py-20 md:py-32">
        <div className="container-full grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative aspect-square md:aspect-video lg:aspect-[4/5] overflow-hidden bg-black rounded-3xl">
            <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="auto"><source src="/about.mp4" type="video/mp4" /></video>
            <div className="absolute inset-x-0 bottom-0 bg-background/90 p-6 backdrop-blur-md"><p className="font-serif text-2xl">Natassha Sharrma</p><p className="mt-1 text-xs uppercase tracking-editorial text-primary">Intuitive guide & energy practitioner</p></div>
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeading eyebrow="Her story" title="Meet yourself at the turning point." />
            <div className="mt-8 grid gap-6 text-base leading-8 text-muted-foreground md:grid-cols-2">
              <p>Natassha Sharrma created Divine Wheel Of Fortune as a considered space for people seeking perspective, emotional clarity, and a more intentional relationship with their inner world.</p>
              <p>Each session blends deep listening with symbolic and energetic practices, always shaped around your questions, comfort, and personal pace.</p>
            </div>
            <Button asChild variant="link" className="mt-8 h-auto p-0 text-primary"><Link to="/about">Discover Natassha Sharrma’s story <ArrowRight /></Link></Button>
          </motion.div>
        </div>
      </section>

      <div id="services">
        <ParallaxScrollFeatureSection 
          title="Ways to work together"
          description="Guidance for every season. Choose a focused 30-minute reading or make room for a deeper 60-minute session."
          sections={parallaxServices}
        />
      </div>

      <section className="relative overflow-hidden py-16 md:py-24 text-white">
        <div className="absolute inset-0 z-0">
          <Aurora
            colorStops={["#d8b4fe", "#B497CF", "#5227FF"]}
            blend={0.5}
            amplitude={1.2}
            speed={0.5}
          />
        </div>
        <div className="relative z-10">
          <CurvedLoop marqueeText="CLARITY ✦ HEALING ✦ ABUNDANCE ✦ ALIGNMENT ✦ " speed={1.5} direction="right" curveAmount={150} />
        </div>
      </section>

      <section id="book" className="py-20 md:py-32">
        <div className="container-narrow text-center">
          <SectionHeading eyebrow="Book a session" title="Choose the space you need." copy="Select a duration to begin. This preview demonstrates the booking experience; no payment will be taken." />
          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {[30, 60, 90].map((minutes) => <button key={minutes} onClick={() => setDuration(minutes)} className={`min-h-40 border p-6 text-left transition-colors ${duration === minutes ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-primary"}`} aria-pressed={duration === minutes}>
              <Clock3 className="h-5 w-5" /><span className="mt-8 block font-serif text-3xl">{minutes} minutes</span><span className={`mt-2 block text-sm ${duration === minutes ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{minutes === 30 ? "One focused question" : minutes === 60 ? "A deeper personal reading" : "An immersive exploration"}</span>
            </button>)}
          </div>
          <div className="mt-7 flex flex-col items-center justify-between gap-5 border-y border-border py-6 sm:flex-row"><p className="text-left"><span className="block text-sm text-muted-foreground">Your selection</span><strong className="font-serif text-2xl font-medium">{duration}-minute private session</strong></p><Button size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="h-12 rounded-none px-8">Continue to booking <ArrowRight /></Button></div>
        </div>
      </section>

      <FeaturedProducts />

      <section id="shop" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-sky-100/50 via-white to-sky-50/30">
        <div className="container-full relative z-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-14">
             <SectionHeading eyebrow="The sacred shop" title="Objects with intention." copy="Thoughtfully chosen companions for prayer, reflection, ritual, and everyday grounding." />
             <Button asChild variant="outline" className="rounded-none"><a href="#categories">Shop all <ArrowRight /></a></Button>
          </div>
        </div>
        <Carousel_003 
          images={[...shopCategories, ...shopCategories].map(c => ({ src: c.image, alt: c.name, name: c.name, note: c.note }))} 
          showNavigation 
          showPagination 
          loop 
          autoplay 
          spaceBetween={40} 
        />
        <div className="container-full mt-14">
          <div className="flex items-center justify-center gap-3 border-t border-border pt-7 text-sm text-muted-foreground"><Globe2 className="h-5 w-5 text-primary" /> Shipping across India and to selected international destinations</div>
        </div>
      </section>

      <section id="categories" className="py-20 md:py-32 bg-background">
        <div className="container-full">
          <SectionHeading eyebrow="Explore Collections" title="Sacred Offerings" copy="Browse our curated collections to find pieces that resonate with your spirit." />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shopCategories.map((item, index) => (
              <Link 
                key={item.name} 
                to="/products" 
                className={`group relative overflow-hidden rounded-3xl block h-[450px] ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''} ${index === 3 ? 'md:col-span-2 lg:col-span-1' : ''} ${index === 4 ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 p-8 z-20 flex flex-col justify-end">
                  <p className="text-sm uppercase tracking-widest text-primary mb-2 font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {item.note}
                  </p>
                  <h3 className="text-3xl font-serif text-white transform group-hover:-translate-y-2 transition-transform duration-500">
                    {item.name}
                  </h3>
                  <div className="h-0 overflow-hidden group-hover:h-12 transition-all duration-500 flex items-center mt-2">
                    <span className="inline-flex items-center gap-2 text-sm text-white/90">
                      Explore collection <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="border-y border-border bg-muted/45 py-20 md:py-28"><div className="container-full"><SectionHeading eyebrow="From the journal" title="Notes for your inner life." />
        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">{[["Tarot", "How to frame a question for a meaningful reading"], ["Energy", "A gentle ritual for releasing what no longer serves"], ["Sacred living", "Choosing crystals with attention and intuition"]].map(([tag, title], index) => <article key={title} className="bg-background p-8"><span className="text-6xl font-serif text-primary/25">0{index + 1}</span><p className="mt-12 text-xs uppercase tracking-editorial text-primary">{tag}</p><h3 className="mt-4 text-2xl leading-snug">{title}</h3><button className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">Read article <ArrowRight className="h-4 w-4" /></button></article>)}</div>
      </div></section>

      <section id="faq" className="py-20 md:py-28"><div className="container-narrow"><SectionHeading eyebrow="Good to know" title="Frequently asked questions." />
        <div className="mt-12 border-t border-border">{faqs.map(([question, answer], index) => <div key={question} className="border-b border-border">
          <button className="flex w-full items-center justify-between gap-6 py-6 text-left font-serif text-xl" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>
            {question}
            <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
          </button>
          <AnimatePresence>
            {openFaq === index && (
              <motion.div
                initial={{ opacity: 0, filter: "blur(4px)", height: 0 }}
                animate={{ opacity: 1, filter: "blur(0px)", height: "auto" }}
                exit={{ opacity: 0, filter: "blur(4px)", height: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="max-w-2xl pb-7 leading-7 text-muted-foreground">{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>)}</div>
      </div></section>

      <section id="contact" className="bg-primary py-20 text-primary-foreground md:py-28"><div className="container-narrow text-center"><p className="text-xs font-semibold uppercase tracking-editorial text-primary-foreground/70">Begin when you’re ready</p><h2 className="mt-5 text-4xl md:text-6xl">Your next chapter can start with one conversation.</h2><p className="mx-auto mt-6 max-w-xl leading-7 text-primary-foreground/75">Share your preferred service and session length. Natassha Sharrma will personally help you with the next step.</p><Button size="lg" className="mt-9 h-12 rounded-none bg-background px-8 text-foreground hover:bg-background/90" onClick={() => window.location.href = "mailto:hello@divinewheeloffortune.com?subject=Session enquiry"}>Contact Natassha Sharrma <ArrowRight /></Button></div></section>
      
      <div className="relative h-[600px] w-full overflow-hidden bg-black">
        <DriftWall 
          items={commentItems}
          columns={4}
          tileWidth={320}
          tileHeight={120}
          gap={24}
          fade={0.8}
          tilt={12}
          turn={-8}
          speed={25}
          lift={40}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      </div>
    </Layout>
  );
};

export default Index;