document.querySelector("#portion").addEventListener("click", beregner);

function beregner() {

    // Gemmer værdier i const
    const antal = document.querySelector("#portion").value;
    const getPersoner = document.querySelector("#pers");
    console.log(antal);
    
    const kikærter = 100;
    const oliven = 1.5;
    const tahin = 2;
    const hvidløg = 2;
    const citronsaft = 2;
    const salt = 1;

    const kikærterKcal = 177;
    const olivenKcal = 122;
    const tahinKcal = 178;
    const hvidløgKcal = 94;
    const citronsaftKcal = 4;
    const saltKcal = 0;  

    //Ny mængde af ingredienser
    const newKikærter = kikærter * antal;
    const newOliven = oliven * antal;
    const newTahin = tahin * antal;
    const newHvidløg = hvidløg * antal;
    const newCitronsaft = citronsaft * antal;
    const newSalt = salt * antal; 

    //Ny udregning af kalorier ift. antal personer
    const newKikærterKcal = kikærterKcal * antal;
    const newOlivenKcal = olivenKcal * antal;
    const newTahinKcal = tahinKcal * antal;
    const newHvidløgKcal = hvidløgKcal * antal;
    const newCitronsaftKcal = citronsaftKcal * antal;
    const newSaltKcal = saltKcal * antal;

    //Sum af kalorier
    const sumKcal =
        newKikærterKcal +
        newOlivenKcal +
        newTahinKcal +
        newHvidløgKcal +
        newCitronsaftKcal +
        newSaltKcal;

    //Kalorier (tabel)
    document.querySelector("#kikærterKcal").textContent = newKikærterKcal;
    document.querySelector("#olivenolieKcal").textContent = newOlivenKcal;
    document.querySelector("#tahinKcal").textContent = newTahinKcal;
    document.querySelector("#hvidløgKcal").textContent = newHvidløgKcal;
    document.querySelector("#citronsaftKcal").textContent = newCitronsaftKcal;
    document.querySelector("#saltKcal").textContent = newSaltKcal;
    document.querySelector("#totalKcal").textContent = `${sumKcal} Kcal`;

    

    
    //Mængde (tabel)
    document.querySelector("#kikærterValue").textContent = newKikærter;
    document.querySelector("#olivenolieValue").textContent = newOliven;
    document.querySelector("#tahinValue").textContent = newTahin;
    document.querySelector("#hvidløgValue").textContent = newHvidløg;
    document.querySelector("#citronsaftValue").textContent = newCitronsaft;
    document.querySelector("#saltValue").textContent = newSalt;



    //Antal personer tekst
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

    //Opdatering af fremgangsmåde punkt 4 tekst
    let fremgangsTekst = `Blend de kogte kikærter i en foodprocessor sammen med cirka ${newOliven} cL olivenolie, ${newTahin} spsk tahin, ${newCitronsaft} tsk citronsaft, ${newHvidløg} presset hvidløg og ${newSalt} tsk salt. Tilsæt eventuelt mere olie undervejs, hvis der er brug for det.`;
    document.querySelector("#fremgangsmådeTekst").textContent = fremgangsTekst;

}