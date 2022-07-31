import { useEffect, useRef } from "react";

export default function useScroll(parent, child, callback) {
    const observer = useRef();
    useEffect(
        () => {
            const options = {root:parent.current, rootMargin:'0px', threshold:0};
            observer.current = new IntersectionObserver(
                ([target]) => {
                    if(target.isIntersecting) {
                        console.log("Intersected");
                        callback();
                    }
                },
                options
            );
            observer.current.observe(child.current);
            
            return function() {
                // console.log("typeof: " + typeof child);
                // console.log("child: " + JSON.stringify( child ));
                if(child.current) observer.current.unobserve(child.current);
            }
        },
        [callback]
    );
}
