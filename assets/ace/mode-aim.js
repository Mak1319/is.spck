define(
	"ace/mode/aim_hig/hlight_rules",
	["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"],
	function(require, exports, module) {
		var oop = require("ace/lib/oop")
		var	TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules
		var	AimHighlightRules = function() {
			
			function genAimRule(name,syntax,obj) {
				if(typeof syntax != 'string'){
					obj= syntax
					syntax=''
				} 
				obj.start.push({
					token: `aim ${name} start`,
					regex: `\\*${syntax||name}\\s`,
					next:name+'Next'
				})
				
				obj[name+'Next']=[
					{ token: `aim ${name} end`, regex: `$|^`, next: `start` },
					{ defaultToken: `aim ${name} text`, caseInsensitive: !0 },
				]
			}
			
				this.$rules = {
					start:[
						
					],
				}
				genAimRule('info',this.$rules) 
				genAimRule('tag',this.$rules)
				genAimRule('warn',this.$rules)
				genAimRule('pin',this.$rules)
				genAimRule('error',this.$rules)
				genAimRule('idea',this.$rules)
				genAimRule('doc',this.$rules)
				genAimRule('cross',this.$rules)
				genAimRule('check',this.$rules)
				
				genAimRule('info', '@',this.$rules)
				genAimRule('tag', '\\+',this.$rules)
				genAimRule('warn','!', this.$rules)
				genAimRule('pin', '%',this.$rules)
				genAimRule('error','\\^', this.$rules)
				genAimRule('idea','#', this.$rules)
				genAimRule('doc','\\~', this.$rules)
				genAimRule('cross','!\\*', this.$rules)
				genAimRule('check','\\*', this.$rules)
			}
		oop.inherits(AimHighlightRules, TextHighlightRules)
		exports.AimHighlightRules = AimHighlightRules
	}
),

define(
	"ace/mode/aim",
		[
			"require",
			"exports",
			"module",
			"ace/lib/oop",
			"ace/mode/text",
			"ace/mode/json_highlight_rules",
			"ace/mode/matching_brace_outdent",
			"ace/mode/behaviour/cstyle",
			"ace/mode/folding/cstyle",
			"ace/worker/worker_client",
		],
	function(require, exports, module) {
		"use strict"
		var oop = require("../lib/oop")
		var	TextMode = require("./text").Mode
		var	AimHighlightRules = require("ace/mode/aim_hig/hlight_rules").AimHighlightRules
		var	CstyleBehaviour = require("ace/mode/behaviour/cstyle").CstyleBehaviour
		// console.log(CstyleBehaviour);
		var	FoldMode = require("./folding/cstyle").FoldMode
		var	AimMode = function() {
				this.HighlightRules = AimHighlightRules
				this.$behaviour = new CstyleBehaviour()
				this.foldingRules = new FoldMode()
			}
		oop.inherits(AimMode, TextMode),
			function() {
				this.lineCommentStart = "#"
				this.blockComment = { start: "/*", end: "*/" }
				this.$id = "ace/mode/aim"
			}.call(AimMode.prototype)
			exports.Mode = AimMode
	}
);



(function() {
	window.require(["ace/mode/aim"], function(m) {
		if (typeof module == "object" && typeof exports == "object" && module) {
			module.exports = m;
		}
	});
})();
