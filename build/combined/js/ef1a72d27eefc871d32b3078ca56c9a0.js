/** 
FILES INCLUDED IN THIS COMBINED JS FILE: 

/themes/vl/assets/js/vendor/jquery-1.12.4.min.js
/vendor/sa/siteadmin/assets/sa.js?v=1004
/vendor/sa/siteadmin/assets/sautils.js
/photo_gallery/js/jquery.bxslider.min.js
/themes/vl/assets/js/vendor/modernizr-3.5.0.min.js
/themes/vl/assets/js/popper.min.js
/themes/vl/assets/js/bootstrap.min.js
/themes/vl/assets/js/owl.carousel.min.js
/themes/vl/assets/js/isotope.pkgd.min.js
/themes/vl/assets/js/slick.min.js
/themes/vl/assets/js/jquery.meanmenu.min.js
/themes/vl/assets/js/wow.min.js
/themes/vl/assets/js/waypoints.min.js
/themes/vl/assets/js/jquery.appear.js
/themes/vl/assets/js/jquery.knob.js
/themes/vl/assets/js/jquery.scrollUp.min.js
/themes/vl/assets/js/imagesloaded.pkgd.min.js
/themes/vl/assets/js/jquery.magnific-popup.min.js
/themes/vl/assets/js/plugins.js
*/


//File /themes/vl/assets/js/vendor/jquery-1.12.4.min.js 

try {
    /*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
    ! function(a, b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
            if (!a.document) throw new Error("jQuery requires a window with a document");
            return b(a)
        } : b(a)
    }("undefined" != typeof window ? window : this, function(a, b) {
        var c = [],
            d = a.document,
            e = c.slice,
            f = c.concat,
            g = c.push,
            h = c.indexOf,
            i = {},
            j = i.toString,
            k = i.hasOwnProperty,
            l = {},
            m = "1.12.4",
            n = function(a, b) {
                return new n.fn.init(a, b)
            },
            o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            p = /^-ms-/,
            q = /-([\da-z])/gi,
            r = function(a, b) {
                return b.toUpperCase()
            };
        n.fn = n.prototype = {
            jquery: m,
            constructor: n,
            selector: "",
            length: 0,
            toArray: function() {
                return e.call(this)
            },
            get: function(a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
            },
            pushStack: function(a) {
                var b = n.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            },
            each: function(a) {
                return n.each(this, a)
            },
            map: function(a) {
                return this.pushStack(n.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return this.pushStack(e.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: g,
            sort: c.sort,
            splice: c.splice
        }, n.extend = n.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
                if (null != (e = arguments[h]))
                    for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
            return g
        }, n.extend({
            expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a)
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === n.type(a)
            },
            isArray: Array.isArray || function(a) {
                return "array" === n.type(a)
            },
            isWindow: function(a) {
                return null != a && a == a.window
            },
            isNumeric: function(a) {
                var b = a && a.toString();
                return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) return !1;
                return !0
            },
            isPlainObject: function(a) {
                var b;
                if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
                try {
                    if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
                } catch (c) {
                    return !1
                }
                if (!l.ownFirst)
                    for (b in a) return k.call(a, b);
                for (b in a);
                return void 0 === b || k.call(a, b)
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
            },
            globalEval: function(b) {
                b && n.trim(b) && (a.execScript || function(b) {
                    a.eval.call(a, b)
                })(b)
            },
            camelCase: function(a) {
                return a.replace(p, "ms-").replace(q, r)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b) {
                var c, d = 0;
                if (s(a)) {
                    for (c = a.length; c > d; d++)
                        if (b.call(a[d], d, a[d]) === !1) break
                } else
                    for (d in a)
                        if (b.call(a[d], d, a[d]) === !1) break;
                return a
            },
            trim: function(a) {
                return null == a ? "" : (a + "").replace(o, "")
            },
            makeArray: function(a, b) {
                var c = b || [];
                return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
            },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if (h) return h.call(b, a, c);
                    for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                        if (c in b && b[c] === a) return c
                }
                return -1
            },
            merge: function(a, b) {
                var c = +b.length,
                    d = 0,
                    e = a.length;
                while (c > d) a[e++] = b[d++];
                if (c !== c)
                    while (void 0 !== b[d]) a[e++] = b[d++];
                return a.length = e, a
            },
            grep: function(a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
                return e
            },
            map: function(a, b, c) {
                var d, e, g = 0,
                    h = [];
                if (s(a))
                    for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
                else
                    for (g in a) e = b(a[g], g, c), null != e && h.push(e);
                return f.apply([], h)
            },
            guid: 1,
            proxy: function(a, b) {
                var c, d, f;
                return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function() {
                    return a.apply(b || this, c.concat(e.call(arguments)))
                }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
            },
            now: function() {
                return +new Date
            },
            support: l
        }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
            i["[object " + b + "]"] = b.toLowerCase()
        });

        function s(a) {
            var b = !!a && "length" in a && a.length,
                c = n.type(a);
            return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }
        var t = function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
                v = a.document,
                w = 0,
                x = 0,
                y = ga(),
                z = ga(),
                A = ga(),
                B = function(a, b) {
                    return a === b && (l = !0), 0
                },
                C = 1 << 31,
                D = {}.hasOwnProperty,
                E = [],
                F = E.pop,
                G = E.push,
                H = E.push,
                I = E.slice,
                J = function(a, b) {
                    for (var c = 0, d = a.length; d > c; c++)
                        if (a[c] === b) return c;
                    return -1
                },
                K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                L = "[\\x20\\t\\r\\n\\f]",
                M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
                O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
                P = new RegExp(L + "+", "g"),
                Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
                R = new RegExp("^" + L + "*," + L + "*"),
                S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
                T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
                U = new RegExp(O),
                V = new RegExp("^" + M + "$"),
                W = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    TAG: new RegExp("^(" + M + "|[*])"),
                    ATTR: new RegExp("^" + N),
                    PSEUDO: new RegExp("^" + O),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + K + ")$", "i"),
                    needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
                },
                X = /^(?:input|select|textarea|button)$/i,
                Y = /^h\d$/i,
                Z = /^[^{]+\{\s*\[native \w/,
                $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                _ = /[+~]/,
                aa = /'|\\/g,
                ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
                ca = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                },
                da = function() {
                    m()
                };
            try {
                H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
            } catch (ea) {
                H = {
                    apply: E.length ? function(a, b) {
                        G.apply(a, I.call(b))
                    } : function(a, b) {
                        var c = a.length,
                            d = 0;
                        while (a[c++] = b[d++]);
                        a.length = c - 1
                    }
                }
            }

            function fa(a, b, d, e) {
                var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                    x = b ? b.nodeType : 9;
                if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
                if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                    if (11 !== x && (o = $.exec(a)))
                        if (f = o[1]) {
                            if (9 === x) {
                                if (!(j = b.getElementById(f))) return d;
                                if (j.id === f) return d.push(j), d
                            } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                        } else {
                            if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                            if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                        }
                    if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                        if (1 !== x) w = b, s = a;
                        else if ("object" !== b.nodeName.toLowerCase()) {
                            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                            while (h--) r[h] = l + " " + qa(r[h]);
                            s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                        }
                        if (s) try {
                            return H.apply(d, w.querySelectorAll(s)), d
                        } catch (y) {} finally {
                            k === u && b.removeAttribute("id")
                        }
                    }
                }
                return i(a.replace(Q, "$1"), b, d, e)
            }

            function ga() {
                var a = [];

                function b(c, e) {
                    return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
                }
                return b
            }

            function ha(a) {
                return a[u] = !0, a
            }

            function ia(a) {
                var b = n.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function ja(a, b) {
                var c = a.split("|"),
                    e = c.length;
                while (e--) d.attrHandle[c[e]] = b
            }

            function ka(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
                if (d) return d;
                if (c)
                    while (c = c.nextSibling)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function la(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function ma(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function na(a) {
                return ha(function(b) {
                    return b = +b, ha(function(c, d) {
                        var e, f = a([], c.length, b),
                            g = f.length;
                        while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function oa(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }
            c = fa.support = {}, f = fa.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, m = fa.setDocument = function(a) {
                var b, e, g = a ? a.ownerDocument || a : v;
                return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }), c.getElementsByTagName = ia(function(a) {
                    return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
                }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                    return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
                }), c.getById ? (d.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                        var c = b.getElementById(a);
                        return c ? [c] : []
                    }
                }, d.filter.ID = function(a) {
                    var b = a.replace(ba, ca);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete d.find.ID, d.filter.ID = function(a) {
                    var b = a.replace(ba, ca);
                    return function(a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
                } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        while (c = f[e++]) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                    return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
                }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                    o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
                }), ia(function(a) {
                    var b = n.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
                })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                    c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
                }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        while (b = b.parentNode)
                            if (b === a) return !0;
                    return !1
                }, B = b ? function(a, b) {
                    if (a === b) return l = !0, 0;
                    var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
                } : function(a, b) {
                    if (a === b) return l = !0, 0;
                    var c, d = 0,
                        e = a.parentNode,
                        f = b.parentNode,
                        g = [a],
                        h = [b];
                    if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                    if (e === f) return ka(a, b);
                    c = a;
                    while (c = c.parentNode) g.unshift(c);
                    c = b;
                    while (c = c.parentNode) h.unshift(c);
                    while (g[d] === h[d]) d++;
                    return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
                }, n) : n
            }, fa.matches = function(a, b) {
                return fa(a, null, null, b)
            }, fa.matchesSelector = function(a, b) {
                if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (e) {}
                return fa(b, n, null, [a]).length > 0
            }, fa.contains = function(a, b) {
                return (a.ownerDocument || a) !== n && m(a), t(a, b)
            }, fa.attr = function(a, b) {
                (a.ownerDocument || a) !== n && m(a);
                var e = d.attrHandle[b.toLowerCase()],
                    f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
            }, fa.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, fa.uniqueSort = function(a) {
                var b, d = [],
                    e = 0,
                    f = 0;
                if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                    while (b = a[f++]) b === a[f] && (e = d.push(f));
                    while (e--) a.splice(d[e], 1)
                }
                return k = null, a
            }, e = fa.getText = function(a) {
                var b, c = "",
                    d = 0,
                    f = a.nodeType;
                if (f) {
                    if (1 === f || 9 === f || 11 === f) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                    } else if (3 === f || 4 === f) return a.nodeValue
                } else
                    while (b = a[d++]) c += e(b);
                return c
            }, d = fa.selectors = {
                cacheLength: 50,
                createPseudo: ha,
                match: W,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[6] && a[2];
                        return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(ba, ca).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = y[a + " "];
                        return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, b, c) {
                        return function(d) {
                            var e = fa.attr(d, a);
                            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h,
                                t = !1;
                            if (q) {
                                if (f) {
                                    while (p) {
                                        m = b;
                                        while (m = m[p])
                                            if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                    while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                        if (1 === m.nodeType && ++t && m === b) {
                                            k[a] = [w, n, t];
                                            break
                                        }
                                } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                    while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                        if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                                return t -= e, t === d || t % d === 0 && t / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, b) {
                        var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                        return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                            var d, f = e(a, b),
                                g = f.length;
                            while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                        }) : function(a) {
                            return e(a, 0, c)
                        }) : e
                    }
                },
                pseudos: {
                    not: ha(function(a) {
                        var b = [],
                            c = [],
                            d = h(a.replace(Q, "$1"));
                        return d[u] ? ha(function(a, b, c, e) {
                            var f, g = d(a, null, e, []),
                                h = a.length;
                            while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, e, f) {
                            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }),
                    has: ha(function(a) {
                        return function(b) {
                            return fa(a, b).length > 0
                        }
                    }),
                    contains: ha(function(a) {
                        return a = a.replace(ba, ca),
                            function(b) {
                                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                            }
                    }),
                    lang: ha(function(a) {
                        return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === o
                    },
                    focus: function(a) {
                        return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !d.pseudos.empty(a)
                    },
                    header: function(a) {
                        return Y.test(a.nodeName)
                    },
                    input: function(a) {
                        return X.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: na(function() {
                        return [0]
                    }),
                    last: na(function(a, b) {
                        return [b - 1]
                    }),
                    eq: na(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: na(function(a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a
                    }),
                    odd: na(function(a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a
                    }),
                    lt: na(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: na(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, d.pseudos.nth = d.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) d.pseudos[b] = la(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) d.pseudos[b] = ma(b);

            function pa() {}
            pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
                var c, e, f, g, h, i, j, k = z[a + " "];
                if (k) return b ? 0 : k.slice(0);
                h = a, i = [], j = d.preFilter;
                while (h) {
                    c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                        value: c,
                        type: e[0].replace(Q, " ")
                    }), h = h.slice(c.length));
                    for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length));
                    if (!c) break
                }
                return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
            };

            function qa(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d
            }

            function ra(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = x++;
                return b.first ? function(b, c, f) {
                    while (b = b[d])
                        if (1 === b.nodeType || e) return a(b, c, f)
                } : function(b, c, g) {
                    var h, i, j, k = [w, f];
                    if (g) {
                        while (b = b[d])
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        while (b = b[d])
                            if (1 === b.nodeType || e) {
                                if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                                if (i[d] = k, k[2] = a(b, c, g)) return !0
                            }
                }
            }

            function sa(a) {
                return a.length > 1 ? function(b, c, d) {
                    var e = a.length;
                    while (e--)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function ta(a, b, c) {
                for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
                return c
            }

            function ua(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
                return g
            }

            function va(a, b, c, d, e, f) {
                return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                        q = !a || !f && b ? p : ua(p, m, a, h, i),
                        r = c ? e || (f ? a : o || d) ? [] : g : q;
                    if (c && c(q, r, h, i), d) {
                        j = ua(r, n), d(j, [], h, i), k = j.length;
                        while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                    }
                    if (f) {
                        if (e || a) {
                            if (e) {
                                j = [], k = r.length;
                                while (k--)(l = r[k]) && j.push(q[k] = l);
                                e(null, r = [], j, i)
                            }
                            k = r.length;
                            while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                        }
                    } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
                })
            }

            function wa(a) {
                for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                        return a === b
                    }, h, !0), l = ra(function(a) {
                        return J(b, a) > -1
                    }, h, !0), m = [function(a, c, d) {
                        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                        return b = null, e
                    }]; f > i; i++)
                    if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                    else {
                        if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                            for (e = ++i; f > e; e++)
                                if (d.relative[a[e].type]) break;
                            return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                                value: " " === a[i - 2].type ? "*" : ""
                            })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                        }
                        m.push(c)
                    }
                return sa(m)
            }

            function xa(a, b) {
                var c = b.length > 0,
                    e = a.length > 0,
                    f = function(f, g, h, i, k) {
                        var l, o, q, r = 0,
                            s = "0",
                            t = f && [],
                            u = [],
                            v = j,
                            x = f || e && d.find.TAG("*", k),
                            y = w += null == v ? 1 : Math.random() || .1,
                            z = x.length;
                        for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                            if (e && l) {
                                o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                                while (q = a[o++])
                                    if (q(l, g || n, h)) {
                                        i.push(l);
                                        break
                                    }
                                k && (w = y)
                            }
                            c && ((l = !q && l) && r--, f && t.push(l))
                        }
                        if (r += s, c && s !== r) {
                            o = 0;
                            while (q = b[o++]) q(t, u, g, h);
                            if (f) {
                                if (r > 0)
                                    while (s--) t[s] || u[s] || (u[s] = F.call(i));
                                u = ua(u)
                            }
                            H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                        }
                        return k && (w = y, j = v), t
                    };
                return c ? ha(f) : f
            }
            return h = fa.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = A[a + " "];
                if (!f) {
                    b || (b = g(a)), c = b.length;
                    while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                    f = A(a, xa(e, d)), f.selector = a
                }
                return f
            }, i = fa.select = function(a, b, e, f) {
                var i, j, k, l, m, n = "function" == typeof a && a,
                    o = !f && g(a = n.selector || a);
                if (e = e || [], 1 === o.length) {
                    if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                        if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                        n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                    }
                    i = W.needsContext.test(a) ? 0 : j.length;
                    while (i--) {
                        if (k = j[i], d.relative[l = k.type]) break;
                        if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                            break
                        }
                    }
                }
                return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
            }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
                return 1 & a.compareDocumentPosition(n.createElement("div"))
            }), ia(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || ja("type|href|height|width", function(a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), c.attributes && ia(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || ja("value", function(a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), ia(function(a) {
                return null == a.getAttribute("disabled")
            }) || ja(K, function(a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), fa
        }(a);
        n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
        var u = function(a, b, c) {
                var d = [],
                    e = void 0 !== c;
                while ((a = a[b]) && 9 !== a.nodeType)
                    if (1 === a.nodeType) {
                        if (e && n(a).is(c)) break;
                        d.push(a)
                    }
                return d
            },
            v = function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            },
            w = n.expr.match.needsContext,
            x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            y = /^.[^:#\[\.,]*$/;

        function z(a, b, c) {
            if (n.isFunction(b)) return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
            if (b.nodeType) return n.grep(a, function(a) {
                return a === b !== c
            });
            if ("string" == typeof b) {
                if (y.test(b)) return n.filter(b, a, c);
                b = n.filter(b, a)
            }
            return n.grep(a, function(a) {
                return n.inArray(a, b) > -1 !== c
            })
        }
        n.filter = function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        }, n.fn.extend({
            find: function(a) {
                var b, c = [],
                    d = this,
                    e = d.length;
                if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (n.contains(d[b], this)) return !0
                }));
                for (b = 0; e > b; b++) n.find(a, d[b], c);
                return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
            },
            filter: function(a) {
                return this.pushStack(z(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(z(this, a || [], !0))
            },
            is: function(a) {
                return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
            }
        });
        var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            C = n.fn.init = function(a, b, c) {
                var e, f;
                if (!a) return this;
                if (c = c || A, "string" == typeof a) {
                    if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                    if (e[1]) {
                        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                            for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                        return this
                    }
                    if (f = d.getElementById(e[2]), f && f.parentNode) {
                        if (f.id !== e[2]) return A.find(a);
                        this.length = 1, this[0] = f
                    }
                    return this.context = d, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
            };
        C.prototype = n.fn, A = n(d);
        var D = /^(?:parents|prev(?:Until|All))/,
            E = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        n.fn.extend({
            has: function(a) {
                var b, c = n(a, this),
                    d = c.length;
                return this.filter(function() {
                    for (b = 0; d > b; b++)
                        if (n.contains(this, c[b])) return !0
                })
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
                return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        });

        function F(a, b) {
            do a = a[b]; while (a && 1 !== a.nodeType);
            return a
        }
        n.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return u(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return u(a, "parentNode", c)
            },
            next: function(a) {
                return F(a, "nextSibling")
            },
            prev: function(a) {
                return F(a, "previousSibling")
            },
            nextAll: function(a) {
                return u(a, "nextSibling")
            },
            prevAll: function(a) {
                return u(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return u(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return u(a, "previousSibling", c)
            },
            siblings: function(a) {
                return v((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return v(a.firstChild)
            },
            contents: function(a) {
                return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
            }
        }, function(a, b) {
            n.fn[a] = function(c, d) {
                var e = n.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
            }
        });
        var G = /\S+/g;

        function H(a) {
            var b = {};
            return n.each(a.match(G) || [], function(a, c) {
                b[c] = !0
            }), b
        }
        n.Callbacks = function(a) {
            a = "string" == typeof a ? H(a) : n.extend({}, a);
            var b, c, d, e, f = [],
                g = [],
                h = -1,
                i = function() {
                    for (e = a.once, d = b = !0; g.length; h = -1) {
                        c = g.shift();
                        while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                    }
                    a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
                },
                j = {
                    add: function() {
                        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                            n.each(b, function(b, c) {
                                n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                            })
                        }(arguments), c && !b && i()), this
                    },
                    remove: function() {
                        return n.each(arguments, function(a, b) {
                            var c;
                            while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                        }), this
                    },
                    has: function(a) {
                        return a ? n.inArray(a, f) > -1 : f.length > 0
                    },
                    empty: function() {
                        return f && (f = []), this
                    },
                    disable: function() {
                        return e = g = [], f = c = "", this
                    },
                    disabled: function() {
                        return !f
                    },
                    lock: function() {
                        return e = !0, c || j.disable(), this
                    },
                    locked: function() {
                        return !!e
                    },
                    fireWith: function(a, c) {
                        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                    },
                    fire: function() {
                        return j.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!d
                    }
                };
            return j
        }, n.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", n.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var a = arguments;
                            return n.Deferred(function(c) {
                                n.each(b, function(b, f) {
                                    var g = n.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = g && g.apply(this, arguments);
                                        a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? n.extend(a, d) : d
                        }
                    },
                    e = {};
                return d.pipe = d.then, n.each(b, function(a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function(a) {
                var b = 0,
                    c = e.call(arguments),
                    d = c.length,
                    f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                    g = 1 === f ? a : n.Deferred(),
                    h = function(a, b, c) {
                        return function(d) {
                            b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                        }
                    },
                    i, j, k;
                if (d > 1)
                    for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
                return f || g.resolveWith(k, c), g.promise()
            }
        });
        var I;
        n.fn.ready = function(a) {
            return n.ready.promise().done(a), this
        }, n.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? n.readyWait++ : n.ready(!0)
            },
            ready: function(a) {
                (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
            }
        });

        function J() {
            d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
        }

        function K() {
            (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
        }
        n.ready.promise = function(b) {
            if (!I)
                if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
                else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
            else {
                d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
                var c = !1;
                try {
                    c = null == a.frameElement && d.documentElement
                } catch (e) {}
                c && c.doScroll && ! function f() {
                    if (!n.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (b) {
                            return a.setTimeout(f, 50)
                        }
                        J(), n.ready()
                    }
                }()
            }
            return I.promise(b)
        }, n.ready.promise();
        var L;
        for (L in n(l)) break;
        l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() {
                var a, b, c, e;
                c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
            }),
            function() {
                var a = d.createElement("div");
                l.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    l.deleteExpando = !1
                }
                a = null
            }();
        var M = function(a) {
                var b = n.noData[(a.nodeName + " ").toLowerCase()],
                    c = +a.nodeType || 1;
                return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
            },
            N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            O = /([A-Z])/g;

        function P(a, b, c) {
            if (void 0 === c && 1 === a.nodeType) {
                var d = "data-" + b.replace(O, "-$1").toLowerCase();
                if (c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                    } catch (e) {}
                    n.data(a, b, c)
                } else c = void 0;
            }
            return c
        }

        function Q(a) {
            var b;
            for (b in a)
                if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
            return !0
        }

        function R(a, b, d, e) {
            if (M(a)) {
                var f, g, h = n.expando,
                    i = a.nodeType,
                    j = i ? n.cache : a,
                    k = i ? a[h] : a[h] && h;
                if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                    toJSON: n.noop
                }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
            }
        }

        function S(a, b, c) {
            if (M(a)) {
                var d, e, f = a.nodeType,
                    g = f ? n.cache : a,
                    h = f ? a[n.expando] : n.expando;
                if (g[h]) {
                    if (b && (d = c ? g[h] : g[h].data)) {
                        n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                        while (e--) delete d[b[e]];
                        if (c ? !Q(d) : !n.isEmptyObject(d)) return
                    }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
                }
            }
        }
        n.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(a) {
                    return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
                },
                data: function(a, b, c) {
                    return R(a, b, c)
                },
                removeData: function(a, b) {
                    return S(a, b)
                },
                _data: function(a, b, c) {
                    return R(a, b, c, !0)
                },
                _removeData: function(a, b) {
                    return S(a, b, !0)
                }
            }), n.fn.extend({
                data: function(a, b) {
                    var c, d, e, f = this[0],
                        g = f && f.attributes;
                    if (void 0 === a) {
                        if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                            c = g.length;
                            while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                            n._data(f, "parsedAttrs", !0)
                        }
                        return e
                    }
                    return "object" == typeof a ? this.each(function() {
                        n.data(this, a)
                    }) : arguments.length > 1 ? this.each(function() {
                        n.data(this, a, b)
                    }) : f ? P(f, a, n.data(f, a)) : void 0
                },
                removeData: function(a) {
                    return this.each(function() {
                        n.removeData(this, a)
                    })
                }
            }), n.extend({
                queue: function(a, b, c) {
                    var d;
                    return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
                },
                dequeue: function(a, b) {
                    b = b || "fx";
                    var c = n.queue(a, b),
                        d = c.length,
                        e = c.shift(),
                        f = n._queueHooks(a, b),
                        g = function() {
                            n.dequeue(a, b)
                        };
                    "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
                },
                _queueHooks: function(a, b) {
                    var c = b + "queueHooks";
                    return n._data(a, c) || n._data(a, c, {
                        empty: n.Callbacks("once memory").add(function() {
                            n._removeData(a, b + "queue"), n._removeData(a, c)
                        })
                    })
                }
            }), n.fn.extend({
                queue: function(a, b) {
                    var c = 2;
                    return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                        var c = n.queue(this, a, b);
                        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                    })
                },
                dequeue: function(a) {
                    return this.each(function() {
                        n.dequeue(this, a)
                    })
                },
                clearQueue: function(a) {
                    return this.queue(a || "fx", [])
                },
                promise: function(a, b) {
                    var c, d = 1,
                        e = n.Deferred(),
                        f = this,
                        g = this.length,
                        h = function() {
                            --d || e.resolveWith(f, [f])
                        };
                    "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                    while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                    return h(), e.promise(b)
                }
            }),
            function() {
                var a;
                l.shrinkWrapBlocks = function() {
                    if (null != a) return a;
                    a = !1;
                    var b, c, e;
                    return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
                }
            }();
        var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
            V = ["Top", "Right", "Bottom", "Left"],
            W = function(a, b) {
                return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
            };

        function X(a, b, c, d) {
            var e, f = 1,
                g = 20,
                h = d ? function() {
                    return d.cur()
                } : function() {
                    return n.css(a, b, "")
                },
                i = h(),
                j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
                k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
            if (k && k[3] !== j) {
                j = j || k[3], c = c || [], k = +i || 1;
                do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
            }
            return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
        }
        var Y = function(a, b, c, d, e, f, g) {
                var h = 0,
                    i = a.length,
                    j = null == c;
                if ("object" === n.type(c)) {
                    e = !0;
                    for (h in c) Y(a, b, h, c[h], !0, f, g)
                } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                        return j.call(n(a), c)
                    })), b))
                    for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            },
            Z = /^(?:checkbox|radio)$/i,
            $ = /<([\w:-]+)/,
            _ = /^$|\/(?:java|ecma)script/i,
            aa = /^\s+/,
            ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

        function ca(a) {
            var b = ba.split("|"),
                c = a.createDocumentFragment();
            if (c.createElement)
                while (b.length) c.createElement(b.pop());
            return c
        }! function() {
            var a = d.createElement("div"),
                b = d.createDocumentFragment(),
                c = d.createElement("input");
            a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
        }();
        var da = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

        function ea(a, b) {
            var c, d, e = 0,
                f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
            if (!f)
                for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
            return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
        }

        function fa(a, b) {
            for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
        }
        var ga = /<|&#?\w+;/,
            ha = /<tbody/i;

        function ia(a) {
            Z.test(a.type) && (a.defaultChecked = a.checked)
        }

        function ja(a, b, c, d, e) {
            for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
                if (g = a[r], g || 0 === g)
                    if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                    else if (ga.test(g)) {
                i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
                while (f--) i = i.lastChild;
                if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
                    g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                    while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
                }
                n.merge(q, i.childNodes), i.textContent = "";
                while (i.firstChild) i.removeChild(i.firstChild);
                i = p.lastChild
            } else q.push(b.createTextNode(g));
            i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
            while (g = q[r++])
                if (d && n.inArray(g, d) > -1) e && e.push(g);
                else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
                f = 0;
                while (g = i[f++]) _.test(g.type || "") && c.push(g)
            }
            return i = null, p
        }! function() {
            var b, c, e = d.createElement("div");
            for (b in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
            e = null
        }();
        var ka = /^(?:input|select|textarea)$/i,
            la = /^key/,
            ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            na = /^(?:focusinfocus|focusoutblur)$/,
            oa = /^([^.]*)(?:\.(.+)|)/;

        function pa() {
            return !0
        }

        function qa() {
            return !1
        }

        function ra() {
            try {
                return d.activeElement
            } catch (a) {}
        }

        function sa(a, b, c, d, e, f) {
            var g, h;
            if ("object" == typeof b) {
                "string" != typeof c && (d = d || c, c = void 0);
                for (h in b) sa(a, h, c, d, b[h], f);
                return a
            }
            if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
            else if (!e) return a;
            return 1 === f && (g = e, e = function(a) {
                return n().off(a), g.apply(this, arguments)
            }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
                n.event.add(this, b, e, d, c)
            })
        }
        n.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
                if (r) {
                    c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                        return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                    }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
                    while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                    a = null
                }
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
                if (r && (k = r.events)) {
                    b = (b || "").match(G) || [""], j = b.length;
                    while (j--)
                        if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                            while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                            i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                        } else
                            for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                    n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
                }
            },
            trigger: function(b, c, e, f) {
                var g, h, i, j, l, m, o, p = [e || d],
                    q = k.call(b, "type") ? b.type : b,
                    r = k.call(b, "namespace") ? b.namespace.split(".") : [];
                if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                    if (!f && !l.noBubble && !n.isWindow(e)) {
                        for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                        m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                    }
                    o = 0;
                    while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
                    if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                        m = e[h], m && (e[h] = null), n.event.triggered = q;
                        try {
                            e[q]()
                        } catch (s) {}
                        n.event.triggered = void 0, m && (e[h] = m)
                    }
                    return b.result
                }
            },
            dispatch: function(a) {
                a = n.event.fix(a);
                var b, c, d, f, g, h = [],
                    i = e.call(arguments),
                    j = (n._data(this, "events") || {})[a.type] || [],
                    k = n.event.special[a.type] || {};
                if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                    h = n.event.handlers.call(this, a, j), b = 0;
                    while ((f = h[b++]) && !a.isPropagationStopped()) {
                        a.currentTarget = f.elem, c = 0;
                        while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                    }
                    return k.postDispatch && k.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g = [],
                    h = b.delegateCount,
                    i = a.target;
                if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                    for (; i != this; i = i.parentNode || this)
                        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                            for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                            d.length && g.push({
                                elem: i,
                                handlers: d
                            })
                        }
                return h < b.length && g.push({
                    elem: this,
                    handlers: b.slice(h)
                }), g
            },
            fix: function(a) {
                if (a[n.expando]) return a;
                var b, c, e, f = a.type,
                    g = a,
                    h = this.fixHooks[f];
                h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
                while (b--) c = e[b], a[c] = g[c];
                return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var c, e, f, g = b.button,
                        h = b.fromElement;
                    return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== ra() && this.focus) try {
                            return this.focus(), !1
                        } catch (a) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === ra() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(a) {
                        return n.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, c) {
                var d = n.extend(new n.Event, c, {
                    type: a,
                    isSimulated: !0
                });
                n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
            }
        }, n.removeEvent = d.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c)
        } : function(a, b, c) {
            var d = "on" + b;
            a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
        }, n.Event = function(a, b) {
            return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
        }, n.Event.prototype = {
            constructor: n.Event,
            isDefaultPrevented: qa,
            isPropagationStopped: qa,
            isImmediatePropagationStopped: qa,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, n.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(a, b) {
            n.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), l.submit || (n.event.special.submit = {
            setup: function() {
                return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                    var b = a.target,
                        c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                    c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
                        a._submitBubble = !0
                    }), n._data(c, "submit", !0))
                })
            },
            postDispatch: function(a) {
                a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
            },
            teardown: function() {
                return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
            }
        }), l.change || (n.event.special.change = {
            setup: function() {
                return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
                    "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
                }), n.event.add(this, "click._change", function(a) {
                    this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
                })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
                        !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                    }), n._data(b, "change", !0))
                })
            },
            handle: function(a) {
                var b = a.target;
                return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return n.event.remove(this, "._change"), !ka.test(this.nodeName)
            }
        }), l.focusin || n.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = function(a) {
                n.event.simulate(b, a.target, n.event.fix(a))
            };
            n.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this,
                        e = n._data(d, b);
                    e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this,
                        e = n._data(d, b) - 1;
                    e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
                }
            }
        }), n.fn.extend({
            on: function(a, b, c, d) {
                return sa(this, a, b, c, d)
            },
            one: function(a, b, c, d) {
                return sa(this, a, b, c, d, 1)
            },
            off: function(a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this
                }
                return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function() {
                    n.event.remove(this, a, c, b)
                })
            },
            trigger: function(a, b) {
                return this.each(function() {
                    n.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                return c ? n.event.trigger(a, b, c, !0) : void 0
            }
        });
        var ta = / jQuery\d+="(?:null|\d+)"/g,
            ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
            va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            wa = /<script|<style|<link/i,
            xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ya = /^true\/(.*)/,
            za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Aa = ca(d),
            Ba = Aa.appendChild(d.createElement("div"));

        function Ca(a, b) {
            return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function Da(a) {
            return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
        }

        function Ea(a) {
            var b = ya.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function Fa(a, b) {
            if (1 === b.nodeType && n.hasData(a)) {
                var c, d, e, f = n._data(a),
                    g = n._data(b, f),
                    h = f.events;
                if (h) {
                    delete g.handle, g.events = {};
                    for (c in h)
                        for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
                }
                g.data && (g.data = n.extend({}, g.data))
            }
        }

        function Ga(a, b) {
            var c, d, e;
            if (1 === b.nodeType) {
                if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                    e = n._data(b);
                    for (d in e.events) n.removeEvent(b, d, e.handle);
                    b.removeAttribute(n.expando)
                }
                "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
            }
        }

        function Ha(a, b, c, d) {
            b = f.apply([], b);
            var e, g, h, i, j, k, m = 0,
                o = a.length,
                p = o - 1,
                q = b[0],
                r = n.isFunction(q);
            if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function(e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
            });
            if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
                for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
                if (h)
                    for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
                k = e = null
            }
            return a
        }

        function Ia(a, b, c) {
            for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
            return a
        }
        n.extend({
            htmlPrefilter: function(a) {
                return a.replace(va, "<$1></$2>")
            },
            clone: function(a, b, c) {
                var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
                if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                    for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
                if (b)
                    if (c)
                        for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
                    else Fa(a, f);
                return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
            },
            cleanData: function(a, b) {
                for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                    if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                        if (g.events)
                            for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                        j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                    }
            }
        }), n.fn.extend({
            domManip: Ha,
            detach: function(a) {
                return Ia(this, a, !0)
            },
            remove: function(a) {
                return Ia(this, a)
            },
            text: function(a) {
                return Y(this, function(a) {
                    return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
                }, null, a, arguments.length)
            },
            append: function() {
                return Ha(this, arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = Ca(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return Ha(this, arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = Ca(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return Ha(this, arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return Ha(this, arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    1 === a.nodeType && n.cleanData(ea(a, !1));
                    while (a.firstChild) a.removeChild(a.firstChild);
                    a.options && n.nodeName(a, "select") && (a.options.length = 0)
                }
                return this
            },
            clone: function(a, b) {
                return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                    return n.clone(this, a, b)
                })
            },
            html: function(a) {
                return Y(this, function(a) {
                    var b = this[0] || {},
                        c = 0,
                        d = this.length;
                    if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                    if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = n.htmlPrefilter(a);
                        try {
                            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (e) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = [];
                return Ha(this, arguments, function(b) {
                    var c = this.parentNode;
                    n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
                }, a)
            }
        }), n.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            n.fn[a] = function(a) {
                for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
                return this.pushStack(e)
            }
        });
        var Ja, Ka = {
            HTML: "block",
            BODY: "block"
        };

        function La(a, b) {
            var c = n(b.createElement(a)).appendTo(b.body),
                d = n.css(c[0], "display");
            return c.detach(), d
        }

        function Ma(a) {
            var b = d,
                c = Ka[a];
            return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
        }
        var Na = /^margin/,
            Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
            Pa = function(a, b, c, d) {
                var e, f, g = {};
                for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b) a.style[f] = g[f];
                return e
            },
            Qa = d.documentElement;
        ! function() {
            var b, c, e, f, g, h, i = d.createElement("div"),
                j = d.createElement("div");
            if (j.style) {
                j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
                    reliableHiddenOffsets: function() {
                        return null == b && k(), f
                    },
                    boxSizingReliable: function() {
                        return null == b && k(), e
                    },
                    pixelMarginRight: function() {
                        return null == b && k(), c
                    },
                    pixelPosition: function() {
                        return null == b && k(), b
                    },
                    reliableMarginRight: function() {
                        return null == b && k(), g
                    },
                    reliableMarginLeft: function() {
                        return null == b && k(), h
                    }
                });

                function k() {
                    var k, l, m = d.documentElement;
                    m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                        width: "4px"
                    }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                        marginRight: "4px"
                    }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
                }
            }
        }();
        var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
        a.getComputedStyle ? (Ra = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        }, Sa = function(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
        }) : Qa.currentStyle && (Ra = function(a) {
            return a.currentStyle
        }, Sa = function(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
        });

        function Ua(a, b) {
            return {
                get: function() {
                    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }
        var Va = /alpha\([^)]*\)/i,
            Wa = /opacity\s*=\s*([^)]*)/i,
            Xa = /^(none|table(?!-c[ea]).+)/,
            Ya = new RegExp("^(" + T + ")(.*)$", "i"),
            Za = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            $a = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            _a = ["Webkit", "O", "Moz", "ms"],
            ab = d.createElement("div").style;

        function bb(a) {
            if (a in ab) return a;
            var b = a.charAt(0).toUpperCase() + a.slice(1),
                c = _a.length;
            while (c--)
                if (a = _a[c] + b, a in ab) return a
        }

        function cb(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
            for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }

        function db(a, b, c) {
            var d = Ya.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }

        function eb(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
            return g
        }

        function fb(a, b, c) {
            var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = Ra(a),
                g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;
                d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }
        n.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = Sa(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": l.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = n.camelCase(b),
                        i = a.style;
                    if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                    if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                        i[b] = c
                    } catch (j) {}
                }
            },
            css: function(a, b, c, d) {
                var e, f, g, h = n.camelCase(b);
                return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
            }
        }), n.each(["height", "width"], function(a, b) {
            n.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
                        return fb(a, b, d)
                    }) : fb(a, b, d) : void 0
                },
                set: function(a, c, d) {
                    var e = d && Ra(a);
                    return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }), l.opacity || (n.cssHooks.opacity = {
            get: function(a, b) {
                return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var c = a.style,
                    d = a.currentStyle,
                    e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                    f = d && d.filter || c.filter || "";
                c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
            }
        }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
            return b ? Pa(a, {
                display: "inline-block"
            }, Sa, [a, "marginRight"]) : void 0
        }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
            return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
                marginLeft: 0
            }, function() {
                return a.getBoundingClientRect().left
            }) : 0)) + "px" : void 0
        }), n.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            n.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, Na.test(a) || (n.cssHooks[a + b].set = db)
        }), n.fn.extend({
            css: function(a, b) {
                return Y(this, function(a, b, c) {
                    var d, e, f = {},
                        g = 0;
                    if (n.isArray(b)) {
                        for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function() {
                return cb(this, !0)
            },
            hide: function() {
                return cb(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    W(this) ? n(this).show() : n(this).hide()
                })
            }
        });

        function gb(a, b, c, d, e) {
            return new gb.prototype.init(a, b, c, d, e)
        }
        n.Tween = gb, gb.prototype = {
            constructor: gb,
            init: function(a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = gb.propHooks[this.prop];
                return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = gb.propHooks[this.prop];
                return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
            }
        }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
                },
                set: function(a) {
                    n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
                }
            }
        }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, n.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            },
            _default: "swing"
        }, n.fx = gb.prototype.init, n.fx.step = {};
        var hb, ib, jb = /^(?:toggle|show|hide)$/,
            kb = /queueHooks$/;

        function lb() {
            return a.setTimeout(function() {
                hb = void 0
            }), hb = n.now()
        }

        function mb(a, b) {
            var c, d = {
                    height: a
                },
                e = 0;
            for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
            return b && (d.opacity = d.width = a), d
        }

        function nb(a, b, c) {
            for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a)) return d
        }

        function ob(a, b, c) {
            var d, e, f, g, h, i, j, k, m = this,
                o = {},
                p = a.style,
                q = a.nodeType && W(a),
                r = n._data(a, "fxshow");
            c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
                h.unqueued || i()
            }), h.unqueued++, m.always(function() {
                m.always(function() {
                    h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
                })
            })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
                p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
            }));
            for (d in b)
                if (e = b[d], jb.exec(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                        if ("show" !== e || !r || void 0 === r[d]) continue;
                        q = !0
                    }
                    o[d] = r && r[d] || n.style(a, d)
                } else j = void 0;
            if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
            else {
                r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                    n(a).hide()
                }), m.done(function() {
                    var b;
                    n._removeData(a, "fxshow");
                    for (b in o) n.style(a, b, o[b])
                });
                for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }

        function pb(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f) c in a || (a[c] = f[c], b[c] = e)
                } else b[d] = e
        }

        function qb(a, b, c) {
            var d, e, f = 0,
                g = qb.prefilters.length,
                h = n.Deferred().always(function() {
                    delete i.elem
                }),
                i = function() {
                    if (e) return !1;
                    for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                },
                j = h.promise({
                    elem: a,
                    props: n.extend({}, b),
                    opts: n.extend(!0, {
                        specialEasing: {},
                        easing: n.easing._default
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: hb || lb(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) {
                        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; d > c; c++) j.tweens[c].run(1);
                        return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for (pb(k, j.opts.specialEasing); g > f; f++)
                if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
            return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }
        n.Animation = n.extend(qb, {
                tweeners: {
                    "*": [function(a, b) {
                        var c = this.createTween(a, b);
                        return X(c.elem, a, U.exec(b), c), c
                    }]
                },
                tweener: function(a, b) {
                    n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                    for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
                },
                prefilters: [ob],
                prefilter: function(a, b) {
                    b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
                }
            }), n.speed = function(a, b, c) {
                var d = a && "object" == typeof a ? n.extend({}, a) : {
                    complete: c || !c && b || n.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !n.isFunction(b) && b
                };
                return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                    n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
                }, d
            }, n.fn.extend({
                fadeTo: function(a, b, c, d) {
                    return this.filter(W).css("opacity", 0).show().end().animate({
                        opacity: b
                    }, a, c, d)
                },
                animate: function(a, b, c, d) {
                    var e = n.isEmptyObject(a),
                        f = n.speed(b, c, d),
                        g = function() {
                            var b = qb(this, n.extend({}, a), f);
                            (e || n._data(this, "finish")) && b.stop(!0)
                        };
                    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                },
                stop: function(a, b, c) {
                    var d = function(a) {
                        var b = a.stop;
                        delete a.stop, b(c)
                    };
                    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = n.timers,
                            g = n._data(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
                        for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                        !b && c || n.dequeue(this, a)
                    })
                },
                finish: function(a) {
                    return a !== !1 && (a = a || "fx"), this.each(function() {
                        var b, c = n._data(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = n.timers,
                            g = d ? d.length : 0;
                        for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
                }
            }), n.each(["toggle", "show", "hide"], function(a, b) {
                var c = n.fn[b];
                n.fn[b] = function(a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
                }
            }), n.each({
                slideDown: mb("show"),
                slideUp: mb("hide"),
                slideToggle: mb("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(a, b) {
                n.fn[a] = function(a, c, d) {
                    return this.animate(b, a, c, d)
                }
            }), n.timers = [], n.fx.tick = function() {
                var a, b = n.timers,
                    c = 0;
                for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
                b.length || n.fx.stop(), hb = void 0
            }, n.fx.timer = function(a) {
                n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
            }, n.fx.interval = 13, n.fx.start = function() {
                ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
            }, n.fx.stop = function() {
                a.clearInterval(ib), ib = null
            }, n.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, n.fn.delay = function(b, c) {
                return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                    var e = a.setTimeout(c, b);
                    d.stop = function() {
                        a.clearTimeout(e)
                    }
                })
            },
            function() {
                var a, b = d.createElement("input"),
                    c = d.createElement("div"),
                    e = d.createElement("select"),
                    f = e.appendChild(d.createElement("option"));
                c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
            }();
        var rb = /\r/g,
            sb = /[\x20\t\r\n\f]+/g;
        n.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0]; {
                    if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                    if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
                }
            }
        }), n.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = n.find.attr(a, "value");
                        return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                                if (b = n(c).val(), f) return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function(a, b) {
                        var c, d, e = a.options,
                            f = n.makeArray(b),
                            g = e.length;
                        while (g--)
                            if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            } else d.selected = !1;
                        return c || (a.selectedIndex = -1), e
                    }
                }
            }
        }), n.each(["radio", "checkbox"], function() {
            n.valHooks[this] = {
                set: function(a, b) {
                    return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
                }
            }, l.checkOn || (n.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        });
        var tb, ub, vb = n.expr.attrHandle,
            wb = /^(?:checked|selected)$/i,
            xb = l.getSetAttribute,
            yb = l.input;
        n.fn.extend({
            attr: function(a, b) {
                return Y(this, n.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    n.removeAttr(this, a)
                })
            }
        }), n.extend({
            attr: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            },
            removeAttr: function(a, b) {
                var c, d, e = 0,
                    f = b && b.match(G);
                if (f && 1 === a.nodeType)
                    while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
            }
        }), ub = {
            set: function(a, b, c) {
                return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
            }
        }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = vb[b] || n.find.attr;
            yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
                var e, f;
                return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e
            } : vb[b] = function(a, b, c) {
                return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
            }
        }), yb && xb || (n.attrHooks.value = {
            set: function(a, b, c) {
                return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c)
            }
        }), xb || (tb = {
            set: function(a, b, c) {
                var d = a.getAttributeNode(c);
                return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
            }
        }, vb.id = vb.name = vb.coords = function(a, b, c) {
            var d;
            return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
        }, n.valHooks.button = {
            get: function(a, b) {
                var c = a.getAttributeNode(b);
                return c && c.specified ? c.value : void 0
            },
            set: tb.set
        }, n.attrHooks.contenteditable = {
            set: function(a, b, c) {
                tb.set(a, "" === b ? !1 : b, c)
            }
        }, n.each(["width", "height"], function(a, b) {
            n.attrHooks[b] = {
                set: function(a, c) {
                    return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
                }
            }
        })), l.style || (n.attrHooks.style = {
            get: function(a) {
                return a.style.cssText || void 0
            },
            set: function(a, b) {
                return a.style.cssText = b + ""
            }
        });
        var zb = /^(?:input|select|textarea|button|object)$/i,
            Ab = /^(?:a|area)$/i;
        n.fn.extend({
            prop: function(a, b) {
                return Y(this, n.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return a = n.propFix[a] || a, this.each(function() {
                    try {
                        this[a] = void 0, delete this[a]
                    } catch (b) {}
                })
            }
        }), n.extend({
            prop: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = n.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
            n.propHooks[b] = {
                get: function(a) {
                    return a.getAttribute(b, 4)
                }
            }
        }), l.optSelected || (n.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
            },
            set: function(a) {
                var b = a.parentNode;
                b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
            }
        }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            n.propFix[this.toLowerCase()] = this
        }), l.enctype || (n.propFix.enctype = "encoding");
        var Bb = /[\t\r\n\f]/g;

        function Cb(a) {
            return n.attr(a, "class") || ""
        }
        n.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h, i = 0;
                if (n.isFunction(a)) return this.each(function(b) {
                    n(this).addClass(a.call(this, b, Cb(this)))
                });
                if ("string" == typeof a && a) {
                    b = a.match(G) || [];
                    while (c = this[i++])
                        if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                            g = 0;
                            while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                            h = n.trim(d), e !== h && n.attr(c, "class", h)
                        }
                }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h, i = 0;
                if (n.isFunction(a)) return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, Cb(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof a && a) {
                    b = a.match(G) || [];
                    while (c = this[i++])
                        if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                            g = 0;
                            while (f = b[g++])
                                while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                            h = n.trim(d), e !== h && n.attr(c, "class", h)
                        }
                }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                    n(this).toggleClass(a.call(this, c, Cb(this), b), b)
                }) : this.each(function() {
                    var b, d, e, f;
                    if ("string" === c) {
                        d = 0, e = n(this), f = a.match(G) || [];
                        while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                    } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
                })
            },
            hasClass: function(a) {
                var b, c, d = 0;
                b = " " + a + " ";
                while (c = this[d++])
                    if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
                return !1
            }
        }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            n.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), n.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        });
        var Db = a.location,
            Eb = n.now(),
            Fb = /\?/,
            Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        n.parseJSON = function(b) {
            if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
            var c, d = null,
                e = n.trim(b + "");
            return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
                return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
            })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
        }, n.parseXML = function(b) {
            var c, d;
            if (!b || "string" != typeof b) return null;
            try {
                a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
            } catch (e) {
                c = void 0
            }
            return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
        };
        var Hb = /#.*$/,
            Ib = /([?&])_=[^&]*/,
            Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Lb = /^(?:GET|HEAD)$/,
            Mb = /^\/\//,
            Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Ob = {},
            Pb = {},
            Qb = "*/".concat("*"),
            Rb = Db.href,
            Sb = Nb.exec(Rb.toLowerCase()) || [];

        function Tb(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(G) || [];
                if (n.isFunction(c))
                    while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function Ub(a, b, c, d) {
            var e = {},
                f = a === Pb;

            function g(h) {
                var i;
                return e[h] = !0, n.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
                }), i
            }
            return g(b.dataTypes[0]) || !e["*"] && g("*")
        }

        function Vb(a, b) {
            var c, d, e = n.ajaxSettings.flatOptions || {};
            for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
            return c && n.extend(!0, a, c), a
        }

        function Wb(a, b, c) {
            var d, e, f, g, h = a.contents,
                i = a.dataTypes;
            while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
            if (e)
                for (g in h)
                    if (h[g] && h[g].test(e)) {
                        i.unshift(g);
                        break
                    }
            if (i[0] in c) f = i[0];
            else {
                for (g in c) {
                    if (!i[0] || a.converters[g + " " + i[0]]) {
                        f = g;
                        break
                    }
                    d || (d = g)
                }
                f = f || d
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
        }

        function Xb(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            f = k.shift();
            while (f)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g)
                    for (e in j)
                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                            break
                        }
                if (g !== !0)
                    if (g && a["throws"]) b = g(b);
                    else try {
                        b = g(b)
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: g ? l : "No conversion from " + i + " to " + f
                        }
                    }
            }
            return {
                state: "success",
                data: b
            }
        }
        n.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Rb,
                type: "GET",
                isLocal: Kb.test(Sb[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Qb,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": n.parseJSON,
                    "text xml": n.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
            },
            ajaxPrefilter: Tb(Ob),
            ajaxTransport: Tb(Pb),
            ajax: function(b, c) {
                "object" == typeof b && (c = b, b = void 0), c = c || {};
                var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
                    m = l.context || l,
                    o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                    p = n.Deferred(),
                    q = n.Callbacks("once memory"),
                    r = l.statusCode || {},
                    s = {},
                    t = {},
                    u = 0,
                    v = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === u) {
                                if (!k) {
                                    k = {};
                                    while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2]
                                }
                                b = k[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return 2 === u ? g : null
                        },
                        setRequestHeader: function(a, b) {
                            var c = a.toLowerCase();
                            return u || (a = t[c] = t[c] || a, s[a] = b), this
                        },
                        overrideMimeType: function(a) {
                            return u || (l.mimeType = a), this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (2 > u)
                                    for (b in a) r[b] = [r[b], a[b]];
                                else w.always(a[w.status]);
                            return this
                        },
                        abort: function(a) {
                            var b = a || v;
                            return j && j.abort(b), y(0, b), this
                        }
                    };
                if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
                i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
                for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
                if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
                v = "abort";
                for (e in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[e](l[e]);
                if (j = Ub(Pb, l, c, w)) {
                    if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                    l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                        w.abort("timeout")
                    }, l.timeout));
                    try {
                        u = 1, j.send(s, y)
                    } catch (x) {
                        if (!(2 > u)) throw x;
                        y(-1, x)
                    }
                } else y(-1, "No Transport");

                function y(b, c, d, e) {
                    var k, s, t, v, x, y = c;
                    2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
                }
                return w
            },
            getJSON: function(a, b, c) {
                return n.get(a, b, c, "json")
            },
            getScript: function(a, b) {
                return n.get(a, void 0, b, "script")
            }
        }), n.each(["get", "post"], function(a, b) {
            n[b] = function(a, c, d, e) {
                return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                }, n.isPlainObject(a) && a))
            }
        }), n._evalUrl = function(a) {
            return n.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }, n.fn.extend({
            wrapAll: function(a) {
                if (n.isFunction(a)) return this.each(function(b) {
                    n(this).wrapAll(a.call(this, b))
                });
                if (this[0]) {
                    var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                        var a = this;
                        while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return n.isFunction(a) ? this.each(function(b) {
                    n(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = n(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = n.isFunction(a);
                return this.each(function(c) {
                    n(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
                }).end()
            }
        });

        function Yb(a) {
            return a.style && a.style.display || n.css(a, "display")
        }

        function Zb(a) {
            if (!n.contains(a.ownerDocument || d, a)) return !0;
            while (a && 1 === a.nodeType) {
                if ("none" === Yb(a) || "hidden" === a.type) return !0;
                a = a.parentNode
            }
            return !1
        }
        n.expr.filters.hidden = function(a) {
            return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
        }, n.expr.filters.visible = function(a) {
            return !n.expr.filters.hidden(a)
        };
        var $b = /%20/g,
            _b = /\[\]$/,
            ac = /\r?\n/g,
            bc = /^(?:submit|button|image|reset|file)$/i,
            cc = /^(?:input|select|textarea|keygen)/i;

        function dc(a, b, c, d) {
            var e;
            if (n.isArray(b)) n.each(b, function(b, e) {
                c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
            else if (c || "object" !== n.type(b)) d(a, b);
            else
                for (e in b) dc(a + "[" + e + "]", b[e], c, d)
        }
        n.param = function(a, b) {
            var c, d = [],
                e = function(a, b) {
                    b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
                e(this.name, this.value)
            });
            else
                for (c in a) dc(c, a[c], b, e);
            return d.join("&").replace($b, "+")
        }, n.fn.extend({
            serialize: function() {
                return n.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = n.prop(this, "elements");
                    return a ? n.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
                }).map(function(a, b) {
                    var c = n(this).val();
                    return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(ac, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(ac, "\r\n")
                    }
                }).get()
            }
        }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
            return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
        } : hc;
        var ec = 0,
            fc = {},
            gc = n.ajaxSettings.xhr();
        a.attachEvent && a.attachEvent("onunload", function() {
            for (var a in fc) fc[a](void 0, !0)
        }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function(b) {
            if (!b.crossDomain || l.cors) {
                var c;
                return {
                    send: function(d, e) {
                        var f, g = b.xhr(),
                            h = ++ec;
                        if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                            for (f in b.xhrFields) g[f] = b.xhrFields[f];
                        b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                        for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                        g.send(b.hasContent && b.data || null), c = function(a, d) {
                            var f, i, j;
                            if (c && (d || 4 === g.readyState))
                                if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                                else {
                                    j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                    try {
                                        i = g.statusText
                                    } catch (k) {
                                        i = ""
                                    }
                                    f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                                }
                            j && e(f, i, j, g.getAllResponseHeaders())
                        }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
                    },
                    abort: function() {
                        c && c(void 0, !0)
                    }
                }
            }
        });

        function hc() {
            try {
                return new a.XMLHttpRequest
            } catch (b) {}
        }

        function ic() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP")
            } catch (b) {}
        }
        n.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(a) {
                    return n.globalEval(a), a
                }
            }
        }), n.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
        }), n.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c = d.head || n("head")[0] || d.documentElement;
                return {
                    send: function(e, f) {
                        b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                        }, c.insertBefore(b, c.firstChild)
                    },
                    abort: function() {
                        b && b.onload(void 0, !0)
                    }
                }
            }
        });
        var jc = [],
            kc = /(=)\?(?=&|$)|\?\?/;
        n.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = jc.pop() || n.expando + "_" + Eb++;
                return this[a] = !0, a
            }
        }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
                return g || n.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
                g = arguments
            }, d.always(function() {
                void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
            }), "script") : void 0
        }), n.parseHTML = function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || d;
            var e = x.exec(a),
                f = !c && [];
            return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
        };
        var lc = n.fn.load;
        n.fn.load = function(a, b, c) {
            if ("string" != typeof a && lc) return lc.apply(this, arguments);
            var d, e, f, g = this,
                h = a.indexOf(" ");
            return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
                url: a,
                type: e || "GET",
                dataType: "html",
                data: b
            }).done(function(a) {
                f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
            }).always(c && function(a, b) {
                g.each(function() {
                    c.apply(this, f || [a.responseText, b, a])
                })
            }), this
        }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            n.fn[b] = function(a) {
                return this.on(b, a)
            }
        }), n.expr.filters.animated = function(a) {
            return n.grep(n.timers, function(b) {
                return a === b.elem
            }).length
        };

        function mc(a) {
            return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
        }
        n.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = n.css(a, "position"),
                    l = n(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, n.fn.extend({
            offset: function(a) {
                if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                });
                var b, c, d = {
                        top: 0,
                        left: 0
                    },
                    e = this[0],
                    f = e && e.ownerDocument;
                if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = {
                            top: 0,
                            left: 0
                        },
                        d = this[0];
                    return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - c.top - n.css(d, "marginTop", !0),
                        left: b.left - c.left - n.css(d, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var a = this.offsetParent;
                    while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                    return a || Qa
                })
            }
        }), n.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, b) {
            var c = /Y/.test(b);
            n.fn[a] = function(d) {
                return Y(this, function(a, d, e) {
                    var f = mc(a);
                    return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
                }, a, d, arguments.length, null)
            }
        }), n.each(["top", "left"], function(a, b) {
            n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
                return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
            })
        }), n.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            n.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                n.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return Y(this, function(b, c, d) {
                        var e;
                        return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }), n.fn.extend({
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        }), n.fn.size = function() {
            return this.length
        }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return n
        });
        var nc = a.jQuery,
            oc = a.$;
        return n.noConflict = function(b) {
            return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
        }, b || (a.jQuery = a.$ = n), n
    });

} catch (err) {
    console.log('Error occurred inside /themes/vl/assets/js/vendor/jquery-1.12.4.min.js');
    console.log(err)
}

