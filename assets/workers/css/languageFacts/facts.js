!(function (a) {
	if ("object" == typeof module && "object" == typeof module.exports) {
		var e = a(require, exports)
		void 0 !== e && (module.exports = e)
	} else
		"function" == typeof define &&
			define.amd &&
			define(
				[
					"require",
					"exports",
					"../data/browsers",
					"./dataManager",
					"./dataProvider",
					"./entry",
					"./colors",
					"./builtinData",
					"./dataProvider",
					"./dataManager",
				],
				a
			)
})(function (a, e) {
	"use strict"
	function r(a) {
		for (var r in a) e.hasOwnProperty(r) || (e[r] = a[r])
	}
	Object.defineProperty(e, "__esModule", { value: !0 })
	var t = a("../data/browsers"),
		o = a("./dataManager"),
		n = a("./dataProvider")
	r(a("./entry")),
		r(a("./colors")),
		r(a("./builtinData")),
		r(a("./dataProvider")),
		r(a("./dataManager")),
		(e.cssDataManager = new o.CSSDataManager([new n.CSSDataProvider(t.cssData)]))
})
