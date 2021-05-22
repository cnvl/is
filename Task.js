const cipher = [
  ['С', 'Е', 'Р', 'Н', 'О', 'В', 'И', 'Щ', 'Е'],
  [18, 6, 17, 16, 15, 3, 9, 26, 6],
  ['Д', 'Ч', 'М', 'П', 'Ш', 'К', 'И', 'И', 'Ч'],
  ['О', 'А', 'И', 'О', 'К', 'З', 'З', 'М', 'И'],
  ['С', 'С', 'Н', 'С', 'О', 'А', 'И', 'А', 'Т'],
  ['И', 'Т', 'А', 'Л', 'Л', 'М', 'К', 'Л', 'Е'],
  ['Х', 'О', 'Ю', 'Е', 'Ь', 'Е', 'Е', 'А', 'Л'],
  ['П', 'В', 'С', 'Д', 'Н', 'Н', 'П', 'Е', 'Ь'],
  ['О', 'С', 'В', 'Н', 'Ы', 'П', 'Р', 'Г', 'Н'],
  ['Р', 'П', 'О', 'И', 'Й', 'О', 'И', 'О', 'И'],
  ['Я', 'О', 'Й', 'Й', 'Э', 'Ф', 'Н', 'У', 'Ц'],
];

function encrypt(mtrx) {
  let noSwaps;
  for (let i = 9; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (mtrx[1][j] > mtrx[1][j + 1]) {
        for (let q = 0; q < 11; q++) {
          let temp = mtrx[q][j];
          mtrx[q][j] = mtrx[q][j + 1];
          mtrx[q][j + 1] = temp;
          noSwaps = false;
        }
      }
    }
    if (noSwaps) break;
  }
  display('ENCRYPTED', mtrx);
  decrypt(mtrx);
}

function decrypt(mtrx) {
  const key = 'СЕРНОВИЩЕ';

  let alphabet = [],
    i = 'А'.charCodeAt(0),
    j = 'Я'.charCodeAt(0);
  for (; i <= j; ++i) {
    alphabet.push(String.fromCharCode(i));
  }

  for (let i = 0; i < 9; i++) {
    let pos = mtrx[0].indexOf(key[i]);
    if (mtrx[0][i] !== key[i])
      for (let j = 0; j < 11; j++) {
        let temp = mtrx[j][pos];
        mtrx[j][pos] = mtrx[j][i];
        mtrx[j][i] = temp;
      }
  }
  display('DECRYPTED', mtrx);
}

function display(title, mtrx) {
  console.log(`====${title}====`);
  for (let i = 0; i < 11; i++) {
    let str = '';
    for (let j = 0; j < 9; j++) {
      str += mtrx[i][j] + ' ';
    }
    console.log(str);
  }
}

encrypt(cipher);