//File /vendor/sa/siteadmin/assets/sa.js?v=1004 

try {;
    var pause_ping = !1,
        mouse_activity = !0,
        idle_timeout = null,
        active_timeout = null;
    $('document').ready(function() {
        setTimeout(function() {
            sendPing(!0, !0)
        }, 500)
    });
    $(document).bind('mousemove', function(i) {
        mouse_activity = !0;
        if (!active_timeout) {
            active_timeout = setTimeout(function() {
                sendPing(!1, !0)
            }, 60000)
        }
    });

    function sendPing(i, r) {
        if (pause_ping) return;
        try {
            clearTimeout(idle_timeout);
            clearTimeout(active_timeout);
            idle_timeout = null;
            active_timeout = null
        } catch (o) {};
        var e = window.performance ? JSON.stringify(window.performance) : null;
        if (window.performance && window.performance.timing && window.performance.timing.loadEventEnd === 0) {
            setTimeout(function() {
                sendPing(!0, !0)
            }, 500);
            return
        };
        $.post('/siteadmin/system/ping2', {
            'client_timezone': getTimezoneName(),
            'first_ping': i,
            'mouse_activity': mouse_activity,
            'user_agent': navigator.userAgent,
            'url': location.pathname,
            'query_string': location.search,
            'performance': e,
            'referrer': document.referrer
        }, function(i) {
            if (i.result && r) {
                idle_timeout = setTimeout(function() {
                    sendPing(!1, !0)
                }, 300000)
            }
        });
        mouse_activity = !1
    };

    function getTimezoneName() {
        tmSummer = new Date(Date.UTC(2005, 6, 30, 0, 0, 0, 0));
        so = -1 * tmSummer.getTimezoneOffset();
        tmWinter = new Date(Date.UTC(2005, 12, 30, 0, 0, 0, 0));
        wo = -1 * tmWinter.getTimezoneOffset();
        if (-660 == so && -660 == wo) return 'Pacific/Midway';
        if (-600 == so && -600 == wo) return 'Pacific/Tahiti';
        if (-570 == so && -570 == wo) return 'Pacific/Marquesas';
        if (-540 == so && -600 == wo) return 'America/Adak';
        if (-540 == so && -540 == wo) return 'Pacific/Gambier';
        if (-480 == so && -540 == wo) return 'America/Anchorage';
        if (-480 == so && -480 == wo) return 'Pacific/Pitcairn';
        if (-420 == so && -480 == wo) return 'America/Los_Angeles';
        if (-420 == so && -420 == wo) return 'America/Phoenix';
        if (-360 == so && -420 == wo) return 'America/Denver';
        if (-360 == so && -360 == wo) return 'America/Guatemala';
        if (-360 == so && -300 == wo) return 'Pacific/Easter';
        if (-300 == so && -360 == wo) return 'America/Chicago';
        if (-300 == so && -300 == wo) return 'America/Bogota';
        if (-240 == so && -300 == wo) return 'America/New_York';
        if (-240 == so && -240 == wo) return 'America/Caracas';
        if (-240 == so && -180 == wo) return 'America/Santiago';
        if (-180 == so && -240 == wo) return 'Canada/Atlantic';
        if (-180 == so && -180 == wo) return 'America/Montevideo';
        if (-180 == so && -120 == wo) return 'America/Sao_Paulo';
        if (-150 == so && -210 == wo) return 'America/St_Johns';
        if (-120 == so && -180 == wo) return 'America/Godthab';
        if (-120 == so && -120 == wo) return 'America/Noronha';
        if (-60 == so && -60 == wo) return 'Atlantic/Cape_Verde';
        if (0 == so && -60 == wo) return 'Atlantic/Azores';
        if (0 == so && 0 == wo) return 'Africa/Casablanca';
        if (60 == so && 0 == wo) return 'Europe/London';
        if (60 == so && 60 == wo) return 'Africa/Algiers';
        if (60 == so && 120 == wo) return 'Africa/Windhoek';
        if (120 == so && 60 == wo) return 'Europe/Amsterdam';
        if (120 == so && 120 == wo) return 'Africa/Harare';
        if (180 == so && 120 == wo) return 'Europe/Athens';
        if (180 == so && 180 == wo) return 'Africa/Nairobi';
        if (240 == so && 180 == wo) return 'Europe/Moscow';
        if (240 == so && 240 == wo) return 'Asia/Dubai';
        if (270 == so && 210 == wo) return 'Asia/Tehran';
        if (270 == so && 270 == wo) return 'Asia/Kabul';
        if (300 == so && 240 == wo) return 'Asia/Baku';
        if (300 == so && 300 == wo) return 'Asia/Karachi';
        if (330 == so && 330 == wo) return 'Asia/Calcutta';
        if (345 == so && 345 == wo) return 'Asia/Katmandu';
        if (360 == so && 300 == wo) return 'Asia/Yekaterinburg';
        if (360 == so && 360 == wo) return 'Asia/Colombo';
        if (390 == so && 390 == wo) return 'Asia/Rangoon';
        if (420 == so && 360 == wo) return 'Asia/Almaty';
        if (420 == so && 420 == wo) return 'Asia/Bangkok';
        if (480 == so && 420 == wo) return 'Asia/Krasnoyarsk';
        if (480 == so && 480 == wo) return 'Australia/Perth';
        if (540 == so && 480 == wo) return 'Asia/Irkutsk';
        if (540 == so && 540 == wo) return 'Asia/Tokyo';
        if (570 == so && 570 == wo) return 'Australia/Darwin';
        if (570 == so && 630 == wo) return 'Australia/Adelaide';
        if (600 == so && 540 == wo) return 'Asia/Yakutsk';
        if (600 == so && 600 == wo) return 'Australia/Brisbane';
        if (600 == so && 660 == wo) return 'Australia/Sydney';
        if (630 == so && 660 == wo) return 'Australia/Lord_Howe';
        if (660 == so && 600 == wo) return 'Asia/Vladivostok';
        if (660 == so && 660 == wo) return 'Pacific/Guadalcanal';
        if (690 == so && 690 == wo) return 'Pacific/Norfolk';
        if (720 == so && 660 == wo) return 'Asia/Magadan';
        if (720 == so && 720 == wo) return 'Pacific/Fiji';
        if (720 == so && 780 == wo) return 'Pacific/Auckland';
        if (765 == so && 825 == wo) return 'Pacific/Chatham';
        if (780 == so && 780 == wo) return 'Pacific/Enderbury';
        if (840 == so && 840 == wo) return 'Pacific/Kiritimati';
        return 'America/New_York'
    };

    function setCookie(i, e, o) {
        var r = new Date();
        r.setTime(r.getTime() + (o * 24 * 60 * 60 * 1000));
        var t = 'expires=' + r.toUTCString();
        document.cookie = i + '=' + e + ';' + t + ';path=/'
    };

    function getCookie(r) {
        var o = r + '=',
            n = decodeURIComponent(document.cookie),
            t = n.split(';');
        for (var e = 0; e < t.length; e++) {
            var i = t[e];
            while (i.charAt(0) == ' ') {
                i = i.substring(1)
            };
            if (i.indexOf(o) == 0) {
                return i.substring(o.length, i.length)
            }
        };
        return ''
    };
} catch (err) {
    console.log('Error occurred inside /vendor/sa/siteadmin/assets/sa.js?v=1004');
    console.log(err)
}

//File /vendor/sa/siteadmin/assets/sautils.js 

try {;
    var sautils = {
        array_unique: function(e) {
            return e.filter(this.onlyUnique)
        },
        onlyUnique: function(e, t, s) {
            return s.indexOf(e) === t
        },
        url: {
            make: function(t) {
                var r = [],
                    s = [];
                for (var a in arguments) {
                    s[a] = arguments[a]
                };
                for (var a in s) {
                    if (a == 0) continue;
                    var u = s[a];
                    if (typeof(u) == "string" && u.substring(0, 1) == "?") {
                        u = u.replace("?", "");
                        u = u.split("=");
                        r[u[0]] = u[1];
                        delete(s[a])
                    }
                };
                s = sautils.array_unique(s);
                var i = jsroutes[s[0]];
                if (i) {
                    var e = i.route;
                    e = e.replace(/\^|$/, "");
                    e = e.replace("$", "");
                    e = e.replace(/\[.*?\]\{.*?\}/ig, "%s");
                    e = e.replace(/\([a-z\.\|0-9]{1,}\)$/ig, "");
                    s[0] = e;
                    var l = (e.match(/%s/g) || []).length,
                        o = s.length - 1;
                    if (l > o) {
                        console.error("URL Make Failed, The route expected a route ID and " + l + " arguments. " + o + " argument supplied. " + e);
                        return null
                    };
                    var d = 1;
                    e = e.replace(/%s/ig, function() {
                        return s[d]
                    });
                    if (Object.keys(r).length > 0) {
                        var n = encodeURIComponent,
                            c = Object.keys(r).map(function(e) {
                                return n(e) + "=" + n(r[e])
                            }).join("&");
                        e += "?" + c
                    };
                    return e
                } else {
                    console.error("URL Make Failed, The route is missing or has not been allowed in javascript use @jsroute('id') in the requesting view.");
                    return null
                }
            },
            querystring: function(e) {
                return window.location.search
            },
            host: function(e) {
                return window.location.host
            }
        },
        modRequest: {
            lastRequest: {
                "request": null,
                "default": null,
                "data": null,
                "success": null,
                "failure": null,
                "type": null
            },
            retainRequest: !0,
            logLastRequest: function() {
                if (!this.lastRequest.request) {
                    console.log("A modrequest has not been executed")
                };
                this.retainRequest = !1;
                return this.request(this.lastRequest.request, this.lastRequest.default, this.lastRequest.data, function(e) {
                    console.log(e)
                }, null, this.lastRequest.type);
                this.retainRequest = !0
            },
            repeatLastRequest: function() {
                if (!this.lastRequest.request) {
                    console.log("A modrequest has not been executed")
                };
                return this.request(this.lastRequest.request, this.lastRequest.default, this.lastRequest.data, this.lastRequest.success, this.lastRequest.failure, this.lastRequest.type)
            },
            request: function(e, s, u, a, r, t) {
                if (typeof(t) == "undefined") {
                    t = "JSON"
                };
                if (this.retainRequest) this.lastRequest = {
                    "request": e,
                    "default": s,
                    "data": u,
                    "success": a,
                    "failure": r,
                    "type": t
                };
                var n = $.ajax({
                    "url": "/system/modrequest",
                    "data": {
                        "request": e,
                        "data": u,
                        "default": s,
                    },
                    "method": "POST",
                    "dataType": t,
                    "beforeSend": function(e) {
                        e.setRequestHeader("SA-COOKIE", document.cookie)
                    },
                    "success": function(e) {
                        try {
                            a(e)
                        } catch (t) {
                            console.log("The modrequest failed to execute the success callback method.");
                            try {
                                console.log(t.stack)
                            } catch (t) {}
                        }
                    },
                    "error": function(e) {
                        try {
                            r(e)
                        } catch (t) {
                            console.log("The modrequest failed to get the data from the server and was unable to execute the failure callback method");
                            try {
                                console.log(t.stack)
                            } catch (t) {}
                        }
                    }
                });
                return n
            }
        }
    };
    var modRequest = sautils.modRequest;
} catch (err) {
    console.log('Error occurred inside /vendor/sa/siteadmin/assets/sautils.js');
    console.log(err)
}

//File /photo_gallery/js/jquery.bxslider.min.js 

