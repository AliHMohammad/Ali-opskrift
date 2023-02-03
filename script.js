document.querySelector("#portion").addEventListener("click", beregner);

//document.querySelector("#knap").addEventListener("click", tak);


function beregner() {
    const antal = document.querySelector("#portion").value;
    console.log(antal);
    
    const kikærter = 100;
    const oliven = 1.5;
    const tahin = 2;
    const hvidløg = 2;
    const citronsaft = 2;
    const salt = 1;

    const newKikærter = kikærter * antal;
    const newOliven = oliven * antal;
    const newTahin = tahin * antal;
    const newHvidløg = hvidløg * antal;
    const newCitronsaft = citronsaft * antal;
    const newSalt = salt * antal;

    let fremgangsTekst = `Blend de kogte kikærter i en foodprocessor sammen med cirka ${newOliven} dl olivenolie, ${newTahin} spsk tahin, ${newCitronsaft} tsk citronsaft, ${newHvidløg} presset hvidløg og ${newSalt} tsk salt. Tilsæt eventuelt mere olie undervejs, hvis der er brug for det.`
    
    
    document.querySelector("#kikærterValue").textContent = newKikærter;
    document.querySelector("#olivenolieValue").textContent = newOliven;
    document.querySelector("#tahinValue").textContent = newTahin;
    document.querySelector("#hvidløgValue").textContent = newHvidløg;
    document.querySelector("#citronsaftValue").textContent = newCitronsaft;
    document.querySelector("#saltValue").textContent = newSalt;

    document.querySelector("#fremgangsmådeTekst").textContent = fremgangsTekst;
}
/*
function tak() {
    console.log("plus 5")
    letdocument.querySelector("#stjerner").value = + 5;
    let værdi = document.querySelector("#stjerner").værdi;
    console.log(værdi);
}
*/
