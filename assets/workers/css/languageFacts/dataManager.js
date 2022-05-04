!(function (e) {
	if ("object" == typeof module && "object" == typeof module.exports) {
		var t = e(require, exports)
		void 0 !== t && (module.exports = t)
	} else "function" == typeof define && define.amd && define(["require", "exports", "../utils/objects"], e)
})(function (e, t) {
	"use strict"
	Object.defineProperty(t, "__esModule", { value: !0 })
	var s = e("../utils/objects"),
		o = (function () {
			function e(e) {
				;(this.dataProviders = e),
					(this._propertySet = {}),
					(this._atDirectiveSet = {}),
					(this._pseudoClassSet = {}),
					(this._pseudoElementSet = {}),
					(this._properties = []),
					(this._atDirectives = []),
					(this._pseudoClasses = []),
					(this._pseudoElements = []),
					this.collectData()
			}
			return (
				(e.prototype.addDataProviders = function (e) {
					;(this.dataProviders = this.dataProviders.concat(e)), this.collectData()
				}),
				(e.prototype.collectData = function () {
					var e = this
					this.dataProviders.forEach(function (t) {
						t.provideProperties().forEach(function (t) {
							e._propertySet[t.name] || (e._propertySet[t.name] = t)
						}),
							t.provideAtDirectives().forEach(function (t) {
								e._atDirectiveSet[t.name] || (e._atDirectiveSet[t.name] = t)
							}),
							t.providePseudoClasses().forEach(function (t) {
								e._pseudoClassSet[t.name] || (e._pseudoClassSet[t.name] = t)
							}),
							t.providePseudoElements().forEach(function (t) {
								e._pseudoElementSet[t.name] || (e._pseudoElementSet[t.name] = t)
							})
					}),
						(this._properties = s.values(this._propertySet)),
						(this._atDirectives = s.values(this._atDirectiveSet)),
						(this._pseudoClasses = s.values(this._pseudoClassSet)),
						(this._pseudoElements = s.values(this._pseudoElementSet))
				}),
				(e.prototype.getProperty = function (e) {
					return this._propertySet[e]
				}),
				(e.prototype.getAtDirective = function (e) {
					return this._atDirectiveSet[e]
				}),
				(e.prototype.getPseudoClass = function (e) {
					return this._pseudoClassSet[e]
				}),
				(e.prototype.getPseudoElement = function (e) {
					return this._pseudoElementSet[e]
				}),
				(e.prototype.getProperties = function () {
					return this._properties
				}),
				(e.prototype.getAtDirectives = function () {
					return this._atDirectives
				}),
				(e.prototype.getPseudoClasses = function () {
					return this._pseudoClasses
				}),
				(e.prototype.getPseudoElements = function () {
					return this._pseudoElements
				}),
				(e.prototype.isKnownProperty = function (e) {
					return e.toLowerCase() in this._propertySet
				}),
				(e.prototype.isStandardProperty = function (e) {
					return (
						this.isKnownProperty(e) &&
						(!this._propertySet[e.toLowerCase()].status ||
							"standard" === this._propertySet[e.toLowerCase()].status)
					)
				}),
				e
			)
		})()
	t.CSSDataManager = o
})
