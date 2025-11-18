// 小手調べ
function setup(){
  createCanvas(100, 100);
   for(let i = 0; i < 10; i++){//forは繰り返し,letは変数　i を 0 から 9 まで繰り返し１ずつ足す
    let size = (i + 1) * 10;//（i+1）×１０
  noFill();//色を埋めない
   if(i < 5){　//iが５より小さいなら、青、そうでないなら赤
      stroke(0, 0, 255); // 青色の線
    } else {
      stroke(255, 0, 0); // 赤色の線
    }
    ellipse(50, 50, size, size);//楕円（中心ｘ、中心ｙ、幅、高さ）
  
    // BLANK[1] 条件分岐を使って、前半は赤、後半は青で円を描こう
  }
}
