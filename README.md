# Grid for code-blocs and console

## Syntaxe

```js
let head = ["","","",...]
let body = [
	["","","",...],
	["","","",...],
	["","","",...],
	...
]
console.log( grid( head, body))
```

## Good to know

All arrays in the body must be the same length as the head array. A title setting will be added in future releases. The size of the grid depends on the size of the elements that are displayed.

## Example

```js
const grid = require("console-gridlist")

let example = grid("id,name,age",[

	// from Array
	["1","patrick","20"],

	// from String
	"2,bob,30",

	// from Object values
	{id:3,name:"louis",age:21}

	// from other... 
	// (Map, Discord.Collection)
])

console.log(example)
```

## Result

```rust
 id ║ name    ║ age
════╬═════════╬════
 1  ║ patrick ║ 20
 2  ║ bob     ║ 30
 3  ║ louis   ║ 21
```