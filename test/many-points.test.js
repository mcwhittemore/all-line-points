var tape = require('tape');

var alp = require('../');

var lines = [
  [[0,0], [0,0], [0,0], [0,0]],
  [[10,0], [0, 10], [99, -2]],
  [[0,10], [10,10], [-36, 10], [40, 2]],
  [[10,0], [10,10], [10, 10]],
  [[0,10], [0, 0], [0, 10]],
  [[10,0], [0, 0], [1, 1], [-1, -1], [-1, 0]]
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
      for (var e of alp(opts)) {
        if (s===null) {
          assert.equal(e[0], line[0][0], 'starting x');
          assert.equal(e[1], line[0][1], 'starting y');
        }
        else {
          assert.notEqual(e.join('|'), s.join('|'), 'last and current are not the same');
        }
        s = e;
      }
      assert.equal(s[0], line[line.length-1][0], 'ending x');
      assert.equal(s[1], line[line.length-1][1], 'ending y');
      assert.end();
    });
  });
});

