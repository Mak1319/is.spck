define("ace/snippets/javascript_ls", ["require", "exports", "module"], function (e, t, n) {
	"use strict"
	;(t.snippetText =
	`
snippet function
	function \${1?:fname}(\${2?:arg}) {
		\${0:// body...}
	}
snippet function =>
	(\${1:arg}) => \${0}
snippet async =>
	async (\${1:arg}) => \${0}
snippet async function
	async function \${1?:fname}(\${2?:arg}) {
		\${0:// body...}
	}
# if
snippet if
	if (\${1:true}) {
	\${0}
	}
# if ... else
snippet if .. else
	if (\${1:true}) {
	\${2}
	} else {
	\${0}
	}
# tertiary conditional
snippet conditional
	\${1:/* condition */} ? \${2:a} : \${3:b}
# switch
snippet switch
	switch (\${1:expression}) {
		\${0}
	}
# case
snippet case
	case '\${1:case}':
		\${2:// code}
		break;
		\${3}
# while (...) {...}
snippet while
	while (\${1:/* condition */}) {
		\${0:/* code */}
	}
# try
snippet try
	try {
		\${0:/* code */}
	} catch (e) {}
# do...while
snippet do
	do {
		\${2:/* code */}
	} while (\${1:/* condition */});
# Object Method
snippet :function
regex /([,{[])|^\\s*/:f/
	\${1:method_name}: function(\${2:attribute}) {
		\${0}
	}\${3:,}
# console.log (Firebug)
snippet log
	console.log(\${1});
# return
snippet ret
	return \${1:result}
# for (property in object ) { ... }
snippet for loop
	for (var \${1:prop} in \${2:Things}) {
		\${0:\$2[\$1]}
	}
# docstring
snippet /**
	/**
	* \${1:description}
	*
	*/
snippet @param
regex /^\\s*\\*\\s*/@(para?m?)?/
	@param {\${1:type}} \${2:name} \${3:description}
snippet @ret
	@return {\${1:type}} \${2:description}
# class
snippet class
	class \${1:Name} {
		constructor(\${20}) {
			\${60:this.prop = \"\"}
		}
	}
# for
snippet for
	for (var \${1:i} = 0; \$1 < \${2:Things}.length; \$1++) {
		\${3:\$2[\$1]}\$0
	}
# declaration
snippet var
	var \${1:name} = \${0:value}
snippet let
	let \${1:name} = \${0:value}
snippet const
	const \${1:name} = \${0:value}
snippet rafce
	import React from 'react'
	
	const \${1/./\\u\$0/} = () => {
	  return <>\${1:first}</>
	}
	
	export default \${1/./\\u\$0/}
snippet useStateSnippet
	const [\${1:first}, set\${1/./\\u\$0/}] = useState(\${2:second})
snippet app
	const express = require('express')
	const app = express()
snippet static 
	app.use(express.static('public', options))
snippet exget 
	app.get('/', (req, res) => {
		res.send('hello world')
	})
snippet expost
	app.post('/', (req, res) => {
		res.send('hello world')
	})
snippet exput
	app.put('/', (req, res) => {
		res.send('hello world')
	})
snippet exdelete 
	app.delete('/', (req, res) => {
		res.send('hello world')
	})
snippet connectmongodb
	const mongoose = require('mongoose');
	mongoose.connect('\${1:iri}');
	
`),
		(t.scope = "javascript_ls")
})
;(function () {
	window.require(["ace/snippets/javascript_ls"], function (m) {
		if (typeof module == "object" && typeof exports == "object" && module) {
			module.exports = m
		}
	})
})()
