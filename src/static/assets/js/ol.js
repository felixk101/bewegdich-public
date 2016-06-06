// OpenLayers 3. See http://openlayers.org/
// License: https://raw.githubusercontent.com/openlayers/ol3/master/LICENSE.md
// Version: v3.16.0

(function (root, factory) {
    if (typeof exports === "object") {
        module.exports = factory();
    } else if (typeof define === "function" && define.amd) {
        define([], factory);
    } else {
        root.ol = factory();
    }
}(this, function () {
    var OPENLAYERS = {};
    var l, aa = this;

    function t(a, c, d) {
        a = a.split(".");
        d = d || aa;
        a[0] in d || !d.execScript || d.execScript("var " + a[0]);
        for (var e; a.length && (e = a.shift());)a.length || void 0 === c ? d[e] ? d = d[e] : d = d[e] = {} : d[e] = c
    }

    function ba(a) {
        a.Ub = function () {
            return a.Og ? a.Og : a.Og = new a
        }
    }

    function ca(a) {
        var c = typeof a;
        if ("object" == c)if (a) {
            if (a instanceof Array)return "array";
            if (a instanceof Object)return c;
            var d = Object.prototype.toString.call(a);
            if ("[object Window]" == d)return "object";
            if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return "array";
            if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return "function"
        } else return "null";
        else if ("function" == c && "undefined" == typeof a.call)return "object";
        return c
    }

    function da(a) {
        var c = ca(a);
        return "array" == c || "object" == c && "number" == typeof a.length
    }

    function ea(a) {
        return "string" == typeof a
    }

    function fa(a) {
        return "number" == typeof a
    }

    function ga(a) {
        return "function" == ca(a)
    }

    function ha(a) {
        var c = typeof a;
        return "object" == c && null != a || "function" == c
    }

    function w(a) {
        return a[ia] || (a[ia] = ++ja)
    }

    var ia = "closure_uid_" + (1E9 * Math.random() >>> 0), ja = 0;

    function ka(a, c, d) {
        return a.call.apply(a.bind, arguments)
    }

    function la(a, c, d) {
        if (!a)throw Error();
        if (2 < arguments.length) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function () {
                var d = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(d, e);
                return a.apply(c, d)
            }
        }
        return function () {
            return a.apply(c, arguments)
        }
    }

    function ma(a, c, d) {
        ma = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ka : la;
        return ma.apply(null, arguments)
    }

    function y(a, c) {
        function d() {
        }

        d.prototype = c.prototype;
        a.ia = c.prototype;
        a.prototype = new d;
        a.prototype.constructor = a;
        a.Lp = function (a, d, g) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++)h[k - 2] = arguments[k];
            return c.prototype[d].apply(a, h)
        }
    };
    var na, oa;

    function pa() {
    }

    var qa = Function("return this")();
    var ra;
    var sa = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };

    function ta(a) {
        if (!va.test(a))return a;
        -1 != a.indexOf("&") && (a = a.replace(wa, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(xa, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(ya, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(za, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(Aa, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(Ba, "&#0;"));
        return a
    }

    var wa = /&/g, xa = /</g, ya = />/g, za = /"/g, Aa = /'/g, Ba = /\x00/g, va = /[\x00&<>"']/;

    function Ca(a, c) {
        return a < c ? -1 : a > c ? 1 : 0
    };
    function Da(a, c, d) {
        return Math.min(Math.max(a, c), d)
    }

    var Ea = function () {
        var a;
        "cosh" in Math ? a = Math.cosh : a = function (a) {
            a = Math.exp(a);
            return (a + 1 / a) / 2
        };
        return a
    }();

    function Fa(a, c, d, e, f, g) {
        var h = f - d, k = g - e;
        if (0 !== h || 0 !== k) {
            var m = ((a - d) * h + (c - e) * k) / (h * h + k * k);
            1 < m ? (d = f, e = g) : 0 < m && (d += h * m, e += k * m)
        }
        return Ga(a, c, d, e)
    }

    function Ga(a, c, d, e) {
        a = d - a;
        c = e - c;
        return a * a + c * c
    }

    function Ha(a) {
        return a * Math.PI / 180
    }

    function Ja(a, c) {
        var d = a % c;
        return 0 > d * c ? d + c : d
    }

    function La(a, c, d) {
        return a + d * (c - a)
    };
    function Ma(a) {
        return function (c) {
            if (c)return [Da(c[0], a[0], a[2]), Da(c[1], a[1], a[3])]
        }
    }

    function Na(a) {
        return a
    };
    function Oa(a, c, d) {
        this.center = a;
        this.resolution = c;
        this.rotation = d
    };
    var Pa = "function" === typeof Object.assign ? Object.assign : function (a, c) {
        if (void 0 === a || null === a)throw new TypeError("Cannot convert undefined or null to object");
        for (var d = Object(a), e = 1, f = arguments.length; e < f; ++e) {
            var g = arguments[e];
            if (void 0 !== g && null !== g)for (var h in g)g.hasOwnProperty(h) && (d[h] = g[h])
        }
        return d
    };

    function Qa(a) {
        for (var c in a)delete a[c]
    }

    function Ra(a) {
        var c = [], d;
        for (d in a)c.push(a[d]);
        return c
    }

    function Sa(a) {
        for (var c in a)return !1;
        return !c
    };
    var Ua = "olm_" + (1E4 * Math.random() | 0);

    function Va(a) {
        function c(c) {
            var e = a.listener, f = a.jg || a.target;
            a.lg && Xa(a);
            return e.call(f, c)
        }

        return a.kg = c
    }

    function Ya(a, c, d, e) {
        for (var f, g = 0, h = a.length; g < h; ++g)if (f = a[g], f.listener === c && f.jg === d)return e && (f.deleteIndex = g), f
    }

    function Za(a, c) {
        var d = a[Ua];
        return d ? d[c] : void 0
    }

    function $a(a) {
        var c = a[Ua];
        c || (c = a[Ua] = {});
        return c
    }

    function ab(a, c) {
        var d = Za(a, c);
        if (d) {
            for (var e = 0, f = d.length; e < f; ++e)a.removeEventListener(c, d[e].kg), Qa(d[e]);
            d.length = 0;
            if (d = a[Ua])delete d[c], 0 === Object.keys(d).length && delete a[Ua]
        }
    }

    function C(a, c, d, e, f) {
        var g = $a(a), h = g[c];
        h || (h = g[c] = []);
        (g = Ya(h, d, e, !1)) ? f || (g.lg = !1) : (g = {
            jg: e,
            lg: !!f,
            listener: d,
            target: a,
            type: c
        }, a.addEventListener(c, Va(g)), h.push(g));
        return g
    }

    function bb(a, c, d, e) {
        return C(a, c, d, e, !0)
    }

    function cb(a, c, d, e) {
        (a = Za(a, c)) && (d = Ya(a, d, e, !0)) && Xa(d)
    }

    function Xa(a) {
        if (a && a.target) {
            a.target.removeEventListener(a.type, a.kg);
            var c = Za(a.target, a.type);
            if (c) {
                var d = "deleteIndex" in a ? a.deleteIndex : c.indexOf(a);
                -1 !== d && c.splice(d, 1);
                0 === c.length && ab(a.target, a.type)
            }
            Qa(a)
        }
    }

    function db(a) {
        var c = $a(a), d;
        for (d in c)ab(a, d)
    };
    function eb() {
    }

    eb.prototype.Cb = !1;
    function fb(a) {
        a.Cb || (a.Cb = !0, a.fa())
    }

    eb.prototype.fa = pa;
    function gb(a, c) {
        this.type = a;
        this.target = c || null
    }

    gb.prototype.preventDefault = gb.prototype.stopPropagation = function () {
        this.no = !0
    };
    function hb(a) {
        a.stopPropagation()
    }

    function ib(a) {
        a.preventDefault()
    };
    function jb() {
        this.Qa = {};
        this.ya = {};
        this.va = {}
    }

    y(jb, eb);
    jb.prototype.addEventListener = function (a, c) {
        var d = this.va[a];
        d || (d = this.va[a] = []);
        -1 === d.indexOf(c) && d.push(c)
    };
    jb.prototype.b = function (a) {
        var c = "string" === typeof a ? new gb(a) : a;
        a = c.type;
        c.target = this;
        var d = this.va[a], e;
        if (d) {
            a in this.ya || (this.ya[a] = 0, this.Qa[a] = 0);
            ++this.ya[a];
            for (var f = 0, g = d.length; f < g; ++f)if (!1 === d[f].call(this, c) || c.no) {
                e = !1;
                break
            }
            --this.ya[a];
            if (0 === this.ya[a]) {
                c = this.Qa[a];
                for (delete this.Qa[a]; c--;)this.removeEventListener(a, pa);
                delete this.ya[a]
            }
            return e
        }
    };
    jb.prototype.fa = function () {
        db(this)
    };
    function lb(a, c) {
        return c ? c in a.va : 0 < Object.keys(a.va).length
    }

    jb.prototype.removeEventListener = function (a, c) {
        var d = this.va[a];
        if (d) {
            var e = d.indexOf(c);
            a in this.Qa ? (d[e] = pa, ++this.Qa[a]) : (d.splice(e, 1), 0 === d.length && delete this.va[a])
        }
    };
    function mb() {
        jb.call(this);
        this.g = 0
    }

    y(mb, jb);
    function nb(a) {
        if (Array.isArray(a))for (var c = 0, d = a.length; c < d; ++c)Xa(a[c]); else Xa(a)
    }

    l = mb.prototype;
    l.u = function () {
        ++this.g;
        this.b("change")
    };
    l.H = function () {
        return this.g
    };
    l.D = function (a, c, d) {
        if (Array.isArray(a)) {
            for (var e = a.length, f = Array(e), g = 0; g < e; ++g)f[g] = C(this, a[g], c, d);
            return f
        }
        return C(this, a, c, d)
    };
    l.I = function (a, c, d) {
        if (Array.isArray(a)) {
            for (var e = a.length, f = Array(e), g = 0; g < e; ++g)f[g] = bb(this, a[g], c, d);
            return f
        }
        return bb(this, a, c, d)
    };
    l.G = function (a, c, d) {
        if (Array.isArray(a))for (var e = 0, f = a.length; e < f; ++e)cb(this, a[e], c, d); else cb(this, a, c, d)
    };
    l.J = nb;
    function ob(a, c, d) {
        gb.call(this, a);
        this.key = c;
        this.oldValue = d
    }

    y(ob, gb);
    function pb(a) {
        mb.call(this);
        w(this);
        this.U = {};
        void 0 !== a && this.C(a)
    }

    y(pb, mb);
    var qb = {};

    function rb(a) {
        return qb.hasOwnProperty(a) ? qb[a] : qb[a] = "change:" + a
    }

    l = pb.prototype;
    l.get = function (a) {
        var c;
        this.U.hasOwnProperty(a) && (c = this.U[a]);
        return c
    };
    l.K = function () {
        return Object.keys(this.U)
    };
    l.L = function () {
        return Pa({}, this.U)
    };
    function sb(a, c, d) {
        var e;
        e = rb(c);
        a.b(new ob(e, c, d));
        a.b(new ob("propertychange", c, d))
    }

    l.set = function (a, c, d) {
        d ? this.U[a] = c : (d = this.U[a], this.U[a] = c, d !== c && sb(this, a, d))
    };
    l.C = function (a, c) {
        for (var d in a)this.set(d, a[d], c)
    };
    l.P = function (a, c) {
        if (a in this.U) {
            var d = this.U[a];
            delete this.U[a];
            c || sb(this, a, d)
        }
    };
    function tb(a, c) {
        return a > c ? 1 : a < c ? -1 : 0
    }

    function ub(a, c) {
        return 0 <= a.indexOf(c)
    }

    function vb(a, c, d) {
        var e = a.length;
        if (a[0] <= c)return 0;
        if (!(c <= a[e - 1]))if (0 < d)for (d = 1; d < e; ++d) {
            if (a[d] < c)return d - 1
        } else if (0 > d)for (d = 1; d < e; ++d) {
            if (a[d] <= c)return d
        } else for (d = 1; d < e; ++d) {
            if (a[d] == c)return d;
            if (a[d] < c)return a[d - 1] - c < c - a[d] ? d - 1 : d
        }
        return e - 1
    }

    function wb(a) {
        return a.reduce(function (a, d) {
            return Array.isArray(d) ? a.concat(wb(d)) : a.concat(d)
        }, [])
    }

    function xb(a, c) {
        var d, e = da(c) ? c : [c], f = e.length;
        for (d = 0; d < f; d++)a[a.length] = e[d]
    }

    function yb(a, c) {
        var d = a.indexOf(c), e = -1 < d;
        e && a.splice(d, 1);
        return e
    }

    function zb(a, c) {
        for (var d = a.length >>> 0, e, f = 0; f < d; f++)if (e = a[f], c(e, f, a))return e;
        return null
    }

    function Ab(a, c) {
        var d = a.length;
        if (d !== c.length)return !1;
        for (var e = 0; e < d; e++)if (a[e] !== c[e])return !1;
        return !0
    }

    function Bb(a) {
        var c = Cb, d = a.length, e = Array(a.length), f;
        for (f = 0; f < d; f++)e[f] = {index: f, value: a[f]};
        e.sort(function (a, d) {
            return c(a.value, d.value) || a.index - d.index
        });
        for (f = 0; f < a.length; f++)a[f] = e[f].value
    }

    function Db(a, c) {
        var d;
        return a.every(function (e, f) {
            d = f;
            return !c(e, f, a)
        }) ? -1 : d
    };
    function Eb(a) {
        return function (c, d, e) {
            if (void 0 !== c)return c = vb(a, c, e), c = Da(c + d, 0, a.length - 1), a[c]
        }
    }

    function Fb(a, c, d) {
        return function (e, f, g) {
            if (void 0 !== e)return e = Math.max(Math.floor(Math.log(c / e) / Math.log(a) + (0 < g ? 0 : 0 > g ? 1 : .5)) + f, 0), void 0 !== d && (e = Math.min(e, d)), c / Math.pow(a, e)
        }
    };
    function Gb(a) {
        if (void 0 !== a)return 0
    }

    function Hb(a, c) {
        if (void 0 !== a)return a + c
    }

    function Ib(a) {
        var c = 2 * Math.PI / a;
        return function (a, e) {
            if (void 0 !== a)return a = Math.floor((a + e) / c + .5) * c
        }
    }

    function Jb() {
        var a = Ha(5);
        return function (c, d) {
            if (void 0 !== c)return Math.abs(c + d) <= a ? 0 : c + d
        }
    };
    function Kb(a, c) {
        var d = void 0 !== c ? a.toFixed(c) : "" + a, e = d.indexOf("."), e = -1 === e ? d.length : e;
        return 2 < e ? d : Array(3 - e).join("0") + d
    }

    function Lb(a) {
        a = ("" + a).split(".");
        for (var c = ["1", "3"], d = 0; d < Math.max(a.length, c.length); d++) {
            var e = parseInt(a[d] || "0", 10), f = parseInt(c[d] || "0", 10);
            if (e > f)return 1;
            if (f > e)return -1
        }
        return 0
    };
    function Mb(a, c) {
        a[0] += c[0];
        a[1] += c[1];
        return a
    }

    function Nb(a, c) {
        var d = a[0], e = a[1], f = c[0], g = c[1], h = f[0], f = f[1], k = g[0], g = g[1], m = k - h, n = g - f, d = 0 === m && 0 === n ? 0 : (m * (d - h) + n * (e - f)) / (m * m + n * n || 0);
        0 >= d || (1 <= d ? (h = k, f = g) : (h += d * m, f += d * n));
        return [h, f]
    }

    function Ob(a, c, d) {
        a = Ja(a + 180, 360) - 180;
        var e = Math.abs(3600 * a);
        return Math.floor(e / 3600) + "\u00b0 " + Kb(Math.floor(e / 60 % 60)) + "\u2032 " + Kb(e % 60, d || 0) + "\u2033 " + c.charAt(0 > a ? 1 : 0)
    }

    function Pb(a, c, d) {
        return a ? c.replace("{x}", a[0].toFixed(d)).replace("{y}", a[1].toFixed(d)) : ""
    }

    function Qb(a, c) {
        for (var d = !0, e = a.length - 1; 0 <= e; --e)if (a[e] != c[e]) {
            d = !1;
            break
        }
        return d
    }

    function Rb(a, c) {
        var d = Math.cos(c), e = Math.sin(c), f = a[1] * d + a[0] * e;
        a[0] = a[0] * d - a[1] * e;
        a[1] = f;
        return a
    }

    function Sb(a, c) {
        var d = a[0] - c[0], e = a[1] - c[1];
        return d * d + e * e
    }

    function Tb(a, c) {
        return Sb(a, Nb(a, c))
    }

    function Ub(a, c) {
        return Pb(a, "{x}, {y}", c)
    };
    function Vb(a) {
        for (var c = Wb(), d = 0, e = a.length; d < e; ++d)Xb(c, a[d]);
        return c
    }

    function Yb(a, c, d) {
        return d ? (d[0] = a[0] - c, d[1] = a[1] - c, d[2] = a[2] + c, d[3] = a[3] + c, d) : [a[0] - c, a[1] - c, a[2] + c, a[3] + c]
    }

    function Zb(a, c) {
        return c ? (c[0] = a[0], c[1] = a[1], c[2] = a[2], c[3] = a[3], c) : a.slice()
    }

    function $b(a, c, d) {
        c = c < a[0] ? a[0] - c : a[2] < c ? c - a[2] : 0;
        a = d < a[1] ? a[1] - d : a[3] < d ? d - a[3] : 0;
        return c * c + a * a
    }

    function ac(a, c) {
        return bc(a, c[0], c[1])
    }

    function cc(a, c) {
        return a[0] <= c[0] && c[2] <= a[2] && a[1] <= c[1] && c[3] <= a[3]
    }

    function bc(a, c, d) {
        return a[0] <= c && c <= a[2] && a[1] <= d && d <= a[3]
    }

    function dc(a, c) {
        var d = a[1], e = a[2], f = a[3], g = c[0], h = c[1], k = 0;
        g < a[0] ? k = k | 16 : g > e && (k = k | 4);
        h < d ? k |= 8 : h > f && (k |= 2);
        0 === k && (k = 1);
        return k
    }

    function Wb() {
        return [Infinity, Infinity, -Infinity, -Infinity]
    }

    function ec(a, c, d, e, f) {
        return f ? (f[0] = a, f[1] = c, f[2] = d, f[3] = e, f) : [a, c, d, e]
    }

    function fc(a, c) {
        var d = a[0], e = a[1];
        return ec(d, e, d, e, c)
    }

    function gc(a, c, d, e, f) {
        f = ec(Infinity, Infinity, -Infinity, -Infinity, f);
        return hc(f, a, c, d, e)
    }

    function ic(a, c) {
        return a[0] == c[0] && a[2] == c[2] && a[1] == c[1] && a[3] == c[3]
    }

    function jc(a, c) {
        c[0] < a[0] && (a[0] = c[0]);
        c[2] > a[2] && (a[2] = c[2]);
        c[1] < a[1] && (a[1] = c[1]);
        c[3] > a[3] && (a[3] = c[3]);
        return a
    }

    function Xb(a, c) {
        c[0] < a[0] && (a[0] = c[0]);
        c[0] > a[2] && (a[2] = c[0]);
        c[1] < a[1] && (a[1] = c[1]);
        c[1] > a[3] && (a[3] = c[1])
    }

    function hc(a, c, d, e, f) {
        for (; d < e; d += f) {
            var g = a, h = c[d], k = c[d + 1];
            g[0] = Math.min(g[0], h);
            g[1] = Math.min(g[1], k);
            g[2] = Math.max(g[2], h);
            g[3] = Math.max(g[3], k)
        }
        return a
    }

    function kc(a, c, d) {
        var e;
        return (e = c.call(d, lc(a))) || (e = c.call(d, mc(a))) || (e = c.call(d, nc(a))) ? e : (e = c.call(d, oc(a))) ? e : !1
    }

    function pc(a) {
        var c = 0;
        qc(a) || (c = rc(a) * sc(a));
        return c
    }

    function lc(a) {
        return [a[0], a[1]]
    }

    function mc(a) {
        return [a[2], a[1]]
    }

    function tc(a) {
        return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
    }

    function uc(a, c, d, e, f) {
        var g = c * e[0] / 2;
        e = c * e[1] / 2;
        c = Math.cos(d);
        var h = Math.sin(d);
        d = g * c;
        g *= h;
        c *= e;
        var k = e * h, m = a[0], n = a[1];
        a = m - d + k;
        e = m - d - k;
        h = m + d - k;
        d = m + d + k;
        var k = n - g - c, m = n - g + c, p = n + g + c, g = n + g - c;
        return ec(Math.min(a, e, h, d), Math.min(k, m, p, g), Math.max(a, e, h, d), Math.max(k, m, p, g), f)
    }

    function sc(a) {
        return a[3] - a[1]
    }

    function vc(a, c, d) {
        d = d ? d : Wb();
        wc(a, c) && (d[0] = a[0] > c[0] ? a[0] : c[0], d[1] = a[1] > c[1] ? a[1] : c[1], d[2] = a[2] < c[2] ? a[2] : c[2], d[3] = a[3] < c[3] ? a[3] : c[3]);
        return d
    }

    function oc(a) {
        return [a[0], a[3]]
    }

    function nc(a) {
        return [a[2], a[3]]
    }

    function rc(a) {
        return a[2] - a[0]
    }

    function wc(a, c) {
        return a[0] <= c[2] && a[2] >= c[0] && a[1] <= c[3] && a[3] >= c[1]
    }

    function qc(a) {
        return a[2] < a[0] || a[3] < a[1]
    }

    function yc(a, c) {
        var d = (a[2] - a[0]) / 2 * (c - 1), e = (a[3] - a[1]) / 2 * (c - 1);
        a[0] -= d;
        a[2] += d;
        a[1] -= e;
        a[3] += e
    }

    function zc(a, c, d) {
        a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
        c(a, a, 2);
        var e = [a[0], a[2], a[4], a[6]], f = [a[1], a[3], a[5], a[7]];
        c = Math.min.apply(null, e);
        a = Math.min.apply(null, f);
        e = Math.max.apply(null, e);
        f = Math.max.apply(null, f);
        return ec(c, a, e, f, d)
    };
    function Ac() {
        return !0
    }

    function Bc() {
        return !1
    };
    /*

     Latitude/longitude spherical geodesy formulae taken from
     http://www.movable-type.co.uk/scripts/latlong.html
     Licensed under CC-BY-3.0.
     */
    function Cc(a) {
        this.radius = a
    }

    Cc.prototype.a = function (a) {
        for (var c = 0, d = a.length, e = a[d - 1][0], f = a[d - 1][1], g = 0; g < d; g++)var h = a[g][0], k = a[g][1], c = c + Ha(h - e) * (2 + Math.sin(Ha(f)) + Math.sin(Ha(k))), e = h, f = k;
        return c * this.radius * this.radius / 2
    };
    Cc.prototype.b = function (a, c) {
        var d = Ha(a[1]), e = Ha(c[1]), f = (e - d) / 2, g = Ha(c[0] - a[0]) / 2, d = Math.sin(f) * Math.sin(f) + Math.sin(g) * Math.sin(g) * Math.cos(d) * Math.cos(e);
        return 2 * this.radius * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d))
    };
    Cc.prototype.offset = function (a, c, d) {
        var e = Ha(a[1]);
        c /= this.radius;
        var f = Math.asin(Math.sin(e) * Math.cos(c) + Math.cos(e) * Math.sin(c) * Math.cos(d));
        return [180 * (Ha(a[0]) + Math.atan2(Math.sin(d) * Math.sin(c) * Math.cos(e), Math.cos(c) - Math.sin(e) * Math.sin(f))) / Math.PI, 180 * f / Math.PI]
    };
    var Dc = new Cc(6370997);
    var Ec = {};
    Ec.degrees = 2 * Math.PI * Dc.radius / 360;
    Ec.ft = .3048;
    Ec.m = 1;
    Ec["us-ft"] = 1200 / 3937;
    function Fc(a) {
        this.eb = a.code;
        this.c = a.units;
        this.f = void 0 !== a.extent ? a.extent : null;
        this.i = void 0 !== a.worldExtent ? a.worldExtent : null;
        this.b = void 0 !== a.axisOrientation ? a.axisOrientation : "enu";
        this.g = void 0 !== a.global ? a.global : !1;
        this.a = !(!this.g || !this.f);
        this.o = void 0 !== a.getPointResolution ? a.getPointResolution : this.nk;
        this.l = null;
        this.j = a.metersPerUnit;
        var c = Gc, d = a.code, e = Hc || qa.proj4;
        if ("function" == typeof e && void 0 === c[d]) {
            var f = e.defs(d);
            if (void 0 !== f) {
                void 0 !== f.axis && void 0 === a.axisOrientation &&
                (this.b = f.axis);
                void 0 === a.metersPerUnit && (this.j = f.to_meter);
                void 0 === a.units && (this.c = f.units);
                for (var g in c)c = e.defs(g), void 0 !== c && (a = Ic(g), c === f ? Jc([a, this]) : (c = e(g, d), Kc(a, this, c.forward, c.inverse)))
            }
        }
    }

    l = Fc.prototype;
    l.Oj = function () {
        return this.eb
    };
    l.O = function () {
        return this.f
    };
    l.vb = function () {
        return this.c
    };
    l.Vb = function () {
        return this.j || Ec[this.c]
    };
    l.Ak = function () {
        return this.i
    };
    l.ll = function () {
        return this.g
    };
    l.Yo = function (a) {
        this.g = a;
        this.a = !(!a || !this.f)
    };
    l.Gm = function (a) {
        this.f = a;
        this.a = !(!this.g || !a)
    };
    l.gp = function (a) {
        this.i = a
    };
    l.Xo = function (a) {
        this.o = a
    };
    l.nk = function (a, c) {
        if ("degrees" == this.vb())return a;
        var d = Lc(this, Ic("EPSG:4326")), e = [c[0] - a / 2, c[1], c[0] + a / 2, c[1], c[0], c[1] - a / 2, c[0], c[1] + a / 2], e = d(e, e, 2), d = Dc.b(e.slice(0, 2), e.slice(2, 4)), e = Dc.b(e.slice(4, 6), e.slice(6, 8)), e = (d + e) / 2, d = this.Vb();
        void 0 !== d && (e /= d);
        return e
    };
    l.getPointResolution = function (a, c) {
        return this.o(a, c)
    };
    var Gc = {}, Mc = {}, Hc = null;

    function Jc(a) {
        Nc(a);
        a.forEach(function (c) {
            a.forEach(function (a) {
                c !== a && Oc(c, a, Qc)
            })
        })
    }

    function Rc() {
        var a = Sc, c = Tc, d = Uc;
        Vc.forEach(function (e) {
            a.forEach(function (a) {
                Oc(e, a, c);
                Oc(a, e, d)
            })
        })
    }

    function Wc(a) {
        Gc[a.eb] = a;
        Oc(a, a, Qc)
    }

    function Nc(a) {
        var c = [];
        a.forEach(function (a) {
            c.push(Wc(a))
        })
    }

    function Xc(a) {
        return a ? "string" === typeof a ? Ic(a) : a : Ic("EPSG:3857")
    }

    function Oc(a, c, d) {
        a = a.eb;
        c = c.eb;
        a in Mc || (Mc[a] = {});
        Mc[a][c] = d
    }

    function Kc(a, c, d, e) {
        a = Ic(a);
        c = Ic(c);
        Oc(a, c, Yc(d));
        Oc(c, a, Yc(e))
    }

    function Yc(a) {
        return function (c, d, e) {
            var f = c.length;
            e = void 0 !== e ? e : 2;
            d = void 0 !== d ? d : Array(f);
            var g, h;
            for (h = 0; h < f; h += e)for (g = a([c[h], c[h + 1]]), d[h] = g[0], d[h + 1] = g[1], g = e - 1; 2 <= g; --g)d[h + g] = c[h + g];
            return d
        }
    }

    function Ic(a) {
        var c;
        if (a instanceof Fc)c = a; else if ("string" === typeof a) {
            c = Gc[a];
            var d = Hc || qa.proj4;
            void 0 === c && "function" == typeof d && void 0 !== d.defs(a) && (c = new Fc({code: a}), Wc(c))
        } else c = null;
        return c
    }

    function Zc(a, c) {
        if (a === c)return !0;
        var d = a.vb() === c.vb();
        return a.eb === c.eb ? d : Lc(a, c) === Qc && d
    }

    function $c(a, c) {
        var d = Ic(a), e = Ic(c);
        return Lc(d, e)
    }

    function Lc(a, c) {
        var d = a.eb, e = c.eb, f;
        d in Mc && e in Mc[d] && (f = Mc[d][e]);
        void 0 === f && (f = ad);
        return f
    }

    function ad(a, c) {
        if (void 0 !== c && a !== c) {
            for (var d = 0, e = a.length; d < e; ++d)c[d] = a[d];
            a = c
        }
        return a
    }

    function Qc(a, c) {
        var d;
        if (void 0 !== c) {
            d = 0;
            for (var e = a.length; d < e; ++d)c[d] = a[d];
            d = c
        } else d = a.slice();
        return d
    }

    function bd(a, c, d) {
        return $c(c, d)(a, void 0, a.length)
    }

    function cd(a, c, d) {
        c = $c(c, d);
        return zc(a, c)
    };
    function dd() {
        pb.call(this);
        this.v = Wb();
        this.B = -1;
        this.l = {};
        this.s = this.o = 0
    }

    y(dd, pb);
    l = dd.prototype;
    l.ub = function (a, c) {
        var d = c ? c : [NaN, NaN];
        this.rb(a[0], a[1], d, Infinity);
        return d
    };
    l.og = function (a) {
        return this.wc(a[0], a[1])
    };
    l.wc = Bc;
    l.O = function (a) {
        this.B != this.g && (this.v = this.Jd(this.v), this.B = this.g);
        var c = this.v;
        a ? (a[0] = c[0], a[1] = c[1], a[2] = c[2], a[3] = c[3]) : a = c;
        return a
    };
    l.yb = function (a) {
        return this.hd(a * a)
    };
    l.hb = function (a, c) {
        this.mc($c(a, c));
        return this
    };
    function ed(a) {
        this.length = a.length || a;
        for (var c = 0; c < this.length; c++)this[c] = a[c] || 0
    }

    ed.prototype.BYTES_PER_ELEMENT = 4;
    ed.prototype.set = function (a, c) {
        c = c || 0;
        for (var d = 0; d < a.length && c + d < this.length; d++)this[c + d] = a[d]
    };
    ed.prototype.toString = Array.prototype.join;
    "undefined" == typeof Float32Array && (ed.BYTES_PER_ELEMENT = 4, ed.prototype.BYTES_PER_ELEMENT = ed.prototype.BYTES_PER_ELEMENT, ed.prototype.set = ed.prototype.set, ed.prototype.toString = ed.prototype.toString, t("Float32Array", ed, void 0));
    function fd(a) {
        this.length = a.length || a;
        for (var c = 0; c < this.length; c++)this[c] = a[c] || 0
    }

    fd.prototype.BYTES_PER_ELEMENT = 8;
    fd.prototype.set = function (a, c) {
        c = c || 0;
        for (var d = 0; d < a.length && c + d < this.length; d++)this[c + d] = a[d]
    };
    fd.prototype.toString = Array.prototype.join;
    if ("undefined" == typeof Float64Array) {
        try {
            fd.BYTES_PER_ELEMENT = 8
        } catch (a) {
        }
        fd.prototype.BYTES_PER_ELEMENT = fd.prototype.BYTES_PER_ELEMENT;
        fd.prototype.set = fd.prototype.set;
        fd.prototype.toString = fd.prototype.toString;
        t("Float64Array", fd, void 0)
    }
    ;
    function gd(a, c, d, e, f) {
        a[0] = c;
        a[1] = d;
        a[2] = e;
        a[3] = f
    };
    function hd() {
        var a = Array(16);
        id(a, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return a
    }

    function jd() {
        var a = Array(16);
        id(a, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return a
    }

    function id(a, c, d, e, f, g, h, k, m, n, p, q, r, u, v, x, z) {
        a[0] = c;
        a[1] = d;
        a[2] = e;
        a[3] = f;
        a[4] = g;
        a[5] = h;
        a[6] = k;
        a[7] = m;
        a[8] = n;
        a[9] = p;
        a[10] = q;
        a[11] = r;
        a[12] = u;
        a[13] = v;
        a[14] = x;
        a[15] = z
    }

    function kd(a, c) {
        a[0] = c[0];
        a[1] = c[1];
        a[2] = c[2];
        a[3] = c[3];
        a[4] = c[4];
        a[5] = c[5];
        a[6] = c[6];
        a[7] = c[7];
        a[8] = c[8];
        a[9] = c[9];
        a[10] = c[10];
        a[11] = c[11];
        a[12] = c[12];
        a[13] = c[13];
        a[14] = c[14];
        a[15] = c[15]
    }

    function ld(a) {
        a[0] = 1;
        a[1] = 0;
        a[2] = 0;
        a[3] = 0;
        a[4] = 0;
        a[5] = 1;
        a[6] = 0;
        a[7] = 0;
        a[8] = 0;
        a[9] = 0;
        a[10] = 1;
        a[11] = 0;
        a[12] = 0;
        a[13] = 0;
        a[14] = 0;
        a[15] = 1
    }

    function md(a, c, d) {
        var e = a[0], f = a[1], g = a[2], h = a[3], k = a[4], m = a[5], n = a[6], p = a[7], q = a[8], r = a[9], u = a[10], v = a[11], x = a[12], z = a[13], E = a[14];
        a = a[15];
        var B = c[0], A = c[1], G = c[2], O = c[3], L = c[4], R = c[5], Wa = c[6], J = c[7], ua = c[8], Ta = c[9], kb = c[10], Ka = c[11], Ia = c[12], xc = c[13], Pc = c[14];
        c = c[15];
        d[0] = e * B + k * A + q * G + x * O;
        d[1] = f * B + m * A + r * G + z * O;
        d[2] = g * B + n * A + u * G + E * O;
        d[3] = h * B + p * A + v * G + a * O;
        d[4] = e * L + k * R + q * Wa + x * J;
        d[5] = f * L + m * R + r * Wa + z * J;
        d[6] = g * L + n * R + u * Wa + E * J;
        d[7] = h * L + p * R + v * Wa + a * J;
        d[8] = e * ua + k * Ta + q * kb + x * Ka;
        d[9] = f * ua + m * Ta + r * kb + z * Ka;
        d[10] = g *
            ua + n * Ta + u * kb + E * Ka;
        d[11] = h * ua + p * Ta + v * kb + a * Ka;
        d[12] = e * Ia + k * xc + q * Pc + x * c;
        d[13] = f * Ia + m * xc + r * Pc + z * c;
        d[14] = g * Ia + n * xc + u * Pc + E * c;
        d[15] = h * Ia + p * xc + v * Pc + a * c
    }

    function nd(a, c) {
        var d = a[0], e = a[1], f = a[2], g = a[3], h = a[4], k = a[5], m = a[6], n = a[7], p = a[8], q = a[9], r = a[10], u = a[11], v = a[12], x = a[13], z = a[14], E = a[15], B = d * k - e * h, A = d * m - f * h, G = d * n - g * h, O = e * m - f * k, L = e * n - g * k, R = f * n - g * m, Wa = p * x - q * v, J = p * z - r * v, ua = p * E - u * v, Ta = q * z - r * x, kb = q * E - u * x, Ka = r * E - u * z, Ia = B * Ka - A * kb + G * Ta + O * ua - L * J + R * Wa;
        0 != Ia && (Ia = 1 / Ia, c[0] = (k * Ka - m * kb + n * Ta) * Ia, c[1] = (-e * Ka + f * kb - g * Ta) * Ia, c[2] = (x * R - z * L + E * O) * Ia, c[3] = (-q * R + r * L - u * O) * Ia, c[4] = (-h * Ka + m * ua - n * J) * Ia, c[5] = (d * Ka - f * ua + g * J) * Ia, c[6] = (-v * R + z * G - E * A) * Ia, c[7] = (p * R - r * G + u * A) * Ia,
            c[8] = (h * kb - k * ua + n * Wa) * Ia, c[9] = (-d * kb + e * ua - g * Wa) * Ia, c[10] = (v * L - x * G + E * B) * Ia, c[11] = (-p * L + q * G - u * B) * Ia, c[12] = (-h * Ta + k * J - m * Wa) * Ia, c[13] = (d * Ta - e * J + f * Wa) * Ia, c[14] = (-v * O + x * A - z * B) * Ia, c[15] = (p * O - q * A + r * B) * Ia)
    }

    function od(a, c, d) {
        var e = a[1] * c + a[5] * d + 0 * a[9] + a[13], f = a[2] * c + a[6] * d + 0 * a[10] + a[14], g = a[3] * c + a[7] * d + 0 * a[11] + a[15];
        a[12] = a[0] * c + a[4] * d + 0 * a[8] + a[12];
        a[13] = e;
        a[14] = f;
        a[15] = g
    }

    function pd(a, c, d) {
        id(a, a[0] * c, a[1] * c, a[2] * c, a[3] * c, a[4] * d, a[5] * d, a[6] * d, a[7] * d, 1 * a[8], 1 * a[9], 1 * a[10], 1 * a[11], a[12], a[13], a[14], a[15])
    }

    function qd(a, c) {
        var d = a[0], e = a[1], f = a[2], g = a[3], h = a[4], k = a[5], m = a[6], n = a[7], p = Math.cos(c), q = Math.sin(c);
        a[0] = d * p + h * q;
        a[1] = e * p + k * q;
        a[2] = f * p + m * q;
        a[3] = g * p + n * q;
        a[4] = d * -q + h * p;
        a[5] = e * -q + k * p;
        a[6] = f * -q + m * p;
        a[7] = g * -q + n * p
    }

    new Float64Array(3);
    new Float64Array(3);
    new Float64Array(4);
    new Float64Array(4);
    new Float64Array(4);
    new Float64Array(16);
    function rd(a, c, d, e, f, g) {
        var h = f[0], k = f[1], m = f[4], n = f[5], p = f[12];
        f = f[13];
        for (var q = g ? g : [], r = 0; c < d; c += e) {
            var u = a[c], v = a[c + 1];
            q[r++] = h * u + m * v + p;
            q[r++] = k * u + n * v + f
        }
        g && q.length != r && (q.length = r);
        return q
    };
    function sd() {
        dd.call(this);
        this.f = "XY";
        this.a = 2;
        this.A = null
    }

    y(sd, dd);
    function td(a) {
        if ("XY" == a)return 2;
        if ("XYZ" == a || "XYM" == a)return 3;
        if ("XYZM" == a)return 4
    }

    l = sd.prototype;
    l.wc = Bc;
    l.Jd = function (a) {
        return gc(this.A, 0, this.A.length, this.a, a)
    };
    l.Fb = function () {
        return this.A.slice(0, this.a)
    };
    l.ga = function () {
        return this.A
    };
    l.Gb = function () {
        return this.A.slice(this.A.length - this.a)
    };
    l.Hb = function () {
        return this.f
    };
    l.hd = function (a) {
        this.s != this.g && (Qa(this.l), this.o = 0, this.s = this.g);
        if (0 > a || 0 !== this.o && a <= this.o)return this;
        var c = a.toString();
        if (this.l.hasOwnProperty(c))return this.l[c];
        var d = this.Ic(a);
        if (d.ga().length < this.A.length)return this.l[c] = d;
        this.o = a;
        return this
    };
    l.Ic = function () {
        return this
    };
    l.ua = function () {
        return this.a
    };
    function ud(a, c, d) {
        a.a = td(c);
        a.f = c;
        a.A = d
    }

    function vd(a, c, d, e) {
        if (c)d = td(c); else {
            for (c = 0; c < e; ++c) {
                if (0 === d.length) {
                    a.f = "XY";
                    a.a = 2;
                    return
                }
                d = d[0]
            }
            d = d.length;
            c = 2 == d ? "XY" : 3 == d ? "XYZ" : 4 == d ? "XYZM" : void 0
        }
        a.f = c;
        a.a = d
    }

    l.mc = function (a) {
        this.A && (a(this.A, this.A, this.a), this.u())
    };
    l.rotate = function (a, c) {
        var d = this.ga();
        if (d) {
            for (var e = d.length, f = this.ua(), g = d ? d : [], h = Math.cos(a), k = Math.sin(a), m = c[0], n = c[1], p = 0, q = 0; q < e; q += f) {
                var r = d[q] - m, u = d[q + 1] - n;
                g[p++] = m + r * h - u * k;
                g[p++] = n + r * k + u * h;
                for (r = q + 2; r < q + f; ++r)g[p++] = d[r]
            }
            d && g.length != p && (g.length = p);
            this.u()
        }
    };
    l.Nc = function (a, c) {
        var d = this.ga();
        if (d) {
            var e = d.length, f = this.ua(), g = d ? d : [], h = 0, k, m;
            for (k = 0; k < e; k += f)for (g[h++] = d[k] + a, g[h++] = d[k + 1] + c, m = k + 2; m < k + f; ++m)g[h++] = d[m];
            d && g.length != h && (g.length = h);
            this.u()
        }
    };
    function wd(a, c, d, e) {
        for (var f = 0, g = a[d - e], h = a[d - e + 1]; c < d; c += e)var k = a[c], m = a[c + 1], f = f + (h * k - g * m), g = k, h = m;
        return f / 2
    }

    function xd(a, c, d, e) {
        var f = 0, g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var k = d[g], f = f + wd(a, c, k, e);
            c = k
        }
        return f
    };
    function yd(a, c, d, e, f, g, h) {
        var k = a[c], m = a[c + 1], n = a[d] - k, p = a[d + 1] - m;
        if (0 !== n || 0 !== p)if (g = ((f - k) * n + (g - m) * p) / (n * n + p * p), 1 < g)c = d; else if (0 < g) {
            for (f = 0; f < e; ++f)h[f] = La(a[c + f], a[d + f], g);
            h.length = e;
            return
        }
        for (f = 0; f < e; ++f)h[f] = a[c + f];
        h.length = e
    }

    function zd(a, c, d, e, f) {
        var g = a[c], h = a[c + 1];
        for (c += e; c < d; c += e) {
            var k = a[c], m = a[c + 1], g = Ga(g, h, k, m);
            g > f && (f = g);
            g = k;
            h = m
        }
        return f
    }

    function Ad(a, c, d, e, f) {
        var g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var k = d[g];
            f = zd(a, c, k, e, f);
            c = k
        }
        return f
    }

    function Bd(a, c, d, e, f, g, h, k, m, n, p) {
        if (c == d)return n;
        var q;
        if (0 === f) {
            q = Ga(h, k, a[c], a[c + 1]);
            if (q < n) {
                for (p = 0; p < e; ++p)m[p] = a[c + p];
                m.length = e;
                return q
            }
            return n
        }
        for (var r = p ? p : [NaN, NaN], u = c + e; u < d;)if (yd(a, u - e, u, e, h, k, r), q = Ga(h, k, r[0], r[1]), q < n) {
            n = q;
            for (p = 0; p < e; ++p)m[p] = r[p];
            m.length = e;
            u += e
        } else u += e * Math.max((Math.sqrt(q) - Math.sqrt(n)) / f | 0, 1);
        if (g && (yd(a, d - e, c, e, h, k, r), q = Ga(h, k, r[0], r[1]), q < n)) {
            n = q;
            for (p = 0; p < e; ++p)m[p] = r[p];
            m.length = e
        }
        return n
    }

    function Cd(a, c, d, e, f, g, h, k, m, n, p) {
        p = p ? p : [NaN, NaN];
        var q, r;
        q = 0;
        for (r = d.length; q < r; ++q) {
            var u = d[q];
            n = Bd(a, c, u, e, f, g, h, k, m, n, p);
            c = u
        }
        return n
    };
    function Dd(a, c) {
        var d = 0, e, f;
        e = 0;
        for (f = c.length; e < f; ++e)a[d++] = c[e];
        return d
    }

    function Ed(a, c, d, e) {
        var f, g;
        f = 0;
        for (g = d.length; f < g; ++f) {
            var h = d[f], k;
            for (k = 0; k < e; ++k)a[c++] = h[k]
        }
        return c
    }

    function Fd(a, c, d, e, f) {
        f = f ? f : [];
        var g = 0, h, k;
        h = 0;
        for (k = d.length; h < k; ++h)c = Ed(a, c, d[h], e), f[g++] = c;
        f.length = g;
        return f
    };
    function Gd(a, c, d, e, f) {
        f = void 0 !== f ? f : [];
        for (var g = 0; c < d; c += e)f[g++] = a.slice(c, c + e);
        f.length = g;
        return f
    }

    function Hd(a, c, d, e, f) {
        f = void 0 !== f ? f : [];
        var g = 0, h, k;
        h = 0;
        for (k = d.length; h < k; ++h) {
            var m = d[h];
            f[g++] = Gd(a, c, m, e, f[g]);
            c = m
        }
        f.length = g;
        return f
    };
    function Id(a, c, d, e, f, g, h) {
        var k = (d - c) / e;
        if (3 > k) {
            for (; c < d; c += e)g[h++] = a[c], g[h++] = a[c + 1];
            return h
        }
        var m = Array(k);
        m[0] = 1;
        m[k - 1] = 1;
        d = [c, d - e];
        for (var n = 0, p; 0 < d.length;) {
            var q = d.pop(), r = d.pop(), u = 0, v = a[r], x = a[r + 1], z = a[q], E = a[q + 1];
            for (p = r + e; p < q; p += e) {
                var B = Fa(a[p], a[p + 1], v, x, z, E);
                B > u && (n = p, u = B)
            }
            u > f && (m[(n - c) / e] = 1, r + e < n && d.push(r, n), n + e < q && d.push(n, q))
        }
        for (p = 0; p < k; ++p)m[p] && (g[h++] = a[c + p * e], g[h++] = a[c + p * e + 1]);
        return h
    }

    function Jd(a, c, d, e, f, g, h, k) {
        var m, n;
        m = 0;
        for (n = d.length; m < n; ++m) {
            var p = d[m];
            a:{
                var q = a, r = p, u = e, v = f, x = g;
                if (c != r) {
                    var z = v * Math.round(q[c] / v), E = v * Math.round(q[c + 1] / v);
                    c += u;
                    x[h++] = z;
                    x[h++] = E;
                    var B = void 0, A = void 0;
                    do if (B = v * Math.round(q[c] / v), A = v * Math.round(q[c + 1] / v), c += u, c == r) {
                        x[h++] = B;
                        x[h++] = A;
                        break a
                    } while (B == z && A == E);
                    for (; c < r;) {
                        var G, O;
                        G = v * Math.round(q[c] / v);
                        O = v * Math.round(q[c + 1] / v);
                        c += u;
                        if (G != B || O != A) {
                            var L = B - z, R = A - E, Wa = G - z, J = O - E;
                            L * J == R * Wa && (0 > L && Wa < L || L == Wa || 0 < L && Wa > L) && (0 > R && J < R || R == J || 0 < R && J > R) ||
                            (x[h++] = B, x[h++] = A, z = B, E = A);
                            B = G;
                            A = O
                        }
                    }
                    x[h++] = B;
                    x[h++] = A
                }
            }
            k.push(h);
            c = p
        }
        return h
    };
    function Kd(a, c) {
        sd.call(this);
        this.i = this.j = -1;
        this.ma(a, c)
    }

    y(Kd, sd);
    l = Kd.prototype;
    l.clone = function () {
        var a = new Kd(null);
        Ld(a, this.f, this.A.slice());
        return a
    };
    l.rb = function (a, c, d, e) {
        if (e < $b(this.O(), a, c))return e;
        this.i != this.g && (this.j = Math.sqrt(zd(this.A, 0, this.A.length, this.a, 0)), this.i = this.g);
        return Bd(this.A, 0, this.A.length, this.a, this.j, !0, a, c, d, e)
    };
    l.hm = function () {
        return wd(this.A, 0, this.A.length, this.a)
    };
    l.Z = function () {
        return Gd(this.A, 0, this.A.length, this.a)
    };
    l.Ic = function (a) {
        var c = [];
        c.length = Id(this.A, 0, this.A.length, this.a, a, c, 0);
        a = new Kd(null);
        Ld(a, "XY", c);
        return a
    };
    l.X = function () {
        return "LinearRing"
    };
    l.ma = function (a, c) {
        a ? (vd(this, c, a, 1), this.A || (this.A = []), this.A.length = Ed(this.A, 0, a, this.a), this.u()) : Ld(this, "XY", null)
    };
    function Ld(a, c, d) {
        ud(a, c, d);
        a.u()
    };
    function D(a, c) {
        sd.call(this);
        this.ma(a, c)
    }

    y(D, sd);
    l = D.prototype;
    l.clone = function () {
        var a = new D(null);
        a.ba(this.f, this.A.slice());
        return a
    };
    l.rb = function (a, c, d, e) {
        var f = this.A;
        a = Ga(a, c, f[0], f[1]);
        if (a < e) {
            e = this.a;
            for (c = 0; c < e; ++c)d[c] = f[c];
            d.length = e;
            return a
        }
        return e
    };
    l.Z = function () {
        return this.A ? this.A.slice() : []
    };
    l.Jd = function (a) {
        return fc(this.A, a)
    };
    l.X = function () {
        return "Point"
    };
    l.Ia = function (a) {
        return bc(a, this.A[0], this.A[1])
    };
    l.ma = function (a, c) {
        a ? (vd(this, c, a, 0), this.A || (this.A = []), this.A.length = Dd(this.A, a), this.u()) : this.ba("XY", null)
    };
    l.ba = function (a, c) {
        ud(this, a, c);
        this.u()
    };
    function Md(a, c, d, e, f) {
        return !kc(f, function (f) {
            return !Nd(a, c, d, e, f[0], f[1])
        })
    }

    function Nd(a, c, d, e, f, g) {
        for (var h = !1, k = a[d - e], m = a[d - e + 1]; c < d; c += e) {
            var n = a[c], p = a[c + 1];
            m > g != p > g && f < (n - k) * (g - m) / (p - m) + k && (h = !h);
            k = n;
            m = p
        }
        return h
    }

    function Od(a, c, d, e, f, g) {
        if (0 === d.length || !Nd(a, c, d[0], e, f, g))return !1;
        var h;
        c = 1;
        for (h = d.length; c < h; ++c)if (Nd(a, d[c - 1], d[c], e, f, g))return !1;
        return !0
    };
    function Pd(a, c, d, e, f, g, h) {
        var k, m, n, p, q, r = f[g + 1], u = [], v = d[0];
        n = a[v - e];
        q = a[v - e + 1];
        for (k = c; k < v; k += e) {
            p = a[k];
            m = a[k + 1];
            if (r <= q && m <= r || q <= r && r <= m)n = (r - q) / (m - q) * (p - n) + n, u.push(n);
            n = p;
            q = m
        }
        v = NaN;
        q = -Infinity;
        u.sort(tb);
        n = u[0];
        k = 1;
        for (m = u.length; k < m; ++k) {
            p = u[k];
            var x = Math.abs(p - n);
            x > q && (n = (n + p) / 2, Od(a, c, d, e, n, r) && (v = n, q = x));
            n = p
        }
        isNaN(v) && (v = f[g]);
        return h ? (h.push(v, r), h) : [v, r]
    };
    function Qd(a, c, d, e, f, g) {
        for (var h = [a[c], a[c + 1]], k = [], m; c + e < d; c += e) {
            k[0] = a[c + e];
            k[1] = a[c + e + 1];
            if (m = f.call(g, h, k))return m;
            h[0] = k[0];
            h[1] = k[1]
        }
        return !1
    };
    function Rd(a, c, d, e, f) {
        var g = hc(Wb(), a, c, d, e);
        return wc(f, g) ? cc(f, g) || g[0] >= f[0] && g[2] <= f[2] || g[1] >= f[1] && g[3] <= f[3] ? !0 : Qd(a, c, d, e, function (a, c) {
            var d = !1, e = dc(f, a), g = dc(f, c);
            if (1 === e || 1 === g)d = !0; else {
                var q = f[0], r = f[1], u = f[2], v = f[3], x = c[0], z = c[1], E = (z - a[1]) / (x - a[0]);
                g & 2 && !(e & 2) && (d = x - (z - v) / E, d = d >= q && d <= u);
                d || !(g & 4) || e & 4 || (d = z - (x - u) * E, d = d >= r && d <= v);
                d || !(g & 8) || e & 8 || (d = x - (z - r) / E, d = d >= q && d <= u);
                d || !(g & 16) || e & 16 || (d = z - (x - q) * E, d = d >= r && d <= v)
            }
            return d
        }) : !1
    }

    function Sd(a, c, d, e, f) {
        var g = d[0];
        if (!(Rd(a, c, g, e, f) || Nd(a, c, g, e, f[0], f[1]) || Nd(a, c, g, e, f[0], f[3]) || Nd(a, c, g, e, f[2], f[1]) || Nd(a, c, g, e, f[2], f[3])))return !1;
        if (1 === d.length)return !0;
        c = 1;
        for (g = d.length; c < g; ++c)if (Md(a, d[c - 1], d[c], e, f))return !1;
        return !0
    };
    function Td(a, c, d, e) {
        for (var f = 0, g = a[d - e], h = a[d - e + 1]; c < d; c += e)var k = a[c], m = a[c + 1], f = f + (k - g) * (m + h), g = k, h = m;
        return 0 < f
    }

    function Ud(a, c, d, e) {
        var f = 0;
        e = void 0 !== e ? e : !1;
        var g, h;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var k = c[g], f = Td(a, f, k, d);
            if (0 === g) {
                if (e && f || !e && !f)return !1
            } else if (e && !f || !e && f)return !1;
            f = k
        }
        return !0
    }

    function Vd(a, c, d, e, f) {
        f = void 0 !== f ? f : !1;
        var g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var k = d[g], m = Td(a, c, k, e);
            if (0 === g ? f && m || !f && !m : f && !m || !f && m)for (var m = a, n = k, p = e; c < n - p;) {
                var q;
                for (q = 0; q < p; ++q) {
                    var r = m[c + q];
                    m[c + q] = m[n - p + q];
                    m[n - p + q] = r
                }
                c += p;
                n -= p
            }
            c = k
        }
        return c
    }

    function Wd(a, c, d, e) {
        var f = 0, g, h;
        g = 0;
        for (h = c.length; g < h; ++g)f = Vd(a, f, c[g], d, e);
        return f
    };
    function F(a, c) {
        sd.call(this);
        this.i = [];
        this.M = -1;
        this.N = null;
        this.T = this.R = this.S = -1;
        this.j = null;
        this.ma(a, c)
    }

    y(F, sd);
    l = F.prototype;
    l.tj = function (a) {
        this.A ? xb(this.A, a.ga()) : this.A = a.ga().slice();
        this.i.push(this.A.length);
        this.u()
    };
    l.clone = function () {
        var a = new F(null);
        a.ba(this.f, this.A.slice(), this.i.slice());
        return a
    };
    l.rb = function (a, c, d, e) {
        if (e < $b(this.O(), a, c))return e;
        this.R != this.g && (this.S = Math.sqrt(Ad(this.A, 0, this.i, this.a, 0)), this.R = this.g);
        return Cd(this.A, 0, this.i, this.a, this.S, !0, a, c, d, e)
    };
    l.wc = function (a, c) {
        return Od(this.Kb(), 0, this.i, this.a, a, c)
    };
    l.km = function () {
        return xd(this.Kb(), 0, this.i, this.a)
    };
    l.Z = function (a) {
        var c;
        void 0 !== a ? (c = this.Kb().slice(), Vd(c, 0, this.i, this.a, a)) : c = this.A;
        return Hd(c, 0, this.i, this.a)
    };
    l.zb = function () {
        return this.i
    };
    function Xd(a) {
        if (a.M != a.g) {
            var c = tc(a.O());
            a.N = Pd(a.Kb(), 0, a.i, a.a, c, 0);
            a.M = a.g
        }
        return a.N
    }

    l.Yj = function () {
        return new D(Xd(this))
    };
    l.ck = function () {
        return this.i.length
    };
    l.Cg = function (a) {
        if (0 > a || this.i.length <= a)return null;
        var c = new Kd(null);
        Ld(c, this.f, this.A.slice(0 === a ? 0 : this.i[a - 1], this.i[a]));
        return c
    };
    l.Pd = function () {
        var a = this.f, c = this.A, d = this.i, e = [], f = 0, g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var k = d[g], m = new Kd(null);
            Ld(m, a, c.slice(f, k));
            e.push(m);
            f = k
        }
        return e
    };
    l.Kb = function () {
        if (this.T != this.g) {
            var a = this.A;
            Ud(a, this.i, this.a) ? this.j = a : (this.j = a.slice(), this.j.length = Vd(this.j, 0, this.i, this.a));
            this.T = this.g
        }
        return this.j
    };
    l.Ic = function (a) {
        var c = [], d = [];
        c.length = Jd(this.A, 0, this.i, this.a, Math.sqrt(a), c, 0, d);
        a = new F(null);
        a.ba("XY", c, d);
        return a
    };
    l.X = function () {
        return "Polygon"
    };
    l.Ia = function (a) {
        return Sd(this.Kb(), 0, this.i, this.a, a)
    };
    l.ma = function (a, c) {
        if (a) {
            vd(this, c, a, 2);
            this.A || (this.A = []);
            var d = Fd(this.A, 0, a, this.a, this.i);
            this.A.length = 0 === d.length ? 0 : d[d.length - 1];
            this.u()
        } else this.ba("XY", null, this.i)
    };
    l.ba = function (a, c, d) {
        ud(this, a, c);
        this.i = d;
        this.u()
    };
    function Yd(a, c, d, e) {
        var f = e ? e : 32;
        e = [];
        var g;
        for (g = 0; g < f; ++g)xb(e, a.offset(c, d, 2 * Math.PI * g / f));
        e.push(e[0], e[1]);
        a = new F(null);
        a.ba("XY", e, [e.length]);
        return a
    }

    function Zd(a) {
        var c = a[0], d = a[1], e = a[2];
        a = a[3];
        c = [c, d, c, a, e, a, e, d, c, d];
        d = new F(null);
        d.ba("XY", c, [c.length]);
        return d
    }

    function $d(a, c, d) {
        var e = c ? c : 32, f = a.ua();
        c = a.f;
        for (var g = new F(null, c), e = f * (e + 1), f = Array(e), h = 0; h < e; h++)f[h] = 0;
        g.ba(c, f, [f.length]);
        ae(g, a.ld(), a.sf(), d);
        return g
    }

    function ae(a, c, d, e) {
        var f = a.ga(), g = a.f, h = a.ua(), k = a.zb(), m = f.length / h - 1;
        e = e ? e : 0;
        for (var n, p, q = 0; q <= m; ++q)p = q * h, n = e + 2 * Ja(q, m) * Math.PI / m, f[p] = c[0] + d * Math.cos(n), f[p + 1] = c[1] + d * Math.sin(n);
        a.ba(g, f, k)
    };
    function be(a) {
        pb.call(this);
        a = a || {};
        this.f = [0, 0];
        var c = {};
        c.center = void 0 !== a.center ? a.center : null;
        this.i = Xc(a.projection);
        var d, e, f, g = void 0 !== a.minZoom ? a.minZoom : 0;
        d = void 0 !== a.maxZoom ? a.maxZoom : 28;
        var h = void 0 !== a.zoomFactor ? a.zoomFactor : 2;
        if (void 0 !== a.resolutions)d = a.resolutions, e = d[0], f = d[d.length - 1], d = Eb(d); else {
            e = Xc(a.projection);
            f = e.O();
            var k = (f ? Math.max(rc(f), sc(f)) : 360 * Ec.degrees / e.Vb()) / 256 / Math.pow(2, 0), m = k / Math.pow(2, 28);
            e = a.maxResolution;
            void 0 !== e ? g = 0 : e = k / Math.pow(h, g);
            f = a.minResolution;
            void 0 === f && (f = void 0 !== a.maxZoom ? void 0 !== a.maxResolution ? e / Math.pow(h, d) : k / Math.pow(h, d) : m);
            d = g + Math.floor(Math.log(e / f) / Math.log(h));
            f = e / Math.pow(h, d - g);
            d = Fb(h, e, d - g)
        }
        this.a = e;
        this.o = f;
        this.j = a.resolutions;
        this.c = g;
        g = void 0 !== a.extent ? Ma(a.extent) : Na;
        (void 0 !== a.enableRotation ? a.enableRotation : 1) ? (e = a.constrainRotation, e = void 0 === e || !0 === e ? Jb() : !1 === e ? Hb : fa(e) ? Ib(e) : Hb) : e = Gb;
        this.l = new Oa(g, d, e);
        void 0 !== a.resolution ? c.resolution = a.resolution : void 0 !== a.zoom && (c.resolution = this.constrainResolution(this.a,
            a.zoom - this.c));
        c.rotation = void 0 !== a.rotation ? a.rotation : 0;
        this.C(c)
    }

    y(be, pb);
    l = be.prototype;
    l.Kd = function (a) {
        return this.l.center(a)
    };
    l.constrainResolution = function (a, c, d) {
        return this.l.resolution(a, c || 0, d || 0)
    };
    l.constrainRotation = function (a, c) {
        return this.l.rotation(a, c || 0)
    };
    l.bb = function () {
        return this.get("center")
    };
    function ce(a, c) {
        return void 0 !== c ? (c[0] = a.f[0], c[1] = a.f[1], c) : a.f.slice()
    }

    l.Fc = function (a) {
        var c = this.bb(), d = this.$(), e = this.Ka();
        return uc(c, d, e, a)
    };
    l.Rl = function () {
        return this.i
    };
    l.$ = function () {
        return this.get("resolution")
    };
    l.Sl = function () {
        return this.j
    };
    function de(a, c) {
        return Math.max(rc(a) / c[0], sc(a) / c[1])
    }

    function ee(a) {
        var c = a.a, d = Math.log(c / a.o) / Math.log(2);
        return function (a) {
            return c / Math.pow(2, a * d)
        }
    }

    l.Ka = function () {
        return this.get("rotation")
    };
    function fe(a) {
        var c = a.a, d = Math.log(c / a.o) / Math.log(2);
        return function (a) {
            return Math.log(c / a) / Math.log(2) / d
        }
    }

    l.V = function () {
        var a = this.bb(), c = this.i, d = this.$(), e = this.Ka();
        return {
            center: [Math.round(a[0] / d) * d, Math.round(a[1] / d) * d],
            projection: void 0 !== c ? c : null,
            resolution: d,
            rotation: e
        }
    };
    l.Bk = function () {
        var a, c = this.$();
        if (void 0 !== c) {
            var d, e = 0;
            do {
                d = this.constrainResolution(this.a, e);
                if (d == c) {
                    a = e;
                    break
                }
                ++e
            } while (d > this.o)
        }
        return void 0 !== a ? this.c + a : a
    };
    l.Ze = function (a, c, d) {
        a instanceof sd || (a = Zd(a));
        var e = d || {};
        d = void 0 !== e.padding ? e.padding : [0, 0, 0, 0];
        var f = void 0 !== e.constrainResolution ? e.constrainResolution : !0, g = void 0 !== e.nearest ? e.nearest : !1, h;
        void 0 !== e.minResolution ? h = e.minResolution : void 0 !== e.maxZoom ? h = this.constrainResolution(this.a, e.maxZoom - this.c, 0) : h = 0;
        var k = a.ga(), m = this.Ka(), e = Math.cos(-m), m = Math.sin(-m), n = Infinity, p = Infinity, q = -Infinity, r = -Infinity;
        a = a.ua();
        for (var u = 0, v = k.length; u < v; u += a)var x = k[u] * e - k[u + 1] * m, z = k[u] * m + k[u + 1] * e,
            n = Math.min(n, x), p = Math.min(p, z), q = Math.max(q, x), r = Math.max(r, z);
        c = de([n, p, q, r], [c[0] - d[1] - d[3], c[1] - d[0] - d[2]]);
        c = isNaN(c) ? h : Math.max(c, h);
        f && (h = this.constrainResolution(c, 0, 0), !g && h < c && (h = this.constrainResolution(h, -1, 0)), c = h);
        this.Qb(c);
        m = -m;
        g = (n + q) / 2 + (d[1] - d[3]) / 2 * c;
        d = (p + r) / 2 + (d[0] - d[2]) / 2 * c;
        this.jb([g * e - d * m, d * e + g * m])
    };
    l.Aj = function (a, c, d) {
        var e = this.Ka(), f = Math.cos(-e), e = Math.sin(-e), g = a[0] * f - a[1] * e;
        a = a[1] * f + a[0] * e;
        var h = this.$(), g = g + (c[0] / 2 - d[0]) * h;
        a += (d[1] - c[1] / 2) * h;
        e = -e;
        this.jb([g * f - a * e, a * f + g * e])
    };
    function ge(a) {
        return !!a.bb() && void 0 !== a.$()
    }

    l.rotate = function (a, c) {
        if (void 0 !== c) {
            var d, e = this.bb();
            void 0 !== e && (d = [e[0] - c[0], e[1] - c[1]], Rb(d, a - this.Ka()), Mb(d, c));
            this.jb(d)
        }
        this.de(a)
    };
    l.jb = function (a) {
        this.set("center", a)
    };
    function he(a, c) {
        a.f[1] += c
    }

    l.Qb = function (a) {
        this.set("resolution", a)
    };
    l.de = function (a) {
        this.set("rotation", a)
    };
    l.hp = function (a) {
        a = this.constrainResolution(this.a, a - this.c, 0);
        this.Qb(a)
    };
    function ie(a) {
        return Math.pow(a, 3)
    }

    function je(a) {
        return 1 - ie(1 - a)
    }

    function ke(a) {
        return 3 * a * a - 2 * a * a * a
    }

    function le(a) {
        return a
    }

    function me(a) {
        return .5 > a ? ke(2 * a) : 1 - ke(2 * (a - .5))
    };
    function ne(a) {
        var c = a.source, d = a.start ? a.start : Date.now(), e = c[0], f = c[1], g = void 0 !== a.duration ? a.duration : 1E3, h = a.easing ? a.easing : ke;
        return function (a, c) {
            if (c.time < d)return c.animate = !0, c.viewHints[0] += 1, !0;
            if (c.time < d + g) {
                var n = 1 - h((c.time - d) / g), p = e - c.viewState.center[0], q = f - c.viewState.center[1];
                c.animate = !0;
                c.viewState.center[0] += n * p;
                c.viewState.center[1] += n * q;
                c.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }

    function oe(a) {
        var c = a.rotation ? a.rotation : 0, d = a.start ? a.start : Date.now(), e = void 0 !== a.duration ? a.duration : 1E3, f = a.easing ? a.easing : ke, g = a.anchor ? a.anchor : null;
        return function (a, k) {
            if (k.time < d)return k.animate = !0, k.viewHints[0] += 1, !0;
            if (k.time < d + e) {
                var m = 1 - f((k.time - d) / e), m = (c - k.viewState.rotation) * m;
                k.animate = !0;
                k.viewState.rotation += m;
                if (g) {
                    var n = k.viewState.center;
                    n[0] -= g[0];
                    n[1] -= g[1];
                    Rb(n, m);
                    Mb(n, g)
                }
                k.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }

    function pe(a) {
        var c = a.resolution, d = a.start ? a.start : Date.now(), e = void 0 !== a.duration ? a.duration : 1E3, f = a.easing ? a.easing : ke;
        return function (a, h) {
            if (h.time < d)return h.animate = !0, h.viewHints[0] += 1, !0;
            if (h.time < d + e) {
                var k = 1 - f((h.time - d) / e), m = c - h.viewState.resolution;
                h.animate = !0;
                h.viewState.resolution += k * m;
                h.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    };
    function qe(a, c, d, e) {
        this.b = a;
        this.a = c;
        this.g = d;
        this.f = e
    }

    qe.prototype.contains = function (a) {
        return re(this, a[1], a[2])
    };
    function re(a, c, d) {
        return a.b <= c && c <= a.a && a.g <= d && d <= a.f
    }

    function se(a, c) {
        return a.b == c.b && a.g == c.g && a.a == c.a && a.f == c.f
    }

    function te(a, c) {
        return a.b <= c.a && a.a >= c.b && a.g <= c.f && a.f >= c.g
    };
    function ue(a) {
        this.a = a.html;
        this.b = a.tileRanges ? a.tileRanges : null
    }

    ue.prototype.g = function () {
        return this.a
    };
    function ve(a, c, d) {
        gb.call(this, a, d);
        this.element = c
    }

    y(ve, gb);
    function we(a) {
        pb.call(this);
        this.a = a ? a : [];
        xe(this)
    }

    y(we, pb);
    l = we.prototype;
    l.clear = function () {
        for (; 0 < this.Zb();)this.pop()
    };
    l.lf = function (a) {
        var c, d;
        c = 0;
        for (d = a.length; c < d; ++c)this.push(a[c]);
        return this
    };
    l.forEach = function (a, c) {
        this.a.forEach(a, c)
    };
    l.Cl = function () {
        return this.a
    };
    l.item = function (a) {
        return this.a[a]
    };
    l.Zb = function () {
        return this.get("length")
    };
    l.Zd = function (a, c) {
        this.a.splice(a, 0, c);
        xe(this);
        this.b(new ve("add", c, this))
    };
    l.pop = function () {
        return this.Nf(this.Zb() - 1)
    };
    l.push = function (a) {
        var c = this.a.length;
        this.Zd(c, a);
        return c
    };
    l.remove = function (a) {
        var c = this.a, d, e;
        d = 0;
        for (e = c.length; d < e; ++d)if (c[d] === a)return this.Nf(d)
    };
    l.Nf = function (a) {
        var c = this.a[a];
        this.a.splice(a, 1);
        xe(this);
        this.b(new ve("remove", c, this));
        return c
    };
    l.To = function (a, c) {
        var d = this.Zb();
        if (a < d)d = this.a[a], this.a[a] = c, this.b(new ve("remove", d, this)), this.b(new ve("add", c, this)); else {
            for (; d < a; ++d)this.Zd(d, void 0);
            this.Zd(a, c)
        }
    };
    function xe(a) {
        a.set("length", a.a.length)
    };
    var ye = Array.prototype.forEach ? function (a, c, d) {
        Array.prototype.forEach.call(a, c, d)
    } : function (a, c, d) {
        for (var e = a.length, f = ea(a) ? a.split("") : a, g = 0; g < e; g++)g in f && c.call(d, f[g], g, a)
    };

    function ze(a) {
        return Array.prototype.concat.apply(Array.prototype, arguments)
    }

    function Ae(a) {
        var c = a.length;
        if (0 < c) {
            for (var d = Array(c), e = 0; e < c; e++)d[e] = a[e];
            return d
        }
        return []
    }

    function Be(a, c, d) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, c) : Array.prototype.slice.call(a, c, d)
    };
    var Ce = /^#(?:[0-9a-f]{3}){1,2}$/i, De = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i, Ee = /^(?:rgba)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|1|0\.\d{0,10})\)$/i;

    function Fe(a) {
        return Array.isArray(a) ? a : Ge(a)
    }

    function He(a) {
        if ("string" !== typeof a) {
            var c = a[0];
            c != (c | 0) && (c = c + .5 | 0);
            var d = a[1];
            d != (d | 0) && (d = d + .5 | 0);
            var e = a[2];
            e != (e | 0) && (e = e + .5 | 0);
            a = "rgba(" + c + "," + d + "," + e + "," + (void 0 === a[3] ? 1 : a[3]) + ")"
        }
        return a
    }

    var Ge = function () {
        var a = {}, c = 0;
        return function (d) {
            var e;
            if (a.hasOwnProperty(d))e = a[d]; else {
                if (1024 <= c) {
                    e = 0;
                    for (var f in a)0 === (e++ & 3) && (delete a[f], --c)
                }
                var g, h;
                Ce.exec(d) ? (h = 3 == d.length - 1 ? 1 : 2, e = parseInt(d.substr(1 + 0 * h, h), 16), f = parseInt(d.substr(1 + 1 * h, h), 16), g = parseInt(d.substr(1 + 2 * h, h), 16), 1 == h && (e = (e << 4) + e, f = (f << 4) + f, g = (g << 4) + g), e = [e, f, g, 1]) : (h = Ee.exec(d)) ? (e = Number(h[1]), f = Number(h[2]), g = Number(h[3]), h = Number(h[4]), e = [e, f, g, h], e = Ie(e, e)) : (h = De.exec(d)) ? (e = Number(h[1]), f = Number(h[2]), g = Number(h[3]),
                    e = [e, f, g, 1], e = Ie(e, e)) : e = void 0;
                a[d] = e;
                ++c
            }
            return e
        }
    }();

    function Ie(a, c) {
        var d = c || [];
        d[0] = Da(a[0] + .5 | 0, 0, 255);
        d[1] = Da(a[1] + .5 | 0, 0, 255);
        d[2] = Da(a[2] + .5 | 0, 0, 255);
        d[3] = Da(a[3], 0, 1);
        return d
    };
    function Je(a) {
        return "string" === typeof a || a instanceof CanvasPattern || a instanceof CanvasGradient ? a : He(a)
    };
    var Ke;
    a:{
        var Le = aa.navigator;
        if (Le) {
            var Me = Le.userAgent;
            if (Me) {
                Ke = Me;
                break a
            }
        }
        Ke = ""
    }
    function Ne(a) {
        return -1 != Ke.indexOf(a)
    };
    function Oe(a, c) {
        for (var d in a)c.call(void 0, a[d], d, a)
    }

    var Pe = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Qe(a, c) {
        for (var d, e, f = 1; f < arguments.length; f++) {
            e = arguments[f];
            for (d in e)a[d] = e[d];
            for (var g = 0; g < Pe.length; g++)d = Pe[g], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d])
        }
    };
    var Re = Ne("Opera") || Ne("OPR"), Se = Ne("Trident") || Ne("MSIE"), Te = Ne("Edge"), Ue = Ne("Gecko") && !(-1 != Ke.toLowerCase().indexOf("webkit") && !Ne("Edge")) && !(Ne("Trident") || Ne("MSIE")) && !Ne("Edge"), Ve = -1 != Ke.toLowerCase().indexOf("webkit") && !Ne("Edge");

    function We() {
        var a = aa.document;
        return a ? a.documentMode : void 0
    }

    var Xe;
    a:{
        var Ye = "", $e = function () {
            var a = Ke;
            if (Ue)return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (Te)return /Edge\/([\d\.]+)/.exec(a);
            if (Se)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Ve)return /WebKit\/(\S+)/.exec(a);
            if (Re)return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        $e && (Ye = $e ? $e[1] : "");
        if (Se) {
            var af = We();
            if (null != af && af > parseFloat(Ye)) {
                Xe = String(af);
                break a
            }
        }
        Xe = Ye
    }
    var bf = {};

    function cf(a) {
        var c;
        if (!(c = bf[a])) {
            c = 0;
            for (var d = sa(String(Xe)).split("."), e = sa(String(a)).split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
                var h = d[g] || "", k = e[g] || "", m = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var p = m.exec(h) || ["", "", ""], q = n.exec(k) || ["", "", ""];
                    if (0 == p[0].length && 0 == q[0].length)break;
                    c = Ca(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == q[1].length ? 0 : parseInt(q[1], 10)) || Ca(0 == p[2].length, 0 == q[2].length) || Ca(p[2], q[2])
                } while (0 == c)
            }
            c = bf[a] = 0 <= c
        }
        return c
    }

    var df = aa.document, ef = df && Se ? We() || ("CSS1Compat" == df.compatMode ? parseInt(Xe, 10) : 5) : void 0;
    var ff = !Se || 9 <= Number(ef);
    !Ue && !Se || Se && 9 <= Number(ef) || Ue && cf("1.9.1");
    Se && cf("9");
    function gf(a, c) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== c ? c : 0
    }

    l = gf.prototype;
    l.clone = function () {
        return new gf(this.x, this.y)
    };
    l.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    l.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    l.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    l.scale = function (a, c) {
        var d = fa(c) ? c : a;
        this.x *= a;
        this.y *= d;
        return this
    };
    function hf(a, c) {
        this.width = a;
        this.height = c
    }

    l = hf.prototype;
    l.clone = function () {
        return new hf(this.width, this.height)
    };
    l.wj = function () {
        return this.width * this.height
    };
    l.Sa = function () {
        return !this.wj()
    };
    l.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    l.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    l.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    l.scale = function (a, c) {
        var d = fa(c) ? c : a;
        this.width *= a;
        this.height *= d;
        return this
    };
    function jf(a) {
        return a ? new kf(lf(a)) : ra || (ra = new kf)
    }

    function mf(a) {
        var c = document;
        return ea(a) ? c.getElementById(a) : a
    }

    function nf(a, c) {
        Oe(c, function (c, e) {
            "style" == e ? a.style.cssText = c : "class" == e ? a.className = c : "for" == e ? a.htmlFor = c : of.hasOwnProperty(e) ? a.setAttribute(of[e], c) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? a.setAttribute(e, c) : a[e] = c
        })
    }

    var of = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function pf(a, c, d) {
        var e = arguments, f = document, g = e[0], h = e[1];
        if (!ff && h && (h.name || h.type)) {
            g = ["<", g];
            h.name && g.push(' name="', ta(h.name), '"');
            if (h.type) {
                g.push(' type="', ta(h.type), '"');
                var k = {};
                Qe(k, h);
                delete k.type;
                h = k
            }
            g.push(">");
            g = g.join("")
        }
        g = f.createElement(g);
        h && (ea(h) ? g.className = h : "array" == ca(h) ? g.className = h.join(" ") : nf(g, h));
        2 < e.length && qf(f, g, e);
        return g
    }

    function qf(a, c, d) {
        function e(d) {
            d && c.appendChild(ea(d) ? a.createTextNode(d) : d)
        }

        for (var f = 2; f < d.length; f++) {
            var g = d[f];
            !da(g) || ha(g) && 0 < g.nodeType ? e(g) : ye(rf(g) ? Ae(g) : g, e)
        }
    }

    function sf(a) {
        for (var c; c = a.firstChild;)a.removeChild(c)
    }

    function tf(a, c, d) {
        a.insertBefore(c, a.childNodes[d] || null)
    }

    function uf(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function vf(a, c) {
        var d = c.parentNode;
        d && d.replaceChild(a, c)
    }

    function wf(a, c) {
        if (!a || !c)return !1;
        if (a.contains && 1 == c.nodeType)return a == c || a.contains(c);
        if ("undefined" != typeof a.compareDocumentPosition)return a == c || !!(a.compareDocumentPosition(c) & 16);
        for (; c && a != c;)c = c.parentNode;
        return c == a
    }

    function lf(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function rf(a) {
        if (a && "number" == typeof a.length) {
            if (ha(a))return "function" == typeof a.item || "string" == typeof a.item;
            if (ga(a))return "function" == typeof a.item
        }
        return !1
    }

    function kf(a) {
        this.b = a || aa.document || document
    }

    kf.prototype.C = nf;
    kf.prototype.createElement = function (a) {
        return this.b.createElement(a)
    };
    kf.prototype.appendChild = function (a, c) {
        a.appendChild(c)
    };
    kf.prototype.contains = wf;
    function xf(a, c, d, e) {
        this.top = a;
        this.right = c;
        this.bottom = d;
        this.left = e
    }

    l = xf.prototype;
    l.clone = function () {
        return new xf(this.top, this.right, this.bottom, this.left)
    };
    l.contains = function (a) {
        return this && a ? a instanceof xf ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    l.ceil = function () {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    l.floor = function () {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    l.round = function () {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    l.scale = function (a, c) {
        var d = fa(c) ? c : a;
        this.left *= a;
        this.right *= a;
        this.top *= d;
        this.bottom *= d;
        return this
    };
    function yf(a, c) {
        var d = lf(a);
        return d.defaultView && d.defaultView.getComputedStyle && (d = d.defaultView.getComputedStyle(a, null)) ? d[c] || d.getPropertyValue(c) || "" : ""
    }

    function zf(a) {
        var c;
        try {
            c = a.getBoundingClientRect()
        } catch (d) {
            return {left: 0, top: 0, right: 0, bottom: 0}
        }
        Se && a.ownerDocument.body && (a = a.ownerDocument, c.left -= a.documentElement.clientLeft + a.body.clientLeft, c.top -= a.documentElement.clientTop + a.body.clientTop);
        return c
    }

    function Af(a) {
        var c = Bf;
        if ("none" != (yf(a, "display") || (a.currentStyle ? a.currentStyle.display : null) || a.style && a.style.display))return c(a);
        var d = a.style, e = d.display, f = d.visibility, g = d.position;
        d.visibility = "hidden";
        d.position = "absolute";
        d.display = "inline";
        a = c(a);
        d.display = e;
        d.position = g;
        d.visibility = f;
        return a
    }

    function Bf(a) {
        var c = a.offsetWidth, d = a.offsetHeight, e = Ve && !c && !d;
        return (void 0 === c || e) && a.getBoundingClientRect ? (a = zf(a), new hf(a.right - a.left, a.bottom - a.top)) : new hf(c, d)
    }

    function Cf(a, c) {
        a.style.display = c ? "" : "none"
    }

    function Df(a, c, d, e) {
        if (/^\d+px?$/.test(c))return parseInt(c, 10);
        var f = a.style[d], g = a.runtimeStyle[d];
        a.runtimeStyle[d] = a.currentStyle[d];
        a.style[d] = c;
        c = a.style[e];
        a.style[d] = f;
        a.runtimeStyle[d] = g;
        return c
    }

    function Ef(a, c) {
        var d = a.currentStyle ? a.currentStyle[c] : null;
        return d ? Df(a, d, "left", "pixelLeft") : 0
    }

    function Ff(a, c) {
        if (Se) {
            var d = Ef(a, c + "Left"), e = Ef(a, c + "Right"), f = Ef(a, c + "Top"), g = Ef(a, c + "Bottom");
            return new xf(f, e, g, d)
        }
        d = yf(a, c + "Left");
        e = yf(a, c + "Right");
        f = yf(a, c + "Top");
        g = yf(a, c + "Bottom");
        return new xf(parseFloat(f), parseFloat(e), parseFloat(g), parseFloat(d))
    }

    var Gf = {thin: 2, medium: 4, thick: 6};

    function Hf(a, c) {
        if ("none" == (a.currentStyle ? a.currentStyle[c + "Style"] : null))return 0;
        var d = a.currentStyle ? a.currentStyle[c + "Width"] : null;
        return d in Gf ? Gf[d] : Df(a, d, "left", "pixelLeft")
    };
    function If(a, c, d) {
        gb.call(this, a);
        this.map = c;
        this.frameState = void 0 !== d ? d : null
    }

    y(If, gb);
    function Jf(a) {
        pb.call(this);
        this.element = a.element ? a.element : null;
        this.a = this.S = null;
        this.s = [];
        this.render = a.render ? a.render : pa;
        a.target && this.c(a.target)
    }

    y(Jf, pb);
    Jf.prototype.fa = function () {
        uf(this.element);
        Jf.ia.fa.call(this)
    };
    Jf.prototype.i = function () {
        return this.a
    };
    Jf.prototype.setMap = function (a) {
        this.a && uf(this.element);
        for (var c = 0, d = this.s.length; c < d; ++c)Xa(this.s[c]);
        this.s.length = 0;
        if (this.a = a)(this.S ? this.S : a.v).appendChild(this.element), this.render !== pa && this.s.push(C(a, "postrender", this.render, this)), a.render()
    };
    Jf.prototype.c = function (a) {
        this.S = mf(a)
    };
    function Kf() {
        this.g = 0;
        this.f = {};
        this.a = this.b = null
    }

    l = Kf.prototype;
    l.clear = function () {
        this.g = 0;
        this.f = {};
        this.a = this.b = null
    };
    function Lf(a, c) {
        return a.f.hasOwnProperty(c)
    }

    l.forEach = function (a, c) {
        for (var d = this.b; d;)a.call(c, d.kc, d.Yb, this), d = d.xb
    };
    l.get = function (a) {
        a = this.f[a];
        if (a === this.a)return a.kc;
        a === this.b ? (this.b = this.b.xb, this.b.fc = null) : (a.xb.fc = a.fc, a.fc.xb = a.xb);
        a.xb = null;
        a.fc = this.a;
        this.a = this.a.xb = a;
        return a.kc
    };
    l.rc = function () {
        return this.g
    };
    l.K = function () {
        var a = Array(this.g), c = 0, d;
        for (d = this.a; d; d = d.fc)a[c++] = d.Yb;
        return a
    };
    l.uc = function () {
        var a = Array(this.g), c = 0, d;
        for (d = this.a; d; d = d.fc)a[c++] = d.kc;
        return a
    };
    l.pop = function () {
        var a = this.b;
        delete this.f[a.Yb];
        a.xb && (a.xb.fc = null);
        this.b = a.xb;
        this.b || (this.a = null);
        --this.g;
        return a.kc
    };
    l.replace = function (a, c) {
        this.get(a);
        this.f[a].kc = c
    };
    l.set = function (a, c) {
        var d = {Yb: a, xb: null, fc: this.a, kc: c};
        this.a ? this.a.xb = d : this.b = d;
        this.a = d;
        this.f[a] = d;
        ++this.g
    };
    function Mf(a, c, d, e) {
        return void 0 !== e ? (e[0] = a, e[1] = c, e[2] = d, e) : [a, c, d]
    }

    function Nf(a) {
        var c = a[0], d = Array(c), e = 1 << c - 1, f, g;
        for (f = 0; f < c; ++f)g = 48, a[1] & e && (g += 1), a[2] & e && (g += 2), d[f] = String.fromCharCode(g), e >>= 1;
        return d.join("")
    };
    function Of(a) {
        Kf.call(this);
        this.c = void 0 !== a ? a : 2048
    }

    y(Of, Kf);
    function Pf(a) {
        return a.rc() > a.c
    }

    Of.prototype.Gc = function (a) {
        for (var c, d; Pf(this) && !(c = this.b.kc, d = c.ja[0].toString(), d in a && a[d].contains(c.ja));)fb(this.pop())
    };
    function Qf(a, c) {
        jb.call(this);
        this.ja = a;
        this.state = c;
        this.a = null;
        this.key = ""
    }

    y(Qf, jb);
    function Rf(a) {
        a.b("change")
    }

    Qf.prototype.gb = function () {
        return w(this).toString()
    };
    Qf.prototype.i = function () {
        return this.ja
    };
    Qf.prototype.V = function () {
        return this.state
    };
    function Sf(a, c, d) {
        void 0 === d && (d = [0, 0]);
        d[0] = a[0] + 2 * c;
        d[1] = a[1] + 2 * c;
        return d
    }

    function Tf(a, c, d) {
        void 0 === d && (d = [0, 0]);
        d[0] = a[0] * c + .5 | 0;
        d[1] = a[1] * c + .5 | 0;
        return d
    }

    function Uf(a, c) {
        if (Array.isArray(a))return a;
        void 0 === c ? c = [a, a] : (c[0] = a, c[1] = a);
        return c
    };
    function Vf(a) {
        pb.call(this);
        this.f = Ic(a.projection);
        this.l = Wf(a.attributions);
        this.R = a.logo;
        this.wa = void 0 !== a.state ? a.state : "ready";
        this.N = void 0 !== a.wrapX ? a.wrapX : !1
    }

    y(Vf, pb);
    function Wf(a) {
        if ("string" === typeof a)return [new ue({html: a})];
        if (a instanceof ue)return [a];
        if (Array.isArray(a)) {
            for (var c = a.length, d = Array(c), e = 0; e < c; e++) {
                var f = a[e];
                d[e] = "string" === typeof f ? new ue({html: f}) : f
            }
            return d
        }
        return null
    }

    l = Vf.prototype;
    l.oa = pa;
    l.ra = function () {
        return this.l
    };
    l.qa = function () {
        return this.R
    };
    l.sa = function () {
        return this.f
    };
    l.V = function () {
        return this.wa
    };
    l.pa = function () {
        this.u()
    };
    l.ka = function (a) {
        this.l = Wf(a);
        this.u()
    };
    function Xf(a, c) {
        a.wa = c;
        a.u()
    };
    function Yf(a) {
        this.minZoom = void 0 !== a.minZoom ? a.minZoom : 0;
        this.b = a.resolutions;
        this.maxZoom = this.b.length - 1;
        this.g = void 0 !== a.origin ? a.origin : null;
        this.c = null;
        void 0 !== a.origins && (this.c = a.origins);
        var c = a.extent;
        void 0 === c || this.g || this.c || (this.g = oc(c));
        this.i = null;
        void 0 !== a.tileSizes && (this.i = a.tileSizes);
        this.o = void 0 !== a.tileSize ? a.tileSize : this.i ? null : 256;
        this.s = void 0 !== c ? c : null;
        this.a = null;
        this.f = [0, 0];
        void 0 !== a.sizes ? this.a = a.sizes.map(function (a) {
            return new qe(Math.min(0, a[0]), Math.max(a[0] -
                1, -1), Math.min(0, a[1]), Math.max(a[1] - 1, -1))
        }, this) : c && Zf(this, c)
    }

    var $f = [0, 0, 0];

    function ag(a, c, d, e, f) {
        f = a.Ba(c, f);
        for (c = c[0] - 1; c >= a.minZoom;) {
            if (d.call(null, c, bg(a, f, c, e)))return !0;
            --c
        }
        return !1
    }

    l = Yf.prototype;
    l.O = function () {
        return this.s
    };
    l.Dg = function () {
        return this.maxZoom
    };
    l.Eg = function () {
        return this.minZoom
    };
    l.Fa = function (a) {
        return this.g ? this.g : this.c[a]
    };
    l.$ = function (a) {
        return this.b[a]
    };
    l.Fh = function () {
        return this.b
    };
    function cg(a, c, d, e) {
        return c[0] < a.maxZoom ? (e = a.Ba(c, e), bg(a, e, c[0] + 1, d)) : null
    }

    function dg(a, c, d, e) {
        eg(a, c[0], c[1], d, !1, $f);
        var f = $f[1], g = $f[2];
        eg(a, c[2], c[3], d, !0, $f);
        a = $f[1];
        c = $f[2];
        void 0 !== e ? (e.b = f, e.a = a, e.g = g, e.f = c) : e = new qe(f, a, g, c);
        return e
    }

    function bg(a, c, d, e) {
        d = a.$(d);
        return dg(a, c, d, e)
    }

    function fg(a, c) {
        var d = a.Fa(c[0]), e = a.$(c[0]), f = Uf(a.Ha(c[0]), a.f);
        return [d[0] + (c[1] + .5) * f[0] * e, d[1] + (c[2] + .5) * f[1] * e]
    }

    l.Ba = function (a, c) {
        var d = this.Fa(a[0]), e = this.$(a[0]), f = Uf(this.Ha(a[0]), this.f), g = d[0] + a[1] * f[0] * e, d = d[1] + a[2] * f[1] * e;
        return ec(g, d, g + f[0] * e, d + f[1] * e, c)
    };
    l.Td = function (a, c, d) {
        return eg(this, a[0], a[1], c, !1, d)
    };
    function eg(a, c, d, e, f, g) {
        var h = gg(a, e), k = e / a.$(h), m = a.Fa(h);
        a = Uf(a.Ha(h), a.f);
        c = k * Math.floor((c - m[0]) / e + (f ? .5 : 0)) / a[0];
        d = k * Math.floor((d - m[1]) / e + (f ? 0 : .5)) / a[1];
        f ? (c = Math.ceil(c) - 1, d = Math.ceil(d) - 1) : (c = Math.floor(c), d = Math.floor(d));
        return Mf(h, c, d, g)
    }

    l.kd = function (a, c, d) {
        c = this.$(c);
        return eg(this, a[0], a[1], c, !1, d)
    };
    l.Ha = function (a) {
        return this.o ? this.o : this.i[a]
    };
    function gg(a, c, d) {
        c = vb(a.b, c, d || 0);
        return Da(c, a.minZoom, a.maxZoom)
    }

    function Zf(a, c) {
        for (var d = a.b.length, e = Array(d), f = a.minZoom; f < d; ++f)e[f] = bg(a, c, f);
        a.a = e
    }

    function hg(a) {
        var c = a.l;
        if (!c) {
            var c = ig(a), d = jg(c, void 0, void 0), c = new Yf({
                extent: c,
                origin: oc(c),
                resolutions: d,
                tileSize: void 0
            });
            a.l = c
        }
        return c
    }

    function kg(a) {
        var c = {};
        Pa(c, void 0 !== a ? a : {});
        void 0 === c.extent && (c.extent = Ic("EPSG:3857").O());
        c.resolutions = jg(c.extent, c.maxZoom, c.tileSize);
        delete c.maxZoom;
        return new Yf(c)
    }

    function jg(a, c, d) {
        c = void 0 !== c ? c : 42;
        var e = sc(a);
        a = rc(a);
        d = Uf(void 0 !== d ? d : 256);
        d = Math.max(a / d[0], e / d[1]);
        c += 1;
        e = Array(c);
        for (a = 0; a < c; ++a)e[a] = d / Math.pow(2, a);
        return e
    }

    function ig(a) {
        a = Ic(a);
        var c = a.O();
        c || (a = 180 * Ec.degrees / a.Vb(), c = ec(-a, -a, a, a));
        return c
    };
    function lg(a) {
        Vf.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            state: a.state,
            wrapX: a.wrapX
        });
        this.ea = void 0 !== a.opaque ? a.opaque : !1;
        this.ta = void 0 !== a.tilePixelRatio ? a.tilePixelRatio : 1;
        this.tileGrid = void 0 !== a.tileGrid ? a.tileGrid : null;
        this.a = new Of(a.cacheSize);
        this.o = [0, 0];
        this.Yb = ""
    }

    y(lg, Vf);
    l = lg.prototype;
    l.vh = function () {
        return Pf(this.a)
    };
    l.Gc = function (a, c) {
        var d = this.jd(a);
        d && d.Gc(c)
    };
    function mg(a, c, d, e, f) {
        c = a.jd(c);
        if (!c)return !1;
        for (var g = !0, h, k, m = e.b; m <= e.a; ++m)for (var n = e.g; n <= e.f; ++n)h = a.Ab(d, m, n), k = !1, Lf(c, h) && (h = c.get(h), (k = 2 === h.V()) && (k = !1 !== f(h))), k || (g = !1);
        return g
    }

    l.Od = function () {
        return 0
    };
    function ng(a, c) {
        a.Yb !== c && (a.Yb = c, a.u())
    }

    l.Ab = function (a, c, d) {
        return a + "/" + c + "/" + d
    };
    l.ef = function () {
        return this.ea
    };
    l.Ga = function () {
        return this.tileGrid
    };
    l.fb = function (a) {
        return this.tileGrid ? this.tileGrid : hg(a)
    };
    l.jd = function (a) {
        var c = this.f;
        return c && !Zc(c, a) ? null : this.a
    };
    l.Xb = function () {
        return this.ta
    };
    l.Ud = function (a, c, d) {
        d = this.fb(d);
        c = this.Xb(c);
        a = Uf(d.Ha(a), this.o);
        return 1 == c ? a : Tf(a, c, this.o)
    };
    function og(a, c, d) {
        var e = void 0 !== d ? d : a.f;
        d = a.fb(e);
        if (a.N && e.g) {
            var f = c;
            c = f[0];
            a = fg(d, f);
            e = ig(e);
            ac(e, a) ? c = f : (f = rc(e), a[0] += f * Math.ceil((e[0] - a[0]) / f), c = d.kd(a, c))
        }
        f = c[0];
        e = c[1];
        a = c[2];
        if (d.minZoom > f || f > d.maxZoom)d = !1; else {
            var g = d.O();
            d = (d = g ? bg(d, g, f) : d.a ? d.a[f] : null) ? re(d, e, a) : !0
        }
        return d ? c : null
    }

    l.pa = function () {
        this.a.clear();
        this.u()
    };
    l.Uf = pa;
    function pg(a, c) {
        gb.call(this, a);
        this.tile = c
    }

    y(pg, gb);
    function qg(a) {
        a = a ? a : {};
        this.M = document.createElement("UL");
        this.v = document.createElement("LI");
        this.M.appendChild(this.v);
        Cf(this.v, !1);
        this.f = void 0 !== a.collapsed ? a.collapsed : !0;
        this.o = void 0 !== a.collapsible ? a.collapsible : !0;
        this.o || (this.f = !1);
        var c = void 0 !== a.className ? a.className : "ol-attribution", d = void 0 !== a.tipLabel ? a.tipLabel : "Attributions", e = void 0 !== a.collapseLabel ? a.collapseLabel : "\u00bb";
        this.N = "string" === typeof e ? pf("SPAN", {}, e) : e;
        e = void 0 !== a.label ? a.label : "i";
        this.R = "string" === typeof e ?
            pf("SPAN", {}, e) : e;
        d = pf("BUTTON", {type: "button", title: d}, this.o && !this.f ? this.N : this.R);
        C(d, "click", this.Vl, this);
        c = pf("DIV", c + " ol-unselectable ol-control" + (this.f && this.o ? " ol-collapsed" : "") + (this.o ? "" : " ol-uncollapsible"), this.M, d);
        Jf.call(this, {element: c, render: a.render ? a.render : rg, target: a.target});
        this.B = !0;
        this.j = {};
        this.l = {};
        this.T = {}
    }

    y(qg, Jf);
    function rg(a) {
        if (a = a.frameState) {
            var c, d, e, f, g, h, k, m, n, p, q, r = a.layerStatesArray, u = Pa({}, a.attributions), v = {}, x = a.viewState.projection;
            d = 0;
            for (c = r.length; d < c; d++)if (h = r[d].layer.da())if (p = w(h).toString(), n = h.l)for (e = 0, f = n.length; e < f; e++)if (k = n[e], m = w(k).toString(), !(m in u)) {
                if (g = a.usedTiles[p]) {
                    var z = h.fb(x);
                    a:{
                        q = k;
                        var E = x;
                        if (q.b) {
                            var B = void 0, A = void 0, G = void 0, O = void 0;
                            for (O in g)if (O in q.b)for (var G = g[O], L, B = 0, A = q.b[O].length; B < A; ++B) {
                                L = q.b[O][B];
                                if (te(L, G)) {
                                    q = !0;
                                    break a
                                }
                                var R = bg(z, ig(E), parseInt(O,
                                    10)), Wa = R.a - R.b + 1;
                                if (G.b < R.b || G.a > R.a)if (te(L, new qe(Ja(G.b, Wa), Ja(G.a, Wa), G.g, G.f)) || G.a - G.b + 1 > Wa && te(L, R)) {
                                    q = !0;
                                    break a
                                }
                            }
                            q = !1
                        } else q = !0
                    }
                } else q = !1;
                q ? (m in v && delete v[m], u[m] = k) : v[m] = k
            }
            c = [u, v];
            d = c[0];
            c = c[1];
            for (var J in this.j)J in d ? (this.l[J] || (Cf(this.j[J], !0), this.l[J] = !0), delete d[J]) : J in c ? (this.l[J] && (Cf(this.j[J], !1), delete this.l[J]), delete c[J]) : (uf(this.j[J]), delete this.j[J], delete this.l[J]);
            for (J in d)e = document.createElement("LI"), e.innerHTML = d[J].a, this.M.appendChild(e), this.j[J] =
                e, this.l[J] = !0;
            for (J in c)e = document.createElement("LI"), e.innerHTML = c[J].a, Cf(e, !1), this.M.appendChild(e), this.j[J] = e;
            J = !Sa(this.l) || !Sa(a.logos);
            this.B != J && (Cf(this.element, J), this.B = J);
            J && Sa(this.l) ? this.element.classList.add("ol-logo-only") : this.element.classList.remove("ol-logo-only");
            var ua;
            a = a.logos;
            J = this.T;
            for (ua in J)ua in a || (uf(J[ua]), delete J[ua]);
            for (var Ta in a)d = a[Ta], d instanceof HTMLElement && (this.v.appendChild(d), J[Ta] = d), Ta in J || (ua = new Image, ua.src = Ta, "" === d ? d = ua : (d = pf("A", {href: d}),
                d.appendChild(ua)), this.v.appendChild(d), J[Ta] = d);
            Cf(this.v, !Sa(a))
        } else this.B && (Cf(this.element, !1), this.B = !1)
    }

    l = qg.prototype;
    l.Vl = function (a) {
        a.preventDefault();
        sg(this)
    };
    function sg(a) {
        a.element.classList.toggle("ol-collapsed");
        a.f ? vf(a.N, a.R) : vf(a.R, a.N);
        a.f = !a.f
    }

    l.Ul = function () {
        return this.o
    };
    l.Xl = function (a) {
        this.o !== a && (this.o = a, this.element.classList.toggle("ol-uncollapsible"), !a && this.f && sg(this))
    };
    l.Wl = function (a) {
        this.o && this.f !== a && sg(this)
    };
    l.Tl = function () {
        return this.f
    };
    function tg(a) {
        a = a ? a : {};
        var c = void 0 !== a.className ? a.className : "ol-rotate", d = void 0 !== a.label ? a.label : "\u21e7";
        this.f = null;
        "string" === typeof d ? this.f = pf("SPAN", "ol-compass", d) : (this.f = d, this.f.classList.add("ol-compass"));
        d = pf("BUTTON", {
            "class": c + "-reset",
            type: "button",
            title: a.tipLabel ? a.tipLabel : "Reset rotation"
        }, this.f);
        C(d, "click", tg.prototype.B, this);
        c = pf("DIV", c + " ol-unselectable ol-control", d);
        d = a.render ? a.render : ug;
        this.o = a.resetNorth ? a.resetNorth : void 0;
        Jf.call(this, {element: c, render: d, target: a.target});
        this.j = void 0 !== a.duration ? a.duration : 250;
        this.l = void 0 !== a.autoHide ? a.autoHide : !0;
        this.v = void 0;
        this.l && this.element.classList.add("ol-hidden")
    }

    y(tg, Jf);
    tg.prototype.B = function (a) {
        a.preventDefault();
        if (void 0 !== this.o)this.o(); else {
            a = this.a;
            var c = a.aa();
            if (c) {
                var d = c.Ka();
                void 0 !== d && (0 < this.j && (d %= 2 * Math.PI, d < -Math.PI && (d += 2 * Math.PI), d > Math.PI && (d -= 2 * Math.PI), a.Va(oe({
                    rotation: d,
                    duration: this.j,
                    easing: je
                }))), c.de(0))
            }
        }
    };
    function ug(a) {
        if (a = a.frameState) {
            a = a.viewState.rotation;
            if (a != this.v) {
                var c = "rotate(" + a + "rad)";
                if (this.l) {
                    var d = this.element.classList.contains("ol-hidden");
                    d || 0 !== a ? d && 0 !== a && this.element.classList.remove("ol-hidden") : this.element.classList.add("ol-hidden")
                }
                this.f.style.msTransform = c;
                this.f.style.webkitTransform = c;
                this.f.style.transform = c
            }
            this.v = a
        }
    };
    function vg(a) {
        a = a ? a : {};
        var c = void 0 !== a.className ? a.className : "ol-zoom", d = void 0 !== a.delta ? a.delta : 1, e = void 0 !== a.zoomOutLabel ? a.zoomOutLabel : "\u2212", f = void 0 !== a.zoomOutTipLabel ? a.zoomOutTipLabel : "Zoom out", g = pf("BUTTON", {
            "class": c + "-in",
            type: "button",
            title: void 0 !== a.zoomInTipLabel ? a.zoomInTipLabel : "Zoom in"
        }, void 0 !== a.zoomInLabel ? a.zoomInLabel : "+");
        C(g, "click", vg.prototype.l.bind(this, d));
        e = pf("BUTTON", {"class": c + "-out", type: "button", title: f}, e);
        C(e, "click", vg.prototype.l.bind(this, -d));
        c = pf("DIV",
            c + " ol-unselectable ol-control", g, e);
        Jf.call(this, {element: c, target: a.target});
        this.f = void 0 !== a.duration ? a.duration : 250
    }

    y(vg, Jf);
    vg.prototype.l = function (a, c) {
        c.preventDefault();
        var d = this.a, e = d.aa();
        if (e) {
            var f = e.$();
            f && (0 < this.f && d.Va(pe({
                resolution: f,
                duration: this.f,
                easing: je
            })), d = e.constrainResolution(f, a), e.Qb(d))
        }
    };
    function wg(a) {
        a = a ? a : {};
        var c = new we;
        (void 0 !== a.zoom ? a.zoom : 1) && c.push(new vg(a.zoomOptions));
        (void 0 !== a.rotate ? a.rotate : 1) && c.push(new tg(a.rotateOptions));
        (void 0 !== a.attribution ? a.attribution : 1) && c.push(new qg(a.attributionOptions));
        return c
    };
    var xg = Ve ? "webkitfullscreenchange" : Ue ? "mozfullscreenchange" : Se ? "MSFullscreenChange" : "fullscreenchange";

    function yg() {
        var a = jf().b, c = a.body;
        return !!(c.webkitRequestFullscreen || c.mozRequestFullScreen && a.mozFullScreenEnabled || c.msRequestFullscreen && a.msFullscreenEnabled || c.requestFullscreen && a.fullscreenEnabled)
    }

    function zg(a) {
        a.webkitRequestFullscreen ? a.webkitRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.requestFullscreen && a.requestFullscreen()
    }

    function Ag() {
        var a = jf().b;
        return !!(a.webkitIsFullScreen || a.mozFullScreen || a.msFullscreenElement || a.fullscreenElement)
    };
    function Bg(a) {
        a = a ? a : {};
        this.f = void 0 !== a.className ? a.className : "ol-full-screen";
        var c = void 0 !== a.label ? a.label : "\u2922";
        this.l = "string" === typeof c ? document.createTextNode(c) : c;
        c = void 0 !== a.labelActive ? a.labelActive : "\u00d7";
        this.o = "string" === typeof c ? document.createTextNode(c) : c;
        c = a.tipLabel ? a.tipLabel : "Toggle full-screen";
        c = pf("BUTTON", {"class": this.f + "-" + Ag(), type: "button", title: c}, this.l);
        C(c, "click", this.M, this);
        var d = this.f + " ol-unselectable ol-control " + (yg() ? "" : "ol-unsupported"), c = pf("DIV",
            d, c);
        Jf.call(this, {element: c, target: a.target});
        this.B = void 0 !== a.keys ? a.keys : !1;
        this.j = a.source
    }

    y(Bg, Jf);
    Bg.prototype.M = function (a) {
        a.preventDefault();
        yg() && (a = this.a) && (Ag() ? (a = jf().b, a.webkitCancelFullScreen ? a.webkitCancelFullScreen() : a.mozCancelFullScreen ? a.mozCancelFullScreen() : a.msExitFullscreen ? a.msExitFullscreen() : a.exitFullscreen && a.exitFullscreen()) : (a = this.j ? mf(this.j) : a.tc(), this.B ? a.mozRequestFullScreenWithKeys ? a.mozRequestFullScreenWithKeys() : a.webkitRequestFullscreen ? a.webkitRequestFullscreen() : zg(a) : zg(a)))
    };
    Bg.prototype.v = function () {
        var a = this.element.firstElementChild, c = this.a;
        Ag() ? (a.className = this.f + "-true", vf(this.o, this.l)) : (a.className = this.f + "-false", vf(this.l, this.o));
        c && c.Sc()
    };
    Bg.prototype.setMap = function (a) {
        Bg.ia.setMap.call(this, a);
        a && this.s.push(C(qa.document, xg, this.v, this))
    };
    function Cg(a) {
        a = a ? a : {};
        var c = document.createElement("DIV");
        c.className = void 0 !== a.className ? a.className : "ol-mouse-position";
        Jf.call(this, {element: c, render: a.render ? a.render : Dg, target: a.target});
        C(this, rb("projection"), this.Yl, this);
        a.coordinateFormat && this.$h(a.coordinateFormat);
        a.projection && this.dh(Ic(a.projection));
        this.v = void 0 !== a.undefinedHTML ? a.undefinedHTML : "";
        this.j = c.innerHTML;
        this.o = this.l = this.f = null
    }

    y(Cg, Jf);
    function Dg(a) {
        a = a.frameState;
        a ? this.f != a.viewState.projection && (this.f = a.viewState.projection, this.l = null) : this.f = null;
        Eg(this, this.o)
    }

    l = Cg.prototype;
    l.Yl = function () {
        this.l = null
    };
    l.xg = function () {
        return this.get("coordinateFormat")
    };
    l.bh = function () {
        return this.get("projection")
    };
    l.Tk = function (a) {
        this.o = this.a.Nd(a);
        Eg(this, this.o)
    };
    l.Uk = function () {
        Eg(this, null);
        this.o = null
    };
    l.setMap = function (a) {
        Cg.ia.setMap.call(this, a);
        a && (a = a.a, this.s.push(C(a, "mousemove", this.Tk, this), C(a, "mouseout", this.Uk, this)))
    };
    l.$h = function (a) {
        this.set("coordinateFormat", a)
    };
    l.dh = function (a) {
        this.set("projection", a)
    };
    function Eg(a, c) {
        var d = a.v;
        if (c && a.f) {
            if (!a.l) {
                var e = a.bh();
                a.l = e ? Lc(a.f, e) : ad
            }
            if (e = a.a.Ma(c))a.l(e, e), d = (d = a.xg()) ? d(e) : e.toString()
        }
        a.j && d == a.j || (a.element.innerHTML = d, a.j = d)
    };
    function Fg(a, c) {
        var d = a;
        c && (d = ma(a, c));
        !ga(aa.setImmediate) || aa.Window && aa.Window.prototype && !Ne("Edge") && aa.Window.prototype.setImmediate == aa.setImmediate ? (Gg || (Gg = Hg()), Gg(d)) : aa.setImmediate(d)
    }

    var Gg;

    function Hg() {
        var a = aa.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !Ne("Presto") && (a = function () {
            var a = document.createElement("IFRAME");
            a.style.display = "none";
            a.src = "";
            document.documentElement.appendChild(a);
            var c = a.contentWindow, a = c.document;
            a.open();
            a.write("");
            a.close();
            var d = "callImmediate" + Math.random(), e = "file:" == c.location.protocol ? "*" : c.location.protocol + "//" + c.location.host, a = ma(function (a) {
                if (("*" == e || a.origin == e) && a.data ==
                    d)this.port1.onmessage()
            }, this);
            c.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function () {
                    c.postMessage(d, e)
                }
            }
        });
        if ("undefined" !== typeof a && !Ne("Trident") && !Ne("MSIE")) {
            var c = new a, d = {}, e = d;
            c.port1.onmessage = function () {
                if (void 0 !== d.next) {
                    d = d.next;
                    var a = d.ng;
                    d.ng = null;
                    a()
                }
            };
            return function (a) {
                e.next = {ng: a};
                e = e.next;
                c.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (a) {
            var c = document.createElement("SCRIPT");
            c.onreadystatechange = function () {
                c.onreadystatechange = null;
                c.parentNode.removeChild(c);
                c = null;
                a();
                a = null
            };
            document.documentElement.appendChild(c)
        } : function (a) {
            aa.setTimeout(a, 0)
        }
    };
    function Ig(a, c, d) {
        gb.call(this, a);
        this.b = c;
        a = d ? d : {};
        this.buttons = Jg(a);
        this.pressure = Kg(a, this.buttons);
        this.bubbles = "bubbles" in a ? a.bubbles : !1;
        this.cancelable = "cancelable" in a ? a.cancelable : !1;
        this.view = "view" in a ? a.view : null;
        this.detail = "detail" in a ? a.detail : null;
        this.screenX = "screenX" in a ? a.screenX : 0;
        this.screenY = "screenY" in a ? a.screenY : 0;
        this.clientX = "clientX" in a ? a.clientX : 0;
        this.clientY = "clientY" in a ? a.clientY : 0;
        this.button = "button" in a ? a.button : 0;
        this.relatedTarget = "relatedTarget" in a ? a.relatedTarget :
            null;
        this.pointerId = "pointerId" in a ? a.pointerId : 0;
        this.width = "width" in a ? a.width : 0;
        this.height = "height" in a ? a.height : 0;
        this.pointerType = "pointerType" in a ? a.pointerType : "";
        this.isPrimary = "isPrimary" in a ? a.isPrimary : !1;
        c.preventDefault && (this.preventDefault = function () {
            c.preventDefault()
        })
    }

    y(Ig, gb);
    function Jg(a) {
        if (a.buttons || Lg)a = a.buttons; else switch (a.which) {
            case 1:
                a = 1;
                break;
            case 2:
                a = 4;
                break;
            case 3:
                a = 2;
                break;
            default:
                a = 0
        }
        return a
    }

    function Kg(a, c) {
        var d = 0;
        a.pressure ? d = a.pressure : d = c ? .5 : 0;
        return d
    }

    var Lg = !1;
    try {
        Lg = 1 === (new MouseEvent("click", {buttons: 1})).buttons
    } catch (a) {
    }
    ;
    function Mg(a, c) {
        var d = document.createElement("CANVAS");
        a && (d.width = a);
        c && (d.height = c);
        return d.getContext("2d")
    }

    var Ng = function () {
        var a;
        return function () {
            if (void 0 === a) {
                var c = document.createElement("P"), d, e = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
                document.body.appendChild(c);
                for (var f in e)f in c.style && (c.style[f] = "translate(1px,1px)", d = qa.getComputedStyle(c).getPropertyValue(e[f]));
                document.body.removeChild(c);
                a = d && "none" !== d
            }
            return a
        }
    }(), Og = function () {
        var a;
        return function () {
            if (void 0 === a) {
                var c = document.createElement("P"),
                    d, e = {
                        webkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        msTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    };
                document.body.appendChild(c);
                for (var f in e)f in c.style && (c.style[f] = "translate3d(1px,1px,1px)", d = qa.getComputedStyle(c).getPropertyValue(e[f]));
                document.body.removeChild(c);
                a = d && "none" !== d
            }
            return a
        }
    }();

    function Pg(a, c) {
        var d = a.style;
        d.WebkitTransform = c;
        d.MozTransform = c;
        d.b = c;
        d.msTransform = c;
        d.transform = c;
        Se && cf("9.0") && (a.style.transformOrigin = "0 0")
    }

    function Qg(a, c) {
        var d;
        if (Og()) {
            var e = Array(16);
            for (d = 0; 16 > d; ++d)e[d] = c[d].toFixed(6);
            Pg(a, "matrix3d(" + e.join(",") + ")")
        } else if (Ng()) {
            var e = [c[0], c[1], c[4], c[5], c[12], c[13]], f = Array(6);
            for (d = 0; 6 > d; ++d)f[d] = e[d].toFixed(6);
            Pg(a, "matrix(" + f.join(",") + ")")
        } else a.style.left = Math.round(c[12]) + "px", a.style.top = Math.round(c[13]) + "px"
    };
    var Rg = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];

    function Sg(a, c) {
        var d, e, f = Rg.length;
        for (e = 0; e < f; ++e)try {
            if (d = a.getContext(Rg[e], c))return d
        } catch (g) {
        }
        return null
    };
    var Tg, Ug = "undefined" !== typeof navigator ? navigator.userAgent.toLowerCase() : "", Vg = -1 !== Ug.indexOf("firefox"), Wg = -1 !== Ug.indexOf("safari") && -1 === Ug.indexOf("chrom"), Xg = -1 !== Ug.indexOf("macintosh"), Yg = qa.devicePixelRatio || 1, Zg = !1, $g = function () {
            if (!("HTMLCanvasElement" in qa))return !1;
            try {
                var a = Mg();
                return a ? (void 0 !== a.setLineDash && (Zg = !0), !0) : !1
            } catch (c) {
                return !1
            }
        }(), ah = "DeviceOrientationEvent" in qa, bh = "geolocation" in qa.navigator, ch = "ontouchstart" in qa, dh = "PointerEvent" in qa, eh = !!qa.navigator.msPointerEnabled,
        fh = !1, gh, hh = [];
    if ("WebGLRenderingContext" in qa)try {
        var ih = Sg(document.createElement("CANVAS"), {failIfMajorPerformanceCaveat: !0});
        ih && (fh = !0, gh = ih.getParameter(ih.MAX_TEXTURE_SIZE), hh = ih.getSupportedExtensions())
    } catch (a) {
    }
    Tg = fh;
    oa = hh;
    na = gh;
    function jh(a, c) {
        this.b = a;
        this.c = c
    };
    function kh(a) {
        jh.call(this, a, {
            mousedown: this.nl,
            mousemove: this.ol,
            mouseup: this.rl,
            mouseover: this.ql,
            mouseout: this.pl
        });
        this.a = a.g;
        this.g = []
    }

    y(kh, jh);
    function lh(a, c) {
        for (var d = a.g, e = c.clientX, f = c.clientY, g = 0, h = d.length, k; g < h && (k = d[g]); g++) {
            var m = Math.abs(f - k[1]);
            if (25 >= Math.abs(e - k[0]) && 25 >= m)return !0
        }
        return !1
    }

    function mh(a) {
        var c = nh(a, a), d = c.preventDefault;
        c.preventDefault = function () {
            a.preventDefault();
            d()
        };
        c.pointerId = 1;
        c.isPrimary = !0;
        c.pointerType = "mouse";
        return c
    }

    l = kh.prototype;
    l.nl = function (a) {
        if (!lh(this, a)) {
            if ((1).toString() in this.a) {
                var c = mh(a);
                oh(this.b, ph, c, a);
                delete this.a[(1).toString()]
            }
            c = mh(a);
            this.a[(1).toString()] = a;
            oh(this.b, qh, c, a)
        }
    };
    l.ol = function (a) {
        if (!lh(this, a)) {
            var c = mh(a);
            oh(this.b, rh, c, a)
        }
    };
    l.rl = function (a) {
        if (!lh(this, a)) {
            var c = this.a[(1).toString()];
            c && c.button === a.button && (c = mh(a), oh(this.b, sh, c, a), delete this.a[(1).toString()])
        }
    };
    l.ql = function (a) {
        if (!lh(this, a)) {
            var c = mh(a);
            th(this.b, c, a)
        }
    };
    l.pl = function (a) {
        if (!lh(this, a)) {
            var c = mh(a);
            uh(this.b, c, a)
        }
    };
    function vh(a) {
        jh.call(this, a, {
            MSPointerDown: this.wl,
            MSPointerMove: this.xl,
            MSPointerUp: this.Al,
            MSPointerOut: this.yl,
            MSPointerOver: this.zl,
            MSPointerCancel: this.vl,
            MSGotPointerCapture: this.tl,
            MSLostPointerCapture: this.ul
        });
        this.a = a.g;
        this.g = ["", "unavailable", "touch", "pen", "mouse"]
    }

    y(vh, jh);
    function wh(a, c) {
        var d = c;
        fa(c.pointerType) && (d = nh(c, c), d.pointerType = a.g[c.pointerType]);
        return d
    }

    l = vh.prototype;
    l.wl = function (a) {
        this.a[a.pointerId.toString()] = a;
        var c = wh(this, a);
        oh(this.b, qh, c, a)
    };
    l.xl = function (a) {
        var c = wh(this, a);
        oh(this.b, rh, c, a)
    };
    l.Al = function (a) {
        var c = wh(this, a);
        oh(this.b, sh, c, a);
        delete this.a[a.pointerId.toString()]
    };
    l.yl = function (a) {
        var c = wh(this, a);
        uh(this.b, c, a)
    };
    l.zl = function (a) {
        var c = wh(this, a);
        th(this.b, c, a)
    };
    l.vl = function (a) {
        var c = wh(this, a);
        oh(this.b, ph, c, a);
        delete this.a[a.pointerId.toString()]
    };
    l.ul = function (a) {
        this.b.b(new Ig("lostpointercapture", a, a))
    };
    l.tl = function (a) {
        this.b.b(new Ig("gotpointercapture", a, a))
    };
    function xh(a) {
        jh.call(this, a, {
            pointerdown: this.eo,
            pointermove: this.fo,
            pointerup: this.jo,
            pointerout: this.ho,
            pointerover: this.io,
            pointercancel: this.co,
            gotpointercapture: this.Ck,
            lostpointercapture: this.ml
        })
    }

    y(xh, jh);
    l = xh.prototype;
    l.eo = function (a) {
        yh(this.b, a)
    };
    l.fo = function (a) {
        yh(this.b, a)
    };
    l.jo = function (a) {
        yh(this.b, a)
    };
    l.ho = function (a) {
        yh(this.b, a)
    };
    l.io = function (a) {
        yh(this.b, a)
    };
    l.co = function (a) {
        yh(this.b, a)
    };
    l.ml = function (a) {
        yh(this.b, a)
    };
    l.Ck = function (a) {
        yh(this.b, a)
    };
    function zh(a, c) {
        jh.call(this, a, {touchstart: this.mp, touchmove: this.lp, touchend: this.kp, touchcancel: this.jp});
        this.a = a.g;
        this.l = c;
        this.g = void 0;
        this.i = 0;
        this.f = void 0
    }

    y(zh, jh);
    l = zh.prototype;
    l.Yh = function () {
        this.i = 0;
        this.f = void 0
    };
    function Ah(a, c, d) {
        c = nh(c, d);
        c.pointerId = d.identifier + 2;
        c.bubbles = !0;
        c.cancelable = !0;
        c.detail = a.i;
        c.button = 0;
        c.buttons = 1;
        c.width = d.webkitRadiusX || d.radiusX || 0;
        c.height = d.webkitRadiusY || d.radiusY || 0;
        c.pressure = d.webkitForce || d.force || .5;
        c.isPrimary = a.g === d.identifier;
        c.pointerType = "touch";
        c.clientX = d.clientX;
        c.clientY = d.clientY;
        c.screenX = d.screenX;
        c.screenY = d.screenY;
        return c
    }

    function Bh(a, c, d) {
        function e() {
            c.preventDefault()
        }

        var f = Array.prototype.slice.call(c.changedTouches), g = f.length, h, k;
        for (h = 0; h < g; ++h)k = Ah(a, c, f[h]), k.preventDefault = e, d.call(a, c, k)
    }

    l.mp = function (a) {
        var c = a.touches, d = Object.keys(this.a), e = d.length;
        if (e >= c.length) {
            var f = [], g, h, k;
            for (g = 0; g < e; ++g) {
                h = d[g];
                k = this.a[h];
                var m;
                if (!(m = 1 == h))a:{
                    m = c.length;
                    for (var n = void 0, p = 0; p < m; p++)if (n = c[p], n.identifier === h - 2) {
                        m = !0;
                        break a
                    }
                    m = !1
                }
                m || f.push(k.out)
            }
            for (g = 0; g < f.length; ++g)this.Qe(a, f[g])
        }
        c = a.changedTouches[0];
        d = Object.keys(this.a).length;
        if (0 === d || 1 === d && (1).toString() in this.a)this.g = c.identifier, void 0 !== this.f && qa.clearTimeout(this.f);
        Ch(this, a);
        this.i++;
        Bh(this, a, this.Zn)
    };
    l.Zn = function (a, c) {
        this.a[c.pointerId] = {target: c.target, out: c, Gh: c.target};
        var d = this.b;
        c.bubbles = !0;
        oh(d, Dh, c, a);
        d = this.b;
        c.bubbles = !1;
        oh(d, Eh, c, a);
        oh(this.b, qh, c, a)
    };
    l.lp = function (a) {
        a.preventDefault();
        Bh(this, a, this.sl)
    };
    l.sl = function (a, c) {
        var d = this.a[c.pointerId];
        if (d) {
            var e = d.out, f = d.Gh;
            oh(this.b, rh, c, a);
            e && f !== c.target && (e.relatedTarget = c.target, c.relatedTarget = f, e.target = f, c.target ? (uh(this.b, e, a), th(this.b, c, a)) : (c.target = f, c.relatedTarget = null, this.Qe(a, c)));
            d.out = c;
            d.Gh = c.target
        }
    };
    l.kp = function (a) {
        Ch(this, a);
        Bh(this, a, this.np)
    };
    l.np = function (a, c) {
        oh(this.b, sh, c, a);
        this.b.out(c, a);
        var d = this.b;
        c.bubbles = !1;
        oh(d, Fh, c, a);
        delete this.a[c.pointerId];
        c.isPrimary && (this.g = void 0, this.f = qa.setTimeout(this.Yh.bind(this), 200))
    };
    l.jp = function (a) {
        Bh(this, a, this.Qe)
    };
    l.Qe = function (a, c) {
        oh(this.b, ph, c, a);
        this.b.out(c, a);
        var d = this.b;
        c.bubbles = !1;
        oh(d, Fh, c, a);
        delete this.a[c.pointerId];
        c.isPrimary && (this.g = void 0, this.f = qa.setTimeout(this.Yh.bind(this), 200))
    };
    function Ch(a, c) {
        var d = a.l.g, e = c.changedTouches[0];
        if (a.g === e.identifier) {
            var f = [e.clientX, e.clientY];
            d.push(f);
            qa.setTimeout(function () {
                yb(d, f)
            }, 2500)
        }
    };
    function Gh(a) {
        jb.call(this);
        this.i = a;
        this.g = {};
        this.c = {};
        this.a = [];
        dh ? Hh(this, new xh(this)) : eh ? Hh(this, new vh(this)) : (a = new kh(this), Hh(this, a), ch && Hh(this, new zh(this, a)));
        a = this.a.length;
        for (var c, d = 0; d < a; d++)c = this.a[d], Ih(this, Object.keys(c.c))
    }

    y(Gh, jb);
    function Hh(a, c) {
        var d = Object.keys(c.c);
        d && (d.forEach(function (a) {
            var d = c.c[a];
            d && (this.c[a] = d.bind(c))
        }, a), a.a.push(c))
    }

    Gh.prototype.f = function (a) {
        var c = this.c[a.type];
        c && c(a)
    };
    function Ih(a, c) {
        c.forEach(function (a) {
            C(this.i, a, this.f, this)
        }, a)
    }

    function Jh(a, c) {
        c.forEach(function (a) {
            cb(this.i, a, this.f, this)
        }, a)
    }

    function nh(a, c) {
        for (var d = {}, e, f = 0, g = Kh.length; f < g; f++)e = Kh[f][0], d[e] = a[e] || c[e] || Kh[f][1];
        return d
    }

    Gh.prototype.out = function (a, c) {
        a.bubbles = !0;
        oh(this, Lh, a, c)
    };
    function uh(a, c, d) {
        a.out(c, d);
        var e = c.relatedTarget;
        e && wf(c.target, e) || (c.bubbles = !1, oh(a, Fh, c, d))
    }

    function th(a, c, d) {
        c.bubbles = !0;
        oh(a, Dh, c, d);
        var e = c.relatedTarget;
        e && wf(c.target, e) || (c.bubbles = !1, oh(a, Eh, c, d))
    }

    function oh(a, c, d, e) {
        a.b(new Ig(c, e, d))
    }

    function yh(a, c) {
        a.b(new Ig(c.type, c, c))
    }

    Gh.prototype.fa = function () {
        for (var a = this.a.length, c, d = 0; d < a; d++)c = this.a[d], Jh(this, Object.keys(c.c));
        Gh.ia.fa.call(this)
    };
    var rh = "pointermove", qh = "pointerdown", sh = "pointerup", Dh = "pointerover", Lh = "pointerout", Eh = "pointerenter", Fh = "pointerleave", ph = "pointercancel", Kh = [["bubbles", !1], ["cancelable", !1], ["view", null], ["detail", null], ["screenX", 0], ["screenY", 0], ["clientX", 0], ["clientY", 0], ["ctrlKey", !1], ["altKey", !1], ["shiftKey", !1], ["metaKey", !1], ["button", 0], ["relatedTarget", null], ["buttons", 0], ["pointerId", 0], ["width", 0], ["height", 0], ["pressure", 0], ["tiltX", 0], ["tiltY", 0], ["pointerType", ""], ["hwTimestamp", 0], ["isPrimary",
        !1], ["type", ""], ["target", null], ["currentTarget", null], ["which", 0]];

    function Mh(a, c, d, e, f) {
        If.call(this, a, c, f);
        this.originalEvent = d;
        this.pixel = c.Nd(d);
        this.coordinate = c.Ma(this.pixel);
        this.dragging = void 0 !== e ? e : !1
    }

    y(Mh, If);
    Mh.prototype.preventDefault = function () {
        Mh.ia.preventDefault.call(this);
        this.originalEvent.preventDefault()
    };
    Mh.prototype.stopPropagation = function () {
        Mh.ia.stopPropagation.call(this);
        this.originalEvent.stopPropagation()
    };
    function Nh(a, c, d, e, f) {
        Mh.call(this, a, c, d.b, e, f);
        this.b = d
    }

    y(Nh, Mh);
    function Oh(a) {
        jb.call(this);
        this.f = a;
        this.l = 0;
        this.o = !1;
        this.c = [];
        this.g = null;
        a = this.f.a;
        this.U = 0;
        this.v = {};
        this.i = new Gh(a);
        this.a = null;
        this.j = C(this.i, qh, this.Wk, this);
        this.s = C(this.i, rh, this.Ho, this)
    }

    y(Oh, jb);
    function Ph(a, c) {
        var d;
        d = new Nh(Qh, a.f, c);
        a.b(d);
        0 !== a.l ? (qa.clearTimeout(a.l), a.l = 0, d = new Nh(Rh, a.f, c), a.b(d)) : a.l = qa.setTimeout(function () {
            this.l = 0;
            var a = new Nh(Sh, this.f, c);
            this.b(a)
        }.bind(a), 250)
    }

    function Th(a, c) {
        c.type == Uh || c.type == Vh ? delete a.v[c.pointerId] : c.type == Wh && (a.v[c.pointerId] = !0);
        a.U = Object.keys(a.v).length
    }

    l = Oh.prototype;
    l.Lg = function (a) {
        Th(this, a);
        var c = new Nh(Uh, this.f, a);
        this.b(c);
        !this.o && 0 === a.button && Ph(this, this.g);
        0 === this.U && (this.c.forEach(Xa), this.c.length = 0, this.o = !1, this.g = null, fb(this.a), this.a = null)
    };
    l.Wk = function (a) {
        Th(this, a);
        var c = new Nh(Wh, this.f, a);
        this.b(c);
        this.g = a;
        0 === this.c.length && (this.a = new Gh(document), this.c.push(C(this.a, Xh, this.Ol, this), C(this.a, Uh, this.Lg, this), C(this.i, Vh, this.Lg, this)))
    };
    l.Ol = function (a) {
        if (a.clientX != this.g.clientX || a.clientY != this.g.clientY) {
            this.o = !0;
            var c = new Nh(Yh, this.f, a, this.o);
            this.b(c)
        }
        a.preventDefault()
    };
    l.Ho = function (a) {
        this.b(new Nh(a.type, this.f, a, !(!this.g || a.clientX == this.g.clientX && a.clientY == this.g.clientY)))
    };
    l.fa = function () {
        this.s && (Xa(this.s), this.s = null);
        this.j && (Xa(this.j), this.j = null);
        this.c.forEach(Xa);
        this.c.length = 0;
        this.a && (fb(this.a), this.a = null);
        this.i && (fb(this.i), this.i = null);
        Oh.ia.fa.call(this)
    };
    var Sh = "singleclick", Qh = "click", Rh = "dblclick", Yh = "pointerdrag", Xh = "pointermove", Wh = "pointerdown", Uh = "pointerup", Vh = "pointercancel", Zh = {
        Gp: Sh,
        vp: Qh,
        wp: Rh,
        zp: Yh,
        Cp: Xh,
        yp: Wh,
        Fp: Uh,
        Ep: "pointerover",
        Dp: "pointerout",
        Ap: "pointerenter",
        Bp: "pointerleave",
        xp: Vh
    };

    function $h(a) {
        pb.call(this);
        var c = Pa({}, a);
        c.opacity = void 0 !== a.opacity ? a.opacity : 1;
        c.visible = void 0 !== a.visible ? a.visible : !0;
        c.zIndex = void 0 !== a.zIndex ? a.zIndex : 0;
        c.maxResolution = void 0 !== a.maxResolution ? a.maxResolution : Infinity;
        c.minResolution = void 0 !== a.minResolution ? a.minResolution : 0;
        this.C(c)
    }

    y($h, pb);
    function ai(a) {
        var c = a.Lb(), d = a.ff(), e = a.wb(), f = a.O(), g = a.Mb(), h = a.Ib(), k = a.Jb();
        return {
            layer: a,
            opacity: Da(c, 0, 1),
            R: d,
            visible: e,
            Lc: !0,
            extent: f,
            zIndex: g,
            maxResolution: h,
            minResolution: Math.max(k, 0)
        }
    }

    l = $h.prototype;
    l.O = function () {
        return this.get("extent")
    };
    l.Ib = function () {
        return this.get("maxResolution")
    };
    l.Jb = function () {
        return this.get("minResolution")
    };
    l.Lb = function () {
        return this.get("opacity")
    };
    l.wb = function () {
        return this.get("visible")
    };
    l.Mb = function () {
        return this.get("zIndex")
    };
    l.ac = function (a) {
        this.set("extent", a)
    };
    l.ic = function (a) {
        this.set("maxResolution", a)
    };
    l.jc = function (a) {
        this.set("minResolution", a)
    };
    l.bc = function (a) {
        this.set("opacity", a)
    };
    l.cc = function (a) {
        this.set("visible", a)
    };
    l.dc = function (a) {
        this.set("zIndex", a)
    };
    function bi() {
    };
    function ci(a, c, d, e, f, g) {
        gb.call(this, a, c);
        this.vectorContext = d;
        this.frameState = e;
        this.context = f;
        this.glContext = g
    }

    y(ci, gb);
    function di(a) {
        var c = Pa({}, a);
        delete c.source;
        $h.call(this, c);
        this.v = this.j = this.o = null;
        a.map && this.setMap(a.map);
        C(this, rb("source"), this.bl, this);
        this.Ac(a.source ? a.source : null)
    }

    y(di, $h);
    function ei(a, c) {
        return a.visible && c >= a.minResolution && c < a.maxResolution
    }

    l = di.prototype;
    l.df = function (a) {
        a = a ? a : [];
        a.push(ai(this));
        return a
    };
    l.da = function () {
        return this.get("source") || null
    };
    l.ff = function () {
        var a = this.da();
        return a ? a.V() : "undefined"
    };
    l.Fm = function () {
        this.u()
    };
    l.bl = function () {
        this.v && (Xa(this.v), this.v = null);
        var a = this.da();
        a && (this.v = C(a, "change", this.Fm, this));
        this.u()
    };
    l.setMap = function (a) {
        this.o && (Xa(this.o), this.o = null);
        a || this.u();
        this.j && (Xa(this.j), this.j = null);
        a && (this.o = C(a, "precompose", function (a) {
            var d = ai(this);
            d.Lc = !1;
            d.zIndex = Infinity;
            a.frameState.layerStatesArray.push(d);
            a.frameState.layerStates[w(this)] = d
        }, this), this.j = C(this, "change", a.render, a), this.u())
    };
    l.Ac = function (a) {
        this.set("source", a)
    };
    function fi(a, c, d, e, f) {
        jb.call(this);
        this.l = f;
        this.extent = a;
        this.f = d;
        this.resolution = c;
        this.state = e
    }

    y(fi, jb);
    function gi(a) {
        a.b("change")
    }

    fi.prototype.O = function () {
        return this.extent
    };
    fi.prototype.$ = function () {
        return this.resolution
    };
    fi.prototype.V = function () {
        return this.state
    };
    function hi(a, c, d, e, f, g, h, k) {
        ld(a);
        0 === c && 0 === d || od(a, c, d);
        1 == e && 1 == f || pd(a, e, f);
        0 !== g && qd(a, g);
        0 === h && 0 === k || od(a, h, k);
        return a
    }

    function ii(a, c) {
        return a[0] == c[0] && a[1] == c[1] && a[4] == c[4] && a[5] == c[5] && a[12] == c[12] && a[13] == c[13]
    }

    function ji(a, c, d) {
        var e = a[1], f = a[5], g = a[13], h = c[0];
        c = c[1];
        d[0] = a[0] * h + a[4] * c + a[12];
        d[1] = e * h + f * c + g;
        return d
    };
    function ki(a) {
        mb.call(this);
        this.a = a
    }

    y(ki, mb);
    l = ki.prototype;
    l.oa = pa;
    l.xc = function (a, c, d, e) {
        a = a.slice();
        ji(c.pixelToCoordinateMatrix, a, a);
        if (this.oa(a, c, Ac, this))return d.call(e, this.a)
    };
    l.ge = Bc;
    l.Ld = function (a, c, d) {
        return function (e, f) {
            return mg(a, c, e, f, function (a) {
                d[e] || (d[e] = {});
                d[e][a.ja.toString()] = a
            })
        }
    };
    l.Im = function (a) {
        2 === a.target.V() && li(this)
    };
    function mi(a, c) {
        var d = c.V();
        2 != d && 3 != d && C(c, "change", a.Im, a);
        0 == d && (c.load(), d = c.V());
        return 2 == d
    }

    function li(a) {
        var c = a.a;
        c.wb() && "ready" == c.ff() && a.u()
    }

    function ni(a, c) {
        c.vh() && a.postRenderFunctions.push(function (a, c, f) {
            c = w(a).toString();
            a.Gc(f.viewState.projection, f.usedTiles[c])
        }.bind(null, c))
    }

    function oi(a, c) {
        if (c) {
            var d, e, f;
            e = 0;
            for (f = c.length; e < f; ++e)d = c[e], a[w(d).toString()] = d
        }
    }

    function pi(a, c) {
        var d = c.R;
        void 0 !== d && ("string" === typeof d ? a.logos[d] = "" : ha(d) && (a.logos[d.src] = d.href))
    }

    function qi(a, c, d, e) {
        c = w(c).toString();
        d = d.toString();
        c in a ? d in a[c] ? (a = a[c][d], e.b < a.b && (a.b = e.b), e.a > a.a && (a.a = e.a), e.g < a.g && (a.g = e.g), e.f > a.f && (a.f = e.f)) : a[c][d] = e : (a[c] = {}, a[c][d] = e)
    }

    function ri(a, c, d) {
        return [c * (Math.round(a[0] / c) + d[0] % 2 / 2), c * (Math.round(a[1] / c) + d[1] % 2 / 2)]
    }

    function si(a, c, d, e, f, g, h, k, m, n) {
        var p = w(c).toString();
        p in a.wantedTiles || (a.wantedTiles[p] = {});
        var q = a.wantedTiles[p];
        a = a.tileQueue;
        var r = d.minZoom, u, v, x, z, E, B;
        for (B = h; B >= r; --B)for (v = bg(d, g, B, v), x = d.$(B), z = v.b; z <= v.a; ++z)for (E = v.g; E <= v.f; ++E)h - B <= k ? (u = c.Wb(B, z, E, e, f), 0 == u.V() && (q[u.ja.toString()] = !0, u.gb() in a.g || a.f([u, p, fg(d, u.ja), x])), void 0 !== m && m.call(n, u)) : c.Uf(B, z, E, f)
    };
    function ti(a) {
        this.v = a.opacity;
        this.U = a.rotateWithView;
        this.j = a.rotation;
        this.i = a.scale;
        this.M = a.snapToPixel
    }

    l = ti.prototype;
    l.le = function () {
        return this.v
    };
    l.Rd = function () {
        return this.U
    };
    l.me = function () {
        return this.j
    };
    l.ne = function () {
        return this.i
    };
    l.Sd = function () {
        return this.M
    };
    l.oe = function (a) {
        this.v = a
    };
    l.pe = function (a) {
        this.j = a
    };
    l.qe = function (a) {
        this.i = a
    };
    function ui(a) {
        a = a || {};
        this.c = void 0 !== a.anchor ? a.anchor : [.5, .5];
        this.f = null;
        this.a = void 0 !== a.anchorOrigin ? a.anchorOrigin : "top-left";
        this.o = void 0 !== a.anchorXUnits ? a.anchorXUnits : "fraction";
        this.s = void 0 !== a.anchorYUnits ? a.anchorYUnits : "fraction";
        var c = void 0 !== a.crossOrigin ? a.crossOrigin : null, d = void 0 !== a.img ? a.img : null, e = void 0 !== a.imgSize ? a.imgSize : null, f = a.src;
        void 0 !== f && 0 !== f.length || !d || (f = d.src || w(d).toString());
        var g = void 0 !== a.src ? 0 : 2, h = void 0 !== a.color ? Fe(a.color) : null, k = vi.Ub(), m = k.get(f,
            c, h);
        m || (m = new wi(d, f, e, c, g, h), k.set(f, c, h, m));
        this.b = m;
        this.N = void 0 !== a.offset ? a.offset : [0, 0];
        this.g = void 0 !== a.offsetOrigin ? a.offsetOrigin : "top-left";
        this.l = null;
        this.B = void 0 !== a.size ? a.size : null;
        ti.call(this, {
            opacity: void 0 !== a.opacity ? a.opacity : 1,
            rotation: void 0 !== a.rotation ? a.rotation : 0,
            scale: void 0 !== a.scale ? a.scale : 1,
            snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel : !0,
            rotateWithView: void 0 !== a.rotateWithView ? a.rotateWithView : !1
        })
    }

    y(ui, ti);
    l = ui.prototype;
    l.Tb = function () {
        if (this.f)return this.f;
        var a = this.c, c = this.Bb();
        if ("fraction" == this.o || "fraction" == this.s) {
            if (!c)return null;
            a = this.c.slice();
            "fraction" == this.o && (a[0] *= c[0]);
            "fraction" == this.s && (a[1] *= c[1])
        }
        if ("top-left" != this.a) {
            if (!c)return null;
            a === this.c && (a = this.c.slice());
            if ("top-right" == this.a || "bottom-right" == this.a)a[0] = -a[0] + c[0];
            if ("bottom-left" == this.a || "bottom-right" == this.a)a[1] = -a[1] + c[1]
        }
        return this.f = a
    };
    l.ec = function () {
        var a = this.b;
        return a.c ? a.c : a.a
    };
    l.fd = function () {
        return this.b.g
    };
    l.od = function () {
        return this.b.f
    };
    l.ke = function () {
        var a = this.b;
        if (!a.o)if (a.s) {
            var c = a.g[0], d = a.g[1], e = Mg(c, d);
            e.fillRect(0, 0, c, d);
            a.o = e.canvas
        } else a.o = a.a;
        return a.o
    };
    l.Fa = function () {
        if (this.l)return this.l;
        var a = this.N;
        if ("top-left" != this.g) {
            var c = this.Bb(), d = this.b.g;
            if (!c || !d)return null;
            a = a.slice();
            if ("top-right" == this.g || "bottom-right" == this.g)a[0] = d[0] - c[0] - a[0];
            if ("bottom-left" == this.g || "bottom-right" == this.g)a[1] = d[1] - c[1] - a[1]
        }
        return this.l = a
    };
    l.yn = function () {
        return this.b.j
    };
    l.Bb = function () {
        return this.B ? this.B : this.b.g
    };
    l.kf = function (a, c) {
        return C(this.b, "change", a, c)
    };
    l.load = function () {
        this.b.load()
    };
    l.Tf = function (a, c) {
        cb(this.b, "change", a, c)
    };
    function wi(a, c, d, e, f, g) {
        jb.call(this);
        this.o = null;
        this.a = a ? a : new Image;
        null !== e && (this.a.crossOrigin = e);
        this.c = g ? document.createElement("CANVAS") : null;
        this.l = g;
        this.i = null;
        this.f = f;
        this.g = d;
        this.j = c;
        this.s = !1;
        2 == this.f && xi(this)
    }

    y(wi, jb);
    function xi(a) {
        var c = Mg(1, 1);
        try {
            c.drawImage(a.a, 0, 0), c.getImageData(0, 0, 1, 1)
        } catch (d) {
            a.s = !0
        }
    }

    wi.prototype.v = function () {
        this.f = 3;
        this.i.forEach(Xa);
        this.i = null;
        this.b("change")
    };
    wi.prototype.U = function () {
        this.f = 2;
        this.g && (this.a.width = this.g[0], this.a.height = this.g[1]);
        this.g = [this.a.width, this.a.height];
        this.i.forEach(Xa);
        this.i = null;
        xi(this);
        if (!this.s && null !== this.l) {
            this.c.width = this.a.width;
            this.c.height = this.a.height;
            var a = this.c.getContext("2d");
            a.drawImage(this.a, 0, 0);
            for (var c = a.getImageData(0, 0, this.a.width, this.a.height), d = c.data, e = this.l[0] / 255, f = this.l[1] / 255, g = this.l[2] / 255, h = 0, k = d.length; h < k; h += 4)d[h] *= e, d[h + 1] *= f, d[h + 2] *= g;
            a.putImageData(c, 0, 0)
        }
        this.b("change")
    };
    wi.prototype.load = function () {
        if (0 == this.f) {
            this.f = 1;
            this.i = [bb(this.a, "error", this.v, this), bb(this.a, "load", this.U, this)];
            try {
                this.a.src = this.j
            } catch (a) {
                this.v()
            }
        }
    };
    function vi() {
        this.b = {};
        this.a = 0
    }

    ba(vi);
    vi.prototype.clear = function () {
        this.b = {};
        this.a = 0
    };
    vi.prototype.get = function (a, c, d) {
        a = c + ":" + a + ":" + (d ? He(d) : "null");
        return a in this.b ? this.b[a] : null
    };
    vi.prototype.set = function (a, c, d, e) {
        this.b[c + ":" + a + ":" + (d ? He(d) : "null")] = e;
        ++this.a
    };
    function yi(a, c) {
        this.i = c;
        this.g = {};
        this.s = {}
    }

    y(yi, eb);
    function zi(a) {
        var c = a.viewState, d = a.coordinateToPixelMatrix;
        hi(d, a.size[0] / 2, a.size[1] / 2, 1 / c.resolution, -1 / c.resolution, -c.rotation, -c.center[0], -c.center[1]);
        nd(d, a.pixelToCoordinateMatrix)
    }

    l = yi.prototype;
    l.fa = function () {
        for (var a in this.g)fb(this.g[a])
    };
    function Ai() {
        var a = vi.Ub();
        if (32 < a.a) {
            var c = 0, d, e;
            for (d in a.b)e = a.b[d], 0 !== (c++ & 3) || lb(e) || (delete a.b[d], --a.a)
        }
    }

    l.oa = function (a, c, d, e, f, g) {
        function h(a, f) {
            var g = w(a).toString(), h = c.layerStates[w(f)].Lc;
            if (!(g in c.skippedFeatureUids) || h)return d.call(e, a, h ? f : null)
        }

        var k, m = c.viewState, n = m.resolution, p = m.projection, m = a;
        if (p.a) {
            var p = p.O(), q = rc(p), r = a[0];
            if (r < p[0] || r > p[2])m = [r + q * Math.ceil((p[0] - r) / q), a[1]]
        }
        p = c.layerStatesArray;
        for (q = p.length - 1; 0 <= q; --q) {
            var u = p[q], r = u.layer;
            if (ei(u, n) && f.call(g, r) && (u = Bi(this, r), r.da() && (k = u.oa(r.da().N ? m : a, c, h, e)), k))return k
        }
    };
    l.mh = function (a, c, d, e, f, g) {
        var h, k = c.viewState.resolution, m = c.layerStatesArray, n;
        for (n = m.length - 1; 0 <= n; --n) {
            h = m[n];
            var p = h.layer;
            if (ei(h, k) && f.call(g, p) && (h = Bi(this, p).xc(a, c, d, e)))return h
        }
    };
    l.nh = function (a, c, d, e) {
        return void 0 !== this.oa(a, c, Ac, this, d, e)
    };
    function Bi(a, c) {
        var d = w(c).toString();
        if (d in a.g)return a.g[d];
        var e = a.Te(c);
        a.g[d] = e;
        a.s[d] = C(e, "change", a.Nk, a);
        return e
    }

    l.Nk = function () {
        this.i.render()
    };
    l.xe = pa;
    l.No = function (a, c) {
        for (var d in this.g)if (!(c && d in c.layerStates)) {
            var e = d, f = this.g[e];
            delete this.g[e];
            Xa(this.s[e]);
            delete this.s[e];
            fb(f)
        }
    };
    function Ci(a, c) {
        for (var d in a.g)if (!(d in c.layerStates)) {
            c.postRenderFunctions.push(a.No.bind(a));
            break
        }
    }

    function Cb(a, c) {
        return a.zIndex - c.zIndex
    };
    function Di(a, c) {
        this.j = a;
        this.l = c;
        this.b = [];
        this.a = [];
        this.g = {}
    }

    Di.prototype.clear = function () {
        this.b.length = 0;
        this.a.length = 0;
        Qa(this.g)
    };
    function Ei(a) {
        var c = a.b, d = a.a, e = c[0];
        1 == c.length ? (c.length = 0, d.length = 0) : (c[0] = c.pop(), d[0] = d.pop(), Fi(a, 0));
        c = a.l(e);
        delete a.g[c];
        return e
    }

    Di.prototype.f = function (a) {
        var c = this.j(a);
        return Infinity != c ? (this.b.push(a), this.a.push(c), this.g[this.l(a)] = !0, Gi(this, 0, this.b.length - 1), !0) : !1
    };
    Di.prototype.rc = function () {
        return this.b.length
    };
    Di.prototype.Sa = function () {
        return 0 === this.b.length
    };
    function Fi(a, c) {
        for (var d = a.b, e = a.a, f = d.length, g = d[c], h = e[c], k = c; c < f >> 1;) {
            var m = 2 * c + 1, n = 2 * c + 2, m = n < f && e[n] < e[m] ? n : m;
            d[c] = d[m];
            e[c] = e[m];
            c = m
        }
        d[c] = g;
        e[c] = h;
        Gi(a, k, c)
    }

    function Gi(a, c, d) {
        var e = a.b;
        a = a.a;
        for (var f = e[d], g = a[d]; d > c;) {
            var h = d - 1 >> 1;
            if (a[h] > g)e[d] = e[h], a[d] = a[h], d = h; else break
        }
        e[d] = f;
        a[d] = g
    }

    function Hi(a) {
        var c = a.j, d = a.b, e = a.a, f = 0, g = d.length, h, k, m;
        for (k = 0; k < g; ++k)h = d[k], m = c(h), Infinity == m ? delete a.g[a.l(h)] : (e[f] = m, d[f++] = h);
        d.length = f;
        e.length = f;
        for (c = (a.b.length >> 1) - 1; 0 <= c; c--)Fi(a, c)
    };
    function Ii(a, c) {
        Di.call(this, function (c) {
            return a.apply(null, c)
        }, function (a) {
            return a[0].gb()
        });
        this.s = c;
        this.i = 0;
        this.c = {}
    }

    y(Ii, Di);
    Ii.prototype.f = function (a) {
        var c = Ii.ia.f.call(this, a);
        c && C(a[0], "change", this.o, this);
        return c
    };
    Ii.prototype.o = function (a) {
        a = a.target;
        var c = a.V();
        if (2 === c || 3 === c || 4 === c || 5 === c)cb(a, "change", this.o, this), a = a.gb(), a in this.c && (delete this.c[a], --this.i), this.s()
    };
    function Ji(a, c, d) {
        for (var e = 0, f, g; a.i < c && e < d && 0 < a.rc();)f = Ei(a)[0], g = f.gb(), 0 !== f.V() || g in a.c || (a.c[g] = !0, ++a.i, ++e, f.load())
    };
    function Ki(a, c, d) {
        this.f = a;
        this.g = c;
        this.i = d;
        this.b = [];
        this.a = this.c = 0
    }

    function Li(a, c) {
        var d = a.f, e = a.a, f = a.g - e, g = Math.log(a.g / a.a) / a.f;
        return ne({
            source: c, duration: g, easing: function (a) {
                return e * (Math.exp(d * a * g) - 1) / f
            }
        })
    };
    function Mi(a) {
        pb.call(this);
        this.v = null;
        this.i(!0);
        this.handleEvent = a.handleEvent
    }

    y(Mi, pb);
    Mi.prototype.f = function () {
        return this.get("active")
    };
    Mi.prototype.l = function () {
        return this.v
    };
    Mi.prototype.i = function (a) {
        this.set("active", a)
    };
    Mi.prototype.setMap = function (a) {
        this.v = a
    };
    function Ni(a, c, d, e, f) {
        if (void 0 !== d) {
            var g = c.Ka(), h = c.bb();
            void 0 !== g && h && f && 0 < f && (a.Va(oe({
                rotation: g,
                duration: f,
                easing: je
            })), e && a.Va(ne({source: h, duration: f, easing: je})));
            c.rotate(d, e)
        }
    }

    function Oi(a, c, d, e, f) {
        var g = c.$();
        d = c.constrainResolution(g, d, 0);
        Pi(a, c, d, e, f)
    }

    function Pi(a, c, d, e, f) {
        if (d) {
            var g = c.$(), h = c.bb();
            void 0 !== g && h && d !== g && f && 0 < f && (a.Va(pe({
                resolution: g,
                duration: f,
                easing: je
            })), e && a.Va(ne({source: h, duration: f, easing: je})));
            if (e) {
                var k;
                a = c.bb();
                f = c.$();
                void 0 !== a && void 0 !== f && (k = [e[0] - d * (e[0] - a[0]) / f, e[1] - d * (e[1] - a[1]) / f]);
                c.jb(k)
            }
            c.Qb(d)
        }
    };
    function Qi(a) {
        a = a ? a : {};
        this.a = a.delta ? a.delta : 1;
        Mi.call(this, {handleEvent: Ri});
        this.c = void 0 !== a.duration ? a.duration : 250
    }

    y(Qi, Mi);
    function Ri(a) {
        var c = !1, d = a.originalEvent;
        if (a.type == Rh) {
            var c = a.map, e = a.coordinate, d = d.shiftKey ? -this.a : this.a, f = c.aa();
            Oi(c, f, d, e, this.c);
            a.preventDefault();
            c = !0
        }
        return !c
    };
    function Si(a) {
        a = a.originalEvent;
        return a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey
    }

    function Ti(a) {
        a = a.originalEvent;
        return 0 == a.button && !(Ve && Xg && a.ctrlKey)
    }

    function Ui(a) {
        return "pointermove" == a.type
    }

    function Vi(a) {
        return a.type == Sh
    }

    function Wi(a) {
        a = a.originalEvent;
        return !a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey
    }

    function Xi(a) {
        a = a.originalEvent;
        return !a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey
    }

    function Yi(a) {
        a = a.originalEvent.target.tagName;
        return "INPUT" !== a && "SELECT" !== a && "TEXTAREA" !== a
    }

    function Zi(a) {
        return "mouse" == a.b.pointerType
    }

    function $i(a) {
        a = a.b;
        return a.isPrimary && 0 === a.button
    };
    function aj(a) {
        a = a ? a : {};
        Mi.call(this, {handleEvent: a.handleEvent ? a.handleEvent : bj});
        this.Ke = a.handleDownEvent ? a.handleDownEvent : Bc;
        this.Le = a.handleDragEvent ? a.handleDragEvent : pa;
        this.Hi = a.handleMoveEvent ? a.handleMoveEvent : pa;
        this.oj = a.handleUpEvent ? a.handleUpEvent : Bc;
        this.M = !1;
        this.ea = {};
        this.o = []
    }

    y(aj, Mi);
    function cj(a) {
        for (var c = a.length, d = 0, e = 0, f = 0; f < c; f++)d += a[f].clientX, e += a[f].clientY;
        return [d / c, e / c]
    }

    function bj(a) {
        if (!(a instanceof Nh))return !0;
        var c = !1, d = a.type;
        if (d === Wh || d === Yh || d === Uh)d = a.b, a.type == Uh ? delete this.ea[d.pointerId] : a.type == Wh ? this.ea[d.pointerId] = d : d.pointerId in this.ea && (this.ea[d.pointerId] = d), this.o = Ra(this.ea);
        this.M && (a.type == Yh ? this.Le(a) : a.type == Uh && (this.M = this.oj(a)));
        a.type == Wh ? (this.M = a = this.Ke(a), c = this.Bc(a)) : a.type == Xh && this.Hi(a);
        return !c
    }

    aj.prototype.Bc = function (a) {
        return a
    };
    function dj(a) {
        aj.call(this, {handleDownEvent: ej, handleDragEvent: fj, handleUpEvent: gj});
        a = a ? a : {};
        this.a = a.kinetic;
        this.c = this.j = null;
        this.B = a.condition ? a.condition : Wi;
        this.s = !1
    }

    y(dj, aj);
    function fj(a) {
        var c = cj(this.o);
        this.a && this.a.b.push(c[0], c[1], Date.now());
        if (this.c) {
            var d = this.c[0] - c[0], e = c[1] - this.c[1];
            a = a.map;
            var f = a.aa(), g = f.V(), e = d = [d, e], h = g.resolution;
            e[0] *= h;
            e[1] *= h;
            Rb(d, g.rotation);
            Mb(d, g.center);
            d = f.Kd(d);
            a.render();
            f.jb(d)
        }
        this.c = c
    }

    function gj(a) {
        a = a.map;
        var c = a.aa();
        if (0 === this.o.length) {
            var d;
            if (d = !this.s && this.a)if (d = this.a, 6 > d.b.length)d = !1; else {
                var e = Date.now() - d.i, f = d.b.length - 3;
                if (d.b[f + 2] < e)d = !1; else {
                    for (var g = f - 3; 0 < g && d.b[g + 2] > e;)g -= 3;
                    var e = d.b[f + 2] - d.b[g + 2], h = d.b[f] - d.b[g], f = d.b[f + 1] - d.b[g + 1];
                    d.c = Math.atan2(f, h);
                    d.a = Math.sqrt(h * h + f * f) / e;
                    d = d.a > d.g
                }
            }
            d && (d = this.a, d = (d.g - d.a) / d.f, f = this.a.c, g = c.bb(), this.j = Li(this.a, g), a.Va(this.j), g = a.Da(g), d = a.Ma([g[0] - d * Math.cos(f), g[1] - d * Math.sin(f)]), d = c.Kd(d), c.jb(d));
            he(c, -1);
            a.render();
            return !1
        }
        this.c = null;
        return !0
    }

    function ej(a) {
        if (0 < this.o.length && this.B(a)) {
            var c = a.map, d = c.aa();
            this.c = null;
            this.M || he(d, 1);
            c.render();
            this.j && yb(c.R, this.j) && (d.jb(a.frameState.viewState.center), this.j = null);
            this.a && (a = this.a, a.b.length = 0, a.c = 0, a.a = 0);
            this.s = 1 < this.o.length;
            return !0
        }
        return !1
    }

    dj.prototype.Bc = Bc;
    function hj(a) {
        a = a ? a : {};
        aj.call(this, {handleDownEvent: ij, handleDragEvent: jj, handleUpEvent: kj});
        this.c = a.condition ? a.condition : Si;
        this.a = void 0;
        this.j = void 0 !== a.duration ? a.duration : 250
    }

    y(hj, aj);
    function jj(a) {
        if (Zi(a)) {
            var c = a.map, d = c.$a();
            a = a.pixel;
            d = Math.atan2(d[1] / 2 - a[1], a[0] - d[0] / 2);
            if (void 0 !== this.a) {
                a = d - this.a;
                var e = c.aa(), f = e.Ka();
                c.render();
                Ni(c, e, f - a)
            }
            this.a = d
        }
    }

    function kj(a) {
        if (!Zi(a))return !0;
        a = a.map;
        var c = a.aa();
        he(c, -1);
        var d = c.Ka(), e = this.j, d = c.constrainRotation(d, 0);
        Ni(a, c, d, void 0, e);
        return !1
    }

    function ij(a) {
        return Zi(a) && Ti(a) && this.c(a) ? (a = a.map, he(a.aa(), 1), a.render(), this.a = void 0, !0) : !1
    }

    hj.prototype.Bc = Bc;
    function lj(a) {
        this.f = null;
        this.a = document.createElement("div");
        this.a.style.position = "absolute";
        this.a.className = "ol-box " + a;
        this.g = this.c = this.b = null
    }

    y(lj, eb);
    lj.prototype.fa = function () {
        this.setMap(null)
    };
    function mj(a) {
        var c = a.c, d = a.g;
        a = a.a.style;
        a.left = Math.min(c[0], d[0]) + "px";
        a.top = Math.min(c[1], d[1]) + "px";
        a.width = Math.abs(d[0] - c[0]) + "px";
        a.height = Math.abs(d[1] - c[1]) + "px"
    }

    lj.prototype.setMap = function (a) {
        if (this.b) {
            this.b.B.removeChild(this.a);
            var c = this.a.style;
            c.left = c.top = c.width = c.height = "inherit"
        }
        (this.b = a) && this.b.B.appendChild(this.a)
    };
    function nj(a) {
        var c = a.c, d = a.g, c = [c, [c[0], d[1]], d, [d[0], c[1]]].map(a.b.Ma, a.b);
        c[4] = c[0].slice();
        a.f ? a.f.ma([c]) : a.f = new F([c])
    }

    lj.prototype.W = function () {
        return this.f
    };
    function oj(a, c, d) {
        gb.call(this, a);
        this.coordinate = c;
        this.mapBrowserEvent = d
    }

    y(oj, gb);
    function pj(a) {
        aj.call(this, {handleDownEvent: qj, handleDragEvent: rj, handleUpEvent: sj});
        a = a ? a : {};
        this.a = new lj(a.className || "ol-dragbox");
        this.c = null;
        this.N = a.condition ? a.condition : Ac;
        this.B = a.boxEndCondition ? a.boxEndCondition : tj
    }

    y(pj, aj);
    function tj(a, c, d) {
        a = d[0] - c[0];
        c = d[1] - c[1];
        return 64 <= a * a + c * c
    }

    function rj(a) {
        if (Zi(a)) {
            var c = this.a, d = a.pixel;
            c.c = this.c;
            c.g = d;
            nj(c);
            mj(c);
            this.b(new oj("boxdrag", a.coordinate, a))
        }
    }

    pj.prototype.W = function () {
        return this.a.W()
    };
    pj.prototype.s = pa;
    function sj(a) {
        if (!Zi(a))return !0;
        this.a.setMap(null);
        this.B(a, this.c, a.pixel) && (this.s(a), this.b(new oj("boxend", a.coordinate, a)));
        return !1
    }

    function qj(a) {
        if (Zi(a) && Ti(a) && this.N(a)) {
            this.c = a.pixel;
            this.a.setMap(a.map);
            var c = this.a, d = this.c;
            c.c = this.c;
            c.g = d;
            nj(c);
            mj(c);
            this.b(new oj("boxstart", a.coordinate, a));
            return !0
        }
        return !1
    };
    function uj(a) {
        a = a ? a : {};
        var c = a.condition ? a.condition : Xi;
        this.j = void 0 !== a.duration ? a.duration : 200;
        this.R = void 0 !== a.out ? a.out : !1;
        pj.call(this, {condition: c, className: a.className || "ol-dragzoom"})
    }

    y(uj, pj);
    uj.prototype.s = function () {
        var a = this.v, c = a.aa(), d = a.$a(), e = this.W().O();
        if (this.R) {
            var f = c.Fc(d), e = [a.Da(lc(e)), a.Da(nc(e))], g = ec(Infinity, Infinity, -Infinity, -Infinity, void 0), h, k;
            h = 0;
            for (k = e.length; h < k; ++h)Xb(g, e[h]);
            yc(f, 1 / de(g, d));
            e = f
        }
        d = c.constrainResolution(de(e, d));
        f = c.$();
        g = c.bb();
        a.Va(pe({resolution: f, duration: this.j, easing: je}));
        a.Va(ne({source: g, duration: this.j, easing: je}));
        c.jb(tc(e));
        c.Qb(d)
    };
    function vj(a) {
        Mi.call(this, {handleEvent: wj});
        a = a || {};
        this.a = function (a) {
            return Wi(a) && Yi(a)
        };
        this.c = void 0 !== a.condition ? a.condition : this.a;
        this.o = void 0 !== a.duration ? a.duration : 100;
        this.j = void 0 !== a.pixelDelta ? a.pixelDelta : 128
    }

    y(vj, Mi);
    function wj(a) {
        var c = !1;
        if ("keydown" == a.type) {
            var d = a.originalEvent.keyCode;
            if (this.c(a) && (40 == d || 37 == d || 39 == d || 38 == d)) {
                var e = a.map, c = e.aa(), f = c.$() * this.j, g = 0, h = 0;
                40 == d ? h = -f : 37 == d ? g = -f : 39 == d ? g = f : h = f;
                d = [g, h];
                Rb(d, c.Ka());
                f = this.o;
                if (g = c.bb())f && 0 < f && e.Va(ne({
                    source: g,
                    duration: f,
                    easing: le
                })), e = c.Kd([g[0] + d[0], g[1] + d[1]]), c.jb(e);
                a.preventDefault();
                c = !0
            }
        }
        return !c
    };
    function xj(a) {
        Mi.call(this, {handleEvent: yj});
        a = a ? a : {};
        this.c = a.condition ? a.condition : Yi;
        this.a = a.delta ? a.delta : 1;
        this.o = void 0 !== a.duration ? a.duration : 100
    }

    y(xj, Mi);
    function yj(a) {
        var c = !1;
        if ("keydown" == a.type || "keypress" == a.type) {
            var d = a.originalEvent.charCode;
            if (this.c(a) && (43 == d || 45 == d)) {
                c = a.map;
                d = 43 == d ? this.a : -this.a;
                c.render();
                var e = c.aa();
                Oi(c, e, d, void 0, this.o);
                a.preventDefault();
                c = !0
            }
        }
        return !c
    };
    function zj(a) {
        Mi.call(this, {handleEvent: Aj});
        a = a || {};
        this.c = 0;
        this.M = void 0 !== a.duration ? a.duration : 250;
        this.s = void 0 !== a.useAnchor ? a.useAnchor : !0;
        this.a = null;
        this.j = this.o = void 0
    }

    y(zj, Mi);
    function Aj(a) {
        var c = !1;
        if ("wheel" == a.type || "mousewheel" == a.type) {
            var c = a.map, d = a.originalEvent;
            this.s && (this.a = a.coordinate);
            var e;
            "wheel" == a.type ? (e = d.deltaY, Vg && d.deltaMode === qa.WheelEvent.DOM_DELTA_PIXEL && (e /= Yg), d.deltaMode === qa.WheelEvent.DOM_DELTA_LINE && (e *= 40)) : "mousewheel" == a.type && (e = -d.wheelDeltaY, Wg && (e /= 3));
            this.c += e;
            void 0 === this.o && (this.o = Date.now());
            e = Math.max(80 - (Date.now() - this.o), 0);
            qa.clearTimeout(this.j);
            this.j = qa.setTimeout(this.B.bind(this, c), e);
            a.preventDefault();
            c = !0
        }
        return !c
    }

    zj.prototype.B = function (a) {
        var c = Da(this.c, -1, 1), d = a.aa();
        a.render();
        Oi(a, d, -c, this.a, this.M);
        this.c = 0;
        this.a = null;
        this.j = this.o = void 0
    };
    zj.prototype.N = function (a) {
        this.s = a;
        a || (this.a = null)
    };
    function Bj(a) {
        aj.call(this, {handleDownEvent: Cj, handleDragEvent: Dj, handleUpEvent: Ej});
        a = a || {};
        this.c = null;
        this.j = void 0;
        this.a = !1;
        this.s = 0;
        this.N = void 0 !== a.threshold ? a.threshold : .3;
        this.B = void 0 !== a.duration ? a.duration : 250
    }

    y(Bj, aj);
    function Dj(a) {
        var c = 0, d = this.o[0], e = this.o[1], d = Math.atan2(e.clientY - d.clientY, e.clientX - d.clientX);
        void 0 !== this.j && (c = d - this.j, this.s += c, !this.a && Math.abs(this.s) > this.N && (this.a = !0));
        this.j = d;
        a = a.map;
        d = a.a.getBoundingClientRect();
        e = cj(this.o);
        e[0] -= d.left;
        e[1] -= d.top;
        this.c = a.Ma(e);
        this.a && (d = a.aa(), e = d.Ka(), a.render(), Ni(a, d, e + c, this.c))
    }

    function Ej(a) {
        if (2 > this.o.length) {
            a = a.map;
            var c = a.aa();
            he(c, -1);
            if (this.a) {
                var d = c.Ka(), e = this.c, f = this.B, d = c.constrainRotation(d, 0);
                Ni(a, c, d, e, f)
            }
            return !1
        }
        return !0
    }

    function Cj(a) {
        return 2 <= this.o.length ? (a = a.map, this.c = null, this.j = void 0, this.a = !1, this.s = 0, this.M || he(a.aa(), 1), a.render(), !0) : !1
    }

    Bj.prototype.Bc = Bc;
    function Fj(a) {
        aj.call(this, {handleDownEvent: Gj, handleDragEvent: Hj, handleUpEvent: Ij});
        a = a ? a : {};
        this.c = null;
        this.s = void 0 !== a.duration ? a.duration : 400;
        this.a = void 0;
        this.j = 1
    }

    y(Fj, aj);
    function Hj(a) {
        var c = 1, d = this.o[0], e = this.o[1], f = d.clientX - e.clientX, d = d.clientY - e.clientY, f = Math.sqrt(f * f + d * d);
        void 0 !== this.a && (c = this.a / f);
        this.a = f;
        1 != c && (this.j = c);
        a = a.map;
        var f = a.aa(), d = f.$(), e = a.a.getBoundingClientRect(), g = cj(this.o);
        g[0] -= e.left;
        g[1] -= e.top;
        this.c = a.Ma(g);
        a.render();
        Pi(a, f, d * c, this.c)
    }

    function Ij(a) {
        if (2 > this.o.length) {
            a = a.map;
            var c = a.aa();
            he(c, -1);
            var d = c.$(), e = this.c, f = this.s, d = c.constrainResolution(d, 0, this.j - 1);
            Pi(a, c, d, e, f);
            return !1
        }
        return !0
    }

    function Gj(a) {
        return 2 <= this.o.length ? (a = a.map, this.c = null, this.a = void 0, this.j = 1, this.M || he(a.aa(), 1), a.render(), !0) : !1
    }

    Fj.prototype.Bc = Bc;
    function Jj(a) {
        a = a ? a : {};
        var c = new we, d = new Ki(-.005, .05, 100);
        (void 0 !== a.altShiftDragRotate ? a.altShiftDragRotate : 1) && c.push(new hj);
        (void 0 !== a.doubleClickZoom ? a.doubleClickZoom : 1) && c.push(new Qi({
            delta: a.zoomDelta,
            duration: a.zoomDuration
        }));
        (void 0 !== a.dragPan ? a.dragPan : 1) && c.push(new dj({kinetic: d}));
        (void 0 !== a.pinchRotate ? a.pinchRotate : 1) && c.push(new Bj);
        (void 0 !== a.pinchZoom ? a.pinchZoom : 1) && c.push(new Fj({duration: a.zoomDuration}));
        if (void 0 !== a.keyboard ? a.keyboard : 1)c.push(new vj), c.push(new xj({
            delta: a.zoomDelta,
            duration: a.zoomDuration
        }));
        (void 0 !== a.mouseWheelZoom ? a.mouseWheelZoom : 1) && c.push(new zj({duration: a.zoomDuration}));
        (void 0 !== a.shiftDragZoom ? a.shiftDragZoom : 1) && c.push(new uj({duration: a.zoomDuration}));
        return c
    };
    function Kj(a) {
        var c = a || {};
        a = Pa({}, c);
        delete a.layers;
        c = c.layers;
        $h.call(this, a);
        this.f = [];
        this.a = {};
        C(this, rb("layers"), this.Pk, this);
        c ? Array.isArray(c) && (c = new we(c.slice())) : c = new we;
        this.jh(c)
    }

    y(Kj, $h);
    l = Kj.prototype;
    l.Xd = function () {
        this.wb() && this.u()
    };
    l.Pk = function () {
        this.f.forEach(Xa);
        this.f.length = 0;
        var a = this.Oc();
        this.f.push(C(a, "add", this.Ok, this), C(a, "remove", this.Qk, this));
        for (var c in this.a)this.a[c].forEach(Xa);
        Qa(this.a);
        var a = a.a, d, e;
        c = 0;
        for (d = a.length; c < d; c++)e = a[c], this.a[w(e).toString()] = [C(e, "propertychange", this.Xd, this), C(e, "change", this.Xd, this)];
        this.u()
    };
    l.Ok = function (a) {
        a = a.element;
        var c = w(a).toString();
        this.a[c] = [C(a, "propertychange", this.Xd, this), C(a, "change", this.Xd, this)];
        this.u()
    };
    l.Qk = function (a) {
        a = w(a.element).toString();
        this.a[a].forEach(Xa);
        delete this.a[a];
        this.u()
    };
    l.Oc = function () {
        return this.get("layers")
    };
    l.jh = function (a) {
        this.set("layers", a)
    };
    l.df = function (a) {
        var c = void 0 !== a ? a : [], d = c.length;
        this.Oc().forEach(function (a) {
            a.df(c)
        });
        a = ai(this);
        var e, f;
        for (e = c.length; d < e; d++)f = c[d], f.opacity *= a.opacity, f.visible = f.visible && a.visible, f.maxResolution = Math.min(f.maxResolution, a.maxResolution), f.minResolution = Math.max(f.minResolution, a.minResolution), void 0 !== a.extent && (f.extent = void 0 !== f.extent ? vc(f.extent, a.extent) : a.extent);
        return c
    };
    l.ff = function () {
        return "ready"
    };
    function Lj(a) {
        Fc.call(this, {code: a, units: "m", extent: Mj, global: !0, worldExtent: Nj})
    }

    y(Lj, Fc);
    Lj.prototype.getPointResolution = function (a, c) {
        return a / Ea(c[1] / 6378137)
    };
    var Oj = 6378137 * Math.PI, Mj = [-Oj, -Oj, Oj, Oj], Nj = [-180, -85, 180, 85], Sc = "EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" ").map(function (a) {
        return new Lj(a)
    });

    function Tc(a, c, d) {
        var e = a.length;
        d = 1 < d ? d : 2;
        void 0 === c && (2 < d ? c = a.slice() : c = Array(e));
        for (var f = 0; f < e; f += d)c[f] = 6378137 * Math.PI * a[f] / 180, c[f + 1] = 6378137 * Math.log(Math.tan(Math.PI * (a[f + 1] + 90) / 360));
        return c
    }

    function Uc(a, c, d) {
        var e = a.length;
        d = 1 < d ? d : 2;
        void 0 === c && (2 < d ? c = a.slice() : c = Array(e));
        for (var f = 0; f < e; f += d)c[f] = 180 * a[f] / (6378137 * Math.PI), c[f + 1] = 360 * Math.atan(Math.exp(a[f + 1] / 6378137)) / Math.PI - 90;
        return c
    };
    var Pj = new Cc(6378137);

    function Qj(a, c) {
        Fc.call(this, {
            code: a,
            units: "degrees",
            extent: Rj,
            axisOrientation: c,
            global: !0,
            metersPerUnit: Sj,
            worldExtent: Rj
        })
    }

    y(Qj, Fc);
    Qj.prototype.getPointResolution = function (a) {
        return a
    };
    var Rj = [-180, -90, 180, 90], Sj = Math.PI * Pj.radius / 180, Vc = [new Qj("CRS:84"), new Qj("EPSG:4326", "neu"), new Qj("urn:ogc:def:crs:EPSG::4326", "neu"), new Qj("urn:ogc:def:crs:EPSG:6.6:4326", "neu"), new Qj("urn:ogc:def:crs:OGC:1.3:CRS84"), new Qj("urn:ogc:def:crs:OGC:2:84"), new Qj("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new Qj("urn:x-ogc:def:crs:EPSG:4326", "neu")];

    function Tj() {
        Jc(Sc);
        Jc(Vc);
        Rc()
    };
    function Uj(a) {
        di.call(this, a ? a : {})
    }

    y(Uj, di);
    function Vj(a) {
        a = a ? a : {};
        var c = Pa({}, a);
        delete c.preload;
        delete c.useInterimTilesOnError;
        di.call(this, c);
        this.l(void 0 !== a.preload ? a.preload : 0);
        this.B(void 0 !== a.useInterimTilesOnError ? a.useInterimTilesOnError : !0)
    }

    y(Vj, di);
    Vj.prototype.f = function () {
        return this.get("preload")
    };
    Vj.prototype.l = function (a) {
        this.set("preload", a)
    };
    Vj.prototype.c = function () {
        return this.get("useInterimTilesOnError")
    };
    Vj.prototype.B = function (a) {
        this.set("useInterimTilesOnError", a)
    };
    var Wj = [0, 0, 0, 1], Xj = [], Yj = [0, 0, 0, 1];

    function Zj(a, c, d, e) {
        0 !== c && (a.translate(d, e), a.rotate(c), a.translate(-d, -e))
    };
    function ak(a) {
        a = a || {};
        this.b = void 0 !== a.color ? a.color : null;
        this.a = void 0
    }

    ak.prototype.g = function () {
        return this.b
    };
    ak.prototype.f = function (a) {
        this.b = a;
        this.a = void 0
    };
    function bk(a) {
        void 0 === a.a && (a.a = a.b instanceof CanvasPattern || a.b instanceof CanvasGradient ? w(a.b).toString() : "f" + (a.b ? He(a.b) : "-"));
        return a.a
    };
    function ck() {
        this.a = -1
    };
    function dk() {
        this.a = -1;
        this.a = 64;
        this.b = Array(4);
        this.c = Array(this.a);
        this.f = this.g = 0;
        this.b[0] = 1732584193;
        this.b[1] = 4023233417;
        this.b[2] = 2562383102;
        this.b[3] = 271733878;
        this.f = this.g = 0
    }

    y(dk, ck);
    function ek(a, c, d) {
        d || (d = 0);
        var e = Array(16);
        if (ea(c))for (var f = 0; 16 > f; ++f)e[f] = c.charCodeAt(d++) | c.charCodeAt(d++) << 8 | c.charCodeAt(d++) << 16 | c.charCodeAt(d++) << 24; else for (f = 0; 16 > f; ++f)e[f] = c[d++] | c[d++] << 8 | c[d++] << 16 | c[d++] << 24;
        c = a.b[0];
        d = a.b[1];
        var f = a.b[2], g = a.b[3], h = 0, h = c + (g ^ d & (f ^ g)) + e[0] + 3614090360 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[1] + 3905402710 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f + (d ^ g & (c ^ d)) + e[2] + 606105819 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^
            c)) + e[3] + 3250441966 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (g ^ d & (f ^ g)) + e[4] + 4118548399 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[5] + 1200080426 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f + (d ^ g & (c ^ d)) + e[6] + 2821735955 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^ c)) + e[7] + 4249261313 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (g ^ d & (f ^ g)) + e[8] + 1770035416 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[9] + 2336552879 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f +
            (d ^ g & (c ^ d)) + e[10] + 4294925233 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^ c)) + e[11] + 2304563134 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (g ^ d & (f ^ g)) + e[12] + 1804603682 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[13] + 4254626195 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f + (d ^ g & (c ^ d)) + e[14] + 2792965006 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^ c)) + e[15] + 1236535329 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (f ^ g & (d ^ f)) + e[1] + 4129170786 & 4294967295;
        c = d + (h << 5 & 4294967295 |
            h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[6] + 3225465664 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[11] + 643717713 & 4294967295;
        f = g + (h << 14 & 4294967295 | h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[0] + 3921069994 & 4294967295;
        d = f + (h << 20 & 4294967295 | h >>> 12);
        h = c + (f ^ g & (d ^ f)) + e[5] + 3593408605 & 4294967295;
        c = d + (h << 5 & 4294967295 | h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[10] + 38016083 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[15] + 3634488961 & 4294967295;
        f = g + (h << 14 & 4294967295 | h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[4] + 3889429448 & 4294967295;
        d = f + (h << 20 & 4294967295 |
            h >>> 12);
        h = c + (f ^ g & (d ^ f)) + e[9] + 568446438 & 4294967295;
        c = d + (h << 5 & 4294967295 | h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[14] + 3275163606 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[3] + 4107603335 & 4294967295;
        f = g + (h << 14 & 4294967295 | h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[8] + 1163531501 & 4294967295;
        d = f + (h << 20 & 4294967295 | h >>> 12);
        h = c + (f ^ g & (d ^ f)) + e[13] + 2850285829 & 4294967295;
        c = d + (h << 5 & 4294967295 | h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[2] + 4243563512 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[7] + 1735328473 & 4294967295;
        f = g + (h << 14 & 4294967295 |
            h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[12] + 2368359562 & 4294967295;
        d = f + (h << 20 & 4294967295 | h >>> 12);
        h = c + (d ^ f ^ g) + e[5] + 4294588738 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[8] + 2272392833 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^ c ^ d) + e[11] + 1839030562 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[14] + 4259657740 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (d ^ f ^ g) + e[1] + 2763975236 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[4] + 1272893353 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^
            c ^ d) + e[7] + 4139469664 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[10] + 3200236656 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (d ^ f ^ g) + e[13] + 681279174 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[0] + 3936430074 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^ c ^ d) + e[3] + 3572445317 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[6] + 76029189 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (d ^ f ^ g) + e[9] + 3654602809 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[12] + 3873151461 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^ c ^ d) + e[15] + 530742520 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[2] + 3299628645 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (f ^ (d | ~g)) + e[0] + 4096336452 & 4294967295;
        c = d + (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[7] + 1126891415 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[14] + 2878612391 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[5] + 4237533241 & 4294967295;
        d = f + (h << 21 & 4294967295 | h >>> 11);
        h = c + (f ^ (d | ~g)) + e[12] + 1700485571 & 4294967295;
        c = d +
            (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[3] + 2399980690 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[10] + 4293915773 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[1] + 2240044497 & 4294967295;
        d = f + (h << 21 & 4294967295 | h >>> 11);
        h = c + (f ^ (d | ~g)) + e[8] + 1873313359 & 4294967295;
        c = d + (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[15] + 4264355552 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[6] + 2734768916 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[13] + 1309151649 & 4294967295;
        d = f + (h << 21 & 4294967295 | h >>> 11);
        h = c + (f ^ (d | ~g)) + e[4] + 4149444226 & 4294967295;
        c = d + (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[11] + 3174756917 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[2] + 718787259 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[9] + 3951481745 & 4294967295;
        a.b[0] = a.b[0] + c & 4294967295;
        a.b[1] = a.b[1] + (f + (h << 21 & 4294967295 | h >>> 11)) & 4294967295;
        a.b[2] = a.b[2] + f & 4294967295;
        a.b[3] = a.b[3] + g & 4294967295
    }

    function fk(a, c) {
        var d;
        void 0 === d && (d = c.length);
        for (var e = d - a.a, f = a.c, g = a.g, h = 0; h < d;) {
            if (0 == g)for (; h <= e;)ek(a, c, h), h += a.a;
            if (ea(c))for (; h < d;) {
                if (f[g++] = c.charCodeAt(h++), g == a.a) {
                    ek(a, f);
                    g = 0;
                    break
                }
            } else for (; h < d;)if (f[g++] = c[h++], g == a.a) {
                ek(a, f);
                g = 0;
                break
            }
        }
        a.g = g;
        a.f += d
    };
    function gk(a) {
        a = a || {};
        this.b = void 0 !== a.color ? a.color : null;
        this.f = a.lineCap;
        this.g = void 0 !== a.lineDash ? a.lineDash : null;
        this.c = a.lineJoin;
        this.i = a.miterLimit;
        this.a = a.width;
        this.l = void 0
    }

    l = gk.prototype;
    l.En = function () {
        return this.b
    };
    l.$j = function () {
        return this.f
    };
    l.Fn = function () {
        return this.g
    };
    l.ak = function () {
        return this.c
    };
    l.fk = function () {
        return this.i
    };
    l.Gn = function () {
        return this.a
    };
    l.Hn = function (a) {
        this.b = a;
        this.l = void 0
    };
    l.Zo = function (a) {
        this.f = a;
        this.l = void 0
    };
    l.In = function (a) {
        this.g = a;
        this.l = void 0
    };
    l.$o = function (a) {
        this.c = a;
        this.l = void 0
    };
    l.ap = function (a) {
        this.i = a;
        this.l = void 0
    };
    l.fp = function (a) {
        this.a = a;
        this.l = void 0
    };
    function hk(a) {
        if (void 0 === a.l) {
            var c = "s" + (a.b ? He(a.b) : "-") + "," + (void 0 !== a.f ? a.f.toString() : "-") + "," + (a.g ? a.g.toString() : "-") + "," + (void 0 !== a.c ? a.c : "-") + "," + (void 0 !== a.i ? a.i.toString() : "-") + "," + (void 0 !== a.a ? a.a.toString() : "-"), d = new dk;
            fk(d, c);
            c = Array((56 > d.g ? d.a : 2 * d.a) - d.g);
            c[0] = 128;
            for (var e = 1; e < c.length - 8; ++e)c[e] = 0;
            for (var f = 8 * d.f, e = c.length - 8; e < c.length; ++e)c[e] = f & 255, f /= 256;
            fk(d, c);
            c = Array(16);
            for (e = f = 0; 4 > e; ++e)for (var g = 0; 32 > g; g += 8)c[f++] = d.b[e] >>> g & 255;
            if (8192 >= c.length)d = String.fromCharCode.apply(null,
                c); else for (d = "", e = 0; e < c.length; e += 8192)f = Be(c, e, e + 8192), d += String.fromCharCode.apply(null, f);
            a.l = d
        }
        return a.l
    };
    function ik(a) {
        a = a || {};
        this.l = this.f = this.c = null;
        this.g = void 0 !== a.fill ? a.fill : null;
        this.b = void 0 !== a.stroke ? a.stroke : null;
        this.a = a.radius;
        this.B = [0, 0];
        this.s = this.N = this.o = null;
        var c = a.atlasManager, d, e = null, f, g = 0;
        this.b && (f = He(this.b.b), g = this.b.a, void 0 === g && (g = 1), e = this.b.g, Zg || (e = null));
        var h = 2 * (this.a + g) + 1;
        f = {strokeStyle: f, wd: g, size: h, lineDash: e};
        if (void 0 === c)c = Mg(h, h), this.f = c.canvas, d = h = this.f.width, this.Bh(f, c, 0, 0), this.g ? this.l = this.f : (c = Mg(f.size, f.size), this.l = c.canvas, this.Ah(f, c, 0, 0));
        else {
            h = Math.round(h);
            (e = !this.g) && (d = this.Ah.bind(this, f));
            var g = this.b ? hk(this.b) : "-", k = this.g ? bk(this.g) : "-";
            this.c && g == this.c[1] && k == this.c[2] && this.a == this.c[3] || (this.c = ["c" + g + k + (void 0 !== this.a ? this.a.toString() : "-"), g, k, this.a]);
            c = c.add(this.c[0], h, h, this.Bh.bind(this, f), d);
            this.f = c.image;
            this.B = [c.offsetX, c.offsetY];
            d = c.image.width;
            this.l = e ? c.Ng : this.f
        }
        this.o = [h / 2, h / 2];
        this.N = [h, h];
        this.s = [d, d];
        ti.call(this, {
            opacity: 1, rotateWithView: !1, rotation: 0, scale: 1, snapToPixel: void 0 !== a.snapToPixel ?
                a.snapToPixel : !0
        })
    }

    y(ik, ti);
    l = ik.prototype;
    l.Tb = function () {
        return this.o
    };
    l.vn = function () {
        return this.g
    };
    l.ke = function () {
        return this.l
    };
    l.ec = function () {
        return this.f
    };
    l.od = function () {
        return 2
    };
    l.fd = function () {
        return this.s
    };
    l.Fa = function () {
        return this.B
    };
    l.wn = function () {
        return this.a
    };
    l.Bb = function () {
        return this.N
    };
    l.xn = function () {
        return this.b
    };
    l.kf = pa;
    l.load = pa;
    l.Tf = pa;
    l.Bh = function (a, c, d, e) {
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(d, e);
        c.beginPath();
        c.arc(a.size / 2, a.size / 2, this.a, 0, 2 * Math.PI, !0);
        this.g && (c.fillStyle = Je(this.g.b), c.fill());
        this.b && (c.strokeStyle = a.strokeStyle, c.lineWidth = a.wd, a.lineDash && c.setLineDash(a.lineDash), c.stroke());
        c.closePath()
    };
    l.Ah = function (a, c, d, e) {
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(d, e);
        c.beginPath();
        c.arc(a.size / 2, a.size / 2, this.a, 0, 2 * Math.PI, !0);
        c.fillStyle = He(Wj);
        c.fill();
        this.b && (c.strokeStyle = a.strokeStyle, c.lineWidth = a.wd, a.lineDash && c.setLineDash(a.lineDash), c.stroke());
        c.closePath()
    };
    function jk(a) {
        a = a || {};
        this.i = null;
        this.g = kk;
        void 0 !== a.geometry && this.Eh(a.geometry);
        this.c = void 0 !== a.fill ? a.fill : null;
        this.a = void 0 !== a.image ? a.image : null;
        this.f = void 0 !== a.stroke ? a.stroke : null;
        this.l = void 0 !== a.text ? a.text : null;
        this.b = a.zIndex
    }

    l = jk.prototype;
    l.W = function () {
        return this.i
    };
    l.Vj = function () {
        return this.g
    };
    l.Jn = function () {
        return this.c
    };
    l.Kn = function () {
        return this.a
    };
    l.Ln = function () {
        return this.f
    };
    l.Ea = function () {
        return this.l
    };
    l.Mn = function () {
        return this.b
    };
    l.Eh = function (a) {
        ga(a) ? this.g = a : "string" === typeof a ? this.g = function (c) {
            return c.get(a)
        } : a ? void 0 !== a && (this.g = function () {
            return a
        }) : this.g = kk;
        this.i = a
    };
    l.Nn = function (a) {
        this.b = a
    };
    function lk(a) {
        if (!ga(a)) {
            var c;
            c = Array.isArray(a) ? a : [a];
            a = function () {
                return c
            }
        }
        return a
    }

    var mk = null;

    function nk() {
        if (!mk) {
            var a = new ak({color: "rgba(255,255,255,0.4)"}), c = new gk({color: "#3399CC", width: 1.25});
            mk = [new jk({image: new ik({fill: a, stroke: c, radius: 5}), fill: a, stroke: c})]
        }
        return mk
    }

    function ok() {
        var a = {}, c = [255, 255, 255, 1], d = [0, 153, 255, 1];
        a.Polygon = [new jk({fill: new ak({color: [255, 255, 255, .5]})})];
        a.MultiPolygon = a.Polygon;
        a.LineString = [new jk({stroke: new gk({color: c, width: 5})}), new jk({stroke: new gk({color: d, width: 3})})];
        a.MultiLineString = a.LineString;
        a.Circle = a.Polygon.concat(a.LineString);
        a.Point = [new jk({
            image: new ik({radius: 6, fill: new ak({color: d}), stroke: new gk({color: c, width: 1.5})}),
            zIndex: Infinity
        })];
        a.MultiPoint = a.Point;
        a.GeometryCollection = a.Polygon.concat(a.LineString,
            a.Point);
        return a
    }

    function kk(a) {
        return a.W()
    };
    function H(a) {
        a = a ? a : {};
        var c = Pa({}, a);
        delete c.style;
        delete c.renderBuffer;
        delete c.updateWhileAnimating;
        delete c.updateWhileInteracting;
        di.call(this, c);
        this.a = void 0 !== a.renderBuffer ? a.renderBuffer : 100;
        this.B = null;
        this.i = void 0;
        this.l(a.style);
        this.S = void 0 !== a.updateWhileAnimating ? a.updateWhileAnimating : !1;
        this.T = void 0 !== a.updateWhileInteracting ? a.updateWhileInteracting : !1
    }

    y(H, di);
    function pk(a) {
        return a.get("renderOrder")
    }

    H.prototype.M = function () {
        return this.B
    };
    H.prototype.N = function () {
        return this.i
    };
    H.prototype.l = function (a) {
        this.B = void 0 !== a ? a : nk;
        this.i = null === a ? void 0 : lk(this.B);
        this.u()
    };
    function I(a) {
        a = a ? a : {};
        var c = Pa({}, a);
        delete c.preload;
        delete c.useInterimTilesOnError;
        H.call(this, c);
        this.Y(a.preload ? a.preload : 0);
        this.ea(a.useInterimTilesOnError ? a.useInterimTilesOnError : !0);
        this.s = a.renderMode || "hybrid"
    }

    y(I, H);
    I.prototype.f = function () {
        return this.get("preload")
    };
    I.prototype.c = function () {
        return this.get("useInterimTilesOnError")
    };
    I.prototype.Y = function (a) {
        this.set("preload", a)
    };
    I.prototype.ea = function (a) {
        this.set("useInterimTilesOnError", a)
    };
    function qk(a, c, d, e, f) {
        this.f = a;
        this.B = c;
        this.c = d;
        this.N = e;
        this.Cc = f;
        this.i = this.b = this.a = this.ea = this.Qa = this.Y = null;
        this.na = this.wa = this.v = this.ya = this.va = this.R = 0;
        this.Cb = !1;
        this.l = this.ta = 0;
        this.xa = !1;
        this.S = 0;
        this.g = "";
        this.j = this.M = this.pb = this.Ra = 0;
        this.T = this.s = this.o = null;
        this.U = [];
        this.Db = hd()
    }

    y(qk, bi);
    function rk(a, c, d) {
        if (a.i) {
            c = rd(c, 0, d, 2, a.N, a.U);
            d = a.f;
            var e = a.Db, f = d.globalAlpha;
            1 != a.v && (d.globalAlpha = f * a.v);
            var g = a.ta;
            a.Cb && (g += a.Cc);
            var h, k;
            h = 0;
            for (k = c.length; h < k; h += 2) {
                var m = c[h] - a.R, n = c[h + 1] - a.va;
                a.xa && (m = Math.round(m), n = Math.round(n));
                if (0 !== g || 1 != a.l) {
                    var p = m + a.R, q = n + a.va;
                    hi(e, p, q, a.l, a.l, g, -p, -q);
                    d.setTransform(e[0], e[1], e[4], e[5], e[12], e[13])
                }
                d.drawImage(a.i, a.wa, a.na, a.S, a.ya, m, n, a.S, a.ya)
            }
            0 === g && 1 == a.l || d.setTransform(1, 0, 0, 1, 0, 0);
            1 != a.v && (d.globalAlpha = f)
        }
    }

    function sk(a, c, d, e) {
        var f = 0;
        if (a.T && "" !== a.g) {
            a.o && tk(a, a.o);
            a.s && uk(a, a.s);
            var g = a.T, h = a.f, k = a.ea;
            k ? (k.font != g.font && (k.font = h.font = g.font), k.textAlign != g.textAlign && (k.textAlign = h.textAlign = g.textAlign), k.textBaseline != g.textBaseline && (k.textBaseline = h.textBaseline = g.textBaseline)) : (h.font = g.font, h.textAlign = g.textAlign, h.textBaseline = g.textBaseline, a.ea = {
                font: g.font,
                textAlign: g.textAlign,
                textBaseline: g.textBaseline
            });
            c = rd(c, f, d, e, a.N, a.U);
            for (g = a.f; f < d; f += e) {
                h = c[f] + a.Ra;
                k = c[f + 1] + a.pb;
                if (0 !== a.M ||
                    1 != a.j) {
                    var m = hi(a.Db, h, k, a.j, a.j, a.M, -h, -k);
                    g.setTransform(m[0], m[1], m[4], m[5], m[12], m[13])
                }
                a.s && g.strokeText(a.g, h, k);
                a.o && g.fillText(a.g, h, k)
            }
            0 === a.M && 1 == a.j || g.setTransform(1, 0, 0, 1, 0, 0)
        }
    }

    function vk(a, c, d, e, f, g) {
        var h = a.f;
        a = rd(c, d, e, f, a.N, a.U);
        h.moveTo(a[0], a[1]);
        c = a.length;
        g && (c -= 2);
        for (d = 2; d < c; d += 2)h.lineTo(a[d], a[d + 1]);
        g && h.closePath();
        return e
    }

    function wk(a, c, d, e, f) {
        var g, h;
        g = 0;
        for (h = e.length; g < h; ++g)d = vk(a, c, d, e[g], f, !0);
        return d
    }

    l = qk.prototype;
    l.Md = function (a) {
        if (wc(this.c, a.O())) {
            if (this.a || this.b) {
                this.a && tk(this, this.a);
                this.b && uk(this, this.b);
                var c;
                c = this.N;
                var d = this.U, e = a.ga();
                c = e ? rd(e, 0, e.length, a.ua(), c, d) : null;
                d = c[2] - c[0];
                e = c[3] - c[1];
                d = Math.sqrt(d * d + e * e);
                e = this.f;
                e.beginPath();
                e.arc(c[0], c[1], d, 0, 2 * Math.PI);
                this.a && e.fill();
                this.b && e.stroke()
            }
            "" !== this.g && sk(this, a.ld(), 2, 2)
        }
    };
    l.md = function (a) {
        this.Ob(a.c, a.f);
        this.Pb(a.a);
        this.Rb(a.Ea())
    };
    l.nc = function (a) {
        switch (a.X()) {
            case "Point":
                this.pc(a);
                break;
            case "LineString":
                this.cd(a);
                break;
            case "Polygon":
                this.Ye(a);
                break;
            case "MultiPoint":
                this.oc(a);
                break;
            case "MultiLineString":
                this.We(a);
                break;
            case "MultiPolygon":
                this.Xe(a);
                break;
            case "GeometryCollection":
                this.Ve(a);
                break;
            case "Circle":
                this.Md(a)
        }
    };
    l.Ue = function (a, c) {
        var d = (0, c.g)(a);
        d && wc(this.c, d.O()) && (this.md(c), this.nc(d))
    };
    l.Ve = function (a) {
        a = a.c;
        var c, d;
        c = 0;
        for (d = a.length; c < d; ++c)this.nc(a[c])
    };
    l.pc = function (a) {
        var c = a.ga();
        a = a.ua();
        this.i && rk(this, c, c.length);
        "" !== this.g && sk(this, c, c.length, a)
    };
    l.oc = function (a) {
        var c = a.ga();
        a = a.ua();
        this.i && rk(this, c, c.length);
        "" !== this.g && sk(this, c, c.length, a)
    };
    l.cd = function (a) {
        if (wc(this.c, a.O())) {
            if (this.b) {
                uk(this, this.b);
                var c = this.f, d = a.ga();
                c.beginPath();
                vk(this, d, 0, d.length, a.ua(), !1);
                c.stroke()
            }
            "" !== this.g && (a = xk(a), sk(this, a, 2, 2))
        }
    };
    l.We = function (a) {
        var c = a.O();
        if (wc(this.c, c)) {
            if (this.b) {
                uk(this, this.b);
                var c = this.f, d = a.ga(), e = 0, f = a.zb(), g = a.ua();
                c.beginPath();
                var h, k;
                h = 0;
                for (k = f.length; h < k; ++h)e = vk(this, d, e, f[h], g, !1);
                c.stroke()
            }
            "" !== this.g && (a = yk(a), sk(this, a, a.length, 2))
        }
    };
    l.Ye = function (a) {
        if (wc(this.c, a.O())) {
            if (this.b || this.a) {
                this.a && tk(this, this.a);
                this.b && uk(this, this.b);
                var c = this.f;
                c.beginPath();
                wk(this, a.Kb(), 0, a.zb(), a.ua());
                this.a && c.fill();
                this.b && c.stroke()
            }
            "" !== this.g && (a = Xd(a), sk(this, a, 2, 2))
        }
    };
    l.Xe = function (a) {
        if (wc(this.c, a.O())) {
            if (this.b || this.a) {
                this.a && tk(this, this.a);
                this.b && uk(this, this.b);
                var c = this.f, d = zk(a), e = 0, f = a.i, g = a.ua(), h, k;
                h = 0;
                for (k = f.length; h < k; ++h) {
                    var m = f[h];
                    c.beginPath();
                    e = wk(this, d, e, m, g);
                    this.a && c.fill();
                    this.b && c.stroke()
                }
            }
            "" !== this.g && (a = Ak(a), sk(this, a, a.length, 2))
        }
    };
    function tk(a, c) {
        var d = a.f, e = a.Y;
        e ? e.fillStyle != c.fillStyle && (e.fillStyle = d.fillStyle = c.fillStyle) : (d.fillStyle = c.fillStyle, a.Y = {fillStyle: c.fillStyle})
    }

    function uk(a, c) {
        var d = a.f, e = a.Qa;
        e ? (e.lineCap != c.lineCap && (e.lineCap = d.lineCap = c.lineCap), Zg && !Ab(e.lineDash, c.lineDash) && d.setLineDash(e.lineDash = c.lineDash), e.lineJoin != c.lineJoin && (e.lineJoin = d.lineJoin = c.lineJoin), e.lineWidth != c.lineWidth && (e.lineWidth = d.lineWidth = c.lineWidth), e.miterLimit != c.miterLimit && (e.miterLimit = d.miterLimit = c.miterLimit), e.strokeStyle != c.strokeStyle && (e.strokeStyle = d.strokeStyle = c.strokeStyle)) : (d.lineCap = c.lineCap, Zg && d.setLineDash(c.lineDash), d.lineJoin = c.lineJoin, d.lineWidth =
            c.lineWidth, d.miterLimit = c.miterLimit, d.strokeStyle = c.strokeStyle, a.Qa = {
            lineCap: c.lineCap,
            lineDash: c.lineDash,
            lineJoin: c.lineJoin,
            lineWidth: c.lineWidth,
            miterLimit: c.miterLimit,
            strokeStyle: c.strokeStyle
        })
    }

    l.Ob = function (a, c) {
        if (a) {
            var d = a.b;
            this.a = {fillStyle: Je(d ? d : Wj)}
        } else this.a = null;
        if (c) {
            var d = c.b, e = c.f, f = c.g, g = c.c, h = c.a, k = c.i;
            this.b = {
                lineCap: void 0 !== e ? e : "round",
                lineDash: f ? f : Xj,
                lineJoin: void 0 !== g ? g : "round",
                lineWidth: this.B * (void 0 !== h ? h : 1),
                miterLimit: void 0 !== k ? k : 10,
                strokeStyle: He(d ? d : Yj)
            }
        } else this.b = null
    };
    l.Pb = function (a) {
        if (a) {
            var c = a.Tb(), d = a.ec(1), e = a.Fa(), f = a.Bb();
            this.R = c[0];
            this.va = c[1];
            this.ya = f[1];
            this.i = d;
            this.v = a.v;
            this.wa = e[0];
            this.na = e[1];
            this.Cb = a.U;
            this.ta = a.j;
            this.l = a.i;
            this.xa = a.M;
            this.S = f[0]
        } else this.i = null
    };
    l.Rb = function (a) {
        if (a) {
            var c = a.b;
            c ? (c = c.b, this.o = {fillStyle: Je(c ? c : Wj)}) : this.o = null;
            var d = a.l;
            if (d) {
                var c = d.b, e = d.f, f = d.g, g = d.c, h = d.a, d = d.i;
                this.s = {
                    lineCap: void 0 !== e ? e : "round",
                    lineDash: f ? f : Xj,
                    lineJoin: void 0 !== g ? g : "round",
                    lineWidth: void 0 !== h ? h : 1,
                    miterLimit: void 0 !== d ? d : 10,
                    strokeStyle: He(c ? c : Yj)
                }
            } else this.s = null;
            var c = a.g, e = a.f, f = a.c, g = a.i, h = a.a, d = a.Ea(), k = a.o;
            a = a.j;
            this.T = {
                font: void 0 !== c ? c : "10px sans-serif",
                textAlign: void 0 !== k ? k : "center",
                textBaseline: void 0 !== a ? a : "middle"
            };
            this.g = void 0 !== d ?
                d : "";
            this.Ra = void 0 !== e ? this.B * e : 0;
            this.pb = void 0 !== f ? this.B * f : 0;
            this.M = void 0 !== g ? g : 0;
            this.j = this.B * (void 0 !== h ? h : 1)
        } else this.g = ""
    };
    function Bk(a) {
        ki.call(this, a);
        this.R = hd()
    }

    y(Bk, ki);
    Bk.prototype.i = function (a, c, d) {
        Ck(this, "precompose", d, a, void 0);
        var e = this.f ? this.f.a() : null;
        if (e) {
            var f = c.extent, g = void 0 !== f;
            if (g) {
                var h = a.pixelRatio, k = a.size[0] * h, m = a.size[1] * h, n = a.viewState.rotation, p = oc(f), q = nc(f), r = mc(f), f = lc(f);
                ji(a.coordinateToPixelMatrix, p, p);
                ji(a.coordinateToPixelMatrix, q, q);
                ji(a.coordinateToPixelMatrix, r, r);
                ji(a.coordinateToPixelMatrix, f, f);
                d.save();
                Zj(d, -n, k / 2, m / 2);
                d.beginPath();
                d.moveTo(p[0] * h, p[1] * h);
                d.lineTo(q[0] * h, q[1] * h);
                d.lineTo(r[0] * h, r[1] * h);
                d.lineTo(f[0] * h, f[1] *
                    h);
                d.clip();
                Zj(d, n, k / 2, m / 2)
            }
            h = this.s;
            k = d.globalAlpha;
            d.globalAlpha = c.opacity;
            d.drawImage(e, 0, 0, +e.width, +e.height, Math.round(h[12]), Math.round(h[13]), Math.round(e.width * h[0]), Math.round(e.height * h[5]));
            d.globalAlpha = k;
            g && d.restore()
        }
        Dk(this, d, a)
    };
    function Ck(a, c, d, e, f) {
        var g = a.a;
        if (lb(g, c)) {
            var h = e.size[0] * e.pixelRatio, k = e.size[1] * e.pixelRatio, m = e.viewState.rotation;
            Zj(d, -m, h / 2, k / 2);
            a = void 0 !== f ? f : Ek(a, e, 0);
            a = new qk(d, e.pixelRatio, e.extent, a, e.viewState.rotation);
            g.b(new ci(c, g, a, e, d, null));
            Zj(d, m, h / 2, k / 2)
        }
    }

    function Dk(a, c, d, e) {
        Ck(a, "postcompose", c, d, e)
    }

    function Ek(a, c, d) {
        var e = c.viewState, f = c.pixelRatio;
        return hi(a.R, f * c.size[0] / 2, f * c.size[1] / 2, f / e.resolution, -f / e.resolution, -e.rotation, -e.center[0] + d, -e.center[1])
    };
    var Fk = ["Polygon", "LineString", "Image", "Text"];

    function Gk(a, c, d) {
        this.na = a;
        this.T = c;
        this.f = null;
        this.c = 0;
        this.resolution = d;
        this.ya = this.va = null;
        this.a = [];
        this.coordinates = [];
        this.Qa = hd();
        this.b = [];
        this.Y = [];
        this.ea = hd();
        this.wa = hd()
    }

    y(Gk, bi);
    function Hk(a, c, d, e, f, g) {
        var h = a.coordinates.length, k = a.$e(), m = [c[d], c[d + 1]], n = [NaN, NaN], p = !0, q, r, u;
        for (q = d + f; q < e; q += f)n[0] = c[q], n[1] = c[q + 1], u = dc(k, n), u !== r ? (p && (a.coordinates[h++] = m[0], a.coordinates[h++] = m[1]), a.coordinates[h++] = n[0], a.coordinates[h++] = n[1], p = !1) : 1 === u ? (a.coordinates[h++] = n[0], a.coordinates[h++] = n[1], p = !1) : p = !0, m[0] = n[0], m[1] = n[1], r = u;
        q === d + f && (a.coordinates[h++] = m[0], a.coordinates[h++] = m[1]);
        g && (a.coordinates[h++] = c[d], a.coordinates[h++] = c[d + 1]);
        return h
    }

    function Ik(a, c) {
        a.va = [0, c, 0];
        a.a.push(a.va);
        a.ya = [0, c, 0];
        a.b.push(a.ya)
    }

    function Jk(a, c, d, e, f, g, h, k, m) {
        var n;
        ii(e, a.Qa) ? n = a.Y : (n = rd(a.coordinates, 0, a.coordinates.length, 2, e, a.Y), kd(a.Qa, e));
        e = !Sa(g);
        var p = 0, q = h.length, r = 0, u, v = a.ea;
        a = a.wa;
        for (var x, z, E, B; p < q;) {
            var A = h[p], G, O, L, R;
            switch (A[0]) {
                case 0:
                    r = A[1];
                    e && g[w(r).toString()] || !r.W() ? p = A[2] : void 0 === m || wc(m, r.W().O()) ? ++p : p = A[2];
                    break;
                case 1:
                    c.beginPath();
                    ++p;
                    break;
                case 2:
                    r = A[1];
                    u = n[r];
                    A = n[r + 1];
                    E = n[r + 2] - u;
                    r = n[r + 3] - A;
                    c.arc(u, A, Math.sqrt(E * E + r * r), 0, 2 * Math.PI, !0);
                    ++p;
                    break;
                case 3:
                    c.closePath();
                    ++p;
                    break;
                case 4:
                    r = A[1];
                    u =
                        A[2];
                    G = A[3];
                    L = A[4] * d;
                    var Wa = A[5] * d, J = A[6];
                    O = A[7];
                    var ua = A[8], Ta = A[9];
                    E = A[11];
                    B = A[12];
                    var kb = A[13], Ka = A[14];
                    for (A[10] && (E += f); r < u; r += 2) {
                        A = n[r] - L;
                        R = n[r + 1] - Wa;
                        kb && (A = Math.round(A), R = Math.round(R));
                        if (1 != B || 0 !== E) {
                            var Ia = A + L, xc = R + Wa;
                            hi(v, Ia, xc, B, B, E, -Ia, -xc);
                            c.transform(v[0], v[1], v[4], v[5], v[12], v[13])
                        }
                        Ia = c.globalAlpha;
                        1 != O && (c.globalAlpha = Ia * O);
                        var xc = Ka + ua > G.width ? G.width - ua : Ka, Pc = J + Ta > G.height ? G.height - Ta : J;
                        c.drawImage(G, ua, Ta, xc, Pc, A, R, xc * d, Pc * d);
                        1 != O && (c.globalAlpha = Ia);
                        if (1 != B || 0 !== E)nd(v, a), c.transform(a[0],
                            a[1], a[4], a[5], a[12], a[13])
                    }
                    ++p;
                    break;
                case 5:
                    r = A[1];
                    u = A[2];
                    L = A[3];
                    Wa = A[4] * d;
                    J = A[5] * d;
                    E = A[6];
                    B = A[7] * d;
                    G = A[8];
                    for (O = A[9]; r < u; r += 2) {
                        A = n[r] + Wa;
                        R = n[r + 1] + J;
                        if (1 != B || 0 !== E)hi(v, A, R, B, B, E, -A, -R), c.transform(v[0], v[1], v[4], v[5], v[12], v[13]);
                        ua = L.split("\n");
                        Ta = ua.length;
                        1 < Ta ? (kb = Math.round(1.5 * c.measureText("M").width), R -= (Ta - 1) / 2 * kb) : kb = 0;
                        for (Ka = 0; Ka < Ta; Ka++)Ia = ua[Ka], O && c.strokeText(Ia, A, R), G && c.fillText(Ia, A, R), R += kb;
                        if (1 != B || 0 !== E)nd(v, a), c.transform(a[0], a[1], a[4], a[5], a[12], a[13])
                    }
                    ++p;
                    break;
                case 6:
                    if (void 0 !==
                        k && (r = A[1], r = k(r)))return r;
                    ++p;
                    break;
                case 7:
                    c.fill();
                    ++p;
                    break;
                case 8:
                    r = A[1];
                    u = A[2];
                    A = n[r];
                    R = n[r + 1];
                    E = A + .5 | 0;
                    B = R + .5 | 0;
                    if (E !== x || B !== z)c.moveTo(A, R), x = E, z = B;
                    for (r += 2; r < u; r += 2)if (A = n[r], R = n[r + 1], E = A + .5 | 0, B = R + .5 | 0, E !== x || B !== z)c.lineTo(A, R), x = E, z = B;
                    ++p;
                    break;
                case 9:
                    c.fillStyle = A[1];
                    ++p;
                    break;
                case 10:
                    x = void 0 !== A[7] ? A[7] : !0;
                    z = A[2];
                    c.strokeStyle = A[1];
                    c.lineWidth = x ? z * d : z;
                    c.lineCap = A[3];
                    c.lineJoin = A[4];
                    c.miterLimit = A[5];
                    Zg && c.setLineDash(A[6]);
                    z = x = NaN;
                    ++p;
                    break;
                case 11:
                    c.font = A[1];
                    c.textAlign = A[2];
                    c.textBaseline =
                        A[3];
                    ++p;
                    break;
                case 12:
                    c.stroke();
                    ++p;
                    break;
                default:
                    ++p
            }
        }
    }

    Gk.prototype.Pa = function (a, c, d, e, f) {
        Jk(this, a, c, d, e, f, this.a, void 0)
    };
    function Kk(a) {
        var c = a.b;
        c.reverse();
        var d, e = c.length, f, g, h = -1;
        for (d = 0; d < e; ++d)if (f = c[d], g = f[0], 6 == g)h = d; else if (0 == g) {
            f[2] = d;
            f = a.b;
            for (g = d; h < g;) {
                var k = f[h];
                f[h] = f[g];
                f[g] = k;
                ++h;
                --g
            }
            h = -1
        }
    }

    function Lk(a, c) {
        a.va[2] = a.a.length;
        a.va = null;
        a.ya[2] = a.b.length;
        a.ya = null;
        var d = [6, c];
        a.a.push(d);
        a.b.push(d)
    }

    Gk.prototype.fe = pa;
    Gk.prototype.$e = function () {
        return this.T
    };
    function Mk(a, c, d) {
        Gk.call(this, a, c, d);
        this.o = this.S = null;
        this.R = this.N = this.M = this.B = this.U = this.v = this.s = this.j = this.l = this.i = this.g = void 0
    }

    y(Mk, Gk);
    Mk.prototype.pc = function (a, c) {
        if (this.o) {
            Ik(this, c);
            var d = a.ga(), e = this.coordinates.length, d = Hk(this, d, 0, d.length, a.ua(), !1);
            this.a.push([4, e, d, this.o, this.g, this.i, this.l, this.j, this.s, this.v, this.U, this.B, this.M, this.N, this.R]);
            this.b.push([4, e, d, this.S, this.g, this.i, this.l, this.j, this.s, this.v, this.U, this.B, this.M, this.N, this.R]);
            Lk(this, c)
        }
    };
    Mk.prototype.oc = function (a, c) {
        if (this.o) {
            Ik(this, c);
            var d = a.ga(), e = this.coordinates.length, d = Hk(this, d, 0, d.length, a.ua(), !1);
            this.a.push([4, e, d, this.o, this.g, this.i, this.l, this.j, this.s, this.v, this.U, this.B, this.M, this.N, this.R]);
            this.b.push([4, e, d, this.S, this.g, this.i, this.l, this.j, this.s, this.v, this.U, this.B, this.M, this.N, this.R]);
            Lk(this, c)
        }
    };
    Mk.prototype.fe = function () {
        Kk(this);
        this.i = this.g = void 0;
        this.o = this.S = null;
        this.R = this.N = this.B = this.U = this.v = this.s = this.j = this.M = this.l = void 0
    };
    Mk.prototype.Pb = function (a) {
        var c = a.Tb(), d = a.Bb(), e = a.ke(1), f = a.ec(1), g = a.Fa();
        this.g = c[0];
        this.i = c[1];
        this.S = e;
        this.o = f;
        this.l = d[1];
        this.j = a.v;
        this.s = g[0];
        this.v = g[1];
        this.U = a.U;
        this.B = a.j;
        this.M = a.i;
        this.N = a.M;
        this.R = d[0]
    };
    function Nk(a, c, d) {
        Gk.call(this, a, c, d);
        this.g = {
            ad: void 0,
            Wc: void 0,
            Xc: null,
            Yc: void 0,
            Zc: void 0,
            $c: void 0,
            jf: 0,
            strokeStyle: void 0,
            lineCap: void 0,
            lineDash: null,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }

    y(Nk, Gk);
    function Ok(a, c, d, e, f) {
        var g = a.coordinates.length;
        c = Hk(a, c, d, e, f, !1);
        g = [8, g, c];
        a.a.push(g);
        a.b.push(g);
        return e
    }

    l = Nk.prototype;
    l.$e = function () {
        this.f || (this.f = Zb(this.T), 0 < this.c && Yb(this.f, this.resolution * (this.c + 1) / 2, this.f));
        return this.f
    };
    function Pk(a) {
        var c = a.g, d = c.strokeStyle, e = c.lineCap, f = c.lineDash, g = c.lineJoin, h = c.lineWidth, k = c.miterLimit;
        c.ad == d && c.Wc == e && Ab(c.Xc, f) && c.Yc == g && c.Zc == h && c.$c == k || (c.jf != a.coordinates.length && (a.a.push([12]), c.jf = a.coordinates.length), a.a.push([10, d, h, e, g, k, f], [1]), c.ad = d, c.Wc = e, c.Xc = f, c.Yc = g, c.Zc = h, c.$c = k)
    }

    l.cd = function (a, c) {
        var d = this.g, e = d.lineWidth;
        void 0 !== d.strokeStyle && void 0 !== e && (Pk(this), Ik(this, c), this.b.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash], [1]), d = a.ga(), Ok(this, d, 0, d.length, a.ua()), this.b.push([12]), Lk(this, c))
    };
    l.We = function (a, c) {
        var d = this.g, e = d.lineWidth;
        if (void 0 !== d.strokeStyle && void 0 !== e) {
            Pk(this);
            Ik(this, c);
            this.b.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash], [1]);
            var d = a.zb(), e = a.ga(), f = a.ua(), g = 0, h, k;
            h = 0;
            for (k = d.length; h < k; ++h)g = Ok(this, e, g, d[h], f);
            this.b.push([12]);
            Lk(this, c)
        }
    };
    l.fe = function () {
        this.g.jf != this.coordinates.length && this.a.push([12]);
        Kk(this);
        this.g = null
    };
    l.Ob = function (a, c) {
        var d = c.b;
        this.g.strokeStyle = He(d ? d : Yj);
        d = c.f;
        this.g.lineCap = void 0 !== d ? d : "round";
        d = c.g;
        this.g.lineDash = d ? d : Xj;
        d = c.c;
        this.g.lineJoin = void 0 !== d ? d : "round";
        d = c.a;
        this.g.lineWidth = void 0 !== d ? d : 1;
        d = c.i;
        this.g.miterLimit = void 0 !== d ? d : 10;
        this.g.lineWidth > this.c && (this.c = this.g.lineWidth, this.f = null)
    };
    function Qk(a, c, d) {
        Gk.call(this, a, c, d);
        this.g = {
            qg: void 0,
            ad: void 0,
            Wc: void 0,
            Xc: null,
            Yc: void 0,
            Zc: void 0,
            $c: void 0,
            fillStyle: void 0,
            strokeStyle: void 0,
            lineCap: void 0,
            lineDash: null,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }

    y(Qk, Gk);
    function Rk(a, c, d, e, f) {
        var g = a.g, h = [1];
        a.a.push(h);
        a.b.push(h);
        var k, h = 0;
        for (k = e.length; h < k; ++h) {
            var m = e[h], n = a.coordinates.length;
            d = Hk(a, c, d, m, f, !0);
            d = [8, n, d];
            n = [3];
            a.a.push(d, n);
            a.b.push(d, n);
            d = m
        }
        c = [7];
        a.b.push(c);
        void 0 !== g.fillStyle && a.a.push(c);
        void 0 !== g.strokeStyle && (g = [12], a.a.push(g), a.b.push(g));
        return d
    }

    l = Qk.prototype;
    l.Md = function (a, c) {
        var d = this.g, e = d.strokeStyle;
        if (void 0 !== d.fillStyle || void 0 !== e) {
            Sk(this);
            Ik(this, c);
            this.b.push([9, He(Wj)]);
            void 0 !== d.strokeStyle && this.b.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]);
            var f = a.ga(), e = this.coordinates.length;
            Hk(this, f, 0, f.length, a.ua(), !1);
            f = [1];
            e = [2, e];
            this.a.push(f, e);
            this.b.push(f, e);
            e = [7];
            this.b.push(e);
            void 0 !== d.fillStyle && this.a.push(e);
            void 0 !== d.strokeStyle && (d = [12], this.a.push(d), this.b.push(d));
            Lk(this, c)
        }
    };
    l.Ye = function (a, c) {
        var d = this.g, e = d.strokeStyle;
        if (void 0 !== d.fillStyle || void 0 !== e)Sk(this), Ik(this, c), this.b.push([9, He(Wj)]), void 0 !== d.strokeStyle && this.b.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]), d = a.zb(), e = a.Kb(), Rk(this, e, 0, d, a.ua()), Lk(this, c)
    };
    l.Xe = function (a, c) {
        var d = this.g, e = d.strokeStyle;
        if (void 0 !== d.fillStyle || void 0 !== e) {
            Sk(this);
            Ik(this, c);
            this.b.push([9, He(Wj)]);
            void 0 !== d.strokeStyle && this.b.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]);
            var d = a.i, e = zk(a), f = a.ua(), g = 0, h, k;
            h = 0;
            for (k = d.length; h < k; ++h)g = Rk(this, e, g, d[h], f);
            Lk(this, c)
        }
    };
    l.fe = function () {
        Kk(this);
        this.g = null;
        var a = this.na;
        if (0 !== a) {
            var c = this.coordinates, d, e;
            d = 0;
            for (e = c.length; d < e; ++d)c[d] = a * Math.round(c[d] / a)
        }
    };
    l.$e = function () {
        this.f || (this.f = Zb(this.T), 0 < this.c && Yb(this.f, this.resolution * (this.c + 1) / 2, this.f));
        return this.f
    };
    l.Ob = function (a, c) {
        var d = this.g;
        if (a) {
            var e = a.b;
            d.fillStyle = Je(e ? e : Wj)
        } else d.fillStyle = void 0;
        c ? (e = c.b, d.strokeStyle = He(e ? e : Yj), e = c.f, d.lineCap = void 0 !== e ? e : "round", e = c.g, d.lineDash = e ? e.slice() : Xj, e = c.c, d.lineJoin = void 0 !== e ? e : "round", e = c.a, d.lineWidth = void 0 !== e ? e : 1, e = c.i, d.miterLimit = void 0 !== e ? e : 10, d.lineWidth > this.c && (this.c = d.lineWidth, this.f = null)) : (d.strokeStyle = void 0, d.lineCap = void 0, d.lineDash = null, d.lineJoin = void 0, d.lineWidth = void 0, d.miterLimit = void 0)
    };
    function Sk(a) {
        var c = a.g, d = c.fillStyle, e = c.strokeStyle, f = c.lineCap, g = c.lineDash, h = c.lineJoin, k = c.lineWidth, m = c.miterLimit;
        void 0 !== d && c.qg != d && (a.a.push([9, d]), c.qg = c.fillStyle);
        void 0 === e || c.ad == e && c.Wc == f && c.Xc == g && c.Yc == h && c.Zc == k && c.$c == m || (a.a.push([10, e, k, f, h, m, g]), c.ad = e, c.Wc = f, c.Xc = g, c.Yc = h, c.Zc = k, c.$c = m)
    }

    function Tk(a, c, d) {
        Gk.call(this, a, c, d);
        this.N = this.M = this.B = null;
        this.o = "";
        this.U = this.v = this.s = this.j = 0;
        this.l = this.i = this.g = null
    }

    y(Tk, Gk);
    function Uk(a, c, d, e, f) {
        if ("" !== a.o && a.l && (a.g || a.i)) {
            if (a.g) {
                var g = a.g, h = a.B;
                if (!h || h.fillStyle != g.fillStyle) {
                    var k = [9, g.fillStyle];
                    a.a.push(k);
                    a.b.push(k);
                    h ? h.fillStyle = g.fillStyle : a.B = {fillStyle: g.fillStyle}
                }
            }
            a.i && (g = a.i, h = a.M, h && h.lineCap == g.lineCap && h.lineDash == g.lineDash && h.lineJoin == g.lineJoin && h.lineWidth == g.lineWidth && h.miterLimit == g.miterLimit && h.strokeStyle == g.strokeStyle || (k = [10, g.strokeStyle, g.lineWidth, g.lineCap, g.lineJoin, g.miterLimit, g.lineDash, !1], a.a.push(k), a.b.push(k), h ? (h.lineCap =
                g.lineCap, h.lineDash = g.lineDash, h.lineJoin = g.lineJoin, h.lineWidth = g.lineWidth, h.miterLimit = g.miterLimit, h.strokeStyle = g.strokeStyle) : a.M = {
                lineCap: g.lineCap,
                lineDash: g.lineDash,
                lineJoin: g.lineJoin,
                lineWidth: g.lineWidth,
                miterLimit: g.miterLimit,
                strokeStyle: g.strokeStyle
            }));
            g = a.l;
            h = a.N;
            h && h.font == g.font && h.textAlign == g.textAlign && h.textBaseline == g.textBaseline || (k = [11, g.font, g.textAlign, g.textBaseline], a.a.push(k), a.b.push(k), h ? (h.font = g.font, h.textAlign = g.textAlign, h.textBaseline = g.textBaseline) : a.N =
            {font: g.font, textAlign: g.textAlign, textBaseline: g.textBaseline});
            Ik(a, f);
            g = a.coordinates.length;
            c = Hk(a, c, 0, d, e, !1);
            c = [5, g, c, a.o, a.j, a.s, a.v, a.U, !!a.g, !!a.i];
            a.a.push(c);
            a.b.push(c);
            Lk(a, f)
        }
    }

    Tk.prototype.Rb = function (a) {
        if (a) {
            var c = a.b;
            c ? (c = c.b, c = Je(c ? c : Wj), this.g ? this.g.fillStyle = c : this.g = {fillStyle: c}) : this.g = null;
            var d = a.l;
            if (d) {
                var c = d.b, e = d.f, f = d.g, g = d.c, h = d.a, d = d.i, e = void 0 !== e ? e : "round", f = f ? f.slice() : Xj, g = void 0 !== g ? g : "round", h = void 0 !== h ? h : 1, d = void 0 !== d ? d : 10, c = He(c ? c : Yj);
                if (this.i) {
                    var k = this.i;
                    k.lineCap = e;
                    k.lineDash = f;
                    k.lineJoin = g;
                    k.lineWidth = h;
                    k.miterLimit = d;
                    k.strokeStyle = c
                } else this.i = {lineCap: e, lineDash: f, lineJoin: g, lineWidth: h, miterLimit: d, strokeStyle: c}
            } else this.i = null;
            var m = a.g, c = a.f, e = a.c, f = a.i, h = a.a, d = a.Ea(), g = a.o, k = a.j;
            a = void 0 !== m ? m : "10px sans-serif";
            g = void 0 !== g ? g : "center";
            k = void 0 !== k ? k : "middle";
            this.l ? (m = this.l, m.font = a, m.textAlign = g, m.textBaseline = k) : this.l = {
                font: a,
                textAlign: g,
                textBaseline: k
            };
            this.o = void 0 !== d ? d : "";
            this.j = void 0 !== c ? c : 0;
            this.s = void 0 !== e ? e : 0;
            this.v = void 0 !== f ? f : 0;
            this.U = void 0 !== h ? h : 1
        } else this.o = ""
    };
    function Vk(a, c, d, e) {
        this.o = a;
        this.g = c;
        this.l = d;
        this.f = e;
        this.a = {};
        this.c = Mg(1, 1);
        this.i = hd()
    }

    function Wk(a) {
        for (var c in a.a) {
            var d = a.a[c], e;
            for (e in d)d[e].fe()
        }
    }

    Vk.prototype.oa = function (a, c, d, e, f) {
        var g = this.i;
        hi(g, .5, .5, 1 / c, -1 / c, -d, -a[0], -a[1]);
        var h = this.c;
        h.clearRect(0, 0, 1, 1);
        var k;
        void 0 !== this.f && (k = Wb(), Xb(k, a), Yb(k, c * this.f, k));
        return Xk(this, h, g, d, e, function (a) {
            if (0 < h.getImageData(0, 0, 1, 1).data[3]) {
                if (a = f(a))return a;
                h.clearRect(0, 0, 1, 1)
            }
        }, k)
    };
    Vk.prototype.b = function (a, c) {
        var d = void 0 !== a ? a.toString() : "0", e = this.a[d];
        void 0 === e && (e = {}, this.a[d] = e);
        d = e[c];
        void 0 === d && (d = new Yk[c](this.o, this.g, this.l), e[c] = d);
        return d
    };
    Vk.prototype.Sa = function () {
        return Sa(this.a)
    };
    Vk.prototype.Pa = function (a, c, d, e, f, g) {
        var h = Object.keys(this.a).map(Number);
        h.sort(tb);
        var k = this.g, m = k[0], n = k[1], p = k[2], k = k[3], m = [m, n, m, k, p, k, p, n];
        rd(m, 0, 8, 2, d, m);
        a.save();
        a.beginPath();
        a.moveTo(m[0], m[1]);
        a.lineTo(m[2], m[3]);
        a.lineTo(m[4], m[5]);
        a.lineTo(m[6], m[7]);
        a.closePath();
        a.clip();
        g = g ? g : Fk;
        for (var q, r, m = 0, n = h.length; m < n; ++m)for (q = this.a[h[m].toString()], p = 0, k = g.length; p < k; ++p)r = q[g[p]], void 0 !== r && r.Pa(a, c, d, e, f);
        a.restore()
    };
    function Xk(a, c, d, e, f, g, h) {
        var k = Object.keys(a.a).map(Number);
        k.sort(function (a, c) {
            return c - a
        });
        var m, n, p, q, r;
        m = 0;
        for (n = k.length; m < n; ++m)for (q = a.a[k[m].toString()], p = Fk.length - 1; 0 <= p; --p)if (r = q[Fk[p]], void 0 !== r && (r = Jk(r, c, 1, d, e, f, r.b, g, h)))return r
    }

    var Yk = {Image: Mk, LineString: Nk, Polygon: Qk, Text: Tk};

    function Zk(a, c, d, e) {
        this.g = a;
        this.b = c;
        this.c = d;
        this.f = e
    }

    l = Zk.prototype;
    l.get = function (a) {
        return this.f[a]
    };
    l.zb = function () {
        return this.c
    };
    l.O = function () {
        this.a || (this.a = "Point" === this.g ? fc(this.b) : gc(this.b, 0, this.b.length, 2));
        return this.a
    };
    l.Kb = function () {
        return this.b
    };
    l.ga = Zk.prototype.Kb;
    l.W = function () {
        return this
    };
    l.Hm = function () {
        return this.f
    };
    l.hd = Zk.prototype.W;
    l.ua = function () {
        return 2
    };
    l.$b = pa;
    l.X = function () {
        return this.g
    };
    function $k(a, c) {
        return w(a) - w(c)
    }

    function al(a, c) {
        var d = .5 * a / c;
        return d * d
    }

    function bl(a, c, d, e, f, g) {
        var h = !1, k, m;
        if (k = d.a)m = k.od(), 2 == m || 3 == m ? k.Tf(f, g) : (0 == m && k.load(), k.kf(f, g), h = !0);
        if (f = (0, d.g)(c))e = f.hd(e), (0, cl[e.X()])(a, e, d, c);
        return h
    }

    var cl = {
        Point: function (a, c, d, e) {
            var f = d.a;
            if (f) {
                if (2 != f.od())return;
                var g = a.b(d.b, "Image");
                g.Pb(f);
                g.pc(c, e)
            }
            if (f = d.Ea())a = a.b(d.b, "Text"), a.Rb(f), Uk(a, c.ga(), 2, 2, e)
        }, LineString: function (a, c, d, e) {
            var f = d.f;
            if (f) {
                var g = a.b(d.b, "LineString");
                g.Ob(null, f);
                g.cd(c, e)
            }
            if (f = d.Ea())a = a.b(d.b, "Text"), a.Rb(f), Uk(a, xk(c), 2, 2, e)
        }, Polygon: function (a, c, d, e) {
            var f = d.c, g = d.f;
            if (f || g) {
                var h = a.b(d.b, "Polygon");
                h.Ob(f, g);
                h.Ye(c, e)
            }
            if (f = d.Ea())a = a.b(d.b, "Text"), a.Rb(f), Uk(a, Xd(c), 2, 2, e)
        }, MultiPoint: function (a, c, d, e) {
            var f =
                d.a;
            if (f) {
                if (2 != f.od())return;
                var g = a.b(d.b, "Image");
                g.Pb(f);
                g.oc(c, e)
            }
            if (f = d.Ea())a = a.b(d.b, "Text"), a.Rb(f), d = c.ga(), Uk(a, d, d.length, c.ua(), e)
        }, MultiLineString: function (a, c, d, e) {
            var f = d.f;
            if (f) {
                var g = a.b(d.b, "LineString");
                g.Ob(null, f);
                g.We(c, e)
            }
            if (f = d.Ea())a = a.b(d.b, "Text"), a.Rb(f), c = yk(c), Uk(a, c, c.length, 2, e)
        }, MultiPolygon: function (a, c, d, e) {
            var f = d.c, g = d.f;
            if (g || f) {
                var h = a.b(d.b, "Polygon");
                h.Ob(f, g);
                h.Xe(c, e)
            }
            if (f = d.Ea())a = a.b(d.b, "Text"), a.Rb(f), c = Ak(c), Uk(a, c, c.length, 2, e)
        }, GeometryCollection: function (a,
                                         c, d, e) {
            c = c.c;
            var f, g;
            f = 0;
            for (g = c.length; f < g; ++f)(0, cl[c[f].X()])(a, c[f], d, e)
        }, Circle: function (a, c, d, e) {
            var f = d.c, g = d.f;
            if (f || g) {
                var h = a.b(d.b, "Polygon");
                h.Ob(f, g);
                h.Md(c, e)
            }
            if (f = d.Ea())a = a.b(d.b, "Text"), a.Rb(f), Uk(a, c.ld(), 2, 2, e)
        }
    };

    function dl(a, c, d, e, f, g) {
        this.c = void 0 !== g ? g : null;
        fi.call(this, a, c, d, void 0 !== g ? 0 : 2, e);
        this.g = f
    }

    y(dl, fi);
    dl.prototype.i = function (a) {
        this.state = a ? 3 : 2;
        gi(this)
    };
    dl.prototype.load = function () {
        0 == this.state && (this.state = 1, gi(this), this.c(this.i.bind(this)))
    };
    dl.prototype.a = function () {
        return this.g
    };
    var el, fl = aa.navigator, gl = aa.chrome, hl = -1 < fl.userAgent.indexOf("OPR"), il = -1 < fl.userAgent.indexOf("Edge");
    el = !(!fl.userAgent.match("CriOS") && null !== gl && void 0 !== gl && "Google Inc." === fl.vendor && 0 == hl && 0 == il);
    function jl(a, c, d, e) {
        var f = bd(d, c, a);
        d = c.getPointResolution(e, d);
        c = c.Vb();
        void 0 !== c && (d *= c);
        c = a.Vb();
        void 0 !== c && (d /= c);
        a = a.getPointResolution(d, f) / d;
        isFinite(a) && 0 < a && (d /= a);
        return d
    }

    function kl(a, c, d, e) {
        a = d - a;
        c = e - c;
        var f = Math.sqrt(a * a + c * c);
        return [Math.round(d + a / f), Math.round(e + c / f)]
    }

    function ll(a, c, d, e, f, g, h, k, m, n, p) {
        var q = Mg(Math.round(d * a), Math.round(d * c));
        if (0 === m.length)return q.canvas;
        q.scale(d, d);
        var r = Wb();
        m.forEach(function (a) {
            jc(r, a.extent)
        });
        var u = Mg(Math.round(d * rc(r) / e), Math.round(d * sc(r) / e)), v = d / e;
        m.forEach(function (a) {
            u.drawImage(a.image, n, n, a.image.width - 2 * n, a.image.height - 2 * n, (a.extent[0] - r[0]) * v, -(a.extent[3] - r[3]) * v, rc(a.extent) * v, sc(a.extent) * v)
        });
        var x = oc(h);
        k.f.forEach(function (a) {
            var c = a.source, f = a.target, h = c[1][0], k = c[1][1], m = c[2][0], n = c[2][1];
            a = (f[0][0] -
                x[0]) / g;
            var p = -(f[0][1] - x[1]) / g, v = (f[1][0] - x[0]) / g, J = -(f[1][1] - x[1]) / g, ua = (f[2][0] - x[0]) / g, Ta = -(f[2][1] - x[1]) / g, f = c[0][0], c = c[0][1], h = h - f, k = k - c, m = m - f, n = n - c;
            a:{
                h = [[h, k, 0, 0, v - a], [m, n, 0, 0, ua - a], [0, 0, h, k, J - p], [0, 0, m, n, Ta - p]];
                k = h.length;
                for (m = 0; m < k; m++) {
                    for (var n = m, kb = Math.abs(h[m][m]), Ka = m + 1; Ka < k; Ka++) {
                        var Ia = Math.abs(h[Ka][m]);
                        Ia > kb && (kb = Ia, n = Ka)
                    }
                    if (0 === kb) {
                        h = null;
                        break a
                    }
                    kb = h[n];
                    h[n] = h[m];
                    h[m] = kb;
                    for (n = m + 1; n < k; n++)for (kb = -h[n][m] / h[m][m], Ka = m; Ka < k + 1; Ka++)h[n][Ka] = m == Ka ? 0 : h[n][Ka] + kb * h[m][Ka]
                }
                m = Array(k);
                for (n = k - 1; 0 <= n; n--)for (m[n] = h[n][k] / h[n][n], kb = n - 1; 0 <= kb; kb--)h[kb][k] -= h[kb][n] * m[n];
                h = m
            }
            h && (q.save(), q.beginPath(), el ? (m = (a + v + ua) / 3, n = (p + J + Ta) / 3, k = kl(m, n, a, p), v = kl(m, n, v, J), ua = kl(m, n, ua, Ta), q.moveTo(k[0], k[1]), q.lineTo(v[0], v[1]), q.lineTo(ua[0], ua[1])) : (q.moveTo(a, p), q.lineTo(v, J), q.lineTo(ua, Ta)), q.closePath(), q.clip(), q.transform(h[0], h[2], h[1], h[3], a, p), q.translate(r[0] - f, r[3] - c), q.scale(e / d, -e / d), q.drawImage(u.canvas, 0, 0), q.restore())
        });
        p && (q.save(), q.strokeStyle = "black", q.lineWidth = 1, k.f.forEach(function (a) {
            var c =
                a.target;
            a = (c[0][0] - x[0]) / g;
            var d = -(c[0][1] - x[1]) / g, e = (c[1][0] - x[0]) / g, f = -(c[1][1] - x[1]) / g, h = (c[2][0] - x[0]) / g, c = -(c[2][1] - x[1]) / g;
            q.beginPath();
            q.moveTo(a, d);
            q.lineTo(e, f);
            q.lineTo(h, c);
            q.closePath();
            q.stroke()
        }), q.restore());
        return q.canvas
    };
    function ml(a, c, d, e, f) {
        this.g = a;
        this.c = c;
        var g = {}, h = $c(this.c, this.g);
        this.a = function (a) {
            var c = a[0] + "/" + a[1];
            g[c] || (g[c] = h(a));
            return g[c]
        };
        this.i = e;
        this.s = f * f;
        this.f = [];
        this.o = !1;
        this.j = this.g.a && !!e && !!this.g.O() && rc(e) == rc(this.g.O());
        this.b = this.g.O() ? rc(this.g.O()) : null;
        this.l = this.c.O() ? rc(this.c.O()) : null;
        a = oc(d);
        c = nc(d);
        e = mc(d);
        d = lc(d);
        f = this.a(a);
        var k = this.a(c), m = this.a(e), n = this.a(d);
        nl(this, a, c, e, d, f, k, m, n, 10);
        if (this.o) {
            var p = Infinity;
            this.f.forEach(function (a) {
                p = Math.min(p, a.source[0][0],
                    a.source[1][0], a.source[2][0])
            });
            this.f.forEach(function (a) {
                if (Math.max(a.source[0][0], a.source[1][0], a.source[2][0]) - p > this.b / 2) {
                    var c = [[a.source[0][0], a.source[0][1]], [a.source[1][0], a.source[1][1]], [a.source[2][0], a.source[2][1]]];
                    c[0][0] - p > this.b / 2 && (c[0][0] -= this.b);
                    c[1][0] - p > this.b / 2 && (c[1][0] -= this.b);
                    c[2][0] - p > this.b / 2 && (c[2][0] -= this.b);
                    Math.max(c[0][0], c[1][0], c[2][0]) - Math.min(c[0][0], c[1][0], c[2][0]) < this.b / 2 && (a.source = c)
                }
            }, this)
        }
        g = {}
    }

    function nl(a, c, d, e, f, g, h, k, m, n) {
        var p = Vb([g, h, k, m]), q = a.b ? rc(p) / a.b : null, r = a.g.a && .5 < q && 1 > q, u = !1;
        if (0 < n) {
            if (a.c.g && a.l)var v = Vb([c, d, e, f]), u = u | .25 < rc(v) / a.l;
            !r && a.g.g && q && (u |= .25 < q)
        }
        if (u || !a.i || wc(p, a.i)) {
            if (!(u || isFinite(g[0]) && isFinite(g[1]) && isFinite(h[0]) && isFinite(h[1]) && isFinite(k[0]) && isFinite(k[1]) && isFinite(m[0]) && isFinite(m[1])))if (0 < n)u = !0; else return;
            if (0 < n && (u || (q = a.a([(c[0] + e[0]) / 2, (c[1] + e[1]) / 2]), p = r ? (Ja(g[0], a.b) + Ja(k[0], a.b)) / 2 - Ja(q[0], a.b) : (g[0] + k[0]) / 2 - q[0], q = (g[1] + k[1]) / 2 - q[1],
                    u = p * p + q * q > a.s), u)) {
                Math.abs(c[0] - e[0]) <= Math.abs(c[1] - e[1]) ? (r = [(d[0] + e[0]) / 2, (d[1] + e[1]) / 2], p = a.a(r), q = [(f[0] + c[0]) / 2, (f[1] + c[1]) / 2], u = a.a(q), nl(a, c, d, r, q, g, h, p, u, n - 1), nl(a, q, r, e, f, u, p, k, m, n - 1)) : (r = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2], p = a.a(r), q = [(e[0] + f[0]) / 2, (e[1] + f[1]) / 2], u = a.a(q), nl(a, c, r, q, f, g, p, u, m, n - 1), nl(a, r, d, e, q, p, h, k, u, n - 1));
                return
            }
            if (r) {
                if (!a.j)return;
                a.o = !0
            }
            a.f.push({source: [g, k, m], target: [c, e, f]});
            a.f.push({source: [g, h, k], target: [c, d, e]})
        }
    }

    function pl(a) {
        var c = Wb();
        a.f.forEach(function (a) {
            a = a.source;
            Xb(c, a[0]);
            Xb(c, a[1]);
            Xb(c, a[2])
        });
        return c
    };
    function ql(a, c, d, e, f, g) {
        this.v = c;
        this.s = a.O();
        var h = c.O(), k = h ? vc(d, h) : d, h = jl(a, c, tc(k), e);
        this.o = new ml(a, c, k, this.s, .5 * h);
        this.c = e;
        this.g = d;
        a = pl(this.o);
        this.j = (this.nb = g(a, h, f)) ? this.nb.f : 1;
        this.vd = this.i = null;
        f = 2;
        g = [];
        this.nb && (f = 0, g = this.nb.l);
        fi.call(this, d, e, this.j, f, g)
    }

    y(ql, fi);
    ql.prototype.fa = function () {
        1 == this.state && (Xa(this.vd), this.vd = null);
        ql.ia.fa.call(this)
    };
    ql.prototype.a = function () {
        return this.i
    };
    ql.prototype.ud = function () {
        var a = this.nb.V();
        2 == a && (this.i = ll(rc(this.g) / this.c, sc(this.g) / this.c, this.j, this.nb.$(), 0, this.c, this.g, this.o, [{
            extent: this.nb.O(),
            image: this.nb.a()
        }], 0));
        this.state = a;
        gi(this)
    };
    ql.prototype.load = function () {
        if (0 == this.state) {
            this.state = 1;
            gi(this);
            var a = this.nb.V();
            2 == a || 3 == a ? this.ud() : (this.vd = C(this.nb, "change", function () {
                var a = this.nb.V();
                if (2 == a || 3 == a)Xa(this.vd), this.vd = null, this.ud()
            }, this), this.nb.load())
        }
    };
    function rl(a) {
        Vf.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            state: a.state
        });
        this.M = void 0 !== a.resolutions ? a.resolutions : null;
        this.a = null;
        this.na = 0
    }

    y(rl, Vf);
    function sl(a, c) {
        if (a.M) {
            var d = vb(a.M, c, 0);
            c = a.M[d]
        }
        return c
    }

    rl.prototype.B = function (a, c, d, e) {
        var f = this.f;
        if (f && e && !Zc(f, e)) {
            if (this.a) {
                if (this.na == this.g && Zc(this.a.v, e) && this.a.$() == c && this.a.f == d && ic(this.a.O(), a))return this.a;
                fb(this.a);
                this.a = null
            }
            this.a = new ql(f, e, a, c, d, function (a, c, d) {
                return this.Hc(a, c, d, f)
            }.bind(this));
            this.na = this.g;
            return this.a
        }
        f && (e = f);
        return this.Hc(a, c, d, e)
    };
    rl.prototype.o = function (a) {
        a = a.target;
        switch (a.V()) {
            case 1:
                this.b(new tl(ul, a));
                break;
            case 2:
                this.b(new tl(vl, a));
                break;
            case 3:
                this.b(new tl(wl, a))
        }
    };
    function xl(a, c) {
        a.a().src = c
    }

    function tl(a, c) {
        gb.call(this, a);
        this.image = c
    }

    y(tl, gb);
    var ul = "imageloadstart", vl = "imageloadend", wl = "imageloaderror";

    function yl(a) {
        rl.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: a.projection,
            resolutions: a.resolutions,
            state: a.state
        });
        this.ea = a.canvasFunction;
        this.T = null;
        this.Y = 0;
        this.ta = void 0 !== a.ratio ? a.ratio : 1.5
    }

    y(yl, rl);
    yl.prototype.Hc = function (a, c, d, e) {
        c = sl(this, c);
        var f = this.T;
        if (f && this.Y == this.g && f.$() == c && f.f == d && cc(f.O(), a))return f;
        a = a.slice();
        yc(a, this.ta);
        (e = this.ea(a, c, d, [rc(a) / c * d, sc(a) / c * d], e)) && (f = new dl(a, c, d, this.l, e));
        this.T = f;
        this.Y = this.g;
        return f
    };
    function zl(a) {
        pb.call(this);
        this.i = void 0;
        this.a = "geometry";
        this.c = null;
        this.l = void 0;
        this.f = null;
        C(this, rb(this.a), this.Wd, this);
        void 0 !== a && (a instanceof dd || !a ? this.Ta(a) : this.C(a))
    }

    y(zl, pb);
    l = zl.prototype;
    l.clone = function () {
        var a = new zl(this.L());
        a.zc(this.a);
        var c = this.W();
        c && a.Ta(c.clone());
        (c = this.c) && a.nf(c);
        return a
    };
    l.W = function () {
        return this.get(this.a)
    };
    l.Wa = function () {
        return this.i
    };
    l.Wj = function () {
        return this.a
    };
    l.Fl = function () {
        return this.c
    };
    l.$b = function () {
        return this.l
    };
    l.Gl = function () {
        this.u()
    };
    l.Wd = function () {
        this.f && (Xa(this.f), this.f = null);
        var a = this.W();
        a && (this.f = C(a, "change", this.Gl, this));
        this.u()
    };
    l.Ta = function (a) {
        this.set(this.a, a)
    };
    l.nf = function (a) {
        this.l = (this.c = a) ? Al(a) : void 0;
        this.u()
    };
    l.hc = function (a) {
        this.i = a;
        this.u()
    };
    l.zc = function (a) {
        cb(this, rb(this.a), this.Wd, this);
        this.a = a;
        C(this, rb(this.a), this.Wd, this);
        this.Wd()
    };
    function Al(a) {
        if (!ga(a)) {
            var c;
            c = Array.isArray(a) ? a : [a];
            a = function () {
                return c
            }
        }
        return a
    };
    function Bl(a, c, d, e, f) {
        Qf.call(this, a, c);
        this.g = Mg();
        this.l = e;
        this.c = null;
        this.f = {bd: !1, Pf: null, Xh: -1, Qf: -1, td: null, oi: []};
        this.v = f;
        this.j = d
    }

    y(Bl, Qf);
    l = Bl.prototype;
    l.ab = function () {
        return -1 == this.f.Qf ? null : this.g.canvas
    };
    l.Ql = function () {
        return this.l
    };
    l.gb = function () {
        return this.j
    };
    l.load = function () {
        0 == this.state && (this.state = 1, Rf(this), this.v(this, this.j), this.s(null, NaN, null))
    };
    l.bi = function (a) {
        this.c = a;
        this.state = 2;
        Rf(this)
    };
    l.rf = function (a) {
        this.o = a
    };
    l.fi = function (a) {
        this.s = a
    };
    var Cl = document.implementation.createDocument("", "", null);

    function Dl(a, c) {
        return Cl.createElementNS(a, c)
    }

    function El(a, c) {
        return Fl(a, c, []).join("")
    }

    function Fl(a, c, d) {
        if (4 == a.nodeType || 3 == a.nodeType)c ? d.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : d.push(a.nodeValue); else for (a = a.firstChild; a; a = a.nextSibling)Fl(a, c, d);
        return d
    }

    function Gl(a) {
        return a instanceof Document
    }

    function Hl(a) {
        return a instanceof Node
    }

    function Il(a) {
        return (new DOMParser).parseFromString(a, "application/xml")
    }

    function Jl(a, c) {
        return function (d, e) {
            var f = a.call(c, d, e);
            void 0 !== f && xb(e[e.length - 1], f)
        }
    }

    function Kl(a, c) {
        return function (d, e) {
            var f = a.call(void 0 !== c ? c : this, d, e);
            void 0 !== f && e[e.length - 1].push(f)
        }
    }

    function Ll(a, c) {
        return function (d, e) {
            var f = a.call(void 0 !== c ? c : this, d, e);
            void 0 !== f && (e[e.length - 1] = f)
        }
    }

    function Ml(a) {
        return function (c, d) {
            var e = a.call(this, c, d);
            if (void 0 !== e) {
                var f = d[d.length - 1], g = c.localName, h;
                g in f ? h = f[g] : h = f[g] = [];
                h.push(e)
            }
        }
    }

    function K(a, c) {
        return function (d, e) {
            var f = a.call(this, d, e);
            void 0 !== f && (e[e.length - 1][void 0 !== c ? c : d.localName] = f)
        }
    }

    function M(a, c) {
        return function (d, e, f) {
            a.call(void 0 !== c ? c : this, d, e, f);
            f[f.length - 1].node.appendChild(d)
        }
    }

    function Nl(a) {
        var c, d;
        return function (e, f, g) {
            if (void 0 === c) {
                c = {};
                var h = {};
                h[e.localName] = a;
                c[e.namespaceURI] = h;
                d = Ol(e.localName)
            }
            Pl(c, d, f, g)
        }
    }

    function Ol(a, c) {
        return function (d, e, f) {
            d = e[e.length - 1].node;
            e = a;
            void 0 === e && (e = f);
            f = c;
            void 0 === c && (f = d.namespaceURI);
            return Dl(f, e)
        }
    }

    var Ql = Ol();

    function Rl(a, c) {
        for (var d = c.length, e = Array(d), f = 0; f < d; ++f)e[f] = a[c[f]];
        return e
    }

    function N(a, c, d) {
        d = void 0 !== d ? d : {};
        var e, f;
        e = 0;
        for (f = a.length; e < f; ++e)d[a[e]] = c;
        return d
    }

    function Sl(a, c, d, e) {
        for (c = c.firstElementChild; c; c = c.nextElementSibling) {
            var f = a[c.namespaceURI];
            void 0 !== f && (f = f[c.localName], void 0 !== f && f.call(e, c, d))
        }
    }

    function P(a, c, d, e, f) {
        e.push(a);
        Sl(c, d, e, f);
        return e.pop()
    }

    function Pl(a, c, d, e, f, g) {
        for (var h = (void 0 !== f ? f : d).length, k, m, n = 0; n < h; ++n)k = d[n], void 0 !== k && (m = c.call(g, k, e, void 0 !== f ? f[n] : void 0), void 0 !== m && a[m.namespaceURI][m.localName].call(g, m, k, e))
    }

    function Tl(a, c, d, e, f, g, h) {
        f.push(a);
        Pl(c, d, e, f, g, h);
        f.pop()
    };
    function Ul(a, c, d, e) {
        return function (f, g, h) {
            var k = new XMLHttpRequest;
            k.open("GET", ga(a) ? a(f, g, h) : a, !0);
            "arraybuffer" == c.X() && (k.responseType = "arraybuffer");
            k.onload = function () {
                if (200 <= k.status && 300 > k.status) {
                    var a = c.X(), f;
                    "json" == a || "text" == a ? f = k.responseText : "xml" == a ? (f = k.responseXML) || (f = Il(k.responseText)) : "arraybuffer" == a && (f = k.response);
                    f && d.call(this, c.Ca(f, {featureProjection: h}), c.Oa(f))
                } else e.call(this)
            }.bind(this);
            k.send()
        }
    }

    function Vl(a, c) {
        return Ul(a, c, function (a, c) {
            this.rf(c);
            this.bi(a)
        }, function () {
            this.state = 3;
            Rf(this)
        })
    }

    function Wl(a, c) {
        return Ul(a, c, function (a) {
            this.Ec(a)
        }, pa)
    };
    function Xl() {
        return [[-Infinity, -Infinity, Infinity, Infinity]]
    };
    var Yl, Zl, $l, am;
    (function () {
        var a = {ha: {}};
        (function () {
            function c(a, d) {
                if (!(this instanceof c))return new c(a, d);
                this.Pe = Math.max(4, a || 9);
                this.dg = Math.max(2, Math.ceil(.4 * this.Pe));
                d && this.hj(d);
                this.clear()
            }

            function d(a, c) {
                a.bbox = e(a, 0, a.children.length, c)
            }

            function e(a, c, d, e) {
                for (var g = [Infinity, Infinity, -Infinity, -Infinity], h; c < d; c++)h = a.children[c], f(g, a.Ja ? e(h) : h.bbox);
                return g
            }

            function f(a, c) {
                a[0] = Math.min(a[0], c[0]);
                a[1] = Math.min(a[1], c[1]);
                a[2] = Math.max(a[2], c[2]);
                a[3] = Math.max(a[3], c[3])
            }

            function g(a, c) {
                return a.bbox[0] -
                    c.bbox[0]
            }

            function h(a, c) {
                return a.bbox[1] - c.bbox[1]
            }

            function k(a) {
                return (a[2] - a[0]) * (a[3] - a[1])
            }

            function m(a) {
                return a[2] - a[0] + (a[3] - a[1])
            }

            function n(a, c) {
                return a[0] <= c[0] && a[1] <= c[1] && c[2] <= a[2] && c[3] <= a[3]
            }

            function p(a, c) {
                return c[0] <= a[2] && c[1] <= a[3] && c[2] >= a[0] && c[3] >= a[1]
            }

            function q(a, c, d, e, f) {
                for (var g = [c, d], h; g.length;)d = g.pop(), c = g.pop(), d - c <= e || (h = c + Math.ceil((d - c) / e / 2) * e, r(a, c, d, h, f), g.push(c, h, h, d))
            }

            function r(a, c, d, e, f) {
                for (var g, h, k, m, n; d > c;) {
                    600 < d - c && (g = d - c + 1, h = e - c + 1, k = Math.log(g),
                        m = .5 * Math.exp(2 * k / 3), n = .5 * Math.sqrt(k * m * (g - m) / g) * (0 > h - g / 2 ? -1 : 1), k = Math.max(c, Math.floor(e - h * m / g + n)), h = Math.min(d, Math.floor(e + (g - h) * m / g + n)), r(a, k, h, e, f));
                    g = a[e];
                    h = c;
                    m = d;
                    u(a, c, e);
                    for (0 < f(a[d], g) && u(a, c, d); h < m;) {
                        u(a, h, m);
                        h++;
                        for (m--; 0 > f(a[h], g);)h++;
                        for (; 0 < f(a[m], g);)m--
                    }
                    0 === f(a[c], g) ? u(a, c, m) : (m++, u(a, m, d));
                    m <= e && (c = m + 1);
                    e <= m && (d = m - 1)
                }
            }

            function u(a, c, d) {
                var e = a[c];
                a[c] = a[d];
                a[d] = e
            }

            c.prototype = {
                all: function () {
                    return this.Zf(this.data, [])
                }, search: function (a) {
                    var c = this.data, d = [], e = this.ib;
                    if (!p(a, c.bbox))return d;
                    for (var f = [], g, h, k, m; c;) {
                        g = 0;
                        for (h = c.children.length; g < h; g++)k = c.children[g], m = c.Ja ? e(k) : k.bbox, p(a, m) && (c.Ja ? d.push(k) : n(a, m) ? this.Zf(k, d) : f.push(k));
                        c = f.pop()
                    }
                    return d
                }, load: function (a) {
                    if (!a || !a.length)return this;
                    if (a.length < this.dg) {
                        for (var c = 0, d = a.length; c < d; c++)this.za(a[c]);
                        return this
                    }
                    a = this.ag(a.slice(), 0, a.length - 1, 0);
                    this.data.children.length ? this.data.height === a.height ? this.fg(this.data, a) : (this.data.height < a.height && (c = this.data, this.data = a, a = c), this.cg(a, this.data.height - a.height - 1,
                        !0)) : this.data = a;
                    return this
                }, za: function (a) {
                    a && this.cg(a, this.data.height - 1);
                    return this
                }, clear: function () {
                    this.data = {children: [], height: 1, bbox: [Infinity, Infinity, -Infinity, -Infinity], Ja: !0};
                    return this
                }, remove: function (a) {
                    if (!a)return this;
                    for (var c = this.data, d = this.ib(a), e = [], f = [], g, h, k, m; c || e.length;) {
                        c || (c = e.pop(), h = e[e.length - 1], g = f.pop(), m = !0);
                        if (c.Ja && (k = c.children.indexOf(a), -1 !== k)) {
                            c.children.splice(k, 1);
                            e.push(c);
                            this.fj(e);
                            break
                        }
                        m || c.Ja || !n(c.bbox, d) ? h ? (g++, c = h.children[g], m = !1) : c = null :
                            (e.push(c), f.push(g), g = 0, h = c, c = c.children[0])
                    }
                    return this
                }, ib: function (a) {
                    return a
                }, Re: function (a, c) {
                    return a[0] - c[0]
                }, Se: function (a, c) {
                    return a[1] - c[1]
                }, toJSON: function () {
                    return this.data
                }, Zf: function (a, c) {
                    for (var d = []; a;)a.Ja ? c.push.apply(c, a.children) : d.push.apply(d, a.children), a = d.pop();
                    return c
                }, ag: function (a, c, e, f) {
                    var g = e - c + 1, h = this.Pe, k;
                    if (g <= h)return k = {
                        children: a.slice(c, e + 1),
                        height: 1,
                        bbox: null,
                        Ja: !0
                    }, d(k, this.ib), k;
                    f || (f = Math.ceil(Math.log(g) / Math.log(h)), h = Math.ceil(g / Math.pow(h, f - 1)));
                    k = {children: [], height: f, bbox: null, Ja: !1};
                    var g = Math.ceil(g / h), h = g * Math.ceil(Math.sqrt(h)), m, n, p;
                    for (q(a, c, e, h, this.Re); c <= e; c += h)for (n = Math.min(c + h - 1, e), q(a, c, n, g, this.Se), m = c; m <= n; m += g)p = Math.min(m + g - 1, n), k.children.push(this.ag(a, m, p, f - 1));
                    d(k, this.ib);
                    return k
                }, ej: function (a, c, d, e) {
                    for (var f, g, h, m, n, p, q, r; ;) {
                        e.push(c);
                        if (c.Ja || e.length - 1 === d)break;
                        q = r = Infinity;
                        f = 0;
                        for (g = c.children.length; f < g; f++)h = c.children[f], n = k(h.bbox), p = h.bbox, p = (Math.max(p[2], a[2]) - Math.min(p[0], a[0])) * (Math.max(p[3], a[3]) -
                            Math.min(p[1], a[1])) - n, p < r ? (r = p, q = n < q ? n : q, m = h) : p === r && n < q && (q = n, m = h);
                        c = m || c.children[0]
                    }
                    return c
                }, cg: function (a, c, d) {
                    var e = this.ib;
                    d = d ? a.bbox : e(a);
                    var e = [], g = this.ej(d, this.data, c, e);
                    g.children.push(a);
                    for (f(g.bbox, d); 0 <= c;)if (e[c].children.length > this.Pe)this.nj(e, c), c--; else break;
                    this.bj(d, e, c)
                }, nj: function (a, c) {
                    var e = a[c], f = e.children.length, g = this.dg;
                    this.cj(e, g, f);
                    f = this.dj(e, g, f);
                    f = {children: e.children.splice(f, e.children.length - f), height: e.height, bbox: null, Ja: !1};
                    e.Ja && (f.Ja = !0);
                    d(e, this.ib);
                    d(f, this.ib);
                    c ? a[c - 1].children.push(f) : this.fg(e, f)
                }, fg: function (a, c) {
                    this.data = {children: [a, c], height: a.height + 1, bbox: null, Ja: !1};
                    d(this.data, this.ib)
                }, dj: function (a, c, d) {
                    var f, g, h, m, n, p, q;
                    n = p = Infinity;
                    for (f = c; f <= d - c; f++)g = e(a, 0, f, this.ib), h = e(a, f, d, this.ib), m = Math.max(0, Math.min(g[2], h[2]) - Math.max(g[0], h[0])) * Math.max(0, Math.min(g[3], h[3]) - Math.max(g[1], h[1])), g = k(g) + k(h), m < n ? (n = m, q = f, p = g < p ? g : p) : m === n && g < p && (p = g, q = f);
                    return q
                }, cj: function (a, c, d) {
                    var e = a.Ja ? this.Re : g, f = a.Ja ? this.Se : h, k = this.$f(a,
                        c, d, e);
                    c = this.$f(a, c, d, f);
                    k < c && a.children.sort(e)
                }, $f: function (a, c, d, g) {
                    a.children.sort(g);
                    g = this.ib;
                    var h = e(a, 0, c, g), k = e(a, d - c, d, g), n = m(h) + m(k), p, q;
                    for (p = c; p < d - c; p++)q = a.children[p], f(h, a.Ja ? g(q) : q.bbox), n += m(h);
                    for (p = d - c - 1; p >= c; p--)q = a.children[p], f(k, a.Ja ? g(q) : q.bbox), n += m(k);
                    return n
                }, bj: function (a, c, d) {
                    for (; 0 <= d; d--)f(c[d].bbox, a)
                }, fj: function (a) {
                    for (var c = a.length - 1, e; 0 <= c; c--)0 === a[c].children.length ? 0 < c ? (e = a[c - 1].children, e.splice(e.indexOf(a[c]), 1)) : this.clear() : d(a[c], this.ib)
                }, hj: function (a) {
                    var c =
                        ["return a", " - b", ";"];
                    this.Re = new Function("a", "b", c.join(a[0]));
                    this.Se = new Function("a", "b", c.join(a[1]));
                    this.ib = new Function("a", "return [a" + a.join(", a") + "];")
                }
            };
            "undefined" !== typeof a ? a.ha = c : "undefined" !== typeof self ? self.b = c : window.b = c
        })();
        Yl = a.ha
    })();
    function bm(a) {
        this.a = Yl(a);
        this.b = {}
    }

    l = bm.prototype;
    l.za = function (a, c) {
        var d = [a[0], a[1], a[2], a[3], c];
        this.a.za(d);
        this.b[w(c)] = d
    };
    l.load = function (a, c) {
        for (var d = Array(c.length), e = 0, f = c.length; e < f; e++) {
            var g = a[e], h = c[e], g = [g[0], g[1], g[2], g[3], h];
            d[e] = g;
            this.b[w(h)] = g
        }
        this.a.load(d)
    };
    l.remove = function (a) {
        a = w(a);
        var c = this.b[a];
        delete this.b[a];
        return null !== this.a.remove(c)
    };
    function cm(a, c, d) {
        var e = w(d);
        ic(a.b[e].slice(0, 4), c) || (a.remove(d), a.za(c, d))
    }

    function dm(a) {
        return a.a.all().map(function (a) {
            return a[4]
        })
    }

    function em(a, c) {
        return a.a.search(c).map(function (a) {
            return a[4]
        })
    }

    l.forEach = function (a, c) {
        return fm(dm(this), a, c)
    };
    function gm(a, c, d, e) {
        return fm(em(a, c), d, e)
    }

    function fm(a, c, d) {
        for (var e, f = 0, g = a.length; f < g && !(e = c.call(d, a[f])); f++);
        return e
    }

    l.Sa = function () {
        return Sa(this.b)
    };
    l.clear = function () {
        this.a.clear();
        this.b = {}
    };
    l.O = function () {
        return this.a.data.bbox
    };
    function Q(a) {
        a = a || {};
        Vf.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: void 0,
            state: "ready",
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.S = pa;
        this.na = a.format;
        this.T = a.url;
        void 0 !== a.loader ? this.S = a.loader : void 0 !== this.T && (this.S = Wl(this.T, this.na));
        this.pb = void 0 !== a.strategy ? a.strategy : Xl;
        var c = void 0 !== a.useSpatialIndex ? a.useSpatialIndex : !0;
        this.a = c ? new bm : null;
        this.Y = new bm;
        this.i = {};
        this.o = {};
        this.j = {};
        this.s = {};
        this.c = null;
        var d, e;
        a.features instanceof we ? (d = a.features, e = d.a) : Array.isArray(a.features) &&
        (e = a.features);
        c || void 0 !== d || (d = new we(e));
        void 0 !== e && hm(this, e);
        void 0 !== d && im(this, d)
    }

    y(Q, Vf);
    l = Q.prototype;
    l.qb = function (a) {
        var c = w(a).toString();
        if (jm(this, c, a)) {
            km(this, c, a);
            var d = a.W();
            d ? (c = d.O(), this.a && this.a.za(c, a)) : this.i[c] = a;
            this.b(new lm("addfeature", a))
        }
        this.u()
    };
    function km(a, c, d) {
        a.s[c] = [C(d, "change", a.zh, a), C(d, "propertychange", a.zh, a)]
    }

    function jm(a, c, d) {
        var e = !0, f = d.Wa();
        void 0 !== f ? f.toString() in a.o ? e = !1 : a.o[f.toString()] = d : a.j[c] = d;
        return e
    }

    l.Ec = function (a) {
        hm(this, a);
        this.u()
    };
    function hm(a, c) {
        var d, e, f, g, h = [], k = [], m = [];
        e = 0;
        for (f = c.length; e < f; e++)g = c[e], d = w(g).toString(), jm(a, d, g) && k.push(g);
        e = 0;
        for (f = k.length; e < f; e++) {
            g = k[e];
            d = w(g).toString();
            km(a, d, g);
            var n = g.W();
            n ? (d = n.O(), h.push(d), m.push(g)) : a.i[d] = g
        }
        a.a && a.a.load(h, m);
        e = 0;
        for (f = k.length; e < f; e++)a.b(new lm("addfeature", k[e]))
    }

    function im(a, c) {
        var d = !1;
        C(a, "addfeature", function (a) {
            d || (d = !0, c.push(a.feature), d = !1)
        });
        C(a, "removefeature", function (a) {
            d || (d = !0, c.remove(a.feature), d = !1)
        });
        C(c, "add", function (a) {
            d || (a = a.element, d = !0, this.qb(a), d = !1)
        }, a);
        C(c, "remove", function (a) {
            d || (a = a.element, d = !0, this.kb(a), d = !1)
        }, a);
        a.c = c
    }

    l.clear = function (a) {
        if (a) {
            for (var c in this.s)this.s[c].forEach(Xa);
            this.c || (this.s = {}, this.o = {}, this.j = {})
        } else if (this.a) {
            this.a.forEach(this.Of, this);
            for (var d in this.i)this.Of(this.i[d])
        }
        this.c && this.c.clear();
        this.a && this.a.clear();
        this.Y.clear();
        this.i = {};
        this.b(new lm("clear"));
        this.u()
    };
    l.sg = function (a, c) {
        if (this.a)return this.a.forEach(a, c);
        if (this.c)return this.c.forEach(a, c)
    };
    function mm(a, c, d) {
        a.tb([c[0], c[1], c[0], c[1]], function (a) {
            if (a.W().og(c))return d.call(void 0, a)
        })
    }

    l.tb = function (a, c, d) {
        if (this.a)return gm(this.a, a, c, d);
        if (this.c)return this.c.forEach(c, d)
    };
    l.tg = function (a, c, d) {
        return this.tb(a, function (e) {
            if (e.W().Ia(a) && (e = c.call(d, e)))return e
        })
    };
    l.Ag = function () {
        return this.c
    };
    l.je = function () {
        var a;
        this.c ? a = this.c.a : this.a && (a = dm(this.a), Sa(this.i) || xb(a, Ra(this.i)));
        return a
    };
    l.zg = function (a) {
        var c = [];
        mm(this, a, function (a) {
            c.push(a)
        });
        return c
    };
    l.af = function (a) {
        return em(this.a, a)
    };
    l.vg = function (a, c) {
        var d = a[0], e = a[1], f = null, g = [NaN, NaN], h = Infinity, k = [-Infinity, -Infinity, Infinity, Infinity], m = c ? c : Ac;
        gm(this.a, k, function (a) {
            if (m(a)) {
                var c = a.W(), q = h;
                h = c.rb(d, e, g, h);
                h < q && (f = a, a = Math.sqrt(h), k[0] = d - a, k[1] = e - a, k[2] = d + a, k[3] = e + a)
            }
        });
        return f
    };
    l.O = function () {
        return this.a.O()
    };
    l.yg = function (a) {
        a = this.o[a.toString()];
        return void 0 !== a ? a : null
    };
    l.xh = function () {
        return this.na
    };
    l.yh = function () {
        return this.T
    };
    l.zh = function (a) {
        a = a.target;
        var c = w(a).toString(), d = a.W();
        d ? (d = d.O(), c in this.i ? (delete this.i[c], this.a && this.a.za(d, a)) : this.a && cm(this.a, d, a)) : c in this.i || (this.a && this.a.remove(a), this.i[c] = a);
        d = a.Wa();
        void 0 !== d ? (d = d.toString(), c in this.j ? (delete this.j[c], this.o[d] = a) : this.o[d] !== a && (nm(this, a), this.o[d] = a)) : c in this.j || (nm(this, a), this.j[c] = a);
        this.u();
        this.b(new lm("changefeature", a))
    };
    l.Sa = function () {
        return this.a.Sa() && Sa(this.i)
    };
    l.Kc = function (a, c, d) {
        var e = this.Y;
        a = this.pb(a, c);
        var f, g;
        f = 0;
        for (g = a.length; f < g; ++f) {
            var h = a[f];
            gm(e, h, function (a) {
                return cc(a.extent, h)
            }) || (this.S.call(this, h, c, d), e.za(h, {extent: h.slice()}))
        }
    };
    l.kb = function (a) {
        var c = w(a).toString();
        c in this.i ? delete this.i[c] : this.a && this.a.remove(a);
        this.Of(a);
        this.u()
    };
    l.Of = function (a) {
        var c = w(a).toString();
        this.s[c].forEach(Xa);
        delete this.s[c];
        var d = a.Wa();
        void 0 !== d ? delete this.o[d.toString()] : delete this.j[c];
        this.b(new lm("removefeature", a))
    };
    function nm(a, c) {
        for (var d in a.o)if (a.o[d] === c) {
            delete a.o[d];
            break
        }
    }

    function lm(a, c) {
        gb.call(this, a);
        this.feature = c
    }

    y(lm, gb);
    function om(a) {
        this.c = a.source;
        this.xa = hd();
        this.i = Mg();
        this.j = [0, 0];
        this.v = null;
        yl.call(this, {
            attributions: a.attributions,
            canvasFunction: this.zj.bind(this),
            logo: a.logo,
            projection: a.projection,
            ratio: a.ratio,
            resolutions: a.resolutions,
            state: this.c.V()
        });
        this.S = null;
        this.s = void 0;
        this.sh(a.style);
        C(this.c, "change", this.Zm, this)
    }

    y(om, yl);
    l = om.prototype;
    l.zj = function (a, c, d, e, f) {
        var g = new Vk(.5 * c / d, a, c);
        this.c.Kc(a, c, f);
        var h = !1;
        this.c.tb(a, function (a) {
            var e;
            if (!(e = h)) {
                var f;
                (e = a.$b()) ? f = e.call(a, c) : this.s && (f = this.s(a, c));
                if (f) {
                    var p, q = !1;
                    Array.isArray(f) || (f = [f]);
                    e = 0;
                    for (p = f.length; e < p; ++e)q = bl(g, a, f[e], al(c, d), this.Ym, this) || q;
                    e = q
                } else e = !1
            }
            h = e
        }, this);
        Wk(g);
        if (h)return null;
        this.j[0] != e[0] || this.j[1] != e[1] ? (this.i.canvas.width = e[0], this.i.canvas.height = e[1], this.j[0] = e[0], this.j[1] = e[1]) : this.i.clearRect(0, 0, e[0], e[1]);
        a = pm(this, tc(a), c, d, e);
        g.Pa(this.i,
            d, a, 0, {});
        this.v = g;
        return this.i.canvas
    };
    l.oa = function (a, c, d, e, f) {
        if (this.v) {
            var g = {};
            return this.v.oa(a, c, 0, e, function (a) {
                var c = w(a).toString();
                if (!(c in g))return g[c] = !0, f(a)
            })
        }
    };
    l.Vm = function () {
        return this.c
    };
    l.Wm = function () {
        return this.S
    };
    l.Xm = function () {
        return this.s
    };
    function pm(a, c, d, e, f) {
        return hi(a.xa, f[0] / 2, f[1] / 2, e / d, -e / d, 0, -c[0], -c[1])
    }

    l.Ym = function () {
        this.u()
    };
    l.Zm = function () {
        Xf(this, this.c.V())
    };
    l.sh = function (a) {
        this.S = void 0 !== a ? a : nk;
        this.s = a ? lk(this.S) : void 0;
        this.u()
    };
    function qm(a) {
        Bk.call(this, a);
        this.f = null;
        this.s = hd();
        this.o = this.c = null
    }

    y(qm, Bk);
    qm.prototype.oa = function (a, c, d, e) {
        var f = this.a;
        return f.da().oa(a, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids, function (a) {
            return d.call(e, a, f)
        })
    };
    qm.prototype.xc = function (a, c, d, e) {
        if (this.f && this.f.a())if (this.a.da() instanceof om) {
            if (a = a.slice(), ji(c.pixelToCoordinateMatrix, a, a), this.oa(a, c, Ac, this))return d.call(e, this.a)
        } else if (this.c || (this.c = hd(), nd(this.s, this.c)), c = [0, 0], ji(this.c, a, c), this.o || (this.o = Mg(1, 1)), this.o.clearRect(0, 0, 1, 1), this.o.drawImage(this.f ? this.f.a() : null, c[0], c[1], 1, 1, 0, 0, 1, 1), 0 < this.o.getImageData(0, 0, 1, 1).data[3])return d.call(e, this.a)
    };
    qm.prototype.l = function (a, c) {
        var d = a.pixelRatio, e = a.viewState, f = e.center, g = e.resolution, h = this.a.da(), k = a.viewHints, m = a.extent;
        void 0 !== c.extent && (m = vc(m, c.extent));
        k[0] || k[1] || qc(m) || (e = h.B(m, g, d, e.projection)) && mi(this, e) && (this.f = e);
        if (this.f) {
            var e = this.f, k = e.O(), m = e.$(), n = e.f, g = d * m / (g * n);
            hi(this.s, d * a.size[0] / 2, d * a.size[1] / 2, g, g, 0, n * (k[0] - f[0]) / m, n * (f[1] - k[3]) / m);
            this.c = null;
            oi(a.attributions, e.l);
            pi(a, h)
        }
        return !!this.f
    };
    function rm(a) {
        Bk.call(this, a);
        this.c = Mg();
        this.o = null;
        this.j = Wb();
        this.S = [0, 0, 0];
        this.N = hd();
        this.M = 0
    }

    y(rm, Bk);
    rm.prototype.i = function (a, c, d) {
        var e = Ek(this, a, 0);
        Ck(this, "precompose", d, a, e);
        sm(this, d, a, c);
        Dk(this, d, a, e)
    };
    rm.prototype.l = function (a, c) {
        function d(a) {
            a = a.V();
            return 2 == a || 4 == a || 3 == a && !u
        }

        var e = a.pixelRatio, f = a.viewState, g = f.projection, h = this.a, k = h.da(), m = k.fb(g), n = gg(m, f.resolution, this.M), p = m.$(n), q = f.center;
        p == f.resolution ? (q = ri(q, p, a.size), f = uc(q, p, f.rotation, a.size)) : f = a.extent;
        void 0 !== c.extent && (f = vc(f, c.extent));
        if (qc(f))return !1;
        p = dg(m, f, p);
        q = {};
        q[n] = {};
        var r = this.Ld(k, g, q), u = h.c(), v = Wb(), x = new qe(0, 0, 0, 0), z, E, B, A;
        for (B = p.b; B <= p.a; ++B)for (A = p.g; A <= p.f; ++A)z = k.Wb(n, B, A, e, g), !d(z) && z.a && (z = z.a), d(z) ?
            q[n][z.ja.toString()] = z : (E = ag(m, z.ja, r, x, v), E || (z = cg(m, z.ja, x, v)) && r(n + 1, z));
        r = Object.keys(q).map(Number);
        r.sort(tb);
        var v = [], G, x = 0;
        for (B = r.length; x < B; ++x)for (G in z = r[x], A = q[z], A)z = A[G], 2 == z.V() && v.push(z);
        this.o = v;
        qi(a.usedTiles, k, n, p);
        si(a, k, m, e, g, f, n, h.f());
        ni(a, k);
        pi(a, k);
        return !0
    };
    rm.prototype.xc = function (a, c, d, e) {
        var f = this.c.canvas, g = c.size;
        f.width = g[0];
        f.height = g[1];
        this.i(c, ai(this.a), this.c);
        if (0 < this.c.getImageData(a[0], a[1], 1, 1).data[3])return d.call(e, this.a)
    };
    function sm(a, c, d, e) {
        var f = d.pixelRatio, g = d.viewState, h = g.center, k = g.projection, m = g.resolution, g = g.rotation, n = d.size, p = Math.round(f * n[0] / 2), q = Math.round(f * n[1] / 2), n = f / m, r = a.a, u = r.da(), v = u.Od(k), x = u.fb(k), r = lb(r, "render"), z = c, E, B, A, G;
        if (g || r)z = a.c, E = z.canvas, G = gg(x, m), A = u.Ud(G, f, k), G = Uf(x.Ha(G)), A = A[0] / G[0], m = c.canvas.width * A, B = c.canvas.height * A, G = Math.round(Math.sqrt(m * m + B * B)), E.width != G ? E.width = E.height = G : z.clearRect(0, 0, G, G), E = (G - m) / 2 / A, B = (G - B) / 2 / A, n *= A, p = Math.round(A * (p + E)), q = Math.round(A * (q + B));
        m = z.globalAlpha;
        z.globalAlpha = e.opacity;
        var O = a.o, L;
        e = u.ef(k) && 1 == e.opacity;
        e || (O.reverse(), L = []);
        for (var R = 0, Wa = O.length; R < Wa; ++R) {
            var J = O[R], ua = J.ja, Ta = x.Ba(ua, a.j), kb = ua[0], Ka = lc(x.Ba(x.kd(h, kb, a.S))), ua = Math.round(rc(Ta) * n), Ia = Math.round(sc(Ta) * n), xc = Math.round((Ta[0] - Ka[0]) * n / ua) * ua + p + Math.round((Ka[0] - h[0]) * n), Ta = Math.round((Ka[1] - Ta[3]) * n / Ia) * Ia + q + Math.round((h[1] - Ka[1]) * n);
            if (!e) {
                Ka = [xc, Ta, xc + ua, Ta + Ia];
                z.save();
                for (var Pc = 0, qt = L.length; Pc < qt; ++Pc) {
                    var Ze = L[Pc];
                    wc(Ka, Ze) && (z.beginPath(), z.moveTo(Ka[0],
                        Ka[1]), z.lineTo(Ka[0], Ka[3]), z.lineTo(Ka[2], Ka[3]), z.lineTo(Ka[2], Ka[1]), z.moveTo(Ze[0], Ze[1]), z.lineTo(Ze[2], Ze[1]), z.lineTo(Ze[2], Ze[3]), z.lineTo(Ze[0], Ze[3]), z.closePath(), z.clip())
                }
                L.push(Ka)
            }
            kb = u.Ud(kb, f, k);
            z.drawImage(J.ab(), v, v, kb[0], kb[1], xc, Ta, ua, Ia);
            e || z.restore()
        }
        r && (f = E - p / A + p, k = B - q / A + q, h = hi(a.N, G / 2 - f, G / 2 - k, n, -n, -g, -h[0] + f / n, -h[1] - k / n), Ck(a, "render", z, d, h));
        (g || r) && c.drawImage(z.canvas, -Math.round(E), -Math.round(B), G / A, G / A);
        z.globalAlpha = m
    };
    function tm(a) {
        Bk.call(this, a);
        this.c = !1;
        this.M = -1;
        this.B = NaN;
        this.v = Wb();
        this.o = this.U = null;
        this.j = Mg()
    }

    y(tm, Bk);
    tm.prototype.i = function (a, c, d) {
        var e = a.extent, f = a.pixelRatio, g = c.Lc ? a.skippedFeatureUids : {}, h = a.viewState, k = h.projection, h = h.rotation, m = k.O(), n = this.a.da(), p = Ek(this, a, 0);
        Ck(this, "precompose", d, a, p);
        var q = this.o;
        if (q && !q.Sa()) {
            var r;
            lb(this.a, "render") ? (this.j.canvas.width = d.canvas.width, this.j.canvas.height = d.canvas.height, r = this.j) : r = d;
            var u = r.globalAlpha;
            r.globalAlpha = c.opacity;
            c = a.size[0] * f;
            var v = a.size[1] * f;
            Zj(r, -h, c / 2, v / 2);
            q.Pa(r, f, p, h, g);
            if (n.N && k.a && !cc(m, e)) {
                for (var k = e[0], n = rc(m), x = 0; k <
                m[0];)--x, p = n * x, p = Ek(this, a, p), q.Pa(r, f, p, h, g), k += n;
                x = 0;
                for (k = e[2]; k > m[2];)++x, p = n * x, p = Ek(this, a, p), q.Pa(r, f, p, h, g), k -= n;
                p = Ek(this, a, 0)
            }
            Zj(r, h, c / 2, v / 2);
            r != d && (Ck(this, "render", r, a, p), d.drawImage(r.canvas, 0, 0));
            r.globalAlpha = u
        }
        Dk(this, d, a, p)
    };
    tm.prototype.oa = function (a, c, d, e) {
        if (this.o) {
            var f = this.a, g = {};
            return this.o.oa(a, c.viewState.resolution, c.viewState.rotation, {}, function (a) {
                var c = w(a).toString();
                if (!(c in g))return g[c] = !0, d.call(e, a, f)
            })
        }
    };
    tm.prototype.N = function () {
        li(this)
    };
    tm.prototype.l = function (a) {
        function c(a) {
            var c, e = a.$b();
            e ? c = e.call(a, n) : (e = d.i) && (c = e(a, n));
            if (c) {
                if (c) {
                    e = !1;
                    if (Array.isArray(c))for (var f = 0, g = c.length; f < g; ++f)e = bl(r, a, c[f], al(n, p), this.N, this) || e; else e = bl(r, a, c, al(n, p), this.N, this) || e;
                    a = e
                } else a = !1;
                this.c = this.c || a
            }
        }

        var d = this.a, e = d.da();
        oi(a.attributions, e.l);
        pi(a, e);
        var f = a.viewHints[0], g = a.viewHints[1], h = d.S, k = d.T;
        if (!this.c && !h && f || !k && g)return !0;
        var m = a.extent, k = a.viewState, f = k.projection, n = k.resolution, p = a.pixelRatio, g = d.g, q = d.a, h = pk(d);
        void 0 === h && (h = $k);
        m = Yb(m, q * n);
        q = k.projection.O();
        e.N && k.projection.a && !cc(q, a.extent) && (a = Math.max(rc(m) / 2, rc(q)), m[0] = q[0] - a, m[2] = q[2] + a);
        if (!this.c && this.B == n && this.M == g && this.U == h && cc(this.v, m))return !0;
        this.o = null;
        this.c = !1;
        var r = new Vk(.5 * n / p, m, n, d.a);
        e.Kc(m, n, f);
        if (h) {
            var u = [];
            e.tb(m, function (a) {
                u.push(a)
            }, this);
            u.sort(h);
            u.forEach(c, this)
        } else e.tb(m, c, this);
        Wk(r);
        this.B = n;
        this.M = g;
        this.U = h;
        this.v = m;
        this.o = r;
        return !0
    };
    function um(a, c) {
        var d = /\{z\}/g, e = /\{x\}/g, f = /\{y\}/g, g = /\{-y\}/g;
        return function (h) {
            if (h)return a.replace(d, h[0].toString()).replace(e, h[1].toString()).replace(f, function () {
                return (-h[2] - 1).toString()
            }).replace(g, function () {
                var a = c.a ? c.a[h[0]] : null;
                return (a.f - a.g + 1 + h[2]).toString()
            })
        }
    }

    function vm(a, c) {
        for (var d = a.length, e = Array(d), f = 0; f < d; ++f)e[f] = um(a[f], c);
        return wm(e)
    }

    function wm(a) {
        return 1 === a.length ? a[0] : function (c, d, e) {
            if (c)return a[Ja((c[1] << c[0]) + c[2], a.length)](c, d, e)
        }
    }

    function xm() {
    }

    function ym(a) {
        var c = [], d = /\{(\d)-(\d)\}/.exec(a) || /\{([a-z])-([a-z])\}/.exec(a);
        if (d) {
            var e = d[2].charCodeAt(0), f;
            for (f = d[1].charCodeAt(0); f <= e; ++f)c.push(a.replace(d[0], String.fromCharCode(f)))
        } else c.push(a);
        return c
    };
    function zm(a) {
        lg.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            extent: a.extent,
            logo: a.logo,
            opaque: a.opaque,
            projection: a.projection,
            state: a.state,
            tileGrid: a.tileGrid,
            tilePixelRatio: a.tilePixelRatio,
            wrapX: a.wrapX
        });
        this.tileLoadFunction = a.tileLoadFunction;
        this.tileUrlFunction = this.qc ? this.qc.bind(this) : xm;
        this.urls = null;
        a.urls ? this.Ua(a.urls) : a.url && this.Na(a.url);
        a.tileUrlFunction && this.La(a.tileUrlFunction)
    }

    y(zm, lg);
    l = zm.prototype;
    l.Xa = function () {
        return this.tileLoadFunction
    };
    l.Ya = function () {
        return this.tileUrlFunction
    };
    l.Za = function () {
        return this.urls
    };
    l.wh = function (a) {
        a = a.target;
        switch (a.V()) {
            case 1:
                this.b(new pg("tileloadstart", a));
                break;
            case 2:
                this.b(new pg("tileloadend", a));
                break;
            case 3:
                this.b(new pg("tileloaderror", a))
        }
    };
    l.cb = function (a) {
        this.a.clear();
        this.tileLoadFunction = a;
        this.u()
    };
    l.La = function (a, c) {
        this.tileUrlFunction = a;
        "undefined" !== typeof c ? ng(this, c) : this.u()
    };
    l.Na = function (a) {
        var c = this.urls = ym(a);
        this.La(this.qc ? this.qc.bind(this) : vm(c, this.tileGrid), a)
    };
    l.Ua = function (a) {
        this.urls = a;
        var c = a.join("\n");
        this.La(this.qc ? this.qc.bind(this) : vm(a, this.tileGrid), c)
    };
    l.Uf = function (a, c, d) {
        a = this.Ab(a, c, d);
        Lf(this.a, a) && this.a.get(a)
    };
    function Am(a) {
        zm.call(this, {
            attributions: a.attributions,
            cacheSize: void 0 !== a.cacheSize ? a.cacheSize : 128,
            extent: a.extent,
            logo: a.logo,
            opaque: !1,
            projection: a.projection,
            state: a.state,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction ? a.tileLoadFunction : Bm,
            tileUrlFunction: a.tileUrlFunction,
            tilePixelRatio: a.tilePixelRatio,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 === a.wrapX ? !0 : a.wrapX
        });
        this.c = a.format ? a.format : null;
        this.tileClass = a.tileClass ? a.tileClass : Bl
    }

    y(Am, zm);
    Am.prototype.Wb = function (a, c, d, e, f) {
        var g = this.Ab(a, c, d);
        if (Lf(this.a, g))return this.a.get(g);
        a = [a, c, d];
        e = (c = og(this, a, f)) ? this.tileUrlFunction(c, e, f) : void 0;
        e = new this.tileClass(a, void 0 !== e ? 0 : 4, void 0 !== e ? e : "", this.c, this.tileLoadFunction);
        C(e, "change", this.wh, this);
        this.a.set(g, e);
        return e
    };
    Am.prototype.Ud = function (a, c) {
        var d = Uf(this.tileGrid.Ha(a));
        return [d[0] * c, d[1] * c]
    };
    function Bm(a, c) {
        a.fi(Vl(c, a.l))
    };
    var Cm = {image: Fk, hybrid: ["Polygon", "LineString"]}, Dm = {hybrid: ["Image", "Text"], vector: Fk};

    function Em(a) {
        rm.call(this, a);
        this.U = !1;
        this.v = hd();
        this.M = "vector" == a.s ? 1 : 0
    }

    y(Em, rm);
    Em.prototype.i = function (a, c, d) {
        var e = Ek(this, a, 0);
        Ck(this, "precompose", d, a, e);
        var f = this.a.s;
        "vector" !== f && sm(this, d, a, c);
        if ("image" !== f) {
            var g = this.a, f = Dm[g.s], h = a.pixelRatio, k = c.Lc ? a.skippedFeatureUids : {}, m = a.viewState, n = m.center, p = m.rotation, q = a.size, m = h / m.resolution, r = g.da(), u = r.Xb(h), v = Ek(this, a, 0);
            lb(g, "render") ? (this.c.canvas.width = d.canvas.width, this.c.canvas.height = d.canvas.height, g = this.c) : g = d;
            var x = g.globalAlpha;
            g.globalAlpha = c.opacity;
            c = this.o;
            var r = r.tileGrid, z, E, B, A, G, O, L, R;
            E = 0;
            for (B =
                     c.length; E < B; ++E)A = c[E], L = A.f, G = r.Ba(A.ja, this.j), z = A.ja[0], O = "tile-pixels" == A.o.vb(), z = r.$(z), R = z / u, z = Math.round(h * q[0] / 2), A = Math.round(h * q[1] / 2), O ? (G = oc(G), G = hi(this.v, z, A, m * R, m * R, p, (G[0] - n[0]) / R, (n[1] - G[1]) / R)) : G = v, Zj(g, -p, z, A), L.td.Pa(g, h, G, p, k, f), Zj(g, p, z, A);
            g != d && (Ck(this, "render", g, a, v), d.drawImage(g.canvas, 0, 0));
            g.globalAlpha = x
        }
        Dk(this, d, a, e)
    };
    function Fm(a, c, d) {
        function e(a) {
            var c, d = a.$b();
            d ? c = d.call(a, v) : (d = f.i) && (c = d(a, v));
            if (c) {
                Array.isArray(c) || (c = [c]);
                var d = E, e = z;
                if (c) {
                    var g = !1;
                    if (Array.isArray(c))for (var h = 0, k = c.length; h < k; ++h)g = bl(e, a, c[h], d, this.B, this) || g; else g = bl(e, a, c, d, this.B, this) || g;
                    a = g
                } else a = !1;
                this.U = this.U || a;
                m.bd = m.bd || a
            }
        }

        var f = a.a, g = d.pixelRatio;
        d = d.viewState.projection;
        var h = f.g, k = pk(f) || null, m = c.f;
        if (m.bd || m.Xh != h || m.Pf != k) {
            m.td = null;
            m.bd = !1;
            var n = f.da(), p = n.tileGrid, q = c.ja, r = c.o, u = "tile-pixels" == r.vb(), v = p.$(q[0]),
                x;
            u ? (u = n = n.Xb(g), p = Uf(p.Ha(q[0])), p = [0, 0, p[0] * u, p[1] * u]) : (n = v, p = p.Ba(q), Zc(d, r) || (x = !0, c.rf(d)));
            m.bd = !1;
            var z = new Vk(0, p, n, f.a), E = al(n, g);
            c = c.c;
            k && k !== m.Pf && c.sort(k);
            p = 0;
            for (q = c.length; p < q; ++p)g = c[p], x && g.W().hb(r, d), e.call(a, g);
            Wk(z);
            m.Xh = h;
            m.Pf = k;
            m.td = z;
            m.resolution = NaN
        }
    }

    Em.prototype.oa = function (a, c, d, e) {
        var f = c.pixelRatio, g = c.viewState.resolution;
        c = c.viewState.rotation;
        var h = this.a, k = {}, m = this.o, n = h.da(), p = n.tileGrid, q, r, u, v, x, z;
        u = 0;
        for (v = m.length; u < v; ++u)z = m[u], r = z.ja, x = n.tileGrid.Ba(r, this.j), ac(x, a) && ("tile-pixels" === z.o.vb() ? (x = oc(x), g = n.Xb(f), r = p.$(r[0]) / g, r = [(a[0] - x[0]) / r, (x[1] - a[1]) / r]) : r = a, z = z.f.td, q = q || z.oa(r, g, c, {}, function (a) {
                var c = w(a).toString();
                if (!(c in k))return k[c] = !0, d.call(e, a, h)
            }));
        return q
    };
    Em.prototype.B = function () {
        li(this)
    };
    Em.prototype.l = function (a, c) {
        var d = Em.ia.l.call(this, a, c);
        if (d)for (var e = Object.keys(a.ze || {}), f = 0, g = this.o.length; f < g; ++f) {
            var h = this.o[f];
            Fm(this, h, a);
            var k = h, h = a, m = this.a, n = Cm[m.s];
            if (n) {
                var p = h.pixelRatio, q = k.f, r = m.g;
                if (!Ab(q.oi, e) || q.Qf !== r) {
                    q.oi = e;
                    q.Qf = r;
                    var r = k.g, u = m.da(), v = u.tileGrid, x = k.ja[0], z = v.$(x), m = Uf(v.Ha(x)), x = v.$(x), E = x / z, B = m[0] * p * E, A = m[1] * p * E;
                    r.canvas.width = B / E + .5;
                    r.canvas.height = A / E + .5;
                    r.scale(1 / E, 1 / E);
                    r.translate(B / 2, A / 2);
                    E = "tile-pixels" == k.o.vb();
                    z = p / z;
                    u = u.Xb(p);
                    x /= u;
                    k = v.Ba(k.ja,
                        this.j);
                    v = void 0;
                    E ? v = hi(this.v, 0, 0, z * x, z * x, 0, -m[0] * u / 2, -m[1] * u / 2) : (k = tc(k), v = hi(this.v, 0, 0, z, -z, 0, -k[0], -k[1]));
                    q.td.Pa(r, p, v, 0, h.skippedFeatureUids || {}, n)
                }
            }
        }
        return d
    };
    function Gm(a, c) {
        yi.call(this, 0, c);
        this.f = Mg();
        this.b = this.f.canvas;
        this.b.style.width = "100%";
        this.b.style.height = "100%";
        this.b.className = "ol-unselectable";
        tf(a, this.b, 0);
        this.a = !0;
        this.c = hd()
    }

    y(Gm, yi);
    Gm.prototype.Te = function (a) {
        return a instanceof Uj ? new qm(a) : a instanceof Vj ? new rm(a) : a instanceof I ? new Em(a) : a instanceof H ? new tm(a) : null
    };
    function Hm(a, c, d) {
        var e = a.i, f = a.f;
        if (lb(e, c)) {
            var g = d.extent, h = d.pixelRatio, k = d.viewState.rotation, m = d.pixelRatio, n = d.viewState, p = n.resolution;
            a = hi(a.c, a.b.width / 2, a.b.height / 2, m / p, -m / p, -n.rotation, -n.center[0], -n.center[1]);
            g = new qk(f, h, g, a, k);
            e.b(new ci(c, e, g, d, f, null))
        }
    }

    Gm.prototype.X = function () {
        return "canvas"
    };
    Gm.prototype.xe = function (a) {
        if (a) {
            var c = this.f, d = a.pixelRatio, e = Math.round(a.size[0] * d), d = Math.round(a.size[1] * d);
            this.b.width != e || this.b.height != d ? (this.b.width = e, this.b.height = d) : c.clearRect(0, 0, e, d);
            var f = a.viewState.rotation;
            zi(a);
            Hm(this, "precompose", a);
            var g = a.layerStatesArray;
            Bb(g);
            Zj(c, f, e / 2, d / 2);
            var h = a.viewState.resolution, k, m, n, p;
            k = 0;
            for (m = g.length; k < m; ++k)p = g[k], n = p.layer, n = Bi(this, n), ei(p, h) && "ready" == p.R && n.l(a, p) && n.i(a, p, c);
            Zj(c, -f, e / 2, d / 2);
            Hm(this, "postcompose", a);
            this.a || (Cf(this.b,
                !0), this.a = !0);
            Ci(this, a);
            a.postRenderFunctions.push(Ai)
        } else this.a && (Cf(this.b, !1), this.a = !1)
    };
    function Im(a, c) {
        ki.call(this, a);
        this.target = c
    }

    y(Im, ki);
    Im.prototype.Id = pa;
    Im.prototype.oh = pa;
    function Jm(a) {
        var c = document.createElement("DIV");
        c.style.position = "absolute";
        Im.call(this, a, c);
        this.f = null;
        this.c = jd()
    }

    y(Jm, Im);
    Jm.prototype.oa = function (a, c, d, e) {
        var f = this.a;
        return f.da().oa(a, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids, function (a) {
            return d.call(e, a, f)
        })
    };
    Jm.prototype.Id = function () {
        sf(this.target);
        this.f = null
    };
    Jm.prototype.uf = function (a, c) {
        var d = a.viewState, e = d.center, f = d.resolution, g = d.rotation, h = this.f, k = this.a.da(), m = a.viewHints, n = a.extent;
        void 0 !== c.extent && (n = vc(n, c.extent));
        m[0] || m[1] || qc(n) || (d = k.B(n, f, a.pixelRatio, d.projection)) && mi(this, d) && (h = d);
        h && (m = h.O(), n = h.$(), d = hd(), hi(d, a.size[0] / 2, a.size[1] / 2, n / f, n / f, g, (m[0] - e[0]) / n, (e[1] - m[3]) / n), h != this.f && (e = h.a(this), e.style.maxWidth = "none", e.style.position = "absolute", sf(this.target), this.target.appendChild(e), this.f = h), ii(d, this.c) || (Qg(this.target,
            d), kd(this.c, d)), oi(a.attributions, h.l), pi(a, k));
        return !0
    };
    function Km(a) {
        var c = document.createElement("DIV");
        c.style.position = "absolute";
        Im.call(this, a, c);
        this.c = !0;
        this.l = 1;
        this.i = 0;
        this.f = {}
    }

    y(Km, Im);
    Km.prototype.Id = function () {
        sf(this.target);
        this.i = 0
    };
    Km.prototype.uf = function (a, c) {
        if (!c.visible)return this.c && (Cf(this.target, !1), this.c = !1), !0;
        var d = a.pixelRatio, e = a.viewState, f = e.projection, g = this.a, h = g.da(), k = h.fb(f), m = h.Od(f), n = gg(k, e.resolution), p = k.$(n), q = e.center, r;
        p == e.resolution ? (q = ri(q, p, a.size), r = uc(q, p, e.rotation, a.size)) : r = a.extent;
        void 0 !== c.extent && (r = vc(r, c.extent));
        var p = dg(k, r, p), u = {};
        u[n] = {};
        var v = this.Ld(h, f, u), x = g.c(), z = Wb(), E = new qe(0, 0, 0, 0), B, A, G, O;
        for (G = p.b; G <= p.a; ++G)for (O = p.g; O <= p.f; ++O)B = h.Wb(n, G, O, d, f), A = B.V(), A = 2 == A ||
            4 == A || 3 == A && !x, !A && B.a && (B = B.a), A = B.V(), 2 == A ? u[n][B.ja.toString()] = B : 4 == A || 3 == A && !x || (A = ag(k, B.ja, v, E, z), A || (B = cg(k, B.ja, E, z)) && v(n + 1, B));
        var L;
        if (this.i != h.g) {
            for (L in this.f)x = this.f[+L], uf(x.target);
            this.f = {};
            this.i = h.g
        }
        z = Object.keys(u).map(Number);
        z.sort(tb);
        var v = {}, R;
        G = 0;
        for (O = z.length; G < O; ++G) {
            L = z[G];
            L in this.f ? x = this.f[L] : (x = k.kd(q, L), x = new Lm(k, x), v[L] = !0, this.f[L] = x);
            L = u[L];
            for (R in L) {
                B = x;
                A = L[R];
                var Wa = m, J = A.ja, ua = J[0], Ta = J[1], kb = J[2], J = J.toString();
                if (!(J in B.a)) {
                    var ua = Uf(B.c.Ha(ua),
                        B.o), Ka = A.ab(B), Ia = Ka.style;
                    Ia.maxWidth = "none";
                    var xc = void 0, Pc = void 0;
                    0 < Wa ? (xc = document.createElement("DIV"), Pc = xc.style, Pc.overflow = "hidden", Pc.width = ua[0] + "px", Pc.height = ua[1] + "px", Ia.position = "absolute", Ia.left = -Wa + "px", Ia.top = -Wa + "px", Ia.width = ua[0] + 2 * Wa + "px", Ia.height = ua[1] + 2 * Wa + "px", xc.appendChild(Ka)) : (Ia.width = ua[0] + "px", Ia.height = ua[1] + "px", xc = Ka, Pc = Ia);
                    Pc.position = "absolute";
                    Pc.left = (Ta - B.g[1]) * ua[0] + "px";
                    Pc.top = (B.g[2] - kb) * ua[1] + "px";
                    B.b || (B.b = document.createDocumentFragment());
                    B.b.appendChild(xc);
                    B.a[J] = A
                }
            }
            x.b && (x.target.appendChild(x.b), x.b = null)
        }
        m = Object.keys(this.f).map(Number);
        m.sort(tb);
        G = hd();
        R = 0;
        for (z = m.length; R < z; ++R)if (L = m[R], x = this.f[L], L in u)if (B = x.$(), O = x.Fa(), hi(G, a.size[0] / 2, a.size[1] / 2, B / e.resolution, B / e.resolution, e.rotation, (O[0] - q[0]) / B, (q[1] - O[1]) / B), x.setTransform(G), L in v) {
            for (--L; 0 <= L; --L)if (L in this.f) {
                O = this.f[L].target;
                O.parentNode && O.parentNode.insertBefore(x.target, O.nextSibling);
                break
            }
            0 > L && tf(this.target, x.target, 0)
        } else {
            if (!a.viewHints[0] && !a.viewHints[1]) {
                A =
                    bg(x.c, r, x.g[0], E);
                L = [];
                B = O = void 0;
                for (B in x.a)O = x.a[B], A.contains(O.ja) || L.push(O);
                Wa = A = void 0;
                A = 0;
                for (Wa = L.length; A < Wa; ++A)O = L[A], B = O.ja.toString(), uf(O.ab(x)), delete x.a[B]
            }
        } else uf(x.target), delete this.f[L];
        c.opacity != this.l && (this.l = this.target.style.opacity = c.opacity);
        c.visible && !this.c && (Cf(this.target, !0), this.c = !0);
        qi(a.usedTiles, h, n, p);
        si(a, h, k, d, f, r, n, g.f());
        ni(a, h);
        pi(a, h);
        return !0
    };
    function Lm(a, c) {
        this.target = document.createElement("DIV");
        this.target.style.position = "absolute";
        this.target.style.width = "100%";
        this.target.style.height = "100%";
        this.c = a;
        this.g = c;
        this.i = oc(a.Ba(c));
        this.l = a.$(c[0]);
        this.a = {};
        this.b = null;
        this.f = jd();
        this.o = [0, 0]
    }

    Lm.prototype.Fa = function () {
        return this.i
    };
    Lm.prototype.$ = function () {
        return this.l
    };
    Lm.prototype.setTransform = function (a) {
        ii(a, this.f) || (Qg(this.target, a), kd(this.f, a))
    };
    function Mm(a) {
        this.i = Mg();
        var c = this.i.canvas;
        c.style.maxWidth = "none";
        c.style.position = "absolute";
        Im.call(this, a, c);
        this.f = !1;
        this.l = -1;
        this.s = NaN;
        this.o = Wb();
        this.c = this.j = null;
        this.U = hd();
        this.v = hd()
    }

    y(Mm, Im);
    l = Mm.prototype;
    l.Id = function () {
        var a = this.i.canvas;
        a.width = a.width;
        this.l = 0
    };
    l.oh = function (a, c) {
        var d = a.viewState, e = d.center, f = d.rotation, g = d.resolution, d = a.pixelRatio, h = a.size[0], k = a.size[1], m = h * d, n = k * d, e = hi(this.U, d * h / 2, d * k / 2, d / g, -d / g, -f, -e[0], -e[1]), g = this.i;
        g.canvas.width = m;
        g.canvas.height = n;
        h = hi(this.v, 0, 0, 1 / d, 1 / d, 0, -(m - h) / 2 * d, -(n - k) / 2 * d);
        Qg(g.canvas, h);
        Nm(this, "precompose", a, e);
        (h = this.c) && !h.Sa() && (g.globalAlpha = c.opacity, h.Pa(g, d, e, f, c.Lc ? a.skippedFeatureUids : {}), Nm(this, "render", a, e));
        Nm(this, "postcompose", a, e)
    };
    function Nm(a, c, d, e) {
        var f = a.i;
        a = a.a;
        lb(a, c) && (e = new qk(f, d.pixelRatio, d.extent, e, d.viewState.rotation), a.b(new ci(c, a, e, d, f, null)))
    }

    l.oa = function (a, c, d, e) {
        if (this.c) {
            var f = this.a, g = {};
            return this.c.oa(a, c.viewState.resolution, c.viewState.rotation, {}, function (a) {
                var c = w(a).toString();
                if (!(c in g))return g[c] = !0, d.call(e, a, f)
            })
        }
    };
    l.ph = function () {
        li(this)
    };
    l.uf = function (a) {
        function c(a) {
            var c, e = a.$b();
            e ? c = e.call(a, m) : (e = d.i) && (c = e(a, m));
            if (c) {
                if (c) {
                    e = !1;
                    if (Array.isArray(c))for (var f = 0, g = c.length; f < g; ++f)e = bl(p, a, c[f], al(m, n), this.ph, this) || e; else e = bl(p, a, c, al(m, n), this.ph, this) || e;
                    a = e
                } else a = !1;
                this.f = this.f || a
            }
        }

        var d = this.a, e = d.da();
        oi(a.attributions, e.l);
        pi(a, e);
        var f = a.viewHints[0], g = a.viewHints[1], h = d.S, k = d.T;
        if (!this.f && !h && f || !k && g)return !0;
        var g = a.extent, h = a.viewState, f = h.projection, m = h.resolution, n = a.pixelRatio;
        a = d.g;
        k = d.a;
        h = pk(d);
        void 0 ===
        h && (h = $k);
        g = Yb(g, k * m);
        if (!this.f && this.s == m && this.l == a && this.j == h && cc(this.o, g))return !0;
        this.c = null;
        this.f = !1;
        var p = new Vk(.5 * m / n, g, m, d.a);
        e.Kc(g, m, f);
        if (h) {
            var q = [];
            e.tb(g, function (a) {
                q.push(a)
            }, this);
            q.sort(h);
            q.forEach(c, this)
        } else e.tb(g, c, this);
        Wk(p);
        this.s = m;
        this.l = a;
        this.j = h;
        this.o = g;
        this.c = p;
        return !0
    };
    function Om(a, c) {
        yi.call(this, 0, c);
        this.f = Mg();
        var d = this.f.canvas;
        d.style.position = "absolute";
        d.style.width = "100%";
        d.style.height = "100%";
        d.className = "ol-unselectable";
        tf(a, d, 0);
        this.c = hd();
        this.b = document.createElement("DIV");
        this.b.className = "ol-unselectable";
        d = this.b.style;
        d.position = "absolute";
        d.width = "100%";
        d.height = "100%";
        C(this.b, "touchstart", ib);
        tf(a, this.b, 0);
        this.a = !0
    }

    y(Om, yi);
    Om.prototype.fa = function () {
        uf(this.b);
        Om.ia.fa.call(this)
    };
    Om.prototype.Te = function (a) {
        if (a instanceof Uj)a = new Jm(a); else if (a instanceof Vj)a = new Km(a); else if (a instanceof H)a = new Mm(a); else return null;
        return a
    };
    function Pm(a, c, d) {
        var e = a.i;
        if (lb(e, c)) {
            var f = d.extent, g = d.pixelRatio, h = d.viewState, k = h.rotation, m = a.f, n = m.canvas;
            hi(a.c, n.width / 2, n.height / 2, g / h.resolution, -g / h.resolution, -h.rotation, -h.center[0], -h.center[1]);
            a = new qk(m, g, f, a.c, k);
            e.b(new ci(c, e, a, d, m, null))
        }
    }

    Om.prototype.X = function () {
        return "dom"
    };
    Om.prototype.xe = function (a) {
        if (a) {
            var c = this.i;
            if (lb(c, "precompose") || lb(c, "postcompose")) {
                var c = this.f.canvas, d = a.pixelRatio;
                c.width = a.size[0] * d;
                c.height = a.size[1] * d
            }
            Pm(this, "precompose", a);
            c = a.layerStatesArray;
            Bb(c);
            var d = a.viewState.resolution, e, f, g, h;
            e = 0;
            for (f = c.length; e < f; ++e)h = c[e], g = h.layer, g = Bi(this, g), tf(this.b, g.target, e), ei(h, d) && "ready" == h.R ? g.uf(a, h) && g.oh(a, h) : g.Id();
            var c = a.layerStates, k;
            for (k in this.g)k in c || (g = this.g[k], uf(g.target));
            this.a || (Cf(this.b, !0), this.a = !0);
            zi(a);
            Ci(this,
                a);
            a.postRenderFunctions.push(Ai);
            Pm(this, "postcompose", a)
        } else this.a && (Cf(this.b, !1), this.a = !1)
    };
    function Qm(a) {
        this.b = a
    }

    function Rm(a) {
        this.b = a
    }

    y(Rm, Qm);
    Rm.prototype.X = function () {
        return 35632
    };
    function Sm(a) {
        this.b = a
    }

    y(Sm, Qm);
    Sm.prototype.X = function () {
        return 35633
    };
    function Tm() {
        this.b = "precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){vec4 texColor=texture2D(l,a);gl_FragColor.rgb=texColor.rgb;float alpha=texColor.a*b*k;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"
    }

    y(Tm, Rm);
    ba(Tm);
    function Um() {
        this.b = "varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.,0.);gl_Position=h*vec4(c,0.,1.)+offsets;a=d;b=f;}"
    }

    y(Um, Sm);
    ba(Um);
    function Vm(a, c) {
        this.o = a.getUniformLocation(c, "j");
        this.j = a.getUniformLocation(c, "i");
        this.i = a.getUniformLocation(c, "k");
        this.l = a.getUniformLocation(c, "h");
        this.b = a.getAttribLocation(c, "e");
        this.a = a.getAttribLocation(c, "f");
        this.f = a.getAttribLocation(c, "c");
        this.g = a.getAttribLocation(c, "g");
        this.c = a.getAttribLocation(c, "d")
    };
    function Wm(a) {
        this.b = void 0 !== a ? a : []
    };
    function Xm(a, c) {
        this.l = a;
        this.b = c;
        this.a = {};
        this.c = {};
        this.f = {};
        this.j = this.s = this.i = this.o = null;
        (this.g = ub(oa, "OES_element_index_uint")) && c.getExtension("OES_element_index_uint");
        C(this.l, "webglcontextlost", this.Vn, this);
        C(this.l, "webglcontextrestored", this.Wn, this)
    }

    y(Xm, eb);
    function Ym(a, c, d) {
        var e = a.b, f = d.b, g = String(w(d));
        if (g in a.a)e.bindBuffer(c, a.a[g].buffer); else {
            var h = e.createBuffer();
            e.bindBuffer(c, h);
            var k;
            34962 == c ? k = new Float32Array(f) : 34963 == c && (k = a.g ? new Uint32Array(f) : new Uint16Array(f));
            e.bufferData(c, k, 35044);
            a.a[g] = {Eb: d, buffer: h}
        }
    }

    function Zm(a, c) {
        var d = a.b, e = String(w(c)), f = a.a[e];
        d.isContextLost() || d.deleteBuffer(f.buffer);
        delete a.a[e]
    }

    l = Xm.prototype;
    l.fa = function () {
        db(this.l);
        var a = this.b;
        if (!a.isContextLost()) {
            for (var c in this.a)a.deleteBuffer(this.a[c].buffer);
            for (c in this.f)a.deleteProgram(this.f[c]);
            for (c in this.c)a.deleteShader(this.c[c]);
            a.deleteFramebuffer(this.i);
            a.deleteRenderbuffer(this.j);
            a.deleteTexture(this.s)
        }
    };
    l.Un = function () {
        return this.b
    };
    function $m(a) {
        if (!a.i) {
            var c = a.b, d = c.createFramebuffer();
            c.bindFramebuffer(c.FRAMEBUFFER, d);
            var e = an(c, 1, 1), f = c.createRenderbuffer();
            c.bindRenderbuffer(c.RENDERBUFFER, f);
            c.renderbufferStorage(c.RENDERBUFFER, c.DEPTH_COMPONENT16, 1, 1);
            c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, e, 0);
            c.framebufferRenderbuffer(c.FRAMEBUFFER, c.DEPTH_ATTACHMENT, c.RENDERBUFFER, f);
            c.bindTexture(c.TEXTURE_2D, null);
            c.bindRenderbuffer(c.RENDERBUFFER, null);
            c.bindFramebuffer(c.FRAMEBUFFER, null);
            a.i = d;
            a.s = e;
            a.j = f
        }
        return a.i
    }

    function bn(a, c) {
        var d = String(w(c));
        if (d in a.c)return a.c[d];
        var e = a.b, f = e.createShader(c.X());
        e.shaderSource(f, c.b);
        e.compileShader(f);
        return a.c[d] = f
    }

    function cn(a, c, d) {
        var e = w(c) + "/" + w(d);
        if (e in a.f)return a.f[e];
        var f = a.b, g = f.createProgram();
        f.attachShader(g, bn(a, c));
        f.attachShader(g, bn(a, d));
        f.linkProgram(g);
        return a.f[e] = g
    }

    l.Vn = function () {
        Qa(this.a);
        Qa(this.c);
        Qa(this.f);
        this.j = this.s = this.i = this.o = null
    };
    l.Wn = function () {
    };
    l.re = function (a) {
        if (a == this.o)return !1;
        this.b.useProgram(a);
        this.o = a;
        return !0
    };
    function dn(a, c, d) {
        var e = a.createTexture();
        a.bindTexture(a.TEXTURE_2D, e);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
        void 0 !== c && a.texParameteri(3553, 10242, c);
        void 0 !== d && a.texParameteri(3553, 10243, d);
        return e
    }

    function an(a, c, d) {
        var e = dn(a, void 0, void 0);
        a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, c, d, 0, a.RGBA, a.UNSIGNED_BYTE, null);
        return e
    }

    function en(a, c) {
        var d = dn(a, 33071, 33071);
        a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, c);
        return d
    };
    function fn(a, c) {
        this.M = this.B = void 0;
        this.j = tc(c);
        this.U = [];
        this.i = [];
        this.R = void 0;
        this.c = [];
        this.f = [];
        this.ya = this.va = void 0;
        this.a = [];
        this.N = this.o = null;
        this.S = void 0;
        this.ta = jd();
        this.xa = jd();
        this.Y = this.T = void 0;
        this.Ra = jd();
        this.wa = this.ea = this.Qa = void 0;
        this.Cb = [];
        this.l = [];
        this.b = [];
        this.v = null;
        this.g = [];
        this.s = [];
        this.na = void 0
    }

    y(fn, bi);
    function gn(a, c) {
        var d = a.v, e = a.o, f = a.Cb, g = a.l, h = c.b;
        return function () {
            if (!h.isContextLost()) {
                var a, m;
                a = 0;
                for (m = f.length; a < m; ++a)h.deleteTexture(f[a]);
                a = 0;
                for (m = g.length; a < m; ++a)h.deleteTexture(g[a])
            }
            Zm(c, d);
            Zm(c, e)
        }
    }

    function hn(a, c, d, e) {
        var f = a.B, g = a.M, h = a.R, k = a.va, m = a.ya, n = a.S, p = a.T, q = a.Y, r = a.Qa ? 1 : 0, u = a.ea, v = a.wa, x = a.na, z = Math.cos(u), u = Math.sin(u), E = a.a.length, B = a.b.length, A, G, O, L, R, Wa;
        for (A = 0; A < d; A += e)R = c[A] - a.j[0], Wa = c[A + 1] - a.j[1], G = B / 8, O = -v * f, L = -v * (h - g), a.b[B++] = R, a.b[B++] = Wa, a.b[B++] = O * z - L * u, a.b[B++] = O * u + L * z, a.b[B++] = p / m, a.b[B++] = (q + h) / k, a.b[B++] = n, a.b[B++] = r, O = v * (x - f), L = -v * (h - g), a.b[B++] = R, a.b[B++] = Wa, a.b[B++] = O * z - L * u, a.b[B++] = O * u + L * z, a.b[B++] = (p + x) / m, a.b[B++] = (q + h) / k, a.b[B++] = n, a.b[B++] = r, O = v * (x - f), L =
            v * g, a.b[B++] = R, a.b[B++] = Wa, a.b[B++] = O * z - L * u, a.b[B++] = O * u + L * z, a.b[B++] = (p + x) / m, a.b[B++] = q / k, a.b[B++] = n, a.b[B++] = r, O = -v * f, L = v * g, a.b[B++] = R, a.b[B++] = Wa, a.b[B++] = O * z - L * u, a.b[B++] = O * u + L * z, a.b[B++] = p / m, a.b[B++] = q / k, a.b[B++] = n, a.b[B++] = r, a.a[E++] = G, a.a[E++] = G + 1, a.a[E++] = G + 2, a.a[E++] = G, a.a[E++] = G + 2, a.a[E++] = G + 3
    }

    fn.prototype.oc = function (a, c) {
        this.g.push(this.a.length);
        this.s.push(c);
        var d = a.ga();
        hn(this, d, d.length, a.ua())
    };
    fn.prototype.pc = function (a, c) {
        this.g.push(this.a.length);
        this.s.push(c);
        var d = a.ga();
        hn(this, d, d.length, a.ua())
    };
    function jn(a, c) {
        var d = c.b;
        a.U.push(a.a.length);
        a.i.push(a.a.length);
        a.v = new Wm(a.b);
        Ym(c, 34962, a.v);
        a.o = new Wm(a.a);
        Ym(c, 34963, a.o);
        var e = {};
        kn(a.Cb, a.c, e, d);
        kn(a.l, a.f, e, d);
        a.B = void 0;
        a.M = void 0;
        a.R = void 0;
        a.c = null;
        a.f = null;
        a.va = void 0;
        a.ya = void 0;
        a.a = null;
        a.S = void 0;
        a.T = void 0;
        a.Y = void 0;
        a.Qa = void 0;
        a.ea = void 0;
        a.wa = void 0;
        a.b = null;
        a.na = void 0
    }

    function kn(a, c, d, e) {
        var f, g, h, k = c.length;
        for (h = 0; h < k; ++h)f = c[h], g = w(f).toString(), g in d ? f = d[g] : (f = en(e, f), d[g] = f), a[h] = f
    }

    fn.prototype.Pa = function (a, c, d, e, f, g, h, k, m, n, p) {
        g = a.b;
        Ym(a, 34962, this.v);
        Ym(a, 34963, this.o);
        var q = Tm.Ub(), r = Um.Ub(), r = cn(a, q, r);
        this.N ? q = this.N : this.N = q = new Vm(g, r);
        a.re(r);
        g.enableVertexAttribArray(q.f);
        g.vertexAttribPointer(q.f, 2, 5126, !1, 32, 0);
        g.enableVertexAttribArray(q.b);
        g.vertexAttribPointer(q.b, 2, 5126, !1, 32, 8);
        g.enableVertexAttribArray(q.c);
        g.vertexAttribPointer(q.c, 2, 5126, !1, 32, 16);
        g.enableVertexAttribArray(q.a);
        g.vertexAttribPointer(q.a, 1, 5126, !1, 32, 24);
        g.enableVertexAttribArray(q.g);
        g.vertexAttribPointer(q.g,
            1, 5126, !1, 32, 28);
        r = this.Ra;
        hi(r, 0, 0, 2 / (d * f[0]), 2 / (d * f[1]), -e, -(c[0] - this.j[0]), -(c[1] - this.j[1]));
        c = this.xa;
        d = 2 / f[0];
        f = 2 / f[1];
        ld(c);
        c[0] = d;
        c[5] = f;
        c[10] = 1;
        c[15] = 1;
        f = this.ta;
        ld(f);
        0 !== e && qd(f, -e);
        g.uniformMatrix4fv(q.l, !1, r);
        g.uniformMatrix4fv(q.j, !1, c);
        g.uniformMatrix4fv(q.o, !1, f);
        g.uniform1f(q.i, h);
        var u;
        if (void 0 === m)ln(this, g, a, k, this.Cb, this.U); else {
            if (n)a:{
                e = a.g ? 5125 : 5123;
                a = a.g ? 4 : 2;
                f = this.g.length - 1;
                for (h = this.l.length - 1; 0 <= h; --h)for (g.bindTexture(3553, this.l[h]), n = 0 < h ? this.i[h - 1] : 0, c = this.i[h]; 0 <=
                f && this.g[f] >= n;) {
                    u = this.g[f];
                    d = this.s[f];
                    r = w(d).toString();
                    if (void 0 === k[r] && d.W() && (void 0 === p || wc(p, d.W().O())) && (g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT), g.drawElements(4, c - u, e, u * a), c = m(d))) {
                        k = c;
                        break a
                    }
                    c = u;
                    f--
                }
                k = void 0
            } else g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT), ln(this, g, a, k, this.l, this.i), k = (k = m(null)) ? k : void 0;
            u = k
        }
        g.disableVertexAttribArray(q.f);
        g.disableVertexAttribArray(q.b);
        g.disableVertexAttribArray(q.c);
        g.disableVertexAttribArray(q.a);
        g.disableVertexAttribArray(q.g);
        return u
    };
    function ln(a, c, d, e, f, g) {
        var h = d.g ? 5125 : 5123;
        d = d.g ? 4 : 2;
        if (Sa(e)) {
            var k;
            a = 0;
            e = f.length;
            for (k = 0; a < e; ++a) {
                c.bindTexture(3553, f[a]);
                var m = g[a];
                c.drawElements(4, m - k, h, k * d);
                k = m
            }
        } else {
            k = 0;
            var n, m = 0;
            for (n = f.length; m < n; ++m) {
                c.bindTexture(3553, f[m]);
                for (var p = 0 < m ? g[m - 1] : 0, q = g[m], r = p; k < a.g.length && a.g[k] <= q;) {
                    var u = w(a.s[k]).toString();
                    void 0 !== e[u] ? (r !== p && c.drawElements(4, p - r, h, r * d), p = r = k === a.g.length - 1 ? q : a.g[k + 1]) : p = k === a.g.length - 1 ? q : a.g[k + 1];
                    k++
                }
                r !== p && c.drawElements(4, p - r, h, r * d)
            }
        }
    }

    fn.prototype.Pb = function (a) {
        var c = a.Tb(), d = a.ec(1), e = a.fd(), f = a.ke(1), g = a.v, h = a.Fa(), k = a.U, m = a.j, n = a.Bb();
        a = a.i;
        var p;
        0 === this.c.length ? this.c.push(d) : (p = this.c[this.c.length - 1], w(p) != w(d) && (this.U.push(this.a.length), this.c.push(d)));
        0 === this.f.length ? this.f.push(f) : (p = this.f[this.f.length - 1], w(p) != w(f) && (this.i.push(this.a.length), this.f.push(f)));
        this.B = c[0];
        this.M = c[1];
        this.R = n[1];
        this.va = e[1];
        this.ya = e[0];
        this.S = g;
        this.T = h[0];
        this.Y = h[1];
        this.ea = m;
        this.Qa = k;
        this.wa = a;
        this.na = n[0]
    };
    function mn(a, c, d) {
        this.f = c;
        this.c = a;
        this.g = d;
        this.a = {}
    }

    function nn(a, c) {
        var d = [], e;
        for (e in a.a)d.push(gn(a.a[e], c));
        return function () {
            for (var a = d.length, c, e = 0; e < a; e++)c = d[e].apply(this, arguments);
            return c
        }
    }

    function on(a, c) {
        for (var d in a.a)jn(a.a[d], c)
    }

    mn.prototype.b = function (a, c) {
        var d = this.a[c];
        void 0 === d && (d = new pn[c](this.c, this.f), this.a[c] = d);
        return d
    };
    mn.prototype.Sa = function () {
        return Sa(this.a)
    };
    mn.prototype.Pa = function (a, c, d, e, f, g, h, k) {
        var m, n, p;
        m = 0;
        for (n = Fk.length; m < n; ++m)p = this.a[Fk[m]], void 0 !== p && p.Pa(a, c, d, e, f, g, h, k, void 0, !1)
    };
    function qn(a, c, d, e, f, g, h, k, m, n, p) {
        var q = rn, r, u;
        for (r = Fk.length - 1; 0 <= r; --r)if (u = a.a[Fk[r]], void 0 !== u && (u = u.Pa(c, d, e, f, q, g, h, k, m, n, p)))return u
    }

    mn.prototype.oa = function (a, c, d, e, f, g, h, k, m, n) {
        var p = c.b;
        p.bindFramebuffer(p.FRAMEBUFFER, $m(c));
        var q;
        void 0 !== this.g && (q = Yb(fc(a), e * this.g));
        return qn(this, c, a, e, f, h, k, m, function (a) {
            var c = new Uint8Array(4);
            p.readPixels(0, 0, 1, 1, p.RGBA, p.UNSIGNED_BYTE, c);
            if (0 < c[3] && (a = n(a)))return a
        }, !0, q)
    };
    function sn(a, c, d, e, f, g, h, k) {
        var m = d.b;
        m.bindFramebuffer(m.FRAMEBUFFER, $m(d));
        return void 0 !== qn(a, d, c, e, f, g, h, k, function () {
                var a = new Uint8Array(4);
                m.readPixels(0, 0, 1, 1, m.RGBA, m.UNSIGNED_BYTE, a);
                return 0 < a[3]
            }, !1)
    }

    var pn = {Image: fn}, rn = [1, 1];

    function tn(a, c, d, e, f, g, h) {
        this.b = a;
        this.f = c;
        this.g = g;
        this.c = h;
        this.o = f;
        this.l = e;
        this.i = d;
        this.a = null
    }

    y(tn, bi);
    l = tn.prototype;
    l.md = function (a) {
        this.Pb(a.a)
    };
    l.nc = function (a) {
        switch (a.X()) {
            case "Point":
                this.pc(a, null);
                break;
            case "MultiPoint":
                this.oc(a, null);
                break;
            case "GeometryCollection":
                this.Ve(a, null)
        }
    };
    l.Ue = function (a, c) {
        var d = (0, c.g)(a);
        d && wc(this.g, d.O()) && (this.md(c), this.nc(d))
    };
    l.Ve = function (a) {
        a = a.c;
        var c, d;
        c = 0;
        for (d = a.length; c < d; ++c)this.nc(a[c])
    };
    l.pc = function (a, c) {
        var d = this.b, e = (new mn(1, this.g)).b(0, "Image");
        e.Pb(this.a);
        e.pc(a, c);
        jn(e, d);
        e.Pa(this.b, this.f, this.i, this.l, this.o, this.c, 1, {}, void 0, !1);
        gn(e, d)()
    };
    l.oc = function (a, c) {
        var d = this.b, e = (new mn(1, this.g)).b(0, "Image");
        e.Pb(this.a);
        e.oc(a, c);
        jn(e, d);
        e.Pa(this.b, this.f, this.i, this.l, this.o, this.c, 1, {}, void 0, !1);
        gn(e, d)()
    };
    l.Pb = function (a) {
        this.a = a
    };
    function un() {
        this.b = "precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}"
    }

    y(un, Rm);
    ba(un);
    function vn() {
        this.b = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"
    }

    y(vn, Sm);
    ba(vn);
    function wn(a, c) {
        this.g = a.getUniformLocation(c, "f");
        this.f = a.getUniformLocation(c, "e");
        this.i = a.getUniformLocation(c, "d");
        this.c = a.getUniformLocation(c, "g");
        this.b = a.getAttribLocation(c, "b");
        this.a = a.getAttribLocation(c, "c")
    };
    function xn(a, c) {
        ki.call(this, c);
        this.f = a;
        this.S = new Wm([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]);
        this.i = this.ob = null;
        this.l = void 0;
        this.s = hd();
        this.U = jd();
        this.v = null
    }

    y(xn, ki);
    function yn(a, c, d) {
        var e = a.f.f;
        if (void 0 === a.l || a.l != d) {
            c.postRenderFunctions.push(function (a, c, d) {
                a.isContextLost() || (a.deleteFramebuffer(c), a.deleteTexture(d))
            }.bind(null, e, a.i, a.ob));
            c = an(e, d, d);
            var f = e.createFramebuffer();
            e.bindFramebuffer(36160, f);
            e.framebufferTexture2D(36160, 36064, 3553, c, 0);
            a.ob = c;
            a.i = f;
            a.l = d
        } else e.bindFramebuffer(36160, a.i)
    }

    xn.prototype.qh = function (a, c, d) {
        zn(this, "precompose", d, a);
        Ym(d, 34962, this.S);
        var e = d.b, f = un.Ub(), g = vn.Ub(), f = cn(d, f, g);
        this.v ? g = this.v : this.v = g = new wn(e, f);
        d.re(f) && (e.enableVertexAttribArray(g.b), e.vertexAttribPointer(g.b, 2, 5126, !1, 16, 0), e.enableVertexAttribArray(g.a), e.vertexAttribPointer(g.a, 2, 5126, !1, 16, 8), e.uniform1i(g.c, 0));
        e.uniformMatrix4fv(g.i, !1, this.s);
        e.uniformMatrix4fv(g.f, !1, this.U);
        e.uniform1f(g.g, c.opacity);
        e.bindTexture(3553, this.ob);
        e.drawArrays(5, 0, 4);
        zn(this, "postcompose", d, a)
    };
    function zn(a, c, d, e) {
        a = a.a;
        if (lb(a, c)) {
            var f = e.viewState;
            a.b(new ci(c, a, new tn(d, f.center, f.resolution, f.rotation, e.size, e.extent, e.pixelRatio), e, null, d))
        }
    }

    xn.prototype.vf = function () {
        this.i = this.ob = null;
        this.l = void 0
    };
    function An(a, c) {
        xn.call(this, a, c);
        this.j = this.o = this.c = null
    }

    y(An, xn);
    function Bn(a, c) {
        var d = c.a();
        return en(a.f.f, d)
    }

    An.prototype.oa = function (a, c, d, e) {
        var f = this.a;
        return f.da().oa(a, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids, function (a) {
            return d.call(e, a, f)
        })
    };
    An.prototype.wf = function (a, c) {
        var d = this.f.f, e = a.pixelRatio, f = a.viewState, g = f.center, h = f.resolution, k = f.rotation, m = this.c, n = this.ob, p = this.a.da(), q = a.viewHints, r = a.extent;
        void 0 !== c.extent && (r = vc(r, c.extent));
        q[0] || q[1] || qc(r) || (f = p.B(r, h, e, f.projection)) && mi(this, f) && (m = f, n = Bn(this, f), this.ob && a.postRenderFunctions.push(function (a, c) {
            a.isContextLost() || a.deleteTexture(c)
        }.bind(null, d, this.ob)));
        m && (d = this.f.c.l, Cn(this, d.width, d.height, e, g, h, k, m.O()), this.j = null, e = this.s, ld(e), pd(e, 1, -1), od(e, 0,
            -1), this.c = m, this.ob = n, oi(a.attributions, m.l), pi(a, p));
        return !0
    };
    function Cn(a, c, d, e, f, g, h, k) {
        c *= g;
        d *= g;
        a = a.U;
        ld(a);
        pd(a, 2 * e / c, 2 * e / d);
        qd(a, -h);
        od(a, k[0] - f[0], k[1] - f[1]);
        pd(a, (k[2] - k[0]) / 2, (k[3] - k[1]) / 2);
        od(a, 1, 1)
    }

    An.prototype.ge = function (a, c) {
        return void 0 !== this.oa(a, c, Ac, this)
    };
    An.prototype.xc = function (a, c, d, e) {
        if (this.c && this.c.a())if (this.a.da() instanceof om) {
            if (a = a.slice(), ji(c.pixelToCoordinateMatrix, a, a), this.oa(a, c, Ac, this))return d.call(e, this.a)
        } else {
            var f = [this.c.a().width, this.c.a().height];
            if (!this.j) {
                var g = c.size;
                c = hd();
                ld(c);
                od(c, -1, -1);
                pd(c, 2 / g[0], 2 / g[1]);
                od(c, 0, g[1]);
                pd(c, 1, -1);
                g = hd();
                nd(this.U, g);
                var h = hd();
                ld(h);
                od(h, 0, f[1]);
                pd(h, 1, -1);
                pd(h, f[0] / 2, f[1] / 2);
                od(h, 1, 1);
                var k = hd();
                md(h, g, k);
                md(k, c, k);
                this.j = k
            }
            c = [0, 0];
            ji(this.j, a, c);
            if (!(0 > c[0] || c[0] > f[0] || 0 >
                c[1] || c[1] > f[1]) && (this.o || (this.o = Mg(1, 1)), this.o.clearRect(0, 0, 1, 1), this.o.drawImage(this.c.a(), c[0], c[1], 1, 1, 0, 0, 1, 1), 0 < this.o.getImageData(0, 0, 1, 1).data[3]))return d.call(e, this.a)
        }
    };
    function Dn() {
        this.b = "precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}"
    }

    y(Dn, Rm);
    ba(Dn);
    function En() {
        this.b = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}"
    }

    y(En, Sm);
    ba(En);
    function Fn(a, c) {
        this.g = a.getUniformLocation(c, "e");
        this.f = a.getUniformLocation(c, "d");
        this.b = a.getAttribLocation(c, "b");
        this.a = a.getAttribLocation(c, "c")
    };
    function Gn(a, c) {
        xn.call(this, a, c);
        this.N = Dn.Ub();
        this.T = En.Ub();
        this.c = null;
        this.M = new Wm([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]);
        this.B = this.o = null;
        this.j = -1;
        this.R = [0, 0]
    }

    y(Gn, xn);
    l = Gn.prototype;
    l.fa = function () {
        Zm(this.f.c, this.M);
        Gn.ia.fa.call(this)
    };
    l.Ld = function (a, c, d) {
        var e = this.f;
        return function (f, g) {
            return mg(a, c, f, g, function (a) {
                var c = Lf(e.a, a.gb());
                c && (d[f] || (d[f] = {}), d[f][a.ja.toString()] = a);
                return c
            })
        }
    };
    l.vf = function () {
        Gn.ia.vf.call(this);
        this.c = null
    };
    l.wf = function (a, c, d) {
        var e = this.f, f = d.b, g = a.viewState, h = g.projection, k = this.a, m = k.da(), n = m.fb(h), p = gg(n, g.resolution), q = n.$(p), r = m.Ud(p, a.pixelRatio, h), u = r[0] / Uf(n.Ha(p), this.R)[0], v = q / u, x = m.Od(h), z = g.center, E;
        q == g.resolution ? (z = ri(z, q, a.size), E = uc(z, q, g.rotation, a.size)) : E = a.extent;
        q = dg(n, E, q);
        if (this.o && se(this.o, q) && this.j == m.g)v = this.B; else {
            var B = [q.a - q.b + 1, q.f - q.g + 1], A = Math.pow(2, Math.ceil(Math.log(Math.max(B[0] * r[0], B[1] * r[1])) / Math.LN2)), B = v * A, G = n.Fa(p), O = G[0] + q.b * r[0] * v, v = G[1] + q.g * r[1] * v,
                v = [O, v, O + B, v + B];
            yn(this, a, A);
            f.viewport(0, 0, A, A);
            f.clearColor(0, 0, 0, 0);
            f.clear(16384);
            f.disable(3042);
            A = cn(d, this.N, this.T);
            d.re(A);
            this.c || (this.c = new Fn(f, A));
            Ym(d, 34962, this.M);
            f.enableVertexAttribArray(this.c.b);
            f.vertexAttribPointer(this.c.b, 2, 5126, !1, 16, 0);
            f.enableVertexAttribArray(this.c.a);
            f.vertexAttribPointer(this.c.a, 2, 5126, !1, 16, 8);
            f.uniform1i(this.c.g, 0);
            d = {};
            d[p] = {};
            var L = this.Ld(m, h, d), R = k.c(), A = !0, O = Wb(), Wa = new qe(0, 0, 0, 0), J, ua, Ta;
            for (ua = q.b; ua <= q.a; ++ua)for (Ta = q.g; Ta <= q.f; ++Ta) {
                G =
                    m.Wb(p, ua, Ta, u, h);
                if (void 0 !== c.extent && (J = n.Ba(G.ja, O), !wc(J, c.extent)))continue;
                J = G.V();
                J = 2 == J || 4 == J || 3 == J && !R;
                !J && G.a && (G = G.a);
                J = G.V();
                if (2 == J) {
                    if (Lf(e.a, G.gb())) {
                        d[p][G.ja.toString()] = G;
                        continue
                    }
                } else if (4 == J || 3 == J && !R)continue;
                A = !1;
                J = ag(n, G.ja, L, Wa, O);
                J || (G = cg(n, G.ja, Wa, O)) && L(p + 1, G)
            }
            c = Object.keys(d).map(Number);
            c.sort(tb);
            for (var L = new Float32Array(4), kb, Ka, Ia, R = 0, Wa = c.length; R < Wa; ++R)for (kb in Ka = d[c[R]], Ka)G = Ka[kb], J = n.Ba(G.ja, O), ua = 2 * (J[2] - J[0]) / B, Ta = 2 * (J[3] - J[1]) / B, Ia = 2 * (J[0] - v[0]) / B - 1,
                J = 2 * (J[1] - v[1]) / B - 1, gd(L, ua, Ta, Ia, J), f.uniform4fv(this.c.f, L), Hn(e, G, r, x * u), f.drawArrays(5, 0, 4);
            A ? (this.o = q, this.B = v, this.j = m.g) : (this.B = this.o = null, this.j = -1, a.animate = !0)
        }
        qi(a.usedTiles, m, p, q);
        var xc = e.o;
        si(a, m, n, u, h, E, p, k.f(), function (a) {
            var c;
            (c = 2 != a.V() || Lf(e.a, a.gb())) || (c = a.gb() in xc.g);
            c || xc.f([a, fg(n, a.ja), n.$(a.ja[0]), r, x * u])
        }, this);
        ni(a, m);
        pi(a, m);
        f = this.s;
        ld(f);
        od(f, (z[0] - v[0]) / (v[2] - v[0]), (z[1] - v[1]) / (v[3] - v[1]));
        0 !== g.rotation && qd(f, g.rotation);
        pd(f, a.size[0] * g.resolution / (v[2] - v[0]),
            a.size[1] * g.resolution / (v[3] - v[1]));
        od(f, -.5, -.5);
        return !0
    };
    l.xc = function (a, c, d, e) {
        if (this.i) {
            var f = [0, 0];
            ji(this.s, [a[0] / c.size[0], (c.size[1] - a[1]) / c.size[1]], f);
            a = [f[0] * this.l, f[1] * this.l];
            c = this.f.c.b;
            c.bindFramebuffer(c.FRAMEBUFFER, this.i);
            f = new Uint8Array(4);
            c.readPixels(a[0], a[1], 1, 1, c.RGBA, c.UNSIGNED_BYTE, f);
            if (0 < f[3])return d.call(e, this.a)
        }
    };
    function In(a, c) {
        xn.call(this, a, c);
        this.j = !1;
        this.R = -1;
        this.N = NaN;
        this.B = Wb();
        this.o = this.c = this.M = null
    }

    y(In, xn);
    l = In.prototype;
    l.qh = function (a, c, d) {
        this.o = c;
        var e = a.viewState, f = this.c;
        f && !f.Sa() && f.Pa(d, e.center, e.resolution, e.rotation, a.size, a.pixelRatio, c.opacity, c.Lc ? a.skippedFeatureUids : {})
    };
    l.fa = function () {
        var a = this.c;
        a && (nn(a, this.f.c)(), this.c = null);
        In.ia.fa.call(this)
    };
    l.oa = function (a, c, d, e) {
        if (this.c && this.o) {
            var f = c.viewState, g = this.a, h = {};
            return this.c.oa(a, this.f.c, f.center, f.resolution, f.rotation, c.size, c.pixelRatio, this.o.opacity, {}, function (a) {
                var c = w(a).toString();
                if (!(c in h))return h[c] = !0, d.call(e, a, g)
            })
        }
    };
    l.ge = function (a, c) {
        if (this.c && this.o) {
            var d = c.viewState;
            return sn(this.c, a, this.f.c, d.resolution, d.rotation, c.pixelRatio, this.o.opacity, c.skippedFeatureUids)
        }
        return !1
    };
    l.xc = function (a, c, d, e) {
        a = a.slice();
        ji(c.pixelToCoordinateMatrix, a, a);
        if (this.ge(a, c))return d.call(e, this.a)
    };
    l.rh = function () {
        li(this)
    };
    l.wf = function (a, c, d) {
        function e(a) {
            var c, d = a.$b();
            d ? c = d.call(a, n) : (d = f.i) && (c = d(a, n));
            if (c) {
                if (c) {
                    d = !1;
                    if (Array.isArray(c))for (var e = 0, g = c.length; e < g; ++e)d = bl(r, a, c[e], al(n, p), this.rh, this) || d; else d = bl(r, a, c, al(n, p), this.rh, this) || d;
                    a = d
                } else a = !1;
                this.j = this.j || a
            }
        }

        var f = this.a;
        c = f.da();
        oi(a.attributions, c.l);
        pi(a, c);
        var g = a.viewHints[0], h = a.viewHints[1], k = f.S, m = f.T;
        if (!this.j && !k && g || !m && h)return !0;
        var h = a.extent, k = a.viewState, g = k.projection, n = k.resolution, p = a.pixelRatio, k = f.g, q = f.a, m = pk(f);
        void 0 ===
        m && (m = $k);
        h = Yb(h, q * n);
        if (!this.j && this.N == n && this.R == k && this.M == m && cc(this.B, h))return !0;
        this.c && a.postRenderFunctions.push(nn(this.c, d));
        this.j = !1;
        var r = new mn(.5 * n / p, h, f.a);
        c.Kc(h, n, g);
        if (m) {
            var u = [];
            c.tb(h, function (a) {
                u.push(a)
            }, this);
            u.sort(m);
            u.forEach(e, this)
        } else c.tb(h, e, this);
        on(r, d);
        this.N = n;
        this.R = k;
        this.M = m;
        this.B = h;
        this.c = r;
        return !0
    };
    function Jn(a, c) {
        yi.call(this, 0, c);
        this.b = document.createElement("CANVAS");
        this.b.style.width = "100%";
        this.b.style.height = "100%";
        this.b.className = "ol-unselectable";
        tf(a, this.b, 0);
        this.U = this.B = 0;
        this.M = Mg();
        this.j = !0;
        this.f = Sg(this.b, {
            antialias: !0,
            depth: !1,
            failIfMajorPerformanceCaveat: !0,
            preserveDrawingBuffer: !1,
            stencil: !0
        });
        this.c = new Xm(this.b, this.f);
        C(this.b, "webglcontextlost", this.Jm, this);
        C(this.b, "webglcontextrestored", this.Km, this);
        this.a = new Kf;
        this.v = null;
        this.o = new Di(function (a) {
            var c =
                a[1];
            a = a[2];
            var f = c[0] - this.v[0], c = c[1] - this.v[1];
            return 65536 * Math.log(a) + Math.sqrt(f * f + c * c) / a
        }.bind(this), function (a) {
            return a[0].gb()
        });
        this.N = function () {
            if (!this.o.Sa()) {
                Hi(this.o);
                var a = Ei(this.o);
                Hn(this, a[0], a[3], a[4])
            }
            return !1
        }.bind(this);
        this.l = 0;
        Kn(this)
    }

    y(Jn, yi);
    function Hn(a, c, d, e) {
        var f = a.f, g = c.gb();
        if (Lf(a.a, g))a = a.a.get(g), f.bindTexture(3553, a.ob), 9729 != a.Rg && (f.texParameteri(3553, 10240, 9729), a.Rg = 9729), 9729 != a.Tg && (f.texParameteri(3553, 10240, 9729), a.Tg = 9729); else {
            var h = f.createTexture();
            f.bindTexture(3553, h);
            if (0 < e) {
                var k = a.M.canvas, m = a.M;
                a.B !== d[0] || a.U !== d[1] ? (k.width = d[0], k.height = d[1], a.B = d[0], a.U = d[1]) : m.clearRect(0, 0, d[0], d[1]);
                m.drawImage(c.ab(), e, e, d[0], d[1], 0, 0, d[0], d[1]);
                f.texImage2D(3553, 0, 6408, 6408, 5121, k)
            } else f.texImage2D(3553, 0, 6408, 6408,
                5121, c.ab());
            f.texParameteri(3553, 10240, 9729);
            f.texParameteri(3553, 10241, 9729);
            f.texParameteri(3553, 10242, 33071);
            f.texParameteri(3553, 10243, 33071);
            a.a.set(g, {ob: h, Rg: 9729, Tg: 9729})
        }
    }

    l = Jn.prototype;
    l.Te = function (a) {
        return a instanceof Uj ? new An(this, a) : a instanceof Vj ? new Gn(this, a) : a instanceof H ? new In(this, a) : null
    };
    function Ln(a, c, d) {
        var e = a.i;
        if (lb(e, c)) {
            a = a.c;
            var f = d.viewState;
            e.b(new ci(c, e, new tn(a, f.center, f.resolution, f.rotation, d.size, d.extent, d.pixelRatio), d, null, a))
        }
    }

    l.fa = function () {
        var a = this.f;
        a.isContextLost() || this.a.forEach(function (c) {
            c && a.deleteTexture(c.ob)
        });
        fb(this.c);
        Jn.ia.fa.call(this)
    };
    l.Cj = function (a, c) {
        for (var d = this.f, e; 1024 < this.a.rc() - this.l;) {
            if (e = this.a.b.kc)d.deleteTexture(e.ob); else if (+this.a.b.Yb == c.index)break; else--this.l;
            this.a.pop()
        }
    };
    l.X = function () {
        return "webgl"
    };
    l.Jm = function (a) {
        a.preventDefault();
        this.a.clear();
        this.l = 0;
        a = this.g;
        for (var c in a)a[c].vf()
    };
    l.Km = function () {
        Kn(this);
        this.i.render()
    };
    function Kn(a) {
        a = a.f;
        a.activeTexture(33984);
        a.blendFuncSeparate(770, 771, 1, 771);
        a.disable(2884);
        a.disable(2929);
        a.disable(3089);
        a.disable(2960)
    }

    l.xe = function (a) {
        var c = this.c, d = this.f;
        if (d.isContextLost())return !1;
        if (!a)return this.j && (Cf(this.b, !1), this.j = !1), !1;
        this.v = a.focus;
        this.a.set((-a.index).toString(), null);
        ++this.l;
        Ln(this, "precompose", a);
        var e = [], f = a.layerStatesArray;
        Bb(f);
        var g = a.viewState.resolution, h, k, m, n;
        h = 0;
        for (k = f.length; h < k; ++h)n = f[h], ei(n, g) && "ready" == n.R && (m = Bi(this, n.layer), m.wf(a, n, c) && e.push(n));
        f = a.size[0] * a.pixelRatio;
        g = a.size[1] * a.pixelRatio;
        if (this.b.width != f || this.b.height != g)this.b.width = f, this.b.height = g;
        d.bindFramebuffer(36160,
            null);
        d.clearColor(0, 0, 0, 0);
        d.clear(16384);
        d.enable(3042);
        d.viewport(0, 0, this.b.width, this.b.height);
        h = 0;
        for (k = e.length; h < k; ++h)n = e[h], m = Bi(this, n.layer), m.qh(a, n, c);
        this.j || (Cf(this.b, !0), this.j = !0);
        zi(a);
        1024 < this.a.rc() - this.l && a.postRenderFunctions.push(this.Cj.bind(this));
        this.o.Sa() || (a.postRenderFunctions.push(this.N), a.animate = !0);
        Ln(this, "postcompose", a);
        Ci(this, a);
        a.postRenderFunctions.push(Ai)
    };
    l.oa = function (a, c, d, e, f, g) {
        var h;
        if (this.f.isContextLost())return !1;
        var k = c.viewState, m = c.layerStatesArray, n;
        for (n = m.length - 1; 0 <= n; --n) {
            h = m[n];
            var p = h.layer;
            if (ei(h, k.resolution) && f.call(g, p) && (h = Bi(this, p).oa(a, c, d, e)))return h
        }
    };
    l.nh = function (a, c, d, e) {
        var f = !1;
        if (this.f.isContextLost())return !1;
        var g = c.viewState, h = c.layerStatesArray, k;
        for (k = h.length - 1; 0 <= k; --k) {
            var m = h[k], n = m.layer;
            if (ei(m, g.resolution) && d.call(e, n) && (f = Bi(this, n).ge(a, c)))return !0
        }
        return f
    };
    l.mh = function (a, c, d, e, f) {
        if (this.f.isContextLost())return !1;
        var g = c.viewState, h, k = c.layerStatesArray, m;
        for (m = k.length - 1; 0 <= m; --m) {
            h = k[m];
            var n = h.layer;
            if (ei(h, g.resolution) && f.call(e, n) && (h = Bi(this, n).xc(a, c, d, e)))return h
        }
    };
    var Mn = ["canvas", "webgl", "dom"];

    function S(a) {
        pb.call(this);
        var c = Nn(a);
        this.Db = void 0 !== a.loadTilesWhileAnimating ? a.loadTilesWhileAnimating : !1;
        this.Cc = void 0 !== a.loadTilesWhileInteracting ? a.loadTilesWhileInteracting : !1;
        this.Ke = void 0 !== a.pixelRatio ? a.pixelRatio : Yg;
        this.Je = c.logos;
        this.Y = function () {
            this.i = void 0;
            this.Oo.call(this, Date.now())
        }.bind(this);
        this.Ra = hd();
        this.Le = hd();
        this.pb = 0;
        this.f = null;
        this.xa = Wb();
        this.N = this.S = null;
        this.a = document.createElement("DIV");
        this.a.className = "ol-viewport" + (ch ? " ol-touch" : "");
        this.a.style.position =
            "relative";
        this.a.style.overflow = "hidden";
        this.a.style.width = "100%";
        this.a.style.height = "100%";
        this.a.style.msTouchAction = "none";
        this.a.style.touchAction = "none";
        this.B = document.createElement("DIV");
        this.B.className = "ol-overlaycontainer";
        this.a.appendChild(this.B);
        this.v = document.createElement("DIV");
        this.v.className = "ol-overlaycontainer-stopevent";
        a = ["click", "dblclick", "mousedown", "touchstart", "mspointerdown", Wh, "mousewheel", "wheel"];
        for (var d = 0, e = a.length; d < e; ++d)C(this.v, a[d], hb);
        this.a.appendChild(this.v);
        this.wa = new Oh(this);
        for (var f in Zh)C(this.wa, Zh[f], this.Kg, this);
        this.ea = c.keyboardEventTarget;
        this.s = null;
        C(this.a, "wheel", this.Jc, this);
        C(this.a, "mousewheel", this.Jc, this);
        this.o = c.controls;
        this.l = c.interactions;
        this.j = c.overlays;
        this.yf = {};
        this.M = new c.Qo(this.a, this);
        this.T = null;
        this.R = [];
        this.ta = [];
        this.na = new Ii(this.xk.bind(this), this.dl.bind(this));
        this.ze = {};
        C(this, rb("layergroup"), this.Kk, this);
        C(this, rb("view"), this.el, this);
        C(this, rb("size"), this.al, this);
        C(this, rb("target"), this.cl,
            this);
        this.C(c.values);
        this.o.forEach(function (a) {
            a.setMap(this)
        }, this);
        C(this.o, "add", function (a) {
            a.element.setMap(this)
        }, this);
        C(this.o, "remove", function (a) {
            a.element.setMap(null)
        }, this);
        this.l.forEach(function (a) {
            a.setMap(this)
        }, this);
        C(this.l, "add", function (a) {
            a.element.setMap(this)
        }, this);
        C(this.l, "remove", function (a) {
            a.element.setMap(null)
        }, this);
        this.j.forEach(this.ig, this);
        C(this.j, "add", function (a) {
            this.ig(a.element)
        }, this);
        C(this.j, "remove", function (a) {
            var c = a.element.Wa();
            void 0 !== c && delete this.yf[c.toString()];
            a.element.setMap(null)
        }, this)
    }

    y(S, pb);
    l = S.prototype;
    l.pj = function (a) {
        this.o.push(a)
    };
    l.qj = function (a) {
        this.l.push(a)
    };
    l.gg = function (a) {
        this.sc().Oc().push(a)
    };
    l.hg = function (a) {
        this.j.push(a)
    };
    l.ig = function (a) {
        var c = a.Wa();
        void 0 !== c && (this.yf[c.toString()] = a);
        a.setMap(this)
    };
    l.Va = function (a) {
        this.render();
        Array.prototype.push.apply(this.R, arguments)
    };
    l.fa = function () {
        fb(this.wa);
        fb(this.M);
        cb(this.a, "wheel", this.Jc, this);
        cb(this.a, "mousewheel", this.Jc, this);
        void 0 !== this.c && (qa.removeEventListener("resize", this.c, !1), this.c = void 0);
        this.i && (qa.cancelAnimationFrame(this.i), this.i = void 0);
        this.$g(null);
        S.ia.fa.call(this)
    };
    l.ed = function (a, c, d, e, f) {
        if (this.f)return a = this.Ma(a), this.M.oa(a, this.f, c, void 0 !== d ? d : null, void 0 !== e ? e : Ac, void 0 !== f ? f : null)
    };
    l.Pl = function (a, c, d, e, f) {
        if (this.f)return this.M.mh(a, this.f, c, void 0 !== d ? d : null, void 0 !== e ? e : Ac, void 0 !== f ? f : null)
    };
    l.gl = function (a, c, d) {
        if (!this.f)return !1;
        a = this.Ma(a);
        return this.M.nh(a, this.f, void 0 !== c ? c : Ac, void 0 !== d ? d : null)
    };
    l.Sj = function (a) {
        return this.Ma(this.Nd(a))
    };
    l.Nd = function (a) {
        var c = this.a.getBoundingClientRect();
        a = a.changedTouches ? a.changedTouches[0] : a;
        return [a.clientX - c.left, a.clientY - c.top]
    };
    l.pf = function () {
        return this.get("target")
    };
    l.tc = function () {
        var a = this.pf();
        return void 0 !== a ? mf(a) : null
    };
    l.Ma = function (a) {
        var c = this.f;
        return c ? (a = a.slice(), ji(c.pixelToCoordinateMatrix, a, a)) : null
    };
    l.Qj = function () {
        return this.o
    };
    l.jk = function () {
        return this.j
    };
    l.ik = function (a) {
        a = this.yf[a.toString()];
        return void 0 !== a ? a : null
    };
    l.Xj = function () {
        return this.l
    };
    l.sc = function () {
        return this.get("layergroup")
    };
    l.Zg = function () {
        return this.sc().Oc()
    };
    l.Da = function (a) {
        var c = this.f;
        return c ? (a = a.slice(0, 2), ji(c.coordinateToPixelMatrix, a, a)) : null
    };
    l.$a = function () {
        return this.get("size")
    };
    l.aa = function () {
        return this.get("view")
    };
    l.zk = function () {
        return this.a
    };
    l.xk = function (a, c, d, e) {
        var f = this.f;
        if (!(f && c in f.wantedTiles && f.wantedTiles[c][a.ja.toString()]))return Infinity;
        a = d[0] - f.focus[0];
        d = d[1] - f.focus[1];
        return 65536 * Math.log(e) + Math.sqrt(a * a + d * d) / e
    };
    l.Jc = function (a, c) {
        var d = new Mh(c || a.type, this, a);
        this.Kg(d)
    };
    l.Kg = function (a) {
        if (this.f) {
            this.T = a.coordinate;
            a.frameState = this.f;
            var c = this.l.a, d;
            if (!1 !== this.b(a))for (d = c.length - 1; 0 <= d; d--) {
                var e = c[d];
                if (e.f() && !e.handleEvent(a))break
            }
        }
    };
    l.Zk = function () {
        var a = this.f, c = this.na;
        if (!c.Sa()) {
            var d = 16, e = d;
            if (a) {
                var f = a.viewHints;
                f[0] && (d = this.Db ? 8 : 0, e = 2);
                f[1] && (d = this.Cc ? 8 : 0, e = 2)
            }
            c.i < d && (Hi(c), Ji(c, d, e))
        }
        c = this.ta;
        d = 0;
        for (e = c.length; d < e; ++d)c[d](this, a);
        c.length = 0
    };
    l.al = function () {
        this.render()
    };
    l.cl = function () {
        var a;
        this.pf() && (a = this.tc());
        if (this.s) {
            for (var c = 0, d = this.s.length; c < d; ++c)Xa(this.s[c]);
            this.s = null
        }
        a ? (a.appendChild(this.a), a = this.ea ? this.ea : a, this.s = [C(a, "keydown", this.Jc, this), C(a, "keypress", this.Jc, this)], this.c || (this.c = this.Sc.bind(this), qa.addEventListener("resize", this.c, !1))) : (uf(this.a), void 0 !== this.c && (qa.removeEventListener("resize", this.c, !1), this.c = void 0));
        this.Sc()
    };
    l.dl = function () {
        this.render()
    };
    l.fl = function () {
        this.render()
    };
    l.el = function () {
        this.S && (Xa(this.S), this.S = null);
        var a = this.aa();
        a && (this.S = C(a, "propertychange", this.fl, this));
        this.render()
    };
    l.Lk = function () {
        this.render()
    };
    l.Mk = function () {
        this.render()
    };
    l.Kk = function () {
        this.N && (this.N.forEach(Xa), this.N = null);
        var a = this.sc();
        a && (this.N = [C(a, "propertychange", this.Mk, this), C(a, "change", this.Lk, this)]);
        this.render()
    };
    l.Po = function () {
        this.i && qa.cancelAnimationFrame(this.i);
        this.Y()
    };
    l.render = function () {
        void 0 === this.i && (this.i = qa.requestAnimationFrame(this.Y))
    };
    l.Io = function (a) {
        return this.o.remove(a)
    };
    l.Jo = function (a) {
        return this.l.remove(a)
    };
    l.Lo = function (a) {
        return this.sc().Oc().remove(a)
    };
    l.Mo = function (a) {
        return this.j.remove(a)
    };
    l.Oo = function (a) {
        var c, d, e, f = this.$a(), g = this.aa(), h = Wb(), k = null;
        if (void 0 !== f && 0 < f[0] && 0 < f[1] && g && ge(g)) {
            var k = ce(g, this.f ? this.f.viewHints : void 0), m = this.sc().df(), n = {};
            c = 0;
            for (d = m.length; c < d; ++c)n[w(m[c].layer)] = m[c];
            e = g.V();
            k = {
                animate: !1,
                attributions: {},
                coordinateToPixelMatrix: this.Ra,
                extent: h,
                focus: this.T ? this.T : e.center,
                index: this.pb++,
                layerStates: n,
                layerStatesArray: m,
                logos: Pa({}, this.Je),
                pixelRatio: this.Ke,
                pixelToCoordinateMatrix: this.Le,
                postRenderFunctions: [],
                size: f,
                skippedFeatureUids: this.ze,
                tileQueue: this.na,
                time: a,
                usedTiles: {},
                viewState: e,
                viewHints: k,
                wantedTiles: {}
            }
        }
        if (k) {
            a = this.R;
            c = f = 0;
            for (d = a.length; c < d; ++c)g = a[c], g(this, k) && (a[f++] = g);
            a.length = f;
            k.extent = uc(e.center, e.resolution, e.rotation, k.size, h)
        }
        this.f = k;
        this.M.xe(k);
        k && (k.animate && this.render(), Array.prototype.push.apply(this.ta, k.postRenderFunctions), 0 !== this.R.length || k.viewHints[0] || k.viewHints[1] || ic(k.extent, this.xa) || (this.b(new If("moveend", this, k)), Zb(k.extent, this.xa)));
        this.b(new If("postrender", this, k));
        Fg(this.Zk,
            this)
    };
    l.ei = function (a) {
        this.set("layergroup", a)
    };
    l.Sf = function (a) {
        this.set("size", a)
    };
    l.$g = function (a) {
        this.set("target", a)
    };
    l.ep = function (a) {
        this.set("view", a)
    };
    l.ni = function (a) {
        a = w(a).toString();
        this.ze[a] = !0;
        this.render()
    };
    l.Sc = function () {
        var a = this.tc();
        if (a) {
            var c = lf(a), d = Se && a.currentStyle, e;
            if (e = d)jf(c), e = !0;
            if (e && "auto" != d.width && "auto" != d.height && !d.boxSizing)c = Df(a, d.width, "width", "pixelWidth"), a = Df(a, d.height, "height", "pixelHeight"), a = new hf(c, a); else {
                d = new hf(a.offsetWidth, a.offsetHeight);
                c = Ff(a, "padding");
                if (!Se || 9 <= Number(ef))e = yf(a, "borderLeftWidth"), f = yf(a, "borderRightWidth"), g = yf(a, "borderTopWidth"), a = yf(a, "borderBottomWidth"), a = new xf(parseFloat(g), parseFloat(f), parseFloat(a), parseFloat(e)); else {
                    e = Hf(a,
                        "borderLeft");
                    var f = Hf(a, "borderRight"), g = Hf(a, "borderTop"), a = Hf(a, "borderBottom"), a = new xf(g, f, a, e)
                }
                a = new hf(d.width - a.left - c.left - c.right - a.right, d.height - a.top - c.top - c.bottom - a.bottom)
            }
            this.Sf([a.width, a.height])
        } else this.Sf(void 0)
    };
    l.ri = function (a) {
        a = w(a).toString();
        delete this.ze[a];
        this.render()
    };
    function Nn(a) {
        var c = null;
        void 0 !== a.keyboardEventTarget && (c = "string" === typeof a.keyboardEventTarget ? document.getElementById(a.keyboardEventTarget) : a.keyboardEventTarget);
        var d = {}, e = {};
        if (void 0 === a.logo || "boolean" === typeof a.logo && a.logo)e["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"] =
            "http://openlayers.org/"; else {
            var f = a.logo;
            "string" === typeof f ? e[f] = "" : f instanceof HTMLElement ? e[w(f).toString()] = f : ha(f) && (e[f.src] = f.href)
        }
        f = a.layers instanceof Kj ? a.layers : new Kj({layers: a.layers});
        d.layergroup = f;
        d.target = a.target;
        d.view = void 0 !== a.view ? a.view : new be;
        var f = yi, g;
        void 0 !== a.renderer ? Array.isArray(a.renderer) ? g = a.renderer : "string" === typeof a.renderer && (g = [a.renderer]) : g = Mn;
        var h, k;
        h = 0;
        for (k = g.length; h < k; ++h) {
            var m = g[h];
            if ("canvas" == m) {
                if ($g) {
                    f = Gm;
                    break
                }
            } else if ("dom" == m) {
                f = Om;
                break
            } else if ("webgl" ==
                m && Tg) {
                f = Jn;
                break
            }
        }
        var n;
        void 0 !== a.controls ? n = Array.isArray(a.controls) ? new we(a.controls.slice()) : a.controls : n = wg();
        var p;
        void 0 !== a.interactions ? p = Array.isArray(a.interactions) ? new we(a.interactions.slice()) : a.interactions : p = Jj();
        a = void 0 !== a.overlays ? Array.isArray(a.overlays) ? new we(a.overlays.slice()) : a.overlays : new we;
        return {controls: n, interactions: p, keyboardEventTarget: c, logos: e, overlays: a, Qo: f, values: d}
    }

    Tj();
    function On(a) {
        pb.call(this);
        this.j = a.id;
        this.o = void 0 !== a.insertFirst ? a.insertFirst : !0;
        this.s = void 0 !== a.stopEvent ? a.stopEvent : !0;
        this.f = document.createElement("DIV");
        this.f.className = "ol-overlay-container";
        this.f.style.position = "absolute";
        this.autoPan = void 0 !== a.autoPan ? a.autoPan : !1;
        this.i = void 0 !== a.autoPanAnimation ? a.autoPanAnimation : {};
        this.l = void 0 !== a.autoPanMargin ? a.autoPanMargin : 20;
        this.a = {Hd: "", $d: "", ye: "", Be: "", visible: !0};
        this.c = null;
        C(this, rb("element"), this.Fk, this);
        C(this, rb("map"),
            this.Rk, this);
        C(this, rb("offset"), this.Vk, this);
        C(this, rb("position"), this.Xk, this);
        C(this, rb("positioning"), this.Yk, this);
        void 0 !== a.element && this.ai(a.element);
        this.gi(void 0 !== a.offset ? a.offset : [0, 0]);
        this.ji(void 0 !== a.positioning ? a.positioning : "top-left");
        void 0 !== a.position && this.qf(a.position)
    }

    y(On, pb);
    l = On.prototype;
    l.be = function () {
        return this.get("element")
    };
    l.Wa = function () {
        return this.j
    };
    l.ce = function () {
        return this.get("map")
    };
    l.Fg = function () {
        return this.get("offset")
    };
    l.ah = function () {
        return this.get("position")
    };
    l.Gg = function () {
        return this.get("positioning")
    };
    l.Fk = function () {
        sf(this.f);
        var a = this.be();
        a && this.f.appendChild(a)
    };
    l.Rk = function () {
        this.c && (uf(this.f), Xa(this.c), this.c = null);
        var a = this.ce();
        a && (this.c = C(a, "postrender", this.render, this), Pn(this), a = this.s ? a.v : a.B, this.o ? tf(a, this.f, 0) : a.appendChild(this.f))
    };
    l.render = function () {
        Pn(this)
    };
    l.Vk = function () {
        Pn(this)
    };
    l.Xk = function () {
        Pn(this);
        if (void 0 !== this.get("position") && this.autoPan) {
            var a = this.ce();
            if (void 0 !== a && a.tc()) {
                var c = Qn(a.tc(), a.$a()), d = this.be(), e = d.offsetWidth, f = d.currentStyle || qa.getComputedStyle(d), e = e + (parseInt(f.marginLeft, 10) + parseInt(f.marginRight, 10)), f = d.offsetHeight, g = d.currentStyle || qa.getComputedStyle(d), f = f + (parseInt(g.marginTop, 10) + parseInt(g.marginBottom, 10)), h = Qn(d, [e, f]), d = this.l;
                cc(c, h) || (e = h[0] - c[0], f = c[2] - h[2], g = h[1] - c[1], h = c[3] - h[3], c = [0, 0], 0 > e ? c[0] = e - d : 0 > f && (c[0] = Math.abs(f) +
                    d), 0 > g ? c[1] = g - d : 0 > h && (c[1] = Math.abs(h) + d), 0 === c[0] && 0 === c[1]) || (d = a.aa().bb(), e = a.Da(d), c = [e[0] + c[0], e[1] + c[1]], this.i && (this.i.source = d, a.Va(ne(this.i))), a.aa().jb(a.Ma(c)))
            }
        }
    };
    l.Yk = function () {
        Pn(this)
    };
    l.ai = function (a) {
        this.set("element", a)
    };
    l.setMap = function (a) {
        this.set("map", a)
    };
    l.gi = function (a) {
        this.set("offset", a)
    };
    l.qf = function (a) {
        this.set("position", a)
    };
    function Qn(a, c) {
        var d = lf(a), e = new gf(0, 0), f;
        f = d ? lf(d) : document;
        var g;
        (g = !Se || 9 <= Number(ef)) || (jf(f), g = !0);
        a != (g ? f.documentElement : f.body) && (f = zf(a), g = jf(d).b, d = g.scrollingElement ? g.scrollingElement : Ve ? g.body || g.documentElement : g.documentElement, g = g.parentWindow || g.defaultView, d = Se && cf("10") && g.pageYOffset != d.scrollTop ? new gf(d.scrollLeft, d.scrollTop) : new gf(g.pageXOffset || d.scrollLeft, g.pageYOffset || d.scrollTop), e.x = f.left + d.x, e.y = f.top + d.y);
        return [e.x, e.y, e.x + c[0], e.y + c[1]]
    }

    l.ji = function (a) {
        this.set("positioning", a)
    };
    function Rn(a, c) {
        a.a.visible !== c && (Cf(a.f, c), a.a.visible = c)
    }

    function Pn(a) {
        var c = a.ce(), d = a.ah();
        if (void 0 !== c && c.f && void 0 !== d) {
            var d = c.Da(d), e = c.$a(), c = a.f.style, f = a.Fg(), g = a.Gg(), h = f[0], f = f[1];
            if ("bottom-right" == g || "center-right" == g || "top-right" == g)"" !== a.a.$d && (a.a.$d = c.left = ""), h = Math.round(e[0] - d[0] - h) + "px", a.a.ye != h && (a.a.ye = c.right = h); else {
                "" !== a.a.ye && (a.a.ye = c.right = "");
                if ("bottom-center" == g || "center-center" == g || "top-center" == g)h -= Af(a.f).width / 2;
                h = Math.round(d[0] + h) + "px";
                a.a.$d != h && (a.a.$d = c.left = h)
            }
            if ("bottom-left" == g || "bottom-center" == g || "bottom-right" ==
                g)"" !== a.a.Be && (a.a.Be = c.top = ""), d = Math.round(e[1] - d[1] - f) + "px", a.a.Hd != d && (a.a.Hd = c.bottom = d); else {
                "" !== a.a.Hd && (a.a.Hd = c.bottom = "");
                if ("center-left" == g || "center-center" == g || "center-right" == g)f -= Af(a.f).height / 2;
                d = Math.round(d[1] + f) + "px";
                a.a.Be != d && (a.a.Be = c.top = d)
            }
            Rn(a, !0)
        } else Rn(a, !1)
    };
    function Sn(a) {
        a = a ? a : {};
        this.l = void 0 !== a.collapsed ? a.collapsed : !0;
        this.o = void 0 !== a.collapsible ? a.collapsible : !0;
        this.o || (this.l = !1);
        var c = void 0 !== a.className ? a.className : "ol-overviewmap", d = void 0 !== a.tipLabel ? a.tipLabel : "Overview map", e = void 0 !== a.collapseLabel ? a.collapseLabel : "\u00ab";
        this.v = "string" === typeof e ? pf("SPAN", {}, e) : e;
        e = void 0 !== a.label ? a.label : "\u00bb";
        this.B = "string" === typeof e ? pf("SPAN", {}, e) : e;
        d = pf("BUTTON", {type: "button", title: d}, this.o && !this.l ? this.v : this.B);
        C(d, "click", this.am,
            this);
        e = document.createElement("DIV");
        e.className = "ol-overviewmap-map";
        var f = this.f = new S({controls: new we, interactions: new we, target: e, view: a.view});
        a.layers && a.layers.forEach(function (a) {
            f.gg(a)
        }, this);
        var g = document.createElement("DIV");
        g.className = "ol-overviewmap-box";
        g.style.boxSizing = "border-box";
        this.j = new On({position: [0, 0], positioning: "bottom-left", element: g});
        this.f.hg(this.j);
        c = pf("DIV", c + " ol-unselectable ol-control" + (this.l && this.o ? " ol-collapsed" : "") + (this.o ? "" : " ol-uncollapsible"),
            e, d);
        Jf.call(this, {element: c, render: a.render ? a.render : Tn, target: a.target})
    }

    y(Sn, Jf);
    l = Sn.prototype;
    l.setMap = function (a) {
        var c = this.a;
        a !== c && (c && (c = c.aa()) && cb(c, rb("rotation"), this.Yd, this), Sn.ia.setMap.call(this, a), a && (this.s.push(C(a, "propertychange", this.Sk, this)), 0 === this.f.Zg().Zb() && this.f.ei(a.sc()), a = a.aa())) && (C(a, rb("rotation"), this.Yd, this), ge(a) && (this.f.Sc(), Un(this)))
    };
    l.Sk = function (a) {
        "view" === a.key && ((a = a.oldValue) && cb(a, rb("rotation"), this.Yd, this), a = this.a.aa(), C(a, rb("rotation"), this.Yd, this))
    };
    l.Yd = function () {
        this.f.aa().de(this.a.aa().Ka())
    };
    function Tn() {
        var a = this.a, c = this.f;
        if (a.f && c.f) {
            var d = a.$a(), a = a.aa().Fc(d), e = c.$a(), d = c.aa().Fc(e), f = c.Da(oc(a)), g = c.Da(mc(a)), c = Math.abs(f[0] - g[0]), f = Math.abs(f[1] - g[1]), g = e[0], e = e[1];
            c < .1 * g || f < .1 * e || c > .75 * g || f > .75 * e ? Un(this) : cc(d, a) || (a = this.f, d = this.a.aa(), a.aa().jb(d.bb()))
        }
        Vn(this)
    }

    function Un(a) {
        var c = a.a;
        a = a.f;
        var d = c.$a(), c = c.aa().Fc(d), d = a.$a();
        a = a.aa();
        yc(c, 1 / (.1 * Math.pow(2, Math.log(7.5) / Math.LN2 / 2)));
        a.Ze(c, d)
    }

    function Vn(a) {
        var c = a.a, d = a.f;
        if (c.f && d.f) {
            var e = c.$a(), f = c.aa(), g = d.aa();
            d.$a();
            var d = f.Ka(), c = a.j, h = a.j.be(), f = f.Fc(e), e = g.$(), g = lc(f), f = nc(f), k;
            if (a = a.a.aa().bb())k = [g[0] - a[0], g[1] - a[1]], Rb(k, d), Mb(k, a);
            c.qf(k);
            h && (h.style.width = Math.abs((g[0] - f[0]) / e) + "px", h.style.height = Math.abs((f[1] - g[1]) / e) + "px")
        }
    }

    l.am = function (a) {
        a.preventDefault();
        Wn(this)
    };
    function Wn(a) {
        a.element.classList.toggle("ol-collapsed");
        a.l ? vf(a.v, a.B) : vf(a.B, a.v);
        a.l = !a.l;
        var c = a.f;
        a.l || c.f || (c.Sc(), Un(a), bb(c, "postrender", function () {
            Vn(this)
        }, a))
    }

    l.$l = function () {
        return this.o
    };
    l.cm = function (a) {
        this.o !== a && (this.o = a, this.element.classList.toggle("ol-uncollapsible"), !a && this.l && Wn(this))
    };
    l.bm = function (a) {
        this.o && this.l !== a && Wn(this)
    };
    l.Zl = function () {
        return this.l
    };
    l.kk = function () {
        return this.f
    };
    function Xn(a) {
        a = a ? a : {};
        var c = void 0 !== a.className ? a.className : "ol-scale-line";
        this.o = document.createElement("DIV");
        this.o.className = c + "-inner";
        this.f = document.createElement("DIV");
        this.f.className = c + " ol-unselectable";
        this.f.appendChild(this.o);
        this.v = null;
        this.j = void 0 !== a.minWidth ? a.minWidth : 64;
        this.l = !1;
        this.M = void 0;
        this.B = "";
        Jf.call(this, {element: this.f, render: a.render ? a.render : Yn, target: a.target});
        C(this, rb("units"), this.R, this);
        this.N(a.units || "metric")
    }

    y(Xn, Jf);
    var Zn = [1, 2, 5];
    Xn.prototype.vb = function () {
        return this.get("units")
    };
    function Yn(a) {
        (a = a.frameState) ? this.v = a.viewState : this.v = null;
        $n(this)
    }

    Xn.prototype.R = function () {
        $n(this)
    };
    Xn.prototype.N = function (a) {
        this.set("units", a)
    };
    function $n(a) {
        var c = a.v;
        if (c) {
            var d = c.projection, e = d.Vb(), c = d.getPointResolution(c.resolution, c.center) * e, e = a.j * c, d = "", f = a.vb();
            "degrees" == f ? (d = Ec.degrees, c /= d, e < d / 60 ? (d = "\u2033", c *= 3600) : e < d ? (d = "\u2032", c *= 60) : d = "\u00b0") : "imperial" == f ? .9144 > e ? (d = "in", c /= .0254) : 1609.344 > e ? (d = "ft", c /= .3048) : (d = "mi", c /= 1609.344) : "nautical" == f ? (c /= 1852, d = "nm") : "metric" == f ? 1 > e ? (d = "mm", c *= 1E3) : 1E3 > e ? d = "m" : (d = "km", c /= 1E3) : "us" == f && (.9144 > e ? (d = "in", c *= 39.37) : 1609.344 > e ? (d = "ft", c /= .30480061) : (d = "mi", c /= 1609.3472));
            for (var f =
                3 * Math.floor(Math.log(a.j * c) / Math.log(10)), g; ;) {
                g = Zn[(f % 3 + 3) % 3] * Math.pow(10, Math.floor(f / 3));
                e = Math.round(g / c);
                if (isNaN(e)) {
                    Cf(a.f, !1);
                    a.l = !1;
                    return
                }
                if (e >= a.j)break;
                ++f
            }
            c = g + " " + d;
            a.B != c && (a.o.innerHTML = c, a.B = c);
            a.M != e && (a.o.style.width = e + "px", a.M = e);
            a.l || (Cf(a.f, !0), a.l = !0)
        } else a.l && (Cf(a.f, !1), a.l = !1)
    };
    function ao(a) {
        a = a ? a : {};
        this.f = void 0;
        this.l = bo;
        this.v = [];
        this.M = this.j = 0;
        this.T = null;
        this.ea = !1;
        this.Y = void 0 !== a.duration ? a.duration : 200;
        var c = void 0 !== a.className ? a.className : "ol-zoomslider", d = pf("BUTTON", {
            type: "button",
            "class": c + "-thumb ol-unselectable"
        }), c = pf("DIV", [c, "ol-unselectable", "ol-control"], d);
        this.o = new Gh(c);
        C(this.o, qh, this.Ek, this);
        C(this.o, rh, this.Ig, this);
        C(this.o, sh, this.Jg, this);
        C(c, "click", this.Dk, this);
        C(d, "click", hb);
        Jf.call(this, {element: c, render: a.render ? a.render : co})
    }

    y(ao, Jf);
    ao.prototype.fa = function () {
        fb(this.o);
        ao.ia.fa.call(this)
    };
    var bo = 0;
    l = ao.prototype;
    l.setMap = function (a) {
        ao.ia.setMap.call(this, a);
        a && a.render()
    };
    function co(a) {
        if (a.frameState) {
            if (!this.ea) {
                var c = this.element, d = Af(c), e = c.firstElementChild, c = Ff(e, "margin"), f = new hf(e.offsetWidth, e.offsetHeight), e = f.width + c.right + c.left, c = f.height + c.top + c.bottom;
                this.T = [e, c];
                d.width > d.height ? (this.l = 1, this.M = d.width - e) : (this.l = bo, this.j = d.height - c);
                this.ea = !0
            }
            a = a.frameState.viewState.resolution;
            a !== this.f && (this.f = a, eo(this, a))
        }
    }

    l.Dk = function (a) {
        var c = this.a, d = c.aa(), e = d.$();
        c.Va(pe({resolution: e, duration: this.Y, easing: je}));
        a = fo(this, Da(1 === this.l ? (a.offsetX - this.T[0] / 2) / this.M : (a.offsetY - this.T[1] / 2) / this.j, 0, 1));
        d.Qb(d.constrainResolution(a))
    };
    l.Ek = function (a) {
        if (!this.B && a.b.target === this.element.firstElementChild && (he(this.a.aa(), 1), this.N = a.clientX, this.R = a.clientY, this.B = !0, 0 === this.v.length)) {
            a = this.Ig;
            var c = this.Jg;
            this.v.push(C(document, "mousemove", a, this), C(document, "touchmove", a, this), C(document, rh, a, this), C(document, "mouseup", c, this), C(document, "touchend", c, this), C(document, sh, c, this))
        }
    };
    l.Ig = function (a) {
        if (this.B) {
            var c = this.element.firstElementChild;
            this.f = fo(this, Da(1 === this.l ? (a.clientX - this.N + parseInt(c.style.left, 10)) / this.M : (a.clientY - this.R + parseInt(c.style.top, 10)) / this.j, 0, 1));
            this.a.aa().Qb(this.f);
            eo(this, this.f);
            this.N = a.clientX;
            this.R = a.clientY
        }
    };
    l.Jg = function () {
        if (this.B) {
            var a = this.a, c = a.aa();
            he(c, -1);
            a.Va(pe({resolution: this.f, duration: this.Y, easing: je}));
            a = c.constrainResolution(this.f);
            c.Qb(a);
            this.B = !1;
            this.R = this.N = void 0;
            this.v.forEach(Xa);
            this.v.length = 0
        }
    };
    function eo(a, c) {
        var d;
        d = 1 - fe(a.a.aa())(c);
        var e = a.element.firstElementChild;
        1 == a.l ? e.style.left = a.M * d + "px" : e.style.top = a.j * d + "px"
    }

    function fo(a, c) {
        return ee(a.a.aa())(1 - c)
    };
    function go(a) {
        a = a ? a : {};
        this.f = a.extent ? a.extent : null;
        var c = void 0 !== a.className ? a.className : "ol-zoom-extent", d = pf("BUTTON", {
            type: "button",
            title: void 0 !== a.tipLabel ? a.tipLabel : "Fit to extent"
        }, void 0 !== a.label ? a.label : "E");
        C(d, "click", this.l, this);
        c = pf("DIV", c + " ol-unselectable ol-control", d);
        Jf.call(this, {element: c, target: a.target})
    }

    y(go, Jf);
    go.prototype.l = function (a) {
        a.preventDefault();
        var c = this.a;
        a = c.aa();
        var d = this.f ? this.f : a.i.O(), c = c.$a();
        a.Ze(d, c)
    };
    function ho(a) {
        pb.call(this);
        a = a ? a : {};
        this.a = null;
        C(this, rb("tracking"), this.El, this);
        this.mf(void 0 !== a.tracking ? a.tracking : !1)
    }

    y(ho, pb);
    l = ho.prototype;
    l.fa = function () {
        this.mf(!1);
        ho.ia.fa.call(this)
    };
    l.Xn = function (a) {
        if (null !== a.alpha) {
            var c = Ha(a.alpha);
            this.set("alpha", c);
            "boolean" === typeof a.absolute && a.absolute ? this.set("heading", c) : fa(a.webkitCompassHeading) && -1 != a.webkitCompassAccuracy && this.set("heading", Ha(a.webkitCompassHeading))
        }
        null !== a.beta && this.set("beta", Ha(a.beta));
        null !== a.gamma && this.set("gamma", Ha(a.gamma));
        this.u()
    };
    l.Kj = function () {
        return this.get("alpha")
    };
    l.Nj = function () {
        return this.get("beta")
    };
    l.Uj = function () {
        return this.get("gamma")
    };
    l.Dl = function () {
        return this.get("heading")
    };
    l.Vg = function () {
        return this.get("tracking")
    };
    l.El = function () {
        if (ah) {
            var a = this.Vg();
            a && !this.a ? this.a = C(qa, "deviceorientation", this.Xn, this) : a || null === this.a || (Xa(this.a), this.a = null)
        }
    };
    l.mf = function (a) {
        this.set("tracking", a)
    };
    function io() {
        this.defaultDataProjection = null
    }

    function jo(a, c, d) {
        var e;
        d && (e = {
            dataProjection: d.dataProjection ? d.dataProjection : a.Oa(c),
            featureProjection: d.featureProjection
        });
        return ko(a, e)
    }

    function ko(a, c) {
        var d;
        c && (d = {
            featureProjection: c.featureProjection,
            dataProjection: c.dataProjection ? c.dataProjection : a.defaultDataProjection,
            rightHanded: c.rightHanded
        }, c.decimals && (d.decimals = c.decimals));
        return d
    }

    function lo(a, c, d) {
        var e = d ? Ic(d.featureProjection) : null, f = d ? Ic(d.dataProjection) : null, g;
        e && f && !Zc(e, f) ? a instanceof dd ? g = (c ? a.clone() : a).hb(c ? e : f, c ? f : e) : g = cd(c ? a.slice() : a, c ? e : f, c ? f : e) : g = a;
        if (c && d && d.decimals) {
            var h = Math.pow(10, d.decimals);
            a = function (a) {
                for (var c = 0, d = a.length; c < d; ++c)a[c] = Math.round(a[c] * h) / h;
                return a
            };
            Array.isArray(g) ? a(g) : g.mc(a)
        }
        return g
    };
    function mo() {
        this.defaultDataProjection = null
    }

    y(mo, io);
    function no(a) {
        return ha(a) ? a : "string" === typeof a ? (a = JSON.parse(a)) ? a : null : null
    }

    l = mo.prototype;
    l.X = function () {
        return "json"
    };
    l.Nb = function (a, c) {
        return this.Pc(no(a), jo(this, a, c))
    };
    l.Ca = function (a, c) {
        return this.Ff(no(a), jo(this, a, c))
    };
    l.Qc = function (a, c) {
        return this.Mh(no(a), jo(this, a, c))
    };
    l.Oa = function (a) {
        return this.Th(no(a))
    };
    l.yd = function (a, c) {
        return JSON.stringify(this.Tc(a, c))
    };
    l.Sb = function (a, c) {
        return JSON.stringify(this.Ee(a, c))
    };
    l.Uc = function (a, c) {
        return JSON.stringify(this.Ge(a, c))
    };
    function oo(a, c, d, e, f, g) {
        var h = NaN, k = NaN, m = (d - c) / e;
        if (0 !== m)if (1 == m)h = a[c], k = a[c + 1]; else if (2 == m)h = (1 - f) * a[c] + f * a[c + e], k = (1 - f) * a[c + 1] + f * a[c + e + 1]; else {
            var k = a[c], m = a[c + 1], n = 0, h = [0], p;
            for (p = c + e; p < d; p += e) {
                var q = a[p], r = a[p + 1], n = n + Math.sqrt((q - k) * (q - k) + (r - m) * (r - m));
                h.push(n);
                k = q;
                m = r
            }
            d = f * n;
            m = 0;
            n = h.length;
            for (p = !1; m < n;)f = m + (n - m >> 1), k = +tb(h[f], d), 0 > k ? m = f + 1 : (n = f, p = !k);
            f = p ? m : ~m;
            0 > f ? (d = (d - h[-f - 2]) / (h[-f - 1] - h[-f - 2]), c += (-f - 2) * e, h = La(a[c], a[c + e], d), k = La(a[c + 1], a[c + e + 1], d)) : (h = a[c + f * e], k = a[c + f * e + 1])
        }
        return g ? (g[0] =
            h, g[1] = k, g) : [h, k]
    }

    function po(a, c, d, e, f, g) {
        if (d == c)return null;
        if (f < a[c + e - 1])return g ? (d = a.slice(c, c + e), d[e - 1] = f, d) : null;
        if (a[d - 1] < f)return g ? (d = a.slice(d - e, d), d[e - 1] = f, d) : null;
        if (f == a[c + e - 1])return a.slice(c, c + e);
        c /= e;
        for (d /= e; c < d;)g = c + d >> 1, f < a[(g + 1) * e - 1] ? d = g : c = g + 1;
        d = a[c * e - 1];
        if (f == d)return a.slice((c - 1) * e, (c - 1) * e + e);
        g = (f - d) / (a[(c + 1) * e - 1] - d);
        d = [];
        var h;
        for (h = 0; h < e - 1; ++h)d.push(La(a[(c - 1) * e + h], a[c * e + h], g));
        d.push(f);
        return d
    }

    function qo(a, c, d, e, f, g) {
        var h = 0;
        if (g)return po(a, h, c[c.length - 1], d, e, f);
        if (e < a[d - 1])return f ? (a = a.slice(0, d), a[d - 1] = e, a) : null;
        if (a[a.length - 1] < e)return f ? (a = a.slice(a.length - d), a[d - 1] = e, a) : null;
        f = 0;
        for (g = c.length; f < g; ++f) {
            var k = c[f];
            if (h != k) {
                if (e < a[h + d - 1])break;
                if (e <= a[k - 1])return po(a, h, k, d, e, !1);
                h = k
            }
        }
        return null
    };
    function T(a, c) {
        sd.call(this);
        this.i = null;
        this.M = this.N = this.j = -1;
        this.ma(a, c)
    }

    y(T, sd);
    l = T.prototype;
    l.rj = function (a) {
        this.A ? xb(this.A, a) : this.A = a.slice();
        this.u()
    };
    l.clone = function () {
        var a = new T(null);
        a.ba(this.f, this.A.slice());
        return a
    };
    l.rb = function (a, c, d, e) {
        if (e < $b(this.O(), a, c))return e;
        this.M != this.g && (this.N = Math.sqrt(zd(this.A, 0, this.A.length, this.a, 0)), this.M = this.g);
        return Bd(this.A, 0, this.A.length, this.a, this.N, !1, a, c, d, e)
    };
    l.Hj = function (a, c) {
        return Qd(this.A, 0, this.A.length, this.a, a, c)
    };
    l.fm = function (a, c) {
        return "XYM" != this.f && "XYZM" != this.f ? null : po(this.A, 0, this.A.length, this.a, a, void 0 !== c ? c : !1)
    };
    l.Z = function () {
        return Gd(this.A, 0, this.A.length, this.a)
    };
    l.wg = function (a, c) {
        return oo(this.A, 0, this.A.length, this.a, a, c)
    };
    l.gm = function () {
        var a = this.A, c = this.a, d = a[0], e = a[1], f = 0, g;
        for (g = 0 + c; g < this.A.length; g += c)var h = a[g], k = a[g + 1], f = f + Math.sqrt((h - d) * (h - d) + (k - e) * (k - e)), d = h, e = k;
        return f
    };
    function xk(a) {
        a.j != a.g && (a.i = a.wg(.5, a.i), a.j = a.g);
        return a.i
    }

    l.Ic = function (a) {
        var c = [];
        c.length = Id(this.A, 0, this.A.length, this.a, a, c, 0);
        a = new T(null);
        a.ba("XY", c);
        return a
    };
    l.X = function () {
        return "LineString"
    };
    l.Ia = function (a) {
        return Rd(this.A, 0, this.A.length, this.a, a)
    };
    l.ma = function (a, c) {
        a ? (vd(this, c, a, 1), this.A || (this.A = []), this.A.length = Ed(this.A, 0, a, this.a), this.u()) : this.ba("XY", null)
    };
    l.ba = function (a, c) {
        ud(this, a, c);
        this.u()
    };
    function U(a, c) {
        sd.call(this);
        this.i = [];
        this.j = this.M = -1;
        this.ma(a, c)
    }

    y(U, sd);
    l = U.prototype;
    l.sj = function (a) {
        this.A ? xb(this.A, a.ga().slice()) : this.A = a.ga().slice();
        this.i.push(this.A.length);
        this.u()
    };
    l.clone = function () {
        var a = new U(null);
        a.ba(this.f, this.A.slice(), this.i.slice());
        return a
    };
    l.rb = function (a, c, d, e) {
        if (e < $b(this.O(), a, c))return e;
        this.j != this.g && (this.M = Math.sqrt(Ad(this.A, 0, this.i, this.a, 0)), this.j = this.g);
        return Cd(this.A, 0, this.i, this.a, this.M, !1, a, c, d, e)
    };
    l.im = function (a, c, d) {
        return "XYM" != this.f && "XYZM" != this.f || 0 === this.A.length ? null : qo(this.A, this.i, this.a, a, void 0 !== c ? c : !1, void 0 !== d ? d : !1)
    };
    l.Z = function () {
        return Hd(this.A, 0, this.i, this.a)
    };
    l.zb = function () {
        return this.i
    };
    l.bk = function (a) {
        if (0 > a || this.i.length <= a)return null;
        var c = new T(null);
        c.ba(this.f, this.A.slice(0 === a ? 0 : this.i[a - 1], this.i[a]));
        return c
    };
    l.gd = function () {
        var a = this.A, c = this.i, d = this.f, e = [], f = 0, g, h;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var k = c[g], m = new T(null);
            m.ba(d, a.slice(f, k));
            e.push(m);
            f = k
        }
        return e
    };
    function yk(a) {
        var c = [], d = a.A, e = 0, f = a.i;
        a = a.a;
        var g, h;
        g = 0;
        for (h = f.length; g < h; ++g) {
            var k = f[g], e = oo(d, e, k, a, .5);
            xb(c, e);
            e = k
        }
        return c
    }

    l.Ic = function (a) {
        var c = [], d = [], e = this.A, f = this.i, g = this.a, h = 0, k = 0, m, n;
        m = 0;
        for (n = f.length; m < n; ++m) {
            var p = f[m], k = Id(e, h, p, g, a, c, k);
            d.push(k);
            h = p
        }
        c.length = k;
        a = new U(null);
        a.ba("XY", c, d);
        return a
    };
    l.X = function () {
        return "MultiLineString"
    };
    l.Ia = function (a) {
        a:{
            var c = this.A, d = this.i, e = this.a, f = 0, g, h;
            g = 0;
            for (h = d.length; g < h; ++g) {
                if (Rd(c, f, d[g], e, a)) {
                    a = !0;
                    break a
                }
                f = d[g]
            }
            a = !1
        }
        return a
    };
    l.ma = function (a, c) {
        if (a) {
            vd(this, c, a, 2);
            this.A || (this.A = []);
            var d = Fd(this.A, 0, a, this.a, this.i);
            this.A.length = 0 === d.length ? 0 : d[d.length - 1];
            this.u()
        } else this.ba("XY", null, this.i)
    };
    l.ba = function (a, c, d) {
        ud(this, a, c);
        this.i = d;
        this.u()
    };
    function ro(a, c) {
        var d = a.f, e = [], f = [], g, h;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var k = c[g];
            0 === g && (d = k.f);
            xb(e, k.ga());
            f.push(e.length)
        }
        a.ba(d, e, f)
    };
    function so(a, c) {
        sd.call(this);
        this.ma(a, c)
    }

    y(so, sd);
    l = so.prototype;
    l.uj = function (a) {
        this.A ? xb(this.A, a.ga()) : this.A = a.ga().slice();
        this.u()
    };
    l.clone = function () {
        var a = new so(null);
        a.ba(this.f, this.A.slice());
        return a
    };
    l.rb = function (a, c, d, e) {
        if (e < $b(this.O(), a, c))return e;
        var f = this.A, g = this.a, h, k, m;
        h = 0;
        for (k = f.length; h < k; h += g)if (m = Ga(a, c, f[h], f[h + 1]), m < e) {
            e = m;
            for (m = 0; m < g; ++m)d[m] = f[h + m];
            d.length = g
        }
        return e
    };
    l.Z = function () {
        return Gd(this.A, 0, this.A.length, this.a)
    };
    l.mk = function (a) {
        var c = this.A ? this.A.length / this.a : 0;
        if (0 > a || c <= a)return null;
        c = new D(null);
        c.ba(this.f, this.A.slice(a * this.a, (a + 1) * this.a));
        return c
    };
    l.ee = function () {
        var a = this.A, c = this.f, d = this.a, e = [], f, g;
        f = 0;
        for (g = a.length; f < g; f += d) {
            var h = new D(null);
            h.ba(c, a.slice(f, f + d));
            e.push(h)
        }
        return e
    };
    l.X = function () {
        return "MultiPoint"
    };
    l.Ia = function (a) {
        var c = this.A, d = this.a, e, f, g, h;
        e = 0;
        for (f = c.length; e < f; e += d)if (g = c[e], h = c[e + 1], bc(a, g, h))return !0;
        return !1
    };
    l.ma = function (a, c) {
        a ? (vd(this, c, a, 1), this.A || (this.A = []), this.A.length = Ed(this.A, 0, a, this.a), this.u()) : this.ba("XY", null)
    };
    l.ba = function (a, c) {
        ud(this, a, c);
        this.u()
    };
    function to(a, c) {
        sd.call(this);
        this.i = [];
        this.M = -1;
        this.N = null;
        this.T = this.R = this.S = -1;
        this.j = null;
        this.ma(a, c)
    }

    y(to, sd);
    l = to.prototype;
    l.vj = function (a) {
        if (this.A) {
            var c = this.A.length;
            xb(this.A, a.ga());
            a = a.zb().slice();
            var d, e;
            d = 0;
            for (e = a.length; d < e; ++d)a[d] += c
        } else this.A = a.ga().slice(), a = a.zb().slice(), this.i.push();
        this.i.push(a);
        this.u()
    };
    l.clone = function () {
        for (var a = new to(null), c = this.i.length, d = Array(c), e = 0; e < c; ++e)d[e] = this.i[e].slice();
        uo(a, this.f, this.A.slice(), d);
        return a
    };
    l.rb = function (a, c, d, e) {
        if (e < $b(this.O(), a, c))return e;
        if (this.R != this.g) {
            var f = this.i, g = 0, h = 0, k, m;
            k = 0;
            for (m = f.length; k < m; ++k)var n = f[k], h = Ad(this.A, g, n, this.a, h), g = n[n.length - 1];
            this.S = Math.sqrt(h);
            this.R = this.g
        }
        f = zk(this);
        g = this.i;
        h = this.a;
        k = this.S;
        m = 0;
        var n = [NaN, NaN], p, q;
        p = 0;
        for (q = g.length; p < q; ++p) {
            var r = g[p];
            e = Cd(f, m, r, h, k, !0, a, c, d, e, n);
            m = r[r.length - 1]
        }
        return e
    };
    l.wc = function (a, c) {
        var d;
        a:{
            d = zk(this);
            var e = this.i, f = 0;
            if (0 !== e.length) {
                var g, h;
                g = 0;
                for (h = e.length; g < h; ++g) {
                    var k = e[g];
                    if (Od(d, f, k, this.a, a, c)) {
                        d = !0;
                        break a
                    }
                    f = k[k.length - 1]
                }
            }
            d = !1
        }
        return d
    };
    l.jm = function () {
        var a = zk(this), c = this.i, d = 0, e = 0, f, g;
        f = 0;
        for (g = c.length; f < g; ++f)var h = c[f], e = e + xd(a, d, h, this.a), d = h[h.length - 1];
        return e
    };
    l.Z = function (a) {
        var c;
        void 0 !== a ? (c = zk(this).slice(), Wd(c, this.i, this.a, a)) : c = this.A;
        a = c;
        c = this.i;
        var d = this.a, e = 0, f = [], g = 0, h, k;
        h = 0;
        for (k = c.length; h < k; ++h) {
            var m = c[h];
            f[g++] = Hd(a, e, m, d, f[g]);
            e = m[m.length - 1]
        }
        f.length = g;
        return f
    };
    function Ak(a) {
        if (a.M != a.g) {
            var c = a.A, d = a.i, e = a.a, f = 0, g = [], h, k, m = Wb();
            h = 0;
            for (k = d.length; h < k; ++h) {
                var n = d[h], m = gc(c, f, n[0], e);
                g.push((m[0] + m[2]) / 2, (m[1] + m[3]) / 2);
                f = n[n.length - 1]
            }
            c = zk(a);
            d = a.i;
            e = a.a;
            f = 0;
            h = [];
            k = 0;
            for (m = d.length; k < m; ++k)n = d[k], h = Pd(c, f, n, e, g, 2 * k, h), f = n[n.length - 1];
            a.N = h;
            a.M = a.g
        }
        return a.N
    }

    l.Zj = function () {
        var a = new so(null);
        a.ba("XY", Ak(this).slice());
        return a
    };
    function zk(a) {
        if (a.T != a.g) {
            var c = a.A, d;
            a:{
                d = a.i;
                var e, f;
                e = 0;
                for (f = d.length; e < f; ++e)if (!Ud(c, d[e], a.a, void 0)) {
                    d = !1;
                    break a
                }
                d = !0
            }
            d ? a.j = c : (a.j = c.slice(), a.j.length = Wd(a.j, a.i, a.a));
            a.T = a.g
        }
        return a.j
    }

    l.Ic = function (a) {
        var c = [], d = [], e = this.A, f = this.i, g = this.a;
        a = Math.sqrt(a);
        var h = 0, k = 0, m, n;
        m = 0;
        for (n = f.length; m < n; ++m) {
            var p = f[m], q = [], k = Jd(e, h, p, g, a, c, k, q);
            d.push(q);
            h = p[p.length - 1]
        }
        c.length = k;
        e = new to(null);
        uo(e, "XY", c, d);
        return e
    };
    l.pk = function (a) {
        if (0 > a || this.i.length <= a)return null;
        var c;
        0 === a ? c = 0 : (c = this.i[a - 1], c = c[c.length - 1]);
        a = this.i[a].slice();
        var d = a[a.length - 1];
        if (0 !== c) {
            var e, f;
            e = 0;
            for (f = a.length; e < f; ++e)a[e] -= c
        }
        e = new F(null);
        e.ba(this.f, this.A.slice(c, d), a);
        return e
    };
    l.Qd = function () {
        var a = this.f, c = this.A, d = this.i, e = [], f = 0, g, h, k, m;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var n = d[g].slice(), p = n[n.length - 1];
            if (0 !== f)for (k = 0, m = n.length; k < m; ++k)n[k] -= f;
            k = new F(null);
            k.ba(a, c.slice(f, p), n);
            e.push(k);
            f = p
        }
        return e
    };
    l.X = function () {
        return "MultiPolygon"
    };
    l.Ia = function (a) {
        a:{
            var c = zk(this), d = this.i, e = this.a, f = 0, g, h;
            g = 0;
            for (h = d.length; g < h; ++g) {
                var k = d[g];
                if (Sd(c, f, k, e, a)) {
                    a = !0;
                    break a
                }
                f = k[k.length - 1]
            }
            a = !1
        }
        return a
    };
    l.ma = function (a, c) {
        if (a) {
            vd(this, c, a, 3);
            this.A || (this.A = []);
            var d = this.A, e = this.a, f = this.i, g = 0, f = f ? f : [], h = 0, k, m;
            k = 0;
            for (m = a.length; k < m; ++k)g = Fd(d, g, a[k], e, f[h]), f[h++] = g, g = g[g.length - 1];
            f.length = h;
            0 === f.length ? this.A.length = 0 : (d = f[f.length - 1], this.A.length = 0 === d.length ? 0 : d[d.length - 1]);
            this.u()
        } else uo(this, "XY", null, this.i)
    };
    function uo(a, c, d, e) {
        ud(a, c, d);
        a.i = e;
        a.u()
    }

    function vo(a, c) {
        var d = a.f, e = [], f = [], g, h, k;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var m = c[g];
            0 === g && (d = m.f);
            var n = e.length;
            k = m.zb();
            var p, q;
            p = 0;
            for (q = k.length; p < q; ++p)k[p] += n;
            xb(e, m.ga());
            f.push(k)
        }
        uo(a, d, e, f)
    };
    function wo(a) {
        a = a ? a : {};
        this.defaultDataProjection = null;
        this.b = a.geometryName
    }

    y(wo, mo);
    function xo(a, c) {
        if (!a)return null;
        var d;
        if (fa(a.x) && fa(a.y))d = "Point"; else if (a.points)d = "MultiPoint"; else if (a.paths)d = 1 === a.paths.length ? "LineString" : "MultiLineString"; else if (a.rings) {
            var e = a.rings, f = yo(a), g = [];
            d = [];
            var h, k;
            h = 0;
            for (k = e.length; h < k; ++h) {
                var m = wb(e[h]);
                Td(m, 0, m.length, f.length) ? g.push([e[h]]) : d.push(e[h])
            }
            for (; d.length;) {
                e = d.shift();
                f = !1;
                for (h = g.length - 1; 0 <= h; h--)if (cc((new Kd(g[h][0])).O(), (new Kd(e)).O())) {
                    g[h].push(e);
                    f = !0;
                    break
                }
                f || g.push([e.reverse()])
            }
            a = Pa({}, a);
            1 === g.length ?
                (d = "Polygon", a.rings = g[0]) : (d = "MultiPolygon", a.rings = g)
        }
        return lo((0, zo[d])(a), !1, c)
    }

    function yo(a) {
        var c = "XY";
        !0 === a.hasZ && !0 === a.hasM ? c = "XYZM" : !0 === a.hasZ ? c = "XYZ" : !0 === a.hasM && (c = "XYM");
        return c
    }

    function Ao(a) {
        a = a.f;
        return {hasZ: "XYZ" === a || "XYZM" === a, hasM: "XYM" === a || "XYZM" === a}
    }

    var zo = {
        Point: function (a) {
            return void 0 !== a.m && void 0 !== a.z ? new D([a.x, a.y, a.z, a.m], "XYZM") : void 0 !== a.z ? new D([a.x, a.y, a.z], "XYZ") : void 0 !== a.m ? new D([a.x, a.y, a.m], "XYM") : new D([a.x, a.y])
        }, LineString: function (a) {
            return new T(a.paths[0], yo(a))
        }, Polygon: function (a) {
            return new F(a.rings, yo(a))
        }, MultiPoint: function (a) {
            return new so(a.points, yo(a))
        }, MultiLineString: function (a) {
            return new U(a.paths, yo(a))
        }, MultiPolygon: function (a) {
            return new to(a.rings, yo(a))
        }
    }, Bo = {
        Point: function (a) {
            var c = a.Z();
            a = a.f;
            if ("XYZ" === a)return {x: c[0], y: c[1], z: c[2]};
            if ("XYM" === a)return {x: c[0], y: c[1], m: c[2]};
            if ("XYZM" === a)return {x: c[0], y: c[1], z: c[2], m: c[3]};
            if ("XY" === a)return {x: c[0], y: c[1]}
        }, LineString: function (a) {
            var c = Ao(a);
            return {hasZ: c.hasZ, hasM: c.hasM, paths: [a.Z()]}
        }, Polygon: function (a) {
            var c = Ao(a);
            return {hasZ: c.hasZ, hasM: c.hasM, rings: a.Z(!1)}
        }, MultiPoint: function (a) {
            var c = Ao(a);
            return {hasZ: c.hasZ, hasM: c.hasM, points: a.Z()}
        }, MultiLineString: function (a) {
            var c = Ao(a);
            return {hasZ: c.hasZ, hasM: c.hasM, paths: a.Z()}
        }, MultiPolygon: function (a) {
            var c =
                Ao(a);
            a = a.Z(!1);
            for (var d = [], e = 0; e < a.length; e++)for (var f = a[e].length - 1; 0 <= f; f--)d.push(a[e][f]);
            return {hasZ: c.hasZ, hasM: c.hasM, rings: d}
        }
    };
    l = wo.prototype;
    l.Pc = function (a, c) {
        var d = xo(a.geometry, c), e = new zl;
        this.b && e.zc(this.b);
        e.Ta(d);
        c && c.hf && a.attributes[c.hf] && e.hc(a.attributes[c.hf]);
        a.attributes && e.C(a.attributes);
        return e
    };
    l.Ff = function (a, c) {
        var d = c ? c : {};
        if (a.features) {
            var e = [], f = a.features, g, h;
            d.hf = a.objectIdFieldName;
            g = 0;
            for (h = f.length; g < h; ++g)e.push(this.Pc(f[g], d));
            return e
        }
        return [this.Pc(a, d)]
    };
    l.Mh = function (a, c) {
        return xo(a, c)
    };
    l.Th = function (a) {
        return a.spatialReference && a.spatialReference.wkid ? Ic("EPSG:" + a.spatialReference.wkid) : null
    };
    function Co(a, c) {
        return (0, Bo[a.X()])(lo(a, !0, c), c)
    }

    l.Ge = function (a, c) {
        return Co(a, ko(this, c))
    };
    l.Tc = function (a, c) {
        c = ko(this, c);
        var d = {}, e = a.W();
        e && (d.geometry = Co(e, c));
        e = a.L();
        delete e[a.a];
        d.attributes = Sa(e) ? {} : e;
        c && c.featureProjection && (d.spatialReference = {wkid: Ic(c.featureProjection).eb.split(":").pop()});
        return d
    };
    l.Ee = function (a, c) {
        c = ko(this, c);
        var d = [], e, f;
        e = 0;
        for (f = a.length; e < f; ++e)d.push(this.Tc(a[e], c));
        return {features: d}
    };
    function Do(a) {
        dd.call(this);
        this.c = a ? a : null;
        Eo(this)
    }

    y(Do, dd);
    function Fo(a) {
        var c = [], d, e;
        d = 0;
        for (e = a.length; d < e; ++d)c.push(a[d].clone());
        return c
    }

    function Go(a) {
        var c, d;
        if (a.c)for (c = 0, d = a.c.length; c < d; ++c)cb(a.c[c], "change", a.u, a)
    }

    function Eo(a) {
        var c, d;
        if (a.c)for (c = 0, d = a.c.length; c < d; ++c)C(a.c[c], "change", a.u, a)
    }

    l = Do.prototype;
    l.clone = function () {
        var a = new Do(null);
        a.ci(this.c);
        return a
    };
    l.rb = function (a, c, d, e) {
        if (e < $b(this.O(), a, c))return e;
        var f = this.c, g, h;
        g = 0;
        for (h = f.length; g < h; ++g)e = f[g].rb(a, c, d, e);
        return e
    };
    l.wc = function (a, c) {
        var d = this.c, e, f;
        e = 0;
        for (f = d.length; e < f; ++e)if (d[e].wc(a, c))return !0;
        return !1
    };
    l.Jd = function (a) {
        ec(Infinity, Infinity, -Infinity, -Infinity, a);
        for (var c = this.c, d = 0, e = c.length; d < e; ++d)jc(a, c[d].O());
        return a
    };
    l.bf = function () {
        return Fo(this.c)
    };
    l.hd = function (a) {
        this.s != this.g && (Qa(this.l), this.o = 0, this.s = this.g);
        if (0 > a || 0 !== this.o && a < this.o)return this;
        var c = a.toString();
        if (this.l.hasOwnProperty(c))return this.l[c];
        var d = [], e = this.c, f = !1, g, h;
        g = 0;
        for (h = e.length; g < h; ++g) {
            var k = e[g], m = k.hd(a);
            d.push(m);
            m !== k && (f = !0)
        }
        if (f)return a = new Do(null), Go(a), a.c = d, Eo(a), a.u(), this.l[c] = a;
        this.o = a;
        return this
    };
    l.X = function () {
        return "GeometryCollection"
    };
    l.Ia = function (a) {
        var c = this.c, d, e;
        d = 0;
        for (e = c.length; d < e; ++d)if (c[d].Ia(a))return !0;
        return !1
    };
    l.Sa = function () {
        return 0 === this.c.length
    };
    l.rotate = function (a, c) {
        for (var d = this.c, e = 0, f = d.length; e < f; ++e)d[e].rotate(a, c);
        this.u()
    };
    l.ci = function (a) {
        a = Fo(a);
        Go(this);
        this.c = a;
        Eo(this);
        this.u()
    };
    l.mc = function (a) {
        var c = this.c, d, e;
        d = 0;
        for (e = c.length; d < e; ++d)c[d].mc(a);
        this.u()
    };
    l.Nc = function (a, c) {
        var d = this.c, e, f;
        e = 0;
        for (f = d.length; e < f; ++e)d[e].Nc(a, c);
        this.u()
    };
    l.fa = function () {
        Go(this);
        Do.ia.fa.call(this)
    };
    function Ho(a) {
        a = a ? a : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = Ic(a.defaultDataProjection ? a.defaultDataProjection : "EPSG:4326");
        this.b = a.geometryName
    }

    y(Ho, mo);
    function Io(a, c) {
        return a ? lo((0, Jo[a.type])(a), !1, c) : null
    }

    function Ko(a, c) {
        return (0, Lo[a.X()])(lo(a, !0, c), c)
    }

    var Jo = {
        Point: function (a) {
            return new D(a.coordinates)
        }, LineString: function (a) {
            return new T(a.coordinates)
        }, Polygon: function (a) {
            return new F(a.coordinates)
        }, MultiPoint: function (a) {
            return new so(a.coordinates)
        }, MultiLineString: function (a) {
            return new U(a.coordinates)
        }, MultiPolygon: function (a) {
            return new to(a.coordinates)
        }, GeometryCollection: function (a, c) {
            var d = a.geometries.map(function (a) {
                return Io(a, c)
            });
            return new Do(d)
        }
    }, Lo = {
        Point: function (a) {
            return {type: "Point", coordinates: a.Z()}
        }, LineString: function (a) {
            return {
                type: "LineString",
                coordinates: a.Z()
            }
        }, Polygon: function (a, c) {
            var d;
            c && (d = c.rightHanded);
            return {type: "Polygon", coordinates: a.Z(d)}
        }, MultiPoint: function (a) {
            return {type: "MultiPoint", coordinates: a.Z()}
        }, MultiLineString: function (a) {
            return {type: "MultiLineString", coordinates: a.Z()}
        }, MultiPolygon: function (a, c) {
            var d;
            c && (d = c.rightHanded);
            return {type: "MultiPolygon", coordinates: a.Z(d)}
        }, GeometryCollection: function (a, c) {
            return {
                type: "GeometryCollection", geometries: a.c.map(function (a) {
                    var e = Pa({}, c);
                    delete e.featureProjection;
                    return Ko(a,
                        e)
                })
            }
        }, Circle: function () {
            return {type: "GeometryCollection", geometries: []}
        }
    };
    l = Ho.prototype;
    l.Pc = function (a, c) {
        var d = Io(a.geometry, c), e = new zl;
        this.b && e.zc(this.b);
        e.Ta(d);
        void 0 !== a.id && e.hc(a.id);
        a.properties && e.C(a.properties);
        return e
    };
    l.Ff = function (a, c) {
        if ("Feature" == a.type)return [this.Pc(a, c)];
        if ("FeatureCollection" == a.type) {
            var d = [], e = a.features, f, g;
            f = 0;
            for (g = e.length; f < g; ++f)d.push(this.Pc(e[f], c));
            return d
        }
        return []
    };
    l.Mh = function (a, c) {
        return Io(a, c)
    };
    l.Th = function (a) {
        return (a = a.crs) ? "name" == a.type ? Ic(a.properties.name) : "EPSG" == a.type ? Ic("EPSG:" + a.properties.code) : null : this.defaultDataProjection
    };
    l.Tc = function (a, c) {
        c = ko(this, c);
        var d = {type: "Feature"}, e = a.Wa();
        void 0 !== e && (d.id = e);
        (e = a.W()) ? d.geometry = Ko(e, c) : d.geometry = null;
        e = a.L();
        delete e[a.a];
        Sa(e) ? d.properties = null : d.properties = e;
        return d
    };
    l.Ee = function (a, c) {
        c = ko(this, c);
        var d = [], e, f;
        e = 0;
        for (f = a.length; e < f; ++e)d.push(this.Tc(a[e], c));
        return {type: "FeatureCollection", features: d}
    };
    l.Ge = function (a, c) {
        return Ko(a, ko(this, c))
    };
    function Mo() {
        this.f = new XMLSerializer;
        this.defaultDataProjection = null
    }

    y(Mo, io);
    l = Mo.prototype;
    l.X = function () {
        return "xml"
    };
    l.Nb = function (a, c) {
        if (Gl(a))return No(this, a, c);
        if (Hl(a))return this.Kh(a, c);
        if ("string" === typeof a) {
            var d = Il(a);
            return No(this, d, c)
        }
        return null
    };
    function No(a, c, d) {
        a = Oo(a, c, d);
        return 0 < a.length ? a[0] : null
    }

    l.Ca = function (a, c) {
        if (Gl(a))return Oo(this, a, c);
        if (Hl(a))return this.gc(a, c);
        if ("string" === typeof a) {
            var d = Il(a);
            return Oo(this, d, c)
        }
        return []
    };
    function Oo(a, c, d) {
        var e = [];
        for (c = c.firstChild; c; c = c.nextSibling)1 == c.nodeType && xb(e, a.gc(c, d));
        return e
    }

    l.Qc = function (a, c) {
        if (Gl(a))return this.v(a, c);
        if (Hl(a)) {
            var d = this.te(a, [jo(this, a, c ? c : {})]);
            return d ? d : null
        }
        return "string" === typeof a ? (d = Il(a), this.v(d, c)) : null
    };
    l.Oa = function (a) {
        return Gl(a) ? this.Lf(a) : Hl(a) ? this.we(a) : "string" === typeof a ? (a = Il(a), this.Lf(a)) : null
    };
    l.Lf = function () {
        return this.defaultDataProjection
    };
    l.we = function () {
        return this.defaultDataProjection
    };
    l.yd = function (a, c) {
        var d = this.B(a, c);
        return this.f.serializeToString(d)
    };
    l.Sb = function (a, c) {
        var d = this.a(a, c);
        return this.f.serializeToString(d)
    };
    l.Uc = function (a, c) {
        var d = this.s(a, c);
        return this.f.serializeToString(d)
    };
    function Po(a) {
        a = a ? a : {};
        this.featureType = a.featureType;
        this.featureNS = a.featureNS;
        this.srsName = a.srsName;
        this.schemaLocation = "";
        this.b = {};
        this.b["http://www.opengis.net/gml"] = {
            featureMember: Ll(Po.prototype.qd),
            featureMembers: Ll(Po.prototype.qd)
        };
        Mo.call(this)
    }

    y(Po, Mo);
    var Qo = /^[\s\xa0]*$/;
    l = Po.prototype;
    l.qd = function (a, c) {
        var d = a.localName, e = null;
        if ("FeatureCollection" == d)"http://www.opengis.net/wfs" === a.namespaceURI ? e = P([], this.b, a, c, this) : e = P(null, this.b, a, c, this); else if ("featureMembers" == d || "featureMember" == d) {
            var f = c[0], g = f.featureType, h = f.featureNS, k, m;
            if (!g && a.childNodes) {
                g = [];
                h = {};
                k = 0;
                for (m = a.childNodes.length; k < m; ++k) {
                    var n = a.childNodes[k];
                    if (1 === n.nodeType) {
                        var p = n.nodeName.split(":").pop();
                        if (-1 === g.indexOf(p)) {
                            var q = "", r = 0, n = n.namespaceURI, u;
                            for (u in h) {
                                if (h[u] === n) {
                                    q = u;
                                    break
                                }
                                ++r
                            }
                            q ||
                            (q = "p" + r, h[q] = n);
                            g.push(q + ":" + p)
                        }
                    }
                }
                "featureMember" != d && (f.featureType = g, f.featureNS = h)
            }
            "string" === typeof h && (k = h, h = {}, h.p0 = k);
            var f = {}, g = Array.isArray(g) ? g : [g], v;
            for (v in h) {
                p = {};
                k = 0;
                for (m = g.length; k < m; ++k)(-1 === g[k].indexOf(":") ? "p0" : g[k].split(":")[0]) === v && (p[g[k].split(":").pop()] = "featureMembers" == d ? Kl(this.Ef, this) : Ll(this.Ef, this));
                f[h[v]] = p
            }
            "featureMember" == d ? e = P(void 0, f, a, c) : e = P([], f, a, c)
        }
        null === e && (e = []);
        return e
    };
    l.te = function (a, c) {
        var d = c[0];
        d.srsName = a.firstElementChild.getAttribute("srsName");
        var e = P(null, this.Yf, a, c, this);
        if (e)return lo(e, !1, d)
    };
    l.Ef = function (a, c) {
        var d, e;
        (e = a.getAttribute("fid")) || (e = a.getAttributeNS("http://www.opengis.net/gml", "id") || "");
        var f = {}, g;
        for (d = a.firstElementChild; d; d = d.nextElementSibling) {
            var h = d.localName;
            if (0 === d.childNodes.length || 1 === d.childNodes.length && (3 === d.firstChild.nodeType || 4 === d.firstChild.nodeType)) {
                var k = El(d, !1);
                Qo.test(k) && (k = void 0);
                f[h] = k
            } else"boundedBy" !== h && (g = h), f[h] = this.te(d, c)
        }
        d = new zl(f);
        g && d.zc(g);
        e && d.hc(e);
        return d
    };
    l.Sh = function (a, c) {
        var d = this.se(a, c);
        if (d) {
            var e = new D(null);
            e.ba("XYZ", d);
            return e
        }
    };
    l.Qh = function (a, c) {
        var d = P([], this.Pi, a, c, this);
        if (d)return new so(d)
    };
    l.Ph = function (a, c) {
        var d = P([], this.Oi, a, c, this);
        if (d) {
            var e = new U(null);
            ro(e, d);
            return e
        }
    };
    l.Rh = function (a, c) {
        var d = P([], this.Qi, a, c, this);
        if (d) {
            var e = new to(null);
            vo(e, d);
            return e
        }
    };
    l.Hh = function (a, c) {
        Sl(this.Ti, a, c, this)
    };
    l.Pg = function (a, c) {
        Sl(this.Mi, a, c, this)
    };
    l.Ih = function (a, c) {
        Sl(this.Ui, a, c, this)
    };
    l.ue = function (a, c) {
        var d = this.se(a, c);
        if (d) {
            var e = new T(null);
            e.ba("XYZ", d);
            return e
        }
    };
    l.to = function (a, c) {
        var d = P(null, this.Ad, a, c, this);
        if (d)return d
    };
    l.Oh = function (a, c) {
        var d = this.se(a, c);
        if (d) {
            var e = new Kd(null);
            Ld(e, "XYZ", d);
            return e
        }
    };
    l.ve = function (a, c) {
        var d = P([null], this.Ie, a, c, this);
        if (d && d[0]) {
            var e = new F(null), f = d[0], g = [f.length], h, k;
            h = 1;
            for (k = d.length; h < k; ++h)xb(f, d[h]), g.push(f.length);
            e.ba("XYZ", f, g);
            return e
        }
    };
    l.se = function (a, c) {
        return P(null, this.Ad, a, c, this)
    };
    l.Pi = {"http://www.opengis.net/gml": {pointMember: Kl(Po.prototype.Hh), pointMembers: Kl(Po.prototype.Hh)}};
    l.Oi = {
        "http://www.opengis.net/gml": {
            lineStringMember: Kl(Po.prototype.Pg),
            lineStringMembers: Kl(Po.prototype.Pg)
        }
    };
    l.Qi = {"http://www.opengis.net/gml": {polygonMember: Kl(Po.prototype.Ih), polygonMembers: Kl(Po.prototype.Ih)}};
    l.Ti = {"http://www.opengis.net/gml": {Point: Kl(Po.prototype.se)}};
    l.Mi = {"http://www.opengis.net/gml": {LineString: Kl(Po.prototype.ue)}};
    l.Ui = {"http://www.opengis.net/gml": {Polygon: Kl(Po.prototype.ve)}};
    l.Bd = {"http://www.opengis.net/gml": {LinearRing: Ll(Po.prototype.to)}};
    l.gc = function (a, c) {
        var d = {featureType: this.featureType, featureNS: this.featureNS};
        c && Pa(d, jo(this, a, c));
        return this.qd(a, [d]) || []
    };
    l.we = function (a) {
        return Ic(this.srsName ? this.srsName : a.firstElementChild.getAttribute("srsName"))
    };
    function Ro(a) {
        a = El(a, !1);
        return So(a)
    }

    function So(a) {
        if (a = /^\s*(true|1)|(false|0)\s*$/.exec(a))return void 0 !== a[1] || !1
    }

    function To(a) {
        a = El(a, !1);
        if (a = /^\s*(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?))\s*$/.exec(a)) {
            var c = Date.UTC(parseInt(a[1], 10), parseInt(a[2], 10) - 1, parseInt(a[3], 10), parseInt(a[4], 10), parseInt(a[5], 10), parseInt(a[6], 10)) / 1E3;
            if ("Z" != a[7]) {
                var d = "-" == a[8] ? -1 : 1, c = c + 60 * d * parseInt(a[9], 10);
                void 0 !== a[10] && (c += 3600 * d * parseInt(a[10], 10))
            }
            return c
        }
    }

    function Uo(a) {
        a = El(a, !1);
        return Vo(a)
    }

    function Vo(a) {
        if (a = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(a))return parseFloat(a[1])
    }

    function Wo(a) {
        a = El(a, !1);
        return Xo(a)
    }

    function Xo(a) {
        if (a = /^\s*(\d+)\s*$/.exec(a))return parseInt(a[1], 10)
    }

    function V(a) {
        return El(a, !1).trim()
    }

    function Yo(a, c) {
        Zo(a, c ? "1" : "0")
    }

    function $o(a, c) {
        a.appendChild(Cl.createTextNode(c.toPrecision()))
    }

    function ap(a, c) {
        a.appendChild(Cl.createTextNode(c.toString()))
    }

    function Zo(a, c) {
        a.appendChild(Cl.createTextNode(c))
    };
    function bp(a) {
        a = a ? a : {};
        Po.call(this, a);
        this.b["http://www.opengis.net/gml"].featureMember = Kl(Po.prototype.qd);
        this.schemaLocation = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd"
    }

    y(bp, Po);
    l = bp.prototype;
    l.Lh = function (a, c) {
        var d = El(a, !1).replace(/^\s*|\s*$/g, ""), e = c[0].srsName, f = a.parentNode.getAttribute("srsDimension"), g = "enu";
        e && (e = Ic(e)) && (g = e.b);
        d = d.split(/[\s,]+/);
        e = 2;
        a.getAttribute("srsDimension") ? e = Xo(a.getAttribute("srsDimension")) : a.getAttribute("dimension") ? e = Xo(a.getAttribute("dimension")) : f && (e = Xo(f));
        for (var h, k, m = [], n = 0, p = d.length; n < p; n += e)f = parseFloat(d[n]), h = parseFloat(d[n + 1]), k = 3 === e ? parseFloat(d[n + 2]) : 0, "en" === g.substr(0, 2) ? m.push(f, h, k) : m.push(h, f, k);
        return m
    };
    l.qo = function (a, c) {
        var d = P([null], this.Ii, a, c, this);
        return ec(d[1][0], d[1][1], d[1][3], d[1][4])
    };
    l.il = function (a, c) {
        var d = P(void 0, this.Bd, a, c, this);
        d && c[c.length - 1].push(d)
    };
    l.Yn = function (a, c) {
        var d = P(void 0, this.Bd, a, c, this);
        d && (c[c.length - 1][0] = d)
    };
    l.Ad = {"http://www.opengis.net/gml": {coordinates: Ll(bp.prototype.Lh)}};
    l.Ie = {"http://www.opengis.net/gml": {innerBoundaryIs: bp.prototype.il, outerBoundaryIs: bp.prototype.Yn}};
    l.Ii = {"http://www.opengis.net/gml": {coordinates: Kl(bp.prototype.Lh)}};
    l.Yf = {
        "http://www.opengis.net/gml": {
            Point: Ll(Po.prototype.Sh),
            MultiPoint: Ll(Po.prototype.Qh),
            LineString: Ll(Po.prototype.ue),
            MultiLineString: Ll(Po.prototype.Ph),
            LinearRing: Ll(Po.prototype.Oh),
            Polygon: Ll(Po.prototype.ve),
            MultiPolygon: Ll(Po.prototype.Rh),
            Box: Ll(bp.prototype.qo)
        }
    };
    function cp(a) {
        a = a ? a : {};
        Po.call(this, a);
        this.j = void 0 !== a.surface ? a.surface : !1;
        this.i = void 0 !== a.curve ? a.curve : !1;
        this.l = void 0 !== a.multiCurve ? a.multiCurve : !0;
        this.o = void 0 !== a.multiSurface ? a.multiSurface : !0;
        this.schemaLocation = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd"
    }

    y(cp, Po);
    l = cp.prototype;
    l.xo = function (a, c) {
        var d = P([], this.Ni, a, c, this);
        if (d) {
            var e = new U(null);
            ro(e, d);
            return e
        }
    };
    l.yo = function (a, c) {
        var d = P([], this.Ri, a, c, this);
        if (d) {
            var e = new to(null);
            vo(e, d);
            return e
        }
    };
    l.rg = function (a, c) {
        Sl(this.Ji, a, c, this)
    };
    l.pi = function (a, c) {
        Sl(this.Yi, a, c, this)
    };
    l.Bo = function (a, c) {
        return P([null], this.Si, a, c, this)
    };
    l.Do = function (a, c) {
        return P([null], this.Xi, a, c, this)
    };
    l.Co = function (a, c) {
        return P([null], this.Ie, a, c, this)
    };
    l.wo = function (a, c) {
        return P([null], this.Ad, a, c, this)
    };
    l.kl = function (a, c) {
        var d = P(void 0, this.Bd, a, c, this);
        d && c[c.length - 1].push(d)
    };
    l.Dj = function (a, c) {
        var d = P(void 0, this.Bd, a, c, this);
        d && (c[c.length - 1][0] = d)
    };
    l.Uh = function (a, c) {
        var d = P([null], this.Zi, a, c, this);
        if (d && d[0]) {
            var e = new F(null), f = d[0], g = [f.length], h, k;
            h = 1;
            for (k = d.length; h < k; ++h)xb(f, d[h]), g.push(f.length);
            e.ba("XYZ", f, g);
            return e
        }
    };
    l.Jh = function (a, c) {
        var d = P([null], this.Ki, a, c, this);
        if (d) {
            var e = new T(null);
            e.ba("XYZ", d);
            return e
        }
    };
    l.so = function (a, c) {
        var d = P([null], this.Li, a, c, this);
        return ec(d[1][0], d[1][1], d[2][0], d[2][1])
    };
    l.uo = function (a, c) {
        for (var d = El(a, !1), e = /^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/, f = [], g; g = e.exec(d);)f.push(parseFloat(g[1])), d = d.substr(g[0].length);
        if ("" === d) {
            d = c[0].srsName;
            e = "enu";
            d && (e = Ic(d).b);
            if ("neu" === e)for (d = 0, e = f.length; d < e; d += 3)g = f[d], f[d] = f[d + 1], f[d + 1] = g;
            d = f.length;
            2 == d && f.push(0);
            return 0 === d ? void 0 : f
        }
    };
    l.If = function (a, c) {
        var d = El(a, !1).replace(/^\s*|\s*$/g, ""), e = c[0].srsName, f = a.parentNode.getAttribute("srsDimension"), g = "enu";
        e && (g = Ic(e).b);
        d = d.split(/\s+/);
        e = 2;
        a.getAttribute("srsDimension") ? e = Xo(a.getAttribute("srsDimension")) : a.getAttribute("dimension") ? e = Xo(a.getAttribute("dimension")) : f && (e = Xo(f));
        for (var h, k, m = [], n = 0, p = d.length; n < p; n += e)f = parseFloat(d[n]), h = parseFloat(d[n + 1]), k = 3 === e ? parseFloat(d[n + 2]) : 0, "en" === g.substr(0, 2) ? m.push(f, h, k) : m.push(h, f, k);
        return m
    };
    l.Ad = {"http://www.opengis.net/gml": {pos: Ll(cp.prototype.uo), posList: Ll(cp.prototype.If)}};
    l.Ie = {"http://www.opengis.net/gml": {interior: cp.prototype.kl, exterior: cp.prototype.Dj}};
    l.Yf = {
        "http://www.opengis.net/gml": {
            Point: Ll(Po.prototype.Sh),
            MultiPoint: Ll(Po.prototype.Qh),
            LineString: Ll(Po.prototype.ue),
            MultiLineString: Ll(Po.prototype.Ph),
            LinearRing: Ll(Po.prototype.Oh),
            Polygon: Ll(Po.prototype.ve),
            MultiPolygon: Ll(Po.prototype.Rh),
            Surface: Ll(cp.prototype.Uh),
            MultiSurface: Ll(cp.prototype.yo),
            Curve: Ll(cp.prototype.Jh),
            MultiCurve: Ll(cp.prototype.xo),
            Envelope: Ll(cp.prototype.so)
        }
    };
    l.Ni = {"http://www.opengis.net/gml": {curveMember: Kl(cp.prototype.rg), curveMembers: Kl(cp.prototype.rg)}};
    l.Ri = {"http://www.opengis.net/gml": {surfaceMember: Kl(cp.prototype.pi), surfaceMembers: Kl(cp.prototype.pi)}};
    l.Ji = {"http://www.opengis.net/gml": {LineString: Kl(Po.prototype.ue), Curve: Kl(cp.prototype.Jh)}};
    l.Yi = {"http://www.opengis.net/gml": {Polygon: Kl(Po.prototype.ve), Surface: Kl(cp.prototype.Uh)}};
    l.Zi = {"http://www.opengis.net/gml": {patches: Ll(cp.prototype.Bo)}};
    l.Ki = {"http://www.opengis.net/gml": {segments: Ll(cp.prototype.Do)}};
    l.Li = {"http://www.opengis.net/gml": {lowerCorner: Kl(cp.prototype.If), upperCorner: Kl(cp.prototype.If)}};
    l.Si = {"http://www.opengis.net/gml": {PolygonPatch: Ll(cp.prototype.Co)}};
    l.Xi = {"http://www.opengis.net/gml": {LineStringSegment: Ll(cp.prototype.wo)}};
    function dp(a, c, d) {
        d = d[d.length - 1].srsName;
        c = c.Z();
        for (var e = c.length, f = Array(e), g, h = 0; h < e; ++h) {
            g = c[h];
            var k = h, m = "enu";
            d && (m = Ic(d).b);
            f[k] = "en" === m.substr(0, 2) ? g[0] + " " + g[1] : g[1] + " " + g[0]
        }
        Zo(a, f.join(" "))
    }

    l.Ei = function (a, c, d) {
        var e = d[d.length - 1].srsName;
        e && a.setAttribute("srsName", e);
        e = Dl(a.namespaceURI, "pos");
        a.appendChild(e);
        d = d[d.length - 1].srsName;
        a = "enu";
        d && (a = Ic(d).b);
        c = c.Z();
        Zo(e, "en" === a.substr(0, 2) ? c[0] + " " + c[1] : c[1] + " " + c[0])
    };
    var ep = {"http://www.opengis.net/gml": {lowerCorner: M(Zo), upperCorner: M(Zo)}};
    l = cp.prototype;
    l.rp = function (a, c, d) {
        var e = d[d.length - 1].srsName;
        e && a.setAttribute("srsName", e);
        Tl({node: a}, ep, Ql, [c[0] + " " + c[1], c[2] + " " + c[3]], d, ["lowerCorner", "upperCorner"], this)
    };
    l.Bi = function (a, c, d) {
        var e = d[d.length - 1].srsName;
        e && a.setAttribute("srsName", e);
        e = Dl(a.namespaceURI, "posList");
        a.appendChild(e);
        dp(e, c, d)
    };
    l.Wi = function (a, c) {
        var d = c[c.length - 1], e = d.node, f = d.exteriorWritten;
        void 0 === f && (d.exteriorWritten = !0);
        return Dl(e.namespaceURI, void 0 !== f ? "interior" : "exterior")
    };
    l.He = function (a, c, d) {
        var e = d[d.length - 1].srsName;
        "PolygonPatch" !== a.nodeName && e && a.setAttribute("srsName", e);
        "Polygon" === a.nodeName || "PolygonPatch" === a.nodeName ? (c = c.Pd(), Tl({
            node: a,
            srsName: e
        }, fp, this.Wi, c, d, void 0, this)) : "Surface" === a.nodeName && (e = Dl(a.namespaceURI, "patches"), a.appendChild(e), a = Dl(e.namespaceURI, "PolygonPatch"), e.appendChild(a), this.He(a, c, d))
    };
    l.Ce = function (a, c, d) {
        var e = d[d.length - 1].srsName;
        "LineStringSegment" !== a.nodeName && e && a.setAttribute("srsName", e);
        "LineString" === a.nodeName || "LineStringSegment" === a.nodeName ? (e = Dl(a.namespaceURI, "posList"), a.appendChild(e), dp(e, c, d)) : "Curve" === a.nodeName && (e = Dl(a.namespaceURI, "segments"), a.appendChild(e), a = Dl(e.namespaceURI, "LineStringSegment"), e.appendChild(a), this.Ce(a, c, d))
    };
    l.Di = function (a, c, d) {
        var e = d[d.length - 1], f = e.srsName, e = e.surface;
        f && a.setAttribute("srsName", f);
        c = c.Qd();
        Tl({node: a, srsName: f, surface: e}, gp, this.c, c, d, void 0, this)
    };
    l.sp = function (a, c, d) {
        var e = d[d.length - 1].srsName;
        e && a.setAttribute("srsName", e);
        c = c.ee();
        Tl({node: a, srsName: e}, hp, Ol("pointMember"), c, d, void 0, this)
    };
    l.Ci = function (a, c, d) {
        var e = d[d.length - 1], f = e.srsName, e = e.curve;
        f && a.setAttribute("srsName", f);
        c = c.gd();
        Tl({node: a, srsName: f, curve: e}, ip, this.c, c, d, void 0, this)
    };
    l.Fi = function (a, c, d) {
        var e = Dl(a.namespaceURI, "LinearRing");
        a.appendChild(e);
        this.Bi(e, c, d)
    };
    l.Gi = function (a, c, d) {
        var e = this.g(c, d);
        e && (a.appendChild(e), this.He(e, c, d))
    };
    l.tp = function (a, c, d) {
        var e = Dl(a.namespaceURI, "Point");
        a.appendChild(e);
        this.Ei(e, c, d)
    };
    l.Ai = function (a, c, d) {
        var e = this.g(c, d);
        e && (a.appendChild(e), this.Ce(e, c, d))
    };
    l.Fe = function (a, c, d) {
        var e = d[d.length - 1], f = Pa({}, e);
        f.node = a;
        var g;
        Array.isArray(c) ? e.dataProjection ? g = cd(c, e.featureProjection, e.dataProjection) : g = c : g = lo(c, !0, e);
        Tl(f, jp, this.g, [g], d, void 0, this)
    };
    l.wi = function (a, c, d) {
        var e = c.Wa();
        e && a.setAttribute("fid", e);
        var e = d[d.length - 1], f = e.featureNS, g = c.a;
        e.yc || (e.yc = {}, e.yc[f] = {});
        var h = c.L();
        c = [];
        var k = [], m;
        for (m in h) {
            var n = h[m];
            null !== n && (c.push(m), k.push(n), m == g || n instanceof dd ? m in e.yc[f] || (e.yc[f][m] = M(this.Fe, this)) : m in e.yc[f] || (e.yc[f][m] = M(Zo)))
        }
        m = Pa({}, e);
        m.node = a;
        Tl(m, e.yc, Ol(void 0, f), k, d, c)
    };
    var gp = {
        "http://www.opengis.net/gml": {
            surfaceMember: M(cp.prototype.Gi),
            polygonMember: M(cp.prototype.Gi)
        }
    }, hp = {"http://www.opengis.net/gml": {pointMember: M(cp.prototype.tp)}}, ip = {
        "http://www.opengis.net/gml": {
            lineStringMember: M(cp.prototype.Ai),
            curveMember: M(cp.prototype.Ai)
        }
    }, fp = {"http://www.opengis.net/gml": {exterior: M(cp.prototype.Fi), interior: M(cp.prototype.Fi)}}, jp = {
        "http://www.opengis.net/gml": {
            Curve: M(cp.prototype.Ce),
            MultiCurve: M(cp.prototype.Ci),
            Point: M(cp.prototype.Ei),
            MultiPoint: M(cp.prototype.sp),
            LineString: M(cp.prototype.Ce),
            MultiLineString: M(cp.prototype.Ci),
            LinearRing: M(cp.prototype.Bi),
            Polygon: M(cp.prototype.He),
            MultiPolygon: M(cp.prototype.Di),
            Surface: M(cp.prototype.He),
            MultiSurface: M(cp.prototype.Di),
            Envelope: M(cp.prototype.rp)
        }
    }, kp = {
        MultiLineString: "lineStringMember",
        MultiCurve: "curveMember",
        MultiPolygon: "polygonMember",
        MultiSurface: "surfaceMember"
    };
    cp.prototype.c = function (a, c) {
        return Dl("http://www.opengis.net/gml", kp[c[c.length - 1].node.nodeName])
    };
    cp.prototype.g = function (a, c) {
        var d = c[c.length - 1], e = d.multiSurface, f = d.surface, g = d.curve, d = d.multiCurve, h;
        Array.isArray(a) ? h = "Envelope" : (h = a.X(), "MultiPolygon" === h && !0 === e ? h = "MultiSurface" : "Polygon" === h && !0 === f ? h = "Surface" : "LineString" === h && !0 === g ? h = "Curve" : "MultiLineString" === h && !0 === d && (h = "MultiCurve"));
        return Dl("http://www.opengis.net/gml", h)
    };
    cp.prototype.s = function (a, c) {
        c = ko(this, c);
        var d = Dl("http://www.opengis.net/gml", "geom"), e = {
            node: d,
            srsName: this.srsName,
            curve: this.i,
            surface: this.j,
            multiSurface: this.o,
            multiCurve: this.l
        };
        c && Pa(e, c);
        this.Fe(d, a, [e]);
        return d
    };
    cp.prototype.a = function (a, c) {
        c = ko(this, c);
        var d = Dl("http://www.opengis.net/gml", "featureMembers");
        d.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.schemaLocation);
        var e = {
            srsName: this.srsName,
            curve: this.i,
            surface: this.j,
            multiSurface: this.o,
            multiCurve: this.l,
            featureNS: this.featureNS,
            featureType: this.featureType
        };
        c && Pa(e, c);
        var e = [e], f = e[e.length - 1], g = f.featureType, h = f.featureNS, k = {};
        k[h] = {};
        k[h][g] = M(this.wi, this);
        f = Pa({}, f);
        f.node = d;
        Tl(f, k, Ol(g, h), a, e);
        return d
    };
    function lp(a) {
        a = a ? a : {};
        Mo.call(this);
        this.defaultDataProjection = Ic("EPSG:4326");
        this.b = a.readExtensions
    }

    y(lp, Mo);
    var mp = [null, "http://www.topografix.com/GPX/1/0", "http://www.topografix.com/GPX/1/1"];

    function np(a, c, d) {
        a.push(parseFloat(c.getAttribute("lon")), parseFloat(c.getAttribute("lat")));
        "ele" in d ? (a.push(d.ele), delete d.ele) : a.push(0);
        "time" in d ? (a.push(d.time), delete d.time) : a.push(0);
        return a
    }

    function op(a, c) {
        var d = c[c.length - 1], e = a.getAttribute("href");
        null !== e && (d.link = e);
        Sl(pp, a, c)
    }

    function qp(a, c) {
        c[c.length - 1].extensionsNode_ = a
    }

    function rp(a, c) {
        var d = c[0], e = P({flatCoordinates: []}, sp, a, c);
        if (e) {
            var f = e.flatCoordinates;
            delete e.flatCoordinates;
            var g = new T(null);
            g.ba("XYZM", f);
            lo(g, !1, d);
            d = new zl(g);
            d.C(e);
            return d
        }
    }

    function tp(a, c) {
        var d = c[0], e = P({flatCoordinates: [], ends: []}, up, a, c);
        if (e) {
            var f = e.flatCoordinates;
            delete e.flatCoordinates;
            var g = e.ends;
            delete e.ends;
            var h = new U(null);
            h.ba("XYZM", f, g);
            lo(h, !1, d);
            d = new zl(h);
            d.C(e);
            return d
        }
    }

    function vp(a, c) {
        var d = c[0], e = P({}, wp, a, c);
        if (e) {
            var f = np([], a, e), f = new D(f, "XYZM");
            lo(f, !1, d);
            d = new zl(f);
            d.C(e);
            return d
        }
    }

    var xp = {rte: rp, trk: tp, wpt: vp}, yp = N(mp, {
            rte: Kl(rp),
            trk: Kl(tp),
            wpt: Kl(vp)
        }), pp = N(mp, {text: K(V, "linkText"), type: K(V, "linkType")}), sp = N(mp, {
            name: K(V),
            cmt: K(V),
            desc: K(V),
            src: K(V),
            link: op,
            number: K(Wo),
            extensions: qp,
            type: K(V),
            rtept: function (a, c) {
                var d = P({}, zp, a, c);
                d && np(c[c.length - 1].flatCoordinates, a, d)
            }
        }), zp = N(mp, {ele: K(Uo), time: K(To)}), up = N(mp, {
            name: K(V),
            cmt: K(V),
            desc: K(V),
            src: K(V),
            link: op,
            number: K(Wo),
            type: K(V),
            extensions: qp,
            trkseg: function (a, c) {
                var d = c[c.length - 1];
                Sl(Ap, a, c);
                d.ends.push(d.flatCoordinates.length)
            }
        }),
        Ap = N(mp, {
            trkpt: function (a, c) {
                var d = P({}, Bp, a, c);
                d && np(c[c.length - 1].flatCoordinates, a, d)
            }
        }), Bp = N(mp, {ele: K(Uo), time: K(To)}), wp = N(mp, {
            ele: K(Uo),
            time: K(To),
            magvar: K(Uo),
            geoidheight: K(Uo),
            name: K(V),
            cmt: K(V),
            desc: K(V),
            src: K(V),
            link: op,
            sym: K(V),
            type: K(V),
            fix: K(V),
            sat: K(Wo),
            hdop: K(Uo),
            vdop: K(Uo),
            pdop: K(Uo),
            ageofdgpsdata: K(Uo),
            dgpsid: K(Wo),
            extensions: qp
        });

    function Cp(a, c) {
        c || (c = []);
        for (var d = 0, e = c.length; d < e; ++d) {
            var f = c[d];
            if (a.b) {
                var g = f.get("extensionsNode_") || null;
                a.b(f, g)
            }
            f.set("extensionsNode_", void 0)
        }
    }

    lp.prototype.Kh = function (a, c) {
        if (!ub(mp, a.namespaceURI))return null;
        var d = xp[a.localName];
        if (!d)return null;
        d = d(a, [jo(this, a, c)]);
        if (!d)return null;
        Cp(this, [d]);
        return d
    };
    lp.prototype.gc = function (a, c) {
        if (!ub(mp, a.namespaceURI))return [];
        if ("gpx" == a.localName) {
            var d = P([], yp, a, [jo(this, a, c)]);
            if (d)return Cp(this, d), d
        }
        return []
    };
    function Dp(a, c, d) {
        a.setAttribute("href", c);
        c = d[d.length - 1].properties;
        Tl({node: a}, Ep, Ql, [c.linkText, c.linkType], d, Fp)
    }

    function Gp(a, c, d) {
        var e = d[d.length - 1], f = e.node.namespaceURI, g = e.properties;
        a.setAttributeNS(null, "lat", c[1]);
        a.setAttributeNS(null, "lon", c[0]);
        switch (e.geometryLayout) {
            case "XYZM":
                0 !== c[3] && (g.time = c[3]);
            case "XYZ":
                0 !== c[2] && (g.ele = c[2]);
                break;
            case "XYM":
                0 !== c[2] && (g.time = c[2])
        }
        c = Hp[f];
        e = Rl(g, c);
        Tl({node: a, properties: g}, Ip, Ql, e, d, c)
    }

    var Fp = ["text", "type"], Ep = N(mp, {
            text: M(Zo),
            type: M(Zo)
        }), Jp = N(mp, "name cmt desc src link number type rtept".split(" ")), Kp = N(mp, {
            name: M(Zo),
            cmt: M(Zo),
            desc: M(Zo),
            src: M(Zo),
            link: M(Dp),
            number: M(ap),
            type: M(Zo),
            rtept: Nl(M(Gp))
        }), Lp = N(mp, "name cmt desc src link number type trkseg".split(" ")), Op = N(mp, {
            name: M(Zo),
            cmt: M(Zo),
            desc: M(Zo),
            src: M(Zo),
            link: M(Dp),
            number: M(ap),
            type: M(Zo),
            trkseg: Nl(M(function (a, c, d) {
                Tl({node: a, geometryLayout: c.f, properties: {}}, Mp, Np, c.Z(), d)
            }))
        }), Np = Ol("trkpt"), Mp = N(mp, {trkpt: M(Gp)}),
        Hp = N(mp, "ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")), Ip = N(mp, {
            ele: M($o),
            time: M(function (a, c) {
                var d = new Date(1E3 * c);
                a.appendChild(Cl.createTextNode(d.getUTCFullYear() + "-" + Kb(d.getUTCMonth() + 1) + "-" + Kb(d.getUTCDate()) + "T" + Kb(d.getUTCHours()) + ":" + Kb(d.getUTCMinutes()) + ":" + Kb(d.getUTCSeconds()) + "Z"))
            }),
            magvar: M($o),
            geoidheight: M($o),
            name: M(Zo),
            cmt: M(Zo),
            desc: M(Zo),
            src: M(Zo),
            link: M(Dp),
            sym: M(Zo),
            type: M(Zo),
            fix: M(Zo),
            sat: M(ap),
            hdop: M($o),
            vdop: M($o),
            pdop: M($o),
            ageofdgpsdata: M($o),
            dgpsid: M(ap)
        }), Pp = {Point: "wpt", LineString: "rte", MultiLineString: "trk"};

    function Qp(a, c) {
        var d = a.W();
        if (d && (d = Pp[d.X()]))return Dl(c[c.length - 1].node.namespaceURI, d)
    }

    var Rp = N(mp, {
        rte: M(function (a, c, d) {
            var e = d[0], f = c.L();
            a = {node: a, properties: f};
            if (c = c.W())c = lo(c, !0, e), a.geometryLayout = c.f, f.rtept = c.Z();
            e = Jp[d[d.length - 1].node.namespaceURI];
            f = Rl(f, e);
            Tl(a, Kp, Ql, f, d, e)
        }), trk: M(function (a, c, d) {
            var e = d[0], f = c.L();
            a = {node: a, properties: f};
            if (c = c.W())c = lo(c, !0, e), f.trkseg = c.gd();
            e = Lp[d[d.length - 1].node.namespaceURI];
            f = Rl(f, e);
            Tl(a, Op, Ql, f, d, e)
        }), wpt: M(function (a, c, d) {
            var e = d[0], f = d[d.length - 1];
            f.properties = c.L();
            if (c = c.W())c = lo(c, !0, e), f.geometryLayout = c.f, Gp(a, c.Z(),
                d)
        })
    });
    lp.prototype.a = function (a, c) {
        c = ko(this, c);
        var d = Dl("http://www.topografix.com/GPX/1/1", "gpx");
        Tl({node: d}, Rp, Qp, a, [c]);
        return d
    };
    function Sp() {
        this.defaultDataProjection = null
    }

    y(Sp, io);
    function Tp(a) {
        return "string" === typeof a ? a : ""
    }

    l = Sp.prototype;
    l.X = function () {
        return "text"
    };
    l.Nb = function (a, c) {
        return this.pd(Tp(a), ko(this, c))
    };
    l.Ca = function (a, c) {
        return this.Gf(Tp(a), ko(this, c))
    };
    l.Qc = function (a, c) {
        return this.rd(Tp(a), ko(this, c))
    };
    l.Oa = function (a) {
        Tp(a);
        return this.defaultDataProjection
    };
    l.yd = function (a, c) {
        return this.De(a, ko(this, c))
    };
    l.Sb = function (a, c) {
        return this.xi(a, ko(this, c))
    };
    l.Uc = function (a, c) {
        return this.zd(a, ko(this, c))
    };
    function Up(a) {
        a = a ? a : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = Ic("EPSG:4326");
        this.b = a.altitudeMode ? a.altitudeMode : "none"
    }

    y(Up, Sp);
    var Vp = /^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/, Wp = /^H.([A-Z]{3}).*?:(.*)/, Xp = /^HFDTE(\d{2})(\d{2})(\d{2})/, Yp = /\r\n|\r|\n/;
    Up.prototype.pd = function (a, c) {
        var d = this.b, e = a.split(Yp), f = {}, g = [], h = 2E3, k = 0, m = 1, n, p;
        n = 0;
        for (p = e.length; n < p; ++n) {
            var q = e[n], r;
            if ("B" == q.charAt(0)) {
                if (r = Vp.exec(q)) {
                    var q = parseInt(r[1], 10), u = parseInt(r[2], 10), v = parseInt(r[3], 10), x = parseInt(r[4], 10) + parseInt(r[5], 10) / 6E4;
                    "S" == r[6] && (x = -x);
                    var z = parseInt(r[7], 10) + parseInt(r[8], 10) / 6E4;
                    "W" == r[9] && (z = -z);
                    g.push(z, x);
                    "none" != d && g.push("gps" == d ? parseInt(r[11], 10) : "barometric" == d ? parseInt(r[12], 10) : 0);
                    g.push(Date.UTC(h, k, m, q, u, v) / 1E3)
                }
            } else"H" == q.charAt(0) &&
            ((r = Xp.exec(q)) ? (m = parseInt(r[1], 10), k = parseInt(r[2], 10) - 1, h = 2E3 + parseInt(r[3], 10)) : (r = Wp.exec(q)) && (f[r[1]] = r[2].trim()))
        }
        if (0 === g.length)return null;
        e = new T(null);
        e.ba("none" == d ? "XYM" : "XYZM", g);
        d = new zl(lo(e, !1, c));
        d.C(f);
        return d
    };
    Up.prototype.Gf = function (a, c) {
        var d = this.pd(a, c);
        return d ? [d] : []
    };
    function Zp(a, c) {
        this.a = {};
        this.b = [];
        this.g = 0;
        var d = arguments.length;
        if (1 < d) {
            if (d % 2)throw Error("Uneven number of arguments");
            for (var e = 0; e < d; e += 2)this.set(arguments[e], arguments[e + 1])
        } else if (a) {
            var f;
            if (a instanceof Zp)f = a.K(), e = a.uc(); else {
                var d = [], g = 0;
                for (f in a)d[g++] = f;
                f = d;
                d = [];
                g = 0;
                for (e in a)d[g++] = a[e];
                e = d
            }
            for (d = 0; d < f.length; d++)this.set(f[d], e[d])
        }
    }

    l = Zp.prototype;
    l.rc = function () {
        return this.g
    };
    l.uc = function () {
        $p(this);
        for (var a = [], c = 0; c < this.b.length; c++)a.push(this.a[this.b[c]]);
        return a
    };
    l.K = function () {
        $p(this);
        return this.b.concat()
    };
    l.Sa = function () {
        return 0 == this.g
    };
    l.clear = function () {
        this.a = {};
        this.g = this.b.length = 0
    };
    l.remove = function (a) {
        return aq(this.a, a) ? (delete this.a[a], this.g--, this.b.length > 2 * this.g && $p(this), !0) : !1
    };
    function $p(a) {
        if (a.g != a.b.length) {
            for (var c = 0, d = 0; c < a.b.length;) {
                var e = a.b[c];
                aq(a.a, e) && (a.b[d++] = e);
                c++
            }
            a.b.length = d
        }
        if (a.g != a.b.length) {
            for (var f = {}, d = c = 0; c < a.b.length;)e = a.b[c], aq(f, e) || (a.b[d++] = e, f[e] = 1), c++;
            a.b.length = d
        }
    }

    l.get = function (a, c) {
        return aq(this.a, a) ? this.a[a] : c
    };
    l.set = function (a, c) {
        aq(this.a, a) || (this.g++, this.b.push(a));
        this.a[a] = c
    };
    l.forEach = function (a, c) {
        for (var d = this.K(), e = 0; e < d.length; e++) {
            var f = d[e], g = this.get(f);
            a.call(c, g, f, this)
        }
    };
    l.clone = function () {
        return new Zp(this)
    };
    function aq(a, c) {
        return Object.prototype.hasOwnProperty.call(a, c)
    };
    var bq = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

    function cq(a, c) {
        if (a)for (var d = a.split("&"), e = 0; e < d.length; e++) {
            var f = d[e].indexOf("="), g = null, h = null;
            0 <= f ? (g = d[e].substring(0, f), h = d[e].substring(f + 1)) : g = d[e];
            c(g, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "")
        }
    }

    function dq(a) {
        if (a[1]) {
            var c = a[0], d = c.indexOf("#");
            0 <= d && (a.push(c.substr(d)), a[0] = c = c.substr(0, d));
            d = c.indexOf("?");
            0 > d ? a[1] = "?" : d == c.length - 1 && (a[1] = void 0)
        }
        return a.join("")
    }

    function eq(a, c, d) {
        if ("array" == ca(c))for (var e = 0; e < c.length; e++)eq(a, String(c[e]), d); else null != c && d.push("&", a, "" === c ? "" : "=", encodeURIComponent(String(c)))
    }

    function fq(a, c) {
        for (var d in c)eq(d, c[d], a);
        return a
    };
    function gq(a, c) {
        this.a = this.l = this.g = "";
        this.o = null;
        this.f = this.b = "";
        this.c = !1;
        var d;
        a instanceof gq ? (this.c = void 0 !== c ? c : a.c, hq(this, a.g), this.l = a.l, this.a = a.a, iq(this, a.o), this.b = a.b, jq(this, a.i.clone()), this.f = a.f) : a && (d = String(a).match(bq)) ? (this.c = !!c, hq(this, d[1] || "", !0), this.l = kq(d[2] || ""), this.a = kq(d[3] || "", !0), iq(this, d[4]), this.b = kq(d[5] || "", !0), jq(this, d[6] || "", !0), this.f = kq(d[7] || "")) : (this.c = !!c, this.i = new lq(null, 0, this.c))
    }

    gq.prototype.toString = function () {
        var a = [], c = this.g;
        c && a.push(mq(c, nq, !0), ":");
        var d = this.a;
        if (d || "file" == c)a.push("//"), (c = this.l) && a.push(mq(c, nq, !0), "@"), a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), d = this.o, null != d && a.push(":", String(d));
        if (d = this.b)this.a && "/" != d.charAt(0) && a.push("/"), a.push(mq(d, "/" == d.charAt(0) ? oq : pq, !0));
        (d = this.i.toString()) && a.push("?", d);
        (d = this.f) && a.push("#", mq(d, qq));
        return a.join("")
    };
    gq.prototype.clone = function () {
        return new gq(this)
    };
    function hq(a, c, d) {
        a.g = d ? kq(c, !0) : c;
        a.g && (a.g = a.g.replace(/:$/, ""))
    }

    function iq(a, c) {
        if (c) {
            c = Number(c);
            if (isNaN(c) || 0 > c)throw Error("Bad port number " + c);
            a.o = c
        } else a.o = null
    }

    function jq(a, c, d) {
        c instanceof lq ? (a.i = c, rq(a.i, a.c)) : (d || (c = mq(c, sq)), a.i = new lq(c, 0, a.c))
    }

    function tq(a) {
        return a instanceof gq ? a.clone() : new gq(a, void 0)
    }

    function uq(a, c) {
        a instanceof gq || (a = tq(a));
        c instanceof gq || (c = tq(c));
        var d = a, e = c, f = d.clone(), g = !!e.g;
        g ? hq(f, e.g) : g = !!e.l;
        g ? f.l = e.l : g = !!e.a;
        g ? f.a = e.a : g = null != e.o;
        var h = e.b;
        if (g)iq(f, e.o); else if (g = !!e.b)if ("/" != h.charAt(0) && (d.a && !d.b ? h = "/" + h : (d = f.b.lastIndexOf("/"), -1 != d && (h = f.b.substr(0, d + 1) + h))), d = h, ".." == d || "." == d)h = ""; else if (-1 != d.indexOf("./") || -1 != d.indexOf("/.")) {
            for (var h = 0 == d.lastIndexOf("/", 0), d = d.split("/"), k = [], m = 0; m < d.length;) {
                var n = d[m++];
                "." == n ? h && m == d.length && k.push("") : ".." == n ?
                    ((1 < k.length || 1 == k.length && "" != k[0]) && k.pop(), h && m == d.length && k.push("")) : (k.push(n), h = !0)
            }
            h = k.join("/")
        } else h = d;
        g ? f.b = h : g = "" !== e.i.toString();
        g ? jq(f, kq(e.i.toString())) : g = !!e.f;
        g && (f.f = e.f);
        return f
    }

    function kq(a, c) {
        return a ? c ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }

    function mq(a, c, d) {
        return ea(a) ? (a = encodeURI(a).replace(c, vq), d && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }

    function vq(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }

    var nq = /[#\/\?@]/g, pq = /[\#\?:]/g, oq = /[\#\?]/g, sq = /[\#\?@]/g, qq = /#/g;

    function lq(a, c, d) {
        this.a = this.b = null;
        this.g = a || null;
        this.f = !!d
    }

    function wq(a) {
        a.b || (a.b = new Zp, a.a = 0, a.g && cq(a.g, function (c, d) {
            a.add(decodeURIComponent(c.replace(/\+/g, " ")), d)
        }))
    }

    l = lq.prototype;
    l.rc = function () {
        wq(this);
        return this.a
    };
    l.add = function (a, c) {
        wq(this);
        this.g = null;
        a = xq(this, a);
        var d = this.b.get(a);
        d || this.b.set(a, d = []);
        d.push(c);
        this.a = this.a + 1;
        return this
    };
    l.remove = function (a) {
        wq(this);
        a = xq(this, a);
        return aq(this.b.a, a) ? (this.g = null, this.a = this.a - this.b.get(a).length, this.b.remove(a)) : !1
    };
    l.clear = function () {
        this.b = this.g = null;
        this.a = 0
    };
    l.Sa = function () {
        wq(this);
        return 0 == this.a
    };
    function yq(a, c) {
        wq(a);
        c = xq(a, c);
        return aq(a.b.a, c)
    }

    l.K = function () {
        wq(this);
        for (var a = this.b.uc(), c = this.b.K(), d = [], e = 0; e < c.length; e++)for (var f = a[e], g = 0; g < f.length; g++)d.push(c[e]);
        return d
    };
    l.uc = function (a) {
        wq(this);
        var c = [];
        if (ea(a))yq(this, a) && (c = ze(c, this.b.get(xq(this, a)))); else {
            a = this.b.uc();
            for (var d = 0; d < a.length; d++)c = ze(c, a[d])
        }
        return c
    };
    l.set = function (a, c) {
        wq(this);
        this.g = null;
        a = xq(this, a);
        yq(this, a) && (this.a = this.a - this.b.get(a).length);
        this.b.set(a, [c]);
        this.a = this.a + 1;
        return this
    };
    l.get = function (a, c) {
        var d = a ? this.uc(a) : [];
        return 0 < d.length ? String(d[0]) : c
    };
    l.toString = function () {
        if (this.g)return this.g;
        if (!this.b)return "";
        for (var a = [], c = this.b.K(), d = 0; d < c.length; d++)for (var e = c[d], f = encodeURIComponent(String(e)), e = this.uc(e), g = 0; g < e.length; g++) {
            var h = f;
            "" !== e[g] && (h += "=" + encodeURIComponent(String(e[g])));
            a.push(h)
        }
        return this.g = a.join("&")
    };
    l.clone = function () {
        var a = new lq;
        a.g = this.g;
        this.b && (a.b = this.b.clone(), a.a = this.a);
        return a
    };
    function xq(a, c) {
        var d = String(c);
        a.f && (d = d.toLowerCase());
        return d
    }

    function rq(a, c) {
        c && !a.f && (wq(a), a.g = null, a.b.forEach(function (a, c) {
            var f = c.toLowerCase();
            c != f && (this.remove(c), this.remove(f), 0 < a.length && (this.g = null, this.b.set(xq(this, f), Ae(a)), this.a = this.a + a.length))
        }, a));
        a.f = c
    };
    function zq(a) {
        a = a || {};
        this.g = a.font;
        this.i = a.rotation;
        this.a = a.scale;
        this.s = a.text;
        this.o = a.textAlign;
        this.j = a.textBaseline;
        this.b = void 0 !== a.fill ? a.fill : new ak({color: "#333"});
        this.l = void 0 !== a.stroke ? a.stroke : null;
        this.f = void 0 !== a.offsetX ? a.offsetX : 0;
        this.c = void 0 !== a.offsetY ? a.offsetY : 0
    }

    l = zq.prototype;
    l.Tj = function () {
        return this.g
    };
    l.gk = function () {
        return this.f
    };
    l.hk = function () {
        return this.c
    };
    l.On = function () {
        return this.b
    };
    l.Pn = function () {
        return this.i
    };
    l.Qn = function () {
        return this.a
    };
    l.Rn = function () {
        return this.l
    };
    l.Ea = function () {
        return this.s
    };
    l.uk = function () {
        return this.o
    };
    l.vk = function () {
        return this.j
    };
    l.Wo = function (a) {
        this.g = a
    };
    l.hi = function (a) {
        this.f = a
    };
    l.ii = function (a) {
        this.c = a
    };
    l.Vo = function (a) {
        this.b = a
    };
    l.Sn = function (a) {
        this.i = a
    };
    l.Tn = function (a) {
        this.a = a
    };
    l.bp = function (a) {
        this.l = a
    };
    l.ki = function (a) {
        this.s = a
    };
    l.li = function (a) {
        this.o = a
    };
    l.cp = function (a) {
        this.j = a
    };
    function Aq(a) {
        a = a ? a : {};
        Mo.call(this);
        this.defaultDataProjection = Ic("EPSG:4326");
        this.g = a.defaultStyle ? a.defaultStyle : Bq;
        this.c = void 0 !== a.extractStyles ? a.extractStyles : !0;
        this.l = void 0 !== a.writeStyles ? a.writeStyles : !0;
        this.b = {};
        this.i = void 0 !== a.showPointNames ? a.showPointNames : !0
    }

    y(Aq, Mo);
    var Cq = ["http://www.google.com/kml/ext/2.2"], Dq = [null, "http://earth.google.com/kml/2.0", "http://earth.google.com/kml/2.1", "http://earth.google.com/kml/2.2", "http://www.opengis.net/kml/2.2"], Eq = [255, 255, 255, 1], Fq = new ak({color: Eq}), Gq = [20, 2], Hq = [64, 64], Iq = new ui({
        anchor: Gq,
        anchorOrigin: "bottom-left",
        anchorXUnits: "pixels",
        anchorYUnits: "pixels",
        crossOrigin: "anonymous",
        rotation: 0,
        scale: .5,
        size: Hq,
        src: "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"
    }), Jq = new gk({color: Eq, width: 1}), Kq = new zq({
        font: "bold 16px Helvetica",
        fill: Fq, stroke: new gk({color: [51, 51, 51, 1], width: 2}), scale: .8
    }), Bq = [new jk({fill: Fq, image: Iq, text: Kq, stroke: Jq, zIndex: 0})], Lq = {
        fraction: "fraction",
        pixels: "pixels"
    };

    function Mq(a, c) {
        var d = null, e = [0, 0], f = "start";
        a.a && (d = a.a.fd()) && 2 == d.length && (e[0] = a.a.i * d[0] / 2, e[1] = -a.a.i * d[1] / 2, f = "left");
        if (Sa(a.Ea()))d = new zq({text: c, offsetX: e[0], offsetY: e[1], textAlign: f}); else {
            var d = a.Ea(), g = {}, h;
            for (h in d)g[h] = d[h];
            d = g;
            d.ki(c);
            d.li(f);
            d.hi(e[0]);
            d.ii(e[1])
        }
        return new jk({text: d})
    }

    function Nq(a, c, d, e, f) {
        return function () {
            var g = f, h = "";
            g && this.W() && (g = "Point" === this.W().X());
            g && (h = this.get("name"), g = g && h);
            if (a)return g ? (g = Mq(a[0], h), a.concat(g)) : a;
            if (c) {
                var k = Oq(c, d, e);
                return g ? (g = Mq(k[0], h), k.concat(g)) : k
            }
            return g ? (g = Mq(d[0], h), d.concat(g)) : d
        }
    }

    function Oq(a, c, d) {
        return Array.isArray(a) ? a : "string" === typeof a ? (!(a in d) && "#" + a in d && (a = "#" + a), Oq(d[a], c, d)) : c
    }

    function Pq(a) {
        a = El(a, !1);
        if (a = /^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(a))return a = a[1], [parseInt(a.substr(6, 2), 16), parseInt(a.substr(4, 2), 16), parseInt(a.substr(2, 2), 16), parseInt(a.substr(0, 2), 16) / 255]
    }

    function Qq(a) {
        a = El(a, !1);
        for (var c = [], d = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i, e; e = d.exec(a);)c.push(parseFloat(e[1]), parseFloat(e[2]), e[3] ? parseFloat(e[3]) : 0), a = a.substr(e[0].length);
        return "" !== a ? void 0 : c
    }

    function Rq(a) {
        var c = El(a, !1);
        return a.baseURI ? uq(a.baseURI, c.trim()).toString() : c.trim()
    }

    function Sq(a) {
        a = Uo(a);
        if (void 0 !== a)return Math.sqrt(a)
    }

    function Tq(a, c) {
        return P(null, Uq, a, c)
    }

    function Vq(a, c) {
        var d = P({A: [], ui: []}, Wq, a, c);
        if (d) {
            var e = d.A, d = d.ui, f, g;
            f = 0;
            for (g = Math.min(e.length, d.length); f < g; ++f)e[4 * f + 3] = d[f];
            d = new T(null);
            d.ba("XYZM", e);
            return d
        }
    }

    function Xq(a, c) {
        var d = P({}, Yq, a, c), e = P(null, Zq, a, c);
        if (e) {
            var f = new T(null);
            f.ba("XYZ", e);
            f.C(d);
            return f
        }
    }

    function $q(a, c) {
        var d = P({}, Yq, a, c), e = P(null, Zq, a, c);
        if (e) {
            var f = new F(null);
            f.ba("XYZ", e, [e.length]);
            f.C(d);
            return f
        }
    }

    function ar(a, c) {
        var d = P([], br, a, c);
        if (!d)return null;
        if (0 === d.length)return new Do(d);
        var e = !0, f = d[0].X(), g, h, k;
        h = 1;
        for (k = d.length; h < k; ++h)if (g = d[h], g.X() != f) {
            e = !1;
            break
        }
        if (e) {
            if ("Point" == f) {
                g = d[0];
                e = g.f;
                f = g.ga();
                h = 1;
                for (k = d.length; h < k; ++h)g = d[h], xb(f, g.ga());
                g = new so(null);
                g.ba(e, f);
                cr(g, d);
                return g
            }
            return "LineString" == f ? (g = new U(null), ro(g, d), cr(g, d), g) : "Polygon" == f ? (g = new to(null), vo(g, d), cr(g, d), g) : "GeometryCollection" == f ? new Do(d) : null
        }
        return new Do(d)
    }

    function dr(a, c) {
        var d = P({}, Yq, a, c), e = P(null, Zq, a, c);
        if (e) {
            var f = new D(null);
            f.ba("XYZ", e);
            f.C(d);
            return f
        }
    }

    function er(a, c) {
        var d = P({}, Yq, a, c), e = P([null], fr, a, c);
        if (e && e[0]) {
            var f = new F(null), g = e[0], h = [g.length], k, m;
            k = 1;
            for (m = e.length; k < m; ++k)xb(g, e[k]), h.push(g.length);
            f.ba("XYZ", g, h);
            f.C(d);
            return f
        }
    }

    function gr(a, c) {
        var d = P({}, hr, a, c);
        if (!d)return null;
        var e = "fillStyle" in d ? d.fillStyle : Fq, f = d.fill;
        void 0 === f || f || (e = null);
        var f = "imageStyle" in d ? d.imageStyle : Iq, g = "textStyle" in d ? d.textStyle : Kq, h = "strokeStyle" in d ? d.strokeStyle : Jq, d = d.outline;
        void 0 === d || d || (h = null);
        return [new jk({fill: e, image: f, stroke: h, text: g, zIndex: void 0})]
    }

    function cr(a, c) {
        var d = c.length, e = Array(c.length), f = Array(c.length), g, h, k, m;
        k = m = !1;
        for (h = 0; h < d; ++h)g = c[h], e[h] = g.get("extrude"), f[h] = g.get("altitudeMode"), k = k || void 0 !== e[h], m = m || f[h];
        k && a.set("extrude", e);
        m && a.set("altitudeMode", f)
    }

    function ir(a, c) {
        Sl(jr, a, c)
    }

    var kr = N(Dq, {value: Ll(V)}), jr = N(Dq, {
        Data: function (a, c) {
            var d = a.getAttribute("name");
            if (null !== d) {
                var e = P(void 0, kr, a, c);
                e && (c[c.length - 1][d] = e)
            }
        }, SchemaData: function (a, c) {
            Sl(lr, a, c)
        }
    }), Yq = N(Dq, {
        extrude: K(Ro),
        altitudeMode: K(V)
    }), Uq = N(Dq, {coordinates: Ll(Qq)}), fr = N(Dq, {
        innerBoundaryIs: function (a, c) {
            var d = P(void 0, mr, a, c);
            d && c[c.length - 1].push(d)
        }, outerBoundaryIs: function (a, c) {
            var d = P(void 0, nr, a, c);
            d && (c[c.length - 1][0] = d)
        }
    }), Wq = N(Dq, {
        when: function (a, c) {
            var d = c[c.length - 1].ui, e = El(a, !1);
            if (e = /^\s*(\d{4})($|-(\d{2})($|-(\d{2})($|T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?)))))\s*$/.exec(e)) {
                var f =
                    Date.UTC(parseInt(e[1], 10), e[3] ? parseInt(e[3], 10) - 1 : 0, e[5] ? parseInt(e[5], 10) : 1, e[7] ? parseInt(e[7], 10) : 0, e[8] ? parseInt(e[8], 10) : 0, e[9] ? parseInt(e[9], 10) : 0);
                if (e[10] && "Z" != e[10]) {
                    var g = "-" == e[11] ? -1 : 1, f = f + 60 * g * parseInt(e[12], 10);
                    e[13] && (f += 3600 * g * parseInt(e[13], 10))
                }
                d.push(f)
            } else d.push(0)
        }
    }, N(Cq, {
        coord: function (a, c) {
            var d = c[c.length - 1].A, e = El(a, !1);
            (e = /^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(e)) ? d.push(parseFloat(e[1]),
                parseFloat(e[2]), parseFloat(e[3]), 0) : d.push(0, 0, 0, 0)
        }
    })), Zq = N(Dq, {coordinates: Ll(Qq)}), or = N(Dq, {href: K(Rq)}, N(Cq, {
        x: K(Uo),
        y: K(Uo),
        w: K(Uo),
        h: K(Uo)
    })), pr = N(Dq, {
        Icon: K(function (a, c) {
            var d = P({}, or, a, c);
            return d ? d : null
        }), heading: K(Uo), hotSpot: K(function (a) {
            var c = a.getAttribute("xunits"), d = a.getAttribute("yunits");
            return {x: parseFloat(a.getAttribute("x")), Wf: Lq[c], y: parseFloat(a.getAttribute("y")), Xf: Lq[d]}
        }), scale: K(Sq)
    }), mr = N(Dq, {LinearRing: Ll(Tq)}), qr = N(Dq, {color: K(Pq), scale: K(Sq)}), rr = N(Dq, {
        color: K(Pq),
        width: K(Uo)
    }), br = N(Dq, {
        LineString: Kl(Xq),
        LinearRing: Kl($q),
        MultiGeometry: Kl(ar),
        Point: Kl(dr),
        Polygon: Kl(er)
    }), sr = N(Cq, {Track: Kl(Vq)}), ur = N(Dq, {
        ExtendedData: ir, Link: function (a, c) {
            Sl(tr, a, c)
        }, address: K(V), description: K(V), name: K(V), open: K(Ro), phoneNumber: K(V), visibility: K(Ro)
    }), tr = N(Dq, {href: K(Rq)}), nr = N(Dq, {LinearRing: Ll(Tq)}), vr = N(Dq, {
        Style: K(gr),
        key: K(V),
        styleUrl: K(function (a) {
            var c = El(a, !1).trim();
            return a.baseURI ? uq(a.baseURI, c).toString() : c
        })
    }), xr = N(Dq, {
        ExtendedData: ir,
        MultiGeometry: K(ar, "geometry"),
        LineString: K(Xq, "geometry"),
        LinearRing: K($q, "geometry"),
        Point: K(dr, "geometry"),
        Polygon: K(er, "geometry"),
        Style: K(gr),
        StyleMap: function (a, c) {
            var d = P(void 0, wr, a, c);
            if (d) {
                var e = c[c.length - 1];
                Array.isArray(d) ? e.Style = d : "string" === typeof d && (e.styleUrl = d)
            }
        },
        address: K(V),
        description: K(V),
        name: K(V),
        open: K(Ro),
        phoneNumber: K(V),
        styleUrl: K(Rq),
        visibility: K(Ro)
    }, N(Cq, {
        MultiTrack: K(function (a, c) {
            var d = P([], sr, a, c);
            if (d) {
                var e = new U(null);
                ro(e, d);
                return e
            }
        }, "geometry"), Track: K(Vq, "geometry")
    })), yr = N(Dq, {
        color: K(Pq),
        fill: K(Ro), outline: K(Ro)
    }), lr = N(Dq, {
        SimpleData: function (a, c) {
            var d = a.getAttribute("name");
            if (null !== d) {
                var e = V(a);
                c[c.length - 1][d] = e
            }
        }
    }), hr = N(Dq, {
        IconStyle: function (a, c) {
            var d = P({}, pr, a, c);
            if (d) {
                var e = c[c.length - 1], f = "Icon" in d ? d.Icon : {}, g;
                g = (g = f.href) ? g : "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png";
                var h, k, m, n = d.hotSpot;
                n ? (h = [n.x, n.y], k = n.Wf, m = n.Xf) : "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png" === g ? (h = Gq, m = k = "pixels") : /^http:\/\/maps\.(?:google|gstatic)\.com\//.test(g) &&
                (h = [.5, 0], m = k = "fraction");
                var p, n = f.x, q = f.y;
                void 0 !== n && void 0 !== q && (p = [n, q]);
                var r, n = f.w, f = f.h;
                void 0 !== n && void 0 !== f && (r = [n, f]);
                var u, f = d.heading;
                void 0 !== f && (u = Ha(f));
                d = d.scale;
                "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png" == g && (r = Hq, void 0 === d && (d = .5));
                h = new ui({
                    anchor: h,
                    anchorOrigin: "bottom-left",
                    anchorXUnits: k,
                    anchorYUnits: m,
                    crossOrigin: "anonymous",
                    offset: p,
                    offsetOrigin: "bottom-left",
                    rotation: u,
                    scale: d,
                    size: r,
                    src: g
                });
                e.imageStyle = h
            }
        }, LabelStyle: function (a, c) {
            var d = P({}, qr, a,
                c);
            d && (c[c.length - 1].textStyle = new zq({
                fill: new ak({color: "color" in d ? d.color : Eq}),
                scale: d.scale
            }))
        }, LineStyle: function (a, c) {
            var d = P({}, rr, a, c);
            d && (c[c.length - 1].strokeStyle = new gk({
                color: "color" in d ? d.color : Eq,
                width: "width" in d ? d.width : 1
            }))
        }, PolyStyle: function (a, c) {
            var d = P({}, yr, a, c);
            if (d) {
                var e = c[c.length - 1];
                e.fillStyle = new ak({color: "color" in d ? d.color : Eq});
                var f = d.fill;
                void 0 !== f && (e.fill = f);
                d = d.outline;
                void 0 !== d && (e.outline = d)
            }
        }
    }), wr = N(Dq, {
        Pair: function (a, c) {
            var d = P({}, vr, a, c);
            if (d) {
                var e = d.key;
                e && "normal" == e && ((e = d.styleUrl) && (c[c.length - 1] = e), (d = d.Style) && (c[c.length - 1] = d))
            }
        }
    });
    l = Aq.prototype;
    l.Cf = function (a, c) {
        var d = N(Dq, {
            Document: Jl(this.Cf, this),
            Folder: Jl(this.Cf, this),
            Placemark: Kl(this.Kf, this),
            Style: this.Fo.bind(this),
            StyleMap: this.Eo.bind(this)
        });
        if (d = P([], d, a, c, this))return d
    };
    l.Kf = function (a, c) {
        var d = P({geometry: null}, xr, a, c);
        if (d) {
            var e = new zl, f = a.getAttribute("id");
            null !== f && e.hc(f);
            var f = c[0], g = d.geometry;
            g && lo(g, !1, f);
            e.Ta(g);
            delete d.geometry;
            this.c && e.nf(Nq(d.Style, d.styleUrl, this.g, this.b, this.i));
            delete d.Style;
            e.C(d);
            return e
        }
    };
    l.Fo = function (a, c) {
        var d = a.getAttribute("id");
        if (null !== d) {
            var e = gr(a, c);
            e && (d = a.baseURI ? uq(a.baseURI, "#" + d).toString() : "#" + d, this.b[d] = e)
        }
    };
    l.Eo = function (a, c) {
        var d = a.getAttribute("id");
        if (null !== d) {
            var e = P(void 0, wr, a, c);
            e && (d = a.baseURI ? uq(a.baseURI, "#" + d).toString() : "#" + d, this.b[d] = e)
        }
    };
    l.Kh = function (a, c) {
        if (!ub(Dq, a.namespaceURI))return null;
        var d = this.Kf(a, [jo(this, a, c)]);
        return d ? d : null
    };
    l.gc = function (a, c) {
        if (!ub(Dq, a.namespaceURI))return [];
        var d;
        d = a.localName;
        if ("Document" == d || "Folder" == d)return (d = this.Cf(a, [jo(this, a, c)])) ? d : [];
        if ("Placemark" == d)return (d = this.Kf(a, [jo(this, a, c)])) ? [d] : [];
        if ("kml" == d) {
            d = [];
            var e;
            for (e = a.firstElementChild; e; e = e.nextElementSibling) {
                var f = this.gc(e, c);
                f && xb(d, f)
            }
            return d
        }
        return []
    };
    l.zo = function (a) {
        if (Gl(a))return zr(this, a);
        if (Hl(a))return Ar(this, a);
        if ("string" === typeof a)return a = Il(a), zr(this, a)
    };
    function zr(a, c) {
        var d;
        for (d = c.firstChild; d; d = d.nextSibling)if (1 == d.nodeType) {
            var e = Ar(a, d);
            if (e)return e
        }
    }

    function Ar(a, c) {
        var d;
        for (d = c.firstElementChild; d; d = d.nextElementSibling)if (ub(Dq, d.namespaceURI) && "name" == d.localName)return V(d);
        for (d = c.firstElementChild; d; d = d.nextElementSibling) {
            var e = d.localName;
            if (ub(Dq, d.namespaceURI) && ("Document" == e || "Folder" == e || "Placemark" == e || "kml" == e) && (e = Ar(a, d)))return e
        }
    }

    l.Ao = function (a) {
        var c = [];
        Gl(a) ? xb(c, Br(this, a)) : Hl(a) ? xb(c, Cr(this, a)) : "string" === typeof a && (a = Il(a), xb(c, Br(this, a)));
        return c
    };
    function Br(a, c) {
        var d, e = [];
        for (d = c.firstChild; d; d = d.nextSibling)1 == d.nodeType && xb(e, Cr(a, d));
        return e
    }

    function Cr(a, c) {
        var d, e = [];
        for (d = c.firstElementChild; d; d = d.nextElementSibling)if (ub(Dq, d.namespaceURI) && "NetworkLink" == d.localName) {
            var f = P({}, ur, d, []);
            e.push(f)
        }
        for (d = c.firstElementChild; d; d = d.nextElementSibling)f = d.localName, !ub(Dq, d.namespaceURI) || "Document" != f && "Folder" != f && "kml" != f || xb(e, Cr(a, d));
        return e
    }

    function Dr(a, c) {
        var d = Fe(c), d = [255 * (4 == d.length ? d[3] : 1), d[2], d[1], d[0]], e;
        for (e = 0; 4 > e; ++e) {
            var f = parseInt(d[e], 10).toString(16);
            d[e] = 1 == f.length ? "0" + f : f
        }
        Zo(a, d.join(""))
    }

    function Er(a, c, d) {
        a = {node: a};
        var e = c.X(), f, g;
        "GeometryCollection" == e ? (f = c.bf(), g = Fr) : "MultiPoint" == e ? (f = c.ee(), g = Gr) : "MultiLineString" == e ? (f = c.gd(), g = Hr) : "MultiPolygon" == e && (f = c.Qd(), g = Ir);
        Tl(a, Jr, g, f, d)
    }

    function Kr(a, c, d) {
        Tl({node: a}, Lr, Mr, [c], d)
    }

    function Nr(a, c, d) {
        var e = {node: a};
        c.Wa() && a.setAttribute("id", c.Wa());
        a = c.L();
        var f = c.$b();
        f && (f = f.call(c, 0)) && (f = Array.isArray(f) ? f[0] : f, this.l && (a.Style = f), (f = f.Ea()) && (a.name = f.Ea()));
        f = Or[d[d.length - 1].node.namespaceURI];
        a = Rl(a, f);
        Tl(e, Pr, Ql, a, d, f);
        a = d[0];
        (c = c.W()) && (c = lo(c, !0, a));
        Tl(e, Pr, Fr, [c], d)
    }

    function Qr(a, c, d) {
        var e = c.ga();
        a = {node: a};
        a.layout = c.f;
        a.stride = c.ua();
        Tl(a, Rr, Sr, [e], d)
    }

    function Tr(a, c, d) {
        c = c.Pd();
        var e = c.shift();
        a = {node: a};
        Tl(a, Ur, Vr, c, d);
        Tl(a, Ur, Wr, [e], d)
    }

    function Xr(a, c) {
        $o(a, Math.round(c * c * 1E6) / 1E6)
    }

    var Yr = N(Dq, ["Document", "Placemark"]), as = N(Dq, {
        Document: M(function (a, c, d) {
            Tl({node: a}, Zr, $r, c, d, void 0, this)
        }), Placemark: M(Nr)
    }), Zr = N(Dq, {Placemark: M(Nr)}), bs = {
        Point: "Point",
        LineString: "LineString",
        LinearRing: "LinearRing",
        Polygon: "Polygon",
        MultiPoint: "MultiGeometry",
        MultiLineString: "MultiGeometry",
        MultiPolygon: "MultiGeometry",
        GeometryCollection: "MultiGeometry"
    }, cs = N(Dq, ["href"], N(Cq, ["x", "y", "w", "h"])), ds = N(Dq, {href: M(Zo)}, N(Cq, {
        x: M($o),
        y: M($o),
        w: M($o),
        h: M($o)
    })), es = N(Dq, ["scale", "heading", "Icon",
        "hotSpot"]), gs = N(Dq, {
        Icon: M(function (a, c, d) {
            a = {node: a};
            var e = cs[d[d.length - 1].node.namespaceURI], f = Rl(c, e);
            Tl(a, ds, Ql, f, d, e);
            e = cs[Cq[0]];
            f = Rl(c, e);
            Tl(a, ds, fs, f, d, e)
        }), heading: M($o), hotSpot: M(function (a, c) {
            a.setAttribute("x", c.x);
            a.setAttribute("y", c.y);
            a.setAttribute("xunits", c.Wf);
            a.setAttribute("yunits", c.Xf)
        }), scale: M(Xr)
    }), hs = N(Dq, ["color", "scale"]), is = N(Dq, {
        color: M(Dr),
        scale: M(Xr)
    }), js = N(Dq, ["color", "width"]), ks = N(Dq, {
        color: M(Dr),
        width: M($o)
    }), Lr = N(Dq, {LinearRing: M(Qr)}), Jr = N(Dq, {
        LineString: M(Qr),
        Point: M(Qr), Polygon: M(Tr), GeometryCollection: M(Er)
    }), Or = N(Dq, "name open visibility address phoneNumber description styleUrl Style".split(" ")), Pr = N(Dq, {
        MultiGeometry: M(Er),
        LineString: M(Qr),
        LinearRing: M(Qr),
        Point: M(Qr),
        Polygon: M(Tr),
        Style: M(function (a, c, d) {
            a = {node: a};
            var e = {}, f = c.c, g = c.f, h = c.a;
            c = c.Ea();
            h instanceof ui && (e.IconStyle = h);
            c && (e.LabelStyle = c);
            g && (e.LineStyle = g);
            f && (e.PolyStyle = f);
            c = ls[d[d.length - 1].node.namespaceURI];
            e = Rl(e, c);
            Tl(a, ms, Ql, e, d, c)
        }),
        address: M(Zo),
        description: M(Zo),
        name: M(Zo),
        open: M(Yo),
        phoneNumber: M(Zo),
        styleUrl: M(Zo),
        visibility: M(Yo)
    }), Rr = N(Dq, {
        coordinates: M(function (a, c, d) {
            d = d[d.length - 1];
            var e = d.layout;
            d = d.stride;
            var f;
            "XY" == e || "XYM" == e ? f = 2 : ("XYZ" == e || "XYZM" == e) && (f = 3);
            var g, h = c.length, k = "";
            if (0 < h) {
                k += c[0];
                for (e = 1; e < f; ++e)k += "," + c[e];
                for (g = d; g < h; g += d)for (k += " " + c[g], e = 1; e < f; ++e)k += "," + c[g + e]
            }
            Zo(a, k)
        })
    }), Ur = N(Dq, {
        outerBoundaryIs: M(Kr),
        innerBoundaryIs: M(Kr)
    }), ns = N(Dq, {color: M(Dr)}), ls = N(Dq, ["IconStyle", "LabelStyle", "LineStyle", "PolyStyle"]), ms = N(Dq, {
        IconStyle: M(function (a,
                               c, d) {
            a = {node: a};
            var e = {}, f = c.Bb(), g = c.fd(), h = {href: c.b.j};
            if (f) {
                h.w = f[0];
                h.h = f[1];
                var k = c.Tb(), m = c.Fa();
                m && g && 0 !== m[0] && m[1] !== f[1] && (h.x = m[0], h.y = g[1] - (m[1] + f[1]));
                k && 0 !== k[0] && k[1] !== f[1] && (e.hotSpot = {x: k[0], Wf: "pixels", y: f[1] - k[1], Xf: "pixels"})
            }
            e.Icon = h;
            f = c.i;
            1 !== f && (e.scale = f);
            c = c.j;
            0 !== c && (e.heading = c);
            c = es[d[d.length - 1].node.namespaceURI];
            e = Rl(e, c);
            Tl(a, gs, Ql, e, d, c)
        }), LabelStyle: M(function (a, c, d) {
            a = {node: a};
            var e = {}, f = c.b;
            f && (e.color = f.b);
            (c = c.a) && 1 !== c && (e.scale = c);
            c = hs[d[d.length - 1].node.namespaceURI];
            e = Rl(e, c);
            Tl(a, is, Ql, e, d, c)
        }), LineStyle: M(function (a, c, d) {
            a = {node: a};
            var e = js[d[d.length - 1].node.namespaceURI];
            c = Rl({color: c.b, width: c.a}, e);
            Tl(a, ks, Ql, c, d, e)
        }), PolyStyle: M(function (a, c, d) {
            Tl({node: a}, ns, os, [c.b], d)
        })
    });

    function fs(a, c, d) {
        return Dl(Cq[0], "gx:" + d)
    }

    function $r(a, c) {
        return Dl(c[c.length - 1].node.namespaceURI, "Placemark")
    }

    function Fr(a, c) {
        if (a)return Dl(c[c.length - 1].node.namespaceURI, bs[a.X()])
    }

    var os = Ol("color"), Sr = Ol("coordinates"), Vr = Ol("innerBoundaryIs"), Gr = Ol("Point"), Hr = Ol("LineString"), Mr = Ol("LinearRing"), Ir = Ol("Polygon"), Wr = Ol("outerBoundaryIs");
    Aq.prototype.a = function (a, c) {
        c = ko(this, c);
        var d = Dl(Dq[4], "kml");
        d.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:gx", Cq[0]);
        d.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        d.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");
        var e = {node: d}, f = {};
        1 < a.length ? f.Document = a : 1 == a.length && (f.Placemark = a[0]);
        var g = Yr[d.namespaceURI],
            f = Rl(f, g);
        Tl(e, as, Ql, f, [c], g, this);
        return d
    };
    (function () {
        var a = {}, c = {ha: a};
        (function (d) {
            if ("object" === typeof a && "undefined" !== typeof c)c.ha = d(); else {
                var e;
                "undefined" !== typeof window ? e = window : "undefined" !== typeof global ? e = global : "undefined" !== typeof self ? e = self : e = this;
                e.Mp = d()
            }
        })(function () {
            return function e(a, c, h) {
                function k(n, q) {
                    if (!c[n]) {
                        if (!a[n]) {
                            var r = "function" == typeof require && require;
                            if (!q && r)return r(n, !0);
                            if (m)return m(n, !0);
                            r = Error("Cannot find module '" + n + "'");
                            throw r.code = "MODULE_NOT_FOUND", r;
                        }
                        r = c[n] = {ha: {}};
                        a[n][0].call(r.ha, function (c) {
                            var e =
                                a[n][1][c];
                            return k(e ? e : c)
                        }, r, r.ha, e, a, c, h)
                    }
                    return c[n].ha
                }

                for (var m = "function" == typeof require && require, n = 0; n < h.length; n++)k(h[n]);
                return k
            }({
                1: [function (a, c, g) {
                    g.read = function (a, c, e, f, g) {
                        var q;
                        q = 8 * g - f - 1;
                        var r = (1 << q) - 1, u = r >> 1, v = -7;
                        g = e ? g - 1 : 0;
                        var x = e ? -1 : 1, z = a[c + g];
                        g += x;
                        e = z & (1 << -v) - 1;
                        z >>= -v;
                        for (v += q; 0 < v; e = 256 * e + a[c + g], g += x, v -= 8);
                        q = e & (1 << -v) - 1;
                        e >>= -v;
                        for (v += f; 0 < v; q = 256 * q + a[c + g], g += x, v -= 8);
                        if (0 === e)e = 1 - u; else {
                            if (e === r)return q ? NaN : Infinity * (z ? -1 : 1);
                            q += Math.pow(2, f);
                            e = e - u
                        }
                        return (z ? -1 : 1) * q * Math.pow(2, e -
                                f)
                    };
                    g.write = function (a, c, e, f, g, q) {
                        var r, u = 8 * q - g - 1, v = (1 << u) - 1, x = v >> 1, z = 23 === g ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                        q = f ? 0 : q - 1;
                        var E = f ? 1 : -1, B = 0 > c || 0 === c && 0 > 1 / c ? 1 : 0;
                        c = Math.abs(c);
                        isNaN(c) || Infinity === c ? (c = isNaN(c) ? 1 : 0, f = v) : (f = Math.floor(Math.log(c) / Math.LN2), 1 > c * (r = Math.pow(2, -f)) && (f--, r *= 2), c = 1 <= f + x ? c + z / r : c + z * Math.pow(2, 1 - x), 2 <= c * r && (f++, r /= 2), f + x >= v ? (c = 0, f = v) : 1 <= f + x ? (c = (c * r - 1) * Math.pow(2, g), f += x) : (c = c * Math.pow(2, x - 1) * Math.pow(2, g), f = 0));
                        for (; 8 <= g; a[e + q] = c & 255, q += E, c /= 256, g -= 8);
                        f = f << g | c;
                        for (u += g; 0 < u; a[e +
                        q] = f & 255, q += E, f /= 256, u -= 8);
                        a[e + q - E] |= 128 * B
                    }
                }, {}], 2: [function (a, c) {
                    function g(a) {
                        var c;
                        a && a.length && (c = a, a = c.length);
                        a = new Uint8Array(a || 0);
                        c && a.set(c);
                        a.Vh = m.Vh;
                        a.Vf = m.Vf;
                        a.Nh = m.Nh;
                        a.zi = m.zi;
                        a.Jf = m.Jf;
                        a.yi = m.yi;
                        a.Df = m.Df;
                        a.vi = m.vi;
                        a.toString = m.toString;
                        a.write = m.write;
                        a.slice = m.slice;
                        a.pg = m.pg;
                        a.ij = !0;
                        return a
                    }

                    function h(a) {
                        for (var c = a.length, e = [], f = 0, g, h; f < c; f++) {
                            g = a.charCodeAt(f);
                            if (55295 < g && 57344 > g)if (h)if (56320 > g) {
                                e.push(239, 191, 189);
                                h = g;
                                continue
                            } else g = h - 55296 << 10 | g - 56320 | 65536, h = null; else {
                                56319 <
                                g || f + 1 === c ? e.push(239, 191, 189) : h = g;
                                continue
                            } else h && (e.push(239, 191, 189), h = null);
                            128 > g ? e.push(g) : 2048 > g ? e.push(g >> 6 | 192, g & 63 | 128) : 65536 > g ? e.push(g >> 12 | 224, g >> 6 & 63 | 128, g & 63 | 128) : e.push(g >> 18 | 240, g >> 12 & 63 | 128, g >> 6 & 63 | 128, g & 63 | 128)
                        }
                        return e
                    }

                    c.ha = g;
                    var k = a("ieee754"), m, n, p;
                    m = {
                        Vh: function (a) {
                            return (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + 16777216 * this[a + 3]
                        }, Vf: function (a, c) {
                            this[c] = a;
                            this[c + 1] = a >>> 8;
                            this[c + 2] = a >>> 16;
                            this[c + 3] = a >>> 24
                        }, Nh: function (a) {
                            return (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + (this[a + 3] << 24)
                        },
                        Jf: function (a) {
                            return k.read(this, a, !0, 23, 4)
                        }, Df: function (a) {
                            return k.read(this, a, !0, 52, 8)
                        }, yi: function (a, c) {
                            return k.write(this, a, c, !0, 23, 4)
                        }, vi: function (a, c) {
                            return k.write(this, a, c, !0, 52, 8)
                        }, toString: function (a, c, e) {
                            var f = a = "";
                            e = Math.min(this.length, e || this.length);
                            for (c = c || 0; c < e; c++) {
                                var g = this[c];
                                127 >= g ? (a += decodeURIComponent(f) + String.fromCharCode(g), f = "") : f += "%" + g.toString(16)
                            }
                            return a += decodeURIComponent(f)
                        }, write: function (a, c) {
                            for (var e = a === n ? p : h(a), f = 0; f < e.length; f++)this[c + f] = e[f]
                        }, slice: function (a,
                                            c) {
                            return this.subarray(a, c)
                        }, pg: function (a, c) {
                            c = c || 0;
                            for (var e = 0; e < this.length; e++)a[c + e] = this[e]
                        }
                    };
                    m.zi = m.Vf;
                    g.byteLength = function (a) {
                        n = a;
                        p = h(a);
                        return p.length
                    };
                    g.isBuffer = function (a) {
                        return !(!a || !a.ij)
                    }
                }, {ieee754: 1}], 3: [function (a, c) {
                    (function (g) {
                        function h(a) {
                            this.Eb = k.isBuffer(a) ? a : new k(a || 0);
                            this.ca = 0;
                            this.length = this.Eb.length
                        }

                        c.ha = h;
                        var k = g.up || a("./buffer");
                        h.f = 0;
                        h.g = 1;
                        h.b = 2;
                        h.a = 5;
                        var m = Math.pow(2, 63);
                        h.prototype = {
                            Hf: function (a, c, e) {
                                for (e = e || this.length; this.ca < e;) {
                                    var f = this.Aa(), g = this.ca;
                                    a(f >> 3, c, this);
                                    this.ca === g && this.ip(f)
                                }
                                return c
                            }, vo: function () {
                                var a = this.Eb.Jf(this.ca);
                                this.ca += 4;
                                return a
                            }, ro: function () {
                                var a = this.Eb.Df(this.ca);
                                this.ca += 8;
                                return a
                            }, Aa: function () {
                                var a = this.Eb, c, e, f, g, h;
                                c = a[this.ca++];
                                if (128 > c)return c;
                                c = c & 127;
                                f = a[this.ca++];
                                if (128 > f)return c | f << 7;
                                f = (f & 127) << 7;
                                g = a[this.ca++];
                                if (128 > g)return c | f | g << 14;
                                g = (g & 127) << 14;
                                h = a[this.ca++];
                                if (128 > h)return c | f | g | h << 21;
                                e = a[this.ca++];
                                c = (c | f | g | (h & 127) << 21) + 268435456 * (e & 127);
                                if (128 > e)return c;
                                e = a[this.ca++];
                                c += 34359738368 *
                                    (e & 127);
                                if (128 > e)return c;
                                e = a[this.ca++];
                                c += 4398046511104 * (e & 127);
                                if (128 > e)return c;
                                e = a[this.ca++];
                                c += 562949953421312 * (e & 127);
                                if (128 > e)return c;
                                e = a[this.ca++];
                                c += 72057594037927936 * (e & 127);
                                if (128 > e)return c;
                                e = a[this.ca++];
                                if (128 > e)return c + 0x7fffffffffffffff * (e & 127);
                                throw Error("Expected varint not more than 10 bytes");
                            }, Go: function () {
                                var a = this.ca, c = this.Aa();
                                if (c < m)return c;
                                for (var e = this.ca - 2; 255 === this.Eb[e];)e--;
                                e < a && (e = a);
                                for (var f = c = 0; f < e - a + 1; f++)var g = ~this.Eb[a + f] & 127, c = c + (4 > f ? g << 7 * f : g * Math.pow(2,
                                        7 * f));
                                return -c - 1
                            }, sd: function () {
                                var a = this.Aa();
                                return 1 === a % 2 ? (a + 1) / -2 : a / 2
                            }, po: function () {
                                return !!this.Aa()
                            }, Mf: function () {
                                var a = this.Aa() + this.ca, c = this.Eb.toString("utf8", this.ca, a);
                                this.ca = a;
                                return c
                            }, ip: function (a) {
                                a = a & 7;
                                if (a === h.f)for (; 127 < this.Eb[this.ca++];); else if (a === h.b)this.ca = this.Aa() + this.ca; else if (a === h.a)this.ca += 4; else if (a === h.g)this.ca += 8; else throw Error("Unimplemented type: " + a);
                            }
                        }
                    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
                }, {"./buffer": 2}]
            }, {}, [3])(3)
        });
        Zl = c.ha
    })();
    (function () {
        var a = {}, c = {ha: a};
        (function (d) {
            if ("object" === typeof a && "undefined" !== typeof c)c.ha = d(); else {
                var e;
                "undefined" !== typeof window ? e = window : "undefined" !== typeof global ? e = global : "undefined" !== typeof self ? e = self : e = this;
                e.Op = d()
            }
        })(function () {
            return function e(a, c, h) {
                function k(n, q) {
                    if (!c[n]) {
                        if (!a[n]) {
                            var r = "function" == typeof require && require;
                            if (!q && r)return r(n, !0);
                            if (m)return m(n, !0);
                            r = Error("Cannot find module '" + n + "'");
                            throw r.code = "MODULE_NOT_FOUND", r;
                        }
                        r = c[n] = {ha: {}};
                        a[n][0].call(r.ha, function (c) {
                            var e =
                                a[n][1][c];
                            return k(e ? e : c)
                        }, r, r.ha, e, a, c, h)
                    }
                    return c[n].ha
                }

                for (var m = "function" == typeof require && require, n = 0; n < h.length; n++)k(h[n]);
                return k
            }({
                1: [function (a, c) {
                    function g(a, c) {
                        this.x = a;
                        this.y = c
                    }

                    c.ha = g;
                    g.prototype = {
                        clone: function () {
                            return new g(this.x, this.y)
                        }, add: function (a) {
                            return this.clone().aj(a)
                        }, rotate: function (a) {
                            return this.clone().lj(a)
                        }, round: function () {
                            return this.clone().mj()
                        }, angle: function () {
                            return Math.atan2(this.y, this.x)
                        }, aj: function (a) {
                            this.x += a.x;
                            this.y += a.y;
                            return this
                        }, lj: function (a) {
                            var c =
                                Math.cos(a);
                            a = Math.sin(a);
                            var e = a * this.x + c * this.y;
                            this.x = c * this.x - a * this.y;
                            this.y = e;
                            return this
                        }, mj: function () {
                            this.x = Math.round(this.x);
                            this.y = Math.round(this.y);
                            return this
                        }
                    };
                    g.b = function (a) {
                        return a instanceof g ? a : Array.isArray(a) ? new g(a[0], a[1]) : a
                    }
                }, {}],
                2: [function (a, c) {
                    c.ha.$i = a("./lib/vectortile.js");
                    c.ha.Hp = a("./lib/vectortilefeature.js");
                    c.ha.Ip = a("./lib/vectortilelayer.js")
                }, {"./lib/vectortile.js": 3, "./lib/vectortilefeature.js": 4, "./lib/vectortilelayer.js": 5}],
                3: [function (a, c) {
                    function g(a,
                               c, e) {
                        3 === a && (a = new h(e, e.Aa() + e.ca), a.length && (c[a.name] = a))
                    }

                    var h = a("./vectortilelayer");
                    c.ha = function (a, c) {
                        this.layers = a.Hf(g, {}, c)
                    }
                }, {"./vectortilelayer": 5}],
                4: [function (a, c) {
                    function g(a, c, e, f, g) {
                        this.properties = {};
                        this.extent = e;
                        this.type = 0;
                        this.lc = a;
                        this.Me = -1;
                        this.Dd = f;
                        this.Fd = g;
                        a.Hf(h, this, c)
                    }

                    function h(a, c, e) {
                        if (1 == a)c.Kp = e.Aa(); else if (2 == a)for (a = e.Aa() + e.ca; e.ca < a;) {
                            var f = c.Dd[e.Aa()], g = c.Fd[e.Aa()];
                            c.properties[f] = g
                        } else 3 == a ? c.type = e.Aa() : 4 == a && (c.Me = e.ca)
                    }

                    var k = a("point-geometry");
                    c.ha =
                        g;
                    g.b = ["Unknown", "Point", "LineString", "Polygon"];
                    g.prototype.Qg = function () {
                        var a = this.lc;
                        a.ca = this.Me;
                        for (var c = a.Aa() + a.ca, e = 1, f = 0, g = 0, h = 0, v = [], x; a.ca < c;)if (f || (f = a.Aa(), e = f & 7, f = f >> 3), f--, 1 === e || 2 === e)g += a.sd(), h += a.sd(), 1 === e && (x && v.push(x), x = []), x.push(new k(g, h)); else if (7 === e)x && x.push(x[0].clone()); else throw Error("unknown command " + e);
                        x && v.push(x);
                        return v
                    };
                    g.prototype.bbox = function () {
                        var a = this.lc;
                        a.ca = this.Me;
                        for (var c = a.Aa() + a.ca, e = 1, f = 0, g = 0, h = 0, k = Infinity, x = -Infinity, z = Infinity, E = -Infinity; a.ca <
                        c;)if (f || (f = a.Aa(), e = f & 7, f = f >> 3), f--, 1 === e || 2 === e)g += a.sd(), h += a.sd(), g < k && (k = g), g > x && (x = g), h < z && (z = h), h > E && (E = h); else if (7 !== e)throw Error("unknown command " + e);
                        return [k, z, x, E]
                    }
                }, {"point-geometry": 1}],
                5: [function (a, c) {
                    function g(a, c) {
                        this.version = 1;
                        this.name = null;
                        this.extent = 4096;
                        this.length = 0;
                        this.lc = a;
                        this.Dd = [];
                        this.Fd = [];
                        this.Cd = [];
                        a.Hf(h, this, c);
                        this.length = this.Cd.length
                    }

                    function h(a, c, e) {
                        15 === a ? c.version = e.Aa() : 1 === a ? c.name = e.Mf() : 5 === a ? c.extent = e.Aa() : 2 === a ? c.Cd.push(e.ca) : 3 === a ? c.Dd.push(e.Mf()) :
                        4 === a && c.Fd.push(k(e))
                    }

                    function k(a) {
                        for (var c = null, e = a.Aa() + a.ca; a.ca < e;)c = a.Aa() >> 3, c = 1 === c ? a.Mf() : 2 === c ? a.vo() : 3 === c ? a.ro() : 4 === c ? a.Go() : 5 === c ? a.Aa() : 6 === c ? a.sd() : 7 === c ? a.po() : null;
                        return c
                    }

                    var m = a("./vectortilefeature.js");
                    c.ha = g;
                    g.prototype.feature = function (a) {
                        if (0 > a || a >= this.Cd.length)throw Error("feature index out of bounds");
                        this.lc.ca = this.Cd[a];
                        a = this.lc.Aa() + this.lc.ca;
                        return new m(this.lc, a, this.extent, this.Dd, this.Fd)
                    }
                }, {"./vectortilefeature.js": 4}]
            }, {}, [2])(2)
        });
        $l = c.ha
    })();
    function ps(a) {
        this.defaultDataProjection = null;
        a = a ? a : {};
        this.defaultDataProjection = new Fc({code: "", units: "tile-pixels"});
        this.b = a.featureClass ? a.featureClass : Zk;
        this.g = a.geometryName ? a.geometryName : "geometry";
        this.a = a.layerName ? a.layerName : "layer";
        this.f = a.layers ? a.layers : null
    }

    y(ps, io);
    ps.prototype.X = function () {
        return "arraybuffer"
    };
    ps.prototype.Ca = function (a, c) {
        var d = this.f, e = new Zl(a), e = new $l.$i(e), f = [], g = this.b, h, k, m;
        for (m in e.layers)if (!d || -1 != d.indexOf(m)) {
            h = e.layers[m];
            for (var n = 0, p = h.length; n < p; ++n) {
                if (g === Zk) {
                    var q = h.feature(n);
                    k = m;
                    var r = q.Qg(), u = [], v = [];
                    qs(r, v, u);
                    var x = q.type, z = void 0;
                    1 === x ? z = 1 === r.length ? "Point" : "MultiPoint" : 2 === x ? z = 1 === r.length ? "LineString" : "MultiLineString" : 3 === x && (z = "Polygon");
                    q = q.properties;
                    q[this.a] = k;
                    k = new this.b(z, v, u, q)
                } else {
                    q = h.feature(n);
                    z = m;
                    v = c;
                    k = new this.b;
                    u = q.properties;
                    u[this.a] = z;
                    z =
                        q.type;
                    if (0 === z)z = null; else {
                        q = q.Qg();
                        r = [];
                        x = [];
                        qs(q, x, r);
                        var E = void 0;
                        1 === z ? E = 1 === q.length ? new D(null) : new so(null) : 2 === z ? 1 === q.length ? E = new T(null) : E = new U(null) : 3 === z && (E = new F(null));
                        E.ba("XY", x, r);
                        z = E
                    }
                    (v = lo(z, !1, ko(this, v))) && (u[this.g] = v);
                    k.C(u);
                    k.zc(this.g)
                }
                f.push(k)
            }
        }
        return f
    };
    ps.prototype.Oa = function () {
        return this.defaultDataProjection
    };
    ps.prototype.c = function (a) {
        this.f = a
    };
    function qs(a, c, d) {
        for (var e = 0, f = 0, g = a.length; f < g; ++f) {
            var h = a[f], k, m;
            k = 0;
            for (m = h.length; k < m; ++k) {
                var n = h[k];
                c.push(n.x, n.y)
            }
            e += 2 * k;
            d.push(e)
        }
    };
    function rs(a, c) {
        return new ss(a, c)
    }

    function ts(a, c, d) {
        return new us(a, c, d)
    }

    function vs(a) {
        pb.call(this);
        this.Ae = a
    }

    y(vs, pb);
    function ws(a) {
        vs.call(this, a)
    }

    y(ws, vs);
    function xs(a, c, d) {
        vs.call(this, a);
        this.a = c;
        this.f = d
    }

    y(xs, ws);
    function ss(a, c) {
        xs.call(this, "And", a, c)
    }

    y(ss, xs);
    function ys(a, c) {
        xs.call(this, "Or", a, c)
    }

    y(ys, xs);
    function zs(a) {
        vs.call(this, "Not");
        this.condition = a
    }

    y(zs, ws);
    function us(a, c, d) {
        vs.call(this, "BBOX");
        this.geometryName = a;
        this.extent = c;
        this.srsName = d
    }

    y(us, vs);
    function As(a, c) {
        vs.call(this, a);
        this.a = c
    }

    y(As, vs);
    function Bs(a, c, d, e) {
        As.call(this, a, c);
        this.c = d;
        this.f = e
    }

    y(Bs, As);
    function Cs(a, c, d) {
        Bs.call(this, "PropertyIsEqualTo", a, c, d)
    }

    y(Cs, Bs);
    function Ds(a, c, d) {
        Bs.call(this, "PropertyIsNotEqualTo", a, c, d)
    }

    y(Ds, Bs);
    function Es(a, c) {
        Bs.call(this, "PropertyIsLessThan", a, c)
    }

    y(Es, Bs);
    function Fs(a, c) {
        Bs.call(this, "PropertyIsLessThanOrEqualTo", a, c)
    }

    y(Fs, Bs);
    function Gs(a, c) {
        Bs.call(this, "PropertyIsGreaterThan", a, c)
    }

    y(Gs, Bs);
    function Hs(a, c) {
        Bs.call(this, "PropertyIsGreaterThanOrEqualTo", a, c)
    }

    y(Hs, Bs);
    function Is(a) {
        As.call(this, "PropertyIsNull", a)
    }

    y(Is, As);
    function Js(a, c, d) {
        As.call(this, "PropertyIsBetween", a);
        this.f = c;
        this.c = d
    }

    y(Js, As);
    function Ks(a, c, d, e, f, g) {
        As.call(this, "PropertyIsLike", a);
        this.i = c;
        this.o = void 0 !== d ? d : "*";
        this.l = void 0 !== e ? e : ".";
        this.c = void 0 !== f ? f : "!";
        this.f = g
    }

    y(Ks, As);
    function Ls() {
        Mo.call(this);
        this.defaultDataProjection = Ic("EPSG:4326")
    }

    y(Ls, Mo);
    function Ms(a, c) {
        c[c.length - 1].xd[a.getAttribute("k")] = a.getAttribute("v")
    }

    var Ns = [null], Os = N(Ns, {
        nd: function (a, c) {
            c[c.length - 1].Mc.push(a.getAttribute("ref"))
        }, tag: Ms
    }), Qs = N(Ns, {
        node: function (a, c) {
            var d = c[0], e = c[c.length - 1], f = a.getAttribute("id"), g = [parseFloat(a.getAttribute("lon")), parseFloat(a.getAttribute("lat"))];
            e.Ug[f] = g;
            var h = P({xd: {}}, Ps, a, c);
            Sa(h.xd) || (g = new D(g), lo(g, !1, d), d = new zl(g), d.hc(f), d.C(h.xd), e.features.push(d))
        }, way: function (a, c) {
            for (var d = c[0], e = a.getAttribute("id"), f = P({
                Mc: [],
                xd: {}
            }, Os, a, c), g = c[c.length - 1], h = [], k = 0, m = f.Mc.length; k < m; k++)xb(h, g.Ug[f.Mc[k]]);
            f.Mc[0] == f.Mc[f.Mc.length - 1] ? (k = new F(null), k.ba("XY", h, [h.length])) : (k = new T(null), k.ba("XY", h));
            lo(k, !1, d);
            d = new zl(k);
            d.hc(e);
            d.C(f.xd);
            g.features.push(d)
        }
    }), Ps = N(Ns, {tag: Ms});
    Ls.prototype.gc = function (a, c) {
        var d = jo(this, a, c);
        return "osm" == a.localName && (d = P({Ug: {}, features: []}, Qs, a, [d]), d.features) ? d.features : []
    };
    function Rs(a) {
        return a.getAttributeNS("http://www.w3.org/1999/xlink", "href")
    };
    function Ss() {
    }

    Ss.prototype.read = function (a) {
        return Gl(a) ? this.a(a) : Hl(a) ? this.b(a) : "string" === typeof a ? (a = Il(a), this.a(a)) : null
    };
    function Ts() {
    }

    y(Ts, Ss);
    Ts.prototype.a = function (a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (1 == a.nodeType)return this.b(a);
        return null
    };
    Ts.prototype.b = function (a) {
        return (a = P({}, Us, a, [])) ? a : null
    };
    var Vs = [null, "http://www.opengis.net/ows/1.1"], Us = N(Vs, {
            ServiceIdentification: K(function (a, c) {
                return P({}, Ws, a, c)
            }), ServiceProvider: K(function (a, c) {
                return P({}, Xs, a, c)
            }), OperationsMetadata: K(function (a, c) {
                return P({}, Ys, a, c)
            })
        }), Zs = N(Vs, {
            DeliveryPoint: K(V),
            City: K(V),
            AdministrativeArea: K(V),
            PostalCode: K(V),
            Country: K(V),
            ElectronicMailAddress: K(V)
        }), $s = N(Vs, {
            Value: Ml(function (a) {
                return V(a)
            })
        }), at = N(Vs, {
            AllowedValues: K(function (a, c) {
                return P({}, $s, a, c)
            })
        }), ct = N(Vs, {
            Phone: K(function (a, c) {
                return P({},
                    bt, a, c)
            }), Address: K(function (a, c) {
                return P({}, Zs, a, c)
            })
        }), et = N(Vs, {
            HTTP: K(function (a, c) {
                return P({}, dt, a, c)
            })
        }), dt = N(Vs, {
            Get: Ml(function (a, c) {
                var d = Rs(a);
                return d ? P({href: d}, ft, a, c) : void 0
            }), Post: void 0
        }), gt = N(Vs, {
            DCP: K(function (a, c) {
                return P({}, et, a, c)
            })
        }), Ys = N(Vs, {
            Operation: function (a, c) {
                var d = a.getAttribute("name"), e = P({}, gt, a, c);
                e && (c[c.length - 1][d] = e)
            }
        }), bt = N(Vs, {Voice: K(V), Facsimile: K(V)}), ft = N(Vs, {
            Constraint: Ml(function (a, c) {
                var d = a.getAttribute("name");
                return d ? P({name: d}, at, a, c) : void 0
            })
        }),
        ht = N(Vs, {
            IndividualName: K(V), PositionName: K(V), ContactInfo: K(function (a, c) {
                return P({}, ct, a, c)
            })
        }), Ws = N(Vs, {Title: K(V), ServiceTypeVersion: K(V), ServiceType: K(V)}), Xs = N(Vs, {
            ProviderName: K(V),
            ProviderSite: K(Rs),
            ServiceContact: K(function (a, c) {
                return P({}, ht, a, c)
            })
        });

    function it(a, c, d, e) {
        var f;
        void 0 !== e ? f = e : f = [];
        for (var g = e = 0; g < c;) {
            var h = a[g++];
            f[e++] = a[g++];
            f[e++] = h;
            for (h = 2; h < d; ++h)f[e++] = a[g++]
        }
        f.length = e
    };
    function jt(a) {
        a = a ? a : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = Ic("EPSG:4326");
        this.b = a.factor ? a.factor : 1E5;
        this.a = a.geometryLayout ? a.geometryLayout : "XY"
    }

    y(jt, Sp);
    function kt(a, c, d) {
        var e, f = Array(c);
        for (e = 0; e < c; ++e)f[e] = 0;
        var g, h;
        g = 0;
        for (h = a.length; g < h;)for (e = 0; e < c; ++e, ++g) {
            var k = a[g], m = k - f[e];
            f[e] = k;
            a[g] = m
        }
        return lt(a, d ? d : 1E5)
    }

    function mt(a, c, d) {
        var e, f = Array(c);
        for (e = 0; e < c; ++e)f[e] = 0;
        a = nt(a, d ? d : 1E5);
        var g;
        d = 0;
        for (g = a.length; d < g;)for (e = 0; e < c; ++e, ++d)f[e] += a[d], a[d] = f[e];
        return a
    }

    function lt(a, c) {
        var d = c ? c : 1E5, e, f;
        e = 0;
        for (f = a.length; e < f; ++e)a[e] = Math.round(a[e] * d);
        d = 0;
        for (e = a.length; d < e; ++d)f = a[d], a[d] = 0 > f ? ~(f << 1) : f << 1;
        d = "";
        e = 0;
        for (f = a.length; e < f; ++e) {
            for (var g = a[e], h = void 0, k = ""; 32 <= g;)h = (32 | g & 31) + 63, k += String.fromCharCode(h), g >>= 5;
            k += String.fromCharCode(g + 63);
            d += k
        }
        return d
    }

    function nt(a, c) {
        var d = c ? c : 1E5, e = [], f = 0, g = 0, h, k;
        h = 0;
        for (k = a.length; h < k; ++h) {
            var m = a.charCodeAt(h) - 63, f = f | (m & 31) << g;
            32 > m ? (e.push(f), g = f = 0) : g += 5
        }
        f = 0;
        for (g = e.length; f < g; ++f)h = e[f], e[f] = h & 1 ? ~(h >> 1) : h >> 1;
        f = 0;
        for (g = e.length; f < g; ++f)e[f] /= d;
        return e
    }

    l = jt.prototype;
    l.pd = function (a, c) {
        var d = this.rd(a, c);
        return new zl(d)
    };
    l.Gf = function (a, c) {
        return [this.pd(a, c)]
    };
    l.rd = function (a, c) {
        var d = td(this.a), e = mt(a, d, this.b);
        it(e, e.length, d, e);
        d = Gd(e, 0, e.length, d);
        return lo(new T(d, this.a), !1, ko(this, c))
    };
    l.De = function (a, c) {
        var d = a.W();
        return d ? this.zd(d, c) : ""
    };
    l.xi = function (a, c) {
        return this.De(a[0], c)
    };
    l.zd = function (a, c) {
        a = lo(a, !0, ko(this, c));
        var d = a.ga(), e = a.ua();
        it(d, d.length, e, d);
        return kt(d, e, this.b)
    };
    function ot(a) {
        a = a ? a : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = Ic(a.defaultDataProjection ? a.defaultDataProjection : "EPSG:4326")
    }

    y(ot, mo);
    function pt(a, c) {
        var d = [], e, f, g, h;
        g = 0;
        for (h = a.length; g < h; ++g)e = a[g], 0 < g && d.pop(), 0 <= e ? f = c[e] : f = c[~e].slice().reverse(), d.push.apply(d, f);
        e = 0;
        for (f = d.length; e < f; ++e)d[e] = d[e].slice();
        return d
    }

    function rt(a, c, d, e, f) {
        a = a.geometries;
        var g = [], h, k;
        h = 0;
        for (k = a.length; h < k; ++h)g[h] = st(a[h], c, d, e, f);
        return g
    }

    function st(a, c, d, e, f) {
        var g = a.type, h = tt[g];
        c = "Point" === g || "MultiPoint" === g ? h(a, d, e) : h(a, c);
        d = new zl;
        d.Ta(lo(c, !1, f));
        void 0 !== a.id && d.hc(a.id);
        a.properties && d.C(a.properties);
        return d
    }

    ot.prototype.Ff = function (a, c) {
        if ("Topology" == a.type) {
            var d, e = null, f = null;
            a.transform && (d = a.transform, e = d.scale, f = d.translate);
            var g = a.arcs;
            if (d) {
                d = e;
                var h = f, k, m;
                k = 0;
                for (m = g.length; k < m; ++k)for (var n = g[k], p = d, q = h, r = 0, u = 0, v = void 0, x = void 0, z = void 0, x = 0, z = n.length; x < z; ++x)v = n[x], r += v[0], u += v[1], v[0] = r, v[1] = u, ut(v, p, q)
            }
            d = [];
            h = Ra(a.objects);
            k = 0;
            for (m = h.length; k < m; ++k)"GeometryCollection" === h[k].type ? (n = h[k], d.push.apply(d, rt(n, g, e, f, c))) : (n = h[k], d.push(st(n, g, e, f, c)));
            return d
        }
        return []
    };
    function ut(a, c, d) {
        a[0] = a[0] * c[0] + d[0];
        a[1] = a[1] * c[1] + d[1]
    }

    ot.prototype.Oa = function () {
        return this.defaultDataProjection
    };
    var tt = {
        Point: function (a, c, d) {
            a = a.coordinates;
            c && d && ut(a, c, d);
            return new D(a)
        }, LineString: function (a, c) {
            var d = pt(a.arcs, c);
            return new T(d)
        }, Polygon: function (a, c) {
            var d = [], e, f;
            e = 0;
            for (f = a.arcs.length; e < f; ++e)d[e] = pt(a.arcs[e], c);
            return new F(d)
        }, MultiPoint: function (a, c, d) {
            a = a.coordinates;
            var e, f;
            if (c && d)for (e = 0, f = a.length; e < f; ++e)ut(a[e], c, d);
            return new so(a)
        }, MultiLineString: function (a, c) {
            var d = [], e, f;
            e = 0;
            for (f = a.arcs.length; e < f; ++e)d[e] = pt(a.arcs[e], c);
            return new U(d)
        }, MultiPolygon: function (a, c) {
            var d =
                [], e, f, g, h, k, m;
            k = 0;
            for (m = a.arcs.length; k < m; ++k) {
                e = a.arcs[k];
                f = [];
                g = 0;
                for (h = e.length; g < h; ++g)f[g] = pt(e[g], c);
                d[k] = f
            }
            return new to(d)
        }
    };

    function vt(a) {
        a = a ? a : {};
        this.i = a.featureType;
        this.g = a.featureNS;
        this.b = a.gmlFormat ? a.gmlFormat : new cp;
        this.c = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd";
        Mo.call(this)
    }

    y(vt, Mo);
    vt.prototype.gc = function (a, c) {
        var d = {featureType: this.i, featureNS: this.g};
        Pa(d, jo(this, a, c ? c : {}));
        d = [d];
        this.b.b["http://www.opengis.net/gml"].featureMember = Kl(Po.prototype.qd);
        (d = P([], this.b.b, a, d, this.b)) || (d = []);
        return d
    };
    vt.prototype.o = function (a) {
        if (Gl(a))return wt(a);
        if (Hl(a))return P({}, xt, a, []);
        if ("string" === typeof a)return a = Il(a), wt(a)
    };
    vt.prototype.l = function (a) {
        if (Gl(a))return yt(this, a);
        if (Hl(a))return zt(this, a);
        if ("string" === typeof a)return a = Il(a), yt(this, a)
    };
    function yt(a, c) {
        for (var d = c.firstChild; d; d = d.nextSibling)if (1 == d.nodeType)return zt(a, d)
    }

    var At = {"http://www.opengis.net/gml": {boundedBy: K(Po.prototype.te, "bounds")}};

    function zt(a, c) {
        var d = {}, e = Xo(c.getAttribute("numberOfFeatures"));
        d.numberOfFeatures = e;
        return P(d, At, c, [], a.b)
    }

    var Bt = {
        "http://www.opengis.net/wfs": {
            totalInserted: K(Wo),
            totalUpdated: K(Wo),
            totalDeleted: K(Wo)
        }
    }, Ct = {
        "http://www.opengis.net/ogc": {
            FeatureId: Kl(function (a) {
                return a.getAttribute("fid")
            })
        }
    }, Dt = {
        "http://www.opengis.net/wfs": {
            Feature: function (a, c) {
                Sl(Ct, a, c)
            }
        }
    }, xt = {
        "http://www.opengis.net/wfs": {
            TransactionSummary: K(function (a, c) {
                return P({}, Bt, a, c)
            }, "transactionSummary"), InsertResults: K(function (a, c) {
                return P([], Dt, a, c)
            }, "insertIds")
        }
    };

    function wt(a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (1 == a.nodeType)return P({}, xt, a, [])
    }

    var Et = {"http://www.opengis.net/wfs": {PropertyName: M(Zo)}};

    function Ft(a, c) {
        var d = Dl("http://www.opengis.net/ogc", "Filter"), e = Dl("http://www.opengis.net/ogc", "FeatureId");
        d.appendChild(e);
        e.setAttribute("fid", c);
        a.appendChild(d)
    }

    var Gt = {
        "http://www.opengis.net/wfs": {
            Insert: M(function (a, c, d) {
                var e = d[d.length - 1], e = Dl(e.featureNS, e.featureType);
                a.appendChild(e);
                cp.prototype.wi(e, c, d)
            }), Update: M(function (a, c, d) {
                var e = d[d.length - 1], f = e.featureType, g = e.featurePrefix, g = g ? g : "feature", h = e.featureNS;
                a.setAttribute("typeName", g + ":" + f);
                a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + g, h);
                f = c.Wa();
                if (void 0 !== f) {
                    for (var g = c.K(), h = [], k = 0, m = g.length; k < m; k++) {
                        var n = c.get(g[k]);
                        void 0 !== n && h.push({name: g[k], value: n})
                    }
                    Tl({
                        node: a,
                        srsName: e.srsName
                    }, Gt, Ol("Property"), h, d);
                    Ft(a, f)
                }
            }), Delete: M(function (a, c, d) {
                var e = d[d.length - 1];
                d = e.featureType;
                var f = e.featurePrefix, f = f ? f : "feature", e = e.featureNS;
                a.setAttribute("typeName", f + ":" + d);
                a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + f, e);
                c = c.Wa();
                void 0 !== c && Ft(a, c)
            }), Property: M(function (a, c, d) {
                var e = Dl("http://www.opengis.net/wfs", "Name");
                a.appendChild(e);
                Zo(e, c.name);
                void 0 !== c.value && null !== c.value && (e = Dl("http://www.opengis.net/wfs", "Value"), a.appendChild(e), c.value instanceof dd ? cp.prototype.Fe(e, c.value, d) : Zo(e, c.value))
            }), Native: M(function (a, c) {
                c.qp && a.setAttribute("vendorId", c.qp);
                void 0 !== c.So && a.setAttribute("safeToIgnore", c.So);
                void 0 !== c.value && Zo(a, c.value)
            })
        }
    };

    function Ht(a, c, d) {
        a = {node: a};
        var e = c.a;
        Tl(a, It, Ol(e.Ae), [e], d);
        c = c.f;
        Tl(a, It, Ol(c.Ae), [c], d)
    }

    function Jt(a, c) {
        void 0 !== c.f && a.setAttribute("matchCase", c.f.toString());
        Kt(a, c.a);
        Lt("Literal", a, "" + c.c)
    }

    function Lt(a, c, d) {
        a = Dl("http://www.opengis.net/ogc", a);
        Zo(a, d);
        c.appendChild(a)
    }

    function Kt(a, c) {
        Lt("PropertyName", a, c)
    }

    var It = {
        "http://www.opengis.net/wfs": {
            Query: M(function (a, c, d) {
                var e = d[d.length - 1], f = e.featurePrefix, g = e.featureNS, h = e.propertyNames, k = e.srsName;
                a.setAttribute("typeName", (f ? f + ":" : "") + c);
                k && a.setAttribute("srsName", k);
                g && a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + f, g);
                c = Pa({}, e);
                c.node = a;
                Tl(c, Et, Ol("PropertyName"), h, d);
                if (e = e.filter)h = Dl("http://www.opengis.net/ogc", "Filter"), a.appendChild(h), Tl({node: h}, It, Ol(e.Ae), [e], d)
            })
        }, "http://www.opengis.net/ogc": {
            And: M(Ht),
            Or: M(Ht),
            Not: M(function (a,
                             c, d) {
                c = c.condition;
                Tl({node: a}, It, Ol(c.Ae), [c], d)
            }),
            BBOX: M(function (a, c, d) {
                d[d.length - 1].srsName = c.srsName;
                Kt(a, c.geometryName);
                cp.prototype.Fe(a, c.extent, d)
            }),
            PropertyIsEqualTo: M(Jt),
            PropertyIsNotEqualTo: M(Jt),
            PropertyIsLessThan: M(Jt),
            PropertyIsLessThanOrEqualTo: M(Jt),
            PropertyIsGreaterThan: M(Jt),
            PropertyIsGreaterThanOrEqualTo: M(Jt),
            PropertyIsNull: M(function (a, c) {
                Kt(a, c.a)
            }),
            PropertyIsBetween: M(function (a, c) {
                Kt(a, c.a);
                Lt("LowerBoundary", a, "" + c.f);
                Lt("UpperBoundary", a, "" + c.c)
            }),
            PropertyIsLike: M(function (a,
                                        c) {
                a.setAttribute("wildCard", c.o);
                a.setAttribute("singleChar", c.l);
                a.setAttribute("escapeChar", c.c);
                void 0 !== c.f && a.setAttribute("matchCase", c.f.toString());
                Kt(a, c.a);
                Lt("Literal", a, "" + c.i)
            })
        }
    };
    vt.prototype.j = function (a) {
        var c = Dl("http://www.opengis.net/wfs", "GetFeature");
        c.setAttribute("service", "WFS");
        c.setAttribute("version", "1.1.0");
        var d;
        if (a && (a.handle && c.setAttribute("handle", a.handle), a.outputFormat && c.setAttribute("outputFormat", a.outputFormat), void 0 !== a.maxFeatures && c.setAttribute("maxFeatures", a.maxFeatures), a.resultType && c.setAttribute("resultType", a.resultType), void 0 !== a.startIndex && c.setAttribute("startIndex", a.startIndex), void 0 !== a.count && c.setAttribute("count", a.count),
                d = a.filter, a.bbox)) {
            var e = ts(a.geometryName, a.bbox, a.srsName);
            d ? d = rs(d, e) : d = e
        }
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.c);
        e = a.featureTypes;
        a = [{
            node: c,
            srsName: a.srsName,
            featureNS: a.featureNS ? a.featureNS : this.g,
            featurePrefix: a.featurePrefix,
            geometryName: a.geometryName,
            filter: d,
            propertyNames: a.propertyNames ? a.propertyNames : []
        }];
        d = Pa({}, a[a.length - 1]);
        d.node = c;
        Tl(d, It, Ol("Query"), e, a);
        return c
    };
    vt.prototype.U = function (a, c, d, e) {
        var f = [], g = Dl("http://www.opengis.net/wfs", "Transaction");
        g.setAttribute("service", "WFS");
        g.setAttribute("version", "1.1.0");
        var h, k;
        e && (h = e.gmlOptions ? e.gmlOptions : {}, e.handle && g.setAttribute("handle", e.handle));
        g.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.c);
        a && (k = {
            node: g,
            featureNS: e.featureNS,
            featureType: e.featureType,
            featurePrefix: e.featurePrefix
        }, Pa(k, h), Tl(k, Gt, Ol("Insert"), a, f));
        c && (k = {
            node: g, featureNS: e.featureNS, featureType: e.featureType,
            featurePrefix: e.featurePrefix
        }, Pa(k, h), Tl(k, Gt, Ol("Update"), c, f));
        d && Tl({
            node: g,
            featureNS: e.featureNS,
            featureType: e.featureType,
            featurePrefix: e.featurePrefix
        }, Gt, Ol("Delete"), d, f);
        e.nativeElements && Tl({
            node: g,
            featureNS: e.featureNS,
            featureType: e.featureType,
            featurePrefix: e.featurePrefix
        }, Gt, Ol("Native"), e.nativeElements, f);
        return g
    };
    vt.prototype.Lf = function (a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (1 == a.nodeType)return this.we(a);
        return null
    };
    vt.prototype.we = function (a) {
        if (a.firstElementChild && a.firstElementChild.firstElementChild)for (a = a.firstElementChild.firstElementChild, a = a.firstElementChild; a; a = a.nextElementSibling)if (0 !== a.childNodes.length && (1 !== a.childNodes.length || 3 !== a.firstChild.nodeType)) {
            var c = [{}];
            this.b.te(a, c);
            return Ic(c.pop().srsName)
        }
        return null
    };
    function Mt(a) {
        a = a ? a : {};
        this.defaultDataProjection = null;
        this.b = void 0 !== a.splitCollection ? a.splitCollection : !1
    }

    y(Mt, Sp);
    function Nt(a) {
        a = a.Z();
        return 0 === a.length ? "" : a[0] + " " + a[1]
    }

    function Ot(a) {
        a = a.Z();
        for (var c = [], d = 0, e = a.length; d < e; ++d)c.push(a[d][0] + " " + a[d][1]);
        return c.join(",")
    }

    function Pt(a) {
        var c = [];
        a = a.Pd();
        for (var d = 0, e = a.length; d < e; ++d)c.push("(" + Ot(a[d]) + ")");
        return c.join(",")
    }

    function Qt(a) {
        var c = a.X();
        a = (0, Rt[c])(a);
        c = c.toUpperCase();
        return 0 === a.length ? c + " EMPTY" : c + "(" + a + ")"
    }

    var Rt = {
        Point: Nt, LineString: Ot, Polygon: Pt, MultiPoint: function (a) {
            var c = [];
            a = a.ee();
            for (var d = 0, e = a.length; d < e; ++d)c.push("(" + Nt(a[d]) + ")");
            return c.join(",")
        }, MultiLineString: function (a) {
            var c = [];
            a = a.gd();
            for (var d = 0, e = a.length; d < e; ++d)c.push("(" + Ot(a[d]) + ")");
            return c.join(",")
        }, MultiPolygon: function (a) {
            var c = [];
            a = a.Qd();
            for (var d = 0, e = a.length; d < e; ++d)c.push("(" + Pt(a[d]) + ")");
            return c.join(",")
        }, GeometryCollection: function (a) {
            var c = [];
            a = a.bf();
            for (var d = 0, e = a.length; d < e; ++d)c.push(Qt(a[d]));
            return c.join(",")
        }
    };
    l = Mt.prototype;
    l.pd = function (a, c) {
        var d = this.rd(a, c);
        if (d) {
            var e = new zl;
            e.Ta(d);
            return e
        }
        return null
    };
    l.Gf = function (a, c) {
        var d = [], e = this.rd(a, c);
        this.b && "GeometryCollection" == e.X() ? d = e.c : d = [e];
        for (var f = [], g = 0, h = d.length; g < h; ++g)e = new zl, e.Ta(d[g]), f.push(e);
        return f
    };
    l.rd = function (a, c) {
        var d;
        d = new St(new Tt(a));
        d.b = Ut(d.a);
        return (d = Vt(d)) ? lo(d, !1, c) : null
    };
    l.De = function (a, c) {
        var d = a.W();
        return d ? this.zd(d, c) : ""
    };
    l.xi = function (a, c) {
        if (1 == a.length)return this.De(a[0], c);
        for (var d = [], e = 0, f = a.length; e < f; ++e)d.push(a[e].W());
        d = new Do(d);
        return this.zd(d, c)
    };
    l.zd = function (a, c) {
        return Qt(lo(a, !0, c))
    };
    function Tt(a) {
        this.a = a;
        this.b = -1
    }

    function Ut(a) {
        var c = a.a.charAt(++a.b), d = {position: a.b, value: c};
        if ("(" == c)d.type = 2; else if ("," == c)d.type = 5; else if (")" == c)d.type = 3; else if ("0" <= c && "9" >= c || "." == c || "-" == c) {
            d.type = 4;
            var e, c = a.b, f = !1, g = !1;
            do {
                if ("." == e)f = !0; else if ("e" == e || "E" == e)g = !0;
                e = a.a.charAt(++a.b)
            } while ("0" <= e && "9" >= e || "." == e && (void 0 === f || !f) || !g && ("e" == e || "E" == e) || g && ("-" == e || "+" == e));
            a = parseFloat(a.a.substring(c, a.b--));
            d.value = a
        } else if ("a" <= c && "z" >= c || "A" <= c && "Z" >= c) {
            d.type = 1;
            c = a.b;
            do e = a.a.charAt(++a.b); while ("a" <= e && "z" >=
            e || "A" <= e && "Z" >= e);
            a = a.a.substring(c, a.b--).toUpperCase();
            d.value = a
        } else {
            if (" " == c || "\t" == c || "\r" == c || "\n" == c)return Ut(a);
            if ("" === c)d.type = 6; else throw Error("Unexpected character: " + c);
        }
        return d
    }

    function St(a) {
        this.a = a
    }

    l = St.prototype;
    l.match = function (a) {
        if (a = this.b.type == a)this.b = Ut(this.a);
        return a
    };
    function Vt(a) {
        var c = a.b;
        if (a.match(1)) {
            var d = c.value;
            if ("GEOMETRYCOLLECTION" == d) {
                a:{
                    if (a.match(2)) {
                        c = [];
                        do c.push(Vt(a)); while (a.match(5));
                        if (a.match(3)) {
                            a = c;
                            break a
                        }
                    } else if (Wt(a)) {
                        a = [];
                        break a
                    }
                    throw Error(Xt(a));
                }
                return new Do(a)
            }
            var e = Yt[d], c = Zt[d];
            if (!e || !c)throw Error("Invalid geometry type: " + d);
            a = e.call(a);
            return new c(a)
        }
        throw Error(Xt(a));
    }

    l.Af = function () {
        if (this.match(2)) {
            var a = $t(this);
            if (this.match(3))return a
        } else if (Wt(this))return null;
        throw Error(Xt(this));
    };
    l.zf = function () {
        if (this.match(2)) {
            var a = au(this);
            if (this.match(3))return a
        } else if (Wt(this))return [];
        throw Error(Xt(this));
    };
    l.Bf = function () {
        if (this.match(2)) {
            var a = bu(this);
            if (this.match(3))return a
        } else if (Wt(this))return [];
        throw Error(Xt(this));
    };
    l.ao = function () {
        if (this.match(2)) {
            var a;
            if (2 == this.b.type)for (a = [this.Af()]; this.match(5);)a.push(this.Af()); else a = au(this);
            if (this.match(3))return a
        } else if (Wt(this))return [];
        throw Error(Xt(this));
    };
    l.$n = function () {
        if (this.match(2)) {
            var a = bu(this);
            if (this.match(3))return a
        } else if (Wt(this))return [];
        throw Error(Xt(this));
    };
    l.bo = function () {
        if (this.match(2)) {
            for (var a = [this.Bf()]; this.match(5);)a.push(this.Bf());
            if (this.match(3))return a
        } else if (Wt(this))return [];
        throw Error(Xt(this));
    };
    function $t(a) {
        for (var c = [], d = 0; 2 > d; ++d) {
            var e = a.b;
            if (a.match(4))c.push(e.value); else break
        }
        if (2 == c.length)return c;
        throw Error(Xt(a));
    }

    function au(a) {
        for (var c = [$t(a)]; a.match(5);)c.push($t(a));
        return c
    }

    function bu(a) {
        for (var c = [a.zf()]; a.match(5);)c.push(a.zf());
        return c
    }

    function Wt(a) {
        var c = 1 == a.b.type && "EMPTY" == a.b.value;
        c && (a.b = Ut(a.a));
        return c
    }

    function Xt(a) {
        return "Unexpected `" + a.b.value + "` at position " + a.b.position + " in `" + a.a.a + "`"
    }

    var Zt = {
        POINT: D,
        LINESTRING: T,
        POLYGON: F,
        MULTIPOINT: so,
        MULTILINESTRING: U,
        MULTIPOLYGON: to
    }, Yt = {
        POINT: St.prototype.Af,
        LINESTRING: St.prototype.zf,
        POLYGON: St.prototype.Bf,
        MULTIPOINT: St.prototype.ao,
        MULTILINESTRING: St.prototype.$n,
        MULTIPOLYGON: St.prototype.bo
    };

    function cu() {
        this.version = void 0
    }

    y(cu, Ss);
    cu.prototype.a = function (a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (1 == a.nodeType)return this.b(a);
        return null
    };
    cu.prototype.b = function (a) {
        this.version = a.getAttribute("version").trim();
        return (a = P({version: this.version}, du, a, [])) ? a : null
    };
    function eu(a, c) {
        return P({}, fu, a, c)
    }

    function gu(a, c) {
        return P({}, hu, a, c)
    }

    function iu(a, c) {
        var d = eu(a, c);
        if (d) {
            var e = [Xo(a.getAttribute("width")), Xo(a.getAttribute("height"))];
            d.size = e;
            return d
        }
    }

    function ju(a, c) {
        return P([], ku, a, c)
    }

    var lu = [null, "http://www.opengis.net/wms"], du = N(lu, {
        Service: K(function (a, c) {
            return P({}, mu, a, c)
        }), Capability: K(function (a, c) {
            return P({}, nu, a, c)
        })
    }), nu = N(lu, {
        Request: K(function (a, c) {
            return P({}, ou, a, c)
        }), Exception: K(function (a, c) {
            return P([], pu, a, c)
        }), Layer: K(function (a, c) {
            return P({}, qu, a, c)
        })
    }), mu = N(lu, {
        Name: K(V),
        Title: K(V),
        Abstract: K(V),
        KeywordList: K(ju),
        OnlineResource: K(Rs),
        ContactInformation: K(function (a, c) {
            return P({}, ru, a, c)
        }),
        Fees: K(V),
        AccessConstraints: K(V),
        LayerLimit: K(Wo),
        MaxWidth: K(Wo),
        MaxHeight: K(Wo)
    }), ru = N(lu, {
        ContactPersonPrimary: K(function (a, c) {
            return P({}, su, a, c)
        }), ContactPosition: K(V), ContactAddress: K(function (a, c) {
            return P({}, tu, a, c)
        }), ContactVoiceTelephone: K(V), ContactFacsimileTelephone: K(V), ContactElectronicMailAddress: K(V)
    }), su = N(lu, {ContactPerson: K(V), ContactOrganization: K(V)}), tu = N(lu, {
        AddressType: K(V),
        Address: K(V),
        City: K(V),
        StateOrProvince: K(V),
        PostCode: K(V),
        Country: K(V)
    }), pu = N(lu, {Format: Kl(V)}), qu = N(lu, {
        Name: K(V), Title: K(V), Abstract: K(V), KeywordList: K(ju), CRS: Ml(V),
        EX_GeographicBoundingBox: K(function (a, c) {
            var d = P({}, uu, a, c);
            if (d) {
                var e = d.westBoundLongitude, f = d.southBoundLatitude, g = d.eastBoundLongitude, d = d.northBoundLatitude;
                return void 0 === e || void 0 === f || void 0 === g || void 0 === d ? void 0 : [e, f, g, d]
            }
        }), BoundingBox: Ml(function (a) {
            var c = [Vo(a.getAttribute("minx")), Vo(a.getAttribute("miny")), Vo(a.getAttribute("maxx")), Vo(a.getAttribute("maxy"))], d = [Vo(a.getAttribute("resx")), Vo(a.getAttribute("resy"))];
            return {crs: a.getAttribute("CRS"), extent: c, res: d}
        }), Dimension: Ml(function (a) {
            return {
                name: a.getAttribute("name"),
                units: a.getAttribute("units"),
                unitSymbol: a.getAttribute("unitSymbol"),
                "default": a.getAttribute("default"),
                multipleValues: So(a.getAttribute("multipleValues")),
                nearestValue: So(a.getAttribute("nearestValue")),
                current: So(a.getAttribute("current")),
                values: V(a)
            }
        }), Attribution: K(function (a, c) {
            return P({}, vu, a, c)
        }), AuthorityURL: Ml(function (a, c) {
            var d = eu(a, c);
            if (d)return d.name = a.getAttribute("name"), d
        }), Identifier: Ml(V), MetadataURL: Ml(function (a, c) {
            var d = eu(a, c);
            if (d)return d.type = a.getAttribute("type"),
                d
        }), DataURL: Ml(eu), FeatureListURL: Ml(eu), Style: Ml(function (a, c) {
            return P({}, wu, a, c)
        }), MinScaleDenominator: K(Uo), MaxScaleDenominator: K(Uo), Layer: Ml(function (a, c) {
            var d = c[c.length - 1], e = P({}, qu, a, c);
            if (e) {
                var f = So(a.getAttribute("queryable"));
                void 0 === f && (f = d.queryable);
                e.queryable = void 0 !== f ? f : !1;
                f = Xo(a.getAttribute("cascaded"));
                void 0 === f && (f = d.cascaded);
                e.cascaded = f;
                f = So(a.getAttribute("opaque"));
                void 0 === f && (f = d.opaque);
                e.opaque = void 0 !== f ? f : !1;
                f = So(a.getAttribute("noSubsets"));
                void 0 === f && (f = d.noSubsets);
                e.noSubsets = void 0 !== f ? f : !1;
                (f = Vo(a.getAttribute("fixedWidth"))) || (f = d.fixedWidth);
                e.fixedWidth = f;
                (f = Vo(a.getAttribute("fixedHeight"))) || (f = d.fixedHeight);
                e.fixedHeight = f;
                ["Style", "CRS", "AuthorityURL"].forEach(function (a) {
                    a in d && (e[a] = (e[a] || []).concat(d[a]))
                });
                "EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" ").forEach(function (a) {
                    a in e || (e[a] = d[a])
                });
                return e
            }
        })
    }), vu = N(lu, {Title: K(V), OnlineResource: K(Rs), LogoURL: K(iu)}), uu = N(lu, {
        westBoundLongitude: K(Uo),
        eastBoundLongitude: K(Uo), southBoundLatitude: K(Uo), northBoundLatitude: K(Uo)
    }), ou = N(lu, {GetCapabilities: K(gu), GetMap: K(gu), GetFeatureInfo: K(gu)}), hu = N(lu, {
        Format: Ml(V),
        DCPType: Ml(function (a, c) {
            return P({}, xu, a, c)
        })
    }), xu = N(lu, {
        HTTP: K(function (a, c) {
            return P({}, yu, a, c)
        })
    }), yu = N(lu, {Get: K(eu), Post: K(eu)}), wu = N(lu, {
        Name: K(V),
        Title: K(V),
        Abstract: K(V),
        LegendURL: Ml(iu),
        StyleSheetURL: K(eu),
        StyleURL: K(eu)
    }), fu = N(lu, {Format: K(V), OnlineResource: K(Rs)}), ku = N(lu, {Keyword: Kl(V)});

    function zu(a) {
        a = a ? a : {};
        this.g = "http://mapserver.gis.umn.edu/mapserver";
        this.b = new bp;
        this.c = a.layers ? a.layers : null;
        Mo.call(this)
    }

    y(zu, Mo);
    zu.prototype.gc = function (a, c) {
        var d = {};
        c && Pa(d, jo(this, a, c));
        var e = [d];
        a.setAttribute("namespaceURI", this.g);
        var f = a.localName, d = [];
        if (0 !== a.childNodes.length) {
            if ("msGMLOutput" == f)for (var g = 0, h = a.childNodes.length; g < h; g++) {
                var k = a.childNodes[g];
                if (1 === k.nodeType) {
                    var m = e[0], n = k.localName.replace("_layer", "");
                    if (!this.c || ub(this.c, n)) {
                        n += "_feature";
                        m.featureType = n;
                        m.featureNS = this.g;
                        var p = {};
                        p[n] = Kl(this.b.Ef, this.b);
                        m = N([m.featureNS, null], p);
                        k.setAttribute("namespaceURI", this.g);
                        (k = P([], m, k, e, this.b)) &&
                        xb(d, k)
                    }
                }
            }
            "FeatureCollection" == f && (e = P([], this.b.b, a, [{}], this.b)) && (d = e)
        }
        return d
    };
    function Au() {
        this.g = new Ts
    }

    y(Au, Ss);
    Au.prototype.a = function (a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (1 == a.nodeType)return this.b(a);
        return null
    };
    Au.prototype.b = function (a) {
        var c = a.getAttribute("version").trim(), d = this.g.b(a);
        if (!d)return null;
        d.version = c;
        return (d = P(d, Bu, a, [])) ? d : null
    };
    function Cu(a) {
        var c = V(a).split(" ");
        if (c && 2 == c.length)return a = +c[0], c = +c[1], isNaN(a) || isNaN(c) ? void 0 : [a, c]
    }

    var Du = [null, "http://www.opengis.net/wmts/1.0"], Eu = [null, "http://www.opengis.net/ows/1.1"], Bu = N(Du, {
            Contents: K(function (a, c) {
                return P({}, Fu, a, c)
            })
        }), Fu = N(Du, {
            Layer: Ml(function (a, c) {
                return P({}, Gu, a, c)
            }), TileMatrixSet: Ml(function (a, c) {
                return P({}, Hu, a, c)
            })
        }), Gu = N(Du, {
            Style: Ml(function (a, c) {
                var d = P({}, Iu, a, c);
                if (d) {
                    var e = "true" === a.getAttribute("isDefault");
                    d.isDefault = e;
                    return d
                }
            }), Format: Ml(V), TileMatrixSetLink: Ml(function (a, c) {
                return P({}, Ju, a, c)
            }), Dimension: Ml(function (a, c) {
                return P({}, Ku, a, c)
            }),
            ResourceURL: Ml(function (a) {
                var c = a.getAttribute("format"), d = a.getAttribute("template");
                a = a.getAttribute("resourceType");
                var e = {};
                c && (e.format = c);
                d && (e.template = d);
                a && (e.resourceType = a);
                return e
            })
        }, N(Eu, {
            Title: K(V), Abstract: K(V), WGS84BoundingBox: K(function (a, c) {
                var d = P([], Lu, a, c);
                return 2 != d.length ? void 0 : Vb(d)
            }), Identifier: K(V)
        })), Iu = N(Du, {
            LegendURL: Ml(function (a) {
                var c = {};
                c.format = a.getAttribute("format");
                c.href = Rs(a);
                return c
            })
        }, N(Eu, {Title: K(V), Identifier: K(V)})), Ju = N(Du, {TileMatrixSet: K(V)}),
        Ku = N(Du, {Default: K(V), Value: Ml(V)}, N(Eu, {Identifier: K(V)})), Lu = N(Eu, {
            LowerCorner: Kl(Cu),
            UpperCorner: Kl(Cu)
        }), Hu = N(Du, {
            WellKnownScaleSet: K(V), TileMatrix: Ml(function (a, c) {
                return P({}, Mu, a, c)
            })
        }, N(Eu, {SupportedCRS: K(V), Identifier: K(V)})), Mu = N(Du, {
            TopLeftCorner: K(Cu),
            ScaleDenominator: K(Uo),
            TileWidth: K(Wo),
            TileHeight: K(Wo),
            MatrixWidth: K(Wo),
            MatrixHeight: K(Wo)
        }, N(Eu, {Identifier: K(V)}));

    function Nu(a) {
        pb.call(this);
        a = a || {};
        this.a = null;
        this.c = ad;
        this.f = void 0;
        C(this, rb("projection"), this.Jl, this);
        C(this, rb("tracking"), this.Kl, this);
        void 0 !== a.projection && this.Yg(Ic(a.projection));
        void 0 !== a.trackingOptions && this.mi(a.trackingOptions);
        this.ae(void 0 !== a.tracking ? a.tracking : !1)
    }

    y(Nu, pb);
    l = Nu.prototype;
    l.fa = function () {
        this.ae(!1);
        Nu.ia.fa.call(this)
    };
    l.Jl = function () {
        var a = this.Wg();
        a && (this.c = Lc(Ic("EPSG:4326"), a), this.a && this.set("position", this.c(this.a)))
    };
    l.Kl = function () {
        if (bh) {
            var a = this.Xg();
            a && void 0 === this.f ? this.f = qa.navigator.geolocation.watchPosition(this.ko.bind(this), this.lo.bind(this), this.Hg()) : a || void 0 === this.f || (qa.navigator.geolocation.clearWatch(this.f), this.f = void 0)
        }
    };
    l.ko = function (a) {
        a = a.coords;
        this.set("accuracy", a.accuracy);
        this.set("altitude", null === a.altitude ? void 0 : a.altitude);
        this.set("altitudeAccuracy", null === a.altitudeAccuracy ? void 0 : a.altitudeAccuracy);
        this.set("heading", null === a.heading ? void 0 : Ha(a.heading));
        this.a ? (this.a[0] = a.longitude, this.a[1] = a.latitude) : this.a = [a.longitude, a.latitude];
        var c = this.c(this.a);
        this.set("position", c);
        this.set("speed", null === a.speed ? void 0 : a.speed);
        a = Yd(Pj, this.a, a.accuracy);
        a.mc(this.c);
        this.set("accuracyGeometry", a);
        this.u()
    };
    l.lo = function (a) {
        a.type = "error";
        this.ae(!1);
        this.b(a)
    };
    l.Ij = function () {
        return this.get("accuracy")
    };
    l.Jj = function () {
        return this.get("accuracyGeometry") || null
    };
    l.Lj = function () {
        return this.get("altitude")
    };
    l.Mj = function () {
        return this.get("altitudeAccuracy")
    };
    l.Hl = function () {
        return this.get("heading")
    };
    l.Il = function () {
        return this.get("position")
    };
    l.Wg = function () {
        return this.get("projection")
    };
    l.sk = function () {
        return this.get("speed")
    };
    l.Xg = function () {
        return this.get("tracking")
    };
    l.Hg = function () {
        return this.get("trackingOptions")
    };
    l.Yg = function (a) {
        this.set("projection", a)
    };
    l.ae = function (a) {
        this.set("tracking", a)
    };
    l.mi = function (a) {
        this.set("trackingOptions", a)
    };
    function Ou(a, c, d) {
        sd.call(this);
        this.Rf(a, c ? c : 0, d)
    }

    y(Ou, sd);
    l = Ou.prototype;
    l.clone = function () {
        var a = new Ou(null), c = this.A.slice();
        ud(a, this.f, c);
        a.u();
        return a
    };
    l.rb = function (a, c, d, e) {
        var f = this.A;
        a -= f[0];
        var g = c - f[1];
        c = a * a + g * g;
        if (c < e) {
            if (0 === c)for (e = 0; e < this.a; ++e)d[e] = f[e]; else for (e = this.sf() / Math.sqrt(c), d[0] = f[0] + e * a, d[1] = f[1] + e * g, e = 2; e < this.a; ++e)d[e] = f[e];
            d.length = this.a;
            return c
        }
        return e
    };
    l.wc = function (a, c) {
        var d = this.A, e = a - d[0], d = c - d[1];
        return e * e + d * d <= Pu(this)
    };
    l.ld = function () {
        return this.A.slice(0, this.a)
    };
    l.Jd = function (a) {
        var c = this.A, d = c[this.a] - c[0];
        return ec(c[0] - d, c[1] - d, c[0] + d, c[1] + d, a)
    };
    l.sf = function () {
        return Math.sqrt(Pu(this))
    };
    function Pu(a) {
        var c = a.A[a.a] - a.A[0];
        a = a.A[a.a + 1] - a.A[1];
        return c * c + a * a
    }

    l.X = function () {
        return "Circle"
    };
    l.Ia = function (a) {
        var c = this.O();
        return wc(a, c) ? (c = this.ld(), a[0] <= c[0] && a[2] >= c[0] || a[1] <= c[1] && a[3] >= c[1] ? !0 : kc(a, this.og, this)) : !1
    };
    l.dm = function (a) {
        var c = this.a, d = this.A[c] - this.A[0], e = a.slice();
        e[c] = e[0] + d;
        for (d = 1; d < c; ++d)e[c + d] = a[d];
        ud(this, this.f, e);
        this.u()
    };
    l.Rf = function (a, c, d) {
        if (a) {
            vd(this, d, a, 0);
            this.A || (this.A = []);
            d = this.A;
            a = Dd(d, a);
            d[a++] = d[0] + c;
            var e;
            c = 1;
            for (e = this.a; c < e; ++c)d[a++] = d[c];
            d.length = a
        } else ud(this, "XY", null);
        this.u()
    };
    l.em = function (a) {
        this.A[this.a] = this.A[0] + a;
        this.u()
    };
    function Qu(a, c, d) {
        for (var e = [], f = a(0), g = a(1), h = c(f), k = c(g), m = [g, f], n = [k, h], p = [1, 0], q = {}, r = 1E5, u, v, x, z, E; 0 < --r && 0 < p.length;)x = p.pop(), f = m.pop(), h = n.pop(), g = x.toString(), g in q || (e.push(h[0], h[1]), q[g] = !0), z = p.pop(), g = m.pop(), k = n.pop(), E = (x + z) / 2, u = a(E), v = c(u), Fa(v[0], v[1], h[0], h[1], k[0], k[1]) < d ? (e.push(k[0], k[1]), g = z.toString(), q[g] = !0) : (p.push(z, E, E, x), n.push(k, v, v, h), m.push(g, u, u, f));
        return e
    }

    function Ru(a, c, d, e, f) {
        var g = Ic("EPSG:4326");
        return Qu(function (e) {
            return [a, c + (d - c) * e]
        }, $c(g, e), f)
    }

    function Su(a, c, d, e, f) {
        var g = Ic("EPSG:4326");
        return Qu(function (e) {
            return [c + (d - c) * e, a]
        }, $c(g, e), f)
    };
    function Tu(a) {
        a = a || {};
        this.c = this.o = null;
        this.g = this.i = Infinity;
        this.f = this.l = -Infinity;
        this.B = this.U = Infinity;
        this.N = this.M = -Infinity;
        this.ya = void 0 !== a.targetSize ? a.targetSize : 100;
        this.R = void 0 !== a.maxLines ? a.maxLines : 100;
        this.b = [];
        this.a = [];
        this.va = void 0 !== a.strokeStyle ? a.strokeStyle : Uu;
        this.v = this.j = void 0;
        this.s = null;
        this.setMap(void 0 !== a.map ? a.map : null)
    }

    var Uu = new gk({color: "rgba(0,0,0,0.2)"}), Vu = [90, 45, 30, 20, 10, 5, 2, 1, .5, .2, .1, .05, .01, .005, .002, .001];

    function Wu(a, c, d, e, f, g, h) {
        var k = h;
        c = Ru(c, d, e, a.c, f);
        k = void 0 !== a.b[k] ? a.b[k] : new T(null);
        k.ba("XY", c);
        wc(k.O(), g) && (a.b[h++] = k);
        return h
    }

    function Xu(a, c, d, e, f) {
        var g = f;
        c = Su(c, a.f, a.g, a.c, d);
        g = void 0 !== a.a[g] ? a.a[g] : new T(null);
        g.ba("XY", c);
        wc(g.O(), e) && (a.a[f++] = g);
        return f
    }

    l = Tu.prototype;
    l.Ll = function () {
        return this.o
    };
    l.ek = function () {
        return this.b
    };
    l.lk = function () {
        return this.a
    };
    l.Mg = function (a) {
        var c = a.vectorContext, d = a.frameState, e = d.extent;
        a = d.viewState;
        var f = a.center, g = a.projection, h = a.resolution;
        a = d.pixelRatio;
        a = h * h / (4 * a * a);
        if (!this.c || !Zc(this.c, g)) {
            var k = Ic("EPSG:4326"), m = g.O(), n = g.i, p = cd(n, k, g), q = n[2], r = n[1], u = n[0], v = p[3], x = p[2], z = p[1], p = p[0];
            this.i = n[3];
            this.g = q;
            this.l = r;
            this.f = u;
            this.U = v;
            this.B = x;
            this.M = z;
            this.N = p;
            this.j = $c(k, g);
            this.v = $c(g, k);
            this.s = this.v(tc(m));
            this.c = g
        }
        k = 0;
        g.a && (g = g.O(), k = rc(g), d = d.focus[0], d < g[0] || d > g[2]) && (k *= Math.ceil((g[0] - d) / k), e = [e[0] +
        k, e[1], e[2] + k, e[3]]);
        d = this.s[0];
        g = this.s[1];
        k = -1;
        n = Math.pow(this.ya * h, 2);
        q = [];
        r = [];
        h = 0;
        for (m = Vu.length; h < m; ++h) {
            u = Vu[h] / 2;
            q[0] = d - u;
            q[1] = g - u;
            r[0] = d + u;
            r[1] = g + u;
            this.j(q, q);
            this.j(r, r);
            u = Math.pow(r[0] - q[0], 2) + Math.pow(r[1] - q[1], 2);
            if (u <= n)break;
            k = Vu[h]
        }
        h = k;
        if (-1 == h)this.b.length = this.a.length = 0; else {
            d = this.v(f);
            f = d[0];
            d = d[1];
            g = this.R;
            k = [Math.max(e[0], this.N), Math.max(e[1], this.M), Math.min(e[2], this.B), Math.min(e[3], this.U)];
            k = cd(k, this.c, "EPSG:4326");
            n = k[3];
            r = k[1];
            f = Math.floor(f / h) * h;
            q = Da(f, this.f,
                this.g);
            m = Wu(this, q, r, n, a, e, 0);
            for (k = 0; q != this.f && k++ < g;)q = Math.max(q - h, this.f), m = Wu(this, q, r, n, a, e, m);
            q = Da(f, this.f, this.g);
            for (k = 0; q != this.g && k++ < g;)q = Math.min(q + h, this.g), m = Wu(this, q, r, n, a, e, m);
            this.b.length = m;
            d = Math.floor(d / h) * h;
            f = Da(d, this.l, this.i);
            m = Xu(this, f, a, e, 0);
            for (k = 0; f != this.l && k++ < g;)f = Math.max(f - h, this.l), m = Xu(this, f, a, e, m);
            f = Da(d, this.l, this.i);
            for (k = 0; f != this.i && k++ < g;)f = Math.min(f + h, this.i), m = Xu(this, f, a, e, m);
            this.a.length = m
        }
        c.Ob(null, this.va);
        a = 0;
        for (f = this.b.length; a < f; ++a)h =
            this.b[a], c.cd(h, null);
        a = 0;
        for (f = this.a.length; a < f; ++a)h = this.a[a], c.cd(h, null)
    };
    l.setMap = function (a) {
        this.o && (this.o.G("postcompose", this.Mg, this), this.o.render());
        a && (a.D("postcompose", this.Mg, this), a.render());
        this.o = a
    };
    function Yu(a, c, d, e, f, g, h) {
        fi.call(this, a, c, d, 0, e);
        this.j = f;
        this.g = new Image;
        null !== g && (this.g.crossOrigin = g);
        this.i = {};
        this.c = null;
        this.state = 0;
        this.o = h
    }

    y(Yu, fi);
    Yu.prototype.a = function (a) {
        if (void 0 !== a) {
            var c;
            a = w(a);
            if (a in this.i)return this.i[a];
            Sa(this.i) ? c = this.g : c = this.g.cloneNode(!1);
            return this.i[a] = c
        }
        return this.g
    };
    Yu.prototype.s = function () {
        this.state = 3;
        this.c.forEach(Xa);
        this.c = null;
        gi(this)
    };
    Yu.prototype.v = function () {
        void 0 === this.resolution && (this.resolution = sc(this.extent) / this.g.height);
        this.state = 2;
        this.c.forEach(Xa);
        this.c = null;
        gi(this)
    };
    Yu.prototype.load = function () {
        0 == this.state && (this.state = 1, gi(this), this.c = [bb(this.g, "error", this.s, this), bb(this.g, "load", this.v, this)], this.o(this, this.j))
    };
    function Zu(a, c, d, e, f) {
        Qf.call(this, a, c);
        this.s = d;
        this.g = new Image;
        null !== e && (this.g.crossOrigin = e);
        this.c = {};
        this.j = null;
        this.v = f
    }

    y(Zu, Qf);
    l = Zu.prototype;
    l.fa = function () {
        1 == this.state && $u(this);
        this.a && fb(this.a);
        this.state = 5;
        Rf(this);
        Zu.ia.fa.call(this)
    };
    l.ab = function (a) {
        if (void 0 !== a) {
            var c = w(a);
            if (c in this.c)return this.c[c];
            a = Sa(this.c) ? this.g : this.g.cloneNode(!1);
            return this.c[c] = a
        }
        return this.g
    };
    l.gb = function () {
        return this.s
    };
    l.Ml = function () {
        this.state = 3;
        $u(this);
        Rf(this)
    };
    l.Nl = function () {
        this.state = this.g.naturalWidth && this.g.naturalHeight ? 2 : 4;
        $u(this);
        Rf(this)
    };
    l.load = function () {
        0 == this.state && (this.state = 1, Rf(this), this.j = [bb(this.g, "error", this.Ml, this), bb(this.g, "load", this.Nl, this)], this.v(this, this.s))
    };
    function $u(a) {
        a.j.forEach(Xa);
        a.j = null
    };
    function av(a) {
        a = a ? a : {};
        Mi.call(this, {handleEvent: Ac});
        this.c = a.formatConstructors ? a.formatConstructors : [];
        this.j = a.projection ? Ic(a.projection) : null;
        this.a = null;
        this.target = a.target ? a.target : null
    }

    y(av, Mi);
    function bv(a) {
        a = a.dataTransfer.files;
        var c, d, e;
        c = 0;
        for (d = a.length; c < d; ++c) {
            e = a.item(c);
            var f = new FileReader;
            f.addEventListener("load", this.o.bind(this, e));
            f.readAsText(e)
        }
    }

    function cv(a) {
        a.stopPropagation();
        a.preventDefault();
        a.dataTransfer.dropEffect = "copy"
    }

    av.prototype.o = function (a, c) {
        var d = c.target.result, e = this.v, f = this.j;
        f || (f = e.aa().i);
        var e = this.c, g = [], h, k;
        h = 0;
        for (k = e.length; h < k; ++h) {
            var m = new e[h];
            var n = {featureProjection: f};
            try {
                g = m.Ca(d, n)
            } catch (p) {
                g = null
            }
            if (g && 0 < g.length)break
        }
        this.b(new dv(ev, this, a, g, f))
    };
    av.prototype.setMap = function (a) {
        this.a && (this.a.forEach(Xa), this.a = null);
        av.ia.setMap.call(this, a);
        a && (a = this.target ? this.target : a.a, this.a = [C(a, "drop", bv, this), C(a, "dragenter", cv, this), C(a, "dragover", cv, this), C(a, "drop", cv, this)])
    };
    var ev = "addfeatures";

    function dv(a, c, d, e, f) {
        gb.call(this, a, c);
        this.features = e;
        this.file = d;
        this.projection = f
    }

    y(dv, gb);
    function fv(a) {
        a = a ? a : {};
        aj.call(this, {handleDownEvent: gv, handleDragEvent: hv, handleUpEvent: iv});
        this.s = a.condition ? a.condition : Xi;
        this.a = this.c = void 0;
        this.j = 0;
        this.B = void 0 !== a.duration ? a.duration : 400
    }

    y(fv, aj);
    function hv(a) {
        if (Zi(a)) {
            var c = a.map, d = c.$a(), e = a.pixel;
            a = e[0] - d[0] / 2;
            e = d[1] / 2 - e[1];
            d = Math.atan2(e, a);
            a = Math.sqrt(a * a + e * e);
            e = c.aa();
            c.render();
            if (void 0 !== this.c) {
                var f = d - this.c;
                Ni(c, e, e.Ka() - f)
            }
            this.c = d;
            void 0 !== this.a && (d = this.a * (e.$() / a), Pi(c, e, d));
            void 0 !== this.a && (this.j = this.a / a);
            this.a = a
        }
    }

    function iv(a) {
        if (!Zi(a))return !0;
        a = a.map;
        var c = a.aa();
        he(c, -1);
        var d = this.j - 1, e = c.Ka(), e = c.constrainRotation(e, 0);
        Ni(a, c, e, void 0, void 0);
        var e = c.$(), f = this.B, e = c.constrainResolution(e, 0, d);
        Pi(a, c, e, void 0, f);
        this.j = 0;
        return !1
    }

    function gv(a) {
        return Zi(a) && this.s(a) ? (he(a.map.aa(), 1), this.a = this.c = void 0, !0) : !1
    };
    function jv(a, c) {
        gb.call(this, a);
        this.feature = c
    }

    y(jv, gb);
    function kv(a) {
        aj.call(this, {handleDownEvent: lv, handleEvent: mv, handleUpEvent: nv});
        this.wa = null;
        this.S = !1;
        this.Cc = a.source ? a.source : null;
        this.pb = a.features ? a.features : null;
        this.yj = a.snapTolerance ? a.snapTolerance : 12;
        this.Y = a.type;
        this.c = ov(this.Y);
        this.Ra = a.minPoints ? a.minPoints : this.c === pv ? 3 : 2;
        this.xa = a.maxPoints ? a.maxPoints : Infinity;
        this.Je = a.finishCondition ? a.finishCondition : Ac;
        var c = a.geometryFunction;
        if (!c)if ("Circle" === this.Y)c = function (a, c) {
            var d = c ? c : new Ou([NaN, NaN]);
            d.Rf(a[0], Math.sqrt(Sb(a[0],
                a[1])));
            return d
        }; else {
            var d, c = this.c;
            c === qv ? d = D : c === rv ? d = T : c === pv && (d = F);
            c = function (a, c) {
                var g = c;
                g ? g.ma(a) : g = new d(a);
                return g
            }
        }
        this.N = c;
        this.T = this.B = this.a = this.R = this.j = this.s = null;
        this.Bj = a.clickTolerance ? a.clickTolerance * a.clickTolerance : 36;
        this.na = new H({
            source: new Q({useSpatialIndex: !1, wrapX: a.wrapX ? a.wrapX : !1}),
            style: a.style ? a.style : sv()
        });
        this.Db = a.geometryName;
        this.xj = a.condition ? a.condition : Wi;
        this.ta = a.freehandCondition ? a.freehandCondition : Xi;
        C(this, rb("active"), this.ti, this)
    }

    y(kv, aj);
    function sv() {
        var a = ok();
        return function (c) {
            return a[c.W().X()]
        }
    }

    l = kv.prototype;
    l.setMap = function (a) {
        kv.ia.setMap.call(this, a);
        this.ti()
    };
    function mv(a) {
        this.c !== rv && this.c !== pv || !this.ta(a) || (this.S = !0);
        var c = !this.S;
        this.S && a.type === Yh ? (tv(this, a), c = !1) : a.type === Xh ? c = uv(this, a) : a.type === Rh && (c = !1);
        return bj.call(this, a) && c
    }

    function lv(a) {
        return this.xj(a) ? (this.wa = a.pixel, !0) : this.S ? (this.wa = a.pixel, this.s || vv(this, a), !0) : !1
    }

    function nv(a) {
        this.S = !1;
        var c = this.wa, d = a.pixel, e = c[0] - d[0], c = c[1] - d[1], d = !0;
        e * e + c * c <= this.Bj && (uv(this, a), this.s ? this.c === wv ? this.dd() : xv(this, a) ? this.Je(a) && this.dd() : tv(this, a) : (vv(this, a), this.c === qv && this.dd()), d = !1);
        return d
    }

    function uv(a, c) {
        if (a.s) {
            var d = c.coordinate, e = a.j.W(), f;
            a.c === qv ? f = a.a : a.c === pv ? (f = a.a[0], f = f[f.length - 1], xv(a, c) && (d = a.s.slice())) : (f = a.a, f = f[f.length - 1]);
            f[0] = d[0];
            f[1] = d[1];
            a.N(a.a, e);
            a.R && a.R.W().ma(d);
            e instanceof F && a.c !== pv ? (a.B || (a.B = new zl(new T(null))), e = e.Cg(0), d = a.B.W(), d.ba(e.f, e.ga())) : a.T && (d = a.B.W(), d.ma(a.T));
            yv(a)
        } else d = c.coordinate.slice(), a.R ? a.R.W().ma(d) : (a.R = new zl(new D(d)), yv(a));
        return !0
    }

    function xv(a, c) {
        var d = !1;
        if (a.j) {
            var e = !1, f = [a.s];
            a.c === rv ? e = a.a.length > a.Ra : a.c === pv && (e = a.a[0].length > a.Ra, f = [a.a[0][0], a.a[0][a.a[0].length - 2]]);
            if (e)for (var e = c.map, g = 0, h = f.length; g < h; g++) {
                var k = f[g], m = e.Da(k), n = c.pixel, d = n[0] - m[0], m = n[1] - m[1], n = a.S && a.ta(c) ? 1 : a.yj;
                if (d = Math.sqrt(d * d + m * m) <= n) {
                    a.s = k;
                    break
                }
            }
        }
        return d
    }

    function vv(a, c) {
        var d = c.coordinate;
        a.s = d;
        a.c === qv ? a.a = d.slice() : a.c === pv ? (a.a = [[d.slice(), d.slice()]], a.T = a.a[0]) : (a.a = [d.slice(), d.slice()], a.c === wv && (a.T = a.a));
        a.T && (a.B = new zl(new T(a.T)));
        d = a.N(a.a);
        a.j = new zl;
        a.Db && a.j.zc(a.Db);
        a.j.Ta(d);
        yv(a);
        a.b(new jv("drawstart", a.j))
    }

    function tv(a, c) {
        var d = c.coordinate, e = a.j.W(), f, g;
        if (a.c === rv)a.s = d.slice(), g = a.a, g.push(d.slice()), f = g.length > a.xa, a.N(g, e); else if (a.c === pv) {
            g = a.a[0];
            g.push(d.slice());
            if (f = g.length > a.xa)a.s = g[0];
            a.N(a.a, e)
        }
        yv(a);
        f && a.dd()
    }

    l.Ko = function () {
        var a = this.j.W(), c, d;
        this.c === rv ? (c = this.a, c.splice(-2, 1), this.N(c, a)) : this.c === pv && (c = this.a[0], c.splice(-2, 1), d = this.B.W(), d.ma(c), this.N(this.a, a));
        0 === c.length && (this.s = null);
        yv(this)
    };
    l.dd = function () {
        var a = zv(this), c = this.a, d = a.W();
        this.c === rv ? (c.pop(), this.N(c, d)) : this.c === pv && (c[0].pop(), c[0].push(c[0][0]), this.N(c, d));
        "MultiPoint" === this.Y ? a.Ta(new so([c])) : "MultiLineString" === this.Y ? a.Ta(new U([c])) : "MultiPolygon" === this.Y && a.Ta(new to([c]));
        this.b(new jv("drawend", a));
        this.pb && this.pb.push(a);
        this.Cc && this.Cc.qb(a)
    };
    function zv(a) {
        a.s = null;
        var c = a.j;
        c && (a.j = null, a.R = null, a.B = null, a.na.da().clear(!0));
        return c
    }

    l.lm = function (a) {
        var c = a.W();
        this.j = a;
        this.a = c.Z();
        a = this.a[this.a.length - 1];
        this.s = a.slice();
        this.a.push(a.slice());
        yv(this);
        this.b(new jv("drawstart", this.j))
    };
    l.Bc = Bc;
    function yv(a) {
        var c = [];
        a.j && c.push(a.j);
        a.B && c.push(a.B);
        a.R && c.push(a.R);
        a = a.na.da();
        a.clear(!0);
        a.Ec(c)
    }

    l.ti = function () {
        var a = this.v, c = this.f();
        a && c || zv(this);
        this.na.setMap(c ? a : null)
    };
    function ov(a) {
        var c;
        "Point" === a || "MultiPoint" === a ? c = qv : "LineString" === a || "MultiLineString" === a ? c = rv : "Polygon" === a || "MultiPolygon" === a ? c = pv : "Circle" === a && (c = wv);
        return c
    }

    var qv = "Point", rv = "LineString", pv = "Polygon", wv = "Circle";

    function Av(a, c, d) {
        gb.call(this, a);
        this.features = c;
        this.mapBrowserPointerEvent = d
    }

    y(Av, gb);
    function Bv(a) {
        aj.call(this, {handleDownEvent: Cv, handleDragEvent: Dv, handleEvent: Ev, handleUpEvent: Fv});
        this.Db = a.condition ? a.condition : $i;
        this.Ra = function (a) {
            return Wi(a) && Vi(a)
        };
        this.pb = a.deleteCondition ? a.deleteCondition : this.Ra;
        this.xa = this.c = null;
        this.na = [0, 0];
        this.N = this.T = !1;
        this.a = new bm;
        this.R = void 0 !== a.pixelTolerance ? a.pixelTolerance : 10;
        this.s = this.ta = !1;
        this.j = [];
        this.S = new H({
            source: new Q({useSpatialIndex: !1, wrapX: !!a.wrapX}),
            style: a.style ? a.style : Gv(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        this.wa = {
            Point: this.sm,
            LineString: this.fh,
            LinearRing: this.fh,
            Polygon: this.tm,
            MultiPoint: this.qm,
            MultiLineString: this.pm,
            MultiPolygon: this.rm,
            GeometryCollection: this.om
        };
        this.B = a.features;
        this.B.forEach(this.tf, this);
        C(this.B, "add", this.mm, this);
        C(this.B, "remove", this.nm, this);
        this.Y = null
    }

    y(Bv, aj);
    l = Bv.prototype;
    l.tf = function (a) {
        var c = a.W();
        c.X() in this.wa && this.wa[c.X()].call(this, a, c);
        (c = this.v) && Hv(this, this.na, c);
        C(a, "change", this.eh, this)
    };
    function Iv(a, c) {
        a.N || (a.N = !0, a.b(new Av("modifystart", a.B, c)))
    }

    function Jv(a, c) {
        Kv(a, c);
        a.c && 0 === a.B.Zb() && (a.S.da().kb(a.c), a.c = null);
        cb(c, "change", a.eh, a)
    }

    function Kv(a, c) {
        var d = a.a, e = [];
        d.forEach(function (a) {
            c === a.feature && e.push(a)
        });
        for (var f = e.length - 1; 0 <= f; --f)d.remove(e[f])
    }

    l.setMap = function (a) {
        this.S.setMap(a);
        Bv.ia.setMap.call(this, a)
    };
    l.mm = function (a) {
        this.tf(a.element)
    };
    l.eh = function (a) {
        this.s || (a = a.target, Jv(this, a), this.tf(a))
    };
    l.nm = function (a) {
        Jv(this, a.element)
    };
    l.sm = function (a, c) {
        var d = c.Z(), d = {feature: a, geometry: c, la: [d, d]};
        this.a.za(c.O(), d)
    };
    l.qm = function (a, c) {
        var d = c.Z(), e, f, g;
        f = 0;
        for (g = d.length; f < g; ++f)e = d[f], e = {
            feature: a,
            geometry: c,
            depth: [f],
            index: f,
            la: [e, e]
        }, this.a.za(c.O(), e)
    };
    l.fh = function (a, c) {
        var d = c.Z(), e, f, g, h;
        e = 0;
        for (f = d.length - 1; e < f; ++e)g = d.slice(e, e + 2), h = {
            feature: a,
            geometry: c,
            index: e,
            la: g
        }, this.a.za(Vb(g), h)
    };
    l.pm = function (a, c) {
        var d = c.Z(), e, f, g, h, k, m, n;
        h = 0;
        for (k = d.length; h < k; ++h)for (e = d[h], f = 0, g = e.length - 1; f < g; ++f)m = e.slice(f, f + 2), n = {
            feature: a,
            geometry: c,
            depth: [h],
            index: f,
            la: m
        }, this.a.za(Vb(m), n)
    };
    l.tm = function (a, c) {
        var d = c.Z(), e, f, g, h, k, m, n;
        h = 0;
        for (k = d.length; h < k; ++h)for (e = d[h], f = 0, g = e.length - 1; f < g; ++f)m = e.slice(f, f + 2), n = {
            feature: a,
            geometry: c,
            depth: [h],
            index: f,
            la: m
        }, this.a.za(Vb(m), n)
    };
    l.rm = function (a, c) {
        var d = c.Z(), e, f, g, h, k, m, n, p, q, r;
        m = 0;
        for (n = d.length; m < n; ++m)for (p = d[m], h = 0, k = p.length; h < k; ++h)for (e = p[h], f = 0, g = e.length - 1; f < g; ++f)q = e.slice(f, f + 2), r = {
            feature: a,
            geometry: c,
            depth: [h, m],
            index: f,
            la: q
        }, this.a.za(Vb(q), r)
    };
    l.om = function (a, c) {
        var d, e = c.c;
        for (d = 0; d < e.length; ++d)this.wa[e[d].X()].call(this, a, e[d])
    };
    function Lv(a, c) {
        var d = a.c;
        d ? d.W().ma(c) : (d = new zl(new D(c)), a.c = d, a.S.da().qb(d))
    }

    function Mv(a, c) {
        return a.index - c.index
    }

    function Cv(a) {
        if (!this.Db(a))return !1;
        Hv(this, a.pixel, a.map);
        this.j.length = 0;
        this.N = !1;
        var c = this.c;
        if (c) {
            var d = [], c = c.W().Z(), e = Vb([c]), e = em(this.a, e), f = {};
            e.sort(Mv);
            for (var g = 0, h = e.length; g < h; ++g) {
                var k = e[g], m = k.la, n = w(k.feature), p = k.depth;
                p && (n += "-" + p.join("-"));
                f[n] || (f[n] = Array(2));
                if (Qb(m[0], c) && !f[n][0])this.j.push([k, 0]), f[n][0] = k; else if (Qb(m[1], c) && !f[n][1]) {
                    if ("LineString" !== k.geometry.X() && "MultiLineString" !== k.geometry.X() || !f[n][0] || 0 !== f[n][0].index)this.j.push([k, 1]), f[n][1] = k
                } else w(m) in
                this.xa && !f[n][0] && !f[n][1] && d.push([k, c])
            }
            d.length && Iv(this, a);
            for (a = d.length - 1; 0 <= a; --a)this.jl.apply(this, d[a])
        }
        return !!this.c
    }

    function Dv(a) {
        this.T = !1;
        Iv(this, a);
        a = a.coordinate;
        for (var c = 0, d = this.j.length; c < d; ++c) {
            for (var e = this.j[c], f = e[0], g = f.depth, h = f.geometry, k = h.Z(), m = f.la, e = e[1]; a.length < h.ua();)a.push(0);
            switch (h.X()) {
                case "Point":
                    k = a;
                    m[0] = m[1] = a;
                    break;
                case "MultiPoint":
                    k[f.index] = a;
                    m[0] = m[1] = a;
                    break;
                case "LineString":
                    k[f.index + e] = a;
                    m[e] = a;
                    break;
                case "MultiLineString":
                    k[g[0]][f.index + e] = a;
                    m[e] = a;
                    break;
                case "Polygon":
                    k[g[0]][f.index + e] = a;
                    m[e] = a;
                    break;
                case "MultiPolygon":
                    k[g[1]][g[0]][f.index + e] = a, m[e] = a
            }
            f = h;
            this.s = !0;
            f.ma(k);
            this.s = !1
        }
        Lv(this, a)
    }

    function Fv(a) {
        for (var c, d = this.j.length - 1; 0 <= d; --d)c = this.j[d][0], cm(this.a, Vb(c.la), c);
        this.N && (this.b(new Av("modifyend", this.B, a)), this.N = !1);
        return !1
    }

    function Ev(a) {
        if (!(a instanceof Nh))return !0;
        this.Y = a;
        var c;
        ce(a.map.aa())[1] || a.type != Xh || this.M || (this.na = a.pixel, Hv(this, a.pixel, a.map));
        this.c && this.pb(a) && (a.type == Sh && this.T ? c = !0 : (this.c.W(), c = this.Wh()));
        a.type == Sh && (this.T = !1);
        return bj.call(this, a) && !c
    }

    function Hv(a, c, d) {
        function e(a, c) {
            return Tb(f, a.la) - Tb(f, c.la)
        }

        var f = d.Ma(c), g = d.Ma([c[0] - a.R, c[1] + a.R]), h = d.Ma([c[0] + a.R, c[1] - a.R]), g = Vb([g, h]), g = em(a.a, g);
        if (0 < g.length) {
            g.sort(e);
            var h = g[0].la, k = Nb(f, h), m = d.Da(k);
            if (Math.sqrt(Sb(c, m)) <= a.R) {
                c = d.Da(h[0]);
                d = d.Da(h[1]);
                c = Sb(m, c);
                d = Sb(m, d);
                a.ta = Math.sqrt(Math.min(c, d)) <= a.R;
                a.ta && (k = c > d ? h[1] : h[0]);
                Lv(a, k);
                d = {};
                d[w(h)] = !0;
                c = 1;
                for (m = g.length; c < m; ++c)if (k = g[c].la, Qb(h[0], k[0]) && Qb(h[1], k[1]) || Qb(h[0], k[1]) && Qb(h[1], k[0]))d[w(k)] = !0; else break;
                a.xa = d;
                return
            }
        }
        a.c && (a.S.da().kb(a.c), a.c = null)
    }

    l.jl = function (a, c) {
        for (var d = a.la, e = a.feature, f = a.geometry, g = a.depth, h = a.index, k; c.length < f.ua();)c.push(0);
        switch (f.X()) {
            case "MultiLineString":
                k = f.Z();
                k[g[0]].splice(h + 1, 0, c);
                break;
            case "Polygon":
                k = f.Z();
                k[g[0]].splice(h + 1, 0, c);
                break;
            case "MultiPolygon":
                k = f.Z();
                k[g[1]][g[0]].splice(h + 1, 0, c);
                break;
            case "LineString":
                k = f.Z();
                k.splice(h + 1, 0, c);
                break;
            default:
                return
        }
        this.s = !0;
        f.ma(k);
        this.s = !1;
        k = this.a;
        k.remove(a);
        Nv(this, f, h, g, 1);
        var m = {la: [d[0], c], feature: e, geometry: f, depth: g, index: h};
        k.za(Vb(m.la),
            m);
        this.j.push([m, 1]);
        d = {la: [c, d[1]], feature: e, geometry: f, depth: g, index: h + 1};
        k.za(Vb(d.la), d);
        this.j.push([d, 0]);
        this.T = !0
    };
    l.Wh = function () {
        var a = !1;
        if (this.Y && this.Y.type != Yh) {
            var c = this.Y;
            Iv(this, c);
            var d = this.j, a = {}, e, f, g, h, k, m, n, p, q;
            for (h = d.length - 1; 0 <= h; --h)g = d[h], n = g[0], p = w(n.feature), n.depth && (p += "-" + n.depth.join("-")), p in a || (a[p] = {}), 0 === g[1] ? (a[p].right = n, a[p].index = n.index) : 1 == g[1] && (a[p].left = n, a[p].index = n.index + 1);
            for (p in a) {
                m = a[p].right;
                h = a[p].left;
                g = a[p].index;
                k = g - 1;
                n = void 0 !== h ? h : m;
                0 > k && (k = 0);
                d = n.geometry;
                e = f = d.Z();
                q = !1;
                switch (d.X()) {
                    case "MultiLineString":
                        2 < f[n.depth[0]].length && (f[n.depth[0]].splice(g,
                            1), q = !0);
                        break;
                    case "LineString":
                        2 < f.length && (f.splice(g, 1), q = !0);
                        break;
                    case "MultiPolygon":
                        e = e[n.depth[1]];
                    case "Polygon":
                        e = e[n.depth[0]], 4 < e.length && (g == e.length - 1 && (g = 0), e.splice(g, 1), q = !0, 0 === g && (e.pop(), e.push(e[0]), k = e.length - 1))
                }
                q && (e = d, this.s = !0, e.ma(f), this.s = !1, f = [], void 0 !== h && (this.a.remove(h), f.push(h.la[0])), void 0 !== m && (this.a.remove(m), f.push(m.la[1])), void 0 !== h && void 0 !== m && (h = {
                    depth: n.depth,
                    feature: n.feature,
                    geometry: n.geometry,
                    index: k,
                    la: f
                }, this.a.za(Vb(h.la), h)), Nv(this, d, g, n.depth,
                    -1), this.c && (this.S.da().kb(this.c), this.c = null))
            }
            a = !0;
            this.b(new Av("modifyend", this.B, c));
            this.N = !1
        }
        return a
    };
    function Nv(a, c, d, e, f) {
        gm(a.a, c.O(), function (a) {
            a.geometry === c && (void 0 === e || void 0 === a.depth || Ab(a.depth, e)) && a.index > d && (a.index += f)
        })
    }

    function Gv() {
        var a = ok();
        return function () {
            return a.Point
        }
    };
    function Ov(a, c, d, e) {
        gb.call(this, a);
        this.selected = c;
        this.deselected = d;
        this.mapBrowserEvent = e
    }

    y(Ov, gb);
    function Pv(a) {
        Mi.call(this, {handleEvent: Qv});
        var c = a ? a : {};
        this.M = c.condition ? c.condition : Vi;
        this.B = c.addCondition ? c.addCondition : Bc;
        this.N = c.removeCondition ? c.removeCondition : Bc;
        this.R = c.toggleCondition ? c.toggleCondition : Xi;
        this.j = c.multi ? c.multi : !1;
        this.o = c.filter ? c.filter : Ac;
        this.c = new H({
            source: new Q({useSpatialIndex: !1, features: c.features, wrapX: c.wrapX}),
            style: c.style ? c.style : Rv(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        if (c.layers)if (ga(c.layers))a = function (a) {
            return c.layers(a)
        };
        else {
            var d = c.layers;
            a = function (a) {
                return ub(d, a)
            }
        } else a = Ac;
        this.s = a;
        this.a = {};
        a = this.c.da().c;
        C(a, "add", this.um, this);
        C(a, "remove", this.xm, this)
    }

    y(Pv, Mi);
    l = Pv.prototype;
    l.vm = function () {
        return this.c.da().c
    };
    l.wm = function (a) {
        a = w(a);
        return this.a[a]
    };
    function Qv(a) {
        if (!this.M(a))return !0;
        var c = this.B(a), d = this.N(a), e = this.R(a), f = !c && !d && !e, g = a.map, h = this.c.da().c, k = [], m = [], n = !1;
        if (f)Qa(this.a), g.ed(a.pixel, function (a, c) {
            if (this.o(a, c)) {
                m.push(a);
                var d = w(a);
                this.a[d] = c;
                return !this.j
            }
        }, this, this.s), 0 < m.length && 1 == h.Zb() && h.item(0) == m[0] || (n = !0, 0 !== h.Zb() && (k = Array.prototype.concat(h.a), h.clear()), h.lf(m)); else {
            g.ed(a.pixel, function (a, f) {
                if (this.o(a, f)) {
                    if (!c && !e || ub(h.a, a))(d || e) && ub(h.a, a) && (k.push(a), g = w(a), delete this.a[g]); else {
                        m.push(a);
                        var g =
                            w(a);
                        this.a[g] = f
                    }
                    return !this.j
                }
            }, this, this.s);
            for (f = k.length - 1; 0 <= f; --f)h.remove(k[f]);
            h.lf(m);
            if (0 < m.length || 0 < k.length)n = !0
        }
        n && this.b(new Ov("select", m, k, a));
        return Ui(a)
    }

    l.setMap = function (a) {
        var c = this.v, d = this.c.da().c;
        c && d.forEach(c.ri, c);
        Pv.ia.setMap.call(this, a);
        this.c.setMap(a);
        a && d.forEach(a.ni, a)
    };
    function Rv() {
        var a = ok();
        xb(a.Polygon, a.LineString);
        xb(a.GeometryCollection, a.LineString);
        return function (c) {
            return a[c.W().X()]
        }
    }

    l.um = function (a) {
        a = a.element;
        var c = this.v;
        c && c.ni(a)
    };
    l.xm = function (a) {
        a = a.element;
        var c = this.v;
        c && c.ri(a)
    };
    function Sv(a) {
        aj.call(this, {handleEvent: Tv, handleDownEvent: Ac, handleUpEvent: Uv});
        a = a ? a : {};
        this.s = a.source ? a.source : null;
        this.na = void 0 !== a.vertex ? a.vertex : !0;
        this.T = void 0 !== a.edge ? a.edge : !0;
        this.j = a.features ? a.features : null;
        this.ta = [];
        this.N = {};
        this.R = {};
        this.Y = {};
        this.B = {};
        this.S = null;
        this.c = void 0 !== a.pixelTolerance ? a.pixelTolerance : 10;
        this.xa = Vv.bind(this);
        this.a = new bm;
        this.wa = {
            Point: this.Dm,
            LineString: this.ih,
            LinearRing: this.ih,
            Polygon: this.Em,
            MultiPoint: this.Bm,
            MultiLineString: this.Am,
            MultiPolygon: this.Cm,
            GeometryCollection: this.zm
        }
    }

    y(Sv, aj);
    l = Sv.prototype;
    l.qb = function (a, c) {
        var d = void 0 !== c ? c : !0, e = w(a), f = a.W();
        if (f) {
            var g = this.wa[f.X()];
            g && (this.Y[e] = f.O(Wb()), g.call(this, a, f), d && (this.R[e] = C(f, "change", this.Gk.bind(this, a), this)))
        }
        d && (this.N[e] = C(a, rb(a.a), this.ym, this))
    };
    l.Fj = function (a) {
        this.qb(a)
    };
    l.Gj = function (a) {
        this.kb(a)
    };
    l.gh = function (a) {
        var c;
        a instanceof lm ? c = a.feature : a instanceof ve && (c = a.element);
        this.qb(c)
    };
    l.hh = function (a) {
        var c;
        a instanceof lm ? c = a.feature : a instanceof ve && (c = a.element);
        this.kb(c)
    };
    l.ym = function (a) {
        a = a.target;
        this.kb(a, !0);
        this.qb(a, !0)
    };
    l.Gk = function (a) {
        if (this.M) {
            var c = w(a);
            c in this.B || (this.B[c] = a)
        } else this.si(a)
    };
    l.kb = function (a, c) {
        var d = void 0 !== c ? c : !0, e = w(a), f = this.Y[e];
        if (f) {
            var g = this.a, h = [];
            gm(g, f, function (c) {
                a === c.feature && h.push(c)
            });
            for (f = h.length - 1; 0 <= f; --f)g.remove(h[f]);
            d && (nb(this.R[e]), delete this.R[e])
        }
        d && (nb(this.N[e]), delete this.N[e])
    };
    l.setMap = function (a) {
        var c = this.v, d = this.ta, e;
        this.j ? e = this.j : this.s && (e = this.s.je());
        c && (d.forEach(nb), d.length = 0, e.forEach(this.Gj, this));
        Sv.ia.setMap.call(this, a);
        a && (this.j ? d.push(C(this.j, "add", this.gh, this), C(this.j, "remove", this.hh, this)) : this.s && d.push(C(this.s, "addfeature", this.gh, this), C(this.s, "removefeature", this.hh, this)), e.forEach(this.Fj, this))
    };
    l.Bc = Bc;
    l.si = function (a) {
        this.kb(a, !1);
        this.qb(a, !1)
    };
    l.zm = function (a, c) {
        var d, e = c.c;
        for (d = 0; d < e.length; ++d)this.wa[e[d].X()].call(this, a, e[d])
    };
    l.ih = function (a, c) {
        var d = c.Z(), e, f, g, h;
        e = 0;
        for (f = d.length - 1; e < f; ++e)g = d.slice(e, e + 2), h = {feature: a, la: g}, this.a.za(Vb(g), h)
    };
    l.Am = function (a, c) {
        var d = c.Z(), e, f, g, h, k, m, n;
        h = 0;
        for (k = d.length; h < k; ++h)for (e = d[h], f = 0, g = e.length - 1; f < g; ++f)m = e.slice(f, f + 2), n = {
            feature: a,
            la: m
        }, this.a.za(Vb(m), n)
    };
    l.Bm = function (a, c) {
        var d = c.Z(), e, f, g;
        f = 0;
        for (g = d.length; f < g; ++f)e = d[f], e = {feature: a, la: [e, e]}, this.a.za(c.O(), e)
    };
    l.Cm = function (a, c) {
        var d = c.Z(), e, f, g, h, k, m, n, p, q, r;
        m = 0;
        for (n = d.length; m < n; ++m)for (p = d[m], h = 0, k = p.length; h < k; ++h)for (e = p[h], f = 0, g = e.length - 1; f < g; ++f)q = e.slice(f, f + 2), r = {
            feature: a,
            la: q
        }, this.a.za(Vb(q), r)
    };
    l.Dm = function (a, c) {
        var d = c.Z(), d = {feature: a, la: [d, d]};
        this.a.za(c.O(), d)
    };
    l.Em = function (a, c) {
        var d = c.Z(), e, f, g, h, k, m, n;
        h = 0;
        for (k = d.length; h < k; ++h)for (e = d[h], f = 0, g = e.length - 1; f < g; ++f)m = e.slice(f, f + 2), n = {
            feature: a,
            la: m
        }, this.a.za(Vb(m), n)
    };
    function Tv(a) {
        var c, d;
        d = a.pixel;
        var e = a.coordinate;
        c = a.map;
        var f = c.Ma([d[0] - this.c, d[1] + this.c]), g = c.Ma([d[0] + this.c, d[1] - this.c]), f = Vb([f, g]), h = em(this.a, f), k = !1, f = !1, m = null, g = null;
        if (0 < h.length) {
            this.S = e;
            h.sort(this.xa);
            h = h[0].la;
            if (this.na && !this.T) {
                if (e = c.Da(h[0]), k = c.Da(h[1]), e = Sb(d, e), d = Sb(d, k), k = Math.sqrt(Math.min(e, d)), k = k <= this.c)f = !0, m = e > d ? h[1] : h[0], g = c.Da(m)
            } else this.T && (m = Nb(e, h), g = c.Da(m), Math.sqrt(Sb(d, g)) <= this.c && (f = !0, this.na && (e = c.Da(h[0]), k = c.Da(h[1]), e = Sb(g, e), d = Sb(g, k), k = Math.sqrt(Math.min(e,
                d)), k = k <= this.c))) && (m = e > d ? h[1] : h[0], g = c.Da(m));
            f && (g = [Math.round(g[0]), Math.round(g[1])])
        }
        c = m;
        d = g;
        f && (a.coordinate = c.slice(0, 2), a.pixel = d);
        return bj.call(this, a)
    }

    function Uv() {
        var a = Ra(this.B);
        a.length && (a.forEach(this.si, this), this.B = {});
        return !1
    }

    function Vv(a, c) {
        return Tb(this.S, a.la) - Tb(this.S, c.la)
    };
    function Wv(a, c, d) {
        gb.call(this, a);
        this.features = c;
        this.coordinate = d
    }

    y(Wv, gb);
    function Xv(a) {
        aj.call(this, {handleDownEvent: Yv, handleDragEvent: Zv, handleMoveEvent: $v, handleUpEvent: aw});
        this.s = void 0;
        this.a = null;
        this.c = void 0 !== a.features ? a.features : null;
        var c;
        if (a.layers)if (ga(a.layers))c = function (c) {
            return a.layers(c)
        }; else {
            var d = a.layers;
            c = function (a) {
                return ub(d, a)
            }
        } else c = Ac;
        this.B = c;
        this.j = null
    }

    y(Xv, aj);
    function Yv(a) {
        this.j = bw(this, a.pixel, a.map);
        return !this.a && this.j ? (this.a = a.coordinate, $v.call(this, a), this.b(new Wv("translatestart", this.c, a.coordinate)), !0) : !1
    }

    function aw(a) {
        return this.a ? (this.a = null, $v.call(this, a), this.b(new Wv("translateend", this.c, a.coordinate)), !0) : !1
    }

    function Zv(a) {
        if (this.a) {
            a = a.coordinate;
            var c = a[0] - this.a[0], d = a[1] - this.a[1];
            if (this.c)this.c.forEach(function (a) {
                var e = a.W();
                e.Nc(c, d);
                a.Ta(e)
            }); else if (this.j) {
                var e = this.j.W();
                e.Nc(c, d);
                this.j.Ta(e)
            }
            this.a = a;
            this.b(new Wv("translating", this.c, a))
        }
    }

    function $v(a) {
        var c = a.map.tc();
        if (a = a.map.ed(a.pixel, function (a) {
                return a
            })) {
            var d = !1;
            this.c && ub(this.c.a, a) && (d = !0);
            this.s = c.style.cursor;
            c.style.cursor = this.a ? "-webkit-grabbing" : d ? "-webkit-grab" : "pointer";
            c.style.cursor = this.a ? d ? "grab" : "pointer" : "grabbing"
        } else c.style.cursor = void 0 !== this.s ? this.s : "", this.s = void 0
    }

    function bw(a, c, d) {
        var e = null;
        c = d.ed(c, function (a) {
            return a
        }, a, a.B);
        a.c && ub(a.c.a, c) && (e = c);
        return e
    };
    function W(a) {
        a = a ? a : {};
        var c = Pa({}, a);
        delete c.gradient;
        delete c.radius;
        delete c.blur;
        delete c.shadow;
        delete c.weight;
        H.call(this, c);
        this.f = null;
        this.ea = void 0 !== a.shadow ? a.shadow : 250;
        this.Y = void 0;
        this.c = null;
        C(this, rb("gradient"), this.Hk, this);
        this.di(a.gradient ? a.gradient : cw);
        this.Zh(void 0 !== a.blur ? a.blur : 15);
        this.lh(void 0 !== a.radius ? a.radius : 8);
        C(this, rb("blur"), this.gf, this);
        C(this, rb("radius"), this.gf, this);
        this.gf();
        var d = a.weight ? a.weight : "weight", e;
        "string" === typeof d ? e = function (a) {
            return a.get(d)
        } :
            e = d;
        this.l(function (a) {
            a = e(a);
            a = void 0 !== a ? Da(a, 0, 1) : 1;
            var c = 255 * a | 0, d = this.c[c];
            d || (d = [new jk({image: new ui({opacity: a, src: this.Y})})], this.c[c] = d);
            return d
        }.bind(this));
        this.set("renderOrder", null);
        C(this, "render", this.$k, this)
    }

    y(W, H);
    var cw = ["#00f", "#0ff", "#0f0", "#ff0", "#f00"];
    l = W.prototype;
    l.ug = function () {
        return this.get("blur")
    };
    l.Bg = function () {
        return this.get("gradient")
    };
    l.kh = function () {
        return this.get("radius")
    };
    l.Hk = function () {
        for (var a = this.Bg(), c = Mg(1, 256), d = c.createLinearGradient(0, 0, 1, 256), e = 1 / (a.length - 1), f = 0, g = a.length; f < g; ++f)d.addColorStop(f * e, a[f]);
        c.fillStyle = d;
        c.fillRect(0, 0, 1, 256);
        this.f = c.getImageData(0, 0, 1, 256).data
    };
    l.gf = function () {
        var a = this.kh(), c = this.ug(), d = a + c + 1, e = 2 * d, e = Mg(e, e);
        e.shadowOffsetX = e.shadowOffsetY = this.ea;
        e.shadowBlur = c;
        e.shadowColor = "#000";
        e.beginPath();
        c = d - this.ea;
        e.arc(c, c, a, 0, 2 * Math.PI, !0);
        e.fill();
        this.Y = e.canvas.toDataURL();
        this.c = Array(256);
        this.u()
    };
    l.$k = function (a) {
        a = a.context;
        var c = a.canvas, c = a.getImageData(0, 0, c.width, c.height), d = c.data, e, f, g;
        e = 0;
        for (f = d.length; e < f; e += 4)if (g = 4 * d[e + 3])d[e] = this.f[g], d[e + 1] = this.f[g + 1], d[e + 2] = this.f[g + 2];
        a.putImageData(c, 0, 0)
    };
    l.Zh = function (a) {
        this.set("blur", a)
    };
    l.di = function (a) {
        this.set("gradient", a)
    };
    l.lh = function (a) {
        this.set("radius", a)
    };
    function dw(a, c, d, e) {
        function f() {
            delete qa[h];
            g.parentNode.removeChild(g)
        }

        var g = qa.document.createElement("script"), h = "olc_" + w(c);
        g.async = !0;
        g.src = a + (-1 == a.indexOf("?") ? "?" : "&") + (e || "callback") + "=" + h;
        var k = qa.setTimeout(function () {
            f();
            d && d()
        }, 1E4);
        qa[h] = function (a) {
            qa.clearTimeout(k);
            f();
            c(a)
        };
        qa.document.getElementsByTagName("head")[0].appendChild(g)
    };
    function ew(a, c, d, e, f, g, h, k, m, n, p) {
        Qf.call(this, f, 0);
        this.R = void 0 !== p ? p : !1;
        this.N = h;
        this.M = k;
        this.l = null;
        this.c = {};
        this.j = c;
        this.v = e;
        this.U = g ? g : f;
        this.g = [];
        this.Rc = null;
        this.s = 0;
        g = e.Ba(this.U);
        k = this.v.O();
        f = this.j.O();
        g = k ? vc(g, k) : g;
        if (0 === pc(g))this.state = 4; else if ((k = a.O()) && (f ? f = vc(f, k) : f = k), e = e.$(this.U[0]), e = jl(a, d, tc(g), e), !isFinite(e) || 0 >= e)this.state = 4; else if (this.B = new ml(a, d, g, f, e * (void 0 !== n ? n : .5)), 0 === this.B.f.length)this.state = 4; else if (this.s = gg(c, e), d = pl(this.B), f && (a.a ? (d[1] = Da(d[1],
                f[1], f[3]), d[3] = Da(d[3], f[1], f[3])) : d = vc(d, f)), pc(d))if (a = bg(c, d, this.s), 100 > (a.a - a.b + 1) * (a.f - a.g + 1)) {
            for (c = a.b; c <= a.a; c++)for (d = a.g; d <= a.f; d++)(n = m(this.s, c, d, h)) && this.g.push(n);
            0 === this.g.length && (this.state = 4)
        } else this.state = 3; else this.state = 4
    }

    y(ew, Qf);
    ew.prototype.fa = function () {
        1 == this.state && (this.Rc.forEach(Xa), this.Rc = null);
        ew.ia.fa.call(this)
    };
    ew.prototype.ab = function (a) {
        if (void 0 !== a) {
            var c = w(a);
            if (c in this.c)return this.c[c];
            a = Sa(this.c) ? this.l : this.l.cloneNode(!1);
            return this.c[c] = a
        }
        return this.l
    };
    ew.prototype.ud = function () {
        var a = [];
        this.g.forEach(function (c) {
            c && 2 == c.V() && a.push({extent: this.j.Ba(c.ja), image: c.ab()})
        }, this);
        this.g.length = 0;
        if (0 === a.length)this.state = 3; else {
            var c = this.U[0], d = this.v.Ha(c), e = fa(d) ? d : d[0], d = fa(d) ? d : d[1], c = this.v.$(c), f = this.j.$(this.s), g = this.v.Ba(this.U);
            this.l = ll(e, d, this.N, f, this.j.O(), c, g, this.B, a, this.M, this.R);
            this.state = 2
        }
        Rf(this)
    };
    ew.prototype.load = function () {
        if (0 == this.state) {
            this.state = 1;
            Rf(this);
            var a = 0;
            this.Rc = [];
            this.g.forEach(function (c) {
                var d = c.V();
                if (0 == d || 1 == d) {
                    a++;
                    var e;
                    e = C(c, "change", function () {
                        var d = c.V();
                        if (2 == d || 3 == d || 4 == d)Xa(e), a--, 0 === a && (this.Rc.forEach(Xa), this.Rc = null, this.ud())
                    }, this);
                    this.Rc.push(e)
                }
            }, this);
            this.g.forEach(function (a) {
                0 == a.V() && a.load()
            });
            0 === a && qa.setTimeout(this.ud.bind(this), 0)
        }
    };
    function X(a) {
        zm.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            extent: a.extent,
            logo: a.logo,
            opaque: a.opaque,
            projection: a.projection,
            state: a.state,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction ? a.tileLoadFunction : fw,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: a.tileUrlFunction,
            url: a.url,
            urls: a.urls,
            wrapX: a.wrapX
        });
        this.crossOrigin = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.tileClass = void 0 !== a.tileClass ? a.tileClass : Zu;
        this.i = {};
        this.s = {};
        this.na = a.reprojectionErrorThreshold;
        this.M = !1
    }

    y(X, zm);
    l = X.prototype;
    l.vh = function () {
        if (Pf(this.a))return !0;
        for (var a in this.i)if (Pf(this.i[a]))return !0;
        return !1
    };
    l.Gc = function (a, c) {
        var d = this.jd(a);
        this.a.Gc(this.a == d ? c : {});
        for (var e in this.i) {
            var f = this.i[e];
            f.Gc(f == d ? c : {})
        }
    };
    l.Od = function (a) {
        return this.f && a && !Zc(this.f, a) ? 0 : this.cf()
    };
    l.cf = function () {
        return 0
    };
    l.ef = function (a) {
        return this.f && a && !Zc(this.f, a) ? !1 : X.ia.ef.call(this, a)
    };
    l.fb = function (a) {
        var c = this.f;
        return !this.tileGrid || c && !Zc(c, a) ? (c = w(a).toString(), c in this.s || (this.s[c] = hg(a)), this.s[c]) : this.tileGrid
    };
    l.jd = function (a) {
        var c = this.f;
        if (!c || Zc(c, a))return this.a;
        a = w(a).toString();
        a in this.i || (this.i[a] = new Of);
        return this.i[a]
    };
    function gw(a, c, d, e, f, g, h) {
        c = [c, d, e];
        f = (d = og(a, c, g)) ? a.tileUrlFunction(d, f, g) : void 0;
        f = new a.tileClass(c, void 0 !== f ? 0 : 4, void 0 !== f ? f : "", a.crossOrigin, a.tileLoadFunction);
        f.key = h;
        C(f, "change", a.wh, a);
        return f
    }

    l.Wb = function (a, c, d, e, f) {
        if (this.f && f && !Zc(this.f, f)) {
            var g = this.jd(f);
            c = [a, c, d];
            a = this.Ab.apply(this, c);
            if (Lf(g, a))return g.get(a);
            var h = this.f;
            d = this.fb(h);
            var k = this.fb(f), m = og(this, c, f);
            e = new ew(h, d, f, k, c, m, this.Xb(e), this.cf(), function (a, c, d, e) {
                return hw(this, a, c, d, e, h)
            }.bind(this), this.na, this.M);
            g.set(a, e);
            return e
        }
        return hw(this, a, c, d, e, f)
    };
    function hw(a, c, d, e, f, g) {
        var h = null, k = a.Ab(c, d, e), m = a.Yb;
        if (Lf(a.a, k)) {
            if (h = a.a.get(k), h.key != m) {
                var n = h;
                h.a && h.a.key == m ? (h = h.a, 2 == n.V() && (h.a = n)) : (h = gw(a, c, d, e, f, g, m), 2 == n.V() ? h.a = n : n.a && 2 == n.a.V() && (h.a = n.a, n.a = null));
                h.a && (h.a.a = null);
                a.a.replace(k, h)
            }
        } else h = gw(a, c, d, e, f, g, m), a.a.set(k, h);
        return h
    }

    l.lb = function (a) {
        if (this.M != a) {
            this.M = a;
            for (var c in this.i)this.i[c].clear();
            this.u()
        }
    };
    l.mb = function (a, c) {
        var d = Ic(a);
        d && (d = w(d).toString(), d in this.s || (this.s[d] = c))
    };
    function fw(a, c) {
        a.ab().src = c
    };
    function iw(a) {
        X.call(this, {
            cacheSize: a.cacheSize,
            crossOrigin: "anonymous",
            opaque: !0,
            projection: Ic("EPSG:3857"),
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            state: "loading",
            tileLoadFunction: a.tileLoadFunction,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.j = void 0 !== a.culture ? a.culture : "en-us";
        this.c = void 0 !== a.maxZoom ? a.maxZoom : -1;
        dw("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/" + a.imagerySet + "?uriScheme=https&include=ImageryProviders&key=" + a.key, this.v.bind(this), void 0, "jsonp")
    }

    y(iw, X);
    var jw = new ue({html: '<a class="ol-attribution-bing-tos" href="http://www.microsoft.com/maps/product/terms.html">Terms of Use</a>'});
    iw.prototype.v = function (a) {
        if (200 != a.statusCode || "OK" != a.statusDescription || "ValidCredentials" != a.authenticationResultCode || 1 != a.resourceSets.length || 1 != a.resourceSets[0].resources.length)Xf(this, "error"); else {
            var c = a.brandLogoUri;
            -1 == c.indexOf("https") && (c = c.replace("http", "https"));
            var d = a.resourceSets[0].resources[0], e = -1 == this.c ? d.zoomMax : this.c;
            a = ig(this.f);
            var f = kg({
                extent: a,
                minZoom: d.zoomMin,
                maxZoom: e,
                tileSize: d.imageWidth == d.imageHeight ? d.imageWidth : [d.imageWidth, d.imageHeight]
            });
            this.tileGrid =
                f;
            var g = this.j;
            this.tileUrlFunction = wm(d.imageUrlSubdomains.map(function (a) {
                var c = [0, 0, 0], e = d.imageUrl.replace("{subdomain}", a).replace("{culture}", g);
                return function (a) {
                    if (a)return Mf(a[0], a[1], -a[2] - 1, c), e.replace("{quadkey}", Nf(c))
                }
            }));
            if (d.imageryProviders) {
                var h = Lc(Ic("EPSG:4326"), this.f);
                a = d.imageryProviders.map(function (a) {
                    var c = a.attribution, d = {};
                    a.coverageAreas.forEach(function (a) {
                        var c = a.zoomMin, g = Math.min(a.zoomMax, e);
                        a = a.bbox;
                        a = zc([a[1], a[0], a[3], a[2]], h);
                        var k, m;
                        for (k = c; k <= g; ++k)m = k.toString(),
                            c = bg(f, a, k), m in d ? d[m].push(c) : d[m] = [c]
                    });
                    return new ue({html: c, tileRanges: d})
                });
                a.push(jw);
                this.ka(a)
            }
            this.R = c;
            Xf(this, "ready")
        }
    };
    function kw(a) {
        a = a || {};
        var c = void 0 !== a.projection ? a.projection : "EPSG:3857", d = void 0 !== a.tileGrid ? a.tileGrid : kg({
            extent: ig(c),
            maxZoom: a.maxZoom,
            minZoom: a.minZoom,
            tileSize: a.tileSize
        });
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            opaque: a.opaque,
            projection: c,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileGrid: d,
            tileLoadFunction: a.tileLoadFunction,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: a.tileUrlFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        })
    }

    y(kw, X);
    function lw(a) {
        this.v = a.account;
        this.B = a.map || "";
        this.c = a.config || {};
        this.j = {};
        kw.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            maxZoom: void 0 !== a.maxZoom ? a.maxZoom : 18,
            minZoom: a.minZoom,
            projection: a.projection,
            state: "loading",
            wrapX: a.wrapX
        });
        mw(this)
    }

    y(lw, kw);
    l = lw.prototype;
    l.Pj = function () {
        return this.c
    };
    l.op = function (a) {
        Pa(this.c, a);
        mw(this)
    };
    l.Uo = function (a) {
        this.c = a || {};
        mw(this)
    };
    function mw(a) {
        var c = JSON.stringify(a.c);
        if (a.j[c])nw(a, a.j[c]); else {
            var d = "https://" + a.v + ".cartodb.com/api/v1/map";
            a.B && (d += "/named/" + a.B);
            var e = new XMLHttpRequest;
            e.addEventListener("load", a.Jk.bind(a, c));
            e.addEventListener("error", a.Ik.bind(a));
            e.open("POST", d);
            e.setRequestHeader("Content-type", "application/json");
            e.send(JSON.stringify(a.c))
        }
    }

    l.Jk = function (a, c) {
        var d = c.target;
        if (200 <= d.status && 300 > d.status) {
            var e;
            try {
                e = JSON.parse(d.responseText)
            } catch (f) {
                Xf(this, "error");
                return
            }
            nw(this, e);
            this.j[a] = e;
            Xf(this, "ready")
        } else Xf(this, "error")
    };
    l.Ik = function () {
        Xf(this, "error")
    };
    function nw(a, c) {
        a.Na("https://" + c.cdn_url.https + "/" + a.v + "/api/v1/map/" + c.layergroupid + "/{z}/{x}/{y}.png")
    };
    function Y(a) {
        Q.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            wrapX: a.wrapX
        });
        this.M = void 0;
        this.ta = void 0 !== a.distance ? a.distance : 20;
        this.B = [];
        this.ea = a.geometryFunction || function (a) {
                return a.W()
            };
        this.v = a.source;
        this.v.D("change", Y.prototype.Ra, this)
    }

    y(Y, Q);
    Y.prototype.xa = function () {
        return this.v
    };
    Y.prototype.Kc = function (a, c, d) {
        this.v.Kc(a, c, d);
        c !== this.M && (this.clear(), this.M = c, ow(this), this.Ec(this.B))
    };
    Y.prototype.Ra = function () {
        this.clear();
        ow(this);
        this.Ec(this.B);
        this.u()
    };
    function ow(a) {
        if (void 0 !== a.M) {
            a.B.length = 0;
            for (var c = Wb(), d = a.ta * a.M, e = a.v.je(), f = {}, g = 0, h = e.length; g < h; g++) {
                var k = e[g];
                w(k).toString() in f || !(k = a.ea(k)) || (k = k.Z(), fc(k, c), Yb(c, d, c), k = a.v.af(c), k = k.filter(function (a) {
                    a = w(a).toString();
                    return a in f ? !1 : f[a] = !0
                }), a.B.push(pw(a, k)))
            }
        }
    }

    function pw(a, c) {
        for (var d = [0, 0], e = c.length - 1; 0 <= e; --e) {
            var f = a.ea(c[e]);
            f ? Mb(d, f.Z()) : c.splice(e, 1)
        }
        e = 1 / c.length;
        d[0] *= e;
        d[1] *= e;
        d = new zl(new D(d));
        d.set("features", c);
        return d
    };
    function qw(a) {
        a = a || {};
        rl.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: a.projection,
            resolutions: a.resolutions
        });
        this.Y = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.i = a.url;
        this.j = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : xl;
        this.v = a.params || {};
        this.c = null;
        this.s = [0, 0];
        this.T = 0;
        this.S = void 0 !== a.ratio ? a.ratio : 1.5
    }

    y(qw, rl);
    l = qw.prototype;
    l.Mm = function () {
        return this.v
    };
    l.Hc = function (a, c, d, e) {
        if (void 0 === this.i)return null;
        c = sl(this, c);
        var f = this.c;
        if (f && this.T == this.g && f.$() == c && f.f == d && cc(f.O(), a))return f;
        f = {F: "image", FORMAT: "PNG32", TRANSPARENT: !0};
        Pa(f, this.v);
        a = a.slice();
        var g = (a[0] + a[2]) / 2, h = (a[1] + a[3]) / 2;
        if (1 != this.S) {
            var k = this.S * rc(a) / 2, m = this.S * sc(a) / 2;
            a[0] = g - k;
            a[1] = h - m;
            a[2] = g + k;
            a[3] = h + m
        }
        var k = c / d, m = Math.ceil(rc(a) / k), n = Math.ceil(sc(a) / k);
        a[0] = g - k * m / 2;
        a[2] = g + k * m / 2;
        a[1] = h - k * n / 2;
        a[3] = h + k * n / 2;
        this.s[0] = m;
        this.s[1] = n;
        g = a;
        h = this.s;
        e = e.eb.split(":").pop();
        f.SIZE =
            h[0] + "," + h[1];
        f.BBOX = g.join(",");
        f.BBOXSR = e;
        f.IMAGESR = e;
        f.DPI = 90 * d;
        e = this.i.replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage");
        f = dq(fq([e], f));
        this.c = new Yu(a, c, d, this.l, f, this.Y, this.j);
        this.T = this.g;
        C(this.c, "change", this.o, this);
        return this.c
    };
    l.Lm = function () {
        return this.j
    };
    l.Nm = function () {
        return this.i
    };
    l.Om = function (a) {
        this.c = null;
        this.j = a;
        this.u()
    };
    l.Pm = function (a) {
        a != this.i && (this.i = a, this.c = null, this.u())
    };
    l.Qm = function (a) {
        Pa(this.v, a);
        this.c = null;
        this.u()
    };
    function rw(a) {
        rl.call(this, {projection: a.projection, resolutions: a.resolutions});
        this.Y = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.s = void 0 !== a.displayDpi ? a.displayDpi : 96;
        this.j = a.params || {};
        this.T = a.url;
        this.c = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : xl;
        this.ea = void 0 !== a.hidpi ? a.hidpi : !0;
        this.ta = void 0 !== a.metersPerUnit ? a.metersPerUnit : 1;
        this.v = void 0 !== a.ratio ? a.ratio : 1;
        this.xa = void 0 !== a.useOverlay ? a.useOverlay : !1;
        this.i = null;
        this.S = 0
    }

    y(rw, rl);
    l = rw.prototype;
    l.Sm = function () {
        return this.j
    };
    l.Hc = function (a, c, d) {
        c = sl(this, c);
        d = this.ea ? d : 1;
        var e = this.i;
        if (e && this.S == this.g && e.$() == c && e.f == d && cc(e.O(), a))return e;
        1 != this.v && (a = a.slice(), yc(a, this.v));
        var f = [rc(a) / c * d, sc(a) / c * d];
        if (void 0 !== this.T) {
            var e = this.T, g = tc(a), h = this.ta, k = rc(a), m = sc(a), n = f[0], p = f[1], q = .0254 / this.s, f = {
                OPERATION: this.xa ? "GETDYNAMICMAPOVERLAYIMAGE" : "GETMAPIMAGE",
                VERSION: "2.0.0",
                LOCALE: "en",
                CLIENTAGENT: "ol.source.ImageMapGuide source",
                CLIP: "1",
                SETDISPLAYDPI: this.s,
                SETDISPLAYWIDTH: Math.round(f[0]),
                SETDISPLAYHEIGHT: Math.round(f[1]),
                SETVIEWSCALE: p * k > n * m ? k * h / (n * q) : m * h / (p * q),
                SETVIEWCENTERX: g[0],
                SETVIEWCENTERY: g[1]
            };
            Pa(f, this.j);
            e = dq(fq([e], f));
            e = new Yu(a, c, d, this.l, e, this.Y, this.c);
            C(e, "change", this.o, this)
        } else e = null;
        this.i = e;
        this.S = this.g;
        return e
    };
    l.Rm = function () {
        return this.c
    };
    l.Um = function (a) {
        Pa(this.j, a);
        this.u()
    };
    l.Tm = function (a) {
        this.i = null;
        this.c = a;
        this.u()
    };
    function sw(a) {
        var c = a.imageExtent, d = void 0 !== a.crossOrigin ? a.crossOrigin : null, e = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : xl;
        rl.call(this, {attributions: a.attributions, logo: a.logo, projection: Ic(a.projection)});
        this.c = new Yu(c, void 0, 1, this.l, a.url, d, e);
        this.i = a.imageSize ? a.imageSize : null;
        C(this.c, "change", this.o, this)
    }

    y(sw, rl);
    sw.prototype.Hc = function (a) {
        return wc(a, this.c.O()) ? this.c : null
    };
    sw.prototype.o = function (a) {
        if (2 == this.c.V()) {
            var c = this.c.O(), d = this.c.a(), e, f;
            this.i ? (e = this.i[0], f = this.i[1]) : (e = d.width, f = d.height);
            c = Math.ceil(rc(c) / (sc(c) / f));
            if (c != e) {
                var c = Mg(c, f), g = c.canvas;
                c.drawImage(d, 0, 0, e, f, 0, 0, g.width, g.height);
                this.c.g = g
            }
        }
        sw.ia.o.call(this, a)
    };
    function tw(a) {
        a = a || {};
        rl.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: a.projection,
            resolutions: a.resolutions
        });
        this.ta = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.j = a.url;
        this.S = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : xl;
        this.i = a.params || {};
        this.v = !0;
        uw(this);
        this.ea = a.serverType;
        this.xa = void 0 !== a.hidpi ? a.hidpi : !0;
        this.c = null;
        this.T = [0, 0];
        this.Y = 0;
        this.s = void 0 !== a.ratio ? a.ratio : 1.5
    }

    y(tw, rl);
    var vw = [101, 101];
    l = tw.prototype;
    l.$m = function (a, c, d, e) {
        if (void 0 !== this.j) {
            var f = uc(a, c, 0, vw), g = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetFeatureInfo",
                FORMAT: "image/png",
                TRANSPARENT: !0,
                QUERY_LAYERS: this.i.LAYERS
            };
            Pa(g, this.i, e);
            e = Math.floor((f[3] - a[1]) / c);
            g[this.v ? "I" : "X"] = Math.floor((a[0] - f[0]) / c);
            g[this.v ? "J" : "Y"] = e;
            return ww(this, f, vw, 1, Ic(d), g)
        }
    };
    l.bn = function () {
        return this.i
    };
    l.Hc = function (a, c, d, e) {
        if (void 0 === this.j)return null;
        c = sl(this, c);
        1 == d || this.xa && void 0 !== this.ea || (d = 1);
        a = a.slice();
        var f = (a[0] + a[2]) / 2, g = (a[1] + a[3]) / 2, h = c / d, k = rc(a) / h, h = sc(a) / h, m = this.c;
        if (m && this.Y == this.g && m.$() == c && m.f == d && cc(m.O(), a))return m;
        if (1 != this.s) {
            var m = this.s * rc(a) / 2, n = this.s * sc(a) / 2;
            a[0] = f - m;
            a[1] = g - n;
            a[2] = f + m;
            a[3] = g + n
        }
        f = {SERVICE: "WMS", VERSION: "1.3.0", REQUEST: "GetMap", FORMAT: "image/png", TRANSPARENT: !0};
        Pa(f, this.i);
        this.T[0] = Math.ceil(k * this.s);
        this.T[1] = Math.ceil(h * this.s);
        e = ww(this,
            a, this.T, d, e, f);
        this.c = new Yu(a, c, d, this.l, e, this.ta, this.S);
        this.Y = this.g;
        C(this.c, "change", this.o, this);
        return this.c
    };
    l.an = function () {
        return this.S
    };
    function ww(a, c, d, e, f, g) {
        g[a.v ? "CRS" : "SRS"] = f.eb;
        "STYLES" in a.i || (g.STYLES = "");
        if (1 != e)switch (a.ea) {
            case "geoserver":
                e = 90 * e + .5 | 0;
                g.FORMAT_OPTIONS = "FORMAT_OPTIONS" in g ? g.FORMAT_OPTIONS + (";dpi:" + e) : "dpi:" + e;
                break;
            case "mapserver":
                g.MAP_RESOLUTION = 90 * e;
                break;
            case "carmentaserver":
            case "qgis":
                g.DPI = 90 * e
        }
        g.WIDTH = d[0];
        g.HEIGHT = d[1];
        d = f.b;
        var h;
        a.v && "ne" == d.substr(0, 2) ? h = [c[1], c[0], c[3], c[2]] : h = c;
        g.BBOX = h.join(",");
        return dq(fq([a.j], g))
    }

    l.cn = function () {
        return this.j
    };
    l.dn = function (a) {
        this.c = null;
        this.S = a;
        this.u()
    };
    l.en = function (a) {
        a != this.j && (this.j = a, this.c = null, this.u())
    };
    l.fn = function (a) {
        Pa(this.i, a);
        uw(this);
        this.c = null;
        this.u()
    };
    function uw(a) {
        a.v = 0 <= Lb(a.i.VERSION || "1.3.0")
    };
    function xw(a) {
        a = a || {};
        var c;
        void 0 !== a.attributions ? c = a.attributions : c = [yw];
        kw.call(this, {
            attributions: c,
            cacheSize: a.cacheSize,
            crossOrigin: void 0 !== a.crossOrigin ? a.crossOrigin : "anonymous",
            opaque: void 0 !== a.opaque ? a.opaque : !0,
            maxZoom: void 0 !== a.maxZoom ? a.maxZoom : 19,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileLoadFunction: a.tileLoadFunction,
            url: void 0 !== a.url ? a.url : "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            wrapX: a.wrapX
        })
    }

    y(xw, kw);
    var yw = new ue({html: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.'});

    function zw(a) {
        a = a || {};
        var c = Aw[a.layer];
        this.c = a.layer;
        kw.call(this, {
            attributions: c.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: "anonymous",
            logo: "https://developer.mapquest.com/content/osm/mq_logo.png",
            maxZoom: c.maxZoom,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            opaque: c.opaque,
            tileLoadFunction: a.tileLoadFunction,
            url: void 0 !== a.url ? a.url : "https://otile{1-4}-s.mqcdn.com/tiles/1.0.0/" + this.c + "/{z}/{x}/{y}.jpg"
        })
    }

    y(zw, kw);
    var Bw = new ue({html: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a>'}), Aw = {
        osm: {
            maxZoom: 19,
            opaque: !0,
            attributions: [Bw, yw]
        },
        sat: {
            maxZoom: 18,
            opaque: !0,
            attributions: [Bw, new ue({html: "Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency"})]
        },
        hyb: {maxZoom: 18, opaque: !1, attributions: [Bw, yw]}
    };
    zw.prototype.j = function () {
        return this.c
    };
    (function () {
        var a = {}, c = {ha: a};
        (function (d) {
            if ("object" === typeof a && "undefined" !== typeof c)c.ha = d(); else {
                var e;
                "undefined" !== typeof window ? e = window : "undefined" !== typeof global ? e = global : "undefined" !== typeof self ? e = self : e = this;
                e.Np = d()
            }
        })(function () {
            return function e(a, c, h) {
                function k(n, q) {
                    if (!c[n]) {
                        if (!a[n]) {
                            var r = "function" == typeof require && require;
                            if (!q && r)return r(n, !0);
                            if (m)return m(n, !0);
                            r = Error("Cannot find module '" + n + "'");
                            throw r.code = "MODULE_NOT_FOUND", r;
                        }
                        r = c[n] = {ha: {}};
                        a[n][0].call(r.ha, function (c) {
                            var e =
                                a[n][1][c];
                            return k(e ? e : c)
                        }, r, r.ha, e, a, c, h)
                    }
                    return c[n].ha
                }

                for (var m = "function" == typeof require && require, n = 0; n < h.length; n++)k(h[n]);
                return k
            }({
                1: [function (a, c, g) {
                    a = a("./processor");
                    g.Vi = a
                }, {"./processor": 2}], 2: [function (a, c) {
                    function g(a) {
                        var c = !0;
                        try {
                            new ImageData(10, 10)
                        } catch (e) {
                            c = !1
                        }
                        return function (e) {
                            var f = e.buffers, g = e.meta, h = e.width, k = e.height, m = f.length, n = f[0].byteLength;
                            if (e.imageOps) {
                                n = Array(m);
                                for (e = 0; e < m; ++e) {
                                    var A = n, G = e, O;
                                    O = new Uint8ClampedArray(f[e]);
                                    var L = h, R = k;
                                    O = c ? new ImageData(O, L,
                                        R) : {data: O, width: L, height: R};
                                    A[G] = O
                                }
                                h = a(n, g).data
                            } else {
                                h = new Uint8ClampedArray(n);
                                k = Array(m);
                                A = Array(m);
                                for (e = 0; e < m; ++e)k[e] = new Uint8ClampedArray(f[e]), A[e] = [0, 0, 0, 0];
                                for (f = 0; f < n; f += 4) {
                                    for (e = 0; e < m; ++e)G = k[e], A[e][0] = G[f], A[e][1] = G[f + 1], A[e][2] = G[f + 2], A[e][3] = G[f + 3];
                                    e = a(A, g);
                                    h[f] = e[0];
                                    h[f + 1] = e[1];
                                    h[f + 2] = e[2];
                                    h[f + 3] = e[3]
                                }
                            }
                            return h.buffer
                        }
                    }

                    function h(a, c) {
                        var e = Object.keys(a.lib || {}).map(function (c) {
                            return "var " + c + " = " + a.lib[c].toString() + ";"
                        }).concat(["var __minion__ = (" + g.toString() + ")(", a.operation.toString(),
                            ");", 'self.addEventListener("message", function(event) {', "  var buffer = __minion__(event.data);", "  self.postMessage({buffer: buffer, meta: event.data.meta}, [buffer]);", "});"]), e = URL.createObjectURL(new Blob(e, {type: "text/javascript"})), e = new Worker(e);
                        e.addEventListener("message", c);
                        return e
                    }

                    function k(a, c) {
                        var e = g(a.operation);
                        return {
                            postMessage: function (a) {
                                setTimeout(function () {
                                    c({data: {buffer: e(a), meta: a.meta}})
                                }, 0)
                            }
                        }
                    }

                    function m(a) {
                        this.Ne = !!a.hl;
                        var c;
                        0 === a.threads ? c = 0 : this.Ne ? c = 1 : c = a.threads ||
                            1;
                        var e = [];
                        if (c)for (var f = 0; f < c; ++f)e[f] = h(a, this.eg.bind(this, f)); else e[0] = k(a, this.eg.bind(this, 0));
                        this.Gd = e;
                        this.Vc = [];
                        this.jj = a.oo || Infinity;
                        this.Ed = 0;
                        this.Dc = {};
                        this.Oe = null
                    }

                    var n = a("./util").Bl;
                    m.prototype.mo = function (a, c, e) {
                        this.gj({vc: a, Sg: c, mg: e});
                        this.bg()
                    };
                    m.prototype.gj = function (a) {
                        for (this.Vc.push(a); this.Vc.length > this.jj;)this.Vc.shift().mg(null, null)
                    };
                    m.prototype.bg = function () {
                        if (0 === this.Ed && 0 < this.Vc.length) {
                            var a = this.Oe = this.Vc.shift(), c = a.vc[0].width, e = a.vc[0].height, f = a.vc.map(function (a) {
                                    return a.data.buffer
                                }),
                                g = this.Gd.length;
                            this.Ed = g;
                            if (1 === g)this.Gd[0].postMessage({
                                buffers: f,
                                meta: a.Sg,
                                imageOps: this.Ne,
                                width: c,
                                height: e
                            }, f); else for (var h = 4 * Math.ceil(a.vc[0].data.length / 4 / g), k = 0; k < g; ++k) {
                                for (var m = k * h, n = [], A = 0, G = f.length; A < G; ++A)n.push(f[k].slice(m, m + h));
                                this.Gd[k].postMessage({
                                    buffers: n,
                                    meta: a.Sg,
                                    imageOps: this.Ne,
                                    width: c,
                                    height: e
                                }, n)
                            }
                        }
                    };
                    m.prototype.eg = function (a, c) {
                        this.Jp || (this.Dc[a] = c.data, --this.Ed, 0 === this.Ed && this.kj())
                    };
                    m.prototype.kj = function () {
                        var a = this.Oe, c = this.Gd.length, e, f;
                        if (1 === c)e = new Uint8ClampedArray(this.Dc[0].buffer),
                            f = this.Dc[0].meta; else {
                            var g = a.vc[0].data.length;
                            e = new Uint8ClampedArray(g);
                            f = Array(g);
                            for (var g = 4 * Math.ceil(g / 4 / c), h = 0; h < c; ++h) {
                                var k = h * g;
                                e.set(new Uint8ClampedArray(this.Dc[h].buffer), k);
                                f[h] = this.Dc[h].meta
                            }
                        }
                        this.Oe = null;
                        this.Dc = {};
                        a.mg(null, n(e, a.vc[0].width, a.vc[0].height), f);
                        this.bg()
                    };
                    c.ha = m
                }, {"./util": 3}], 3: [function (a, c, g) {
                    var h = !0;
                    try {
                        new ImageData(10, 10)
                    } catch (m) {
                        h = !1
                    }
                    var k = document.createElement("canvas").getContext("2d");
                    g.Bl = function (a, c, e) {
                        if (h)return new ImageData(a, c, e);
                        c = k.createImageData(c,
                            e);
                        c.data.set(a);
                        return c
                    }
                }, {}]
            }, {}, [1])(1)
        });
        am = c.ha
    })();
    function Cw(a) {
        this.S = null;
        this.xa = void 0 !== a.operationType ? a.operationType : "pixel";
        this.Ra = void 0 !== a.threads ? a.threads : 1;
        this.c = Dw(a.sources);
        for (var c = 0, d = this.c.length; c < d; ++c)C(this.c[c], "change", this.u, this);
        this.i = Mg();
        this.ea = new Ii(function () {
            return 1
        }, this.u.bind(this));
        for (var c = Ew(this.c), d = {}, e = 0, f = c.length; e < f; ++e)d[w(c[e].layer)] = c[e];
        this.j = this.s = null;
        this.Y = {
            animate: !1,
            attributions: {},
            coordinateToPixelMatrix: hd(),
            extent: null,
            focus: null,
            index: 0,
            layerStates: d,
            layerStatesArray: c,
            logos: {},
            pixelRatio: 1,
            pixelToCoordinateMatrix: hd(),
            postRenderFunctions: [],
            size: [0, 0],
            skippedFeatureUids: {},
            tileQueue: this.ea,
            time: Date.now(),
            usedTiles: {},
            viewState: {rotation: 0},
            viewHints: [],
            wantedTiles: {}
        };
        rl.call(this, {});
        void 0 !== a.operation && this.v(a.operation, a.lib)
    }

    y(Cw, rl);
    Cw.prototype.v = function (a, c) {
        this.S = new am.Vi({operation: a, hl: "image" === this.xa, oo: 1, lib: c, threads: this.Ra});
        this.u()
    };
    function Fw(a, c, d) {
        var e = a.s;
        return !e || a.g !== e.Ro || d !== e.resolution || !ic(c, e.extent)
    }

    Cw.prototype.B = function (a, c, d, e) {
        d = !0;
        for (var f, g = 0, h = this.c.length; g < h; ++g)if (f = this.c[g].a.da(), "ready" !== f.V()) {
            d = !1;
            break
        }
        if (!d)return null;
        a = a.slice();
        if (!Fw(this, a, c))return this.j;
        d = this.i.canvas;
        f = Math.round(rc(a) / c);
        g = Math.round(sc(a) / c);
        if (f !== d.width || g !== d.height)d.width = f, d.height = g;
        f = Pa({}, this.Y);
        f.viewState = Pa({}, f.viewState);
        var g = tc(a), h = Math.round(rc(a) / c), k = Math.round(sc(a) / c);
        f.extent = a;
        f.focus = tc(a);
        f.size[0] = h;
        f.size[1] = k;
        h = f.viewState;
        h.center = g;
        h.projection = e;
        h.resolution =
            c;
        this.j = e = new dl(a, c, 1, this.l, d, this.T.bind(this, f));
        this.s = {extent: a, resolution: c, Ro: this.g};
        return e
    };
    Cw.prototype.T = function (a, c) {
        for (var d = this.c.length, e = Array(d), f = 0; f < d; ++f) {
            var g;
            g = this.c[f];
            var h = a, k = a.layerStatesArray[f];
            if (g.l(h, k)) {
                var m = h.size[0], n = h.size[1];
                if (Gw) {
                    var p = Gw.canvas;
                    p.width !== m || p.height !== n ? Gw = Mg(m, n) : Gw.clearRect(0, 0, m, n)
                } else Gw = Mg(m, n);
                g.i(h, k, Gw);
                g = Gw.getImageData(0, 0, m, n)
            } else g = null;
            if (g)e[f] = g; else return
        }
        d = {};
        this.b(new Hw(Iw, a, d));
        this.S.mo(e, d, this.ta.bind(this, a, c));
        Ji(a.tileQueue, 16, 16)
    };
    Cw.prototype.ta = function (a, c, d, e, f) {
        d ? c(d) : e && (this.b(new Hw(Jw, a, f)), Fw(this, a.extent, a.viewState.resolution / a.pixelRatio) || this.i.putImageData(e, 0, 0), c(null))
    };
    var Gw = null;

    function Ew(a) {
        return a.map(function (a) {
            return ai(a.a)
        })
    }

    function Dw(a) {
        for (var c = a.length, d = Array(c), e = 0; e < c; ++e) {
            var f = e, g = a[e], h = null;
            g instanceof lg ? (g = new Vj({source: g}), h = new rm(g)) : g instanceof rl && (g = new Uj({source: g}), h = new qm(g));
            d[f] = h
        }
        return d
    }

    function Hw(a, c, d) {
        gb.call(this, a);
        this.extent = c.extent;
        this.resolution = c.viewState.resolution / c.pixelRatio;
        this.data = d
    }

    y(Hw, gb);
    var Iw = "beforeoperations", Jw = "afteroperations";
    var Kw = {
        terrain: {sb: "jpg", opaque: !0},
        "terrain-background": {sb: "jpg", opaque: !0},
        "terrain-labels": {sb: "png", opaque: !1},
        "terrain-lines": {sb: "png", opaque: !1},
        "toner-background": {sb: "png", opaque: !0},
        toner: {sb: "png", opaque: !0},
        "toner-hybrid": {sb: "png", opaque: !1},
        "toner-labels": {sb: "png", opaque: !1},
        "toner-lines": {sb: "png", opaque: !1},
        "toner-lite": {sb: "png", opaque: !0},
        watercolor: {sb: "jpg", opaque: !0}
    }, Lw = {
        terrain: {minZoom: 4, maxZoom: 18},
        toner: {minZoom: 0, maxZoom: 20},
        watercolor: {minZoom: 1, maxZoom: 16}
    };

    function Mw(a) {
        var c = a.layer.indexOf("-"), c = -1 == c ? a.layer : a.layer.slice(0, c), c = Lw[c], d = Kw[a.layer];
        kw.call(this, {
            attributions: Nw,
            cacheSize: a.cacheSize,
            crossOrigin: "anonymous",
            maxZoom: c.maxZoom,
            minZoom: c.minZoom,
            opaque: d.opaque,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileLoadFunction: a.tileLoadFunction,
            url: void 0 !== a.url ? a.url : "https://stamen-tiles-{a-d}.a.ssl.fastly.net/" + a.layer + "/{z}/{x}/{y}." + d.sb
        })
    }

    y(Mw, kw);
    var Nw = [new ue({html: 'Map tiles by <a href="http://stamen.com/">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.'}), yw];

    function Ow(a) {
        a = a || {};
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.c = a.params || {};
        this.j = Wb()
    }

    y(Ow, X);
    Ow.prototype.v = function () {
        return this.c
    };
    Ow.prototype.Xb = function (a) {
        return a
    };
    Ow.prototype.qc = function (a, c, d) {
        var e = this.tileGrid;
        e || (e = this.fb(d));
        if (!(e.b.length <= a[0])) {
            var f = e.Ba(a, this.j), g = Uf(e.Ha(a[0]), this.o);
            1 != c && (g = Tf(g, c, this.o));
            e = {F: "image", FORMAT: "PNG32", TRANSPARENT: !0};
            Pa(e, this.c);
            var h = this.urls;
            h ? (d = d.eb.split(":").pop(), e.SIZE = g[0] + "," + g[1], e.BBOX = f.join(","), e.BBOXSR = d, e.IMAGESR = d, e.DPI = Math.round(e.DPI ? e.DPI * c : 90 * c), a = (1 == h.length ? h[0] : h[Ja((a[1] << a[0]) + a[2], h.length)]).replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage"),
                a = dq(fq([a], e))) : a = void 0;
            return a
        }
    };
    Ow.prototype.B = function (a) {
        Pa(this.c, a);
        this.u()
    };
    function Pw(a, c, d) {
        Qf.call(this, a, 2);
        this.l = c;
        this.c = d;
        this.g = {}
    }

    y(Pw, Qf);
    Pw.prototype.ab = function (a) {
        a = void 0 !== a ? w(a) : -1;
        if (a in this.g)return this.g[a];
        var c = this.l, d = Mg(c[0], c[1]);
        d.strokeStyle = "black";
        d.strokeRect(.5, .5, c[0] + .5, c[1] + .5);
        d.fillStyle = "black";
        d.textAlign = "center";
        d.textBaseline = "middle";
        d.font = "24px sans-serif";
        d.fillText(this.c, c[0] / 2, c[1] / 2);
        return this.g[a] = d.canvas
    };
    function Qw(a) {
        lg.call(this, {
            opaque: !1,
            projection: a.projection,
            tileGrid: a.tileGrid,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        })
    }

    y(Qw, lg);
    Qw.prototype.Wb = function (a, c, d) {
        var e = this.Ab(a, c, d);
        if (Lf(this.a, e))return this.a.get(e);
        var f = Uf(this.tileGrid.Ha(a));
        a = [a, c, d];
        c = (c = og(this, a)) ? og(this, c).toString() : "";
        f = new Pw(a, f, c);
        this.a.set(e, f);
        return f
    };
    function Rw(a) {
        this.c = null;
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            projection: Ic("EPSG:3857"),
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            state: "loading",
            tileLoadFunction: a.tileLoadFunction,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        if (a.jsonp)dw(a.url, this.th.bind(this), this.he.bind(this)); else {
            var c = new XMLHttpRequest;
            c.addEventListener("load", this.hn.bind(this));
            c.addEventListener("error", this.gn.bind(this));
            c.open("GET", a.url);
            c.send()
        }
    }

    y(Rw, X);
    l = Rw.prototype;
    l.hn = function (a) {
        a = a.target;
        if (200 <= a.status && 300 > a.status) {
            var c;
            try {
                c = JSON.parse(a.responseText)
            } catch (d) {
                this.he();
                return
            }
            this.th(c)
        } else this.he()
    };
    l.gn = function () {
        this.he()
    };
    l.wk = function () {
        return this.c
    };
    l.th = function (a) {
        var c = Ic("EPSG:4326"), d = this.f, e;
        void 0 !== a.bounds && (e = zc(a.bounds, Lc(c, d)));
        var f = a.minzoom || 0, g = a.maxzoom || 22;
        this.tileGrid = d = kg({extent: ig(d), maxZoom: g, minZoom: f});
        this.tileUrlFunction = vm(a.tiles, d);
        if (void 0 !== a.attribution && !this.l) {
            c = void 0 !== e ? e : c.O();
            e = {};
            for (var h; f <= g; ++f)h = f.toString(), e[h] = [bg(d, c, f)];
            this.ka([new ue({html: a.attribution, tileRanges: e})])
        }
        this.c = a;
        Xf(this, "ready")
    };
    l.he = function () {
        Xf(this, "error")
    };
    function Sw(a) {
        lg.call(this, {projection: Ic("EPSG:3857"), state: "loading"});
        this.s = void 0 !== a.preemptive ? a.preemptive : !0;
        this.j = xm;
        this.i = void 0;
        this.c = a.jsonp || !1;
        if (a.url)if (this.c)dw(a.url, this.xf.bind(this), this.ie.bind(this)); else {
            var c = new XMLHttpRequest;
            c.addEventListener("load", this.mn.bind(this));
            c.addEventListener("error", this.ln.bind(this));
            c.open("GET", a.url);
            c.send()
        } else a.tileJSON && this.xf(a.tileJSON)
    }

    y(Sw, lg);
    l = Sw.prototype;
    l.mn = function (a) {
        a = a.target;
        if (200 <= a.status && 300 > a.status) {
            var c;
            try {
                c = JSON.parse(a.responseText)
            } catch (d) {
                this.ie();
                return
            }
            this.xf(c)
        } else this.ie()
    };
    l.ln = function () {
        this.ie()
    };
    l.tk = function () {
        return this.i
    };
    l.Ej = function (a, c, d, e, f) {
        this.tileGrid ? (c = this.tileGrid.Td(a, c), Tw(this.Wb(c[0], c[1], c[2], 1, this.f), a, d, e, f)) : !0 === f ? Fg(function () {
            d.call(e, null)
        }) : d.call(e, null)
    };
    l.ie = function () {
        Xf(this, "error")
    };
    l.xf = function (a) {
        var c = Ic("EPSG:4326"), d = this.f, e;
        void 0 !== a.bounds && (e = zc(a.bounds, Lc(c, d)));
        var f = a.minzoom || 0, g = a.maxzoom || 22;
        this.tileGrid = d = kg({extent: ig(d), maxZoom: g, minZoom: f});
        this.i = a.template;
        var h = a.grids;
        if (h) {
            this.j = vm(h, d);
            if (void 0 !== a.attribution) {
                c = void 0 !== e ? e : c.O();
                for (e = {}; f <= g; ++f)h = f.toString(), e[h] = [bg(d, c, f)];
                this.ka([new ue({html: a.attribution, tileRanges: e})])
            }
            Xf(this, "ready")
        } else Xf(this, "error")
    };
    l.Wb = function (a, c, d, e, f) {
        var g = this.Ab(a, c, d);
        if (Lf(this.a, g))return this.a.get(g);
        a = [a, c, d];
        c = og(this, a, f);
        e = this.j(c, e, f);
        e = new Uw(a, void 0 !== e ? 0 : 4, void 0 !== e ? e : "", this.tileGrid.Ba(a), this.s, this.c);
        this.a.set(g, e);
        return e
    };
    l.Uf = function (a, c, d) {
        a = this.Ab(a, c, d);
        Lf(this.a, a) && this.a.get(a)
    };
    function Uw(a, c, d, e, f, g) {
        Qf.call(this, a, c);
        this.s = d;
        this.g = e;
        this.U = f;
        this.c = this.j = this.l = null;
        this.v = g
    }

    y(Uw, Qf);
    l = Uw.prototype;
    l.ab = function () {
        return null
    };
    l.getData = function (a) {
        if (!this.l || !this.j)return null;
        var c = this.l[Math.floor((1 - (a[1] - this.g[1]) / (this.g[3] - this.g[1])) * this.l.length)];
        if ("string" !== typeof c)return null;
        c = c.charCodeAt(Math.floor((a[0] - this.g[0]) / (this.g[2] - this.g[0]) * c.length));
        93 <= c && c--;
        35 <= c && c--;
        c -= 32;
        a = null;
        c in this.j && (c = this.j[c], this.c && c in this.c ? a = this.c[c] : a = c);
        return a
    };
    function Tw(a, c, d, e, f) {
        0 == a.state && !0 === f ? (bb(a, "change", function () {
            d.call(e, this.getData(c))
        }, a), Vw(a)) : !0 === f ? Fg(function () {
            d.call(e, this.getData(c))
        }, a) : d.call(e, a.getData(c))
    }

    l.gb = function () {
        return this.s
    };
    l.Vd = function () {
        this.state = 3;
        Rf(this)
    };
    l.uh = function (a) {
        this.l = a.grid;
        this.j = a.keys;
        this.c = a.data;
        this.state = 4;
        Rf(this)
    };
    function Vw(a) {
        if (0 == a.state)if (a.state = 1, a.v)dw(a.s, a.uh.bind(a), a.Vd.bind(a)); else {
            var c = new XMLHttpRequest;
            c.addEventListener("load", a.kn.bind(a));
            c.addEventListener("error", a.jn.bind(a));
            c.open("GET", a.s);
            c.send()
        }
    }

    l.kn = function (a) {
        a = a.target;
        if (200 <= a.status && 300 > a.status) {
            var c;
            try {
                c = JSON.parse(a.responseText)
            } catch (d) {
                this.Vd();
                return
            }
            this.uh(c)
        } else this.Vd()
    };
    l.jn = function () {
        this.Vd()
    };
    l.load = function () {
        this.U && Vw(this)
    };
    function Ww(a) {
        a = a || {};
        var c = a.params || {};
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            opaque: !("TRANSPARENT" in c ? c.TRANSPARENT : 1),
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.v = void 0 !== a.gutter ? a.gutter : 0;
        this.c = c;
        this.j = !0;
        this.B = a.serverType;
        this.T = void 0 !== a.hidpi ? a.hidpi : !0;
        this.S = "";
        Xw(this);
        this.Y = Wb();
        Yw(this);
        ng(this, Zw(this))
    }

    y(Ww, X);
    l = Ww.prototype;
    l.nn = function (a, c, d, e) {
        d = Ic(d);
        var f = this.tileGrid;
        f || (f = this.fb(d));
        c = f.Td(a, c);
        if (!(f.b.length <= c[0])) {
            var g = f.$(c[0]), h = f.Ba(c, this.Y), f = Uf(f.Ha(c[0]), this.o), k = this.v;
            0 !== k && (f = Sf(f, k, this.o), h = Yb(h, g * k, h));
            k = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetFeatureInfo",
                FORMAT: "image/png",
                TRANSPARENT: !0,
                QUERY_LAYERS: this.c.LAYERS
            };
            Pa(k, this.c, e);
            e = Math.floor((h[3] - a[1]) / g);
            k[this.j ? "I" : "X"] = Math.floor((a[0] - h[0]) / g);
            k[this.j ? "J" : "Y"] = e;
            return $w(this, c, f, h, 1, d, k)
        }
    };
    l.cf = function () {
        return this.v
    };
    l.Ab = function (a, c, d) {
        return this.S + Ww.ia.Ab.call(this, a, c, d)
    };
    l.pn = function () {
        return this.c
    };
    function $w(a, c, d, e, f, g, h) {
        var k = a.urls;
        if (k) {
            h.WIDTH = d[0];
            h.HEIGHT = d[1];
            h[a.j ? "CRS" : "SRS"] = g.eb;
            "STYLES" in a.c || (h.STYLES = "");
            if (1 != f)switch (a.B) {
                case "geoserver":
                    d = 90 * f + .5 | 0;
                    h.FORMAT_OPTIONS = "FORMAT_OPTIONS" in h ? h.FORMAT_OPTIONS + (";dpi:" + d) : "dpi:" + d;
                    break;
                case "mapserver":
                    h.MAP_RESOLUTION = 90 * f;
                    break;
                case "carmentaserver":
                case "qgis":
                    h.DPI = 90 * f
            }
            g = g.b;
            a.j && "ne" == g.substr(0, 2) && (a = e[0], e[0] = e[1], e[1] = a, a = e[2], e[2] = e[3], e[3] = a);
            h.BBOX = e.join(",");
            return dq(fq([1 == k.length ? k[0] : k[Ja((c[1] << c[0]) + c[2],
                k.length)]], h))
        }
    }

    l.Xb = function (a) {
        return this.T && void 0 !== this.B ? a : 1
    };
    function Xw(a) {
        var c = 0, d = [];
        if (a.urls) {
            var e, f;
            e = 0;
            for (f = a.urls.length; e < f; ++e)d[c++] = a.urls[e]
        }
        a.S = d.join("#")
    }

    function Zw(a) {
        var c = 0, d = [], e;
        for (e in a.c)d[c++] = e + "-" + a.c[e];
        return d.join("/")
    }

    l.qc = function (a, c, d) {
        var e = this.tileGrid;
        e || (e = this.fb(d));
        if (!(e.b.length <= a[0])) {
            1 == c || this.T && void 0 !== this.B || (c = 1);
            var f = e.$(a[0]), g = e.Ba(a, this.Y), e = Uf(e.Ha(a[0]), this.o), h = this.v;
            0 !== h && (e = Sf(e, h, this.o), g = Yb(g, f * h, g));
            1 != c && (e = Tf(e, c, this.o));
            f = {SERVICE: "WMS", VERSION: "1.3.0", REQUEST: "GetMap", FORMAT: "image/png", TRANSPARENT: !0};
            Pa(f, this.c);
            return $w(this, a, e, g, c, d, f)
        }
    };
    l.qn = function (a) {
        Pa(this.c, a);
        Xw(this);
        Yw(this);
        ng(this, Zw(this))
    };
    function Yw(a) {
        a.j = 0 <= Lb(a.c.VERSION || "1.3.0")
    };
    function ax(a) {
        this.l = a.matrixIds;
        Yf.call(this, {
            extent: a.extent,
            origin: a.origin,
            origins: a.origins,
            resolutions: a.resolutions,
            tileSize: a.tileSize,
            tileSizes: a.tileSizes,
            sizes: a.sizes
        })
    }

    y(ax, Yf);
    ax.prototype.j = function () {
        return this.l
    };
    function bx(a, c) {
        var d = [], e = [], f = [], g = [], h = [], k;
        k = Ic(a.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
        var m = k.Vb(), n = "ne" == k.b.substr(0, 2);
        a.TileMatrix.sort(function (a, c) {
            return c.ScaleDenominator - a.ScaleDenominator
        });
        a.TileMatrix.forEach(function (a) {
            e.push(a.Identifier);
            var c = 2.8E-4 * a.ScaleDenominator / m, k = a.TileWidth, u = a.TileHeight;
            n ? f.push([a.TopLeftCorner[1], a.TopLeftCorner[0]]) : f.push(a.TopLeftCorner);
            d.push(c);
            g.push(k == u ? k : [k, u]);
            h.push([a.MatrixWidth, -a.MatrixHeight])
        });
        return new ax({extent: c, origins: f, resolutions: d, matrixIds: e, tileSizes: g, sizes: h})
    };
    function Z(a) {
        function c(a) {
            a = "KVP" == e ? dq(fq([a], g)) : a.replace(/\{(\w+?)\}/g, function (a, c) {
                return c.toLowerCase() in g ? g[c.toLowerCase()] : a
            });
            return function (c) {
                if (c) {
                    var d = {TileMatrix: f.l[c[0]], TileCol: c[1], TileRow: -c[2] - 1};
                    Pa(d, h);
                    c = a;
                    return c = "KVP" == e ? dq(fq([c], d)) : c.replace(/\{(\w+?)\}/g, function (a, c) {
                        return d[c]
                    })
                }
            }
        }

        this.T = void 0 !== a.version ? a.version : "1.0.0";
        this.v = void 0 !== a.format ? a.format : "image/jpeg";
        this.c = void 0 !== a.dimensions ? a.dimensions : {};
        this.B = a.layer;
        this.j = a.matrixSet;
        this.S = a.style;
        var d = a.urls;
        void 0 === d && void 0 !== a.url && (d = ym(a.url));
        var e = this.Y = void 0 !== a.requestEncoding ? a.requestEncoding : "KVP", f = a.tileGrid, g = {
            layer: this.B,
            style: this.S,
            tilematrixset: this.j
        };
        "KVP" == e && Pa(g, {Service: "WMTS", Request: "GetTile", Version: this.T, Format: this.v});
        var h = this.c, k = d && 0 < d.length ? wm(d.map(c)) : xm;
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileClass: a.tileClass,
            tileGrid: f,
            tileLoadFunction: a.tileLoadFunction,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: k,
            urls: d,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !1
        });
        ng(this, cx(this))
    }

    y(Z, X);
    l = Z.prototype;
    l.Rj = function () {
        return this.c
    };
    l.rn = function () {
        return this.v
    };
    l.sn = function () {
        return this.B
    };
    l.dk = function () {
        return this.j
    };
    l.rk = function () {
        return this.Y
    };
    l.tn = function () {
        return this.S
    };
    l.yk = function () {
        return this.T
    };
    function cx(a) {
        var c = 0, d = [], e;
        for (e in a.c)d[c++] = e + "-" + a.c[e];
        return d.join("/")
    }

    l.pp = function (a) {
        Pa(this.c, a);
        ng(this, cx(this))
    };
    function dx(a) {
        a = a || {};
        var c = a.size, d = c[0], e = c[1], f = [], g = 256;
        switch (void 0 !== a.tierSizeCalculation ? a.tierSizeCalculation : "default") {
            case "default":
                for (; d > g || e > g;)f.push([Math.ceil(d / g), Math.ceil(e / g)]), g += g;
                break;
            case "truncated":
                for (; d > g || e > g;)f.push([Math.ceil(d / g), Math.ceil(e / g)]), d >>= 1, e >>= 1
        }
        f.push([1, 1]);
        f.reverse();
        for (var g = [1], h = [0], e = 1, d = f.length; e < d; e++)g.push(1 << e), h.push(f[e - 1][0] * f[e - 1][1] + h[e - 1]);
        g.reverse();
        var c = [0, -c[1], c[0], 0], c = new Yf({extent: c, origin: oc(c), resolutions: g}), k = a.url;
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileClass: ex,
            tileGrid: c,
            tileUrlFunction: function (a) {
                if (a) {
                    var c = a[0], d = a[1];
                    a = -a[2] - 1;
                    return k + "TileGroup" + ((d + a * f[c][0] + h[c]) / 256 | 0) + "/" + c + "-" + d + "-" + a + ".jpg"
                }
            }
        })
    }

    y(dx, X);
    function ex(a, c, d, e, f) {
        Zu.call(this, a, c, d, e, f);
        this.l = {}
    }

    y(ex, Zu);
    ex.prototype.ab = function (a) {
        var c = void 0 !== a ? w(a).toString() : "";
        if (c in this.l)return this.l[c];
        a = ex.ia.ab.call(this, a);
        if (2 == this.state) {
            if (256 == a.width && 256 == a.height)return this.l[c] = a;
            var d = Mg(256, 256);
            d.drawImage(a, 0, 0);
            return this.l[c] = d.canvas
        }
        return a
    };
    function fx(a) {
        a = a || {};
        this.a = void 0 !== a.initialSize ? a.initialSize : 256;
        this.g = void 0 !== a.maxSize ? a.maxSize : void 0 !== na ? na : 2048;
        this.b = void 0 !== a.space ? a.space : 1;
        this.c = [new gx(this.a, this.b)];
        this.f = this.a;
        this.i = [new gx(this.f, this.b)]
    }

    fx.prototype.add = function (a, c, d, e, f, g) {
        if (c + this.b > this.g || d + this.b > this.g)return null;
        e = hx(this, !1, a, c, d, e, g);
        if (!e)return null;
        a = hx(this, !0, a, c, d, void 0 !== f ? f : pa, g);
        return {offsetX: e.offsetX, offsetY: e.offsetY, image: e.image, Ng: a.image}
    };
    function hx(a, c, d, e, f, g, h) {
        var k = c ? a.i : a.c, m, n, p;
        n = 0;
        for (p = k.length; n < p; ++n) {
            m = k[n];
            if (m = m.add(d, e, f, g, h))return m;
            m || n !== p - 1 || (c ? (m = Math.min(2 * a.f, a.g), a.f = m) : (m = Math.min(2 * a.a, a.g), a.a = m), m = new gx(m, a.b), k.push(m), ++p)
        }
    }

    function gx(a, c) {
        this.b = c;
        this.a = [{x: 0, y: 0, width: a, height: a}];
        this.f = {};
        this.g = Mg(a, a);
        this.c = this.g.canvas
    }

    gx.prototype.get = function (a) {
        return this.f[a] || null
    };
    gx.prototype.add = function (a, c, d, e, f) {
        var g, h, k;
        h = 0;
        for (k = this.a.length; h < k; ++h)if (g = this.a[h], g.width >= c + this.b && g.height >= d + this.b)return k = {
            offsetX: g.x + this.b,
            offsetY: g.y + this.b,
            image: this.c
        }, this.f[a] = k, e.call(f, this.g, g.x + this.b, g.y + this.b), a = h, c = c + this.b, d = d + this.b, f = e = void 0, g.width - c > g.height - d ? (e = {
            x: g.x + c,
            y: g.y,
            width: g.width - c,
            height: g.height
        }, f = {x: g.x, y: g.y + d, width: c, height: g.height - d}, ix(this, a, e, f)) : (e = {
            x: g.x + c,
            y: g.y,
            width: g.width - c,
            height: d
        }, f = {
            x: g.x, y: g.y + d, width: g.width, height: g.height -
            d
        }, ix(this, a, e, f)), k;
        return null
    };
    function ix(a, c, d, e) {
        c = [c, 1];
        0 < d.width && 0 < d.height && c.push(d);
        0 < e.width && 0 < e.height && c.push(e);
        a.a.splice.apply(a.a, c)
    };
    function jx(a) {
        this.B = this.s = this.f = null;
        this.o = void 0 !== a.fill ? a.fill : null;
        this.va = [0, 0];
        this.b = a.points;
        this.g = void 0 !== a.radius ? a.radius : a.radius1;
        this.c = void 0 !== a.radius2 ? a.radius2 : this.g;
        this.l = void 0 !== a.angle ? a.angle : 0;
        this.a = void 0 !== a.stroke ? a.stroke : null;
        this.R = this.ya = this.N = null;
        var c = a.atlasManager, d = "", e = "", f = 0, g = null, h, k = 0;
        this.a && (h = He(this.a.b), k = this.a.a, void 0 === k && (k = 1), g = this.a.g, Zg || (g = null), e = this.a.c, void 0 === e && (e = "round"), d = this.a.f, void 0 === d && (d = "round"), f = this.a.i, void 0 ===
        f && (f = 10));
        var m = 2 * (this.g + k) + 1, d = {
            strokeStyle: h,
            wd: k,
            size: m,
            lineCap: d,
            lineDash: g,
            lineJoin: e,
            miterLimit: f
        };
        if (void 0 === c) {
            var n = Mg(m, m);
            this.s = n.canvas;
            c = m = this.s.width;
            this.Dh(d, n, 0, 0);
            this.o ? this.B = this.s : (n = Mg(d.size, d.size), this.B = n.canvas, this.Ch(d, n, 0, 0))
        } else m = Math.round(m), (e = !this.o) && (n = this.Ch.bind(this, d)), f = this.a ? hk(this.a) : "-", g = this.o ? bk(this.o) : "-", this.f && f == this.f[1] && g == this.f[2] && this.g == this.f[3] && this.c == this.f[4] && this.l == this.f[5] && this.b == this.f[6] || (this.f = ["r" + f + g + (void 0 !==
        this.g ? this.g.toString() : "-") + (void 0 !== this.c ? this.c.toString() : "-") + (void 0 !== this.l ? this.l.toString() : "-") + (void 0 !== this.b ? this.b.toString() : "-"), f, g, this.g, this.c, this.l, this.b]), n = c.add(this.f[0], m, m, this.Dh.bind(this, d), n), this.s = n.image, this.va = [n.offsetX, n.offsetY], c = n.image.width, this.B = e ? n.Ng : this.s;
        this.N = [m / 2, m / 2];
        this.ya = [m, m];
        this.R = [c, c];
        ti.call(this, {
            opacity: 1,
            rotateWithView: void 0 !== a.rotateWithView ? a.rotateWithView : !1,
            rotation: void 0 !== a.rotation ? a.rotation : 0,
            scale: 1,
            snapToPixel: void 0 !==
            a.snapToPixel ? a.snapToPixel : !0
        })
    }

    y(jx, ti);
    l = jx.prototype;
    l.Tb = function () {
        return this.N
    };
    l.zn = function () {
        return this.l
    };
    l.An = function () {
        return this.o
    };
    l.ke = function () {
        return this.B
    };
    l.ec = function () {
        return this.s
    };
    l.fd = function () {
        return this.R
    };
    l.od = function () {
        return 2
    };
    l.Fa = function () {
        return this.va
    };
    l.Bn = function () {
        return this.b
    };
    l.Cn = function () {
        return this.g
    };
    l.qk = function () {
        return this.c
    };
    l.Bb = function () {
        return this.ya
    };
    l.Dn = function () {
        return this.a
    };
    l.kf = pa;
    l.load = pa;
    l.Tf = pa;
    l.Dh = function (a, c, d, e) {
        var f;
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(d, e);
        c.beginPath();
        this.c !== this.g && (this.b *= 2);
        for (d = 0; d <= this.b; d++)e = 2 * d * Math.PI / this.b - Math.PI / 2 + this.l, f = 0 === d % 2 ? this.g : this.c, c.lineTo(a.size / 2 + f * Math.cos(e), a.size / 2 + f * Math.sin(e));
        this.o && (c.fillStyle = Je(this.o.b), c.fill());
        this.a && (c.strokeStyle = a.strokeStyle, c.lineWidth = a.wd, a.lineDash && c.setLineDash(a.lineDash), c.lineCap = a.lineCap, c.lineJoin = a.lineJoin, c.miterLimit = a.miterLimit, c.stroke());
        c.closePath()
    };
    l.Ch = function (a, c, d, e) {
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(d, e);
        c.beginPath();
        this.c !== this.g && (this.b *= 2);
        var f;
        for (d = 0; d <= this.b; d++)f = 2 * d * Math.PI / this.b - Math.PI / 2 + this.l, e = 0 === d % 2 ? this.g : this.c, c.lineTo(a.size / 2 + e * Math.cos(f), a.size / 2 + e * Math.sin(f));
        c.fillStyle = Wj;
        c.fill();
        this.a && (c.strokeStyle = a.strokeStyle, c.lineWidth = a.wd, a.lineDash && c.setLineDash(a.lineDash), c.stroke());
        c.closePath()
    };
    t("ol.animation.bounce", function (a) {
        var c = a.resolution, d = a.start ? a.start : Date.now(), e = void 0 !== a.duration ? a.duration : 1E3, f = a.easing ? a.easing : me;
        return function (a, h) {
            if (h.time < d)return h.animate = !0, h.viewHints[0] += 1, !0;
            if (h.time < d + e) {
                var k = f((h.time - d) / e), m = c - h.viewState.resolution;
                h.animate = !0;
                h.viewState.resolution += k * m;
                h.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }, OPENLAYERS);
    t("ol.animation.pan", ne, OPENLAYERS);
    t("ol.animation.rotate", oe, OPENLAYERS);
    t("ol.animation.zoom", pe, OPENLAYERS);
    t("ol.Attribution", ue, OPENLAYERS);
    ue.prototype.getHTML = ue.prototype.g;
    ve.prototype.element = ve.prototype.element;
    t("ol.Collection", we, OPENLAYERS);
    we.prototype.clear = we.prototype.clear;
    we.prototype.extend = we.prototype.lf;
    we.prototype.forEach = we.prototype.forEach;
    we.prototype.getArray = we.prototype.Cl;
    we.prototype.item = we.prototype.item;
    we.prototype.getLength = we.prototype.Zb;
    we.prototype.insertAt = we.prototype.Zd;
    we.prototype.pop = we.prototype.pop;
    we.prototype.push = we.prototype.push;
    we.prototype.remove = we.prototype.remove;
    we.prototype.removeAt = we.prototype.Nf;
    we.prototype.setAt = we.prototype.To;
    t("ol.colorlike.asColorLike", Je, OPENLAYERS);
    t("ol.coordinate.add", Mb, OPENLAYERS);
    t("ol.coordinate.createStringXY", function (a) {
        return function (c) {
            return Ub(c, a)
        }
    }, OPENLAYERS);
    t("ol.coordinate.format", Pb, OPENLAYERS);
    t("ol.coordinate.rotate", Rb, OPENLAYERS);
    t("ol.coordinate.toStringHDMS", function (a, c) {
        return a ? Ob(a[1], "NS", c) + " " + Ob(a[0], "EW", c) : ""
    }, OPENLAYERS);
    t("ol.coordinate.toStringXY", Ub, OPENLAYERS);
    t("ol.DeviceOrientation", ho, OPENLAYERS);
    ho.prototype.getAlpha = ho.prototype.Kj;
    ho.prototype.getBeta = ho.prototype.Nj;
    ho.prototype.getGamma = ho.prototype.Uj;
    ho.prototype.getHeading = ho.prototype.Dl;
    ho.prototype.getTracking = ho.prototype.Vg;
    ho.prototype.setTracking = ho.prototype.mf;
    t("ol.easing.easeIn", ie, OPENLAYERS);
    t("ol.easing.easeOut", je, OPENLAYERS);
    t("ol.easing.inAndOut", ke, OPENLAYERS);
    t("ol.easing.linear", le, OPENLAYERS);
    t("ol.easing.upAndDown", me, OPENLAYERS);
    t("ol.extent.boundingExtent", Vb, OPENLAYERS);
    t("ol.extent.buffer", Yb, OPENLAYERS);
    t("ol.extent.containsCoordinate", ac, OPENLAYERS);
    t("ol.extent.containsExtent", cc, OPENLAYERS);
    t("ol.extent.containsXY", bc, OPENLAYERS);
    t("ol.extent.createEmpty", Wb, OPENLAYERS);
    t("ol.extent.equals", ic, OPENLAYERS);
    t("ol.extent.extend", jc, OPENLAYERS);
    t("ol.extent.getBottomLeft", lc, OPENLAYERS);
    t("ol.extent.getBottomRight", mc, OPENLAYERS);
    t("ol.extent.getCenter", tc, OPENLAYERS);
    t("ol.extent.getHeight", sc, OPENLAYERS);
    t("ol.extent.getIntersection", vc, OPENLAYERS);
    t("ol.extent.getSize", function (a) {
        return [a[2] - a[0], a[3] - a[1]]
    }, OPENLAYERS);
    t("ol.extent.getTopLeft", oc, OPENLAYERS);
    t("ol.extent.getTopRight", nc, OPENLAYERS);
    t("ol.extent.getWidth", rc, OPENLAYERS);
    t("ol.extent.intersects", wc, OPENLAYERS);
    t("ol.extent.isEmpty", qc, OPENLAYERS);
    t("ol.extent.applyTransform", zc, OPENLAYERS);
    t("ol.Feature", zl, OPENLAYERS);
    zl.prototype.clone = zl.prototype.clone;
    zl.prototype.getGeometry = zl.prototype.W;
    zl.prototype.getId = zl.prototype.Wa;
    zl.prototype.getGeometryName = zl.prototype.Wj;
    zl.prototype.getStyle = zl.prototype.Fl;
    zl.prototype.getStyleFunction = zl.prototype.$b;
    zl.prototype.setGeometry = zl.prototype.Ta;
    zl.prototype.setStyle = zl.prototype.nf;
    zl.prototype.setId = zl.prototype.hc;
    zl.prototype.setGeometryName = zl.prototype.zc;
    t("ol.featureloader.tile", Vl, OPENLAYERS);
    t("ol.featureloader.xhr", Wl, OPENLAYERS);
    t("ol.Geolocation", Nu, OPENLAYERS);
    Nu.prototype.getAccuracy = Nu.prototype.Ij;
    Nu.prototype.getAccuracyGeometry = Nu.prototype.Jj;
    Nu.prototype.getAltitude = Nu.prototype.Lj;
    Nu.prototype.getAltitudeAccuracy = Nu.prototype.Mj;
    Nu.prototype.getHeading = Nu.prototype.Hl;
    Nu.prototype.getPosition = Nu.prototype.Il;
    Nu.prototype.getProjection = Nu.prototype.Wg;
    Nu.prototype.getSpeed = Nu.prototype.sk;
    Nu.prototype.getTracking = Nu.prototype.Xg;
    Nu.prototype.getTrackingOptions = Nu.prototype.Hg;
    Nu.prototype.setProjection = Nu.prototype.Yg;
    Nu.prototype.setTracking = Nu.prototype.ae;
    Nu.prototype.setTrackingOptions = Nu.prototype.mi;
    t("ol.Graticule", Tu, OPENLAYERS);
    Tu.prototype.getMap = Tu.prototype.Ll;
    Tu.prototype.getMeridians = Tu.prototype.ek;
    Tu.prototype.getParallels = Tu.prototype.lk;
    Tu.prototype.setMap = Tu.prototype.setMap;
    t("ol.has.DEVICE_PIXEL_RATIO", Yg, OPENLAYERS);
    t("ol.has.CANVAS", $g, OPENLAYERS);
    t("ol.has.DEVICE_ORIENTATION", ah, OPENLAYERS);
    t("ol.has.GEOLOCATION", bh, OPENLAYERS);
    t("ol.has.TOUCH", ch, OPENLAYERS);
    t("ol.has.WEBGL", Tg, OPENLAYERS);
    Yu.prototype.getImage = Yu.prototype.a;
    Zu.prototype.getImage = Zu.prototype.ab;
    t("ol.Kinetic", Ki, OPENLAYERS);
    t("ol.loadingstrategy.all", Xl, OPENLAYERS);
    t("ol.loadingstrategy.bbox", function (a) {
        return [a]
    }, OPENLAYERS);
    t("ol.loadingstrategy.tile", function (a) {
        return function (c, d) {
            var e = gg(a, d), f = bg(a, c, e), g = [], e = [e, 0, 0];
            for (e[1] = f.b; e[1] <= f.a; ++e[1])for (e[2] = f.g; e[2] <= f.f; ++e[2])g.push(a.Ba(e));
            return g
        }
    }, OPENLAYERS);
    t("ol.Map", S, OPENLAYERS);
    S.prototype.addControl = S.prototype.pj;
    S.prototype.addInteraction = S.prototype.qj;
    S.prototype.addLayer = S.prototype.gg;
    S.prototype.addOverlay = S.prototype.hg;
    S.prototype.beforeRender = S.prototype.Va;
    S.prototype.forEachFeatureAtPixel = S.prototype.ed;
    S.prototype.forEachLayerAtPixel = S.prototype.Pl;
    S.prototype.hasFeatureAtPixel = S.prototype.gl;
    S.prototype.getEventCoordinate = S.prototype.Sj;
    S.prototype.getEventPixel = S.prototype.Nd;
    S.prototype.getTarget = S.prototype.pf;
    S.prototype.getTargetElement = S.prototype.tc;
    S.prototype.getCoordinateFromPixel = S.prototype.Ma;
    S.prototype.getControls = S.prototype.Qj;
    S.prototype.getOverlays = S.prototype.jk;
    S.prototype.getOverlayById = S.prototype.ik;
    S.prototype.getInteractions = S.prototype.Xj;
    S.prototype.getLayerGroup = S.prototype.sc;
    S.prototype.getLayers = S.prototype.Zg;
    S.prototype.getPixelFromCoordinate = S.prototype.Da;
    S.prototype.getSize = S.prototype.$a;
    S.prototype.getView = S.prototype.aa;
    S.prototype.getViewport = S.prototype.zk;
    S.prototype.renderSync = S.prototype.Po;
    S.prototype.render = S.prototype.render;
    S.prototype.removeControl = S.prototype.Io;
    S.prototype.removeInteraction = S.prototype.Jo;
    S.prototype.removeLayer = S.prototype.Lo;
    S.prototype.removeOverlay = S.prototype.Mo;
    S.prototype.setLayerGroup = S.prototype.ei;
    S.prototype.setSize = S.prototype.Sf;
    S.prototype.setTarget = S.prototype.$g;
    S.prototype.setView = S.prototype.ep;
    S.prototype.updateSize = S.prototype.Sc;
    Mh.prototype.originalEvent = Mh.prototype.originalEvent;
    Mh.prototype.pixel = Mh.prototype.pixel;
    Mh.prototype.coordinate = Mh.prototype.coordinate;
    Mh.prototype.dragging = Mh.prototype.dragging;
    If.prototype.map = If.prototype.map;
    If.prototype.frameState = If.prototype.frameState;
    ob.prototype.key = ob.prototype.key;
    ob.prototype.oldValue = ob.prototype.oldValue;
    t("ol.Object", pb, OPENLAYERS);
    pb.prototype.get = pb.prototype.get;
    pb.prototype.getKeys = pb.prototype.K;
    pb.prototype.getProperties = pb.prototype.L;
    pb.prototype.set = pb.prototype.set;
    pb.prototype.setProperties = pb.prototype.C;
    pb.prototype.unset = pb.prototype.P;
    t("ol.Observable", mb, OPENLAYERS);
    t("ol.Observable.unByKey", nb, OPENLAYERS);
    mb.prototype.changed = mb.prototype.u;
    mb.prototype.dispatchEvent = mb.prototype.b;
    mb.prototype.getRevision = mb.prototype.H;
    mb.prototype.on = mb.prototype.D;
    mb.prototype.once = mb.prototype.I;
    mb.prototype.un = mb.prototype.G;
    mb.prototype.unByKey = mb.prototype.J;
    t("ol.inherits", y, OPENLAYERS);
    t("ol.Overlay", On, OPENLAYERS);
    On.prototype.getElement = On.prototype.be;
    On.prototype.getId = On.prototype.Wa;
    On.prototype.getMap = On.prototype.ce;
    On.prototype.getOffset = On.prototype.Fg;
    On.prototype.getPosition = On.prototype.ah;
    On.prototype.getPositioning = On.prototype.Gg;
    On.prototype.setElement = On.prototype.ai;
    On.prototype.setMap = On.prototype.setMap;
    On.prototype.setOffset = On.prototype.gi;
    On.prototype.setPosition = On.prototype.qf;
    On.prototype.setPositioning = On.prototype.ji;
    t("ol.render.toContext", function (a, c) {
        var d = a.canvas, e = c ? c : {}, f = e.pixelRatio || Yg;
        if (e = e.size)d.width = e[0] * f, d.height = e[1] * f, d.style.width = e[0] + "px", d.style.height = e[1] + "px";
        d = [0, 0, d.width, d.height];
        e = hi(hd(), 0, 0, f, f, 0, 0, 0);
        return new qk(a, f, d, e, 0)
    }, OPENLAYERS);
    t("ol.size.toSize", Uf, OPENLAYERS);
    Qf.prototype.getTileCoord = Qf.prototype.i;
    Bl.prototype.getFormat = Bl.prototype.Ql;
    Bl.prototype.setFeatures = Bl.prototype.bi;
    Bl.prototype.setProjection = Bl.prototype.rf;
    Bl.prototype.setLoader = Bl.prototype.fi;
    t("ol.View", be, OPENLAYERS);
    be.prototype.constrainCenter = be.prototype.Kd;
    be.prototype.constrainResolution = be.prototype.constrainResolution;
    be.prototype.constrainRotation = be.prototype.constrainRotation;
    be.prototype.getCenter = be.prototype.bb;
    be.prototype.calculateExtent = be.prototype.Fc;
    be.prototype.getProjection = be.prototype.Rl;
    be.prototype.getResolution = be.prototype.$;
    be.prototype.getResolutions = be.prototype.Sl;
    be.prototype.getRotation = be.prototype.Ka;
    be.prototype.getZoom = be.prototype.Bk;
    be.prototype.fit = be.prototype.Ze;
    be.prototype.centerOn = be.prototype.Aj;
    be.prototype.rotate = be.prototype.rotate;
    be.prototype.setCenter = be.prototype.jb;
    be.prototype.setResolution = be.prototype.Qb;
    be.prototype.setRotation = be.prototype.de;
    be.prototype.setZoom = be.prototype.hp;
    t("ol.xml.getAllTextContent", El, OPENLAYERS);
    t("ol.xml.parse", Il, OPENLAYERS);
    Xm.prototype.getGL = Xm.prototype.Un;
    Xm.prototype.useProgram = Xm.prototype.re;
    t("ol.tilegrid.TileGrid", Yf, OPENLAYERS);
    Yf.prototype.getMaxZoom = Yf.prototype.Dg;
    Yf.prototype.getMinZoom = Yf.prototype.Eg;
    Yf.prototype.getOrigin = Yf.prototype.Fa;
    Yf.prototype.getResolution = Yf.prototype.$;
    Yf.prototype.getResolutions = Yf.prototype.Fh;
    Yf.prototype.getTileCoordExtent = Yf.prototype.Ba;
    Yf.prototype.getTileCoordForCoordAndResolution = Yf.prototype.Td;
    Yf.prototype.getTileCoordForCoordAndZ = Yf.prototype.kd;
    Yf.prototype.getTileSize = Yf.prototype.Ha;
    t("ol.tilegrid.createXYZ", kg, OPENLAYERS);
    t("ol.tilegrid.WMTS", ax, OPENLAYERS);
    ax.prototype.getMatrixIds = ax.prototype.j;
    t("ol.tilegrid.WMTS.createFromCapabilitiesMatrixSet", bx, OPENLAYERS);
    t("ol.style.AtlasManager", fx, OPENLAYERS);
    t("ol.style.Circle", ik, OPENLAYERS);
    ik.prototype.getFill = ik.prototype.vn;
    ik.prototype.getImage = ik.prototype.ec;
    ik.prototype.getRadius = ik.prototype.wn;
    ik.prototype.getStroke = ik.prototype.xn;
    t("ol.style.Fill", ak, OPENLAYERS);
    ak.prototype.getColor = ak.prototype.g;
    ak.prototype.setColor = ak.prototype.f;
    t("ol.style.Icon", ui, OPENLAYERS);
    ui.prototype.getAnchor = ui.prototype.Tb;
    ui.prototype.getImage = ui.prototype.ec;
    ui.prototype.getOrigin = ui.prototype.Fa;
    ui.prototype.getSrc = ui.prototype.yn;
    ui.prototype.getSize = ui.prototype.Bb;
    ui.prototype.load = ui.prototype.load;
    t("ol.style.Image", ti, OPENLAYERS);
    ti.prototype.getOpacity = ti.prototype.le;
    ti.prototype.getRotateWithView = ti.prototype.Rd;
    ti.prototype.getRotation = ti.prototype.me;
    ti.prototype.getScale = ti.prototype.ne;
    ti.prototype.getSnapToPixel = ti.prototype.Sd;
    ti.prototype.setOpacity = ti.prototype.oe;
    ti.prototype.setRotation = ti.prototype.pe;
    ti.prototype.setScale = ti.prototype.qe;
    t("ol.style.RegularShape", jx, OPENLAYERS);
    jx.prototype.getAnchor = jx.prototype.Tb;
    jx.prototype.getAngle = jx.prototype.zn;
    jx.prototype.getFill = jx.prototype.An;
    jx.prototype.getImage = jx.prototype.ec;
    jx.prototype.getOrigin = jx.prototype.Fa;
    jx.prototype.getPoints = jx.prototype.Bn;
    jx.prototype.getRadius = jx.prototype.Cn;
    jx.prototype.getRadius2 = jx.prototype.qk;
    jx.prototype.getSize = jx.prototype.Bb;
    jx.prototype.getStroke = jx.prototype.Dn;
    t("ol.style.Stroke", gk, OPENLAYERS);
    gk.prototype.getColor = gk.prototype.En;
    gk.prototype.getLineCap = gk.prototype.$j;
    gk.prototype.getLineDash = gk.prototype.Fn;
    gk.prototype.getLineJoin = gk.prototype.ak;
    gk.prototype.getMiterLimit = gk.prototype.fk;
    gk.prototype.getWidth = gk.prototype.Gn;
    gk.prototype.setColor = gk.prototype.Hn;
    gk.prototype.setLineCap = gk.prototype.Zo;
    gk.prototype.setLineDash = gk.prototype.In;
    gk.prototype.setLineJoin = gk.prototype.$o;
    gk.prototype.setMiterLimit = gk.prototype.ap;
    gk.prototype.setWidth = gk.prototype.fp;
    t("ol.style.Style", jk, OPENLAYERS);
    jk.prototype.getGeometry = jk.prototype.W;
    jk.prototype.getGeometryFunction = jk.prototype.Vj;
    jk.prototype.getFill = jk.prototype.Jn;
    jk.prototype.getImage = jk.prototype.Kn;
    jk.prototype.getStroke = jk.prototype.Ln;
    jk.prototype.getText = jk.prototype.Ea;
    jk.prototype.getZIndex = jk.prototype.Mn;
    jk.prototype.setGeometry = jk.prototype.Eh;
    jk.prototype.setZIndex = jk.prototype.Nn;
    t("ol.style.Text", zq, OPENLAYERS);
    zq.prototype.getFont = zq.prototype.Tj;
    zq.prototype.getOffsetX = zq.prototype.gk;
    zq.prototype.getOffsetY = zq.prototype.hk;
    zq.prototype.getFill = zq.prototype.On;
    zq.prototype.getRotation = zq.prototype.Pn;
    zq.prototype.getScale = zq.prototype.Qn;
    zq.prototype.getStroke = zq.prototype.Rn;
    zq.prototype.getText = zq.prototype.Ea;
    zq.prototype.getTextAlign = zq.prototype.uk;
    zq.prototype.getTextBaseline = zq.prototype.vk;
    zq.prototype.setFont = zq.prototype.Wo;
    zq.prototype.setOffsetX = zq.prototype.hi;
    zq.prototype.setOffsetY = zq.prototype.ii;
    zq.prototype.setFill = zq.prototype.Vo;
    zq.prototype.setRotation = zq.prototype.Sn;
    zq.prototype.setScale = zq.prototype.Tn;
    zq.prototype.setStroke = zq.prototype.bp;
    zq.prototype.setText = zq.prototype.ki;
    zq.prototype.setTextAlign = zq.prototype.li;
    zq.prototype.setTextBaseline = zq.prototype.cp;
    t("ol.Sphere", Cc, OPENLAYERS);
    Cc.prototype.geodesicArea = Cc.prototype.a;
    Cc.prototype.haversineDistance = Cc.prototype.b;
    t("ol.source.BingMaps", iw, OPENLAYERS);
    t("ol.source.BingMaps.TOS_ATTRIBUTION", jw, OPENLAYERS);
    t("ol.source.CartoDB", lw, OPENLAYERS);
    lw.prototype.getConfig = lw.prototype.Pj;
    lw.prototype.updateConfig = lw.prototype.op;
    lw.prototype.setConfig = lw.prototype.Uo;
    t("ol.source.Cluster", Y, OPENLAYERS);
    Y.prototype.getSource = Y.prototype.xa;
    t("ol.source.ImageArcGISRest", qw, OPENLAYERS);
    qw.prototype.getParams = qw.prototype.Mm;
    qw.prototype.getImageLoadFunction = qw.prototype.Lm;
    qw.prototype.getUrl = qw.prototype.Nm;
    qw.prototype.setImageLoadFunction = qw.prototype.Om;
    qw.prototype.setUrl = qw.prototype.Pm;
    qw.prototype.updateParams = qw.prototype.Qm;
    t("ol.source.ImageCanvas", yl, OPENLAYERS);
    t("ol.source.ImageMapGuide", rw, OPENLAYERS);
    rw.prototype.getParams = rw.prototype.Sm;
    rw.prototype.getImageLoadFunction = rw.prototype.Rm;
    rw.prototype.updateParams = rw.prototype.Um;
    rw.prototype.setImageLoadFunction = rw.prototype.Tm;
    t("ol.source.Image", rl, OPENLAYERS);
    tl.prototype.image = tl.prototype.image;
    t("ol.source.ImageStatic", sw, OPENLAYERS);
    t("ol.source.ImageVector", om, OPENLAYERS);
    om.prototype.getSource = om.prototype.Vm;
    om.prototype.getStyle = om.prototype.Wm;
    om.prototype.getStyleFunction = om.prototype.Xm;
    om.prototype.setStyle = om.prototype.sh;
    t("ol.source.ImageWMS", tw, OPENLAYERS);
    tw.prototype.getGetFeatureInfoUrl = tw.prototype.$m;
    tw.prototype.getParams = tw.prototype.bn;
    tw.prototype.getImageLoadFunction = tw.prototype.an;
    tw.prototype.getUrl = tw.prototype.cn;
    tw.prototype.setImageLoadFunction = tw.prototype.dn;
    tw.prototype.setUrl = tw.prototype.en;
    tw.prototype.updateParams = tw.prototype.fn;
    t("ol.source.MapQuest", zw, OPENLAYERS);
    zw.prototype.getLayer = zw.prototype.j;
    t("ol.source.OSM", xw, OPENLAYERS);
    t("ol.source.OSM.ATTRIBUTION", yw, OPENLAYERS);
    t("ol.source.Raster", Cw, OPENLAYERS);
    Cw.prototype.setOperation = Cw.prototype.v;
    Hw.prototype.extent = Hw.prototype.extent;
    Hw.prototype.resolution = Hw.prototype.resolution;
    Hw.prototype.data = Hw.prototype.data;
    t("ol.source.Source", Vf, OPENLAYERS);
    Vf.prototype.getAttributions = Vf.prototype.ra;
    Vf.prototype.getLogo = Vf.prototype.qa;
    Vf.prototype.getProjection = Vf.prototype.sa;
    Vf.prototype.getState = Vf.prototype.V;
    Vf.prototype.refresh = Vf.prototype.pa;
    Vf.prototype.setAttributions = Vf.prototype.ka;
    t("ol.source.Stamen", Mw, OPENLAYERS);
    t("ol.source.TileArcGISRest", Ow, OPENLAYERS);
    Ow.prototype.getParams = Ow.prototype.v;
    Ow.prototype.updateParams = Ow.prototype.B;
    t("ol.source.TileDebug", Qw, OPENLAYERS);
    t("ol.source.TileImage", X, OPENLAYERS);
    X.prototype.setRenderReprojectionEdges = X.prototype.lb;
    X.prototype.setTileGridForProjection = X.prototype.mb;
    t("ol.source.TileJSON", Rw, OPENLAYERS);
    Rw.prototype.getTileJSON = Rw.prototype.wk;
    t("ol.source.Tile", lg, OPENLAYERS);
    lg.prototype.getTileGrid = lg.prototype.Ga;
    pg.prototype.tile = pg.prototype.tile;
    t("ol.source.TileUTFGrid", Sw, OPENLAYERS);
    Sw.prototype.getTemplate = Sw.prototype.tk;
    Sw.prototype.forDataAtCoordinateAndResolution = Sw.prototype.Ej;
    t("ol.source.TileWMS", Ww, OPENLAYERS);
    Ww.prototype.getGetFeatureInfoUrl = Ww.prototype.nn;
    Ww.prototype.getParams = Ww.prototype.pn;
    Ww.prototype.updateParams = Ww.prototype.qn;
    zm.prototype.getTileLoadFunction = zm.prototype.Xa;
    zm.prototype.getTileUrlFunction = zm.prototype.Ya;
    zm.prototype.getUrls = zm.prototype.Za;
    zm.prototype.setTileLoadFunction = zm.prototype.cb;
    zm.prototype.setTileUrlFunction = zm.prototype.La;
    zm.prototype.setUrl = zm.prototype.Na;
    zm.prototype.setUrls = zm.prototype.Ua;
    t("ol.source.Vector", Q, OPENLAYERS);
    Q.prototype.addFeature = Q.prototype.qb;
    Q.prototype.addFeatures = Q.prototype.Ec;
    Q.prototype.clear = Q.prototype.clear;
    Q.prototype.forEachFeature = Q.prototype.sg;
    Q.prototype.forEachFeatureInExtent = Q.prototype.tb;
    Q.prototype.forEachFeatureIntersectingExtent = Q.prototype.tg;
    Q.prototype.getFeaturesCollection = Q.prototype.Ag;
    Q.prototype.getFeatures = Q.prototype.je;
    Q.prototype.getFeaturesAtCoordinate = Q.prototype.zg;
    Q.prototype.getFeaturesInExtent = Q.prototype.af;
    Q.prototype.getClosestFeatureToCoordinate = Q.prototype.vg;
    Q.prototype.getExtent = Q.prototype.O;
    Q.prototype.getFeatureById = Q.prototype.yg;
    Q.prototype.getFormat = Q.prototype.xh;
    Q.prototype.getUrl = Q.prototype.yh;
    Q.prototype.removeFeature = Q.prototype.kb;
    lm.prototype.feature = lm.prototype.feature;
    t("ol.source.VectorTile", Am, OPENLAYERS);
    t("ol.source.WMTS", Z, OPENLAYERS);
    Z.prototype.getDimensions = Z.prototype.Rj;
    Z.prototype.getFormat = Z.prototype.rn;
    Z.prototype.getLayer = Z.prototype.sn;
    Z.prototype.getMatrixSet = Z.prototype.dk;
    Z.prototype.getRequestEncoding = Z.prototype.rk;
    Z.prototype.getStyle = Z.prototype.tn;
    Z.prototype.getVersion = Z.prototype.yk;
    Z.prototype.updateDimensions = Z.prototype.pp;
    t("ol.source.WMTS.optionsFromCapabilities", function (a, c) {
        var d = zb(a.Contents.Layer, function (a) {
            return a.Identifier == c.layer
        }), e = a.Contents.TileMatrixSet, f, g;
        f = 1 < d.TileMatrixSetLink.length ? "projection" in c ? Db(d.TileMatrixSetLink, function (a) {
            return zb(e, function (c) {
                    return c.Identifier == a.TileMatrixSet
                }).SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3") == c.projection
        }) : Db(d.TileMatrixSetLink, function (a) {
            return a.TileMatrixSet == c.matrixSet
        }) : 0;
        0 > f && (f = 0);
        g = d.TileMatrixSetLink[f].TileMatrixSet;
        var h = d.Format[0];
        "format" in c && (h = c.format);
        f = Db(d.Style, function (a) {
            return "style" in c ? a.Title == c.style : a.isDefault
        });
        0 > f && (f = 0);
        f = d.Style[f].Identifier;
        var k = {};
        "Dimension" in d && d.Dimension.forEach(function (a) {
            var c = a.Identifier, d = a.Default;
            void 0 === d && (d = a.Value[0]);
            k[c] = d
        });
        var m = zb(a.Contents.TileMatrixSet, function (a) {
            return a.Identifier == g
        }), n;
        n = "projection" in c ? Ic(c.projection) : Ic(m.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
        var p = d.WGS84BoundingBox, q, r;
        void 0 !== p &&
        (r = Ic("EPSG:4326").O(), r = p[0] == r[0] && p[2] == r[2], q = cd(p, "EPSG:4326", n), (p = n.O()) && (cc(p, q) || (q = void 0)));
        var m = bx(m, q), u = [];
        q = c.requestEncoding;
        q = void 0 !== q ? q : "";
        if (a.hasOwnProperty("OperationsMetadata") && a.OperationsMetadata.hasOwnProperty("GetTile") && 0 !== q.indexOf("REST"))for (var d = a.OperationsMetadata.GetTile.DCP.HTTP.Get, p = 0, v = d.length; p < v; ++p) {
            var x = zb(d[p].Constraint, function (a) {
                return "GetEncoding" == a.name
            }).AllowedValues.Value;
            0 < x.length && ub(x, "KVP") && (q = "KVP", u.push(d[p].href))
        } else q = "REST",
            d.ResourceURL.forEach(function (a) {
                "tile" == a.resourceType && (h = a.format, u.push(a.template))
            });
        return {
            urls: u,
            layer: c.layer,
            matrixSet: g,
            format: h,
            projection: n,
            requestEncoding: q,
            tileGrid: m,
            style: f,
            dimensions: k,
            wrapX: r
        }
    }, OPENLAYERS);
    t("ol.source.XYZ", kw, OPENLAYERS);
    t("ol.source.Zoomify", dx, OPENLAYERS);
    ci.prototype.vectorContext = ci.prototype.vectorContext;
    ci.prototype.frameState = ci.prototype.frameState;
    ci.prototype.context = ci.prototype.context;
    ci.prototype.glContext = ci.prototype.glContext;
    Zk.prototype.get = Zk.prototype.get;
    Zk.prototype.getExtent = Zk.prototype.O;
    Zk.prototype.getGeometry = Zk.prototype.W;
    Zk.prototype.getProperties = Zk.prototype.Hm;
    Zk.prototype.getType = Zk.prototype.X;
    t("ol.render.VectorContext", bi, OPENLAYERS);
    tn.prototype.setStyle = tn.prototype.md;
    tn.prototype.drawGeometry = tn.prototype.nc;
    tn.prototype.drawFeature = tn.prototype.Ue;
    qk.prototype.drawCircle = qk.prototype.Md;
    qk.prototype.setStyle = qk.prototype.md;
    qk.prototype.drawGeometry = qk.prototype.nc;
    qk.prototype.drawFeature = qk.prototype.Ue;
    t("ol.proj.common.add", Tj, OPENLAYERS);
    t("ol.proj.METERS_PER_UNIT", Ec, OPENLAYERS);
    t("ol.proj.Projection", Fc, OPENLAYERS);
    Fc.prototype.getCode = Fc.prototype.Oj;
    Fc.prototype.getExtent = Fc.prototype.O;
    Fc.prototype.getUnits = Fc.prototype.vb;
    Fc.prototype.getMetersPerUnit = Fc.prototype.Vb;
    Fc.prototype.getWorldExtent = Fc.prototype.Ak;
    Fc.prototype.isGlobal = Fc.prototype.ll;
    Fc.prototype.setGlobal = Fc.prototype.Yo;
    Fc.prototype.setExtent = Fc.prototype.Gm;
    Fc.prototype.setWorldExtent = Fc.prototype.gp;
    Fc.prototype.setGetPointResolution = Fc.prototype.Xo;
    Fc.prototype.getPointResolution = Fc.prototype.getPointResolution;
    t("ol.proj.setProj4", function (a) {
        Hc = a
    }, OPENLAYERS);
    t("ol.proj.addEquivalentProjections", Jc, OPENLAYERS);
    t("ol.proj.addProjection", Wc, OPENLAYERS);
    t("ol.proj.addCoordinateTransforms", Kc, OPENLAYERS);
    t("ol.proj.fromLonLat", function (a, c) {
        return bd(a, "EPSG:4326", void 0 !== c ? c : "EPSG:3857")
    }, OPENLAYERS);
    t("ol.proj.toLonLat", function (a, c) {
        return bd(a, void 0 !== c ? c : "EPSG:3857", "EPSG:4326")
    }, OPENLAYERS);
    t("ol.proj.get", Ic, OPENLAYERS);
    t("ol.proj.equivalent", Zc, OPENLAYERS);
    t("ol.proj.getTransform", $c, OPENLAYERS);
    t("ol.proj.transform", bd, OPENLAYERS);
    t("ol.proj.transformExtent", cd, OPENLAYERS);
    t("ol.layer.Heatmap", W, OPENLAYERS);
    W.prototype.getBlur = W.prototype.ug;
    W.prototype.getGradient = W.prototype.Bg;
    W.prototype.getRadius = W.prototype.kh;
    W.prototype.setBlur = W.prototype.Zh;
    W.prototype.setGradient = W.prototype.di;
    W.prototype.setRadius = W.prototype.lh;
    t("ol.layer.Image", Uj, OPENLAYERS);
    Uj.prototype.getSource = Uj.prototype.da;
    t("ol.layer.Layer", di, OPENLAYERS);
    di.prototype.getSource = di.prototype.da;
    di.prototype.setMap = di.prototype.setMap;
    di.prototype.setSource = di.prototype.Ac;
    t("ol.layer.Base", $h, OPENLAYERS);
    $h.prototype.getExtent = $h.prototype.O;
    $h.prototype.getMaxResolution = $h.prototype.Ib;
    $h.prototype.getMinResolution = $h.prototype.Jb;
    $h.prototype.getOpacity = $h.prototype.Lb;
    $h.prototype.getVisible = $h.prototype.wb;
    $h.prototype.getZIndex = $h.prototype.Mb;
    $h.prototype.setExtent = $h.prototype.ac;
    $h.prototype.setMaxResolution = $h.prototype.ic;
    $h.prototype.setMinResolution = $h.prototype.jc;
    $h.prototype.setOpacity = $h.prototype.bc;
    $h.prototype.setVisible = $h.prototype.cc;
    $h.prototype.setZIndex = $h.prototype.dc;
    t("ol.layer.Group", Kj, OPENLAYERS);
    Kj.prototype.getLayers = Kj.prototype.Oc;
    Kj.prototype.setLayers = Kj.prototype.jh;
    t("ol.layer.Tile", Vj, OPENLAYERS);
    Vj.prototype.getPreload = Vj.prototype.f;
    Vj.prototype.getSource = Vj.prototype.da;
    Vj.prototype.setPreload = Vj.prototype.l;
    Vj.prototype.getUseInterimTilesOnError = Vj.prototype.c;
    Vj.prototype.setUseInterimTilesOnError = Vj.prototype.B;
    t("ol.layer.Vector", H, OPENLAYERS);
    H.prototype.getSource = H.prototype.da;
    H.prototype.getStyle = H.prototype.M;
    H.prototype.getStyleFunction = H.prototype.N;
    H.prototype.setStyle = H.prototype.l;
    t("ol.layer.VectorTile", I, OPENLAYERS);
    I.prototype.getPreload = I.prototype.f;
    I.prototype.getUseInterimTilesOnError = I.prototype.c;
    I.prototype.setPreload = I.prototype.Y;
    I.prototype.setUseInterimTilesOnError = I.prototype.ea;
    t("ol.interaction.DoubleClickZoom", Qi, OPENLAYERS);
    t("ol.interaction.DoubleClickZoom.handleEvent", Ri, OPENLAYERS);
    t("ol.interaction.DragAndDrop", av, OPENLAYERS);
    t("ol.interaction.DragAndDrop.handleEvent", Ac, OPENLAYERS);
    dv.prototype.features = dv.prototype.features;
    dv.prototype.file = dv.prototype.file;
    dv.prototype.projection = dv.prototype.projection;
    oj.prototype.coordinate = oj.prototype.coordinate;
    oj.prototype.mapBrowserEvent = oj.prototype.mapBrowserEvent;
    t("ol.interaction.DragBox", pj, OPENLAYERS);
    pj.prototype.getGeometry = pj.prototype.W;
    t("ol.interaction.DragPan", dj, OPENLAYERS);
    t("ol.interaction.DragRotateAndZoom", fv, OPENLAYERS);
    t("ol.interaction.DragRotate", hj, OPENLAYERS);
    t("ol.interaction.DragZoom", uj, OPENLAYERS);
    jv.prototype.feature = jv.prototype.feature;
    t("ol.interaction.Draw", kv, OPENLAYERS);
    t("ol.interaction.Draw.handleEvent", mv, OPENLAYERS);
    kv.prototype.removeLastPoint = kv.prototype.Ko;
    kv.prototype.finishDrawing = kv.prototype.dd;
    kv.prototype.extend = kv.prototype.lm;
    t("ol.interaction.Draw.createRegularPolygon", function (a, c) {
        return function (d, e) {
            var f = d[0], g = d[1], h = Math.sqrt(Sb(f, g)), k = e ? e : $d(new Ou(f), a);
            ae(k, f, h, c ? c : Math.atan((g[1] - f[1]) / (g[0] - f[0])));
            return k
        }
    }, OPENLAYERS);
    t("ol.interaction.Interaction", Mi, OPENLAYERS);
    Mi.prototype.getActive = Mi.prototype.f;
    Mi.prototype.getMap = Mi.prototype.l;
    Mi.prototype.setActive = Mi.prototype.i;
    t("ol.interaction.defaults", Jj, OPENLAYERS);
    t("ol.interaction.KeyboardPan", vj, OPENLAYERS);
    t("ol.interaction.KeyboardPan.handleEvent", wj, OPENLAYERS);
    t("ol.interaction.KeyboardZoom", xj, OPENLAYERS);
    t("ol.interaction.KeyboardZoom.handleEvent", yj, OPENLAYERS);
    Av.prototype.features = Av.prototype.features;
    Av.prototype.mapBrowserPointerEvent = Av.prototype.mapBrowserPointerEvent;
    t("ol.interaction.Modify", Bv, OPENLAYERS);
    t("ol.interaction.Modify.handleEvent", Ev, OPENLAYERS);
    Bv.prototype.removePoint = Bv.prototype.Wh;
    t("ol.interaction.MouseWheelZoom", zj, OPENLAYERS);
    t("ol.interaction.MouseWheelZoom.handleEvent", Aj, OPENLAYERS);
    zj.prototype.setMouseAnchor = zj.prototype.N;
    t("ol.interaction.PinchRotate", Bj, OPENLAYERS);
    t("ol.interaction.PinchZoom", Fj, OPENLAYERS);
    t("ol.interaction.Pointer", aj, OPENLAYERS);
    t("ol.interaction.Pointer.handleEvent", bj, OPENLAYERS);
    Ov.prototype.selected = Ov.prototype.selected;
    Ov.prototype.deselected = Ov.prototype.deselected;
    Ov.prototype.mapBrowserEvent = Ov.prototype.mapBrowserEvent;
    t("ol.interaction.Select", Pv, OPENLAYERS);
    Pv.prototype.getFeatures = Pv.prototype.vm;
    Pv.prototype.getLayer = Pv.prototype.wm;
    t("ol.interaction.Select.handleEvent", Qv, OPENLAYERS);
    Pv.prototype.setMap = Pv.prototype.setMap;
    t("ol.interaction.Snap", Sv, OPENLAYERS);
    Sv.prototype.addFeature = Sv.prototype.qb;
    Sv.prototype.removeFeature = Sv.prototype.kb;
    Wv.prototype.features = Wv.prototype.features;
    Wv.prototype.coordinate = Wv.prototype.coordinate;
    t("ol.interaction.Translate", Xv, OPENLAYERS);
    t("ol.geom.Circle", Ou, OPENLAYERS);
    Ou.prototype.clone = Ou.prototype.clone;
    Ou.prototype.getCenter = Ou.prototype.ld;
    Ou.prototype.getRadius = Ou.prototype.sf;
    Ou.prototype.getType = Ou.prototype.X;
    Ou.prototype.intersectsExtent = Ou.prototype.Ia;
    Ou.prototype.setCenter = Ou.prototype.dm;
    Ou.prototype.setCenterAndRadius = Ou.prototype.Rf;
    Ou.prototype.setRadius = Ou.prototype.em;
    Ou.prototype.transform = Ou.prototype.hb;
    t("ol.geom.Geometry", dd, OPENLAYERS);
    dd.prototype.getClosestPoint = dd.prototype.ub;
    dd.prototype.getExtent = dd.prototype.O;
    dd.prototype.rotate = dd.prototype.rotate;
    dd.prototype.simplify = dd.prototype.yb;
    dd.prototype.transform = dd.prototype.hb;
    t("ol.geom.GeometryCollection", Do, OPENLAYERS);
    Do.prototype.clone = Do.prototype.clone;
    Do.prototype.getGeometries = Do.prototype.bf;
    Do.prototype.getType = Do.prototype.X;
    Do.prototype.intersectsExtent = Do.prototype.Ia;
    Do.prototype.setGeometries = Do.prototype.ci;
    Do.prototype.applyTransform = Do.prototype.mc;
    Do.prototype.translate = Do.prototype.Nc;
    t("ol.geom.LinearRing", Kd, OPENLAYERS);
    Kd.prototype.clone = Kd.prototype.clone;
    Kd.prototype.getArea = Kd.prototype.hm;
    Kd.prototype.getCoordinates = Kd.prototype.Z;
    Kd.prototype.getType = Kd.prototype.X;
    Kd.prototype.setCoordinates = Kd.prototype.ma;
    t("ol.geom.LineString", T, OPENLAYERS);
    T.prototype.appendCoordinate = T.prototype.rj;
    T.prototype.clone = T.prototype.clone;
    T.prototype.forEachSegment = T.prototype.Hj;
    T.prototype.getCoordinateAtM = T.prototype.fm;
    T.prototype.getCoordinates = T.prototype.Z;
    T.prototype.getCoordinateAt = T.prototype.wg;
    T.prototype.getLength = T.prototype.gm;
    T.prototype.getType = T.prototype.X;
    T.prototype.intersectsExtent = T.prototype.Ia;
    T.prototype.setCoordinates = T.prototype.ma;
    t("ol.geom.MultiLineString", U, OPENLAYERS);
    U.prototype.appendLineString = U.prototype.sj;
    U.prototype.clone = U.prototype.clone;
    U.prototype.getCoordinateAtM = U.prototype.im;
    U.prototype.getCoordinates = U.prototype.Z;
    U.prototype.getLineString = U.prototype.bk;
    U.prototype.getLineStrings = U.prototype.gd;
    U.prototype.getType = U.prototype.X;
    U.prototype.intersectsExtent = U.prototype.Ia;
    U.prototype.setCoordinates = U.prototype.ma;
    t("ol.geom.MultiPoint", so, OPENLAYERS);
    so.prototype.appendPoint = so.prototype.uj;
    so.prototype.clone = so.prototype.clone;
    so.prototype.getCoordinates = so.prototype.Z;
    so.prototype.getPoint = so.prototype.mk;
    so.prototype.getPoints = so.prototype.ee;
    so.prototype.getType = so.prototype.X;
    so.prototype.intersectsExtent = so.prototype.Ia;
    so.prototype.setCoordinates = so.prototype.ma;
    t("ol.geom.MultiPolygon", to, OPENLAYERS);
    to.prototype.appendPolygon = to.prototype.vj;
    to.prototype.clone = to.prototype.clone;
    to.prototype.getArea = to.prototype.jm;
    to.prototype.getCoordinates = to.prototype.Z;
    to.prototype.getInteriorPoints = to.prototype.Zj;
    to.prototype.getPolygon = to.prototype.pk;
    to.prototype.getPolygons = to.prototype.Qd;
    to.prototype.getType = to.prototype.X;
    to.prototype.intersectsExtent = to.prototype.Ia;
    to.prototype.setCoordinates = to.prototype.ma;
    t("ol.geom.Point", D, OPENLAYERS);
    D.prototype.clone = D.prototype.clone;
    D.prototype.getCoordinates = D.prototype.Z;
    D.prototype.getType = D.prototype.X;
    D.prototype.intersectsExtent = D.prototype.Ia;
    D.prototype.setCoordinates = D.prototype.ma;
    t("ol.geom.Polygon", F, OPENLAYERS);
    F.prototype.appendLinearRing = F.prototype.tj;
    F.prototype.clone = F.prototype.clone;
    F.prototype.getArea = F.prototype.km;
    F.prototype.getCoordinates = F.prototype.Z;
    F.prototype.getInteriorPoint = F.prototype.Yj;
    F.prototype.getLinearRingCount = F.prototype.ck;
    F.prototype.getLinearRing = F.prototype.Cg;
    F.prototype.getLinearRings = F.prototype.Pd;
    F.prototype.getType = F.prototype.X;
    F.prototype.intersectsExtent = F.prototype.Ia;
    F.prototype.setCoordinates = F.prototype.ma;
    t("ol.geom.Polygon.circular", Yd, OPENLAYERS);
    t("ol.geom.Polygon.fromExtent", Zd, OPENLAYERS);
    t("ol.geom.Polygon.fromCircle", $d, OPENLAYERS);
    t("ol.geom.SimpleGeometry", sd, OPENLAYERS);
    sd.prototype.getFirstCoordinate = sd.prototype.Fb;
    sd.prototype.getLastCoordinate = sd.prototype.Gb;
    sd.prototype.getLayout = sd.prototype.Hb;
    sd.prototype.applyTransform = sd.prototype.mc;
    sd.prototype.translate = sd.prototype.Nc;
    t("ol.format.EsriJSON", wo, OPENLAYERS);
    wo.prototype.readFeature = wo.prototype.Nb;
    wo.prototype.readFeatures = wo.prototype.Ca;
    wo.prototype.readGeometry = wo.prototype.Qc;
    wo.prototype.readProjection = wo.prototype.Oa;
    wo.prototype.writeGeometry = wo.prototype.Uc;
    wo.prototype.writeGeometryObject = wo.prototype.Ge;
    wo.prototype.writeFeature = wo.prototype.yd;
    wo.prototype.writeFeatureObject = wo.prototype.Tc;
    wo.prototype.writeFeatures = wo.prototype.Sb;
    wo.prototype.writeFeaturesObject = wo.prototype.Ee;
    t("ol.format.Feature", io, OPENLAYERS);
    t("ol.format.GeoJSON", Ho, OPENLAYERS);
    Ho.prototype.readFeature = Ho.prototype.Nb;
    Ho.prototype.readFeatures = Ho.prototype.Ca;
    Ho.prototype.readGeometry = Ho.prototype.Qc;
    Ho.prototype.readProjection = Ho.prototype.Oa;
    Ho.prototype.writeFeature = Ho.prototype.yd;
    Ho.prototype.writeFeatureObject = Ho.prototype.Tc;
    Ho.prototype.writeFeatures = Ho.prototype.Sb;
    Ho.prototype.writeFeaturesObject = Ho.prototype.Ee;
    Ho.prototype.writeGeometry = Ho.prototype.Uc;
    Ho.prototype.writeGeometryObject = Ho.prototype.Ge;
    t("ol.format.GPX", lp, OPENLAYERS);
    lp.prototype.readFeature = lp.prototype.Nb;
    lp.prototype.readFeatures = lp.prototype.Ca;
    lp.prototype.readProjection = lp.prototype.Oa;
    lp.prototype.writeFeatures = lp.prototype.Sb;
    lp.prototype.writeFeaturesNode = lp.prototype.a;
    t("ol.format.IGC", Up, OPENLAYERS);
    Up.prototype.readFeature = Up.prototype.Nb;
    Up.prototype.readFeatures = Up.prototype.Ca;
    Up.prototype.readProjection = Up.prototype.Oa;
    t("ol.format.KML", Aq, OPENLAYERS);
    Aq.prototype.readFeature = Aq.prototype.Nb;
    Aq.prototype.readFeatures = Aq.prototype.Ca;
    Aq.prototype.readName = Aq.prototype.zo;
    Aq.prototype.readNetworkLinks = Aq.prototype.Ao;
    Aq.prototype.readProjection = Aq.prototype.Oa;
    Aq.prototype.writeFeatures = Aq.prototype.Sb;
    Aq.prototype.writeFeaturesNode = Aq.prototype.a;
    t("ol.format.MVT", ps, OPENLAYERS);
    ps.prototype.readFeatures = ps.prototype.Ca;
    ps.prototype.readProjection = ps.prototype.Oa;
    ps.prototype.setLayers = ps.prototype.c;
    t("ol.format.OSMXML", Ls, OPENLAYERS);
    Ls.prototype.readFeatures = Ls.prototype.Ca;
    Ls.prototype.readProjection = Ls.prototype.Oa;
    t("ol.format.Polyline", jt, OPENLAYERS);
    t("ol.format.Polyline.encodeDeltas", kt, OPENLAYERS);
    t("ol.format.Polyline.decodeDeltas", mt, OPENLAYERS);
    t("ol.format.Polyline.encodeFloats", lt, OPENLAYERS);
    t("ol.format.Polyline.decodeFloats", nt, OPENLAYERS);
    jt.prototype.readFeature = jt.prototype.Nb;
    jt.prototype.readFeatures = jt.prototype.Ca;
    jt.prototype.readGeometry = jt.prototype.Qc;
    jt.prototype.readProjection = jt.prototype.Oa;
    jt.prototype.writeGeometry = jt.prototype.Uc;
    t("ol.format.TopoJSON", ot, OPENLAYERS);
    ot.prototype.readFeatures = ot.prototype.Ca;
    ot.prototype.readProjection = ot.prototype.Oa;
    t("ol.format.WFS", vt, OPENLAYERS);
    vt.prototype.readFeatures = vt.prototype.Ca;
    vt.prototype.readTransactionResponse = vt.prototype.o;
    vt.prototype.readFeatureCollectionMetadata = vt.prototype.l;
    vt.prototype.writeGetFeature = vt.prototype.j;
    vt.prototype.writeTransaction = vt.prototype.U;
    vt.prototype.readProjection = vt.prototype.Oa;
    t("ol.format.WKT", Mt, OPENLAYERS);
    Mt.prototype.readFeature = Mt.prototype.Nb;
    Mt.prototype.readFeatures = Mt.prototype.Ca;
    Mt.prototype.readGeometry = Mt.prototype.Qc;
    Mt.prototype.writeFeature = Mt.prototype.yd;
    Mt.prototype.writeFeatures = Mt.prototype.Sb;
    Mt.prototype.writeGeometry = Mt.prototype.Uc;
    t("ol.format.WMSCapabilities", cu, OPENLAYERS);
    cu.prototype.read = cu.prototype.read;
    t("ol.format.WMSGetFeatureInfo", zu, OPENLAYERS);
    zu.prototype.readFeatures = zu.prototype.Ca;
    t("ol.format.WMTSCapabilities", Au, OPENLAYERS);
    Au.prototype.read = Au.prototype.read;
    t("ol.format.ogc.filter.and", rs, OPENLAYERS);
    t("ol.format.ogc.filter.or", function (a, c) {
        return new ys(a, c)
    }, OPENLAYERS);
    t("ol.format.ogc.filter.not", function (a) {
        return new zs(a)
    }, OPENLAYERS);
    t("ol.format.ogc.filter.bbox", ts, OPENLAYERS);
    t("ol.format.ogc.filter.equalTo", function (a, c, d) {
        return new Cs(a, c, d)
    }, OPENLAYERS);
    t("ol.format.ogc.filter.notEqualTo", function (a, c, d) {
        return new Ds(a, c, d)
    }, OPENLAYERS);
    t("ol.format.ogc.filter.lessThan", function (a, c) {
        return new Es(a, c)
    }, OPENLAYERS);
    t("ol.format.ogc.filter.lessThanOrEqualTo", function (a, c) {
        return new Fs(a, c)
    }, OPENLAYERS);
    t("ol.format.ogc.filter.greaterThan", function (a, c) {
        return new Gs(a, c)
    }, OPENLAYERS);
    t("ol.format.ogc.filter.greaterThanOrEqualTo", function (a, c) {
        return new Hs(a, c)
    }, OPENLAYERS);
    t("ol.format.ogc.filter.isNull", function (a) {
        return new Is(a)
    }, OPENLAYERS);
    t("ol.format.ogc.filter.between", function (a, c, d) {
        return new Js(a, c, d)
    }, OPENLAYERS);
    t("ol.format.ogc.filter.like", function (a, c, d, e, f, g) {
        return new Ks(a, c, d, e, f, g)
    }, OPENLAYERS);
    t("ol.format.ogc.filter.Filter", vs, OPENLAYERS);
    t("ol.format.ogc.filter.And", ss, OPENLAYERS);
    t("ol.format.ogc.filter.Or", ys, OPENLAYERS);
    t("ol.format.ogc.filter.Not", zs, OPENLAYERS);
    t("ol.format.ogc.filter.Bbox", us, OPENLAYERS);
    t("ol.format.ogc.filter.Comparison", As, OPENLAYERS);
    t("ol.format.ogc.filter.ComparisonBinary", Bs, OPENLAYERS);
    t("ol.format.ogc.filter.EqualTo", Cs, OPENLAYERS);
    t("ol.format.ogc.filter.NotEqualTo", Ds, OPENLAYERS);
    t("ol.format.ogc.filter.LessThan", Es, OPENLAYERS);
    t("ol.format.ogc.filter.LessThanOrEqualTo", Fs, OPENLAYERS);
    t("ol.format.ogc.filter.GreaterThan", Gs, OPENLAYERS);
    t("ol.format.ogc.filter.GreaterThanOrEqualTo", Hs, OPENLAYERS);
    t("ol.format.ogc.filter.IsNull", Is, OPENLAYERS);
    t("ol.format.ogc.filter.IsBetween", Js, OPENLAYERS);
    t("ol.format.ogc.filter.IsLike", Ks, OPENLAYERS);
    t("ol.format.GML2", bp, OPENLAYERS);
    t("ol.format.GML3", cp, OPENLAYERS);
    cp.prototype.writeGeometryNode = cp.prototype.s;
    cp.prototype.writeFeatures = cp.prototype.Sb;
    cp.prototype.writeFeaturesNode = cp.prototype.a;
    t("ol.format.GML", cp, OPENLAYERS);
    cp.prototype.writeFeatures = cp.prototype.Sb;
    cp.prototype.writeFeaturesNode = cp.prototype.a;
    Po.prototype.readFeatures = Po.prototype.Ca;
    t("ol.events.condition.altKeyOnly", function (a) {
        a = a.originalEvent;
        return a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey
    }, OPENLAYERS);
    t("ol.events.condition.altShiftKeysOnly", Si, OPENLAYERS);
    t("ol.events.condition.always", Ac, OPENLAYERS);
    t("ol.events.condition.click", function (a) {
        return a.type == Qh
    }, OPENLAYERS);
    t("ol.events.condition.never", Bc, OPENLAYERS);
    t("ol.events.condition.pointerMove", Ui, OPENLAYERS);
    t("ol.events.condition.singleClick", Vi, OPENLAYERS);
    t("ol.events.condition.doubleClick", function (a) {
        return a.type == Rh
    }, OPENLAYERS);
    t("ol.events.condition.noModifierKeys", Wi, OPENLAYERS);
    t("ol.events.condition.platformModifierKeyOnly", function (a) {
        a = a.originalEvent;
        return !a.altKey && (Xg ? a.metaKey : a.ctrlKey) && !a.shiftKey
    }, OPENLAYERS);
    t("ol.events.condition.shiftKeyOnly", Xi, OPENLAYERS);
    t("ol.events.condition.targetNotEditable", Yi, OPENLAYERS);
    t("ol.events.condition.mouseOnly", Zi, OPENLAYERS);
    t("ol.events.condition.primaryAction", $i, OPENLAYERS);
    gb.prototype.type = gb.prototype.type;
    gb.prototype.target = gb.prototype.target;
    gb.prototype.preventDefault = gb.prototype.preventDefault;
    gb.prototype.stopPropagation = gb.prototype.stopPropagation;
    t("ol.control.Attribution", qg, OPENLAYERS);
    t("ol.control.Attribution.render", rg, OPENLAYERS);
    qg.prototype.getCollapsible = qg.prototype.Ul;
    qg.prototype.setCollapsible = qg.prototype.Xl;
    qg.prototype.setCollapsed = qg.prototype.Wl;
    qg.prototype.getCollapsed = qg.prototype.Tl;
    t("ol.control.Control", Jf, OPENLAYERS);
    Jf.prototype.getMap = Jf.prototype.i;
    Jf.prototype.setMap = Jf.prototype.setMap;
    Jf.prototype.setTarget = Jf.prototype.c;
    t("ol.control.defaults", wg, OPENLAYERS);
    t("ol.control.FullScreen", Bg, OPENLAYERS);
    t("ol.control.MousePosition", Cg, OPENLAYERS);
    t("ol.control.MousePosition.render", Dg, OPENLAYERS);
    Cg.prototype.getCoordinateFormat = Cg.prototype.xg;
    Cg.prototype.getProjection = Cg.prototype.bh;
    Cg.prototype.setCoordinateFormat = Cg.prototype.$h;
    Cg.prototype.setProjection = Cg.prototype.dh;
    t("ol.control.OverviewMap", Sn, OPENLAYERS);
    t("ol.control.OverviewMap.render", Tn, OPENLAYERS);
    Sn.prototype.getCollapsible = Sn.prototype.$l;
    Sn.prototype.setCollapsible = Sn.prototype.cm;
    Sn.prototype.setCollapsed = Sn.prototype.bm;
    Sn.prototype.getCollapsed = Sn.prototype.Zl;
    Sn.prototype.getOverviewMap = Sn.prototype.kk;
    t("ol.control.Rotate", tg, OPENLAYERS);
    t("ol.control.Rotate.render", ug, OPENLAYERS);
    t("ol.control.ScaleLine", Xn, OPENLAYERS);
    Xn.prototype.getUnits = Xn.prototype.vb;
    t("ol.control.ScaleLine.render", Yn, OPENLAYERS);
    Xn.prototype.setUnits = Xn.prototype.N;
    t("ol.control.Zoom", vg, OPENLAYERS);
    t("ol.control.ZoomSlider", ao, OPENLAYERS);
    t("ol.control.ZoomSlider.render", co, OPENLAYERS);
    t("ol.control.ZoomToExtent", go, OPENLAYERS);
    t("ol.color.asArray", Fe, OPENLAYERS);
    t("ol.color.asString", He, OPENLAYERS);
    ve.prototype.type = ve.prototype.type;
    ve.prototype.target = ve.prototype.target;
    ve.prototype.preventDefault = ve.prototype.preventDefault;
    ve.prototype.stopPropagation = ve.prototype.stopPropagation;
    pb.prototype.changed = pb.prototype.u;
    pb.prototype.dispatchEvent = pb.prototype.b;
    pb.prototype.getRevision = pb.prototype.H;
    pb.prototype.on = pb.prototype.D;
    pb.prototype.once = pb.prototype.I;
    pb.prototype.un = pb.prototype.G;
    pb.prototype.unByKey = pb.prototype.J;
    we.prototype.get = we.prototype.get;
    we.prototype.getKeys = we.prototype.K;
    we.prototype.getProperties = we.prototype.L;
    we.prototype.set = we.prototype.set;
    we.prototype.setProperties = we.prototype.C;
    we.prototype.unset = we.prototype.P;
    we.prototype.changed = we.prototype.u;
    we.prototype.dispatchEvent = we.prototype.b;
    we.prototype.getRevision = we.prototype.H;
    we.prototype.on = we.prototype.D;
    we.prototype.once = we.prototype.I;
    we.prototype.un = we.prototype.G;
    we.prototype.unByKey = we.prototype.J;
    ho.prototype.get = ho.prototype.get;
    ho.prototype.getKeys = ho.prototype.K;
    ho.prototype.getProperties = ho.prototype.L;
    ho.prototype.set = ho.prototype.set;
    ho.prototype.setProperties = ho.prototype.C;
    ho.prototype.unset = ho.prototype.P;
    ho.prototype.changed = ho.prototype.u;
    ho.prototype.dispatchEvent = ho.prototype.b;
    ho.prototype.getRevision = ho.prototype.H;
    ho.prototype.on = ho.prototype.D;
    ho.prototype.once = ho.prototype.I;
    ho.prototype.un = ho.prototype.G;
    ho.prototype.unByKey = ho.prototype.J;
    zl.prototype.get = zl.prototype.get;
    zl.prototype.getKeys = zl.prototype.K;
    zl.prototype.getProperties = zl.prototype.L;
    zl.prototype.set = zl.prototype.set;
    zl.prototype.setProperties = zl.prototype.C;
    zl.prototype.unset = zl.prototype.P;
    zl.prototype.changed = zl.prototype.u;
    zl.prototype.dispatchEvent = zl.prototype.b;
    zl.prototype.getRevision = zl.prototype.H;
    zl.prototype.on = zl.prototype.D;
    zl.prototype.once = zl.prototype.I;
    zl.prototype.un = zl.prototype.G;
    zl.prototype.unByKey = zl.prototype.J;
    Nu.prototype.get = Nu.prototype.get;
    Nu.prototype.getKeys = Nu.prototype.K;
    Nu.prototype.getProperties = Nu.prototype.L;
    Nu.prototype.set = Nu.prototype.set;
    Nu.prototype.setProperties = Nu.prototype.C;
    Nu.prototype.unset = Nu.prototype.P;
    Nu.prototype.changed = Nu.prototype.u;
    Nu.prototype.dispatchEvent = Nu.prototype.b;
    Nu.prototype.getRevision = Nu.prototype.H;
    Nu.prototype.on = Nu.prototype.D;
    Nu.prototype.once = Nu.prototype.I;
    Nu.prototype.un = Nu.prototype.G;
    Nu.prototype.unByKey = Nu.prototype.J;
    Zu.prototype.getTileCoord = Zu.prototype.i;
    S.prototype.get = S.prototype.get;
    S.prototype.getKeys = S.prototype.K;
    S.prototype.getProperties = S.prototype.L;
    S.prototype.set = S.prototype.set;
    S.prototype.setProperties = S.prototype.C;
    S.prototype.unset = S.prototype.P;
    S.prototype.changed = S.prototype.u;
    S.prototype.dispatchEvent = S.prototype.b;
    S.prototype.getRevision = S.prototype.H;
    S.prototype.on = S.prototype.D;
    S.prototype.once = S.prototype.I;
    S.prototype.un = S.prototype.G;
    S.prototype.unByKey = S.prototype.J;
    If.prototype.type = If.prototype.type;
    If.prototype.target = If.prototype.target;
    If.prototype.preventDefault = If.prototype.preventDefault;
    If.prototype.stopPropagation = If.prototype.stopPropagation;
    Mh.prototype.map = Mh.prototype.map;
    Mh.prototype.frameState = Mh.prototype.frameState;
    Mh.prototype.type = Mh.prototype.type;
    Mh.prototype.target = Mh.prototype.target;
    Mh.prototype.preventDefault = Mh.prototype.preventDefault;
    Mh.prototype.stopPropagation = Mh.prototype.stopPropagation;
    Nh.prototype.originalEvent = Nh.prototype.originalEvent;
    Nh.prototype.pixel = Nh.prototype.pixel;
    Nh.prototype.coordinate = Nh.prototype.coordinate;
    Nh.prototype.dragging = Nh.prototype.dragging;
    Nh.prototype.preventDefault = Nh.prototype.preventDefault;
    Nh.prototype.stopPropagation = Nh.prototype.stopPropagation;
    Nh.prototype.map = Nh.prototype.map;
    Nh.prototype.frameState = Nh.prototype.frameState;
    Nh.prototype.type = Nh.prototype.type;
    Nh.prototype.target = Nh.prototype.target;
    ob.prototype.type = ob.prototype.type;
    ob.prototype.target = ob.prototype.target;
    ob.prototype.preventDefault = ob.prototype.preventDefault;
    ob.prototype.stopPropagation = ob.prototype.stopPropagation;
    On.prototype.get = On.prototype.get;
    On.prototype.getKeys = On.prototype.K;
    On.prototype.getProperties = On.prototype.L;
    On.prototype.set = On.prototype.set;
    On.prototype.setProperties = On.prototype.C;
    On.prototype.unset = On.prototype.P;
    On.prototype.changed = On.prototype.u;
    On.prototype.dispatchEvent = On.prototype.b;
    On.prototype.getRevision = On.prototype.H;
    On.prototype.on = On.prototype.D;
    On.prototype.once = On.prototype.I;
    On.prototype.un = On.prototype.G;
    On.prototype.unByKey = On.prototype.J;
    Bl.prototype.getTileCoord = Bl.prototype.i;
    be.prototype.get = be.prototype.get;
    be.prototype.getKeys = be.prototype.K;
    be.prototype.getProperties = be.prototype.L;
    be.prototype.set = be.prototype.set;
    be.prototype.setProperties = be.prototype.C;
    be.prototype.unset = be.prototype.P;
    be.prototype.changed = be.prototype.u;
    be.prototype.dispatchEvent = be.prototype.b;
    be.prototype.getRevision = be.prototype.H;
    be.prototype.on = be.prototype.D;
    be.prototype.once = be.prototype.I;
    be.prototype.un = be.prototype.G;
    be.prototype.unByKey = be.prototype.J;
    ax.prototype.getMaxZoom = ax.prototype.Dg;
    ax.prototype.getMinZoom = ax.prototype.Eg;
    ax.prototype.getOrigin = ax.prototype.Fa;
    ax.prototype.getResolution = ax.prototype.$;
    ax.prototype.getResolutions = ax.prototype.Fh;
    ax.prototype.getTileCoordExtent = ax.prototype.Ba;
    ax.prototype.getTileCoordForCoordAndResolution = ax.prototype.Td;
    ax.prototype.getTileCoordForCoordAndZ = ax.prototype.kd;
    ax.prototype.getTileSize = ax.prototype.Ha;
    ik.prototype.getOpacity = ik.prototype.le;
    ik.prototype.getRotateWithView = ik.prototype.Rd;
    ik.prototype.getRotation = ik.prototype.me;
    ik.prototype.getScale = ik.prototype.ne;
    ik.prototype.getSnapToPixel = ik.prototype.Sd;
    ik.prototype.setOpacity = ik.prototype.oe;
    ik.prototype.setRotation = ik.prototype.pe;
    ik.prototype.setScale = ik.prototype.qe;
    ui.prototype.getOpacity = ui.prototype.le;
    ui.prototype.getRotateWithView = ui.prototype.Rd;
    ui.prototype.getRotation = ui.prototype.me;
    ui.prototype.getScale = ui.prototype.ne;
    ui.prototype.getSnapToPixel = ui.prototype.Sd;
    ui.prototype.setOpacity = ui.prototype.oe;
    ui.prototype.setRotation = ui.prototype.pe;
    ui.prototype.setScale = ui.prototype.qe;
    jx.prototype.getOpacity = jx.prototype.le;
    jx.prototype.getRotateWithView = jx.prototype.Rd;
    jx.prototype.getRotation = jx.prototype.me;
    jx.prototype.getScale = jx.prototype.ne;
    jx.prototype.getSnapToPixel = jx.prototype.Sd;
    jx.prototype.setOpacity = jx.prototype.oe;
    jx.prototype.setRotation = jx.prototype.pe;
    jx.prototype.setScale = jx.prototype.qe;
    Vf.prototype.get = Vf.prototype.get;
    Vf.prototype.getKeys = Vf.prototype.K;
    Vf.prototype.getProperties = Vf.prototype.L;
    Vf.prototype.set = Vf.prototype.set;
    Vf.prototype.setProperties = Vf.prototype.C;
    Vf.prototype.unset = Vf.prototype.P;
    Vf.prototype.changed = Vf.prototype.u;
    Vf.prototype.dispatchEvent = Vf.prototype.b;
    Vf.prototype.getRevision = Vf.prototype.H;
    Vf.prototype.on = Vf.prototype.D;
    Vf.prototype.once = Vf.prototype.I;
    Vf.prototype.un = Vf.prototype.G;
    Vf.prototype.unByKey = Vf.prototype.J;
    lg.prototype.getAttributions = lg.prototype.ra;
    lg.prototype.getLogo = lg.prototype.qa;
    lg.prototype.getProjection = lg.prototype.sa;
    lg.prototype.getState = lg.prototype.V;
    lg.prototype.refresh = lg.prototype.pa;
    lg.prototype.setAttributions = lg.prototype.ka;
    lg.prototype.get = lg.prototype.get;
    lg.prototype.getKeys = lg.prototype.K;
    lg.prototype.getProperties = lg.prototype.L;
    lg.prototype.set = lg.prototype.set;
    lg.prototype.setProperties = lg.prototype.C;
    lg.prototype.unset = lg.prototype.P;
    lg.prototype.changed = lg.prototype.u;
    lg.prototype.dispatchEvent = lg.prototype.b;
    lg.prototype.getRevision = lg.prototype.H;
    lg.prototype.on = lg.prototype.D;
    lg.prototype.once = lg.prototype.I;
    lg.prototype.un = lg.prototype.G;
    lg.prototype.unByKey = lg.prototype.J;
    zm.prototype.getTileGrid = zm.prototype.Ga;
    zm.prototype.refresh = zm.prototype.pa;
    zm.prototype.getAttributions = zm.prototype.ra;
    zm.prototype.getLogo = zm.prototype.qa;
    zm.prototype.getProjection = zm.prototype.sa;
    zm.prototype.getState = zm.prototype.V;
    zm.prototype.setAttributions = zm.prototype.ka;
    zm.prototype.get = zm.prototype.get;
    zm.prototype.getKeys = zm.prototype.K;
    zm.prototype.getProperties = zm.prototype.L;
    zm.prototype.set = zm.prototype.set;
    zm.prototype.setProperties = zm.prototype.C;
    zm.prototype.unset = zm.prototype.P;
    zm.prototype.changed = zm.prototype.u;
    zm.prototype.dispatchEvent = zm.prototype.b;
    zm.prototype.getRevision = zm.prototype.H;
    zm.prototype.on = zm.prototype.D;
    zm.prototype.once = zm.prototype.I;
    zm.prototype.un = zm.prototype.G;
    zm.prototype.unByKey = zm.prototype.J;
    X.prototype.getTileLoadFunction = X.prototype.Xa;
    X.prototype.getTileUrlFunction = X.prototype.Ya;
    X.prototype.getUrls = X.prototype.Za;
    X.prototype.setTileLoadFunction = X.prototype.cb;
    X.prototype.setTileUrlFunction = X.prototype.La;
    X.prototype.setUrl = X.prototype.Na;
    X.prototype.setUrls = X.prototype.Ua;
    X.prototype.getTileGrid = X.prototype.Ga;
    X.prototype.refresh = X.prototype.pa;
    X.prototype.getAttributions = X.prototype.ra;
    X.prototype.getLogo = X.prototype.qa;
    X.prototype.getProjection = X.prototype.sa;
    X.prototype.getState = X.prototype.V;
    X.prototype.setAttributions = X.prototype.ka;
    X.prototype.get = X.prototype.get;
    X.prototype.getKeys = X.prototype.K;
    X.prototype.getProperties = X.prototype.L;
    X.prototype.set = X.prototype.set;
    X.prototype.setProperties = X.prototype.C;
    X.prototype.unset = X.prototype.P;
    X.prototype.changed = X.prototype.u;
    X.prototype.dispatchEvent = X.prototype.b;
    X.prototype.getRevision = X.prototype.H;
    X.prototype.on = X.prototype.D;
    X.prototype.once = X.prototype.I;
    X.prototype.un = X.prototype.G;
    X.prototype.unByKey = X.prototype.J;
    iw.prototype.setRenderReprojectionEdges = iw.prototype.lb;
    iw.prototype.setTileGridForProjection = iw.prototype.mb;
    iw.prototype.getTileLoadFunction = iw.prototype.Xa;
    iw.prototype.getTileUrlFunction = iw.prototype.Ya;
    iw.prototype.getUrls = iw.prototype.Za;
    iw.prototype.setTileLoadFunction = iw.prototype.cb;
    iw.prototype.setTileUrlFunction = iw.prototype.La;
    iw.prototype.setUrl = iw.prototype.Na;
    iw.prototype.setUrls = iw.prototype.Ua;
    iw.prototype.getTileGrid = iw.prototype.Ga;
    iw.prototype.refresh = iw.prototype.pa;
    iw.prototype.getAttributions = iw.prototype.ra;
    iw.prototype.getLogo = iw.prototype.qa;
    iw.prototype.getProjection = iw.prototype.sa;
    iw.prototype.getState = iw.prototype.V;
    iw.prototype.setAttributions = iw.prototype.ka;
    iw.prototype.get = iw.prototype.get;
    iw.prototype.getKeys = iw.prototype.K;
    iw.prototype.getProperties = iw.prototype.L;
    iw.prototype.set = iw.prototype.set;
    iw.prototype.setProperties = iw.prototype.C;
    iw.prototype.unset = iw.prototype.P;
    iw.prototype.changed = iw.prototype.u;
    iw.prototype.dispatchEvent = iw.prototype.b;
    iw.prototype.getRevision = iw.prototype.H;
    iw.prototype.on = iw.prototype.D;
    iw.prototype.once = iw.prototype.I;
    iw.prototype.un = iw.prototype.G;
    iw.prototype.unByKey = iw.prototype.J;
    kw.prototype.setRenderReprojectionEdges = kw.prototype.lb;
    kw.prototype.setTileGridForProjection = kw.prototype.mb;
    kw.prototype.getTileLoadFunction = kw.prototype.Xa;
    kw.prototype.getTileUrlFunction = kw.prototype.Ya;
    kw.prototype.getUrls = kw.prototype.Za;
    kw.prototype.setTileLoadFunction = kw.prototype.cb;
    kw.prototype.setTileUrlFunction = kw.prototype.La;
    kw.prototype.setUrl = kw.prototype.Na;
    kw.prototype.setUrls = kw.prototype.Ua;
    kw.prototype.getTileGrid = kw.prototype.Ga;
    kw.prototype.refresh = kw.prototype.pa;
    kw.prototype.getAttributions = kw.prototype.ra;
    kw.prototype.getLogo = kw.prototype.qa;
    kw.prototype.getProjection = kw.prototype.sa;
    kw.prototype.getState = kw.prototype.V;
    kw.prototype.setAttributions = kw.prototype.ka;
    kw.prototype.get = kw.prototype.get;
    kw.prototype.getKeys = kw.prototype.K;
    kw.prototype.getProperties = kw.prototype.L;
    kw.prototype.set = kw.prototype.set;
    kw.prototype.setProperties = kw.prototype.C;
    kw.prototype.unset = kw.prototype.P;
    kw.prototype.changed = kw.prototype.u;
    kw.prototype.dispatchEvent = kw.prototype.b;
    kw.prototype.getRevision = kw.prototype.H;
    kw.prototype.on = kw.prototype.D;
    kw.prototype.once = kw.prototype.I;
    kw.prototype.un = kw.prototype.G;
    kw.prototype.unByKey = kw.prototype.J;
    lw.prototype.setRenderReprojectionEdges = lw.prototype.lb;
    lw.prototype.setTileGridForProjection = lw.prototype.mb;
    lw.prototype.getTileLoadFunction = lw.prototype.Xa;
    lw.prototype.getTileUrlFunction = lw.prototype.Ya;
    lw.prototype.getUrls = lw.prototype.Za;
    lw.prototype.setTileLoadFunction = lw.prototype.cb;
    lw.prototype.setTileUrlFunction = lw.prototype.La;
    lw.prototype.setUrl = lw.prototype.Na;
    lw.prototype.setUrls = lw.prototype.Ua;
    lw.prototype.getTileGrid = lw.prototype.Ga;
    lw.prototype.refresh = lw.prototype.pa;
    lw.prototype.getAttributions = lw.prototype.ra;
    lw.prototype.getLogo = lw.prototype.qa;
    lw.prototype.getProjection = lw.prototype.sa;
    lw.prototype.getState = lw.prototype.V;
    lw.prototype.setAttributions = lw.prototype.ka;
    lw.prototype.get = lw.prototype.get;
    lw.prototype.getKeys = lw.prototype.K;
    lw.prototype.getProperties = lw.prototype.L;
    lw.prototype.set = lw.prototype.set;
    lw.prototype.setProperties = lw.prototype.C;
    lw.prototype.unset = lw.prototype.P;
    lw.prototype.changed = lw.prototype.u;
    lw.prototype.dispatchEvent = lw.prototype.b;
    lw.prototype.getRevision = lw.prototype.H;
    lw.prototype.on = lw.prototype.D;
    lw.prototype.once = lw.prototype.I;
    lw.prototype.un = lw.prototype.G;
    lw.prototype.unByKey = lw.prototype.J;
    Q.prototype.getAttributions = Q.prototype.ra;
    Q.prototype.getLogo = Q.prototype.qa;
    Q.prototype.getProjection = Q.prototype.sa;
    Q.prototype.getState = Q.prototype.V;
    Q.prototype.refresh = Q.prototype.pa;
    Q.prototype.setAttributions = Q.prototype.ka;
    Q.prototype.get = Q.prototype.get;
    Q.prototype.getKeys = Q.prototype.K;
    Q.prototype.getProperties = Q.prototype.L;
    Q.prototype.set = Q.prototype.set;
    Q.prototype.setProperties = Q.prototype.C;
    Q.prototype.unset = Q.prototype.P;
    Q.prototype.changed = Q.prototype.u;
    Q.prototype.dispatchEvent = Q.prototype.b;
    Q.prototype.getRevision = Q.prototype.H;
    Q.prototype.on = Q.prototype.D;
    Q.prototype.once = Q.prototype.I;
    Q.prototype.un = Q.prototype.G;
    Q.prototype.unByKey = Q.prototype.J;
    Y.prototype.addFeature = Y.prototype.qb;
    Y.prototype.addFeatures = Y.prototype.Ec;
    Y.prototype.clear = Y.prototype.clear;
    Y.prototype.forEachFeature = Y.prototype.sg;
    Y.prototype.forEachFeatureInExtent = Y.prototype.tb;
    Y.prototype.forEachFeatureIntersectingExtent = Y.prototype.tg;
    Y.prototype.getFeaturesCollection = Y.prototype.Ag;
    Y.prototype.getFeatures = Y.prototype.je;
    Y.prototype.getFeaturesAtCoordinate = Y.prototype.zg;
    Y.prototype.getFeaturesInExtent = Y.prototype.af;
    Y.prototype.getClosestFeatureToCoordinate = Y.prototype.vg;
    Y.prototype.getExtent = Y.prototype.O;
    Y.prototype.getFeatureById = Y.prototype.yg;
    Y.prototype.getFormat = Y.prototype.xh;
    Y.prototype.getUrl = Y.prototype.yh;
    Y.prototype.removeFeature = Y.prototype.kb;
    Y.prototype.getAttributions = Y.prototype.ra;
    Y.prototype.getLogo = Y.prototype.qa;
    Y.prototype.getProjection = Y.prototype.sa;
    Y.prototype.getState = Y.prototype.V;
    Y.prototype.refresh = Y.prototype.pa;
    Y.prototype.setAttributions = Y.prototype.ka;
    Y.prototype.get = Y.prototype.get;
    Y.prototype.getKeys = Y.prototype.K;
    Y.prototype.getProperties = Y.prototype.L;
    Y.prototype.set = Y.prototype.set;
    Y.prototype.setProperties = Y.prototype.C;
    Y.prototype.unset = Y.prototype.P;
    Y.prototype.changed = Y.prototype.u;
    Y.prototype.dispatchEvent = Y.prototype.b;
    Y.prototype.getRevision = Y.prototype.H;
    Y.prototype.on = Y.prototype.D;
    Y.prototype.once = Y.prototype.I;
    Y.prototype.un = Y.prototype.G;
    Y.prototype.unByKey = Y.prototype.J;
    rl.prototype.getAttributions = rl.prototype.ra;
    rl.prototype.getLogo = rl.prototype.qa;
    rl.prototype.getProjection = rl.prototype.sa;
    rl.prototype.getState = rl.prototype.V;
    rl.prototype.refresh = rl.prototype.pa;
    rl.prototype.setAttributions = rl.prototype.ka;
    rl.prototype.get = rl.prototype.get;
    rl.prototype.getKeys = rl.prototype.K;
    rl.prototype.getProperties = rl.prototype.L;
    rl.prototype.set = rl.prototype.set;
    rl.prototype.setProperties = rl.prototype.C;
    rl.prototype.unset = rl.prototype.P;
    rl.prototype.changed = rl.prototype.u;
    rl.prototype.dispatchEvent = rl.prototype.b;
    rl.prototype.getRevision = rl.prototype.H;
    rl.prototype.on = rl.prototype.D;
    rl.prototype.once = rl.prototype.I;
    rl.prototype.un = rl.prototype.G;
    rl.prototype.unByKey = rl.prototype.J;
    qw.prototype.getAttributions = qw.prototype.ra;
    qw.prototype.getLogo = qw.prototype.qa;
    qw.prototype.getProjection = qw.prototype.sa;
    qw.prototype.getState = qw.prototype.V;
    qw.prototype.refresh = qw.prototype.pa;
    qw.prototype.setAttributions = qw.prototype.ka;
    qw.prototype.get = qw.prototype.get;
    qw.prototype.getKeys = qw.prototype.K;
    qw.prototype.getProperties = qw.prototype.L;
    qw.prototype.set = qw.prototype.set;
    qw.prototype.setProperties = qw.prototype.C;
    qw.prototype.unset = qw.prototype.P;
    qw.prototype.changed = qw.prototype.u;
    qw.prototype.dispatchEvent = qw.prototype.b;
    qw.prototype.getRevision = qw.prototype.H;
    qw.prototype.on = qw.prototype.D;
    qw.prototype.once = qw.prototype.I;
    qw.prototype.un = qw.prototype.G;
    qw.prototype.unByKey = qw.prototype.J;
    yl.prototype.getAttributions = yl.prototype.ra;
    yl.prototype.getLogo = yl.prototype.qa;
    yl.prototype.getProjection = yl.prototype.sa;
    yl.prototype.getState = yl.prototype.V;
    yl.prototype.refresh = yl.prototype.pa;
    yl.prototype.setAttributions = yl.prototype.ka;
    yl.prototype.get = yl.prototype.get;
    yl.prototype.getKeys = yl.prototype.K;
    yl.prototype.getProperties = yl.prototype.L;
    yl.prototype.set = yl.prototype.set;
    yl.prototype.setProperties = yl.prototype.C;
    yl.prototype.unset = yl.prototype.P;
    yl.prototype.changed = yl.prototype.u;
    yl.prototype.dispatchEvent = yl.prototype.b;
    yl.prototype.getRevision = yl.prototype.H;
    yl.prototype.on = yl.prototype.D;
    yl.prototype.once = yl.prototype.I;
    yl.prototype.un = yl.prototype.G;
    yl.prototype.unByKey = yl.prototype.J;
    rw.prototype.getAttributions = rw.prototype.ra;
    rw.prototype.getLogo = rw.prototype.qa;
    rw.prototype.getProjection = rw.prototype.sa;
    rw.prototype.getState = rw.prototype.V;
    rw.prototype.refresh = rw.prototype.pa;
    rw.prototype.setAttributions = rw.prototype.ka;
    rw.prototype.get = rw.prototype.get;
    rw.prototype.getKeys = rw.prototype.K;
    rw.prototype.getProperties = rw.prototype.L;
    rw.prototype.set = rw.prototype.set;
    rw.prototype.setProperties = rw.prototype.C;
    rw.prototype.unset = rw.prototype.P;
    rw.prototype.changed = rw.prototype.u;
    rw.prototype.dispatchEvent = rw.prototype.b;
    rw.prototype.getRevision = rw.prototype.H;
    rw.prototype.on = rw.prototype.D;
    rw.prototype.once = rw.prototype.I;
    rw.prototype.un = rw.prototype.G;
    rw.prototype.unByKey = rw.prototype.J;
    tl.prototype.type = tl.prototype.type;
    tl.prototype.target = tl.prototype.target;
    tl.prototype.preventDefault = tl.prototype.preventDefault;
    tl.prototype.stopPropagation = tl.prototype.stopPropagation;
    sw.prototype.getAttributions = sw.prototype.ra;
    sw.prototype.getLogo = sw.prototype.qa;
    sw.prototype.getProjection = sw.prototype.sa;
    sw.prototype.getState = sw.prototype.V;
    sw.prototype.refresh = sw.prototype.pa;
    sw.prototype.setAttributions = sw.prototype.ka;
    sw.prototype.get = sw.prototype.get;
    sw.prototype.getKeys = sw.prototype.K;
    sw.prototype.getProperties = sw.prototype.L;
    sw.prototype.set = sw.prototype.set;
    sw.prototype.setProperties = sw.prototype.C;
    sw.prototype.unset = sw.prototype.P;
    sw.prototype.changed = sw.prototype.u;
    sw.prototype.dispatchEvent = sw.prototype.b;
    sw.prototype.getRevision = sw.prototype.H;
    sw.prototype.on = sw.prototype.D;
    sw.prototype.once = sw.prototype.I;
    sw.prototype.un = sw.prototype.G;
    sw.prototype.unByKey = sw.prototype.J;
    om.prototype.getAttributions = om.prototype.ra;
    om.prototype.getLogo = om.prototype.qa;
    om.prototype.getProjection = om.prototype.sa;
    om.prototype.getState = om.prototype.V;
    om.prototype.refresh = om.prototype.pa;
    om.prototype.setAttributions = om.prototype.ka;
    om.prototype.get = om.prototype.get;
    om.prototype.getKeys = om.prototype.K;
    om.prototype.getProperties = om.prototype.L;
    om.prototype.set = om.prototype.set;
    om.prototype.setProperties = om.prototype.C;
    om.prototype.unset = om.prototype.P;
    om.prototype.changed = om.prototype.u;
    om.prototype.dispatchEvent = om.prototype.b;
    om.prototype.getRevision = om.prototype.H;
    om.prototype.on = om.prototype.D;
    om.prototype.once = om.prototype.I;
    om.prototype.un = om.prototype.G;
    om.prototype.unByKey = om.prototype.J;
    tw.prototype.getAttributions = tw.prototype.ra;
    tw.prototype.getLogo = tw.prototype.qa;
    tw.prototype.getProjection = tw.prototype.sa;
    tw.prototype.getState = tw.prototype.V;
    tw.prototype.refresh = tw.prototype.pa;
    tw.prototype.setAttributions = tw.prototype.ka;
    tw.prototype.get = tw.prototype.get;
    tw.prototype.getKeys = tw.prototype.K;
    tw.prototype.getProperties = tw.prototype.L;
    tw.prototype.set = tw.prototype.set;
    tw.prototype.setProperties = tw.prototype.C;
    tw.prototype.unset = tw.prototype.P;
    tw.prototype.changed = tw.prototype.u;
    tw.prototype.dispatchEvent = tw.prototype.b;
    tw.prototype.getRevision = tw.prototype.H;
    tw.prototype.on = tw.prototype.D;
    tw.prototype.once = tw.prototype.I;
    tw.prototype.un = tw.prototype.G;
    tw.prototype.unByKey = tw.prototype.J;
    zw.prototype.setRenderReprojectionEdges = zw.prototype.lb;
    zw.prototype.setTileGridForProjection = zw.prototype.mb;
    zw.prototype.getTileLoadFunction = zw.prototype.Xa;
    zw.prototype.getTileUrlFunction = zw.prototype.Ya;
    zw.prototype.getUrls = zw.prototype.Za;
    zw.prototype.setTileLoadFunction = zw.prototype.cb;
    zw.prototype.setTileUrlFunction = zw.prototype.La;
    zw.prototype.setUrl = zw.prototype.Na;
    zw.prototype.setUrls = zw.prototype.Ua;
    zw.prototype.getTileGrid = zw.prototype.Ga;
    zw.prototype.refresh = zw.prototype.pa;
    zw.prototype.getAttributions = zw.prototype.ra;
    zw.prototype.getLogo = zw.prototype.qa;
    zw.prototype.getProjection = zw.prototype.sa;
    zw.prototype.getState = zw.prototype.V;
    zw.prototype.setAttributions = zw.prototype.ka;
    zw.prototype.get = zw.prototype.get;
    zw.prototype.getKeys = zw.prototype.K;
    zw.prototype.getProperties = zw.prototype.L;
    zw.prototype.set = zw.prototype.set;
    zw.prototype.setProperties = zw.prototype.C;
    zw.prototype.unset = zw.prototype.P;
    zw.prototype.changed = zw.prototype.u;
    zw.prototype.dispatchEvent = zw.prototype.b;
    zw.prototype.getRevision = zw.prototype.H;
    zw.prototype.on = zw.prototype.D;
    zw.prototype.once = zw.prototype.I;
    zw.prototype.un = zw.prototype.G;
    zw.prototype.unByKey = zw.prototype.J;
    xw.prototype.setRenderReprojectionEdges = xw.prototype.lb;
    xw.prototype.setTileGridForProjection = xw.prototype.mb;
    xw.prototype.getTileLoadFunction = xw.prototype.Xa;
    xw.prototype.getTileUrlFunction = xw.prototype.Ya;
    xw.prototype.getUrls = xw.prototype.Za;
    xw.prototype.setTileLoadFunction = xw.prototype.cb;
    xw.prototype.setTileUrlFunction = xw.prototype.La;
    xw.prototype.setUrl = xw.prototype.Na;
    xw.prototype.setUrls = xw.prototype.Ua;
    xw.prototype.getTileGrid = xw.prototype.Ga;
    xw.prototype.refresh = xw.prototype.pa;
    xw.prototype.getAttributions = xw.prototype.ra;
    xw.prototype.getLogo = xw.prototype.qa;
    xw.prototype.getProjection = xw.prototype.sa;
    xw.prototype.getState = xw.prototype.V;
    xw.prototype.setAttributions = xw.prototype.ka;
    xw.prototype.get = xw.prototype.get;
    xw.prototype.getKeys = xw.prototype.K;
    xw.prototype.getProperties = xw.prototype.L;
    xw.prototype.set = xw.prototype.set;
    xw.prototype.setProperties = xw.prototype.C;
    xw.prototype.unset = xw.prototype.P;
    xw.prototype.changed = xw.prototype.u;
    xw.prototype.dispatchEvent = xw.prototype.b;
    xw.prototype.getRevision = xw.prototype.H;
    xw.prototype.on = xw.prototype.D;
    xw.prototype.once = xw.prototype.I;
    xw.prototype.un = xw.prototype.G;
    xw.prototype.unByKey = xw.prototype.J;
    Cw.prototype.getAttributions = Cw.prototype.ra;
    Cw.prototype.getLogo = Cw.prototype.qa;
    Cw.prototype.getProjection = Cw.prototype.sa;
    Cw.prototype.getState = Cw.prototype.V;
    Cw.prototype.refresh = Cw.prototype.pa;
    Cw.prototype.setAttributions = Cw.prototype.ka;
    Cw.prototype.get = Cw.prototype.get;
    Cw.prototype.getKeys = Cw.prototype.K;
    Cw.prototype.getProperties = Cw.prototype.L;
    Cw.prototype.set = Cw.prototype.set;
    Cw.prototype.setProperties = Cw.prototype.C;
    Cw.prototype.unset = Cw.prototype.P;
    Cw.prototype.changed = Cw.prototype.u;
    Cw.prototype.dispatchEvent = Cw.prototype.b;
    Cw.prototype.getRevision = Cw.prototype.H;
    Cw.prototype.on = Cw.prototype.D;
    Cw.prototype.once = Cw.prototype.I;
    Cw.prototype.un = Cw.prototype.G;
    Cw.prototype.unByKey = Cw.prototype.J;
    Hw.prototype.type = Hw.prototype.type;
    Hw.prototype.target = Hw.prototype.target;
    Hw.prototype.preventDefault = Hw.prototype.preventDefault;
    Hw.prototype.stopPropagation = Hw.prototype.stopPropagation;
    Mw.prototype.setRenderReprojectionEdges = Mw.prototype.lb;
    Mw.prototype.setTileGridForProjection = Mw.prototype.mb;
    Mw.prototype.getTileLoadFunction = Mw.prototype.Xa;
    Mw.prototype.getTileUrlFunction = Mw.prototype.Ya;
    Mw.prototype.getUrls = Mw.prototype.Za;
    Mw.prototype.setTileLoadFunction = Mw.prototype.cb;
    Mw.prototype.setTileUrlFunction = Mw.prototype.La;
    Mw.prototype.setUrl = Mw.prototype.Na;
    Mw.prototype.setUrls = Mw.prototype.Ua;
    Mw.prototype.getTileGrid = Mw.prototype.Ga;
    Mw.prototype.refresh = Mw.prototype.pa;
    Mw.prototype.getAttributions = Mw.prototype.ra;
    Mw.prototype.getLogo = Mw.prototype.qa;
    Mw.prototype.getProjection = Mw.prototype.sa;
    Mw.prototype.getState = Mw.prototype.V;
    Mw.prototype.setAttributions = Mw.prototype.ka;
    Mw.prototype.get = Mw.prototype.get;
    Mw.prototype.getKeys = Mw.prototype.K;
    Mw.prototype.getProperties = Mw.prototype.L;
    Mw.prototype.set = Mw.prototype.set;
    Mw.prototype.setProperties = Mw.prototype.C;
    Mw.prototype.unset = Mw.prototype.P;
    Mw.prototype.changed = Mw.prototype.u;
    Mw.prototype.dispatchEvent = Mw.prototype.b;
    Mw.prototype.getRevision = Mw.prototype.H;
    Mw.prototype.on = Mw.prototype.D;
    Mw.prototype.once = Mw.prototype.I;
    Mw.prototype.un = Mw.prototype.G;
    Mw.prototype.unByKey = Mw.prototype.J;
    Ow.prototype.setRenderReprojectionEdges = Ow.prototype.lb;
    Ow.prototype.setTileGridForProjection = Ow.prototype.mb;
    Ow.prototype.getTileLoadFunction = Ow.prototype.Xa;
    Ow.prototype.getTileUrlFunction = Ow.prototype.Ya;
    Ow.prototype.getUrls = Ow.prototype.Za;
    Ow.prototype.setTileLoadFunction = Ow.prototype.cb;
    Ow.prototype.setTileUrlFunction = Ow.prototype.La;
    Ow.prototype.setUrl = Ow.prototype.Na;
    Ow.prototype.setUrls = Ow.prototype.Ua;
    Ow.prototype.getTileGrid = Ow.prototype.Ga;
    Ow.prototype.refresh = Ow.prototype.pa;
    Ow.prototype.getAttributions = Ow.prototype.ra;
    Ow.prototype.getLogo = Ow.prototype.qa;
    Ow.prototype.getProjection = Ow.prototype.sa;
    Ow.prototype.getState = Ow.prototype.V;
    Ow.prototype.setAttributions = Ow.prototype.ka;
    Ow.prototype.get = Ow.prototype.get;
    Ow.prototype.getKeys = Ow.prototype.K;
    Ow.prototype.getProperties = Ow.prototype.L;
    Ow.prototype.set = Ow.prototype.set;
    Ow.prototype.setProperties = Ow.prototype.C;
    Ow.prototype.unset = Ow.prototype.P;
    Ow.prototype.changed = Ow.prototype.u;
    Ow.prototype.dispatchEvent = Ow.prototype.b;
    Ow.prototype.getRevision = Ow.prototype.H;
    Ow.prototype.on = Ow.prototype.D;
    Ow.prototype.once = Ow.prototype.I;
    Ow.prototype.un = Ow.prototype.G;
    Ow.prototype.unByKey = Ow.prototype.J;
    Qw.prototype.getTileGrid = Qw.prototype.Ga;
    Qw.prototype.refresh = Qw.prototype.pa;
    Qw.prototype.getAttributions = Qw.prototype.ra;
    Qw.prototype.getLogo = Qw.prototype.qa;
    Qw.prototype.getProjection = Qw.prototype.sa;
    Qw.prototype.getState = Qw.prototype.V;
    Qw.prototype.setAttributions = Qw.prototype.ka;
    Qw.prototype.get = Qw.prototype.get;
    Qw.prototype.getKeys = Qw.prototype.K;
    Qw.prototype.getProperties = Qw.prototype.L;
    Qw.prototype.set = Qw.prototype.set;
    Qw.prototype.setProperties = Qw.prototype.C;
    Qw.prototype.unset = Qw.prototype.P;
    Qw.prototype.changed = Qw.prototype.u;
    Qw.prototype.dispatchEvent = Qw.prototype.b;
    Qw.prototype.getRevision = Qw.prototype.H;
    Qw.prototype.on = Qw.prototype.D;
    Qw.prototype.once = Qw.prototype.I;
    Qw.prototype.un = Qw.prototype.G;
    Qw.prototype.unByKey = Qw.prototype.J;
    Rw.prototype.setRenderReprojectionEdges = Rw.prototype.lb;
    Rw.prototype.setTileGridForProjection = Rw.prototype.mb;
    Rw.prototype.getTileLoadFunction = Rw.prototype.Xa;
    Rw.prototype.getTileUrlFunction = Rw.prototype.Ya;
    Rw.prototype.getUrls = Rw.prototype.Za;
    Rw.prototype.setTileLoadFunction = Rw.prototype.cb;
    Rw.prototype.setTileUrlFunction = Rw.prototype.La;
    Rw.prototype.setUrl = Rw.prototype.Na;
    Rw.prototype.setUrls = Rw.prototype.Ua;
    Rw.prototype.getTileGrid = Rw.prototype.Ga;
    Rw.prototype.refresh = Rw.prototype.pa;
    Rw.prototype.getAttributions = Rw.prototype.ra;
    Rw.prototype.getLogo = Rw.prototype.qa;
    Rw.prototype.getProjection = Rw.prototype.sa;
    Rw.prototype.getState = Rw.prototype.V;
    Rw.prototype.setAttributions = Rw.prototype.ka;
    Rw.prototype.get = Rw.prototype.get;
    Rw.prototype.getKeys = Rw.prototype.K;
    Rw.prototype.getProperties = Rw.prototype.L;
    Rw.prototype.set = Rw.prototype.set;
    Rw.prototype.setProperties = Rw.prototype.C;
    Rw.prototype.unset = Rw.prototype.P;
    Rw.prototype.changed = Rw.prototype.u;
    Rw.prototype.dispatchEvent = Rw.prototype.b;
    Rw.prototype.getRevision = Rw.prototype.H;
    Rw.prototype.on = Rw.prototype.D;
    Rw.prototype.once = Rw.prototype.I;
    Rw.prototype.un = Rw.prototype.G;
    Rw.prototype.unByKey = Rw.prototype.J;
    pg.prototype.type = pg.prototype.type;
    pg.prototype.target = pg.prototype.target;
    pg.prototype.preventDefault = pg.prototype.preventDefault;
    pg.prototype.stopPropagation = pg.prototype.stopPropagation;
    Sw.prototype.getTileGrid = Sw.prototype.Ga;
    Sw.prototype.refresh = Sw.prototype.pa;
    Sw.prototype.getAttributions = Sw.prototype.ra;
    Sw.prototype.getLogo = Sw.prototype.qa;
    Sw.prototype.getProjection = Sw.prototype.sa;
    Sw.prototype.getState = Sw.prototype.V;
    Sw.prototype.setAttributions = Sw.prototype.ka;
    Sw.prototype.get = Sw.prototype.get;
    Sw.prototype.getKeys = Sw.prototype.K;
    Sw.prototype.getProperties = Sw.prototype.L;
    Sw.prototype.set = Sw.prototype.set;
    Sw.prototype.setProperties = Sw.prototype.C;
    Sw.prototype.unset = Sw.prototype.P;
    Sw.prototype.changed = Sw.prototype.u;
    Sw.prototype.dispatchEvent = Sw.prototype.b;
    Sw.prototype.getRevision = Sw.prototype.H;
    Sw.prototype.on = Sw.prototype.D;
    Sw.prototype.once = Sw.prototype.I;
    Sw.prototype.un = Sw.prototype.G;
    Sw.prototype.unByKey = Sw.prototype.J;
    Ww.prototype.setRenderReprojectionEdges = Ww.prototype.lb;
    Ww.prototype.setTileGridForProjection = Ww.prototype.mb;
    Ww.prototype.getTileLoadFunction = Ww.prototype.Xa;
    Ww.prototype.getTileUrlFunction = Ww.prototype.Ya;
    Ww.prototype.getUrls = Ww.prototype.Za;
    Ww.prototype.setTileLoadFunction = Ww.prototype.cb;
    Ww.prototype.setTileUrlFunction = Ww.prototype.La;
    Ww.prototype.setUrl = Ww.prototype.Na;
    Ww.prototype.setUrls = Ww.prototype.Ua;
    Ww.prototype.getTileGrid = Ww.prototype.Ga;
    Ww.prototype.refresh = Ww.prototype.pa;
    Ww.prototype.getAttributions = Ww.prototype.ra;
    Ww.prototype.getLogo = Ww.prototype.qa;
    Ww.prototype.getProjection = Ww.prototype.sa;
    Ww.prototype.getState = Ww.prototype.V;
    Ww.prototype.setAttributions = Ww.prototype.ka;
    Ww.prototype.get = Ww.prototype.get;
    Ww.prototype.getKeys = Ww.prototype.K;
    Ww.prototype.getProperties = Ww.prototype.L;
    Ww.prototype.set = Ww.prototype.set;
    Ww.prototype.setProperties = Ww.prototype.C;
    Ww.prototype.unset = Ww.prototype.P;
    Ww.prototype.changed = Ww.prototype.u;
    Ww.prototype.dispatchEvent = Ww.prototype.b;
    Ww.prototype.getRevision = Ww.prototype.H;
    Ww.prototype.on = Ww.prototype.D;
    Ww.prototype.once = Ww.prototype.I;
    Ww.prototype.un = Ww.prototype.G;
    Ww.prototype.unByKey = Ww.prototype.J;
    lm.prototype.type = lm.prototype.type;
    lm.prototype.target = lm.prototype.target;
    lm.prototype.preventDefault = lm.prototype.preventDefault;
    lm.prototype.stopPropagation = lm.prototype.stopPropagation;
    Am.prototype.getTileLoadFunction = Am.prototype.Xa;
    Am.prototype.getTileUrlFunction = Am.prototype.Ya;
    Am.prototype.getUrls = Am.prototype.Za;
    Am.prototype.setTileLoadFunction = Am.prototype.cb;
    Am.prototype.setTileUrlFunction = Am.prototype.La;
    Am.prototype.setUrl = Am.prototype.Na;
    Am.prototype.setUrls = Am.prototype.Ua;
    Am.prototype.getTileGrid = Am.prototype.Ga;
    Am.prototype.refresh = Am.prototype.pa;
    Am.prototype.getAttributions = Am.prototype.ra;
    Am.prototype.getLogo = Am.prototype.qa;
    Am.prototype.getProjection = Am.prototype.sa;
    Am.prototype.getState = Am.prototype.V;
    Am.prototype.setAttributions = Am.prototype.ka;
    Am.prototype.get = Am.prototype.get;
    Am.prototype.getKeys = Am.prototype.K;
    Am.prototype.getProperties = Am.prototype.L;
    Am.prototype.set = Am.prototype.set;
    Am.prototype.setProperties = Am.prototype.C;
    Am.prototype.unset = Am.prototype.P;
    Am.prototype.changed = Am.prototype.u;
    Am.prototype.dispatchEvent = Am.prototype.b;
    Am.prototype.getRevision = Am.prototype.H;
    Am.prototype.on = Am.prototype.D;
    Am.prototype.once = Am.prototype.I;
    Am.prototype.un = Am.prototype.G;
    Am.prototype.unByKey = Am.prototype.J;
    Z.prototype.setRenderReprojectionEdges = Z.prototype.lb;
    Z.prototype.setTileGridForProjection = Z.prototype.mb;
    Z.prototype.getTileLoadFunction = Z.prototype.Xa;
    Z.prototype.getTileUrlFunction = Z.prototype.Ya;
    Z.prototype.getUrls = Z.prototype.Za;
    Z.prototype.setTileLoadFunction = Z.prototype.cb;
    Z.prototype.setTileUrlFunction = Z.prototype.La;
    Z.prototype.setUrl = Z.prototype.Na;
    Z.prototype.setUrls = Z.prototype.Ua;
    Z.prototype.getTileGrid = Z.prototype.Ga;
    Z.prototype.refresh = Z.prototype.pa;
    Z.prototype.getAttributions = Z.prototype.ra;
    Z.prototype.getLogo = Z.prototype.qa;
    Z.prototype.getProjection = Z.prototype.sa;
    Z.prototype.getState = Z.prototype.V;
    Z.prototype.setAttributions = Z.prototype.ka;
    Z.prototype.get = Z.prototype.get;
    Z.prototype.getKeys = Z.prototype.K;
    Z.prototype.getProperties = Z.prototype.L;
    Z.prototype.set = Z.prototype.set;
    Z.prototype.setProperties = Z.prototype.C;
    Z.prototype.unset = Z.prototype.P;
    Z.prototype.changed = Z.prototype.u;
    Z.prototype.dispatchEvent = Z.prototype.b;
    Z.prototype.getRevision = Z.prototype.H;
    Z.prototype.on = Z.prototype.D;
    Z.prototype.once = Z.prototype.I;
    Z.prototype.un = Z.prototype.G;
    Z.prototype.unByKey = Z.prototype.J;
    dx.prototype.setRenderReprojectionEdges = dx.prototype.lb;
    dx.prototype.setTileGridForProjection = dx.prototype.mb;
    dx.prototype.getTileLoadFunction = dx.prototype.Xa;
    dx.prototype.getTileUrlFunction = dx.prototype.Ya;
    dx.prototype.getUrls = dx.prototype.Za;
    dx.prototype.setTileLoadFunction = dx.prototype.cb;
    dx.prototype.setTileUrlFunction = dx.prototype.La;
    dx.prototype.setUrl = dx.prototype.Na;
    dx.prototype.setUrls = dx.prototype.Ua;
    dx.prototype.getTileGrid = dx.prototype.Ga;
    dx.prototype.refresh = dx.prototype.pa;
    dx.prototype.getAttributions = dx.prototype.ra;
    dx.prototype.getLogo = dx.prototype.qa;
    dx.prototype.getProjection = dx.prototype.sa;
    dx.prototype.getState = dx.prototype.V;
    dx.prototype.setAttributions = dx.prototype.ka;
    dx.prototype.get = dx.prototype.get;
    dx.prototype.getKeys = dx.prototype.K;
    dx.prototype.getProperties = dx.prototype.L;
    dx.prototype.set = dx.prototype.set;
    dx.prototype.setProperties = dx.prototype.C;
    dx.prototype.unset = dx.prototype.P;
    dx.prototype.changed = dx.prototype.u;
    dx.prototype.dispatchEvent = dx.prototype.b;
    dx.prototype.getRevision = dx.prototype.H;
    dx.prototype.on = dx.prototype.D;
    dx.prototype.once = dx.prototype.I;
    dx.prototype.un = dx.prototype.G;
    dx.prototype.unByKey = dx.prototype.J;
    ew.prototype.getTileCoord = ew.prototype.i;
    ki.prototype.changed = ki.prototype.u;
    ki.prototype.dispatchEvent = ki.prototype.b;
    ki.prototype.getRevision = ki.prototype.H;
    ki.prototype.on = ki.prototype.D;
    ki.prototype.once = ki.prototype.I;
    ki.prototype.un = ki.prototype.G;
    ki.prototype.unByKey = ki.prototype.J;
    xn.prototype.changed = xn.prototype.u;
    xn.prototype.dispatchEvent = xn.prototype.b;
    xn.prototype.getRevision = xn.prototype.H;
    xn.prototype.on = xn.prototype.D;
    xn.prototype.once = xn.prototype.I;
    xn.prototype.un = xn.prototype.G;
    xn.prototype.unByKey = xn.prototype.J;
    An.prototype.changed = An.prototype.u;
    An.prototype.dispatchEvent = An.prototype.b;
    An.prototype.getRevision = An.prototype.H;
    An.prototype.on = An.prototype.D;
    An.prototype.once = An.prototype.I;
    An.prototype.un = An.prototype.G;
    An.prototype.unByKey = An.prototype.J;
    Gn.prototype.changed = Gn.prototype.u;
    Gn.prototype.dispatchEvent = Gn.prototype.b;
    Gn.prototype.getRevision = Gn.prototype.H;
    Gn.prototype.on = Gn.prototype.D;
    Gn.prototype.once = Gn.prototype.I;
    Gn.prototype.un = Gn.prototype.G;
    Gn.prototype.unByKey = Gn.prototype.J;
    In.prototype.changed = In.prototype.u;
    In.prototype.dispatchEvent = In.prototype.b;
    In.prototype.getRevision = In.prototype.H;
    In.prototype.on = In.prototype.D;
    In.prototype.once = In.prototype.I;
    In.prototype.un = In.prototype.G;
    In.prototype.unByKey = In.prototype.J;
    Im.prototype.changed = Im.prototype.u;
    Im.prototype.dispatchEvent = Im.prototype.b;
    Im.prototype.getRevision = Im.prototype.H;
    Im.prototype.on = Im.prototype.D;
    Im.prototype.once = Im.prototype.I;
    Im.prototype.un = Im.prototype.G;
    Im.prototype.unByKey = Im.prototype.J;
    Jm.prototype.changed = Jm.prototype.u;
    Jm.prototype.dispatchEvent = Jm.prototype.b;
    Jm.prototype.getRevision = Jm.prototype.H;
    Jm.prototype.on = Jm.prototype.D;
    Jm.prototype.once = Jm.prototype.I;
    Jm.prototype.un = Jm.prototype.G;
    Jm.prototype.unByKey = Jm.prototype.J;
    Km.prototype.changed = Km.prototype.u;
    Km.prototype.dispatchEvent = Km.prototype.b;
    Km.prototype.getRevision = Km.prototype.H;
    Km.prototype.on = Km.prototype.D;
    Km.prototype.once = Km.prototype.I;
    Km.prototype.un = Km.prototype.G;
    Km.prototype.unByKey = Km.prototype.J;
    Mm.prototype.changed = Mm.prototype.u;
    Mm.prototype.dispatchEvent = Mm.prototype.b;
    Mm.prototype.getRevision = Mm.prototype.H;
    Mm.prototype.on = Mm.prototype.D;
    Mm.prototype.once = Mm.prototype.I;
    Mm.prototype.un = Mm.prototype.G;
    Mm.prototype.unByKey = Mm.prototype.J;
    Bk.prototype.changed = Bk.prototype.u;
    Bk.prototype.dispatchEvent = Bk.prototype.b;
    Bk.prototype.getRevision = Bk.prototype.H;
    Bk.prototype.on = Bk.prototype.D;
    Bk.prototype.once = Bk.prototype.I;
    Bk.prototype.un = Bk.prototype.G;
    Bk.prototype.unByKey = Bk.prototype.J;
    qm.prototype.changed = qm.prototype.u;
    qm.prototype.dispatchEvent = qm.prototype.b;
    qm.prototype.getRevision = qm.prototype.H;
    qm.prototype.on = qm.prototype.D;
    qm.prototype.once = qm.prototype.I;
    qm.prototype.un = qm.prototype.G;
    qm.prototype.unByKey = qm.prototype.J;
    rm.prototype.changed = rm.prototype.u;
    rm.prototype.dispatchEvent = rm.prototype.b;
    rm.prototype.getRevision = rm.prototype.H;
    rm.prototype.on = rm.prototype.D;
    rm.prototype.once = rm.prototype.I;
    rm.prototype.un = rm.prototype.G;
    rm.prototype.unByKey = rm.prototype.J;
    tm.prototype.changed = tm.prototype.u;
    tm.prototype.dispatchEvent = tm.prototype.b;
    tm.prototype.getRevision = tm.prototype.H;
    tm.prototype.on = tm.prototype.D;
    tm.prototype.once = tm.prototype.I;
    tm.prototype.un = tm.prototype.G;
    tm.prototype.unByKey = tm.prototype.J;
    Em.prototype.changed = Em.prototype.u;
    Em.prototype.dispatchEvent = Em.prototype.b;
    Em.prototype.getRevision = Em.prototype.H;
    Em.prototype.on = Em.prototype.D;
    Em.prototype.once = Em.prototype.I;
    Em.prototype.un = Em.prototype.G;
    Em.prototype.unByKey = Em.prototype.J;
    ci.prototype.type = ci.prototype.type;
    ci.prototype.target = ci.prototype.target;
    ci.prototype.preventDefault = ci.prototype.preventDefault;
    ci.prototype.stopPropagation = ci.prototype.stopPropagation;
    Ig.prototype.type = Ig.prototype.type;
    Ig.prototype.target = Ig.prototype.target;
    Ig.prototype.preventDefault = Ig.prototype.preventDefault;
    Ig.prototype.stopPropagation = Ig.prototype.stopPropagation;
    $h.prototype.get = $h.prototype.get;
    $h.prototype.getKeys = $h.prototype.K;
    $h.prototype.getProperties = $h.prototype.L;
    $h.prototype.set = $h.prototype.set;
    $h.prototype.setProperties = $h.prototype.C;
    $h.prototype.unset = $h.prototype.P;
    $h.prototype.changed = $h.prototype.u;
    $h.prototype.dispatchEvent = $h.prototype.b;
    $h.prototype.getRevision = $h.prototype.H;
    $h.prototype.on = $h.prototype.D;
    $h.prototype.once = $h.prototype.I;
    $h.prototype.un = $h.prototype.G;
    $h.prototype.unByKey = $h.prototype.J;
    di.prototype.getExtent = di.prototype.O;
    di.prototype.getMaxResolution = di.prototype.Ib;
    di.prototype.getMinResolution = di.prototype.Jb;
    di.prototype.getOpacity = di.prototype.Lb;
    di.prototype.getVisible = di.prototype.wb;
    di.prototype.getZIndex = di.prototype.Mb;
    di.prototype.setExtent = di.prototype.ac;
    di.prototype.setMaxResolution = di.prototype.ic;
    di.prototype.setMinResolution = di.prototype.jc;
    di.prototype.setOpacity = di.prototype.bc;
    di.prototype.setVisible = di.prototype.cc;
    di.prototype.setZIndex = di.prototype.dc;
    di.prototype.get = di.prototype.get;
    di.prototype.getKeys = di.prototype.K;
    di.prototype.getProperties = di.prototype.L;
    di.prototype.set = di.prototype.set;
    di.prototype.setProperties = di.prototype.C;
    di.prototype.unset = di.prototype.P;
    di.prototype.changed = di.prototype.u;
    di.prototype.dispatchEvent = di.prototype.b;
    di.prototype.getRevision = di.prototype.H;
    di.prototype.on = di.prototype.D;
    di.prototype.once = di.prototype.I;
    di.prototype.un = di.prototype.G;
    di.prototype.unByKey = di.prototype.J;
    H.prototype.setMap = H.prototype.setMap;
    H.prototype.setSource = H.prototype.Ac;
    H.prototype.getExtent = H.prototype.O;
    H.prototype.getMaxResolution = H.prototype.Ib;
    H.prototype.getMinResolution = H.prototype.Jb;
    H.prototype.getOpacity = H.prototype.Lb;
    H.prototype.getVisible = H.prototype.wb;
    H.prototype.getZIndex = H.prototype.Mb;
    H.prototype.setExtent = H.prototype.ac;
    H.prototype.setMaxResolution = H.prototype.ic;
    H.prototype.setMinResolution = H.prototype.jc;
    H.prototype.setOpacity = H.prototype.bc;
    H.prototype.setVisible = H.prototype.cc;
    H.prototype.setZIndex = H.prototype.dc;
    H.prototype.get = H.prototype.get;
    H.prototype.getKeys = H.prototype.K;
    H.prototype.getProperties = H.prototype.L;
    H.prototype.set = H.prototype.set;
    H.prototype.setProperties = H.prototype.C;
    H.prototype.unset = H.prototype.P;
    H.prototype.changed = H.prototype.u;
    H.prototype.dispatchEvent = H.prototype.b;
    H.prototype.getRevision = H.prototype.H;
    H.prototype.on = H.prototype.D;
    H.prototype.once = H.prototype.I;
    H.prototype.un = H.prototype.G;
    H.prototype.unByKey = H.prototype.J;
    W.prototype.getSource = W.prototype.da;
    W.prototype.getStyle = W.prototype.M;
    W.prototype.getStyleFunction = W.prototype.N;
    W.prototype.setStyle = W.prototype.l;
    W.prototype.setMap = W.prototype.setMap;
    W.prototype.setSource = W.prototype.Ac;
    W.prototype.getExtent = W.prototype.O;
    W.prototype.getMaxResolution = W.prototype.Ib;
    W.prototype.getMinResolution = W.prototype.Jb;
    W.prototype.getOpacity = W.prototype.Lb;
    W.prototype.getVisible = W.prototype.wb;
    W.prototype.getZIndex = W.prototype.Mb;
    W.prototype.setExtent = W.prototype.ac;
    W.prototype.setMaxResolution = W.prototype.ic;
    W.prototype.setMinResolution = W.prototype.jc;
    W.prototype.setOpacity = W.prototype.bc;
    W.prototype.setVisible = W.prototype.cc;
    W.prototype.setZIndex = W.prototype.dc;
    W.prototype.get = W.prototype.get;
    W.prototype.getKeys = W.prototype.K;
    W.prototype.getProperties = W.prototype.L;
    W.prototype.set = W.prototype.set;
    W.prototype.setProperties = W.prototype.C;
    W.prototype.unset = W.prototype.P;
    W.prototype.changed = W.prototype.u;
    W.prototype.dispatchEvent = W.prototype.b;
    W.prototype.getRevision = W.prototype.H;
    W.prototype.on = W.prototype.D;
    W.prototype.once = W.prototype.I;
    W.prototype.un = W.prototype.G;
    W.prototype.unByKey = W.prototype.J;
    Uj.prototype.setMap = Uj.prototype.setMap;
    Uj.prototype.setSource = Uj.prototype.Ac;
    Uj.prototype.getExtent = Uj.prototype.O;
    Uj.prototype.getMaxResolution = Uj.prototype.Ib;
    Uj.prototype.getMinResolution = Uj.prototype.Jb;
    Uj.prototype.getOpacity = Uj.prototype.Lb;
    Uj.prototype.getVisible = Uj.prototype.wb;
    Uj.prototype.getZIndex = Uj.prototype.Mb;
    Uj.prototype.setExtent = Uj.prototype.ac;
    Uj.prototype.setMaxResolution = Uj.prototype.ic;
    Uj.prototype.setMinResolution = Uj.prototype.jc;
    Uj.prototype.setOpacity = Uj.prototype.bc;
    Uj.prototype.setVisible = Uj.prototype.cc;
    Uj.prototype.setZIndex = Uj.prototype.dc;
    Uj.prototype.get = Uj.prototype.get;
    Uj.prototype.getKeys = Uj.prototype.K;
    Uj.prototype.getProperties = Uj.prototype.L;
    Uj.prototype.set = Uj.prototype.set;
    Uj.prototype.setProperties = Uj.prototype.C;
    Uj.prototype.unset = Uj.prototype.P;
    Uj.prototype.changed = Uj.prototype.u;
    Uj.prototype.dispatchEvent = Uj.prototype.b;
    Uj.prototype.getRevision = Uj.prototype.H;
    Uj.prototype.on = Uj.prototype.D;
    Uj.prototype.once = Uj.prototype.I;
    Uj.prototype.un = Uj.prototype.G;
    Uj.prototype.unByKey = Uj.prototype.J;
    Kj.prototype.getExtent = Kj.prototype.O;
    Kj.prototype.getMaxResolution = Kj.prototype.Ib;
    Kj.prototype.getMinResolution = Kj.prototype.Jb;
    Kj.prototype.getOpacity = Kj.prototype.Lb;
    Kj.prototype.getVisible = Kj.prototype.wb;
    Kj.prototype.getZIndex = Kj.prototype.Mb;
    Kj.prototype.setExtent = Kj.prototype.ac;
    Kj.prototype.setMaxResolution = Kj.prototype.ic;
    Kj.prototype.setMinResolution = Kj.prototype.jc;
    Kj.prototype.setOpacity = Kj.prototype.bc;
    Kj.prototype.setVisible = Kj.prototype.cc;
    Kj.prototype.setZIndex = Kj.prototype.dc;
    Kj.prototype.get = Kj.prototype.get;
    Kj.prototype.getKeys = Kj.prototype.K;
    Kj.prototype.getProperties = Kj.prototype.L;
    Kj.prototype.set = Kj.prototype.set;
    Kj.prototype.setProperties = Kj.prototype.C;
    Kj.prototype.unset = Kj.prototype.P;
    Kj.prototype.changed = Kj.prototype.u;
    Kj.prototype.dispatchEvent = Kj.prototype.b;
    Kj.prototype.getRevision = Kj.prototype.H;
    Kj.prototype.on = Kj.prototype.D;
    Kj.prototype.once = Kj.prototype.I;
    Kj.prototype.un = Kj.prototype.G;
    Kj.prototype.unByKey = Kj.prototype.J;
    Vj.prototype.setMap = Vj.prototype.setMap;
    Vj.prototype.setSource = Vj.prototype.Ac;
    Vj.prototype.getExtent = Vj.prototype.O;
    Vj.prototype.getMaxResolution = Vj.prototype.Ib;
    Vj.prototype.getMinResolution = Vj.prototype.Jb;
    Vj.prototype.getOpacity = Vj.prototype.Lb;
    Vj.prototype.getVisible = Vj.prototype.wb;
    Vj.prototype.getZIndex = Vj.prototype.Mb;
    Vj.prototype.setExtent = Vj.prototype.ac;
    Vj.prototype.setMaxResolution = Vj.prototype.ic;
    Vj.prototype.setMinResolution = Vj.prototype.jc;
    Vj.prototype.setOpacity = Vj.prototype.bc;
    Vj.prototype.setVisible = Vj.prototype.cc;
    Vj.prototype.setZIndex = Vj.prototype.dc;
    Vj.prototype.get = Vj.prototype.get;
    Vj.prototype.getKeys = Vj.prototype.K;
    Vj.prototype.getProperties = Vj.prototype.L;
    Vj.prototype.set = Vj.prototype.set;
    Vj.prototype.setProperties = Vj.prototype.C;
    Vj.prototype.unset = Vj.prototype.P;
    Vj.prototype.changed = Vj.prototype.u;
    Vj.prototype.dispatchEvent = Vj.prototype.b;
    Vj.prototype.getRevision = Vj.prototype.H;
    Vj.prototype.on = Vj.prototype.D;
    Vj.prototype.once = Vj.prototype.I;
    Vj.prototype.un = Vj.prototype.G;
    Vj.prototype.unByKey = Vj.prototype.J;
    I.prototype.getSource = I.prototype.da;
    I.prototype.getStyle = I.prototype.M;
    I.prototype.getStyleFunction = I.prototype.N;
    I.prototype.setStyle = I.prototype.l;
    I.prototype.setMap = I.prototype.setMap;
    I.prototype.setSource = I.prototype.Ac;
    I.prototype.getExtent = I.prototype.O;
    I.prototype.getMaxResolution = I.prototype.Ib;
    I.prototype.getMinResolution = I.prototype.Jb;
    I.prototype.getOpacity = I.prototype.Lb;
    I.prototype.getVisible = I.prototype.wb;
    I.prototype.getZIndex = I.prototype.Mb;
    I.prototype.setExtent = I.prototype.ac;
    I.prototype.setMaxResolution = I.prototype.ic;
    I.prototype.setMinResolution = I.prototype.jc;
    I.prototype.setOpacity = I.prototype.bc;
    I.prototype.setVisible = I.prototype.cc;
    I.prototype.setZIndex = I.prototype.dc;
    I.prototype.get = I.prototype.get;
    I.prototype.getKeys = I.prototype.K;
    I.prototype.getProperties = I.prototype.L;
    I.prototype.set = I.prototype.set;
    I.prototype.setProperties = I.prototype.C;
    I.prototype.unset = I.prototype.P;
    I.prototype.changed = I.prototype.u;
    I.prototype.dispatchEvent = I.prototype.b;
    I.prototype.getRevision = I.prototype.H;
    I.prototype.on = I.prototype.D;
    I.prototype.once = I.prototype.I;
    I.prototype.un = I.prototype.G;
    I.prototype.unByKey = I.prototype.J;
    Mi.prototype.get = Mi.prototype.get;
    Mi.prototype.getKeys = Mi.prototype.K;
    Mi.prototype.getProperties = Mi.prototype.L;
    Mi.prototype.set = Mi.prototype.set;
    Mi.prototype.setProperties = Mi.prototype.C;
    Mi.prototype.unset = Mi.prototype.P;
    Mi.prototype.changed = Mi.prototype.u;
    Mi.prototype.dispatchEvent = Mi.prototype.b;
    Mi.prototype.getRevision = Mi.prototype.H;
    Mi.prototype.on = Mi.prototype.D;
    Mi.prototype.once = Mi.prototype.I;
    Mi.prototype.un = Mi.prototype.G;
    Mi.prototype.unByKey = Mi.prototype.J;
    Qi.prototype.getActive = Qi.prototype.f;
    Qi.prototype.getMap = Qi.prototype.l;
    Qi.prototype.setActive = Qi.prototype.i;
    Qi.prototype.get = Qi.prototype.get;
    Qi.prototype.getKeys = Qi.prototype.K;
    Qi.prototype.getProperties = Qi.prototype.L;
    Qi.prototype.set = Qi.prototype.set;
    Qi.prototype.setProperties = Qi.prototype.C;
    Qi.prototype.unset = Qi.prototype.P;
    Qi.prototype.changed = Qi.prototype.u;
    Qi.prototype.dispatchEvent = Qi.prototype.b;
    Qi.prototype.getRevision = Qi.prototype.H;
    Qi.prototype.on = Qi.prototype.D;
    Qi.prototype.once = Qi.prototype.I;
    Qi.prototype.un = Qi.prototype.G;
    Qi.prototype.unByKey = Qi.prototype.J;
    av.prototype.getActive = av.prototype.f;
    av.prototype.getMap = av.prototype.l;
    av.prototype.setActive = av.prototype.i;
    av.prototype.get = av.prototype.get;
    av.prototype.getKeys = av.prototype.K;
    av.prototype.getProperties = av.prototype.L;
    av.prototype.set = av.prototype.set;
    av.prototype.setProperties = av.prototype.C;
    av.prototype.unset = av.prototype.P;
    av.prototype.changed = av.prototype.u;
    av.prototype.dispatchEvent = av.prototype.b;
    av.prototype.getRevision = av.prototype.H;
    av.prototype.on = av.prototype.D;
    av.prototype.once = av.prototype.I;
    av.prototype.un = av.prototype.G;
    av.prototype.unByKey = av.prototype.J;
    dv.prototype.type = dv.prototype.type;
    dv.prototype.target = dv.prototype.target;
    dv.prototype.preventDefault = dv.prototype.preventDefault;
    dv.prototype.stopPropagation = dv.prototype.stopPropagation;
    oj.prototype.type = oj.prototype.type;
    oj.prototype.target = oj.prototype.target;
    oj.prototype.preventDefault = oj.prototype.preventDefault;
    oj.prototype.stopPropagation = oj.prototype.stopPropagation;
    aj.prototype.getActive = aj.prototype.f;
    aj.prototype.getMap = aj.prototype.l;
    aj.prototype.setActive = aj.prototype.i;
    aj.prototype.get = aj.prototype.get;
    aj.prototype.getKeys = aj.prototype.K;
    aj.prototype.getProperties = aj.prototype.L;
    aj.prototype.set = aj.prototype.set;
    aj.prototype.setProperties = aj.prototype.C;
    aj.prototype.unset = aj.prototype.P;
    aj.prototype.changed = aj.prototype.u;
    aj.prototype.dispatchEvent = aj.prototype.b;
    aj.prototype.getRevision = aj.prototype.H;
    aj.prototype.on = aj.prototype.D;
    aj.prototype.once = aj.prototype.I;
    aj.prototype.un = aj.prototype.G;
    aj.prototype.unByKey = aj.prototype.J;
    pj.prototype.getActive = pj.prototype.f;
    pj.prototype.getMap = pj.prototype.l;
    pj.prototype.setActive = pj.prototype.i;
    pj.prototype.get = pj.prototype.get;
    pj.prototype.getKeys = pj.prototype.K;
    pj.prototype.getProperties = pj.prototype.L;
    pj.prototype.set = pj.prototype.set;
    pj.prototype.setProperties = pj.prototype.C;
    pj.prototype.unset = pj.prototype.P;
    pj.prototype.changed = pj.prototype.u;
    pj.prototype.dispatchEvent = pj.prototype.b;
    pj.prototype.getRevision = pj.prototype.H;
    pj.prototype.on = pj.prototype.D;
    pj.prototype.once = pj.prototype.I;
    pj.prototype.un = pj.prototype.G;
    pj.prototype.unByKey = pj.prototype.J;
    dj.prototype.getActive = dj.prototype.f;
    dj.prototype.getMap = dj.prototype.l;
    dj.prototype.setActive = dj.prototype.i;
    dj.prototype.get = dj.prototype.get;
    dj.prototype.getKeys = dj.prototype.K;
    dj.prototype.getProperties = dj.prototype.L;
    dj.prototype.set = dj.prototype.set;
    dj.prototype.setProperties = dj.prototype.C;
    dj.prototype.unset = dj.prototype.P;
    dj.prototype.changed = dj.prototype.u;
    dj.prototype.dispatchEvent = dj.prototype.b;
    dj.prototype.getRevision = dj.prototype.H;
    dj.prototype.on = dj.prototype.D;
    dj.prototype.once = dj.prototype.I;
    dj.prototype.un = dj.prototype.G;
    dj.prototype.unByKey = dj.prototype.J;
    fv.prototype.getActive = fv.prototype.f;
    fv.prototype.getMap = fv.prototype.l;
    fv.prototype.setActive = fv.prototype.i;
    fv.prototype.get = fv.prototype.get;
    fv.prototype.getKeys = fv.prototype.K;
    fv.prototype.getProperties = fv.prototype.L;
    fv.prototype.set = fv.prototype.set;
    fv.prototype.setProperties = fv.prototype.C;
    fv.prototype.unset = fv.prototype.P;
    fv.prototype.changed = fv.prototype.u;
    fv.prototype.dispatchEvent = fv.prototype.b;
    fv.prototype.getRevision = fv.prototype.H;
    fv.prototype.on = fv.prototype.D;
    fv.prototype.once = fv.prototype.I;
    fv.prototype.un = fv.prototype.G;
    fv.prototype.unByKey = fv.prototype.J;
    hj.prototype.getActive = hj.prototype.f;
    hj.prototype.getMap = hj.prototype.l;
    hj.prototype.setActive = hj.prototype.i;
    hj.prototype.get = hj.prototype.get;
    hj.prototype.getKeys = hj.prototype.K;
    hj.prototype.getProperties = hj.prototype.L;
    hj.prototype.set = hj.prototype.set;
    hj.prototype.setProperties = hj.prototype.C;
    hj.prototype.unset = hj.prototype.P;
    hj.prototype.changed = hj.prototype.u;
    hj.prototype.dispatchEvent = hj.prototype.b;
    hj.prototype.getRevision = hj.prototype.H;
    hj.prototype.on = hj.prototype.D;
    hj.prototype.once = hj.prototype.I;
    hj.prototype.un = hj.prototype.G;
    hj.prototype.unByKey = hj.prototype.J;
    uj.prototype.getGeometry = uj.prototype.W;
    uj.prototype.getActive = uj.prototype.f;
    uj.prototype.getMap = uj.prototype.l;
    uj.prototype.setActive = uj.prototype.i;
    uj.prototype.get = uj.prototype.get;
    uj.prototype.getKeys = uj.prototype.K;
    uj.prototype.getProperties = uj.prototype.L;
    uj.prototype.set = uj.prototype.set;
    uj.prototype.setProperties = uj.prototype.C;
    uj.prototype.unset = uj.prototype.P;
    uj.prototype.changed = uj.prototype.u;
    uj.prototype.dispatchEvent = uj.prototype.b;
    uj.prototype.getRevision = uj.prototype.H;
    uj.prototype.on = uj.prototype.D;
    uj.prototype.once = uj.prototype.I;
    uj.prototype.un = uj.prototype.G;
    uj.prototype.unByKey = uj.prototype.J;
    jv.prototype.type = jv.prototype.type;
    jv.prototype.target = jv.prototype.target;
    jv.prototype.preventDefault = jv.prototype.preventDefault;
    jv.prototype.stopPropagation = jv.prototype.stopPropagation;
    kv.prototype.getActive = kv.prototype.f;
    kv.prototype.getMap = kv.prototype.l;
    kv.prototype.setActive = kv.prototype.i;
    kv.prototype.get = kv.prototype.get;
    kv.prototype.getKeys = kv.prototype.K;
    kv.prototype.getProperties = kv.prototype.L;
    kv.prototype.set = kv.prototype.set;
    kv.prototype.setProperties = kv.prototype.C;
    kv.prototype.unset = kv.prototype.P;
    kv.prototype.changed = kv.prototype.u;
    kv.prototype.dispatchEvent = kv.prototype.b;
    kv.prototype.getRevision = kv.prototype.H;
    kv.prototype.on = kv.prototype.D;
    kv.prototype.once = kv.prototype.I;
    kv.prototype.un = kv.prototype.G;
    kv.prototype.unByKey = kv.prototype.J;
    vj.prototype.getActive = vj.prototype.f;
    vj.prototype.getMap = vj.prototype.l;
    vj.prototype.setActive = vj.prototype.i;
    vj.prototype.get = vj.prototype.get;
    vj.prototype.getKeys = vj.prototype.K;
    vj.prototype.getProperties = vj.prototype.L;
    vj.prototype.set = vj.prototype.set;
    vj.prototype.setProperties = vj.prototype.C;
    vj.prototype.unset = vj.prototype.P;
    vj.prototype.changed = vj.prototype.u;
    vj.prototype.dispatchEvent = vj.prototype.b;
    vj.prototype.getRevision = vj.prototype.H;
    vj.prototype.on = vj.prototype.D;
    vj.prototype.once = vj.prototype.I;
    vj.prototype.un = vj.prototype.G;
    vj.prototype.unByKey = vj.prototype.J;
    xj.prototype.getActive = xj.prototype.f;
    xj.prototype.getMap = xj.prototype.l;
    xj.prototype.setActive = xj.prototype.i;
    xj.prototype.get = xj.prototype.get;
    xj.prototype.getKeys = xj.prototype.K;
    xj.prototype.getProperties = xj.prototype.L;
    xj.prototype.set = xj.prototype.set;
    xj.prototype.setProperties = xj.prototype.C;
    xj.prototype.unset = xj.prototype.P;
    xj.prototype.changed = xj.prototype.u;
    xj.prototype.dispatchEvent = xj.prototype.b;
    xj.prototype.getRevision = xj.prototype.H;
    xj.prototype.on = xj.prototype.D;
    xj.prototype.once = xj.prototype.I;
    xj.prototype.un = xj.prototype.G;
    xj.prototype.unByKey = xj.prototype.J;
    Av.prototype.type = Av.prototype.type;
    Av.prototype.target = Av.prototype.target;
    Av.prototype.preventDefault = Av.prototype.preventDefault;
    Av.prototype.stopPropagation = Av.prototype.stopPropagation;
    Bv.prototype.getActive = Bv.prototype.f;
    Bv.prototype.getMap = Bv.prototype.l;
    Bv.prototype.setActive = Bv.prototype.i;
    Bv.prototype.get = Bv.prototype.get;
    Bv.prototype.getKeys = Bv.prototype.K;
    Bv.prototype.getProperties = Bv.prototype.L;
    Bv.prototype.set = Bv.prototype.set;
    Bv.prototype.setProperties = Bv.prototype.C;
    Bv.prototype.unset = Bv.prototype.P;
    Bv.prototype.changed = Bv.prototype.u;
    Bv.prototype.dispatchEvent = Bv.prototype.b;
    Bv.prototype.getRevision = Bv.prototype.H;
    Bv.prototype.on = Bv.prototype.D;
    Bv.prototype.once = Bv.prototype.I;
    Bv.prototype.un = Bv.prototype.G;
    Bv.prototype.unByKey = Bv.prototype.J;
    zj.prototype.getActive = zj.prototype.f;
    zj.prototype.getMap = zj.prototype.l;
    zj.prototype.setActive = zj.prototype.i;
    zj.prototype.get = zj.prototype.get;
    zj.prototype.getKeys = zj.prototype.K;
    zj.prototype.getProperties = zj.prototype.L;
    zj.prototype.set = zj.prototype.set;
    zj.prototype.setProperties = zj.prototype.C;
    zj.prototype.unset = zj.prototype.P;
    zj.prototype.changed = zj.prototype.u;
    zj.prototype.dispatchEvent = zj.prototype.b;
    zj.prototype.getRevision = zj.prototype.H;
    zj.prototype.on = zj.prototype.D;
    zj.prototype.once = zj.prototype.I;
    zj.prototype.un = zj.prototype.G;
    zj.prototype.unByKey = zj.prototype.J;
    Bj.prototype.getActive = Bj.prototype.f;
    Bj.prototype.getMap = Bj.prototype.l;
    Bj.prototype.setActive = Bj.prototype.i;
    Bj.prototype.get = Bj.prototype.get;
    Bj.prototype.getKeys = Bj.prototype.K;
    Bj.prototype.getProperties = Bj.prototype.L;
    Bj.prototype.set = Bj.prototype.set;
    Bj.prototype.setProperties = Bj.prototype.C;
    Bj.prototype.unset = Bj.prototype.P;
    Bj.prototype.changed = Bj.prototype.u;
    Bj.prototype.dispatchEvent = Bj.prototype.b;
    Bj.prototype.getRevision = Bj.prototype.H;
    Bj.prototype.on = Bj.prototype.D;
    Bj.prototype.once = Bj.prototype.I;
    Bj.prototype.un = Bj.prototype.G;
    Bj.prototype.unByKey = Bj.prototype.J;
    Fj.prototype.getActive = Fj.prototype.f;
    Fj.prototype.getMap = Fj.prototype.l;
    Fj.prototype.setActive = Fj.prototype.i;
    Fj.prototype.get = Fj.prototype.get;
    Fj.prototype.getKeys = Fj.prototype.K;
    Fj.prototype.getProperties = Fj.prototype.L;
    Fj.prototype.set = Fj.prototype.set;
    Fj.prototype.setProperties = Fj.prototype.C;
    Fj.prototype.unset = Fj.prototype.P;
    Fj.prototype.changed = Fj.prototype.u;
    Fj.prototype.dispatchEvent = Fj.prototype.b;
    Fj.prototype.getRevision = Fj.prototype.H;
    Fj.prototype.on = Fj.prototype.D;
    Fj.prototype.once = Fj.prototype.I;
    Fj.prototype.un = Fj.prototype.G;
    Fj.prototype.unByKey = Fj.prototype.J;
    Ov.prototype.type = Ov.prototype.type;
    Ov.prototype.target = Ov.prototype.target;
    Ov.prototype.preventDefault = Ov.prototype.preventDefault;
    Ov.prototype.stopPropagation = Ov.prototype.stopPropagation;
    Pv.prototype.getActive = Pv.prototype.f;
    Pv.prototype.getMap = Pv.prototype.l;
    Pv.prototype.setActive = Pv.prototype.i;
    Pv.prototype.get = Pv.prototype.get;
    Pv.prototype.getKeys = Pv.prototype.K;
    Pv.prototype.getProperties = Pv.prototype.L;
    Pv.prototype.set = Pv.prototype.set;
    Pv.prototype.setProperties = Pv.prototype.C;
    Pv.prototype.unset = Pv.prototype.P;
    Pv.prototype.changed = Pv.prototype.u;
    Pv.prototype.dispatchEvent = Pv.prototype.b;
    Pv.prototype.getRevision = Pv.prototype.H;
    Pv.prototype.on = Pv.prototype.D;
    Pv.prototype.once = Pv.prototype.I;
    Pv.prototype.un = Pv.prototype.G;
    Pv.prototype.unByKey = Pv.prototype.J;
    Sv.prototype.getActive = Sv.prototype.f;
    Sv.prototype.getMap = Sv.prototype.l;
    Sv.prototype.setActive = Sv.prototype.i;
    Sv.prototype.get = Sv.prototype.get;
    Sv.prototype.getKeys = Sv.prototype.K;
    Sv.prototype.getProperties = Sv.prototype.L;
    Sv.prototype.set = Sv.prototype.set;
    Sv.prototype.setProperties = Sv.prototype.C;
    Sv.prototype.unset = Sv.prototype.P;
    Sv.prototype.changed = Sv.prototype.u;
    Sv.prototype.dispatchEvent = Sv.prototype.b;
    Sv.prototype.getRevision = Sv.prototype.H;
    Sv.prototype.on = Sv.prototype.D;
    Sv.prototype.once = Sv.prototype.I;
    Sv.prototype.un = Sv.prototype.G;
    Sv.prototype.unByKey = Sv.prototype.J;
    Wv.prototype.type = Wv.prototype.type;
    Wv.prototype.target = Wv.prototype.target;
    Wv.prototype.preventDefault = Wv.prototype.preventDefault;
    Wv.prototype.stopPropagation = Wv.prototype.stopPropagation;
    Xv.prototype.getActive = Xv.prototype.f;
    Xv.prototype.getMap = Xv.prototype.l;
    Xv.prototype.setActive = Xv.prototype.i;
    Xv.prototype.get = Xv.prototype.get;
    Xv.prototype.getKeys = Xv.prototype.K;
    Xv.prototype.getProperties = Xv.prototype.L;
    Xv.prototype.set = Xv.prototype.set;
    Xv.prototype.setProperties = Xv.prototype.C;
    Xv.prototype.unset = Xv.prototype.P;
    Xv.prototype.changed = Xv.prototype.u;
    Xv.prototype.dispatchEvent = Xv.prototype.b;
    Xv.prototype.getRevision = Xv.prototype.H;
    Xv.prototype.on = Xv.prototype.D;
    Xv.prototype.once = Xv.prototype.I;
    Xv.prototype.un = Xv.prototype.G;
    Xv.prototype.unByKey = Xv.prototype.J;
    dd.prototype.get = dd.prototype.get;
    dd.prototype.getKeys = dd.prototype.K;
    dd.prototype.getProperties = dd.prototype.L;
    dd.prototype.set = dd.prototype.set;
    dd.prototype.setProperties = dd.prototype.C;
    dd.prototype.unset = dd.prototype.P;
    dd.prototype.changed = dd.prototype.u;
    dd.prototype.dispatchEvent = dd.prototype.b;
    dd.prototype.getRevision = dd.prototype.H;
    dd.prototype.on = dd.prototype.D;
    dd.prototype.once = dd.prototype.I;
    dd.prototype.un = dd.prototype.G;
    dd.prototype.unByKey = dd.prototype.J;
    sd.prototype.getClosestPoint = sd.prototype.ub;
    sd.prototype.getExtent = sd.prototype.O;
    sd.prototype.rotate = sd.prototype.rotate;
    sd.prototype.simplify = sd.prototype.yb;
    sd.prototype.transform = sd.prototype.hb;
    sd.prototype.get = sd.prototype.get;
    sd.prototype.getKeys = sd.prototype.K;
    sd.prototype.getProperties = sd.prototype.L;
    sd.prototype.set = sd.prototype.set;
    sd.prototype.setProperties = sd.prototype.C;
    sd.prototype.unset = sd.prototype.P;
    sd.prototype.changed = sd.prototype.u;
    sd.prototype.dispatchEvent = sd.prototype.b;
    sd.prototype.getRevision = sd.prototype.H;
    sd.prototype.on = sd.prototype.D;
    sd.prototype.once = sd.prototype.I;
    sd.prototype.un = sd.prototype.G;
    sd.prototype.unByKey = sd.prototype.J;
    Ou.prototype.getFirstCoordinate = Ou.prototype.Fb;
    Ou.prototype.getLastCoordinate = Ou.prototype.Gb;
    Ou.prototype.getLayout = Ou.prototype.Hb;
    Ou.prototype.rotate = Ou.prototype.rotate;
    Ou.prototype.getClosestPoint = Ou.prototype.ub;
    Ou.prototype.getExtent = Ou.prototype.O;
    Ou.prototype.simplify = Ou.prototype.yb;
    Ou.prototype.get = Ou.prototype.get;
    Ou.prototype.getKeys = Ou.prototype.K;
    Ou.prototype.getProperties = Ou.prototype.L;
    Ou.prototype.set = Ou.prototype.set;
    Ou.prototype.setProperties = Ou.prototype.C;
    Ou.prototype.unset = Ou.prototype.P;
    Ou.prototype.changed = Ou.prototype.u;
    Ou.prototype.dispatchEvent = Ou.prototype.b;
    Ou.prototype.getRevision = Ou.prototype.H;
    Ou.prototype.on = Ou.prototype.D;
    Ou.prototype.once = Ou.prototype.I;
    Ou.prototype.un = Ou.prototype.G;
    Ou.prototype.unByKey = Ou.prototype.J;
    Do.prototype.getClosestPoint = Do.prototype.ub;
    Do.prototype.getExtent = Do.prototype.O;
    Do.prototype.rotate = Do.prototype.rotate;
    Do.prototype.simplify = Do.prototype.yb;
    Do.prototype.transform = Do.prototype.hb;
    Do.prototype.get = Do.prototype.get;
    Do.prototype.getKeys = Do.prototype.K;
    Do.prototype.getProperties = Do.prototype.L;
    Do.prototype.set = Do.prototype.set;
    Do.prototype.setProperties = Do.prototype.C;
    Do.prototype.unset = Do.prototype.P;
    Do.prototype.changed = Do.prototype.u;
    Do.prototype.dispatchEvent = Do.prototype.b;
    Do.prototype.getRevision = Do.prototype.H;
    Do.prototype.on = Do.prototype.D;
    Do.prototype.once = Do.prototype.I;
    Do.prototype.un = Do.prototype.G;
    Do.prototype.unByKey = Do.prototype.J;
    Kd.prototype.getFirstCoordinate = Kd.prototype.Fb;
    Kd.prototype.getLastCoordinate = Kd.prototype.Gb;
    Kd.prototype.getLayout = Kd.prototype.Hb;
    Kd.prototype.rotate = Kd.prototype.rotate;
    Kd.prototype.getClosestPoint = Kd.prototype.ub;
    Kd.prototype.getExtent = Kd.prototype.O;
    Kd.prototype.simplify = Kd.prototype.yb;
    Kd.prototype.transform = Kd.prototype.hb;
    Kd.prototype.get = Kd.prototype.get;
    Kd.prototype.getKeys = Kd.prototype.K;
    Kd.prototype.getProperties = Kd.prototype.L;
    Kd.prototype.set = Kd.prototype.set;
    Kd.prototype.setProperties = Kd.prototype.C;
    Kd.prototype.unset = Kd.prototype.P;
    Kd.prototype.changed = Kd.prototype.u;
    Kd.prototype.dispatchEvent = Kd.prototype.b;
    Kd.prototype.getRevision = Kd.prototype.H;
    Kd.prototype.on = Kd.prototype.D;
    Kd.prototype.once = Kd.prototype.I;
    Kd.prototype.un = Kd.prototype.G;
    Kd.prototype.unByKey = Kd.prototype.J;
    T.prototype.getFirstCoordinate = T.prototype.Fb;
    T.prototype.getLastCoordinate = T.prototype.Gb;
    T.prototype.getLayout = T.prototype.Hb;
    T.prototype.rotate = T.prototype.rotate;
    T.prototype.getClosestPoint = T.prototype.ub;
    T.prototype.getExtent = T.prototype.O;
    T.prototype.simplify = T.prototype.yb;
    T.prototype.transform = T.prototype.hb;
    T.prototype.get = T.prototype.get;
    T.prototype.getKeys = T.prototype.K;
    T.prototype.getProperties = T.prototype.L;
    T.prototype.set = T.prototype.set;
    T.prototype.setProperties = T.prototype.C;
    T.prototype.unset = T.prototype.P;
    T.prototype.changed = T.prototype.u;
    T.prototype.dispatchEvent = T.prototype.b;
    T.prototype.getRevision = T.prototype.H;
    T.prototype.on = T.prototype.D;
    T.prototype.once = T.prototype.I;
    T.prototype.un = T.prototype.G;
    T.prototype.unByKey = T.prototype.J;
    U.prototype.getFirstCoordinate = U.prototype.Fb;
    U.prototype.getLastCoordinate = U.prototype.Gb;
    U.prototype.getLayout = U.prototype.Hb;
    U.prototype.rotate = U.prototype.rotate;
    U.prototype.getClosestPoint = U.prototype.ub;
    U.prototype.getExtent = U.prototype.O;
    U.prototype.simplify = U.prototype.yb;
    U.prototype.transform = U.prototype.hb;
    U.prototype.get = U.prototype.get;
    U.prototype.getKeys = U.prototype.K;
    U.prototype.getProperties = U.prototype.L;
    U.prototype.set = U.prototype.set;
    U.prototype.setProperties = U.prototype.C;
    U.prototype.unset = U.prototype.P;
    U.prototype.changed = U.prototype.u;
    U.prototype.dispatchEvent = U.prototype.b;
    U.prototype.getRevision = U.prototype.H;
    U.prototype.on = U.prototype.D;
    U.prototype.once = U.prototype.I;
    U.prototype.un = U.prototype.G;
    U.prototype.unByKey = U.prototype.J;
    so.prototype.getFirstCoordinate = so.prototype.Fb;
    so.prototype.getLastCoordinate = so.prototype.Gb;
    so.prototype.getLayout = so.prototype.Hb;
    so.prototype.rotate = so.prototype.rotate;
    so.prototype.getClosestPoint = so.prototype.ub;
    so.prototype.getExtent = so.prototype.O;
    so.prototype.simplify = so.prototype.yb;
    so.prototype.transform = so.prototype.hb;
    so.prototype.get = so.prototype.get;
    so.prototype.getKeys = so.prototype.K;
    so.prototype.getProperties = so.prototype.L;
    so.prototype.set = so.prototype.set;
    so.prototype.setProperties = so.prototype.C;
    so.prototype.unset = so.prototype.P;
    so.prototype.changed = so.prototype.u;
    so.prototype.dispatchEvent = so.prototype.b;
    so.prototype.getRevision = so.prototype.H;
    so.prototype.on = so.prototype.D;
    so.prototype.once = so.prototype.I;
    so.prototype.un = so.prototype.G;
    so.prototype.unByKey = so.prototype.J;
    to.prototype.getFirstCoordinate = to.prototype.Fb;
    to.prototype.getLastCoordinate = to.prototype.Gb;
    to.prototype.getLayout = to.prototype.Hb;
    to.prototype.rotate = to.prototype.rotate;
    to.prototype.getClosestPoint = to.prototype.ub;
    to.prototype.getExtent = to.prototype.O;
    to.prototype.simplify = to.prototype.yb;
    to.prototype.transform = to.prototype.hb;
    to.prototype.get = to.prototype.get;
    to.prototype.getKeys = to.prototype.K;
    to.prototype.getProperties = to.prototype.L;
    to.prototype.set = to.prototype.set;
    to.prototype.setProperties = to.prototype.C;
    to.prototype.unset = to.prototype.P;
    to.prototype.changed = to.prototype.u;
    to.prototype.dispatchEvent = to.prototype.b;
    to.prototype.getRevision = to.prototype.H;
    to.prototype.on = to.prototype.D;
    to.prototype.once = to.prototype.I;
    to.prototype.un = to.prototype.G;
    to.prototype.unByKey = to.prototype.J;
    D.prototype.getFirstCoordinate = D.prototype.Fb;
    D.prototype.getLastCoordinate = D.prototype.Gb;
    D.prototype.getLayout = D.prototype.Hb;
    D.prototype.rotate = D.prototype.rotate;
    D.prototype.getClosestPoint = D.prototype.ub;
    D.prototype.getExtent = D.prototype.O;
    D.prototype.simplify = D.prototype.yb;
    D.prototype.transform = D.prototype.hb;
    D.prototype.get = D.prototype.get;
    D.prototype.getKeys = D.prototype.K;
    D.prototype.getProperties = D.prototype.L;
    D.prototype.set = D.prototype.set;
    D.prototype.setProperties = D.prototype.C;
    D.prototype.unset = D.prototype.P;
    D.prototype.changed = D.prototype.u;
    D.prototype.dispatchEvent = D.prototype.b;
    D.prototype.getRevision = D.prototype.H;
    D.prototype.on = D.prototype.D;
    D.prototype.once = D.prototype.I;
    D.prototype.un = D.prototype.G;
    D.prototype.unByKey = D.prototype.J;
    F.prototype.getFirstCoordinate = F.prototype.Fb;
    F.prototype.getLastCoordinate = F.prototype.Gb;
    F.prototype.getLayout = F.prototype.Hb;
    F.prototype.rotate = F.prototype.rotate;
    F.prototype.getClosestPoint = F.prototype.ub;
    F.prototype.getExtent = F.prototype.O;
    F.prototype.simplify = F.prototype.yb;
    F.prototype.transform = F.prototype.hb;
    F.prototype.get = F.prototype.get;
    F.prototype.getKeys = F.prototype.K;
    F.prototype.getProperties = F.prototype.L;
    F.prototype.set = F.prototype.set;
    F.prototype.setProperties = F.prototype.C;
    F.prototype.unset = F.prototype.P;
    F.prototype.changed = F.prototype.u;
    F.prototype.dispatchEvent = F.prototype.b;
    F.prototype.getRevision = F.prototype.H;
    F.prototype.on = F.prototype.D;
    F.prototype.once = F.prototype.I;
    F.prototype.un = F.prototype.G;
    F.prototype.unByKey = F.prototype.J;
    vs.prototype.get = vs.prototype.get;
    vs.prototype.getKeys = vs.prototype.K;
    vs.prototype.getProperties = vs.prototype.L;
    vs.prototype.set = vs.prototype.set;
    vs.prototype.setProperties = vs.prototype.C;
    vs.prototype.unset = vs.prototype.P;
    vs.prototype.changed = vs.prototype.u;
    vs.prototype.dispatchEvent = vs.prototype.b;
    vs.prototype.getRevision = vs.prototype.H;
    vs.prototype.on = vs.prototype.D;
    vs.prototype.once = vs.prototype.I;
    vs.prototype.un = vs.prototype.G;
    vs.prototype.unByKey = vs.prototype.J;
    ws.prototype.get = ws.prototype.get;
    ws.prototype.getKeys = ws.prototype.K;
    ws.prototype.getProperties = ws.prototype.L;
    ws.prototype.set = ws.prototype.set;
    ws.prototype.setProperties = ws.prototype.C;
    ws.prototype.unset = ws.prototype.P;
    ws.prototype.changed = ws.prototype.u;
    ws.prototype.dispatchEvent = ws.prototype.b;
    ws.prototype.getRevision = ws.prototype.H;
    ws.prototype.on = ws.prototype.D;
    ws.prototype.once = ws.prototype.I;
    ws.prototype.un = ws.prototype.G;
    ws.prototype.unByKey = ws.prototype.J;
    xs.prototype.get = xs.prototype.get;
    xs.prototype.getKeys = xs.prototype.K;
    xs.prototype.getProperties = xs.prototype.L;
    xs.prototype.set = xs.prototype.set;
    xs.prototype.setProperties = xs.prototype.C;
    xs.prototype.unset = xs.prototype.P;
    xs.prototype.changed = xs.prototype.u;
    xs.prototype.dispatchEvent = xs.prototype.b;
    xs.prototype.getRevision = xs.prototype.H;
    xs.prototype.on = xs.prototype.D;
    xs.prototype.once = xs.prototype.I;
    xs.prototype.un = xs.prototype.G;
    xs.prototype.unByKey = xs.prototype.J;
    ss.prototype.get = ss.prototype.get;
    ss.prototype.getKeys = ss.prototype.K;
    ss.prototype.getProperties = ss.prototype.L;
    ss.prototype.set = ss.prototype.set;
    ss.prototype.setProperties = ss.prototype.C;
    ss.prototype.unset = ss.prototype.P;
    ss.prototype.changed = ss.prototype.u;
    ss.prototype.dispatchEvent = ss.prototype.b;
    ss.prototype.getRevision = ss.prototype.H;
    ss.prototype.on = ss.prototype.D;
    ss.prototype.once = ss.prototype.I;
    ss.prototype.un = ss.prototype.G;
    ss.prototype.unByKey = ss.prototype.J;
    ys.prototype.get = ys.prototype.get;
    ys.prototype.getKeys = ys.prototype.K;
    ys.prototype.getProperties = ys.prototype.L;
    ys.prototype.set = ys.prototype.set;
    ys.prototype.setProperties = ys.prototype.C;
    ys.prototype.unset = ys.prototype.P;
    ys.prototype.changed = ys.prototype.u;
    ys.prototype.dispatchEvent = ys.prototype.b;
    ys.prototype.getRevision = ys.prototype.H;
    ys.prototype.on = ys.prototype.D;
    ys.prototype.once = ys.prototype.I;
    ys.prototype.un = ys.prototype.G;
    ys.prototype.unByKey = ys.prototype.J;
    zs.prototype.get = zs.prototype.get;
    zs.prototype.getKeys = zs.prototype.K;
    zs.prototype.getProperties = zs.prototype.L;
    zs.prototype.set = zs.prototype.set;
    zs.prototype.setProperties = zs.prototype.C;
    zs.prototype.unset = zs.prototype.P;
    zs.prototype.changed = zs.prototype.u;
    zs.prototype.dispatchEvent = zs.prototype.b;
    zs.prototype.getRevision = zs.prototype.H;
    zs.prototype.on = zs.prototype.D;
    zs.prototype.once = zs.prototype.I;
    zs.prototype.un = zs.prototype.G;
    zs.prototype.unByKey = zs.prototype.J;
    us.prototype.get = us.prototype.get;
    us.prototype.getKeys = us.prototype.K;
    us.prototype.getProperties = us.prototype.L;
    us.prototype.set = us.prototype.set;
    us.prototype.setProperties = us.prototype.C;
    us.prototype.unset = us.prototype.P;
    us.prototype.changed = us.prototype.u;
    us.prototype.dispatchEvent = us.prototype.b;
    us.prototype.getRevision = us.prototype.H;
    us.prototype.on = us.prototype.D;
    us.prototype.once = us.prototype.I;
    us.prototype.un = us.prototype.G;
    us.prototype.unByKey = us.prototype.J;
    As.prototype.get = As.prototype.get;
    As.prototype.getKeys = As.prototype.K;
    As.prototype.getProperties = As.prototype.L;
    As.prototype.set = As.prototype.set;
    As.prototype.setProperties = As.prototype.C;
    As.prototype.unset = As.prototype.P;
    As.prototype.changed = As.prototype.u;
    As.prototype.dispatchEvent = As.prototype.b;
    As.prototype.getRevision = As.prototype.H;
    As.prototype.on = As.prototype.D;
    As.prototype.once = As.prototype.I;
    As.prototype.un = As.prototype.G;
    As.prototype.unByKey = As.prototype.J;
    Bs.prototype.get = Bs.prototype.get;
    Bs.prototype.getKeys = Bs.prototype.K;
    Bs.prototype.getProperties = Bs.prototype.L;
    Bs.prototype.set = Bs.prototype.set;
    Bs.prototype.setProperties = Bs.prototype.C;
    Bs.prototype.unset = Bs.prototype.P;
    Bs.prototype.changed = Bs.prototype.u;
    Bs.prototype.dispatchEvent = Bs.prototype.b;
    Bs.prototype.getRevision = Bs.prototype.H;
    Bs.prototype.on = Bs.prototype.D;
    Bs.prototype.once = Bs.prototype.I;
    Bs.prototype.un = Bs.prototype.G;
    Bs.prototype.unByKey = Bs.prototype.J;
    Cs.prototype.get = Cs.prototype.get;
    Cs.prototype.getKeys = Cs.prototype.K;
    Cs.prototype.getProperties = Cs.prototype.L;
    Cs.prototype.set = Cs.prototype.set;
    Cs.prototype.setProperties = Cs.prototype.C;
    Cs.prototype.unset = Cs.prototype.P;
    Cs.prototype.changed = Cs.prototype.u;
    Cs.prototype.dispatchEvent = Cs.prototype.b;
    Cs.prototype.getRevision = Cs.prototype.H;
    Cs.prototype.on = Cs.prototype.D;
    Cs.prototype.once = Cs.prototype.I;
    Cs.prototype.un = Cs.prototype.G;
    Cs.prototype.unByKey = Cs.prototype.J;
    Ds.prototype.get = Ds.prototype.get;
    Ds.prototype.getKeys = Ds.prototype.K;
    Ds.prototype.getProperties = Ds.prototype.L;
    Ds.prototype.set = Ds.prototype.set;
    Ds.prototype.setProperties = Ds.prototype.C;
    Ds.prototype.unset = Ds.prototype.P;
    Ds.prototype.changed = Ds.prototype.u;
    Ds.prototype.dispatchEvent = Ds.prototype.b;
    Ds.prototype.getRevision = Ds.prototype.H;
    Ds.prototype.on = Ds.prototype.D;
    Ds.prototype.once = Ds.prototype.I;
    Ds.prototype.un = Ds.prototype.G;
    Ds.prototype.unByKey = Ds.prototype.J;
    Es.prototype.get = Es.prototype.get;
    Es.prototype.getKeys = Es.prototype.K;
    Es.prototype.getProperties = Es.prototype.L;
    Es.prototype.set = Es.prototype.set;
    Es.prototype.setProperties = Es.prototype.C;
    Es.prototype.unset = Es.prototype.P;
    Es.prototype.changed = Es.prototype.u;
    Es.prototype.dispatchEvent = Es.prototype.b;
    Es.prototype.getRevision = Es.prototype.H;
    Es.prototype.on = Es.prototype.D;
    Es.prototype.once = Es.prototype.I;
    Es.prototype.un = Es.prototype.G;
    Es.prototype.unByKey = Es.prototype.J;
    Fs.prototype.get = Fs.prototype.get;
    Fs.prototype.getKeys = Fs.prototype.K;
    Fs.prototype.getProperties = Fs.prototype.L;
    Fs.prototype.set = Fs.prototype.set;
    Fs.prototype.setProperties = Fs.prototype.C;
    Fs.prototype.unset = Fs.prototype.P;
    Fs.prototype.changed = Fs.prototype.u;
    Fs.prototype.dispatchEvent = Fs.prototype.b;
    Fs.prototype.getRevision = Fs.prototype.H;
    Fs.prototype.on = Fs.prototype.D;
    Fs.prototype.once = Fs.prototype.I;
    Fs.prototype.un = Fs.prototype.G;
    Fs.prototype.unByKey = Fs.prototype.J;
    Gs.prototype.get = Gs.prototype.get;
    Gs.prototype.getKeys = Gs.prototype.K;
    Gs.prototype.getProperties = Gs.prototype.L;
    Gs.prototype.set = Gs.prototype.set;
    Gs.prototype.setProperties = Gs.prototype.C;
    Gs.prototype.unset = Gs.prototype.P;
    Gs.prototype.changed = Gs.prototype.u;
    Gs.prototype.dispatchEvent = Gs.prototype.b;
    Gs.prototype.getRevision = Gs.prototype.H;
    Gs.prototype.on = Gs.prototype.D;
    Gs.prototype.once = Gs.prototype.I;
    Gs.prototype.un = Gs.prototype.G;
    Gs.prototype.unByKey = Gs.prototype.J;
    Hs.prototype.get = Hs.prototype.get;
    Hs.prototype.getKeys = Hs.prototype.K;
    Hs.prototype.getProperties = Hs.prototype.L;
    Hs.prototype.set = Hs.prototype.set;
    Hs.prototype.setProperties = Hs.prototype.C;
    Hs.prototype.unset = Hs.prototype.P;
    Hs.prototype.changed = Hs.prototype.u;
    Hs.prototype.dispatchEvent = Hs.prototype.b;
    Hs.prototype.getRevision = Hs.prototype.H;
    Hs.prototype.on = Hs.prototype.D;
    Hs.prototype.once = Hs.prototype.I;
    Hs.prototype.un = Hs.prototype.G;
    Hs.prototype.unByKey = Hs.prototype.J;
    Is.prototype.get = Is.prototype.get;
    Is.prototype.getKeys = Is.prototype.K;
    Is.prototype.getProperties = Is.prototype.L;
    Is.prototype.set = Is.prototype.set;
    Is.prototype.setProperties = Is.prototype.C;
    Is.prototype.unset = Is.prototype.P;
    Is.prototype.changed = Is.prototype.u;
    Is.prototype.dispatchEvent = Is.prototype.b;
    Is.prototype.getRevision = Is.prototype.H;
    Is.prototype.on = Is.prototype.D;
    Is.prototype.once = Is.prototype.I;
    Is.prototype.un = Is.prototype.G;
    Is.prototype.unByKey = Is.prototype.J;
    Js.prototype.get = Js.prototype.get;
    Js.prototype.getKeys = Js.prototype.K;
    Js.prototype.getProperties = Js.prototype.L;
    Js.prototype.set = Js.prototype.set;
    Js.prototype.setProperties = Js.prototype.C;
    Js.prototype.unset = Js.prototype.P;
    Js.prototype.changed = Js.prototype.u;
    Js.prototype.dispatchEvent = Js.prototype.b;
    Js.prototype.getRevision = Js.prototype.H;
    Js.prototype.on = Js.prototype.D;
    Js.prototype.once = Js.prototype.I;
    Js.prototype.un = Js.prototype.G;
    Js.prototype.unByKey = Js.prototype.J;
    Ks.prototype.get = Ks.prototype.get;
    Ks.prototype.getKeys = Ks.prototype.K;
    Ks.prototype.getProperties = Ks.prototype.L;
    Ks.prototype.set = Ks.prototype.set;
    Ks.prototype.setProperties = Ks.prototype.C;
    Ks.prototype.unset = Ks.prototype.P;
    Ks.prototype.changed = Ks.prototype.u;
    Ks.prototype.dispatchEvent = Ks.prototype.b;
    Ks.prototype.getRevision = Ks.prototype.H;
    Ks.prototype.on = Ks.prototype.D;
    Ks.prototype.once = Ks.prototype.I;
    Ks.prototype.un = Ks.prototype.G;
    Ks.prototype.unByKey = Ks.prototype.J;
    bp.prototype.readFeatures = bp.prototype.Ca;
    cp.prototype.readFeatures = cp.prototype.Ca;
    cp.prototype.readFeatures = cp.prototype.Ca;
    Jf.prototype.get = Jf.prototype.get;
    Jf.prototype.getKeys = Jf.prototype.K;
    Jf.prototype.getProperties = Jf.prototype.L;
    Jf.prototype.set = Jf.prototype.set;
    Jf.prototype.setProperties = Jf.prototype.C;
    Jf.prototype.unset = Jf.prototype.P;
    Jf.prototype.changed = Jf.prototype.u;
    Jf.prototype.dispatchEvent = Jf.prototype.b;
    Jf.prototype.getRevision = Jf.prototype.H;
    Jf.prototype.on = Jf.prototype.D;
    Jf.prototype.once = Jf.prototype.I;
    Jf.prototype.un = Jf.prototype.G;
    Jf.prototype.unByKey = Jf.prototype.J;
    qg.prototype.getMap = qg.prototype.i;
    qg.prototype.setMap = qg.prototype.setMap;
    qg.prototype.setTarget = qg.prototype.c;
    qg.prototype.get = qg.prototype.get;
    qg.prototype.getKeys = qg.prototype.K;
    qg.prototype.getProperties = qg.prototype.L;
    qg.prototype.set = qg.prototype.set;
    qg.prototype.setProperties = qg.prototype.C;
    qg.prototype.unset = qg.prototype.P;
    qg.prototype.changed = qg.prototype.u;
    qg.prototype.dispatchEvent = qg.prototype.b;
    qg.prototype.getRevision = qg.prototype.H;
    qg.prototype.on = qg.prototype.D;
    qg.prototype.once = qg.prototype.I;
    qg.prototype.un = qg.prototype.G;
    qg.prototype.unByKey = qg.prototype.J;
    Bg.prototype.getMap = Bg.prototype.i;
    Bg.prototype.setMap = Bg.prototype.setMap;
    Bg.prototype.setTarget = Bg.prototype.c;
    Bg.prototype.get = Bg.prototype.get;
    Bg.prototype.getKeys = Bg.prototype.K;
    Bg.prototype.getProperties = Bg.prototype.L;
    Bg.prototype.set = Bg.prototype.set;
    Bg.prototype.setProperties = Bg.prototype.C;
    Bg.prototype.unset = Bg.prototype.P;
    Bg.prototype.changed = Bg.prototype.u;
    Bg.prototype.dispatchEvent = Bg.prototype.b;
    Bg.prototype.getRevision = Bg.prototype.H;
    Bg.prototype.on = Bg.prototype.D;
    Bg.prototype.once = Bg.prototype.I;
    Bg.prototype.un = Bg.prototype.G;
    Bg.prototype.unByKey = Bg.prototype.J;
    Cg.prototype.getMap = Cg.prototype.i;
    Cg.prototype.setMap = Cg.prototype.setMap;
    Cg.prototype.setTarget = Cg.prototype.c;
    Cg.prototype.get = Cg.prototype.get;
    Cg.prototype.getKeys = Cg.prototype.K;
    Cg.prototype.getProperties = Cg.prototype.L;
    Cg.prototype.set = Cg.prototype.set;
    Cg.prototype.setProperties = Cg.prototype.C;
    Cg.prototype.unset = Cg.prototype.P;
    Cg.prototype.changed = Cg.prototype.u;
    Cg.prototype.dispatchEvent = Cg.prototype.b;
    Cg.prototype.getRevision = Cg.prototype.H;
    Cg.prototype.on = Cg.prototype.D;
    Cg.prototype.once = Cg.prototype.I;
    Cg.prototype.un = Cg.prototype.G;
    Cg.prototype.unByKey = Cg.prototype.J;
    Sn.prototype.getMap = Sn.prototype.i;
    Sn.prototype.setMap = Sn.prototype.setMap;
    Sn.prototype.setTarget = Sn.prototype.c;
    Sn.prototype.get = Sn.prototype.get;
    Sn.prototype.getKeys = Sn.prototype.K;
    Sn.prototype.getProperties = Sn.prototype.L;
    Sn.prototype.set = Sn.prototype.set;
    Sn.prototype.setProperties = Sn.prototype.C;
    Sn.prototype.unset = Sn.prototype.P;
    Sn.prototype.changed = Sn.prototype.u;
    Sn.prototype.dispatchEvent = Sn.prototype.b;
    Sn.prototype.getRevision = Sn.prototype.H;
    Sn.prototype.on = Sn.prototype.D;
    Sn.prototype.once = Sn.prototype.I;
    Sn.prototype.un = Sn.prototype.G;
    Sn.prototype.unByKey = Sn.prototype.J;
    tg.prototype.getMap = tg.prototype.i;
    tg.prototype.setMap = tg.prototype.setMap;
    tg.prototype.setTarget = tg.prototype.c;
    tg.prototype.get = tg.prototype.get;
    tg.prototype.getKeys = tg.prototype.K;
    tg.prototype.getProperties = tg.prototype.L;
    tg.prototype.set = tg.prototype.set;
    tg.prototype.setProperties = tg.prototype.C;
    tg.prototype.unset = tg.prototype.P;
    tg.prototype.changed = tg.prototype.u;
    tg.prototype.dispatchEvent = tg.prototype.b;
    tg.prototype.getRevision = tg.prototype.H;
    tg.prototype.on = tg.prototype.D;
    tg.prototype.once = tg.prototype.I;
    tg.prototype.un = tg.prototype.G;
    tg.prototype.unByKey = tg.prototype.J;
    Xn.prototype.getMap = Xn.prototype.i;
    Xn.prototype.setMap = Xn.prototype.setMap;
    Xn.prototype.setTarget = Xn.prototype.c;
    Xn.prototype.get = Xn.prototype.get;
    Xn.prototype.getKeys = Xn.prototype.K;
    Xn.prototype.getProperties = Xn.prototype.L;
    Xn.prototype.set = Xn.prototype.set;
    Xn.prototype.setProperties = Xn.prototype.C;
    Xn.prototype.unset = Xn.prototype.P;
    Xn.prototype.changed = Xn.prototype.u;
    Xn.prototype.dispatchEvent = Xn.prototype.b;
    Xn.prototype.getRevision = Xn.prototype.H;
    Xn.prototype.on = Xn.prototype.D;
    Xn.prototype.once = Xn.prototype.I;
    Xn.prototype.un = Xn.prototype.G;
    Xn.prototype.unByKey = Xn.prototype.J;
    vg.prototype.getMap = vg.prototype.i;
    vg.prototype.setMap = vg.prototype.setMap;
    vg.prototype.setTarget = vg.prototype.c;
    vg.prototype.get = vg.prototype.get;
    vg.prototype.getKeys = vg.prototype.K;
    vg.prototype.getProperties = vg.prototype.L;
    vg.prototype.set = vg.prototype.set;
    vg.prototype.setProperties = vg.prototype.C;
    vg.prototype.unset = vg.prototype.P;
    vg.prototype.changed = vg.prototype.u;
    vg.prototype.dispatchEvent = vg.prototype.b;
    vg.prototype.getRevision = vg.prototype.H;
    vg.prototype.on = vg.prototype.D;
    vg.prototype.once = vg.prototype.I;
    vg.prototype.un = vg.prototype.G;
    vg.prototype.unByKey = vg.prototype.J;
    ao.prototype.getMap = ao.prototype.i;
    ao.prototype.setMap = ao.prototype.setMap;
    ao.prototype.setTarget = ao.prototype.c;
    ao.prototype.get = ao.prototype.get;
    ao.prototype.getKeys = ao.prototype.K;
    ao.prototype.getProperties = ao.prototype.L;
    ao.prototype.set = ao.prototype.set;
    ao.prototype.setProperties = ao.prototype.C;
    ao.prototype.unset = ao.prototype.P;
    ao.prototype.changed = ao.prototype.u;
    ao.prototype.dispatchEvent = ao.prototype.b;
    ao.prototype.getRevision = ao.prototype.H;
    ao.prototype.on = ao.prototype.D;
    ao.prototype.once = ao.prototype.I;
    ao.prototype.un = ao.prototype.G;
    ao.prototype.unByKey = ao.prototype.J;
    go.prototype.getMap = go.prototype.i;
    go.prototype.setMap = go.prototype.setMap;
    go.prototype.setTarget = go.prototype.c;
    go.prototype.get = go.prototype.get;
    go.prototype.getKeys = go.prototype.K;
    go.prototype.getProperties = go.prototype.L;
    go.prototype.set = go.prototype.set;
    go.prototype.setProperties = go.prototype.C;
    go.prototype.unset = go.prototype.P;
    go.prototype.changed = go.prototype.u;
    go.prototype.dispatchEvent = go.prototype.b;
    go.prototype.getRevision = go.prototype.H;
    go.prototype.on = go.prototype.D;
    go.prototype.once = go.prototype.I;
    go.prototype.un = go.prototype.G;
    go.prototype.unByKey = go.prototype.J;
    return OPENLAYERS.ol;
}));

