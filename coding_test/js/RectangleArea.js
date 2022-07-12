function solution(rectangles) {
  var answer = -1;

  // 좌표 범위 설정
  const arr1 = [];
  const arr2 = [];

  for (let i = 0; i < rectangles.length; i++) {
    const x2 = rectangles[i][2];
    const y2 = rectangles[i][3];
    arr1.push(x2);
    arr2.push(y2);
  }

  const lastX = Math.max.apply(null, arr1); // 최대 x 좌표
  const lastY = Math.max.apply(null, arr2); // 최대 y 좌표

  let sum = 0; // 넓이 합
  let element = new Array(lastX); // 넓이 2차원 행렬
  for (let i = 0; i < lastX; i++) {
    element[i] = new Array(lastY);
  }

  for (let i = 0; i < rectangles.length; i++) {
    const [x1, y1, x2, y2] = rectangles[i];

    for (let x = x1; x < x2; x++) {
      for (let y = y1; y < y2; y++) {
        const el = element[x][y] || 0;
        // 겹치는 부분
        if (element[x][y] === 1) {
          continue;
        }
        element[x][y] = 1;
        sum++;
      }
    }
  }

  answer = sum;

  return answer;
}
