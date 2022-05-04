!(function (e) {
	if ("object" == typeof module && "object" == typeof module.exports) {
		var r = e(require, exports)
		void 0 !== r && (module.exports = r)
	} else
		"function" == typeof define &&
			define.amd &&
			define(["require", "exports", "../parser/cssNodes", "vscode-nls"], e)
})(function (e, r) {
	"use strict"
	Object.defineProperty(r, "__esModule", { value: !0 })
	var a = e("../parser/cssNodes"),
		t = e("vscode-nls").loadMessageBundle()
	function f(e, r) {
		var a = e.getText().match(/^([-+]?[0-9]*\.?[0-9]+)(%?)$/)
		if (a) {
			a[2] && (r = 100)
			var t = parseFloat(a[1]) / r
			if (t >= 0 && t <= 1) return t
		}
		throw new Error()
	}
	function o(e) {
		var r = e.getName()
		return !!r && /^(rgb|rgba|hsl|hsla)$/gi.test(r)
	}
	;(r.colorFunctions = [
		{
			func: "rgb($red, $green, $blue)",
			desc: t("css.builtin.rgb", "Creates a Color from red, green, and blue values."),
		},
		{
			func: "rgba($red, $green, $blue, $alpha)",
			desc: t("css.builtin.rgba", "Creates a Color from red, green, blue, and alpha values."),
		},
		{
			func: "hsl($hue, $saturation, $lightness)",
			desc: t("css.builtin.hsl", "Creates a Color from hue, saturation, and lightness values."),
		},
		{
			func: "hsla($hue, $saturation, $lightness, $alpha)",
			desc: t("css.builtin.hsla", "Creates a Color from hue, saturation, lightness, and alpha values."),
		},
	]),
		(r.colors = {
			aliceblue: "#f0f8ff",
			antiquewhite: "#faebd7",
			aqua: "#00ffff",
			aquamarine: "#7fffd4",
			azure: "#f0ffff",
			beige: "#f5f5dc",
			bisque: "#ffe4c4",
			black: "#000000",
			blanchedalmond: "#ffebcd",
			blue: "#0000ff",
			blueviolet: "#8a2be2",
			brown: "#a52a2a",
			burlywood: "#deb887",
			cadetblue: "#5f9ea0",
			chartreuse: "#7fff00",
			chocolate: "#d2691e",
			coral: "#ff7f50",
			cornflowerblue: "#6495ed",
			cornsilk: "#fff8dc",
			crimson: "#dc143c",
			cyan: "#00ffff",
			darkblue: "#00008b",
			darkcyan: "#008b8b",
			darkgoldenrod: "#b8860b",
			darkgray: "#a9a9a9",
			darkgrey: "#a9a9a9",
			darkgreen: "#006400",
			darkkhaki: "#bdb76b",
			darkmagenta: "#8b008b",
			darkolivegreen: "#556b2f",
			darkorange: "#ff8c00",
			darkorchid: "#9932cc",
			darkred: "#8b0000",
			darksalmon: "#e9967a",
			darkseagreen: "#8fbc8f",
			darkslateblue: "#483d8b",
			darkslategray: "#2f4f4f",
			darkslategrey: "#2f4f4f",
			darkturquoise: "#00ced1",
			darkviolet: "#9400d3",
			deeppink: "#ff1493",
			deepskyblue: "#00bfff",
			dimgray: "#696969",
			dimgrey: "#696969",
			dodgerblue: "#1e90ff",
			firebrick: "#b22222",
			floralwhite: "#fffaf0",
			forestgreen: "#228b22",
			fuchsia: "#ff00ff",
			gainsboro: "#dcdcdc",
			ghostwhite: "#f8f8ff",
			gold: "#ffd700",
			goldenrod: "#daa520",
			gray: "#808080",
			grey: "#808080",
			green: "#008000",
			greenyellow: "#adff2f",
			honeydew: "#f0fff0",
			hotpink: "#ff69b4",
			indianred: "#cd5c5c",
			indigo: "#4b0082",
			ivory: "#fffff0",
			khaki: "#f0e68c",
			lavender: "#e6e6fa",
			lavenderblush: "#fff0f5",
			lawngreen: "#7cfc00",
			lemonchiffon: "#fffacd",
			lightblue: "#add8e6",
			lightcoral: "#f08080",
			lightcyan: "#e0ffff",
			lightgoldenrodyellow: "#fafad2",
			lightgray: "#d3d3d3",
			lightgrey: "#d3d3d3",
			lightgreen: "#90ee90",
			lightpink: "#ffb6c1",
			lightsalmon: "#ffa07a",
			lightseagreen: "#20b2aa",
			lightskyblue: "#87cefa",
			lightslategray: "#778899",
			lightslategrey: "#778899",
			lightsteelblue: "#b0c4de",
			lightyellow: "#ffffe0",
			lime: "#00ff00",
			limegreen: "#32cd32",
			linen: "#faf0e6",
			magenta: "#ff00ff",
			maroon: "#800000",
			mediumaquamarine: "#66cdaa",
			mediumblue: "#0000cd",
			mediumorchid: "#ba55d3",
			mediumpurple: "#9370d8",
			mediumseagreen: "#3cb371",
			mediumslateblue: "#7b68ee",
			mediumspringgreen: "#00fa9a",
			mediumturquoise: "#48d1cc",
			mediumvioletred: "#c71585",
			midnightblue: "#191970",
			mintcream: "#f5fffa",
			mistyrose: "#ffe4e1",
			moccasin: "#ffe4b5",
			navajowhite: "#ffdead",
			navy: "#000080",
			oldlace: "#fdf5e6",
			olive: "#808000",
			olivedrab: "#6b8e23",
			orange: "#ffa500",
			orangered: "#ff4500",
			orchid: "#da70d6",
			palegoldenrod: "#eee8aa",
			palegreen: "#98fb98",
			paleturquoise: "#afeeee",
			palevioletred: "#d87093",
			papayawhip: "#ffefd5",
			peachpuff: "#ffdab9",
			peru: "#cd853f",
			pink: "#ffc0cb",
			plum: "#dda0dd",
			powderblue: "#b0e0e6",
			purple: "#800080",
			red: "#ff0000",
			rebeccapurple: "#663399",
			rosybrown: "#bc8f8f",
			royalblue: "#4169e1",
			saddlebrown: "#8b4513",
			salmon: "#fa8072",
			sandybrown: "#f4a460",
			seagreen: "#2e8b57",
			seashell: "#fff5ee",
			sienna: "#a0522d",
			silver: "#c0c0c0",
			skyblue: "#87ceeb",
			slateblue: "#6a5acd",
			slategray: "#708090",
			slategrey: "#708090",
			snow: "#fffafa",
			springgreen: "#00ff7f",
			steelblue: "#4682b4",
			tan: "#d2b48c",
			teal: "#008080",
			thistle: "#d8bfd8",
			tomato: "#ff6347",
			turquoise: "#40e0d0",
			violet: "#ee82ee",
			wheat: "#f5deb3",
			white: "#ffffff",
			whitesmoke: "#f5f5f5",
			yellow: "#ffff00",
			yellowgreen: "#9acd32",
		}),
		(r.colorKeywords = {
			currentColor:
				"The value of the 'color' property. The computed value of the 'currentColor' keyword is the computed value of the 'color' property. If the 'currentColor' keyword is set on the 'color' property itself, it is treated as 'color:inherit' at parse time.",
			transparent:
				"Fully transparent. This keyword can be considered a shorthand for rgba(0,0,0,0) which is its computed value.",
		}),
		(r.isColorConstructor = o),
		(r.isColorValue = function (e) {
			if (e.type === a.NodeType.HexColorValue) return !0
			if (e.type === a.NodeType.Function) return o(e)
			if (e.type === a.NodeType.Identifier) {
				if (e.parent && e.parent.type !== a.NodeType.Term) return !1
				var t = e.getText().toLowerCase()
				if ("none" === t) return !1
				if (r.colors[t]) return !0
			}
			return !1
		})
	function n(e) {
		return e < 48 ? 0 : e <= 57 ? e - 48 : (e < 97 && (e += 32), e >= 97 && e <= 102 ? e - 97 + 10 : 0)
	}
	function l(e) {
		if ("#" !== e[0]) return null
		switch (e.length) {
			case 4:
				return {
					red: (17 * n(e.charCodeAt(1))) / 255,
					green: (17 * n(e.charCodeAt(2))) / 255,
					blue: (17 * n(e.charCodeAt(3))) / 255,
					alpha: 1,
				}
			case 5:
				return {
					red: (17 * n(e.charCodeAt(1))) / 255,
					green: (17 * n(e.charCodeAt(2))) / 255,
					blue: (17 * n(e.charCodeAt(3))) / 255,
					alpha: (17 * n(e.charCodeAt(4))) / 255,
				}
			case 7:
				return {
					red: (16 * n(e.charCodeAt(1)) + n(e.charCodeAt(2))) / 255,
					green: (16 * n(e.charCodeAt(3)) + n(e.charCodeAt(4))) / 255,
					blue: (16 * n(e.charCodeAt(5)) + n(e.charCodeAt(6))) / 255,
					alpha: 1,
				}
			case 9:
				return {
					red: (16 * n(e.charCodeAt(1)) + n(e.charCodeAt(2))) / 255,
					green: (16 * n(e.charCodeAt(3)) + n(e.charCodeAt(4))) / 255,
					blue: (16 * n(e.charCodeAt(5)) + n(e.charCodeAt(6))) / 255,
					alpha: (16 * n(e.charCodeAt(7)) + n(e.charCodeAt(8))) / 255,
				}
		}
		return null
	}
	function d(e, r, a, t) {
		if ((void 0 === t && (t = 1), 0 === r)) return { red: a, green: a, blue: a, alpha: t }
		var f = function (e, r, a) {
				for (; a < 0; ) a += 6
				for (; a >= 6; ) a -= 6
				return a < 1 ? (r - e) * a + e : a < 3 ? r : a < 4 ? (r - e) * (4 - a) + e : e
			},
			o = a <= 0.5 ? a * (r + 1) : a + r - a * r,
			n = 2 * a - o
		return { red: f(n, o, (e /= 60) + 2), green: f(n, o, e), blue: f(n, o, e - 2), alpha: t }
	}
	;(r.hexDigit = n),
		(r.colorFromHex = l),
		(r.colorFrom256RGB = function (e, r, a, t) {
			return void 0 === t && (t = 1), { red: e / 255, green: r / 255, blue: a / 255, alpha: t }
		}),
		(r.colorFromHSL = d),
		(r.hslFromColor = function (e) {
			var r = e.red,
				a = e.green,
				t = e.blue,
				f = e.alpha,
				o = Math.max(r, a, t),
				n = Math.min(r, a, t),
				l = 0,
				d = 0,
				i = (n + o) / 2,
				u = o - n
			if (u > 0) {
				switch (((d = Math.min(i <= 0.5 ? u / (2 * i) : u / (2 - 2 * i), 1)), o)) {
					case r:
						l = (a - t) / u + (a < t ? 6 : 0)
						break
					case a:
						l = (t - r) / u + 2
						break
					case t:
						l = (r - a) / u + 4
				}
				;(l *= 60), (l = Math.round(l))
			}
			return { h: l, s: d, l: i, a: f }
		}),
		(r.getColorValue = function (e) {
			if (e.type === a.NodeType.HexColorValue) return l(e.getText())
			if (e.type === a.NodeType.Function) {
				var t = e,
					o = t.getName(),
					n = t.getArguments().getChildren()
				if (!o || n.length < 3 || n.length > 4) return null
				try {
					var i = 4 === n.length ? f(n[3], 1) : 1
					if ("rgb" === o || "rgba" === o)
						return { red: f(n[0], 255), green: f(n[1], 255), blue: f(n[2], 255), alpha: i }
					if ("hsl" === o || "hsla" === o) {
						var u = (function (e) {
							var r = e.getText()
							if (r.match(/^([-+]?[0-9]*\.?[0-9]+)(deg)?$/)) return parseFloat(r) % 360
							throw new Error()
						})(n[0])
						return d(u, f(n[1], 100), f(n[2], 100), i)
					}
				} catch (e) {
					return null
				}
			} else if (e.type === a.NodeType.Identifier) {
				if (e.parent && e.parent.type !== a.NodeType.Term) return null
				var c = e.parent
				if (c.parent && c.parent.type === a.NodeType.BinaryExpression) {
					var s = c.parent
					if (s.parent && s.parent.type === a.NodeType.ListEntry && s.parent.key === s) return null
				}
				var h = e.getText().toLowerCase()
				if ("none" === h) return null
				var b = r.colors[h]
				if (b) return l(b)
			}
			return null
		})
})
