var tape = require('tape');

var alp = require('../');

tape('confirm custom hook works', function(assert) {
  var opts = {
    points: [[2,0],[0,2]],
    stride: .3,
    hook: function(n) { return n.map(Math.floor); }
  };
  var expected = [
    [ 2, 0 ],
    [ 1, 0 ],
    [0, 1],
    [0, 2]
  ];

  var step = 0;
  for (var p of alp(opts)) {
    var ex = expected[step] || [];
    assert.equal(p.join('|'), ex.join('|'), 'at step '+step);
    step++;
  }
  assert.end();
});

