import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

const useHeroAnimate = ({
    titleSpanRef,
    titleSectionRef,    
    heroRef,
    canvasRef
}: {
    titleSpanRef: React.RefObject<HTMLSpanElement>,
    titleSectionRef: React.RefObject<HTMLDivElement>,
    heroRef: React.RefObject<HTMLDivElement>,
    canvasRef: React.RefObject<HTMLCanvasElement>,
}) => {
    useGSAP(() => {
    const splitter = new SplitText(titleSpanRef.current, {
      type: "words, chars",
    })

    gsap.from(splitter.words, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: "power3.inOut",
      stagger: 0.1
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=700",
        scrub: 2,
        pin: true,
        anticipatePin: 1,
      }
    })

    tl.to(titleSectionRef.current, {
      opacity: 0,
      yPercent: -100,
      duration: 1,
      display: "none",
      ease: "power2.inOut"
    })
    tl.to(canvasRef.current, {
      scale: 1.5,
      duration: 1,
      ease: "power3.inOut"
    })
    
    return () => {
        splitter.revert();
        tl.revert();
    }
  }, [ titleSpanRef, titleSectionRef, heroRef, canvasRef ]);
}

export default useHeroAnimate