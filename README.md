# Grid for code-blocs and console

## Install

`npm install console-gridlist@latest`

## Syntaxe

```js
let title = "title"
// The title of grid
// String only
// Line breaks accepted

let head = ["","","",...]
/* The titles of each column
	You can set the alignment of cells 
	by including one of these arrows in 
	a column title. 
		left : ←
		right : →
		center : none
*/

// The body is a 2D array 
// that contains the elements
let body = [
	["","","",...],
	["","","",...],
	["","","",...],
	...
]

// Syntaxe
console.log( grid( title, head, body))
```

## Good to know

All arrays in the body must be the same length as the head array. A title setting will be added in future releases. The size of the grid depends on the size of the elements that are displayed.

## Example

```js
const grid = require("console-gridlist")

let example = grid("Classement",

	// head from string
	"id→,name,←age",

	[// body

		// from Array
		["1","patrick","20"],

		// from String
		"2,bob,30",

		// from Object values
		{id:3,name:"louis",age:21}

		// from other... 
		// (Map, Discord.Collection)
	]
)

console.log(example)
```

## Result

```rust
╔════════════════════╗
║     Classement     ║
╠════╦═════════╦═════╣
║ id ║  name   ║ age ║
╠════╬═════════╬═════╣
║  1 ║ patrick ║ 20  ║
║  2 ║   bob   ║ 30  ║
║  3 ║  louis  ║ 21  ║
╚════╩═════════╩═════╝
```