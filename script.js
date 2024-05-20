function calculatePoints() {
    const biru = parseInt(document.getElementById('biru').value);
    const ungu = parseInt(document.getElementById('ungu').value);
    const kuning = parseInt(document.getElementById('kuning').value);
    const merah = parseInt(document.getElementById('merah').value);

    const totalPoints = (biru * 2) + (ungu * 10) + (kuning * 20) + (merah * 50);
    const totalBoxes = biru + ungu + kuning + merah;

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <p>Total Points: ${totalPoints}</p>
        <p>Total Boxes Opened: ${totalBoxes}</p>
    `;
}
