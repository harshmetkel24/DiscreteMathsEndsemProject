// code for the thead-indexes

let headrow = '<td>Index</td>';
for (let i = 0; i < 14; i++) {
    headrow += `<td>${i + 1}</td>`;
}

document.getElementsByClassName('thead').innerHTML = headrow;

let A = new Array(14);
for (let i = 0; i < A.length; i++) {
    A[i] = new Array(14);
    for (let j = 0; j < 14; j++) {
        A[i][j] = 0;
    }
}

let Asq = new Array(14);

for (let i = 0; i < Asq.length; i++) {
    Asq[i] = new Array(14);
    for (let j = 0; j < 14; j++) {
        Asq[i][j] = 0;
    }
}

// Adding ones to the Matrix, which represent dependent animals

A[4][3] =
    A[5][1] =
    A[5][2] =
    A[6][0] =
    A[7][3] =
    A[7][4] =
    A[8][5] =
    A[9][4] =
    A[9][5] =
    A[9][6] =
    A[9][7] =
    A[10][4] =
    A[10][7] =
    A[11][8] =
    A[11][10] =
    A[12][8] =
    A[12][9] =
    A[12][11] =
    A[13][9] =
    A[13][10] =
    A[13][11] =
    A[13][12] =
        1;

// perfoming matrix multipication
for (let i = 0; i < 14; i++) {
    for (let j = 0; j < 14; j++) {
        for (let k = 0; k < 14; k++) {
            Asq[i][j] += A[i][k] * A[k][j];
        }
    }
}

// Displaying content on click of start
document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('table').style.visibility = 'visible';
    document.getElementById('para3').style.visibility = 'visible';
    document.getElementById('table2').style.visibility = 'visible';
});

let row = '';
for (let i = 0; i < A.length; i++) {
    row += `<tr> <td>${i + 1}</td><td>${A[i][0]}</td> <td>${A[i][1]}</td> <td>${
        A[i][2]
    }</td> <td>${A[i][3]}</td> <td>${A[i][4]}</td>
        <td>${A[i][5]}</td> <td>${A[i][6]}</td> <td>${A[i][7]}</td> <td>${
        A[i][8]
    }</td> <td>${A[i][9]}</td> <td>${A[i][10]}</td> <td>${A[i][11]}</td> <td>${
        A[i][12]
    }</td> <td>${A[i][13]}</td> </tr>`;
    document.getElementById('body').innerHTML = row;
}

let row2 = '';
for (let i = 0; i < A.length; i++) {
    row2 += `<tr> <td>${i + 1}</td><td>${Asq[i][0]}</td> <td>${
        Asq[i][1]
    }</td> <td>${Asq[i][2]}</td> <td>${Asq[i][3]}</td> <td>${Asq[i][4]}</td>
        <td>${A[i][5]}</td> <td>${Asq[i][6]}</td> <td>${Asq[i][7]}</td> <td>${
        Asq[i][8]
    }</td> <td>${Asq[i][9]}</td> <td>${Asq[i][10]}</td> <td>${
        Asq[i][11]
    }</td> <td>${Asq[i][12]}</td> <td>${Asq[i][13]}</td> </tr>`;
    document.getElementById('body2').innerHTML = row2;
}
