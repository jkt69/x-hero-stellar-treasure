function calculatePoints() {
    const biru = parseInt(document.getElementById('biru').value);
    const ungu = parseInt(document.getElementById('ungu').value);
    const kuning = parseInt(document.getElementById('kuning').value);
    const merah = parseInt(document.getElementById('merah').value);

    const totalPoints = (biru * 2) + (ungu * 10) + (kuning * 20) + (merah * 50);

    let remainingPoints = totalPoints;
    let totalBoxes = 0;

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2>Boxes Opened:</h2>';

    while (remainingPoints >= 130) {
        remainingPoints -= 130;
        totalBoxes += 4;
        outputDiv.innerHTML += '<p>Opened 4 bonus boxes.</p>';
    }

    if (remainingPoints >= 100) {
        remainingPoints -= 100;
        totalBoxes += 3;
        outputDiv.innerHTML += '<p>Opened 1 Red Box, 1 Purple Box, and 1 Yellow Box.</p>';
    } else if (remainingPoints >= 70) {
        remainingPoints -= 70;
        totalBoxes += 2;
        outputDiv.innerHTML += '<p>Opened 1 Purple Box and 1 Yellow Box.</p>';
    } else if (remainingPoints >= 40) {
        remainingPoints -= 40;
        totalBoxes += 1;
        outputDiv.innerHTML += '<p>Opened 1 Blue Box.</p>';
    }

    outputDiv.innerHTML += `<p>Total Points: ${totalPoints}</p>`;
    outputDiv.innerHTML += `<p>Total Boxes Opened: ${totalBoxes}</p>`;
}
