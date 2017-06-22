# All Line Points

Get all the points on a line that you want to get.

This module must be out there already, but I can't find it.

This one is a generator. It returns an iterator which will give you each point between two points in a stright line, inclusive of the start and end points. Each point is one `stride` away from the last point. 

## Usage

`npm i all-line-points`

```js
var alp = require('all-line-points');

var opts = {
  points: [[0,0], [10,5]],
  stride: 1,
  transform: function(p) { return p.map(Math.floor); }
};

for (var p of alp(opts)) {
  console.log(p);
}
```

```
[ 0, 0 ]
[ 1, 0 ]
[ 2, 1 ]
[ 3, 1 ]
[ 4, 2 ]
[ 5, 2 ]
[ 6, 3 ]
[ 7, 3 ]
[ 8, 4 ]
[ 10, 5 ]
```

## API

`alp({points, stride, transform})`

### points: {Array[Array[Number]]}

This is an array of [x, y, ...] arrays. Consecutive duplicated points will be skipped. The inner array must have at least one value and all inner arrays MUST have the same length.

### stide: {Number}

`stride` is how you tell `alp` how far each point should be away from the last one returned across the longest edge of the triangle.

### transform: {Function}

The transform is passed a point and a point MUST be returned. This gives you a chance to transform the result before it is returned to your application. In the example above, this is used to skip fractional integer steps as no two identical consecutive points after the transform are returned.
