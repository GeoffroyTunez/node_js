const tab = ["lait", "oeuf", "sel"];

function addFromTab(string, tab) {
    tab.push(string);
    return tab; 
}

function removeFromTab(string, tab) {
    const stringLocation = tab.indexOf(string);
    if (stringLocation !== -1) { 
        tab.splice(stringLocation, 1);
    }
    return tab; 
}

function checkFromTab(string, tab) {
    return tab.indexOf(string) !== -1; 
}


console.log(checkFromTab("sel", tab)); 
addFromTab("sucre", tab);
console.log(tab); 
removeFromTab("sel", tab);
console.log(tab); 
console.log(checkFromTab("sel", tab)); 
