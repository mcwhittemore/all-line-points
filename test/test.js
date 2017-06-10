var tape = require('tape');

var alp = require('../');

tape('test low to high for x and y', function(assert) {
  var result = [];
  var opts = {
    points: [[0,0], [10,10]],
    stride: 1
  };
  for (var p of alp(opts)) {
    result.push(p.join('|'));
  }
  result = result.join(',');

  assert.equal(result, '0|0,1|1,2|2,3|3,4|4,5|5,6|6,7|7,8|8,9|9,10|10');
  assert.end();
});

tape('low to high for y, high to low for x', function(assert) {
  var result = [];
  var opts = {
    points: [[10, 0], [0, 10]],
    stride: 1
  };
  for (var p of alp(opts)) {
    result.push(p.join('|'));
  }
  result = result.join(',');
  assert.equal(result, '10|0,9|1,8|2,7|3,6|4,5|5,4|6,3|7,2|8,1|9,0|10');
  assert.end();
});

tape('low to high for y, no more for x', function(assert) {
  var result = [];
  var opts = {
    points: [[10, 0], [10, 10]],
    stride: 1
  };
  for (var p of alp(opts)) {
    result.push(p.join('|'));
  }
  result = result.join(',');
  assert.equal(result, '10|0,10|1,10|2,10|3,10|4,10|5,10|6,10|7,10|8,10|9,10|10');
  assert.end();
});

tape('low to high for x, no more for y', function(assert) {
  var result = [];
  var opts = {
    points: [[0, 10], [10, 10]],
    stride: 1
  };
  for (var p of alp(opts)) {
    result.push(p.join('|'));
  }
  result = result.join(',');
  assert.equal(result, '0|10,1|10,2|10,3|10,4|10,5|10,6|10,7|10,8|10,9|10,10|10');
  assert.end();
});

tape('low to high for x, high to low for y', function(assert) {
  var result = [];
  var opts = {
    points: [[0, 10], [10, 0]],
    stride: 1
  };
  for (var p of alp(opts)) {
    result.push(p.join('|'));
  }
  result = result.join(',');
  assert.equal(result, '0|10,1|9,2|8,3|7,4|6,5|5,6|4,7|3,8|2,9|1,10|0');
  assert.end();
});

tape('lots of x, little y, small to big', function(assert) {
  var result = [];
  var opts = {
    points: [[0, 0], [15, 1]],
    stride: 1
  };
  for (var p of alp(opts)) {
    result.push(p.map(v => Math.floor(v+.5)).join('|'));
  }
  result = result.join(',');
  assert.equal(result, '0|0,1|0,2|0,3|0,4|0,5|0,6|0,7|0,8|1,9|1,10|1,11|1,12|1,13|1,14|1,15|1');
  assert.end();
});

tape('lots of y, little x, small to big', function(assert) {
  var result = [];
  var opts = {
    points: [[0, 0], [1, 15]],
    stride: 1
  };
  for (var p of alp(opts)) {
    result.push(p.map(v => Math.floor(v+.5)).join('|'));
  }
  result = result.join(',');
  assert.equal(result, '0|0,0|1,0|2,0|3,0|4,0|5,0|6,0|7,1|8,1|9,1|10,1|11,1|12,1|13,1|14,1|15');
  assert.end();
});

