module.exports = function* (opts) {
  var maxStep = opts.stride || 1;
  var transform = opts.transform || function(n) { return n; };

  var last = null;

  var p1 = opts.points[0];
  var dims = opts.points[0].map(v => v);
  var p2 = null;
  for (var p=1; p<opts.points.length; p++) {
    p2 = opts.points[p];
    var dist = p1.map((v, i) => p2[i] - v);
    var distTotal = dist.reduce((m, v) => Math.sqrt((m*m)+(v*v)));

    var steps = dist.map(v => (v/distTotal) * maxStep);
    var sc = Math.floor(distTotal/maxStep);

    for (var i=0; i<sc; i++) {
      var next = transform(dims);
      if (next.join('|') !== last) {
        yield next;
        last = next.join('|');
      }
      dims = dims.map((v, i) => v+steps[i]);
    }

    p1 = p2;
  }

  var next = transform([].concat(p2));
  if (next.join('|') !== last) {
    yield next;
  }
}
