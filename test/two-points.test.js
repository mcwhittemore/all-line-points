var tape = require('tape');

var alp = require('../');

var lines = [
  [[0,10], [10,0]],
  [[10,0], [0, 10]],
  [[0,10], [10,10]],
  [[10,0], [10,10]],
  [[0,10], [0, 0]],
  [[10,0], [0, 0]]
];

var strides = [.3, 1, 3];

lines.forEach(function(line) {
  strides.forEach(function(stride) {
    tape(`confirm line ${line.join('|')} at stride ${stride}`, function(assert) {
      var opts = {
        points: line,
        stride: stride
      };
      var s = null;
      var step = 0;
      var tStride = 0;
      for (var e of alp(opts)) {
        if (s!==null) {
          var dx = s[0]-e[0];
          var dy = s[1]-e[1];
          var dc = Math.sqrt((dx*dx)+(dy*dy));
          tStride += dc;
        }
        else {
          assert.equal(e[0], line[0][0], 'starting x');
          assert.equal(e[1], line[0][1], 'starting y');
        }
        s = e;
        step++;
      }
      var as = parseFloat((tStride / step).toFixed(6));
      var ms = parseFloat(((stride / step) * (step-1)).toFixed(6));
      assert.ok(as <= stride, 'not too big');
      assert.ok(ms <= as, 'not to small');
      assert.equal(s[0], line[1][0], 'ending x');
      assert.equal(s[1], line[1][1], 'ending y');
      assert.end();
    });
  });
});

