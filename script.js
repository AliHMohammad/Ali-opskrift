document.querySelector("#portion").addEventListener("click", beregner);

function beregner() {
    const antal = document.querySelector("#portion").value;
    const getPersoner = document.querySelector("#pers");
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

    if (antal == 2) {
        getPersoner.textContent = "Portioner til 2-3 personer";
    } else if (antal == 3) {
        getPersoner.textContent = "Portioner til 3-4 personer";
    } else if (antal == 4) {
        getPersoner.textContent = "Portioner til 4-5 personer";
    } else if (antal == 5) {
        getPersoner.textContent = "Portioner til 5-6 personer";
    } else if (antal == 1) {
        getPersoner.textContent = "Portion til 1-2 personer";
    } else {
        console.log("This should not happen")
    }
}

