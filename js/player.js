"object" == typeof navigator && function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Plyr = t()
}(this, (function() {
	"use strict";
	! function() {
		if ("undefined" != typeof window) try {
			var e = new window.CustomEvent("test", {
				cancelable: !0
			});
			if (e.preventDefault(), !0 !== e.defaultPrevented) throw new Error("Could not prevent default")
		} catch (e) {
			var t = function(e, t) {
				var n, i;
				return (t = t || {}).bubbles = !!t.bubbles, t.cancelable = !!t.cancelable, (n = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i = n.preventDefault, n.preventDefault = function() {
					i.call(this);
					try {
						Object.defineProperty(this, "defaultPrevented", {
							get: function() {
								return !0
							}
						})
					} catch (e) {
						this.defaultPrevented = !0
					}
				}, n
			};
			t.prototype = window.Event.prototype, window.CustomEvent = t
		}
	}();
	var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

	function t(e, t) {
		return e(t = {
			exports: {}
		}, t.exports), t.exports
	}
	var n = function(e) {
			return e && e.Math == Math && e
		},
		i = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || function() {
			return this
		}() || Function("return this")(),
		r = function(e) {
			try {
				return !!e()
			} catch (e) {
				return !0
			}
		},
		o = !r((function() {
			return 7 != Object.defineProperty({}, 1, {
				get: function() {
					return 7
				}
			})[1]
		})),
		a = {}.propertyIsEnumerable,
		s = Object.getOwnPropertyDescriptor,
		l = {
			f: s && !a.call({
				1: 2
			}, 1) ? function(e) {
				var t = s(this, e);
				return !!t && t.enumerable
			} : a
		},
		c = function(e, t) {
			return {
				enumerable: !(1 & e),
				configurable: !(2 & e),
				writable: !(4 & e),
				value: t
			}
		},
		u = {}.toString,
		h = function(e) {
			return u.call(e).slice(8, -1)
		},
		f = "".split,
		d = r((function() {
			return !Object("z").propertyIsEnumerable(0)
		})) ? function(e) {
			return "String" == h(e) ? f.call(e, "") : Object(e)
		} : Object,
		p = function(e) {
			if (null == e) throw TypeError("Can't call method on " + e);
			return e
		},
		m = function(e) {
			return d(p(e))
		},
		g = function(e) {
			return "object" == typeof e ? null !== e : "function" == typeof e
		},
		v = function(e, t) {
			if (!g(e)) return e;
			var n, i;
			if (t && "function" == typeof(n = e.toString) && !g(i = n.call(e))) return i;
			if ("function" == typeof(n = e.valueOf) && !g(i = n.call(e))) return i;
			if (!t && "function" == typeof(n = e.toString) && !g(i = n.call(e))) return i;
			throw TypeError("Can't convert object to primitive value")
		},
		y = {}.hasOwnProperty,
		b = function(e, t) {
			return y.call(e, t)
		},
		w = i.document,
		k = g(w) && g(w.createElement),
		T = function(e) {
			return k ? w.createElement(e) : {}
		},
		S = !o && !r((function() {
			return 7 != Object.defineProperty(T("div"), "a", {
				get: function() {
					return 7
				}
			}).a
		})),
		E = Object.getOwnPropertyDescriptor,
		A = {
			f: o ? E : function(e, t) {
				if (e = m(e), t = v(t, !0), S) try {
					return E(e, t)
				} catch (e) {}
				if (b(e, t)) return c(!l.f.call(e, t), e[t])
			}
		},
		C = function(e) {
			if (!g(e)) throw TypeError(String(e) + " is not an object");
			return e
		},
		P = Object.defineProperty,
		x = {
			f: o ? P : function(e, t, n) {
				if (C(e), t = v(t, !0), C(n), S) try {
					return P(e, t, n)
				} catch (e) {}
				if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
				return "value" in n && (e[t] = n.value), e
			}
		},
		O = o ? function(e, t, n) {
			return x.f(e, t, c(1, n))
		} : function(e, t, n) {
			return e[t] = n, e
		},
		I = function(e, t) {
			try {
				O(i, e, t)
			} catch (n) {
				i[e] = t
			}
			return t
		},
		L = "__core-js_shared__",
		j = i[L] || I(L, {}),
		N = Function.toString;
	"function" != typeof j.inspectSource && (j.inspectSource = function(e) {
		return N.call(e)
	});
	var R, M, _, U = j.inspectSource,
		D = i.WeakMap,
		F = "function" == typeof D && /native code/.test(U(D)),
		q = t((function(e) {
			(e.exports = function(e, t) {
				return j[e] || (j[e] = void 0 !== t ? t : {})
			})("versions", []).push({
				version: "3.7.0",
				mode: "global",
				copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
			})
		})),
		H = 0,
		B = Math.random(),
		V = function(e) {
			return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++H + B).toString(36)
		},
		z = q("keys"),
		W = function(e) {
			return z[e] || (z[e] = V(e))
		},
		K = {},
		$ = i.WeakMap;
	if (F) {
		var Y = j.state || (j.state = new $),
			G = Y.get,
			X = Y.has,
			Q = Y.set;
		R = function(e, t) {
			return t.facade = e, Q.call(Y, e, t), t
		}, M = function(e) {
			return G.call(Y, e) || {}
		}, _ = function(e) {
			return X.call(Y, e)
		}
	} else {
		var J = W("state");
		K[J] = !0, R = function(e, t) {
			return t.facade = e, O(e, J, t), t
		}, M = function(e) {
			return b(e, J) ? e[J] : {}
		}, _ = function(e) {
			return b(e, J)
		}
	}
	var Z, ee = {
			set: R,
			get: M,
			has: _,
			enforce: function(e) {
				return _(e) ? M(e) : R(e, {})
			},
			getterFor: function(e) {
				return function(t) {
					var n;
					if (!g(t) || (n = M(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
					return n
				}
			}
		},
		te = t((function(e) {
			var t = ee.get,
				n = ee.enforce,
				r = String(String).split("String");
			(e.exports = function(e, t, o, a) {
				var s, l = !!a && !!a.unsafe,
					c = !!a && !!a.enumerable,
					u = !!a && !!a.noTargetGet;
				"function" == typeof o && ("string" != typeof t || b(o, "name") || O(o, "name", t), (s = n(o)).source || (s.source = r.join("string" == typeof t ? t : ""))), e !== i ? (l ? !u && e[t] && (c = !0) : delete e[t], c ? e[t] = o : O(e, t, o)) : c ? e[t] = o : I(t, o)
			})(Function.prototype, "toString", (function() {
				return "function" == typeof this && t(this).source || U(this)
			}))
		})),
		ne = i,
		ie = function(e) {
			return "function" == typeof e ? e : void 0
		},
		re = function(e, t) {
			return arguments.length < 2 ? ie(ne[e]) || ie(i[e]) : ne[e] && ne[e][t] || i[e] && i[e][t]
		},
		oe = Math.ceil,
		ae = Math.floor,
		se = function(e) {
			return isNaN(e = +e) ? 0 : (e > 0 ? ae : oe)(e)
		},
		le = Math.min,
		ce = function(e) {
			return e > 0 ? le(se(e), 9007199254740991) : 0
		},
		ue = Math.max,
		he = Math.min,
		fe = function(e, t) {
			var n = se(e);
			return n < 0 ? ue(n + t, 0) : he(n, t)
		},
		de = function(e) {
			return function(t, n, i) {
				var r, o = m(t),
					a = ce(o.length),
					s = fe(i, a);
				if (e && n != n) {
					for (; a > s;)
						if ((r = o[s++]) != r) return !0
				} else
					for (; a > s; s++)
						if ((e || s in o) && o[s] === n) return e || s || 0; return !e && -1
			}
		},
		pe = {
			includes: de(!0),
			indexOf: de(!1)
		},
		me = pe.indexOf,
		ge = function(e, t) {
			var n, i = m(e),
				r = 0,
				o = [];
			for (n in i) !b(K, n) && b(i, n) && o.push(n);
			for (; t.length > r;) b(i, n = t[r++]) && (~me(o, n) || o.push(n));
			return o
		},
		ve = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
		ye = ve.concat("length", "prototype"),
		be = {
			f: Object.getOwnPropertyNames || function(e) {
				return ge(e, ye)
			}
		},
		we = {
			f: Object.getOwnPropertySymbols
		},
		ke = re("Reflect", "ownKeys") || function(e) {
			var t = be.f(C(e)),
				n = we.f;
			return n ? t.concat(n(e)) : t
		},
		Te = function(e, t) {
			for (var n = ke(t), i = x.f, r = A.f, o = 0; o < n.length; o++) {
				var a = n[o];
				b(e, a) || i(e, a, r(t, a))
			}
		},
		Se = /#|\.prototype\./,
		Ee = function(e, t) {
			var n = Ce[Ae(e)];
			return n == xe || n != Pe && ("function" == typeof t ? r(t) : !!t)
		},
		Ae = Ee.normalize = function(e) {
			return String(e).replace(Se, ".").toLowerCase()
		},
		Ce = Ee.data = {},
		Pe = Ee.NATIVE = "N",
		xe = Ee.POLYFILL = "P",
		Oe = Ee,
		Ie = A.f,
		Le = function(e, t) {
			var n, r, o, a, s, l = e.target,
				c = e.global,
				u = e.stat;
			if (n = c ? i : u ? i[l] || I(l, {}) : (i[l] || {}).prototype)
				for (r in t) {
					if (a = t[r], o = e.noTargetGet ? (s = Ie(n, r)) && s.value : n[r], !Oe(c ? r : l + (u ? "." : "#") + r, e.forced) && void 0 !== o) {
						if (typeof a == typeof o) continue;
						Te(a, o)
					}(e.sham || o && o.sham) && O(a, "sham", !0), te(n, r, a, e)
				}
		},
		je = !!Object.getOwnPropertySymbols && !r((function() {
			return !String(Symbol())
		})),
		Ne = je && !Symbol.sham && "symbol" == typeof Symbol.iterator,
		Re = Array.isArray || function(e) {
			return "Array" == h(e)
		},
		Me = function(e) {
			return Object(p(e))
		},
		_e = Object.keys || function(e) {
			return ge(e, ve)
		},
		Ue = o ? Object.defineProperties : function(e, t) {
			C(e);
			for (var n, i = _e(t), r = i.length, o = 0; r > o;) x.f(e, n = i[o++], t[n]);
			return e
		},
		De = re("document", "documentElement"),
		Fe = W("IE_PROTO"),
		qe = function() {},
		He = function(e) {
			return "<script>" + e + "</" + "script>"
		},
		Be = function() {
			try {
				Z = document.domain && new ActiveXObject("htmlfile")
			} catch (e) {}
			var e, t;
			Be = Z ? function(e) {
				e.write(He("")), e.close();
				var t = e.parentWindow.Object;
				return e = null, t
			}(Z) : ((t = T("iframe")).style.display = "none", De.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(He("document.F=Object")), e.close(), e.F);
			for (var n = ve.length; n--;) delete Be.prototype[ve[n]];
			return Be()
		};
	K[Fe] = !0;
	var Ve = Object.create || function(e, t) {
			var n;
			return null !== e ? (qe.prototype = C(e), n = new qe, qe.prototype = null, n[Fe] = e) : n = Be(), void 0 === t ? n : Ue(n, t)
		},
		ze = be.f,
		We = {}.toString,
		Ke = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
		$e = {
			f: function(e) {
				return Ke && "[object Window]" == We.call(e) ? function(e) {
					try {
						return ze(e)
					} catch (e) {
						return Ke.slice()
					}
				}(e) : ze(m(e))
			}
		},
		Ye = q("wks"),
		Ge = i.Symbol,
		Xe = Ne ? Ge : Ge && Ge.withoutSetter || V,
		Qe = function(e) {
			return b(Ye, e) || (je && b(Ge, e) ? Ye[e] = Ge[e] : Ye[e] = Xe("Symbol." + e)), Ye[e]
		},
		Je = {
			f: Qe
		},
		Ze = x.f,
		et = function(e) {
			var t = ne.Symbol || (ne.Symbol = {});
			b(t, e) || Ze(t, e, {
				value: Je.f(e)
			})
		},
		tt = x.f,
		nt = Qe("toStringTag"),
		it = function(e, t, n) {
			e && !b(e = n ? e : e.prototype, nt) && tt(e, nt, {
				configurable: !0,
				value: t
			})
		},
		rt = function(e) {
			if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
			return e
		},
		ot = function(e, t, n) {
			if (rt(e), void 0 === t) return e;
			switch (n) {
				case 0:
					return function() {
						return e.call(t)
					};
				case 1:
					return function(n) {
						return e.call(t, n)
					};
				case 2:
					return function(n, i) {
						return e.call(t, n, i)
					};
				case 3:
					return function(n, i, r) {
						return e.call(t, n, i, r)
					}
			}
			return function() {
				return e.apply(t, arguments)
			}
		},
		at = Qe("species"),
		st = function(e, t) {
			var n;
			return Re(e) && ("function" != typeof(n = e.constructor) || n !== Array && !Re(n.prototype) ? g(n) && null === (n = n[at]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
		},
		lt = [].push,
		ct = function(e) {
			var t = 1 == e,
				n = 2 == e,
				i = 3 == e,
				r = 4 == e,
				o = 6 == e,
				a = 5 == e || o;
			return function(s, l, c, u) {
				for (var h, f, p = Me(s), m = d(p), g = ot(l, c, 3), v = ce(m.length), y = 0, b = u || st, w = t ? b(s, v) : n ? b(s, 0) : void 0; v > y; y++)
					if ((a || y in m) && (f = g(h = m[y], y, p), e))
						if (t) w[y] = f;
						else if (f) switch (e) {
					case 3:
						return !0;
					case 5:
						return h;
					case 6:
						return y;
					case 2:
						lt.call(w, h)
				} else if (r) return !1;
				return o ? -1 : i || r ? r : w
			}
		},
		ut = {
			forEach: ct(0),
			map: ct(1),
			filter: ct(2),
			some: ct(3),
			every: ct(4),
			find: ct(5),
			findIndex: ct(6)
		},
		ht = ut.forEach,
		ft = W("hidden"),
		dt = "Symbol",
		pt = Qe("toPrimitive"),
		mt = ee.set,
		gt = ee.getterFor(dt),
		vt = Object.prototype,
		yt = i.Symbol,
		bt = re("JSON", "stringify"),
		wt = A.f,
		kt = x.f,
		Tt = $e.f,
		St = l.f,
		Et = q("symbols"),
		At = q("op-symbols"),
		Ct = q("string-to-symbol-registry"),
		Pt = q("symbol-to-string-registry"),
		xt = q("wks"),
		Ot = i.QObject,
		It = !Ot || !Ot.prototype || !Ot.prototype.findChild,
		Lt = o && r((function() {
			return 7 != Ve(kt({}, "a", {
				get: function() {
					return kt(this, "a", {
						value: 7
					}).a
				}
			})).a
		})) ? function(e, t, n) {
			var i = wt(vt, t);
			i && delete vt[t], kt(e, t, n), i && e !== vt && kt(vt, t, i)
		} : kt,
		jt = function(e, t) {
			var n = Et[e] = Ve(yt.prototype);
			return mt(n, {
				type: dt,
				tag: e,
				description: t
			}), o || (n.description = t), n
		},
		Nt = Ne ? function(e) {
			return "symbol" == typeof e
		} : function(e) {
			return Object(e) instanceof yt
		},
		Rt = function(e, t, n) {
			e === vt && Rt(At, t, n), C(e);
			var i = v(t, !0);
			return C(n), b(Et, i) ? (n.enumerable ? (b(e, ft) && e[ft][i] && (e[ft][i] = !1), n = Ve(n, {
				enumerable: c(0, !1)
			})) : (b(e, ft) || kt(e, ft, c(1, {})), e[ft][i] = !0), Lt(e, i, n)) : kt(e, i, n)
		},
		Mt = function(e, t) {
			C(e);
			var n = m(t),
				i = _e(n).concat(Ft(n));
			return ht(i, (function(t) {
				o && !_t.call(n, t) || Rt(e, t, n[t])
			})), e
		},
		_t = function(e) {
			var t = v(e, !0),
				n = St.call(this, t);
			return !(this === vt && b(Et, t) && !b(At, t)) && (!(n || !b(this, t) || !b(Et, t) || b(this, ft) && this[ft][t]) || n)
		},
		Ut = function(e, t) {
			var n = m(e),
				i = v(t, !0);
			if (n !== vt || !b(Et, i) || b(At, i)) {
				var r = wt(n, i);
				return !r || !b(Et, i) || b(n, ft) && n[ft][i] || (r.enumerable = !0), r
			}
		},
		Dt = function(e) {
			var t = Tt(m(e)),
				n = [];
			return ht(t, (function(e) {
				b(Et, e) || b(K, e) || n.push(e)
			})), n
		},
		Ft = function(e) {
			var t = e === vt,
				n = Tt(t ? At : m(e)),
				i = [];
			return ht(n, (function(e) {
				!b(Et, e) || t && !b(vt, e) || i.push(Et[e])
			})), i
		};
	if (je || (te((yt = function() {
			if (this instanceof yt) throw TypeError("Symbol is not a constructor");
			var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
				t = V(e),
				n = function(e) {
					this === vt && n.call(At, e), b(this, ft) && b(this[ft], t) && (this[ft][t] = !1), Lt(this, t, c(1, e))
				};
			return o && It && Lt(vt, t, {
				configurable: !0,
				set: n
			}), jt(t, e)
		}).prototype, "toString", (function() {
			return gt(this).tag
		})), te(yt, "withoutSetter", (function(e) {
			return jt(V(e), e)
		})), l.f = _t, x.f = Rt, A.f = Ut, be.f = $e.f = Dt, we.f = Ft, Je.f = function(e) {
			return jt(Qe(e), e)
		}, o && (kt(yt.prototype, "description", {
			configurable: !0,
			get: function() {
				return gt(this).description
			}
		}), te(vt, "propertyIsEnumerable", _t, {
			unsafe: !0
		}))), Le({
			global: !0,
			wrap: !0,
			forced: !je,
			sham: !je
		}, {
			Symbol: yt
		}), ht(_e(xt), (function(e) {
			et(e)
		})), Le({
			target: dt,
			stat: !0,
			forced: !je
		}, {
			for: function(e) {
				var t = String(e);
				if (b(Ct, t)) return Ct[t];
				var n = yt(t);
				return Ct[t] = n, Pt[n] = t, n
			},
			keyFor: function(e) {
				if (!Nt(e)) throw TypeError(e + " is not a symbol");
				if (b(Pt, e)) return Pt[e]
			},
			useSetter: function() {
				It = !0
			},
			useSimple: function() {
				It = !1
			}
		}), Le({
			target: "Object",
			stat: !0,
			forced: !je,
			sham: !o
		}, {
			create: function(e, t) {
				return void 0 === t ? Ve(e) : Mt(Ve(e), t)
			},
			defineProperty: Rt,
			defineProperties: Mt,
			getOwnPropertyDescriptor: Ut
		}), Le({
			target: "Object",
			stat: !0,
			forced: !je
		}, {
			getOwnPropertyNames: Dt,
			getOwnPropertySymbols: Ft
		}), Le({
			target: "Object",
			stat: !0,
			forced: r((function() {
				we.f(1)
			}))
		}, {
			getOwnPropertySymbols: function(e) {
				return we.f(Me(e))
			}
		}), bt) {
		var qt = !je || r((function() {
			var e = yt();
			return "[null]" != bt([e]) || "{}" != bt({
				a: e
			}) || "{}" != bt(Object(e))
		}));
		Le({
			target: "JSON",
			stat: !0,
			forced: qt
		}, {
			stringify: function(e, t, n) {
				for (var i, r = [e], o = 1; arguments.length > o;) r.push(arguments[o++]);
				if (i = t, (g(t) || void 0 !== e) && !Nt(e)) return Re(t) || (t = function(e, t) {
					if ("function" == typeof i && (t = i.call(this, e, t)), !Nt(t)) return t
				}), r[1] = t, bt.apply(null, r)
			}
		})
	}
	yt.prototype[pt] || O(yt.prototype, pt, yt.prototype.valueOf), it(yt, dt), K[ft] = !0;
	var Ht = x.f,
		Bt = i.Symbol;
	if (o && "function" == typeof Bt && (!("description" in Bt.prototype) || void 0 !== Bt().description)) {
		var Vt = {},
			zt = function() {
				var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
					t = this instanceof zt ? new Bt(e) : void 0 === e ? Bt() : Bt(e);
				return "" === e && (Vt[t] = !0), t
			};
		Te(zt, Bt);
		var Wt = zt.prototype = Bt.prototype;
		Wt.constructor = zt;
		var Kt = Wt.toString,
			$t = "Symbol(test)" == String(Bt("test")),
			Yt = /^Symbol\((.*)\)[^)]+$/;
		Ht(Wt, "description", {
			configurable: !0,
			get: function() {
				var e = g(this) ? this.valueOf() : this,
					t = Kt.call(e);
				if (b(Vt, e)) return "";
				var n = $t ? t.slice(7, -1) : t.replace(Yt, "$1");
				return "" === n ? void 0 : n
			}
		}), Le({
			global: !0,
			forced: !0
		}, {
			Symbol: zt
		})
	}
	et("iterator");
	var Gt = function(e, t) {
			var n = [][e];
			return !!n && r((function() {
				n.call(null, t || function() {
					throw 1
				}, 1)
			}))
		},
		Xt = Object.defineProperty,
		Qt = {},
		Jt = function(e) {
			throw e
		},
		Zt = function(e, t) {
			if (b(Qt, e)) return Qt[e];
			t || (t = {});
			var n = [][e],
				i = !!b(t, "ACCESSORS") && t.ACCESSORS,
				a = b(t, 0) ? t[0] : Jt,
				s = b(t, 1) ? t[1] : void 0;
			return Qt[e] = !!n && !r((function() {
				if (i && !o) return !0;
				var e = {
					length: -1
				};
				i ? Xt(e, 1, {
					enumerable: !0,
					get: Jt
				}) : e[1] = 1, n.call(e, a, s)
			}))
		},
		en = ut.forEach,
		tn = Gt("forEach"),
		nn = Zt("forEach"),
		rn = tn && nn ? [].forEach : function(e) {
			return en(this, e, arguments.length > 1 ? arguments[1] : void 0)
		};
	Le({
		target: "Array",
		proto: !0,
		forced: [].forEach != rn
	}, {
		forEach: rn
	});
	var on = pe.indexOf,
		an = [].indexOf,
		sn = !!an && 1 / [1].indexOf(1, -0) < 0,
		ln = Gt("indexOf"),
		cn = Zt("indexOf", {
			ACCESSORS: !0,
			1: 0
		});
	Le({
		target: "Array",
		proto: !0,
		forced: sn || !ln || !cn
	}, {
		indexOf: function(e) {
			return sn ? an.apply(this, arguments) || 0 : on(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var un = Qe("unscopables"),
		hn = Array.prototype;
	null == hn[un] && x.f(hn, un, {
		configurable: !0,
		value: Ve(null)
	});
	var fn, dn, pn, mn = function(e) {
			hn[un][e] = !0
		},
		gn = {},
		vn = !r((function() {
			function e() {}
			return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
		})),
		yn = W("IE_PROTO"),
		bn = Object.prototype,
		wn = vn ? Object.getPrototypeOf : function(e) {
			return e = Me(e), b(e, yn) ? e[yn] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? bn : null
		},
		kn = Qe("iterator"),
		Tn = !1;
	[].keys && ("next" in (pn = [].keys()) ? (dn = wn(wn(pn))) !== Object.prototype && (fn = dn) : Tn = !0), null == fn && (fn = {}), b(fn, kn) || O(fn, kn, (function() {
		return this
	}));
	var Sn = {
			IteratorPrototype: fn,
			BUGGY_SAFARI_ITERATORS: Tn
		},
		En = Sn.IteratorPrototype,
		An = function() {
			return this
		},
		Cn = function(e, t, n) {
			var i = t + " Iterator";
			return e.prototype = Ve(En, {
				next: c(1, n)
			}), it(e, i, !1), gn[i] = An, e
		},
		Pn = Object.setPrototypeOf || ("__proto__" in {} ? function() {
			var e, t = !1,
				n = {};
			try {
				(e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
			} catch (e) {}
			return function(n, i) {
				return C(n),
					function(e) {
						if (!g(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype")
					}(i), t ? e.call(n, i) : n.__proto__ = i, n
			}
		}() : void 0),
		xn = Sn.IteratorPrototype,
		On = Sn.BUGGY_SAFARI_ITERATORS,
		In = Qe("iterator"),
		Ln = "keys",
		jn = "values",
		Nn = "entries",
		Rn = function() {
			return this
		},
		Mn = function(e, t, n, i, r, o, a) {
			Cn(n, t, i);
			var s, l, c, u = function(e) {
					if (e === r && m) return m;
					if (!On && e in d) return d[e];
					switch (e) {
						case Ln:
						case jn:
						case Nn:
							return function() {
								return new n(this, e)
							}
					}
					return function() {
						return new n(this)
					}
				},
				h = t + " Iterator",
				f = !1,
				d = e.prototype,
				p = d[In] || d["@@iterator"] || r && d[r],
				m = !On && p || u(r),
				g = "Array" == t && d.entries || p;
			if (g && (s = wn(g.call(new e)), xn !== Object.prototype && s.next && (wn(s) !== xn && (Pn ? Pn(s, xn) : "function" != typeof s[In] && O(s, In, Rn)), it(s, h, !0))), r == jn && p && p.name !== jn && (f = !0, m = function() {
					return p.call(this)
				}), d[In] !== m && O(d, In, m), gn[t] = m, r)
				if (l = {
						values: u(jn),
						keys: o ? m : u(Ln),
						entries: u(Nn)
					}, a)
					for (c in l)(On || f || !(c in d)) && te(d, c, l[c]);
				else Le({
					target: t,
					proto: !0,
					forced: On || f
				}, l);
			return l
		},
		_n = "Array Iterator",
		Un = ee.set,
		Dn = ee.getterFor(_n),
		Fn = Mn(Array, "Array", (function(e, t) {
			Un(this, {
				type: _n,
				target: m(e),
				index: 0,
				kind: t
			})
		}), (function() {
			var e = Dn(this),
				t = e.target,
				n = e.kind,
				i = e.index++;
			return !t || i >= t.length ? (e.target = void 0, {
				value: void 0,
				done: !0
			}) : "keys" == n ? {
				value: i,
				done: !1
			} : "values" == n ? {
				value: t[i],
				done: !1
			} : {
				value: [i, t[i]],
				done: !1
			}
		}), "values");
	gn.Arguments = gn.Array, mn("keys"), mn("values"), mn("entries");
	var qn = [].join,
		Hn = d != Object,
		Bn = Gt("join", ",");
	Le({
		target: "Array",
		proto: !0,
		forced: Hn || !Bn
	}, {
		join: function(e) {
			return qn.call(m(this), void 0 === e ? "," : e)
		}
	});
	var Vn, zn, Wn = function(e, t, n) {
			var i = v(t);
			i in e ? x.f(e, i, c(0, n)) : e[i] = n
		},
		Kn = re("navigator", "userAgent") || "",
		$n = i.process,
		Yn = $n && $n.versions,
		Gn = Yn && Yn.v8;
	Gn ? zn = (Vn = Gn.split("."))[0] + Vn[1] : Kn && (!(Vn = Kn.match(/Edge\/(\d+)/)) || Vn[1] >= 74) && (Vn = Kn.match(/Chrome\/(\d+)/)) && (zn = Vn[1]);
	var Xn = zn && +zn,
		Qn = Qe("species"),
		Jn = function(e) {
			return Xn >= 51 || !r((function() {
				var t = [];
				return (t.constructor = {})[Qn] = function() {
					return {
						foo: 1
					}
				}, 1 !== t[e](Boolean).foo
			}))
		},
		Zn = Jn("slice"),
		ei = Zt("slice", {
			ACCESSORS: !0,
			0: 0,
			1: 2
		}),
		ti = Qe("species"),
		ni = [].slice,
		ii = Math.max;
	Le({
		target: "Array",
		proto: !0,
		forced: !Zn || !ei
	}, {
		slice: function(e, t) {
			var n, i, r, o = m(this),
				a = ce(o.length),
				s = fe(e, a),
				l = fe(void 0 === t ? a : t, a);
			if (Re(o) && ("function" != typeof(n = o.constructor) || n !== Array && !Re(n.prototype) ? g(n) && null === (n = n[ti]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return ni.call(o, s, l);
			for (i = new(void 0 === n ? Array : n)(ii(l - s, 0)), r = 0; s < l; s++, r++) s in o && Wn(i, r, o[s]);
			return i.length = r, i
		}
	});
	var ri = {};
	ri[Qe("toStringTag")] = "z";
	var oi = "[object z]" === String(ri),
		ai = Qe("toStringTag"),
		si = "Arguments" == h(function() {
			return arguments
		}()),
		li = oi ? h : function(e) {
			var t, n, i;
			return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
				try {
					return e[t]
				} catch (e) {}
			}(t = Object(e), ai)) ? n : si ? h(t) : "Object" == (i = h(t)) && "function" == typeof t.callee ? "Arguments" : i
		},
		ci = oi ? {}.toString : function() {
			return "[object " + li(this) + "]"
		};
	oi || te(Object.prototype, "toString", ci, {
		unsafe: !0
	});
	var ui = function() {
		var e = C(this),
			t = "";
		return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
	};

	function hi(e, t) {
		return RegExp(e, t)
	}
	var fi = {
			UNSUPPORTED_Y: r((function() {
				var e = hi("a", "y");
				return e.lastIndex = 2, null != e.exec("abcd")
			})),
			BROKEN_CARET: r((function() {
				var e = hi("^r", "gy");
				return e.lastIndex = 2, null != e.exec("str")
			}))
		},
		di = RegExp.prototype.exec,
		pi = String.prototype.replace,
		mi = di,
		gi = function() {
			var e = /a/,
				t = /b*/g;
			return di.call(e, "a"), di.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
		}(),
		vi = fi.UNSUPPORTED_Y || fi.BROKEN_CARET,
		yi = void 0 !== /()??/.exec("")[1];
	(gi || yi || vi) && (mi = function(e) {
		var t, n, i, r, o = this,
			a = vi && o.sticky,
			s = ui.call(o),
			l = o.source,
			c = 0,
			u = e;
		return a && (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"), u = String(e).slice(o.lastIndex), o.lastIndex > 0 && (!o.multiline || o.multiline && "\n" !== e[o.lastIndex - 1]) && (l = "(?: " + l + ")", u = " " + u, c++), n = new RegExp("^(?:" + l + ")", s)), yi && (n = new RegExp("^" + l + "$(?!\\s)", s)), gi && (t = o.lastIndex), i = di.call(a ? n : o, u), a ? i ? (i.input = i.input.slice(c), i[0] = i[0].slice(c), i.index = o.lastIndex, o.lastIndex += i[0].length) : o.lastIndex = 0 : gi && i && (o.lastIndex = o.global ? i.index + i[0].length : t), yi && i && i.length > 1 && pi.call(i[0], n, (function() {
			for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (i[r] = void 0)
		})), i
	});
	var bi = mi;
	Le({
		target: "RegExp",
		proto: !0,
		forced: /./.exec !== bi
	}, {
		exec: bi
	});
	var wi = "toString",
		ki = RegExp.prototype,
		Ti = ki.toString,
		Si = r((function() {
			return "/a/b" != Ti.call({
				source: "a",
				flags: "b"
			})
		})),
		Ei = Ti.name != wi;
	(Si || Ei) && te(RegExp.prototype, wi, (function() {
		var e = C(this),
			t = String(e.source),
			n = e.flags;
		return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in ki) ? ui.call(e) : n)
	}), {
		unsafe: !0
	});
	var Ai = function(e) {
			return function(t, n) {
				var i, r, o = String(p(t)),
					a = se(n),
					s = o.length;
				return a < 0 || a >= s ? e ? "" : void 0 : (i = o.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === s || (r = o.charCodeAt(a + 1)) < 56320 || r > 57343 ? e ? o.charAt(a) : i : e ? o.slice(a, a + 2) : r - 56320 + (i - 55296 << 10) + 65536
			}
		},
		Ci = {
			codeAt: Ai(!1),
			charAt: Ai(!0)
		},
		Pi = Ci.charAt,
		xi = "String Iterator",
		Oi = ee.set,
		Ii = ee.getterFor(xi);
	Mn(String, "String", (function(e) {
		Oi(this, {
			type: xi,
			string: String(e),
			index: 0
		})
	}), (function() {
		var e, t = Ii(this),
			n = t.string,
			i = t.index;
		return i >= n.length ? {
			value: void 0,
			done: !0
		} : (e = Pi(n, i), t.index += e.length, {
			value: e,
			done: !1
		})
	}));
	var Li = Qe("species"),
		ji = !r((function() {
			var e = /./;
			return e.exec = function() {
				var e = [];
				return e.groups = {
					a: "7"
				}, e
			}, "7" !== "".replace(e, "$<a>")
		})),
		Ni = "$0" === "a".replace(/./, "$0"),
		Ri = Qe("replace"),
		Mi = !!/./ [Ri] && "" === /./ [Ri]("a", "$0"),
		_i = !r((function() {
			var e = /(?:)/,
				t = e.exec;
			e.exec = function() {
				return t.apply(this, arguments)
			};
			var n = "ab".split(e);
			return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
		})),
		Ui = function(e, t, n, i) {
			var o = Qe(e),
				a = !r((function() {
					var t = {};
					return t[o] = function() {
						return 7
					}, 7 != "" [e](t)
				})),
				s = a && !r((function() {
					var t = !1,
						n = /a/;
					return "split" === e && ((n = {}).constructor = {}, n.constructor[Li] = function() {
						return n
					}, n.flags = "", n[o] = /./ [o]), n.exec = function() {
						return t = !0, null
					}, n[o](""), !t
				}));
			if (!a || !s || "replace" === e && (!ji || !Ni || Mi) || "split" === e && !_i) {
				var l = /./ [o],
					c = n(o, "" [e], (function(e, t, n, i, r) {
						return t.exec === bi ? a && !r ? {
							done: !0,
							value: l.call(t, n, i)
						} : {
							done: !0,
							value: e.call(n, t, i)
						} : {
							done: !1
						}
					}), {
						REPLACE_KEEPS_$0: Ni,
						REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Mi
					}),
					u = c[0],
					h = c[1];
				te(String.prototype, e, u), te(RegExp.prototype, o, 2 == t ? function(e, t) {
					return h.call(e, this, t)
				} : function(e) {
					return h.call(e, this)
				})
			}
			i && O(RegExp.prototype[o], "sham", !0)
		},
		Di = Ci.charAt,
		Fi = function(e, t, n) {
			return t + (n ? Di(e, t).length : 1)
		},
		qi = function(e, t) {
			var n = e.exec;
			if ("function" == typeof n) {
				var i = n.call(e, t);
				if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
				return i
			}
			if ("RegExp" !== h(e)) throw TypeError("RegExp#exec called on incompatible receiver");
			return bi.call(e, t)
		},
		Hi = Math.max,
		Bi = Math.min,
		Vi = Math.floor,
		zi = /\$([$&'`]|\d\d?|<[^>]*>)/g,
		Wi = /\$([$&'`]|\d\d?)/g;
	Ui("replace", 2, (function(e, t, n, i) {
		var r = i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
			o = i.REPLACE_KEEPS_$0,
			a = r ? "$" : "$0";
		return [function(n, i) {
			var r = p(this),
				o = null == n ? void 0 : n[e];
			return void 0 !== o ? o.call(n, r, i) : t.call(String(r), n, i)
		}, function(e, i) {
			if (!r && o || "string" == typeof i && -1 === i.indexOf(a)) {
				var l = n(t, e, this, i);
				if (l.done) return l.value
			}
			var c = C(e),
				u = String(this),
				h = "function" == typeof i;
			h || (i = String(i));
			var f = c.global;
			if (f) {
				var d = c.unicode;
				c.lastIndex = 0
			}
			for (var p = [];;) {
				var m = qi(c, u);
				if (null === m) break;
				if (p.push(m), !f) break;
				"" === String(m[0]) && (c.lastIndex = Fi(u, ce(c.lastIndex), d))
			}
			for (var g, v = "", y = 0, b = 0; b < p.length; b++) {
				m = p[b];
				for (var w = String(m[0]), k = Hi(Bi(se(m.index), u.length), 0), T = [], S = 1; S < m.length; S++) T.push(void 0 === (g = m[S]) ? g : String(g));
				var E = m.groups;
				if (h) {
					var A = [w].concat(T, k, u);
					void 0 !== E && A.push(E);
					var P = String(i.apply(void 0, A))
				} else P = s(w, u, k, T, E, i);
				k >= y && (v += u.slice(y, k) + P, y = k + w.length)
			}
			return v + u.slice(y)
		}];

		function s(e, n, i, r, o, a) {
			var s = i + e.length,
				l = r.length,
				c = Wi;
			return void 0 !== o && (o = Me(o), c = zi), t.call(a, c, (function(t, a) {
				var c;
				switch (a.charAt(0)) {
					case "$":
						return "$";
					case "&":
						return e;
					case "`":
						return n.slice(0, i);
					case "'":
						return n.slice(s);
					case "<":
						c = o[a.slice(1, -1)];
						break;
					default:
						var u = +a;
						if (0 === u) return t;
						if (u > l) {
							var h = Vi(u / 10);
							return 0 === h ? t : h <= l ? void 0 === r[h - 1] ? a.charAt(1) : r[h - 1] + a.charAt(1) : t
						}
						c = r[u - 1]
				}
				return void 0 === c ? "" : c
			}))
		}
	}));
	var Ki = Object.is || function(e, t) {
		return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
	};
	Ui("search", 1, (function(e, t, n) {
		return [function(t) {
			var n = p(this),
				i = null == t ? void 0 : t[e];
			return void 0 !== i ? i.call(t, n) : new RegExp(t)[e](String(n))
		}, function(e) {
			var i = n(t, e, this);
			if (i.done) return i.value;
			var r = C(e),
				o = String(this),
				a = r.lastIndex;
			Ki(a, 0) || (r.lastIndex = 0);
			var s = qi(r, o);
			return Ki(r.lastIndex, a) || (r.lastIndex = a), null === s ? -1 : s.index
		}]
	}));
	var $i = Qe("match"),
		Yi = function(e) {
			var t;
			return g(e) && (void 0 !== (t = e[$i]) ? !!t : "RegExp" == h(e))
		},
		Gi = Qe("species"),
		Xi = function(e, t) {
			var n, i = C(e).constructor;
			return void 0 === i || null == (n = C(i)[Gi]) ? t : rt(n)
		},
		Qi = [].push,
		Ji = Math.min,
		Zi = 4294967295,
		er = !r((function() {
			return !RegExp(Zi, "y")
		}));
	Ui("split", 2, (function(e, t, n) {
		var i;
		return i = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, n) {
			var i = String(p(this)),
				r = void 0 === n ? Zi : n >>> 0;
			if (0 === r) return [];
			if (void 0 === e) return [i];
			if (!Yi(e)) return t.call(i, e, r);
			for (var o, a, s, l = [], c = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), u = 0, h = new RegExp(e.source, c + "g");
				(o = bi.call(h, i)) && !((a = h.lastIndex) > u && (l.push(i.slice(u, o.index)), o.length > 1 && o.index < i.length && Qi.apply(l, o.slice(1)), s = o[0].length, u = a, l.length >= r));) h.lastIndex === o.index && h.lastIndex++;
			return u === i.length ? !s && h.test("") || l.push("") : l.push(i.slice(u)), l.length > r ? l.slice(0, r) : l
		} : "0".split(void 0, 0).length ? function(e, n) {
			return void 0 === e && 0 === n ? [] : t.call(this, e, n)
		} : t, [function(t, n) {
			var r = p(this),
				o = null == t ? void 0 : t[e];
			return void 0 !== o ? o.call(t, r, n) : i.call(String(r), t, n)
		}, function(e, r) {
			var o = n(i, e, this, r, i !== t);
			if (o.done) return o.value;
			var a = C(e),
				s = String(this),
				l = Xi(a, RegExp),
				c = a.unicode,
				u = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (er ? "y" : "g"),
				h = new l(er ? a : "^(?:" + a.source + ")", u),
				f = void 0 === r ? Zi : r >>> 0;
			if (0 === f) return [];
			if (0 === s.length) return null === qi(h, s) ? [s] : [];
			for (var d = 0, p = 0, m = []; p < s.length;) {
				h.lastIndex = er ? p : 0;
				var g, v = qi(h, er ? s : s.slice(p));
				if (null === v || (g = Ji(ce(h.lastIndex + (er ? 0 : p)), s.length)) === d) p = Fi(s, p, c);
				else {
					if (m.push(s.slice(d, p)), m.length === f) return m;
					for (var y = 1; y <= v.length - 1; y++)
						if (m.push(v[y]), m.length === f) return m;
					p = d = g
				}
			}
			return m.push(s.slice(d)), m
		}]
	}), !er);
	var tr = {
		CSSRuleList: 0,
		CSSStyleDeclaration: 0,
		CSSValueList: 0,
		ClientRectList: 0,
		DOMRectList: 0,
		DOMStringList: 0,
		DOMTokenList: 1,
		DataTransferItemList: 0,
		FileList: 0,
		HTMLAllCollection: 0,
		HTMLCollection: 0,
		HTMLFormElement: 0,
		HTMLSelectElement: 0,
		MediaList: 0,
		MimeTypeArray: 0,
		NamedNodeMap: 0,
		NodeList: 1,
		PaintRequestList: 0,
		Plugin: 0,
		PluginArray: 0,
		SVGLengthList: 0,
		SVGNumberList: 0,
		SVGPathSegList: 0,
		SVGPointList: 0,
		SVGStringList: 0,
		SVGTransformList: 0,
		SourceBufferList: 0,
		StyleSheetList: 0,
		TextTrackCueList: 0,
		TextTrackList: 0,
		TouchList: 0
	};
	for (var nr in tr) {
		var ir = i[nr],
			rr = ir && ir.prototype;
		if (rr && rr.forEach !== rn) try {
			O(rr, "forEach", rn)
		} catch (e) {
			rr.forEach = rn
		}
	}
	var or = Qe("iterator"),
		ar = Qe("toStringTag"),
		sr = Fn.values;
	for (var lr in tr) {
		var cr = i[lr],
			ur = cr && cr.prototype;
		if (ur) {
			if (ur[or] !== sr) try {
				O(ur, or, sr)
			} catch (e) {
				ur[or] = sr
			}
			if (ur[ar] || O(ur, ar, lr), tr[lr])
				for (var hr in Fn)
					if (ur[hr] !== Fn[hr]) try {
						O(ur, hr, Fn[hr])
					} catch (e) {
						ur[hr] = Fn[hr]
					}
		}
	}
	var fr = Qe("iterator"),
		dr = !r((function() {
			var e = new URL("b?a=1&b=2&c=3", "http://a"),
				t = e.searchParams,
				n = "";
			return e.pathname = "c%20d", t.forEach((function(e, i) {
				t.delete("b"), n += i + e
			})), !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[fr] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
		})),
		pr = function(e, t, n) {
			if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
			return e
		},
		mr = Object.assign,
		gr = Object.defineProperty,
		vr = !mr || r((function() {
			if (o && 1 !== mr({
					b: 1
				}, mr(gr({}, "a", {
					enumerable: !0,
					get: function() {
						gr(this, "b", {
							value: 3,
							enumerable: !1
						})
					}
				}), {
					b: 2
				})).b) return !0;
			var e = {},
				t = {},
				n = Symbol(),
				i = "abcdefghijklmnopqrst";
			return e[n] = 7, i.split("").forEach((function(e) {
				t[e] = e
			})), 7 != mr({}, e)[n] || _e(mr({}, t)).join("") != i
		})) ? function(e, t) {
			for (var n = Me(e), i = arguments.length, r = 1, a = we.f, s = l.f; i > r;)
				for (var c, u = d(arguments[r++]), h = a ? _e(u).concat(a(u)) : _e(u), f = h.length, p = 0; f > p;) c = h[p++], o && !s.call(u, c) || (n[c] = u[c]);
			return n
		} : mr,
		yr = function(e) {
			var t = e.return;
			if (void 0 !== t) return C(t.call(e)).value
		},
		br = function(e, t, n, i) {
			try {
				return i ? t(C(n)[0], n[1]) : t(n)
			} catch (t) {
				throw yr(e), t
			}
		},
		wr = Qe("iterator"),
		kr = Array.prototype,
		Tr = function(e) {
			return void 0 !== e && (gn.Array === e || kr[wr] === e)
		},
		Sr = Qe("iterator"),
		Er = function(e) {
			if (null != e) return e[Sr] || e["@@iterator"] || gn[li(e)]
		},
		Ar = function(e) {
			var t, n, i, r, o, a, s = Me(e),
				l = "function" == typeof this ? this : Array,
				c = arguments.length,
				u = c > 1 ? arguments[1] : void 0,
				h = void 0 !== u,
				f = Er(s),
				d = 0;
			if (h && (u = ot(u, c > 2 ? arguments[2] : void 0, 2)), null == f || l == Array && Tr(f))
				for (n = new l(t = ce(s.length)); t > d; d++) a = h ? u(s[d], d) : s[d], Wn(n, d, a);
			else
				for (o = (r = f.call(s)).next, n = new l; !(i = o.call(r)).done; d++) a = h ? br(r, u, [i.value, d], !0) : i.value, Wn(n, d, a);
			return n.length = d, n
		},
		Cr = 2147483647,
		Pr = /[^\0-\u007E]/,
		xr = /[.\u3002\uFF0E\uFF61]/g,
		Or = "Overflow: input needs wider integers to process",
		Ir = Math.floor,
		Lr = String.fromCharCode,
		jr = function(e) {
			return e + 22 + 75 * (e < 26)
		},
		Nr = function(e, t, n) {
			var i = 0;
			for (e = n ? Ir(e / 700) : e >> 1, e += Ir(e / t); e > 455; i += 36) e = Ir(e / 35);
			return Ir(i + 36 * e / (e + 38))
		},
		Rr = function(e) {
			var t, n, i = [],
				r = (e = function(e) {
					for (var t = [], n = 0, i = e.length; n < i;) {
						var r = e.charCodeAt(n++);
						if (r >= 55296 && r <= 56319 && n < i) {
							var o = e.charCodeAt(n++);
							56320 == (64512 & o) ? t.push(((1023 & r) << 10) + (1023 & o) + 65536) : (t.push(r), n--)
						} else t.push(r)
					}
					return t
				}(e)).length,
				o = 128,
				a = 0,
				s = 72;
			for (t = 0; t < e.length; t++)(n = e[t]) < 128 && i.push(Lr(n));
			var l = i.length,
				c = l;
			for (l && i.push("-"); c < r;) {
				var u = Cr;
				for (t = 0; t < e.length; t++)(n = e[t]) >= o && n < u && (u = n);
				var h = c + 1;
				if (u - o > Ir((Cr - a) / h)) throw RangeError(Or);
				for (a += (u - o) * h, o = u, t = 0; t < e.length; t++) {
					if ((n = e[t]) < o && ++a > Cr) throw RangeError(Or);
					if (n == o) {
						for (var f = a, d = 36;; d += 36) {
							var p = d <= s ? 1 : d >= s + 26 ? 26 : d - s;
							if (f < p) break;
							var m = f - p,
								g = 36 - p;
							i.push(Lr(jr(p + m % g))), f = Ir(m / g)
						}
						i.push(Lr(jr(f))), s = Nr(a, h, c == l), a = 0, ++c
					}
				}++a, ++o
			}
			return i.join("")
		},
		Mr = function(e, t, n) {
			for (var i in t) te(e, i, t[i], n);
			return e
		},
		_r = function(e) {
			var t = Er(e);
			if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
			return C(t.call(e))
		},
		Ur = re("fetch"),
		Dr = re("Headers"),
		Fr = Qe("iterator"),
		qr = "URLSearchParams",
		Hr = "URLSearchParamsIterator",
		Br = ee.set,
		Vr = ee.getterFor(qr),
		zr = ee.getterFor(Hr),
		Wr = /\+/g,
		Kr = Array(4),
		$r = function(e) {
			return Kr[e - 1] || (Kr[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
		},
		Yr = function(e) {
			try {
				return decodeURIComponent(e)
			} catch (t) {
				return e
			}
		},
		Gr = function(e) {
			var t = e.replace(Wr, " "),
				n = 4;
			try {
				return decodeURIComponent(t)
			} catch (e) {
				for (; n;) t = t.replace($r(n--), Yr);
				return t
			}
		},
		Xr = /[!'()~]|%20/g,
		Qr = {
			"!": "%21",
			"'": "%27",
			"(": "%28",
			")": "%29",
			"~": "%7E",
			"%20": "+"
		},
		Jr = function(e) {
			return Qr[e]
		},
		Zr = function(e) {
			return encodeURIComponent(e).replace(Xr, Jr)
		},
		eo = function(e, t) {
			if (t)
				for (var n, i, r = t.split("&"), o = 0; o < r.length;)(n = r[o++]).length && (i = n.split("="), e.push({
					key: Gr(i.shift()),
					value: Gr(i.join("="))
				}))
		},
		to = function(e) {
			this.entries.length = 0, eo(this.entries, e)
		},
		no = function(e, t) {
			if (e < t) throw TypeError("Not enough arguments")
		},
		io = Cn((function(e, t) {
			Br(this, {
				type: Hr,
				iterator: _r(Vr(e).entries),
				kind: t
			})
		}), "Iterator", (function() {
			var e = zr(this),
				t = e.kind,
				n = e.iterator.next(),
				i = n.value;
			return n.done || (n.value = "keys" === t ? i.key : "values" === t ? i.value : [i.key, i.value]), n
		})),
		ro = function() {
			pr(this, ro, qr);
			var e, t, n, i, r, o, a, s, l, c = arguments.length > 0 ? arguments[0] : void 0,
				u = this,
				h = [];
			if (Br(u, {
					type: qr,
					entries: h,
					updateURL: function() {},
					updateSearchParams: to
				}), void 0 !== c)
				if (g(c))
					if ("function" == typeof(e = Er(c)))
						for (n = (t = e.call(c)).next; !(i = n.call(t)).done;) {
							if ((a = (o = (r = _r(C(i.value))).next).call(r)).done || (s = o.call(r)).done || !o.call(r).done) throw TypeError("Expected sequence with length 2");
							h.push({
								key: a.value + "",
								value: s.value + ""
							})
						} else
							for (l in c) b(c, l) && h.push({
								key: l,
								value: c[l] + ""
							});
					else eo(h, "string" == typeof c ? "?" === c.charAt(0) ? c.slice(1) : c : c + "")
		},
		oo = ro.prototype;
	Mr(oo, {
		append: function(e, t) {
			no(arguments.length, 2);
			var n = Vr(this);
			n.entries.push({
				key: e + "",
				value: t + ""
			}), n.updateURL()
		},
		delete: function(e) {
			no(arguments.length, 1);
			for (var t = Vr(this), n = t.entries, i = e + "", r = 0; r < n.length;) n[r].key === i ? n.splice(r, 1) : r++;
			t.updateURL()
		},
		get: function(e) {
			no(arguments.length, 1);
			for (var t = Vr(this).entries, n = e + "", i = 0; i < t.length; i++)
				if (t[i].key === n) return t[i].value;
			return null
		},
		getAll: function(e) {
			no(arguments.length, 1);
			for (var t = Vr(this).entries, n = e + "", i = [], r = 0; r < t.length; r++) t[r].key === n && i.push(t[r].value);
			return i
		},
		has: function(e) {
			no(arguments.length, 1);
			for (var t = Vr(this).entries, n = e + "", i = 0; i < t.length;)
				if (t[i++].key === n) return !0;
			return !1
		},
		set: function(e, t) {
			no(arguments.length, 1);
			for (var n, i = Vr(this), r = i.entries, o = !1, a = e + "", s = t + "", l = 0; l < r.length; l++)(n = r[l]).key === a && (o ? r.splice(l--, 1) : (o = !0, n.value = s));
			o || r.push({
				key: a,
				value: s
			}), i.updateURL()
		},
		sort: function() {
			var e, t, n, i = Vr(this),
				r = i.entries,
				o = r.slice();
			for (r.length = 0, n = 0; n < o.length; n++) {
				for (e = o[n], t = 0; t < n; t++)
					if (r[t].key > e.key) {
						r.splice(t, 0, e);
						break
					}
				t === n && r.push(e)
			}
			i.updateURL()
		},
		forEach: function(e) {
			for (var t, n = Vr(this).entries, i = ot(e, arguments.length > 1 ? arguments[1] : void 0, 3), r = 0; r < n.length;) i((t = n[r++]).value, t.key, this)
		},
		keys: function() {
			return new io(this, "keys")
		},
		values: function() {
			return new io(this, "values")
		},
		entries: function() {
			return new io(this, "entries")
		}
	}, {
		enumerable: !0
	}), te(oo, Fr, oo.entries), te(oo, "toString", (function() {
		for (var e, t = Vr(this).entries, n = [], i = 0; i < t.length;) e = t[i++], n.push(Zr(e.key) + "=" + Zr(e.value));
		return n.join("&")
	}), {
		enumerable: !0
	}), it(ro, qr), Le({
		global: !0,
		forced: !dr
	}, {
		URLSearchParams: ro
	}), dr || "function" != typeof Ur || "function" != typeof Dr || Le({
		global: !0,
		enumerable: !0,
		forced: !0
	}, {
		fetch: function(e) {
			var t, n, i, r = [e];
			return arguments.length > 1 && (g(t = arguments[1]) && (n = t.body, li(n) === qr && ((i = t.headers ? new Dr(t.headers) : new Dr).has("content-type") || i.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), t = Ve(t, {
				body: c(0, String(n)),
				headers: c(0, i)
			}))), r.push(t)), Ur.apply(this, r)
		}
	});
	var ao, so = {
			URLSearchParams: ro,
			getState: Vr
		},
		lo = Ci.codeAt,
		co = i.URL,
		uo = so.URLSearchParams,
		ho = so.getState,
		fo = ee.set,
		po = ee.getterFor("URL"),
		mo = Math.floor,
		go = Math.pow,
		vo = "Invalid scheme",
		yo = "Invalid host",
		bo = "Invalid port",
		wo = /[A-Za-z]/,
		ko = /[\d+-.A-Za-z]/,
		To = /\d/,
		So = /^(0x|0X)/,
		Eo = /^[0-7]+$/,
		Ao = /^\d+$/,
		Co = /^[\dA-Fa-f]+$/,
		Po = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
		xo = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
		Oo = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
		Io = /[\u0009\u000A\u000D]/g,
		Lo = function(e, t) {
			var n, i, r;
			if ("[" == t.charAt(0)) {
				if ("]" != t.charAt(t.length - 1)) return yo;
				if (!(n = No(t.slice(1, -1)))) return yo;
				e.host = n
			} else if (Ho(e)) {
				if (t = function(e) {
						var t, n, i = [],
							r = e.toLowerCase().replace(xr, ".").split(".");
						for (t = 0; t < r.length; t++) n = r[t], i.push(Pr.test(n) ? "xn--" + Rr(n) : n);
						return i.join(".")
					}(t), Po.test(t)) return yo;
				if (null === (n = jo(t))) return yo;
				e.host = n
			} else {
				if (xo.test(t)) return yo;
				for (n = "", i = Ar(t), r = 0; r < i.length; r++) n += Fo(i[r], Mo);
				e.host = n
			}
		},
		jo = function(e) {
			var t, n, i, r, o, a, s, l = e.split(".");
			if (l.length && "" == l[l.length - 1] && l.pop(), (t = l.length) > 4) return e;
			for (n = [], i = 0; i < t; i++) {
				if ("" == (r = l[i])) return e;
				if (o = 10, r.length > 1 && "0" == r.charAt(0) && (o = So.test(r) ? 16 : 8, r = r.slice(8 == o ? 1 : 2)), "" === r) a = 0;
				else {
					if (!(10 == o ? Ao : 8 == o ? Eo : Co).test(r)) return e;
					a = parseInt(r, o)
				}
				n.push(a)
			}
			for (i = 0; i < t; i++)
				if (a = n[i], i == t - 1) {
					if (a >= go(256, 5 - t)) return null
				} else if (a > 255) return null;
			for (s = n.pop(), i = 0; i < n.length; i++) s += n[i] * go(256, 3 - i);
			return s
		},
		No = function(e) {
			var t, n, i, r, o, a, s, l = [0, 0, 0, 0, 0, 0, 0, 0],
				c = 0,
				u = null,
				h = 0,
				f = function() {
					return e.charAt(h)
				};
			if (":" == f()) {
				if (":" != e.charAt(1)) return;
				h += 2, u = ++c
			}
			for (; f();) {
				if (8 == c) return;
				if (":" != f()) {
					for (t = n = 0; n < 4 && Co.test(f());) t = 16 * t + parseInt(f(), 16), h++, n++;
					if ("." == f()) {
						if (0 == n) return;
						if (h -= n, c > 6) return;
						for (i = 0; f();) {
							if (r = null, i > 0) {
								if (!("." == f() && i < 4)) return;
								h++
							}
							if (!To.test(f())) return;
							for (; To.test(f());) {
								if (o = parseInt(f(), 10), null === r) r = o;
								else {
									if (0 == r) return;
									r = 10 * r + o
								}
								if (r > 255) return;
								h++
							}
							l[c] = 256 * l[c] + r, 2 != ++i && 4 != i || c++
						}
						if (4 != i) return;
						break
					}
					if (":" == f()) {
						if (h++, !f()) return
					} else if (f()) return;
					l[c++] = t
				} else {
					if (null !== u) return;
					h++, u = ++c
				}
			}
			if (null !== u)
				for (a = c - u, c = 7; 0 != c && a > 0;) s = l[c], l[c--] = l[u + a - 1], l[u + --a] = s;
			else if (8 != c) return;
			return l
		},
		Ro = function(e) {
			var t, n, i, r;
			if ("number" == typeof e) {
				for (t = [], n = 0; n < 4; n++) t.unshift(e % 256), e = mo(e / 256);
				return t.join(".")
			}
			if ("object" == typeof e) {
				for (t = "", i = function(e) {
						for (var t = null, n = 1, i = null, r = 0, o = 0; o < 8; o++) 0 !== e[o] ? (r > n && (t = i, n = r), i = null, r = 0) : (null === i && (i = o), ++r);
						return r > n && (t = i, n = r), t
					}(e), n = 0; n < 8; n++) r && 0 === e[n] || (r && (r = !1), i === n ? (t += n ? ":" : "::", r = !0) : (t += e[n].toString(16), n < 7 && (t += ":")));
				return "[" + t + "]"
			}
			return e
		},
		Mo = {},
		_o = vr({}, Mo, {
			" ": 1,
			'"': 1,
			"<": 1,
			">": 1,
			"`": 1
		}),
		Uo = vr({}, _o, {
			"#": 1,
			"?": 1,
			"{": 1,
			"}": 1
		}),
		Do = vr({}, Uo, {
			"/": 1,
			":": 1,
			";": 1,
			"=": 1,
			"@": 1,
			"[": 1,
			"\\": 1,
			"]": 1,
			"^": 1,
			"|": 1
		}),
		Fo = function(e, t) {
			var n = lo(e, 0);
			return n > 32 && n < 127 && !b(t, e) ? e : encodeURIComponent(e)
		},
		qo = {
			ftp: 21,
			file: null,
			http: 80,
			https: 443,
			ws: 80,
			wss: 443
		},
		Ho = function(e) {
			return b(qo, e.scheme)
		},
		Bo = function(e) {
			return "" != e.username || "" != e.password
		},
		Vo = function(e) {
			return !e.host || e.cannotBeABaseURL || "file" == e.scheme
		},
		zo = function(e, t) {
			var n;
			return 2 == e.length && wo.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n)
		},
		Wo = function(e) {
			var t;
			return e.length > 1 && zo(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t)
		},
		Ko = function(e) {
			var t = e.path,
				n = t.length;
			!n || "file" == e.scheme && 1 == n && zo(t[0], !0) || t.pop()
		},
		$o = function(e) {
			return "." === e || "%2e" === e.toLowerCase()
		},
		Yo = {},
		Go = {},
		Xo = {},
		Qo = {},
		Jo = {},
		Zo = {},
		ea = {},
		ta = {},
		na = {},
		ia = {},
		ra = {},
		oa = {},
		aa = {},
		sa = {},
		la = {},
		ca = {},
		ua = {},
		ha = {},
		fa = {},
		da = {},
		pa = {},
		ma = function(e, t, n, i) {
			var r, o, a, s, l, c = n || Yo,
				u = 0,
				h = "",
				f = !1,
				d = !1,
				p = !1;
			for (n || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(Oo, "")), t = t.replace(Io, ""), r = Ar(t); u <= r.length;) {
				switch (o = r[u], c) {
					case Yo:
						if (!o || !wo.test(o)) {
							if (n) return vo;
							c = Xo;
							continue
						}
						h += o.toLowerCase(), c = Go;
						break;
					case Go:
						if (o && (ko.test(o) || "+" == o || "-" == o || "." == o)) h += o.toLowerCase();
						else {
							if (":" != o) {
								if (n) return vo;
								h = "", c = Xo, u = 0;
								continue
							}
							if (n && (Ho(e) != b(qo, h) || "file" == h && (Bo(e) || null !== e.port) || "file" == e.scheme && !e.host)) return;
							if (e.scheme = h, n) return void(Ho(e) && qo[e.scheme] == e.port && (e.port = null));
							h = "", "file" == e.scheme ? c = sa : Ho(e) && i && i.scheme == e.scheme ? c = Qo : Ho(e) ? c = ta : "/" == r[u + 1] ? (c = Jo, u++) : (e.cannotBeABaseURL = !0, e.path.push(""), c = fa)
						}
						break;
					case Xo:
						if (!i || i.cannotBeABaseURL && "#" != o) return vo;
						if (i.cannotBeABaseURL && "#" == o) {
							e.scheme = i.scheme, e.path = i.path.slice(), e.query = i.query, e.fragment = "", e.cannotBeABaseURL = !0, c = pa;
							break
						}
						c = "file" == i.scheme ? sa : Zo;
						continue;
					case Qo:
						if ("/" != o || "/" != r[u + 1]) {
							c = Zo;
							continue
						}
						c = na, u++;
						break;
					case Jo:
						if ("/" == o) {
							c = ia;
							break
						}
						c = ha;
						continue;
					case Zo:
						if (e.scheme = i.scheme, o == ao) e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.query = i.query;
						else if ("/" == o || "\\" == o && Ho(e)) c = ea;
						else if ("?" == o) e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.query = "", c = da;
						else {
							if ("#" != o) {
								e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.path.pop(), c = ha;
								continue
							}
							e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.query = i.query, e.fragment = "", c = pa
						}
						break;
					case ea:
						if (!Ho(e) || "/" != o && "\\" != o) {
							if ("/" != o) {
								e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, c = ha;
								continue
							}
							c = ia
						} else c = na;
						break;
					case ta:
						if (c = na, "/" != o || "/" != h.charAt(u + 1)) continue;
						u++;
						break;
					case na:
						if ("/" != o && "\\" != o) {
							c = ia;
							continue
						}
						break;
					case ia:
						if ("@" == o) {
							f && (h = "%40" + h), f = !0, a = Ar(h);
							for (var m = 0; m < a.length; m++) {
								var g = a[m];
								if (":" != g || p) {
									var v = Fo(g, Do);
									p ? e.password += v : e.username += v
								} else p = !0
							}
							h = ""
						} else if (o == ao || "/" == o || "?" == o || "#" == o || "\\" == o && Ho(e)) {
							if (f && "" == h) return "Invalid authority";
							u -= Ar(h).length + 1, h = "", c = ra
						} else h += o;
						break;
					case ra:
					case oa:
						if (n && "file" == e.scheme) {
							c = ca;
							continue
						}
						if (":" != o || d) {
							if (o == ao || "/" == o || "?" == o || "#" == o || "\\" == o && Ho(e)) {
								if (Ho(e) && "" == h) return yo;
								if (n && "" == h && (Bo(e) || null !== e.port)) return;
								if (s = Lo(e, h)) return s;
								if (h = "", c = ua, n) return;
								continue
							}
							"[" == o ? d = !0 : "]" == o && (d = !1), h += o
						} else {
							if ("" == h) return yo;
							if (s = Lo(e, h)) return s;
							if (h = "", c = aa, n == oa) return
						}
						break;
					case aa:
						if (!To.test(o)) {
							if (o == ao || "/" == o || "?" == o || "#" == o || "\\" == o && Ho(e) || n) {
								if ("" != h) {
									var y = parseInt(h, 10);
									if (y > 65535) return bo;
									e.port = Ho(e) && y === qo[e.scheme] ? null : y, h = ""
								}
								if (n) return;
								c = ua;
								continue
							}
							return bo
						}
						h += o;
						break;
					case sa:
						if (e.scheme = "file", "/" == o || "\\" == o) c = la;
						else {
							if (!i || "file" != i.scheme) {
								c = ha;
								continue
							}
							if (o == ao) e.host = i.host, e.path = i.path.slice(), e.query = i.query;
							else if ("?" == o) e.host = i.host, e.path = i.path.slice(), e.query = "", c = da;
							else {
								if ("#" != o) {
									Wo(r.slice(u).join("")) || (e.host = i.host, e.path = i.path.slice(), Ko(e)), c = ha;
									continue
								}
								e.host = i.host, e.path = i.path.slice(), e.query = i.query, e.fragment = "", c = pa
							}
						}
						break;
					case la:
						if ("/" == o || "\\" == o) {
							c = ca;
							break
						}
						i && "file" == i.scheme && !Wo(r.slice(u).join("")) && (zo(i.path[0], !0) ? e.path.push(i.path[0]) : e.host = i.host), c = ha;
						continue;
					case ca:
						if (o == ao || "/" == o || "\\" == o || "?" == o || "#" == o) {
							if (!n && zo(h)) c = ha;
							else if ("" == h) {
								if (e.host = "", n) return;
								c = ua
							} else {
								if (s = Lo(e, h)) return s;
								if ("localhost" == e.host && (e.host = ""), n) return;
								h = "", c = ua
							}
							continue
						}
						h += o;
						break;
					case ua:
						if (Ho(e)) {
							if (c = ha, "/" != o && "\\" != o) continue
						} else if (n || "?" != o)
							if (n || "#" != o) {
								if (o != ao && (c = ha, "/" != o)) continue
							} else e.fragment = "", c = pa;
						else e.query = "", c = da;
						break;
					case ha:
						if (o == ao || "/" == o || "\\" == o && Ho(e) || !n && ("?" == o || "#" == o)) {
							if (".." === (l = (l = h).toLowerCase()) || "%2e." === l || ".%2e" === l || "%2e%2e" === l ? (Ko(e), "/" == o || "\\" == o && Ho(e) || e.path.push("")) : $o(h) ? "/" == o || "\\" == o && Ho(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && zo(h) && (e.host && (e.host = ""), h = h.charAt(0) + ":"), e.path.push(h)), h = "", "file" == e.scheme && (o == ao || "?" == o || "#" == o))
								for (; e.path.length > 1 && "" === e.path[0];) e.path.shift();
							"?" == o ? (e.query = "", c = da) : "#" == o && (e.fragment = "", c = pa)
						} else h += Fo(o, Uo);
						break;
					case fa:
						"?" == o ? (e.query = "", c = da) : "#" == o ? (e.fragment = "", c = pa) : o != ao && (e.path[0] += Fo(o, Mo));
						break;
					case da:
						n || "#" != o ? o != ao && ("'" == o && Ho(e) ? e.query += "%27" : e.query += "#" == o ? "%23" : Fo(o, Mo)) : (e.fragment = "", c = pa);
						break;
					case pa:
						o != ao && (e.fragment += Fo(o, _o))
				}
				u++
			}
		},
		ga = function(e) {
			var t, n, i = pr(this, ga, "URL"),
				r = arguments.length > 1 ? arguments[1] : void 0,
				a = String(e),
				s = fo(i, {
					type: "URL"
				});
			if (void 0 !== r)
				if (r instanceof ga) t = po(r);
				else if (n = ma(t = {}, String(r))) throw TypeError(n);
			if (n = ma(s, a, null, t)) throw TypeError(n);
			var l = s.searchParams = new uo,
				c = ho(l);
			c.updateSearchParams(s.query), c.updateURL = function() {
				s.query = String(l) || null
			}, o || (i.href = ya.call(i), i.origin = ba.call(i), i.protocol = wa.call(i), i.username = ka.call(i), i.password = Ta.call(i), i.host = Sa.call(i), i.hostname = Ea.call(i), i.port = Aa.call(i), i.pathname = Ca.call(i), i.search = Pa.call(i), i.searchParams = xa.call(i), i.hash = Oa.call(i))
		},
		va = ga.prototype,
		ya = function() {
			var e = po(this),
				t = e.scheme,
				n = e.username,
				i = e.password,
				r = e.host,
				o = e.port,
				a = e.path,
				s = e.query,
				l = e.fragment,
				c = t + ":";
			return null !== r ? (c += "//", Bo(e) && (c += n + (i ? ":" + i : "") + "@"), c += Ro(r), null !== o && (c += ":" + o)) : "file" == t && (c += "//"), c += e.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "", null !== s && (c += "?" + s), null !== l && (c += "#" + l), c
		},
		ba = function() {
			var e = po(this),
				t = e.scheme,
				n = e.port;
			if ("blob" == t) try {
				return new URL(t.path[0]).origin
			} catch (e) {
				return "null"
			}
			return "file" != t && Ho(e) ? t + "://" + Ro(e.host) + (null !== n ? ":" + n : "") : "null"
		},
		wa = function() {
			return po(this).scheme + ":"
		},
		ka = function() {
			return po(this).username
		},
		Ta = function() {
			return po(this).password
		},
		Sa = function() {
			var e = po(this),
				t = e.host,
				n = e.port;
			return null === t ? "" : null === n ? Ro(t) : Ro(t) + ":" + n
		},
		Ea = function() {
			var e = po(this).host;
			return null === e ? "" : Ro(e)
		},
		Aa = function() {
			var e = po(this).port;
			return null === e ? "" : String(e)
		},
		Ca = function() {
			var e = po(this),
				t = e.path;
			return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : ""
		},
		Pa = function() {
			var e = po(this).query;
			return e ? "?" + e : ""
		},
		xa = function() {
			return po(this).searchParams
		},
		Oa = function() {
			var e = po(this).fragment;
			return e ? "#" + e : ""
		},
		Ia = function(e, t) {
			return {
				get: e,
				set: t,
				configurable: !0,
				enumerable: !0
			}
		};
	if (o && Ue(va, {
			href: Ia(ya, (function(e) {
				var t = po(this),
					n = String(e),
					i = ma(t, n);
				if (i) throw TypeError(i);
				ho(t.searchParams).updateSearchParams(t.query)
			})),
			origin: Ia(ba),
			protocol: Ia(wa, (function(e) {
				var t = po(this);
				ma(t, String(e) + ":", Yo)
			})),
			username: Ia(ka, (function(e) {
				var t = po(this),
					n = Ar(String(e));
				if (!Vo(t)) {
					t.username = "";
					for (var i = 0; i < n.length; i++) t.username += Fo(n[i], Do)
				}
			})),
			password: Ia(Ta, (function(e) {
				var t = po(this),
					n = Ar(String(e));
				if (!Vo(t)) {
					t.password = "";
					for (var i = 0; i < n.length; i++) t.password += Fo(n[i], Do)
				}
			})),
			host: Ia(Sa, (function(e) {
				var t = po(this);
				t.cannotBeABaseURL || ma(t, String(e), ra)
			})),
			hostname: Ia(Ea, (function(e) {
				var t = po(this);
				t.cannotBeABaseURL || ma(t, String(e), oa)
			})),
			port: Ia(Aa, (function(e) {
				var t = po(this);
				Vo(t) || ("" == (e = String(e)) ? t.port = null : ma(t, e, aa))
			})),
			pathname: Ia(Ca, (function(e) {
				var t = po(this);
				t.cannotBeABaseURL || (t.path = [], ma(t, e + "", ua))
			})),
			search: Ia(Pa, (function(e) {
				var t = po(this);
				"" == (e = String(e)) ? t.query = null: ("?" == e.charAt(0) && (e = e.slice(1)), t.query = "", ma(t, e, da)), ho(t.searchParams).updateSearchParams(t.query)
			})),
			searchParams: Ia(xa),
			hash: Ia(Oa, (function(e) {
				var t = po(this);
				"" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", ma(t, e, pa)) : t.fragment = null
			}))
		}), te(va, "toJSON", (function() {
			return ya.call(this)
		}), {
			enumerable: !0
		}), te(va, "toString", (function() {
			return ya.call(this)
		}), {
			enumerable: !0
		}), co) {
		var La = co.createObjectURL,
			ja = co.revokeObjectURL;
		La && te(ga, "createObjectURL", (function(e) {
			return La.apply(co, arguments)
		})), ja && te(ga, "revokeObjectURL", (function(e) {
			return ja.apply(co, arguments)
		}))
	}

	function Na(e) {
		return (Na = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function Ra(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function Ma(e, t) {
		for (var n = 0; n < t.length; n++) {
			var i = t[n];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
		}
	}

	function _a(e, t, n) {
		return t && Ma(e.prototype, t), n && Ma(e, n), e
	}

	function Ua(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}

	function Da(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var i = Object.getOwnPropertySymbols(e);
			t && (i = i.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), n.push.apply(n, i)
		}
		return n
	}

	function Fa(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = null != arguments[t] ? arguments[t] : {};
			t % 2 ? Da(Object(n), !0).forEach((function(t) {
				Ua(e, t, n[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Da(Object(n)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
			}))
		}
		return e
	}

	function qa(e, t) {
		if (null == e) return {};
		var n, i, r = function(e, t) {
			if (null == e) return {};
			var n, i, r = {},
				o = Object.keys(e);
			for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
			return r
		}(e, t);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
		}
		return r
	}

	function Ha(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, t) {
			if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
			var n = [],
				i = !0,
				r = !1,
				o = void 0;
			try {
				for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
			} catch (e) {
				r = !0, o = e
			} finally {
				try {
					i || null == s.return || s.return()
				} finally {
					if (r) throw o
				}
			}
			return n
		}(e, t) || Va(e, t) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function Ba(e) {
		return function(e) {
			if (Array.isArray(e)) return za(e)
		}(e) || function(e) {
			if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
		}(e) || Va(e) || function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function Va(e, t) {
		if (e) {
			if ("string" == typeof e) return za(e, t);
			var n = Object.prototype.toString.call(e).slice(8, -1);
			return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? za(e, t) : void 0
		}
	}

	function za(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
		return i
	}
	it(ga, "URL"), Le({
			global: !0,
			forced: !dr,
			sham: !o
		}, {
			URL: ga
		}),
		function(e) {
			var t = function() {
					try {
						return !!Symbol.iterator
					} catch (e) {
						return !1
					}
				}(),
				n = function(e) {
					var n = {
						next: function() {
							var t = e.shift();
							return {
								done: void 0 === t,
								value: t
							}
						}
					};
					return t && (n[Symbol.iterator] = function() {
						return n
					}), n
				},
				i = function(e) {
					return encodeURIComponent(e).replace(/%20/g, "+")
				},
				r = function(e) {
					return decodeURIComponent(String(e).replace(/\+/g, " "))
				};
			(function() {
				try {
					var t = e.URLSearchParams;
					return "a=1" === new t("?a=1").toString() && "function" == typeof t.prototype.set && "function" == typeof t.prototype.entries
				} catch (e) {
					return !1
				}
			})() || function() {
				var r = function e(t) {
						Object.defineProperty(this, "_entries", {
							writable: !0,
							value: {}
						});
						var n = Na(t);
						if ("undefined" === n);
						else if ("string" === n) "" !== t && this._fromString(t);
						else if (t instanceof e) {
							var i = this;
							t.forEach((function(e, t) {
								i.append(t, e)
							}))
						} else {
							if (null === t || "object" !== n) throw new TypeError("Unsupported input's type for URLSearchParams");
							if ("[object Array]" === Object.prototype.toString.call(t))
								for (var r = 0; r < t.length; r++) {
									var o = t[r];
									if ("[object Array]" !== Object.prototype.toString.call(o) && 2 === o.length) throw new TypeError("Expected [string, any] as entry at index " + r + " of URLSearchParams's input");
									this.append(o[0], o[1])
								} else
									for (var a in t) t.hasOwnProperty(a) && this.append(a, t[a])
						}
					},
					o = r.prototype;
				o.append = function(e, t) {
					e in this._entries ? this._entries[e].push(String(t)) : this._entries[e] = [String(t)]
				}, o.delete = function(e) {
					delete this._entries[e]
				}, o.get = function(e) {
					return e in this._entries ? this._entries[e][0] : null
				}, o.getAll = function(e) {
					return e in this._entries ? this._entries[e].slice(0) : []
				}, o.has = function(e) {
					return e in this._entries
				}, o.set = function(e, t) {
					this._entries[e] = [String(t)]
				}, o.forEach = function(e, t) {
					var n;
					for (var i in this._entries)
						if (this._entries.hasOwnProperty(i)) {
							n = this._entries[i];
							for (var r = 0; r < n.length; r++) e.call(t, n[r], i, this)
						}
				}, o.keys = function() {
					var e = [];
					return this.forEach((function(t, n) {
						e.push(n)
					})), n(e)
				}, o.values = function() {
					var e = [];
					return this.forEach((function(t) {
						e.push(t)
					})), n(e)
				}, o.entries = function() {
					var e = [];
					return this.forEach((function(t, n) {
						e.push([n, t])
					})), n(e)
				}, t && (o[Symbol.iterator] = o.entries), o.toString = function() {
					var e = [];
					return this.forEach((function(t, n) {
						e.push(i(n) + "=" + i(t))
					})), e.join("&")
				}, e.URLSearchParams = r
			}();
			var o = e.URLSearchParams.prototype;
			"function" != typeof o.sort && (o.sort = function() {
				var e = this,
					t = [];
				this.forEach((function(n, i) {
					t.push([i, n]), e._entries || e.delete(i)
				})), t.sort((function(e, t) {
					return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0
				})), e._entries && (e._entries = {});
				for (var n = 0; n < t.length; n++) this.append(t[n][0], t[n][1])
			}), "function" != typeof o._fromString && Object.defineProperty(o, "_fromString", {
				enumerable: !1,
				configurable: !1,
				writable: !1,
				value: function(e) {
					if (this._entries) this._entries = {};
					else {
						var t = [];
						this.forEach((function(e, n) {
							t.push(n)
						}));
						for (var n = 0; n < t.length; n++) this.delete(t[n])
					}
					var i, o = (e = e.replace(/^\?/, "")).split("&");
					for (n = 0; n < o.length; n++) i = o[n].split("="), this.append(r(i[0]), i.length > 1 ? r(i[1]) : "")
				}
			})
		}(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : e),
		function(e) {
			if (function() {
					try {
						var t = new e.URL("b", "http://a");
						return t.pathname = "c d", "http://a/c%20d" === t.href && t.searchParams
					} catch (e) {
						return !1
					}
				}() || function() {
					var t = e.URL,
						n = function(t, n) {
							"string" != typeof t && (t = String(t)), n && "string" != typeof n && (n = String(n));
							var i, r = document;
							if (n && (void 0 === e.location || n !== e.location.href)) {
								n = n.toLowerCase(), (i = (r = document.implementation.createHTMLDocument("")).createElement("base")).href = n, r.head.appendChild(i);
								try {
									if (0 !== i.href.indexOf(n)) throw new Error(i.href)
								} catch (e) {
									throw new Error("URL unable to set base " + n + " due to " + e)
								}
							}
							var o = r.createElement("a");
							o.href = t, i && (r.body.appendChild(o), o.href = o.href);
							var a = r.createElement("input");
							if (a.type = "url", a.value = t, ":" === o.protocol || !/:/.test(o.href) || !a.checkValidity() && !n) throw new TypeError("Invalid URL");
							Object.defineProperty(this, "_anchorElement", {
								value: o
							});
							var s = new e.URLSearchParams(this.search),
								l = !0,
								c = !0,
								u = this;
							["append", "delete", "set"].forEach((function(e) {
								var t = s[e];
								s[e] = function() {
									t.apply(s, arguments), l && (c = !1, u.search = s.toString(), c = !0)
								}
							})), Object.defineProperty(this, "searchParams", {
								value: s,
								enumerable: !0
							});
							var h = void 0;
							Object.defineProperty(this, "_updateSearchParams", {
								enumerable: !1,
								configurable: !1,
								writable: !1,
								value: function() {
									this.search !== h && (h = this.search, c && (l = !1, this.searchParams._fromString(this.search), l = !0))
								}
							})
						},
						i = n.prototype;
					["hash", "host", "hostname", "port", "protocol"].forEach((function(e) {
						! function(e) {
							Object.defineProperty(i, e, {
								get: function() {
									return this._anchorElement[e]
								},
								set: function(t) {
									this._anchorElement[e] = t
								},
								enumerable: !0
							})
						}(e)
					})), Object.defineProperty(i, "search", {
						get: function() {
							return this._anchorElement.search
						},
						set: function(e) {
							this._anchorElement.search = e, this._updateSearchParams()
						},
						enumerable: !0
					}), Object.defineProperties(i, {
						toString: {
							get: function() {
								var e = this;
								return function() {
									return e.href
								}
							}
						},
						href: {
							get: function() {
								return this._anchorElement.href.replace(/\?$/, "")
							},
							set: function(e) {
								this._anchorElement.href = e, this._updateSearchParams()
							},
							enumerable: !0
						},
						pathname: {
							get: function() {
								return this._anchorElement.pathname.replace(/(^\/?)/, "/")
							},
							set: function(e) {
								this._anchorElement.pathname = e
							},
							enumerable: !0
						},
						origin: {
							get: function() {
								var e = {
										"http:": 80,
										"https:": 443,
										"ftp:": 21
									}[this._anchorElement.protocol],
									t = this._anchorElement.port != e && "" !== this._anchorElement.port;
								return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (t ? ":" + this._anchorElement.port : "")
							},
							enumerable: !0
						},
						password: {
							get: function() {
								return ""
							},
							set: function(e) {},
							enumerable: !0
						},
						username: {
							get: function() {
								return ""
							},
							set: function(e) {},
							enumerable: !0
						}
					}), n.createObjectURL = function(e) {
						return t.createObjectURL.apply(t, arguments)
					}, n.revokeObjectURL = function(e) {
						return t.revokeObjectURL.apply(t, arguments)
					}, e.URL = n
				}(), void 0 !== e.location && !("origin" in e.location)) {
				var t = function() {
					return e.location.protocol + "//" + e.location.hostname + (e.location.port ? ":" + e.location.port : "")
				};
				try {
					Object.defineProperty(e.location, "origin", {
						get: t,
						enumerable: !0
					})
				} catch (n) {
					setInterval((function() {
						e.location.origin = t()
					}), 100)
				}
			}
		}(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : e);
	var Wa = Qe("isConcatSpreadable"),
		Ka = 9007199254740991,
		$a = "Maximum allowed index exceeded",
		Ya = Xn >= 51 || !r((function() {
			var e = [];
			return e[Wa] = !1, e.concat()[0] !== e
		})),
		Ga = Jn("concat"),
		Xa = function(e) {
			if (!g(e)) return !1;
			var t = e[Wa];
			return void 0 !== t ? !!t : Re(e)
		};
	Le({
		target: "Array",
		proto: !0,
		forced: !Ya || !Ga
	}, {
		concat: function(e) {
			var t, n, i, r, o, a = Me(this),
				s = st(a, 0),
				l = 0;
			for (t = -1, i = arguments.length; t < i; t++)
				if (Xa(o = -1 === t ? a : arguments[t])) {
					if (l + (r = ce(o.length)) > Ka) throw TypeError($a);
					for (n = 0; n < r; n++, l++) n in o && Wn(s, l, o[n])
				} else {
					if (l >= Ka) throw TypeError($a);
					Wn(s, l++, o)
				}
			return s.length = l, s
		}
	});
	var Qa = ut.filter,
		Ja = Jn("filter"),
		Za = Zt("filter");
	Le({
		target: "Array",
		proto: !0,
		forced: !Ja || !Za
	}, {
		filter: function(e) {
			return Qa(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var es = ut.find,
		ts = "find",
		ns = !0,
		is = Zt(ts);
	ts in [] && Array(1).find((function() {
		ns = !1
	})), Le({
		target: "Array",
		proto: !0,
		forced: ns || !is
	}, {
		find: function(e) {
			return es(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), mn(ts);
	var rs = Qe("iterator"),
		os = !1;
	try {
		var as = 0,
			ss = {
				next: function() {
					return {
						done: !!as++
					}
				},
				return: function() {
					os = !0
				}
			};
		ss[rs] = function() {
			return this
		}, Array.from(ss, (function() {
			throw 2
		}))
	} catch (e) {}
	var ls = function(e, t) {
			if (!t && !os) return !1;
			var n = !1;
			try {
				var i = {};
				i[rs] = function() {
					return {
						next: function() {
							return {
								done: n = !0
							}
						}
					}
				}, e(i)
			} catch (e) {}
			return n
		},
		cs = !ls((function(e) {
			Array.from(e)
		}));
	Le({
		target: "Array",
		stat: !0,
		forced: cs
	}, {
		from: Ar
	});
	var us = pe.includes,
		hs = Zt("indexOf", {
			ACCESSORS: !0,
			1: 0
		});
	Le({
		target: "Array",
		proto: !0,
		forced: !hs
	}, {
		includes: function(e) {
			return us(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), mn("includes");
	var fs = ut.map,
		ds = Jn("map"),
		ps = Zt("map");
	Le({
		target: "Array",
		proto: !0,
		forced: !ds || !ps
	}, {
		map: function(e) {
			return fs(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var ms = function(e, t, n) {
			var i, r;
			return Pn && "function" == typeof(i = t.constructor) && i !== n && g(r = i.prototype) && r !== n.prototype && Pn(e, r), e
		},
		gs = "\t\n\v\f\r                　\u2028\u2029\ufeff",
		vs = "[" + gs + "]",
		ys = RegExp("^" + vs + vs + "*"),
		bs = RegExp(vs + vs + "*$"),
		ws = function(e) {
			return function(t) {
				var n = String(p(t));
				return 1 & e && (n = n.replace(ys, "")), 2 & e && (n = n.replace(bs, "")), n
			}
		},
		ks = {
			start: ws(1),
			end: ws(2),
			trim: ws(3)
		},
		Ts = be.f,
		Ss = A.f,
		Es = x.f,
		As = ks.trim,
		Cs = "Number",
		Ps = i.Number,
		xs = Ps.prototype,
		Os = h(Ve(xs)) == Cs,
		Is = function(e) {
			var t, n, i, r, o, a, s, l, c = v(e, !1);
			if ("string" == typeof c && c.length > 2)
				if (43 === (t = (c = As(c)).charCodeAt(0)) || 45 === t) {
					if (88 === (n = c.charCodeAt(2)) || 120 === n) return NaN
				} else if (48 === t) {
				switch (c.charCodeAt(1)) {
					case 66:
					case 98:
						i = 2, r = 49;
						break;
					case 79:
					case 111:
						i = 8, r = 55;
						break;
					default:
						return +c
				}
				for (a = (o = c.slice(2)).length, s = 0; s < a; s++)
					if ((l = o.charCodeAt(s)) < 48 || l > r) return NaN;
				return parseInt(o, i)
			}
			return +c
		};
	if (Oe(Cs, !Ps(" 0o1") || !Ps("0b1") || Ps("+0x1"))) {
		for (var Ls, js = function(e) {
				var t = arguments.length < 1 ? 0 : e,
					n = this;
				return n instanceof js && (Os ? r((function() {
					xs.valueOf.call(n)
				})) : h(n) != Cs) ? ms(new Ps(Is(t)), n, js) : Is(t)
			}, Ns = o ? Ts(Ps) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), Rs = 0; Ns.length > Rs; Rs++) b(Ps, Ls = Ns[Rs]) && !b(js, Ls) && Es(js, Ls, Ss(Ps, Ls));
		js.prototype = xs, xs.constructor = js, te(i, Cs, js)
	}
	var Ms = r((function() {
		_e(1)
	}));
	Le({
		target: "Object",
		stat: !0,
		forced: Ms
	}, {
		keys: function(e) {
			return _e(Me(e))
		}
	});
	var _s = function(e) {
			if (Yi(e)) throw TypeError("The method doesn't accept regular expressions");
			return e
		},
		Us = Qe("match"),
		Ds = function(e) {
			var t = /./;
			try {
				"/./" [e](t)
			} catch (n) {
				try {
					return t[Us] = !1, "/./" [e](t)
				} catch (e) {}
			}
			return !1
		};
	Le({
		target: "String",
		proto: !0,
		forced: !Ds("includes")
	}, {
		includes: function(e) {
			return !!~String(p(this)).indexOf(_s(e), arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var Fs = !r((function() {
			return Object.isExtensible(Object.preventExtensions({}))
		})),
		qs = t((function(e) {
			var t = x.f,
				n = V("meta"),
				i = 0,
				r = Object.isExtensible || function() {
					return !0
				},
				o = function(e) {
					t(e, n, {
						value: {
							objectID: "O" + ++i,
							weakData: {}
						}
					})
				},
				a = e.exports = {
					REQUIRED: !1,
					fastKey: function(e, t) {
						if (!g(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
						if (!b(e, n)) {
							if (!r(e)) return "F";
							if (!t) return "E";
							o(e)
						}
						return e[n].objectID
					},
					getWeakData: function(e, t) {
						if (!b(e, n)) {
							if (!r(e)) return !0;
							if (!t) return !1;
							o(e)
						}
						return e[n].weakData
					},
					onFreeze: function(e) {
						return Fs && a.REQUIRED && r(e) && !b(e, n) && o(e), e
					}
				};
			K[n] = !0
		})),
		Hs = (qs.REQUIRED, qs.fastKey, qs.getWeakData, qs.onFreeze, function(e, t) {
			this.stopped = e, this.result = t
		}),
		Bs = function(e, t, n) {
			var i, r, o, a, s, l, c, u = n && n.that,
				h = !(!n || !n.AS_ENTRIES),
				f = !(!n || !n.IS_ITERATOR),
				d = !(!n || !n.INTERRUPTED),
				p = ot(t, u, 1 + h + d),
				m = function(e) {
					return i && yr(i), new Hs(!0, e)
				},
				g = function(e) {
					return h ? (C(e), d ? p(e[0], e[1], m) : p(e[0], e[1])) : d ? p(e, m) : p(e)
				};
			if (f) i = e;
			else {
				if ("function" != typeof(r = Er(e))) throw TypeError("Target is not iterable");
				if (Tr(r)) {
					for (o = 0, a = ce(e.length); a > o; o++)
						if ((s = g(e[o])) && s instanceof Hs) return s;
					return new Hs(!1)
				}
				i = r.call(e)
			}
			for (l = i.next; !(c = l.call(i)).done;) {
				try {
					s = g(c.value)
				} catch (e) {
					throw yr(i), e
				}
				if ("object" == typeof s && s && s instanceof Hs) return s
			}
			return new Hs(!1)
		},
		Vs = qs.getWeakData,
		zs = ee.set,
		Ws = ee.getterFor,
		Ks = ut.find,
		$s = ut.findIndex,
		Ys = 0,
		Gs = function(e) {
			return e.frozen || (e.frozen = new Xs)
		},
		Xs = function() {
			this.entries = []
		},
		Qs = function(e, t) {
			return Ks(e.entries, (function(e) {
				return e[0] === t
			}))
		};
	Xs.prototype = {
		get: function(e) {
			var t = Qs(this, e);
			if (t) return t[1]
		},
		has: function(e) {
			return !!Qs(this, e)
		},
		set: function(e, t) {
			var n = Qs(this, e);
			n ? n[1] = t : this.entries.push([e, t])
		},
		delete: function(e) {
			var t = $s(this.entries, (function(t) {
				return t[0] === e
			}));
			return ~t && this.entries.splice(t, 1), !!~t
		}
	};
	var Js = {
			getConstructor: function(e, t, n, i) {
				var r = e((function(e, o) {
						pr(e, r, t), zs(e, {
							type: t,
							id: Ys++,
							frozen: void 0
						}), null != o && Bs(o, e[i], {
							that: e,
							AS_ENTRIES: n
						})
					})),
					o = Ws(t),
					a = function(e, t, n) {
						var i = o(e),
							r = Vs(C(t), !0);
						return !0 === r ? Gs(i).set(t, n) : r[i.id] = n, e
					};
				return Mr(r.prototype, {
					delete: function(e) {
						var t = o(this);
						if (!g(e)) return !1;
						var n = Vs(e);
						return !0 === n ? Gs(t).delete(e) : n && b(n, t.id) && delete n[t.id]
					},
					has: function(e) {
						var t = o(this);
						if (!g(e)) return !1;
						var n = Vs(e);
						return !0 === n ? Gs(t).has(e) : n && b(n, t.id)
					}
				}), Mr(r.prototype, n ? {
					get: function(e) {
						var t = o(this);
						if (g(e)) {
							var n = Vs(e);
							return !0 === n ? Gs(t).get(e) : n ? n[t.id] : void 0
						}
					},
					set: function(e, t) {
						return a(this, e, t)
					}
				} : {
					add: function(e) {
						return a(this, e, !0)
					}
				}), r
			}
		},
		Zs = (t((function(e) {
			var t, n = ee.enforce,
				o = !i.ActiveXObject && "ActiveXObject" in i,
				a = Object.isExtensible,
				s = function(e) {
					return function() {
						return e(this, arguments.length ? arguments[0] : void 0)
					}
				},
				l = e.exports = function(e, t, n) {
					var o = -1 !== e.indexOf("Map"),
						a = -1 !== e.indexOf("Weak"),
						s = o ? "set" : "add",
						l = i[e],
						c = l && l.prototype,
						u = l,
						h = {},
						f = function(e) {
							var t = c[e];
							te(c, e, "add" == e ? function(e) {
								return t.call(this, 0 === e ? 0 : e), this
							} : "delete" == e ? function(e) {
								return !(a && !g(e)) && t.call(this, 0 === e ? 0 : e)
							} : "get" == e ? function(e) {
								return a && !g(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
							} : "has" == e ? function(e) {
								return !(a && !g(e)) && t.call(this, 0 === e ? 0 : e)
							} : function(e, n) {
								return t.call(this, 0 === e ? 0 : e, n), this
							})
						};
					if (Oe(e, "function" != typeof l || !(a || c.forEach && !r((function() {
							(new l).entries().next()
						}))))) u = n.getConstructor(t, e, o, s), qs.REQUIRED = !0;
					else if (Oe(e, !0)) {
						var d = new u,
							p = d[s](a ? {} : -0, 1) != d,
							m = r((function() {
								d.has(1)
							})),
							v = ls((function(e) {
								new l(e)
							})),
							y = !a && r((function() {
								for (var e = new l, t = 5; t--;) e[s](t, t);
								return !e.has(-0)
							}));
						v || ((u = t((function(t, n) {
							pr(t, u, e);
							var i = ms(new l, t, u);
							return null != n && Bs(n, i[s], {
								that: i,
								AS_ENTRIES: o
							}), i
						}))).prototype = c, c.constructor = u), (m || y) && (f("delete"), f("has"), o && f("get")), (y || p) && f(s), a && c.clear && delete c.clear
					}
					return h[e] = u, Le({
						global: !0,
						forced: u != l
					}, h), it(u, e), a || n.setStrong(u, e, o), u
				}("WeakMap", s, Js);
			if (F && o) {
				t = Js.getConstructor(s, "WeakMap", !0), qs.REQUIRED = !0;
				var c = l.prototype,
					u = c.delete,
					h = c.has,
					f = c.get,
					d = c.set;
				Mr(c, {
					delete: function(e) {
						if (g(e) && !a(e)) {
							var i = n(this);
							return i.frozen || (i.frozen = new t), u.call(this, e) || i.frozen.delete(e)
						}
						return u.call(this, e)
					},
					has: function(e) {
						if (g(e) && !a(e)) {
							var i = n(this);
							return i.frozen || (i.frozen = new t), h.call(this, e) || i.frozen.has(e)
						}
						return h.call(this, e)
					},
					get: function(e) {
						if (g(e) && !a(e)) {
							var i = n(this);
							return i.frozen || (i.frozen = new t), h.call(this, e) ? f.call(this, e) : i.frozen.get(e)
						}
						return f.call(this, e)
					},
					set: function(e, i) {
						if (g(e) && !a(e)) {
							var r = n(this);
							r.frozen || (r.frozen = new t), h.call(this, e) ? d.call(this, e, i) : r.frozen.set(e, i)
						} else d.call(this, e, i);
						return this
					}
				})
			}
		})), ut.every),
		el = Gt("every"),
		tl = Zt("every");
	Le({
		target: "Array",
		proto: !0,
		forced: !el || !tl
	}, {
		every: function(e) {
			return Zs(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), Le({
		target: "Object",
		stat: !0,
		forced: Object.assign !== vr
	}, {
		assign: vr
	});
	var nl = ks.trim;
	Le({
		target: "String",
		proto: !0,
		forced: function(e) {
			return r((function() {
				return !!gs[e]() || "​᠎" != "​᠎" [e]() || gs[e].name !== e
			}))
		}("trim")
	}, {
		trim: function() {
			return nl(this)
		}
	});
	var il = ut.some,
		rl = Gt("some"),
		ol = Zt("some");
	Le({
		target: "Array",
		proto: !0,
		forced: !rl || !ol
	}, {
		some: function(e) {
			return il(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var al = "".repeat || function(e) {
			var t = String(p(this)),
				n = "",
				i = se(e);
			if (i < 0 || i == 1 / 0) throw RangeError("Wrong number of repetitions");
			for (; i > 0;
				(i >>>= 1) && (t += t)) 1 & i && (n += t);
			return n
		},
		sl = 1..toFixed,
		ll = Math.floor,
		cl = function(e, t, n) {
			return 0 === t ? n : t % 2 == 1 ? cl(e, t - 1, n * e) : cl(e * e, t / 2, n)
		},
		ul = sl && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !r((function() {
			sl.call({})
		}));
	Le({
		target: "Number",
		proto: !0,
		forced: ul
	}, {
		toFixed: function(e) {
			var t, n, i, r, o = function(e) {
					if ("number" != typeof e && "Number" != h(e)) throw TypeError("Incorrect invocation");
					return +e
				}(this),
				a = se(e),
				s = [0, 0, 0, 0, 0, 0],
				l = "",
				c = "0",
				u = function(e, t) {
					for (var n = -1, i = t; ++n < 6;) i += e * s[n], s[n] = i % 1e7, i = ll(i / 1e7)
				},
				f = function(e) {
					for (var t = 6, n = 0; --t >= 0;) n += s[t], s[t] = ll(n / e), n = n % e * 1e7
				},
				d = function() {
					for (var e = 6, t = ""; --e >= 0;)
						if ("" !== t || 0 === e || 0 !== s[e]) {
							var n = String(s[e]);
							t = "" === t ? n : t + al.call("0", 7 - n.length) + n
						}
					return t
				};
			if (a < 0 || a > 20) throw RangeError("Incorrect fraction digits");
			if (o != o) return "NaN";
			if (o <= -1e21 || o >= 1e21) return String(o);
			if (o < 0 && (l = "-", o = -o), o > 1e-21)
				if (n = (t = function(e) {
						for (var t = 0, n = e; n >= 4096;) t += 12, n /= 4096;
						for (; n >= 2;) t += 1, n /= 2;
						return t
					}(o * cl(2, 69, 1)) - 69) < 0 ? o * cl(2, -t, 1) : o / cl(2, t, 1), n *= 4503599627370496, (t = 52 - t) > 0) {
					for (u(0, n), i = a; i >= 7;) u(1e7, 0), i -= 7;
					for (u(cl(10, i, 1), 0), i = t - 1; i >= 23;) f(1 << 23), i -= 23;
					f(1 << i), u(1, 1), f(2), c = d()
				} else u(0, n), u(1 << -t, 0), c = d() + al.call("0", a);
			return c = a > 0 ? l + ((r = c.length) <= a ? "0." + al.call("0", a - r) + c : c.slice(0, r - a) + "." + c.slice(r - a)) : l + c
		}
	});
	var hl = l.f,
		fl = function(e) {
			return function(t) {
				for (var n, i = m(t), r = _e(i), a = r.length, s = 0, l = []; a > s;) n = r[s++], o && !hl.call(i, n) || l.push(e ? [n, i[n]] : i[n]);
				return l
			}
		},
		dl = {
			entries: fl(!0),
			values: fl(!1)
		},
		pl = dl.entries;
	Le({
		target: "Object",
		stat: !0
	}, {
		entries: function(e) {
			return pl(e)
		}
	});
	var ml = dl.values;
	Le({
		target: "Object",
		stat: !0
	}, {
		values: function(e) {
			return ml(e)
		}
	}), Le({
		target: "Number",
		stat: !0
	}, {
		isNaN: function(e) {
			return e != e
		}
	});
	var gl = A.f,
		vl = r((function() {
			gl(1)
		}));

	function yl(e, t) {
		for (var n = 0; n < t.length; n++) {
			var i = t[n];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
		}
	}

	function bl(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}

	function wl(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var i = Object.getOwnPropertySymbols(e);
			t && (i = i.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), n.push.apply(n, i)
		}
		return n
	}

	function kl(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = null != arguments[t] ? arguments[t] : {};
			t % 2 ? wl(Object(n), !0).forEach((function(t) {
				bl(e, t, n[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wl(Object(n)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
			}))
		}
		return e
	}
	Le({
		target: "Object",
		stat: !0,
		forced: !o || vl,
		sham: !o
	}, {
		getOwnPropertyDescriptor: function(e, t) {
			return gl(m(e), t)
		}
	}), Le({
		target: "Object",
		stat: !0,
		sham: !o
	}, {
		getOwnPropertyDescriptors: function(e) {
			for (var t, n, i = m(e), r = A.f, o = ke(i), a = {}, s = 0; o.length > s;) void 0 !== (n = r(i, t = o[s++])) && Wn(a, t, n);
			return a
		}
	}), Ui("match", 1, (function(e, t, n) {
		return [function(t) {
			var n = p(this),
				i = null == t ? void 0 : t[e];
			return void 0 !== i ? i.call(t, n) : new RegExp(t)[e](String(n))
		}, function(e) {
			var i = n(t, e, this);
			if (i.done) return i.value;
			var r = C(e),
				o = String(this);
			if (!r.global) return qi(r, o);
			var a = r.unicode;
			r.lastIndex = 0;
			for (var s, l = [], c = 0; null !== (s = qi(r, o));) {
				var u = String(s[0]);
				l[c] = u, "" === u && (r.lastIndex = Fi(o, ce(r.lastIndex), a)), c++
			}
			return 0 === c ? null : l
		}]
	}));
	var Tl = {
		addCSS: !0,
		thumbWidth: 15,
		watch: !0
	};

	function Sl(e, t) {
		return function() {
			return Array.from(document.querySelectorAll(t)).includes(this)
		}.call(e, t)
	}
	var El = function(e) {
			return null != e ? e.constructor : null
		},
		Al = function(e, t) {
			return !!(e && t && e instanceof t)
		},
		Cl = function(e) {
			return null == e
		},
		Pl = function(e) {
			return El(e) === Object
		},
		xl = function(e) {
			return El(e) === String
		},
		Ol = function(e) {
			return Array.isArray(e)
		},
		Il = function(e) {
			return Al(e, NodeList)
		},
		Ll = xl,
		jl = Ol,
		Nl = Il,
		Rl = function(e) {
			return Al(e, Element)
		},
		Ml = function(e) {
			return Al(e, Event)
		},
		_l = function(e) {
			return Cl(e) || (xl(e) || Ol(e) || Il(e)) && !e.length || Pl(e) && !Object.keys(e).length
		};

	function Ul(e, t) {
		if (1 > t) {
			var n = function(e) {
				var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
				return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
			}(t);
			return parseFloat(e.toFixed(n))
		}
		return Math.round(e / t) * t
	}
	var Dl, Fl, ql, Hl = function() {
			function e(t, n) {
				(function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				})(this, e), Rl(t) ? this.element = t : Ll(t) && (this.element = document.querySelector(t)), Rl(this.element) && _l(this.element.rangeTouch) && (this.config = kl({}, Tl, {}, n), this.init())
			}
			return function(e, t, n) {
				t && yl(e.prototype, t), n && yl(e, n)
			}(e, [{
				key: "init",
				value: function() {
					e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this)
				}
			}, {
				key: "destroy",
				value: function() {
					e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null)
				}
			}, {
				key: "listeners",
				value: function(e) {
					var t = this,
						n = e ? "addEventListener" : "removeEventListener";
					["touchstart", "touchmove", "touchend"].forEach((function(e) {
						t.element[n](e, (function(e) {
							return t.set(e)
						}), !1)
					}))
				}
			}, {
				key: "get",
				value: function(t) {
					if (!e.enabled || !Ml(t)) return null;
					var n, i = t.target,
						r = t.changedTouches[0],
						o = parseFloat(i.getAttribute("min")) || 0,
						a = parseFloat(i.getAttribute("max")) || 100,
						s = parseFloat(i.getAttribute("step")) || 1,
						l = i.getBoundingClientRect(),
						c = 100 / l.width * (this.config.thumbWidth / 2) / 100;
					return 0 > (n = 100 / l.width * (r.clientX - l.left)) ? n = 0 : 100 < n && (n = 100), 50 > n ? n -= (100 - 2 * n) * c : 50 < n && (n += 2 * (n - 50) * c), o + Ul(n / 100 * (a - o), s)
				}
			}, {
				key: "set",
				value: function(t) {
					e.enabled && Ml(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), function(e, t) {
						if (e && t) {
							var n = new Event(t, {
								bubbles: !0
							});
							e.dispatchEvent(n)
						}
					}(t.target, "touchend" === t.type ? "change" : "input"))
				}
			}], [{
				key: "setup",
				value: function(t) {
					var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
						i = null;
					if (_l(t) || Ll(t) ? i = Array.from(document.querySelectorAll(Ll(t) ? t : 'input[type="range"]')) : Rl(t) ? i = [t] : Nl(t) ? i = Array.from(t) : jl(t) && (i = t.filter(Rl)), _l(i)) return null;
					var r = kl({}, Tl, {}, n);
					if (Ll(t) && r.watch) {
						var o = new MutationObserver((function(n) {
							Array.from(n).forEach((function(n) {
								Array.from(n.addedNodes).forEach((function(n) {
									Rl(n) && Sl(n, t) && new e(n, r)
								}))
							}))
						}));
						o.observe(document.body, {
							childList: !0,
							subtree: !0
						})
					}
					return i.map((function(t) {
						return new e(t, n)
					}))
				}
			}, {
				key: "enabled",
				get: function() {
					return "ontouchstart" in document.documentElement
				}
			}]), e
		}(),
		Bl = i.Promise,
		Vl = Qe("species"),
		zl = function(e) {
			var t = re(e),
				n = x.f;
			o && t && !t[Vl] && n(t, Vl, {
				configurable: !0,
				get: function() {
					return this
				}
			})
		},
		Wl = /(iphone|ipod|ipad).*applewebkit/i.test(Kn),
		Kl = "process" == h(i.process),
		$l = i.location,
		Yl = i.setImmediate,
		Gl = i.clearImmediate,
		Xl = i.process,
		Ql = i.MessageChannel,
		Jl = i.Dispatch,
		Zl = 0,
		ec = {},
		tc = "onreadystatechange",
		nc = function(e) {
			if (ec.hasOwnProperty(e)) {
				var t = ec[e];
				delete ec[e], t()
			}
		},
		ic = function(e) {
			return function() {
				nc(e)
			}
		},
		rc = function(e) {
			nc(e.data)
		},
		oc = function(e) {
			i.postMessage(e + "", $l.protocol + "//" + $l.host)
		};
	Yl && Gl || (Yl = function(e) {
		for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
		return ec[++Zl] = function() {
			("function" == typeof e ? e : Function(e)).apply(void 0, t)
		}, Dl(Zl), Zl
	}, Gl = function(e) {
		delete ec[e]
	}, Kl ? Dl = function(e) {
		Xl.nextTick(ic(e))
	} : Jl && Jl.now ? Dl = function(e) {
		Jl.now(ic(e))
	} : Ql && !Wl ? (ql = (Fl = new Ql).port2, Fl.port1.onmessage = rc, Dl = ot(ql.postMessage, ql, 1)) : i.addEventListener && "function" == typeof postMessage && !i.importScripts && $l && "file:" !== $l.protocol && !r(oc) ? (Dl = oc, i.addEventListener("message", rc, !1)) : Dl = tc in T("script") ? function(e) {
		De.appendChild(T("script")).onreadystatechange = function() {
			De.removeChild(this), nc(e)
		}
	} : function(e) {
		setTimeout(ic(e), 0)
	});
	var ac, sc, lc, cc, uc, hc, fc, dc, pc = {
			set: Yl,
			clear: Gl
		},
		mc = A.f,
		gc = pc.set,
		vc = i.MutationObserver || i.WebKitMutationObserver,
		yc = i.document,
		bc = i.process,
		wc = i.Promise,
		kc = mc(i, "queueMicrotask"),
		Tc = kc && kc.value;
	Tc || (ac = function() {
		var e, t;
		for (Kl && (e = bc.domain) && e.exit(); sc;) {
			t = sc.fn, sc = sc.next;
			try {
				t()
			} catch (e) {
				throw sc ? cc() : lc = void 0, e
			}
		}
		lc = void 0, e && e.enter()
	}, !Wl && !Kl && vc && yc ? (uc = !0, hc = yc.createTextNode(""), new vc(ac).observe(hc, {
		characterData: !0
	}), cc = function() {
		hc.data = uc = !uc
	}) : wc && wc.resolve ? (fc = wc.resolve(void 0), dc = fc.then, cc = function() {
		dc.call(fc, ac)
	}) : cc = Kl ? function() {
		bc.nextTick(ac)
	} : function() {
		gc.call(i, ac)
	});
	var Sc, Ec, Ac, Cc, Pc = Tc || function(e) {
			var t = {
				fn: e,
				next: void 0
			};
			lc && (lc.next = t), sc || (sc = t, cc()), lc = t
		},
		xc = function(e) {
			var t, n;
			this.promise = new e((function(e, i) {
				if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
				t = e, n = i
			})), this.resolve = rt(t), this.reject = rt(n)
		},
		Oc = {
			f: function(e) {
				return new xc(e)
			}
		},
		Ic = function(e, t) {
			if (C(e), g(t) && t.constructor === e) return t;
			var n = Oc.f(e);
			return (0, n.resolve)(t), n.promise
		},
		Lc = function(e) {
			try {
				return {
					error: !1,
					value: e()
				}
			} catch (e) {
				return {
					error: !0,
					value: e
				}
			}
		},
		jc = pc.set,
		Nc = Qe("species"),
		Rc = "Promise",
		Mc = ee.get,
		_c = ee.set,
		Uc = ee.getterFor(Rc),
		Dc = Bl,
		Fc = i.TypeError,
		qc = i.document,
		Hc = i.process,
		Bc = re("fetch"),
		Vc = Oc.f,
		zc = Vc,
		Wc = !!(qc && qc.createEvent && i.dispatchEvent),
		Kc = "function" == typeof PromiseRejectionEvent,
		$c = "unhandledrejection",
		Yc = Oe(Rc, (function() {
			if (!(U(Dc) !== String(Dc))) {
				if (66 === Xn) return !0;
				if (!Kl && !Kc) return !0
			}
			if (Xn >= 51 && /native code/.test(Dc)) return !1;
			var e = Dc.resolve(1),
				t = function(e) {
					e((function() {}), (function() {}))
				};
			return (e.constructor = {})[Nc] = t, !(e.then((function() {})) instanceof t)
		})),
		Gc = Yc || !ls((function(e) {
			Dc.all(e).catch((function() {}))
		})),
		Xc = function(e) {
			var t;
			return !(!g(e) || "function" != typeof(t = e.then)) && t
		},
		Qc = function(e, t) {
			if (!e.notified) {
				e.notified = !0;
				var n = e.reactions;
				Pc((function() {
					for (var i = e.value, r = 1 == e.state, o = 0; n.length > o;) {
						var a, s, l, c = n[o++],
							u = r ? c.ok : c.fail,
							h = c.resolve,
							f = c.reject,
							d = c.domain;
						try {
							u ? (r || (2 === e.rejection && tu(e), e.rejection = 1), !0 === u ? a = i : (d && d.enter(), a = u(i), d && (d.exit(), l = !0)), a === c.promise ? f(Fc("Promise-chain cycle")) : (s = Xc(a)) ? s.call(a, h, f) : h(a)) : f(i)
						} catch (e) {
							d && !l && d.exit(), f(e)
						}
					}
					e.reactions = [], e.notified = !1, t && !e.rejection && Zc(e)
				}))
			}
		},
		Jc = function(e, t, n) {
			var r, o;
			Wc ? ((r = qc.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, !1, !0), i.dispatchEvent(r)) : r = {
				promise: t,
				reason: n
			}, !Kc && (o = i["on" + e]) ? o(r) : e === $c && function(e, t) {
				var n = i.console;
				n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
			}("Unhandled promise rejection", n)
		},
		Zc = function(e) {
			jc.call(i, (function() {
				var t, n = e.facade,
					i = e.value;
				if (eu(e) && (t = Lc((function() {
						Kl ? Hc.emit("unhandledRejection", i, n) : Jc($c, n, i)
					})), e.rejection = Kl || eu(e) ? 2 : 1, t.error)) throw t.value
			}))
		},
		eu = function(e) {
			return 1 !== e.rejection && !e.parent
		},
		tu = function(e) {
			jc.call(i, (function() {
				var t = e.facade;
				Kl ? Hc.emit("rejectionHandled", t) : Jc("rejectionhandled", t, e.value)
			}))
		},
		nu = function(e, t, n) {
			return function(i) {
				e(t, i, n)
			}
		},
		iu = function(e, t, n) {
			e.done || (e.done = !0, n && (e = n), e.value = t, e.state = 2, Qc(e, !0))
		},
		ru = function(e, t, n) {
			if (!e.done) {
				e.done = !0, n && (e = n);
				try {
					if (e.facade === t) throw Fc("Promise can't be resolved itself");
					var i = Xc(t);
					i ? Pc((function() {
						var n = {
							done: !1
						};
						try {
							i.call(t, nu(ru, n, e), nu(iu, n, e))
						} catch (t) {
							iu(n, t, e)
						}
					})) : (e.value = t, e.state = 1, Qc(e, !1))
				} catch (t) {
					iu({
						done: !1
					}, t, e)
				}
			}
		};
	Yc && (Dc = function(e) {
		pr(this, Dc, Rc), rt(e), Sc.call(this);
		var t = Mc(this);
		try {
			e(nu(ru, t), nu(iu, t))
		} catch (e) {
			iu(t, e)
		}
	}, (Sc = function(e) {
		_c(this, {
			type: Rc,
			done: !1,
			notified: !1,
			parent: !1,
			reactions: [],
			rejection: !1,
			state: 0,
			value: void 0
		})
	}).prototype = Mr(Dc.prototype, {
		then: function(e, t) {
			var n = Uc(this),
				i = Vc(Xi(this, Dc));
			return i.ok = "function" != typeof e || e, i.fail = "function" == typeof t && t, i.domain = Kl ? Hc.domain : void 0, n.parent = !0, n.reactions.push(i), 0 != n.state && Qc(n, !1), i.promise
		},
		catch: function(e) {
			return this.then(void 0, e)
		}
	}), Ec = function() {
		var e = new Sc,
			t = Mc(e);
		this.promise = e, this.resolve = nu(ru, t), this.reject = nu(iu, t)
	}, Oc.f = Vc = function(e) {
		return e === Dc || e === Ac ? new Ec(e) : zc(e)
	}, "function" == typeof Bl && (Cc = Bl.prototype.then, te(Bl.prototype, "then", (function(e, t) {
		var n = this;
		return new Dc((function(e, t) {
			Cc.call(n, e, t)
		})).then(e, t)
	}), {
		unsafe: !0
	}), "function" == typeof Bc && Le({
		global: !0,
		enumerable: !0,
		forced: !0
	}, {
		fetch: function(e) {
			return Ic(Dc, Bc.apply(i, arguments))
		}
	}))), Le({
		global: !0,
		wrap: !0,
		forced: Yc
	}, {
		Promise: Dc
	}), it(Dc, Rc, !1), zl(Rc), Ac = re(Rc), Le({
		target: Rc,
		stat: !0,
		forced: Yc
	}, {
		reject: function(e) {
			var t = Vc(this);
			return t.reject.call(void 0, e), t.promise
		}
	}), Le({
		target: Rc,
		stat: !0,
		forced: Yc
	}, {
		resolve: function(e) {
			return Ic(this, e)
		}
	}), Le({
		target: Rc,
		stat: !0,
		forced: Gc
	}, {
		all: function(e) {
			var t = this,
				n = Vc(t),
				i = n.resolve,
				r = n.reject,
				o = Lc((function() {
					var n = rt(t.resolve),
						o = [],
						a = 0,
						s = 1;
					Bs(e, (function(e) {
						var l = a++,
							c = !1;
						o.push(void 0), s++, n.call(t, e).then((function(e) {
							c || (c = !0, o[l] = e, --s || i(o))
						}), r)
					})), --s || i(o)
				}));
			return o.error && r(o.value), n.promise
		},
		race: function(e) {
			var t = this,
				n = Vc(t),
				i = n.reject,
				r = Lc((function() {
					var r = rt(t.resolve);
					Bs(e, (function(e) {
						r.call(t, e).then(n.resolve, i)
					}))
				}));
			return r.error && i(r.value), n.promise
		}
	});
	var ou, au = A.f,
		su = "".startsWith,
		lu = Math.min,
		cu = Ds("startsWith"),
		uu = !(cu || (ou = au(String.prototype, "startsWith"), !ou || ou.writable));
	Le({
		target: "String",
		proto: !0,
		forced: !uu && !cu
	}, {
		startsWith: function(e) {
			var t = String(p(this));
			_s(e);
			var n = ce(lu(arguments.length > 1 ? arguments[1] : void 0, t.length)),
				i = String(e);
			return su ? su.call(t, i, n) : t.slice(n, n + i.length) === i
		}
	});
	var hu, fu, du, pu = function(e) {
			return null != e ? e.constructor : null
		},
		mu = function(e, t) {
			return Boolean(e && t && e instanceof t)
		},
		gu = function(e) {
			return null == e
		},
		vu = function(e) {
			return pu(e) === Object
		},
		yu = function(e) {
			return pu(e) === String
		},
		bu = function(e) {
			return pu(e) === Function
		},
		wu = function(e) {
			return Array.isArray(e)
		},
		ku = function(e) {
			return mu(e, NodeList)
		},
		Tu = function(e) {
			return gu(e) || (yu(e) || wu(e) || ku(e)) && !e.length || vu(e) && !Object.keys(e).length
		},
		Su = gu,
		Eu = vu,
		Au = function(e) {
			return pu(e) === Number && !Number.isNaN(e)
		},
		Cu = yu,
		Pu = function(e) {
			return pu(e) === Boolean
		},
		xu = bu,
		Ou = wu,
		Iu = ku,
		Lu = function(e) {
			return mu(e, Element)
		},
		ju = function(e) {
			return mu(e, Event)
		},
		Nu = function(e) {
			return mu(e, KeyboardEvent)
		},
		Ru = function(e) {
			return mu(e, TextTrack) || !gu(e) && yu(e.kind)
		},
		Mu = function(e) {
			return mu(e, Promise) && bu(e.then)
		},
		_u = function(e) {
			if (mu(e, window.URL)) return !0;
			if (!yu(e)) return !1;
			var t = e;
			e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));
			try {
				return !Tu(new URL(t).hostname)
			} catch (e) {
				return !1
			}
		},
		Uu = Tu,
		Du = (hu = document.createElement("span"), fu = {
			WebkitTransition: "webkitTransitionEnd",
			MozTransition: "transitionend",
			OTransition: "oTransitionEnd otransitionend",
			transition: "transitionend"
		}, du = Object.keys(fu).find((function(e) {
			return void 0 !== hu.style[e]
		})), !!Cu(du) && fu[du]);

	function Fu(e, t) {
		setTimeout((function() {
			try {
				e.hidden = !0, e.offsetHeight, e.hidden = !1
			} catch (e) {}
		}), t)
	}
	var qu = {
			isIE:
			/* @cc_on!@ */
				!!document.documentMode,
			isEdge: window.navigator.userAgent.includes("Edge"),
			isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
			isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
			isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
		},
		Hu = function(e) {
			return function(t, n, i, r) {
				rt(n);
				var o = Me(t),
					a = d(o),
					s = ce(o.length),
					l = e ? s - 1 : 0,
					c = e ? -1 : 1;
				if (i < 2)
					for (;;) {
						if (l in a) {
							r = a[l], l += c;
							break
						}
						if (l += c, e ? l < 0 : s <= l) throw TypeError("Reduce of empty array with no initial value")
					}
				for (; e ? l >= 0 : s > l; l += c) l in a && (r = n(r, a[l], l, o));
				return r
			}
		},
		Bu = {
			left: Hu(!1),
			right: Hu(!0)
		}.left,
		Vu = Gt("reduce"),
		zu = Zt("reduce", {
			1: 0
		});

	function Wu(e, t) {
		return t.split(".").reduce((function(e, t) {
			return e && e[t]
		}), e)
	}

	function Ku() {
		for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
		if (!n.length) return e;
		var r = n.shift();
		return Eu(r) ? (Object.keys(r).forEach((function(t) {
			Eu(r[t]) ? (Object.keys(e).includes(t) || Object.assign(e, Ua({}, t, {})), Ku(e[t], r[t])) : Object.assign(e, Ua({}, t, r[t]))
		})), Ku.apply(void 0, [e].concat(n))) : e
	}

	function $u(e, t) {
		var n = e.length ? e : [e];
		Array.from(n).reverse().forEach((function(e, n) {
			var i = n > 0 ? t.cloneNode(!0) : t,
				r = e.parentNode,
				o = e.nextSibling;
			i.appendChild(e), o ? r.insertBefore(i, o) : r.appendChild(i)
		}))
	}

	function Yu(e, t) {
		Lu(e) && !Uu(t) && Object.entries(t).filter((function(e) {
			var t = Ha(e, 2)[1];
			return !Su(t)
		})).forEach((function(t) {
			var n = Ha(t, 2),
				i = n[0],
				r = n[1];
			return e.setAttribute(i, r)
		}))
	}

	function Gu(e, t, n) {
		var i = document.createElement(e);
		return Eu(t) && Yu(i, t), Cu(n) && (i.innerText = n), i
	}

	function Xu(e, t, n, i) {
		Lu(t) && t.appendChild(Gu(e, n, i))
	}

	function Qu(e) {
		Iu(e) || Ou(e) ? Array.from(e).forEach(Qu) : Lu(e) && Lu(e.parentNode) && e.parentNode.removeChild(e)
	}

	function Ju(e) {
		if (Lu(e))
			for (var t = e.childNodes.length; t > 0;) e.removeChild(e.lastChild), t -= 1
	}

	function Zu(e, t) {
		return Lu(t) && Lu(t.parentNode) && Lu(e) ? (t.parentNode.replaceChild(e, t), e) : null
	}

	function eh(e, t) {
		if (!Cu(e) || Uu(e)) return {};
		var n = {},
			i = Ku({}, t);
		return e.split(",").forEach((function(e) {
			var t = e.trim(),
				r = t.replace(".", ""),
				o = t.replace(/[[\]]/g, "").split("="),
				a = Ha(o, 1)[0],
				s = o.length > 1 ? o[1].replace(/["']/g, "") : "";
			switch (t.charAt(0)) {
				case ".":
					Cu(i.class) ? n.class = "".concat(i.class, " ").concat(r) : n.class = r;
					break;
				case "#":
					n.id = t.replace("#", "");
					break;
				case "[":
					n[a] = s
			}
		})), Ku(i, n)
	}

	function th(e, t) {
		if (Lu(e)) {
			var n = t;
			Pu(n) || (n = !e.hidden), e.hidden = n
		}
	}

	function nh(e, t, n) {
		if (Iu(e)) return Array.from(e).map((function(e) {
			return nh(e, t, n)
		}));
		if (Lu(e)) {
			var i = "toggle";
			return void 0 !== n && (i = n ? "add" : "remove"), e.classList[i](t), e.classList.contains(t)
		}
		return !1
	}

	function ih(e, t) {
		return Lu(e) && e.classList.contains(t)
	}

	function rh(e, t) {
		var n = Element.prototype;
		return (n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function() {
			return Array.from(document.querySelectorAll(t)).includes(this)
		}).call(e, t)
	}

	function oh(e) {
		return this.elements.container.querySelectorAll(e)
	}

	function ah(e) {
		return this.elements.container.querySelector(e)
	}

	function sh() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
			t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
		Lu(e) && (e.focus({
			preventScroll: !0
		}), t && nh(e, this.config.classNames.tabFocus))
	}
	Le({
		target: "Array",
		proto: !0,
		forced: !Vu || !zu || !Kl && Xn > 79 && Xn < 83
	}, {
		reduce: function(e) {
			return Bu(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var lh, ch = {
			"audio/ogg": "vorbis",
			"audio/wav": "1",
			"video/webm": "vp8, vorbis",
			"video/mp4": "avc1.42E01E, mp4a.40.2",
			"video/ogg": "theora"
		},
		uh = {
			audio: "canPlayType" in document.createElement("audio"),
			video: "canPlayType" in document.createElement("video"),
			check: function(e, t, n) {
				var i = qu.isIPhone && n && uh.playsinline,
					r = uh[e] || "html5" !== t;
				return {
					api: r,
					ui: r && uh.rangeInput && ("video" !== e || !qu.isIPhone || i)
				}
			},
			pip: !(qu.isIPhone || !xu(Gu("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || Gu("video").disablePictureInPicture)),
			airplay: xu(window.WebKitPlaybackTargetAvailabilityEvent),
			playsinline: "playsInline" in document.createElement("video"),
			mime: function(e) {
				if (Uu(e)) return !1;
				var t = Ha(e.split("/"), 1)[0],
					n = e;
				if (!this.isHTML5 || t !== this.type) return !1;
				Object.keys(ch).includes(n) && (n += '; codecs="'.concat(ch[e], '"'));
				try {
					return Boolean(n && this.media.canPlayType(n).replace(/no/, ""))
				} catch (e) {
					return !1
				}
			},
			textTracks: "textTracks" in document.createElement("video"),
			rangeInput: (lh = document.createElement("input"), lh.type = "range", "range" === lh.type),
			touch: "ontouchstart" in document.documentElement,
			transitions: !1 !== Du,
			reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
		},
		hh = function() {
			var e = !1;
			try {
				var t = Object.defineProperty({}, "passive", {
					get: function() {
						return e = !0, null
					}
				});
				window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
			} catch (e) {}
			return e
		}();

	function fh(e, t, n) {
		var i = this,
			r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
			o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
			a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
		if (e && "addEventListener" in e && !Uu(t) && xu(n)) {
			var s = t.split(" "),
				l = a;
			hh && (l = {
				passive: o,
				capture: a
			}), s.forEach((function(t) {
				i && i.eventListeners && r && i.eventListeners.push({
					element: e,
					type: t,
					callback: n,
					options: l
				}), e[r ? "addEventListener" : "removeEventListener"](t, n, l)
			}))
		}
	}

	function dh(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
			n = arguments.length > 2 ? arguments[2] : void 0,
			i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
			r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
		fh.call(this, e, t, n, !0, i, r)
	}

	function ph(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
			n = arguments.length > 2 ? arguments[2] : void 0,
			i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
			r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
		fh.call(this, e, t, n, !1, i, r)
	}

	function mh(e) {
		var t = this,
			n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
			i = arguments.length > 2 ? arguments[2] : void 0,
			r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
			o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
			a = function a() {
				ph(e, n, a, r, o);
				for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++) l[c] = arguments[c];
				i.apply(t, l)
			};
		fh.call(this, e, n, a, !0, r, o)
	}

	function gh(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
			n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
			i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
		if (Lu(e) && !Uu(t)) {
			var r = new CustomEvent(t, {
				bubbles: n,
				detail: Fa(Fa({}, i), {}, {
					plyr: this
				})
			});
			e.dispatchEvent(r)
		}
	}

	function vh() {
		this && this.eventListeners && (this.eventListeners.forEach((function(e) {
			var t = e.element,
				n = e.type,
				i = e.callback,
				r = e.options;
			t.removeEventListener(n, i, r)
		})), this.eventListeners = [])
	}

	function yh() {
		var e = this;
		return new Promise((function(t) {
			return e.ready ? setTimeout(t, 0) : dh.call(e, e.elements.container, "ready", t)
		})).then((function() {}))
	}

	function bh(e) {
		Mu(e) && e.then(null, (function() {}))
	}

	function wh(e) {
		return !!(Ou(e) || Cu(e) && e.includes(":")) && (Ou(e) ? e : e.split(":")).map(Number).every(Au)
	}

	function kh(e) {
		if (!Ou(e) || !e.every(Au)) return null;
		var t = Ha(e, 2),
			n = t[0],
			i = t[1],
			r = function e(t, n) {
				return 0 === n ? t : e(n, t % n)
			}(n, i);
		return [n / r, i / r]
	}

	function Th(e) {
		var t = function(e) {
				return wh(e) ? e.split(":").map(Number) : null
			},
			n = t(e);
		if (null === n && (n = t(this.config.ratio)), null === n && !Uu(this.embed) && Ou(this.embed.ratio) && (n = this.embed.ratio), null === n && this.isHTML5) {
			var i = this.media;
			n = kh([i.videoWidth, i.videoHeight])
		}
		return n
	}

	function Sh(e) {
		if (!this.isVideo) return {};
		var t = this.elements.wrapper,
			n = Th.call(this, e),
			i = Ha(Ou(n) ? n : [0, 0], 2),
			r = 100 / i[0] * i[1];
		if (t.style.paddingBottom = "".concat(r, "%"), this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
			var o = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
				a = (o - r) / (o / 50);
			this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = "translateY(-".concat(a, "%)")
		} else this.isHTML5 && t.classList.toggle(this.config.classNames.videoFixedRatio, null !== n);
		return {
			padding: r,
			ratio: n
		}
	}
	var Eh = {
		getSources: function() {
			var e = this;
			return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter((function(t) {
				var n = t.getAttribute("type");
				return !!Uu(n) || uh.mime.call(e, n)
			})) : []
		},
		getQualityOptions: function() {
			return this.config.quality.forced ? this.config.quality.options : Eh.getSources.call(this).map((function(e) {
				return Number(e.getAttribute("size"))
			})).filter(Boolean)
		},
		setup: function() {
			if (this.isHTML5) {
				var e = this;
				e.options.speed = e.config.speed.options, Uu(this.config.ratio) || Sh.call(e), Object.defineProperty(e.media, "quality", {
					get: function() {
						var t = Eh.getSources.call(e).find((function(t) {
							return t.getAttribute("src") === e.source
						}));
						return t && Number(t.getAttribute("size"))
					},
					set: function(t) {
						if (e.quality !== t) {
							if (e.config.quality.forced && xu(e.config.quality.onChange)) e.config.quality.onChange(t);
							else {
								var n = Eh.getSources.call(e).find((function(e) {
									return Number(e.getAttribute("size")) === t
								}));
								if (!n) return;
								var i = e.media,
									r = i.currentTime,
									o = i.paused,
									a = i.preload,
									s = i.readyState,
									l = i.playbackRate;
								e.media.src = n.getAttribute("src"), ("none" !== a || s) && (e.once("loadedmetadata", (function() {
									e.speed = l, e.currentTime = r, o || bh(e.play())
								})), e.media.load())
							}
							gh.call(e, e.media, "qualitychange", !1, {
								quality: t
							})
						}
					}
				})
			}
		},
		cancelRequests: function() {
			this.isHTML5 && (Qu(Eh.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
		}
	};

	function Ah(e) {
		return Ou(e) ? e.filter((function(t, n) {
			return e.indexOf(t) === n
		})) : e
	}
	var Ch = x.f,
		Ph = be.f,
		xh = ee.set,
		Oh = Qe("match"),
		Ih = i.RegExp,
		Lh = Ih.prototype,
		jh = /a/g,
		Nh = /a/g,
		Rh = new Ih(jh) !== jh,
		Mh = fi.UNSUPPORTED_Y;
	if (o && Oe("RegExp", !Rh || Mh || r((function() {
			return Nh[Oh] = !1, Ih(jh) != jh || Ih(Nh) == Nh || "/a/i" != Ih(jh, "i")
		})))) {
		for (var _h = function(e, t) {
				var n, i = this instanceof _h,
					r = Yi(e),
					o = void 0 === t;
				if (!i && r && e.constructor === _h && o) return e;
				Rh ? r && !o && (e = e.source) : e instanceof _h && (o && (t = ui.call(e)), e = e.source), Mh && (n = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, ""));
				var a = ms(Rh ? new Ih(e, t) : Ih(e, t), i ? this : Lh, _h);
				return Mh && n && xh(a, {
					sticky: n
				}), a
			}, Uh = function(e) {
				e in _h || Ch(_h, e, {
					configurable: !0,
					get: function() {
						return Ih[e]
					},
					set: function(t) {
						Ih[e] = t
					}
				})
			}, Dh = Ph(Ih), Fh = 0; Dh.length > Fh;) Uh(Dh[Fh++]);
		Lh.constructor = _h, _h.prototype = Lh, te(i, "RegExp", _h)
	}

	function qh(e) {
		for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
		return Uu(e) ? e : e.toString().replace(/{(\d+)}/g, (function(e, t) {
			return n[t].toString()
		}))
	}
	zl("RegExp");
	var Hh = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
				t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
				n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
			return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), n.toString())
		},
		Bh = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
			return e.toString().replace(/\w\S*/g, (function(e) {
				return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
			}))
		};

	function Vh() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
			t = e.toString();
		return t = Hh(t, "-", " "), t = Hh(t, "_", " "), t = Bh(t), Hh(t, " ", "")
	}

	function zh(e) {
		var t = document.createElement("div");
		return t.appendChild(e), t.innerHTML
	}
	var Wh = {
			pip: "PIP",
			airplay: "AirPlay",
			html5: "HTML5",
			vimeo: "Vimeo",
			youtube: "YouTube"
		},
		Kh = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
				t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			if (Uu(e) || Uu(t)) return "";
			var n = Wu(t.i18n, e);
			if (Uu(n)) return Object.keys(Wh).includes(e) ? Wh[e] : "";
			var i = {
				"{seektime}": t.seekTime,
				"{title}": t.title
			};
			return Object.entries(i).forEach((function(e) {
				var t = Ha(e, 2),
					i = t[0],
					r = t[1];
				n = Hh(n, i, r)
			})), n
		},
		$h = function() {
			function e(t) {
				Ra(this, e), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key
			}
			return _a(e, [{
				key: "get",
				value: function(t) {
					if (!e.supported || !this.enabled) return null;
					var n = window.localStorage.getItem(this.key);
					if (Uu(n)) return null;
					var i = JSON.parse(n);
					return Cu(t) && t.length ? i[t] : i
				}
			}, {
				key: "set",
				value: function(t) {
					if (e.supported && this.enabled && Eu(t)) {
						var n = this.get();
						Uu(n) && (n = {}), Ku(n, t), window.localStorage.setItem(this.key, JSON.stringify(n))
					}
				}
			}], [{
				key: "supported",
				get: function() {
					try {
						if (!("localStorage" in window)) return !1;
						var e = "___test";
						return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0
					} catch (e) {
						return !1
					}
				}
			}]), e
		}();

	function Yh(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
		return new Promise((function(n, i) {
			try {
				var r = new XMLHttpRequest;
				if (!("withCredentials" in r)) return;
				r.addEventListener("load", (function() {
					if ("text" === t) try {
						n(JSON.parse(r.responseText))
					} catch (e) {
						n(r.responseText)
					} else n(r.response)
				})), r.addEventListener("error", (function() {
					throw new Error(r.status)
				})), r.open("GET", e, !0), r.responseType = t, r.send()
			} catch (e) {
				i(e)
			}
		}))
	}

	function Gh(e, t) {
		if (Cu(e)) {
			var n = "cache",
				i = Cu(t),
				r = function() {
					return null !== document.getElementById(t)
				},
				o = function(e, t) {
					e.innerHTML = t, i && r() || document.body.insertAdjacentElement("afterbegin", e)
				};
			if (!i || !r()) {
				var a = $h.supported,
					s = document.createElement("div");
				if (s.setAttribute("hidden", ""), i && s.setAttribute("id", t), a) {
					var l = window.localStorage.getItem("".concat(n, "-").concat(t));
					if (null !== l) {
						var c = JSON.parse(l);
						o(s, c.content)
					}
				}
				Yh(e).then((function(e) {
					Uu(e) || (a && window.localStorage.setItem("".concat(n, "-").concat(t), JSON.stringify({
						content: e
					})), o(s, e))
				})).catch((function() {}))
			}
		}
	}
	var Xh = Math.ceil,
		Qh = Math.floor;
	Le({
		target: "Math",
		stat: !0
	}, {
		trunc: function(e) {
			return (e > 0 ? Qh : Xh)(e)
		}
	});
	var Jh = function(e) {
			return Math.trunc(e / 60 / 60 % 60, 10)
		},
		Zh = function(e) {
			return Math.trunc(e / 60 % 60, 10)
		},
		ef = function(e) {
			return Math.trunc(e % 60, 10)
		};

	function tf() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
			t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
			n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
		if (!Au(e)) return tf(void 0, t, n);
		var i = function(e) {
				return "0".concat(e).slice(-2)
			},
			r = Jh(e),
			o = Zh(e),
			a = ef(e);
		return r = t || r > 0 ? "".concat(r, ":") : "", "".concat(n && e > 0 ? "-" : "").concat(r).concat(i(o), ":").concat(i(a))
	}
	var nf = {
		getIconUrl: function() {
			var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || qu.isIE && !window.svg4everybody;
			return {
				url: this.config.iconUrl,
				cors: e
			}
		},
		findElements: function() {
			try {
				return this.elements.controls = ah.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
					play: oh.call(this, this.config.selectors.buttons.play),
					pause: ah.call(this, this.config.selectors.buttons.pause),
					restart: ah.call(this, this.config.selectors.buttons.restart),
					rewind: ah.call(this, this.config.selectors.buttons.rewind),
					fastForward: ah.call(this, this.config.selectors.buttons.fastForward),
					mute: ah.call(this, this.config.selectors.buttons.mute),
					pip: ah.call(this, this.config.selectors.buttons.pip),
					airplay: ah.call(this, this.config.selectors.buttons.airplay),
					settings: ah.call(this, this.config.selectors.buttons.settings),
					captions: ah.call(this, this.config.selectors.buttons.captions),
					fullscreen: ah.call(this, this.config.selectors.buttons.fullscreen)
				}, this.elements.progress = ah.call(this, this.config.selectors.progress), this.elements.inputs = {
					seek: ah.call(this, this.config.selectors.inputs.seek),
					volume: ah.call(this, this.config.selectors.inputs.volume)
				}, this.elements.display = {
					buffer: ah.call(this, this.config.selectors.display.buffer),
					currentTime: ah.call(this, this.config.selectors.display.currentTime),
					duration: ah.call(this, this.config.selectors.display.duration)
				}, Lu(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0
			} catch (e) {
				return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
			}
		},
		createIcon: function(e, t) {
			var n = "http://www.w3.org/2000/svg", //http://www.w3.org/2000/svg
				i = nf.getIconUrl.call(this),
				r = "".concat(i.cors ? "" : i.url, "#").concat(this.config.iconPrefix),
				o = document.createElementNS(n, "svg");
			Yu(o, Ku(t, {
				"aria-hidden": "true",
				focusable: "false"
			}));
			var a = document.createElementNS(n, "use"),
				s = "".concat(r, "-").concat(e);
			return "href" in a && a.setAttributeNS("http://www.w3.org/1999/xlink", "href", s), a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s), o.appendChild(a), o
		},
		createLabel: function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				n = Kh(e, this.config),
				i = Fa(Fa({}, t), {}, {
					class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
				});
			return Gu("span", i, n)
		},
		createBadge: function(e) {
			if (Uu(e)) return null;
			var t = Gu("span", {
				class: this.config.classNames.menu.value
			});
			return t.appendChild(Gu("span", {
				class: this.config.classNames.menu.badge
			}, e)), t
		},
		createButton: function(e, t) {
			var n = this,
				i = Ku({}, t),
				r = function() {
					var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
					return (e = Vh(e)).charAt(0).toLowerCase() + e.slice(1)
				}(e),
				o = {
					element: "button",
					toggle: !1,
					label: null,
					icon: null,
					labelPressed: null,
					iconPressed: null
				};
			switch (["element", "icon", "label"].forEach((function(e) {
				Object.keys(i).includes(e) && (o[e] = i[e], delete i[e])
			})), "button" !== o.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i.class.split(" ").some((function(e) {
				return e === n.config.classNames.control
			})) || Ku(i, {
				class: "".concat(i.class, " ").concat(this.config.classNames.control)
			}) : i.class = this.config.classNames.control, e) {
				case "play":
					o.toggle = !0, o.label = "play", o.labelPressed = "pause", o.icon = "play", o.iconPressed = "pause";
					break;
				case "mute":
					o.toggle = !0, o.label = "mute", o.labelPressed = "unmute", o.icon = "volume", o.iconPressed = "muted";
					break;
				case "captions":
					o.toggle = !0, o.label = "enableCaptions", o.labelPressed = "disableCaptions", o.icon = "captions-off", o.iconPressed = "captions-on";
					break;
				case "fullscreen":
					o.toggle = !0, o.label = "enterFullscreen", o.labelPressed = "exitFullscreen", o.icon = "enter-fullscreen", o.iconPressed = "exit-fullscreen";
					break;
				case "play-large":
					i.class += " ".concat(this.config.classNames.control, "--overlaid"), r = "play", o.label = "play", o.icon = "play";
					break;
				default:
					Uu(o.label) && (o.label = r), Uu(o.icon) && (o.icon = e)
			}
			var a = Gu(o.element);
			return o.toggle ? (a.appendChild(nf.createIcon.call(this, o.iconPressed, {
				class: "icon--pressed"
			})), a.appendChild(nf.createIcon.call(this, o.icon, {
				class: "icon--not-pressed"
			})), a.appendChild(nf.createLabel.call(this, o.labelPressed, {
				class: "label--pressed"
			})), a.appendChild(nf.createLabel.call(this, o.label, {
				class: "label--not-pressed"
			}))) : (a.appendChild(nf.createIcon.call(this, o.icon)), a.appendChild(nf.createLabel.call(this, o.label))), Ku(i, eh(this.config.selectors.buttons[r], i)), Yu(a, i), "play" === r ? (Ou(this.elements.buttons[r]) || (this.elements.buttons[r] = []), this.elements.buttons[r].push(a)) : this.elements.buttons[r] = a, a
		},
		createRange: function(e, t) {
			var n = Gu("input", Ku(eh(this.config.selectors.inputs[e]), {
				type: "range",
				min: 0,
				max: 100,
				step: .01,
				value: 0,
				autocomplete: "off",
				role: "slider",
				"aria-label": Kh(e, this.config),
				"aria-valuemin": 0,
				"aria-valuemax": 100,
				"aria-valuenow": 0
			}, t));
			return this.elements.inputs[e] = n, nf.updateRangeFill.call(this, n), Hl.setup(n), n
		},
		createProgress: function(e, t) {
			var n = Gu("progress", Ku(eh(this.config.selectors.display[e]), {
				min: 0,
				max: 100,
				value: 0,
				role: "progressbar",
				"aria-hidden": !0
			}, t));
			if ("volume" !== e) {
				n.appendChild(Gu("span", null, "0"));
				var i = {
						played: "played",
						buffer: "buffered"
					}[e],
					r = i ? Kh(i, this.config) : "";
				n.innerText = "% ".concat(r.toLowerCase())
			}
			return this.elements.display[e] = n, n
		},
		createTime: function(e, t) {
			var n = eh(this.config.selectors.display[e], t),
				i = Gu("div", Ku(n, {
					class: "".concat(n.class ? n.class : "", " ").concat(this.config.classNames.display.time, " ").trim(),
					"aria-label": Kh(e, this.config)
				}), "00:00");
			return this.elements.display[e] = i, i
		},
		bindMenuItemShortcuts: function(e, t) {
			var n = this;
			dh.call(this, e, "keydown keyup", (function(i) {
				if ([32, 38, 39, 40].includes(i.which) && (i.preventDefault(), i.stopPropagation(), "keydown" !== i.type)) {
					var r, o = rh(e, '[role="menuitemradio"]');
					if (!o && [32, 39].includes(i.which)) nf.showMenuPanel.call(n, t, !0);
					else 32 !== i.which && (40 === i.which || o && 39 === i.which ? (r = e.nextElementSibling, Lu(r) || (r = e.parentNode.firstElementChild)) : (r = e.previousElementSibling, Lu(r) || (r = e.parentNode.lastElementChild)), sh.call(n, r, !0))
				}
			}), !1), dh.call(this, e, "keyup", (function(e) {
				13 === e.which && nf.focusFirstMenuItem.call(n, null, !0)
			}))
		},
		createMenuItem: function(e) {
			var t = this,
				n = e.value,
				i = e.list,
				r = e.type,
				o = e.title,
				a = e.badge,
				s = void 0 === a ? null : a,
				l = e.checked,
				c = void 0 !== l && l,
				u = eh(this.config.selectors.inputs[r]),
				h = Gu("button", Ku(u, {
					type: "button",
					role: "menuitemradio",
					class: "".concat(this.config.classNames.control, " ").concat(u.class ? u.class : "").trim(),
					"aria-checked": c,
					value: n
				})),
				f = Gu("span");
			f.innerHTML = o, Lu(s) && f.appendChild(s), h.appendChild(f), Object.defineProperty(h, "checked", {
				enumerable: !0,
				get: function() {
					return "true" === h.getAttribute("aria-checked")
				},
				set: function(e) {
					e && Array.from(h.parentNode.children).filter((function(e) {
						return rh(e, '[role="menuitemradio"]')
					})).forEach((function(e) {
						return e.setAttribute("aria-checked", "false")
					})), h.setAttribute("aria-checked", e ? "true" : "false")
				}
			}), this.listeners.bind(h, "click keyup", (function(e) {
				if (!Nu(e) || 32 === e.which) {
					switch (e.preventDefault(), e.stopPropagation(), h.checked = !0, r) {
						case "language":
							t.currentTrack = Number(n);
							break;
						case "quality":
							t.quality = n;
							break;
						case "speed":
							t.speed = parseFloat(n)
					}
					nf.showMenuPanel.call(t, "home", Nu(e))
				}
			}), r, !1), nf.bindMenuItemShortcuts.call(this, h, r), i.appendChild(h)
		},
		formatTime: function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
				t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
			if (!Au(e)) return e;
			var n = Jh(this.duration) > 0;
			return tf(e, n, t)
		},
		updateTimeDisplay: function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
				t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
				n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
			Lu(e) && Au(t) && (e.innerText = nf.formatTime(t, n))
		},
		updateVolume: function() {
			this.supported.ui && (Lu(this.elements.inputs.volume) && nf.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), Lu(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
		},
		setRange: function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
			Lu(e) && (e.value = t, nf.updateRangeFill.call(this, e))
		},
		updateProgress: function(e) {
			var t = this;
			if (this.supported.ui && ju(e)) {
				var n = 0;
				if (e) switch (e.type) {
					case "timeupdate":
					case "seeking":
					case "seeked":
						n = function(e, t) {
							return 0 === e || 0 === t || Number.isNaN(e) || Number.isNaN(t) ? 0 : (e / t * 100).toFixed(2)
						}(this.currentTime, this.duration), "timeupdate" === e.type && nf.setRange.call(this, this.elements.inputs.seek, n);
						break;
					case "playing":
					case "progress":
						! function(e, n) {
							var i = Au(n) ? n : 0,
								r = Lu(e) ? e : t.elements.display.buffer;
							if (Lu(r)) {
								r.value = i;
								var o = r.getElementsByTagName("span")[0];
								Lu(o) && (o.childNodes[0].nodeValue = i)
							}
						}(this.elements.display.buffer, 100 * this.buffered)
				}
			}
		},
		updateRangeFill: function(e) {
			var t = ju(e) ? e.target : e;
			if (Lu(t) && "range" === t.getAttribute("type")) {
				if (rh(t, this.config.selectors.inputs.seek)) {
					t.setAttribute("aria-valuenow", this.currentTime);
					var n = nf.formatTime(this.currentTime),
						i = nf.formatTime(this.duration),
						r = Kh("seekLabel", this.config);
					t.setAttribute("aria-valuetext", r.replace("{currentTime}", n).replace("{duration}", i))
				} else if (rh(t, this.config.selectors.inputs.volume)) {
					var o = 100 * t.value;
					t.setAttribute("aria-valuenow", o), t.setAttribute("aria-valuetext", "".concat(o.toFixed(1), "%"))
				} else t.setAttribute("aria-valuenow", t.value);
				qu.isWebkit && t.style.setProperty("--value", "".concat(t.value / t.max * 100, "%"))
			}
		},
		updateSeekTooltip: function(e) {
			var t = this;
			if (this.config.tooltips.seek && Lu(this.elements.inputs.seek) && Lu(this.elements.display.seekTooltip) && 0 !== this.duration) {
				var n = "".concat(this.config.classNames.tooltip, "--visible"),
					i = function(e) {
						return nh(t.elements.display.seekTooltip, n, e)
					};
				if (this.touch) i(!1);
				else {
					var r = 0,
						o = this.elements.progress.getBoundingClientRect();
					if (ju(e)) r = 100 / o.width * (e.pageX - o.left);
					else {
						if (!ih(this.elements.display.seekTooltip, n)) return;
						r = parseFloat(this.elements.display.seekTooltip.style.left, 10)
					}
					r < 0 ? r = 0 : r > 100 && (r = 100), nf.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * r), this.elements.display.seekTooltip.style.left = "".concat(r, "%"), ju(e) && ["mouseenter", "mouseleave"].includes(e.type) && i("mouseenter" === e.type)
				}
			}
		},
		timeUpdate: function(e) {
			var t = !Lu(this.elements.display.duration) && this.config.invertTime;
			nf.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || nf.updateProgress.call(this, e)
		},
		durationUpdate: function() {
			if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
				if (this.duration >= Math.pow(2, 32)) return th(this.elements.display.currentTime, !0), void th(this.elements.progress, !0);
				Lu(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
				var e = Lu(this.elements.display.duration);
				!e && this.config.displayDuration && this.paused && nf.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && nf.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), nf.updateSeekTooltip.call(this)
			}
		},
		toggleMenuButton: function(e, t) {
			th(this.elements.settings.buttons[e], !t)
		},
		updateSetting: function(e, t, n) {
			var i = this.elements.settings.panels[e],
				r = null,
				o = t;
			if ("captions" === e) r = this.currentTrack;
			else {
				if (r = Uu(n) ? this[e] : n, Uu(r) && (r = this.config[e].default), !Uu(this.options[e]) && !this.options[e].includes(r)) return void this.debug.warn("Unsupported value of '".concat(r, "' for ").concat(e));
				if (!this.config[e].options.includes(r)) return void this.debug.warn("Disabled value of '".concat(r, "' for ").concat(e))
			}
			if (Lu(o) || (o = i && i.querySelector('[role="menu"]')), Lu(o)) {
				this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = nf.getLabel.call(this, e, r);
				var a = o && o.querySelector('[value="'.concat(r, '"]'));
				Lu(a) && (a.checked = !0)
			}
		},
		getLabel: function(e, t) {
			switch (e) {
				case "speed":
					return 1 === t ? Kh("normal", this.config) : "".concat(t, "&times;");
				case "quality":
					if (Au(t)) {
						var n = Kh("qualityLabel.".concat(t), this.config);
						return n.length ? n : "".concat(t, "p")
					}
					return Bh(t);
				case "captions":
					return af.getLabel.call(this);
				default:
					return null
			}
		},
		setQualityMenu: function(e) {
			var t = this;
			if (Lu(this.elements.settings.panels.quality)) {
				var n = "quality",
					i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
				Ou(e) && (this.options.quality = Ah(e).filter((function(e) {
					return t.config.quality.options.includes(e)
				})));
				var r = !Uu(this.options.quality) && this.options.quality.length > 1;
				if (nf.toggleMenuButton.call(this, n, r), Ju(i), nf.checkMenu.call(this), r) {
					var o = function(e) {
						var n = Kh("qualityBadge.".concat(e), t.config);
						return n.length ? nf.createBadge.call(t, n) : null
					};
					this.options.quality.sort((function(e, n) {
						var i = t.config.quality.options;
						return i.indexOf(e) > i.indexOf(n) ? 1 : -1
					})).forEach((function(e) {
						nf.createMenuItem.call(t, {
							value: e,
							list: i,
							type: n,
							title: nf.getLabel.call(t, "quality", e),
							badge: o(e)
						})
					})), nf.updateSetting.call(this, n, i)
				}
			}
		},
		setCaptionsMenu: function() {
			var e = this;
			if (Lu(this.elements.settings.panels.captions)) {
				var t = "captions",
					n = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
					i = af.getTracks.call(this),
					r = Boolean(i.length);
				if (nf.toggleMenuButton.call(this, t, r), Ju(n), nf.checkMenu.call(this), r) {
					var o = i.map((function(t, i) {
						return {
							value: i,
							checked: e.captions.toggled && e.currentTrack === i,
							title: af.getLabel.call(e, t),
							badge: t.language && nf.createBadge.call(e, t.language.toUpperCase()),
							list: n,
							type: "language"
						}
					}));
					o.unshift({
						value: -1,
						checked: !this.captions.toggled,
						title: Kh("disabled", this.config),
						list: n,
						type: "language"
					}), o.forEach(nf.createMenuItem.bind(this)), nf.updateSetting.call(this, t, n)
				}
			}
		},
		setSpeedMenu: function() {
			var e = this;
			if (Lu(this.elements.settings.panels.speed)) {
				var t = "speed",
					n = this.elements.settings.panels.speed.querySelector('[role="menu"]');
				this.options.speed = this.options.speed.filter((function(t) {
					return t >= e.minimumSpeed && t <= e.maximumSpeed
				}));
				var i = !Uu(this.options.speed) && this.options.speed.length > 1;
				nf.toggleMenuButton.call(this, t, i), Ju(n), nf.checkMenu.call(this), i && (this.options.speed.forEach((function(i) {
					nf.createMenuItem.call(e, {
						value: i,
						list: n,
						type: t,
						title: nf.getLabel.call(e, "speed", i)
					})
				})), nf.updateSetting.call(this, t, n))
			}
		},
		checkMenu: function() {
			var e = this.elements.settings.buttons,
				t = !Uu(e) && Object.values(e).some((function(e) {
					return !e.hidden
				}));
			th(this.elements.settings.menu, !t)
		},
		focusFirstMenuItem: function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
			if (!this.elements.settings.popup.hidden) {
				var n = e;
				Lu(n) || (n = Object.values(this.elements.settings.panels).find((function(e) {
					return !e.hidden
				})));
				var i = n.querySelector('[role^="menuitem"]');
				sh.call(this, i, t)
			}
		},
		toggleMenu: function(e) {
			var t = this.elements.settings.popup,
				n = this.elements.buttons.settings;
			if (Lu(t) && Lu(n)) {
				var i = t.hidden,
					r = i;
				if (Pu(e)) r = e;
				else if (Nu(e) && 27 === e.which) r = !1;
				else if (ju(e)) {
					var o = xu(e.composedPath) ? e.composedPath()[0] : e.target,
						a = t.contains(o);
					if (a || !a && e.target !== n && r) return
				}
				n.setAttribute("aria-expanded", r), th(t, !r), nh(this.elements.container, this.config.classNames.menu.open, r), r && Nu(e) ? nf.focusFirstMenuItem.call(this, null, !0) : r || i || sh.call(this, n, Nu(e))
			}
		},
		getMenuSize: function(e) {
			var t = e.cloneNode(!0);
			t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
			var n = t.scrollWidth,
				i = t.scrollHeight;
			return Qu(t), {
				width: n,
				height: i
			}
		},
		showMenuPanel: function() {
			var e = this,
				t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
				n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
				i = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(t));
			if (Lu(i)) {
				var r = i.parentNode,
					o = Array.from(r.children).find((function(e) {
						return !e.hidden
					}));
				if (uh.transitions && !uh.reducedMotion) {
					r.style.width = "".concat(o.scrollWidth, "px"), r.style.height = "".concat(o.scrollHeight, "px");
					var a = nf.getMenuSize.call(this, i),
						s = function t(n) {
							n.target === r && ["width", "height"].includes(n.propertyName) && (r.style.width = "", r.style.height = "", ph.call(e, r, Du, t))
						};
					dh.call(this, r, Du, s), r.style.width = "".concat(a.width, "px"), r.style.height = "".concat(a.height, "px")
				}
				th(o, !0), th(i, !1), nf.focusFirstMenuItem.call(this, i, n)
			}
		},
		setDownloadUrl: function() {
			var e = this.elements.buttons.download;
			Lu(e) && e.setAttribute("href", this.download)
		},
		create: function(e) {
			var t = this,
				n = nf.bindMenuItemShortcuts,
				i = nf.createButton,
				r = nf.createProgress,
				o = nf.createRange,
				a = nf.createTime,
				s = nf.setQualityMenu,
				l = nf.setSpeedMenu,
				c = nf.showMenuPanel;
			this.elements.controls = null, Ou(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
			var u = Gu("div", eh(this.config.selectors.controls.wrapper));
			this.elements.controls = u;
			
			var h = {
				class: "plyr__controls__item"
			};
			return Ah(Ou(this.config.controls) ? this.config.controls : []).forEach((function(s) {
				if ("restart" === s && u.appendChild(i.call(t, "restart", h)), "rewind" === s && u.appendChild(i.call(t, "rewind", h)), "play" === s && u.appendChild(i.call(t, "play", h)), "fast-forward" === s && u.appendChild(i.call(t, "fast-forward", h)), "progress" === s) {
					var l = Gu("div", {
							class: "".concat(h.class, " plyr__progress__container")
						}),
						f = Gu("div", eh(t.config.selectors.progress));
					if (f.appendChild(o.call(t, "seek", {
							id: "plyr-seek-".concat(e.id)
						})), f.appendChild(r.call(t, "buffer")), t.config.tooltips.seek) {
						var d = Gu("span", {
							class: t.config.classNames.tooltip
						}, "00:00");
						f.appendChild(d), t.elements.display.seekTooltip = d
					}
					t.elements.progress = f, l.appendChild(t.elements.progress), u.appendChild(l)
				}
				if ("current-time" === s && u.appendChild(a.call(t, "currentTime", h)), "duration" === s && u.appendChild(a.call(t, "duration", h)), "mute" === s || "volume" === s) {
					var p = t.elements.volume;
					if (Lu(p) && u.contains(p) || (p = Gu("div", Ku({}, h, {
							class: "".concat(h.class, " plyr__volume").trim()
						})), t.elements.volume = p, u.appendChild(p)), "mute" === s && p.appendChild(i.call(t, "mute")), "volume" === s && !qu.isIos) {
						var m = {
							max: 1,
							step: .05,
							value: t.config.volume
						};
						p.appendChild(o.call(t, "volume", Ku(m, {
							id: "plyr-volume-".concat(e.id)
						})))
					}
				}
				if ("captions" === s && u.appendChild(i.call(t, "captions", h)), "settings" === s && !Uu(t.config.settings)) {
					var g = Gu("div", Ku({}, h, {
						class: "".concat(h.class, " plyr__menu").trim(),
						hidden: ""
					}));
					/*
					g.appendChild(i.call(t, "settings", {
						"aria-haspopup": !0,
						"aria-controls": "plyr-settings-".concat(e.id),
						"aria-expanded": !1
					}));
					*/
					var v = Gu("div", {
							class: "plyr__menu__container",
							id: "plyr-settings-".concat(e.id),
							hidden: ""
						}),
						y = Gu("div"),
						b = Gu("div", {
							id: "plyr-settings-".concat(e.id, "-home")
						}),
						w = Gu("div", {
							role: "menu"
						});
					b.appendChild(w), y.appendChild(b), t.elements.settings.panels.home = b, t.config.settings.forEach((function(i) {
						var r = Gu("button", Ku(eh(t.config.selectors.buttons.settings), {
							type: "button",
							class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--forward"),
							role: "menuitem",
							"aria-haspopup": !0,
							hidden: ""
						}));
						n.call(t, r, i), dh.call(t, r, "click", (function() {
							c.call(t, i, !1)
						}));
						var o = Gu("span", null, Kh(i, t.config)),
							a = Gu("span", {
								class: t.config.classNames.menu.value
							});
						a.innerHTML = e[i], o.appendChild(a), r.appendChild(o), w.appendChild(r);
						var s = Gu("div", {
								id: "plyr-settings-".concat(e.id, "-").concat(i),
								hidden: ""
							}),
							l = Gu("button", {
								type: "button",
								class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--back")
							});
						l.appendChild(Gu("span", {
							"aria-hidden": !0
						}, Kh(i, t.config))), l.appendChild(Gu("span", {
							class: t.config.classNames.hidden
						}, Kh("menuBack", t.config))), dh.call(t, s, "keydown", (function(e) {
							37 === e.which && (e.preventDefault(), e.stopPropagation(), c.call(t, "home", !0))
						}), !1), dh.call(t, l, "click", (function() {
							c.call(t, "home", !1)
						})), s.appendChild(l), s.appendChild(Gu("div", {
							role: "menu"
						})), y.appendChild(s), t.elements.settings.buttons[i] = r, t.elements.settings.panels[i] = s
					})), v.appendChild(y), g.appendChild(v), u.appendChild(g), t.elements.settings.popup = v, t.elements.settings.menu = g
				}
				if ("pip" === s && uh.pip && u.appendChild(i.call(t, "pip", h)), "airplay" === s && uh.airplay && u.appendChild(i.call(t, "airplay", h)), "download" === s) {
					var k = Ku({}, h, {
						element: "a",
						href: t.download,
						target: "_blank"
					});
					t.isHTML5 && (k.download = "");
					var T = t.config.urls.download;
					!_u(T) && t.isEmbed && Ku(k, {
						icon: "logo-".concat(t.provider),
						label: t.provider
					}), u.appendChild(i.call(t, "download", k))
				}
				"fullscreen" === s && u.appendChild(i.call(t, "fullscreen", h))
			})), this.isHTML5 && s.call(this, Eh.getQualityOptions.call(this)), l.call(this), u
		},
		inject: function() {
			var e = this;
			if (this.config.loadSprite) {
				var t = nf.getIconUrl.call(this);
				t.cors && Gh(t.url, "sprite-plyr")
			}
			this.id = Math.floor(1e4 * Math.random());
			var n = null;
			this.elements.controls = null;
			var i = {
					id: this.id,
					seektime: this.config.seekTime,
					title: this.config.title
				},
				r = !0;
			xu(this.config.controls) && (this.config.controls = this.config.controls.call(this, i)), this.config.controls || (this.config.controls = []), Lu(this.config.controls) || Cu(this.config.controls) ? n = this.config.controls : (n = nf.create.call(this, {
				id: this.id,
				seektime: this.config.seekTime,
				speed: this.speed,
				quality: this.quality,
				captions: af.getLabel.call(this)
			}), r = !1);
			var o, a;
			if (r && Cu(this.config.controls) && (o = n, Object.entries(i).forEach((function(e) {
					var t = Ha(e, 2),
						n = t[0],
						i = t[1];
					o = Hh(o, "{".concat(n, "}"), i)
				})), n = o), Cu(this.config.selectors.controls.container) && (a = document.querySelector(this.config.selectors.controls.container)), Lu(a) || (a = this.elements.container), a[Lu(n) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", n), Lu(this.elements.controls) || nf.findElements.call(this), !Uu(this.elements.buttons)) {
				var s = function(t) {
					var n = e.config.classNames.controlPressed;
					Object.defineProperty(t, "pressed", {
						enumerable: !0,
						get: function() {
							return ih(t, n)
						},
						set: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
							nh(t, n, e)
						}
					})
				};
				Object.values(this.elements.buttons).filter(Boolean).forEach((function(e) {
					Ou(e) || Iu(e) ? Array.from(e).filter(Boolean).forEach(s) : s(e)
				}))
			}
			if (qu.isEdge && Fu(a), this.config.tooltips.controls) {
				var l = this.config,
					c = l.classNames,
					u = l.selectors,
					h = "".concat(u.controls.wrapper, " ").concat(u.labels, " .").concat(c.hidden),
					f = oh.call(this, h);
				Array.from(f).forEach((function(t) {
					nh(t, e.config.classNames.hidden, !1), nh(t, e.config.classNames.tooltip, !0)
				}))
			}
		}
	};

	function rf(e) {
		var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
			n = e;
		if (t) {
			var i = document.createElement("a");
			i.href = n, n = i.href
		}
		try {
			return new URL(n)
		} catch (e) {
			return null
		}
	}

	function of(e) {
		var t = new URLSearchParams;
		return Eu(e) && Object.entries(e).forEach((function(e) {
			var n = Ha(e, 2),
				i = n[0],
				r = n[1];
			t.set(i, r)
		})), t
	}
	var af = {
			setup: function() {
				if (this.supported.ui)
					if (!this.isVideo || this.isYouTube || this.isHTML5 && !uh.textTracks) Ou(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && nf.setCaptionsMenu.call(this);
					else {
						if (Lu(this.elements.captions) || (this.elements.captions = Gu("div", eh(this.config.selectors.captions)), function(e, t) {
								Lu(e) && Lu(t) && t.parentNode.insertBefore(e, t.nextSibling)
							}(this.elements.captions, this.elements.wrapper)), qu.isIE && window.URL) {
							var e = this.media.querySelectorAll("track");
							Array.from(e).forEach((function(e) {
								var t = e.getAttribute("src"),
									n = rf(t);
								null !== n && n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && Yh(t, "blob").then((function(t) {
									e.setAttribute("src", window.URL.createObjectURL(t))
								})).catch((function() {
									Qu(e)
								}))
							}))
						}
						var t = Ah((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((function(e) {
								return e.split("-")[0]
							}))),
							n = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
						if ("auto" === n) n = Ha(t, 1)[0];
						var i = this.storage.get("captions");
						if (Pu(i) || (i = this.config.captions.active), Object.assign(this.captions, {
								toggled: !1,
								active: i,
								language: n,
								languages: t
							}), this.isHTML5) {
							var r = this.config.captions.update ? "addtrack removetrack" : "removetrack";
							dh.call(this, this.media.textTracks, r, af.update.bind(this))
						}
						setTimeout(af.update.bind(this), 0)
					}
			},
			update: function() {
				var e = this,
					t = af.getTracks.call(this, !0),
					n = this.captions,
					i = n.active,
					r = n.language,
					o = n.meta,
					a = n.currentTrackNode,
					s = Boolean(t.find((function(e) {
						return e.language === r
					})));
				this.isHTML5 && this.isVideo && t.filter((function(e) {
					return !o.get(e)
				})).forEach((function(t) {
					e.debug.log("Track added", t), o.set(t, {
						default: "showing" === t.mode
					}), "showing" === t.mode && (t.mode = "hidden"), dh.call(e, t, "cuechange", (function() {
						return af.updateCues.call(e)
					}))
				})), (s && this.language !== r || !t.includes(a)) && (af.setLanguage.call(this, r), af.toggle.call(this, i && s)), nh(this.elements.container, this.config.classNames.captions.enabled, !Uu(t)), Ou(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && nf.setCaptionsMenu.call(this)
			},
			toggle: function(e) {
				var t = this,
					n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				if (this.supported.ui) {
					var i = this.captions.toggled,
						r = this.config.classNames.captions.active,
						o = Su(e) ? !i : e;
					if (o !== i) {
						if (n || (this.captions.active = o, this.storage.set({
								captions: o
							})), !this.language && o && !n) {
							var a = af.getTracks.call(this),
								s = af.findTrack.call(this, [this.captions.language].concat(Ba(this.captions.languages)), !0);
							return this.captions.language = s.language, void af.set.call(this, a.indexOf(s))
						}
						this.elements.buttons.captions && (this.elements.buttons.captions.pressed = o), nh(this.elements.container, r, o), this.captions.toggled = o, nf.updateSetting.call(this, "captions"), gh.call(this, this.media, o ? "captionsenabled" : "captionsdisabled")
					}
					setTimeout((function() {
						o && t.captions.toggled && (t.captions.currentTrackNode.mode = "hidden")
					}))
				}
			},
			set: function(e) {
				var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
					n = af.getTracks.call(this);
				if (-1 !== e)
					if (Au(e))
						if (e in n) {
							if (this.captions.currentTrack !== e) {
								this.captions.currentTrack = e;
								var i = n[e],
									r = i || {},
									o = r.language;
								this.captions.currentTrackNode = i, nf.updateSetting.call(this, "captions"), t || (this.captions.language = o, this.storage.set({
									language: o
								})), this.isVimeo && this.embed.enableTextTrack(o), gh.call(this, this.media, "languagechange")
							}
							af.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && af.updateCues.call(this)
						} else this.debug.warn("Track not found", e);
				else this.debug.warn("Invalid caption argument", e);
				else af.toggle.call(this, !1, t)
			},
			setLanguage: function(e) {
				var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				if (Cu(e)) {
					var n = e.toLowerCase();
					this.captions.language = n;
					var i = af.getTracks.call(this),
						r = af.findTrack.call(this, [n]);
					af.set.call(this, i.indexOf(r), t)
				} else this.debug.warn("Invalid language argument", e)
			},
			getTracks: function() {
				var e = this,
					t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					n = Array.from((this.media || {}).textTracks || []);
				return n.filter((function(n) {
					return !e.isHTML5 || t || e.captions.meta.has(n)
				})).filter((function(e) {
					return ["captions", "subtitles"].includes(e.kind)
				}))
			},
			findTrack: function(e) {
				var t, n = this,
					i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					r = af.getTracks.call(this),
					o = function(e) {
						return Number((n.captions.meta.get(e) || {}).default)
					},
					a = Array.from(r).sort((function(e, t) {
						return o(t) - o(e)
					}));
				return e.every((function(e) {
					return !(t = a.find((function(t) {
						return t.language === e
					})))
				})), t || (i ? a[0] : void 0)
			},
			getCurrentTrack: function() {
				return af.getTracks.call(this)[this.currentTrack]
			},
			getLabel: function(e) {
				var t = e;
				return !Ru(t) && uh.textTracks && this.captions.toggled && (t = af.getCurrentTrack.call(this)), Ru(t) ? Uu(t.label) ? Uu(t.language) ? Kh("enabled", this.config) : e.language.toUpperCase() : t.label : Kh("disabled", this.config)
			},
			updateCues: function(e) {
				if (this.supported.ui)
					if (Lu(this.elements.captions))
						if (Su(e) || Array.isArray(e)) {
							var t = e;
							if (!t) {
								var n = af.getCurrentTrack.call(this);
								t = Array.from((n || {}).activeCues || []).map((function(e) {
									return e.getCueAsHTML()
								})).map(zh)
							}
							var i = t.map((function(e) {
								return e.trim()
							})).join("\n");
							if (i !== this.elements.captions.innerHTML) {
								Ju(this.elements.captions);
								var r = Gu("span", eh(this.config.selectors.caption));
								r.innerHTML = i, this.elements.captions.appendChild(r), gh.call(this, this.media, "cuechange")
							}
						} else this.debug.warn("updateCues: Invalid input", e);
				else this.debug.warn("No captions element to render to")
			}
		},
		sf = {
			enabled: !0,
			title: "",
			debug: !1,
			autoplay: !1,
			autopause: !0,
			playsinline: !0,
			seekTime: 10,
			volume: 1,
			muted: !1,
			duration: null,
			displayDuration: !0,
			invertTime: !0,
			toggleInvert: !0,
			ratio: null,
			clickToPlay: !0,
			hideControls: !0,
			resetOnEnd: !1,
			disableContextMenu: !0,
			loadSprite: !0,
			iconPrefix: "plyr",
			//iconUrl: "https://cdn.plyr.io/3.6.3/plyr.svg",
			iconUrl: "https://cdn.plyr.io/3.6.3/plyr.svg",
			blankVideo: "https://cdn.plyr.io/static/blank.mp4",
			quality: {
				default: 576,
				options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
				forced: !1,
				onChange: null
			},
			loop: {
				active: !1
			},
			speed: {
				selected: 1,
				options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
			},
			keyboard: {
				focused: !0,
				global: !1
			},
			tooltips: {
				controls: !1,
				seek: !0
			},
			captions: {
				active: !1,
				language: "auto",
				update: !1
			},
			fullscreen: {
				enabled: !0,
				fallback: !0,
				iosNative: !1
			},
			storage: {
				enabled: !0,
				key: "plyr"
			},
			controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions",/* "settings", "pip",*/ "airplay", "fullscreen"],
			settings: ["captions", "quality", "speed"],
			i18n: {
				restart: "Restart",
				rewind: "Rewind {seektime}s",
				play: "Play",
				pause: "Pause",
				fastForward: "Forward {seektime}s",
				seek: "Seek",
				seekLabel: "{currentTime} of {duration}",
				played: "Played",
				buffered: "Buffered",
				currentTime: "Current time",
				duration: "Duration",
				volume: "Volume",
				mute: "Mute",
				unmute: "Unmute",
				enableCaptions: "Enable captions",
				disableCaptions: "Disable captions",
				download: "Download",
				enterFullscreen: "Enter fullscreen",
				exitFullscreen: "Exit fullscreen",
				frameTitle: "Player for {title}",
				captions: "Captions",
				settings: "Settings",
				pip: "PIP",
				menuBack: "Go back to previous menu",
				speed: "Speed",
				normal: "Normal",
				quality: "Quality",
				loop: "Loop",
				start: "Start",
				end: "End",
				all: "All",
				reset: "Reset",
				disabled: "Disabled",
				enabled: "Enabled",
				advertisement: "Ad",
				qualityBadge: {
					2160: "4K",
					1440: "HD",
					1080: "HD",
					720: "HD",
					576: "SD",
					480: "SD"
				}
			},
			urls: {
				download: null,
				vimeo: {
					sdk: "https://player.vimeo.com/api/player.js",
					iframe: "https://player.vimeo.com/video/{0}?{1}",
					api: "https://vimeo.com/api/oembed.json?url={0}"
				},
				youtube: {
					sdk: "https://www.youtube.com/iframe_api",
					api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
				},
				googleIMA: {
					sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
				}
			},
			listeners: {
				seek: null,
				play: null,
				pause: null,
				restart: null,
				rewind: null,
				fastForward: null,
				mute: null,
				volume: null,
				captions: null,
				download: null,
				fullscreen: null,
				pip: null,
				airplay: null,
				speed: null,
				quality: null,
				loop: null,
				language: null
			},
			events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
			selectors: {
				editable: "input, textarea, select, [contenteditable]",
				container: ".plyr",
				controls: {
					container: null,
					wrapper: ".plyr__controls"
				},
				labels: "[data-plyr]",
				buttons: {
					play: '[data-plyr="play"]',
					pause: '[data-plyr="pause"]',
					restart: '[data-plyr="restart"]',
					rewind: '[data-plyr="rewind"]',
					fastForward: '[data-plyr="fast-forward"]',
					mute: '[data-plyr="mute"]',
					captions: '[data-plyr="captions"]',
					download: '[data-plyr="download"]',
					fullscreen: '[data-plyr="fullscreen"]',
					pip: '[data-plyr="pip"]',
					airplay: '[data-plyr="airplay"]',
					settings: '[data-plyr="settings"]',
					loop: '[data-plyr="loop"]'
				},
				inputs: {
					seek: '[data-plyr="seek"]',
					volume: '[data-plyr="volume"]',
					speed: '[data-plyr="speed"]',
					language: '[data-plyr="language"]',
					quality: '[data-plyr="quality"]'
				},
				display: {
					currentTime: ".plyr__time--current",
					duration: ".plyr__time--duration",
					buffer: ".plyr__progress__buffer",
					loop: ".plyr__progress__loop",
					volume: ".plyr__volume--display"
				},
				progress: ".plyr__progress",
				captions: ".plyr__captions",
				caption: ".plyr__caption"
			},
			classNames: {
				type: "plyr--{0}",
				provider: "plyr--{0}",
				video: "plyr__video-wrapper",
				embed: "plyr__video-embed",
				videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
				embedContainer: "plyr__video-embed__container",
				poster: "plyr__poster",
				posterEnabled: "plyr__poster-enabled",
				ads: "plyr__ads",
				control: "plyr__control",
				controlPressed: "plyr__control--pressed",
				playing: "plyr--playing",
				paused: "plyr--paused",
				stopped: "plyr--stopped",
				loading: "plyr--loading",
				hover: "plyr--hover",
				tooltip: "plyr__tooltip",
				cues: "plyr__cues",
				hidden: "plyr__sr-only",

				hideControls: "plyr--hide-controls",
				isIos: "plyr--is-ios",
				isTouch: "plyr--is-touch",
				uiSupported: "plyr--full-ui",
				noTransition: "plyr--no-transition",
				display: {
					time: "plyr__time"
				},
				menu: {
					value: "plyr__menu__value",
					badge: "plyr__badge",
					open: "plyr--menu-open"
				},
				captions: {
					enabled: "plyr--captions-enabled",
					active: "plyr--captions-active"
				},
				fullscreen: {
					enabled: "plyr--fullscreen-enabled",
					fallback: "plyr--fullscreen-fallback"
				},
				pip: {
					supported: "plyr--pip-supported",
					active: "plyr--pip-active"
				},
				airplay: {
					supported: "plyr--airplay-supported",
					active: "plyr--airplay-active"
				},
				tabFocus: "plyr__tab-focus",
				previewThumbnails: {
					thumbContainer: "plyr__preview-thumb",
					thumbContainerShown: "plyr__preview-thumb--is-shown",
					imageContainer: "plyr__preview-thumb__image-container",
					timeContainer: "plyr__preview-thumb__time-container",
					scrubbingContainer: "plyr__preview-scrubbing",
					scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
				}
			},
			attributes: {
				embed: {
					provider: "data-plyr-provider",
					id: "data-plyr-embed-id"
				}
			},
			ads: {
				enabled: !1,
				publisherId: "",
				tagUrl: ""
			},
			previewThumbnails: {
				enabled: !1,
				src: ""
			},
			vimeo: {
				byline: !1,
				portrait: !1,
				title: !1,
				speed: !0,
				transparent: !1,
				customControls: !0,
				referrerPolicy: null,
				premium: !1
			},
			youtube: {
				rel: 0,
				showinfo: 0,
				iv_load_policy: 3,
				modestbranding: 1,
				customControls: !0,
				noCookie: !1
			}
		},
		lf = "picture-in-picture",
		cf = "inline",
		uf = {
			html5: "html5",
			youtube: "youtube",
			vimeo: "vimeo"
		},
		hf = "audio",
		ff = "video";
	var df = function() {},
		pf = function() {
			function e() {
				var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				Ra(this, e), this.enabled = window.console && t, this.enabled && this.log("Debugging enabled")
			}
			return _a(e, [{
				key: "log",
				get: function() {
					return this.enabled ? Function.prototype.bind.call(console.log, console) : df
				}
			}, {
				key: "warn",
				get: function() {
					return this.enabled ? Function.prototype.bind.call(console.warn, console) : df
				}
			}, {
				key: "error",
				get: function() {
					return this.enabled ? Function.prototype.bind.call(console.error, console) : df
				}
			}]), e
		}(),
		mf = function() {
			function e(t) {
				var n = this;
				Ra(this, e), this.player = t, this.prefix = e.prefix, this.property = e.property, this.scrollPosition = {
					x: 0,
					y: 0
				}, this.forceFallback = "force" === t.config.fullscreen.fallback, this.player.elements.fullscreen = t.config.fullscreen.container && function(e, t) {
					return (Element.prototype.closest || function() {
						var e = this;
						do {
							if (rh.matches(e, t)) return e;
							e = e.parentElement || e.parentNode
						} while (null !== e && 1 === e.nodeType);
						return null
					}).call(e, t)
				}(this.player.elements.container, t.config.fullscreen.container), dh.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), (function() {
					n.onChange()
				})), dh.call(this.player, this.player.elements.container, "dblclick", (function(e) {
					Lu(n.player.elements.controls) && n.player.elements.controls.contains(e.target) || n.player.listeners.proxy(e, n.toggle, "fullscreen")
				})), dh.call(this, this.player.elements.container, "keydown", (function(e) {
					return n.trapFocus(e)
				})), this.update()
			}
			return _a(e, [{
				key: "onChange",
				value: function() {
					if (this.enabled) {
						var e = this.player.elements.buttons.fullscreen;
						Lu(e) && (e.pressed = this.active);
						var t = this.target === this.player.media ? this.target : this.player.elements.container;
						gh.call(this.player, t, this.active ? "enterfullscreen" : "exitfullscreen", !0)
					}
				}
			}, {
				key: "toggleFallback",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					if (e ? this.scrollPosition = {
							x: window.scrollX || 0,
							y: window.scrollY || 0
						} : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", nh(this.target, this.player.config.classNames.fullscreen.fallback, e), qu.isIos) {
						var t = document.head.querySelector('meta[name="viewport"]'),
							n = "viewport-fit=cover";
						t || (t = document.createElement("meta")).setAttribute("name", "viewport");
						var i = Cu(t.content) && t.content.includes(n);
						e ? (this.cleanupViewport = !i, i || (t.content += ",".concat(n))) : this.cleanupViewport && (t.content = t.content.split(",").filter((function(e) {
							return e.trim() !== n
						})).join(","))
					}
					this.onChange()
				}
			}, {
				key: "trapFocus",
				value: function(e) {
					if (!qu.isIos && this.active && "Tab" === e.key && 9 === e.keyCode) {
						var t = document.activeElement,
							n = oh.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
							i = Ha(n, 1)[0],
							r = n[n.length - 1];
						t !== r || e.shiftKey ? t === i && e.shiftKey && (r.focus(), e.preventDefault()) : (i.focus(), e.preventDefault())
					}
				}
			}, {
				key: "update",
				value: function() {
					var t;
					this.enabled ? (t = this.forceFallback ? "Fallback (forced)" : e.native ? "Native" : "Fallback", this.player.debug.log("".concat(t, " fullscreen enabled"))) : this.player.debug.log("Fullscreen not supported and fallback disabled");
					nh(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
				}
			}, {
				key: "enter",
				value: function() {
					this.enabled && (qu.isIos && this.player.config.fullscreen.iosNative ? this.target.webkitEnterFullscreen() : !e.native || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? Uu(this.prefix) || this.target["".concat(this.prefix, "Request").concat(this.property)]() : this.target.requestFullscreen({
						navigationUI: "hide"
					}))
				}
			}, {
				key: "exit",
				value: function() {
					if (this.enabled)
						if (qu.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), bh(this.player.play());
						else if (!e.native || this.forceFallback) this.toggleFallback(!1);
					else if (this.prefix) {
						if (!Uu(this.prefix)) {
							var t = "moz" === this.prefix ? "Cancel" : "Exit";
							document["".concat(this.prefix).concat(t).concat(this.property)]()
						}
					} else(document.cancelFullScreen || document.exitFullscreen).call(document)
				}
			}, {
				key: "toggle",
				value: function() {
					this.active ? this.exit() : this.enter()
				}
			}, {
				key: "usingNative",
				get: function() {
					return e.native && !this.forceFallback
				}
			}, {
				key: "enabled",
				get: function() {
					return (e.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
				}
			}, {
				key: "active",
				get: function() {
					if (!this.enabled) return !1;
					if (!e.native || this.forceFallback) return ih(this.target, this.player.config.classNames.fullscreen.fallback);
					var t = this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement;
					return t && t.shadowRoot ? t === this.target.getRootNode().host : t === this.target
				}
			}, {
				key: "target",
				get: function() {
					return qu.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container
				}
			}], [{
				key: "native",
				get: function() {
					return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
				}
			}, {
				key: "prefix",
				get: function() {
					if (xu(document.exitFullscreen)) return "";
					var e = "";
					return ["webkit", "moz", "ms"].some((function(t) {
						return !(!xu(document["".concat(t, "ExitFullscreen")]) && !xu(document["".concat(t, "CancelFullScreen")])) && (e = t, !0)
					})), e
				}
			}, {
				key: "property",
				get: function() {
					return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
				}
			}]), e
		}(),
		gf = Math.sign || function(e) {
			return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
		};

	function vf(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
		return new Promise((function(n, i) {
			var r = new Image,
				o = function() {
					delete r.onload, delete r.onerror, (r.naturalWidth >= t ? n : i)(r)
				};
			Object.assign(r, {
				onload: o,
				onerror: o,
				src: e
			})
		}))
	}
	Le({
		target: "Math",
		stat: !0
	}, {
		sign: gf
	});
	var yf = {
			addStyleHook: function() {
				nh(this.elements.container, this.config.selectors.container.replace(".", ""), !0), nh(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
			},
			toggleNativeControls: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
			},
			build: function() {
				var e = this;
				if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void yf.toggleNativeControls.call(this, !0);
				Lu(this.elements.controls) || (nf.inject.call(this), this.listeners.controls()), yf.toggleNativeControls.call(this), this.isHTML5 && af.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, nf.updateVolume.call(this), nf.timeUpdate.call(this), yf.checkPlaying.call(this), nh(this.elements.container, this.config.classNames.pip.supported, uh.pip && this.isHTML5 && this.isVideo), nh(this.elements.container, this.config.classNames.airplay.supported, uh.airplay && this.isHTML5), nh(this.elements.container, this.config.classNames.isIos, qu.isIos), nh(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout((function() {
					gh.call(e, e.media, "ready")
				}), 0), yf.setTitle.call(this), this.poster && yf.setPoster.call(this, this.poster, !1).catch((function() {})), this.config.duration && nf.durationUpdate.call(this)
			},
			setTitle: function() {
				var e = Kh("play", this.config);
				if (Cu(this.config.title) && !Uu(this.config.title) && (e += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach((function(t) {
						t.setAttribute("aria-label", e)
					})), this.isEmbed) {
					var t = ah.call(this, "iframe");
					if (!Lu(t)) return;
					var n = Uu(this.config.title) ? "video" : this.config.title,
						i = Kh("frameTitle", this.config);
					t.setAttribute("title", i.replace("{title}", n))
				}
			},
			togglePoster: function(e) {
				nh(this.elements.container, this.config.classNames.posterEnabled, e)
			},
			setPoster: function(e) {
				var t = this,
					n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return n && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e), this.elements.poster.removeAttribute("hidden"), yh.call(this).then((function() {
					return vf(e)
				})).catch((function(n) {
					throw e === t.poster && yf.togglePoster.call(t, !1), n
				})).then((function() {
					if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster")
				})).then((function() {
					return Object.assign(t.elements.poster.style, {
						backgroundImage: "url('".concat(e, "')"),
						backgroundSize: ""
					}), yf.togglePoster.call(t, !0), e
				})))
			},
			checkPlaying: function(e) {
				var t = this;
				nh(this.elements.container, this.config.classNames.playing, this.playing), nh(this.elements.container, this.config.classNames.paused, this.paused), nh(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((function(e) {
					Object.assign(e, {
						pressed: t.playing
					}), e.setAttribute("aria-label", Kh(t.playing ? "pause" : "play", t.config))
				})), ju(e) && "timeupdate" === e.type || yf.toggleControls.call(this)
			},
			checkLoading: function(e) {
				var t = this;
				this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout((function() {
					nh(t.elements.container, t.config.classNames.loading, t.loading), yf.toggleControls.call(t)
				}), this.loading ? 250 : 0)
			},
			toggleControls: function(e) {
				var t = this.elements.controls;
				if (t && this.config.hideControls) {
					var n = this.touch && this.lastSeekTime + 2e3 > Date.now();
					this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || n))
				}
			},
			migrateStyles: function() {
				var e = this;
				Object.values(Fa({}, this.media.style)).filter((function(e) {
					return !Uu(e) && Cu(e) && e.startsWith("--plyr")
				})).forEach((function(t) {
					e.elements.container.style.setProperty(t, e.media.style.getPropertyValue(t)), e.media.style.removeProperty(t)
				})), Uu(this.media.style) && this.media.removeAttribute("style")
			}
		},
		bf = function() {
			function e(t) {
				Ra(this, e), this.player = t, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this)
			}
			return _a(e, [{
				key: "handleKey",
				value: function(e) {
					var t = this.player,
						n = t.elements,
						i = e.keyCode ? e.keyCode : e.which,
						r = "keydown" === e.type,
						o = r && i === this.lastKey;
					if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && Au(i)) {
						if (r) {
							var a = document.activeElement;
							if (Lu(a)) {
								var s = t.config.selectors.editable;
								if (a !== n.inputs.seek && rh(a, s)) return;
								if (32 === e.which && rh(a, 'button, [role^="menuitem"]')) return
							}
							switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(i) && (e.preventDefault(), e.stopPropagation()), i) {
								case 48:
								case 49:
								case 50:
								case 51:
								case 52:
								case 53:
								case 54:
								case 55:
								case 56:
								case 57:
									o || (t.currentTime = t.duration / 10 * (i - 48));
									break;
								case 32:
								case 75:
									o || bh(t.togglePlay());
									break;
								case 38:
									t.increaseVolume(.1);
									break;
								case 40:
									t.decreaseVolume(.1);
									break;
								case 77:
									o || (t.muted = !t.muted);
									break;
								case 39:
									t.forward();
									break;
								case 37:
									t.rewind();
									break;
								case 70:
									t.fullscreen.toggle();
									break;
								case 67:
									o || t.toggleCaptions();
									break;
								case 76:
									t.loop = !t.loop
							}
							27 === i && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = i
						} else this.lastKey = null
					}
				}
			}, {
				key: "toggleMenu",
				value: function(e) {
					nf.toggleMenu.call(this.player, e)
				}
			}, {
				key: "firstTouch",
				value: function() {
					var e = this.player,
						t = e.elements;
					e.touch = !0, nh(t.container, e.config.classNames.isTouch, !0)
				}
			}, {
				key: "setTabFocus",
				value: function(e) {
					var t = this.player,
						n = t.elements;
					if (clearTimeout(this.focusTimer), "keydown" !== e.type || 9 === e.which) {
						"keydown" === e.type && (this.lastKeyDown = e.timeStamp);
						var i, r = e.timeStamp - this.lastKeyDown <= 20;
						if ("focus" !== e.type || r) i = t.config.classNames.tabFocus, nh(oh.call(t, ".".concat(i)), i, !1), "focusout" !== e.type && (this.focusTimer = setTimeout((function() {
							var e = document.activeElement;
							n.container.contains(e) && nh(document.activeElement, t.config.classNames.tabFocus, !0)
						}), 10))
					}
				}
			}, {
				key: "global",
				value: function() {
					var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = this.player;
					t.config.keyboard.global && fh.call(t, window, "keydown keyup", this.handleKey, e, !1), fh.call(t, document.body, "click", this.toggleMenu, e), mh.call(t, document.body, "touchstart", this.firstTouch), fh.call(t, document.body, "keydown focus blur focusout", this.setTabFocus, e, !1, !0)
				}
			}, {
				key: "container",
				value: function() {
					var e = this.player,
						t = e.config,
						n = e.elements,
						i = e.timers;
					!t.keyboard.global && t.keyboard.focused && dh.call(e, n.container, "keydown keyup", this.handleKey, !1), dh.call(e, n.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (function(t) {
						var r = n.controls;
						r && "enterfullscreen" === t.type && (r.pressed = !1, r.hover = !1);
						var o = 0;
						["touchstart", "touchmove", "mousemove"].includes(t.type) && (yf.toggleControls.call(e, !0), o = e.touch ? 3e3 : 2e3), clearTimeout(i.controls), i.controls = setTimeout((function() {
							return yf.toggleControls.call(e, !1)
						}), o)
					}));
					var r = function(t) {
							if (!t) return Sh.call(e);
							var i = n.container.getBoundingClientRect(),
								r = i.width,
								o = i.height;
							return Sh.call(e, "".concat(r, ":").concat(o))
						},
						o = function() {
							clearTimeout(i.resized), i.resized = setTimeout(r, 50)
						};
					dh.call(e, n.container, "enterfullscreen exitfullscreen", (function(t) {
						var i = e.fullscreen,
							a = i.target,
							s = i.usingNative;
						if (a === n.container && (e.isEmbed || !Uu(e.config.ratio))) {
							var l = "enterfullscreen" === t.type,
								c = r(l);
							c.padding;
							! function(t, n, i) {
								if (e.isVimeo && !e.config.vimeo.premium) {
									var r = e.elements.wrapper.firstChild,
										o = Ha(t, 2)[1],
										a = Ha(Th.call(e), 2),
										s = a[0],
										l = a[1];
									r.style.maxWidth = i ? "".concat(o / l * s, "px") : null, r.style.margin = i ? "0 auto" : null
								}
							}(c.ratio, 0, l), l && setTimeout((function() {
								return Fu(n.container)
							}), 100), s || (l ? dh.call(e, window, "resize", o) : ph.call(e, window, "resize", o))
						}
					}))
				}
			}, {
				key: "media",
				value: function() {
					var e = this,
						t = this.player,
						n = t.elements;
					if (dh.call(t, t.media, "timeupdate seeking seeked", (function(e) {
							return nf.timeUpdate.call(t, e)
						})), dh.call(t, t.media, "durationchange loadeddata loadedmetadata", (function(e) {
							return nf.durationUpdate.call(t, e)
						})), dh.call(t, t.media, "ended", (function() {
							t.isHTML5 && t.isVideo && t.config.resetOnEnd && (t.restart(), t.pause())
						})), dh.call(t, t.media, "progress playing seeking seeked", (function(e) {
							return nf.updateProgress.call(t, e)
						})), dh.call(t, t.media, "volumechange", (function(e) {
							return nf.updateVolume.call(t, e)
						})), dh.call(t, t.media, "playing play pause ended emptied timeupdate", (function(e) {
							return yf.checkPlaying.call(t, e)
						})), dh.call(t, t.media, "waiting canplay seeked playing", (function(e) {
							return yf.checkLoading.call(t, e)
						})), t.supported.ui && t.config.clickToPlay && !t.isAudio) {
						var i = ah.call(t, ".".concat(t.config.classNames.video));
						if (!Lu(i)) return;
						dh.call(t, n.container, "click", (function(r) {
							([n.container, i].includes(r.target) || i.contains(r.target)) && (t.touch && t.config.hideControls || (t.ended ? (e.proxy(r, t.restart, "restart"), e.proxy(r, (function() {
								bh(t.play())
							}), "play")) : e.proxy(r, (function() {
								bh(t.togglePlay())
							}), "play")))
						}))
					}
					t.supported.ui && t.config.disableContextMenu && dh.call(t, n.wrapper, "contextmenu", (function(e) {
						e.preventDefault()
					}), !1), dh.call(t, t.media, "volumechange", (function() {
						t.storage.set({
							volume: t.volume,
							muted: t.muted
						})
					})), dh.call(t, t.media, "ratechange", (function() {
						nf.updateSetting.call(t, "speed"), t.storage.set({
							speed: t.speed
						})
					})), dh.call(t, t.media, "qualitychange", (function(e) {
						nf.updateSetting.call(t, "quality", null, e.detail.quality)
					})), dh.call(t, t.media, "ready qualitychange", (function() {
						nf.setDownloadUrl.call(t)
					}));
					var r = t.config.events.concat(["keyup", "keydown"]).join(" ");
					dh.call(t, t.media, r, (function(e) {
						var i = e.detail,
							r = void 0 === i ? {} : i;
						"error" === e.type && (r = t.media.error), gh.call(t, n.container, e.type, !0, r)
					}))
				}
			}, {
				key: "proxy",
				value: function(e, t, n) {
					var i = this.player,
						r = i.config.listeners[n],
						o = !0;
					xu(r) && (o = r.call(i, e)), !1 !== o && xu(t) && t.call(i, e)
				}
			}, {
				key: "bind",
				value: function(e, t, n, i) {
					var r = this,
						o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
						a = this.player,
						s = a.config.listeners[i],
						l = xu(s);
					dh.call(a, e, t, (function(e) {
						return r.proxy(e, n, i)
					}), o && !l)
				}
			}, {
				key: "controls",
				value: function() {
					var e = this,
						t = this.player,
						n = t.elements,
						i = qu.isIE ? "change" : "input";
					if (n.buttons.play && Array.from(n.buttons.play).forEach((function(n) {
							e.bind(n, "click", (function() {
								bh(t.togglePlay())
							}), "play")
						})), this.bind(n.buttons.restart, "click", t.restart, "restart"), this.bind(n.buttons.rewind, "click", (function() {
							t.lastSeekTime = Date.now(), t.rewind()
						}), "rewind"), this.bind(n.buttons.fastForward, "click", (function() {
							t.lastSeekTime = Date.now(), t.forward()
						}), "fastForward"), this.bind(n.buttons.mute, "click", (function() {
							t.muted = !t.muted
						}), "mute"), this.bind(n.buttons.captions, "click", (function() {
							return t.toggleCaptions()
						})), this.bind(n.buttons.download, "click", (function() {
							gh.call(t, t.media, "download")
						}), "download"), this.bind(n.buttons.fullscreen, "click", (function() {
							t.fullscreen.toggle()
						}), "fullscreen"), this.bind(n.buttons.pip, "click", (function() {
							t.pip = "toggle"
						}), "pip"), this.bind(n.buttons.airplay, "click", t.airplay, "airplay"), this.bind(n.buttons.settings, "click", (function(e) {
							e.stopPropagation(), e.preventDefault(), nf.toggleMenu.call(t, e)
						}), null, !1), this.bind(n.buttons.settings, "keyup", (function(e) {
							var n = e.which;
							[13, 32].includes(n) && (13 !== n ? (e.preventDefault(), e.stopPropagation(), nf.toggleMenu.call(t, e)) : nf.focusFirstMenuItem.call(t, null, !0))
						}), null, !1), this.bind(n.settings.menu, "keydown", (function(e) {
							27 === e.which && nf.toggleMenu.call(t, e)
						})), this.bind(n.inputs.seek, "mousedown mousemove", (function(e) {
							var t = n.progress.getBoundingClientRect(),
								i = 100 / t.width * (e.pageX - t.left);
							e.currentTarget.setAttribute("seek-value", i)
						})), this.bind(n.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (function(e) {
							var n = e.currentTarget,
								i = e.keyCode ? e.keyCode : e.which,
								r = "play-on-seeked";
							if (!Nu(e) || 39 === i || 37 === i) {
								t.lastSeekTime = Date.now();
								var o = n.hasAttribute(r),
									a = ["mouseup", "touchend", "keyup"].includes(e.type);
								o && a ? (n.removeAttribute(r), bh(t.play())) : !a && t.playing && (n.setAttribute(r, ""), t.pause())
							}
						})), qu.isIos) {
						var r = oh.call(t, 'input[type="range"]');
						Array.from(r).forEach((function(t) {
							return e.bind(t, i, (function(e) {
								return Fu(e.target)
							}))
						}))
					}
					this.bind(n.inputs.seek, i, (function(e) {
						var n = e.currentTarget,
							i = n.getAttribute("seek-value");
						Uu(i) && (i = n.value), n.removeAttribute("seek-value"), t.currentTime = i / n.max * t.duration
					}), "seek"), this.bind(n.progress, "mouseenter mouseleave mousemove", (function(e) {
						return nf.updateSeekTooltip.call(t, e)
					})), this.bind(n.progress, "mousemove touchmove", (function(e) {
						var n = t.previewThumbnails;
						n && n.loaded && n.startMove(e)
					})), this.bind(n.progress, "mouseleave touchend click", (function() {
						var e = t.previewThumbnails;
						e && e.loaded && e.endMove(!1, !0)
					})), this.bind(n.progress, "mousedown touchstart", (function(e) {
						var n = t.previewThumbnails;
						n && n.loaded && n.startScrubbing(e)
					})), this.bind(n.progress, "mouseup touchend", (function(e) {
						var n = t.previewThumbnails;
						n && n.loaded && n.endScrubbing(e)
					})), qu.isWebkit && Array.from(oh.call(t, 'input[type="range"]')).forEach((function(n) {
						e.bind(n, "input", (function(e) {
							return nf.updateRangeFill.call(t, e.target)
						}))
					})), t.config.toggleInvert && !Lu(n.display.duration) && this.bind(n.display.currentTime, "click", (function() {
						0 !== t.currentTime && (t.config.invertTime = !t.config.invertTime, nf.timeUpdate.call(t))
					})), this.bind(n.inputs.volume, i, (function(e) {
						t.volume = e.target.value
					}), "volume"), this.bind(n.controls, "mouseenter mouseleave", (function(e) {
						n.controls.hover = !t.touch && "mouseenter" === e.type
					})), n.fullscreen && Array.from(n.fullscreen.children).filter((function(e) {
						return !e.contains(n.container)
					})).forEach((function(i) {
						e.bind(i, "mouseenter mouseleave", (function(e) {
							n.controls.hover = !t.touch && "mouseenter" === e.type
						}))
					})), this.bind(n.controls, "mousedown mouseup touchstart touchend touchcancel", (function(e) {
						n.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
					})), this.bind(n.controls, "focusin", (function() {
						var i = t.config,
							r = t.timers;
						nh(n.controls, i.classNames.noTransition, !0), yf.toggleControls.call(t, !0), setTimeout((function() {
							nh(n.controls, i.classNames.noTransition, !1)
						}), 0);
						var o = e.touch ? 3e3 : 4e3;
						clearTimeout(r.controls), r.controls = setTimeout((function() {
							return yf.toggleControls.call(t, !1)
						}), o)
					})), this.bind(n.inputs.volume, "wheel", (function(e) {
						var n = e.webkitDirectionInvertedFromDevice,
							i = Ha([e.deltaX, -e.deltaY].map((function(e) {
								return n ? -e : e
							})), 2),
							r = i[0],
							o = i[1],
							a = Math.sign(Math.abs(r) > Math.abs(o) ? r : o);
						t.increaseVolume(a / 50);
						var s = t.media.volume;
						(1 === a && s < 1 || -1 === a && s > 0) && e.preventDefault()
					}), "volume", !1)
				}
			}]), e
		}(),
		wf = Jn("splice"),
		kf = Zt("splice", {
			ACCESSORS: !0,
			0: 0,
			1: 2
		}),
		Tf = Math.max,
		Sf = Math.min,
		Ef = 9007199254740991,
		Af = "Maximum allowed length exceeded";
	Le({
		target: "Array",
		proto: !0,
		forced: !wf || !kf
	}, {
		splice: function(e, t) {
			var n, i, r, o, a, s, l = Me(this),
				c = ce(l.length),
				u = fe(e, c),
				h = arguments.length;
			if (0 === h ? n = i = 0 : 1 === h ? (n = 0, i = c - u) : (n = h - 2, i = Sf(Tf(se(t), 0), c - u)), c + n - i > Ef) throw TypeError(Af);
			for (r = st(l, i), o = 0; o < i; o++)(a = u + o) in l && Wn(r, o, l[a]);
			if (r.length = i, n < i) {
				for (o = u; o < c - i; o++) s = o + n, (a = o + i) in l ? l[s] = l[a] : delete l[s];
				for (o = c; o > c - i + n; o--) delete l[o - 1]
			} else if (n > i)
				for (o = c - i; o > u; o--) s = o + n - 1, (a = o + i - 1) in l ? l[s] = l[a] : delete l[s];
			for (o = 0; o < n; o++) l[o + u] = arguments[o + 2];
			return l.length = c - i + n, r
		}
	});
	var Cf = t((function(e, t) {
		e.exports = function() {
			var e = function() {},
				t = {},
				n = {},
				i = {};

			function r(e, t) {
				e = e.push ? e : [e];
				var r, o, a, s = [],
					l = e.length,
					c = l;
				for (r = function(e, n) {
						n.length && s.push(e), --c || t(s)
					}; l--;) o = e[l], (a = n[o]) ? r(o, a) : (i[o] = i[o] || []).push(r)
			}

			function o(e, t) {
				if (e) {
					var r = i[e];
					if (n[e] = t, r)
						for (; r.length;) r[0](e, t), r.splice(0, 1)
				}
			}

			function a(t, n) {
				t.call && (t = {
					success: t
				}), n.length ? (t.error || e)(n) : (t.success || e)(t)
			}

			function s(t, n, i, r) {
				var o, a, l = document,
					c = i.async,
					u = (i.numRetries || 0) + 1,
					h = i.before || e,
					f = t.replace(/[\?|#].*$/, ""),
					d = t.replace(/^(css|img)!/, "");
				r = r || 0, /(^css!|\.css$)/.test(f) ? ((a = l.createElement("link")).rel = "stylesheet", a.href = d, (o = "hideFocus" in a) && a.relList && (o = 0, a.rel = "preload", a.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(f) ? (a = l.createElement("img")).src = d : ((a = l.createElement("script")).src = t, a.async = void 0 === c || c), a.onload = a.onerror = a.onbeforeload = function(e) {
					var l = e.type[0];
					if (o) try {
						a.sheet.cssText.length || (l = "e")
					} catch (e) {
						18 != e.code && (l = "e")
					}
					if ("e" == l) {
						if ((r += 1) < u) return s(t, n, i, r)
					} else if ("preload" == a.rel && "style" == a.as) return a.rel = "stylesheet";
					n(t, l, e.defaultPrevented)
				}, !1 !== h(t, a) && l.head.appendChild(a)
			}

			function l(e, t, n) {
				var i, r, o = (e = e.push ? e : [e]).length,
					a = o,
					l = [];
				for (i = function(e, n, i) {
						if ("e" == n && l.push(e), "b" == n) {
							if (!i) return;
							l.push(e)
						}--o || t(l)
					}, r = 0; r < a; r++) s(e[r], i, n)
			}

			function c(e, n, i) {
				var r, s;
				if (n && n.trim && (r = n), s = (r ? i : n) || {}, r) {
					if (r in t) throw "LoadJS";
					t[r] = !0
				}

				function c(t, n) {
					l(e, (function(e) {
						a(s, e), t && a({
							success: t,
							error: n
						}, e), o(r, e)
					}), s)
				}
				if (s.returnPromise) return new Promise(c);
				c()
			}
			return c.ready = function(e, t) {
				return r(e, (function(e) {
					a(t, e)
				})), c
			}, c.done = function(e) {
				o(e, [])
			}, c.reset = function() {
				t = {}, n = {}, i = {}
			}, c.isDefined = function(e) {
				return e in t
			}, c
		}()
	}));

	function Pf(e) {
		return new Promise((function(t, n) {
			Cf(e, {
				success: t,
				error: n
			})
		}))
	}

	function xf(e) {
		e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, gh.call(this, this.media, e ? "play" : "pause"))
	}
	var Of = {
		setup: function() {
			var e = this;
			nh(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, Sh.call(e), Eu(window.Vimeo) ? Of.ready.call(e) : Pf(e.config.urls.vimeo.sdk).then((function() {
				Of.ready.call(e)
			})).catch((function(t) {
				e.debug.warn("Vimeo SDK (player.js) failed to load", t)
			}))
		},
		ready: function() {
			var e = this,
				t = this,
				n = t.config.vimeo,
				i = n.premium,
				r = n.referrerPolicy,
				o = qa(n, ["premium", "referrerPolicy"]);
			i && Object.assign(o, {
				controls: !1,
				sidedock: !1
			});
			var a = of(Fa({
					loop: t.config.loop.active,
					autoplay: t.autoplay,
					muted: t.muted,
					gesture: "media",
					playsinline: !this.config.fullscreen.iosNative
				}, o)),
				s = t.media.getAttribute("src");
			Uu(s) && (s = t.media.getAttribute(t.config.attributes.embed.id));
			var l, c = Uu(l = s) ? null : Au(Number(l)) ? l : l.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : l,
				u = Gu("iframe"),
				h = qh(t.config.urls.vimeo.iframe, c, a);
			if (u.setAttribute("src", h), u.setAttribute("allowfullscreen", ""), u.setAttribute("allow", "autoplay,fullscreen,picture-in-picture"), Uu(r) || u.setAttribute("referrerPolicy", r), i || !n.customControls) u.setAttribute("data-poster", t.poster), t.media = Zu(u, t.media);
			else {
				var f = Gu("div", {
					class: t.config.classNames.embedContainer,
					"data-poster": t.poster
				});
				f.appendChild(u), t.media = Zu(f, t.media)
			}
			n.customControls || Yh(qh(t.config.urls.vimeo.api, h)).then((function(e) {
				!Uu(e) && e.thumbnail_url && yf.setPoster.call(t, e.thumbnail_url).catch((function() {}))
			})), t.embed = new window.Vimeo.Player(u, {
				autopause: t.config.autopause,
				muted: t.muted
			}), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function() {
				return xf.call(t, !0), t.embed.play()
			}, t.media.pause = function() {
				return xf.call(t, !1), t.embed.pause()
			}, t.media.stop = function() {
				t.pause(), t.currentTime = 0
			};
			var d = t.media.currentTime;
			Object.defineProperty(t.media, "currentTime", {
				get: function() {
					return d
				},
				set: function(e) {
					var n = t.embed,
						i = t.media,
						r = t.paused,
						o = t.volume,
						a = r && !n.hasPlayed;
					i.seeking = !0, gh.call(t, i, "seeking"), Promise.resolve(a && n.setVolume(0)).then((function() {
						return n.setCurrentTime(e)
					})).then((function() {
						return a && n.pause()
					})).then((function() {
						return a && n.setVolume(o)
					})).catch((function() {}))
				}
			});
			var p = t.config.speed.selected;
			Object.defineProperty(t.media, "playbackRate", {
				get: function() {
					return p
				},
				set: function(e) {
					t.embed.setPlaybackRate(e).then((function() {
						p = e, gh.call(t, t.media, "ratechange")
					})).catch((function() {
						t.options.speed = [1]
					}))
				}
			});
			var m = t.config.volume;
			Object.defineProperty(t.media, "volume", {
				get: function() {
					return m
				},
				set: function(e) {
					t.embed.setVolume(e).then((function() {
						m = e, gh.call(t, t.media, "volumechange")
					}))
				}
			});
			var g = t.config.muted;
			Object.defineProperty(t.media, "muted", {
				get: function() {
					return g
				},
				set: function(e) {
					var n = !!Pu(e) && e;
					t.embed.setVolume(n ? 0 : t.config.volume).then((function() {
						g = n, gh.call(t, t.media, "volumechange")
					}))
				}
			});
			var v, y = t.config.loop;
			Object.defineProperty(t.media, "loop", {
				get: function() {
					return y
				},
				set: function(e) {
					var n = Pu(e) ? e : t.config.loop.active;
					t.embed.setLoop(n).then((function() {
						y = n
					}))
				}
			}), t.embed.getVideoUrl().then((function(e) {
				v = e, nf.setDownloadUrl.call(t)
			})).catch((function(t) {
				e.debug.warn(t)
			})), Object.defineProperty(t.media, "currentSrc", {
				get: function() {
					return v
				}
			}), Object.defineProperty(t.media, "ended", {
				get: function() {
					return t.currentTime === t.duration
				}
			}), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then((function(n) {
				var i = Ha(n, 2),
					r = i[0],
					o = i[1];
				t.embed.ratio = [r, o], Sh.call(e)
			})), t.embed.setAutopause(t.config.autopause).then((function(e) {
				t.config.autopause = e
			})), t.embed.getVideoTitle().then((function(n) {
				t.config.title = n, yf.setTitle.call(e)
			})), t.embed.getCurrentTime().then((function(e) {
				d = e, gh.call(t, t.media, "timeupdate")
			})), t.embed.getDuration().then((function(e) {
				t.media.duration = e, gh.call(t, t.media, "durationchange")
			})), t.embed.getTextTracks().then((function(e) {
				t.media.textTracks = e, af.setup.call(t)
			})), t.embed.on("cuechange", (function(e) {
				var n = e.cues,
					i = (void 0 === n ? [] : n).map((function(e) {
						return function(e) {
							var t = document.createDocumentFragment(),
								n = document.createElement("div");
							return t.appendChild(n), n.innerHTML = e, t.firstChild.innerText
						}(e.text)
					}));
				af.updateCues.call(t, i)
			})), t.embed.on("loaded", (function() {
				(t.embed.getPaused().then((function(e) {
					xf.call(t, !e), e || gh.call(t, t.media, "playing")
				})), Lu(t.embed.element) && t.supported.ui) && t.embed.element.setAttribute("tabindex", -1)
			})), t.embed.on("bufferstart", (function() {
				gh.call(t, t.media, "waiting")
			})), t.embed.on("bufferend", (function() {
				gh.call(t, t.media, "playing")
			})), t.embed.on("play", (function() {
				xf.call(t, !0), gh.call(t, t.media, "playing")
			})), t.embed.on("pause", (function() {
				xf.call(t, !1)
			})), t.embed.on("timeupdate", (function(e) {
				t.media.seeking = !1, d = e.seconds, gh.call(t, t.media, "timeupdate")
			})), t.embed.on("progress", (function(e) {
				t.media.buffered = e.percent, gh.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && gh.call(t, t.media, "canplaythrough"), t.embed.getDuration().then((function(e) {
					e !== t.media.duration && (t.media.duration = e, gh.call(t, t.media, "durationchange"))
				}))
			})), t.embed.on("seeked", (function() {
				t.media.seeking = !1, gh.call(t, t.media, "seeked")
			})), t.embed.on("ended", (function() {
				t.media.paused = !0, gh.call(t, t.media, "ended")
			})), t.embed.on("error", (function(e) {
				t.media.error = e, gh.call(t, t.media, "error")
			})), n.customControls && setTimeout((function() {
				return yf.build.call(t)
			}), 0)
		}
	};

	function If(e) {
		e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, gh.call(this, this.media, e ? "play" : "pause"))
	}

	function Lf(e) {
		return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0
	}
	var jf = {
			setup: function() {
				var e = this;
				if (nh(this.elements.wrapper, this.config.classNames.embed, !0), Eu(window.YT) && xu(window.YT.Player)) jf.ready.call(this);
				else {
					var t = window.onYouTubeIframeAPIReady;
					window.onYouTubeIframeAPIReady = function() {
						xu(t) && t(), jf.ready.call(e)
					}, Pf(this.config.urls.youtube.sdk).catch((function(t) {
						e.debug.warn("YouTube API failed to load", t)
					}))
				}
			},
			getTitle: function(e) {
				var t = this;
				Yh(qh(this.config.urls.youtube.api, e)).then((function(e) {
					if (Eu(e)) {
						var n = e.title,
							i = e.height,
							r = e.width;
						t.config.title = n, yf.setTitle.call(t), t.embed.ratio = [r, i]
					}
					Sh.call(t)
				})).catch((function() {
					Sh.call(t)
				}))
			},
			ready: function() {
				var e = this,
					t = e.config.youtube,
					n = e.media && e.media.getAttribute("id");
				if (Uu(n) || !n.startsWith("youtube-")) {
					var i = e.media.getAttribute("src");
					Uu(i) && (i = e.media.getAttribute(this.config.attributes.embed.id));
					var r, o, a = Uu(r = i) ? null : r.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : r,
						s = Gu("div", {
							id: (o = e.provider, "".concat(o, "-").concat(Math.floor(1e4 * Math.random()))),
							"data-poster": t.customControls ? e.poster : void 0
						});
					if (e.media = Zu(s, e.media), t.customControls) {
						var l = function(e) {
							return "https://i.ytimg.com/vi/".concat(a, "/").concat(e, "default.jpg")
						};
						vf(l("maxres"), 121).catch((function() {
							return vf(l("sd"), 121)
						})).catch((function() {
							return vf(l("hq"))
						})).then((function(t) {
							return yf.setPoster.call(e, t.src)
						})).then((function(t) {
							t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover")
						})).catch((function() {}))
					}
					e.embed = new window.YT.Player(e.media, {
						videoId: a,
						host: Lf(t),
						playerVars: Ku({}, {
							autoplay: e.config.autoplay ? 1 : 0,
							hl: e.config.hl,
							controls: e.supported.ui && t.customControls ? 0 : 1,
							disablekb: 1,
							playsinline: e.config.fullscreen.iosNative ? 0 : 1,
							cc_load_policy: e.captions.active ? 1 : 0,
							cc_lang_pref: e.config.captions.language,
							widget_referrer: window ? window.location.href : null
						}, t),
						events: {
							onError: function(t) {
								if (!e.media.error) {
									var n = t.data,
										i = {
											2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
											5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
											100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
											101: "The owner of the requested video does not allow it to be played in embedded players.",
											150: "The owner of the requested video does not allow it to be played in embedded players."
										}[n] || "An unknown error occured";
									e.media.error = {
										code: n,
										message: i
									}, gh.call(e, e.media, "error")
								}
							},
							onPlaybackRateChange: function(t) {
								var n = t.target;
								e.media.playbackRate = n.getPlaybackRate(), gh.call(e, e.media, "ratechange")
							},
							onReady: function(n) {
								if (!xu(e.media.play)) {
									var i = n.target;
									jf.getTitle.call(e, a), e.media.play = function() {
										If.call(e, !0), i.playVideo()
									}, e.media.pause = function() {
										If.call(e, !1), i.pauseVideo()
									}, e.media.stop = function() {
										i.stopVideo()
									}, e.media.duration = i.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
										get: function() {
											return Number(i.getCurrentTime())
										},
										set: function(t) {
											e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, gh.call(e, e.media, "seeking"), i.seekTo(t)
										}
									}), Object.defineProperty(e.media, "playbackRate", {
										get: function() {
											return i.getPlaybackRate()
										},
										set: function(e) {
											i.setPlaybackRate(e)
										}
									});
									var r = e.config.volume;
									Object.defineProperty(e.media, "volume", {
										get: function() {
											return r
										},
										set: function(t) {
											r = t, i.setVolume(100 * r), gh.call(e, e.media, "volumechange")
										}
									});
									var o = e.config.muted;
									Object.defineProperty(e.media, "muted", {
										get: function() {
											return o
										},
										set: function(t) {
											var n = Pu(t) ? t : o;
											o = n, i[n ? "mute" : "unMute"](), i.setVolume(100 * r), gh.call(e, e.media, "volumechange")
										}
									}), Object.defineProperty(e.media, "currentSrc", {
										get: function() {
											return i.getVideoUrl()
										}
									}), Object.defineProperty(e.media, "ended", {
										get: function() {
											return e.currentTime === e.duration
										}
									});
									var s = i.getAvailablePlaybackRates();
									e.options.speed = s.filter((function(t) {
										return e.config.speed.options.includes(t)
									})), e.supported.ui && t.customControls && e.media.setAttribute("tabindex", -1), gh.call(e, e.media, "timeupdate"), gh.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval((function() {
										e.media.buffered = i.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && gh.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), gh.call(e, e.media, "canplaythrough"))
									}), 200), t.customControls && setTimeout((function() {
										return yf.build.call(e)
									}), 50)
								}
							},
							onStateChange: function(n) {
								var i = n.target;
								switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(n.data) && (e.media.seeking = !1, gh.call(e, e.media, "seeked")), n.data) {
									case -1:
										gh.call(e, e.media, "timeupdate"), e.media.buffered = i.getVideoLoadedFraction(), gh.call(e, e.media, "progress");
										break;
									case 0:
										If.call(e, !1), e.media.loop ? (i.stopVideo(), i.playVideo()) : gh.call(e, e.media, "ended");
										break;
									case 1:
										t.customControls && !e.config.autoplay && e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (If.call(e, !0), gh.call(e, e.media, "playing"), e.timers.playing = setInterval((function() {
											gh.call(e, e.media, "timeupdate")
										}), 50), e.media.duration !== i.getDuration() && (e.media.duration = i.getDuration(), gh.call(e, e.media, "durationchange")));
										break;
									case 2:
										e.muted || e.embed.unMute(), If.call(e, !1);
										break;
									case 3:
										gh.call(e, e.media, "waiting")
								}
								gh.call(e, e.elements.container, "statechange", !1, {
									code: n.data
								})
							}
						}
					})
				}
			}
		},
		Nf = {
			setup: function() {
				this.media ? (nh(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), nh(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && nh(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = Gu("div", {
					class: this.config.classNames.video
				}), $u(this.media, this.elements.wrapper), this.elements.poster = Gu("div", {
					class: this.config.classNames.poster,
					hidden: ""
				}), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? Eh.setup.call(this) : this.isYouTube ? jf.setup.call(this) : this.isVimeo && Of.setup.call(this)) : this.debug.warn("No media element found!")
			}
		},
		Rf = function() {
			function e(t) {
				var n = this;
				Ra(this, e), this.player = t, this.config = t.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
					container: null,
					displayContainer: null
				}, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((function(e, t) {
					n.on("loaded", e), n.on("error", t)
				})), this.load()
			}
			return _a(e, [{
				key: "load",
				value: function() {
					var e = this;
					this.enabled && (Eu(window.google) && Eu(window.google.ima) ? this.ready() : Pf(this.player.config.urls.googleIMA.sdk).then((function() {
						e.ready()
					})).catch((function() {
						e.trigger("error", new Error("Google IMA SDK failed to load"))
					})))
				}
			}, {
				key: "ready",
				value: function() {
					var e, t = this;
					this.enabled || ((e = this).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then((function() {
						t.clearSafetyTimer("onAdsManagerLoaded()")
					})), this.listeners(), this.setupIMA()
				}
			}, {
				key: "setupIMA",
				value: function() {
					var e = this;
					this.elements.container = Gu("div", {
						class: this.player.config.classNames.ads
					}), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (function(t) {
						return e.onAdsManagerLoaded(t)
					}), !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function(t) {
						return e.onAdError(t)
					}), !1), this.requestAds()
				}
			}, {
				key: "requestAds",
				value: function() {
					var e = this.player.elements.container;
					try {
						var t = new google.ima.AdsRequest;
						t.adTagUrl = this.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t)
					} catch (e) {
						this.onAdError(e)
					}
				}
			}, {
				key: "pollCountdown",
				value: function() {
					var e = this,
						t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					if (!t) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
					var n = function() {
						var t = tf(Math.max(e.manager.getRemainingTime(), 0)),
							n = "".concat(Kh("advertisement", e.player.config), " - ").concat(t);
						e.elements.container.setAttribute("data-badge-text", n)
					};
					this.countdownTimer = setInterval(n, 100)
				}
			}, {
				key: "onAdsManagerLoaded",
				value: function(e) {
					var t = this;
					if (this.enabled) {
						var n = new google.ima.AdsRenderingSettings;
						n.restoreCustomPlaybackStateOnAdBreakComplete = !0, n.enablePreloading = !0, this.manager = e.getAdsManager(this.player, n), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function(e) {
							return t.onAdError(e)
						})), Object.keys(google.ima.AdEvent.Type).forEach((function(e) {
							t.manager.addEventListener(google.ima.AdEvent.Type[e], (function(e) {
								return t.onAdEvent(e)
							}))
						})), this.trigger("loaded")
					}
				}
			}, {
				key: "addCuePoints",
				value: function() {
					var e = this;
					Uu(this.cuePoints) || this.cuePoints.forEach((function(t) {
						if (0 !== t && -1 !== t && t < e.player.duration) {
							var n = e.player.elements.progress;
							if (Lu(n)) {
								var i = 100 / e.player.duration * t,
									r = Gu("span", {
										class: e.player.config.classNames.cues
									});
								r.style.left = "".concat(i.toString(), "%"), n.appendChild(r)
							}
						}
					}))
				}
			}, {
				key: "onAdEvent",
				value: function(e) {
					var t = this,
						n = this.player.elements.container,
						i = e.getAd(),
						r = e.getAdData();
					switch (function(e) {
						gh.call(t.player, t.player.media, "ads".concat(e.replace(/_/g, "").toLowerCase()))
					}(e.type), e.type) {
						case google.ima.AdEvent.Type.LOADED:
							this.trigger("loaded"), this.pollCountdown(!0), i.isLinear() || (i.width = n.offsetWidth, i.height = n.offsetHeight);
							break;
						case google.ima.AdEvent.Type.STARTED:
							this.manager.setVolume(this.player.volume);
							break;
						case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
							this.player.ended ? this.loadAds() : this.loader.contentComplete();
							break;
						case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
							this.pauseContent();
							break;
						case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
							this.pollCountdown(), this.resumeContent();
							break;
						case google.ima.AdEvent.Type.LOG:
							r.adError && this.player.debug.warn("Non-fatal ad error: ".concat(r.adError.getMessage()))
					}
				}
			}, {
				key: "onAdError",
				value: function(e) {
					this.cancel(), this.player.debug.warn("Ads error", e)
				}
			}, {
				key: "listeners",
				value: function() {
					var e, t = this,
						n = this.player.elements.container;
					this.player.on("canplay", (function() {
						t.addCuePoints()
					})), this.player.on("ended", (function() {
						t.loader.contentComplete()
					})), this.player.on("timeupdate", (function() {
						e = t.player.currentTime
					})), this.player.on("seeked", (function() {
						var n = t.player.currentTime;
						Uu(t.cuePoints) || t.cuePoints.forEach((function(i, r) {
							e < i && i < n && (t.manager.discardAdBreak(), t.cuePoints.splice(r, 1))
						}))
					})), window.addEventListener("resize", (function() {
						t.manager && t.manager.resize(n.offsetWidth, n.offsetHeight, google.ima.ViewMode.NORMAL)
					}))
				}
			}, {
				key: "play",
				value: function() {
					var e = this,
						t = this.player.elements.container;
					this.managerPromise || this.resumeContent(), this.managerPromise.then((function() {
						e.manager.setVolume(e.player.volume), e.elements.displayContainer.initialize();
						try {
							e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0
						} catch (t) {
							e.onAdError(t)
						}
					})).catch((function() {}))
				}
			}, {
				key: "resumeContent",
				value: function() {
					this.elements.container.style.zIndex = "", this.playing = !1, bh(this.player.media.play())
				}
			}, {
				key: "pauseContent",
				value: function() {
					this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause()
				}
			}, {
				key: "cancel",
				value: function() {
					this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
				}
			}, {
				key: "loadAds",
				value: function() {
					var e = this;
					this.managerPromise.then((function() {
						e.manager && e.manager.destroy(), e.managerPromise = new Promise((function(t) {
							e.on("loaded", t), e.player.debug.log(e.manager)
						})), e.initialized = !1, e.requestAds()
					})).catch((function() {}))
				}
			}, {
				key: "trigger",
				value: function(e) {
					for (var t = this, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
					var o = this.events[e];
					Ou(o) && o.forEach((function(e) {
						xu(e) && e.apply(t, i)
					}))
				}
			}, {
				key: "on",
				value: function(e, t) {
					return Ou(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this
				}
			}, {
				key: "startSafetyTimer",
				value: function(e, t) {
					var n = this;
					this.player.debug.log("Safety timer invoked from: ".concat(t)), this.safetyTimer = setTimeout((function() {
						n.cancel(), n.clearSafetyTimer("startSafetyTimer()")
					}), e)
				}
			}, {
				key: "clearSafetyTimer",
				value: function(e) {
					Su(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(this.safetyTimer), this.safetyTimer = null)
				}
			}, {
				key: "enabled",
				get: function() {
					var e = this.config;
					return this.player.isHTML5 && this.player.isVideo && e.enabled && (!Uu(e.publisherId) || _u(e.tagUrl))
				}
			}, {
				key: "tagUrl",
				get: function() {
					var e = this.config;
					if (_u(e.tagUrl)) return e.tagUrl;
					var t = {
						AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
						AV_CHANNELID: "5a0458dc28a06145e4519d21",
						AV_URL: window.location.hostname,
						cb: Date.now(),
						AV_WIDTH: 640,
						AV_HEIGHT: 480,
						AV_CDIM2: e.publisherId
					};
					return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(of(t))
				}
			}]), e
		}(),
		Mf = ut.findIndex,
		_f = "findIndex",
		Uf = !0,
		Df = Zt(_f);
	_f in [] && Array(1).findIndex((function() {
		Uf = !1
	})), Le({
		target: "Array",
		proto: !0,
		forced: Uf || !Df
	}, {
		findIndex: function(e) {
			return Mf(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), mn(_f);
	var Ff = Math.min,
		qf = [].lastIndexOf,
		Hf = !!qf && 1 / [1].lastIndexOf(1, -0) < 0,
		Bf = Gt("lastIndexOf"),
		Vf = Zt("indexOf", {
			ACCESSORS: !0,
			1: 0
		}),
		zf = Hf || !Bf || !Vf ? function(e) {
			if (Hf) return qf.apply(this, arguments) || 0;
			var t = m(this),
				n = ce(t.length),
				i = n - 1;
			for (arguments.length > 1 && (i = Ff(i, se(arguments[1]))), i < 0 && (i = n + i); i >= 0; i--)
				if (i in t && t[i] === e) return i || 0;
			return -1
		} : qf;
	Le({
		target: "Array",
		proto: !0,
		forced: zf !== [].lastIndexOf
	}, {
		lastIndexOf: zf
	});
	var Wf = function(e, t) {
			var n = {};
			return e > t.width / t.height ? (n.width = t.width, n.height = 1 / e * t.width) : (n.height = t.height, n.width = e * t.height), n
		},
		Kf = function() {
			function e(t) {
				Ra(this, e), this.player = t, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
					thumb: {},
					scrubbing: {}
				}, this.load()
			}
			return _a(e, [{
				key: "load",
				value: function() {
					var e = this;
					this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then((function() {
						e.enabled && (e.render(), e.determineContainerAutoSizing(), e.loaded = !0)
					}))
				}
			}, {
				key: "getThumbnails",
				value: function() {
					var e = this;
					return new Promise((function(t) {
						var n = e.player.config.previewThumbnails.src;
						if (Uu(n)) throw new Error("Missing previewThumbnails.src config attribute");
						var i = function() {
							e.thumbnails.sort((function(e, t) {
								return e.height - t.height
							})), e.player.debug.log("Preview thumbnails", e.thumbnails), t()
						};
						if (xu(n)) n((function(t) {
							e.thumbnails = t, i()
						}));
						else {
							var r = (Cu(n) ? [n] : n).map((function(t) {
								return e.getThumbnail(t)
							}));
							Promise.all(r).then(i)
						}
					}))
				}
			}, {
				key: "getThumbnail",
				value: function(e) {
					var t = this;
					return new Promise((function(n) {
						Yh(e).then((function(i) {
							var r, o, a = {
								frames: (r = i, o = [], r.split(/\r\n\r\n|\n\n|\r\r/).forEach((function(e) {
									var t = {};
									e.split(/\r\n|\n|\r/).forEach((function(e) {
										if (Au(t.startTime)) {
											if (!Uu(e.trim()) && Uu(t.text)) {
												var n = e.trim().split("#xywh="),
													i = Ha(n, 1);
												if (t.text = i[0], n[1]) {
													var r = Ha(n[1].split(","), 4);
													t.x = r[0], t.y = r[1], t.w = r[2], t.h = r[3]
												}
											}
										} else {
											var o = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
											o && (t.startTime = 60 * Number(o[1] || 0) * 60 + 60 * Number(o[2]) + Number(o[3]) + Number("0.".concat(o[4])), t.endTime = 60 * Number(o[6] || 0) * 60 + 60 * Number(o[7]) + Number(o[8]) + Number("0.".concat(o[9])))
										}
									})), t.text && o.push(t)
								})), o),
								height: null,
								urlPrefix: ""
							};
							a.frames[0].text.startsWith("/") || a.frames[0].text.startsWith("http://") || a.frames[0].text.startsWith("https://") || (a.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
							var s = new Image;
							s.onload = function() {
								a.height = s.naturalHeight, a.width = s.naturalWidth, t.thumbnails.push(a), n()
							}, s.src = a.urlPrefix + a.frames[0].text
						}))
					}))
				}
			}, {
				key: "startMove",
				value: function(e) {
					if (this.loaded && ju(e) && ["touchmove", "mousemove"].includes(e.type) && this.player.media.duration) {
						if ("touchmove" === e.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
						else {
							var t = this.player.elements.progress.getBoundingClientRect(),
								n = 100 / t.width * (e.pageX - t.left);
							this.seekTime = this.player.media.duration * (n / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e.pageX, this.elements.thumb.time.innerText = tf(this.seekTime)
						}
						this.showImageAtCurrentTime()
					}
				}
			}, {
				key: "endMove",
				value: function() {
					this.toggleThumbContainer(!1, !0)
				}
			}, {
				key: "startScrubbing",
				value: function(e) {
					(Su(e.button) || !1 === e.button || 0 === e.button) && (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()))
				}
			}, {
				key: "endScrubbing",
				value: function() {
					var e = this;
					this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : mh.call(this.player, this.player.media, "timeupdate", (function() {
						e.mouseDown || e.toggleScrubbingContainer(!1)
					}))
				}
			}, {
				key: "listeners",
				value: function() {
					var e = this;
					this.player.on("play", (function() {
						e.toggleThumbContainer(!1, !0)
					})), this.player.on("seeked", (function() {
						e.toggleThumbContainer(!1)
					})), this.player.on("timeupdate", (function() {
						e.lastTime = e.player.media.currentTime
					}))
				}
			}, {
				key: "render",
				value: function() {
					this.elements.thumb.container = Gu("div", {
						class: this.player.config.classNames.previewThumbnails.thumbContainer
					}), this.elements.thumb.imageContainer = Gu("div", {
						class: this.player.config.classNames.previewThumbnails.imageContainer
					}), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
					var e = Gu("div", {
						class: this.player.config.classNames.previewThumbnails.timeContainer
					});
					this.elements.thumb.time = Gu("span", {}, "00:00"), e.appendChild(this.elements.thumb.time), this.elements.thumb.container.appendChild(e), Lu(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = Gu("div", {
						class: this.player.config.classNames.previewThumbnails.scrubbingContainer
					}), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)
				}
			}, {
				key: "destroy",
				value: function() {
					this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove()
				}
			}, {
				key: "showImageAtCurrentTime",
				value: function() {
					var e = this;
					this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
					var t = this.thumbnails[0].frames.findIndex((function(t) {
							return e.seekTime >= t.startTime && e.seekTime <= t.endTime
						})),
						n = t >= 0,
						i = 0;
					this.mouseDown || this.toggleThumbContainer(n), n && (this.thumbnails.forEach((function(n, r) {
						e.loadedImages.includes(n.frames[t].text) && (i = r)
					})), t !== this.showingThumb && (this.showingThumb = t, this.loadImage(i)))
				}
			}, {
				key: "loadImage",
				value: function() {
					var e = this,
						t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
						n = this.showingThumb,
						i = this.thumbnails[t],
						r = i.urlPrefix,
						o = i.frames[n],
						a = i.frames[n].text,
						s = r + a;
					if (this.currentImageElement && this.currentImageElement.dataset.filename === a) this.showImage(this.currentImageElement, o, t, n, a, !1), this.currentImageElement.dataset.index = n, this.removeOldImages(this.currentImageElement);
					else {
						this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
						var l = new Image;
						l.src = s, l.dataset.index = n, l.dataset.filename = a, this.showingThumbFilename = a, this.player.debug.log("Loading image: ".concat(s)), l.onload = function() {
							return e.showImage(l, o, t, n, a, !0)
						}, this.loadingImage = l, this.removeOldImages(l)
					}
				}
			}, {
				key: "showImage",
				value: function(e, t, n, i, r) {
					var o = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
					this.player.debug.log("Showing thumb: ".concat(r, ". num: ").concat(i, ". qual: ").concat(n, ". newimg: ").concat(o)), this.setImageSizeAndOffset(e, t), o && (this.currentImageContainer.appendChild(e), this.currentImageElement = e, this.loadedImages.includes(r) || this.loadedImages.push(r)), this.preloadNearby(i, !0).then(this.preloadNearby(i, !1)).then(this.getHigherQuality(n, e, t, r))
				}
			}, {
				key: "removeOldImages",
				value: function(e) {
					var t = this;
					Array.from(this.currentImageContainer.children).forEach((function(n) {
						if ("img" === n.tagName.toLowerCase()) {
							var i = t.usingSprites ? 500 : 1e3;
							if (n.dataset.index !== e.dataset.index && !n.dataset.deleting) {
								n.dataset.deleting = !0;
								var r = t.currentImageContainer;
								setTimeout((function() {
									r.removeChild(n), t.player.debug.log("Removing thumb: ".concat(n.dataset.filename))
								}), i)
							}
						}
					}))
				}
			}, {
				key: "preloadNearby",
				value: function(e) {
					var t = this,
						n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					return new Promise((function(i) {
						setTimeout((function() {
							var r = t.thumbnails[0].frames[e].text;
							if (t.showingThumbFilename === r) {
								var o;
								o = n ? t.thumbnails[0].frames.slice(e) : t.thumbnails[0].frames.slice(0, e).reverse();
								var a = !1;
								o.forEach((function(e) {
									var n = e.text;
									if (n !== r && !t.loadedImages.includes(n)) {
										a = !0, t.player.debug.log("Preloading thumb filename: ".concat(n));
										var o = t.thumbnails[0].urlPrefix + n,
											s = new Image;
										s.src = o, s.onload = function() {
											t.player.debug.log("Preloaded thumb filename: ".concat(n)), t.loadedImages.includes(n) || t.loadedImages.push(n), i()
										}
									}
								})), a || i()
							}
						}), 300)
					}))
				}
			}, {
				key: "getHigherQuality",
				value: function(e, t, n, i) {
					var r = this;
					if (e < this.thumbnails.length - 1) {
						var o = t.naturalHeight;
						this.usingSprites && (o = n.h), o < this.thumbContainerHeight && setTimeout((function() {
							r.showingThumbFilename === i && (r.player.debug.log("Showing higher quality thumb for: ".concat(i)), r.loadImage(e + 1))
						}), 300)
					}
				}
			}, {
				key: "toggleThumbContainer",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = this.player.config.classNames.previewThumbnails.thumbContainerShown;
					this.elements.thumb.container.classList.toggle(n, e), !e && t && (this.showingThumb = null, this.showingThumbFilename = null)
				}
			}, {
				key: "toggleScrubbingContainer",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
					this.elements.scrubbing.container.classList.toggle(t, e), e || (this.showingThumb = null, this.showingThumbFilename = null)
				}
			}, {
				key: "determineContainerAutoSizing",
				value: function() {
					(this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0)
				}
			}, {
				key: "setThumbContainerSizeAndPos",
				value: function() {
					if (this.sizeSpecifiedInCSS) {
						if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
							var e = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);
							this.elements.thumb.imageContainer.style.width = "".concat(e, "px")
						} else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
							var t = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
							this.elements.thumb.imageContainer.style.height = "".concat(t, "px")
						}
					} else {
						var n = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
						this.elements.thumb.imageContainer.style.height = "".concat(this.thumbContainerHeight, "px"), this.elements.thumb.imageContainer.style.width = "".concat(n, "px")
					}
					this.setThumbContainerPos()
				}
			}, {
				key: "setThumbContainerPos",
				value: function() {
					var e = this.player.elements.progress.getBoundingClientRect(),
						t = this.player.elements.container.getBoundingClientRect(),
						n = this.elements.thumb.container,
						i = t.left - e.left + 10,
						r = t.right - e.left - n.clientWidth - 10,
						o = this.mousePosX - e.left - n.clientWidth / 2;
					o < i && (o = i), o > r && (o = r), n.style.left = "".concat(o, "px")
				}
			}, {
				key: "setScrubbingContainerSize",
				value: function() {
					var e = Wf(this.thumbAspectRatio, {
							width: this.player.media.clientWidth,
							height: this.player.media.clientHeight
						}),
						t = e.width,
						n = e.height;
					this.elements.scrubbing.container.style.width = "".concat(t, "px"), this.elements.scrubbing.container.style.height = "".concat(n, "px")
				}
			}, {
				key: "setImageSizeAndOffset",
				value: function(e, t) {
					if (this.usingSprites) {
						var n = this.thumbContainerHeight / t.h;
						e.style.height = "".concat(e.naturalHeight * n, "px"), e.style.width = "".concat(e.naturalWidth * n, "px"), e.style.left = "-".concat(t.x * n, "px"), e.style.top = "-".concat(t.y * n, "px")
					}
				}
			}, {
				key: "enabled",
				get: function() {
					return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
				}
			}, {
				key: "currentImageContainer",
				get: function() {
					return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
				}
			}, {
				key: "usingSprites",
				get: function() {
					return Object.keys(this.thumbnails[0].frames[0]).includes("w")
				}
			}, {
				key: "thumbAspectRatio",
				get: function() {
					return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height
				}
			}, {
				key: "thumbContainerHeight",
				get: function() {
					return this.mouseDown ? Wf(this.thumbAspectRatio, {
						width: this.player.media.clientWidth,
						height: this.player.media.clientHeight
					}).height : this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
				}
			}, {
				key: "currentImageElement",
				get: function() {
					return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
				},
				set: function(e) {
					this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e
				}
			}]), e
		}(),
		$f = {
			insertElements: function(e, t) {
				var n = this;
				Cu(t) ? Xu(e, this.media, {
					src: t
				}) : Ou(t) && t.forEach((function(t) {
					Xu(e, n.media, t)
				}))
			},
			change: function(e) {
				var t = this;
				Wu(e, "sources.length") ? (Eh.cancelRequests.call(this), this.destroy.call(this, (function() {
					t.options.quality = [], Qu(t.media), t.media = null, Lu(t.elements.container) && t.elements.container.removeAttribute("class");
					var n = e.sources,
						i = e.type,
						r = Ha(n, 1)[0],
						o = r.provider,
						a = void 0 === o ? uf.html5 : o,
						s = r.src,
						l = "html5" === a ? i : "div",
						c = "html5" === a ? {} : {
							src: s
						};
					Object.assign(t, {
						provider: a,
						type: i,
						supported: uh.check(i, a, t.config.playsinline),
						media: Gu(l, c)
					}), t.elements.container.appendChild(t.media), Pu(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), Uu(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), yf.addStyleHook.call(t), t.isHTML5 && $f.insertElements.call(t, "source", n), t.config.title = e.title, Nf.setup.call(t), t.isHTML5 && Object.keys(e).includes("tracks") && $f.insertElements.call(t, "track", e.tracks), (t.isHTML5 || t.isEmbed && !t.supported.ui) && yf.build.call(t), t.isHTML5 && t.media.load(), Uu(e.previewThumbnails) || (Object.assign(t.config.previewThumbnails, e.previewThumbnails), t.previewThumbnails && t.previewThumbnails.loaded && (t.previewThumbnails.destroy(), t.previewThumbnails = null), t.config.previewThumbnails.enabled && (t.previewThumbnails = new Kf(t))), t.fullscreen.update()
				}), !0)) : this.debug.warn("Invalid source format")
			}
		};
	var Yf, Gf = function() {
		function e(t, n) {
			var i = this;
			if (Ra(this, e), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = uh.touch, this.media = t, Cu(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || Iu(this.media) || Ou(this.media)) && (this.media = this.media[0]), this.config = Ku({}, sf, e.defaults, n || {}, function() {
					try {
						return JSON.parse(i.media.getAttribute("data-plyr-config"))
					} catch (e) {
						return {}
					}
				}()), this.elements = {
					container: null,
					fullscreen: null,
					captions: null,
					buttons: {},
					display: {},
					progress: {},
					inputs: {},
					settings: {
						popup: null,
						menu: null,
						panels: {},
						buttons: {}
					}
				}, this.captions = {
					active: null,
					currentTrack: -1,
					meta: new WeakMap
				}, this.fullscreen = {
					active: !1
				}, this.options = {
					speed: [],
					quality: []
				}, this.debug = new pf(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", uh), !Su(this.media) && Lu(this.media))
				if (this.media.plyr) this.debug.warn("Target already setup");
				else if (this.config.enabled)
				if (uh.check().api) {
					var r = this.media.cloneNode(!0);
					r.autoplay = !1, this.elements.original = r;
					var o = this.media.tagName.toLowerCase(),
						a = null,
						s = null;
					switch (o) {
						case "div":
							if (a = this.media.querySelector("iframe"), Lu(a)) {
								if (s = rf(a.getAttribute("src")), this.provider = function(e) {
										return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? uf.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? uf.vimeo : null
									}(s.toString()), this.elements.container = this.media, this.media = a, this.elements.container.className = "", s.search.length) {
									var l = ["1", "true"];
									l.includes(s.searchParams.get("autoplay")) && (this.config.autoplay = !0), l.includes(s.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = l.includes(s.searchParams.get("playsinline")), this.config.youtube.hl = s.searchParams.get("hl")) : this.config.playsinline = !0
								}
							} else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
							if (Uu(this.provider) || !Object.keys(uf).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
							this.type = ff;
							break;
						case "video":
						case "audio":
							this.type = o, this.provider = uf.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
							break;
						default:
							return void this.debug.error("Setup failed: unsupported type")
					}
					this.supported = uh.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new bf(this), this.storage = new $h(this), this.media.plyr = this, Lu(this.elements.container) || (this.elements.container = Gu("div", {
						tabindex: 0
					}), $u(this.media, this.elements.container)), yf.migrateStyles.call(this), yf.addStyleHook.call(this), Nf.setup.call(this), this.config.debug && dh.call(this, this.elements.container, this.config.events.join(" "), (function(e) {
						i.debug.log("event: ".concat(e.type))
					})), this.fullscreen = new mf(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && yf.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new Rf(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", (function() {
						return bh(i.play())
					})), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new Kf(this))) : this.debug.error("Setup failed: no support")
				} else this.debug.error("Setup failed: no support");
			else this.debug.error("Setup failed: disabled by config");
			else this.debug.error("Setup failed: no suitable element passed")
		}
		return _a(e, [{
			key: "play",
			value: function() {
				var e = this;
				return xu(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then((function() {
					return e.ads.play()
				})).catch((function() {
					return bh(e.media.play())
				})), this.media.play()) : null
			}
		}, {
			key: "pause",
			value: function() {
				return this.playing && xu(this.media.pause) ? this.media.pause() : null
			}
		}, {
			key: "togglePlay",
			value: function(e) {
				return (Pu(e) ? e : !this.playing) ? this.play() : this.pause()
			}
		}, {
			key: "stop",
			value: function() {
				this.isHTML5 ? (this.pause(), this.restart()) : xu(this.media.stop) && this.media.stop()
			}
		}, {
			key: "restart",
			value: function() {
				this.currentTime = 0
			}
		}, {
			key: "rewind",
			value: function(e) {
				this.currentTime -= Au(e) ? e : this.config.seekTime
			}
		}, {
			key: "forward",
			value: function(e) {
				this.currentTime += Au(e) ? e : this.config.seekTime
			}
		}, {
			key: "increaseVolume",
			value: function(e) {
				var t = this.media.muted ? 0 : this.volume;
				this.volume = t + (Au(e) ? e : 0)
			}
		}, {
			key: "decreaseVolume",
			value: function(e) {
				this.increaseVolume(-e)
			}
		}, {
			key: "toggleCaptions",
			value: function(e) {
				af.toggle.call(this, e, !1)
			}
		}, {
			key: "airplay",
			value: function() {
				uh.airplay && this.media.webkitShowPlaybackTargetPicker()
			}
		}, {
			key: "toggleControls",
			value: function(e) {
				if (this.supported.ui && !this.isAudio) {
					var t = ih(this.elements.container, this.config.classNames.hideControls),
						n = void 0 === e ? void 0 : !e,
						i = nh(this.elements.container, this.config.classNames.hideControls, n);
					if (i && Ou(this.config.controls) && this.config.controls.includes("settings") && !Uu(this.config.settings) && nf.toggleMenu.call(this, !1), i !== t) {
						var r = i ? "controlshidden" : "controlsshown";
						gh.call(this, this.media, r)
					}
					return !i
				}
				return !1
			}
		}, {
			key: "on",
			value: function(e, t) {
				dh.call(this, this.elements.container, e, t)
			}
		}, {
			key: "once",
			value: function(e, t) {
				mh.call(this, this.elements.container, e, t)
			}
		}, {
			key: "off",
			value: function(e, t) {
				ph(this.elements.container, e, t)
			}
		}, {
			key: "destroy",
			value: function(e) {
				var t = this,
					n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				if (this.ready) {
					var i = function() {
						document.body.style.overflow = "", t.embed = null, n ? (Object.keys(t.elements).length && (Qu(t.elements.buttons.play), Qu(t.elements.captions), Qu(t.elements.controls), Qu(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), xu(e) && e()) : (vh.call(t), Eh.cancelRequests.call(t), Zu(t.elements.original, t.elements.container), gh.call(t, t.elements.original, "destroyed", !0), xu(e) && e.call(t.elements.original), t.ready = !1, setTimeout((function() {
							t.elements = null, t.media = null
						}), 200))
					};
					this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (yf.toggleNativeControls.call(this, !0), i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && xu(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200))
				}
			}
		}, {
			key: "supports",
			value: function(e) {
				return uh.mime.call(this, e)
			}
		}, {
			key: "isHTML5",
			get: function() {
				return this.provider === uf.html5
			}
		}, {
			key: "isEmbed",
			get: function() {
				return this.isYouTube || this.isVimeo
			}
		}, {
			key: "isYouTube",
			get: function() {
				return this.provider === uf.youtube
			}
		}, {
			key: "isVimeo",
			get: function() {
				return this.provider === uf.vimeo
			}
		}, {
			key: "isVideo",
			get: function() {
				return this.type === ff
			}
		}, {
			key: "isAudio",
			get: function() {
				return this.type === hf
			}
		}, {
			key: "playing",
			get: function() {
				return Boolean(this.ready && !this.paused && !this.ended)
			}
		}, {
			key: "paused",
			get: function() {
				return Boolean(this.media.paused)
			}
		}, {
			key: "stopped",
			get: function() {
				return Boolean(this.paused && 0 === this.currentTime)
			}
		}, {
			key: "ended",
			get: function() {
				return Boolean(this.media.ended)
			}
		}, {
			key: "currentTime",
			set: function(e) {
				if (this.duration) {
					var t = Au(e) && e > 0;
					this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"))
				}
			},
			get: function() {
				return Number(this.media.currentTime)
			}
		}, {
			key: "buffered",
			get: function() {
				var e = this.media.buffered;
				return Au(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
			}
		}, {
			key: "seeking",
			get: function() {
				return Boolean(this.media.seeking)
			}
		}, {
			key: "duration",
			get: function() {
				var e = parseFloat(this.config.duration),
					t = (this.media || {}).duration,
					n = Au(t) && t !== 1 / 0 ? t : 0;
				return e || n
			}
		}, {
			key: "volume",
			set: function(e) {
				var t = e;
				Cu(t) && (t = Number(t)), Au(t) || (t = this.storage.get("volume")), Au(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !Uu(e) && this.muted && t > 0 && (this.muted = !1)
			},
			get: function() {
				return Number(this.media.volume)
			}
		}, {
			key: "muted",
			set: function(e) {
				var t = e;
				Pu(t) || (t = this.storage.get("muted")), Pu(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
			},
			get: function() {
				return Boolean(this.media.muted)
			}
		}, {
			key: "hasAudio",
			get: function() {
				return !this.isHTML5 || (!!this.isAudio || (Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)))
			}
		}, {
			key: "speed",
			set: function(e) {
				var t = this,
					n = null;
				Au(e) && (n = e), Au(n) || (n = this.storage.get("speed")), Au(n) || (n = this.config.speed.selected);
				var i = this.minimumSpeed,
					r = this.maximumSpeed;
				n = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
						t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255;
					return Math.min(Math.max(e, t), n)
				}(n, i, r), this.config.speed.selected = n, setTimeout((function() {
					t.media.playbackRate = n
				}), 0)
			},
			get: function() {
				return Number(this.media.playbackRate)
			}
		}, {
			key: "minimumSpeed",
			get: function() {
				return this.isYouTube ? Math.min.apply(Math, Ba(this.options.speed)) : this.isVimeo ? .5 : .0625
			}
		}, {
			key: "maximumSpeed",
			get: function() {
				return this.isYouTube ? Math.max.apply(Math, Ba(this.options.speed)) : this.isVimeo ? 2 : 16
			}
		}, {
			key: "quality",
			set: function(e) {
				var t = this.config.quality,
					n = this.options.quality;
				if (n.length) {
					var i = [!Uu(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(Au),
						r = !0;
					if (!n.includes(i)) {
						var o = function(e, t) {
							return Ou(e) && e.length ? e.reduce((function(e, n) {
								return Math.abs(n - t) < Math.abs(e - t) ? n : e
							})) : null
						}(n, i);
						this.debug.warn("Unsupported quality option: ".concat(i, ", using ").concat(o, " instead")), i = o, r = !1
					}
					t.selected = i, this.media.quality = i, r && this.storage.set({
						quality: i
					})
				}
			},
			get: function() {
				return this.media.quality
			}
		}, {
			key: "loop",
			set: function(e) {
				var t = Pu(e) ? e : this.config.loop.active;
				this.config.loop.active = t, this.media.loop = t
			},
			get: function() {
				return Boolean(this.media.loop)
			}
		}, {
			key: "source",
			set: function(e) {
				$f.change.call(this, e)
			},
			get: function() {
				return this.media.currentSrc
			}
		}, {
			key: "download",
			get: function() {
				var e = this.config.urls.download;
				return _u(e) ? e : this.source
			},
			set: function(e) {
				_u(e) && (this.config.urls.download = e, nf.setDownloadUrl.call(this))
			}
		}, {
			key: "poster",
			set: function(e) {
				this.isVideo ? yf.setPoster.call(this, e, !1).catch((function() {})) : this.debug.warn("Poster can only be set for video")
			},
			get: function() {
				return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null
			}
		}, {
			key: "ratio",
			get: function() {
				if (!this.isVideo) return null;
				var e = kh(Th.call(this));
				return Ou(e) ? e.join(":") : e
			},
			set: function(e) {
				this.isVideo ? Cu(e) && wh(e) ? (this.config.ratio = e, Sh.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e, ")")) : this.debug.warn("Aspect ratio can only be set for video")
			}
		}, {
			key: "autoplay",
			set: function(e) {
				var t = Pu(e) ? e : this.config.autoplay;
				this.config.autoplay = t
			},
			get: function() {
				return Boolean(this.config.autoplay)
			}
		}, {
			key: "currentTrack",
			set: function(e) {
				af.set.call(this, e, !1)
			},
			get: function() {
				var e = this.captions,
					t = e.toggled,
					n = e.currentTrack;
				return t ? n : -1
			}
		}, {
			key: "language",
			set: function(e) {
				af.setLanguage.call(this, e, !1)
			},
			get: function() {
				return (af.getCurrentTrack.call(this) || {}).language
			}
		}, {
			key: "pip",
			set: function(e) {
				if (uh.pip) {
					var t = Pu(e) ? e : !this.pip;
					xu(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? lf : cf), xu(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture())
				}
			},
			get: function() {
				return uh.pip ? Uu(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === lf : null
			}
		}], [{
			key: "supported",
			value: function(e, t, n) {
				return uh.check(e, t, n)
			}
		}, {
			key: "loadSprite",
			value: function(e, t) {
				return Gh(e, t)
			}
		}, {
			key: "setup",
			value: function(t) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					i = null;
				return Cu(t) ? i = Array.from(document.querySelectorAll(t)) : Iu(t) ? i = Array.from(t) : Ou(t) && (i = t.filter(Lu)), Uu(i) ? null : i.map((function(t) {
					return new e(t, n)
				}))
			}
		}]), e
	}();
	return Gf.defaults = (Yf = sf, JSON.parse(JSON.stringify(Yf))), Gf
}));

//# sourceMappingURL=plyr.polyfilled.js.map