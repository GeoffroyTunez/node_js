function startTimer() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(`Chronomètre : ${i + 1}s`);
            if (i === 9) {
                console.log("Temps écoulé !");
            }
        }, (i + 1) * 1000);
    }
}

startTimer();
