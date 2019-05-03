
let fill = "════════════════════════════════════════════"

module.exports = function(title,head,resolvable){
	let titles = title.split("\n")
	let body = toArray(resolvable)
	if(toArray(head)===false){
		return error("head of grid is malformed")
	}
	if(body !== false){
		body = body.map(a=>toArray(a))
		if(body.every(a=>a!==false&&a.length===toArray(head).length)){
			return grid(titles,[toArray(head)].concat(body))
		}else{
			return error("a child grid is malformed")
		}
	}else{
		return error("the parent grid is malformed")
	}
}

function error(message){
	console.error(`[console-grid] ${message}`)
	return `[console-grid] ${message}`
}

function toArray(resolvable){
	if(resolvable){
		if(resolvable.constructor){
			let classe = resolvable.constructor.name
			if(Array.isArray(resolvable)){
				return resolvable.slice(0)
			}else if(classe === "Collection"){
				return resolvable.clone().array()
			}else if(classe === "Object"){
				return Object.values(resolvable)
			}else if(classe === "Map"){
				return Array.from(resolvable.values())
			}else if(typeof resolvable === "string"){
				return resolvable.split(",").map(s=>s.trim())
			}
		}
	}
	return false
}

function grid(titles,array){
	let log = []
	let max = []
	let allign = []
	array.map(function(l,i){
		return l.map(function(colone,c){
			colone = `${colone}`
			if(i===0){
				if(colone.includes("→")){
					colone = colone.replace("→","")
					allign[c] = "right"
				}else if(colone.includes("←")){
					colone = colone.replace("←","")
					allign[c] = "left"
				}else{
					allign[c] = "center"
				}
			}
			if(isNaN(max[c])){
				max[c] = colone.length;
			}
			if(max[c] < colone.length){
				max[c] = colone.length
			}
			return colone
		})
	})
	array.forEach(function(l,i){
		log.push("║ "+line(l,max,allign)+" ║")
		if(i===0){
			log.push("╠═"+line(l.map(a=>"═"),max,allign)+"═╣")
		}
	})
	log.unshift("╠═"+max.map(m=>fill.slice(0,m)).join("═╦═")+"═╣")
	titles.reverse().forEach(function(title){
		let size = 0
		max.forEach(m=>size+=m)
		size += (max.length-1)*3
		log.unshift("║ "+caser(title,size,"center")+" ║")
	})
	log.unshift("╔═"+max.map(m=>fill.slice(0,m)).join("═══")+"═╗")
	log.push("╚═"+max.map(m=>fill.slice(0,m)).join("═╩═")+"═╝")
	return log.join("\n")
}

function line(valeurs,max,allign){
	let log = []
	valeurs.forEach(function(valeur,i){
		log.push(caser(valeur,max[i],allign[i]))
	})
	if(log.every(e=>e.includes("═"))){
		return log.map(e=>fill.slice(0,e.length)).join("═╬═")
	}
	return log.join(" ║ ")
}

function caser(texte,size,allign){
	let tmp = `${texte}`.slice(0,size).replace(/\n/g," ")
	let tick = true
	if(!allign) allign = "left";
	while(tmp.length<size){
		if(allign==="left"){
			tmp += " "
		}else if(allign==="center"){
			if(tick){
				tmp += " "
			}else{
				tmp = " " + tmp
			}
			tick = !tick
		}else{
			tmp = " " + tmp
		}
	}
	return tmp;
}