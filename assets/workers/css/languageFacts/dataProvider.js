!(function (e) {
	if ("object" == typeof module && "object" == typeof module.exports) {
		var t = e(require, exports)
		void 0 !== t && (module.exports = t)
	} else "function" == typeof define && define.amd && define(["require", "exports"], e)
})(function (e, t) {
	"use strict"
	Object.defineProperty(t, "__esModule", { value: !0 })
	var s = (function () {
		function e(e) {
			;(this._properties = []),
				(this._atDirectives = []),
				(this._pseudoClasses = []),
				(this._pseudoElements = []),
				this.addData(e)
		}
		return (
			(e.prototype.provideProperties = function () {
				return this._properties
			}),
			(e.prototype.provideAtDirectives = function () {
				return this._atDirectives
			}),
			(e.prototype.providePseudoClasses = function () {
				return this._pseudoClasses
			}),
			(e.prototype.providePseudoElements = function () {
				return this._pseudoElements
			}),
			(e.prototype.addData = function (e) {
				e.properties && (this._properties = this._properties.concat(e.properties)),
					e.atDirectives && (this._atDirectives = this._atDirectives.concat(e.atDirectives)),
					e.pseudoClasses && (this._pseudoClasses = this._pseudoClasses.concat(e.pseudoClasses)),
					e.pseudoElements && (this._pseudoElements = this._pseudoElements.concat(e.pseudoElements))
			}),
			e
		)
	})()
	t.CSSDataProvider = s
})
