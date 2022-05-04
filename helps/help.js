const fs = require('fs/promises');
const fs2 = require('fs');

const mainBase64File= async ()=>{
	const args =process.argv.slice(2)
	const outPut={};
	for (let pathIndex in args) {
		
		if(!fs2.existsSync(args[pathIndex])) pathIndex++;
		const path = args[pathIndex];
		
		let txt= await fs.readFile(path,'base64');
		outPut[path]= txt;
		
		
		
	}
	
	await fs.writeFile('base64.json',JSON.stringify(outPut,null,4))
}





const mainCss = async ()=>{
	const txt= await fs.readFile('css-propertice.css','utf8');
	
	await fs.writeFile('help.txt',txt.split('\n').join('|'))
	
}
const mainClasses = async ()=>{
	const txt= await fs.readFile('help.txt','utf8');
	
	await fs.writeFile('help2.txt',txt.split('\n').join('|'))
	
}
const mainElement = async ()=>{
	const txt= await fs.readFile('help3.txt','utf8');
	
	await fs.writeFile('help4.txt',txt.split('\n').join('|'))
	
}

const main = async ()=>{
	const txt= await fs.readFile('help5.txt','utf8');
	
	let regex = /([a-z0-9\-]+\(\))/gi;
	
	let newform =[...new Set(txt.match(regex).sort())].join('').replaceAll('()','|')
	await fs.writeFile('help6.txt',newform)
	
}


main()
