import { useGSAP } from "@gsap/react";
import gsap from "gsap"

const useInfoAnimate = ({
    infoRef,
    aboutSpanRef,
    listRef,
    buttonsRef
}: {
    infoRef: React.RefObject<HTMLDivElement>,
    aboutSpanRef: React.RefObject<HTMLSpanElement>,
    listRef: React.RefObject<HTMLOListElement>,
    buttonsRef: React.RefObject<HTMLDivElement>,
}) => {
    useGSAP(() => {
        const items = gsap.utils.toArray(listRef.current?.children);
        const buttons = gsap.utils.toArray(buttonsRef.current?.children);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: infoRef.current,
                start: 'top 60%',
                end: 'bottom bottom',
                scrub: 2
            }
        })
        
        tl.from(aboutSpanRef.current, {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            ease: "power3.inOut",
        });

        tl.from(items, {
            opacity: 0,
            xPercent: 100,
            duration: 1,
            ease: "power3.inOut",
            stagger: 0.1
        });

        tl.fromTo(buttons, {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            ease: "power3.inOut"
        }, {
            opacity: 1,
            yPercent: 0,
            duration: 1,
            ease: "power3.inOut",
            stagger: 0.9
        })
    }, [ infoRef, aboutSpanRef, listRef, buttonsRef ])
}

export default useInfoAnimate