var Zr = (r, n) => () => (n || r((n = { exports: {} }).exports, n), n.exports);
var Ba = Zr((b, v) => {
  function z(r, n) {
    for (var t = -1, e = r == null ? 0 : r.length, i = Array(e); ++t < e; )
      i[t] = n(r[t], t, r);
    return i;
  }
  var Jr = Array.isArray;
  const h = Jr;
  var Qr = typeof global == "object" && global && global.Object === Object && global;
  const jr = Qr;
  var Vr = typeof self == "object" && self && self.Object === Object && self, kr = jr || Vr || Function("return this")();
  const A = kr;
  var rn = A.Symbol;
  const P = rn;
  var Lr = Object.prototype, nn = Lr.hasOwnProperty, tn = Lr.toString, R = P ? P.toStringTag : void 0;
  function en(r) {
    var n = nn.call(r, R), t = r[R];
    try {
      r[R] = void 0;
      var e = !0;
    } catch {
    }
    var i = tn.call(r);
    return e && (n ? r[R] = t : delete r[R]), i;
  }
  var an = Object.prototype, on = an.toString;
  function un(r) {
    return on.call(r);
  }
  var fn = "[object Null]", sn = "[object Undefined]", cr = P ? P.toStringTag : void 0;
  function j(r) {
    return r == null ? r === void 0 ? sn : fn : cr && cr in Object(r) ? en(r) : un(r);
  }
  function M(r) {
    return r != null && typeof r == "object";
  }
  var cn = "[object Symbol]";
  function F(r) {
    return typeof r == "symbol" || M(r) && j(r) == cn;
  }
  var pn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, gn = /^\w*$/;
  function nr(r, n) {
    if (h(r))
      return !1;
    var t = typeof r;
    return t == "number" || t == "symbol" || t == "boolean" || r == null || F(r) ? !0 : gn.test(r) || !pn.test(r) || n != null && r in Object(n);
  }
  function tr(r) {
    var n = typeof r;
    return r != null && (n == "object" || n == "function");
  }
  var ln = "[object AsyncFunction]", dn = "[object Function]", hn = "[object GeneratorFunction]", _n = "[object Proxy]";
  function Rr(r) {
    if (!tr(r))
      return !1;
    var n = j(r);
    return n == dn || n == hn || n == ln || n == _n;
  }
  var yn = A["__core-js_shared__"];
  const W = yn;
  var pr = function() {
    var r = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  }();
  function bn(r) {
    return !!pr && pr in r;
  }
  var vn = Function.prototype, Tn = vn.toString;
  function x(r) {
    if (r != null) {
      try {
        return Tn.call(r);
      } catch {
      }
      try {
        return r + "";
      } catch {
      }
    }
    return "";
  }
  var An = /[\\^$.*+?()[\]{}|]/g, $n = /^\[object .+?Constructor\]$/, On = Function.prototype, wn = Object.prototype, Pn = On.toString, En = wn.hasOwnProperty, Sn = RegExp(
    "^" + Pn.call(En).replace(An, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function mn(r) {
    if (!tr(r) || bn(r))
      return !1;
    var n = Rr(r) ? Sn : $n;
    return n.test(x(r));
  }
  function Cn(r, n) {
    return r == null ? void 0 : r[n];
  }
  function L(r, n) {
    var t = Cn(r, n);
    return mn(t) ? t : void 0;
  }
  var xn = L(Object, "create");
  const D = xn;
  function Mn() {
    this.__data__ = D ? D(null) : {}, this.size = 0;
  }
  function jn(r) {
    var n = this.has(r) && delete this.__data__[r];
    return this.size -= n ? 1 : 0, n;
  }
  var Ln = "__lodash_hash_undefined__", Rn = Object.prototype, In = Rn.hasOwnProperty;
  function Fn(r) {
    var n = this.__data__;
    if (D) {
      var t = n[r];
      return t === Ln ? void 0 : t;
    }
    return In.call(n, r) ? n[r] : void 0;
  }
  var Dn = Object.prototype, Gn = Dn.hasOwnProperty;
  function Bn(r) {
    var n = this.__data__;
    return D ? n[r] !== void 0 : Gn.call(n, r);
  }
  var Nn = "__lodash_hash_undefined__";
  function Un(r, n) {
    var t = this.__data__;
    return this.size += this.has(r) ? 0 : 1, t[r] = D && n === void 0 ? Nn : n, this;
  }
  function C(r) {
    var n = -1, t = r == null ? 0 : r.length;
    for (this.clear(); ++n < t; ) {
      var e = r[n];
      this.set(e[0], e[1]);
    }
  }
  C.prototype.clear = Mn;
  C.prototype.delete = jn;
  C.prototype.get = Fn;
  C.prototype.has = Bn;
  C.prototype.set = Un;
  function zn() {
    this.__data__ = [], this.size = 0;
  }
  function Ir(r, n) {
    return r === n || r !== r && n !== n;
  }
  function K(r, n) {
    for (var t = r.length; t--; )
      if (Ir(r[t][0], n))
        return t;
    return -1;
  }
  var Hn = Array.prototype, Kn = Hn.splice;
  function Xn(r) {
    var n = this.__data__, t = K(n, r);
    if (t < 0)
      return !1;
    var e = n.length - 1;
    return t == e ? n.pop() : Kn.call(n, t, 1), --this.size, !0;
  }
  function qn(r) {
    var n = this.__data__, t = K(n, r);
    return t < 0 ? void 0 : n[t][1];
  }
  function Wn(r) {
    return K(this.__data__, r) > -1;
  }
  function Yn(r, n) {
    var t = this.__data__, e = K(t, r);
    return e < 0 ? (++this.size, t.push([r, n])) : t[e][1] = n, this;
  }
  function $(r) {
    var n = -1, t = r == null ? 0 : r.length;
    for (this.clear(); ++n < t; ) {
      var e = r[n];
      this.set(e[0], e[1]);
    }
  }
  $.prototype.clear = zn;
  $.prototype.delete = Xn;
  $.prototype.get = qn;
  $.prototype.has = Wn;
  $.prototype.set = Yn;
  var Zn = L(A, "Map");
  const G = Zn;
  function Jn() {
    this.size = 0, this.__data__ = {
      hash: new C(),
      map: new (G || $)(),
      string: new C()
    };
  }
  function Qn(r) {
    var n = typeof r;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? r !== "__proto__" : r === null;
  }
  function X(r, n) {
    var t = r.__data__;
    return Qn(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
  }
  function Vn(r) {
    var n = X(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  function kn(r) {
    return X(this, r).get(r);
  }
  function rt(r) {
    return X(this, r).has(r);
  }
  function nt(r, n) {
    var t = X(this, r), e = t.size;
    return t.set(r, n), this.size += t.size == e ? 0 : 1, this;
  }
  function O(r) {
    var n = -1, t = r == null ? 0 : r.length;
    for (this.clear(); ++n < t; ) {
      var e = r[n];
      this.set(e[0], e[1]);
    }
  }
  O.prototype.clear = Jn;
  O.prototype.delete = Vn;
  O.prototype.get = kn;
  O.prototype.has = rt;
  O.prototype.set = nt;
  var tt = "Expected a function";
  function er(r, n) {
    if (typeof r != "function" || n != null && typeof n != "function")
      throw new TypeError(tt);
    var t = function() {
      var e = arguments, i = n ? n.apply(this, e) : e[0], a = t.cache;
      if (a.has(i))
        return a.get(i);
      var o = r.apply(this, e);
      return t.cache = a.set(i, o) || a, o;
    };
    return t.cache = new (er.Cache || O)(), t;
  }
  er.Cache = O;
  var et = 500;
  function at(r) {
    var n = er(r, function(e) {
      return t.size === et && t.clear(), e;
    }), t = n.cache;
    return n;
  }
  var it = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ot = /\\(\\)?/g, ut = at(function(r) {
    var n = [];
    return r.charCodeAt(0) === 46 && n.push(""), r.replace(it, function(t, e, i, a) {
      n.push(i ? a.replace(ot, "$1") : e || t);
    }), n;
  });
  const ft = ut;
  var st = 1 / 0, gr = P ? P.prototype : void 0, lr = gr ? gr.toString : void 0;
  function Fr(r) {
    if (typeof r == "string")
      return r;
    if (h(r))
      return z(r, Fr) + "";
    if (F(r))
      return lr ? lr.call(r) : "";
    var n = r + "";
    return n == "0" && 1 / r == -st ? "-0" : n;
  }
  function ct(r) {
    return r == null ? "" : Fr(r);
  }
  function Dr(r, n) {
    return h(r) ? r : nr(r, n) ? [r] : ft(ct(r));
  }
  var pt = 1 / 0;
  function q(r) {
    if (typeof r == "string" || F(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -pt ? "-0" : n;
  }
  function ar(r, n) {
    n = Dr(n, r);
    for (var t = 0, e = n.length; r != null && t < e; )
      r = r[q(n[t++])];
    return t && t == e ? r : void 0;
  }
  function gt() {
    this.__data__ = new $(), this.size = 0;
  }
  function lt(r) {
    var n = this.__data__, t = n.delete(r);
    return this.size = n.size, t;
  }
  function dt(r) {
    return this.__data__.get(r);
  }
  function ht(r) {
    return this.__data__.has(r);
  }
  var _t = 200;
  function yt(r, n) {
    var t = this.__data__;
    if (t instanceof $) {
      var e = t.__data__;
      if (!G || e.length < _t - 1)
        return e.push([r, n]), this.size = ++t.size, this;
      t = this.__data__ = new O(e);
    }
    return t.set(r, n), this.size = t.size, this;
  }
  function T(r) {
    var n = this.__data__ = new $(r);
    this.size = n.size;
  }
  T.prototype.clear = gt;
  T.prototype.delete = lt;
  T.prototype.get = dt;
  T.prototype.has = ht;
  T.prototype.set = yt;
  var bt = "__lodash_hash_undefined__";
  function vt(r) {
    return this.__data__.set(r, bt), this;
  }
  function Tt(r) {
    return this.__data__.has(r);
  }
  function H(r) {
    var n = -1, t = r == null ? 0 : r.length;
    for (this.__data__ = new O(); ++n < t; )
      this.add(r[n]);
  }
  H.prototype.add = H.prototype.push = vt;
  H.prototype.has = Tt;
  function At(r, n) {
    for (var t = -1, e = r == null ? 0 : r.length; ++t < e; )
      if (n(r[t], t, r))
        return !0;
    return !1;
  }
  function $t(r, n) {
    return r.has(n);
  }
  var Ot = 1, wt = 2;
  function Gr(r, n, t, e, i, a) {
    var o = t & Ot, u = r.length, s = n.length;
    if (u != s && !(o && s > u))
      return !1;
    var f = a.get(r), l = a.get(n);
    if (f && l)
      return f == n && l == r;
    var g = -1, p = !0, y = t & wt ? new H() : void 0;
    for (a.set(r, n), a.set(n, r); ++g < u; ) {
      var d = r[g], _ = n[g];
      if (e)
        var w = o ? e(_, d, g, n, r, a) : e(d, _, g, r, n, a);
      if (w !== void 0) {
        if (w)
          continue;
        p = !1;
        break;
      }
      if (y) {
        if (!At(n, function(E, S) {
          if (!$t(y, S) && (d === E || i(d, E, t, e, a)))
            return y.push(S);
        })) {
          p = !1;
          break;
        }
      } else if (!(d === _ || i(d, _, t, e, a))) {
        p = !1;
        break;
      }
    }
    return a.delete(r), a.delete(n), p;
  }
  var Pt = A.Uint8Array;
  const dr = Pt;
  function Et(r) {
    var n = -1, t = Array(r.size);
    return r.forEach(function(e, i) {
      t[++n] = [i, e];
    }), t;
  }
  function St(r) {
    var n = -1, t = Array(r.size);
    return r.forEach(function(e) {
      t[++n] = e;
    }), t;
  }
  var mt = 1, Ct = 2, xt = "[object Boolean]", Mt = "[object Date]", jt = "[object Error]", Lt = "[object Map]", Rt = "[object Number]", It = "[object RegExp]", Ft = "[object Set]", Dt = "[object String]", Gt = "[object Symbol]", Bt = "[object ArrayBuffer]", Nt = "[object DataView]", hr = P ? P.prototype : void 0, Y = hr ? hr.valueOf : void 0;
  function Ut(r, n, t, e, i, a, o) {
    switch (t) {
      case Nt:
        if (r.byteLength != n.byteLength || r.byteOffset != n.byteOffset)
          return !1;
        r = r.buffer, n = n.buffer;
      case Bt:
        return !(r.byteLength != n.byteLength || !a(new dr(r), new dr(n)));
      case xt:
      case Mt:
      case Rt:
        return Ir(+r, +n);
      case jt:
        return r.name == n.name && r.message == n.message;
      case It:
      case Dt:
        return r == n + "";
      case Lt:
        var u = Et;
      case Ft:
        var s = e & mt;
        if (u || (u = St), r.size != n.size && !s)
          return !1;
        var f = o.get(r);
        if (f)
          return f == n;
        e |= Ct, o.set(r, n);
        var l = Gr(u(r), u(n), e, i, a, o);
        return o.delete(r), l;
      case Gt:
        if (Y)
          return Y.call(r) == Y.call(n);
    }
    return !1;
  }
  function zt(r, n) {
    for (var t = -1, e = n.length, i = r.length; ++t < e; )
      r[i + t] = n[t];
    return r;
  }
  function Ht(r, n, t) {
    var e = n(r);
    return h(r) ? e : zt(e, t(r));
  }
  function Kt(r, n) {
    for (var t = -1, e = r == null ? 0 : r.length, i = 0, a = []; ++t < e; ) {
      var o = r[t];
      n(o, t, r) && (a[i++] = o);
    }
    return a;
  }
  function Xt() {
    return [];
  }
  var qt = Object.prototype, Wt = qt.propertyIsEnumerable, _r = Object.getOwnPropertySymbols, Yt = _r ? function(r) {
    return r == null ? [] : (r = Object(r), Kt(_r(r), function(n) {
      return Wt.call(r, n);
    }));
  } : Xt;
  const Zt = Yt;
  function Jt(r, n) {
    for (var t = -1, e = Array(r); ++t < r; )
      e[t] = n(t);
    return e;
  }
  var Qt = "[object Arguments]";
  function yr(r) {
    return M(r) && j(r) == Qt;
  }
  var Br = Object.prototype, Vt = Br.hasOwnProperty, kt = Br.propertyIsEnumerable, re = yr(/* @__PURE__ */ function() {
    return arguments;
  }()) ? yr : function(r) {
    return M(r) && Vt.call(r, "callee") && !kt.call(r, "callee");
  };
  const Nr = re;
  function ne() {
    return !1;
  }
  var Ur = typeof b == "object" && b && !b.nodeType && b, br = Ur && typeof v == "object" && v && !v.nodeType && v, te = br && br.exports === Ur, vr = te ? A.Buffer : void 0, ee = vr ? vr.isBuffer : void 0, ae = ee || ne;
  const J = ae;
  var ie = 9007199254740991, oe = /^(?:0|[1-9]\d*)$/;
  function zr(r, n) {
    var t = typeof r;
    return n = n ?? ie, !!n && (t == "number" || t != "symbol" && oe.test(r)) && r > -1 && r % 1 == 0 && r < n;
  }
  var ue = 9007199254740991;
  function ir(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= ue;
  }
  var fe = "[object Arguments]", se = "[object Array]", ce = "[object Boolean]", pe = "[object Date]", ge = "[object Error]", le = "[object Function]", de = "[object Map]", he = "[object Number]", _e = "[object Object]", ye = "[object RegExp]", be = "[object Set]", ve = "[object String]", Te = "[object WeakMap]", Ae = "[object ArrayBuffer]", $e = "[object DataView]", Oe = "[object Float32Array]", we = "[object Float64Array]", Pe = "[object Int8Array]", Ee = "[object Int16Array]", Se = "[object Int32Array]", me = "[object Uint8Array]", Ce = "[object Uint8ClampedArray]", xe = "[object Uint16Array]", Me = "[object Uint32Array]", c = {};
  c[Oe] = c[we] = c[Pe] = c[Ee] = c[Se] = c[me] = c[Ce] = c[xe] = c[Me] = !0;
  c[fe] = c[se] = c[Ae] = c[ce] = c[$e] = c[pe] = c[ge] = c[le] = c[de] = c[he] = c[_e] = c[ye] = c[be] = c[ve] = c[Te] = !1;
  function je(r) {
    return M(r) && ir(r.length) && !!c[j(r)];
  }
  function Hr(r) {
    return function(n) {
      return r(n);
    };
  }
  var Kr = typeof b == "object" && b && !b.nodeType && b, I = Kr && typeof v == "object" && v && !v.nodeType && v, Le = I && I.exports === Kr, Z = Le && jr.process, Re = function() {
    try {
      var r = I && I.require && I.require("util").types;
      return r || Z && Z.binding && Z.binding("util");
    } catch {
    }
  }();
  const Tr = Re;
  var Ar = Tr && Tr.isTypedArray, Ie = Ar ? Hr(Ar) : je;
  const Xr = Ie;
  var Fe = Object.prototype, De = Fe.hasOwnProperty;
  function Ge(r, n) {
    var t = h(r), e = !t && Nr(r), i = !t && !e && J(r), a = !t && !e && !i && Xr(r), o = t || e || i || a, u = o ? Jt(r.length, String) : [], s = u.length;
    for (var f in r)
      (n || De.call(r, f)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
      (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      i && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      a && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
      zr(f, s))) && u.push(f);
    return u;
  }
  var Be = Object.prototype;
  function Ne(r) {
    var n = r && r.constructor, t = typeof n == "function" && n.prototype || Be;
    return r === t;
  }
  function Ue(r, n) {
    return function(t) {
      return r(n(t));
    };
  }
  var ze = Ue(Object.keys, Object);
  const He = ze;
  var Ke = Object.prototype, Xe = Ke.hasOwnProperty;
  function qe(r) {
    if (!Ne(r))
      return He(r);
    var n = [];
    for (var t in Object(r))
      Xe.call(r, t) && t != "constructor" && n.push(t);
    return n;
  }
  function or(r) {
    return r != null && ir(r.length) && !Rr(r);
  }
  function ur(r) {
    return or(r) ? Ge(r) : qe(r);
  }
  function $r(r) {
    return Ht(r, ur, Zt);
  }
  var We = 1, Ye = Object.prototype, Ze = Ye.hasOwnProperty;
  function Je(r, n, t, e, i, a) {
    var o = t & We, u = $r(r), s = u.length, f = $r(n), l = f.length;
    if (s != l && !o)
      return !1;
    for (var g = s; g--; ) {
      var p = u[g];
      if (!(o ? p in n : Ze.call(n, p)))
        return !1;
    }
    var y = a.get(r), d = a.get(n);
    if (y && d)
      return y == n && d == r;
    var _ = !0;
    a.set(r, n), a.set(n, r);
    for (var w = o; ++g < s; ) {
      p = u[g];
      var E = r[p], S = n[p];
      if (e)
        var sr = o ? e(S, E, p, n, r, a) : e(E, S, p, r, n, a);
      if (!(sr === void 0 ? E === S || i(E, S, t, e, a) : sr)) {
        _ = !1;
        break;
      }
      w || (w = p == "constructor");
    }
    if (_ && !w) {
      var B = r.constructor, N = n.constructor;
      B != N && "constructor" in r && "constructor" in n && !(typeof B == "function" && B instanceof B && typeof N == "function" && N instanceof N) && (_ = !1);
    }
    return a.delete(r), a.delete(n), _;
  }
  var Qe = L(A, "DataView");
  const Q = Qe;
  var Ve = L(A, "Promise");
  const V = Ve;
  var ke = L(A, "Set");
  const k = ke;
  var ra = L(A, "WeakMap");
  const rr = ra;
  var Or = "[object Map]", na = "[object Object]", wr = "[object Promise]", Pr = "[object Set]", Er = "[object WeakMap]", Sr = "[object DataView]", ta = x(Q), ea = x(G), aa = x(V), ia = x(k), oa = x(rr), m = j;
  (Q && m(new Q(new ArrayBuffer(1))) != Sr || G && m(new G()) != Or || V && m(V.resolve()) != wr || k && m(new k()) != Pr || rr && m(new rr()) != Er) && (m = function(r) {
    var n = j(r), t = n == na ? r.constructor : void 0, e = t ? x(t) : "";
    if (e)
      switch (e) {
        case ta:
          return Sr;
        case ea:
          return Or;
        case aa:
          return wr;
        case ia:
          return Pr;
        case oa:
          return Er;
      }
    return n;
  });
  const mr = m;
  var ua = 1, Cr = "[object Arguments]", xr = "[object Array]", U = "[object Object]", fa = Object.prototype, Mr = fa.hasOwnProperty;
  function sa(r, n, t, e, i, a) {
    var o = h(r), u = h(n), s = o ? xr : mr(r), f = u ? xr : mr(n);
    s = s == Cr ? U : s, f = f == Cr ? U : f;
    var l = s == U, g = f == U, p = s == f;
    if (p && J(r)) {
      if (!J(n))
        return !1;
      o = !0, l = !1;
    }
    if (p && !l)
      return a || (a = new T()), o || Xr(r) ? Gr(r, n, t, e, i, a) : Ut(r, n, s, t, e, i, a);
    if (!(t & ua)) {
      var y = l && Mr.call(r, "__wrapped__"), d = g && Mr.call(n, "__wrapped__");
      if (y || d) {
        var _ = y ? r.value() : r, w = d ? n.value() : n;
        return a || (a = new T()), i(_, w, t, e, a);
      }
    }
    return p ? (a || (a = new T()), Je(r, n, t, e, i, a)) : !1;
  }
  function fr(r, n, t, e, i) {
    return r === n ? !0 : r == null || n == null || !M(r) && !M(n) ? r !== r && n !== n : sa(r, n, t, e, fr, i);
  }
  var ca = 1, pa = 2;
  function ga(r, n, t, e) {
    var i = t.length, a = i, o = !e;
    if (r == null)
      return !a;
    for (r = Object(r); i--; ) {
      var u = t[i];
      if (o && u[2] ? u[1] !== r[u[0]] : !(u[0] in r))
        return !1;
    }
    for (; ++i < a; ) {
      u = t[i];
      var s = u[0], f = r[s], l = u[1];
      if (o && u[2]) {
        if (f === void 0 && !(s in r))
          return !1;
      } else {
        var g = new T();
        if (e)
          var p = e(f, l, s, r, n, g);
        if (!(p === void 0 ? fr(l, f, ca | pa, e, g) : p))
          return !1;
      }
    }
    return !0;
  }
  function qr(r) {
    return r === r && !tr(r);
  }
  function la(r) {
    for (var n = ur(r), t = n.length; t--; ) {
      var e = n[t], i = r[e];
      n[t] = [e, i, qr(i)];
    }
    return n;
  }
  function Wr(r, n) {
    return function(t) {
      return t == null ? !1 : t[r] === n && (n !== void 0 || r in Object(t));
    };
  }
  function da(r) {
    var n = la(r);
    return n.length == 1 && n[0][2] ? Wr(n[0][0], n[0][1]) : function(t) {
      return t === r || ga(t, r, n);
    };
  }
  function ha(r, n, t) {
    var e = r == null ? void 0 : ar(r, n);
    return e === void 0 ? t : e;
  }
  function _a(r, n) {
    return r != null && n in Object(r);
  }
  function ya(r, n, t) {
    n = Dr(n, r);
    for (var e = -1, i = n.length, a = !1; ++e < i; ) {
      var o = q(n[e]);
      if (!(a = r != null && t(r, o)))
        break;
      r = r[o];
    }
    return a || ++e != i ? a : (i = r == null ? 0 : r.length, !!i && ir(i) && zr(o, i) && (h(r) || Nr(r)));
  }
  function ba(r, n) {
    return r != null && ya(r, n, _a);
  }
  var va = 1, Ta = 2;
  function Aa(r, n) {
    return nr(r) && qr(n) ? Wr(q(r), n) : function(t) {
      var e = ha(t, r);
      return e === void 0 && e === n ? ba(t, r) : fr(n, e, va | Ta);
    };
  }
  function Yr(r) {
    return r;
  }
  function $a(r) {
    return function(n) {
      return n == null ? void 0 : n[r];
    };
  }
  function Oa(r) {
    return function(n) {
      return ar(n, r);
    };
  }
  function wa(r) {
    return nr(r) ? $a(q(r)) : Oa(r);
  }
  function Pa(r) {
    return typeof r == "function" ? r : r == null ? Yr : typeof r == "object" ? h(r) ? Aa(r[0], r[1]) : da(r) : wa(r);
  }
  function Ea(r) {
    return function(n, t, e) {
      for (var i = -1, a = Object(n), o = e(n), u = o.length; u--; ) {
        var s = o[r ? u : ++i];
        if (t(a[s], s, a) === !1)
          break;
      }
      return n;
    };
  }
  var Sa = Ea();
  const ma = Sa;
  function Ca(r, n) {
    return r && ma(r, n, ur);
  }
  function xa(r, n) {
    return function(t, e) {
      if (t == null)
        return t;
      if (!or(t))
        return r(t, e);
      for (var i = t.length, a = n ? i : -1, o = Object(t); (n ? a-- : ++a < i) && e(o[a], a, o) !== !1; )
        ;
      return t;
    };
  }
  var Ma = xa(Ca);
  const ja = Ma;
  function La(r, n) {
    var t = -1, e = or(r) ? Array(r.length) : [];
    return ja(r, function(i, a, o) {
      e[++t] = n(i, a, o);
    }), e;
  }
  function Ra(r, n) {
    var t = r.length;
    for (r.sort(n); t--; )
      r[t] = r[t].value;
    return r;
  }
  function Ia(r, n) {
    if (r !== n) {
      var t = r !== void 0, e = r === null, i = r === r, a = F(r), o = n !== void 0, u = n === null, s = n === n, f = F(n);
      if (!u && !f && !a && r > n || a && o && s && !u && !f || e && o && s || !t && s || !i)
        return 1;
      if (!e && !a && !f && r < n || f && t && i && !e && !a || u && t && i || !o && i || !s)
        return -1;
    }
    return 0;
  }
  function Fa(r, n, t) {
    for (var e = -1, i = r.criteria, a = n.criteria, o = i.length, u = t.length; ++e < o; ) {
      var s = Ia(i[e], a[e]);
      if (s) {
        if (e >= u)
          return s;
        var f = t[e];
        return s * (f == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  function Da(r, n, t) {
    n.length ? n = z(n, function(a) {
      return h(a) ? function(o) {
        return ar(o, a.length === 1 ? a[0] : a);
      } : a;
    }) : n = [Yr];
    var e = -1;
    n = z(n, Hr(Pa));
    var i = La(r, function(a, o, u) {
      var s = z(n, function(f) {
        return f(a);
      });
      return { criteria: s, index: ++e, value: a };
    });
    return Ra(i, function(a, o) {
      return Fa(a, o, t);
    });
  }
  function Ga(r, n, t, e) {
    return r == null ? [] : (h(n) || (n = n == null ? [] : [n]), t = e ? void 0 : t, h(t) || (t = t == null ? [] : [t]), Da(r, n, t));
  }
  console.log(Ga);
});
export default Ba();
