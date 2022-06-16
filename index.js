window.onload = () => {
    document.getElementById("start-button").onclick = () => {
        const canvas = document.querySelector("#canvas");
        canvas.classList.remove("hidden");

        App.init(
            canvas,
        );
        
        document.getElementById("logo").remove();
        document.getElementsByClassName("titulo")[0].remove();
        document.getElementsByClassName("controls")[0].remove();
        document.getElementById("start-button").remove();
    };
};






