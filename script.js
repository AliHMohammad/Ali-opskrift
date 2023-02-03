document.querySelector("#portion").addEventListener("click", beregner);


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

    let fremgangsTekst = `Sæt tørrede kikærterne i blød i en stor skål eller gryde i mindst 10 timer. Hæld derefter vandet fra og skyl dem grundigt. Kog nu kikærterne i cirka 1 time til halvanden (hellere for meget end for lidt). Lad kikærterne stå og køle lidt af (1 times tid cirka, og eventuelt i køleskabet). Hvis du har kogt en stor portion kan du nu dele den ud i mindre portioner i fryseposer og fryse dem ned til en anden god gang. Blend de kogte kikærter i en foodprocessor sammen med cirka ${newOliven} dl olivenolie, ${newTahin} spsk tahin, ${newCitronsaft} tsk citronsaft, ${newHvidløg} presset hvidløg og ${newSalt} tsk salt. Tilsæt eventuelt mere olie undervejs, hvis der er brug for det. Blend videre indtil konsistensen er så cremet og fin som muligt. Når konsistensen er som ønsket smages der til med salt og citronsaft for at få den helt rigtige smag.`
    
    
    document.querySelector("#kikærterValue").textContent = newKikærter;
    document.querySelector("#olivenolieValue").textContent = newOliven;
    document.querySelector("#tahinValue").textContent = newTahin;
    document.querySelector("#hvidløgValue").textContent = newHvidløg;
    document.querySelector("#citronsaftValue").textContent = newCitronsaft;
    document.querySelector("#saltValue").textContent = newSalt;

    document.querySelector("#fremgangsmådeTekst").textContent = fremgangsTekst;

}