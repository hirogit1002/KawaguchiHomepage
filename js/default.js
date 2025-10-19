function haikei(){
	h = (new Date()).getHours();
	if((h >=  0) && (h <  6)) document.body.style.backgroundImage = "url(bg1.gif)";
}

// 画像を一定間隔で入れ替える
// img0.jpg,img1.jpgなどの数字が続いたファイルを複数用意します。

function changeImage() {
num = 5; // 入れ替える画像の枚数(最初の画像も含める)
nme = "../images" // 画像のディレクトリとファイル名の数字と拡張子より前の部分
exp = "jpg" // 拡張子
cnt = 0;
  cnt++;
  cnt %= num;
  document.img.src = nme + cnt + "." + exp;
}


