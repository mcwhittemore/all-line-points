var tape = require('tape');

var alp = require('../');

tape('confirm one dimension works', function(assert) {
  var opts = {
    points: [[0], [5]],
    stride: 1
  };

  var expected = [[0], [1], [2], [3], [4], [5]];

  var step = 0;
  for (var p of alp(opts)) {
    var ex = expected[step] || [];
    assert.equal(p.join('|'), ex.join('|'), 'at step '+step);
    step++;
  }
  assert.end();
});

tape('confirm three dimensions work', function(assert) {
  var opts = {
    points: [[0, 0, 0], [5, 5, 5]],
    stride: 1,
    transform: function(n) { return n.map(Math.floor); }
  }

  var expected = [
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
    [4, 4, 4],
    [5, 5, 5]
  ];

  var step = 0;
  for (var p of alp(opts)) {
    var ex = expected[step] || [];
    assert.equal(p.join('|'), ex.join('|'), 'at step '+step);
    step++;
  }
  assert.end();
});

var numDims = Math.floor(Math.random()*100) + 3;
tape(`confirm n (${numDims}) dimensions works where n is great than 3`, function(assert) {
  var expected = [0,1,2,3,4,5].map(v => {
    var out = [];
    for (var i=0; i<numDims; i++) {
      out.push(v);
    }
    return out;
  });

  var opts = {
    points: [expected[0], expected[5]],
    stride: 1,
    transform: function(n) { return n.map(Math.floor); }
  };

  var step = 0;
  for (var p of alp(opts)) {
    var ex = expected[step] || [];
    assert.equal(p.join('|'), ex.join('|'), 'at step '+step);
    step++;
  }
  assert.end();
});

