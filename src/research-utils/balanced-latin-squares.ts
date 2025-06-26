export const balancedLatinSquares = (n: number): void => {
  const isEven = n % 2 === 0;
  const square: Array<Array<number>> = [];

  const firstRow = [];
  let m = 0;
  for(let i = 1; i < n + 1; i++) {
    if (i <= 2) {
      firstRow.push(i);
    } else if (i % 2 !== 0) {
      firstRow.push(n - m);
      m++;
    } else {
      firstRow.push(i - m);
    }
  }

  square.push(firstRow);
  let l = square.length;
  let lastRow = firstRow;
  let row: number[] = [];
  while(l < n) {
    row = lastRow.map((condition) => {
      if (condition === n) {
        return 1;
      }

      return condition + 1;
    });
    
    square.push(row);
    lastRow = row;
    row = [];
    l = square.length;
  }

  if (!isEven) {
    for(let r = 0; r < l; r++) {
      const newRow = [...square[r]];
      square.push(newRow.reverse());
    }
  }

  console.log(square.length);
  console.log(
    square.map((r) => r.join(', ')).join('\n')
  );
}