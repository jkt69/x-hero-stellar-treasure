function calculatePoints() {
    const biru = parseInt(document.getElementById('biru').value);
    const ungu = parseInt(document.getElementById('ungu').value);
    const kuning = parseInt(document.getElementById('kuning').value);
    const merah = parseInt(document.getElementById('merah').value);

    const totalPoints = (biru * 2) + (ungu * 10) + (kuning * 20) + (merah * 50);

    let remainingPoints = totalPoints;
    let openedBoxes = {
        biru: 0,
        ungu: 0,
        kuning: 0,
        merah: 0
    };

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2>Boxes Opened:</h2>';

    while (remainingPoints >= 130) {
        remainingPoints -= 130;
        openedBoxes.biru++;
        openedBoxes.ungu++;
        openedBoxes.kuning++;
        openedBoxes.merah++;
        outputDiv.innerHTML += '<p>Opened 1 bonus Blue Box, Purple Box, Yellow Box, and Red Box.</p>';
    }

    openedBoxes.merah += Math.floor(remainingPoints / 50);
    remainingPoints %= 50;
    openedBoxes.kuning += Math.floor(remainingPoints / 20);
    remainingPoints %= 20;
    openedBoxes.ungu += Math.floor(remainingPoints / 10);
    remainingPoints %= 10;
    openedBoxes.biru += Math.floor(remainingPoints / 2);
    remainingPoints %= 2;

    outputDiv.innerHTML += `<p>Total Points: ${totalPoints}</p>`;
    outputDiv.innerHTML += `<p>Total Blue Boxes Opened: ${openedBoxes.biru}</p>`;
    outputDiv.innerHTML += `<p>Total Purple Boxes Opened: ${openedBoxes.ungu}</p>`;
    outputDiv.innerHTML += `<p>Total Yellow Boxes Opened: ${openedBoxes.kuning}</p>`;
    outputDiv.innerHTML += `<p>Total Red Boxes Opened: ${openedBoxes.merah}</p>`;
    outputDiv.innerHTML += `<p>Remaining Points: ${remainingPoints}</p>`;
}