try {
    /**
     * BxSlider v4.1.2 - Fully loaded, responsive content slider
     * http://bxslider.com
     *
     * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
     * Written while drinking Belgian ales and listening to jazz
     *
     * Released under the MIT license - http://opensource.org/licenses/MIT
     */
    ! function(t) {
        var e = {},
            s = {
                mode: "horizontal",
                slideSelector: "",
                infiniteLoop: !0,
                hideControlOnEnd: !1,
                speed: 500,
                easing: null,
                slideMargin: 0,
                startSlide: 0,
                randomStart: !1,
                captions: !1,
                ticker: !1,
                tickerHover: !1,
                adaptiveHeight: !1,
                adaptiveHeightSpeed: 500,
                video: !1,
                useCSS: !0,
                preloadImages: "visible",
                responsive: !0,
                slideZIndex: 50,
                touchEnabled: !0,
                swipeThreshold: 50,
                oneToOneTouch: !0,
                preventDefaultSwipeX: !0,
                preventDefaultSwipeY: !1,
                pager: !0,
                pagerType: "full",
                pagerShortSeparator: " / ",
                pagerSelector: null,
                buildPager: null,
                pagerCustom: null,
                controls: !0,
                nextText: "Next",
                prevText: "Prev",
                nextSelector: null,
                prevSelector: null,
                autoControls: !1,
                startText: "Start",
                stopText: "Stop",
                autoControlsCombine: !1,
                autoControlsSelector: null,
                auto: !1,
                pause: 4e3,
                autoStart: !0,
                autoDirection: "next",
                autoHover: !1,
                autoDelay: 0,
                minSlides: 1,
                maxSlides: 1,
                moveSlides: 0,
                slideWidth: 0,
                onSliderLoad: function() {},
                onSlideBefore: function() {},
                onSlideAfter: function() {},
                onSlideNext: function() {},
                onSlidePrev: function() {},
                onSliderResize: function() {}
            };
        t.fn.bxSlider = function(n) {
            if (0 == this.length) return this;
            if (this.length > 1) return this.each(function() {
                t(this).bxSlider(n)
            }), this;
            var o = {},
                r = this;
            e.el = this;
            var a = t(window).width(),
                l = t(window).height(),
                d = function() {
                    o.settings = t.extend({}, s, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = r.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {
                        index: o.settings.startSlide
                    }, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" == o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function() {
                        var t = document.createElement("div"),
                            e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var i in e)
                            if (void 0 !== t.style[e[i]]) return o.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
                        return !1
                    }(), "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), r.data("origStyle", r.attr("style")), r.children(o.settings.slideSelector).each(function() {
                        t(this).data("origStyle", t(this).attr("style"))
                    }), c()
                },
                c = function() {
                    r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), o.viewport = r.parent(), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), r.css({
                        width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%" : "auto",
                        position: "relative"
                    }), o.usingCSS && o.settings.easing ? r.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), f(), o.viewport.css({
                        width: "100%",
                        overflow: "hidden",
                        position: "relative"
                    }), o.viewport.parent().css({
                        maxWidth: p()
                    }), o.settings.pager || o.viewport.parent().css({
                        margin: "0 auto 0px"
                    }), o.children.css({
                        "float": "horizontal" == o.settings.mode ? "left" : "none",
                        listStyle: "none",
                        position: "relative"
                    }), o.children.css("width", u()), "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" == o.settings.mode && (o.children.css({
                        position: "absolute",
                        zIndex: 0,
                        display: "none"
                    }), o.children.eq(o.settings.startSlide).css({
                        zIndex: o.settings.slideZIndex,
                        display: "block"
                    })), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && P(), o.active.last = o.settings.startSlide == x() - 1, o.settings.video && r.fitVids();
                    var e = o.children.eq(o.settings.startSlide);
                    "all" == o.settings.preloadImages && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && T(), o.settings.controls && C(), o.settings.auto && o.settings.autoControls && E(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), g(e, h)
                },
                g = function(e, i) {
                    var s = e.find("img, iframe").length;
                    if (0 == s) return i(), void 0;
                    var n = 0;
                    e.find("img, iframe").each(function() {
                        t(this).one("load", function() {
                            ++n == s && i()
                        }).each(function() {
                            this.complete && t(this).trigger("load")
                        })
                    })
                },
                h = function() {
                    if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) {
                        var e = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,
                            i = o.children.slice(0, e).clone().addClass("bx-clone"),
                            s = o.children.slice(-e).clone().addClass("bx-clone");
                        r.append(i).prepend(s)
                    }
                    o.loader.remove(), S(), "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(v()), r.redrawSlider(), o.settings.onSliderLoad(o.active.index), o.initialized = !0, o.settings.responsive && t(window).bind("resize", Z), o.settings.auto && o.settings.autoStart && H(), o.settings.ticker && L(), o.settings.pager && q(o.settings.startSlide), o.settings.controls && W(), o.settings.touchEnabled && !o.settings.ticker && O()
                },
                v = function() {
                    var e = 0,
                        s = t();
                    if ("vertical" == o.settings.mode || o.settings.adaptiveHeight)
                        if (o.carousel) {
                            var n = 1 == o.settings.moveSlides ? o.active.index : o.active.index * m();
                            for (s = o.children.eq(n), i = 1; i <= o.settings.maxSlides - 1; i++) s = n + i >= o.children.length ? s.add(o.children.eq(i - 1)) : s.add(o.children.eq(n + i))
                        } else s = o.children.eq(o.active.index);
                    else s = o.children;
                    return "vertical" == o.settings.mode ? (s.each(function() {
                        e += t(this).outerHeight()
                    }), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, s.map(function() {
                        return t(this).outerHeight(!1)
                    }).get()), e
                },
                p = function() {
                    var t = "100%";
                    return o.settings.slideWidth > 0 && (t = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t
                },
                u = function() {
                    var t = o.settings.slideWidth,
                        e = o.viewport.width();
                    return 0 == o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" == o.settings.mode ? t = e : o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (e > o.maxThreshold || e < o.minThreshold && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)), t
                },
                f = function() {
                    var t = 1;
                    if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0)
                        if (o.viewport.width() < o.minThreshold) t = o.settings.minSlides;
                        else if (o.viewport.width() > o.maxThreshold) t = o.settings.maxSlides;
                    else {
                        var e = o.children.first().width();
                        t = Math.floor(o.viewport.width() / e)
                    } else "vertical" == o.settings.mode && (t = o.settings.minSlides);
                    return t
                },
                x = function() {
                    var t = 0;
                    if (o.settings.moveSlides > 0)
                        if (o.settings.infiniteLoop) t = o.children.length / m();
                        else
                            for (var e = 0, i = 0; e < o.children.length;) ++t, e = i + f(), i += o.settings.moveSlides <= f() ? o.settings.moveSlides : f();
                    else t = Math.ceil(o.children.length / f());
                    return t
                },
                m = function() {
                    return o.settings.moveSlides > 0 && o.settings.moveSlides <= f() ? o.settings.moveSlides : f()
                },
                S = function() {
                    if (o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop) {
                        if ("horizontal" == o.settings.mode) {
                            var t = o.children.last(),
                                e = t.position();
                            b(-(e.left - (o.viewport.width() - t.width())), "reset", 0)
                        } else if ("vertical" == o.settings.mode) {
                            var i = o.children.length - o.settings.minSlides,
                                e = o.children.eq(i).position();
                            b(-e.top, "reset", 0)
                        }
                    } else {
                        var e = o.children.eq(o.active.index * m()).position();
                        o.active.index == x() - 1 && (o.active.last = !0), void 0 != e && ("horizontal" == o.settings.mode ? b(-e.left, "reset", 0) : "vertical" == o.settings.mode && b(-e.top, "reset", 0))
                    }
                },
                b = function(t, e, i, s) {
                    if (o.usingCSS) {
                        var n = "vertical" == o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
                        r.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == e ? (r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), D()
                        })) : "reset" == e ? r.css(o.animProp, n) : "ticker" == e && (r.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(s.resetValue, "reset", 0), N()
                        }))
                    } else {
                        var a = {};
                        a[o.animProp] = t, "slide" == e ? r.animate(a, i, o.settings.easing, function() {
                            D()
                        }) : "reset" == e ? r.css(o.animProp, t) : "ticker" == e && r.animate(a, speed, "linear", function() {
                            b(s.resetValue, "reset", 0), N()
                        })
                    }
                },
                w = function() {
                    for (var e = "", i = x(), s = 0; i > s; s++) {
                        var n = "";
                        o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (n = o.settings.buildPager(s), o.pagerEl.addClass("bx-custom-pager")) : (n = s + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + n + "</a></div>"
                    }
                    o.pagerEl.html(e)
                },
                T = function() {
                    o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), w()), o.pagerEl.on("click", "a", I)
                },
                C = function() {
                    o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click", y), o.controls.prev.bind("click", z), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
                },
                E = function() {
                    o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.on("click", ".bx-start", k), o.controls.autoEl.on("click", ".bx-stop", M), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), A(o.settings.autoStart ? "stop" : "start")
                },
                P = function() {
                    o.children.each(function() {
                        var e = t(this).find("img:first").attr("title");
                        void 0 != e && ("" + e).length && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
                    })
                },
                y = function(t) {
                    o.settings.auto && r.stopAuto(), r.goToNextSlide(), t.preventDefault()
                },
                z = function(t) {
                    o.settings.auto && r.stopAuto(), r.goToPrevSlide(), t.preventDefault()
                },
                k = function(t) {
                    r.startAuto(), t.preventDefault()
                },
                M = function(t) {
                    r.stopAuto(), t.preventDefault()
                },
                I = function(e) {
                    o.settings.auto && r.stopAuto();
                    var i = t(e.currentTarget),
                        s = parseInt(i.attr("data-slide-index"));
                    s != o.active.index && r.goToSlide(s), e.preventDefault()
                },
                q = function(e) {
                    var i = o.children.length;
                    return "short" == o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)), o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + i), void 0) : (o.pagerEl.find("a").removeClass("active"), o.pagerEl.each(function(i, s) {
                        t(s).find("a").eq(e).addClass("active")
                    }), void 0)
                },
                D = function() {
                    if (o.settings.infiniteLoop) {
                        var t = "";
                        0 == o.active.index ? t = o.children.eq(0).position() : o.active.index == x() - 1 && o.carousel ? t = o.children.eq((x() - 1) * m()).position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), t && ("horizontal" == o.settings.mode ? b(-t.left, "reset", 0) : "vertical" == o.settings.mode && b(-t.top, "reset", 0))
                    }
                    o.working = !1, o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)
                },
                A = function(t) {
                    o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
                },
                W = function() {
                    1 == x() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index == x() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
                },
                H = function() {
                    o.settings.autoDelay > 0 ? setTimeout(r.startAuto, o.settings.autoDelay) : r.startAuto(), o.settings.autoHover && r.hover(function() {
                        o.interval && (r.stopAuto(!0), o.autoPaused = !0)
                    }, function() {
                        o.autoPaused && (r.startAuto(!0), o.autoPaused = null)
                    })
                },
                L = function() {
                    var e = 0;
                    if ("next" == o.settings.autoDirection) r.append(o.children.clone().addClass("bx-clone"));
                    else {
                        r.prepend(o.children.clone().addClass("bx-clone"));
                        var i = o.children.first().position();
                        e = "horizontal" == o.settings.mode ? -i.left : -i.top
                    }
                    b(e, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function() {
                        r.stop()
                    }, function() {
                        var e = 0;
                        o.children.each(function() {
                            e += "horizontal" == o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                        });
                        var i = o.settings.speed / e,
                            s = "horizontal" == o.settings.mode ? "left" : "top",
                            n = i * (e - Math.abs(parseInt(r.css(s))));
                        N(n)
                    }), N()
                },
                N = function(t) {
                    speed = t ? t : o.settings.speed;
                    var e = {
                            left: 0,
                            top: 0
                        },
                        i = {
                            left: 0,
                            top: 0
                        };
                    "next" == o.settings.autoDirection ? e = r.find(".bx-clone").first().position() : i = o.children.first().position();
                    var s = "horizontal" == o.settings.mode ? -e.left : -e.top,
                        n = "horizontal" == o.settings.mode ? -i.left : -i.top,
                        a = {
                            resetValue: n
                        };
                    b(s, "ticker", speed, a)
                },
                O = function() {
                    o.touch = {
                        start: {
                            x: 0,
                            y: 0
                        },
                        end: {
                            x: 0,
                            y: 0
                        }
                    }, o.viewport.bind("touchstart", X)
                },
                X = function(t) {
                    if (o.working) t.preventDefault();
                    else {
                        o.touch.originalPos = r.position();
                        var e = t.originalEvent;
                        o.touch.start.x = e.changedTouches[0].pageX, o.touch.start.y = e.changedTouches[0].pageY, o.viewport.bind("touchmove", Y), o.viewport.bind("touchend", V)
                    }
                },
                Y = function(t) {
                    var e = t.originalEvent,
                        i = Math.abs(e.changedTouches[0].pageX - o.touch.start.x),
                        s = Math.abs(e.changedTouches[0].pageY - o.touch.start.y);
                    if (3 * i > s && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * s > i && o.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != o.settings.mode && o.settings.oneToOneTouch) {
                        var n = 0;
                        if ("horizontal" == o.settings.mode) {
                            var r = e.changedTouches[0].pageX - o.touch.start.x;
                            n = o.touch.originalPos.left + r
                        } else {
                            var r = e.changedTouches[0].pageY - o.touch.start.y;
                            n = o.touch.originalPos.top + r
                        }
                        b(n, "reset", 0)
                    }
                },
                V = function(t) {
                    o.viewport.unbind("touchmove", Y);
                    var e = t.originalEvent,
                        i = 0;
                    if (o.touch.end.x = e.changedTouches[0].pageX, o.touch.end.y = e.changedTouches[0].pageY, "fade" == o.settings.mode) {
                        var s = Math.abs(o.touch.start.x - o.touch.end.x);
                        s >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto())
                    } else {
                        var s = 0;
                        "horizontal" == o.settings.mode ? (s = o.touch.end.x - o.touch.start.x, i = o.touch.originalPos.left) : (s = o.touch.end.y - o.touch.start.y, i = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 == o.active.index && s > 0 || o.active.last && 0 > s) ? b(i, "reset", 200) : Math.abs(s) >= o.settings.swipeThreshold ? (0 > s ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : b(i, "reset", 200)
                    }
                    o.viewport.unbind("touchend", V)
                },
                Z = function() {
                    var e = t(window).width(),
                        i = t(window).height();
                    (a != e || l != i) && (a = e, l = i, r.redrawSlider(), o.settings.onSliderResize.call(r, o.active.index))
                };
            return r.goToSlide = function(e, i) {
                if (!o.working && o.active.index != e)
                    if (o.working = !0, o.oldIndex = o.active.index, o.active.index = 0 > e ? x() - 1 : e >= x() ? 0 : e, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), "next" == i ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == i && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.last = o.active.index >= x() - 1, o.settings.pager && q(o.active.index), o.settings.controls && W(), "fade" == o.settings.mode) o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({
                        height: v()
                    }, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({
                        zIndex: 0
                    }), o.children.eq(o.active.index).css("zIndex", o.settings.slideZIndex + 1).fadeIn(o.settings.speed, function() {
                        t(this).css("zIndex", o.settings.slideZIndex), D()
                    });
                    else {
                        o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({
                            height: v()
                        }, o.settings.adaptiveHeightSpeed);
                        var s = 0,
                            n = {
                                left: 0,
                                top: 0
                            };
                        if (!o.settings.infiniteLoop && o.carousel && o.active.last)
                            if ("horizontal" == o.settings.mode) {
                                var a = o.children.eq(o.children.length - 1);
                                n = a.position(), s = o.viewport.width() - a.outerWidth()
                            } else {
                                var l = o.children.length - o.settings.minSlides;
                                n = o.children.eq(l).position()
                            }
                        else if (o.carousel && o.active.last && "prev" == i) {
                            var d = 1 == o.settings.moveSlides ? o.settings.maxSlides - m() : (x() - 1) * m() - (o.children.length - o.settings.maxSlides),
                                a = r.children(".bx-clone").eq(d);
                            n = a.position()
                        } else if ("next" == i && 0 == o.active.index) n = r.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1;
                        else if (e >= 0) {
                            var c = e * m();
                            n = o.children.eq(c).position()
                        }
                        if ("undefined" != typeof n) {
                            var g = "horizontal" == o.settings.mode ? -(n.left - s) : -n.top;
                            b(g, "slide", o.settings.speed)
                        }
                    }
            }, r.goToNextSlide = function() {
                if (o.settings.infiniteLoop || !o.active.last) {
                    var t = parseInt(o.active.index) + 1;
                    r.goToSlide(t, "next")
                }
            }, r.goToPrevSlide = function() {
                if (o.settings.infiniteLoop || 0 != o.active.index) {
                    var t = parseInt(o.active.index) - 1;
                    r.goToSlide(t, "prev")
                }
            }, r.startAuto = function(t) {
                o.interval || (o.interval = setInterval(function() {
                    "next" == o.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide()
                }, o.settings.pause), o.settings.autoControls && 1 != t && A("stop"))
            }, r.stopAuto = function(t) {
                o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && 1 != t && A("start"))
            }, r.getCurrentSlide = function() {
                return o.active.index
            }, r.getCurrentSlideElement = function() {
                return o.children.eq(o.active.index)
            }, r.getSlideCount = function() {
                return o.children.length
            }, r.redrawSlider = function() {
                o.children.add(r.find(".bx-clone")).outerWidth(u()), o.viewport.css("height", v()), o.settings.ticker || S(), o.active.last && (o.active.index = x() - 1), o.active.index >= x() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (w(), q(o.active.index))
            }, r.destroySlider = function() {
                o.initialized && (o.initialized = !1, t(".bx-clone", this).remove(), o.children.each(function() {
                    void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
                }), void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.settings.controls && o.pagerEl.remove(), t(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window).unbind("resize", Z))
            }, r.reloadSlider = function(t) {
                void 0 != t && (n = t), r.destroySlider(), d()
            }, d(), this
        }
    }(jQuery);
} catch (err) {
    console.log('Error occurred inside /photo_gallery/js/jquery.bxslider.min.js');
    console.log(err)
}

//File /themes/vl/assets/js/vendor/modernizr-3.5.0.min.js 

try {
    /*! modernizr 3.5.0 (Custom Build) | MIT *
     * https://modernizr.com/download/?-cssanimations-csscolumns-customelements-flexbox-history-picture-pointerevents-postmessage-sizes-srcset-webgl-websockets-webworkers-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles !*/
    ! function(e, t, n) {
        function r(e, t) {
            return typeof e === t
        }

        function o() {
            var e, t, n, o, i, s, a;
            for (var l in C)
                if (C.hasOwnProperty(l)) {
                    if (e = [], t = C[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                        for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                    for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) s = e[i], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), w.push((o ? "" : "no-") + a.join("-"))
                }
        }

        function i(e) {
            var t = S.className,
                n = Modernizr._config.classPrefix || "";
            if (x && (t = t.baseVal), Modernizr._config.enableJSClass) {
                var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                t = t.replace(r, "$1" + n + "js$2")
            }
            Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), x ? S.className.baseVal = t : S.className = t)
        }

        function s(e, t) {
            if ("object" == typeof e)
                for (var n in e) P(e, n) && s(n, e[n]);
            else {
                e = e.toLowerCase();
                var r = e.split("."),
                    o = Modernizr[r[0]];
                if (2 == r.length && (o = o[r[1]]), "undefined" != typeof o) return Modernizr;
                t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), i([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t)
            }
            return Modernizr
        }

        function a() {
            return "function" != typeof t.createElement ? t.createElement(arguments[0]) : x ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
        }

        function l() {
            var e = t.body;
            return e || (e = a(x ? "svg" : "body"), e.fake = !0), e
        }

        function u(e, n, r, o) {
            var i, s, u, f, d = "modernizr",
                c = a("div"),
                p = l();
            if (parseInt(r, 10))
                for (; r--;) u = a("div"), u.id = o ? o[r] : d + (r + 1), c.appendChild(u);
            return i = a("style"), i.type = "text/css", i.id = "s" + d, (p.fake ? p : c).appendChild(i), p.appendChild(c), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), c.id = d, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = S.style.overflow, S.style.overflow = "hidden", S.appendChild(p)), s = n(c, e), p.fake ? (p.parentNode.removeChild(p), S.style.overflow = f, S.offsetHeight) : c.parentNode.removeChild(c), !!s
        }

        function f(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function d(e) {
            return e.replace(/([A-Z])/g, function(e, t) {
                return "-" + t.toLowerCase()
            }).replace(/^ms-/, "-ms-")
        }

        function c(t, n, r) {
            var o;
            if ("getComputedStyle" in e) {
                o = getComputedStyle.call(e, t, n);
                var i = e.console;
                if (null !== o) r && (o = o.getPropertyValue(r));
                else if (i) {
                    var s = i.error ? "error" : "log";
                    i[s].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                }
            } else o = !n && t.currentStyle && t.currentStyle[r];
            return o
        }

        function p(t, r) {
            var o = t.length;
            if ("CSS" in e && "supports" in e.CSS) {
                for (; o--;)
                    if (e.CSS.supports(d(t[o]), r)) return !0;
                return !1
            }
            if ("CSSSupportsRule" in e) {
                for (var i = []; o--;) i.push("(" + d(t[o]) + ":" + r + ")");
                return i = i.join(" or "), u("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
                    return "absolute" == c(e, null, "position")
                })
            }
            return n
        }

        function m(e) {
            return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
                return t + n.toUpperCase()
            }).replace(/^-/, "")
        }

        function h(e, t, o, i) {
            function s() {
                u && (delete N.style, delete N.modElem)
            }
            if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) {
                var l = p(e, o);
                if (!r(l, "undefined")) return l
            }
            for (var u, d, c, h, v, A = ["modernizr", "tspan", "samp"]; !N.style && A.length;) u = !0, N.modElem = a(A.shift()), N.style = N.modElem.style;
            for (c = e.length, d = 0; c > d; d++)
                if (h = e[d], v = N.style[h], f(h, "-") && (h = m(h)), N.style[h] !== n) {
                    if (i || r(o, "undefined")) return s(), "pfx" == t ? h : !0;
                    try {
                        N.style[h] = o
                    } catch (g) {}
                    if (N.style[h] != v) return s(), "pfx" == t ? h : !0
                }
            return s(), !1
        }

        function v(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }

        function A(e, t, n) {
            var o;
            for (var i in e)
                if (e[i] in t) return n === !1 ? e[i] : (o = t[e[i]], r(o, "function") ? v(o, n || t) : o);
            return !1
        }

        function g(e, t, n, o, i) {
            var s = e.charAt(0).toUpperCase() + e.slice(1),
                a = (e + " " + O.join(s + " ") + s).split(" ");
            return r(t, "string") || r(t, "undefined") ? h(a, t, o, i) : (a = (e + " " + T.join(s + " ") + s).split(" "), A(a, t, n))
        }

        function y(e, t, r) {
            return g(e, n, n, t, r)
        }
        var C = [],
            b = {
                _version: "3.5.0",
                _config: {
                    classPrefix: "",
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0
                },
                _q: [],
                on: function(e, t) {
                    var n = this;
                    setTimeout(function() {
                        t(n[e])
                    }, 0)
                },
                addTest: function(e, t, n) {
                    C.push({
                        name: e,
                        fn: t,
                        options: n
                    })
                },
                addAsyncTest: function(e) {
                    C.push({
                        name: null,
                        fn: e
                    })
                }
            },
            Modernizr = function() {};
        Modernizr.prototype = b, Modernizr = new Modernizr;
        var w = [],
            S = t.documentElement,
            x = "svg" === S.nodeName.toLowerCase(),
            _ = "Moz O ms Webkit",
            T = b._config.usePrefixes ? _.toLowerCase().split(" ") : [];
        b._domPrefixes = T;
        var E = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
        b._prefixes = E;
        var P;
        ! function() {
            var e = {}.hasOwnProperty;
            P = r(e, "undefined") || r(e.call, "undefined") ? function(e, t) {
                return t in e && r(e.constructor.prototype[t], "undefined")
            } : function(t, n) {
                return e.call(t, n)
            }
        }(), b._l = {}, b.on = function(e, t) {
            this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() {
                Modernizr._trigger(e, Modernizr[e])
            }, 0)
        }, b._trigger = function(e, t) {
            if (this._l[e]) {
                var n = this._l[e];
                setTimeout(function() {
                    var e, r;
                    for (e = 0; e < n.length; e++)(r = n[e])(t)
                }, 0), delete this._l[e]
            }
        }, Modernizr._q.push(function() {
            b.addTest = s
        });
        var k = function() {
            function e(e, t) {
                var o;
                return e ? (t && "string" != typeof t || (t = a(t || "div")), e = "on" + e, o = e in t, !o && r && (t.setAttribute || (t = a("div")), t.setAttribute(e, ""), o = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), o) : !1
            }
            var r = !("onblur" in t.documentElement);
            return e
        }();
        b.hasEvent = k;
        var z = function() {
            var t = e.matchMedia || e.msMatchMedia;
            return t ? function(e) {
                var n = t(e);
                return n && n.matches || !1
            } : function(t) {
                var n = !1;
                return u("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                    n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
                }), n
            }
        }();
        b.mq = z;
        var B = function(e, t) {
            var n = !1,
                r = a("div"),
                o = r.style;
            if (e in o) {
                var i = T.length;
                for (o[e] = t, n = o[e]; i-- && !n;) o[e] = "-" + T[i] + "-" + t, n = o[e]
            }
            return "" === n && (n = !1), n
        };
        b.prefixedCSSValue = B;
        var O = b._config.usePrefixes ? _.split(" ") : [];
        b._cssomPrefixes = O;
        var L = {
            elem: a("modernizr")
        };
        Modernizr._q.push(function() {
            delete L.elem
        });
        var N = {
            style: L.elem.style
        };
        Modernizr._q.unshift(function() {
            delete N.style
        }), b.testAllProps = g, b.testAllProps = y;
        b.testProp = function(e, t, r) {
            return h([e], n, t, r)
        }, b.testStyles = u;
        Modernizr.addTest("customelements", "customElements" in e), Modernizr.addTest("history", function() {
            var t = navigator.userAgent;
            return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") || "file:" === location.protocol ? e.history && "pushState" in e.history : !1
        }), Modernizr.addTest("pointerevents", function() {
            var e = !1,
                t = T.length;
            for (e = Modernizr.hasEvent("pointerdown"); t-- && !e;) k(T[t] + "pointerdown") && (e = !0);
            return e
        }), Modernizr.addTest("postmessage", "postMessage" in e), Modernizr.addTest("webgl", function() {
            var t = a("canvas"),
                n = "probablySupportsContext" in t ? "probablySupportsContext" : "supportsContext";
            return n in t ? t[n]("webgl") || t[n]("experimental-webgl") : "WebGLRenderingContext" in e
        });
        var R = !1;
        try {
            R = "WebSocket" in e && 2 === e.WebSocket.CLOSING
        } catch (j) {}
        Modernizr.addTest("websockets", R), Modernizr.addTest("cssanimations", y("animationName", "a", !0)),
            function() {
                Modernizr.addTest("csscolumns", function() {
                    var e = !1,
                        t = y("columnCount");
                    try {
                        e = !!t, e && (e = new Boolean(e))
                    } catch (n) {}
                    return e
                });
                for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++) e = n[r].toLowerCase(), t = y("column" + n[r]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || y(n[r])), Modernizr.addTest("csscolumns." + e, t)
            }(), Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)), Modernizr.addTest("picture", "HTMLPictureElement" in e), Modernizr.addAsyncTest(function() {
                var e, t, n, r = a("img"),
                    o = "sizes" in r;
                !o && "srcset" in r ? (t = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==", e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", n = function() {
                    s("sizes", 2 == r.width)
                }, r.onload = n, r.onerror = n, r.setAttribute("sizes", "9px"), r.srcset = e + " 1w," + t + " 8w", r.src = e) : s("sizes", o)
            }), Modernizr.addTest("srcset", "srcset" in a("img")), Modernizr.addTest("webworkers", "Worker" in e), o(), i(w), delete b.addTest, delete b.addAsyncTest;
        for (var M = 0; M < Modernizr._q.length; M++) Modernizr._q[M]();
        e.Modernizr = Modernizr
    }(window, document);
} catch (err) {
    console.log('Error occurred inside /themes/vl/assets/js/vendor/modernizr-3.5.0.min.js');
    console.log(err)
}

//File /themes/vl/assets/js/popper.min.js 

