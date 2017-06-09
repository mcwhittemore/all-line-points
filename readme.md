# All Line Points

Get all the points on a line that you want to get.

This module must be out there already, but I can't find it.

This one is a generator. It returns an iterator which will give you each point between two points in a stright line, inclusive of the start and end points. Each point is one `stride` away from the last point. 

## Usage

`npm i all-line-points`

```js
var alp = require('all-line-points');

var start = [0, 0];
var end = [10, 5];
var stride = 1;

for (var p of alp(start, end, stride)) {
  console.log(p);
}
```

```
[ 0, 0 ]
[ 1, 0.5 ]
[ 2, 1 ]
[ 3, 1.5 ]
[ 4, 2 ]
[ 5, 2.5 ]
[ 6, 3 ]
[ 7, 3.5 ]
[ 8, 4 ]
[ 9, 4.5 ]
[ 10, 5 ]
```

## API

`alp(start, end, stride)`

### start & end

These are both [x, y] arrays. They are pretty simple.

### stide

`stride` is how you tell `alp` how far each point should be away from the last one returned. This will be enforced on the longer of the two dimentions.
