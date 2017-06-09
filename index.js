module.exports = function* (p1, p2, maxStep) {
  var dx = p2[0] - p1[0];
  var dy = p2[1] - p1[1];
  
  var sx, sy, sc;

  if (Math.abs(dx) > Math.abs(dy)) {
    sc = Math.abs(dx);
    sx = dx < 0 ? -1 : 1;
    sy = dy/Math.abs(dx);
  }
  else {
    sc = Math.abs(dy);
    sy = dy < 0 ? -1 : 1;
    sx = dx/Math.abs(dy);
  }

  sc /= maxStep;
  sx *= maxStep;
  sy *= maxStep;

  var vx = p1[0];
  var vy = p1[1];

  for (var i=0; i<sc; i++) {
    yield [vx, vy];
    vx += sx;
    vy += sy;
  }
  yield [vx, vy];
}