try {
    /*
     Copyright (C) Federico Zivolo 2018
     Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
     */
    (function(e, t) {
        'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
    })(this, function() {
        'use strict';

        function e(e) {
            return e && '[object Function]' === {}.toString.call(e)
        }

        function t(e, t) {
            if (1 !== e.nodeType) return [];
            var o = getComputedStyle(e, null);
            return t ? o[t] : o
        }

        function o(e) {
            return 'HTML' === e.nodeName ? e : e.parentNode || e.host
        }

        function n(e) {
            if (!e) return document.body;
            switch (e.nodeName) {
                case 'HTML':
                case 'BODY':
                    return e.ownerDocument.body;
                case '#document':
                    return e.body;
            }
            var i = t(e),
                r = i.overflow,
                p = i.overflowX,
                s = i.overflowY;
            return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
        }

        function r(e) {
            return 11 === e ? re : 10 === e ? pe : re || pe
        }

        function p(e) {
            if (!e) return document.documentElement;
            for (var o = r(10) ? document.body : null, n = e.offsetParent; n === o && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
            var i = n && n.nodeName;
            return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
        }

        function s(e) {
            var t = e.nodeName;
            return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e)
        }

        function d(e) {
            return null === e.parentNode ? e : d(e.parentNode)
        }

        function a(e, t) {
            if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
            var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                n = o ? e : t,
                i = o ? t : e,
                r = document.createRange();
            r.setStart(n, 0), r.setEnd(i, 0);
            var l = r.commonAncestorContainer;
            if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);
            var f = d(e);
            return f.host ? a(f.host, t) : a(e, d(t).host)
        }

        function l(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
                o = 'top' === t ? 'scrollTop' : 'scrollLeft',
                n = e.nodeName;
            if ('BODY' === n || 'HTML' === n) {
                var i = e.ownerDocument.documentElement,
                    r = e.ownerDocument.scrollingElement || i;
                return r[o]
            }
            return e[o]
        }

        function f(e, t) {
            var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                n = l(t, 'top'),
                i = l(t, 'left'),
                r = o ? -1 : 1;
            return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e
        }

        function m(e, t) {
            var o = 'x' === t ? 'Left' : 'Top',
                n = 'Left' == o ? 'Right' : 'Bottom';
            return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10)
        }

        function h(e, t, o, n) {
            return $(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? o['offset' + e] + n['margin' + ('Height' === e ? 'Top' : 'Left')] + n['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
        }

        function c() {
            var e = document.body,
                t = document.documentElement,
                o = r(10) && getComputedStyle(t);
            return {
                height: h('Height', e, t, o),
                width: h('Width', e, t, o)
            }
        }

        function g(e) {
            return le({}, e, {
                right: e.left + e.width,
                bottom: e.top + e.height
            })
        }

        function u(e) {
            var o = {};
            try {
                if (r(10)) {
                    o = e.getBoundingClientRect();
                    var n = l(e, 'top'),
                        i = l(e, 'left');
                    o.top += n, o.left += i, o.bottom += n, o.right += i
                } else o = e.getBoundingClientRect()
            } catch (t) {}
            var p = {
                    left: o.left,
                    top: o.top,
                    width: o.right - o.left,
                    height: o.bottom - o.top
                },
                s = 'HTML' === e.nodeName ? c() : {},
                d = s.width || e.clientWidth || p.right - p.left,
                a = s.height || e.clientHeight || p.bottom - p.top,
                f = e.offsetWidth - d,
                h = e.offsetHeight - a;
            if (f || h) {
                var u = t(e);
                f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h
            }
            return g(p)
        }

        function b(e, o) {
            var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                p = r(10),
                s = 'HTML' === o.nodeName,
                d = u(e),
                a = u(o),
                l = n(e),
                m = t(o),
                h = parseFloat(m.borderTopWidth, 10),
                c = parseFloat(m.borderLeftWidth, 10);
            i && 'HTML' === o.nodeName && (a.top = $(a.top, 0), a.left = $(a.left, 0));
            var b = g({
                top: d.top - a.top - h,
                left: d.left - a.left - c,
                width: d.width,
                height: d.height
            });
            if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
                var y = parseFloat(m.marginTop, 10),
                    w = parseFloat(m.marginLeft, 10);
                b.top -= h - y, b.bottom -= h - y, b.left -= c - w, b.right -= c - w, b.marginTop = y, b.marginLeft = w
            }
            return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b
        }

        function y(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                o = e.ownerDocument.documentElement,
                n = b(e, o),
                i = $(o.clientWidth, window.innerWidth || 0),
                r = $(o.clientHeight, window.innerHeight || 0),
                p = t ? 0 : l(o),
                s = t ? 0 : l(o, 'left'),
                d = {
                    top: p - n.top + n.marginTop,
                    left: s - n.left + n.marginLeft,
                    width: i,
                    height: r
                };
            return g(d)
        }

        function w(e) {
            var n = e.nodeName;
            return 'BODY' === n || 'HTML' === n ? !1 : 'fixed' === t(e, 'position') || w(o(e))
        }

        function E(e) {
            if (!e || !e.parentElement || r()) return document.documentElement;
            for (var o = e.parentElement; o && 'none' === t(o, 'transform');) o = o.parentElement;
            return o || document.documentElement
        }

        function v(e, t, i, r) {
            var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
                s = {
                    top: 0,
                    left: 0
                },
                d = p ? E(e) : a(e, t);
            if ('viewport' === r) s = y(d, p);
            else {
                var l;
                'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r;
                var f = b(l, d, p);
                if ('HTML' === l.nodeName && !w(d)) {
                    var m = c(),
                        h = m.height,
                        g = m.width;
                    s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left
                } else s = f
            }
            return s.left += i, s.top += i, s.right -= i, s.bottom -= i, s
        }

        function x(e) {
            var t = e.width,
                o = e.height;
            return t * o
        }

        function O(e, t, o, n, i) {
            var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf('auto')) return e;
            var p = v(o, n, r, i),
                s = {
                    top: {
                        width: p.width,
                        height: t.top - p.top
                    },
                    right: {
                        width: p.right - t.right,
                        height: p.height
                    },
                    bottom: {
                        width: p.width,
                        height: p.bottom - t.bottom
                    },
                    left: {
                        width: t.left - p.left,
                        height: p.height
                    }
                },
                d = Object.keys(s).map(function(e) {
                    return le({
                        key: e
                    }, s[e], {
                        area: x(s[e])
                    })
                }).sort(function(e, t) {
                    return t.area - e.area
                }),
                a = d.filter(function(e) {
                    var t = e.width,
                        n = e.height;
                    return t >= o.clientWidth && n >= o.clientHeight
                }),
                l = 0 < a.length ? a[0].key : d[0].key,
                f = e.split('-')[1];
            return l + (f ? '-' + f : '')
        }

        function L(e, t, o) {
            var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                i = n ? E(t) : a(t, o);
            return b(o, i, n)
        }

        function S(e) {
            var t = getComputedStyle(e),
                o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
                n = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
                i = {
                    width: e.offsetWidth + n,
                    height: e.offsetHeight + o
                };
            return i
        }

        function T(e) {
            var t = {
                left: 'right',
                right: 'left',
                bottom: 'top',
                top: 'bottom'
            };
            return e.replace(/left|right|bottom|top/g, function(e) {
                return t[e]
            })
        }

        function C(e, t, o) {
            o = o.split('-')[0];
            var n = S(e),
                i = {
                    width: n.width,
                    height: n.height
                },
                r = -1 !== ['right', 'left'].indexOf(o),
                p = r ? 'top' : 'left',
                s = r ? 'left' : 'top',
                d = r ? 'height' : 'width',
                a = r ? 'width' : 'height';
            return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i
        }

        function D(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0]
        }

        function N(e, t, o) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e[t] === o
            });
            var n = D(e, function(e) {
                return e[t] === o
            });
            return e.indexOf(n)
        }

        function P(t, o, n) {
            var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
            return i.forEach(function(t) {
                t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
                var n = t['function'] || t.fn;
                t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t))
            }), o
        }

        function k() {
            if (!this.state.isDestroyed) {
                var e = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {}
                };
                e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
            }
        }

        function W(e, t) {
            return e.some(function(e) {
                var o = e.name,
                    n = e.enabled;
                return n && o === t
            })
        }

        function B(e) {
            for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
                var i = t[n],
                    r = i ? '' + i + o : e;
                if ('undefined' != typeof document.body.style[r]) return r
            }
            return null
        }

        function H() {
            return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
        }

        function A(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window
        }

        function M(e, t, o, i) {
            var r = 'BODY' === e.nodeName,
                p = r ? e.ownerDocument.defaultView : e;
            p.addEventListener(t, o, {
                passive: !0
            }), r || M(n(p.parentNode), t, o, i), i.push(p)
        }

        function I(e, t, o, i) {
            o.updateBound = i, A(e).addEventListener('resize', o.updateBound, {
                passive: !0
            });
            var r = n(e);
            return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
        }

        function F() {
            this.state.eventsEnabled || (this.state = I(this.reference, this.options, this.state, this.scheduleUpdate))
        }

        function R(e, t) {
            return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function(e) {
                e.removeEventListener('scroll', t.updateBound)
            }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
        }

        function U() {
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state))
        }

        function Y(e) {
            return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
        }

        function j(e, t) {
            Object.keys(t).forEach(function(o) {
                var n = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n
            })
        }

        function K(e, t) {
            Object.keys(t).forEach(function(o) {
                var n = t[o];
                !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
            })
        }

        function q(e, t, o) {
            var n = D(e, function(e) {
                    var o = e.name;
                    return o === t
                }),
                i = !!n && e.some(function(e) {
                    return e.name === o && e.enabled && e.order < n.order
                });
            if (!i) {
                var r = '`' + t + '`';
                console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
            }
            return i
        }

        function G(e) {
            return 'end' === e ? 'start' : 'start' === e ? 'end' : e
        }

        function z(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                o = me.indexOf(e),
                n = me.slice(o + 1).concat(me.slice(0, o));
            return t ? n.reverse() : n
        }

        function V(e, t, o, n) {
            var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                r = +i[1],
                p = i[2];
            if (!r) return e;
            if (0 === p.indexOf('%')) {
                var s;
                switch (p) {
                    case '%p':
                        s = o;
                        break;
                    case '%':
                    case '%r':
                    default:
                        s = n;
                }
                var d = g(s);
                return d[t] / 100 * r
            }
            if ('vh' === p || 'vw' === p) {
                var a;
                return a = 'vh' === p ? $(document.documentElement.clientHeight, window.innerHeight || 0) : $(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
            }
            return r
        }

        function _(e, t, o, n) {
            var i = [0, 0],
                r = -1 !== ['right', 'left'].indexOf(n),
                p = e.split(/(\+|\-)/).map(function(e) {
                    return e.trim()
                }),
                s = p.indexOf(D(p, function(e) {
                    return -1 !== e.search(/,|\s/)
                }));
            p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
            var d = /\s*,\s*|\s+/,
                a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
            return a = a.map(function(e, n) {
                var i = (1 === n ? !r : r) ? 'height' : 'width',
                    p = !1;
                return e.reduce(function(e, t) {
                    return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
                }, []).map(function(e) {
                    return V(e, i, t, o)
                })
            }), a.forEach(function(e, t) {
                e.forEach(function(o, n) {
                    Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
                })
            }), i
        }

        function X(e, t) {
            var o, n = t.offset,
                i = e.placement,
                r = e.offsets,
                p = r.popper,
                s = r.reference,
                d = i.split('-')[0];
            return o = Y(+n) ? [+n, 0] : _(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
        }
        for (var J = Math.min, Q = Math.round, Z = Math.floor, $ = Math.max, ee = 'undefined' != typeof window && 'undefined' != typeof document, te = ['Edge', 'Trident', 'Firefox'], oe = 0, ne = 0; ne < te.length; ne += 1)
            if (ee && 0 <= navigator.userAgent.indexOf(te[ne])) {
                oe = 1;
                break
            }
        var i = ee && window.Promise,
            ie = i ? function(e) {
                var t = !1;
                return function() {
                    t || (t = !0, window.Promise.resolve().then(function() {
                        t = !1, e()
                    }))
                }
            } : function(e) {
                var t = !1;
                return function() {
                    t || (t = !0, setTimeout(function() {
                        t = !1, e()
                    }, oe))
                }
            },
            re = ee && !!(window.MSInputMethodContext && document.documentMode),
            pe = ee && /MSIE 10/.test(navigator.userAgent),
            se = function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            },
            de = function() {
                function e(e, t) {
                    for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
                return function(t, o, n) {
                    return o && e(t.prototype, o), n && e(t, n), t
                }
            }(),
            ae = function(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            },
            le = Object.assign || function(e) {
                for (var t, o = 1; o < arguments.length; o++)
                    for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e
            },
            fe = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
            me = fe.slice(3),
            he = {
                FLIP: 'flip',
                CLOCKWISE: 'clockwise',
                COUNTERCLOCKWISE: 'counterclockwise'
            },
            ce = function() {
                function t(o, n) {
                    var i = this,
                        r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                    se(this, t), this.scheduleUpdate = function() {
                        return requestAnimationFrame(i.update)
                    }, this.update = ie(this.update.bind(this)), this.options = le({}, t.Defaults, r), this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                        i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                    }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                        return le({
                            name: e
                        }, i.options.modifiers[e])
                    }).sort(function(e, t) {
                        return e.order - t.order
                    }), this.modifiers.forEach(function(t) {
                        t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                    }), this.update();
                    var p = this.options.eventsEnabled;
                    p && this.enableEventListeners(), this.state.eventsEnabled = p
                }
                return de(t, [{
                    key: 'update',
                    value: function() {
                        return k.call(this)
                    }
                }, {
                    key: 'destroy',
                    value: function() {
                        return H.call(this)
                    }
                }, {
                    key: 'enableEventListeners',
                    value: function() {
                        return F.call(this)
                    }
                }, {
                    key: 'disableEventListeners',
                    value: function() {
                        return U.call(this)
                    }
                }]), t
            }();
        return ce.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ce.placements = fe, ce.Defaults = {
            placement: 'bottom',
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.placement,
                            o = t.split('-')[0],
                            n = t.split('-')[1];
                        if (n) {
                            var i = e.offsets,
                                r = i.reference,
                                p = i.popper,
                                s = -1 !== ['bottom', 'top'].indexOf(o),
                                d = s ? 'left' : 'top',
                                a = s ? 'width' : 'height',
                                l = {
                                    start: ae({}, d, r[d]),
                                    end: ae({}, d, r[d] + r[a] - p[a])
                                };
                            e.offsets.popper = le({}, p, l[n])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: X,
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(e, t) {
                        var o = t.boundariesElement || p(e.instance.popper);
                        e.instance.reference === o && (o = p(o));
                        var n = B('transform'),
                            i = e.instance.popper.style,
                            r = i.top,
                            s = i.left,
                            d = i[n];
                        i.top = '', i.left = '', i[n] = '';
                        var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                        i.top = r, i.left = s, i[n] = d, t.boundaries = a;
                        var l = t.priority,
                            f = e.offsets.popper,
                            m = {
                                primary: function(e) {
                                    var o = f[e];
                                    return f[e] < a[e] && !t.escapeWithReference && (o = $(f[e], a[e])), ae({}, e, o)
                                },
                                secondary: function(e) {
                                    var o = 'right' === e ? 'left' : 'top',
                                        n = f[o];
                                    return f[e] > a[e] && !t.escapeWithReference && (n = J(f[o], a[e] - ('right' === e ? f.width : f.height))), ae({}, o, n)
                                }
                            };
                        return l.forEach(function(e) {
                            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                            f = le({}, f, m[t](e))
                        }), e.offsets.popper = f, e
                    },
                    priority: ['left', 'right', 'top', 'bottom'],
                    padding: 5,
                    boundariesElement: 'scrollParent'
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.offsets,
                            o = t.popper,
                            n = t.reference,
                            i = e.placement.split('-')[0],
                            r = Z,
                            p = -1 !== ['top', 'bottom'].indexOf(i),
                            s = p ? 'right' : 'bottom',
                            d = p ? 'left' : 'top',
                            a = p ? 'width' : 'height';
                        return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(e, o) {
                        var n;
                        if (!q(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
                        var i = o.element;
                        if ('string' == typeof i) {
                            if (i = e.instance.popper.querySelector(i), !i) return e;
                        } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
                        var r = e.placement.split('-')[0],
                            p = e.offsets,
                            s = p.popper,
                            d = p.reference,
                            a = -1 !== ['left', 'right'].indexOf(r),
                            l = a ? 'height' : 'width',
                            f = a ? 'Top' : 'Left',
                            m = f.toLowerCase(),
                            h = a ? 'left' : 'top',
                            c = a ? 'bottom' : 'right',
                            u = S(i)[l];
                        d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper);
                        var b = d[m] + d[l] / 2 - u / 2,
                            y = t(e.instance.popper),
                            w = parseFloat(y['margin' + f], 10),
                            E = parseFloat(y['border' + f + 'Width'], 10),
                            v = b - e.offsets.popper[m] - w - E;
                        return v = $(J(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, ae(n, m, Q(v)), ae(n, h, ''), n), e
                    },
                    element: '[x-arrow]'
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(e, t) {
                        if (W(e.instance.modifiers, 'inner')) return e;
                        if (e.flipped && e.placement === e.originalPlacement) return e;
                        var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                            n = e.placement.split('-')[0],
                            i = T(n),
                            r = e.placement.split('-')[1] || '',
                            p = [];
                        switch (t.behavior) {
                            case he.FLIP:
                                p = [n, i];
                                break;
                            case he.CLOCKWISE:
                                p = z(n);
                                break;
                            case he.COUNTERCLOCKWISE:
                                p = z(n, !0);
                                break;
                            default:
                                p = t.behavior;
                        }
                        return p.forEach(function(s, d) {
                            if (n !== s || p.length === d + 1) return e;
                            n = e.placement.split('-')[0], i = T(n);
                            var a = e.offsets.popper,
                                l = e.offsets.reference,
                                f = Z,
                                m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
                                h = f(a.left) < f(o.left),
                                c = f(a.right) > f(o.right),
                                g = f(a.top) < f(o.top),
                                u = f(a.bottom) > f(o.bottom),
                                b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
                                y = -1 !== ['top', 'bottom'].indexOf(n),
                                w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
                            (m || b || w) && (e.flipped = !0, (m || b) && (n = p[d + 1]), w && (r = G(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip'))
                        }), e
                    },
                    behavior: 'flip',
                    padding: 5,
                    boundariesElement: 'viewport'
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(e) {
                        var t = e.placement,
                            o = t.split('-')[0],
                            n = e.offsets,
                            i = n.popper,
                            r = n.reference,
                            p = -1 !== ['left', 'right'].indexOf(o),
                            s = -1 === ['top', 'left'].indexOf(o);
                        return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(e) {
                        if (!q(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
                        var t = e.offsets.reference,
                            o = D(e.instance.modifiers, function(e) {
                                return 'preventOverflow' === e.name
                            }).boundaries;
                        if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(e, t) {
                        var o = t.x,
                            n = t.y,
                            i = e.offsets.popper,
                            r = D(e.instance.modifiers, function(e) {
                                return 'applyStyle' === e.name
                            }).gpuAcceleration;
                        void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                        var s, d, a = void 0 === r ? t.gpuAcceleration : r,
                            l = p(e.instance.popper),
                            f = u(l),
                            m = {
                                position: i.position
                            },
                            h = {
                                left: Z(i.left),
                                top: Q(i.top),
                                bottom: Q(i.bottom),
                                right: Z(i.right)
                            },
                            c = 'bottom' === o ? 'top' : 'bottom',
                            g = 'right' === n ? 'left' : 'right',
                            b = B('transform');
                        if (d = 'bottom' == c ? -f.height + h.bottom : h.top, s = 'right' == g ? -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform';
                        else {
                            var y = 'bottom' == c ? -1 : 1,
                                w = 'right' == g ? -1 : 1;
                            m[c] = d * y, m[g] = s * w, m.willChange = c + ', ' + g
                        }
                        var E = {
                            "x-placement": e.placement
                        };
                        return e.attributes = le({}, E, e.attributes), e.styles = le({}, m, e.styles), e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: 'bottom',
                    y: 'right'
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(e) {
                        return j(e.instance.popper, e.styles), K(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e
                    },
                    onLoad: function(e, t, o, n, i) {
                        var r = L(i, t, e, o.positionFixed),
                            p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                        return t.setAttribute('x-placement', p), j(t, {
                            position: o.positionFixed ? 'fixed' : 'absolute'
                        }), o
                    },
                    gpuAcceleration: void 0
                }
            }
        }, ce
    });
    //# sourceMappingURL=popper.min.js.map

} catch (err) {
    console.log('Error occurred inside /themes/vl/assets/js/popper.min.js');
    console.log(err)
}

//File /themes/vl/assets/js/bootstrap.min.js 

try {
    /*!
     * Bootstrap v4.1.3 (https://getbootstrap.com/)
     * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    ! function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
    }(this, function(t, e, h) {
        "use strict";

        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function s(t, e, n) {
            return e && i(t.prototype, e), n && i(t, n), t
        }

        function l(r) {
            for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {},
                    e = Object.keys(o);
                "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(o, t).enumerable
                }))), e.forEach(function(t) {
                    var e, n, i;
                    e = r, i = o[n = t], n in e ? Object.defineProperty(e, n, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = i
                })
            }
            return r
        }
        e = e && e.hasOwnProperty("default") ? e.default : e, h = h && h.hasOwnProperty("default") ? h.default : h;
        var r, n, o, a, c, u, f, d, g, _, m, p, v, y, E, C, T, b, S, I, A, D, w, N, O, k, P, j, H, L, R, x, W, U, q, F, K, M, Q, B, V, Y, z, J, Z, G, $, X, tt, et, nt, it, rt, ot, st, at, lt, ct, ht, ut, ft, dt, gt, _t, mt, pt, vt, yt, Et, Ct, Tt, bt, St, It, At, Dt, wt, Nt, Ot, kt, Pt, jt, Ht, Lt, Rt, xt, Wt, Ut, qt, Ft, Kt, Mt, Qt, Bt, Vt, Yt, zt, Jt, Zt, Gt, $t, Xt, te, ee, ne, ie, re, oe, se, ae, le, ce, he, ue, fe, de, ge, _e, me, pe, ve, ye, Ee, Ce, Te, be, Se, Ie, Ae, De, we, Ne, Oe, ke, Pe, je, He, Le, Re, xe, We, Ue, qe, Fe, Ke, Me, Qe, Be, Ve, Ye, ze, Je, Ze, Ge, $e, Xe, tn, en, nn, rn, on, sn, an, ln, cn, hn, un, fn, dn, gn, _n, mn, pn, vn, yn, En, Cn, Tn, bn, Sn, In, An, Dn, wn, Nn, On, kn, Pn, jn, Hn, Ln, Rn, xn, Wn, Un, qn, Fn = function(i) {
                var e = "transitionend";

                function t(t) {
                    var e = this,
                        n = !1;
                    return i(this).one(l.TRANSITION_END, function() {
                        n = !0
                    }), setTimeout(function() {
                        n || l.triggerTransitionEnd(e)
                    }, t), this
                }
                var l = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(t) {
                        for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
                        return t
                    },
                    getSelectorFromElement: function(t) {
                        var e = t.getAttribute("data-target");
                        e && "#" !== e || (e = t.getAttribute("href") || "");
                        try {
                            return document.querySelector(e) ? e : null
                        } catch (t) {
                            return null
                        }
                    },
                    getTransitionDurationFromElement: function(t) {
                        if (!t) return 0;
                        var e = i(t).css("transition-duration");
                        return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0
                    },
                    reflow: function(t) {
                        return t.offsetHeight
                    },
                    triggerTransitionEnd: function(t) {
                        i(t).trigger(e)
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(e)
                    },
                    isElement: function(t) {
                        return (t[0] || t).nodeType
                    },
                    typeCheckConfig: function(t, e, n) {
                        for (var i in n)
                            if (Object.prototype.hasOwnProperty.call(n, i)) {
                                var r = n[i],
                                    o = e[i],
                                    s = o && l.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                                if (!new RegExp(r).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                            }
                        var a
                    }
                };
                return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = {
                    bindType: e,
                    delegateType: e,
                    handle: function(t) {
                        if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                    }
                }, l
            }(e),
            Kn = (n = "alert", a = "." + (o = "bs.alert"), c = (r = e).fn[n], u = {
                CLOSE: "close" + a,
                CLOSED: "closed" + a,
                CLICK_DATA_API: "click" + a + ".data-api"
            }, f = "alert", d = "fade", g = "show", _ = function() {
                function i(t) {
                    this._element = t
                }
                var t = i.prototype;
                return t.close = function(t) {
                    var e = this._element;
                    t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
                }, t.dispose = function() {
                    r.removeData(this._element, o), this._element = null
                }, t._getRootElement = function(t) {
                    var e = Fn.getSelectorFromElement(t),
                        n = !1;
                    return e && (n = document.querySelector(e)), n || (n = r(t).closest("." + f)[0]), n
                }, t._triggerCloseEvent = function(t) {
                    var e = r.Event(u.CLOSE);
                    return r(t).trigger(e), e
                }, t._removeElement = function(e) {
                    var n = this;
                    if (r(e).removeClass(g), r(e).hasClass(d)) {
                        var t = Fn.getTransitionDurationFromElement(e);
                        r(e).one(Fn.TRANSITION_END, function(t) {
                            return n._destroyElement(e, t)
                        }).emulateTransitionEnd(t)
                    } else this._destroyElement(e)
                }, t._destroyElement = function(t) {
                    r(t).detach().trigger(u.CLOSED).remove()
                }, i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var t = r(this),
                            e = t.data(o);
                        e || (e = new i(this), t.data(o, e)), "close" === n && e[n](this)
                    })
                }, i._handleDismiss = function(e) {
                    return function(t) {
                        t && t.preventDefault(), e.close(this)
                    }
                }, s(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }]), i
            }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', _._handleDismiss(new _)), r.fn[n] = _._jQueryInterface, r.fn[n].Constructor = _, r.fn[n].noConflict = function() {
                return r.fn[n] = c, _._jQueryInterface
            }, _),
            Mn = (p = "button", y = "." + (v = "bs.button"), E = ".data-api", C = (m = e).fn[p], T = "active", b = "btn", I = '[data-toggle^="button"]', A = '[data-toggle="buttons"]', D = "input", w = ".active", N = ".btn", O = {
                CLICK_DATA_API: "click" + y + E,
                FOCUS_BLUR_DATA_API: (S = "focus") + y + E + " blur" + y + E
            }, k = function() {
                function n(t) {
                    this._element = t
                }
                var t = n.prototype;
                return t.toggle = function() {
                    var t = !0,
                        e = !0,
                        n = m(this._element).closest(A)[0];
                    if (n) {
                        var i = this._element.querySelector(D);
                        if (i) {
                            if ("radio" === i.type)
                                if (i.checked && this._element.classList.contains(T)) t = !1;
                                else {
                                    var r = n.querySelector(w);
                                    r && m(r).removeClass(T)
                                }
                            if (t) {
                                if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                                i.checked = !this._element.classList.contains(T), m(i).trigger("change")
                            }
                            i.focus(), e = !1
                        }
                    }
                    e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(T)), t && m(this._element).toggleClass(T)
                }, t.dispose = function() {
                    m.removeData(this._element, v), this._element = null
                }, n._jQueryInterface = function(e) {
                    return this.each(function() {
                        var t = m(this).data(v);
                        t || (t = new n(this), m(this).data(v, t)), "toggle" === e && t[e]()
                    })
                }, s(n, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }]), n
            }(), m(document).on(O.CLICK_DATA_API, I, function(t) {
                t.preventDefault();
                var e = t.target;
                m(e).hasClass(b) || (e = m(e).closest(N)), k._jQueryInterface.call(m(e), "toggle")
            }).on(O.FOCUS_BLUR_DATA_API, I, function(t) {
                var e = m(t.target).closest(N)[0];
                m(e).toggleClass(S, /^focus(in)?$/.test(t.type))
            }), m.fn[p] = k._jQueryInterface, m.fn[p].Constructor = k, m.fn[p].noConflict = function() {
                return m.fn[p] = C, k._jQueryInterface
            }, k),
            Qn = (j = "carousel", L = "." + (H = "bs.carousel"), R = ".data-api", x = (P = e).fn[j], W = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0
            }, U = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean"
            }, q = "next", F = "prev", K = "left", M = "right", Q = {
                SLIDE: "slide" + L,
                SLID: "slid" + L,
                KEYDOWN: "keydown" + L,
                MOUSEENTER: "mouseenter" + L,
                MOUSELEAVE: "mouseleave" + L,
                TOUCHEND: "touchend" + L,
                LOAD_DATA_API: "load" + L + R,
                CLICK_DATA_API: "click" + L + R
            }, B = "carousel", V = "active", Y = "slide", z = "carousel-item-right", J = "carousel-item-left", Z = "carousel-item-next", G = "carousel-item-prev", $ = ".active", X = ".active.carousel-item", tt = ".carousel-item", et = ".carousel-item-next, .carousel-item-prev", nt = ".carousel-indicators", it = "[data-slide], [data-slide-to]", rt = '[data-ride="carousel"]', ot = function() {
                function o(t, e) {
                    this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = P(t)[0], this._indicatorsElement = this._element.querySelector(nt), this._addEventListeners()
                }
                var t = o.prototype;
                return t.next = function() {
                    this._isSliding || this._slide(q)
                }, t.nextWhenVisible = function() {
                    !document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next()
                }, t.prev = function() {
                    this._isSliding || this._slide(F)
                }, t.pause = function(t) {
                    t || (this._isPaused = !0), this._element.querySelector(et) && (Fn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }, t.cycle = function(t) {
                    t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }, t.to = function(t) {
                    var e = this;
                    this._activeElement = this._element.querySelector(X);
                    var n = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0))
                        if (this._isSliding) P(this._element).one(Q.SLID, function() {
                            return e.to(t)
                        });
                        else {
                            if (n === t) return this.pause(), void this.cycle();
                            var i = n < t ? q : F;
                            this._slide(i, this._items[t])
                        }
                }, t.dispose = function() {
                    P(this._element).off(L), P.removeData(this._element, H), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                }, t._getConfig = function(t) {
                    return t = l({}, W, t), Fn.typeCheckConfig(j, t, U), t
                }, t._addEventListeners = function() {
                    var e = this;
                    this._config.keyboard && P(this._element).on(Q.KEYDOWN, function(t) {
                        return e._keydown(t)
                    }), "hover" === this._config.pause && (P(this._element).on(Q.MOUSEENTER, function(t) {
                        return e.pause(t)
                    }).on(Q.MOUSELEAVE, function(t) {
                        return e.cycle(t)
                    }), "ontouchstart" in document.documentElement && P(this._element).on(Q.TOUCHEND, function() {
                        e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                            return e.cycle(t)
                        }, 500 + e._config.interval)
                    }))
                }, t._keydown = function(t) {
                    if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                        case 37:
                            t.preventDefault(), this.prev();
                            break;
                        case 39:
                            t.preventDefault(), this.next()
                    }
                }, t._getItemIndex = function(t) {
                    return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(tt)) : [], this._items.indexOf(t)
                }, t._getItemByDirection = function(t, e) {
                    var n = t === q,
                        i = t === F,
                        r = this._getItemIndex(e),
                        o = this._items.length - 1;
                    if ((i && 0 === r || n && r === o) && !this._config.wrap) return e;
                    var s = (r + (t === F ? -1 : 1)) % this._items.length;
                    return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                }, t._triggerSlideEvent = function(t, e) {
                    var n = this._getItemIndex(t),
                        i = this._getItemIndex(this._element.querySelector(X)),
                        r = P.Event(Q.SLIDE, {
                            relatedTarget: t,
                            direction: e,
                            from: i,
                            to: n
                        });
                    return P(this._element).trigger(r), r
                }, t._setActiveIndicatorElement = function(t) {
                    if (this._indicatorsElement) {
                        var e = [].slice.call(this._indicatorsElement.querySelectorAll($));
                        P(e).removeClass(V);
                        var n = this._indicatorsElement.children[this._getItemIndex(t)];
                        n && P(n).addClass(V)
                    }
                }, t._slide = function(t, e) {
                    var n, i, r, o = this,
                        s = this._element.querySelector(X),
                        a = this._getItemIndex(s),
                        l = e || s && this._getItemByDirection(t, s),
                        c = this._getItemIndex(l),
                        h = Boolean(this._interval);
                    if (t === q ? (n = J, i = Z, r = K) : (n = z, i = G, r = M), l && P(l).hasClass(V)) this._isSliding = !1;
                    else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
                        var u = P.Event(Q.SLID, {
                            relatedTarget: l,
                            direction: r,
                            from: a,
                            to: c
                        });
                        if (P(this._element).hasClass(Y)) {
                            P(l).addClass(i), Fn.reflow(l), P(s).addClass(n), P(l).addClass(n);
                            var f = Fn.getTransitionDurationFromElement(s);
                            P(s).one(Fn.TRANSITION_END, function() {
                                P(l).removeClass(n + " " + i).addClass(V), P(s).removeClass(V + " " + i + " " + n), o._isSliding = !1, setTimeout(function() {
                                    return P(o._element).trigger(u)
                                }, 0)
                            }).emulateTransitionEnd(f)
                        } else P(s).removeClass(V), P(l).addClass(V), this._isSliding = !1, P(this._element).trigger(u);
                        h && this.cycle()
                    }
                }, o._jQueryInterface = function(i) {
                    return this.each(function() {
                        var t = P(this).data(H),
                            e = l({}, W, P(this).data());
                        "object" == typeof i && (e = l({}, e, i));
                        var n = "string" == typeof i ? i : e.slide;
                        if (t || (t = new o(this, e), P(this).data(H, t)), "number" == typeof i) t.to(i);
                        else if ("string" == typeof n) {
                            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                            t[n]()
                        } else e.interval && (t.pause(), t.cycle())
                    })
                }, o._dataApiClickHandler = function(t) {
                    var e = Fn.getSelectorFromElement(this);
                    if (e) {
                        var n = P(e)[0];
                        if (n && P(n).hasClass(B)) {
                            var i = l({}, P(n).data(), P(this).data()),
                                r = this.getAttribute("data-slide-to");
                            r && (i.interval = !1), o._jQueryInterface.call(P(n), i), r && P(n).data(H).to(r), t.preventDefault()
                        }
                    }
                }, s(o, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return W
                    }
                }]), o
            }(), P(document).on(Q.CLICK_DATA_API, it, ot._dataApiClickHandler), P(window).on(Q.LOAD_DATA_API, function() {
                for (var t = [].slice.call(document.querySelectorAll(rt)), e = 0, n = t.length; e < n; e++) {
                    var i = P(t[e]);
                    ot._jQueryInterface.call(i, i.data())
                }
            }), P.fn[j] = ot._jQueryInterface, P.fn[j].Constructor = ot, P.fn[j].noConflict = function() {
                return P.fn[j] = x, ot._jQueryInterface
            }, ot),
            Bn = (at = "collapse", ct = "." + (lt = "bs.collapse"), ht = (st = e).fn[at], ut = {
                toggle: !0,
                parent: ""
            }, ft = {
                toggle: "boolean",
                parent: "(string|element)"
            }, dt = {
                SHOW: "show" + ct,
                SHOWN: "shown" + ct,
                HIDE: "hide" + ct,
                HIDDEN: "hidden" + ct,
                CLICK_DATA_API: "click" + ct + ".data-api"
            }, gt = "show", _t = "collapse", mt = "collapsing", pt = "collapsed", vt = "width", yt = "height", Et = ".show, .collapsing", Ct = '[data-toggle="collapse"]', Tt = function() {
                function a(e, t) {
                    this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = st.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                    for (var n = [].slice.call(document.querySelectorAll(Ct)), i = 0, r = n.length; i < r; i++) {
                        var o = n[i],
                            s = Fn.getSelectorFromElement(o),
                            a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                                return t === e
                            });
                        null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(o))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }
                var t = a.prototype;
                return t.toggle = function() {
                    st(this._element).hasClass(gt) ? this.hide() : this.show()
                }, t.show = function() {
                    var t, e, n = this;
                    if (!this._isTransitioning && !st(this._element).hasClass(gt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Et)).filter(function(t) {
                            return t.getAttribute("data-parent") === n._config.parent
                        })).length && (t = null), !(t && (e = st(t).not(this._selector).data(lt)) && e._isTransitioning))) {
                        var i = st.Event(dt.SHOW);
                        if (st(this._element).trigger(i), !i.isDefaultPrevented()) {
                            t && (a._jQueryInterface.call(st(t).not(this._selector), "hide"), e || st(t).data(lt, null));
                            var r = this._getDimension();
                            st(this._element).removeClass(_t).addClass(mt), this._element.style[r] = 0, this._triggerArray.length && st(this._triggerArray).removeClass(pt).attr("aria-expanded", !0), this.setTransitioning(!0);
                            var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                                s = Fn.getTransitionDurationFromElement(this._element);
                            st(this._element).one(Fn.TRANSITION_END, function() {
                                st(n._element).removeClass(mt).addClass(_t).addClass(gt), n._element.style[r] = "", n.setTransitioning(!1), st(n._element).trigger(dt.SHOWN)
                            }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px"
                        }
                    }
                }, t.hide = function() {
                    var t = this;
                    if (!this._isTransitioning && st(this._element).hasClass(gt)) {
                        var e = st.Event(dt.HIDE);
                        if (st(this._element).trigger(e), !e.isDefaultPrevented()) {
                            var n = this._getDimension();
                            this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Fn.reflow(this._element), st(this._element).addClass(mt).removeClass(_t).removeClass(gt);
                            var i = this._triggerArray.length;
                            if (0 < i)
                                for (var r = 0; r < i; r++) {
                                    var o = this._triggerArray[r],
                                        s = Fn.getSelectorFromElement(o);
                                    if (null !== s) st([].slice.call(document.querySelectorAll(s))).hasClass(gt) || st(o).addClass(pt).attr("aria-expanded", !1)
                                }
                            this.setTransitioning(!0);
                            this._element.style[n] = "";
                            var a = Fn.getTransitionDurationFromElement(this._element);
                            st(this._element).one(Fn.TRANSITION_END, function() {
                                t.setTransitioning(!1), st(t._element).removeClass(mt).addClass(_t).trigger(dt.HIDDEN)
                            }).emulateTransitionEnd(a)
                        }
                    }
                }, t.setTransitioning = function(t) {
                    this._isTransitioning = t
                }, t.dispose = function() {
                    st.removeData(this._element, lt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, t._getConfig = function(t) {
                    return (t = l({}, ut, t)).toggle = Boolean(t.toggle), Fn.typeCheckConfig(at, t, ft), t
                }, t._getDimension = function() {
                    return st(this._element).hasClass(vt) ? vt : yt
                }, t._getParent = function() {
                    var n = this,
                        t = null;
                    Fn.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                    var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        i = [].slice.call(t.querySelectorAll(e));
                    return st(i).each(function(t, e) {
                        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
                    }), t
                }, t._addAriaAndCollapsedClass = function(t, e) {
                    if (t) {
                        var n = st(t).hasClass(gt);
                        e.length && st(e).toggleClass(pt, !n).attr("aria-expanded", n)
                    }
                }, a._getTargetFromElement = function(t) {
                    var e = Fn.getSelectorFromElement(t);
                    return e ? document.querySelector(e) : null
                }, a._jQueryInterface = function(i) {
                    return this.each(function() {
                        var t = st(this),
                            e = t.data(lt),
                            n = l({}, ut, t.data(), "object" == typeof i && i ? i : {});
                        if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(lt, e)), "string" == typeof i) {
                            if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                            e[i]()
                        }
                    })
                }, s(a, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return ut
                    }
                }]), a
            }(), st(document).on(dt.CLICK_DATA_API, Ct, function(t) {
                "A" === t.currentTarget.tagName && t.preventDefault();
                var n = st(this),
                    e = Fn.getSelectorFromElement(this),
                    i = [].slice.call(document.querySelectorAll(e));
                st(i).each(function() {
                    var t = st(this),
                        e = t.data(lt) ? "toggle" : n.data();
                    Tt._jQueryInterface.call(t, e)
                })
            }), st.fn[at] = Tt._jQueryInterface, st.fn[at].Constructor = Tt, st.fn[at].noConflict = function() {
                return st.fn[at] = ht, Tt._jQueryInterface
            }, Tt),
            Vn = (St = "dropdown", At = "." + (It = "bs.dropdown"), Dt = ".data-api", wt = (bt = e).fn[St], Nt = new RegExp("38|40|27"), Ot = {
                HIDE: "hide" + At,
                HIDDEN: "hidden" + At,
                SHOW: "show" + At,
                SHOWN: "shown" + At,
                CLICK: "click" + At,
                CLICK_DATA_API: "click" + At + Dt,
                KEYDOWN_DATA_API: "keydown" + At + Dt,
                KEYUP_DATA_API: "keyup" + At + Dt
            }, kt = "disabled", Pt = "show", jt = "dropup", Ht = "dropright", Lt = "dropleft", Rt = "dropdown-menu-right", xt = "position-static", Wt = '[data-toggle="dropdown"]', Ut = ".dropdown form", qt = ".dropdown-menu", Ft = ".navbar-nav", Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Mt = "top-start", Qt = "top-end", Bt = "bottom-start", Vt = "bottom-end", Yt = "right-start", zt = "left-start", Jt = {
                offset: 0,
                flip: !0,
                boundary: "scrollParent",
                reference: "toggle",
                display: "dynamic"
            }, Zt = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string"
            }, Gt = function() {
                function c(t, e) {
                    this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                }
                var t = c.prototype;
                return t.toggle = function() {
                    if (!this._element.disabled && !bt(this._element).hasClass(kt)) {
                        var t = c._getParentFromElement(this._element),
                            e = bt(this._menu).hasClass(Pt);
                        if (c._clearMenus(), !e) {
                            var n = {
                                    relatedTarget: this._element
                                },
                                i = bt.Event(Ot.SHOW, n);
                            if (bt(t).trigger(i), !i.isDefaultPrevented()) {
                                if (!this._inNavbar) {
                                    if ("undefined" == typeof h) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                    var r = this._element;
                                    "parent" === this._config.reference ? r = t : Fn.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && bt(t).addClass(xt), this._popper = new h(r, this._menu, this._getPopperConfig())
                                }
                                "ontouchstart" in document.documentElement && 0 === bt(t).closest(Ft).length && bt(document.body).children().on("mouseover", null, bt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), bt(this._menu).toggleClass(Pt), bt(t).toggleClass(Pt).trigger(bt.Event(Ot.SHOWN, n))
                            }
                        }
                    }
                }, t.dispose = function() {
                    bt.removeData(this._element, It), bt(this._element).off(At), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
                }, t.update = function() {
                    this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                }, t._addEventListeners = function() {
                    var e = this;
                    bt(this._element).on(Ot.CLICK, function(t) {
                        t.preventDefault(), t.stopPropagation(), e.toggle()
                    })
                }, t._getConfig = function(t) {
                    return t = l({}, this.constructor.Default, bt(this._element).data(), t), Fn.typeCheckConfig(St, t, this.constructor.DefaultType), t
                }, t._getMenuElement = function() {
                    if (!this._menu) {
                        var t = c._getParentFromElement(this._element);
                        t && (this._menu = t.querySelector(qt))
                    }
                    return this._menu
                }, t._getPlacement = function() {
                    var t = bt(this._element.parentNode),
                        e = Bt;
                    return t.hasClass(jt) ? (e = Mt, bt(this._menu).hasClass(Rt) && (e = Qt)) : t.hasClass(Ht) ? e = Yt : t.hasClass(Lt) ? e = zt : bt(this._menu).hasClass(Rt) && (e = Vt), e
                }, t._detectNavbar = function() {
                    return 0 < bt(this._element).closest(".navbar").length
                }, t._getPopperConfig = function() {
                    var e = this,
                        t = {};
                    "function" == typeof this._config.offset ? t.fn = function(t) {
                        return t.offsets = l({}, t.offsets, e._config.offset(t.offsets) || {}), t
                    } : t.offset = this._config.offset;
                    var n = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: t,
                            flip: {
                                enabled: this._config.flip
                            },
                            preventOverflow: {
                                boundariesElement: this._config.boundary
                            }
                        }
                    };
                    return "static" === this._config.display && (n.modifiers.applyStyle = {
                        enabled: !1
                    }), n
                }, c._jQueryInterface = function(e) {
                    return this.each(function() {
                        var t = bt(this).data(It);
                        if (t || (t = new c(this, "object" == typeof e ? e : null), bt(this).data(It, t)), "string" == typeof e) {
                            if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                            t[e]()
                        }
                    })
                }, c._clearMenus = function(t) {
                    if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                        for (var e = [].slice.call(document.querySelectorAll(Wt)), n = 0, i = e.length; n < i; n++) {
                            var r = c._getParentFromElement(e[n]),
                                o = bt(e[n]).data(It),
                                s = {
                                    relatedTarget: e[n]
                                };
                            if (t && "click" === t.type && (s.clickEvent = t), o) {
                                var a = o._menu;
                                if (bt(r).hasClass(Pt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && bt.contains(r, t.target))) {
                                    var l = bt.Event(Ot.HIDE, s);
                                    bt(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && bt(document.body).children().off("mouseover", null, bt.noop), e[n].setAttribute("aria-expanded", "false"), bt(a).removeClass(Pt), bt(r).removeClass(Pt).trigger(bt.Event(Ot.HIDDEN, s)))
                                }
                            }
                        }
                }, c._getParentFromElement = function(t) {
                    var e, n = Fn.getSelectorFromElement(t);
                    return n && (e = document.querySelector(n)), e || t.parentNode
                }, c._dataApiKeydownHandler = function(t) {
                    if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || bt(t.target).closest(qt).length)) : Nt.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !bt(this).hasClass(kt))) {
                        var e = c._getParentFromElement(this),
                            n = bt(e).hasClass(Pt);
                        if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
                            var i = [].slice.call(e.querySelectorAll(Kt));
                            if (0 !== i.length) {
                                var r = i.indexOf(t.target);
                                38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
                            }
                        } else {
                            if (27 === t.which) {
                                var o = e.querySelector(Wt);
                                bt(o).trigger("focus")
                            }
                            bt(this).trigger("click")
                        }
                    }
                }, s(c, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return Jt
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return Zt
                    }
                }]), c
            }(), bt(document).on(Ot.KEYDOWN_DATA_API, Wt, Gt._dataApiKeydownHandler).on(Ot.KEYDOWN_DATA_API, qt, Gt._dataApiKeydownHandler).on(Ot.CLICK_DATA_API + " " + Ot.KEYUP_DATA_API, Gt._clearMenus).on(Ot.CLICK_DATA_API, Wt, function(t) {
                t.preventDefault(), t.stopPropagation(), Gt._jQueryInterface.call(bt(this), "toggle")
            }).on(Ot.CLICK_DATA_API, Ut, function(t) {
                t.stopPropagation()
            }), bt.fn[St] = Gt._jQueryInterface, bt.fn[St].Constructor = Gt, bt.fn[St].noConflict = function() {
                return bt.fn[St] = wt, Gt._jQueryInterface
            }, Gt),
            Yn = (Xt = "modal", ee = "." + (te = "bs.modal"), ne = ($t = e).fn[Xt], ie = {
                backdrop: !0,
                keyboard: !0,
                focus: !0,
                show: !0
            }, re = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean"
            }, oe = {
                HIDE: "hide" + ee,
                HIDDEN: "hidden" + ee,
                SHOW: "show" + ee,
                SHOWN: "shown" + ee,
                FOCUSIN: "focusin" + ee,
                RESIZE: "resize" + ee,
                CLICK_DISMISS: "click.dismiss" + ee,
                KEYDOWN_DISMISS: "keydown.dismiss" + ee,
                MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
                MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
                CLICK_DATA_API: "click" + ee + ".data-api"
            }, se = "modal-scrollbar-measure", ae = "modal-backdrop", le = "modal-open", ce = "fade", he = "show", ue = ".modal-dialog", fe = '[data-toggle="modal"]', de = '[data-dismiss="modal"]', ge = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", _e = ".sticky-top", me = function() {
                function r(t, e) {
                    this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(ue), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
                }
                var t = r.prototype;
                return t.toggle = function(t) {
                    return this._isShown ? this.hide() : this.show(t)
                }, t.show = function(t) {
                    var e = this;
                    if (!this._isTransitioning && !this._isShown) {
                        $t(this._element).hasClass(ce) && (this._isTransitioning = !0);
                        var n = $t.Event(oe.SHOW, {
                            relatedTarget: t
                        });
                        $t(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), $t(document.body).addClass(le), this._setEscapeEvent(), this._setResizeEvent(), $t(this._element).on(oe.CLICK_DISMISS, de, function(t) {
                            return e.hide(t)
                        }), $t(this._dialog).on(oe.MOUSEDOWN_DISMISS, function() {
                            $t(e._element).one(oe.MOUSEUP_DISMISS, function(t) {
                                $t(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                            })
                        }), this._showBackdrop(function() {
                            return e._showElement(t)
                        }))
                    }
                }, t.hide = function(t) {
                    var e = this;
                    if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                        var n = $t.Event(oe.HIDE);
                        if ($t(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                            this._isShown = !1;
                            var i = $t(this._element).hasClass(ce);
                            if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), $t(document).off(oe.FOCUSIN), $t(this._element).removeClass(he), $t(this._element).off(oe.CLICK_DISMISS), $t(this._dialog).off(oe.MOUSEDOWN_DISMISS), i) {
                                var r = Fn.getTransitionDurationFromElement(this._element);
                                $t(this._element).one(Fn.TRANSITION_END, function(t) {
                                    return e._hideModal(t)
                                }).emulateTransitionEnd(r)
                            } else this._hideModal()
                        }
                    }
                }, t.dispose = function() {
                    $t.removeData(this._element, te), $t(window, document, this._element, this._backdrop).off(ee), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                }, t.handleUpdate = function() {
                    this._adjustDialog()
                }, t._getConfig = function(t) {
                    return t = l({}, ie, t), Fn.typeCheckConfig(Xt, t, re), t
                }, t._showElement = function(t) {
                    var e = this,
                        n = $t(this._element).hasClass(ce);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Fn.reflow(this._element), $t(this._element).addClass(he), this._config.focus && this._enforceFocus();
                    var i = $t.Event(oe.SHOWN, {
                            relatedTarget: t
                        }),
                        r = function() {
                            e._config.focus && e._element.focus(), e._isTransitioning = !1, $t(e._element).trigger(i)
                        };
                    if (n) {
                        var o = Fn.getTransitionDurationFromElement(this._element);
                        $t(this._dialog).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r()
                }, t._enforceFocus = function() {
                    var e = this;
                    $t(document).off(oe.FOCUSIN).on(oe.FOCUSIN, function(t) {
                        document !== t.target && e._element !== t.target && 0 === $t(e._element).has(t.target).length && e._element.focus()
                    })
                }, t._setEscapeEvent = function() {
                    var e = this;
                    this._isShown && this._config.keyboard ? $t(this._element).on(oe.KEYDOWN_DISMISS, function(t) {
                        27 === t.which && (t.preventDefault(), e.hide())
                    }) : this._isShown || $t(this._element).off(oe.KEYDOWN_DISMISS)
                }, t._setResizeEvent = function() {
                    var e = this;
                    this._isShown ? $t(window).on(oe.RESIZE, function(t) {
                        return e.handleUpdate(t)
                    }) : $t(window).off(oe.RESIZE)
                }, t._hideModal = function() {
                    var t = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                        $t(document.body).removeClass(le), t._resetAdjustments(), t._resetScrollbar(), $t(t._element).trigger(oe.HIDDEN)
                    })
                }, t._removeBackdrop = function() {
                    this._backdrop && ($t(this._backdrop).remove(), this._backdrop = null)
                }, t._showBackdrop = function(t) {
                    var e = this,
                        n = $t(this._element).hasClass(ce) ? ce : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = ae, n && this._backdrop.classList.add(n), $t(this._backdrop).appendTo(document.body), $t(this._element).on(oe.CLICK_DISMISS, function(t) {
                                e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                            }), n && Fn.reflow(this._backdrop), $t(this._backdrop).addClass(he), !t) return;
                        if (!n) return void t();
                        var i = Fn.getTransitionDurationFromElement(this._backdrop);
                        $t(this._backdrop).one(Fn.TRANSITION_END, t).emulateTransitionEnd(i)
                    } else if (!this._isShown && this._backdrop) {
                        $t(this._backdrop).removeClass(he);
                        var r = function() {
                            e._removeBackdrop(), t && t()
                        };
                        if ($t(this._element).hasClass(ce)) {
                            var o = Fn.getTransitionDurationFromElement(this._backdrop);
                            $t(this._backdrop).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o)
                        } else r()
                    } else t && t()
                }, t._adjustDialog = function() {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, t._resetAdjustments = function() {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }, t._checkScrollbar = function() {
                    var t = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, t._setScrollbar = function() {
                    var r = this;
                    if (this._isBodyOverflowing) {
                        var t = [].slice.call(document.querySelectorAll(ge)),
                            e = [].slice.call(document.querySelectorAll(_e));
                        $t(t).each(function(t, e) {
                            var n = e.style.paddingRight,
                                i = $t(e).css("padding-right");
                            $t(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                        }), $t(e).each(function(t, e) {
                            var n = e.style.marginRight,
                                i = $t(e).css("margin-right");
                            $t(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                        });
                        var n = document.body.style.paddingRight,
                            i = $t(document.body).css("padding-right");
                        $t(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                    }
                }, t._resetScrollbar = function() {
                    var t = [].slice.call(document.querySelectorAll(ge));
                    $t(t).each(function(t, e) {
                        var n = $t(e).data("padding-right");
                        $t(e).removeData("padding-right"), e.style.paddingRight = n || ""
                    });
                    var e = [].slice.call(document.querySelectorAll("" + _e));
                    $t(e).each(function(t, e) {
                        var n = $t(e).data("margin-right");
                        "undefined" != typeof n && $t(e).css("margin-right", n).removeData("margin-right")
                    });
                    var n = $t(document.body).data("padding-right");
                    $t(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
                }, t._getScrollbarWidth = function() {
                    var t = document.createElement("div");
                    t.className = se, document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t), e
                }, r._jQueryInterface = function(n, i) {
                    return this.each(function() {
                        var t = $t(this).data(te),
                            e = l({}, ie, $t(this).data(), "object" == typeof n && n ? n : {});
                        if (t || (t = new r(this, e), $t(this).data(te, t)), "string" == typeof n) {
                            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                            t[n](i)
                        } else e.show && t.show(i)
                    })
                }, s(r, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return ie
                    }
                }]), r
            }(), $t(document).on(oe.CLICK_DATA_API, fe, function(t) {
                var e, n = this,
                    i = Fn.getSelectorFromElement(this);
                i && (e = document.querySelector(i));
                var r = $t(e).data(te) ? "toggle" : l({}, $t(e).data(), $t(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
                var o = $t(e).one(oe.SHOW, function(t) {
                    t.isDefaultPrevented() || o.one(oe.HIDDEN, function() {
                        $t(n).is(":visible") && n.focus()
                    })
                });
                me._jQueryInterface.call($t(e), r, this)
            }), $t.fn[Xt] = me._jQueryInterface, $t.fn[Xt].Constructor = me, $t.fn[Xt].noConflict = function() {
                return $t.fn[Xt] = ne, me._jQueryInterface
            }, me),
            zn = (ve = "tooltip", Ee = "." + (ye = "bs.tooltip"), Ce = (pe = e).fn[ve], Te = "bs-tooltip", be = new RegExp("(^|\\s)" + Te + "\\S+", "g"), Ae = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !(Ie = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left"
                }),
                selector: !(Se = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)"
                }),
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent"
            }, we = "out", Ne = {
                HIDE: "hide" + Ee,
                HIDDEN: "hidden" + Ee,
                SHOW: (De = "show") + Ee,
                SHOWN: "shown" + Ee,
                INSERTED: "inserted" + Ee,
                CLICK: "click" + Ee,
                FOCUSIN: "focusin" + Ee,
                FOCUSOUT: "focusout" + Ee,
                MOUSEENTER: "mouseenter" + Ee,
                MOUSELEAVE: "mouseleave" + Ee
            }, Oe = "fade", ke = "show", Pe = ".tooltip-inner", je = ".arrow", He = "hover", Le = "focus", Re = "click", xe = "manual", We = function() {
                function i(t, e) {
                    if ("undefined" == typeof h) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                }
                var t = i.prototype;
                return t.enable = function() {
                    this._isEnabled = !0
                }, t.disable = function() {
                    this._isEnabled = !1
                }, t.toggleEnabled = function() {
                    this._isEnabled = !this._isEnabled
                }, t.toggle = function(t) {
                    if (this._isEnabled)
                        if (t) {
                            var e = this.constructor.DATA_KEY,
                                n = pe(t.currentTarget).data(e);
                            n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), pe(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                        } else {
                            if (pe(this.getTipElement()).hasClass(ke)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }, t.dispose = function() {
                    clearTimeout(this._timeout), pe.removeData(this.element, this.constructor.DATA_KEY), pe(this.element).off(this.constructor.EVENT_KEY), pe(this.element).closest(".modal").off("hide.bs.modal"), this.tip && pe(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                }, t.show = function() {
                    var e = this;
                    if ("none" === pe(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var t = pe.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        pe(this.element).trigger(t);
                        var n = pe.contains(this.element.ownerDocument.documentElement, this.element);
                        if (t.isDefaultPrevented() || !n) return;
                        var i = this.getTipElement(),
                            r = Fn.getUID(this.constructor.NAME);
                        i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && pe(i).addClass(Oe);
                        var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                            s = this._getAttachment(o);
                        this.addAttachmentClass(s);
                        var a = !1 === this.config.container ? document.body : pe(document).find(this.config.container);
                        pe(i).data(this.constructor.DATA_KEY, this), pe.contains(this.element.ownerDocument.documentElement, this.tip) || pe(i).appendTo(a), pe(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new h(this.element, i, {
                            placement: s,
                            modifiers: {
                                offset: {
                                    offset: this.config.offset
                                },
                                flip: {
                                    behavior: this.config.fallbackPlacement
                                },
                                arrow: {
                                    element: je
                                },
                                preventOverflow: {
                                    boundariesElement: this.config.boundary
                                }
                            },
                            onCreate: function(t) {
                                t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                            },
                            onUpdate: function(t) {
                                e._handlePopperPlacementChange(t)
                            }
                        }), pe(i).addClass(ke), "ontouchstart" in document.documentElement && pe(document.body).children().on("mouseover", null, pe.noop);
                        var l = function() {
                            e.config.animation && e._fixTransition();
                            var t = e._hoverState;
                            e._hoverState = null, pe(e.element).trigger(e.constructor.Event.SHOWN), t === we && e._leave(null, e)
                        };
                        if (pe(this.tip).hasClass(Oe)) {
                            var c = Fn.getTransitionDurationFromElement(this.tip);
                            pe(this.tip).one(Fn.TRANSITION_END, l).emulateTransitionEnd(c)
                        } else l()
                    }
                }, t.hide = function(t) {
                    var e = this,
                        n = this.getTipElement(),
                        i = pe.Event(this.constructor.Event.HIDE),
                        r = function() {
                            e._hoverState !== De && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), pe(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
                        };
                    if (pe(this.element).trigger(i), !i.isDefaultPrevented()) {
                        if (pe(n).removeClass(ke), "ontouchstart" in document.documentElement && pe(document.body).children().off("mouseover", null, pe.noop), this._activeTrigger[Re] = !1, this._activeTrigger[Le] = !1, this._activeTrigger[He] = !1, pe(this.tip).hasClass(Oe)) {
                            var o = Fn.getTransitionDurationFromElement(n);
                            pe(n).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o)
                        } else r();
                        this._hoverState = ""
                    }
                }, t.update = function() {
                    null !== this._popper && this._popper.scheduleUpdate()
                }, t.isWithContent = function() {
                    return Boolean(this.getTitle())
                }, t.addAttachmentClass = function(t) {
                    pe(this.getTipElement()).addClass(Te + "-" + t)
                }, t.getTipElement = function() {
                    return this.tip = this.tip || pe(this.config.template)[0], this.tip
                }, t.setContent = function() {
                    var t = this.getTipElement();
                    this.setElementContent(pe(t.querySelectorAll(Pe)), this.getTitle()), pe(t).removeClass(Oe + " " + ke)
                }, t.setElementContent = function(t, e) {
                    var n = this.config.html;
                    "object" == typeof e && (e.nodeType || e.jquery) ? n ? pe(e).parent().is(t) || t.empty().append(e) : t.text(pe(e).text()) : t[n ? "html" : "text"](e)
                }, t.getTitle = function() {
                    var t = this.element.getAttribute("data-original-title");
                    return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                }, t._getAttachment = function(t) {
                    return Ie[t.toUpperCase()]
                }, t._setListeners = function() {
                    var i = this;
                    this.config.trigger.split(" ").forEach(function(t) {
                        if ("click" === t) pe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                            return i.toggle(t)
                        });
                        else if (t !== xe) {
                            var e = t === He ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                                n = t === He ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                            pe(i.element).on(e, i.config.selector, function(t) {
                                return i._enter(t)
                            }).on(n, i.config.selector, function(t) {
                                return i._leave(t)
                            })
                        }
                        pe(i.element).closest(".modal").on("hide.bs.modal", function() {
                            return i.hide()
                        })
                    }), this.config.selector ? this.config = l({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }, t._fixTitle = function() {
                    var t = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, t._enter = function(t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || pe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), pe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Le : He] = !0), pe(e.getTipElement()).hasClass(ke) || e._hoverState === De ? e._hoverState = De : (clearTimeout(e._timeout), e._hoverState = De, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                        e._hoverState === De && e.show()
                    }, e.config.delay.show) : e.show())
                }, t._leave = function(t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || pe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), pe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Le : He] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = we, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                        e._hoverState === we && e.hide()
                    }, e.config.delay.hide) : e.hide())
                }, t._isWithActiveTrigger = function() {
                    for (var t in this._activeTrigger)
                        if (this._activeTrigger[t]) return !0;
                    return !1
                }, t._getConfig = function(t) {
                    return "number" == typeof(t = l({}, this.constructor.Default, pe(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {
                        show: t.delay,
                        hide: t.delay
                    }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), Fn.typeCheckConfig(ve, t, this.constructor.DefaultType), t
                }, t._getDelegateConfig = function() {
                    var t = {};
                    if (this.config)
                        for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                    return t
                }, t._cleanTipClass = function() {
                    var t = pe(this.getTipElement()),
                        e = t.attr("class").match(be);
                    null !== e && e.length && t.removeClass(e.join(""))
                }, t._handlePopperPlacementChange = function(t) {
                    var e = t.instance;
                    this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
                }, t._fixTransition = function() {
                    var t = this.getTipElement(),
                        e = this.config.animation;
                    null === t.getAttribute("x-placement") && (pe(t).removeClass(Oe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
                }, i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var t = pe(this).data(ye),
                            e = "object" == typeof n && n;
                        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), pe(this).data(ye, t)), "string" == typeof n)) {
                            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                            t[n]()
                        }
                    })
                }, s(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return Ae
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return ve
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return ye
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return Ne
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return Ee
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return Se
                    }
                }]), i
            }(), pe.fn[ve] = We._jQueryInterface, pe.fn[ve].Constructor = We, pe.fn[ve].noConflict = function() {
                return pe.fn[ve] = Ce, We._jQueryInterface
            }, We),
            Jn = (qe = "popover", Ke = "." + (Fe = "bs.popover"), Me = (Ue = e).fn[qe], Qe = "bs-popover", Be = new RegExp("(^|\\s)" + Qe + "\\S+", "g"), Ve = l({}, zn.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }), Ye = l({}, zn.DefaultType, {
                content: "(string|element|function)"
            }), ze = "fade", Ze = ".popover-header", Ge = ".popover-body", $e = {
                HIDE: "hide" + Ke,
                HIDDEN: "hidden" + Ke,
                SHOW: (Je = "show") + Ke,
                SHOWN: "shown" + Ke,
                INSERTED: "inserted" + Ke,
                CLICK: "click" + Ke,
                FOCUSIN: "focusin" + Ke,
                FOCUSOUT: "focusout" + Ke,
                MOUSEENTER: "mouseenter" + Ke,
                MOUSELEAVE: "mouseleave" + Ke
            }, Xe = function(t) {
                var e, n;

                function i() {
                    return t.apply(this, arguments) || this
                }
                n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
                var r = i.prototype;
                return r.isWithContent = function() {
                    return this.getTitle() || this._getContent()
                }, r.addAttachmentClass = function(t) {
                    Ue(this.getTipElement()).addClass(Qe + "-" + t)
                }, r.getTipElement = function() {
                    return this.tip = this.tip || Ue(this.config.template)[0], this.tip
                }, r.setContent = function() {
                    var t = Ue(this.getTipElement());
                    this.setElementContent(t.find(Ze), this.getTitle());
                    var e = this._getContent();
                    "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Ge), e), t.removeClass(ze + " " + Je)
                }, r._getContent = function() {
                    return this.element.getAttribute("data-content") || this.config.content
                }, r._cleanTipClass = function() {
                    var t = Ue(this.getTipElement()),
                        e = t.attr("class").match(Be);
                    null !== e && 0 < e.length && t.removeClass(e.join(""))
                }, i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var t = Ue(this).data(Fe),
                            e = "object" == typeof n ? n : null;
                        if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), Ue(this).data(Fe, t)), "string" == typeof n)) {
                            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                            t[n]()
                        }
                    })
                }, s(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return Ve
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return qe
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return Fe
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return $e
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return Ke
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return Ye
                    }
                }]), i
            }(zn), Ue.fn[qe] = Xe._jQueryInterface, Ue.fn[qe].Constructor = Xe, Ue.fn[qe].noConflict = function() {
                return Ue.fn[qe] = Me, Xe._jQueryInterface
            }, Xe),
            Zn = (en = "scrollspy", rn = "." + (nn = "bs.scrollspy"), on = (tn = e).fn[en], sn = {
                offset: 10,
                method: "auto",
                target: ""
            }, an = {
                offset: "number",
                method: "string",
                target: "(string|element)"
            }, ln = {
                ACTIVATE: "activate" + rn,
                SCROLL: "scroll" + rn,
                LOAD_DATA_API: "load" + rn + ".data-api"
            }, cn = "dropdown-item", hn = "active", un = '[data-spy="scroll"]', fn = ".active", dn = ".nav, .list-group", gn = ".nav-link", _n = ".nav-item", mn = ".list-group-item", pn = ".dropdown", vn = ".dropdown-item", yn = ".dropdown-toggle", En = "offset", Cn = "position", Tn = function() {
                function n(t, e) {
                    var n = this;
                    this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + gn + "," + this._config.target + " " + mn + "," + this._config.target + " " + vn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, tn(this._scrollElement).on(ln.SCROLL, function(t) {
                        return n._process(t)
                    }), this.refresh(), this._process()
                }
                var t = n.prototype;
                return t.refresh = function() {
                    var e = this,
                        t = this._scrollElement === this._scrollElement.window ? En : Cn,
                        r = "auto" === this._config.method ? t : this._config.method,
                        o = r === Cn ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                        var e, n = Fn.getSelectorFromElement(t);
                        if (n && (e = document.querySelector(n)), e) {
                            var i = e.getBoundingClientRect();
                            if (i.width || i.height) return [tn(e)[r]().top + o, n]
                        }
                        return null
                    }).filter(function(t) {
                        return t
                    }).sort(function(t, e) {
                        return t[0] - e[0]
                    }).forEach(function(t) {
                        e._offsets.push(t[0]), e._targets.push(t[1])
                    })
                }, t.dispose = function() {
                    tn.removeData(this._element, nn), tn(this._scrollElement).off(rn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }, t._getConfig = function(t) {
                    if ("string" != typeof(t = l({}, sn, "object" == typeof t && t ? t : {})).target) {
                        var e = tn(t.target).attr("id");
                        e || (e = Fn.getUID(en), tn(t.target).attr("id", e)), t.target = "#" + e
                    }
                    return Fn.typeCheckConfig(en, t, an), t
                }, t._getScrollTop = function() {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, t._getScrollHeight = function() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, t._getOffsetHeight = function() {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }, t._process = function() {
                    var t = this._getScrollTop() + this._config.offset,
                        e = this._getScrollHeight(),
                        n = this._config.offset + e - this._getOffsetHeight();
                    if (this._scrollHeight !== e && this.refresh(), n <= t) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i)
                    } else {
                        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                        for (var r = this._offsets.length; r--;) {
                            this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
                        }
                    }
                }, t._activate = function(e) {
                    this._activeTarget = e, this._clear();
                    var t = this._selector.split(",");
                    t = t.map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    });
                    var n = tn([].slice.call(document.querySelectorAll(t.join(","))));
                    n.hasClass(cn) ? (n.closest(pn).find(yn).addClass(hn), n.addClass(hn)) : (n.addClass(hn), n.parents(dn).prev(gn + ", " + mn).addClass(hn), n.parents(dn).prev(_n).children(gn).addClass(hn)), tn(this._scrollElement).trigger(ln.ACTIVATE, {
                        relatedTarget: e
                    })
                }, t._clear = function() {
                    var t = [].slice.call(document.querySelectorAll(this._selector));
                    tn(t).filter(fn).removeClass(hn)
                }, n._jQueryInterface = function(e) {
                    return this.each(function() {
                        var t = tn(this).data(nn);
                        if (t || (t = new n(this, "object" == typeof e && e), tn(this).data(nn, t)), "string" == typeof e) {
                            if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                            t[e]()
                        }
                    })
                }, s(n, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return sn
                    }
                }]), n
            }(), tn(window).on(ln.LOAD_DATA_API, function() {
                for (var t = [].slice.call(document.querySelectorAll(un)), e = t.length; e--;) {
                    var n = tn(t[e]);
                    Tn._jQueryInterface.call(n, n.data())
                }
            }), tn.fn[en] = Tn._jQueryInterface, tn.fn[en].Constructor = Tn, tn.fn[en].noConflict = function() {
                return tn.fn[en] = on, Tn._jQueryInterface
            }, Tn),
            Gn = (In = "." + (Sn = "bs.tab"), An = (bn = e).fn.tab, Dn = {
                HIDE: "hide" + In,
                HIDDEN: "hidden" + In,
                SHOW: "show" + In,
                SHOWN: "shown" + In,
                CLICK_DATA_API: "click" + In + ".data-api"
            }, wn = "dropdown-menu", Nn = "active", On = "disabled", kn = "fade", Pn = "show", jn = ".dropdown", Hn = ".nav, .list-group", Ln = ".active", Rn = "> li > .active", xn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Wn = ".dropdown-toggle", Un = "> .dropdown-menu .active", qn = function() {
                function i(t) {
                    this._element = t
                }
                var t = i.prototype;
                return t.show = function() {
                    var n = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && bn(this._element).hasClass(Nn) || bn(this._element).hasClass(On))) {
                        var t, i, e = bn(this._element).closest(Hn)[0],
                            r = Fn.getSelectorFromElement(this._element);
                        if (e) {
                            var o = "UL" === e.nodeName ? Rn : Ln;
                            i = (i = bn.makeArray(bn(e).find(o)))[i.length - 1]
                        }
                        var s = bn.Event(Dn.HIDE, {
                                relatedTarget: this._element
                            }),
                            a = bn.Event(Dn.SHOW, {
                                relatedTarget: i
                            });
                        if (i && bn(i).trigger(s), bn(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                            r && (t = document.querySelector(r)), this._activate(this._element, e);
                            var l = function() {
                                var t = bn.Event(Dn.HIDDEN, {
                                        relatedTarget: n._element
                                    }),
                                    e = bn.Event(Dn.SHOWN, {
                                        relatedTarget: i
                                    });
                                bn(i).trigger(t), bn(n._element).trigger(e)
                            };
                            t ? this._activate(t, t.parentNode, l) : l()
                        }
                    }
                }, t.dispose = function() {
                    bn.removeData(this._element, Sn), this._element = null
                }, t._activate = function(t, e, n) {
                    var i = this,
                        r = ("UL" === e.nodeName ? bn(e).find(Rn) : bn(e).children(Ln))[0],
                        o = n && r && bn(r).hasClass(kn),
                        s = function() {
                            return i._transitionComplete(t, r, n)
                        };
                    if (r && o) {
                        var a = Fn.getTransitionDurationFromElement(r);
                        bn(r).one(Fn.TRANSITION_END, s).emulateTransitionEnd(a)
                    } else s()
                }, t._transitionComplete = function(t, e, n) {
                    if (e) {
                        bn(e).removeClass(Pn + " " + Nn);
                        var i = bn(e.parentNode).find(Un)[0];
                        i && bn(i).removeClass(Nn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                    }
                    if (bn(t).addClass(Nn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Fn.reflow(t), bn(t).addClass(Pn), t.parentNode && bn(t.parentNode).hasClass(wn)) {
                        var r = bn(t).closest(jn)[0];
                        if (r) {
                            var o = [].slice.call(r.querySelectorAll(Wn));
                            bn(o).addClass(Nn)
                        }
                        t.setAttribute("aria-expanded", !0)
                    }
                    n && n()
                }, i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var t = bn(this),
                            e = t.data(Sn);
                        if (e || (e = new i(this), t.data(Sn, e)), "string" == typeof n) {
                            if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                            e[n]()
                        }
                    })
                }, s(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }]), i
            }(), bn(document).on(Dn.CLICK_DATA_API, xn, function(t) {
                t.preventDefault(), qn._jQueryInterface.call(bn(this), "show")
            }), bn.fn.tab = qn._jQueryInterface, bn.fn.tab.Constructor = qn, bn.fn.tab.noConflict = function() {
                return bn.fn.tab = An, qn._jQueryInterface
            }, qn);
        ! function(t) {
            if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = t.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(e), t.Util = Fn, t.Alert = Kn, t.Button = Mn, t.Carousel = Qn, t.Collapse = Bn, t.Dropdown = Vn, t.Modal = Yn, t.Popover = Jn, t.Scrollspy = Zn, t.Tab = Gn, t.Tooltip = zn, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    });
    //# sourceMappingURL=bootstrap.min.js.map
} catch (err) {
    console.log('Error occurred inside /themes/vl/assets/js/bootstrap.min.js');
    console.log(err)
}

//File /themes/vl/assets/js/owl.carousel.min.js 

try {
    /**
     * Owl Carousel v2.2.1
     * Copyright 2013-2017 David Deutsch
     * Licensed under  ()
     */
    ! function(a, b, c, d) {
        function e(b, c) {
            this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            }, this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
                this._handlers[c] = a.proxy(this[c], this)
            }, this)), a.each(e.Plugins, a.proxy(function(a, b) {
                this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
            }, this)), a.each(e.Workers, a.proxy(function(b, c) {
                this._pipe.push({
                    filter: c.filter,
                    run: a.proxy(c.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }
        e.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: b,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        }, e.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, e.Type = {
            Event: "event",
            State: "state"
        }, e.Plugins = {}, e.Workers = [{
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                a.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = this.settings.margin || "",
                    c = !this.settings.autoWidth,
                    d = this.settings.rtl,
                    e = {
                        width: "auto",
                        "margin-left": d ? b : "",
                        "margin-right": d ? "" : b
                    };
                !c && this.$stage.children().css(e), a.css = e
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    c = null,
                    d = this._items.length,
                    e = !this.settings.autoWidth,
                    f = [];
                for (a.items = {
                        merge: !1,
                        width: b
                    }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
                this._widths = f
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var b = [],
                    c = this._items,
                    d = this.settings,
                    e = Math.max(2 * d.items, 4),
                    f = 2 * Math.ceil(c.length / 2),
                    g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                    h = "",
                    i = "";
                for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
                this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
                this._coordinates = f
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var a = this.settings.stagePadding,
                    b = this._coordinates,
                    c = {
                        width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                        "padding-left": a || "",
                        "padding-right": a || ""
                    };
                this.$stage.css(c)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = this._coordinates.length,
                    c = !this.settings.autoWidth,
                    d = this.$stage.children();
                if (c && a.items.merge)
                    for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
                else c && (a.css.width = a.items.width, d.css(a.css))
            }
        }, {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                    f = 2 * this.settings.stagePadding,
                    g = this.coordinates(this.current()) + f,
                    h = g + this.width() * e,
                    i = [];
                for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
            }
        }], e.prototype.initialize = function() {
            if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
                var b, c, e;
                b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b)
            }
            this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
        }, e.prototype.setup = function() {
            var b = this.viewport(),
                c = this.options.responsive,
                d = -1,
                e = null;
            c ? (a.each(c, function(a) {
                a <= b && a > d && (d = Number(a))
            }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
                property: {
                    name: "settings",
                    value: e
                }
            }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            })
        }, e.prototype.optionsLogic = function() {
            this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, e.prototype.prepare = function(b) {
            var c = this.trigger("prepare", {
                content: b
            });
            return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
                content: c.data
            }), c.data
        }, e.prototype.update = function() {
            for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                    return this[a]
                }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid")
        }, e.prototype.width = function(a) {
            switch (a = a || e.Width.Default) {
                case e.Width.Inner:
                case e.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, e.prototype.refresh = function() {
            this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
        }, e.prototype.onThrottledResize = function() {
            b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }, e.prototype.onResize = function() {
            return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
        }, e.prototype.registerEventHandlers = function() {
            a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                return !1
            })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
        }, e.prototype.onDragStart = function(b) {
            var d = null;
            3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
                x: d[16 === d.length ? 12 : 4],
                y: d[16 === d.length ? 13 : 5]
            }) : (d = this.$stage.position(), d = {
                x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
                y: d.top
            }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
                var d = this.difference(this._drag.pointer, this.pointer(b));
                a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
            }, this)))
        }, e.prototype.onDragMove = function(a) {
            var b = null,
                c = null,
                d = null,
                e = this.difference(this._drag.pointer, this.pointer(a)),
                f = this.difference(this._drag.stage.start, e);
            this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
        }, e.prototype.onDragEnd = function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b)),
                e = this._drag.stage.current,
                f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
            a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
                return !1
            })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
        }, e.prototype.closest = function(b, c) {
            var d = -1,
                e = 30,
                f = this.width(),
                g = this.coordinates();
            return this.settings.freeDrag || a.each(g, a.proxy(function(a, h) {
                return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1
            }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
        }, e.prototype.animate = function(b) {
            var c = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
                transform: "translate3d(" + b + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s"
            }) : c ? this.$stage.animate({
                left: b + "px"
            }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                left: b + "px"
            })
        }, e.prototype.is = function(a) {
            return this._states.current[a] && this._states.current[a] > 0
        }, e.prototype.current = function(a) {
            if (a === d) return this._current;
            if (0 === this._items.length) return d;
            if (a = this.normalize(a), this._current !== a) {
                var b = this.trigger("change", {
                    property: {
                        name: "position",
                        value: a
                    }
                });
                b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, e.prototype.invalidate = function(b) {
            return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) {
                return b
            })
        }, e.prototype.reset = function(a) {
            a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
        }, e.prototype.normalize = function(a, b) {
            var c = this._items.length,
                e = b ? 0 : this._clones.length;
            return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
        }, e.prototype.relative = function(a) {
            return a -= this._clones.length / 2, this.normalize(a, !0)
        }, e.prototype.maximum = function(a) {
            var b, c, d, e = this.settings,
                f = this._coordinates.length;
            if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
            else if (e.autoWidth || e.merge) {
                for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)););
                f = b + 1
            } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
            return a && (f -= this._clones.length / 2), Math.max(f, 0)
        }, e.prototype.minimum = function(a) {
            return a ? 0 : this._clones.length / 2
        }, e.prototype.items = function(a) {
            return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
        }, e.prototype.mergers = function(a) {
            return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
        }, e.prototype.clones = function(b) {
            var c = this._clones.length / 2,
                e = c + this._items.length,
                f = function(a) {
                    return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
                };
            return b === d ? a.map(this._clones, function(a, b) {
                return f(b)
            }) : a.map(this._clones, function(a, c) {
                return a === b ? f(c) : null
            })
        }, e.prototype.speed = function(a) {
            return a !== d && (this._speed = a), this._speed
        }, e.prototype.coordinates = function(b) {
            var c, e = 1,
                f = b - 1;
            return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
                return this.coordinates(b)
            }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
        }, e.prototype.duration = function(a, b, c) {
            return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
        }, e.prototype.to = function(a, b) {
            var c = this.current(),
                d = null,
                e = a - this.relative(c),
                f = (e > 0) - (e < 0),
                g = this._items.length,
                h = this.minimum(),
                i = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
        }, e.prototype.next = function(a) {
            a = a || !1, this.to(this.relative(this.current()) + 1, a)
        }, e.prototype.prev = function(a) {
            a = a || !1, this.to(this.relative(this.current()) - 1, a)
        }, e.prototype.onTransitionEnd = function(a) {
            if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
            this.leave("animating"), this.trigger("translated")
        }, e.prototype.viewport = function() {
            var d;
            return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
        }, e.prototype.replace = function(b) {
            this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
                return 1 === this.nodeType
            }).each(a.proxy(function(a, b) {
                b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, e.prototype.add = function(b, c) {
            var e = this.relative(this._current);
            c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
                content: b,
                position: c
            }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
                content: b,
                position: c
            })
        }, e.prototype.remove = function(a) {
            a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
                content: this._items[a],
                position: a
            }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: a
            }))
        }, e.prototype.preloadAutoWidthImages = function(b) {
            b.each(a.proxy(function(b, c) {
                this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) {
                    c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
            }, this))
        }, e.prototype.destroy = function() {
            this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
            for (var d in this._plugins) this._plugins[d].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        }, e.prototype.op = function(a, b, c) {
            var d = this.settings.rtl;
            switch (b) {
                case "<":
                    return d ? a > c : a < c;
                case ">":
                    return d ? a < c : a > c;
                case ">=":
                    return d ? a <= c : a >= c;
                case "<=":
                    return d ? a >= c : a <= c
            }
        }, e.prototype.on = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
        }, e.prototype.off = function(a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
        }, e.prototype.trigger = function(b, c, d, f, g) {
            var h = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                i = a.camelCase(a.grep(["on", b, d], function(a) {
                    return a
                }).join("-").toLowerCase()),
                j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                    relatedTarget: this
                }, h, c));
            return this._supress[b] || (a.each(this._plugins, function(a, b) {
                b.onTrigger && b.onTrigger(j)
            }), this.register({
                type: e.Type.Event,
                name: b
            }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
        }, e.prototype.enter = function(b) {
            a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
                this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
            }, this))
        }, e.prototype.leave = function(b) {
            a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
                this._states.current[b]--
            }, this))
        }, e.prototype.register = function(b) {
            if (b.type === e.Type.Event) {
                if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                    var c = a.event.special[b.name]._default;
                    a.event.special[b.name]._default = function(a) {
                        return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                    }, a.event.special[b.name].owl = !0
                }
            } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
                return a.inArray(c, this._states.tags[b.name]) === d
            }, this)))
        }, e.prototype.suppress = function(b) {
            a.each(b, a.proxy(function(a, b) {
                this._supress[b] = !0
            }, this))
        }, e.prototype.release = function(b) {
            a.each(b, a.proxy(function(a, b) {
                delete this._supress[b]
            }, this))
        }, e.prototype.pointer = function(a) {
            var c = {
                x: null,
                y: null
            };
            return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
        }, e.prototype.isNumeric = function(a) {
            return !isNaN(parseFloat(a))
        }, e.prototype.difference = function(a, b) {
            return {
                x: a.x - b.x,
                y: a.y - b.y
            }
        }, a.fn.owlCarousel = function(b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var d = a(this),
                    f = d.data("owl.carousel");
                f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
                    f.register({
                        type: e.Type.Event,
                        name: c
                    }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                        a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
                    }, f))
                })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
            })
        }, a.fn.owlCarousel.Constructor = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b, this._interval = null, this._visible = null, this._handlers = {
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        }, e.prototype.watch = function() {
            this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        }, e.prototype.refresh = function() {
            this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
        }, e.prototype.destroy = function() {
            var a, c;
            b.clearInterval(this._interval);
            for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
            for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                    if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                        for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a, b) {
                                this.load(b)
                            }, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            lazyLoad: !1
        }, e.prototype.load = function(c) {
            var d = this._core.$stage.children().eq(c),
                e = d && d.find(".owl-lazy");
            !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
                var e, f = a(d),
                    g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
                this._core.trigger("load", {
                    element: f,
                    url: g
                }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                    f.css("opacity", 1), this._core.trigger("loaded", {
                        element: f,
                        url: g
                    }, "lazy")
                }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
                    f.css({
                        "background-image": 'url("' + g + '")',
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: f,
                        url: g
                    }, "lazy")
                }, this), e.src = g)
            }, this)), this._loaded.push(d.get(0)))
        }, e.prototype.destroy = function() {
            var a, b;
            for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b, this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
                }, this),
                "loaded.owl.lazy": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, e.prototype.update = function() {
            var b = this._core._current,
                c = b + this._core.settings.items,
                d = this._core.$stage.children().toArray().slice(b, c),
                e = [],
                f = 0;
            a.each(d, function(b, c) {
                e.push(a(c).height())
            }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
        }, e.prototype.destroy = function() {
            var a, b;
            for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b, this._videos = {}, this._playing = null, this._handlers = {
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
                }, this),
                "refreshed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && "position" === a.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": a.proxy(function(b) {
                    if (b.namespace) {
                        var c = a(b.content).find(".owl-video");
                        c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                    }
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
                this.play(a)
            }, this))
        };
        e.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, e.prototype.fetch = function(a, b) {
            var c = function() {
                    return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
                }(),
                d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
                e = a.attr("data-width") || this._core.settings.videoWidth,
                f = a.attr("data-height") || this._core.settings.videoHeight,
                g = a.attr("href");
            if (!g) throw new Error("Missing video URL.");
            if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
            else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
            else {
                if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                c = "vzaar"
            }
            d = d[6], this._videos[g] = {
                type: c,
                id: d,
                width: e,
                height: f
            }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
        }, e.prototype.thumbnail = function(b, c) {
            var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
                h = b.find("img"),
                i = "src",
                j = "",
                k = this._core.settings,
                l = function(a) {
                    e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
                };
            if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
            "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(a) {
                    f = a[0].thumbnail_large, l(f)
                }
            }) : "vzaar" === c.type && a.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + c.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(a) {
                    f = a.framegrab_url, l(f)
                }
            })
        }, e.prototype.stop = function() {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
        }, e.prototype.play = function(b) {
            var c, d = a(b.target),
                e = d.closest("." + this._core.settings.itemClass),
                f = this._videos[e.attr("data-video")],
                g = f.width || "100%",
                h = f.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
        }, e.prototype.isInFullScreen = function() {
            var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
            return b && a(b).parent().hasClass("owl-video-frame")
        }, e.prototype.destroy = function() {
            var a, b;
            this._core.$element.off("click.owl.video");
            for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.Video = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
                "change.owl.carousel": a.proxy(function(a) {
                    a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                    a.namespace && (this.swapping = "translated" == a.type)
                }, this),
                "translate.owl.carousel": a.proxy(function(a) {
                    a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        e.Defaults = {
                animateOut: !1,
                animateIn: !1
            }, e.prototype.swap = function() {
                if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                    this.core.speed(0);
                    var b, c = a.proxy(this.clear, this),
                        d = this.core.$stage.children().eq(this.previous),
                        e = this.core.$stage.children().eq(this.next),
                        f = this.core.settings.animateIn,
                        g = this.core.settings.animateOut;
                    this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
                        left: b + "px"
                    }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
                }
            }, e.prototype.clear = function(b) {
                a(b.target).css({
                    left: ""
                }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
            }, e.prototype.destroy = function() {
                var a, b;
                for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
            },
            a.fn.owlCarousel.Constructor.Plugins.Animate = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
                }, this),
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": a.proxy(function(a, b, c) {
                    a.namespace && this.play(b, c)
                }, this),
                "stop.owl.autoplay": a.proxy(function(a) {
                    a.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this),
                "touchstart.owl.core": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "touchend.owl.core": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this.play()
                }, this)
            }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
        };
        e.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, e.prototype.play = function(a, b) {
            this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
        }, e.prototype._getNextTimeout = function(d, e) {
            return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function() {
                this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
            }, this), d || this._core.settings.autoplayTimeout)
        }, e.prototype._setAutoPlayInterval = function() {
            this._timeout = this._getNextTimeout()
        }, e.prototype.stop = function() {
            this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"))
        }, e.prototype.pause = function() {
            this._core.is("rotating") && (this._paused = !0)
        }, e.prototype.destroy = function() {
            var a, b;
            this.stop();
            for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        "use strict";
        var e = function(b) {
            this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": a.proxy(function(b) {
                    b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                }, this),
                "added.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
                }, this),
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && "position" == a.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        e.Defaults = {
            nav: !1,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        }, e.prototype.initialize = function() {
            var b, c = this._core.settings;
            this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
                this.prev(c.navSpeed)
            }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
                this.next(c.navSpeed)
            }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function(b) {
                var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
                b.preventDefault(), this.to(d, c.dotsSpeed)
            }, this));
            for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
        }, e.prototype.destroy = function() {
            var a, b, c, d;
            for (a in this._handlers) this.$element.off(a, this._handlers[a]);
            for (b in this._controls) this._controls[b].remove();
            for (d in this.overides) this._core[d] = this._overrides[d];
            for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
        }, e.prototype.update = function() {
            var a, b, c, d = this._core.clones().length / 2,
                e = d + this._core.items().length,
                f = this._core.maximum(!0),
                g = this._core.settings,
                h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
            if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
                for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                    if (b >= h || 0 === b) {
                        if (this._pages.push({
                                start: Math.min(f, a - d),
                                end: a - d + h - 1
                            }), Math.min(f, a - d) === f) break;
                        b = 0, ++c
                    }
                    b += this._core.mergers(this._core.relative(a))
                }
        }, e.prototype.draw = function() {
            var b, c = this._core.settings,
                d = this._core.items().length <= c.items,
                e = this._core.relative(this._core.current()),
                f = c.loop || c.rewind;
            this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
        }, e.prototype.onTrigger = function(b) {
            var c = this._core.settings;
            b.page = {
                index: a.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
            }
        }, e.prototype.current = function() {
            var b = this._core.relative(this._core.current());
            return a.grep(this._pages, a.proxy(function(a, c) {
                return a.start <= b && a.end >= b
            }, this)).pop()
        }, e.prototype.getPosition = function(b) {
            var c, d, e = this._core.settings;
            return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
        }, e.prototype.next = function(b) {
            a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
        }, e.prototype.prev = function(b) {
            a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
        }, e.prototype.to = function(b, c, d) {
            var e;
            !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
        }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        "use strict";
        var e = function(c) {
            this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": a.proxy(function(c) {
                    c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": a.proxy(function(b) {
                    if (b.namespace) {
                        var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!c) return;
                        this._hashes[c] = b.content
                    }
                }, this),
                "changed.owl.carousel": a.proxy(function(c) {
                    if (c.namespace && "position" === c.property.name) {
                        var d = this._core.items(this._core.relative(this._core.current())),
                            e = a.map(this._hashes, function(a, b) {
                                return a === d ? b : null
                            }).join();
                        if (!e || b.location.hash.slice(1) === e) return;
                        b.location.hash = e
                    }
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
                var c = b.location.hash.substring(1),
                    e = this._core.$stage.children(),
                    f = this._hashes[c] && e.index(this._hashes[c]);
                f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
            }, this))
        };
        e.Defaults = {
            URLhashListener: !1
        }, e.prototype.destroy = function() {
            var c, d;
            a(b).off("hashchange.owl.navigation");
            for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
            for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        function e(b, c) {
            var e = !1,
                f = b.charAt(0).toUpperCase() + b.slice(1);
            return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
                if (g[b] !== d) return e = !c || b, !1
            }), e
        }

        function f(a) {
            return e(a, !0)
        }
        var g = a("<support>").get(0).style,
            h = "Webkit Moz O ms".split(" "),
            i = {
                transition: {
                    end: {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        transition: "transitionend"
                    }
                },
                animation: {
                    end: {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd",
                        animation: "animationend"
                    }
                }
            },
            j = {
                csstransforms: function() {
                    return !!e("transform")
                },
                csstransforms3d: function() {
                    return !!e("perspective")
                },
                csstransitions: function() {
                    return !!e("transition")
                },
                cssanimations: function() {
                    return !!e("animation")
                }
            };
        j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
    }(window.Zepto || window.jQuery, window, document);
} catch (err) {
    console.log('Error occurred inside /themes/vl/assets/js/owl.carousel.min.js');
    console.log(err)
}

