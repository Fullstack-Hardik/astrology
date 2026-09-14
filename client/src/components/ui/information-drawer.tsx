"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import gsap from "gsap";

export interface TeamMember {
  id: string;
  slug: string;
  title: string;
  /** Rendered as raw HTML (`dangerouslySetInnerHTML`) — trusted content only. */
  content: string;
  featuredImage: string | { node: { sourceUrl: string } };
  teams: {
    designation: string;
    linkedin?: string;
    profilePicture?: string | { node: { sourceUrl: string } };
  };
}

function getImageSource(image?: string | { node?: { sourceUrl?: string } }) {
  if (typeof image === "string") return image;
  return image?.node?.sourceUrl;
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

export interface InformationDrawerProps {
  /** Team members shown in the grid. */
  teams?: TeamMember[];
  /** Heading above the grid. */
  title?: string;
  /** Intro paragraph under the heading. */
  description?: string;
  /** GSAP tween duration (seconds) for the drawer panel and overlay. */
  duration?: number;
  /** GSAP ease for the drawer panel and overlay. */
  ease?: string;
  /** GSAP tween delay (seconds) for the drawer panel and overlay. */
  delay?: number;
  /** Drawer panel background color. */
  backgroundColor?: string;
  /** Drawer panel text color. */
  textColor?: string;
  /** Drawer panel width on desktop. Numbers are treated as percentages. */
  sidebarWidth?: string | number;
  /** Backdrop opacity while the drawer is open. */
  overlayOpacity?: number;
  /** GSAP tween duration (seconds) for the staged content fade in/out. */
  contentDuration?: number;
}

export default function InformationDrawer({
  teams = [],
  title = "Built by Different Minds",
  description = "",
  duration = 0.65,
  ease = "power2.inOut",
  delay = 0,
  backgroundColor = "#ffffff",
  textColor = "#111111",
  sidebarWidth = "70%",
  overlayOpacity = 0.2,
  contentDuration = 0.25,
}: InformationDrawerProps) {
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const teamInfo: TeamMember[] = Array.isArray(teams) ? teams : [];

  const lockScroll = () => {
    if (typeof document !== "undefined") document.body.style.overflow = "hidden";
  };
  const unlockScroll = () => {
    if (typeof document !== "undefined") document.body.style.overflow = "";
  };

  const handleDetail = (member: TeamMember) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setSelectedMember(member);
    setDetailOpen(true);
    lockScroll();
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>, member: TeamMember) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    handleDetail(member);
  };

  const handleClose = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    unlockScroll();

    const fadeOut = prefersReducedMotion ? 0 : contentDuration;

    gsap.to(contentRef.current, {
      opacity: 0,
      duration: fadeOut,
      ease,
      overwrite: "auto",
      onComplete: () => setDetailOpen(false),
    });

    closeTimeout.current = setTimeout(
      () => {
        setSelectedMember(null);
        closeTimeout.current = null;
      },
      (fadeOut + (prefersReducedMotion ? 0 : duration + delay)) * 1000,
    );
  };

  const drawerWidth = useMemo(() => {
    if (typeof sidebarWidth === "number") return `${sidebarWidth}%`;
    return sidebarWidth;
  }, [sidebarWidth]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.to(overlayRef.current, {
      opacity: detailOpen ? overlayOpacity : 0,
      duration: prefersReducedMotion ? 0 : duration,
      ease,
      delay: prefersReducedMotion ? 0 : delay,
      overwrite: "auto",
    });
  }, [detailOpen, duration, ease, delay, overlayOpacity, prefersReducedMotion]);

  useEffect(() => {
    if (typeof window === "undefined" || !detailOpen) return;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: prefersReducedMotion ? 0 : contentDuration,
        ease,
        delay: prefersReducedMotion ? 0 : delay + duration,
        overwrite: "auto",
      },
    );
  }, [detailOpen, selectedMember, duration, contentDuration, ease, delay, prefersReducedMotion]);

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
      unlockScroll();
    };
  }, []);

  const sectionStyle = { "--information-drawer-text-color": textColor } as CSSProperties;
  const drawerStyle = {
    backgroundColor,
    color: textColor,
    width: drawerWidth,
    transform: detailOpen ? "translateX(0)" : "translateX(100%)",
    transitionDelay: prefersReducedMotion ? "0s" : `${delay}s`,
    transitionDuration: prefersReducedMotion ? "0s" : `${duration}s`,
  } as CSSProperties;

  return (
    <section id="meet" className="relative w-full h-full pb-[8%] max-md:pb-[20%]" style={sectionStyle}>
      <div className={`container ${detailOpen ? "pointer-events-none" : "pointer-events-auto"}`}>
        <h2 className="text-[5.7vw] w-fit font-serif leading-[1.1] max-md:text-[10vw] max-[1025px]:text-[6.5vw] mb-[3vw] max-md:pt-[10vw] text-foreground">
          {title}
        </h2>
        <p className="text-[1.9vw] w-[70%] font-medium leading-[1.3] max-md:w-[90%] max-md:text-[3vw] max-[1025px]:w-[85%] max-[1025px]:text-[2.5vw] text-muted-foreground">
          {description}
        </p>

        <div className="w-full overflow-hidden max-md:overflow-x-scroll max-md:overflow-y-hidden max-md:mt-[5vw] max-[1025px]:overflow-x-scroll max-[1025px]:overflow-y-hidden">
          <div className="grid grid-cols-3 gap-[3vw] mt-[8vw] justify-between gap-y-[3vw] max-md:flex max-md:flex-nowrap max-md:w-fit max-md:overflow-scroll max-md:gap-[5vw] max-md:h-fit max-[1025px]:flex max-[1025px]:flex-nowrap max-[1025px]:w-fit max-[1025px]:overflow-scroll max-[1025px]:gap-[4vw] max-[1025px]:h-fit">
            {teamInfo.length > 0 ? (
              teamInfo.map((member) => {
                const featuredImageSource = getImageSource(member.featuredImage);

                return (
                  <div
                    key={member.id ?? member.slug}
                    role="button"
                    tabIndex={0}
                    className="w-full overflow-hidden"
                    onClick={() => handleDetail(member)}
                    onKeyDown={(event) => handleCardKeyDown(event, member)}
                  >
                    <div className="w-full h-[36vw] group cursor-pointer relative overflow-hidden rounded-xl max-md:w-[75vw] max-md:h-[100vw] max-md:shrink-0 max-[1025px]:w-[55vw] max-[1025px]:h-[70vw] max-[1025px]:shrink-0 bg-background/5 border border-border">
                      <div className="bg-black/40 absolute opacity-0 max-[1025px]:opacity-100 w-8 h-8 rounded-full backdrop-blur-lg text-white flex items-center justify-center top-3 right-3 z-10 text-[4vw] pointer-events-none max-md:opacity-100 max-md:text-[6vw] max-[1025px]:text-[3vw]">
                        <span className="absolute w-[1.5vw] h-[0.2vw] bg-white max-md:w-[3vw] max-md:h-[0.4vw] max-[1025px]:w-[1.5vw] max-[1025px]:h-[0.2vw]"></span>
                        <span className="absolute w-[0.2vw] h-[1.5vw] bg-white max-md:w-[0.4vw] max-md:h-[3vw] max-[1025px]:w-[0.2vw] max-[1025px]:h-[1.5vw]"></span>
                      </div>
                      {featuredImageSource && (
                        <img
                          loading="lazy"
                          src={featuredImageSource}
                          alt={`${member?.title ?? "Member"} portrait`}
                          className={`absolute inset-0 h-full w-full object-cover group-hover:scale-105 ${
                            prefersReducedMotion ? "" : "transition duration-700"
                          }`}
                        />
                      )}
                      {!featuredImageSource && (
                         <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                           <span className="text-8xl text-primary/80" aria-hidden="true">{member.teams.designation}</span>
                         </div>
                      )}
                      <div className="absolute w-full px-[2vw] py-[1.5vw] z-[2] bottom-0 overflow-hidden translate-y-full bg-black/40 backdrop-blur-lg group-hover:translate-y-0 max-[1025px]:translate-y-0 duration-300 ease-out max-md:py-[3vw] max-md:px-[3vw] max-[1025px]:py-[3vw]">
                        <div className="flex w-full justify-between h-full text-white">
                          <div className="flex flex-col max-[1025px]:w-[100%]">
                            <h4 className="text-[1.8vw] font-semibold leading-[1.3] max-md:text-[6vw] max-[1025px]:text-[2.4vw]">
                              {member?.title ?? "—"}
                            </h4>
                          </div>
                          <div className="max-md:flex max-md:items-center">
                            <svg
                              className="relative -rotate-[135deg] w-[2.3vw] h-[2.3vw] overflow-hidden max-md:w-[7vw] max-md:h-[7vw] max-[1025px]:w-[4vw] max-[1025px]:h-[4vw]"
                              viewBox="0 0 19 23"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path
                                className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out"
                                d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                                fill="#ffffff"
                              />
                              <path
                                className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out"
                                d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                                fill="#ffffff"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="col-span-full py-10">No items yet.</p>
            )}
          </div>
        </div>
      </div>

      <div
        id="team-detail"
        className={`fixed inset-0 z-[204] overflow-visible bg-transparent ${
          detailOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          ref={overlayRef}
          onClick={handleClose}
          className={`absolute inset-0 bg-black opacity-0 ${
            detailOpen ? "pointer-events-auto opacity-100" : "pointer-events-none"
          }`}
        ></div>
        <div
          className="fixed inset-y-0 right-0 z-[205] flex flex-col gap-[2vw] overflow-y-auto overflow-x-hidden px-[5vw] pointer-events-auto transition-transform ease-in-out max-md:!w-full max-md:gap-[5vw] max-[1025px]:!w-full max-[1025px]:gap-[3vw] shadow-2xl"
          style={drawerStyle}
        >
          <div ref={contentRef} className="flex flex-col gap-[2vw] max-md:gap-[5vw] max-[1025px]:gap-[3vw] opacity-0 h-full pb-10">
            <TeamDetail teams={teamInfo} member={selectedMember} handleClose={handleClose} textColor={textColor} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamDetail({
  member,
  handleClose,
  teams,
  textColor,
}: {
  member: TeamMember | null;
  handleClose: () => void;
  teams: TeamMember[];
  textColor: string;
}) {
  if (!member) return null;

  const memberIndex = teams.findIndex((item) => item.id === member.id);
  const featuredImageSource = getImageSource(member.featuredImage);
  const profileImageSource = getImageSource(member.teams.profilePicture);

  return (
    <>
      <div className="w-full flex justify-between pt-[10%] max-md:pt-[20%] items-center">
        <button
          type="button"
          aria-label="Close detail"
          className="w-[3vw] h-[3vw] cursor-pointer relative flex items-center justify-center rounded-full border border-current max-md:w-[11vw] max-md:h-[11vw] max-[1025px]:w-[7vw] max-[1025px]:h-[7vw]"
          onClick={handleClose}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[45%] h-[45%]" aria-hidden="true">
            <path d="M4 4L20 20M20 4L4 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <span className="text-[1.5vw] font-serif max-md:text-[5.5vw] max-[1025px]:text-[2.5vw]">
          {memberIndex + 1}/{teams.length}
        </span>
      </div>
      <div className="w-full h-[1px] py-[0.01vw] bg-current max-md:my-[4vw] max-md:py-[0.1vw] max-[1025px]:my-[2vw] opacity-20 my-6"></div>
      <div className="w-full flex flex-col h-full justify-between">
        <div className="flex flex-col mb-10">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif leading-[1.1] mb-2 text-primary">
                  {member.title}
                </h2>
              </div>
              <span className="text-6xl md:text-8xl text-primary/30" aria-hidden="true">{member.teams.designation}</span>
            </div>
            
            <div className="mt-8 space-y-6 text-lg leading-[1.6] text-white/80" dangerouslySetInnerHTML={{ __html: member.content }} />
            
            <div className="mt-12 flex flex-wrap gap-3">
              <a href="#book" onClick={handleClose} className="inline-flex h-12 items-center justify-center rounded-none bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Book a session
              </a>
            </div>
        </div>
        {profileImageSource && (
          <div className="w-full overflow-hidden rounded-xl h-[40vh] relative mb-[5%]">
            <img
              src={profileImageSource}
              loading="lazy"
              alt={`${member.title} image`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        )}
      </div>
    </>
  );
}
