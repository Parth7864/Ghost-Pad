function injectScript() {

    if (document.documentElement.dataset.inputBridgeLoaded) {
        return;
    }

    document.documentElement.dataset.inputBridgeLoaded = "true";


    const script = document.createElement("script");

    script.src = chrome.runtime.getURL(
        "main-world.js"
    );


    script.onload = () => {
        script.remove();
    };


    document.documentElement.appendChild(script);
}


function checkPage() {

    const isGamePage =
        location.pathname.includes("/play/launch/");


    const video =
        document.querySelector("video");


    if (isGamePage && video) {
        injectScript();
    }
}