//File /themes/vl/assets/js/isotope.pkgd.min.js 

try {
    /*!
     * Isotope PACKAGED v3.0.5
     *
     * Licensed GPLv3 for open source use
     * or Isotope Commercial License for commercial use
     *
     * https://isotope.metafizzy.co
     * Copyright 2017 Metafizzy
     */

    ! function(t, e) {
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
    }(window, function(t, e) {
        "use strict";

        function i(i, s, a) {
            function u(t, e, o) {
                var n, s = "$()." + i + '("' + e + '")';
                return t.each(function(t, u) {
                    var h = a.data(u, i);
                    if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                    var d = h[e];
                    if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                    var l = d.apply(h, o);
                    n = void 0 === n ? l : n
                }), void 0 !== n ? n : t
            }

            function h(t, e) {
                t.each(function(t, o) {
                    var n = a.data(o, i);
                    n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n))
                })
            }
            a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function(t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }), a.fn[i] = function(t) {
                if ("string" == typeof t) {
                    var e = n.call(arguments, 1);
                    return u(this, t, e)
                }
                return h(this, t), this
            }, o(a))
        }

        function o(t) {
            !t || t && t.bridget || (t.bridget = i)
        }
        var n = Array.prototype.slice,
            s = t.console,
            r = "undefined" == typeof s ? function() {} : function(t) {
                s.error(t)
            };
        return o(e || t.jQuery), i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    o = i[t] = i[t] || [];
                return o.indexOf(e) == -1 && o.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {},
                    o = i[t] = i[t] || {};
                return o[e] = !0, this
            }
        }, e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var o = i.indexOf(e);
                return o != -1 && i.splice(o, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                i = i.slice(0), e = e || [];
                for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                    var s = i[n],
                        r = o && o[s];
                    r && (this.off(t, s), delete o[s]), s.apply(this, e)
                }
                return this
            }
        }, e.allOff = function() {
            delete this._events, delete this._onceEvents
        }, t
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
            return e()
        }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function() {
        "use strict";

        function t(t) {
            var e = parseFloat(t),
                i = t.indexOf("%") == -1 && !isNaN(e);
            return i && e
        }

        function e() {}

        function i() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0; e < h; e++) {
                var i = u[e];
                t[i] = 0
            }
            return t
        }

        function o(t) {
            var e = getComputedStyle(t);
            return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
        }

        function n() {
            if (!d) {
                d = !0;
                var e = document.createElement("div");
                e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var n = o(e);
                s.isBoxSizeOuter = r = 200 == t(n.width), i.removeChild(e)
            }
        }

        function s(e) {
            if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var s = o(e);
                if ("none" == s.display) return i();
                var a = {};
                a.width = e.offsetWidth, a.height = e.offsetHeight;
                for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                    var f = u[l],
                        c = s[f],
                        m = parseFloat(c);
                    a[f] = isNaN(m) ? 0 : m
                }
                var p = a.paddingLeft + a.paddingRight,
                    y = a.paddingTop + a.paddingBottom,
                    g = a.marginLeft + a.marginRight,
                    v = a.marginTop + a.marginBottom,
                    _ = a.borderLeftWidth + a.borderRightWidth,
                    I = a.borderTopWidth + a.borderBottomWidth,
                    z = d && r,
                    x = t(s.width);
                x !== !1 && (a.width = x + (z ? 0 : p + _));
                var S = t(s.height);
                return S !== !1 && (a.height = S + (z ? 0 : y + I)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + I), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
            }
        }
        var r, a = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            },
            u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            h = u.length,
            d = !1;
        return s
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function() {
        "use strict";
        var t = function() {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var o = e[i],
                    n = o + "MatchesSelector";
                if (t[n]) return n
            }
        }();
        return function(e, i) {
            return e[t](i)
        }
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function(t, e) {
        var i = {};
        i.extend = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, i.modulo = function(t, e) {
            return (t % e + e) % e
        }, i.makeArray = function(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if (t && "object" == typeof t && "number" == typeof t.length)
                for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, i.removeFrom = function(t, e) {
            var i = t.indexOf(e);
            i != -1 && t.splice(i, 1)
        }, i.getParent = function(t, i) {
            for (; t.parentNode && t != document.body;)
                if (t = t.parentNode, e(t, i)) return t
        }, i.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, i.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, i.filterFindElements = function(t, o) {
            t = i.makeArray(t);
            var n = [];
            return t.forEach(function(t) {
                if (t instanceof HTMLElement) {
                    if (!o) return void n.push(t);
                    e(t, o) && n.push(t);
                    for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
                }
            }), n
        }, i.debounceMethod = function(t, e, i) {
            var o = t.prototype[e],
                n = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[n];
                t && clearTimeout(t);
                var e = arguments,
                    s = this;
                this[n] = setTimeout(function() {
                    o.apply(s, e), delete s[n]
                }, i || 100)
            }
        }, i.docReady = function(t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
        }, i.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var o = t.console;
        return i.htmlInit = function(e, n) {
            i.docReady(function() {
                var s = i.toDashed(n),
                    r = "data-" + s,
                    a = document.querySelectorAll("[" + r + "]"),
                    u = document.querySelectorAll(".js-" + s),
                    h = i.makeArray(a).concat(i.makeArray(u)),
                    d = r + "-options",
                    l = t.jQuery;
                h.forEach(function(t) {
                    var i, s = t.getAttribute(r) || t.getAttribute(d);
                    try {
                        i = s && JSON.parse(s)
                    } catch (a) {
                        return void(o && o.error("Error parsing " + r + " on " + t.className + ": " + a))
                    }
                    var u = new e(t, i);
                    l && l.data(t, n, u)
                })
            })
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
    }(window, function(t, e) {
        "use strict";

        function i(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function o(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function n(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }
        var s = document.documentElement.style,
            r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
            a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
            u = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[r],
            h = {
                transform: a,
                transition: r,
                transitionDuration: r + "Duration",
                transitionProperty: r + "Property",
                transitionDelay: r + "Delay"
            },
            d = o.prototype = Object.create(t.prototype);
        d.constructor = o, d._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, d.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, d.getSize = function() {
            this.size = e(this.element)
        }, d.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                var o = h[i] || i;
                e[o] = t[i]
            }
        }, d.getPosition = function() {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                o = t[e ? "left" : "right"],
                n = t[i ? "top" : "bottom"],
                s = this.layout.size,
                r = o.indexOf("%") != -1 ? parseFloat(o) / 100 * s.width : parseInt(o, 10),
                a = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.height : parseInt(n, 10);
            r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
        }, d.layoutPosition = function() {
            var t = this.layout.size,
                e = {},
                i = this.layout._getOption("originLeft"),
                o = this.layout._getOption("originTop"),
                n = i ? "paddingLeft" : "paddingRight",
                s = i ? "left" : "right",
                r = i ? "right" : "left",
                a = this.position.x + t[n];
            e[s] = this.getXValue(a), e[r] = "";
            var u = o ? "paddingTop" : "paddingBottom",
                h = o ? "top" : "bottom",
                d = o ? "bottom" : "top",
                l = this.position.y + t[u];
            e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
        }, d.getXValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, d.getYValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, d._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                o = this.position.y,
                n = parseInt(t, 10),
                s = parseInt(e, 10),
                r = n === this.position.x && s === this.position.y;
            if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
            var a = t - i,
                u = e - o,
                h = {};
            h.transform = this.getTranslate(a, u), this.transition({
                to: h,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, d.getTranslate = function(t, e) {
            var i = this.layout._getOption("originLeft"),
                o = this.layout._getOption("originTop");
            return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
        }, d.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, d._nonTransition = function(t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, d.transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var o = this.element.offsetHeight;
                o = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var l = "opacity," + n(a);
        d.enableTransition = function() {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t, this.css({
                    transitionProperty: l,
                    transitionDuration: t,
                    transitionDelay: this.staggerDelay || 0
                }), this.element.addEventListener(u, this, !1)
            }
        }, d.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, d.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var f = {
            "-webkit-transform": "transform"
        };
        d.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    o = f[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
                    var n = e.onEnd[o];
                    n.call(this), delete e.onEnd[o]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, d.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
        }, d._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var c = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return d.removeTransitionStyles = function() {
            this.css(c)
        }, d.stagger = function(t) {
            t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
        }, d.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, d.remove = function() {
            return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
        }, d.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[i] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, d.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, d.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, d.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[i] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, d.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, d.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, o
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, s) {
            return e(t, i, o, n, s)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function(t, e, i, o, n) {
        "use strict";

        function s(t, e) {
            var i = o.getQueryElement(t);
            if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
            var n = ++l;
            this.element.outlayerGUID = n, f[n] = this, this._create();
            var s = this._getOption("initLayout");
            s && this.layout()
        }

        function r(t) {
            function e() {
                t.apply(this, arguments)
            }
            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
        }

        function a(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                o = e && e[2];
            if (!i.length) return 0;
            i = parseFloat(i);
            var n = m[o] || 1;
            return i * n
        }
        var u = t.console,
            h = t.jQuery,
            d = function() {},
            l = 0,
            f = {};
        s.namespace = "outlayer", s.Item = n, s.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var c = s.prototype;
        o.extend(c, e.prototype), c.option = function(t) {
            o.extend(this.options, t)
        }, c._getOption = function(t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        }, s.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, c._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
            var t = this._getOption("resize");
            t && this.bindResize()
        }, c.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, c._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
                var s = e[n],
                    r = new i(s, this);
                o.push(r)
            }
            return o
        }, c._filterFindItemElements = function(t) {
            return o.filterFindElements(t, this.options.itemSelector)
        }, c.getItemElements = function() {
            return this.items.map(function(t) {
                return t.element
            })
        }, c.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, c._init = c.layout, c._resetLayout = function() {
            this.getSize()
        }, c.getSize = function() {
            this.size = i(this.element)
        }, c._getMeasurement = function(t, e) {
            var o, n = this.options[t];
            n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
        }, c.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, c._getItemsForLayout = function(t) {
            return t.filter(function(t) {
                return !t.isIgnored
            })
        }, c._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var i = [];
                t.forEach(function(t) {
                    var o = this._getItemLayoutPosition(t);
                    o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
                }, this), this._processLayoutQueue(i)
            }
        }, c._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, c._processLayoutQueue = function(t) {
            this.updateStagger(), t.forEach(function(t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e)
            }, this)
        }, c.updateStagger = function() {
            var t = this.options.stagger;
            return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
        }, c._positionItem = function(t, e, i, o, n) {
            o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
        }, c._postLayout = function() {
            this.resizeContainer()
        }, c.resizeContainer = function() {
            var t = this._getOption("resizeContainer");
            if (t) {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
            }
        }, c._getContainerSize = d, c._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, c._emitCompleteOnItems = function(t, e) {
            function i() {
                n.dispatchEvent(t + "Complete", null, [e])
            }

            function o() {
                r++, r == s && i()
            }
            var n = this,
                s = e.length;
            if (!e || !s) return void i();
            var r = 0;
            e.forEach(function(e) {
                e.once(t, o)
            })
        }, c.dispatchEvent = function(t, e, i) {
            var o = e ? [e].concat(i) : i;
            if (this.emitEvent(t, o), h)
                if (this.$element = this.$element || h(this.element), e) {
                    var n = h.Event(e);
                    n.type = t, this.$element.trigger(n, i)
                } else this.$element.trigger(t, i)
        }, c.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, c.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, c.stamp = function(t) {
            t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
        }, c.unstamp = function(t) {
            t = this._find(t), t && t.forEach(function(t) {
                o.removeFrom(this.stamps, t), this.unignore(t)
            }, this)
        }, c._find = function(t) {
            if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
        }, c._manageStamps = function() {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, c._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, c._manageStamp = d, c._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                o = this._boundingRect,
                n = i(t),
                s = {
                    left: e.left - o.left - n.marginLeft,
                    top: e.top - o.top - n.marginTop,
                    right: o.right - e.right - n.marginRight,
                    bottom: o.bottom - e.bottom - n.marginBottom
                };
            return s
        }, c.handleEvent = o.handleEvent, c.bindResize = function() {
            t.addEventListener("resize", this), this.isResizeBound = !0
        }, c.unbindResize = function() {
            t.removeEventListener("resize", this), this.isResizeBound = !1
        }, c.onresize = function() {
            this.resize()
        }, o.debounceMethod(s, "onresize", 100), c.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, c.needsResizeLayout = function() {
            var t = i(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, c.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, c.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, c.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, c.reveal = function(t) {
            if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, i) {
                    t.stagger(i * e), t.reveal()
                })
            }
        }, c.hide = function(t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, i) {
                    t.stagger(i * e), t.hide()
                })
            }
        }, c.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, c.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, c.getItem = function(t) {
            for (var e = 0; e < this.items.length; e++) {
                var i = this.items[e];
                if (i.element == t) return i
            }
        }, c.getItems = function(t) {
            t = o.makeArray(t);
            var e = [];
            return t.forEach(function(t) {
                var i = this.getItem(t);
                i && e.push(i)
            }, this), e
        }, c.remove = function(t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
                t.remove(), o.removeFrom(this.items, t)
            }, this)
        }, c.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
                t.destroy()
            }), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
        }, s.data = function(t) {
            t = o.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && f[e]
        }, s.create = function(t, e) {
            var i = r(s);
            return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
        };
        var m = {
            ms: 1,
            s: 1e3
        };
        return s.Item = n, s
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window, function(t) {
        "use strict";

        function e() {
            t.Item.apply(this, arguments)
        }
        var i = e.prototype = Object.create(t.Item.prototype),
            o = i._create;
        i._create = function() {
            this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
        }, i.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var o = e[i];
                    this.sortData[i] = o(this.element, this)
                }
            }
        };
        var n = i.destroy;
        return i.destroy = function() {
            n.apply(this, arguments), this.css({
                display: ""
            })
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, function(t, e) {
        "use strict";

        function i(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        var o = i.prototype,
            n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
        return n.forEach(function(t) {
            o[t] = function() {
                return e.prototype[t].apply(this.isotope, arguments)
            }
        }), o.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element),
                i = this.isotope.size && e;
            return i && e.innerHeight != this.isotope.size.innerHeight
        }, o._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, o.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, o.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, o.getSegmentSize = function(t, e) {
            var i = t + e,
                o = "outer" + e;
            if (this._getMeasurement(i, o), !this[i]) {
                var n = this.getFirstItemSize();
                this[i] = n && n[o] || this.isotope.size["inner" + e]
            }
        }, o.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, o.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, o.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, i.modes = {}, i.create = function(t, e) {
            function n() {
                i.apply(this, arguments)
            }
            return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window, function(t, e) {
        var i = t.create("masonry");
        i.compatOptions.fitWidth = "isFitWidth";
        var o = i.prototype;
        return o._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0, this.horizontalColIndex = 0
        }, o.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var o = this.columnWidth += this.gutter,
                n = this.containerWidth + this.gutter,
                s = n / o,
                r = o - n % o,
                a = r && r < 1 ? "round" : "floor";
            s = Math[a](s), this.cols = Math.max(s, 1)
        }, o.getContainerWidth = function() {
            var t = this._getOption("fitWidth"),
                i = t ? this.element.parentNode : this.element,
                o = e(i);
            this.containerWidth = o && o.innerWidth
        }, o._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                i = e && e < 1 ? "round" : "ceil",
                o = Math[i](t.size.outerWidth / this.columnWidth);
            o = Math.min(o, this.cols);
            for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
                    x: this.columnWidth * s.col,
                    y: s.y
                }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
            return r
        }, o._getTopColPosition = function(t) {
            var e = this._getTopColGroup(t),
                i = Math.min.apply(Math, e);
            return {
                col: e.indexOf(i),
                y: i
            }
        }, o._getTopColGroup = function(t) {
            if (t < 2) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
            return e
        }, o._getColGroupY = function(t, e) {
            if (e < 2) return this.colYs[t];
            var i = this.colYs.slice(t, t + e);
            return Math.max.apply(Math, i)
        }, o._getHorizontalColPosition = function(t, e) {
            var i = this.horizontalColIndex % this.cols,
                o = t > 1 && i + t > this.cols;
            i = o ? 0 : i;
            var n = e.size.outerWidth && e.size.outerHeight;
            return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
                col: i,
                y: this._getColGroupY(i, t)
            }
        }, o._manageStamp = function(t) {
            var i = e(t),
                o = this._getElementOffset(t),
                n = this._getOption("originLeft"),
                s = n ? o.left : o.right,
                r = s + i.outerWidth,
                a = Math.floor(s / this.columnWidth);
            a = Math.max(0, a);
            var u = Math.floor(r / this.columnWidth);
            u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
            for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
        }, o._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
        }, o._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, o.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t != this.containerWidth
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, function(t, e) {
        "use strict";
        var i = t.create("masonry"),
            o = i.prototype,
            n = {
                _getElementOffset: !0,
                layout: !0,
                _getMeasurement: !0
            };
        for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
        var r = o.measureColumns;
        o.measureColumns = function() {
            this.items = this.isotope.filteredItems, r.call(this)
        };
        var a = o._getOption;
        return o._getOption = function(t) {
            return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        "use strict";
        var e = t.create("fitRows"),
            i = e.prototype;
        return i._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
            var o = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
        }, i._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        "use strict";
        var e = t.create("vertical", {
                horizontalAlignment: 0
            }),
            i = e.prototype;
        return i._resetLayout = function() {
            this.y = 0
        }, i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: i
            }
        }, i._getContainerSize = function() {
            return {
                height: this.y
            }
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(i, o, n, s, r, a) {
            return e(t, i, o, n, s, r, a)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window, function(t, e, i, o, n, s, r) {
        function a(t, e) {
            return function(i, o) {
                for (var n = 0; n < t.length; n++) {
                    var s = t[n],
                        r = i.sortData[s],
                        a = o.sortData[s];
                    if (r > a || r < a) {
                        var u = void 0 !== e[s] ? e[s] : e,
                            h = u ? 1 : -1;
                        return (r > a ? 1 : -1) * h
                    }
                }
                return 0
            }
        }
        var u = t.jQuery,
            h = String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            d = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        d.Item = s, d.LayoutMode = r;
        var l = d.prototype;
        l._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var t in r.modes) this._initLayoutMode(t)
        }, l.reloadItems = function() {
            this.itemGUID = 0, e.prototype.reloadItems.call(this)
        }, l._itemize = function() {
            for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
                var o = t[i];
                o.id = this.itemGUID++
            }
            return this._updateItemsSortData(t), t
        }, l._initLayoutMode = function(t) {
            var e = r.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
        }, l.layout = function() {
            return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
        }, l._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, l.arrange = function(t) {
            this.option(t), this._getIsInstant();
            var e = this._filter(this.items);
            this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
        }, l._init = l.arrange, l._hideReveal = function(t) {
            this.reveal(t.needReveal), this.hide(t.needHide)
        }, l._getIsInstant = function() {
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            return this._isInstant = e, e
        }, l._bindArrangeComplete = function() {
            function t() {
                e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
            }
            var e, i, o, n = this;
            this.once("layoutComplete", function() {
                e = !0, t()
            }), this.once("hideComplete", function() {
                i = !0, t()
            }), this.once("revealComplete", function() {
                o = !0, t()
            })
        }, l._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
                var a = t[r];
                if (!a.isIgnored) {
                    var u = s(a);
                    u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
                }
            }
            return {
                matches: i,
                needReveal: o,
                needHide: n
            }
        }, l._getFilterTest = function(t) {
            return u && this.options.isJQueryFiltering ? function(e) {
                return u(e.element).is(t)
            } : "function" == typeof t ? function(e) {
                return t(e.element)
            } : function(e) {
                return o(e.element, t)
            }
        }, l.updateSortData = function(t) {
            var e;
            t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, l._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = f(i)
            }
        }, l._updateItemsSortData = function(t) {
            for (var e = t && t.length, i = 0; e && i < e; i++) {
                var o = t[i];
                o.updateSortData()
            }
        };
        var f = function() {
            function t(t) {
                if ("string" != typeof t) return t;
                var i = h(t).split(" "),
                    o = i[0],
                    n = o.match(/^\[(.+)\]$/),
                    s = n && n[1],
                    r = e(s, o),
                    a = d.sortDataParsers[i[1]];
                return t = a ? function(t) {
                    return t && a(r(t))
                } : function(t) {
                    return t && r(t)
                }
            }

            function e(t, e) {
                return t ? function(e) {
                    return e.getAttribute(t)
                } : function(t) {
                    var i = t.querySelector(e);
                    return i && i.textContent
                }
            }
            return t
        }();
        d.sortDataParsers = {
            parseInt: function(t) {
                return parseInt(t, 10)
            },
            parseFloat: function(t) {
                return parseFloat(t)
            }
        }, l._sort = function() {
            if (this.options.sortBy) {
                var t = n.makeArray(this.options.sortBy);
                this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
                var e = a(this.sortHistory, this.options.sortAscending);
                this.filteredItems.sort(e)
            }
        }, l._getIsSameSortBy = function(t) {
            for (var e = 0; e < t.length; e++)
                if (t[e] != this.sortHistory[e]) return !1;
            return !0
        }, l._mode = function() {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, l._resetLayout = function() {
            e.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, l._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
        }, l._manageStamp = function(t) {
            this._mode()._manageStamp(t)
        }, l._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, l.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, l.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, l.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, l._filterRevealAdded = function(t) {
            var e = this._filter(t);
            return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
        }, l.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, o, n = e.length;
                for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
                var s = this._filter(e).matches;
                for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
                this.reveal(s)
            }
        };
        var c = l.remove;
        return l.remove = function(t) {
            t = n.makeArray(t);
            var e = this.getItems(t);
            c.call(this, t);
            for (var i = e && e.length, o = 0; i && o < i; o++) {
                var s = e[o];
                n.removeFrom(this.filteredItems, s)
            }
        }, l.shuffle = function() {
            for (var t = 0; t < this.items.length; t++) {
                var e = this.items[t];
                e.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, l._noTransition = function(t, e) {
            var i = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var o = t.apply(this, e);
            return this.options.transitionDuration = i, o
        }, l.getFilteredItemElements = function() {
            return this.filteredItems.map(function(t) {
                return t.element
            })
        }, d
    });
} catch (err) {
    console.log('Error occurred inside /themes/vl/assets/js/isotope.pkgd.min.js');
    console.log(err)
}

