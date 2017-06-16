module.exports = function* (opts) {
  var maxStep = opts.stride || 1;
  var hook = opts.hook || function(n) { return n; };

  var last = null;

  var p1 = opts.points[0];
  var vx = p1[0];
  var vy = p1[1];
  var p2 = null;
  for (var p=1; p<opts.points.length; p++) {
    p2 = opts.points[p];
    var dx = p2[0] - p1[0];
    var dy = p2[1] - p1[1];
    var dc = Math.sqrt((dx*dx)+(dy*dy));

    var sx = (dx/dc) * maxStep;
    var sy = (dy/dc) * maxStep;
    var sc = Math.floor(dc/maxStep);

    for (var i=0; i<sc; i++) {
      var next = hook([vx, vy]);
      if (next.join('|') !== last) {
        yield next;
        last = next.join('|');
      }
      vx += sx;
      vy += sy;
    }

    p1 = p2;
  }

  var next = hook([].concat(p2));
  if (next.join('|') !== last) {
    yield next;
  }
}
