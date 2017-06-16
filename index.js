module.exports = function* (opts) {
  var p1 = opts.points[0];
  var p2 = opts.points[1];
  var maxStep = opts.stride || 1;
  var hook = opts.hook || function(n) { return n; };

  var dx = p2[0] - p1[0];
  var dy = p2[1] - p1[1];
  var dc = Math.sqrt((dx*dx)+(dy*dy));

  var sx = (dx/dc) * maxStep;
  var sy = (dy/dc) * maxStep;
  var sc = Math.floor(dc/maxStep);

  var vx = p1[0];
  var vy = p1[1];

  for (var i=0; i<sc; i++) {
    yield [vx, vy];
    vx += sx;
    vy += sy;
  }
  yield [].concat(p2);
}
