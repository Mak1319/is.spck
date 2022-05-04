define(
	"ace/mode/doc_comment_highlight_rules",
	["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"],
	function (e, t, n) {
		"use strict"
		var r = e("../lib/oop"),
			i = e("./text_highlight_rules").TextHighlightRules,
			s = function () {
				this.$rules = {
					start: [
						{ token: "comment.doc.tag", regex: "@[\\w\\d_]+" },
						s.getTagRule(),
						{ defaultToken: "comment.doc", caseInsensitive: !0 },
					],
				}
			}
		r.inherits(s, i),
			(s.getTagRule = function (e) {
				return { token: "comment.doc.tag.storage.type", regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b" }
			}),
			(s.getStartRule = function (e) {
				return { token: "comment.doc", regex: "\\/\\*(?=\\*)", next: e }
			}),
			(s.getEndRule = function (e) {
				return { token: "comment.doc", regex: "\\*\\/", next: e }
			}),
			(t.DocCommentHighlightRules = s)
	}
),
	define(
		"ace/mode/javascript_highlight_rules",
		[
			"require",
			"exports",
			"module",
			"ace/lib/oop",
			"ace/mode/doc_comment_highlight_rules",
			"ace/mode/text_highlight_rules",
		],
		function (e, t, n) {
			"use strict"
			function a() {
				var e = o.replace("\\d", "\\d\\-\\."),
					t = {
						onMatch: function (e, t, n) {
							var r = e.charAt(1) == "/" ? 2 : 1
							if (r == 1)
								t != this.nextState ? n.unshift(this.next, this.nextState, 0) : n.unshift(this.next),
									n[2]++
							else if (r == 2 && t == this.nextState) {
								n[1]--
								if (!n[1] || n[1] < 0) n.shift(), n.shift()
							}
							return [
								{
									type: "meta.tag.punctuation." + (r == 1 ? "" : "end-") + "tag-open.xml",
									value: e.slice(0, r),
								},
								{ type: "meta.tag.tag-name.xml", value: e.substr(r) },
							]
						},
						regex: "</?" + e + "|</?(?=>)",
						next: "jsxAttributes",
						nextState: "jsx",
					}
				this.$rules.start.unshift(t)
				var n = { regex: "{", token: "paren.quasi.start", push: "start" }
				;(this.$rules.jsx = [n, t, { include: "reference" }, { defaultToken: "string" }]),
					(this.$rules.jsxAttributes = [
						{
							token: "meta.tag.punctuation.tag-close.xml",
							regex: "/?>",
							onMatch: function (e, t, n) {
								return (
									t == n[0] && n.shift(),
									e.length == 2 &&
										(n[0] == this.nextState && n[1]--, (!n[1] || n[1] < 0) && n.splice(0, 2)),
									(this.next = n[0] || "start"),
									[{ type: this.token, value: e }]
								)
							},
							nextState: "jsx",
						},
						n,
						f("jsxAttributes"),
						{ token: "entity.other.attribute-name.xml", regex: e },
						{ token: "keyword.operator.attribute-equals.xml", regex: "=" },
						{ token: "text.tag-whitespace.xml", regex: "\\s+" },
						{
							token: "string.attribute-value.xml",
							regex: "'",
							stateName: "jsx_attr_q",
							push: [
								{ token: "string.attribute-value.xml", regex: "'", next: "pop" },
								{ include: "reference" },
								{ defaultToken: "string.attribute-value.xml" },
							],
						},
						{
							token: "string.attribute-value.xml",
							regex: '"',
							stateName: "jsx_attr_qq",
							push: [
								{ token: "string.attribute-value.xml", regex: '"', next: "pop" },
								{ include: "reference" },
								{ defaultToken: "string.attribute-value.xml" },
							],
						},
						t,
					]),
					(this.$rules.reference = [
						{
							token: "constant.language.escape.reference.xml",
							regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)",
						},
					])
			}
			function f(e) {
				function genComment(name, syntax, e) {
					// alert('mainak')
					// console.log(i.getBetterComment())
					return [
						{
							token: `comment ${name} start`,
							regex: `\\/\\*(\\s+)?${syntax}(\\s+)?`,
							next: [
								i.getTagRule(),
								{ token: `comment ${name} end`, regex: `\\*\\/`, next: e || `pop` },
								{ defaultToken: `comment ${name} text`, caseInsensitive: !0 },
							],
						},
						{
							token: `comment ${name} start`,
							regex: `\\/\\/(\\s+)?${syntax}(\\s+)?`,
							next: [
								i.getTagRule(),
								{ token: `comment ${name} end`, regex: `$|^`, next: e || `pop` },
								{ defaultToken: `comment ${name} text`, caseInsensitive: !0 },
							],
						},
					]
				}

				return [
					...genComment("info", "info", e),
					...genComment("tag", "tag", e),
					...genComment("error", "error", e),
					...genComment("warn", "warn", e),
					...genComment("idea", "idea", e),
					...genComment("pin", "pin", e),
					{
						token: "comment",
						regex: /\/\*/,
						next: [
							i.getTagRule(),
							{ token: "comment", regex: "\\*\\/", next: e || "pop" },
							{ defaultToken: "comment", caseInsensitive: !0 },
						],
					},
					{
						token: "comment",
						regex: "\\/\\/",
						next: [
							i.getTagRule(),
							{ token: "comment", regex: "$|^", next: e || "pop" },
							{ defaultToken: "comment", caseInsensitive: !0 },
						],
					},
				]
			}
			var r = e("../lib/oop"),
				i = e("./doc_comment_highlight_rules").DocCommentHighlightRules,
				s = e("./text_highlight_rules").TextHighlightRules,
				o = "[a-zA-Z\\$_\u00a1-\uffff][a-zA-Z\\d\\$_\u00a1-\uffff]*",
				u = function (e) {
					var t = "case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void",
						n =
							"\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)"
					this.$rules = {
						no_regex: [
							i.getStartRule("doc-start"),
							f("no_regex"),
							{ token: "string", regex: "'(?=.)", next: "qstring" },
							{ token: "string", regex: '"(?=.)', next: "qqstring" },
							{ token: "constant.numeric", regex: /0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/ },
							{ token: "constant.numeric", regex: /(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/ },
							{
								token: [
									"entity.name.function",
									"text",
									"keyword.operator",
									"text",
									"storage.type",
									"text",
									"paren.lparen",
								],
								regex: "(" + o + ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
								next: "function_arguments",
							},
							{
								token: [
									"identifier",
									"punctuation.operator",
									"entity.name.function",
									"text",
									"keyword.operator",
									"text",
									"storage.type",
									"text",
									"entity.name.function",
									"text",
									"paren.lparen",
								],
								regex: "(" + o + ")(\\.)(" + o + ")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",
								next: "function_arguments",
							},
							{
								token: ["storage.type", "text", "entity.name.function", "text", "paren.lparen"],
								regex: "(function)(\\s+)(" + o + ")(\\s*)(\\()",
								next: "function_arguments",
							},
							{
								token: [
									"entity.name.function",
									"text",
									"punctuation.operator",
									"text",
									"storage.type",
									"text",
									"paren.lparen",
								],
								regex: "(" + o + ")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",
								next: "function_arguments",
							},
							{
								token: ["text", "text", "storage.type", "text", "paren.lparen"],
								regex: "(:)(\\s*)(function)(\\s*)(\\()",
								next: "function_arguments",
							},
							{ token: "keyword", regex: "from(?=\\s*('|\"))" },
							{ token: "keyword", regex: "(?:" + t + ")\\b", next: "start" },
							{ token: ["support.constant"], regex: /(that|self)\b/ },
							{
								token: ["variable.language", "punctuation.operator", "entity.name.function"],
								regex: /(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/,
							},
							{
								token: "variable.language",
								regex: "(Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|eval|JSON|Math|this|arguments|window|document|console)\\b",
							},
							{ token: ["storage.type", "text", "support.class"], regex: "(class)(\\s+)(" + o + ")\\b" },
							{ token: "storage.type", regex: /(class|function|const|let|var)\b/ },
							{
								token: ["keyword", "text", "support.class", "text", "paren.lparen"],
								regex: "(new)(\\s+)(" + o + ")(\\s*)(\\()",
							},
							{
								token: "keyword",
								regex: "(yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|if|in|of|instanceof|new|return|switch|throw|try|typeof|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|enum|extends|super|export|implements|private|public|interface|package|protected|static)\\b",
							},
							{ token: "constant.language", regex: /(null|Infinity|NaN|undefined)\b/ },
							{ token: "support.function", regex: /alert\b/ },
							{ token: "constant.language.boolean", regex: /(true|false)\b/ },
							{
								token: ["entity.name.function", "text", "paren.lparen"],
								regex: "(" + o + ")(\\s*)(\\()",
							},
							{ token: "identifier", regex: o },
							{ token: "punctuation.operator", regex: /[.](?![.])/, next: "property" },
							{ token: "storage.type", regex: /=>/, next: "start" },
							{
								token: "keyword.operator",
								regex: /--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,
								next: "start",
							},
							{ token: "punctuation.operator", regex: /[?:,;.]/, next: "start" },
							{ token: "paren.lparen", regex: /[\[({]/, next: "start" },
							{ token: "paren.rparen", regex: /[\])}]/ },
							{ token: "comment", regex: /^#!.*$/ },
						],
						property: [
							{ token: "text", regex: "\\s+" },
							{
								token: [
									"entity.name.function",
									"text",
									"keyword.operator",
									"text",
									"storage.type",
									"text",
									"paren.lparen",
								],
								regex: "(" + o + ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
								next: "function_arguments",
							},
							{ token: "punctuation.operator", regex: /[.](?![.])/ },
							{
								token: ["storage.type", "text", "entity.name.function", "text", "paren.lparen"],
								regex: "(function)(\\s+)(" + o + ")(\\s*)(\\()",
								next: "function_arguments",
							},
							{
								token: ["entity.name.function", "text", "paren.lparen"],
								regex: "(" + o + ")(\\s*)(\\()",
								next: "no_regex",
							},
							{ token: "variable.language", regex: /prototype\b/ },
							{ token: "identifier", regex: o },
							{ regex: "", token: "empty", next: "no_regex" },
						],
						start: [
							i.getStartRule("doc-start"),
							f("start"),
							{ token: "string.regexp", regex: "\\/", next: "regex" },
							{ token: "text", regex: "\\s+|^$", next: "start" },
							{ token: "empty", regex: "", next: "no_regex" },
						],
						regex: [
							{ token: "regexp.keyword.operator", regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)" },
							{ token: "string.regexp", regex: "/[sxngimy]*", next: "no_regex" },
							{ token: "invalid", regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/ },
							{
								token: "constant.language.escape",
								regex: /\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/,
							},
							{ token: "constant.language.delimiter", regex: /\|/ },
							{ token: "constant.language.escape", regex: /\[\^?/, next: "regex_character_class" },
							{ token: "empty", regex: "$", next: "no_regex" },
							{ defaultToken: "string.regexp" },
						],
						regex_character_class: [
							{
								token: "regexp.charclass.keyword.operator",
								regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)",
							},
							{ token: "constant.language.escape", regex: "]", next: "regex" },
							{ token: "constant.language.escape", regex: "-" },
							{ token: "empty", regex: "$", next: "no_regex" },
							{ defaultToken: "string.regexp.charachterclass" },
						],
						function_arguments: [
							{ token: "variable.parameter", regex: o },
							{ token: "punctuation.operator", regex: "[, ]+" },
							{ token: "punctuation.operator", regex: "$" },
							{ token: "empty", regex: "", next: "no_regex" },
						],
						qqstring: [
							{ token: "constant.language.escape", regex: n },
							{ token: "string", regex: "\\\\$", consumeLineEnd: !0 },
							{ token: "string", regex: '"|$', next: "no_regex" },
							{ defaultToken: "string" },
						],
						qstring: [
							{ token: "constant.language.escape", regex: n },
							{ token: "string", regex: "\\\\$", consumeLineEnd: !0 },
							{ token: "string", regex: "'|$", next: "no_regex" },
							{ defaultToken: "string" },
						],
					}
					if (!e || !e.noES6)
						this.$rules.no_regex.unshift(
							{
								regex: "[{}]",
								onMatch: function (e, t, n) {
									this.next = e == "{" ? this.nextState : ""
									if (e == "{" && n.length) n.unshift("start", t)
									else if (e == "}" && n.length) {
										n.shift(), (this.next = n.shift())
										if (this.next.indexOf("string") != -1 || this.next.indexOf("jsx") != -1)
											return "paren.quasi.end"
									}
									return e == "{" ? "paren.lparen" : "paren.rparen"
								},
								nextState: "start",
							},
							{
								token: "string.quasi.start",
								regex: /`/,
								push: [
									{ token: "constant.language.escape", regex: n },
									{ token: "paren.quasi.start", regex: /\${/, push: "start" },
									{ token: "string.quasi.end", regex: /`/, next: "pop" },
									{ defaultToken: "string.quasi" },
								],
							}
						),
							(!e || e.jsx != 0) && a.call(this)
					this.embedRules(i, "doc-", [i.getEndRule("no_regex")]), this.normalizeRules()
				}
			r.inherits(u, s), (t.JavaScriptHighlightRules = u)
		}
	),
	define(
		"ace/mode/behaviour/javascript_ls",
		[
			"require",
			"exports",
			"module",
			"ace/lib/oop",
			"ace/mode/behaviour/cstyle",
			"ace/token_iterator",
			"ace/lib/lang",
		],
		function (require, exports, module) {
			"use strict"

			var oop = require("../../lib/oop")
			var Behaviour = require("ace/mode/behaviour").Behaviour
			var TokenIterator = require("../../token_iterator").TokenIterator
			var lang = require("../../lib/lang")

			var SAFE_INSERT_IN_TOKENS = ["text", "paren.rparen", "rparen", "paren", "punctuation.operator"]
			var SAFE_INSERT_BEFORE_TOKENS = [
				"text",
				"paren.rparen",
				"rparen",
				"paren",
				"punctuation.operator",
				"comment",
			]

			var context
			var contextCache = {}
			var defaultQuotes = {
				'"': '"',
				"'": "'",
			}

			var initContext = function (editor) {
				var id = -1
				if (editor.multiSelect) {
					id = editor.selection.index
					if (contextCache.rangeCount != editor.multiSelect.rangeCount)
						contextCache = {
							rangeCount: editor.multiSelect.rangeCount,
						}
				}
				if (contextCache[id]) return (context = contextCache[id])
				context = contextCache[id] = {
					autoInsertedBrackets: 0,
					autoInsertedRow: -1,
					autoInsertedLineEnd: "",
					maybeInsertedBrackets: 0,
					maybeInsertedRow: -1,
					maybeInsertedLineStart: "",
					maybeInsertedLineEnd: "",
				}
			}

			var getWrapped = function (selection, selected, opening, closing) {
				var rowDiff = selection.end.row - selection.start.row
				return {
					text: opening + selected + closing,
					selection: [0, selection.start.column + 1, rowDiff, selection.end.column + (rowDiff ? 0 : 1)],
				}
			}

			function is(token, type) {
				return token && token.type.lastIndexOf(type + ".xml") > -1
			}

			var JsxBehaviour = function (options) {
				this.add("xstring_dquotes", "insertion", function (state, action, editor, session, text) {
					if (text == '"' || text == "'") {
						var quote = text
						var selected = session.doc.getTextRange(editor.getSelectionRange())
						if (
							selected !== "" &&
							selected !== "'" &&
							selected != '"' &&
							editor.getWrapBehavioursEnabled()
						) {
							return {
								text: quote + selected + quote,
								selection: false,
							}
						}

						var cursor = editor.getCursorPosition()
						var line = session.doc.getLine(cursor.row)
						var rightChar = line.substring(cursor.column, cursor.column + 1)
						var iterator = new TokenIterator(session, cursor.row, cursor.column)
						var token = iterator.getCurrentToken()

						if (rightChar == quote && (is(token, "attribute-value") || is(token, "string"))) {
							return {
								text: "",
								selection: [1, 1],
							}
						}

						if (!token) token = iterator.stepBackward()

						if (!token) return

						while (is(token, "tag-whitespace") || is(token, "whitespace")) {
							token = iterator.stepBackward()
						}
						var rightSpace = !rightChar || rightChar.match(/\s/)
						if (
							(is(token, "attribute-equals") && (rightSpace || rightChar == ">")) ||
							(is(token, "decl-attribute-equals") && (rightSpace || rightChar == "?"))
						) {
							return {
								text: quote + quote,
								selection: [1, 1],
							}
						}
					}
				})

				this.add("xstring_dquotes", "deletion", function (state, action, editor, session, range) {
					var selected = session.doc.getTextRange(range)
					if (!range.isMultiLine() && (selected == '"' || selected == "'")) {
						var line = session.doc.getLine(range.start.row)
						var rightChar = line.substring(range.start.column + 1, range.start.column + 2)
						if (rightChar == selected) {
							range.end.column++
							return range
						}
					}
				})

				this.add("autoclosingx", "insertion", function (state, action, editor, session, text) {
					if (text == ">") {
						var position = editor.getSelectionRange().start
						var iterator = new TokenIterator(session, position.row, position.column)
						var token = iterator.getCurrentToken() || iterator.stepBackward()
						if (
							!token ||
							!(
								is(token, "tag-name") ||
								is(token, "tag-whitespace") ||
								is(token, "attribute-name") ||
								is(token, "attribute-equals") ||
								is(token, "attribute-value")
							)
						)
							return
						if (is(token, "reference.attribute-value")) return
						if (is(token, "attribute-value")) {
							var tokenEndColumn = iterator.getCurrentTokenColumn() + token.value.length
							if (position.column < tokenEndColumn) return
							if (position.column == tokenEndColumn) {
								var nextToken = iterator.stepForward()
								if (nextToken && is(nextToken, "attribute-value")) return
								iterator.stepBackward()
							}
						}

						if (/^\s*>/.test(session.getLine(position.row).slice(position.column))) return
						while (!is(token, "tag-name")) {
							token = iterator.stepBackward()
							if (token.value == "<") {
								token = iterator.stepForward()
								break
							}
						}

						var tokenRow = iterator.getCurrentTokenRow()
						var tokenColumn = iterator.getCurrentTokenColumn()
						if (is(iterator.stepBackward(), "end-tag-open")) return

						var element = token.value
						if (tokenRow == position.row) element = element.substring(0, position.column - tokenColumn)

						// if (this.voidElements.hasOwnProperty(element.toLowerCase())) return

						return {
							text: ">" + "</" + element + ">",
							selection: [1, 1],
						}
					}
				})

				this.add("xautoindent", "insertion", function (state, action, editor, session, text) {
					if (text == "\n") {
						var cursor = editor.getCursorPosition()
						var line = session.getLine(cursor.row)
						var iterator = new TokenIterator(session, cursor.row, cursor.column)
						var token = iterator.getCurrentToken()

						if (token && token.type.indexOf("tag-close") !== -1) {
							if (token.value == "/>") return
							while (token && token.type.indexOf("tag-name") === -1) {
								token = iterator.stepBackward()
							}

							if (!token) {
								return
							}

							var tag = token.value
							var row = iterator.getCurrentTokenRow()
							token = iterator.stepBackward()
							if (!token || token.type.indexOf("end-tag") !== -1) {
								return
							}

							// if (this.voidElements && !this.voidElements[tag]) {
							var nextToken = session.getTokenAt(cursor.row, cursor.column + 1)
							var line = session.getLine(row)
							var nextIndent = this.$getIndent(line)
							var indent = nextIndent + session.getTabString()

							if (nextToken && nextToken.value === "</") {
								return {
									text: "\n" + indent + "\n" + nextIndent,
									selection: [1, indent.length, 1, indent.length],
								}
							} else {
								return {
									text: "\n" + indent,
								}
							}
							// }
						}
					}
				})

				this.add("braces", "insertion", function (state, action, editor, session, text) {
					var cursor = editor.getCursorPosition()
					var line = session.doc.getLine(cursor.row)
					if (text == "{") {
						initContext(editor)
						var selection = editor.getSelectionRange()
						var selected = session.doc.getTextRange(selection)
						if (selected !== "" && selected !== "{" && editor.getWrapBehavioursEnabled()) {
							return getWrapped(selection, selected, "{", "}")
						} else if (JsxBehaviour.isSaneInsertion(editor, session)) {
							if (
								/[\]\}\)]/.test(line[cursor.column]) ||
								editor.inMultiSelectMode ||
								(options && options.braces)
							) {
								JsxBehaviour.recordAutoInsert(editor, session, "}")
								return {
									text: "{}",
									selection: [1, 1],
								}
							} else {
								JsxBehaviour.recordMaybeInsert(editor, session, "{")
								return {
									text: "{",
									selection: [1, 1],
								}
							}
						}
					} else if (text == "}") {
						initContext(editor)
						var rightChar = line.substring(cursor.column, cursor.column + 1)
						if (rightChar == "}") {
							var matching = session.$findOpeningBracket("}", {
								column: cursor.column + 1,
								row: cursor.row,
							})
							if (matching !== null && JsxBehaviour.isAutoInsertedClosing(cursor, line, text)) {
								JsxBehaviour.popAutoInsertedClosing()
								return {
									text: "",
									selection: [1, 1],
								}
							}
						}
					} else if (text == "\n" || text == "\r\n") {
						initContext(editor)
						var closing = ""
						if (JsxBehaviour.isMaybeInsertedClosing(cursor, line)) {
							closing = lang.stringRepeat("}", context.maybeInsertedBrackets)
							JsxBehaviour.clearMaybeInsertedClosing()
						}
						var rightChar = line.substring(cursor.column, cursor.column + 1)
						if (rightChar === "}") {
							var openBracePos = session.findMatchingBracket(
								{
									row: cursor.row,
									column: cursor.column + 1,
								},
								"}"
							)
							if (!openBracePos) return null
							var next_indent = this.$getIndent(session.getLine(openBracePos.row))
						} else if (closing) {
							var next_indent = this.$getIndent(line)
						} else {
							JsxBehaviour.clearMaybeInsertedClosing()
							return
						}
						var indent = next_indent + session.getTabString()

						return {
							text: "\n" + indent + "\n" + next_indent + closing,
							selection: [1, indent.length, 1, indent.length],
						}
					} else {
						JsxBehaviour.clearMaybeInsertedClosing()
					}
				})

				this.add("braces", "deletion", function (state, action, editor, session, range) {
					var selected = session.doc.getTextRange(range)
					if (!range.isMultiLine() && selected == "{") {
						initContext(editor)
						var line = session.doc.getLine(range.start.row)
						var rightChar = line.substring(range.end.column, range.end.column + 1)
						if (rightChar == "}") {
							range.end.column++
							return range
						} else {
							context.maybeInsertedBrackets--
						}
					}
				})

				this.add("parens", "insertion", function (state, action, editor, session, text) {
					if (text == "(") {
						initContext(editor)
						var selection = editor.getSelectionRange()
						var selected = session.doc.getTextRange(selection)
						if (selected !== "" && editor.getWrapBehavioursEnabled()) {
							return getWrapped(selection, selected, "(", ")")
						} else if (JsxBehaviour.isSaneInsertion(editor, session)) {
							JsxBehaviour.recordAutoInsert(editor, session, ")")
							return {
								text: "()",
								selection: [1, 1],
							}
						}
					} else if (text == ")") {
						initContext(editor)
						var cursor = editor.getCursorPosition()
						var line = session.doc.getLine(cursor.row)
						var rightChar = line.substring(cursor.column, cursor.column + 1)
						if (rightChar == ")") {
							var matching = session.$findOpeningBracket(")", {
								column: cursor.column + 1,
								row: cursor.row,
							})
							if (matching !== null && JsxBehaviour.isAutoInsertedClosing(cursor, line, text)) {
								JsxBehaviour.popAutoInsertedClosing()
								return {
									text: "",
									selection: [1, 1],
								}
							}
						}
					}
				})

				this.add("parens", "deletion", function (state, action, editor, session, range) {
					var selected = session.doc.getTextRange(range)
					if (!range.isMultiLine() && selected == "(") {
						initContext(editor)
						var line = session.doc.getLine(range.start.row)
						var rightChar = line.substring(range.start.column + 1, range.start.column + 2)
						if (rightChar == ")") {
							range.end.column++
							return range
						}
					}
				})

				this.add("brackets", "insertion", function (state, action, editor, session, text) {
					if (text == "[") {
						initContext(editor)
						var selection = editor.getSelectionRange()
						var selected = session.doc.getTextRange(selection)
						if (selected !== "" && editor.getWrapBehavioursEnabled()) {
							return getWrapped(selection, selected, "[", "]")
						} else if (JsxBehaviour.isSaneInsertion(editor, session)) {
							JsxBehaviour.recordAutoInsert(editor, session, "]")
							return {
								text: "[]",
								selection: [1, 1],
							}
						}
					} else if (text == "]") {
						initContext(editor)
						var cursor = editor.getCursorPosition()
						var line = session.doc.getLine(cursor.row)
						var rightChar = line.substring(cursor.column, cursor.column + 1)
						if (rightChar == "]") {
							var matching = session.$findOpeningBracket("]", {
								column: cursor.column + 1,
								row: cursor.row,
							})
							if (matching !== null && JsxBehaviour.isAutoInsertedClosing(cursor, line, text)) {
								JsxBehaviour.popAutoInsertedClosing()
								return {
									text: "",
									selection: [1, 1],
								}
							}
						}
					}
				})

				this.add("brackets", "deletion", function (state, action, editor, session, range) {
					var selected = session.doc.getTextRange(range)
					if (!range.isMultiLine() && selected == "[") {
						initContext(editor)
						var line = session.doc.getLine(range.start.row)
						var rightChar = line.substring(range.start.column + 1, range.start.column + 2)
						if (rightChar == "]") {
							range.end.column++
							return range
						}
					}
				})

				this.add("string_dquotes", "insertion", function (state, action, editor, session, text) {
					var quotes = session.$mode.$quotes || defaultQuotes
					if (text.length == 1 && quotes[text]) {
						if (this.lineCommentStart && this.lineCommentStart.indexOf(text) != -1) return
						initContext(editor)
						var quote = text
						var selection = editor.getSelectionRange()
						var selected = session.doc.getTextRange(selection)
						if (
							selected !== "" &&
							(selected.length != 1 || !quotes[selected]) &&
							editor.getWrapBehavioursEnabled()
						) {
							return getWrapped(selection, selected, quote, quote)
						} else if (!selected) {
							var cursor = editor.getCursorPosition()
							var line = session.doc.getLine(cursor.row)
							var leftChar = line.substring(cursor.column - 1, cursor.column)
							var rightChar = line.substring(cursor.column, cursor.column + 1)

							var token = session.getTokenAt(cursor.row, cursor.column)
							var rightToken = session.getTokenAt(cursor.row, cursor.column + 1)
							// We're escaped.
							if (leftChar == "\\" && token && /escape/.test(token.type)) return null

							var stringBefore = token && /string|escape/.test(token.type)
							var stringAfter = !rightToken || /string|escape/.test(rightToken.type)

							var pair
							if (rightChar == quote) {
								pair = stringBefore !== stringAfter
								if (pair && /string\.end/.test(rightToken.type)) pair = false
							} else {
								if (stringBefore && !stringAfter) return null // wrap string with different quote
								if (stringBefore && stringAfter) return null // do not pair quotes inside strings
								var wordRe = session.$mode.tokenRe
								wordRe.lastIndex = 0
								var isWordBefore = wordRe.test(leftChar)
								wordRe.lastIndex = 0
								var isWordAfter = wordRe.test(leftChar)
								if (isWordBefore || isWordAfter) return null // before or after alphanumeric
								if (rightChar && !/[\s;,.})\]\\]/.test(rightChar)) return null // there is rightChar and it isn't closing
								var charBefore = line[cursor.column - 2]
								if (leftChar == quote && (charBefore == quote || wordRe.test(charBefore))) return null
								pair = true
							}
							return {
								text: pair ? quote + quote : "",
								selection: [1, 1],
							}
						}
					}
				})

				this.add("string_dquotes", "deletion", function (state, action, editor, session, range) {
					var quotes = session.$mode.$quotes || defaultQuotes

					var selected = session.doc.getTextRange(range)
					if (!range.isMultiLine() && quotes.hasOwnProperty(selected)) {
						initContext(editor)
						var line = session.doc.getLine(range.start.row)
						var rightChar = line.substring(range.start.column + 1, range.start.column + 2)
						if (rightChar == selected) {
							range.end.column++
							return range
						}
					}
				})
			}
			JsxBehaviour.isSaneInsertion = function (editor, session) {
				var cursor = editor.getCursorPosition()
				var iterator = new TokenIterator(session, cursor.row, cursor.column)

				// Don't insert in the middle of a keyword/identifier/lexical
				if (!this.$matchTokenType(iterator.getCurrentToken() || "text", SAFE_INSERT_IN_TOKENS)) {
					if (/[)}\]]/.test(editor.session.getLine(cursor.row)[cursor.column])) return true
					// Look ahead in case we're at the end of a token
					var iterator2 = new TokenIterator(session, cursor.row, cursor.column + 1)
					if (!this.$matchTokenType(iterator2.getCurrentToken() || "text", SAFE_INSERT_IN_TOKENS))
						return false
				}

				// Only insert in front of whitespace/comments
				iterator.stepForward()
				return (
					iterator.getCurrentTokenRow() !== cursor.row ||
					this.$matchTokenType(iterator.getCurrentToken() || "text", SAFE_INSERT_BEFORE_TOKENS)
				)
			}
			JsxBehaviour.$matchTokenType = function (token, types) {
				return types.indexOf(token.type || token) > -1
			}

			JsxBehaviour.recordAutoInsert = function (editor, session, bracket) {
				var cursor = editor.getCursorPosition()
				var line = session.doc.getLine(cursor.row)
				// Reset previous state if text or context changed too much
				if (!this.isAutoInsertedClosing(cursor, line, context.autoInsertedLineEnd[0]))
					context.autoInsertedBrackets = 0
				context.autoInsertedRow = cursor.row
				context.autoInsertedLineEnd = bracket + line.substr(cursor.column)
				context.autoInsertedBrackets++
			}

			JsxBehaviour.recordMaybeInsert = function (editor, session, bracket) {
				var cursor = editor.getCursorPosition()
				var line = session.doc.getLine(cursor.row)
				if (!this.isMaybeInsertedClosing(cursor, line)) context.maybeInsertedBrackets = 0
				context.maybeInsertedRow = cursor.row
				context.maybeInsertedLineStart = line.substr(0, cursor.column) + bracket
				context.maybeInsertedLineEnd = line.substr(cursor.column)
				context.maybeInsertedBrackets++
			}

			JsxBehaviour.isAutoInsertedClosing = function (cursor, line, bracket) {
				return (
					context.autoInsertedBrackets > 0 &&
					cursor.row === context.autoInsertedRow &&
					bracket === context.autoInsertedLineEnd[0] &&
					line.substr(cursor.column) === context.autoInsertedLineEnd
				)
			}

			JsxBehaviour.isMaybeInsertedClosing = function (cursor, line) {
				return (
					context.maybeInsertedBrackets > 0 &&
					cursor.row === context.maybeInsertedRow &&
					line.substr(cursor.column) === context.maybeInsertedLineEnd &&
					line.substr(0, cursor.column) == context.maybeInsertedLineStart
				)
			}

			JsxBehaviour.popAutoInsertedClosing = function () {
				context.autoInsertedLineEnd = context.autoInsertedLineEnd.substr(1)
				context.autoInsertedBrackets--
			}

			JsxBehaviour.clearMaybeInsertedClosing = function () {
				if (context) {
					context.maybeInsertedBrackets = 0
					context.maybeInsertedRow = -1
				}
			}

			oop.inherits(JsxBehaviour, Behaviour)
			// console.log(CstyleBehaviour)
			// oop.inherits(CstyleBehaviour, JsxBehaviour)

			exports.JsxBehaviour = JsxBehaviour
		}
	),
	define("ace/mode/matching_brace_outdent", ["require", "exports", "module", "ace/range"], function (e, t, n) {
		"use strict"
		var r = e("../range").Range,
			i = function () {}
		;(function () {
			;(this.checkOutdent = function (e, t) {
				return /^\s+$/.test(e) ? /^\s*\}/.test(t) : !1
			}),
				(this.autoOutdent = function (e, t) {
					var n = e.getLine(t),
						i = n.match(/^(\s*\})/)
					if (!i) return 0
					var s = i[1].length,
						o = e.findMatchingBracket({ row: t, column: s })
					if (!o || o.row == t) return 0
					var u = this.$getIndent(e.getLine(o.row))
					e.replace(new r(t, 0, t, s - 1), u)
				}),
				(this.$getIndent = function (e) {
					return e.match(/^\s*/)[0]
				})
		}.call(i.prototype),
			(t.MatchingBraceOutdent = i))
	}),
	define(
		"ace/mode/folding/cstyle",
		["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"],
		function (e, t, n) {
			"use strict"
			var r = e("../../lib/oop"),
				i = e("../../range").Range,
				s = e("./fold_mode").FoldMode,
				o = (t.FoldMode = function (e) {
					e &&
						((this.foldingStartMarker = new RegExp(
							this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + e.start)
						)),
						(this.foldingStopMarker = new RegExp(
							this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + e.end)
						)))
				})
			r.inherits(o, s),
				function () {
					;(this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/),
						(this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/),
						(this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/),
						(this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/),
						(this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/),
						(this._getFoldWidgetBase = this.getFoldWidget),
						(this.getFoldWidget = function (e, t, n) {
							var r = e.getLine(n)
							if (
								this.singleLineBlockCommentRe.test(r) &&
								!this.startRegionRe.test(r) &&
								!this.tripleStarBlockCommentRe.test(r)
							)
								return ""
							var i = this._getFoldWidgetBase(e, t, n)
							return !i && this.startRegionRe.test(r) ? "start" : i
						}),
						(this.getFoldWidgetRange = function (e, t, n, r) {
							var i = e.getLine(n)
							if (this.startRegionRe.test(i)) return this.getCommentRegionBlock(e, i, n)
							var s = i.match(this.foldingStartMarker)
							if (s) {
								var o = s.index
								if (s[1]) return this.openingBracketBlock(e, s[1], n, o)
								var u = e.getCommentFoldRange(n, o + s[0].length, 1)
								return (
									u &&
										!u.isMultiLine() &&
										(r ? (u = this.getSectionRange(e, n)) : t != "all" && (u = null)),
									u
								)
							}
							if (t === "markbegin") return
							var s = i.match(this.foldingStopMarker)
							if (s) {
								var o = s.index + s[0].length
								return s[1] ? this.closingBracketBlock(e, s[1], n, o) : e.getCommentFoldRange(n, o, -1)
							}
						}),
						(this.getSectionRange = function (e, t) {
							var n = e.getLine(t),
								r = n.search(/\S/),
								s = t,
								o = n.length
							t += 1
							var u = t,
								a = e.getLength()
							while (++t < a) {
								n = e.getLine(t)
								var f = n.search(/\S/)
								if (f === -1) continue
								if (r > f) break
								var l = this.getFoldWidgetRange(e, "all", t)
								if (l) {
									if (l.start.row <= s) break
									if (l.isMultiLine()) t = l.end.row
									else if (r == f) break
								}
								u = t
							}
							return new i(s, o, u, e.getLine(u).length)
						}),
						(this.getCommentRegionBlock = function (e, t, n) {
							var r = t.search(/\s*$/),
								s = e.getLength(),
								o = n,
								u = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,
								a = 1
							while (++n < s) {
								t = e.getLine(n)
								var f = u.exec(t)
								if (!f) continue
								f[1] ? a-- : a++
								if (!a) break
							}
							var l = n
							if (l > o) return new i(o, r, l, t.length)
						})
				}.call(o.prototype)
		}
	),
	define(
		"ace/mode/javascript_ls",
		[
			"require",
			"exports",
			"module",
			"ace/lib/oop",
			"ace/config",
			"ace/mode/text",
			"ace/mode/javascript_highlight_rules",
			"ace/mode/matching_brace_outdent",
			"ace/worker/worker_client",
			"ace/mode/behaviour/cstyle",
			"ace/mode/folding/cstyle",
		],
		function (e, t, n) {
			"use strict"
			var r = e("../lib/oop"),
				i = e("../config"),
				s = e("./text").Mode,
				o = e("./javascript_highlight_rules").JavaScriptHighlightRules,
				u = e("./matching_brace_outdent").MatchingBraceOutdent,
				a = e("../worker/worker_client").ProxyClient,
				// f = e("./behaviour/cstyle").CstyleBehaviour,
				JsxBehaviour = e("ace/mode/behaviour/javascript_ls").JsxBehaviour,
				l = e("./folding/cstyle").FoldMode,
				c = function () {
					;(this.HighlightRules = o),
						(this.$outdent = new u()),
						(this.$behaviour = new JsxBehaviour()),
						(this.foldingRules = new l()),
						(this.completer = {
							getCompletions: function (e, t, n, r, i) {
								t.$worker.call("getCompletions", [e, t, n, r, i])
							},
						})
				}
			r.inherits(c, s),
				function () {
					;(this.lineCommentStart = "//"),
						(this.blockComment = { start: "/*", end: "*/" }),
						(this.$quotes = { '"': '"', "'": "'", "`": "`" }),
						(this.getNextLineIndent = function (e, t, n) {
							var r = this.$getIndent(t),
								i = this.getTokenizer().getLineTokens(t, e),
								s = i.tokens,
								o = i.state
							if (s.length && s[s.length - 1].type == "comment") return r
							if (e == "start" || e == "no_regex") {
								var u = t.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/)
								u && (r += n)
							} else if (e == "doc-start") {
								if (o == "start" || o == "no_regex") return ""
								var u = t.match(/^\s*(\/?)\*/)
								u && (u[1] && (r += " "), (r += "* "))
							}
							return r
						}),
						(this.checkOutdent = function (e, t, n) {
							return this.$outdent.checkOutdent(t, n)
						}),
						(this.autoOutdent = function (e, t, n) {
							this.$outdent.autoOutdent(t, n)
						}),
						(this.createWorker = function (e) {
							var t = a(i.get("LanguageServerDelegate"), e)
							return (
								t.attachToDocument(e.getDocument()),
								t.on("annotate", function (t) {
									e.setAnnotations(t.data)
								}),
								t.on("terminate", function () {
									e.clearAnnotations()
								}),
								t
							)
						}),
						(this.snippetFileId = "ace/snippets/javascript_ls"),
						(this.$id = "ace/mode/javascript_ls")
				}.call(c.prototype),
				(t.Mode = c)
		}
	)
;(function () {
	window.require(["ace/mode/javascript_ls"], function (m) {
		if (typeof module == "object" && typeof exports == "object" && module) {
			module.exports = m
		}
	})
})()
