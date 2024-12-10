const tab = [
    [ // nom des eleves
        "Jean",
        "Jacque",
        "Marie",
        "Mathis"
    ],
    [ // notes des eleves
        15,
        18,
        9,
        2,
    ]
]

function moyenneNote(tab){

    let moyenne = 0
    for(let i=0 ; i < tab.at(0).length ; i++){
        let nom = tab.at(0).at(i)
        // console.log( tab.at(0).at(i) );
        let note = tab.at(1).at(i)
        console.log(`Nom : ${nom} | Note : ${note}`)
        moyenne = moyenne + note
    }
    moyenne = moyenne / tab.at(0).length // division de moyenne par le nombre d'eleve dans ce cas 4
    return moyenne;   
}

console.log(moyenneNote(tab) + "/20")