//File /themes/vl/assets/js/slick.min.js 

try {
    ! function(i) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
    }(function(i) {
        "use strict";
        var e = window.Slick || {};
        (e = function() {
            var e = 0;
            return function(t, o) {
                var s, n = this;
                n.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: i(t),
                    appendDots: i(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(e, t) {
                        return i('<button type="button" />').text(t + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, n.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
            }
        }()).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
            var s = this;
            if ("boolean" == typeof t) o = t, t = null;
            else if (t < 0 || t >= s.slideCount) return !1;
            s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, t) {
                i(t).attr("data-slick-index", e)
            }), s.$slidesCache = s.$slides, s.reinit()
        }, e.prototype.animateHeight = function() {
            var i = this;
            if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.animate({
                    height: e
                }, i.options.speed)
            }
        }, e.prototype.animateSlide = function(e, t) {
            var o = {},
                s = this;
            s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
                left: e
            }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
                top: e
            }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
                animStart: s.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function(i) {
                    i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
                },
                complete: function() {
                    t && t.call()
                }
            })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() {
                s.disableTransition(), t.call()
            }, s.options.speed))
        }, e.prototype.getNavTarget = function() {
            var e = this,
                t = e.options.asNavFor;
            return t && null !== t && (t = i(t).not(e.$slider)), t
        }, e.prototype.asNavFor = function(e) {
            var t = this.getNavTarget();
            null !== t && "object" == typeof t && t.each(function() {
                var t = i(this).slick("getSlick");
                t.unslicked || t.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function(i) {
            var e = this,
                t = {};
            !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
        }, e.prototype.autoPlay = function() {
            var i = this;
            i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function() {
            var i = this;
            i.autoPlayTimer && clearInterval(i.autoPlayTimer)
        }, e.prototype.autoPlayIterator = function() {
            var i = this,
                e = i.currentSlide + i.options.slidesToScroll;
            i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
        }, e.prototype.buildArrows = function() {
            var e = this;
            !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, e.prototype.buildDots = function() {
            var e, t, o = this;
            if (!0 === o.options.dots) {
                for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
                o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
            }
        }, e.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
                i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
        }, e.prototype.buildRows = function() {
            var i, e, t, o, s, n, r, l = this;
            if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
                for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                    var d = document.createElement("div");
                    for (e = 0; e < l.options.rows; e++) {
                        var a = document.createElement("div");
                        for (t = 0; t < l.options.slidesPerRow; t++) {
                            var c = i * r + (e * l.options.slidesPerRow + t);
                            n.get(c) && a.appendChild(n.get(c))
                        }
                        d.appendChild(a)
                    }
                    o.appendChild(d)
                }
                l.$slider.empty().append(o), l.$slider.children().children().children().css({
                    width: 100 / l.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, e.prototype.checkResponsive = function(e, t) {
            var o, s, n, r = this,
                l = !1,
                d = r.$slider.width(),
                a = window.innerWidth || i(window).width();
            if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                s = null;
                for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
            }
        }, e.prototype.changeSlide = function(e, t) {
            var o, s, n, r = this,
                l = i(e.currentTarget);
            switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
                case "previous":
                    s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                    break;
                case "next":
                    s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                    break;
                case "index":
                    var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function(i) {
            var e, t;
            if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
            else
                for (var o in e) {
                    if (i < e[o]) {
                        i = t;
                        break
                    }
                    t = e[o]
                }
            return i
        }, e.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
        }, e.prototype.cleanUpRows = function() {
            var i, e = this;
            e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i))
        }, e.prototype.clickHandler = function(i) {
            !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
        }, e.prototype.destroy = function(e) {
            var t = this;
            t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                i(this).attr("style", i(this).data("originalStyling"))
            }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
        }, e.prototype.disableTransition = function(i) {
            var e = this,
                t = {};
            t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
        }, e.prototype.fadeSlide = function(i, e) {
            var t = this;
            !1 === t.cssTransitions ? (t.$slides.eq(i).css({
                zIndex: t.options.zIndex
            }), t.$slides.eq(i).animate({
                opacity: 1
            }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
                opacity: 1,
                zIndex: t.options.zIndex
            }), e && setTimeout(function() {
                t.disableTransition(i), e.call()
            }, t.options.speed))
        }, e.prototype.fadeSlideOut = function(i) {
            var e = this;
            !1 === e.cssTransitions ? e.$slides.eq(i).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }))
        }, e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
            var e = this;
            null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.focusHandler = function() {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
                t.stopImmediatePropagation();
                var o = i(this);
                setTimeout(function() {
                    e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
                }, 0)
            })
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, e.prototype.getDotCount = function() {
            var i = this,
                e = 0,
                t = 0,
                o = 0;
            if (!0 === i.options.infinite)
                if (i.slideCount <= i.options.slidesToShow) ++o;
                else
                    for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
            else if (!0 === i.options.centerMode) o = i.slideCount;
            else if (i.options.asNavFor)
                for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
            else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
            return o - 1
        }, e.prototype.getLeft = function(i) {
            var e, t, o, s, n = this,
                r = 0;
            return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function(i) {
            return this.options[i]
        }, e.prototype.getNavigableIndexes = function() {
            var i, e = this,
                t = 0,
                o = 0,
                s = [];
            for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return s
        }, e.prototype.getSlick = function() {
            return this
        }, e.prototype.getSlideCount = function() {
            var e, t, o = this;
            return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
                if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1
            }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }, e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(i)
                }
            }, e)
        }, e.prototype.init = function(e) {
            var t = this;
            i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
        }, e.prototype.initADA = function() {
            var e = this,
                t = Math.ceil(e.slideCount / e.options.slidesToShow),
                o = e.getNavigableIndexes().filter(function(i) {
                    return i >= 0 && i < e.slideCount
                });
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
                var s = o.indexOf(t);
                i(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + e.instanceUid + t,
                    tabindex: -1
                }), -1 !== s && i(this).attr({
                    "aria-describedby": "slick-slide-control" + e.instanceUid + s
                })
            }), e.$dots.attr("role", "tablist").find("li").each(function(s) {
                var n = o[s];
                i(this).attr({
                    role: "presentation"
                }), i(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(e.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
            e.activateADA()
        }, e.prototype.initArrowEvents = function() {
            var i = this;
            !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
        }, e.prototype.initDotEvents = function() {
            var e = this;
            !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
        }, e.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
        }, e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
        }, e.prototype.initUI = function() {
            var i = this;
            !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
        }, e.prototype.keyHandler = function(i) {
            var e = this;
            i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
                data: {
                    message: !0 === e.options.rtl ? "next" : "previous"
                }
            }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
                data: {
                    message: !0 === e.options.rtl ? "previous" : "next"
                }
            }))
        }, e.prototype.lazyLoad = function() {
            function e(e) {
                i("img[data-lazy]", e).each(function() {
                    var e = i(this),
                        t = i(this).attr("data-lazy"),
                        o = i(this).attr("data-srcset"),
                        s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                    r.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), n.$slider.trigger("lazyLoaded", [n, e, t])
                        })
                    }, r.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
                    }, r.src = t
                })
            }
            var t, o, s, n = this;
            if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad)
                for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
            e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
        }, e.prototype.loadSlider = function() {
            var i = this;
            i.setPosition(), i.$slideTrack.css({
                opacity: 1
            }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, e.prototype.orientationChange = function() {
            var i = this;
            i.checkResponsive(), i.setPosition()
        }, e.prototype.pause = e.prototype.slickPause = function() {
            var i = this;
            i.autoPlayClear(), i.paused = !0
        }, e.prototype.play = e.prototype.slickPlay = function() {
            var i = this;
            i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
        }, e.prototype.postSlide = function(e) {
            var t = this;
            t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
        }, e.prototype.prev = e.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, e.prototype.preventDefault = function(i) {
            i.preventDefault()
        }, e.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var t, o, s, n, r, l = this,
                d = i("img[data-lazy]", l.$slider);
            d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
                s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
            }, r.onerror = function() {
                e < 3 ? setTimeout(function() {
                    l.progressiveLazyLoad(e + 1)
                }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
            }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
        }, e.prototype.refresh = function(e) {
            var t, o, s = this;
            o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
                currentSlide: t
            }), s.init(), e || s.changeSlide({
                data: {
                    message: "index",
                    index: t
                }
            }, !1)
        }, e.prototype.registerBreakpoints = function() {
            var e, t, o, s = this,
                n = s.options.responsive || null;
            if ("array" === i.type(n) && n.length) {
                s.respondTo = s.options.respondTo || "window";
                for (e in n)
                    if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                        for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                        s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
                    }
                s.breakpoints.sort(function(i, e) {
                    return s.options.mobileFirst ? i - e : e - i
                })
            }
        }, e.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, e.prototype.resize = function() {
            var e = this;
            i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
            var o = this;
            if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
            o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
        }, e.prototype.setCSS = function(i) {
            var e, t, o = this,
                s = {};
            !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
        }, e.prototype.setDimensions = function() {
            var i = this;
            !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
                padding: "0px " + i.options.centerPadding
            }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
                padding: i.options.centerPadding + " 0px"
            })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
            var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
            !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
        }, e.prototype.setFade = function() {
            var e, t = this;
            t.$slides.each(function(o, s) {
                e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: t.options.zIndex - 2,
                    opacity: 0
                }) : i(s).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: t.options.zIndex - 2,
                    opacity: 0
                })
            }), t.$slides.eq(t.currentSlide).css({
                zIndex: t.options.zIndex - 1,
                opacity: 1
            })
        }, e.prototype.setHeight = function() {
            var i = this;
            if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.css("height", e)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function() {
            var e, t, o, s, n, r = this,
                l = !1;
            if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
            else if ("multiple" === n) i.each(o, function(i, e) {
                r.options[i] = e
            });
            else if ("responsive" === n)
                for (t in s)
                    if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
                    else {
                        for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                        r.options.responsive.push(s[t])
                    }
            l && (r.unload(), r.reinit())
        }, e.prototype.setPosition = function() {
            var i = this;
            i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
        }, e.prototype.setProps = function() {
            var i = this,
                e = document.body.style;
            i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
        }, e.prototype.setSlideClasses = function(i) {
            var e, t, o, s, n = this;
            if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
                var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
            } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
        }, e.prototype.setupInfinite = function() {
            var e, t, o, s = this;
            if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
                for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    i(this).attr("id", "")
                })
            }
        }, e.prototype.interrupt = function(i) {
            var e = this;
            i || e.autoPlay(), e.interrupted = i
        }, e.prototype.selectHandler = function(e) {
            var t = this,
                o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
                s = parseInt(o.attr("data-slick-index"));
            s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
        }, e.prototype.slideHandler = function(i, e, t) {
            var o, s, n, r, l, d = null,
                a = this;
            if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
                if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() {
                    a.postSlide(o)
                }) : a.postSlide(o));
                else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() {
                a.postSlide(o)
            }) : a.postSlide(o));
            else {
                if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function() {
                    a.postSlide(s)
                })) : a.postSlide(s), void a.animateHeight();
                !0 !== t ? a.animateSlide(d, function() {
                    a.postSlide(s)
                }) : a.postSlide(s)
            }
        }, e.prototype.startLoad = function() {
            var i = this;
            !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
        }, e.prototype.swipeDirection = function() {
            var i, e, t, o, s = this;
            return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
        }, e.prototype.swipeEnd = function(i) {
            var e, t, o = this;
            if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
            if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
            if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
                switch (t = o.swipeDirection()) {
                    case "left":
                    case "down":
                        e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
                }
                "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
            } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
        }, e.prototype.swipeHandler = function(i) {
            var e = this;
            if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
                case "start":
                    e.swipeStart(i);
                    break;
                case "move":
                    e.swipeMove(i);
                    break;
                case "end":
                    e.swipeEnd(i)
            }
        }, e.prototype.swipeMove = function(i) {
            var e, t, o, s, n, r, l = this;
            return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
        }, e.prototype.swipeStart = function(i) {
            var e, t = this;
            if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
            void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
            var i = this;
            null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
        }, e.prototype.unload = function() {
            var e = this;
            i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function(i) {
            var e = this;
            e.$slider.trigger("unslick", [e, i]), e.destroy()
        }, e.prototype.updateArrows = function() {
            var i = this;
            Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, e.prototype.updateDots = function() {
            var i = this;
            null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
        }, e.prototype.visibility = function() {
            var i = this;
            i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
        }, i.fn.slick = function() {
            var i, t, o = this,
                s = arguments[0],
                n = Array.prototype.slice.call(arguments, 1),
                r = o.length;
            for (i = 0; i < r; i++)
                if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
            return o
        }
    });

} catch (err) {
    console.log('Error occurred inside /themes/vl/assets/js/slick.min.js');
    console.log(err)
}

