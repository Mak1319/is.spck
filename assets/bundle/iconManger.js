var getExt2 = function(fileName) { var regex = /(\.[a-z0-9]{1,}){1,2}$/gi; var x = fileName.match(regex); return (x && x[0]) || '' }
var getExt1 = function(fileName) { var regex = /(\.[a-z0-9]{1,}){1}$/gi; var x = fileName.match(regex); return (x && x[0]) || '' }
var getIconFileInternal = function(fileName) { return fileIcons[fileName] || fileIcons[getExt2(fileName)] || fileIcons[getExt1(fileName)] || 'file' }
var getFolderIconInternal = function(name,status) { let folderName= (folderIcons[name] || 'folder')+(status?'':"Open");return folderName  }

function toKey(name) {
	return name.replace(/[\s+_\-]./gi, function(opt) {
		return opt.replace(/[\s+_\-]/gi, '').toUpperCase()
	})
}

const getSvg = (name,tr) => {
	let size= tr? 25:20
	if (typeof name == 'string') {
		return `<svg class="svg-icon sp-margin-small-right ${tr?"sp-margin-small-right":""}" viewBox="${viewBox[toKey(name)]}"" width="${size}" height="${size}">${dataSvg[toKey(name)]}</svg>`
	}
	else return `<svg viewBox=${name.viewBox} width="${name.width ||15}" height="${name.height}">${dataSvg[toKey(name.name)]}</svg>`
}



function getFolderIcon(path, status) {
	return getSvg(getFolderIconInternal(path, status),true)
}

function getFileIcon(path){
	return getSvg(getIconFileInternal(path))
}
