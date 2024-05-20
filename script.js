function calculatePoints() {
    const biru = parseInt(document.getElementById('biru').value);
    const ungu = parseInt(document.getElementById('ungu').value);
    const kuning = parseInt(document.getElementById('kuning').value);
    const merah = parseInt(document.getElementById('merah').value);

    let totalPoints = (biru * 2) + (ungu * 10) + (kuning * 20) + (merah * 50);
    let sisaPoints = 0;

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2>Calculation Result:</h2>';

    if (totalPoints >= 130) {
        const loop = Math.floor(totalPoints / 130);
        outputDiv.innerHTML += `<p>Opened ${loop * 4} bonus boxes.</p>`;
        totalPoints %= 130;
        biru += loop;
        ungu += loop;
        kuning += loop;
        merah += loop;
    }

    if (totalPoints >= 100) {
        outputDiv.innerHTML += '<p>Opened 1 Red Box, 1 Purple Box, and 1 Yellow Box.</p>';
        totalPoints -= 100;
        merah++;
        ungu++;
        kuning++;
    } else if (totalPoints >= 70) {
        outputDiv.innerHTML += '<p>Opened 1 Purple Box and 1 Yellow Box.</p>';
        totalPoints -= 70;
        ungu++;
        kuning++;
    } else if (totalPoints >= 40) {
        outputDiv.innerHTML += '<p>Opened 1 Blue Box.</p>';
        totalPoints -= 40;
        biru++;
    }

    sisaPoints = totalPoints;

    outputDiv.innerHTML += `<p>Total Points: ${totalPoints}</p>`;
    outputDiv.innerHTML += `<p>Total Blue Boxes Opened: ${biru}</p>`;
    outputDiv.innerHTML += `<p>Total Purple Boxes Opened: ${ungu}</p>`;
    outputDiv.innerHTML += `<p>Total Yellow Boxes Opened: ${kuning}</p>`;
    outputDiv.innerHTML += `<p>Total Red Boxes Opened: ${merah}</p>`;
    outputDiv.innerHTML += `<p>Remaining Points: ${sisaPoints}</p>`;
}
