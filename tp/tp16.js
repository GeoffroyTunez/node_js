function analyserPhrase(phrase) {
    
    const mots = phrase.trim().split(/\s+/);

    
    let totalMots = mots.length;
    let motLePlusLong = "";
    let occurrences = {};

    mots.forEach((mot) => {
        
        if (mot.length > motLePlusLong.length) {
            motLePlusLong = mot;
        }

        
        mot = mot.toLowerCase(); 
        occurrences[mot] = (occurrences[mot] || 0) + 1;
    });

    
    return {
        totalMots: totalMots,
        motLePlusLong: motLePlusLong,
        occurrences: occurrences,
    };
}


const phrase = "Le JavaScript est génial, et JavaScript est dure.";
const resultat = analyserPhrase(phrase);

console.log(resultat);
