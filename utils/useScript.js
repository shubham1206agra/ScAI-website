import { useEffect } from "react";

const useScript = (url) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = url;
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
            document.nodeValue = document.body.cloneNode(true);
            window.clearInterval(1);
        };
    }, [url]);
};

export default useScript;