//File /themes/vl/assets/js/jquery.meanmenu.min.js 

try {
    ! function($) {
        "use strict";
        $.fn.meanmenu = function(e) {
            var n = {
                meanMenuTarget: jQuery(this),
                meanMenuContainer: "body",
                meanMenuClose: "X",
                meanMenuCloseSize: "18px",
                meanMenuOpen: "<span /><span /><span />",
                meanRevealPosition: "right",
                meanRevealPositionDistance: "0",
                meanRevealColour: "",
                meanScreenWidth: "480",
                meanNavPush: "",
                meanShowChildren: !0,
                meanExpandableChildren: !0,
                meanExpand: "+",
                meanContract: "-",
                meanRemoveAttrs: !1,
                onePage: !1,
                meanDisplay: "block",
                removeElements: ""
            };
            e = $.extend(n, e);
            var a = window.innerWidth || document.documentElement.clientWidth;
            return this.each(function() {
                var n = e.meanMenuTarget,
                    t = e.meanMenuContainer,
                    r = e.meanMenuClose,
                    i = e.meanMenuCloseSize,
                    s = e.meanMenuOpen,
                    u = e.meanRevealPosition,
                    m = e.meanRevealPositionDistance,
                    l = e.meanRevealColour,
                    o = e.meanScreenWidth,
                    c = e.meanNavPush,
                    v = ".meanmenu-reveal",
                    h = e.meanShowChildren,
                    d = e.meanExpandableChildren,
                    y = e.meanExpand,
                    j = e.meanContract,
                    Q = e.meanRemoveAttrs,
                    f = e.onePage,
                    g = e.meanDisplay,
                    p = e.removeElements,
                    C = !1;
                (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (C = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
                var w = "",
                    x = function() {
                        if ("center" === u) {
                            var e = window.innerWidth || document.documentElement.clientWidth,
                                n = e / 2 - 22 + "px";
                            w = "left:" + n + ";right:auto;", C ? jQuery(".meanmenu-reveal").animate({
                                left: n
                            }) : jQuery(".meanmenu-reveal").css("left", n)
                        }
                    },
                    A = !1,
                    E = !1;
                "right" === u && (w = "right:" + m + ";left:auto;"), "left" === u && (w = "left:" + m + ";right:auto;"), x();
                var M = "",
                    P = function() {
                        M.html(jQuery(M).is(".meanmenu-reveal.meanclose") ? r : s)
                    },
                    W = function() {
                        jQuery(".mean-bar,.mean-push").remove(), jQuery(t).removeClass("mean-container"), jQuery(n).css("display", g), A = !1, E = !1, jQuery(p).removeClass("mean-remove")
                    },
                    b = function() {
                        var e = "background:" + l + ";color:" + l + ";" + w;
                        if (o >= a) {
                            jQuery(p).addClass("mean-remove"), E = !0, jQuery(t).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + e + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                            var r = jQuery(n).html();
                            jQuery(".mean-nav").html(r), Q && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function() {
                                jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id")
                            }), jQuery(n).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", c), jQuery(n).hide(), jQuery(".meanmenu-reveal").show(), jQuery(v).html(s), M = jQuery(v), jQuery(".mean-nav ul").hide(), h ? d ? (jQuery(".mean-nav ul ul").each(function() {
                                jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + i + '">' + y + "</a>")
                            }), jQuery(".mean-expand").on("click", function(e) {
                                e.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(y), jQuery(this).prev("ul").slideUp(300, function() {})) : (jQuery(this).text(j), jQuery(this).prev("ul").slideDown(300, function() {})), jQuery(this).toggleClass("mean-clicked")
                            })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), M.removeClass("meanclose"), jQuery(M).click(function(e) {
                                e.preventDefault(), A === !1 ? (M.css("text-align", "center"), M.css("text-indent", "0"), M.css("font-size", i), jQuery(".mean-nav ul:first").slideDown(), A = !0) : (jQuery(".mean-nav ul:first").slideUp(), A = !1), M.toggleClass("meanclose"), P(), jQuery(p).addClass("mean-remove")
                            }), f && jQuery(".mean-nav ul > li > a:first-child").on("click", function() {
                                jQuery(".mean-nav ul:first").slideUp(), A = !1, jQuery(M).toggleClass("meanclose").html(s)
                            })
                        } else W()
                    };
                C || jQuery(window).resize(function() {
                    a = window.innerWidth || document.documentElement.clientWidth, a > o, W(), o >= a ? (b(), x()) : W()
                }), jQuery(window).resize(function() {
                    a = window.innerWidth || document.documentElement.clientWidth, C ? (x(), o >= a ? E === !1 && b() : W()) : (W(), o >= a && (b(), x()))
                }), b()
            })
        }
    }(jQuery);
} catch (err) {
    console.log('Error occurred inside /themes/vl/assets/js/jquery.meanmenu.min.js');
    console.log(err)
}

//File /themes/vl/assets/js/wow.min.js 

try {
    /*! WOW - v1.1.3 - 2016-05-06
     * Copyright (c) 2016 Matthieu Aussaguel;*/
    (function() {
        var a, b, c, d, e, f = function(a, b) {
                return function() {
                    return a.apply(b, arguments)
                }
            },
            g = [].indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (b in this && this[b] === a) return b;
                return -1
            };
        b = function() {
            function a() {}
            return a.prototype.extend = function(a, b) {
                var c, d;
                for (c in b) d = b[c], null == a[c] && (a[c] = d);
                return a
            }, a.prototype.isMobile = function(a) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
            }, a.prototype.createEvent = function(a, b, c, d) {
                var e;
                return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
            }, a.prototype.emitEvent = function(a, b) {
                return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
            }, a.prototype.addEvent = function(a, b, c) {
                return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
            }, a.prototype.removeEvent = function(a, b, c) {
                return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
            }, a.prototype.innerHeight = function() {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, a
        }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
            function a() {
                this.keys = [], this.values = []
            }
            return a.prototype.get = function(a) {
                var b, c, d, e, f;
                for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                    if (c = f[b], c === a) return this.values[b]
            }, a.prototype.set = function(a, b) {
                var c, d, e, f, g;
                for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                    if (d = g[c], d === a) return void(this.values[c] = b);
                return this.keys.push(a), this.values.push(b)
            }, a
        }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
            function a() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return a.notSupported = !0, a.prototype.observe = function() {}, a
        }()), d = this.getComputedStyle || function(a, b) {
            return this.getPropertyValue = function(b) {
                var c;
                return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) {
                    return b.toUpperCase()
                }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
            }, this
        }, e = /(\-([a-z]){1})/g, this.WOW = function() {
            function e(a) {
                null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
            }
            return e.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null
            }, e.prototype.init = function() {
                var a;
                return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, e.prototype.start = function() {
                var b, c, d, e;
                if (this.stopped = !1, this.boxes = function() {
                        var a, c, d, e;
                        for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                        return e
                    }.call(this), this.all = function() {
                        var a, c, d, e;
                        for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                        return e
                    }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else
                        for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
                return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) {
                    return function(b) {
                        var c, d, e, f, g;
                        for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function() {
                            var a, b, c, d;
                            for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
                            return d
                        }.call(a));
                        return g
                    }
                }(this)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }) : void 0
            }, e.prototype.stop = function() {
                return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
            }, e.prototype.sync = function(b) {
                return a.notSupported ? this.doSync(this.element) : void 0
            }, e.prototype.doSync = function(a) {
                var b, c, d, e, f;
                if (null == a && (a = this.element), 1 === a.nodeType) {
                    for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
                    return f
                }
            }, e.prototype.show = function(a) {
                return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
            }, e.prototype.applyStyle = function(a, b) {
                var c, d, e;
                return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) {
                    return function() {
                        return f.customStyle(a, b, d, c, e)
                    }
                }(this))
            }, e.prototype.animate = function() {
                return "requestAnimationFrame" in window ? function(a) {
                    return window.requestAnimationFrame(a)
                } : function(a) {
                    return a()
                }
            }(), e.prototype.resetStyle = function() {
                var a, b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
                return e
            }, e.prototype.resetAnimation = function(a) {
                var b;
                return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
            }, e.prototype.customStyle = function(a, b, c, d, e) {
                return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
                    animationDuration: c
                }), d && this.vendorSet(a.style, {
                    animationDelay: d
                }), e && this.vendorSet(a.style, {
                    animationIterationCount: e
                }), this.vendorSet(a.style, {
                    animationName: b ? "none" : this.cachedAnimationName(a)
                }), a
            }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
                var c, d, e, f;
                d = [];
                for (c in b) e = b[c], a["" + c] = e, d.push(function() {
                    var b, d, g, h;
                    for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                    return h
                }.call(this));
                return d
            }, e.prototype.vendorCSS = function(a, b) {
                var c, e, f, g, h, i;
                for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
                return g
            }, e.prototype.animationName = function(a) {
                var b;
                try {
                    b = this.vendorCSS(a, "animation-name").cssText
                } catch (c) {
                    b = d(a).getPropertyValue("animation-name")
                }
                return "none" === b ? "" : b
            }, e.prototype.cacheAnimationName = function(a) {
                return this.animationNameCache.set(a, this.animationName(a))
            }, e.prototype.cachedAnimationName = function(a) {
                return this.animationNameCache.get(a)
            }, e.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, e.prototype.scrollCallback = function() {
                var a;
                return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                    var b, c, d, e;
                    for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                    return e
                }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
            }, e.prototype.offsetTop = function(a) {
                for (var b; void 0 === a.offsetTop;) a = a.parentNode;
                for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
                return b
            }, e.prototype.isVisible = function(a) {
                var b, c, d, e, f;
                return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
            }, e.prototype.util = function() {
                return null != this._util ? this._util : this._util = new b
            }, e.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, e
        }()
    }).call(this);
} catch (err) {
    console.log('Error occurred inside /themes/vl/assets/js/wow.min.js');
    console.log(err)
}

//File /themes/vl/assets/js/waypoints.min.js 

try {
    // Generated by CoffeeScript 1.6.2
    /*
    jQuery Waypoints - v2.0.3
    Copyright (c) 2011-2013 Caleb Troughton
    Dual licensed under the MIT license and GPL license.
    https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
    */
    (function() {
        var t = [].indexOf || function(t) {
                for (var e = 0, n = this.length; e < n; e++) {
                    if (e in this && this[e] === t) return e
                }
                return -1
            },
            e = [].slice;
        (function(t, e) {
            if (typeof define === "function" && define.amd) {
                return define("waypoints", ["jquery"], function(n) {
                    return e(n, t)
                })
            } else {
                return e(t.jQuery, t)
            }
        })(this, function(n, r) {
            var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
            i = n(r);
            c = t.call(r, "ontouchstart") >= 0;
            s = {
                horizontal: {},
                vertical: {}
            };
            f = 1;
            a = {};
            u = "waypoints-context-id";
            p = "resize.waypoints";
            y = "scroll.waypoints";
            v = 1;
            w = "waypoints-waypoint-ids";
            g = "waypoint";
            m = "waypoints";
            o = function() {
                function t(t) {
                    var e = this;
                    this.$element = t;
                    this.element = t[0];
                    this.didResize = false;
                    this.didScroll = false;
                    this.id = "context" + f++;
                    this.oldScroll = {
                        x: t.scrollLeft(),
                        y: t.scrollTop()
                    };
                    this.waypoints = {
                        horizontal: {},
                        vertical: {}
                    };
                    t.data(u, this.id);
                    a[this.id] = this;
                    t.bind(y, function() {
                        var t;
                        if (!(e.didScroll || c)) {
                            e.didScroll = true;
                            t = function() {
                                e.doScroll();
                                return e.didScroll = false
                            };
                            return r.setTimeout(t, n[m].settings.scrollThrottle)
                        }
                    });
                    t.bind(p, function() {
                        var t;
                        if (!e.didResize) {
                            e.didResize = true;
                            t = function() {
                                n[m]("refresh");
                                return e.didResize = false
                            };
                            return r.setTimeout(t, n[m].settings.resizeThrottle)
                        }
                    })
                }
                t.prototype.doScroll = function() {
                    var t, e = this;
                    t = {
                        horizontal: {
                            newScroll: this.$element.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left"
                        },
                        vertical: {
                            newScroll: this.$element.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up"
                        }
                    };
                    if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
                        n[m]("refresh")
                    }
                    n.each(t, function(t, r) {
                        var i, o, l;
                        l = [];
                        o = r.newScroll > r.oldScroll;
                        i = o ? r.forward : r.backward;
                        n.each(e.waypoints[t], function(t, e) {
                            var n, i;
                            if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
                                return l.push(e)
                            } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
                                return l.push(e)
                            }
                        });
                        l.sort(function(t, e) {
                            return t.offset - e.offset
                        });
                        if (!o) {
                            l.reverse()
                        }
                        return n.each(l, function(t, e) {
                            if (e.options.continuous || t === l.length - 1) {
                                return e.trigger([i])
                            }
                        })
                    });
                    return this.oldScroll = {
                        x: t.horizontal.newScroll,
                        y: t.vertical.newScroll
                    }
                };
                t.prototype.refresh = function() {
                    var t, e, r, i = this;
                    r = n.isWindow(this.element);
                    e = this.$element.offset();
                    this.doScroll();
                    t = {
                        horizontal: {
                            contextOffset: r ? 0 : e.left,
                            contextScroll: r ? 0 : this.oldScroll.x,
                            contextDimension: this.$element.width(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left"
                        },
                        vertical: {
                            contextOffset: r ? 0 : e.top,
                            contextScroll: r ? 0 : this.oldScroll.y,
                            contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top"
                        }
                    };
                    return n.each(t, function(t, e) {
                        return n.each(i.waypoints[t], function(t, r) {
                            var i, o, l, s, f;
                            i = r.options.offset;
                            l = r.offset;
                            o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
                            if (n.isFunction(i)) {
                                i = i.apply(r.element)
                            } else if (typeof i === "string") {
                                i = parseFloat(i);
                                if (r.options.offset.indexOf("%") > -1) {
                                    i = Math.ceil(e.contextDimension * i / 100)
                                }
                            }
                            r.offset = o - e.contextOffset + e.contextScroll - i;
                            if (r.options.onlyOnScroll && l != null || !r.enabled) {
                                return
                            }
                            if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
                                return r.trigger([e.backward])
                            } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
                                return r.trigger([e.forward])
                            } else if (l === null && e.oldScroll >= r.offset) {
                                return r.trigger([e.forward])
                            }
                        })
                    })
                };
                t.prototype.checkEmpty = function() {
                    if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
                        this.$element.unbind([p, y].join(" "));
                        return delete a[this.id]
                    }
                };
                return t
            }();
            l = function() {
                function t(t, e, r) {
                    var i, o;
                    r = n.extend({}, n.fn[g].defaults, r);
                    if (r.offset === "bottom-in-view") {
                        r.offset = function() {
                            var t;
                            t = n[m]("viewportHeight");
                            if (!n.isWindow(e.element)) {
                                t = e.$element.height()
                            }
                            return t - n(this).outerHeight()
                        }
                    }
                    this.$element = t;
                    this.element = t[0];
                    this.axis = r.horizontal ? "horizontal" : "vertical";
                    this.callback = r.handler;
                    this.context = e;
                    this.enabled = r.enabled;
                    this.id = "waypoints" + v++;
                    this.offset = null;
                    this.options = r;
                    e.waypoints[this.axis][this.id] = this;
                    s[this.axis][this.id] = this;
                    i = (o = t.data(w)) != null ? o : [];
                    i.push(this.id);
                    t.data(w, i)
                }
                t.prototype.trigger = function(t) {
                    if (!this.enabled) {
                        return
                    }
                    if (this.callback != null) {
                        this.callback.apply(this.element, t)
                    }
                    if (this.options.triggerOnce) {
                        return this.destroy()
                    }
                };
                t.prototype.disable = function() {
                    return this.enabled = false
                };
                t.prototype.enable = function() {
                    this.context.refresh();
                    return this.enabled = true
                };
                t.prototype.destroy = function() {
                    delete s[this.axis][this.id];
                    delete this.context.waypoints[this.axis][this.id];
                    return this.context.checkEmpty()
                };
                t.getWaypointsByElement = function(t) {
                    var e, r;
                    r = n(t).data(w);
                    if (!r) {
                        return []
                    }
                    e = n.extend({}, s.horizontal, s.vertical);
                    return n.map(r, function(t) {
                        return e[t]
                    })
                };
                return t
            }();
            d = {
                init: function(t, e) {
                    var r;
                    if (e == null) {
                        e = {}
                    }
                    if ((r = e.handler) == null) {
                        e.handler = t
                    }
                    this.each(function() {
                        var t, r, i, s;
                        t = n(this);
                        i = (s = e.context) != null ? s : n.fn[g].defaults.context;
                        if (!n.isWindow(i)) {
                            i = t.closest(i)
                        }
                        i = n(i);
                        r = a[i.data(u)];
                        if (!r) {
                            r = new o(i)
                        }
                        return new l(t, r, e)
                    });
                    n[m]("refresh");
                    return this
                },
                disable: function() {
                    return d._invoke(this, "disable")
                },
                enable: function() {
                    return d._invoke(this, "enable")
                },
                destroy: function() {
                    return d._invoke(this, "destroy")
                },
                prev: function(t, e) {
                    return d._traverse.call(this, t, e, function(t, e, n) {
                        if (e > 0) {
                            return t.push(n[e - 1])
                        }
                    })
                },
                next: function(t, e) {
                    return d._traverse.call(this, t, e, function(t, e, n) {
                        if (e < n.length - 1) {
                            return t.push(n[e + 1])
                        }
                    })
                },
                _traverse: function(t, e, i) {
                    var o, l;
                    if (t == null) {
                        t = "vertical"
                    }
                    if (e == null) {
                        e = r
                    }
                    l = h.aggregate(e);
                    o = [];
                    this.each(function() {
                        var e;
                        e = n.inArray(this, l[t]);
                        return i(o, e, l[t])
                    });
                    return this.pushStack(o)
                },
                _invoke: function(t, e) {
                    t.each(function() {
                        var t;
                        t = l.getWaypointsByElement(this);
                        return n.each(t, function(t, n) {
                            n[e]();
                            return true
                        })
                    });
                    return this
                }
            };
            n.fn[g] = function() {
                var t, r;
                r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
                if (d[r]) {
                    return d[r].apply(this, t)
                } else if (n.isFunction(r)) {
                    return d.init.apply(this, arguments)
                } else if (n.isPlainObject(r)) {
                    return d.init.apply(this, [null, r])
                } else if (!r) {
                    return n.error("jQuery Waypoints needs a callback function or handler option.")
                } else {
                    return n.error("The " + r + " method does not exist in jQuery Waypoints.")
                }
            };
            n.fn[g].defaults = {
                context: r,
                continuous: true,
                enabled: true,
                horizontal: false,
                offset: 0,
                triggerOnce: false
            };
            h = {
                refresh: function() {
                    return n.each(a, function(t, e) {
                        return e.refresh()
                    })
                },
                viewportHeight: function() {
                    var t;
                    return (t = r.innerHeight) != null ? t : i.height()
                },
                aggregate: function(t) {
                    var e, r, i;
                    e = s;
                    if (t) {
                        e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0
                    }
                    if (!e) {
                        return []
                    }
                    r = {
                        horizontal: [],
                        vertical: []
                    };
                    n.each(r, function(t, i) {
                        n.each(e[t], function(t, e) {
                            return i.push(e)
                        });
                        i.sort(function(t, e) {
                            return t.offset - e.offset
                        });
                        r[t] = n.map(i, function(t) {
                            return t.element
                        });
                        return r[t] = n.unique(r[t])
                    });
                    return r
                },
                above: function(t) {
                    if (t == null) {
                        t = r
                    }
                    return h._filter(t, "vertical", function(t, e) {
                        return e.offset <= t.oldScroll.y
                    })
                },
                below: function(t) {
                    if (t == null) {
                        t = r
                    }
                    return h._filter(t, "vertical", function(t, e) {
                        return e.offset > t.oldScroll.y
                    })
                },
                left: function(t) {
                    if (t == null) {
                        t = r
                    }
                    return h._filter(t, "horizontal", function(t, e) {
                        return e.offset <= t.oldScroll.x
                    })
                },
                right: function(t) {
                    if (t == null) {
                        t = r
                    }
                    return h._filter(t, "horizontal", function(t, e) {
                        return e.offset > t.oldScroll.x
                    })
                },
                enable: function() {
                    return h._invoke("enable")
                },
                disable: function() {
                    return h._invoke("disable")
                },
                destroy: function() {
                    return h._invoke("destroy")
                },
                extendFn: function(t, e) {
                    return d[t] = e
                },
                _invoke: function(t) {
                    var e;
                    e = n.extend({}, s.vertical, s.horizontal);
                    return n.each(e, function(e, n) {
                        n[t]();
                        return true
                    })
                },
                _filter: function(t, e, r) {
                    var i, o;
                    i = a[n(t).data(u)];
                    if (!i) {
                        return []
                    }
                    o = [];
                    n.each(i.waypoints[e], function(t, e) {
                        if (r(i, e)) {
                            return o.push(e)
                        }
                    });
                    o.sort(function(t, e) {
                        return t.offset - e.offset
                    });
                    return n.map(o, function(t) {
                        return t.element
                    })
                }
            };
            n[m] = function() {
                var t, n;
                n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
                if (h[n]) {
                    return h[n].apply(null, t)
                } else {
                    return h.aggregate.call(null, n)
                }
            };
            n[m].settings = {
                resizeThrottle: 100,
                scrollThrottle: 30
            };
            return i.load(function() {
                return n[m]("refresh")
            })
        })
    }).call(this);
} catch (err) {
    console.log('Error occurred inside /themes/vl/assets/js/waypoints.min.js');
    console.log(err)
}

//File /themes/vl/assets/js/jquery.appear.js 

try {
    (function(e) {
        e.fn.appear = function(r, n) {
            var a = e.extend({
                data: undefined,
                one: !0,
                accX: 0,
                accY: 0
            }, n);
            return this.each(function() {
                var n = e(this);
                n.appeared = !1;
                if (!r) {
                    n.trigger('appear', a.data);
                    return
                };
                var p = e(window),
                    t = function() {
                        if (!n.is(':visible')) {
                            n.appeared = !1;
                            return
                        };
                        var e = p.scrollLeft(),
                            r = p.scrollTop(),
                            t = n.offset(),
                            i = t.left,
                            c = t.top,
                            f = a.accX,
                            o = a.accY,
                            s = n.height(),
                            l = p.height(),
                            u = n.width(),
                            h = p.width();
                        if (c + s + o >= r && c <= r + l + o && i + u + f >= e && i <= e + h + f) {
                            if (!n.appeared) n.trigger('appear', a.data)
                        } else {
                            n.appeared = !1
                        }
                    },
                    i = function() {
                        n.appeared = !0;
                        if (a.one) {
                            p.unbind('scroll', t);
                            var i = e.inArray(t, e.fn.appear.checks);
                            if (i >= 0) e.fn.appear.checks.splice(i, 1)
                        };
                        r.apply(this, arguments)
                    };
                if (a.one) n.one('appear', a.data, i);
                else n.bind('appear', a.data, i);
                p.scroll(t);
                e.fn.appear.checks.push(t);
                (t)()
            })
        };
        e.extend(e.fn.appear, {
            checks: [],
            timeout: null,
            checkAll: function() {
                var a = e.fn.appear.checks.length;
                if (a > 0)
                    while (a--)(e.fn.appear.checks[a])();
            },
            run: function() {
                if (e.fn.appear.timeout) clearTimeout(e.fn.appear.timeout);
                e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
            }
        });
        e.each(['append', 'prepend', 'after', 'before', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'remove', 'css', 'show', 'hide'], function(r, a) {
            var n = e.fn[a];
            if (n) {
                e.fn[a] = function() {
                    var a = n.apply(this, arguments);
                    e.fn.appear.run();
                    return a
                }
            }
        })
    })(jQuery);
} catch (err) {
    console.log('Error occurred inside /themes/vl/assets/js/jquery.appear.js');
    console.log(err)
}

//File /themes/vl/assets/js/jquery.knob.js 

