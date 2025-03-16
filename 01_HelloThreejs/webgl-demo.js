main();

function main() {
  // 1. 拿到canvas对象，这一步难度0
  const canvas = document.querySelector("#gl-canvas");
  // 2. 创建WebGLRenderingContext对象
  // 这一步的难点在于getContext的参数
  // 平常开发使用的'2d'，这里使用'webgl'
  const gl = canvas.getContext("webgl");

  // 3. 能力检测，固定写法难度0
  if (gl === null) {
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support it.",
    );
    return;
  }

  // 4. 绘制难度100，也是重点，以前没见过
  // Set clear color to black, fully opaque
  // 明明是clear，但是实际上是绘制颜色？
  // 你真不是在框俺
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  // 这一步又是干什么，没见set，一直clear？
  gl.clear(gl.COLOR_BUFFER_BIT);
}
