define("ace/snippets/scss_ls",["require","exports","module"],function(e,t,n){"use strict";t.snippetText="snippet .class\n	${1} {\n		${0}\n	}\nsnippet !important\n	 !important\nsnippet @font-face\n	@font-face {\n		font-family: ${1};\n		src: url(${0});\n	}\nsnippet @import\n	@import url(${0});\nsnippet @media\n	@media ${1:print} {\n		${0}\n	}\nsnippet background+\n	background: #${1:FFF} url(${2}) ${3:0} ${4:0} ${0:no-repeat};\nsnippet background\n	background: ${0};\nsnippet border+\n	border: ${1:1px} ${2:solid} #${0:000};\nsnippet border\n	border: ${0};\nsnippet bottom\n	bottom: ${0};\nsnippet box-shadow+\n	box-shadow: ${1:0} ${2:0} ${3:0} #${0:000};\nsnippet box-shadow\n	box-shadow: ${0};\nsnippet color\n	color: #${1:000};\nsnippet content\n	content: ${0};\nsnippet cursor\n	cursor: ${0};\nsnippet display\n	display: ${0};\nsnippet flex-direction\n	flex-direction: ${0};\nsnippet flex-flow\n	flex-flow: ${0};\nsnippet flex-wrap\n	flex-wrap: ${0};\nsnippet float\n	float: ${0};\nsnippet font+\n	font: ${1:1em} ${2:Arial},${0:sans-serif};\nsnippet font\n	font: ${0};\nsnippet font-family:\n	font-family: ${0};\nsnippet font-weight\n	font-weight: ${0};\nsnippet height\n	height: ${0};\nsnippet justify-content\n	justify-content: ${0};\nsnippet left\n	left: ${0};\nsnippet mb\n	margin-bottom: ${0};\nsnippet ml\n	margin-left: ${0};\nsnippet mr\n	margin-right: ${0};\nsnippet mt\n	margin-top: ${0};\nsnippet margin+\n	margin: ${1:0} ${2:0} ${3:0} ${0:0};\nsnippet max-height\n	max-height: ${0};\nsnippet max-width\n	max-width: ${0};\nsnippet opacity\n	opacity: ${0};\nsnippet outline\n	outline: ${0};\nsnippet overflow\n	overflow: ${0};\nsnippet pb\n	padding-bottom: ${0};\nsnippet pl\n	padding-left: ${0};\nsnippet pr\n	padding-right: ${0};\nsnippet pt\n	padding-top: ${0};\nsnippet padding+\n	padding: ${1:0} ${2:0} ${3:0} ${0:0};\nsnippet padding\n	padding: ${0};\nsnippet position\n	position: ${0};\nsnippet right\n	right: ${0};\nsnippet text-align\n	text-align: ${0};\nsnippet text-outline+\n	text-outline: ${1:0} ${2:0} #${0:000};\nsnippet text-shadow+\n	text-shadow: ${1:0} ${2:0} ${3:0} #${0:000};\nsnippet text-wrap\n	text-wrap: ${0};\nsnippet top\n	top: ${0};\nsnippet vertical-align\n	vertical-align: ${0};\nsnippet visibility\n	visibility: ${0};\nsnippet white-space\n	white-space: ${0};\nsnippet width\n	width: ${0};\nsnippet word-break\n	word-break: ${0};\nsnippet word-spacing\n	word-spacing: ${0};\nsnippet word-wrap\n	word-wrap: ${0};\nsnippet z-index\n	z-index: ${0};\n",t.scope="scss_ls"});                (function() {
                    window.require(["ace/snippets/scss_ls"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            
