function openBox(box) {
    let points = (box.biru * 2) + (box.ungu * 10) + (box.kuning * 20) + (box.merah * 50);
    console.log("## Buka Box");
    console.log("Biru [" + box.biru + "] : " + (box.biru * 2) + " point");
    console.log("Ungu [" + box.ungu + "] : " + (box.ungu * 10) + " point");
    console.log("Kuning [" + box.kuning + "] : " + (box.kuning * 20) + " point");
    console.log("Merah [" + box.merah + "] : " + (box.merah * 50) + " point");
    console.log("Total Point: " + points);

    box.biru = 0;
    box.ungu = 0;
    box.kuning = 0;
    box.merah = 0;

    return points;
}

function redeemBox(box, points) {
    let sisa = points % 130;
    let loop = Math.floor(points / 130);

    box.biru += loop;
    box.ungu += loop;
    box.kuning += loop;
    box.merah += loop;

    console.log("## Redeem point " + loop * 130);
    console.log("## Sisa point " + sisa);

    return sisa;
}

function calculatePoints() {
    let biru = parseInt(document.getElementById('biru').value);
    let ungu = parseInt(document.getElementById('ungu').value);
    let kuning = parseInt(document.getElementById('kuning').value);
    let merah = parseInt(document.getElementById('merah').value);

    let kotak = {
        biru: biru,
        ungu: ungu,
        kuning: kuning,
        merah: merah
    };

    let totalPoints = 0;
    let openPoints = 0;
    let sisaPoints = 0;

    openPoints += openBox(kotak);
    totalPoints += openPoints;

    while (openPoints >= 130) {
        sisaPoints = redeemBox(kotak, openPoints);

        let openBoxPoints = openBox(kotak);
        openPoints = sisaPoints + openBoxPoints;

        totalPoints += openBoxPoints;
    }

    let offset = 0;
    let looping = 1;
    while(looping >= 1){
        if (openPoints >= 130) {
            kotak.merah++;
            kotak.kuning++;
            kotak.ungu++;
            kotak.biru++;
            sisaPoints = openPoints - 130;
            offset = 130;
        } else if (openPoints >= 100) {
            kotak.kuning++;
            kotak.ungu++;
            kotak.biru++;
            sisaPoints = openPoints - 100;
            offset = 100;
        } else if (openPoints >= 70) {
            kotak.ungu++;
            kotak.biru++;
            sisaPoints = openPoints - 70;
            offset = 70;
        } else if (openPoints >= 40) {
            kotak.biru++;
            sisaPoints = openPoints - 40;
            offset = 40;
        } else {
            looping = 0;
        }
    
        openPoints = openBox(kotak);
        totalPoints += openPoints;
    }
    sisaPoints += openPoints;

    // Menampilkan hasil pada elemen HTML
    let resultContainer = document.getElementById('result');
    resultContainer.innerHTML = "<h2>Hasil</h2>";
    resultContainer.innerHTML += "<p>Total point: " + totalPoints + "</p>";
    resultContainer.innerHTML += "<p>Sisa point: " + sisaPoints + "</p>";
    resultContainer.innerHTML += "<p>Offset terakhir: " + offset + "</p>";
}
