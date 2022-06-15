window.onload = () => {
    /*
    const placeHolderImage = document.getElementById("placeHolderImg");
    placeHolderImg.style.display = "initial";
*/


    document.getElementById("start-button").onclick = () => {
        const canvas = document.querySelector("#canvas");
        // const endGame = document.getElementById("endScreen");
        // endGame.classList.remove("hidden");
        //const scoreEndGame = document.getElementById("score");
        //const restartButton = document.getElementById("restartButton");
        //const audio = document.getElementById("backgroundMusic");
        //const audio2 = document.getElementById("startingSound");
        canvas.classList.remove("hidden");


        App.init(
            canvas,
            //endGame
            //scoreEndGame,
            //restartButton,
            //audio,
            //audio2
        );
        document.getElementById("logo").remove();
        document.getElementsByClassName("titulo")[0].remove();
        document.getElementsByClassName("controls")[0].remove();
        document.getElementById("start-button").remove();
    };
};






