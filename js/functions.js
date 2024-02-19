let jokeriRiveja = 0;

function generateJokerRow() {
    const jokerTable = document.getElementById('jokeripoyta');
    const newRow = document.createElement('div');
    newRow.className = 'jokeririvi';

    for (let i = 0; i < 7; i++) {
        const randomNumber = Math.floor(Math.random() * 10);
        const cell = document.createElement('div');
        cell.className = 'cell1';
        cell.textContent = randomNumber;
        newRow.appendChild(cell);
    }

    jokerTable.appendChild(newRow);

    jokeriRiveja++;
    updateRowCount();
}

function updateRowCount() {
    document.getElementById('rivimaara').textContent = `Valmiita rivejä: ${jokeriRiveja}`;
}