try {
    /*!jQuery Knob*/
    (function(t) {
        if (typeof define === 'function' && define.amd) {
            define(['jquery'], t)
        } else {
            t(jQuery)
        }
    }(function(t) {
        'use strict';
        var i = {},
            s = Math.max,
            h = Math.min;
        i.c = {};
        i.c.d = t(document);
        i.c.t = function(t) {
            return t.originalEvent.touches.length - 1
        };
        i.o = function() {
            var s = this;
            this.o = null;
            this.$ = null;
            this.i = null;
            this.g = null;
            this.v = null;
            this.cv = null;
            this.x = 0;
            this.y = 0;
            this.w = 0;
            this.h = 0;
            this.$c = null;
            this.c = null;
            this.t = 0;
            this.isInit = !1;
            this.fgColor = null;
            this.pColor = null;
            this.dH = null;
            this.cH = null;
            this.eH = null;
            this.rH = null;
            this.scale = 1;
            this.relative = !1;
            this.relativeWidth = !1;
            this.relativeHeight = !1;
            this.$div = null;
            this.run = function() {
                var i = function(t, i) {
                    var h;
                    for (h in i) {
                        s.o[h] = i[h]
                    };
                    s._carve().init();
                    s._configure()._draw()
                };
                if (this.$.data('kontroled')) return;
                this.$.data('kontroled', !0);
                this.extend();
                this.o = t.extend({
                    min: this.$.data('min') !== undefined ? this.$.data('min') : 0,
                    max: this.$.data('max') !== undefined ? this.$.data('max') : 100,
                    stopper: !0,
                    readOnly: this.$.data('readonly') || (this.$.attr('readonly') === 'readonly'),
                    cursor: this.$.data('cursor') === !0 && 30 || this.$.data('cursor') || 0,
                    thickness: this.$.data('thickness') && Math.max(Math.min(this.$.data('thickness'), 1), 0.01) || 0.35,
                    lineCap: this.$.data('linecap') || 'butt',
                    width: this.$.data('width') || 200,
                    height: this.$.data('height') || 200,
                    displayInput: this.$.data('displayinput') == null || this.$.data('displayinput'),
                    displayPrevious: this.$.data('displayprevious'),
                    fgColor: this.$.data('fgcolor') || '#87CEEB',
                    inputColor: this.$.data('inputcolor'),
                    font: this.$.data('font') || 'Arial',
                    fontWeight: this.$.data('font-weight') || 'bold',
                    inline: !1,
                    step: this.$.data('step') || 1,
                    rotation: this.$.data('rotation'),
                    draw: null,
                    change: null,
                    cancel: null,
                    release: null,
                    format: function(t) {
                        return t
                    },
                    parse: function(t) {
                        return parseFloat(t)
                    }
                }, this.o);
                this.o.flip = this.o.rotation === 'anticlockwise' || this.o.rotation === 'acw';
                if (!this.o.inputColor) {
                    this.o.inputColor = this.o.fgColor
                };
                if (this.$.is('fieldset')) {
                    this.v = {};
                    this.i = this.$.find('input');
                    this.i.each(function(i) {
                        var h = t(this);
                        s.i[i] = h;
                        s.v[i] = s.o.parse(h.val());
                        h.bind('change blur', function() {
                            var t = {};
                            t[i] = h.val();
                            s.val(t)
                        })
                    });
                    this.$.find('legend').remove()
                } else {
                    this.i = this.$;
                    this.v = this.o.parse(this.$.val());
                    this.v === '' && (this.v = this.o.min);
                    this.$.bind('change blur', function() {
                        s.val(s._validate(s.o.parse(s.$.val())))
                    })
                };
                !this.o.displayInput && this.$.hide();
                this.$c = t(document.createElement('canvas')).attr({
                    width: this.o.width,
                    height: this.o.height
                });
                this.$div = t('<div style="' + (this.o.inline ? 'display:inline;' : '') + 'width:' + this.o.width + 'px;height:' + this.o.height + 'px;"></div>');
                this.$.wrap(this.$div).before(this.$c);
                this.$div = this.$.parent();
                if (typeof G_vmlCanvasManager !== 'undefined') {
                    G_vmlCanvasManager.initElement(this.$c[0])
                };
                this.c = this.$c[0].getContext ? this.$c[0].getContext('2d') : null;
                if (!this.c) {
                    throw {
                        name: 'CanvasNotSupportedException',
                        message: 'Canvas not supported. Please use excanvas on IE8.0.',
                        toString: function() {
                            return this.name + ': ' + this.message
                        }
                    }
                };
                this.scale = (window.devicePixelRatio || 1) / (this.c.webkitBackingStorePixelRatio || this.c.mozBackingStorePixelRatio || this.c.msBackingStorePixelRatio || this.c.oBackingStorePixelRatio || this.c.backingStorePixelRatio || 1);
                this.relativeWidth = this.o.width % 1 !== 0 && this.o.width.indexOf('%');
                this.relativeHeight = this.o.height % 1 !== 0 && this.o.height.indexOf('%');
                this.relative = this.relativeWidth || this.relativeHeight;
                this._carve();
                if (this.v instanceof Object) {
                    this.cv = {};
                    this.copy(this.v, this.cv)
                } else {
                    this.cv = this.v
                };
                this.$.bind('configure', i).parent().bind('configure', i);
                this._listen()._configure()._xy().init();
                this.isInit = !0;
                this.$.val(this.o.format(this.v));
                this._draw();
                return this
            };
            this._carve = function() {
                if (this.relative) {
                    var t = this.relativeWidth ? this.$div.parent().width() * parseInt(this.o.width) / 100 : this.$div.parent().width(),
                        i = this.relativeHeight ? this.$div.parent().height() * parseInt(this.o.height) / 100 : this.$div.parent().height();
                    this.w = this.h = Math.min(t, i)
                } else {
                    this.w = this.o.width;
                    this.h = this.o.height
                };
                this.$div.css({
                    'width': this.w + 'px',
                    'height': this.h + 'px'
                });
                this.$c.attr({
                    width: this.w,
                    height: this.h
                });
                if (this.scale !== 1) {
                    this.$c[0].width = this.$c[0].width * this.scale;
                    this.$c[0].height = this.$c[0].height * this.scale;
                    this.$c.width(this.w);
                    this.$c.height(this.h)
                };
                return this
            };
            this._draw = function() {
                var t = !0;
                s.g = s.c;
                s.clear();
                s.dH && (t = s.dH());
                t !== !1 && s.draw()
            };
            this._touch = function(t) {
                var h = function(t) {
                    var i = s.xy2val(t.originalEvent.touches[s.t].pageX, t.originalEvent.touches[s.t].pageY);
                    if (i == s.cv) return;
                    if (s.cH && s.cH(i) === !1) return;
                    s.change(s._validate(i));
                    s._draw()
                };
                this.t = i.c.t(t);
                h(t);
                i.c.d.bind('touchmove.k', h).bind('touchend.k', function() {
                    i.c.d.unbind('touchmove.k touchend.k');
                    s.val(s.cv)
                });
                return this
            };
            this._mouse = function(t) {
                var h = function(t) {
                    var i = s.xy2val(t.pageX, t.pageY);
                    if (i == s.cv) return;
                    if (s.cH && (s.cH(i) === !1)) return;
                    s.change(s._validate(i));
                    s._draw()
                };
                h(t);
                i.c.d.bind('mousemove.k', h).bind('keyup.k', function(t) {
                    if (t.keyCode === 27) {
                        i.c.d.unbind('mouseup.k mousemove.k keyup.k');
                        if (s.eH && s.eH() === !1) return;
                        s.cancel()
                    }
                }).bind('mouseup.k', function(t) {
                    i.c.d.unbind('mousemove.k mouseup.k keyup.k');
                    s.val(s.cv)
                });
                return this
            };
            this._xy = function() {
                var t = this.$c.offset();
                this.x = t.left;
                this.y = t.top;
                return this
            };
            this._listen = function() {
                if (!this.o.readOnly) {
                    this.$c.bind('mousedown', function(t) {
                        t.preventDefault();
                        s._xy()._mouse(t)
                    }).bind('touchstart', function(t) {
                        t.preventDefault();
                        s._xy()._touch(t)
                    });
                    this.listen()
                } else {
                    this.$.attr('readonly', 'readonly')
                };
                if (this.relative) {
                    t(window).resize(function() {
                        s._carve().init();
                        s._draw()
                    })
                };
                return this
            };
            this._configure = function() {
                if (this.o.draw) this.dH = this.o.draw;
                if (this.o.change) this.cH = this.o.change;
                if (this.o.cancel) this.eH = this.o.cancel;
                if (this.o.release) this.rH = this.o.release;
                if (this.o.displayPrevious) {
                    this.pColor = this.h2rgba(this.o.fgColor, '0.4');
                    this.fgColor = this.h2rgba(this.o.fgColor, '0.6')
                } else {
                    this.fgColor = this.o.fgColor
                };
                return this
            };
            this._clear = function() {
                this.$c[0].width = this.$c[0].width
            };
            this._validate = function(t) {
                return (~~(((t < 0) ? -0.5 : 0.5) + (t / this.o.step))) * this.o.step
            };
            this.listen = function() {};
            this.extend = function() {};
            this.init = function() {};
            this.change = function(t) {};
            this.val = function(t) {};
            this.xy2val = function(t, i) {};
            this.draw = function() {};
            this.clear = function() {
                this._clear()
            };
            this.h2rgba = function(t, i) {
                var s;
                t = t.substring(1, 7);
                s = [parseInt(t.substring(0, 2), 16), parseInt(t.substring(2, 4), 16), parseInt(t.substring(4, 6), 16)];
                return 'rgba(' + s[0] + ',' + s[1] + ',' + s[2] + ',' + i + ')'
            };
            this.copy = function(t, i) {
                for (var s in t) {
                    i[s] = t[s]
                }
            }
        };
        i.Dial = function() {
            i.o.call(this);
            this.startAngle = null;
            this.xy = null;
            this.radius = null;
            this.lineWidth = null;
            this.cursorExt = null;
            this.w2 = null;
            this.PI2 = 2 * Math.PI;
            this.extend = function() {
                this.o = t.extend({
                    bgColor: this.$.data('bgcolor') || '#EEEEEE',
                    angleOffset: this.$.data('angleoffset') || 0,
                    angleArc: this.$.data('anglearc') || 360,
                    inline: !0
                }, this.o)
            };
            this.val = function(t, i) {
                if (null != t) {
                    t = this.o.parse(t);
                    if (i !== !1 && t != this.v && this.rH && this.rH(t) === !1) {
                        return
                    };
                    this.cv = this.o.stopper ? s(h(t, this.o.max), this.o.min) : t;
                    this.v = this.cv;
                    this.$.val(this.o.format(this.v));
                    this._draw()
                } else {
                    return this.v
                }
            };
            this.xy2val = function(t, e) {
                var i, n;
                i = Math.atan2(t - (this.x + this.w2), -(e - this.y - this.w2)) - this.angleOffset;
                if (this.o.flip) {
                    i = this.angleArc - i - this.PI2
                };
                if (this.angleArc != this.PI2 && (i < 0) && (i > -0.5)) {
                    i = 0
                } else if (i < 0) {
                    i += this.PI2
                };
                n = ~~(0.5 + (i * (this.o.max - this.o.min) / this.angleArc)) + this.o.min;
                this.o.stopper && (n = s(h(n, this.o.max), this.o.min));
                return n
            };
            this.listen = function() {
                var i = this,
                    e, a, l = function(t) {
                        t.preventDefault();
                        var o = t.originalEvent,
                            r = o.detail || o.wheelDeltaX,
                            l = o.detail || o.wheelDeltaY,
                            n = i._validate(i.o.parse(i.$.val())) + (r > 0 || l > 0 ? i.o.step : r < 0 || l < 0 ? -i.o.step : 0);
                        n = s(h(n, i.o.max), i.o.min);
                        i.val(n, !1);
                        if (i.rH) {
                            clearTimeout(e);
                            e = setTimeout(function() {
                                i.rH(n);
                                e = null
                            }, 100);
                            if (!a) {
                                a = setTimeout(function() {
                                    if (e) i.rH(n);
                                    a = null
                                }, 200)
                            }
                        }
                    },
                    o, n, r = 1,
                    c = {
                        37: -i.o.step,
                        38: i.o.step,
                        39: i.o.step,
                        40: -i.o.step
                    };
                this.$.bind('keydown', function(e) {
                    var a = e.keyCode;
                    if (a >= 96 && a <= 105) {
                        a = e.keyCode = a - 48
                    };
                    o = parseInt(String.fromCharCode(a));
                    if (isNaN(o)) {
                        (a !== 13) && a !== 8 && a !== 9 && a !== 189 && (a !== 190 || i.$.val().match(/\./)) && e.preventDefault();
                        if (t.inArray(a, [37, 38, 39, 40]) > -1) {
                            e.preventDefault();
                            var l = i.o.parse(i.$.val()) + c[a] * r;
                            i.o.stopper && (l = s(h(l, i.o.max), i.o.min));
                            i.change(l);
                            i._draw();
                            n = window.setTimeout(function() {
                                r *= 2
                            }, 30)
                        }
                    }
                }).bind('keyup', function(t) {
                    if (isNaN(o)) {
                        if (n) {
                            window.clearTimeout(n);
                            n = null;
                            r = 1;
                            i.val(i.$.val())
                        }
                    } else {
                        (i.$.val() > i.o.max && i.$.val(i.o.max)) || (i.$.val() < i.o.min && i.$.val(i.o.min))
                    }
                });
                this.$c.bind('mousewheel DOMMouseScroll', l);
                this.$.bind('mousewheel DOMMouseScroll', l)
            };
            this.init = function() {
                if (this.v < this.o.min || this.v > this.o.max) {
                    this.v = this.o.min
                };
                this.$.val(this.v);
                this.w2 = this.w / 2;
                this.cursorExt = this.o.cursor / 100;
                this.xy = this.w2 * this.scale;
                this.lineWidth = this.xy * this.o.thickness;
                this.lineCap = this.o.lineCap;
                this.radius = this.xy - this.lineWidth / 2;
                this.o.angleOffset && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);
                this.o.angleArc && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);
                this.angleOffset = this.o.angleOffset * Math.PI / 180;
                this.angleArc = this.o.angleArc * Math.PI / 180;
                this.startAngle = 1.5 * Math.PI + this.angleOffset;
                this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;
                var t = s(String(Math.abs(this.o.max)).length, String(Math.abs(this.o.min)).length, 2) + 2;
                this.o.displayInput && this.i.css({
                    'width': ((this.w / 2 + 4) >> 0) + 'px',
                    'height': ((this.w / 3) >> 0) + 'px',
                    'position': 'absolute',
                    'vertical-align': 'middle',
                    'margin-top': ((this.w / 3) >> 0) + 'px',
                    'margin-left': '-' + ((this.w * 3 / 4 + 2) >> 0) + 'px',
                    'border': 0,
                    'background': 'none',
                    'font': this.o.fontWeight + ' ' + ((this.w / t) >> 0) + 'px ' + this.o.font,
                    'text-align': 'center',
                    'color': this.o.inputColor || this.o.fgColor,
                    'padding': '0px',
                    '-webkit-appearance': 'none'
                }) || this.i.css({
                    'width': '0px',
                    'visibility': 'hidden'
                })
            };
            this.change = function(t) {
                this.cv = t;
                this.$.val(this.o.format(t))
            };
            this.angle = function(t) {
                return (t - this.o.min) * this.angleArc / (this.o.max - this.o.min)
            };
            this.arc = function(t) {
                var i, s;
                t = this.angle(t);
                if (this.o.flip) {
                    i = this.endAngle + 0.00001;
                    s = i - t - 0.00001
                } else {
                    i = this.startAngle - 0.00001;
                    s = i + t + 0.00001
                };
                this.o.cursor && (i = s - this.cursorExt) && (s = s + this.cursorExt);
                return {
                    s: i,
                    e: s,
                    d: this.o.flip && !this.o.cursor
                }
            };
            this.draw = function() {
                var t = this.g,
                    s = this.arc(this.cv),
                    i, h = 1;
                t.lineWidth = this.lineWidth;
                t.lineCap = this.lineCap;
                if (this.o.bgColor !== 'none') {
                    t.beginPath();
                    t.strokeStyle = this.o.bgColor;
                    t.arc(this.xy, this.xy, this.radius, this.endAngle - 0.00001, this.startAngle + 0.00001, !0);
                    t.stroke()
                };
                if (this.o.displayPrevious) {
                    i = this.arc(this.v);
                    t.beginPath();
                    t.strokeStyle = this.pColor;
                    t.arc(this.xy, this.xy, this.radius, i.s, i.e, i.d);
                    t.stroke();
                    h = this.cv == this.v
                };
                t.beginPath();
                t.strokeStyle = h ? this.o.fgColor : this.fgColor;
                t.arc(this.xy, this.xy, this.radius, s.s, s.e, s.d);
                t.stroke()
            };
            this.cancel = function() {
                this.val(this.v)
            }
        };
        t.fn.dial = t.fn.knob = function(s) {
            return this.each(function() {
                var h = new i.Dial();
                h.o = s;
                h.$ = t(this);
                h.run()
            }).parent()
        }
    }));
} catch (err) {
    console.log('Error occurred inside /themes/vl/assets/js/jquery.knob.js');
    console.log(err)
}

//File /themes/vl/assets/js/jquery.scrollUp.min.js 

try {
    /*!
     * scrollup v2.4.1
     * Url: http://markgoodyear.com/labs/scrollup/
     * Copyright (c) Mark Goodyear — @markgdyr — http://markgoodyear.com
     * License: MIT
     */
    ! function(l, o, e) {
        "use strict";
        l.fn.scrollUp = function(o) {
            l.data(e.body, "scrollUp") || (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o))
        }, l.fn.scrollUp.init = function(r) {
            var s, t, c, i, n, a, d, p = l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r),
                f = !1;
            switch (d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", {
                id: p.scrollName,
                href: "#top"
            }), p.scrollTitle && d.attr("title", p.scrollTitle), d.appendTo("body"), p.scrollImg || p.scrollTrigger || d.html(p.scrollText), d.css({
                display: "none",
                position: "fixed",
                zIndex: p.zIndex
            }), p.activeOverlay && l("<div/>", {
                id: p.scrollName + "-active"
            }).css({
                position: "absolute",
                top: p.scrollDistance + "px",
                width: "100%",
                borderTop: "1px dotted" + p.activeOverlay,
                zIndex: p.zIndex
            }).appendTo("body"), p.animation) {
                case "fade":
                    s = "fadeIn", t = "fadeOut", c = p.animationSpeed;
                    break;
                case "slide":
                    s = "slideDown", t = "slideUp", c = p.animationSpeed;
                    break;
                default:
                    s = "show", t = "hide", c = 0
            }
            i = "top" === p.scrollFrom ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance, n = l(o).scroll(function() {
                l(o).scrollTop() > i ? f || (d[s](c), f = !0) : f && (d[t](c), f = !1)
            }), p.scrollTarget ? "number" == typeof p.scrollTarget ? a = p.scrollTarget : "string" == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top)) : a = 0, d.click(function(o) {
                o.preventDefault(), l("html, body").animate({
                    scrollTop: a
                }, p.scrollSpeed, p.easingType)
            })
        }, l.fn.scrollUp.defaults = {
            scrollName: "scrollUp",
            scrollDistance: 300,
            scrollFrom: "top",
            scrollSpeed: 300,
            easingType: "linear",
            animation: "fade",
            animationSpeed: 200,
            scrollTrigger: !1,
            scrollTarget: !1,
            scrollText: "Scroll to top",
            scrollTitle: !1,
            scrollImg: !1,
            activeOverlay: !1,
            zIndex: 2147483647
        }, l.fn.scrollUp.destroy = function(r) {
            l.removeData(e.body, "scrollUp"), l("#" + l.fn.scrollUp.settings.scrollName).remove(), l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(), l.fn.jquery.split(".")[1] >= 7 ? l(o).off("scroll", r) : l(o).unbind("scroll", r)
        }, l.scrollUp = l.fn.scrollUp
    }(jQuery, window, document);
} catch (err) {
    console.log('Error occurred inside /themes/vl/assets/js/jquery.scrollUp.min.js');
    console.log(err)
}

//File /themes/vl/assets/js/imagesloaded.pkgd.min.js 

try {
    /*!
     * imagesLoaded PACKAGED v4.1.4
     * JavaScript is all like "You images are done yet or what?"
     * MIT License
     */

    ! function(e, t) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
    }("undefined" != typeof window ? window : this, function() {
        function e() {}
        var t = e.prototype;
        return t.on = function(e, t) {
            if (e && t) {
                var i = this._events = this._events || {},
                    n = i[e] = i[e] || [];
                return n.indexOf(t) == -1 && n.push(t), this
            }
        }, t.once = function(e, t) {
            if (e && t) {
                this.on(e, t);
                var i = this._onceEvents = this._onceEvents || {},
                    n = i[e] = i[e] || {};
                return n[t] = !0, this
            }
        }, t.off = function(e, t) {
            var i = this._events && this._events[e];
            if (i && i.length) {
                var n = i.indexOf(t);
                return n != -1 && i.splice(n, 1), this
            }
        }, t.emitEvent = function(e, t) {
            var i = this._events && this._events[e];
            if (i && i.length) {
                i = i.slice(0), t = t || [];
                for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                    var r = i[o],
                        s = n && n[r];
                    s && (this.off(e, r), delete n[r]), r.apply(this, t)
                }
                return this
            }
        }, t.allOff = function() {
            delete this._events, delete this._onceEvents
        }, e
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
            return t(e, i)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function i(e, t) {
            for (var i in t) e[i] = t[i];
            return e
        }

        function n(e) {
            if (Array.isArray(e)) return e;
            var t = "object" == typeof e && "number" == typeof e.length;
            return t ? d.call(e) : [e]
        }

        function o(e, t, r) {
            if (!(this instanceof o)) return new o(e, t, r);
            var s = e;
            return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
        }

        function r(e) {
            this.img = e
        }

        function s(e, t) {
            this.url = e, this.element = t, this.img = new Image
        }
        var h = e.jQuery,
            a = e.console,
            d = Array.prototype.slice;
        o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, o.prototype.addElementImages = function(e) {
            "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
            var t = e.nodeType;
            if (t && u[t]) {
                for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                    var o = i[n];
                    this.addImage(o)
                }
                if ("string" == typeof this.options.background) {
                    var r = e.querySelectorAll(this.options.background);
                    for (n = 0; n < r.length; n++) {
                        var s = r[n];
                        this.addElementBackgroundImages(s)
                    }
                }
            }
        };
        var u = {
            1: !0,
            9: !0,
            11: !0
        };
        return o.prototype.addElementBackgroundImages = function(e) {
            var t = getComputedStyle(e);
            if (t)
                for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                    var o = n && n[2];
                    o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
                }
        }, o.prototype.addImage = function(e) {
            var t = new r(e);
            this.images.push(t)
        }, o.prototype.addBackground = function(e, t) {
            var i = new s(e, t);
            this.images.push(i)
        }, o.prototype.check = function() {
            function e(e, i, n) {
                setTimeout(function() {
                    t.progress(e, i, n)
                })
            }
            var t = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
                t.once("progress", e), t.check()
            }) : void this.complete()
        }, o.prototype.progress = function(e, t, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
        }, o.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var t = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[t](this)
            }
        }, r.prototype = Object.create(t.prototype), r.prototype.check = function() {
            var e = this.getIsImageComplete();
            return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
        }, r.prototype.getIsImageComplete = function() {
            return this.img.complete && this.img.naturalWidth
        }, r.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
        }, r.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, r.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, r.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, r.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
            var e = this.getIsImageComplete();
            e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, s.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, s.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
        }, o.makeJQueryPlugin = function(t) {
            t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function(e, t) {
                var i = new o(this, e, t);
                return i.jqDeferred.promise(h(this))
            })
        }, o.makeJQueryPlugin(), o
    });
} catch (err) {
    console.log('Error occurred inside /themes/vl/assets/js/imagesloaded.pkgd.min.js');
    console.log(err)
}

//File /themes/vl/assets/js/jquery.magnific-popup.min.js 

try {
    /*! Magnific Popup - v1.1.0 - 2016-02-20
     * http://dimsemenov.com/plugins/magnific-popup/
     * Copyright (c) 2016 Dmitry Semenov; */
    ! function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
    }(function(a) {
        var b, c, d, e, f, g, h = "Close",
            i = "BeforeClose",
            j = "AfterClose",
            k = "BeforeAppend",
            l = "MarkupParse",
            m = "Open",
            n = "Change",
            o = "mfp",
            p = "." + o,
            q = "mfp-ready",
            r = "mfp-removing",
            s = "mfp-prevent-close",
            t = function() {},
            u = !!window.jQuery,
            v = a(window),
            w = function(a, c) {
                b.ev.on(o + a + p, c)
            },
            x = function(b, c, d, e) {
                var f = document.createElement("div");
                return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
            },
            y = function(c, d) {
                b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
            },
            z = function(c) {
                return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
            },
            A = function() {
                a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
            },
            B = function() {
                var a = document.createElement("p").style,
                    b = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== a.transition) return !0;
                for (; b.length;)
                    if (b.pop() + "Transition" in a) return !0;
                return !1
            };
        t.prototype = {
            constructor: t,
            init: function() {
                var c = navigator.appVersion;
                b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
            },
            open: function(c) {
                var e;
                if (c.isObj === !1) {
                    b.items = c.items.toArray(), b.index = 0;
                    var g, h = c.items;
                    for (e = 0; e < h.length; e++)
                        if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                            b.index = e;
                            break
                        }
                } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
                if (b.isOpen) return void b.updateItemHTML();
                b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                    b.close()
                }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                    b._checkIfClose(a.target) && b.close()
                }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
                var i = a.magnificPopup.modules;
                for (e = 0; e < i.length; e++) {
                    var j = i[e];
                    j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
                }
                y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                    c.close_replaceWith = z(d.type)
                }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                    overflow: b.st.overflowY,
                    overflowX: "hidden",
                    overflowY: b.st.overflowY
                }) : b.wrap.css({
                    top: v.scrollTop(),
                    position: "absolute"
                }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                    height: d.height(),
                    position: "absolute"
                }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                    27 === a.keyCode && b.close()
                }), v.on("resize" + p, function() {
                    b.updateSize()
                }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
                var k = b.wH = v.height(),
                    n = {};
                if (b.fixedContentPos && b._hasScrollBar(k)) {
                    var o = b._getScrollbarSize();
                    o && (n.marginRight = o)
                }
                b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
                var r = b.st.mainClass;
                return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                    b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
                }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
            },
            close: function() {
                b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
                    b._close()
                }, b.st.removalDelay)) : b._close())
            },
            _close: function() {
                y(h);
                var c = r + " " + q + " ";
                if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                    var e = {
                        marginRight: ""
                    };
                    b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
                }
                d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
            },
            updateSize: function(a) {
                if (b.isIOS) {
                    var c = document.documentElement.clientWidth / window.innerWidth,
                        d = window.innerHeight * c;
                    b.wrap.css("height", d), b.wH = d
                } else b.wH = a || v.height();
                b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
            },
            updateItemHTML: function() {
                var c = b.items[b.index];
                b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
                var d = c.type;
                if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                    var f = b.st[d] ? b.st[d].markup : !1;
                    y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
                }
                e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
                var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
                b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
            },
            appendContent: function(a, c) {
                b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
            },
            parseEl: function(c) {
                var d, e = b.items[c];
                if (e.tagName ? e = {
                        el: a(e)
                    } : (d = e.type, e = {
                        data: e,
                        src: e.src
                    }), e.el) {
                    for (var f = b.types, g = 0; g < f.length; g++)
                        if (e.el.hasClass("mfp-" + f[g])) {
                            d = f[g];
                            break
                        }
                    e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
                }
                return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
            },
            addGroup: function(a, c) {
                var d = function(d) {
                    d.mfpEl = this, b._openClick(d, a, c)
                };
                c || (c = {});
                var e = "click.magnificPopup";
                c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
            },
            _openClick: function(c, d, e) {
                var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
                if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                    var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                    if (g)
                        if (a.isFunction(g)) {
                            if (!g.call(b)) return !0
                        } else if (v.width() < g) return !0;
                    c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
                }
            },
            updateStatus: function(a, d) {
                if (b.preloader) {
                    c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                    var e = {
                        status: a,
                        text: d
                    };
                    y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                        a.stopImmediatePropagation()
                    }), b.container.addClass("mfp-s-" + a), c = a
                }
            },
            _checkIfClose: function(c) {
                if (!a(c).hasClass(s)) {
                    var d = b.st.closeOnContentClick,
                        e = b.st.closeOnBgClick;
                    if (d && e) return !0;
                    if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                    if (c === b.content[0] || a.contains(b.content[0], c)) {
                        if (d) return !0
                    } else if (e && a.contains(document, c)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(a) {
                b.bgOverlay.addClass(a), b.wrap.addClass(a)
            },
            _removeClassFromMFP: function(a) {
                this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
            },
            _hasScrollBar: function(a) {
                return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
            },
            _setFocus: function() {
                (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
            },
            _onFocusIn: function(c) {
                return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
            },
            _parseMarkup: function(b, c, d) {
                var e;
                d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) {
                    if (void 0 === d || d === !1) return !0;
                    if (e = c.split("_"), e.length > 1) {
                        var f = b.find(p + "-" + e[0]);
                        if (f.length > 0) {
                            var g = e[1];
                            "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                        }
                    } else b.find(p + "-" + c).html(d)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === b.scrollbarSize) {
                    var a = document.createElement("div");
                    a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
                }
                return b.scrollbarSize
            }
        }, a.magnificPopup = {
            instance: null,
            proto: t.prototype,
            modules: [],
            open: function(b, c) {
                return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
            },
            close: function() {
                return a.magnificPopup.instance && a.magnificPopup.instance.close()
            },
            registerModule: function(b, c) {
                c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        }, a.fn.magnificPopup = function(c) {
            A();
            var d = a(this);
            if ("string" == typeof c)
                if ("open" === c) {
                    var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                        g = parseInt(arguments[1], 10) || 0;
                    f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                        mfpEl: e
                    }, d, f)
                } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
            else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
            return d
        };
        var C, D, E, F = "inline",
            G = function() {
                E && (D.after(E.addClass(C)).detach(), E = null)
            };
        a.magnificPopup.registerModule(F, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    b.types.push(F), w(h + "." + F, function() {
                        G()
                    })
                },
                getInline: function(c, d) {
                    if (G(), c.src) {
                        var e = b.st.inline,
                            f = a(c.src);
                        if (f.length) {
                            var g = f[0].parentNode;
                            g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                        } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                        return c.inlineElement = f, f
                    }
                    return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
                }
            }
        });
        var H, I = "ajax",
            J = function() {
                H && a(document.body).removeClass(H)
            },
            K = function() {
                J(), b.req && b.req.abort()
            };
        a.magnificPopup.registerModule(I, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
                },
                getAjax: function(c) {
                    H && a(document.body).addClass(H), b.updateStatus("loading");
                    var d = a.extend({
                        url: c.src,
                        success: function(d, e, f) {
                            var g = {
                                data: d,
                                xhr: f
                            };
                            y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
                                b.wrap.addClass(q)
                            }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                        },
                        error: function() {
                            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                        }
                    }, b.st.ajax.settings);
                    return b.req = a.ajax(d), ""
                }
            }
        });
        var L, M = function(c) {
            if (c.data && void 0 !== c.data.title) return c.data.title;
            var d = b.st.image.titleSrc;
            if (d) {
                if (a.isFunction(d)) return d.call(b, c);
                if (c.el) return c.el.attr(d) || ""
            }
            return ""
        };
        a.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var c = b.st.image,
                        d = ".image";
                    b.types.push("image"), w(m + d, function() {
                        "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                    }), w(h + d, function() {
                        c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                    }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
                },
                resizeImage: function() {
                    var a = b.currItem;
                    if (a && a.img && b.st.image.verticalFit) {
                        var c = 0;
                        b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                    }
                },
                _onImageHasSize: function(a) {
                    a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
                },
                findImageSize: function(a) {
                    var c = 0,
                        d = a.img[0],
                        e = function(f) {
                            L && clearInterval(L), L = setInterval(function() {
                                return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                            }, f)
                        };
                    e(1)
                },
                getImage: function(c, d) {
                    var e = 0,
                        f = function() {
                            c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                        },
                        g = function() {
                            c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                        },
                        h = b.st.image,
                        i = d.find(".mfp-img");
                    if (i.length) {
                        var j = document.createElement("img");
                        j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                    }
                    return b._parseMarkup(d, {
                        title: M(c),
                        img_replaceWith: c.img
                    }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
                }
            }
        });
        var N, O = function() {
            return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
        };
        a.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(a) {
                    return a.is("img") ? a : a.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var a, c = b.st.zoom,
                        d = ".zoom";
                    if (c.enabled && b.supportsTransition) {
                        var e, f, g = c.duration,
                            j = function(a) {
                                var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    d = "all " + c.duration / 1e3 + "s " + c.easing,
                                    e = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    f = "transition";
                                return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                            },
                            k = function() {
                                b.content.css("visibility", "visible")
                            };
                        w("BuildControls" + d, function() {
                            if (b._allowZoom()) {
                                if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                                f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                    f.css(b._getOffset(!0)), e = setTimeout(function() {
                                        k(), setTimeout(function() {
                                            f.remove(), a = f = null, y("ZoomAnimationEnded")
                                        }, 16)
                                    }, g)
                                }, 16)
                            }
                        }), w(i + d, function() {
                            if (b._allowZoom()) {
                                if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                    if (a = b._getItemToZoom(), !a) return;
                                    f = j(a)
                                }
                                f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                    f.css(b._getOffset())
                                }, 16)
                            }
                        }), w(h + d, function() {
                            b._allowZoom() && (k(), f && f.remove(), a = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === b.currItem.type
                },
                _getItemToZoom: function() {
                    return b.currItem.hasSize ? b.currItem.img : !1
                },
                _getOffset: function(c) {
                    var d;
                    d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                    var e = d.offset(),
                        f = parseInt(d.css("padding-top"), 10),
                        g = parseInt(d.css("padding-bottom"), 10);
                    e.top -= a(window).scrollTop() - f;
                    var h = {
                        width: d.width(),
                        height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                    };
                    return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
                }
            }
        });
        var P = "iframe",
            Q = "//about:blank",
            R = function(a) {
                if (b.currTemplate[P]) {
                    var c = b.currTemplate[P].find("iframe");
                    c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
                }
            };
        a.magnificPopup.registerModule(P, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    b.types.push(P), w("BeforeChange", function(a, b, c) {
                        b !== c && (b === P ? R() : c === P && R(!0))
                    }), w(h + "." + P, function() {
                        R()
                    })
                },
                getIframe: function(c, d) {
                    var e = c.src,
                        f = b.st.iframe;
                    a.each(f.patterns, function() {
                        return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                    });
                    var g = {};
                    return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
                }
            }
        });
        var S = function(a) {
                var c = b.items.length;
                return a > c - 1 ? a - c : 0 > a ? c + a : a
            },
            T = function(a, b, c) {
                return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
            };
        a.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var c = b.st.gallery,
                        e = ".mfp-gallery";
                    return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
                        c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                            return b.items.length > 1 ? (b.next(), !1) : void 0
                        }), d.on("keydown" + e, function(a) {
                            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                        })
                    }), w("UpdateStatus" + e, function(a, c) {
                        c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                    }), w(l + e, function(a, d, e, f) {
                        var g = b.items.length;
                        e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                    }), w("BuildControls" + e, function() {
                        if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                            var d = c.arrowMarkup,
                                e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                                f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                            e.click(function() {
                                b.prev()
                            }), f.click(function() {
                                b.next()
                            }), b.container.append(e.add(f))
                        }
                    }), w(n + e, function() {
                        b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                            b.preloadNearbyImages(), b._preloadTimeout = null
                        }, 16)
                    }), void w(h + e, function() {
                        d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                    })) : !1
                },
                next: function() {
                    b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
                },
                prev: function() {
                    b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
                },
                goTo: function(a) {
                    b.direction = a >= b.index, b.index = a, b.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var a, c = b.st.gallery.preload,
                        d = Math.min(c[0], b.items.length),
                        e = Math.min(c[1], b.items.length);
                    for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                    for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
                },
                _preloadItem: function(c) {
                    if (c = S(c), !b.items[c].preloaded) {
                        var d = b.items[c];
                        d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                            d.hasSize = !0
                        }).on("error.mfploader", function() {
                            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                        }).attr("src", d.src)), d.preloaded = !0
                    }
                }
            }
        });
        var U = "retina";
        a.magnificPopup.registerModule(U, {
            options: {
                replaceSrc: function(a) {
                    return a.src.replace(/\.\w+$/, function(a) {
                        return "@2x" + a
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var a = b.st.retina,
                            c = a.ratio;
                        c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
                            b.img.css({
                                "max-width": b.img[0].naturalWidth / c,
                                width: "100%"
                            })
                        }), w("ElementParse." + U, function(b, d) {
                            d.src = a.replaceSrc(d, c)
                        }))
                    }
                }
            }
        }), A()
    });
} catch (err) {
    console.log('Error occurred inside /themes/vl/assets/js/jquery.magnific-popup.min.js');
    console.log(err)
}

//File /themes/vl/assets/js/plugins.js 

try {
    (function() {
        var e, r = function() {},
            i = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'],
            n = i.length,
            o = (window.console = window.console || {});
        while (n--) {
            e = i[n];
            if (!o[e]) {
                o[e] = r
            }
        }
    }());
} catch (err) {
    console.log('Error occurred inside /themes/vl/assets/js/plugins.js');
    console.log(err)
}