!(function (t) {
    var e = {};
    function n(i) {
        if (e[i]) return e[i].exports;
        var r = (e[i] = { i: i, l: !1, exports: {} });
        return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    (n.m = t),
        (n.c = e),
        (n.d = function (t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
        }),
        (n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (n.t = function (t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if ((n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                for (var r in t)
                    n.d(
                        i,
                        r,
                        function (e) {
                            return t[e];
                        }.bind(null, r)
                    );
            return i;
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return n.d(e, "a", e), e;
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = "/static/app/front/"),
        n((n.s = 15));
})([
    function (t, e, n) {
        "use strict";
        (function (t, i) {
            n.d(e, "k", function () {
                return r;
            }),
                n.d(e, "m", function () {
                    return s;
                }),
                n.d(e, "l", function () {
                    return o;
                }),
                n.d(e, "i", function () {
                    return l;
                }),
                n.d(e, "a", function () {
                    return u;
                }),
                n.d(e, "b", function () {
                    return c;
                }),
                n.d(e, "c", function () {
                    return h;
                }),
                n.d(e, "d", function () {
                    return p;
                }),
                n.d(e, "e", function () {
                    return f;
                }),
                n.d(e, "f", function () {
                    return d;
                }),
                n.d(e, "g", function () {
                    return m;
                }),
                n.d(e, "h", function () {
                    return v;
                }),
                n.d(e, "j", function () {
                    return g;
                });
            /*!
             * VERSION: 2.1.3
             * DATE: 2019-05-17
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
             * This work is subject to the terms at http://greensock.com/standard-license or for
             * Club GreenSock members, the software agreement that was issued with your membership.
             *
             * @author: Jack Doyle, jack@greensock.com
             */
            var r = "undefined" != typeof window ? window : t.exports && void 0 !== i ? i : {},
                o = (function (t) {
                    var e = {},
                        n = t.document,
                        i = (t.GreenSockGlobals = t.GreenSockGlobals || t);
                    if (i.TweenLite) return i.TweenLite;
                    var r,
                        o,
                        s,
                        a,
                        l,
                        u,
                        c,
                        h = function (t) {
                            var e,
                                n = t.split("."),
                                r = i;
                            for (e = 0; e < n.length; e++) r[n[e]] = r = r[n[e]] || {};
                            return r;
                        },
                        p = h("com.greensock"),
                        f = function (t) {
                            var e,
                                n = [],
                                i = t.length;
                            for (e = 0; e !== i; n.push(t[e++]));
                            return n;
                        },
                        d = function () {},
                        m =
                            ((u = Object.prototype.toString),
                            (c = u.call([])),
                            function (t) {
                                return null != t && (t instanceof Array || ("object" == typeof t && !!t.push && u.call(t) === c));
                            }),
                        v = {},
                        g = function (t, n, r, o) {
                            (this.sc = v[t] ? v[t].sc : []), (v[t] = this), (this.gsClass = null), (this.func = r);
                            var s = [];
                            (this.check = function (a) {
                                for (var l, u, c, p, f = n.length, d = f; --f > -1; ) (l = v[n[f]] || new g(n[f], [])).gsClass ? ((s[f] = l.gsClass), d--) : a && l.sc.push(this);
                                if (0 === d && r) for (c = (u = ("com.greensock." + t).split(".")).pop(), p = h(u.join("."))[c] = this.gsClass = r.apply(r, s), o && (i[c] = e[c] = p), f = 0; f < this.sc.length; f++) this.sc[f].check();
                            }),
                                this.check(!0);
                        },
                        y = (t._gsDefine = function (t, e, n, i) {
                            return new g(t, e, n, i);
                        }),
                        w = (p._class = function (t, e, n) {
                            return (
                                (e = e || function () {}),
                                y(
                                    t,
                                    [],
                                    function () {
                                        return e;
                                    },
                                    n
                                ),
                                e
                            );
                        });
                    y.globals = i;
                    var A = [0, 0, 1, 1],
                        b = w(
                            "easing.Ease",
                            function (t, e, n, i) {
                                (this._func = t), (this._type = n || 0), (this._power = i || 0), (this._params = e ? A.concat(e) : A);
                            },
                            !0
                        ),
                        x = (b.map = {}),
                        _ = (b.register = function (t, e, n, i) {
                            for (var r, o, s, a, l = e.split(","), u = l.length, c = (n || "easeIn,easeOut,easeInOut").split(","); --u > -1; )
                                for (o = l[u], r = i ? w("easing." + o, null, !0) : p.easing[o] || {}, s = c.length; --s > -1; ) (a = c[s]), (x[o + "." + a] = x[a + o] = r[a] = t.getRatio ? t : t[a] || new t());
                        });
                    for (
                        (s = b.prototype)._calcEnd = !1,
                            s.getRatio = function (t) {
                                if (this._func) return (this._params[0] = t), this._func.apply(null, this._params);
                                var e = this._type,
                                    n = this._power,
                                    i = 1 === e ? 1 - t : 2 === e ? t : t < 0.5 ? 2 * t : 2 * (1 - t);
                                return 1 === n ? (i *= i) : 2 === n ? (i *= i * i) : 3 === n ? (i *= i * i * i) : 4 === n && (i *= i * i * i * i), 1 === e ? 1 - i : 2 === e ? i : t < 0.5 ? i / 2 : 1 - i / 2;
                            },
                            o = (r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length;
                        --o > -1;

                    )
                        (s = r[o] + ",Power" + o), _(new b(null, null, 1, o), s, "easeOut", !0), _(new b(null, null, 2, o), s, "easeIn" + (0 === o ? ",easeNone" : "")), _(new b(null, null, 3, o), s, "easeInOut");
                    (x.linear = p.easing.Linear.easeIn), (x.swing = p.easing.Quad.easeInOut);
                    var T = w("events.EventDispatcher", function (t) {
                        (this._listeners = {}), (this._eventTarget = t || this);
                    });
                    ((s = T.prototype).addEventListener = function (t, e, n, i, r) {
                        r = r || 0;
                        var o,
                            s,
                            u = this._listeners[t],
                            c = 0;
                        for (this !== a || l || a.wake(), null == u && (this._listeners[t] = u = []), s = u.length; --s > -1; ) (o = u[s]).c === e && o.s === n ? u.splice(s, 1) : 0 === c && o.pr < r && (c = s + 1);
                        u.splice(c, 0, { c: e, s: n, up: i, pr: r });
                    }),
                        (s.removeEventListener = function (t, e) {
                            var n,
                                i = this._listeners[t];
                            if (i) for (n = i.length; --n > -1; ) if (i[n].c === e) return void i.splice(n, 1);
                        }),
                        (s.dispatchEvent = function (t) {
                            var e,
                                n,
                                i,
                                r = this._listeners[t];
                            if (r) for ((e = r.length) > 1 && (r = r.slice(0)), n = this._eventTarget; --e > -1; ) (i = r[e]) && (i.up ? i.c.call(i.s || n, { type: t, target: n }) : i.c.call(i.s || n));
                        });
                    var C = t.requestAnimationFrame,
                        S = t.cancelAnimationFrame,
                        P =
                            Date.now ||
                            function () {
                                return new Date().getTime();
                            },
                        k = P();
                    for (o = (r = ["ms", "moz", "webkit", "o"]).length; --o > -1 && !C; ) (C = t[r[o] + "RequestAnimationFrame"]), (S = t[r[o] + "CancelAnimationFrame"] || t[r[o] + "CancelRequestAnimationFrame"]);
                    w("Ticker", function (t, e) {
                        var i,
                            r,
                            o,
                            s,
                            u,
                            c = this,
                            h = P(),
                            p = !(!1 === e || !C) && "auto",
                            f = 500,
                            m = 33,
                            v = function (t) {
                                var e,
                                    n,
                                    a = P() - k;
                                a > f && (h += a - m),
                                    (k += a),
                                    (c.time = (k - h) / 1e3),
                                    (e = c.time - u),
                                    (!i || e > 0 || !0 === t) && (c.frame++, (u += e + (e >= s ? 0.004 : s - e)), (n = !0)),
                                    !0 !== t && (o = r(v)),
                                    n && c.dispatchEvent("tick");
                            };
                        T.call(c),
                            (c.time = c.frame = 0),
                            (c.tick = function () {
                                v(!0);
                            }),
                            (c.lagSmoothing = function (t, e) {
                                if (!arguments.length) return f < 1e8;
                                (f = t || 1e8), (m = Math.min(e, f, 0));
                            }),
                            (c.sleep = function () {
                                null != o && (p && S ? S(o) : clearTimeout(o), (r = d), (o = null), c === a && (l = !1));
                            }),
                            (c.wake = function (t) {
                                null !== o ? c.sleep() : t ? (h += -k + (k = P())) : c.frame > 10 && (k = P() - f + 5),
                                    (r =
                                        0 === i
                                            ? d
                                            : p && C
                                            ? C
                                            : function (t) {
                                                  return setTimeout(t, (1e3 * (u - c.time) + 1) | 0);
                                              }),
                                    c === a && (l = !0),
                                    v(2);
                            }),
                            (c.fps = function (t) {
                                if (!arguments.length) return i;
                                (s = 1 / ((i = t) || 60)), (u = this.time + s), c.wake();
                            }),
                            (c.useRAF = function (t) {
                                if (!arguments.length) return p;
                                c.sleep(), (p = t), c.fps(i);
                            }),
                            c.fps(t),
                            setTimeout(function () {
                                "auto" === p && c.frame < 5 && "hidden" !== (n || {}).visibilityState && c.useRAF(!1);
                            }, 1500);
                    }),
                        ((s = p.Ticker.prototype = new p.events.EventDispatcher()).constructor = p.Ticker);
                    var E = w("core.Animation", function (t, e) {
                        if (
                            ((this.vars = e = e || {}),
                            (this._duration = this._totalDuration = t || 0),
                            (this._delay = Number(e.delay) || 0),
                            (this._timeScale = 1),
                            (this._active = !!e.immediateRender),
                            (this.data = e.data),
                            (this._reversed = !!e.reversed),
                            G)
                        ) {
                            l || a.wake();
                            var n = this.vars.useFrames ? X : G;
                            n.add(this, n._time), this.vars.paused && this.paused(!0);
                        }
                    });
                    (a = E.ticker = new p.Ticker()),
                        ((s = E.prototype)._dirty = s._gc = s._initted = s._paused = !1),
                        (s._totalTime = s._time = 0),
                        (s._rawPrevTime = -1),
                        (s._next = s._last = s._onUpdate = s._timeline = s.timeline = null),
                        (s._paused = !1);
                    var M = function () {
                        l && P() - k > 2e3 && ("hidden" !== (n || {}).visibilityState || !a.lagSmoothing()) && a.wake();
                        var t = setTimeout(M, 2e3);
                        t.unref && t.unref();
                    };
                    M(),
                        (s.play = function (t, e) {
                            return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
                        }),
                        (s.pause = function (t, e) {
                            return null != t && this.seek(t, e), this.paused(!0);
                        }),
                        (s.resume = function (t, e) {
                            return null != t && this.seek(t, e), this.paused(!1);
                        }),
                        (s.seek = function (t, e) {
                            return this.totalTime(Number(t), !1 !== e);
                        }),
                        (s.restart = function (t, e) {
                            return this.reversed(!1)
                                .paused(!1)
                                .totalTime(t ? -this._delay : 0, !1 !== e, !0);
                        }),
                        (s.reverse = function (t, e) {
                            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
                        }),
                        (s.render = function (t, e, n) {}),
                        (s.invalidate = function () {
                            return (this._time = this._totalTime = 0), (this._initted = this._gc = !1), (this._rawPrevTime = -1), (!this._gc && this.timeline) || this._enabled(!0), this;
                        }),
                        (s.isActive = function () {
                            var t,
                                e = this._timeline,
                                n = this._startTime;
                            return !e || (!this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= n && t < n + this.totalDuration() / this._timeScale - 1e-8);
                        }),
                        (s._enabled = function (t, e) {
                            return (
                                l || a.wake(),
                                (this._gc = !t),
                                (this._active = this.isActive()),
                                !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
                                !1
                            );
                        }),
                        (s._kill = function (t, e) {
                            return this._enabled(!1, !1);
                        }),
                        (s.kill = function (t, e) {
                            return this._kill(t, e), this;
                        }),
                        (s._uncache = function (t) {
                            for (var e = t ? this : this.timeline; e; ) (e._dirty = !0), (e = e.timeline);
                            return this;
                        }),
                        (s._swapSelfInParams = function (t) {
                            for (var e = t.length, n = t.concat(); --e > -1; ) "{self}" === t[e] && (n[e] = this);
                            return n;
                        }),
                        (s._callback = function (t) {
                            var e = this.vars,
                                n = e[t],
                                i = e[t + "Params"],
                                r = e[t + "Scope"] || e.callbackScope || this;
                            switch (i ? i.length : 0) {
                                case 0:
                                    n.call(r);
                                    break;
                                case 1:
                                    n.call(r, i[0]);
                                    break;
                                case 2:
                                    n.call(r, i[0], i[1]);
                                    break;
                                default:
                                    n.apply(r, i);
                            }
                        }),
                        (s.eventCallback = function (t, e, n, i) {
                            if ("on" === (t || "").substr(0, 2)) {
                                var r = this.vars;
                                if (1 === arguments.length) return r[t];
                                null == e ? delete r[t] : ((r[t] = e), (r[t + "Params"] = m(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n), (r[t + "Scope"] = i)), "onUpdate" === t && (this._onUpdate = e);
                            }
                            return this;
                        }),
                        (s.delay = function (t) {
                            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), (this._delay = t), this) : this._delay;
                        }),
                        (s.duration = function (t) {
                            return arguments.length
                                ? ((this._duration = this._totalDuration = t),
                                  this._uncache(!0),
                                  this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
                                  this)
                                : ((this._dirty = !1), this._duration);
                        }),
                        (s.totalDuration = function (t) {
                            return (this._dirty = !1), arguments.length ? this.duration(t) : this._totalDuration;
                        }),
                        (s.time = function (t, e) {
                            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time;
                        }),
                        (s.totalTime = function (t, e, n) {
                            if ((l || a.wake(), !arguments.length)) return this._totalTime;
                            if (this._timeline) {
                                if ((t < 0 && !n && (t += this.totalDuration()), this._timeline.smoothChildTiming)) {
                                    this._dirty && this.totalDuration();
                                    var i = this._totalDuration,
                                        r = this._timeline;
                                    if ((t > i && !n && (t = i), (this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - t : t) / this._timeScale), r._dirty || this._uncache(!1), r._timeline))
                                        for (; r._timeline; ) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), (r = r._timeline);
                                }
                                this._gc && this._enabled(!0, !1), (this._totalTime === t && 0 !== this._duration) || (D.length && Z(), this.render(t, e, !1), D.length && Z());
                            }
                            return this;
                        }),
                        (s.progress = s.totalProgress = function (t, e) {
                            var n = this.duration();
                            return arguments.length ? this.totalTime(n * t, e) : n ? this._time / n : this.ratio;
                        }),
                        (s.startTime = function (t) {
                            return arguments.length ? (t !== this._startTime && ((this._startTime = t), this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime;
                        }),
                        (s.endTime = function (t) {
                            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale;
                        }),
                        (s.timeScale = function (t) {
                            if (!arguments.length) return this._timeScale;
                            var e, n;
                            for (
                                t = t || 1e-8,
                                    this._timeline && this._timeline.smoothChildTiming && ((n = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime()), (this._startTime = n - ((n - this._startTime) * this._timeScale) / t)),
                                    this._timeScale = t,
                                    n = this.timeline;
                                n && n.timeline;

                            )
                                (n._dirty = !0), n.totalDuration(), (n = n.timeline);
                            return this;
                        }),
                        (s.reversed = function (t) {
                            return arguments.length
                                ? (t != this._reversed && ((this._reversed = t), this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this)
                                : this._reversed;
                        }),
                        (s.paused = function (t) {
                            if (!arguments.length) return this._paused;
                            var e,
                                n,
                                i = this._timeline;
                            return (
                                t != this._paused &&
                                    i &&
                                    (l || t || a.wake(),
                                    (n = (e = i.rawTime()) - this._pauseTime),
                                    !t && i.smoothChildTiming && ((this._startTime += n), this._uncache(!1)),
                                    (this._pauseTime = t ? e : null),
                                    (this._paused = t),
                                    (this._active = this.isActive()),
                                    !t && 0 !== n && this._initted && this.duration() && ((e = i.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale), this.render(e, e === this._totalTime, !0))),
                                this._gc && !t && this._enabled(!0, !1),
                                this
                            );
                        });
                    var O = w("core.SimpleTimeline", function (t) {
                        E.call(this, 0, t), (this.autoRemoveChildren = this.smoothChildTiming = !0);
                    });
                    ((s = O.prototype = new E()).constructor = O),
                        (s.kill()._gc = !1),
                        (s._first = s._last = s._recent = null),
                        (s._sortChildren = !1),
                        (s.add = s.insert = function (t, e, n, i) {
                            var r, o;
                            if (
                                ((t._startTime = Number(e || 0) + t._delay),
                                t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)),
                                t.timeline && t.timeline._remove(t, !0),
                                (t.timeline = t._timeline = this),
                                t._gc && t._enabled(!0, !0),
                                (r = this._last),
                                this._sortChildren)
                            )
                                for (o = t._startTime; r && r._startTime > o; ) r = r._prev;
                            return (
                                r ? ((t._next = r._next), (r._next = t)) : ((t._next = this._first), (this._first = t)),
                                t._next ? (t._next._prev = t) : (this._last = t),
                                (t._prev = r),
                                (this._recent = t),
                                this._timeline && this._uncache(!0),
                                this
                            );
                        }),
                        (s._remove = function (t, e) {
                            return (
                                t.timeline === this &&
                                    (e || t._enabled(!1, !0),
                                    t._prev ? (t._prev._next = t._next) : this._first === t && (this._first = t._next),
                                    t._next ? (t._next._prev = t._prev) : this._last === t && (this._last = t._prev),
                                    (t._next = t._prev = t.timeline = null),
                                    t === this._recent && (this._recent = this._last),
                                    this._timeline && this._uncache(!0)),
                                this
                            );
                        }),
                        (s.render = function (t, e, n) {
                            var i,
                                r = this._first;
                            for (this._totalTime = this._time = this._rawPrevTime = t; r; )
                                (i = r._next),
                                    (r._active || (t >= r._startTime && !r._paused && !r._gc)) &&
                                        (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, n) : r.render((t - r._startTime) * r._timeScale, e, n)),
                                    (r = i);
                        }),
                        (s.rawTime = function () {
                            return l || a.wake(), this._totalTime;
                        });
                    var I = w(
                            "TweenLite",
                            function (e, n, i) {
                                if ((E.call(this, n, i), (this.render = I.prototype.render), null == e)) throw "Cannot tween a null target.";
                                this.target = e = "string" != typeof e ? e : I.selector(e) || e;
                                var r,
                                    o,
                                    s,
                                    a = e.jquery || (e.length && e !== t && e[0] && (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))),
                                    l = this.vars.overwrite;
                                if (((this._overwrite = l = null == l ? Q[I.defaultOverwrite] : "number" == typeof l ? l >> 0 : Q[l]), (a || e instanceof Array || (e.push && m(e))) && "number" != typeof e[0]))
                                    for (this._targets = s = f(e), this._propLookup = [], this._siblings = [], r = 0; r < s.length; r++)
                                        (o = s[r])
                                            ? "string" != typeof o
                                                ? o.length && o !== t && o[0] && (o[0] === t || (o[0].nodeType && o[0].style && !o.nodeType))
                                                    ? (s.splice(r--, 1), (this._targets = s = s.concat(f(o))))
                                                    : ((this._siblings[r] = J(o, this, !1)), 1 === l && this._siblings[r].length > 1 && tt(o, this, null, 1, this._siblings[r]))
                                                : "string" == typeof (o = s[r--] = I.selector(o)) && s.splice(r + 1, 1)
                                            : s.splice(r--, 1);
                                else (this._propLookup = {}), (this._siblings = J(e, this, !1)), 1 === l && this._siblings.length > 1 && tt(e, this, null, 1, this._siblings);
                                (this.vars.immediateRender || (0 === n && 0 === this._delay && !1 !== this.vars.immediateRender)) && ((this._time = -1e-8), this.render(Math.min(0, -this._delay)));
                            },
                            !0
                        ),
                        $ = function (e) {
                            return e && e.length && e !== t && e[0] && (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType));
                        };
                    ((s = I.prototype = new E()).constructor = I),
                        (s.kill()._gc = !1),
                        (s.ratio = 0),
                        (s._firstPT = s._targets = s._overwrittenProps = s._startAt = null),
                        (s._notifyPluginsOfEnabled = s._lazy = !1),
                        (I.version = "2.1.3"),
                        (I.defaultEase = s._ease = new b(null, null, 1, 1)),
                        (I.defaultOverwrite = "auto"),
                        (I.ticker = a),
                        (I.autoSleep = 120),
                        (I.lagSmoothing = function (t, e) {
                            a.lagSmoothing(t, e);
                        }),
                        (I.selector =
                            t.$ ||
                            t.jQuery ||
                            function (e) {
                                var i = t.$ || t.jQuery;
                                return i ? ((I.selector = i), i(e)) : (n || (n = t.document), n ? (n.querySelectorAll ? n.querySelectorAll(e) : n.getElementById("#" === e.charAt(0) ? e.substr(1) : e)) : e);
                            });
                    var D = [],
                        L = {},
                        N = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        R = /[\+-]=-?[\.\d]/,
                        j = function (t) {
                            for (var e, n = this._firstPT; n; )
                                (e = n.blob ? (1 === t && null != this.end ? this.end : t ? this.join("") : this.start) : n.c * t + n.s),
                                    n.m ? (e = n.m.call(this._tween, e, this._target || n.t, this._tween)) : e < 1e-6 && e > -1e-6 && !n.blob && (e = 0),
                                    n.f ? (n.fp ? n.t[n.p](n.fp, e) : n.t[n.p](e)) : (n.t[n.p] = e),
                                    (n = n._next);
                        },
                        F = function (t) {
                            return ((1e3 * t) | 0) / 1e3 + "";
                        },
                        z = function (t, e, n, i) {
                            var r,
                                o,
                                s,
                                a,
                                l,
                                u,
                                c,
                                h = [],
                                p = 0,
                                f = "",
                                d = 0;
                            for (
                                h.start = t,
                                    h.end = e,
                                    t = h[0] = t + "",
                                    e = h[1] = e + "",
                                    n && (n(h), (t = h[0]), (e = h[1])),
                                    h.length = 0,
                                    r = t.match(N) || [],
                                    o = e.match(N) || [],
                                    i && ((i._next = null), (i.blob = 1), (h._firstPT = h._applyPT = i)),
                                    l = o.length,
                                    a = 0;
                                a < l;
                                a++
                            )
                                (c = o[a]),
                                    (f += (u = e.substr(p, e.indexOf(c, p) - p)) || !a ? u : ","),
                                    (p += u.length),
                                    d ? (d = (d + 1) % 5) : "rgba(" === u.substr(-5) && (d = 1),
                                    c === r[a] || r.length <= a
                                        ? (f += c)
                                        : (f && (h.push(f), (f = "")),
                                          (s = parseFloat(r[a])),
                                          h.push(s),
                                          (h._firstPT = {
                                              _next: h._firstPT,
                                              t: h,
                                              p: h.length - 1,
                                              s: s,
                                              c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - s) || 0,
                                              f: 0,
                                              m: d && d < 4 ? Math.round : F,
                                          })),
                                    (p += c.length);
                            return (f += e.substr(p)) && h.push(f), (h.setRatio = j), R.test(e) && (h.end = null), h;
                        },
                        H = function (t, e, n, i, r, o, s, a, l) {
                            "function" == typeof i && (i = i(l || 0, t));
                            var u = typeof t[e],
                                c = "function" !== u ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                                h = "get" !== n ? n : c ? (s ? t[c](s) : t[c]()) : t[e],
                                p = "string" == typeof i && "=" === i.charAt(1),
                                f = {
                                    t: t,
                                    p: e,
                                    s: h,
                                    f: "function" === u,
                                    pg: 0,
                                    n: r || e,
                                    m: o ? ("function" == typeof o ? o : Math.round) : 0,
                                    pr: 0,
                                    c: p ? parseInt(i.charAt(0) + "1", 10) * parseFloat(i.substr(2)) : parseFloat(i) - h || 0,
                                };
                            if (
                                (("number" != typeof h || ("number" != typeof i && !p)) &&
                                    (s || isNaN(h) || (!p && isNaN(i)) || "boolean" == typeof h || "boolean" == typeof i
                                        ? ((f.fp = s), (f = { t: z(h, p ? parseFloat(f.s) + f.c + (f.s + "").replace(/[0-9\-\.]/g, "") : i, a || I.defaultStringFilter, f), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: r || e, pr: 0, m: 0 }))
                                        : ((f.s = parseFloat(h)), p || (f.c = parseFloat(i) - f.s || 0))),
                                f.c)
                            )
                                return (f._next = this._firstPT) && (f._next._prev = f), (this._firstPT = f), f;
                        },
                        B = (I._internals = { isArray: m, isSelector: $, lazyTweens: D, blobDif: z }),
                        W = (I._plugins = {}),
                        q = (B.tweenLookup = {}),
                        V = 0,
                        Y = (B.reservedProps = {
                            ease: 1,
                            delay: 1,
                            overwrite: 1,
                            onComplete: 1,
                            onCompleteParams: 1,
                            onCompleteScope: 1,
                            useFrames: 1,
                            runBackwards: 1,
                            startAt: 1,
                            onUpdate: 1,
                            onUpdateParams: 1,
                            onUpdateScope: 1,
                            onStart: 1,
                            onStartParams: 1,
                            onStartScope: 1,
                            onReverseComplete: 1,
                            onReverseCompleteParams: 1,
                            onReverseCompleteScope: 1,
                            onRepeat: 1,
                            onRepeatParams: 1,
                            onRepeatScope: 1,
                            easeParams: 1,
                            yoyo: 1,
                            immediateRender: 1,
                            repeat: 1,
                            repeatDelay: 1,
                            data: 1,
                            paused: 1,
                            reversed: 1,
                            autoCSS: 1,
                            lazy: 1,
                            onOverwrite: 1,
                            callbackScope: 1,
                            stringFilter: 1,
                            id: 1,
                            yoyoEase: 1,
                            stagger: 1,
                        }),
                        Q = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
                        X = (E._rootFramesTimeline = new O()),
                        G = (E._rootTimeline = new O()),
                        U = 30,
                        Z = (B.lazyRender = function () {
                            var t,
                                e,
                                n = D.length;
                            for (L = {}, t = 0; t < n; t++) (e = D[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), (e._lazy = !1));
                            D.length = 0;
                        });
                    (G._startTime = a.time),
                        (X._startTime = a.frame),
                        (G._active = X._active = !0),
                        setTimeout(Z, 1),
                        (E._updateRoot = I.render = function () {
                            var t, e, n;
                            if ((D.length && Z(), G.render((a.time - G._startTime) * G._timeScale, !1, !1), X.render((a.frame - X._startTime) * X._timeScale, !1, !1), D.length && Z(), a.frame >= U)) {
                                for (n in ((U = a.frame + (parseInt(I.autoSleep, 10) || 120)), q)) {
                                    for (t = (e = q[n].tweens).length; --t > -1; ) e[t]._gc && e.splice(t, 1);
                                    0 === e.length && delete q[n];
                                }
                                if ((!(n = G._first) || n._paused) && I.autoSleep && !X._first && 1 === a._listeners.tick.length) {
                                    for (; n && n._paused; ) n = n._next;
                                    n || a.sleep();
                                }
                            }
                        }),
                        a.addEventListener("tick", E._updateRoot);
                    var J = function (t, e, n) {
                            var i,
                                r,
                                o = t._gsTweenID;
                            if ((q[o || (t._gsTweenID = o = "t" + V++)] || (q[o] = { target: t, tweens: [] }), e && (((i = q[o].tweens)[(r = i.length)] = e), n))) for (; --r > -1; ) i[r] === e && i.splice(r, 1);
                            return q[o].tweens;
                        },
                        K = function (t, e, n, i) {
                            var r,
                                o,
                                s = t.vars.onOverwrite;
                            return s && (r = s(t, e, n, i)), (s = I.onOverwrite) && (o = s(t, e, n, i)), !1 !== r && !1 !== o;
                        },
                        tt = function (t, e, n, i, r) {
                            var o, s, a, l;
                            if (1 === i || i >= 4) {
                                for (l = r.length, o = 0; o < l; o++)
                                    if ((a = r[o]) !== e) a._gc || (a._kill(null, t, e) && (s = !0));
                                    else if (5 === i) break;
                                return s;
                            }
                            var u,
                                c = e._startTime + 1e-8,
                                h = [],
                                p = 0,
                                f = 0 === e._duration;
                            for (o = r.length; --o > -1; )
                                (a = r[o]) === e ||
                                    a._gc ||
                                    a._paused ||
                                    (a._timeline !== e._timeline
                                        ? ((u = u || et(e, 0, f)), 0 === et(a, u, f) && (h[p++] = a))
                                        : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && (((f || !a._initted) && c - a._startTime <= 2e-8) || (h[p++] = a)));
                            for (o = p; --o > -1; )
                                if (((l = (a = h[o])._firstPT), 2 === i && a._kill(n, t, e) && (s = !0), 2 !== i || (!a._firstPT && a._initted && l))) {
                                    if (2 !== i && !K(a, e)) continue;
                                    a._enabled(!1, !1) && (s = !0);
                                }
                            return s;
                        },
                        et = function (t, e, n) {
                            for (var i = t._timeline, r = i._timeScale, o = t._startTime; i._timeline; ) {
                                if (((o += i._startTime), (r *= i._timeScale), i._paused)) return -100;
                                i = i._timeline;
                            }
                            return (o /= r) > e ? o - e : (n && o === e) || (!t._initted && o - e < 2e-8) ? 1e-8 : (o += t.totalDuration() / t._timeScale / r) > e + 1e-8 ? 0 : o - e - 1e-8;
                        };
                    (s._init = function () {
                        var t,
                            e,
                            n,
                            i,
                            r,
                            o,
                            s = this.vars,
                            a = this._overwrittenProps,
                            l = this._duration,
                            u = !!s.immediateRender,
                            c = s.ease,
                            h = this._startAt;
                        if (s.startAt) {
                            for (i in (h && (h.render(-1, !0), h.kill()), (r = {}), s.startAt)) r[i] = s.startAt[i];
                            if (
                                ((r.data = "isStart"),
                                (r.overwrite = !1),
                                (r.immediateRender = !0),
                                (r.lazy = u && !1 !== s.lazy),
                                (r.startAt = r.delay = null),
                                (r.onUpdate = s.onUpdate),
                                (r.onUpdateParams = s.onUpdateParams),
                                (r.onUpdateScope = s.onUpdateScope || s.callbackScope || this),
                                (this._startAt = I.to(this.target || {}, 0, r)),
                                u)
                            )
                                if (this._time > 0) this._startAt = null;
                                else if (0 !== l) return;
                        } else if (s.runBackwards && 0 !== l)
                            if (h) h.render(-1, !0), h.kill(), (this._startAt = null);
                            else {
                                for (i in (0 !== this._time && (u = !1), (n = {}), s)) (Y[i] && "autoCSS" !== i) || (n[i] = s[i]);
                                if (((n.overwrite = 0), (n.data = "isFromStart"), (n.lazy = u && !1 !== s.lazy), (n.immediateRender = u), (this._startAt = I.to(this.target, 0, n)), u)) {
                                    if (0 === this._time) return;
                                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
                            }
                        if (
                            ((this._ease = c = c ? (c instanceof b ? c : "function" == typeof c ? new b(c, s.easeParams) : x[c] || I.defaultEase) : I.defaultEase),
                            s.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, s.easeParams)),
                            (this._easeType = this._ease._type),
                            (this._easePower = this._ease._power),
                            (this._firstPT = null),
                            this._targets)
                        )
                            for (o = this._targets.length, t = 0; t < o; t++) this._initProps(this._targets[t], (this._propLookup[t] = {}), this._siblings[t], a ? a[t] : null, t) && (e = !0);
                        else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                        if ((e && I._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || ("function" != typeof this.target && this._enabled(!1, !1))), s.runBackwards))
                            for (n = this._firstPT; n; ) (n.s += n.c), (n.c = -n.c), (n = n._next);
                        (this._onUpdate = s.onUpdate), (this._initted = !0);
                    }),
                        (s._initProps = function (e, n, i, r, o) {
                            var s, a, l, u, c, h;
                            if (null == e) return !1;
                            for (s in (L[e._gsTweenID] && Z(),
                            this.vars.css ||
                                (e.style &&
                                    e !== t &&
                                    e.nodeType &&
                                    W.css &&
                                    !1 !== this.vars.autoCSS &&
                                    (function (t, e) {
                                        var n,
                                            i = {};
                                        for (n in t)
                                            Y[n] ||
                                                (n in e && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n) ||
                                                !(!W[n] || (W[n] && W[n]._autoCSS)) ||
                                                ((i[n] = t[n]), delete t[n]);
                                        t.css = i;
                                    })(this.vars, e)),
                            this.vars))
                                if (((h = this.vars[s]), Y[s])) h && (h instanceof Array || (h.push && m(h))) && -1 !== h.join("").indexOf("{self}") && (this.vars[s] = h = this._swapSelfInParams(h, this));
                                else if (W[s] && (u = new W[s]())._onInitTween(e, this.vars[s], this, o)) {
                                    for (this._firstPT = c = { _next: this._firstPT, t: u, p: "setRatio", s: 0, c: 1, f: 1, n: s, pg: 1, pr: u._priority, m: 0 }, a = u._overwriteProps.length; --a > -1; )
                                        n[u._overwriteProps[a]] = this._firstPT;
                                    (u._priority || u._onInitAllProps) && (l = !0), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c);
                                } else n[s] = H.call(this, e, s, "get", h, s, 0, null, this.vars.stringFilter, o);
                            return r && this._kill(r, e)
                                ? this._initProps(e, n, i, r, o)
                                : this._overwrite > 1 && this._firstPT && i.length > 1 && tt(e, this, n, this._overwrite, i)
                                ? (this._kill(n, e), this._initProps(e, n, i, r, o))
                                : (this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)) && (L[e._gsTweenID] = !0), l);
                        }),
                        (s.render = function (t, e, n) {
                            var i,
                                r,
                                o,
                                s,
                                a = this._time,
                                l = this._duration,
                                u = this._rawPrevTime;
                            if (t >= l - 1e-8 && t >= 0)
                                (this._totalTime = this._time = l),
                                    (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                                    this._reversed || ((i = !0), (r = "onComplete"), (n = n || this._timeline.autoRemoveChildren)),
                                    0 === l &&
                                        (this._initted || !this.vars.lazy || n) &&
                                        (this._startTime === this._timeline._duration && (t = 0),
                                        (u < 0 || (t <= 0 && t >= -1e-8) || (1e-8 === u && "isPause" !== this.data)) && u !== t && ((n = !0), u > 1e-8 && (r = "onReverseComplete")),
                                        (this._rawPrevTime = s = !e || t || u === t ? t : 1e-8));
                            else if (t < 1e-8)
                                (this._totalTime = this._time = 0),
                                    (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                                    (0 !== a || (0 === l && u > 0)) && ((r = "onReverseComplete"), (i = this._reversed)),
                                    t > -1e-8
                                        ? (t = 0)
                                        : t < 0 &&
                                          ((this._active = !1), 0 === l && (this._initted || !this.vars.lazy || n) && (u >= 0 && (1e-8 !== u || "isPause" !== this.data) && (n = !0), (this._rawPrevTime = s = !e || t || u === t ? t : 1e-8))),
                                    (!this._initted || (this._startAt && this._startAt.progress())) && (n = !0);
                            else if (((this._totalTime = this._time = t), this._easeType)) {
                                var c = t / l,
                                    h = this._easeType,
                                    p = this._easePower;
                                (1 === h || (3 === h && c >= 0.5)) && (c = 1 - c),
                                    3 === h && (c *= 2),
                                    1 === p ? (c *= c) : 2 === p ? (c *= c * c) : 3 === p ? (c *= c * c * c) : 4 === p && (c *= c * c * c * c),
                                    (this.ratio = 1 === h ? 1 - c : 2 === h ? c : t / l < 0.5 ? c / 2 : 1 - c / 2);
                            } else this.ratio = this._ease.getRatio(t / l);
                            if (this._time !== a || n) {
                                if (!this._initted) {
                                    if ((this._init(), !this._initted || this._gc)) return;
                                    if (!n && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)))
                                        return (this._time = this._totalTime = a), (this._rawPrevTime = u), D.push(this), void (this._lazy = [t, e]);
                                    this._time && !i ? (this.ratio = this._ease.getRatio(this._time / l)) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                                }
                                for (
                                    !1 !== this._lazy && (this._lazy = !1),
                                        this._active || (!this._paused && this._time !== a && t >= 0 && (this._active = !0)),
                                        0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, n) : r || (r = "_dummyGS")), this.vars.onStart && ((0 === this._time && 0 !== l) || e || this._callback("onStart"))),
                                        o = this._firstPT;
                                    o;

                                )
                                    o.f ? o.t[o.p](o.c * this.ratio + o.s) : (o.t[o.p] = o.c * this.ratio + o.s), (o = o._next);
                                this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, n), e || ((this._time !== a || i || n) && this._callback("onUpdate"))),
                                    r &&
                                        ((this._gc && !n) ||
                                            (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, n),
                                            i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                                            !e && this.vars[r] && this._callback(r),
                                            0 === l && 1e-8 === this._rawPrevTime && 1e-8 !== s && (this._rawPrevTime = 0)));
                            }
                        }),
                        (s._kill = function (t, e, n) {
                            if (("all" === t && (t = null), null == t && (null == e || e === this.target))) return (this._lazy = !1), this._enabled(!1, !1);
                            e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e;
                            var i,
                                r,
                                o,
                                s,
                                a,
                                l,
                                u,
                                c,
                                h,
                                p = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline,
                                f = this._firstPT;
                            if ((m(e) || $(e)) && "number" != typeof e[0]) for (i = e.length; --i > -1; ) this._kill(t, e[i], n) && (l = !0);
                            else {
                                if (this._targets) {
                                    for (i = this._targets.length; --i > -1; )
                                        if (e === this._targets[i]) {
                                            (a = this._propLookup[i] || {}), (this._overwrittenProps = this._overwrittenProps || []), (r = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all");
                                            break;
                                        }
                                } else {
                                    if (e !== this.target) return !1;
                                    (a = this._propLookup), (r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all");
                                }
                                if (a) {
                                    if (((u = t || a), (c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill)), n && (I.onOverwrite || this.vars.onOverwrite))) {
                                        for (o in u) a[o] && (h || (h = []), h.push(o));
                                        if ((h || !t) && !K(this, n, e, h)) return !1;
                                    }
                                    for (o in u)
                                        (s = a[o]) &&
                                            (p && (s.f ? s.t[s.p](s.s) : (s.t[s.p] = s.s), (l = !0)),
                                            s.pg && s.t._kill(u) && (l = !0),
                                            (s.pg && 0 !== s.t._overwriteProps.length) ||
                                                (s._prev ? (s._prev._next = s._next) : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), (s._next = s._prev = null)),
                                            delete a[o]),
                                            c && (r[o] = 1);
                                    !this._firstPT && this._initted && f && this._enabled(!1, !1);
                                }
                            }
                            return l;
                        }),
                        (s.invalidate = function () {
                            this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this);
                            var t = this._time;
                            return (
                                (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
                                (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
                                (this._propLookup = this._targets ? {} : []),
                                E.prototype.invalidate.call(this),
                                this.vars.immediateRender && ((this._time = -1e-8), this.render(t, !1, !1 !== this.vars.lazy)),
                                this
                            );
                        }),
                        (s._enabled = function (t, e) {
                            if ((l || a.wake(), t && this._gc)) {
                                var n,
                                    i = this._targets;
                                if (i) for (n = i.length; --n > -1; ) this._siblings[n] = J(i[n], this, !0);
                                else this._siblings = J(this.target, this, !0);
                            }
                            return E.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && I._onPluginEvent(t ? "_onEnable" : "_onDisable", this);
                        }),
                        (I.to = function (t, e, n) {
                            return new I(t, e, n);
                        }),
                        (I.from = function (t, e, n) {
                            return (n.runBackwards = !0), (n.immediateRender = 0 != n.immediateRender), new I(t, e, n);
                        }),
                        (I.fromTo = function (t, e, n, i) {
                            return (i.startAt = n), (i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender), new I(t, e, i);
                        }),
                        (I.delayedCall = function (t, e, n, i, r) {
                            return new I(e, 0, { delay: t, onComplete: e, onCompleteParams: n, callbackScope: i, onReverseComplete: e, onReverseCompleteParams: n, immediateRender: !1, lazy: !1, useFrames: r, overwrite: 0 });
                        }),
                        (I.set = function (t, e) {
                            return new I(t, 0, e);
                        }),
                        (I.getTweensOf = function (t, e) {
                            if (null == t) return [];
                            var n, i, r, o;
                            if (((t = "string" != typeof t ? t : I.selector(t) || t), (m(t) || $(t)) && "number" != typeof t[0])) {
                                for (n = t.length, i = []; --n > -1; ) i = i.concat(I.getTweensOf(t[n], e));
                                for (n = i.length; --n > -1; ) for (o = i[n], r = n; --r > -1; ) o === i[r] && i.splice(n, 1);
                            } else if (t._gsTweenID) for (n = (i = J(t).concat()).length; --n > -1; ) (i[n]._gc || (e && !i[n].isActive())) && i.splice(n, 1);
                            return i || [];
                        }),
                        (I.killTweensOf = I.killDelayedCallsTo = function (t, e, n) {
                            "object" == typeof e && ((n = e), (e = !1));
                            for (var i = I.getTweensOf(t, e), r = i.length; --r > -1; ) i[r]._kill(n, t);
                        });
                    var nt = w(
                        "plugins.TweenPlugin",
                        function (t, e) {
                            (this._overwriteProps = (t || "").split(",")), (this._propName = this._overwriteProps[0]), (this._priority = e || 0), (this._super = nt.prototype);
                        },
                        !0
                    );
                    if (
                        ((s = nt.prototype),
                        (nt.version = "1.19.0"),
                        (nt.API = 2),
                        (s._firstPT = null),
                        (s._addTween = H),
                        (s.setRatio = j),
                        (s._kill = function (t) {
                            var e,
                                n = this._overwriteProps,
                                i = this._firstPT;
                            if (null != t[this._propName]) this._overwriteProps = [];
                            else for (e = n.length; --e > -1; ) null != t[n[e]] && n.splice(e, 1);
                            for (; i; ) null != t[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? ((i._prev._next = i._next), (i._prev = null)) : this._firstPT === i && (this._firstPT = i._next)), (i = i._next);
                            return !1;
                        }),
                        (s._mod = s._roundProps = function (t) {
                            for (var e, n = this._firstPT; n; )
                                (e = t[this._propName] || (null != n.n && t[n.n.split(this._propName + "_").join("")])) && "function" == typeof e && (2 === n.f ? (n.t._applyPT.m = e) : (n.m = e)), (n = n._next);
                        }),
                        (I._onPluginEvent = function (t, e) {
                            var n,
                                i,
                                r,
                                o,
                                s,
                                a = e._firstPT;
                            if ("_onInitAllProps" === t) {
                                for (; a; ) {
                                    for (s = a._next, i = r; i && i.pr > a.pr; ) i = i._next;
                                    (a._prev = i ? i._prev : o) ? (a._prev._next = a) : (r = a), (a._next = i) ? (i._prev = a) : (o = a), (a = s);
                                }
                                a = e._firstPT = r;
                            }
                            for (; a; ) a.pg && "function" == typeof a.t[t] && a.t[t]() && (n = !0), (a = a._next);
                            return n;
                        }),
                        (nt.activate = function (t) {
                            for (var e = t.length; --e > -1; ) t[e].API === nt.API && (W[new t[e]()._propName] = t[e]);
                            return !0;
                        }),
                        (y.plugin = function (t) {
                            if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                            var e,
                                n = t.propName,
                                i = t.priority || 0,
                                r = t.overwriteProps,
                                o = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                                s = w(
                                    "plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin",
                                    function () {
                                        nt.call(this, n, i), (this._overwriteProps = r || []);
                                    },
                                    !0 === t.global
                                ),
                                a = (s.prototype = new nt(n));
                            for (e in ((a.constructor = s), (s.API = t.API), o)) "function" == typeof t[e] && (a[o[e]] = t[e]);
                            return (s.version = t.version), nt.activate([s]), s;
                        }),
                        (r = t._gsQueue))
                    ) {
                        for (o = 0; o < r.length; o++) r[o]();
                        for (s in v) v[s].func || t.console.log("GSAP encountered missing dependency: " + s);
                    }
                    return (l = !1), I;
                })(r),
                s = r.GreenSockGlobals,
                a = s.com.greensock,
                l = a.core.SimpleTimeline,
                u = a.core.Animation,
                c = s.Ease,
                h = s.Linear,
                p = h,
                f = s.Power1,
                d = s.Power2,
                m = s.Power3,
                v = s.Power4,
                g = s.TweenPlugin;
            a.events.EventDispatcher;
        }.call(this, n(22)(t), n(4)));
    },
    function (t, e, n) {
        (function (t, n) {
            var i;
            !(function () {
                var r = ("object" == typeof self && self.self === self && self) || ("object" == typeof t && t.global === t && t) || this || {},
                    o = r._,
                    s = Array.prototype,
                    a = Object.prototype,
                    l = "undefined" != typeof Symbol ? Symbol.prototype : null,
                    u = s.push,
                    c = s.slice,
                    h = a.toString,
                    p = a.hasOwnProperty,
                    f = Array.isArray,
                    d = Object.keys,
                    m = Object.create,
                    v = function () {},
                    g = function (t) {
                        return t instanceof g ? t : this instanceof g ? void (this._wrapped = t) : new g(t);
                    };
                e.nodeType ? (r._ = g) : (!n.nodeType && n.exports && (e = n.exports = g), (e._ = g)), (g.VERSION = "1.9.2");
                var y,
                    w = function (t, e, n) {
                        if (void 0 === e) return t;
                        switch (null == n ? 3 : n) {
                            case 1:
                                return function (n) {
                                    return t.call(e, n);
                                };
                            case 3:
                                return function (n, i, r) {
                                    return t.call(e, n, i, r);
                                };
                            case 4:
                                return function (n, i, r, o) {
                                    return t.call(e, n, i, r, o);
                                };
                        }
                        return function () {
                            return t.apply(e, arguments);
                        };
                    },
                    A = function (t, e, n) {
                        return g.iteratee !== y ? g.iteratee(t, e) : null == t ? g.identity : g.isFunction(t) ? w(t, e, n) : g.isObject(t) && !g.isArray(t) ? g.matcher(t) : g.property(t);
                    };
                g.iteratee = y = function (t, e) {
                    return A(t, e, 1 / 0);
                };
                var b = function (t, e) {
                        return (
                            (e = null == e ? t.length - 1 : +e),
                            function () {
                                for (var n = Math.max(arguments.length - e, 0), i = Array(n), r = 0; r < n; r++) i[r] = arguments[r + e];
                                switch (e) {
                                    case 0:
                                        return t.call(this, i);
                                    case 1:
                                        return t.call(this, arguments[0], i);
                                    case 2:
                                        return t.call(this, arguments[0], arguments[1], i);
                                }
                                var o = Array(e + 1);
                                for (r = 0; r < e; r++) o[r] = arguments[r];
                                return (o[e] = i), t.apply(this, o);
                            }
                        );
                    },
                    x = function (t) {
                        if (!g.isObject(t)) return {};
                        if (m) return m(t);
                        v.prototype = t;
                        var e = new v();
                        return (v.prototype = null), e;
                    },
                    _ = function (t) {
                        return function (e) {
                            return null == e ? void 0 : e[t];
                        };
                    },
                    T = function (t, e) {
                        return null != t && p.call(t, e);
                    },
                    C = function (t, e) {
                        for (var n = e.length, i = 0; i < n; i++) {
                            if (null == t) return;
                            t = t[e[i]];
                        }
                        return n ? t : void 0;
                    },
                    S = Math.pow(2, 53) - 1,
                    P = _("length"),
                    k = function (t) {
                        var e = P(t);
                        return "number" == typeof e && e >= 0 && e <= S;
                    };
                (g.each = g.forEach = function (t, e, n) {
                    var i, r;
                    if (((e = w(e, n)), k(t))) for (i = 0, r = t.length; i < r; i++) e(t[i], i, t);
                    else {
                        var o = g.keys(t);
                        for (i = 0, r = o.length; i < r; i++) e(t[o[i]], o[i], t);
                    }
                    return t;
                }),
                    (g.map = g.collect = function (t, e, n) {
                        e = A(e, n);
                        for (var i = !k(t) && g.keys(t), r = (i || t).length, o = Array(r), s = 0; s < r; s++) {
                            var a = i ? i[s] : s;
                            o[s] = e(t[a], a, t);
                        }
                        return o;
                    });
                var E = function (t) {
                    var e = function (e, n, i, r) {
                        var o = !k(e) && g.keys(e),
                            s = (o || e).length,
                            a = t > 0 ? 0 : s - 1;
                        for (r || ((i = e[o ? o[a] : a]), (a += t)); a >= 0 && a < s; a += t) {
                            var l = o ? o[a] : a;
                            i = n(i, e[l], l, e);
                        }
                        return i;
                    };
                    return function (t, n, i, r) {
                        var o = arguments.length >= 3;
                        return e(t, w(n, r, 4), i, o);
                    };
                };
                (g.reduce = g.foldl = g.inject = E(1)),
                    (g.reduceRight = g.foldr = E(-1)),
                    (g.find = g.detect = function (t, e, n) {
                        var i = (k(t) ? g.findIndex : g.findKey)(t, e, n);
                        if (void 0 !== i && -1 !== i) return t[i];
                    }),
                    (g.filter = g.select = function (t, e, n) {
                        var i = [];
                        return (
                            (e = A(e, n)),
                            g.each(t, function (t, n, r) {
                                e(t, n, r) && i.push(t);
                            }),
                            i
                        );
                    }),
                    (g.reject = function (t, e, n) {
                        return g.filter(t, g.negate(A(e)), n);
                    }),
                    (g.every = g.all = function (t, e, n) {
                        e = A(e, n);
                        for (var i = !k(t) && g.keys(t), r = (i || t).length, o = 0; o < r; o++) {
                            var s = i ? i[o] : o;
                            if (!e(t[s], s, t)) return !1;
                        }
                        return !0;
                    }),
                    (g.some = g.any = function (t, e, n) {
                        e = A(e, n);
                        for (var i = !k(t) && g.keys(t), r = (i || t).length, o = 0; o < r; o++) {
                            var s = i ? i[o] : o;
                            if (e(t[s], s, t)) return !0;
                        }
                        return !1;
                    }),
                    (g.contains = g.includes = g.include = function (t, e, n, i) {
                        return k(t) || (t = g.values(t)), ("number" != typeof n || i) && (n = 0), g.indexOf(t, e, n) >= 0;
                    }),
                    (g.invoke = b(function (t, e, n) {
                        var i, r;
                        return (
                            g.isFunction(e) ? (r = e) : g.isArray(e) && ((i = e.slice(0, -1)), (e = e[e.length - 1])),
                            g.map(t, function (t) {
                                var o = r;
                                if (!o) {
                                    if ((i && i.length && (t = C(t, i)), null == t)) return;
                                    o = t[e];
                                }
                                return null == o ? o : o.apply(t, n);
                            })
                        );
                    })),
                    (g.pluck = function (t, e) {
                        return g.map(t, g.property(e));
                    }),
                    (g.where = function (t, e) {
                        return g.filter(t, g.matcher(e));
                    }),
                    (g.findWhere = function (t, e) {
                        return g.find(t, g.matcher(e));
                    }),
                    (g.max = function (t, e, n) {
                        var i,
                            r,
                            o = -1 / 0,
                            s = -1 / 0;
                        if (null == e || ("number" == typeof e && "object" != typeof t[0] && null != t)) for (var a = 0, l = (t = k(t) ? t : g.values(t)).length; a < l; a++) null != (i = t[a]) && i > o && (o = i);
                        else
                            (e = A(e, n)),
                                g.each(t, function (t, n, i) {
                                    ((r = e(t, n, i)) > s || (r === -1 / 0 && o === -1 / 0)) && ((o = t), (s = r));
                                });
                        return o;
                    }),
                    (g.min = function (t, e, n) {
                        var i,
                            r,
                            o = 1 / 0,
                            s = 1 / 0;
                        if (null == e || ("number" == typeof e && "object" != typeof t[0] && null != t)) for (var a = 0, l = (t = k(t) ? t : g.values(t)).length; a < l; a++) null != (i = t[a]) && i < o && (o = i);
                        else
                            (e = A(e, n)),
                                g.each(t, function (t, n, i) {
                                    ((r = e(t, n, i)) < s || (r === 1 / 0 && o === 1 / 0)) && ((o = t), (s = r));
                                });
                        return o;
                    }),
                    (g.shuffle = function (t) {
                        return g.sample(t, 1 / 0);
                    }),
                    (g.sample = function (t, e, n) {
                        if (null == e || n) return k(t) || (t = g.values(t)), t[g.random(t.length - 1)];
                        var i = k(t) ? g.clone(t) : g.values(t),
                            r = P(i);
                        e = Math.max(Math.min(e, r), 0);
                        for (var o = r - 1, s = 0; s < e; s++) {
                            var a = g.random(s, o),
                                l = i[s];
                            (i[s] = i[a]), (i[a] = l);
                        }
                        return i.slice(0, e);
                    }),
                    (g.sortBy = function (t, e, n) {
                        var i = 0;
                        return (
                            (e = A(e, n)),
                            g.pluck(
                                g
                                    .map(t, function (t, n, r) {
                                        return { value: t, index: i++, criteria: e(t, n, r) };
                                    })
                                    .sort(function (t, e) {
                                        var n = t.criteria,
                                            i = e.criteria;
                                        if (n !== i) {
                                            if (n > i || void 0 === n) return 1;
                                            if (n < i || void 0 === i) return -1;
                                        }
                                        return t.index - e.index;
                                    }),
                                "value"
                            )
                        );
                    });
                var M = function (t, e) {
                    return function (n, i, r) {
                        var o = e ? [[], []] : {};
                        return (
                            (i = A(i, r)),
                            g.each(n, function (e, r) {
                                var s = i(e, r, n);
                                t(o, e, s);
                            }),
                            o
                        );
                    };
                };
                (g.groupBy = M(function (t, e, n) {
                    T(t, n) ? t[n].push(e) : (t[n] = [e]);
                })),
                    (g.indexBy = M(function (t, e, n) {
                        t[n] = e;
                    })),
                    (g.countBy = M(function (t, e, n) {
                        T(t, n) ? t[n]++ : (t[n] = 1);
                    }));
                var O = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
                (g.toArray = function (t) {
                    return t ? (g.isArray(t) ? c.call(t) : g.isString(t) ? t.match(O) : k(t) ? g.map(t, g.identity) : g.values(t)) : [];
                }),
                    (g.size = function (t) {
                        return null == t ? 0 : k(t) ? t.length : g.keys(t).length;
                    }),
                    (g.partition = M(function (t, e, n) {
                        t[n ? 0 : 1].push(e);
                    }, !0)),
                    (g.first = g.head = g.take = function (t, e, n) {
                        return null == t || t.length < 1 ? (null == e ? void 0 : []) : null == e || n ? t[0] : g.initial(t, t.length - e);
                    }),
                    (g.initial = function (t, e, n) {
                        return c.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)));
                    }),
                    (g.last = function (t, e, n) {
                        return null == t || t.length < 1 ? (null == e ? void 0 : []) : null == e || n ? t[t.length - 1] : g.rest(t, Math.max(0, t.length - e));
                    }),
                    (g.rest = g.tail = g.drop = function (t, e, n) {
                        return c.call(t, null == e || n ? 1 : e);
                    }),
                    (g.compact = function (t) {
                        return g.filter(t, Boolean);
                    });
                var I = function (t, e, n, i) {
                    for (var r = (i = i || []).length, o = 0, s = P(t); o < s; o++) {
                        var a = t[o];
                        if (k(a) && (g.isArray(a) || g.isArguments(a)))
                            if (e) for (var l = 0, u = a.length; l < u; ) i[r++] = a[l++];
                            else I(a, e, n, i), (r = i.length);
                        else n || (i[r++] = a);
                    }
                    return i;
                };
                (g.flatten = function (t, e) {
                    return I(t, e, !1);
                }),
                    (g.without = b(function (t, e) {
                        return g.difference(t, e);
                    })),
                    (g.uniq = g.unique = function (t, e, n, i) {
                        g.isBoolean(e) || ((i = n), (n = e), (e = !1)), null != n && (n = A(n, i));
                        for (var r = [], o = [], s = 0, a = P(t); s < a; s++) {
                            var l = t[s],
                                u = n ? n(l, s, t) : l;
                            e && !n ? ((s && o === u) || r.push(l), (o = u)) : n ? g.contains(o, u) || (o.push(u), r.push(l)) : g.contains(r, l) || r.push(l);
                        }
                        return r;
                    }),
                    (g.union = b(function (t) {
                        return g.uniq(I(t, !0, !0));
                    })),
                    (g.intersection = function (t) {
                        for (var e = [], n = arguments.length, i = 0, r = P(t); i < r; i++) {
                            var o = t[i];
                            if (!g.contains(e, o)) {
                                var s;
                                for (s = 1; s < n && g.contains(arguments[s], o); s++);
                                s === n && e.push(o);
                            }
                        }
                        return e;
                    }),
                    (g.difference = b(function (t, e) {
                        return (
                            (e = I(e, !0, !0)),
                            g.filter(t, function (t) {
                                return !g.contains(e, t);
                            })
                        );
                    })),
                    (g.unzip = function (t) {
                        for (var e = (t && g.max(t, P).length) || 0, n = Array(e), i = 0; i < e; i++) n[i] = g.pluck(t, i);
                        return n;
                    }),
                    (g.zip = b(g.unzip)),
                    (g.object = function (t, e) {
                        for (var n = {}, i = 0, r = P(t); i < r; i++) e ? (n[t[i]] = e[i]) : (n[t[i][0]] = t[i][1]);
                        return n;
                    });
                var $ = function (t) {
                    return function (e, n, i) {
                        n = A(n, i);
                        for (var r = P(e), o = t > 0 ? 0 : r - 1; o >= 0 && o < r; o += t) if (n(e[o], o, e)) return o;
                        return -1;
                    };
                };
                (g.findIndex = $(1)),
                    (g.findLastIndex = $(-1)),
                    (g.sortedIndex = function (t, e, n, i) {
                        for (var r = (n = A(n, i, 1))(e), o = 0, s = P(t); o < s; ) {
                            var a = Math.floor((o + s) / 2);
                            n(t[a]) < r ? (o = a + 1) : (s = a);
                        }
                        return o;
                    });
                var D = function (t, e, n) {
                    return function (i, r, o) {
                        var s = 0,
                            a = P(i);
                        if ("number" == typeof o) t > 0 ? (s = o >= 0 ? o : Math.max(o + a, s)) : (a = o >= 0 ? Math.min(o + 1, a) : o + a + 1);
                        else if (n && o && a) return i[(o = n(i, r))] === r ? o : -1;
                        if (r != r) return (o = e(c.call(i, s, a), g.isNaN)) >= 0 ? o + s : -1;
                        for (o = t > 0 ? s : a - 1; o >= 0 && o < a; o += t) if (i[o] === r) return o;
                        return -1;
                    };
                };
                (g.indexOf = D(1, g.findIndex, g.sortedIndex)),
                    (g.lastIndexOf = D(-1, g.findLastIndex)),
                    (g.range = function (t, e, n) {
                        null == e && ((e = t || 0), (t = 0)), n || (n = e < t ? -1 : 1);
                        for (var i = Math.max(Math.ceil((e - t) / n), 0), r = Array(i), o = 0; o < i; o++, t += n) r[o] = t;
                        return r;
                    }),
                    (g.chunk = function (t, e) {
                        if (null == e || e < 1) return [];
                        for (var n = [], i = 0, r = t.length; i < r; ) n.push(c.call(t, i, (i += e)));
                        return n;
                    });
                var L = function (t, e, n, i, r) {
                    if (!(i instanceof e)) return t.apply(n, r);
                    var o = x(t.prototype),
                        s = t.apply(o, r);
                    return g.isObject(s) ? s : o;
                };
                (g.bind = b(function (t, e, n) {
                    if (!g.isFunction(t)) throw new TypeError("Bind must be called on a function");
                    var i = b(function (r) {
                        return L(t, i, e, this, n.concat(r));
                    });
                    return i;
                })),
                    (g.partial = b(function (t, e) {
                        var n = g.partial.placeholder,
                            i = function () {
                                for (var r = 0, o = e.length, s = Array(o), a = 0; a < o; a++) s[a] = e[a] === n ? arguments[r++] : e[a];
                                for (; r < arguments.length; ) s.push(arguments[r++]);
                                return L(t, i, this, this, s);
                            };
                        return i;
                    })),
                    (g.partial.placeholder = g),
                    (g.bindAll = b(function (t, e) {
                        var n = (e = I(e, !1, !1)).length;
                        if (n < 1) throw new Error("bindAll must be passed function names");
                        for (; n--; ) {
                            var i = e[n];
                            t[i] = g.bind(t[i], t);
                        }
                    })),
                    (g.memoize = function (t, e) {
                        var n = function (i) {
                            var r = n.cache,
                                o = "" + (e ? e.apply(this, arguments) : i);
                            return T(r, o) || (r[o] = t.apply(this, arguments)), r[o];
                        };
                        return (n.cache = {}), n;
                    }),
                    (g.delay = b(function (t, e, n) {
                        return setTimeout(function () {
                            return t.apply(null, n);
                        }, e);
                    })),
                    (g.defer = g.partial(g.delay, g, 1)),
                    (g.throttle = function (t, e, n) {
                        var i,
                            r,
                            o,
                            s,
                            a = 0;
                        n || (n = {});
                        var l = function () {
                                (a = !1 === n.leading ? 0 : g.now()), (i = null), (s = t.apply(r, o)), i || (r = o = null);
                            },
                            u = function () {
                                var u = g.now();
                                a || !1 !== n.leading || (a = u);
                                var c = e - (u - a);
                                return (r = this), (o = arguments), c <= 0 || c > e ? (i && (clearTimeout(i), (i = null)), (a = u), (s = t.apply(r, o)), i || (r = o = null)) : i || !1 === n.trailing || (i = setTimeout(l, c)), s;
                            };
                        return (
                            (u.cancel = function () {
                                clearTimeout(i), (a = 0), (i = r = o = null);
                            }),
                            u
                        );
                    }),
                    (g.debounce = function (t, e, n) {
                        var i,
                            r,
                            o = function (e, n) {
                                (i = null), n && (r = t.apply(e, n));
                            },
                            s = b(function (s) {
                                if ((i && clearTimeout(i), n)) {
                                    var a = !i;
                                    (i = setTimeout(o, e)), a && (r = t.apply(this, s));
                                } else i = g.delay(o, e, this, s);
                                return r;
                            });
                        return (
                            (s.cancel = function () {
                                clearTimeout(i), (i = null);
                            }),
                            s
                        );
                    }),
                    (g.wrap = function (t, e) {
                        return g.partial(e, t);
                    }),
                    (g.negate = function (t) {
                        return function () {
                            return !t.apply(this, arguments);
                        };
                    }),
                    (g.compose = function () {
                        var t = arguments,
                            e = t.length - 1;
                        return function () {
                            for (var n = e, i = t[e].apply(this, arguments); n--; ) i = t[n].call(this, i);
                            return i;
                        };
                    }),
                    (g.after = function (t, e) {
                        return function () {
                            if (--t < 1) return e.apply(this, arguments);
                        };
                    }),
                    (g.before = function (t, e) {
                        var n;
                        return function () {
                            return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n;
                        };
                    }),
                    (g.once = g.partial(g.before, 2)),
                    (g.restArguments = b);
                var N = !{ toString: null }.propertyIsEnumerable("toString"),
                    R = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
                    j = function (t, e) {
                        var n = R.length,
                            i = t.constructor,
                            r = (g.isFunction(i) && i.prototype) || a,
                            o = "constructor";
                        for (T(t, o) && !g.contains(e, o) && e.push(o); n--; ) (o = R[n]) in t && t[o] !== r[o] && !g.contains(e, o) && e.push(o);
                    };
                (g.keys = function (t) {
                    if (!g.isObject(t)) return [];
                    if (d) return d(t);
                    var e = [];
                    for (var n in t) T(t, n) && e.push(n);
                    return N && j(t, e), e;
                }),
                    (g.allKeys = function (t) {
                        if (!g.isObject(t)) return [];
                        var e = [];
                        for (var n in t) e.push(n);
                        return N && j(t, e), e;
                    }),
                    (g.values = function (t) {
                        for (var e = g.keys(t), n = e.length, i = Array(n), r = 0; r < n; r++) i[r] = t[e[r]];
                        return i;
                    }),
                    (g.mapObject = function (t, e, n) {
                        e = A(e, n);
                        for (var i = g.keys(t), r = i.length, o = {}, s = 0; s < r; s++) {
                            var a = i[s];
                            o[a] = e(t[a], a, t);
                        }
                        return o;
                    }),
                    (g.pairs = function (t) {
                        for (var e = g.keys(t), n = e.length, i = Array(n), r = 0; r < n; r++) i[r] = [e[r], t[e[r]]];
                        return i;
                    }),
                    (g.invert = function (t) {
                        for (var e = {}, n = g.keys(t), i = 0, r = n.length; i < r; i++) e[t[n[i]]] = n[i];
                        return e;
                    }),
                    (g.functions = g.methods = function (t) {
                        var e = [];
                        for (var n in t) g.isFunction(t[n]) && e.push(n);
                        return e.sort();
                    });
                var F = function (t, e) {
                    return function (n) {
                        var i = arguments.length;
                        if ((e && (n = Object(n)), i < 2 || null == n)) return n;
                        for (var r = 1; r < i; r++)
                            for (var o = arguments[r], s = t(o), a = s.length, l = 0; l < a; l++) {
                                var u = s[l];
                                (e && void 0 !== n[u]) || (n[u] = o[u]);
                            }
                        return n;
                    };
                };
                (g.extend = F(g.allKeys)),
                    (g.extendOwn = g.assign = F(g.keys)),
                    (g.findKey = function (t, e, n) {
                        e = A(e, n);
                        for (var i, r = g.keys(t), o = 0, s = r.length; o < s; o++) if (e(t[(i = r[o])], i, t)) return i;
                    });
                var z,
                    H,
                    B = function (t, e, n) {
                        return e in n;
                    };
                (g.pick = b(function (t, e) {
                    var n = {},
                        i = e[0];
                    if (null == t) return n;
                    g.isFunction(i) ? (e.length > 1 && (i = w(i, e[1])), (e = g.allKeys(t))) : ((i = B), (e = I(e, !1, !1)), (t = Object(t)));
                    for (var r = 0, o = e.length; r < o; r++) {
                        var s = e[r],
                            a = t[s];
                        i(a, s, t) && (n[s] = a);
                    }
                    return n;
                })),
                    (g.omit = b(function (t, e) {
                        var n,
                            i = e[0];
                        return (
                            g.isFunction(i)
                                ? ((i = g.negate(i)), e.length > 1 && (n = e[1]))
                                : ((e = g.map(I(e, !1, !1), String)),
                                  (i = function (t, n) {
                                      return !g.contains(e, n);
                                  })),
                            g.pick(t, i, n)
                        );
                    })),
                    (g.defaults = F(g.allKeys, !0)),
                    (g.create = function (t, e) {
                        var n = x(t);
                        return e && g.extendOwn(n, e), n;
                    }),
                    (g.clone = function (t) {
                        return g.isObject(t) ? (g.isArray(t) ? t.slice() : g.extend({}, t)) : t;
                    }),
                    (g.tap = function (t, e) {
                        return e(t), t;
                    }),
                    (g.isMatch = function (t, e) {
                        var n = g.keys(e),
                            i = n.length;
                        if (null == t) return !i;
                        for (var r = Object(t), o = 0; o < i; o++) {
                            var s = n[o];
                            if (e[s] !== r[s] || !(s in r)) return !1;
                        }
                        return !0;
                    }),
                    (z = function (t, e, n, i) {
                        if (t === e) return 0 !== t || 1 / t == 1 / e;
                        if (null == t || null == e) return !1;
                        if (t != t) return e != e;
                        var r = typeof t;
                        return ("function" === r || "object" === r || "object" == typeof e) && H(t, e, n, i);
                    }),
                    (H = function (t, e, n, i) {
                        t instanceof g && (t = t._wrapped), e instanceof g && (e = e._wrapped);
                        var r = h.call(t);
                        if (r !== h.call(e)) return !1;
                        switch (r) {
                            case "[object RegExp]":
                            case "[object String]":
                                return "" + t == "" + e;
                            case "[object Number]":
                                return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;
                            case "[object Date]":
                            case "[object Boolean]":
                                return +t == +e;
                            case "[object Symbol]":
                                return l.valueOf.call(t) === l.valueOf.call(e);
                        }
                        var o = "[object Array]" === r;
                        if (!o) {
                            if ("object" != typeof t || "object" != typeof e) return !1;
                            var s = t.constructor,
                                a = e.constructor;
                            if (s !== a && !(g.isFunction(s) && s instanceof s && g.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e) return !1;
                        }
                        i = i || [];
                        for (var u = (n = n || []).length; u--; ) if (n[u] === t) return i[u] === e;
                        if ((n.push(t), i.push(e), o)) {
                            if ((u = t.length) !== e.length) return !1;
                            for (; u--; ) if (!z(t[u], e[u], n, i)) return !1;
                        } else {
                            var c,
                                p = g.keys(t);
                            if (((u = p.length), g.keys(e).length !== u)) return !1;
                            for (; u--; ) if (((c = p[u]), !T(e, c) || !z(t[c], e[c], n, i))) return !1;
                        }
                        return n.pop(), i.pop(), !0;
                    }),
                    (g.isEqual = function (t, e) {
                        return z(t, e);
                    }),
                    (g.isEmpty = function (t) {
                        return null == t || (k(t) && (g.isArray(t) || g.isString(t) || g.isArguments(t)) ? 0 === t.length : 0 === g.keys(t).length);
                    }),
                    (g.isElement = function (t) {
                        return !(!t || 1 !== t.nodeType);
                    }),
                    (g.isArray =
                        f ||
                        function (t) {
                            return "[object Array]" === h.call(t);
                        }),
                    (g.isObject = function (t) {
                        var e = typeof t;
                        return "function" === e || ("object" === e && !!t);
                    }),
                    g.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap", "Set", "WeakSet"], function (t) {
                        g["is" + t] = function (e) {
                            return h.call(e) === "[object " + t + "]";
                        };
                    }),
                    g.isArguments(arguments) ||
                        (g.isArguments = function (t) {
                            return T(t, "callee");
                        });
                var W = r.document && r.document.childNodes;
                "object" != typeof Int8Array &&
                    "function" != typeof W &&
                    (g.isFunction = function (t) {
                        return "function" == typeof t || !1;
                    }),
                    (g.isFinite = function (t) {
                        return !g.isSymbol(t) && isFinite(t) && !isNaN(parseFloat(t));
                    }),
                    (g.isNaN = function (t) {
                        return g.isNumber(t) && isNaN(t);
                    }),
                    (g.isBoolean = function (t) {
                        return !0 === t || !1 === t || "[object Boolean]" === h.call(t);
                    }),
                    (g.isNull = function (t) {
                        return null === t;
                    }),
                    (g.isUndefined = function (t) {
                        return void 0 === t;
                    }),
                    (g.has = function (t, e) {
                        if (!g.isArray(e)) return T(t, e);
                        for (var n = e.length, i = 0; i < n; i++) {
                            var r = e[i];
                            if (null == t || !p.call(t, r)) return !1;
                            t = t[r];
                        }
                        return !!n;
                    }),
                    (g.noConflict = function () {
                        return (r._ = o), this;
                    }),
                    (g.identity = function (t) {
                        return t;
                    }),
                    (g.constant = function (t) {
                        return function () {
                            return t;
                        };
                    }),
                    (g.noop = function () {}),
                    (g.property = function (t) {
                        return g.isArray(t)
                            ? function (e) {
                                  return C(e, t);
                              }
                            : _(t);
                    }),
                    (g.propertyOf = function (t) {
                        return null == t
                            ? function () {}
                            : function (e) {
                                  return g.isArray(e) ? C(t, e) : t[e];
                              };
                    }),
                    (g.matcher = g.matches = function (t) {
                        return (
                            (t = g.extendOwn({}, t)),
                            function (e) {
                                return g.isMatch(e, t);
                            }
                        );
                    }),
                    (g.times = function (t, e, n) {
                        var i = Array(Math.max(0, t));
                        e = w(e, n, 1);
                        for (var r = 0; r < t; r++) i[r] = e(r);
                        return i;
                    }),
                    (g.random = function (t, e) {
                        return null == e && ((e = t), (t = 0)), t + Math.floor(Math.random() * (e - t + 1));
                    }),
                    (g.now =
                        Date.now ||
                        function () {
                            return new Date().getTime();
                        });
                var q = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
                    V = g.invert(q),
                    Y = function (t) {
                        var e = function (e) {
                                return t[e];
                            },
                            n = "(?:" + g.keys(t).join("|") + ")",
                            i = RegExp(n),
                            r = RegExp(n, "g");
                        return function (t) {
                            return (t = null == t ? "" : "" + t), i.test(t) ? t.replace(r, e) : t;
                        };
                    };
                (g.escape = Y(q)),
                    (g.unescape = Y(V)),
                    (g.result = function (t, e, n) {
                        g.isArray(e) || (e = [e]);
                        var i = e.length;
                        if (!i) return g.isFunction(n) ? n.call(t) : n;
                        for (var r = 0; r < i; r++) {
                            var o = null == t ? void 0 : t[e[r]];
                            void 0 === o && ((o = n), (r = i)), (t = g.isFunction(o) ? o.call(t) : o);
                        }
                        return t;
                    });
                var Q = 0;
                (g.uniqueId = function (t) {
                    var e = ++Q + "";
                    return t ? t + e : e;
                }),
                    (g.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g });
                var X = /(.)^/,
                    G = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
                    U = /\\|'|\r|\n|\u2028|\u2029/g,
                    Z = function (t) {
                        return "\\" + G[t];
                    };
                (g.template = function (t, e, n) {
                    !e && n && (e = n), (e = g.defaults({}, e, g.templateSettings));
                    var i,
                        r = RegExp([(e.escape || X).source, (e.interpolate || X).source, (e.evaluate || X).source].join("|") + "|$", "g"),
                        o = 0,
                        s = "__p+='";
                    t.replace(r, function (e, n, i, r, a) {
                        return (
                            (s += t.slice(o, a).replace(U, Z)),
                            (o = a + e.length),
                            n ? (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'") : i ? (s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'") : r && (s += "';\n" + r + "\n__p+='"),
                            e
                        );
                    }),
                        (s += "';\n"),
                        e.variable || (s = "with(obj||{}){\n" + s + "}\n"),
                        (s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n");
                    try {
                        i = new Function(e.variable || "obj", "_", s);
                    } catch (t) {
                        throw ((t.source = s), t);
                    }
                    var a = function (t) {
                            return i.call(this, t, g);
                        },
                        l = e.variable || "obj";
                    return (a.source = "function(" + l + "){\n" + s + "}"), a;
                }),
                    (g.chain = function (t) {
                        var e = g(t);
                        return (e._chain = !0), e;
                    });
                var J = function (t, e) {
                    return t._chain ? g(e).chain() : e;
                };
                (g.mixin = function (t) {
                    return (
                        g.each(g.functions(t), function (e) {
                            var n = (g[e] = t[e]);
                            g.prototype[e] = function () {
                                var t = [this._wrapped];
                                return u.apply(t, arguments), J(this, n.apply(g, t));
                            };
                        }),
                        g
                    );
                }),
                    g.mixin(g),
                    g.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
                        var e = s[t];
                        g.prototype[t] = function () {
                            var n = this._wrapped;
                            return e.apply(n, arguments), ("shift" !== t && "splice" !== t) || 0 !== n.length || delete n[0], J(this, n);
                        };
                    }),
                    g.each(["concat", "join", "slice"], function (t) {
                        var e = s[t];
                        g.prototype[t] = function () {
                            return J(this, e.apply(this._wrapped, arguments));
                        };
                    }),
                    (g.prototype.value = function () {
                        return this._wrapped;
                    }),
                    (g.prototype.valueOf = g.prototype.toJSON = g.prototype.value),
                    (g.prototype.toString = function () {
                        return String(this._wrapped);
                    }),
                    void 0 ===
                        (i = function () {
                            return g;
                        }.apply(e, [])) || (n.exports = i);
            })();
        }.call(this, n(4), n(19)(t)));
    },
    function (t, e, n) {
        var i;
        /*!
         * jQuery JavaScript Library v3.4.1
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2019-05-01T21:04Z
         */ !(function (e, n) {
            "use strict";
            "object" == typeof t.exports
                ? (t.exports = e.document
                      ? n(e, !0)
                      : function (t) {
                            if (!t.document) throw new Error("jQuery requires a window with a document");
                            return n(t);
                        })
                : n(e);
        })("undefined" != typeof window ? window : this, function (n, r) {
            "use strict";
            var o = [],
                s = n.document,
                a = Object.getPrototypeOf,
                l = o.slice,
                u = o.concat,
                c = o.push,
                h = o.indexOf,
                p = {},
                f = p.toString,
                d = p.hasOwnProperty,
                m = d.toString,
                v = m.call(Object),
                g = {},
                y = function (t) {
                    return "function" == typeof t && "number" != typeof t.nodeType;
                },
                w = function (t) {
                    return null != t && t === t.window;
                },
                A = { type: !0, src: !0, nonce: !0, noModule: !0 };
            function b(t, e, n) {
                var i,
                    r,
                    o = (n = n || s).createElement("script");
                if (((o.text = t), e)) for (i in A) (r = e[i] || (e.getAttribute && e.getAttribute(i))) && o.setAttribute(i, r);
                n.head.appendChild(o).parentNode.removeChild(o);
            }
            function x(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? p[f.call(t)] || "object" : typeof t;
            }
            var _ = function (t, e) {
                    return new _.fn.init(t, e);
                },
                T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            function C(t) {
                var e = !!t && "length" in t && t.length,
                    n = x(t);
                return !y(t) && !w(t) && ("array" === n || 0 === e || ("number" == typeof e && e > 0 && e - 1 in t));
            }
            (_.fn = _.prototype = {
                jquery: "3.4.1",
                constructor: _,
                length: 0,
                toArray: function () {
                    return l.call(this);
                },
                get: function (t) {
                    return null == t ? l.call(this) : t < 0 ? this[t + this.length] : this[t];
                },
                pushStack: function (t) {
                    var e = _.merge(this.constructor(), t);
                    return (e.prevObject = this), e;
                },
                each: function (t) {
                    return _.each(this, t);
                },
                map: function (t) {
                    return this.pushStack(
                        _.map(this, function (e, n) {
                            return t.call(e, n, e);
                        })
                    );
                },
                slice: function () {
                    return this.pushStack(l.apply(this, arguments));
                },
                first: function () {
                    return this.eq(0);
                },
                last: function () {
                    return this.eq(-1);
                },
                eq: function (t) {
                    var e = this.length,
                        n = +t + (t < 0 ? e : 0);
                    return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
                },
                end: function () {
                    return this.prevObject || this.constructor();
                },
                push: c,
                sort: o.sort,
                splice: o.splice,
            }),
                (_.extend = _.fn.extend = function () {
                    var t,
                        e,
                        n,
                        i,
                        r,
                        o,
                        s = arguments[0] || {},
                        a = 1,
                        l = arguments.length,
                        u = !1;
                    for ("boolean" == typeof s && ((u = s), (s = arguments[a] || {}), a++), "object" == typeof s || y(s) || (s = {}), a === l && ((s = this), a--); a < l; a++)
                        if (null != (t = arguments[a]))
                            for (e in t)
                                (i = t[e]),
                                    "__proto__" !== e &&
                                        s !== i &&
                                        (u && i && (_.isPlainObject(i) || (r = Array.isArray(i)))
                                            ? ((n = s[e]), (o = r && !Array.isArray(n) ? [] : r || _.isPlainObject(n) ? n : {}), (r = !1), (s[e] = _.extend(u, o, i)))
                                            : void 0 !== i && (s[e] = i));
                    return s;
                }),
                _.extend({
                    expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function (t) {
                        throw new Error(t);
                    },
                    noop: function () {},
                    isPlainObject: function (t) {
                        var e, n;
                        return !(!t || "[object Object]" !== f.call(t)) && (!(e = a(t)) || ("function" == typeof (n = d.call(e, "constructor") && e.constructor) && m.call(n) === v));
                    },
                    isEmptyObject: function (t) {
                        var e;
                        for (e in t) return !1;
                        return !0;
                    },
                    globalEval: function (t, e) {
                        b(t, { nonce: e && e.nonce });
                    },
                    each: function (t, e) {
                        var n,
                            i = 0;
                        if (C(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                        else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
                        return t;
                    },
                    trim: function (t) {
                        return null == t ? "" : (t + "").replace(T, "");
                    },
                    makeArray: function (t, e) {
                        var n = e || [];
                        return null != t && (C(Object(t)) ? _.merge(n, "string" == typeof t ? [t] : t) : c.call(n, t)), n;
                    },
                    inArray: function (t, e, n) {
                        return null == e ? -1 : h.call(e, t, n);
                    },
                    merge: function (t, e) {
                        for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
                        return (t.length = r), t;
                    },
                    grep: function (t, e, n) {
                        for (var i = [], r = 0, o = t.length, s = !n; r < o; r++) !e(t[r], r) !== s && i.push(t[r]);
                        return i;
                    },
                    map: function (t, e, n) {
                        var i,
                            r,
                            o = 0,
                            s = [];
                        if (C(t)) for (i = t.length; o < i; o++) null != (r = e(t[o], o, n)) && s.push(r);
                        else for (o in t) null != (r = e(t[o], o, n)) && s.push(r);
                        return u.apply([], s);
                    },
                    guid: 1,
                    support: g,
                }),
                "function" == typeof Symbol && (_.fn[Symbol.iterator] = o[Symbol.iterator]),
                _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
                    p["[object " + e + "]"] = e.toLowerCase();
                });
            var S =
                /*!
                 * Sizzle CSS Selector Engine v2.3.4
                 * https://sizzlejs.com/
                 *
                 * Copyright JS Foundation and other contributors
                 * Released under the MIT license
                 * https://js.foundation/
                 *
                 * Date: 2019-04-08
                 */
                (function (t) {
                    var e,
                        n,
                        i,
                        r,
                        o,
                        s,
                        a,
                        l,
                        u,
                        c,
                        h,
                        p,
                        f,
                        d,
                        m,
                        v,
                        g,
                        y,
                        w,
                        A = "sizzle" + 1 * new Date(),
                        b = t.document,
                        x = 0,
                        _ = 0,
                        T = lt(),
                        C = lt(),
                        S = lt(),
                        P = lt(),
                        k = function (t, e) {
                            return t === e && (h = !0), 0;
                        },
                        E = {}.hasOwnProperty,
                        M = [],
                        O = M.pop,
                        I = M.push,
                        $ = M.push,
                        D = M.slice,
                        L = function (t, e) {
                            for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
                            return -1;
                        },
                        N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        R = "[\\x20\\t\\r\\n\\f]",
                        j = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                        F = "\\[" + R + "*(" + j + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + R + "*\\]",
                        z = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
                        H = new RegExp(R + "+", "g"),
                        B = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
                        W = new RegExp("^" + R + "*," + R + "*"),
                        q = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
                        V = new RegExp(R + "|>"),
                        Y = new RegExp(z),
                        Q = new RegExp("^" + j + "$"),
                        X = {
                            ID: new RegExp("^#(" + j + ")"),
                            CLASS: new RegExp("^\\.(" + j + ")"),
                            TAG: new RegExp("^(" + j + "|[*])"),
                            ATTR: new RegExp("^" + F),
                            PSEUDO: new RegExp("^" + z),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + N + ")$", "i"),
                            needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i"),
                        },
                        G = /HTML$/i,
                        U = /^(?:input|select|textarea|button)$/i,
                        Z = /^h\d$/i,
                        J = /^[^{]+\{\s*\[native \w/,
                        K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        tt = /[+~]/,
                        et = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
                        nt = function (t, e, n) {
                            var i = "0x" + e - 65536;
                            return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
                        },
                        it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                        rt = function (t, e) {
                            return e ? ("\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " ") : "\\" + t;
                        },
                        ot = function () {
                            p();
                        },
                        st = At(
                            function (t) {
                                return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase();
                            },
                            { dir: "parentNode", next: "legend" }
                        );
                    try {
                        $.apply((M = D.call(b.childNodes)), b.childNodes), M[b.childNodes.length].nodeType;
                    } catch (t) {
                        $ = {
                            apply: M.length
                                ? function (t, e) {
                                      I.apply(t, D.call(e));
                                  }
                                : function (t, e) {
                                      for (var n = t.length, i = 0; (t[n++] = e[i++]); );
                                      t.length = n - 1;
                                  },
                        };
                    }
                    function at(t, e, i, r) {
                        var o,
                            a,
                            u,
                            c,
                            h,
                            d,
                            g,
                            y = e && e.ownerDocument,
                            x = e ? e.nodeType : 9;
                        if (((i = i || []), "string" != typeof t || !t || (1 !== x && 9 !== x && 11 !== x))) return i;
                        if (!r && ((e ? e.ownerDocument || e : b) !== f && p(e), (e = e || f), m)) {
                            if (11 !== x && (h = K.exec(t)))
                                if ((o = h[1])) {
                                    if (9 === x) {
                                        if (!(u = e.getElementById(o))) return i;
                                        if (u.id === o) return i.push(u), i;
                                    } else if (y && (u = y.getElementById(o)) && w(e, u) && u.id === o) return i.push(u), i;
                                } else {
                                    if (h[2]) return $.apply(i, e.getElementsByTagName(t)), i;
                                    if ((o = h[3]) && n.getElementsByClassName && e.getElementsByClassName) return $.apply(i, e.getElementsByClassName(o)), i;
                                }
                            if (n.qsa && !P[t + " "] && (!v || !v.test(t)) && (1 !== x || "object" !== e.nodeName.toLowerCase())) {
                                if (((g = t), (y = e), 1 === x && V.test(t))) {
                                    for ((c = e.getAttribute("id")) ? (c = c.replace(it, rt)) : e.setAttribute("id", (c = A)), a = (d = s(t)).length; a--; ) d[a] = "#" + c + " " + wt(d[a]);
                                    (g = d.join(",")), (y = (tt.test(t) && gt(e.parentNode)) || e);
                                }
                                try {
                                    return $.apply(i, y.querySelectorAll(g)), i;
                                } catch (e) {
                                    P(t, !0);
                                } finally {
                                    c === A && e.removeAttribute("id");
                                }
                            }
                        }
                        return l(t.replace(B, "$1"), e, i, r);
                    }
                    function lt() {
                        var t = [];
                        return function e(n, r) {
                            return t.push(n + " ") > i.cacheLength && delete e[t.shift()], (e[n + " "] = r);
                        };
                    }
                    function ut(t) {
                        return (t[A] = !0), t;
                    }
                    function ct(t) {
                        var e = f.createElement("fieldset");
                        try {
                            return !!t(e);
                        } catch (t) {
                            return !1;
                        } finally {
                            e.parentNode && e.parentNode.removeChild(e), (e = null);
                        }
                    }
                    function ht(t, e) {
                        for (var n = t.split("|"), r = n.length; r--; ) i.attrHandle[n[r]] = e;
                    }
                    function pt(t, e) {
                        var n = e && t,
                            i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                        if (i) return i;
                        if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
                        return t ? 1 : -1;
                    }
                    function ft(t) {
                        return function (e) {
                            return "input" === e.nodeName.toLowerCase() && e.type === t;
                        };
                    }
                    function dt(t) {
                        return function (e) {
                            var n = e.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && e.type === t;
                        };
                    }
                    function mt(t) {
                        return function (e) {
                            return "form" in e
                                ? e.parentNode && !1 === e.disabled
                                    ? "label" in e
                                        ? "label" in e.parentNode
                                            ? e.parentNode.disabled === t
                                            : e.disabled === t
                                        : e.isDisabled === t || (e.isDisabled !== !t && st(e) === t)
                                    : e.disabled === t
                                : "label" in e && e.disabled === t;
                        };
                    }
                    function vt(t) {
                        return ut(function (e) {
                            return (
                                (e = +e),
                                ut(function (n, i) {
                                    for (var r, o = t([], n.length, e), s = o.length; s--; ) n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
                                })
                            );
                        });
                    }
                    function gt(t) {
                        return t && void 0 !== t.getElementsByTagName && t;
                    }
                    for (e in ((n = at.support = {}),
                    (o = at.isXML = function (t) {
                        var e = t.namespaceURI,
                            n = (t.ownerDocument || t).documentElement;
                        return !G.test(e || (n && n.nodeName) || "HTML");
                    }),
                    (p = at.setDocument = function (t) {
                        var e,
                            r,
                            s = t ? t.ownerDocument || t : b;
                        return s !== f && 9 === s.nodeType && s.documentElement
                            ? ((d = (f = s).documentElement),
                              (m = !o(f)),
                              b !== f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ot, !1) : r.attachEvent && r.attachEvent("onunload", ot)),
                              (n.attributes = ct(function (t) {
                                  return (t.className = "i"), !t.getAttribute("className");
                              })),
                              (n.getElementsByTagName = ct(function (t) {
                                  return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length;
                              })),
                              (n.getElementsByClassName = J.test(f.getElementsByClassName)),
                              (n.getById = ct(function (t) {
                                  return (d.appendChild(t).id = A), !f.getElementsByName || !f.getElementsByName(A).length;
                              })),
                              n.getById
                                  ? ((i.filter.ID = function (t) {
                                        var e = t.replace(et, nt);
                                        return function (t) {
                                            return t.getAttribute("id") === e;
                                        };
                                    }),
                                    (i.find.ID = function (t, e) {
                                        if (void 0 !== e.getElementById && m) {
                                            var n = e.getElementById(t);
                                            return n ? [n] : [];
                                        }
                                    }))
                                  : ((i.filter.ID = function (t) {
                                        var e = t.replace(et, nt);
                                        return function (t) {
                                            var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                            return n && n.value === e;
                                        };
                                    }),
                                    (i.find.ID = function (t, e) {
                                        if (void 0 !== e.getElementById && m) {
                                            var n,
                                                i,
                                                r,
                                                o = e.getElementById(t);
                                            if (o) {
                                                if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                                                for (r = e.getElementsByName(t), i = 0; (o = r[i++]); ) if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                                            }
                                            return [];
                                        }
                                    })),
                              (i.find.TAG = n.getElementsByTagName
                                  ? function (t, e) {
                                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0;
                                    }
                                  : function (t, e) {
                                        var n,
                                            i = [],
                                            r = 0,
                                            o = e.getElementsByTagName(t);
                                        if ("*" === t) {
                                            for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                                            return i;
                                        }
                                        return o;
                                    }),
                              (i.find.CLASS =
                                  n.getElementsByClassName &&
                                  function (t, e) {
                                      if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t);
                                  }),
                              (g = []),
                              (v = []),
                              (n.qsa = J.test(f.querySelectorAll)) &&
                                  (ct(function (t) {
                                      (d.appendChild(t).innerHTML = "<a id='" + A + "'></a><select id='" + A + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                          t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + R + "*(?:''|\"\")"),
                                          t.querySelectorAll("[selected]").length || v.push("\\[" + R + "*(?:value|" + N + ")"),
                                          t.querySelectorAll("[id~=" + A + "-]").length || v.push("~="),
                                          t.querySelectorAll(":checked").length || v.push(":checked"),
                                          t.querySelectorAll("a#" + A + "+*").length || v.push(".#.+[+~]");
                                  }),
                                  ct(function (t) {
                                      t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                      var e = f.createElement("input");
                                      e.setAttribute("type", "hidden"),
                                          t.appendChild(e).setAttribute("name", "D"),
                                          t.querySelectorAll("[name=d]").length && v.push("name" + R + "*[*^$|!~]?="),
                                          2 !== t.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                                          (d.appendChild(t).disabled = !0),
                                          2 !== t.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                                          t.querySelectorAll("*,:x"),
                                          v.push(",.*:");
                                  })),
                              (n.matchesSelector = J.test((y = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector))) &&
                                  ct(function (t) {
                                      (n.disconnectedMatch = y.call(t, "*")), y.call(t, "[s!='']:x"), g.push("!=", z);
                                  }),
                              (v = v.length && new RegExp(v.join("|"))),
                              (g = g.length && new RegExp(g.join("|"))),
                              (e = J.test(d.compareDocumentPosition)),
                              (w =
                                  e || J.test(d.contains)
                                      ? function (t, e) {
                                            var n = 9 === t.nodeType ? t.documentElement : t,
                                                i = e && e.parentNode;
                                            return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)));
                                        }
                                      : function (t, e) {
                                            if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                                            return !1;
                                        }),
                              (k = e
                                  ? function (t, e) {
                                        if (t === e) return (h = !0), 0;
                                        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                        return (
                                            i ||
                                            (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || (!n.sortDetached && e.compareDocumentPosition(t) === i)
                                                ? t === f || (t.ownerDocument === b && w(b, t))
                                                    ? -1
                                                    : e === f || (e.ownerDocument === b && w(b, e))
                                                    ? 1
                                                    : c
                                                    ? L(c, t) - L(c, e)
                                                    : 0
                                                : 4 & i
                                                ? -1
                                                : 1)
                                        );
                                    }
                                  : function (t, e) {
                                        if (t === e) return (h = !0), 0;
                                        var n,
                                            i = 0,
                                            r = t.parentNode,
                                            o = e.parentNode,
                                            s = [t],
                                            a = [e];
                                        if (!r || !o) return t === f ? -1 : e === f ? 1 : r ? -1 : o ? 1 : c ? L(c, t) - L(c, e) : 0;
                                        if (r === o) return pt(t, e);
                                        for (n = t; (n = n.parentNode); ) s.unshift(n);
                                        for (n = e; (n = n.parentNode); ) a.unshift(n);
                                        for (; s[i] === a[i]; ) i++;
                                        return i ? pt(s[i], a[i]) : s[i] === b ? -1 : a[i] === b ? 1 : 0;
                                    }),
                              f)
                            : f;
                    }),
                    (at.matches = function (t, e) {
                        return at(t, null, null, e);
                    }),
                    (at.matchesSelector = function (t, e) {
                        if (((t.ownerDocument || t) !== f && p(t), n.matchesSelector && m && !P[e + " "] && (!g || !g.test(e)) && (!v || !v.test(e))))
                            try {
                                var i = y.call(t, e);
                                if (i || n.disconnectedMatch || (t.document && 11 !== t.document.nodeType)) return i;
                            } catch (t) {
                                P(e, !0);
                            }
                        return at(e, f, null, [t]).length > 0;
                    }),
                    (at.contains = function (t, e) {
                        return (t.ownerDocument || t) !== f && p(t), w(t, e);
                    }),
                    (at.attr = function (t, e) {
                        (t.ownerDocument || t) !== f && p(t);
                        var r = i.attrHandle[e.toLowerCase()],
                            o = r && E.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !m) : void 0;
                        return void 0 !== o ? o : n.attributes || !m ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null;
                    }),
                    (at.escape = function (t) {
                        return (t + "").replace(it, rt);
                    }),
                    (at.error = function (t) {
                        throw new Error("Syntax error, unrecognized expression: " + t);
                    }),
                    (at.uniqueSort = function (t) {
                        var e,
                            i = [],
                            r = 0,
                            o = 0;
                        if (((h = !n.detectDuplicates), (c = !n.sortStable && t.slice(0)), t.sort(k), h)) {
                            for (; (e = t[o++]); ) e === t[o] && (r = i.push(o));
                            for (; r--; ) t.splice(i[r], 1);
                        }
                        return (c = null), t;
                    }),
                    (r = at.getText = function (t) {
                        var e,
                            n = "",
                            i = 0,
                            o = t.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof t.textContent) return t.textContent;
                                for (t = t.firstChild; t; t = t.nextSibling) n += r(t);
                            } else if (3 === o || 4 === o) return t.nodeValue;
                        } else for (; (e = t[i++]); ) n += r(e);
                        return n;
                    }),
                    ((i = at.selectors = {
                        cacheLength: 50,
                        createPseudo: ut,
                        match: X,
                        attrHandle: {},
                        find: {},
                        relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                        preFilter: {
                            ATTR: function (t) {
                                return (t[1] = t[1].replace(et, nt)), (t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt)), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                            },
                            CHILD: function (t) {
                                return (
                                    (t[1] = t[1].toLowerCase()),
                                    "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), (t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3]))), (t[5] = +(t[7] + t[8] || "odd" === t[3]))) : t[3] && at.error(t[0]),
                                    t
                                );
                            },
                            PSEUDO: function (t) {
                                var e,
                                    n = !t[6] && t[2];
                                return X.CHILD.test(t[0])
                                    ? null
                                    : (t[3] ? (t[2] = t[4] || t[5] || "") : n && Y.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))), t.slice(0, 3));
                            },
                        },
                        filter: {
                            TAG: function (t) {
                                var e = t.replace(et, nt).toLowerCase();
                                return "*" === t
                                    ? function () {
                                          return !0;
                                      }
                                    : function (t) {
                                          return t.nodeName && t.nodeName.toLowerCase() === e;
                                      };
                            },
                            CLASS: function (t) {
                                var e = T[t + " "];
                                return (
                                    e ||
                                    ((e = new RegExp("(^|" + R + ")" + t + "(" + R + "|$)")) &&
                                        T(t, function (t) {
                                            return e.test(("string" == typeof t.className && t.className) || (void 0 !== t.getAttribute && t.getAttribute("class")) || "");
                                        }))
                                );
                            },
                            ATTR: function (t, e, n) {
                                return function (i) {
                                    var r = at.attr(i, t);
                                    return null == r
                                        ? "!=" === e
                                        : !e ||
                                              ((r += ""),
                                              "=" === e
                                                  ? r === n
                                                  : "!=" === e
                                                  ? r !== n
                                                  : "^=" === e
                                                  ? n && 0 === r.indexOf(n)
                                                  : "*=" === e
                                                  ? n && r.indexOf(n) > -1
                                                  : "$=" === e
                                                  ? n && r.slice(-n.length) === n
                                                  : "~=" === e
                                                  ? (" " + r.replace(H, " ") + " ").indexOf(n) > -1
                                                  : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"));
                                };
                            },
                            CHILD: function (t, e, n, i, r) {
                                var o = "nth" !== t.slice(0, 3),
                                    s = "last" !== t.slice(-4),
                                    a = "of-type" === e;
                                return 1 === i && 0 === r
                                    ? function (t) {
                                          return !!t.parentNode;
                                      }
                                    : function (e, n, l) {
                                          var u,
                                              c,
                                              h,
                                              p,
                                              f,
                                              d,
                                              m = o !== s ? "nextSibling" : "previousSibling",
                                              v = e.parentNode,
                                              g = a && e.nodeName.toLowerCase(),
                                              y = !l && !a,
                                              w = !1;
                                          if (v) {
                                              if (o) {
                                                  for (; m; ) {
                                                      for (p = e; (p = p[m]); ) if (a ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                                      d = m = "only" === t && !d && "nextSibling";
                                                  }
                                                  return !0;
                                              }
                                              if (((d = [s ? v.firstChild : v.lastChild]), s && y)) {
                                                  for (
                                                      w = (f = (u = (c = (h = (p = v)[A] || (p[A] = {}))[p.uniqueID] || (h[p.uniqueID] = {}))[t] || [])[0] === x && u[1]) && u[2], p = f && v.childNodes[f];
                                                      (p = (++f && p && p[m]) || (w = f = 0) || d.pop());

                                                  )
                                                      if (1 === p.nodeType && ++w && p === e) {
                                                          c[t] = [x, f, w];
                                                          break;
                                                      }
                                              } else if ((y && (w = f = (u = (c = (h = (p = e)[A] || (p[A] = {}))[p.uniqueID] || (h[p.uniqueID] = {}))[t] || [])[0] === x && u[1]), !1 === w))
                                                  for (
                                                      ;
                                                      (p = (++f && p && p[m]) || (w = f = 0) || d.pop()) &&
                                                      ((a ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++w || (y && ((c = (h = p[A] || (p[A] = {}))[p.uniqueID] || (h[p.uniqueID] = {}))[t] = [x, w]), p !== e));

                                                  );
                                              return (w -= r) === i || (w % i == 0 && w / i >= 0);
                                          }
                                      };
                            },
                            PSEUDO: function (t, e) {
                                var n,
                                    r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                                return r[A]
                                    ? r(e)
                                    : r.length > 1
                                    ? ((n = [t, t, "", e]),
                                      i.setFilters.hasOwnProperty(t.toLowerCase())
                                          ? ut(function (t, n) {
                                                for (var i, o = r(t, e), s = o.length; s--; ) t[(i = L(t, o[s]))] = !(n[i] = o[s]);
                                            })
                                          : function (t) {
                                                return r(t, 0, n);
                                            })
                                    : r;
                            },
                        },
                        pseudos: {
                            not: ut(function (t) {
                                var e = [],
                                    n = [],
                                    i = a(t.replace(B, "$1"));
                                return i[A]
                                    ? ut(function (t, e, n, r) {
                                          for (var o, s = i(t, null, r, []), a = t.length; a--; ) (o = s[a]) && (t[a] = !(e[a] = o));
                                      })
                                    : function (t, r, o) {
                                          return (e[0] = t), i(e, null, o, n), (e[0] = null), !n.pop();
                                      };
                            }),
                            has: ut(function (t) {
                                return function (e) {
                                    return at(t, e).length > 0;
                                };
                            }),
                            contains: ut(function (t) {
                                return (
                                    (t = t.replace(et, nt)),
                                    function (e) {
                                        return (e.textContent || r(e)).indexOf(t) > -1;
                                    }
                                );
                            }),
                            lang: ut(function (t) {
                                return (
                                    Q.test(t || "") || at.error("unsupported lang: " + t),
                                    (t = t.replace(et, nt).toLowerCase()),
                                    function (e) {
                                        var n;
                                        do {
                                            if ((n = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-");
                                        } while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1;
                                    }
                                );
                            }),
                            target: function (e) {
                                var n = t.location && t.location.hash;
                                return n && n.slice(1) === e.id;
                            },
                            root: function (t) {
                                return t === d;
                            },
                            focus: function (t) {
                                return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                            },
                            enabled: mt(!1),
                            disabled: mt(!0),
                            checked: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return ("input" === e && !!t.checked) || ("option" === e && !!t.selected);
                            },
                            selected: function (t) {
                                return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                            },
                            empty: function (t) {
                                for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                                return !0;
                            },
                            parent: function (t) {
                                return !i.pseudos.empty(t);
                            },
                            header: function (t) {
                                return Z.test(t.nodeName);
                            },
                            input: function (t) {
                                return U.test(t.nodeName);
                            },
                            button: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return ("input" === e && "button" === t.type) || "button" === e;
                            },
                            text: function (t) {
                                var e;
                                return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                            },
                            first: vt(function () {
                                return [0];
                            }),
                            last: vt(function (t, e) {
                                return [e - 1];
                            }),
                            eq: vt(function (t, e, n) {
                                return [n < 0 ? n + e : n];
                            }),
                            even: vt(function (t, e) {
                                for (var n = 0; n < e; n += 2) t.push(n);
                                return t;
                            }),
                            odd: vt(function (t, e) {
                                for (var n = 1; n < e; n += 2) t.push(n);
                                return t;
                            }),
                            lt: vt(function (t, e, n) {
                                for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0; ) t.push(i);
                                return t;
                            }),
                            gt: vt(function (t, e, n) {
                                for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
                                return t;
                            }),
                        },
                    }).pseudos.nth = i.pseudos.eq),
                    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                        i.pseudos[e] = ft(e);
                    for (e in { submit: !0, reset: !0 }) i.pseudos[e] = dt(e);
                    function yt() {}
                    function wt(t) {
                        for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                        return i;
                    }
                    function At(t, e, n) {
                        var i = e.dir,
                            r = e.next,
                            o = r || i,
                            s = n && "parentNode" === o,
                            a = _++;
                        return e.first
                            ? function (e, n, r) {
                                  for (; (e = e[i]); ) if (1 === e.nodeType || s) return t(e, n, r);
                                  return !1;
                              }
                            : function (e, n, l) {
                                  var u,
                                      c,
                                      h,
                                      p = [x, a];
                                  if (l) {
                                      for (; (e = e[i]); ) if ((1 === e.nodeType || s) && t(e, n, l)) return !0;
                                  } else
                                      for (; (e = e[i]); )
                                          if (1 === e.nodeType || s)
                                              if (((c = (h = e[A] || (e[A] = {}))[e.uniqueID] || (h[e.uniqueID] = {})), r && r === e.nodeName.toLowerCase())) e = e[i] || e;
                                              else {
                                                  if ((u = c[o]) && u[0] === x && u[1] === a) return (p[2] = u[2]);
                                                  if (((c[o] = p), (p[2] = t(e, n, l)))) return !0;
                                              }
                                  return !1;
                              };
                    }
                    function bt(t) {
                        return t.length > 1
                            ? function (e, n, i) {
                                  for (var r = t.length; r--; ) if (!t[r](e, n, i)) return !1;
                                  return !0;
                              }
                            : t[0];
                    }
                    function xt(t, e, n, i, r) {
                        for (var o, s = [], a = 0, l = t.length, u = null != e; a < l; a++) (o = t[a]) && ((n && !n(o, i, r)) || (s.push(o), u && e.push(a)));
                        return s;
                    }
                    function _t(t, e, n, i, r, o) {
                        return (
                            i && !i[A] && (i = _t(i)),
                            r && !r[A] && (r = _t(r, o)),
                            ut(function (o, s, a, l) {
                                var u,
                                    c,
                                    h,
                                    p = [],
                                    f = [],
                                    d = s.length,
                                    m =
                                        o ||
                                        (function (t, e, n) {
                                            for (var i = 0, r = e.length; i < r; i++) at(t, e[i], n);
                                            return n;
                                        })(e || "*", a.nodeType ? [a] : a, []),
                                    v = !t || (!o && e) ? m : xt(m, p, t, a, l),
                                    g = n ? (r || (o ? t : d || i) ? [] : s) : v;
                                if ((n && n(v, g, a, l), i)) for (u = xt(g, f), i(u, [], a, l), c = u.length; c--; ) (h = u[c]) && (g[f[c]] = !(v[f[c]] = h));
                                if (o) {
                                    if (r || t) {
                                        if (r) {
                                            for (u = [], c = g.length; c--; ) (h = g[c]) && u.push((v[c] = h));
                                            r(null, (g = []), u, l);
                                        }
                                        for (c = g.length; c--; ) (h = g[c]) && (u = r ? L(o, h) : p[c]) > -1 && (o[u] = !(s[u] = h));
                                    }
                                } else (g = xt(g === s ? g.splice(d, g.length) : g)), r ? r(null, s, g, l) : $.apply(s, g);
                            })
                        );
                    }
                    function Tt(t) {
                        for (
                            var e,
                                n,
                                r,
                                o = t.length,
                                s = i.relative[t[0].type],
                                a = s || i.relative[" "],
                                l = s ? 1 : 0,
                                c = At(
                                    function (t) {
                                        return t === e;
                                    },
                                    a,
                                    !0
                                ),
                                h = At(
                                    function (t) {
                                        return L(e, t) > -1;
                                    },
                                    a,
                                    !0
                                ),
                                p = [
                                    function (t, n, i) {
                                        var r = (!s && (i || n !== u)) || ((e = n).nodeType ? c(t, n, i) : h(t, n, i));
                                        return (e = null), r;
                                    },
                                ];
                            l < o;
                            l++
                        )
                            if ((n = i.relative[t[l].type])) p = [At(bt(p), n)];
                            else {
                                if ((n = i.filter[t[l].type].apply(null, t[l].matches))[A]) {
                                    for (r = ++l; r < o && !i.relative[t[r].type]; r++);
                                    return _t(
                                        l > 1 && bt(p),
                                        l > 1 && wt(t.slice(0, l - 1).concat({ value: " " === t[l - 2].type ? "*" : "" })).replace(B, "$1"),
                                        n,
                                        l < r && Tt(t.slice(l, r)),
                                        r < o && Tt((t = t.slice(r))),
                                        r < o && wt(t)
                                    );
                                }
                                p.push(n);
                            }
                        return bt(p);
                    }
                    return (
                        (yt.prototype = i.filters = i.pseudos),
                        (i.setFilters = new yt()),
                        (s = at.tokenize = function (t, e) {
                            var n,
                                r,
                                o,
                                s,
                                a,
                                l,
                                u,
                                c = C[t + " "];
                            if (c) return e ? 0 : c.slice(0);
                            for (a = t, l = [], u = i.preFilter; a; ) {
                                for (s in ((n && !(r = W.exec(a))) || (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
                                (n = !1),
                                (r = q.exec(a)) && ((n = r.shift()), o.push({ value: n, type: r[0].replace(B, " ") }), (a = a.slice(n.length))),
                                i.filter))
                                    !(r = X[s].exec(a)) || (u[s] && !(r = u[s](r))) || ((n = r.shift()), o.push({ value: n, type: s, matches: r }), (a = a.slice(n.length)));
                                if (!n) break;
                            }
                            return e ? a.length : a ? at.error(t) : C(t, l).slice(0);
                        }),
                        (a = at.compile = function (t, e) {
                            var n,
                                r = [],
                                o = [],
                                a = S[t + " "];
                            if (!a) {
                                for (e || (e = s(t)), n = e.length; n--; ) (a = Tt(e[n]))[A] ? r.push(a) : o.push(a);
                                (a = S(
                                    t,
                                    (function (t, e) {
                                        var n = e.length > 0,
                                            r = t.length > 0,
                                            o = function (o, s, a, l, c) {
                                                var h,
                                                    d,
                                                    v,
                                                    g = 0,
                                                    y = "0",
                                                    w = o && [],
                                                    A = [],
                                                    b = u,
                                                    _ = o || (r && i.find.TAG("*", c)),
                                                    T = (x += null == b ? 1 : Math.random() || 0.1),
                                                    C = _.length;
                                                for (c && (u = s === f || s || c); y !== C && null != (h = _[y]); y++) {
                                                    if (r && h) {
                                                        for (d = 0, s || h.ownerDocument === f || (p(h), (a = !m)); (v = t[d++]); )
                                                            if (v(h, s || f, a)) {
                                                                l.push(h);
                                                                break;
                                                            }
                                                        c && (x = T);
                                                    }
                                                    n && ((h = !v && h) && g--, o && w.push(h));
                                                }
                                                if (((g += y), n && y !== g)) {
                                                    for (d = 0; (v = e[d++]); ) v(w, A, s, a);
                                                    if (o) {
                                                        if (g > 0) for (; y--; ) w[y] || A[y] || (A[y] = O.call(l));
                                                        A = xt(A);
                                                    }
                                                    $.apply(l, A), c && !o && A.length > 0 && g + e.length > 1 && at.uniqueSort(l);
                                                }
                                                return c && ((x = T), (u = b)), w;
                                            };
                                        return n ? ut(o) : o;
                                    })(o, r)
                                )).selector = t;
                            }
                            return a;
                        }),
                        (l = at.select = function (t, e, n, r) {
                            var o,
                                l,
                                u,
                                c,
                                h,
                                p = "function" == typeof t && t,
                                f = !r && s((t = p.selector || t));
                            if (((n = n || []), 1 === f.length)) {
                                if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === e.nodeType && m && i.relative[l[1].type]) {
                                    if (!(e = (i.find.ID(u.matches[0].replace(et, nt), e) || [])[0])) return n;
                                    p && (e = e.parentNode), (t = t.slice(l.shift().value.length));
                                }
                                for (o = X.needsContext.test(t) ? 0 : l.length; o-- && ((u = l[o]), !i.relative[(c = u.type)]); )
                                    if ((h = i.find[c]) && (r = h(u.matches[0].replace(et, nt), (tt.test(l[0].type) && gt(e.parentNode)) || e))) {
                                        if ((l.splice(o, 1), !(t = r.length && wt(l)))) return $.apply(n, r), n;
                                        break;
                                    }
                            }
                            return (p || a(t, f))(r, e, !m, n, !e || (tt.test(t) && gt(e.parentNode)) || e), n;
                        }),
                        (n.sortStable = A.split("").sort(k).join("") === A),
                        (n.detectDuplicates = !!h),
                        p(),
                        (n.sortDetached = ct(function (t) {
                            return 1 & t.compareDocumentPosition(f.createElement("fieldset"));
                        })),
                        ct(function (t) {
                            return (t.innerHTML = "<a href='#'></a>"), "#" === t.firstChild.getAttribute("href");
                        }) ||
                            ht("type|href|height|width", function (t, e, n) {
                                if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
                            }),
                        (n.attributes &&
                            ct(function (t) {
                                return (t.innerHTML = "<input/>"), t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
                            })) ||
                            ht("value", function (t, e, n) {
                                if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
                            }),
                        ct(function (t) {
                            return null == t.getAttribute("disabled");
                        }) ||
                            ht(N, function (t, e, n) {
                                var i;
                                if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
                            }),
                        at
                    );
                })(n);
            (_.find = S), (_.expr = S.selectors), (_.expr[":"] = _.expr.pseudos), (_.uniqueSort = _.unique = S.uniqueSort), (_.text = S.getText), (_.isXMLDoc = S.isXML), (_.contains = S.contains), (_.escapeSelector = S.escape);
            var P = function (t, e, n) {
                    for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
                        if (1 === t.nodeType) {
                            if (r && _(t).is(n)) break;
                            i.push(t);
                        }
                    return i;
                },
                k = function (t, e) {
                    for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                    return n;
                },
                E = _.expr.match.needsContext;
            function M(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
            }
            var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function I(t, e, n) {
                return y(e)
                    ? _.grep(t, function (t, i) {
                          return !!e.call(t, i, t) !== n;
                      })
                    : e.nodeType
                    ? _.grep(t, function (t) {
                          return (t === e) !== n;
                      })
                    : "string" != typeof e
                    ? _.grep(t, function (t) {
                          return h.call(e, t) > -1 !== n;
                      })
                    : _.filter(e, t, n);
            }
            (_.filter = function (t, e, n) {
                var i = e[0];
                return (
                    n && (t = ":not(" + t + ")"),
                    1 === e.length && 1 === i.nodeType
                        ? _.find.matchesSelector(i, t)
                            ? [i]
                            : []
                        : _.find.matches(
                              t,
                              _.grep(e, function (t) {
                                  return 1 === t.nodeType;
                              })
                          )
                );
            }),
                _.fn.extend({
                    find: function (t) {
                        var e,
                            n,
                            i = this.length,
                            r = this;
                        if ("string" != typeof t)
                            return this.pushStack(
                                _(t).filter(function () {
                                    for (e = 0; e < i; e++) if (_.contains(r[e], this)) return !0;
                                })
                            );
                        for (n = this.pushStack([]), e = 0; e < i; e++) _.find(t, r[e], n);
                        return i > 1 ? _.uniqueSort(n) : n;
                    },
                    filter: function (t) {
                        return this.pushStack(I(this, t || [], !1));
                    },
                    not: function (t) {
                        return this.pushStack(I(this, t || [], !0));
                    },
                    is: function (t) {
                        return !!I(this, "string" == typeof t && E.test(t) ? _(t) : t || [], !1).length;
                    },
                });
            var $,
                D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            ((_.fn.init = function (t, e, n) {
                var i, r;
                if (!t) return this;
                if (((n = n || $), "string" == typeof t)) {
                    if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : D.exec(t)) || (!i[1] && e)) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (((e = e instanceof _ ? e[0] : e), _.merge(this, _.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : s, !0)), O.test(i[1]) && _.isPlainObject(e)))
                            for (i in e) y(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this;
                    }
                    return (r = s.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this;
                }
                return t.nodeType ? ((this[0] = t), (this.length = 1), this) : y(t) ? (void 0 !== n.ready ? n.ready(t) : t(_)) : _.makeArray(t, this);
            }).prototype = _.fn),
                ($ = _(s));
            var L = /^(?:parents|prev(?:Until|All))/,
                N = { children: !0, contents: !0, next: !0, prev: !0 };
            function R(t, e) {
                for (; (t = t[e]) && 1 !== t.nodeType; );
                return t;
            }
            _.fn.extend({
                has: function (t) {
                    var e = _(t, this),
                        n = e.length;
                    return this.filter(function () {
                        for (var t = 0; t < n; t++) if (_.contains(this, e[t])) return !0;
                    });
                },
                closest: function (t, e) {
                    var n,
                        i = 0,
                        r = this.length,
                        o = [],
                        s = "string" != typeof t && _(t);
                    if (!E.test(t))
                        for (; i < r; i++)
                            for (n = this[i]; n && n !== e; n = n.parentNode)
                                if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && _.find.matchesSelector(n, t))) {
                                    o.push(n);
                                    break;
                                }
                    return this.pushStack(o.length > 1 ? _.uniqueSort(o) : o);
                },
                index: function (t) {
                    return t ? ("string" == typeof t ? h.call(_(t), this[0]) : h.call(this, t.jquery ? t[0] : t)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function (t, e) {
                    return this.pushStack(_.uniqueSort(_.merge(this.get(), _(t, e))));
                },
                addBack: function (t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
                },
            }),
                _.each(
                    {
                        parent: function (t) {
                            var e = t.parentNode;
                            return e && 11 !== e.nodeType ? e : null;
                        },
                        parents: function (t) {
                            return P(t, "parentNode");
                        },
                        parentsUntil: function (t, e, n) {
                            return P(t, "parentNode", n);
                        },
                        next: function (t) {
                            return R(t, "nextSibling");
                        },
                        prev: function (t) {
                            return R(t, "previousSibling");
                        },
                        nextAll: function (t) {
                            return P(t, "nextSibling");
                        },
                        prevAll: function (t) {
                            return P(t, "previousSibling");
                        },
                        nextUntil: function (t, e, n) {
                            return P(t, "nextSibling", n);
                        },
                        prevUntil: function (t, e, n) {
                            return P(t, "previousSibling", n);
                        },
                        siblings: function (t) {
                            return k((t.parentNode || {}).firstChild, t);
                        },
                        children: function (t) {
                            return k(t.firstChild);
                        },
                        contents: function (t) {
                            return void 0 !== t.contentDocument ? t.contentDocument : (M(t, "template") && (t = t.content || t), _.merge([], t.childNodes));
                        },
                    },
                    function (t, e) {
                        _.fn[t] = function (n, i) {
                            var r = _.map(this, e, n);
                            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = _.filter(i, r)), this.length > 1 && (N[t] || _.uniqueSort(r), L.test(t) && r.reverse()), this.pushStack(r);
                        };
                    }
                );
            var j = /[^\x20\t\r\n\f]+/g;
            function F(t) {
                return t;
            }
            function z(t) {
                throw t;
            }
            function H(t, e, n, i) {
                var r;
                try {
                    t && y((r = t.promise)) ? r.call(t).done(e).fail(n) : t && y((r = t.then)) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i));
                } catch (t) {
                    n.apply(void 0, [t]);
                }
            }
            (_.Callbacks = function (t) {
                t =
                    "string" == typeof t
                        ? (function (t) {
                              var e = {};
                              return (
                                  _.each(t.match(j) || [], function (t, n) {
                                      e[n] = !0;
                                  }),
                                  e
                              );
                          })(t)
                        : _.extend({}, t);
                var e,
                    n,
                    i,
                    r,
                    o = [],
                    s = [],
                    a = -1,
                    l = function () {
                        for (r = r || t.once, i = e = !0; s.length; a = -1) for (n = s.shift(); ++a < o.length; ) !1 === o[a].apply(n[0], n[1]) && t.stopOnFalse && ((a = o.length), (n = !1));
                        t.memory || (n = !1), (e = !1), r && (o = n ? [] : "");
                    },
                    u = {
                        add: function () {
                            return (
                                o &&
                                    (n && !e && ((a = o.length - 1), s.push(n)),
                                    (function e(n) {
                                        _.each(n, function (n, i) {
                                            y(i) ? (t.unique && u.has(i)) || o.push(i) : i && i.length && "string" !== x(i) && e(i);
                                        });
                                    })(arguments),
                                    n && !e && l()),
                                this
                            );
                        },
                        remove: function () {
                            return (
                                _.each(arguments, function (t, e) {
                                    for (var n; (n = _.inArray(e, o, n)) > -1; ) o.splice(n, 1), n <= a && a--;
                                }),
                                this
                            );
                        },
                        has: function (t) {
                            return t ? _.inArray(t, o) > -1 : o.length > 0;
                        },
                        empty: function () {
                            return o && (o = []), this;
                        },
                        disable: function () {
                            return (r = s = []), (o = n = ""), this;
                        },
                        disabled: function () {
                            return !o;
                        },
                        lock: function () {
                            return (r = s = []), n || e || (o = n = ""), this;
                        },
                        locked: function () {
                            return !!r;
                        },
                        fireWith: function (t, n) {
                            return r || ((n = [t, (n = n || []).slice ? n.slice() : n]), s.push(n), e || l()), this;
                        },
                        fire: function () {
                            return u.fireWith(this, arguments), this;
                        },
                        fired: function () {
                            return !!i;
                        },
                    };
                return u;
            }),
                _.extend({
                    Deferred: function (t) {
                        var e = [
                                ["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
                                ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"],
                            ],
                            i = "pending",
                            r = {
                                state: function () {
                                    return i;
                                },
                                always: function () {
                                    return o.done(arguments).fail(arguments), this;
                                },
                                catch: function (t) {
                                    return r.then(null, t);
                                },
                                pipe: function () {
                                    var t = arguments;
                                    return _.Deferred(function (n) {
                                        _.each(e, function (e, i) {
                                            var r = y(t[i[4]]) && t[i[4]];
                                            o[i[1]](function () {
                                                var t = r && r.apply(this, arguments);
                                                t && y(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [t] : arguments);
                                            });
                                        }),
                                            (t = null);
                                    }).promise();
                                },
                                then: function (t, i, r) {
                                    var o = 0;
                                    function s(t, e, i, r) {
                                        return function () {
                                            var a = this,
                                                l = arguments,
                                                u = function () {
                                                    var n, u;
                                                    if (!(t < o)) {
                                                        if ((n = i.apply(a, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                                        (u = n && ("object" == typeof n || "function" == typeof n) && n.then),
                                                            y(u)
                                                                ? r
                                                                    ? u.call(n, s(o, e, F, r), s(o, e, z, r))
                                                                    : (o++, u.call(n, s(o, e, F, r), s(o, e, z, r), s(o, e, F, e.notifyWith)))
                                                                : (i !== F && ((a = void 0), (l = [n])), (r || e.resolveWith)(a, l));
                                                    }
                                                },
                                                c = r
                                                    ? u
                                                    : function () {
                                                          try {
                                                              u();
                                                          } catch (n) {
                                                              _.Deferred.exceptionHook && _.Deferred.exceptionHook(n, c.stackTrace), t + 1 >= o && (i !== z && ((a = void 0), (l = [n])), e.rejectWith(a, l));
                                                          }
                                                      };
                                            t ? c() : (_.Deferred.getStackHook && (c.stackTrace = _.Deferred.getStackHook()), n.setTimeout(c));
                                        };
                                    }
                                    return _.Deferred(function (n) {
                                        e[0][3].add(s(0, n, y(r) ? r : F, n.notifyWith)), e[1][3].add(s(0, n, y(t) ? t : F)), e[2][3].add(s(0, n, y(i) ? i : z));
                                    }).promise();
                                },
                                promise: function (t) {
                                    return null != t ? _.extend(t, r) : r;
                                },
                            },
                            o = {};
                        return (
                            _.each(e, function (t, n) {
                                var s = n[2],
                                    a = n[5];
                                (r[n[1]] = s.add),
                                    a &&
                                        s.add(
                                            function () {
                                                i = a;
                                            },
                                            e[3 - t][2].disable,
                                            e[3 - t][3].disable,
                                            e[0][2].lock,
                                            e[0][3].lock
                                        ),
                                    s.add(n[3].fire),
                                    (o[n[0]] = function () {
                                        return o[n[0] + "With"](this === o ? void 0 : this, arguments), this;
                                    }),
                                    (o[n[0] + "With"] = s.fireWith);
                            }),
                            r.promise(o),
                            t && t.call(o, o),
                            o
                        );
                    },
                    when: function (t) {
                        var e = arguments.length,
                            n = e,
                            i = Array(n),
                            r = l.call(arguments),
                            o = _.Deferred(),
                            s = function (t) {
                                return function (n) {
                                    (i[t] = this), (r[t] = arguments.length > 1 ? l.call(arguments) : n), --e || o.resolveWith(i, r);
                                };
                            };
                        if (e <= 1 && (H(t, o.done(s(n)).resolve, o.reject, !e), "pending" === o.state() || y(r[n] && r[n].then))) return o.then();
                        for (; n--; ) H(r[n], s(n), o.reject);
                        return o.promise();
                    },
                });
            var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            (_.Deferred.exceptionHook = function (t, e) {
                n.console && n.console.warn && t && B.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
            }),
                (_.readyException = function (t) {
                    n.setTimeout(function () {
                        throw t;
                    });
                });
            var W = _.Deferred();
            function q() {
                s.removeEventListener("DOMContentLoaded", q), n.removeEventListener("load", q), _.ready();
            }
            (_.fn.ready = function (t) {
                return (
                    W.then(t).catch(function (t) {
                        _.readyException(t);
                    }),
                    this
                );
            }),
                _.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function (t) {
                        (!0 === t ? --_.readyWait : _.isReady) || ((_.isReady = !0), (!0 !== t && --_.readyWait > 0) || W.resolveWith(s, [_]));
                    },
                }),
                (_.ready.then = W.then),
                "complete" === s.readyState || ("loading" !== s.readyState && !s.documentElement.doScroll) ? n.setTimeout(_.ready) : (s.addEventListener("DOMContentLoaded", q), n.addEventListener("load", q));
            var V = function (t, e, n, i, r, o, s) {
                    var a = 0,
                        l = t.length,
                        u = null == n;
                    if ("object" === x(n)) for (a in ((r = !0), n)) V(t, e, a, n[a], !0, o, s);
                    else if (
                        void 0 !== i &&
                        ((r = !0),
                        y(i) || (s = !0),
                        u &&
                            (s
                                ? (e.call(t, i), (e = null))
                                : ((u = e),
                                  (e = function (t, e, n) {
                                      return u.call(_(t), n);
                                  }))),
                        e)
                    )
                        for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                    return r ? t : u ? e.call(t) : l ? e(t[0], n) : o;
                },
                Y = /^-ms-/,
                Q = /-([a-z])/g;
            function X(t, e) {
                return e.toUpperCase();
            }
            function G(t) {
                return t.replace(Y, "ms-").replace(Q, X);
            }
            var U = function (t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
            };
            function Z() {
                this.expando = _.expando + Z.uid++;
            }
            (Z.uid = 1),
                (Z.prototype = {
                    cache: function (t) {
                        var e = t[this.expando];
                        return e || ((e = {}), U(t) && (t.nodeType ? (t[this.expando] = e) : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e;
                    },
                    set: function (t, e, n) {
                        var i,
                            r = this.cache(t);
                        if ("string" == typeof e) r[G(e)] = n;
                        else for (i in e) r[G(i)] = e[i];
                        return r;
                    },
                    get: function (t, e) {
                        return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][G(e)];
                    },
                    access: function (t, e, n) {
                        return void 0 === e || (e && "string" == typeof e && void 0 === n) ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e);
                    },
                    remove: function (t, e) {
                        var n,
                            i = t[this.expando];
                        if (void 0 !== i) {
                            if (void 0 !== e) {
                                n = (e = Array.isArray(e) ? e.map(G) : (e = G(e)) in i ? [e] : e.match(j) || []).length;
                                for (; n--; ) delete i[e[n]];
                            }
                            (void 0 === e || _.isEmptyObject(i)) && (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
                        }
                    },
                    hasData: function (t) {
                        var e = t[this.expando];
                        return void 0 !== e && !_.isEmptyObject(e);
                    },
                });
            var J = new Z(),
                K = new Z(),
                tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                et = /[A-Z]/g;
            function nt(t, e, n) {
                var i;
                if (void 0 === n && 1 === t.nodeType)
                    if (((i = "data-" + e.replace(et, "-$&").toLowerCase()), "string" == typeof (n = t.getAttribute(i)))) {
                        try {
                            n = (function (t) {
                                return "true" === t || ("false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t));
                            })(n);
                        } catch (t) {}
                        K.set(t, e, n);
                    } else n = void 0;
                return n;
            }
            _.extend({
                hasData: function (t) {
                    return K.hasData(t) || J.hasData(t);
                },
                data: function (t, e, n) {
                    return K.access(t, e, n);
                },
                removeData: function (t, e) {
                    K.remove(t, e);
                },
                _data: function (t, e, n) {
                    return J.access(t, e, n);
                },
                _removeData: function (t, e) {
                    J.remove(t, e);
                },
            }),
                _.fn.extend({
                    data: function (t, e) {
                        var n,
                            i,
                            r,
                            o = this[0],
                            s = o && o.attributes;
                        if (void 0 === t) {
                            if (this.length && ((r = K.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                                for (n = s.length; n--; ) s[n] && 0 === (i = s[n].name).indexOf("data-") && ((i = G(i.slice(5))), nt(o, i, r[i]));
                                J.set(o, "hasDataAttrs", !0);
                            }
                            return r;
                        }
                        return "object" == typeof t
                            ? this.each(function () {
                                  K.set(this, t);
                              })
                            : V(
                                  this,
                                  function (e) {
                                      var n;
                                      if (o && void 0 === e) return void 0 !== (n = K.get(o, t)) ? n : void 0 !== (n = nt(o, t)) ? n : void 0;
                                      this.each(function () {
                                          K.set(this, t, e);
                                      });
                                  },
                                  null,
                                  e,
                                  arguments.length > 1,
                                  null,
                                  !0
                              );
                    },
                    removeData: function (t) {
                        return this.each(function () {
                            K.remove(this, t);
                        });
                    },
                }),
                _.extend({
                    queue: function (t, e, n) {
                        var i;
                        if (t) return (e = (e || "fx") + "queue"), (i = J.get(t, e)), n && (!i || Array.isArray(n) ? (i = J.access(t, e, _.makeArray(n))) : i.push(n)), i || [];
                    },
                    dequeue: function (t, e) {
                        e = e || "fx";
                        var n = _.queue(t, e),
                            i = n.length,
                            r = n.shift(),
                            o = _._queueHooks(t, e);
                        "inprogress" === r && ((r = n.shift()), i--),
                            r &&
                                ("fx" === e && n.unshift("inprogress"),
                                delete o.stop,
                                r.call(
                                    t,
                                    function () {
                                        _.dequeue(t, e);
                                    },
                                    o
                                )),
                            !i && o && o.empty.fire();
                    },
                    _queueHooks: function (t, e) {
                        var n = e + "queueHooks";
                        return (
                            J.get(t, n) ||
                            J.access(t, n, {
                                empty: _.Callbacks("once memory").add(function () {
                                    J.remove(t, [e + "queue", n]);
                                }),
                            })
                        );
                    },
                }),
                _.fn.extend({
                    queue: function (t, e) {
                        var n = 2;
                        return (
                            "string" != typeof t && ((e = t), (t = "fx"), n--),
                            arguments.length < n
                                ? _.queue(this[0], t)
                                : void 0 === e
                                ? this
                                : this.each(function () {
                                      var n = _.queue(this, t, e);
                                      _._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && _.dequeue(this, t);
                                  })
                        );
                    },
                    dequeue: function (t) {
                        return this.each(function () {
                            _.dequeue(this, t);
                        });
                    },
                    clearQueue: function (t) {
                        return this.queue(t || "fx", []);
                    },
                    promise: function (t, e) {
                        var n,
                            i = 1,
                            r = _.Deferred(),
                            o = this,
                            s = this.length,
                            a = function () {
                                --i || r.resolveWith(o, [o]);
                            };
                        for ("string" != typeof t && ((e = t), (t = void 0)), t = t || "fx"; s--; ) (n = J.get(o[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                        return a(), r.promise(e);
                    },
                });
            var it = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                rt = new RegExp("^(?:([+-])=|)(" + it + ")([a-z%]*)$", "i"),
                ot = ["Top", "Right", "Bottom", "Left"],
                st = s.documentElement,
                at = function (t) {
                    return _.contains(t.ownerDocument, t);
                },
                lt = { composed: !0 };
            st.getRootNode &&
                (at = function (t) {
                    return _.contains(t.ownerDocument, t) || t.getRootNode(lt) === t.ownerDocument;
                });
            var ut = function (t, e) {
                    return "none" === (t = e || t).style.display || ("" === t.style.display && at(t) && "none" === _.css(t, "display"));
                },
                ct = function (t, e, n, i) {
                    var r,
                        o,
                        s = {};
                    for (o in e) (s[o] = t.style[o]), (t.style[o] = e[o]);
                    for (o in ((r = n.apply(t, i || [])), e)) t.style[o] = s[o];
                    return r;
                };
            function ht(t, e, n, i) {
                var r,
                    o,
                    s = 20,
                    a = i
                        ? function () {
                              return i.cur();
                          }
                        : function () {
                              return _.css(t, e, "");
                          },
                    l = a(),
                    u = (n && n[3]) || (_.cssNumber[e] ? "" : "px"),
                    c = t.nodeType && (_.cssNumber[e] || ("px" !== u && +l)) && rt.exec(_.css(t, e));
                if (c && c[3] !== u) {
                    for (l /= 2, u = u || c[3], c = +l || 1; s--; ) _.style(t, e, c + u), (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0), (c /= o);
                    (c *= 2), _.style(t, e, c + u), (n = n || []);
                }
                return n && ((c = +c || +l || 0), (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = u), (i.start = c), (i.end = r))), r;
            }
            var pt = {};
            function ft(t) {
                var e,
                    n = t.ownerDocument,
                    i = t.nodeName,
                    r = pt[i];
                return r || ((e = n.body.appendChild(n.createElement(i))), (r = _.css(e, "display")), e.parentNode.removeChild(e), "none" === r && (r = "block"), (pt[i] = r), r);
            }
            function dt(t, e) {
                for (var n, i, r = [], o = 0, s = t.length; o < s; o++)
                    (i = t[o]).style &&
                        ((n = i.style.display),
                        e ? ("none" === n && ((r[o] = J.get(i, "display") || null), r[o] || (i.style.display = "")), "" === i.style.display && ut(i) && (r[o] = ft(i))) : "none" !== n && ((r[o] = "none"), J.set(i, "display", n)));
                for (o = 0; o < s; o++) null != r[o] && (t[o].style.display = r[o]);
                return t;
            }
            _.fn.extend({
                show: function () {
                    return dt(this, !0);
                },
                hide: function () {
                    return dt(this);
                },
                toggle: function (t) {
                    return "boolean" == typeof t
                        ? t
                            ? this.show()
                            : this.hide()
                        : this.each(function () {
                              ut(this) ? _(this).show() : _(this).hide();
                          });
                },
            });
            var mt = /^(?:checkbox|radio)$/i,
                vt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                gt = /^$|^module$|\/(?:java|ecma)script/i,
                yt = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""],
                };
            function wt(t, e) {
                var n;
                return (n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : []), void 0 === e || (e && M(t, e)) ? _.merge([t], n) : n;
            }
            function At(t, e) {
                for (var n = 0, i = t.length; n < i; n++) J.set(t[n], "globalEval", !e || J.get(e[n], "globalEval"));
            }
            (yt.optgroup = yt.option), (yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead), (yt.th = yt.td);
            var bt,
                xt,
                _t = /<|&#?\w+;/;
            function Tt(t, e, n, i, r) {
                for (var o, s, a, l, u, c, h = e.createDocumentFragment(), p = [], f = 0, d = t.length; f < d; f++)
                    if ((o = t[f]) || 0 === o)
                        if ("object" === x(o)) _.merge(p, o.nodeType ? [o] : o);
                        else if (_t.test(o)) {
                            for (s = s || h.appendChild(e.createElement("div")), a = (vt.exec(o) || ["", ""])[1].toLowerCase(), l = yt[a] || yt._default, s.innerHTML = l[1] + _.htmlPrefilter(o) + l[2], c = l[0]; c--; ) s = s.lastChild;
                            _.merge(p, s.childNodes), ((s = h.firstChild).textContent = "");
                        } else p.push(e.createTextNode(o));
                for (h.textContent = "", f = 0; (o = p[f++]); )
                    if (i && _.inArray(o, i) > -1) r && r.push(o);
                    else if (((u = at(o)), (s = wt(h.appendChild(o), "script")), u && At(s), n)) for (c = 0; (o = s[c++]); ) gt.test(o.type || "") && n.push(o);
                return h;
            }
            (bt = s.createDocumentFragment().appendChild(s.createElement("div"))),
                (xt = s.createElement("input")).setAttribute("type", "radio"),
                xt.setAttribute("checked", "checked"),
                xt.setAttribute("name", "t"),
                bt.appendChild(xt),
                (g.checkClone = bt.cloneNode(!0).cloneNode(!0).lastChild.checked),
                (bt.innerHTML = "<textarea>x</textarea>"),
                (g.noCloneChecked = !!bt.cloneNode(!0).lastChild.defaultValue);
            var Ct = /^key/,
                St = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Pt = /^([^.]*)(?:\.(.+)|)/;
            function kt() {
                return !0;
            }
            function Et() {
                return !1;
            }
            function Mt(t, e) {
                return (
                    (t ===
                        (function () {
                            try {
                                return s.activeElement;
                            } catch (t) {}
                        })()) ==
                    ("focus" === e)
                );
            }
            function Ot(t, e, n, i, r, o) {
                var s, a;
                if ("object" == typeof e) {
                    for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), e)) Ot(t, a, n, i, e[a], o);
                    return t;
                }
                if ((null == i && null == r ? ((r = n), (i = n = void 0)) : null == r && ("string" == typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))), !1 === r)) r = Et;
                else if (!r) return t;
                return (
                    1 === o &&
                        ((s = r),
                        ((r = function (t) {
                            return _().off(t), s.apply(this, arguments);
                        }).guid = s.guid || (s.guid = _.guid++))),
                    t.each(function () {
                        _.event.add(this, e, r, i, n);
                    })
                );
            }
            function It(t, e, n) {
                n
                    ? (J.set(t, e, !1),
                      _.event.add(t, e, {
                          namespace: !1,
                          handler: function (t) {
                              var i,
                                  r,
                                  o = J.get(this, e);
                              if (1 & t.isTrigger && this[e]) {
                                  if (o.length) (_.event.special[e] || {}).delegateType && t.stopPropagation();
                                  else if (((o = l.call(arguments)), J.set(this, e, o), (i = n(this, e)), this[e](), o !== (r = J.get(this, e)) || i ? J.set(this, e, !1) : (r = {}), o !== r))
                                      return t.stopImmediatePropagation(), t.preventDefault(), r.value;
                              } else o.length && (J.set(this, e, { value: _.event.trigger(_.extend(o[0], _.Event.prototype), o.slice(1), this) }), t.stopImmediatePropagation());
                          },
                      }))
                    : void 0 === J.get(t, e) && _.event.add(t, e, kt);
            }
            (_.event = {
                global: {},
                add: function (t, e, n, i, r) {
                    var o,
                        s,
                        a,
                        l,
                        u,
                        c,
                        h,
                        p,
                        f,
                        d,
                        m,
                        v = J.get(t);
                    if (v)
                        for (
                            n.handler && ((n = (o = n).handler), (r = o.selector)),
                                r && _.find.matchesSelector(st, r),
                                n.guid || (n.guid = _.guid++),
                                (l = v.events) || (l = v.events = {}),
                                (s = v.handle) ||
                                    (s = v.handle = function (e) {
                                        return void 0 !== _ && _.event.triggered !== e.type ? _.event.dispatch.apply(t, arguments) : void 0;
                                    }),
                                u = (e = (e || "").match(j) || [""]).length;
                            u--;

                        )
                            (f = m = (a = Pt.exec(e[u]) || [])[1]),
                                (d = (a[2] || "").split(".").sort()),
                                f &&
                                    ((h = _.event.special[f] || {}),
                                    (f = (r ? h.delegateType : h.bindType) || f),
                                    (h = _.event.special[f] || {}),
                                    (c = _.extend({ type: f, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && _.expr.match.needsContext.test(r), namespace: d.join(".") }, o)),
                                    (p = l[f]) || (((p = l[f] = []).delegateCount = 0), (h.setup && !1 !== h.setup.call(t, i, d, s)) || (t.addEventListener && t.addEventListener(f, s))),
                                    h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
                                    r ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                                    (_.event.global[f] = !0));
                },
                remove: function (t, e, n, i, r) {
                    var o,
                        s,
                        a,
                        l,
                        u,
                        c,
                        h,
                        p,
                        f,
                        d,
                        m,
                        v = J.hasData(t) && J.get(t);
                    if (v && (l = v.events)) {
                        for (u = (e = (e || "").match(j) || [""]).length; u--; )
                            if (((f = m = (a = Pt.exec(e[u]) || [])[1]), (d = (a[2] || "").split(".").sort()), f)) {
                                for (h = _.event.special[f] || {}, p = l[(f = (i ? h.delegateType : h.bindType) || f)] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--; )
                                    (c = p[o]),
                                        (!r && m !== c.origType) ||
                                            (n && n.guid !== c.guid) ||
                                            (a && !a.test(c.namespace)) ||
                                            (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                                            (p.splice(o, 1), c.selector && p.delegateCount--, h.remove && h.remove.call(t, c));
                                s && !p.length && ((h.teardown && !1 !== h.teardown.call(t, d, v.handle)) || _.removeEvent(t, f, v.handle), delete l[f]);
                            } else for (f in l) _.event.remove(t, f + e[u], n, i, !0);
                        _.isEmptyObject(l) && J.remove(t, "handle events");
                    }
                },
                dispatch: function (t) {
                    var e,
                        n,
                        i,
                        r,
                        o,
                        s,
                        a = _.event.fix(t),
                        l = new Array(arguments.length),
                        u = (J.get(this, "events") || {})[a.type] || [],
                        c = _.event.special[a.type] || {};
                    for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                    if (((a.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, a))) {
                        for (s = _.event.handlers.call(this, a, u), e = 0; (r = s[e++]) && !a.isPropagationStopped(); )
                            for (a.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                                (a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace)) ||
                                    ((a.handleObj = o), (a.data = o.data), void 0 !== (i = ((_.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, a), a.result;
                    }
                },
                handlers: function (t, e) {
                    var n,
                        i,
                        r,
                        o,
                        s,
                        a = [],
                        l = e.delegateCount,
                        u = t.target;
                    if (l && u.nodeType && !("click" === t.type && t.button >= 1))
                        for (; u !== this; u = u.parentNode || this)
                            if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                                for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[(r = (i = e[n]).selector + " ")] && (s[r] = i.needsContext ? _(r, this).index(u) > -1 : _.find(r, this, null, [u]).length), s[r] && o.push(i);
                                o.length && a.push({ elem: u, handlers: o });
                            }
                    return (u = this), l < e.length && a.push({ elem: u, handlers: e.slice(l) }), a;
                },
                addProp: function (t, e) {
                    Object.defineProperty(_.Event.prototype, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: y(e)
                            ? function () {
                                  if (this.originalEvent) return e(this.originalEvent);
                              }
                            : function () {
                                  if (this.originalEvent) return this.originalEvent[t];
                              },
                        set: function (e) {
                            Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
                        },
                    });
                },
                fix: function (t) {
                    return t[_.expando] ? t : new _.Event(t);
                },
                special: {
                    load: { noBubble: !0 },
                    click: {
                        setup: function (t) {
                            var e = this || t;
                            return mt.test(e.type) && e.click && M(e, "input") && It(e, "click", kt), !1;
                        },
                        trigger: function (t) {
                            var e = this || t;
                            return mt.test(e.type) && e.click && M(e, "input") && It(e, "click"), !0;
                        },
                        _default: function (t) {
                            var e = t.target;
                            return (mt.test(e.type) && e.click && M(e, "input") && J.get(e, "click")) || M(e, "a");
                        },
                    },
                    beforeunload: {
                        postDispatch: function (t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                        },
                    },
                },
            }),
                (_.removeEvent = function (t, e, n) {
                    t.removeEventListener && t.removeEventListener(e, n);
                }),
                (_.Event = function (t, e) {
                    if (!(this instanceof _.Event)) return new _.Event(t, e);
                    t && t.type
                        ? ((this.originalEvent = t),
                          (this.type = t.type),
                          (this.isDefaultPrevented = t.defaultPrevented || (void 0 === t.defaultPrevented && !1 === t.returnValue) ? kt : Et),
                          (this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target),
                          (this.currentTarget = t.currentTarget),
                          (this.relatedTarget = t.relatedTarget))
                        : (this.type = t),
                        e && _.extend(this, e),
                        (this.timeStamp = (t && t.timeStamp) || Date.now()),
                        (this[_.expando] = !0);
                }),
                (_.Event.prototype = {
                    constructor: _.Event,
                    isDefaultPrevented: Et,
                    isPropagationStopped: Et,
                    isImmediatePropagationStopped: Et,
                    isSimulated: !1,
                    preventDefault: function () {
                        var t = this.originalEvent;
                        (this.isDefaultPrevented = kt), t && !this.isSimulated && t.preventDefault();
                    },
                    stopPropagation: function () {
                        var t = this.originalEvent;
                        (this.isPropagationStopped = kt), t && !this.isSimulated && t.stopPropagation();
                    },
                    stopImmediatePropagation: function () {
                        var t = this.originalEvent;
                        (this.isImmediatePropagationStopped = kt), t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
                    },
                }),
                _.each(
                    {
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        code: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: function (t) {
                            var e = t.button;
                            return null == t.which && Ct.test(t.type) ? (null != t.charCode ? t.charCode : t.keyCode) : !t.which && void 0 !== e && St.test(t.type) ? (1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0) : t.which;
                        },
                    },
                    _.event.addProp
                ),
                _.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
                    _.event.special[t] = {
                        setup: function () {
                            return It(this, t, Mt), !1;
                        },
                        trigger: function () {
                            return It(this, t), !0;
                        },
                        delegateType: e,
                    };
                }),
                _.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, e) {
                    _.event.special[t] = {
                        delegateType: e,
                        bindType: e,
                        handle: function (t) {
                            var n,
                                i = this,
                                r = t.relatedTarget,
                                o = t.handleObj;
                            return (r && (r === i || _.contains(i, r))) || ((t.type = o.origType), (n = o.handler.apply(this, arguments)), (t.type = e)), n;
                        },
                    };
                }),
                _.fn.extend({
                    on: function (t, e, n, i) {
                        return Ot(this, t, e, n, i);
                    },
                    one: function (t, e, n, i) {
                        return Ot(this, t, e, n, i, 1);
                    },
                    off: function (t, e, n) {
                        var i, r;
                        if (t && t.preventDefault && t.handleObj) return (i = t.handleObj), _(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                        if ("object" == typeof t) {
                            for (r in t) this.off(r, e, t[r]);
                            return this;
                        }
                        return (
                            (!1 !== e && "function" != typeof e) || ((n = e), (e = void 0)),
                            !1 === n && (n = Et),
                            this.each(function () {
                                _.event.remove(this, t, n, e);
                            })
                        );
                    },
                });
            var $t = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Dt = /<script|<style|<link/i,
                Lt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function Rt(t, e) {
                return (M(t, "table") && M(11 !== e.nodeType ? e : e.firstChild, "tr") && _(t).children("tbody")[0]) || t;
            }
            function jt(t) {
                return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
            }
            function Ft(t) {
                return "true/" === (t.type || "").slice(0, 5) ? (t.type = t.type.slice(5)) : t.removeAttribute("type"), t;
            }
            function zt(t, e) {
                var n, i, r, o, s, a, l, u;
                if (1 === e.nodeType) {
                    if (J.hasData(t) && ((o = J.access(t)), (s = J.set(e, o)), (u = o.events))) for (r in (delete s.handle, (s.events = {}), u)) for (n = 0, i = u[r].length; n < i; n++) _.event.add(e, r, u[r][n]);
                    K.hasData(t) && ((a = K.access(t)), (l = _.extend({}, a)), K.set(e, l));
                }
            }
            function Ht(t, e) {
                var n = e.nodeName.toLowerCase();
                "input" === n && mt.test(t.type) ? (e.checked = t.checked) : ("input" !== n && "textarea" !== n) || (e.defaultValue = t.defaultValue);
            }
            function Bt(t, e, n, i) {
                e = u.apply([], e);
                var r,
                    o,
                    s,
                    a,
                    l,
                    c,
                    h = 0,
                    p = t.length,
                    f = p - 1,
                    d = e[0],
                    m = y(d);
                if (m || (p > 1 && "string" == typeof d && !g.checkClone && Lt.test(d)))
                    return t.each(function (r) {
                        var o = t.eq(r);
                        m && (e[0] = d.call(this, r, o.html())), Bt(o, e, n, i);
                    });
                if (p && ((o = (r = Tt(e, t[0].ownerDocument, !1, t, i)).firstChild), 1 === r.childNodes.length && (r = o), o || i)) {
                    for (a = (s = _.map(wt(r, "script"), jt)).length; h < p; h++) (l = r), h !== f && ((l = _.clone(l, !0, !0)), a && _.merge(s, wt(l, "script"))), n.call(t[h], l, h);
                    if (a)
                        for (c = s[s.length - 1].ownerDocument, _.map(s, Ft), h = 0; h < a; h++)
                            (l = s[h]),
                                gt.test(l.type || "") &&
                                    !J.access(l, "globalEval") &&
                                    _.contains(c, l) &&
                                    (l.src && "module" !== (l.type || "").toLowerCase() ? _._evalUrl && !l.noModule && _._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }) : b(l.textContent.replace(Nt, ""), l, c));
                }
                return t;
            }
            function Wt(t, e, n) {
                for (var i, r = e ? _.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || _.cleanData(wt(i)), i.parentNode && (n && at(i) && At(wt(i, "script")), i.parentNode.removeChild(i));
                return t;
            }
            _.extend({
                htmlPrefilter: function (t) {
                    return t.replace($t, "<$1></$2>");
                },
                clone: function (t, e, n) {
                    var i,
                        r,
                        o,
                        s,
                        a = t.cloneNode(!0),
                        l = at(t);
                    if (!(g.noCloneChecked || (1 !== t.nodeType && 11 !== t.nodeType) || _.isXMLDoc(t))) for (s = wt(a), i = 0, r = (o = wt(t)).length; i < r; i++) Ht(o[i], s[i]);
                    if (e)
                        if (n) for (o = o || wt(t), s = s || wt(a), i = 0, r = o.length; i < r; i++) zt(o[i], s[i]);
                        else zt(t, a);
                    return (s = wt(a, "script")).length > 0 && At(s, !l && wt(t, "script")), a;
                },
                cleanData: function (t) {
                    for (var e, n, i, r = _.event.special, o = 0; void 0 !== (n = t[o]); o++)
                        if (U(n)) {
                            if ((e = n[J.expando])) {
                                if (e.events) for (i in e.events) r[i] ? _.event.remove(n, i) : _.removeEvent(n, i, e.handle);
                                n[J.expando] = void 0;
                            }
                            n[K.expando] && (n[K.expando] = void 0);
                        }
                },
            }),
                _.fn.extend({
                    detach: function (t) {
                        return Wt(this, t, !0);
                    },
                    remove: function (t) {
                        return Wt(this, t);
                    },
                    text: function (t) {
                        return V(
                            this,
                            function (t) {
                                return void 0 === t
                                    ? _.text(this)
                                    : this.empty().each(function () {
                                          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = t);
                                      });
                            },
                            null,
                            t,
                            arguments.length
                        );
                    },
                    append: function () {
                        return Bt(this, arguments, function (t) {
                            (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Rt(this, t).appendChild(t);
                        });
                    },
                    prepend: function () {
                        return Bt(this, arguments, function (t) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var e = Rt(this, t);
                                e.insertBefore(t, e.firstChild);
                            }
                        });
                    },
                    before: function () {
                        return Bt(this, arguments, function (t) {
                            this.parentNode && this.parentNode.insertBefore(t, this);
                        });
                    },
                    after: function () {
                        return Bt(this, arguments, function (t) {
                            this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
                        });
                    },
                    empty: function () {
                        for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (_.cleanData(wt(t, !1)), (t.textContent = ""));
                        return this;
                    },
                    clone: function (t, e) {
                        return (
                            (t = null != t && t),
                            (e = null == e ? t : e),
                            this.map(function () {
                                return _.clone(this, t, e);
                            })
                        );
                    },
                    html: function (t) {
                        return V(
                            this,
                            function (t) {
                                var e = this[0] || {},
                                    n = 0,
                                    i = this.length;
                                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                                if ("string" == typeof t && !Dt.test(t) && !yt[(vt.exec(t) || ["", ""])[1].toLowerCase()]) {
                                    t = _.htmlPrefilter(t);
                                    try {
                                        for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (_.cleanData(wt(e, !1)), (e.innerHTML = t));
                                        e = 0;
                                    } catch (t) {}
                                }
                                e && this.empty().append(t);
                            },
                            null,
                            t,
                            arguments.length
                        );
                    },
                    replaceWith: function () {
                        var t = [];
                        return Bt(
                            this,
                            arguments,
                            function (e) {
                                var n = this.parentNode;
                                _.inArray(this, t) < 0 && (_.cleanData(wt(this)), n && n.replaceChild(e, this));
                            },
                            t
                        );
                    },
                }),
                _.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, e) {
                    _.fn[t] = function (t) {
                        for (var n, i = [], r = _(t), o = r.length - 1, s = 0; s <= o; s++) (n = s === o ? this : this.clone(!0)), _(r[s])[e](n), c.apply(i, n.get());
                        return this.pushStack(i);
                    };
                });
            var qt = new RegExp("^(" + it + ")(?!px)[a-z%]+$", "i"),
                Vt = function (t) {
                    var e = t.ownerDocument.defaultView;
                    return (e && e.opener) || (e = n), e.getComputedStyle(t);
                },
                Yt = new RegExp(ot.join("|"), "i");
            function Qt(t, e, n) {
                var i,
                    r,
                    o,
                    s,
                    a = t.style;
                return (
                    (n = n || Vt(t)) &&
                        ("" !== (s = n.getPropertyValue(e) || n[e]) || at(t) || (s = _.style(t, e)),
                        !g.pixelBoxStyles() && qt.test(s) && Yt.test(e) && ((i = a.width), (r = a.minWidth), (o = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = n.width), (a.width = i), (a.minWidth = r), (a.maxWidth = o))),
                    void 0 !== s ? s + "" : s
                );
            }
            function Xt(t, e) {
                return {
                    get: function () {
                        if (!t()) return (this.get = e).apply(this, arguments);
                        delete this.get;
                    },
                };
            }
            !(function () {
                function t() {
                    if (c) {
                        (u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                            (c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                            st.appendChild(u).appendChild(c);
                        var t = n.getComputedStyle(c);
                        (i = "1%" !== t.top),
                            (l = 12 === e(t.marginLeft)),
                            (c.style.right = "60%"),
                            (a = 36 === e(t.right)),
                            (r = 36 === e(t.width)),
                            (c.style.position = "absolute"),
                            (o = 12 === e(c.offsetWidth / 3)),
                            st.removeChild(u),
                            (c = null);
                    }
                }
                function e(t) {
                    return Math.round(parseFloat(t));
                }
                var i,
                    r,
                    o,
                    a,
                    l,
                    u = s.createElement("div"),
                    c = s.createElement("div");
                c.style &&
                    ((c.style.backgroundClip = "content-box"),
                    (c.cloneNode(!0).style.backgroundClip = ""),
                    (g.clearCloneStyle = "content-box" === c.style.backgroundClip),
                    _.extend(g, {
                        boxSizingReliable: function () {
                            return t(), r;
                        },
                        pixelBoxStyles: function () {
                            return t(), a;
                        },
                        pixelPosition: function () {
                            return t(), i;
                        },
                        reliableMarginLeft: function () {
                            return t(), l;
                        },
                        scrollboxSize: function () {
                            return t(), o;
                        },
                    }));
            })();
            var Gt = ["Webkit", "Moz", "ms"],
                Ut = s.createElement("div").style,
                Zt = {};
            function Jt(t) {
                var e = _.cssProps[t] || Zt[t];
                return (
                    e ||
                    (t in Ut
                        ? t
                        : (Zt[t] =
                              (function (t) {
                                  for (var e = t[0].toUpperCase() + t.slice(1), n = Gt.length; n--; ) if ((t = Gt[n] + e) in Ut) return t;
                              })(t) || t))
                );
            }
            var Kt = /^(none|table(?!-c[ea]).+)/,
                te = /^--/,
                ee = { position: "absolute", visibility: "hidden", display: "block" },
                ne = { letterSpacing: "0", fontWeight: "400" };
            function ie(t, e, n) {
                var i = rt.exec(e);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
            }
            function re(t, e, n, i, r, o) {
                var s = "width" === e ? 1 : 0,
                    a = 0,
                    l = 0;
                if (n === (i ? "border" : "content")) return 0;
                for (; s < 4; s += 2)
                    "margin" === n && (l += _.css(t, n + ot[s], !0, r)),
                        i
                            ? ("content" === n && (l -= _.css(t, "padding" + ot[s], !0, r)), "margin" !== n && (l -= _.css(t, "border" + ot[s] + "Width", !0, r)))
                            : ((l += _.css(t, "padding" + ot[s], !0, r)), "padding" !== n ? (l += _.css(t, "border" + ot[s] + "Width", !0, r)) : (a += _.css(t, "border" + ot[s] + "Width", !0, r)));
                return !i && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - 0.5)) || 0), l;
            }
            function oe(t, e, n) {
                var i = Vt(t),
                    r = (!g.boxSizingReliable() || n) && "border-box" === _.css(t, "boxSizing", !1, i),
                    o = r,
                    s = Qt(t, e, i),
                    a = "offset" + e[0].toUpperCase() + e.slice(1);
                if (qt.test(s)) {
                    if (!n) return s;
                    s = "auto";
                }
                return (
                    ((!g.boxSizingReliable() && r) || "auto" === s || (!parseFloat(s) && "inline" === _.css(t, "display", !1, i))) &&
                        t.getClientRects().length &&
                        ((r = "border-box" === _.css(t, "boxSizing", !1, i)), (o = a in t) && (s = t[a])),
                    (s = parseFloat(s) || 0) + re(t, e, n || (r ? "border" : "content"), o, i, s) + "px"
                );
            }
            function se(t, e, n, i, r) {
                return new se.prototype.init(t, e, n, i, r);
            }
            _.extend({
                cssHooks: {
                    opacity: {
                        get: function (t, e) {
                            if (e) {
                                var n = Qt(t, "opacity");
                                return "" === n ? "1" : n;
                            }
                        },
                    },
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                },
                cssProps: {},
                style: function (t, e, n, i) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var r,
                            o,
                            s,
                            a = G(e),
                            l = te.test(e),
                            u = t.style;
                        if ((l || (e = Jt(a)), (s = _.cssHooks[e] || _.cssHooks[a]), void 0 === n)) return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : u[e];
                        "string" === (o = typeof n) && (r = rt.exec(n)) && r[1] && ((n = ht(t, e, r)), (o = "number")),
                            null != n &&
                                n == n &&
                                ("number" !== o || l || (n += (r && r[3]) || (_.cssNumber[a] ? "" : "px")),
                                g.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"),
                                (s && "set" in s && void 0 === (n = s.set(t, n, i))) || (l ? u.setProperty(e, n) : (u[e] = n)));
                    }
                },
                css: function (t, e, n, i) {
                    var r,
                        o,
                        s,
                        a = G(e);
                    return (
                        te.test(e) || (e = Jt(a)),
                        (s = _.cssHooks[e] || _.cssHooks[a]) && "get" in s && (r = s.get(t, !0, n)),
                        void 0 === r && (r = Qt(t, e, i)),
                        "normal" === r && e in ne && (r = ne[e]),
                        "" === n || n ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r) : r
                    );
                },
            }),
                _.each(["height", "width"], function (t, e) {
                    _.cssHooks[e] = {
                        get: function (t, n, i) {
                            if (n)
                                return !Kt.test(_.css(t, "display")) || (t.getClientRects().length && t.getBoundingClientRect().width)
                                    ? oe(t, e, i)
                                    : ct(t, ee, function () {
                                          return oe(t, e, i);
                                      });
                        },
                        set: function (t, n, i) {
                            var r,
                                o = Vt(t),
                                s = !g.scrollboxSize() && "absolute" === o.position,
                                a = (s || i) && "border-box" === _.css(t, "boxSizing", !1, o),
                                l = i ? re(t, e, i, a, o) : 0;
                            return (
                                a && s && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - re(t, e, "border", !1, o) - 0.5)),
                                l && (r = rt.exec(n)) && "px" !== (r[3] || "px") && ((t.style[e] = n), (n = _.css(t, e))),
                                ie(0, n, l)
                            );
                        },
                    };
                }),
                (_.cssHooks.marginLeft = Xt(g.reliableMarginLeft, function (t, e) {
                    if (e)
                        return (
                            (parseFloat(Qt(t, "marginLeft")) ||
                                t.getBoundingClientRect().left -
                                    ct(t, { marginLeft: 0 }, function () {
                                        return t.getBoundingClientRect().left;
                                    })) + "px"
                        );
                })),
                _.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
                    (_.cssHooks[t + e] = {
                        expand: function (n) {
                            for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + ot[i] + e] = o[i] || o[i - 2] || o[0];
                            return r;
                        },
                    }),
                        "margin" !== t && (_.cssHooks[t + e].set = ie);
                }),
                _.fn.extend({
                    css: function (t, e) {
                        return V(
                            this,
                            function (t, e, n) {
                                var i,
                                    r,
                                    o = {},
                                    s = 0;
                                if (Array.isArray(e)) {
                                    for (i = Vt(t), r = e.length; s < r; s++) o[e[s]] = _.css(t, e[s], !1, i);
                                    return o;
                                }
                                return void 0 !== n ? _.style(t, e, n) : _.css(t, e);
                            },
                            t,
                            e,
                            arguments.length > 1
                        );
                    },
                }),
                (_.Tween = se),
                (se.prototype = {
                    constructor: se,
                    init: function (t, e, n, i, r, o) {
                        (this.elem = t), (this.prop = n), (this.easing = r || _.easing._default), (this.options = e), (this.start = this.now = this.cur()), (this.end = i), (this.unit = o || (_.cssNumber[n] ? "" : "px"));
                    },
                    cur: function () {
                        var t = se.propHooks[this.prop];
                        return t && t.get ? t.get(this) : se.propHooks._default.get(this);
                    },
                    run: function (t) {
                        var e,
                            n = se.propHooks[this.prop];
                        return (
                            this.options.duration ? (this.pos = e = _.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration)) : (this.pos = e = t),
                            (this.now = (this.end - this.start) * e + this.start),
                            this.options.step && this.options.step.call(this.elem, this.now, this),
                            n && n.set ? n.set(this) : se.propHooks._default.set(this),
                            this
                        );
                    },
                }),
                (se.prototype.init.prototype = se.prototype),
                (se.propHooks = {
                    _default: {
                        get: function (t) {
                            var e;
                            return 1 !== t.elem.nodeType || (null != t.elem[t.prop] && null == t.elem.style[t.prop]) ? t.elem[t.prop] : (e = _.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
                        },
                        set: function (t) {
                            _.fx.step[t.prop] ? _.fx.step[t.prop](t) : 1 !== t.elem.nodeType || (!_.cssHooks[t.prop] && null == t.elem.style[Jt(t.prop)]) ? (t.elem[t.prop] = t.now) : _.style(t.elem, t.prop, t.now + t.unit);
                        },
                    },
                }),
                (se.propHooks.scrollTop = se.propHooks.scrollLeft = {
                    set: function (t) {
                        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
                    },
                }),
                (_.easing = {
                    linear: function (t) {
                        return t;
                    },
                    swing: function (t) {
                        return 0.5 - Math.cos(t * Math.PI) / 2;
                    },
                    _default: "swing",
                }),
                (_.fx = se.prototype.init),
                (_.fx.step = {});
            var ae,
                le,
                ue = /^(?:toggle|show|hide)$/,
                ce = /queueHooks$/;
            function he() {
                le && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(he) : n.setTimeout(he, _.fx.interval), _.fx.tick());
            }
            function pe() {
                return (
                    n.setTimeout(function () {
                        ae = void 0;
                    }),
                    (ae = Date.now())
                );
            }
            function fe(t, e) {
                var n,
                    i = 0,
                    r = { height: t };
                for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = ot[i])] = r["padding" + n] = t;
                return e && (r.opacity = r.width = t), r;
            }
            function de(t, e, n) {
                for (var i, r = (me.tweeners[e] || []).concat(me.tweeners["*"]), o = 0, s = r.length; o < s; o++) if ((i = r[o].call(n, e, t))) return i;
            }
            function me(t, e, n) {
                var i,
                    r,
                    o = 0,
                    s = me.prefilters.length,
                    a = _.Deferred().always(function () {
                        delete l.elem;
                    }),
                    l = function () {
                        if (r) return !1;
                        for (var e = ae || pe(), n = Math.max(0, u.startTime + u.duration - e), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(i);
                        return a.notifyWith(t, [u, i, n]), i < 1 && s ? n : (s || a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u]), !1);
                    },
                    u = a.promise({
                        elem: t,
                        props: _.extend({}, e),
                        opts: _.extend(!0, { specialEasing: {}, easing: _.easing._default }, n),
                        originalProperties: e,
                        originalOptions: n,
                        startTime: ae || pe(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function (e, n) {
                            var i = _.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                            return u.tweens.push(i), i;
                        },
                        stop: function (e) {
                            var n = 0,
                                i = e ? u.tweens.length : 0;
                            if (r) return this;
                            for (r = !0; n < i; n++) u.tweens[n].run(1);
                            return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this;
                        },
                    }),
                    c = u.props;
                for (
                    !(function (t, e) {
                        var n, i, r, o, s;
                        for (n in t)
                            if (((r = e[(i = G(n))]), (o = t[n]), Array.isArray(o) && ((r = o[1]), (o = t[n] = o[0])), n !== i && ((t[i] = o), delete t[n]), (s = _.cssHooks[i]) && ("expand" in s)))
                                for (n in ((o = s.expand(o)), delete t[i], o)) (n in t) || ((t[n] = o[n]), (e[n] = r));
                            else e[i] = r;
                    })(c, u.opts.specialEasing);
                    o < s;
                    o++
                )
                    if ((i = me.prefilters[o].call(u, t, c, u.opts))) return y(i.stop) && (_._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
                return (
                    _.map(c, de, u),
                    y(u.opts.start) && u.opts.start.call(t, u),
                    u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
                    _.fx.timer(_.extend(l, { elem: t, anim: u, queue: u.opts.queue })),
                    u
                );
            }
            (_.Animation = _.extend(me, {
                tweeners: {
                    "*": [
                        function (t, e) {
                            var n = this.createTween(t, e);
                            return ht(n.elem, t, rt.exec(e), n), n;
                        },
                    ],
                },
                tweener: function (t, e) {
                    y(t) ? ((e = t), (t = ["*"])) : (t = t.match(j));
                    for (var n, i = 0, r = t.length; i < r; i++) (n = t[i]), (me.tweeners[n] = me.tweeners[n] || []), me.tweeners[n].unshift(e);
                },
                prefilters: [
                    function (t, e, n) {
                        var i,
                            r,
                            o,
                            s,
                            a,
                            l,
                            u,
                            c,
                            h = "width" in e || "height" in e,
                            p = this,
                            f = {},
                            d = t.style,
                            m = t.nodeType && ut(t),
                            v = J.get(t, "fxshow");
                        for (i in (n.queue ||
                            (null == (s = _._queueHooks(t, "fx")).unqueued &&
                                ((s.unqueued = 0),
                                (a = s.empty.fire),
                                (s.empty.fire = function () {
                                    s.unqueued || a();
                                })),
                            s.unqueued++,
                            p.always(function () {
                                p.always(function () {
                                    s.unqueued--, _.queue(t, "fx").length || s.empty.fire();
                                });
                            })),
                        e))
                            if (((r = e[i]), ue.test(r))) {
                                if ((delete e[i], (o = o || "toggle" === r), r === (m ? "hide" : "show"))) {
                                    if ("show" !== r || !v || void 0 === v[i]) continue;
                                    m = !0;
                                }
                                f[i] = (v && v[i]) || _.style(t, i);
                            }
                        if ((l = !_.isEmptyObject(e)) || !_.isEmptyObject(f))
                            for (i in (h &&
                                1 === t.nodeType &&
                                ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
                                null == (u = v && v.display) && (u = J.get(t, "display")),
                                "none" === (c = _.css(t, "display")) && (u ? (c = u) : (dt([t], !0), (u = t.style.display || u), (c = _.css(t, "display")), dt([t]))),
                                ("inline" === c || ("inline-block" === c && null != u)) &&
                                    "none" === _.css(t, "float") &&
                                    (l ||
                                        (p.done(function () {
                                            d.display = u;
                                        }),
                                        null == u && ((c = d.display), (u = "none" === c ? "" : c))),
                                    (d.display = "inline-block"))),
                            n.overflow &&
                                ((d.overflow = "hidden"),
                                p.always(function () {
                                    (d.overflow = n.overflow[0]), (d.overflowX = n.overflow[1]), (d.overflowY = n.overflow[2]);
                                })),
                            (l = !1),
                            f))
                                l ||
                                    (v ? "hidden" in v && (m = v.hidden) : (v = J.access(t, "fxshow", { display: u })),
                                    o && (v.hidden = !m),
                                    m && dt([t], !0),
                                    p.done(function () {
                                        for (i in (m || dt([t]), J.remove(t, "fxshow"), f)) _.style(t, i, f[i]);
                                    })),
                                    (l = de(m ? v[i] : 0, i, p)),
                                    i in v || ((v[i] = l.start), m && ((l.end = l.start), (l.start = 0)));
                    },
                ],
                prefilter: function (t, e) {
                    e ? me.prefilters.unshift(t) : me.prefilters.push(t);
                },
            })),
                (_.speed = function (t, e, n) {
                    var i = t && "object" == typeof t ? _.extend({}, t) : { complete: n || (!n && e) || (y(t) && t), duration: t, easing: (n && e) || (e && !y(e) && e) };
                    return (
                        _.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in _.fx.speeds ? (i.duration = _.fx.speeds[i.duration]) : (i.duration = _.fx.speeds._default)),
                        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                        (i.old = i.complete),
                        (i.complete = function () {
                            y(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue);
                        }),
                        i
                    );
                }),
                _.fn.extend({
                    fadeTo: function (t, e, n, i) {
                        return this.filter(ut).css("opacity", 0).show().end().animate({ opacity: e }, t, n, i);
                    },
                    animate: function (t, e, n, i) {
                        var r = _.isEmptyObject(t),
                            o = _.speed(e, n, i),
                            s = function () {
                                var e = me(this, _.extend({}, t), o);
                                (r || J.get(this, "finish")) && e.stop(!0);
                            };
                        return (s.finish = s), r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
                    },
                    stop: function (t, e, n) {
                        var i = function (t) {
                            var e = t.stop;
                            delete t.stop, e(n);
                        };
                        return (
                            "string" != typeof t && ((n = e), (e = t), (t = void 0)),
                            e && !1 !== t && this.queue(t || "fx", []),
                            this.each(function () {
                                var e = !0,
                                    r = null != t && t + "queueHooks",
                                    o = _.timers,
                                    s = J.get(this);
                                if (r) s[r] && s[r].stop && i(s[r]);
                                else for (r in s) s[r] && s[r].stop && ce.test(r) && i(s[r]);
                                for (r = o.length; r--; ) o[r].elem !== this || (null != t && o[r].queue !== t) || (o[r].anim.stop(n), (e = !1), o.splice(r, 1));
                                (!e && n) || _.dequeue(this, t);
                            })
                        );
                    },
                    finish: function (t) {
                        return (
                            !1 !== t && (t = t || "fx"),
                            this.each(function () {
                                var e,
                                    n = J.get(this),
                                    i = n[t + "queue"],
                                    r = n[t + "queueHooks"],
                                    o = _.timers,
                                    s = i ? i.length : 0;
                                for (n.finish = !0, _.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--; ) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                                for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                                delete n.finish;
                            })
                        );
                    },
                }),
                _.each(["toggle", "show", "hide"], function (t, e) {
                    var n = _.fn[e];
                    _.fn[e] = function (t, i, r) {
                        return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(fe(e, !0), t, i, r);
                    };
                }),
                _.each({ slideDown: fe("show"), slideUp: fe("hide"), slideToggle: fe("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, e) {
                    _.fn[t] = function (t, n, i) {
                        return this.animate(e, t, n, i);
                    };
                }),
                (_.timers = []),
                (_.fx.tick = function () {
                    var t,
                        e = 0,
                        n = _.timers;
                    for (ae = Date.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
                    n.length || _.fx.stop(), (ae = void 0);
                }),
                (_.fx.timer = function (t) {
                    _.timers.push(t), _.fx.start();
                }),
                (_.fx.interval = 13),
                (_.fx.start = function () {
                    le || ((le = !0), he());
                }),
                (_.fx.stop = function () {
                    le = null;
                }),
                (_.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                (_.fn.delay = function (t, e) {
                    return (
                        (t = (_.fx && _.fx.speeds[t]) || t),
                        (e = e || "fx"),
                        this.queue(e, function (e, i) {
                            var r = n.setTimeout(e, t);
                            i.stop = function () {
                                n.clearTimeout(r);
                            };
                        })
                    );
                }),
                (function () {
                    var t = s.createElement("input"),
                        e = s.createElement("select").appendChild(s.createElement("option"));
                    (t.type = "checkbox"), (g.checkOn = "" !== t.value), (g.optSelected = e.selected), ((t = s.createElement("input")).value = "t"), (t.type = "radio"), (g.radioValue = "t" === t.value);
                })();
            var ve,
                ge = _.expr.attrHandle;
            _.fn.extend({
                attr: function (t, e) {
                    return V(this, _.attr, t, e, arguments.length > 1);
                },
                removeAttr: function (t) {
                    return this.each(function () {
                        _.removeAttr(this, t);
                    });
                },
            }),
                _.extend({
                    attr: function (t, e, n) {
                        var i,
                            r,
                            o = t.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return void 0 === t.getAttribute
                                ? _.prop(t, e, n)
                                : ((1 === o && _.isXMLDoc(t)) || (r = _.attrHooks[e.toLowerCase()] || (_.expr.match.bool.test(e) ? ve : void 0)),
                                  void 0 !== n
                                      ? null === n
                                          ? void _.removeAttr(t, e)
                                          : r && "set" in r && void 0 !== (i = r.set(t, n, e))
                                          ? i
                                          : (t.setAttribute(e, n + ""), n)
                                      : r && "get" in r && null !== (i = r.get(t, e))
                                      ? i
                                      : null == (i = _.find.attr(t, e))
                                      ? void 0
                                      : i);
                    },
                    attrHooks: {
                        type: {
                            set: function (t, e) {
                                if (!g.radioValue && "radio" === e && M(t, "input")) {
                                    var n = t.value;
                                    return t.setAttribute("type", e), n && (t.value = n), e;
                                }
                            },
                        },
                    },
                    removeAttr: function (t, e) {
                        var n,
                            i = 0,
                            r = e && e.match(j);
                        if (r && 1 === t.nodeType) for (; (n = r[i++]); ) t.removeAttribute(n);
                    },
                }),
                (ve = {
                    set: function (t, e, n) {
                        return !1 === e ? _.removeAttr(t, n) : t.setAttribute(n, n), n;
                    },
                }),
                _.each(_.expr.match.bool.source.match(/\w+/g), function (t, e) {
                    var n = ge[e] || _.find.attr;
                    ge[e] = function (t, e, i) {
                        var r,
                            o,
                            s = e.toLowerCase();
                        return i || ((o = ge[s]), (ge[s] = r), (r = null != n(t, e, i) ? s : null), (ge[s] = o)), r;
                    };
                });
            var ye = /^(?:input|select|textarea|button)$/i,
                we = /^(?:a|area)$/i;
            function Ae(t) {
                return (t.match(j) || []).join(" ");
            }
            function be(t) {
                return (t.getAttribute && t.getAttribute("class")) || "";
            }
            function xe(t) {
                return Array.isArray(t) ? t : ("string" == typeof t && t.match(j)) || [];
            }
            _.fn.extend({
                prop: function (t, e) {
                    return V(this, _.prop, t, e, arguments.length > 1);
                },
                removeProp: function (t) {
                    return this.each(function () {
                        delete this[_.propFix[t] || t];
                    });
                },
            }),
                _.extend({
                    prop: function (t, e, n) {
                        var i,
                            r,
                            o = t.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return (
                                (1 === o && _.isXMLDoc(t)) || ((e = _.propFix[e] || e), (r = _.propHooks[e])),
                                void 0 !== n ? (r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t[e] = n)) : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
                            );
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (t) {
                                var e = _.find.attr(t, "tabindex");
                                return e ? parseInt(e, 10) : ye.test(t.nodeName) || (we.test(t.nodeName) && t.href) ? 0 : -1;
                            },
                        },
                    },
                    propFix: { for: "htmlFor", class: "className" },
                }),
                g.optSelected ||
                    (_.propHooks.selected = {
                        get: function (t) {
                            var e = t.parentNode;
                            return e && e.parentNode && e.parentNode.selectedIndex, null;
                        },
                        set: function (t) {
                            var e = t.parentNode;
                            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
                        },
                    }),
                _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                    _.propFix[this.toLowerCase()] = this;
                }),
                _.fn.extend({
                    addClass: function (t) {
                        var e,
                            n,
                            i,
                            r,
                            o,
                            s,
                            a,
                            l = 0;
                        if (y(t))
                            return this.each(function (e) {
                                _(this).addClass(t.call(this, e, be(this)));
                            });
                        if ((e = xe(t)).length)
                            for (; (n = this[l++]); )
                                if (((r = be(n)), (i = 1 === n.nodeType && " " + Ae(r) + " "))) {
                                    for (s = 0; (o = e[s++]); ) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                                    r !== (a = Ae(i)) && n.setAttribute("class", a);
                                }
                        return this;
                    },
                    removeClass: function (t) {
                        var e,
                            n,
                            i,
                            r,
                            o,
                            s,
                            a,
                            l = 0;
                        if (y(t))
                            return this.each(function (e) {
                                _(this).removeClass(t.call(this, e, be(this)));
                            });
                        if (!arguments.length) return this.attr("class", "");
                        if ((e = xe(t)).length)
                            for (; (n = this[l++]); )
                                if (((r = be(n)), (i = 1 === n.nodeType && " " + Ae(r) + " "))) {
                                    for (s = 0; (o = e[s++]); ) for (; i.indexOf(" " + o + " ") > -1; ) i = i.replace(" " + o + " ", " ");
                                    r !== (a = Ae(i)) && n.setAttribute("class", a);
                                }
                        return this;
                    },
                    toggleClass: function (t, e) {
                        var n = typeof t,
                            i = "string" === n || Array.isArray(t);
                        return "boolean" == typeof e && i
                            ? e
                                ? this.addClass(t)
                                : this.removeClass(t)
                            : y(t)
                            ? this.each(function (n) {
                                  _(this).toggleClass(t.call(this, n, be(this), e), e);
                              })
                            : this.each(function () {
                                  var e, r, o, s;
                                  if (i) for (r = 0, o = _(this), s = xe(t); (e = s[r++]); ) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                                  else (void 0 !== t && "boolean" !== n) || ((e = be(this)) && J.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : J.get(this, "__className__") || ""));
                              });
                    },
                    hasClass: function (t) {
                        var e,
                            n,
                            i = 0;
                        for (e = " " + t + " "; (n = this[i++]); ) if (1 === n.nodeType && (" " + Ae(be(n)) + " ").indexOf(e) > -1) return !0;
                        return !1;
                    },
                });
            var _e = /\r/g;
            _.fn.extend({
                val: function (t) {
                    var e,
                        n,
                        i,
                        r = this[0];
                    return arguments.length
                        ? ((i = y(t)),
                          this.each(function (n) {
                              var r;
                              1 === this.nodeType &&
                                  (null == (r = i ? t.call(this, n, _(this).val()) : t)
                                      ? (r = "")
                                      : "number" == typeof r
                                      ? (r += "")
                                      : Array.isArray(r) &&
                                        (r = _.map(r, function (t) {
                                            return null == t ? "" : t + "";
                                        })),
                                  ((e = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value")) || (this.value = r));
                          }))
                        : r
                        ? (e = _.valHooks[r.type] || _.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value"))
                            ? n
                            : "string" == typeof (n = r.value)
                            ? n.replace(_e, "")
                            : null == n
                            ? ""
                            : n
                        : void 0;
                },
            }),
                _.extend({
                    valHooks: {
                        option: {
                            get: function (t) {
                                var e = _.find.attr(t, "value");
                                return null != e ? e : Ae(_.text(t));
                            },
                        },
                        select: {
                            get: function (t) {
                                var e,
                                    n,
                                    i,
                                    r = t.options,
                                    o = t.selectedIndex,
                                    s = "select-one" === t.type,
                                    a = s ? null : [],
                                    l = s ? o + 1 : r.length;
                                for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                                    if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !M(n.parentNode, "optgroup"))) {
                                        if (((e = _(n).val()), s)) return e;
                                        a.push(e);
                                    }
                                return a;
                            },
                            set: function (t, e) {
                                for (var n, i, r = t.options, o = _.makeArray(e), s = r.length; s--; ) ((i = r[s]).selected = _.inArray(_.valHooks.option.get(i), o) > -1) && (n = !0);
                                return n || (t.selectedIndex = -1), o;
                            },
                        },
                    },
                }),
                _.each(["radio", "checkbox"], function () {
                    (_.valHooks[this] = {
                        set: function (t, e) {
                            if (Array.isArray(e)) return (t.checked = _.inArray(_(t).val(), e) > -1);
                        },
                    }),
                        g.checkOn ||
                            (_.valHooks[this].get = function (t) {
                                return null === t.getAttribute("value") ? "on" : t.value;
                            });
                }),
                (g.focusin = "onfocusin" in n);
            var Te = /^(?:focusinfocus|focusoutblur)$/,
                Ce = function (t) {
                    t.stopPropagation();
                };
            _.extend(_.event, {
                trigger: function (t, e, i, r) {
                    var o,
                        a,
                        l,
                        u,
                        c,
                        h,
                        p,
                        f,
                        m = [i || s],
                        v = d.call(t, "type") ? t.type : t,
                        g = d.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (
                        ((a = f = l = i = i || s),
                        3 !== i.nodeType &&
                            8 !== i.nodeType &&
                            !Te.test(v + _.event.triggered) &&
                            (v.indexOf(".") > -1 && ((g = v.split(".")), (v = g.shift()), g.sort()),
                            (c = v.indexOf(":") < 0 && "on" + v),
                            ((t = t[_.expando] ? t : new _.Event(v, "object" == typeof t && t)).isTrigger = r ? 2 : 3),
                            (t.namespace = g.join(".")),
                            (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                            (t.result = void 0),
                            t.target || (t.target = i),
                            (e = null == e ? [t] : _.makeArray(e, [t])),
                            (p = _.event.special[v] || {}),
                            r || !p.trigger || !1 !== p.trigger.apply(i, e)))
                    ) {
                        if (!r && !p.noBubble && !w(i)) {
                            for (u = p.delegateType || v, Te.test(u + v) || (a = a.parentNode); a; a = a.parentNode) m.push(a), (l = a);
                            l === (i.ownerDocument || s) && m.push(l.defaultView || l.parentWindow || n);
                        }
                        for (o = 0; (a = m[o++]) && !t.isPropagationStopped(); )
                            (f = a),
                                (t.type = o > 1 ? u : p.bindType || v),
                                (h = (J.get(a, "events") || {})[t.type] && J.get(a, "handle")) && h.apply(a, e),
                                (h = c && a[c]) && h.apply && U(a) && ((t.result = h.apply(a, e)), !1 === t.result && t.preventDefault());
                        return (
                            (t.type = v),
                            r ||
                                t.isDefaultPrevented() ||
                                (p._default && !1 !== p._default.apply(m.pop(), e)) ||
                                !U(i) ||
                                (c &&
                                    y(i[v]) &&
                                    !w(i) &&
                                    ((l = i[c]) && (i[c] = null),
                                    (_.event.triggered = v),
                                    t.isPropagationStopped() && f.addEventListener(v, Ce),
                                    i[v](),
                                    t.isPropagationStopped() && f.removeEventListener(v, Ce),
                                    (_.event.triggered = void 0),
                                    l && (i[c] = l))),
                            t.result
                        );
                    }
                },
                simulate: function (t, e, n) {
                    var i = _.extend(new _.Event(), n, { type: t, isSimulated: !0 });
                    _.event.trigger(i, null, e);
                },
            }),
                _.fn.extend({
                    trigger: function (t, e) {
                        return this.each(function () {
                            _.event.trigger(t, e, this);
                        });
                    },
                    triggerHandler: function (t, e) {
                        var n = this[0];
                        if (n) return _.event.trigger(t, e, n, !0);
                    },
                }),
                g.focusin ||
                    _.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
                        var n = function (t) {
                            _.event.simulate(e, t.target, _.event.fix(t));
                        };
                        _.event.special[e] = {
                            setup: function () {
                                var i = this.ownerDocument || this,
                                    r = J.access(i, e);
                                r || i.addEventListener(t, n, !0), J.access(i, e, (r || 0) + 1);
                            },
                            teardown: function () {
                                var i = this.ownerDocument || this,
                                    r = J.access(i, e) - 1;
                                r ? J.access(i, e, r) : (i.removeEventListener(t, n, !0), J.remove(i, e));
                            },
                        };
                    });
            var Se = n.location,
                Pe = Date.now(),
                ke = /\?/;
            _.parseXML = function (t) {
                var e;
                if (!t || "string" != typeof t) return null;
                try {
                    e = new n.DOMParser().parseFromString(t, "text/xml");
                } catch (t) {
                    e = void 0;
                }
                return (e && !e.getElementsByTagName("parsererror").length) || _.error("Invalid XML: " + t), e;
            };
            var Ee = /\[\]$/,
                Me = /\r?\n/g,
                Oe = /^(?:submit|button|image|reset|file)$/i,
                Ie = /^(?:input|select|textarea|keygen)/i;
            function $e(t, e, n, i) {
                var r;
                if (Array.isArray(e))
                    _.each(e, function (e, r) {
                        n || Ee.test(t) ? i(t, r) : $e(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i);
                    });
                else if (n || "object" !== x(e)) i(t, e);
                else for (r in e) $e(t + "[" + r + "]", e[r], n, i);
            }
            (_.param = function (t, e) {
                var n,
                    i = [],
                    r = function (t, e) {
                        var n = y(e) ? e() : e;
                        i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
                    };
                if (null == t) return "";
                if (Array.isArray(t) || (t.jquery && !_.isPlainObject(t)))
                    _.each(t, function () {
                        r(this.name, this.value);
                    });
                else for (n in t) $e(n, t[n], e, r);
                return i.join("&");
            }),
                _.fn.extend({
                    serialize: function () {
                        return _.param(this.serializeArray());
                    },
                    serializeArray: function () {
                        return this.map(function () {
                            var t = _.prop(this, "elements");
                            return t ? _.makeArray(t) : this;
                        })
                            .filter(function () {
                                var t = this.type;
                                return this.name && !_(this).is(":disabled") && Ie.test(this.nodeName) && !Oe.test(t) && (this.checked || !mt.test(t));
                            })
                            .map(function (t, e) {
                                var n = _(this).val();
                                return null == n
                                    ? null
                                    : Array.isArray(n)
                                    ? _.map(n, function (t) {
                                          return { name: e.name, value: t.replace(Me, "\r\n") };
                                      })
                                    : { name: e.name, value: n.replace(Me, "\r\n") };
                            })
                            .get();
                    },
                });
            var De = /%20/g,
                Le = /#.*$/,
                Ne = /([?&])_=[^&]*/,
                Re = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                je = /^(?:GET|HEAD)$/,
                Fe = /^\/\//,
                ze = {},
                He = {},
                Be = "*/".concat("*"),
                We = s.createElement("a");
            function qe(t) {
                return function (e, n) {
                    "string" != typeof e && ((n = e), (e = "*"));
                    var i,
                        r = 0,
                        o = e.toLowerCase().match(j) || [];
                    if (y(n)) for (; (i = o[r++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n);
                };
            }
            function Ve(t, e, n, i) {
                var r = {},
                    o = t === He;
                function s(a) {
                    var l;
                    return (
                        (r[a] = !0),
                        _.each(t[a] || [], function (t, a) {
                            var u = a(e, n, i);
                            return "string" != typeof u || o || r[u] ? (o ? !(l = u) : void 0) : (e.dataTypes.unshift(u), s(u), !1);
                        }),
                        l
                    );
                }
                return s(e.dataTypes[0]) || (!r["*"] && s("*"));
            }
            function Ye(t, e) {
                var n,
                    i,
                    r = _.ajaxSettings.flatOptions || {};
                for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
                return i && _.extend(!0, t, i), t;
            }
            (We.href = Se.href),
                _.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: Se.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Se.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: { "*": Be, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                        responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                        converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": _.parseXML },
                        flatOptions: { url: !0, context: !0 },
                    },
                    ajaxSetup: function (t, e) {
                        return e ? Ye(Ye(t, _.ajaxSettings), e) : Ye(_.ajaxSettings, t);
                    },
                    ajaxPrefilter: qe(ze),
                    ajaxTransport: qe(He),
                    ajax: function (t, e) {
                        "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
                        var i,
                            r,
                            o,
                            a,
                            l,
                            u,
                            c,
                            h,
                            p,
                            f,
                            d = _.ajaxSetup({}, e),
                            m = d.context || d,
                            v = d.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                            g = _.Deferred(),
                            y = _.Callbacks("once memory"),
                            w = d.statusCode || {},
                            A = {},
                            b = {},
                            x = "canceled",
                            T = {
                                readyState: 0,
                                getResponseHeader: function (t) {
                                    var e;
                                    if (c) {
                                        if (!a) for (a = {}; (e = Re.exec(o)); ) a[e[1].toLowerCase() + " "] = (a[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                        e = a[t.toLowerCase() + " "];
                                    }
                                    return null == e ? null : e.join(", ");
                                },
                                getAllResponseHeaders: function () {
                                    return c ? o : null;
                                },
                                setRequestHeader: function (t, e) {
                                    return null == c && ((t = b[t.toLowerCase()] = b[t.toLowerCase()] || t), (A[t] = e)), this;
                                },
                                overrideMimeType: function (t) {
                                    return null == c && (d.mimeType = t), this;
                                },
                                statusCode: function (t) {
                                    var e;
                                    if (t)
                                        if (c) T.always(t[T.status]);
                                        else for (e in t) w[e] = [w[e], t[e]];
                                    return this;
                                },
                                abort: function (t) {
                                    var e = t || x;
                                    return i && i.abort(e), C(0, e), this;
                                },
                            };
                        if (
                            (g.promise(T),
                            (d.url = ((t || d.url || Se.href) + "").replace(Fe, Se.protocol + "//")),
                            (d.type = e.method || e.type || d.method || d.type),
                            (d.dataTypes = (d.dataType || "*").toLowerCase().match(j) || [""]),
                            null == d.crossDomain)
                        ) {
                            u = s.createElement("a");
                            try {
                                (u.href = d.url), (u.href = u.href), (d.crossDomain = We.protocol + "//" + We.host != u.protocol + "//" + u.host);
                            } catch (t) {
                                d.crossDomain = !0;
                            }
                        }
                        if ((d.data && d.processData && "string" != typeof d.data && (d.data = _.param(d.data, d.traditional)), Ve(ze, d, e, T), c)) return T;
                        for (p in ((h = _.event && d.global) && 0 == _.active++ && _.event.trigger("ajaxStart"),
                        (d.type = d.type.toUpperCase()),
                        (d.hasContent = !je.test(d.type)),
                        (r = d.url.replace(Le, "")),
                        d.hasContent
                            ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(De, "+"))
                            : ((f = d.url.slice(r.length)),
                              d.data && (d.processData || "string" == typeof d.data) && ((r += (ke.test(r) ? "&" : "?") + d.data), delete d.data),
                              !1 === d.cache && ((r = r.replace(Ne, "$1")), (f = (ke.test(r) ? "&" : "?") + "_=" + Pe++ + f)),
                              (d.url = r + f)),
                        d.ifModified && (_.lastModified[r] && T.setRequestHeader("If-Modified-Since", _.lastModified[r]), _.etag[r] && T.setRequestHeader("If-None-Match", _.etag[r])),
                        ((d.data && d.hasContent && !1 !== d.contentType) || e.contentType) && T.setRequestHeader("Content-Type", d.contentType),
                        T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Be + "; q=0.01" : "") : d.accepts["*"]),
                        d.headers))
                            T.setRequestHeader(p, d.headers[p]);
                        if (d.beforeSend && (!1 === d.beforeSend.call(m, T, d) || c)) return T.abort();
                        if (((x = "abort"), y.add(d.complete), T.done(d.success), T.fail(d.error), (i = Ve(He, d, e, T)))) {
                            if (((T.readyState = 1), h && v.trigger("ajaxSend", [T, d]), c)) return T;
                            d.async &&
                                d.timeout > 0 &&
                                (l = n.setTimeout(function () {
                                    T.abort("timeout");
                                }, d.timeout));
                            try {
                                (c = !1), i.send(A, C);
                            } catch (t) {
                                if (c) throw t;
                                C(-1, t);
                            }
                        } else C(-1, "No Transport");
                        function C(t, e, s, a) {
                            var u,
                                p,
                                f,
                                A,
                                b,
                                x = e;
                            c ||
                                ((c = !0),
                                l && n.clearTimeout(l),
                                (i = void 0),
                                (o = a || ""),
                                (T.readyState = t > 0 ? 4 : 0),
                                (u = (t >= 200 && t < 300) || 304 === t),
                                s &&
                                    (A = (function (t, e, n) {
                                        for (var i, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0]; ) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                                        if (i)
                                            for (r in a)
                                                if (a[r] && a[r].test(i)) {
                                                    l.unshift(r);
                                                    break;
                                                }
                                        if (l[0] in n) o = l[0];
                                        else {
                                            for (r in n) {
                                                if (!l[0] || t.converters[r + " " + l[0]]) {
                                                    o = r;
                                                    break;
                                                }
                                                s || (s = r);
                                            }
                                            o = o || s;
                                        }
                                        if (o) return o !== l[0] && l.unshift(o), n[o];
                                    })(d, T, s)),
                                (A = (function (t, e, n, i) {
                                    var r,
                                        o,
                                        s,
                                        a,
                                        l,
                                        u = {},
                                        c = t.dataTypes.slice();
                                    if (c[1]) for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
                                    for (o = c.shift(); o; )
                                        if ((t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), (l = o), (o = c.shift())))
                                            if ("*" === o) o = l;
                                            else if ("*" !== l && l !== o) {
                                                if (!(s = u[l + " " + o] || u["* " + o]))
                                                    for (r in u)
                                                        if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                                            !0 === s ? (s = u[r]) : !0 !== u[r] && ((o = a[0]), c.unshift(a[1]));
                                                            break;
                                                        }
                                                if (!0 !== s)
                                                    if (s && t.throws) e = s(e);
                                                    else
                                                        try {
                                                            e = s(e);
                                                        } catch (t) {
                                                            return { state: "parsererror", error: s ? t : "No conversion from " + l + " to " + o };
                                                        }
                                            }
                                    return { state: "success", data: e };
                                })(d, A, T, u)),
                                u
                                    ? (d.ifModified && ((b = T.getResponseHeader("Last-Modified")) && (_.lastModified[r] = b), (b = T.getResponseHeader("etag")) && (_.etag[r] = b)),
                                      204 === t || "HEAD" === d.type ? (x = "nocontent") : 304 === t ? (x = "notmodified") : ((x = A.state), (p = A.data), (u = !(f = A.error))))
                                    : ((f = x), (!t && x) || ((x = "error"), t < 0 && (t = 0))),
                                (T.status = t),
                                (T.statusText = (e || x) + ""),
                                u ? g.resolveWith(m, [p, x, T]) : g.rejectWith(m, [T, x, f]),
                                T.statusCode(w),
                                (w = void 0),
                                h && v.trigger(u ? "ajaxSuccess" : "ajaxError", [T, d, u ? p : f]),
                                y.fireWith(m, [T, x]),
                                h && (v.trigger("ajaxComplete", [T, d]), --_.active || _.event.trigger("ajaxStop")));
                        }
                        return T;
                    },
                    getJSON: function (t, e, n) {
                        return _.get(t, e, n, "json");
                    },
                    getScript: function (t, e) {
                        return _.get(t, void 0, e, "script");
                    },
                }),
                _.each(["get", "post"], function (t, e) {
                    _[e] = function (t, n, i, r) {
                        return y(n) && ((r = r || i), (i = n), (n = void 0)), _.ajax(_.extend({ url: t, type: e, dataType: r, data: n, success: i }, _.isPlainObject(t) && t));
                    };
                }),
                (_._evalUrl = function (t, e) {
                    return _.ajax({
                        url: t,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: { "text script": function () {} },
                        dataFilter: function (t) {
                            _.globalEval(t, e);
                        },
                    });
                }),
                _.fn.extend({
                    wrapAll: function (t) {
                        var e;
                        return (
                            this[0] &&
                                (y(t) && (t = t.call(this[0])),
                                (e = _(t, this[0].ownerDocument).eq(0).clone(!0)),
                                this[0].parentNode && e.insertBefore(this[0]),
                                e
                                    .map(function () {
                                        for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                                        return t;
                                    })
                                    .append(this)),
                            this
                        );
                    },
                    wrapInner: function (t) {
                        return y(t)
                            ? this.each(function (e) {
                                  _(this).wrapInner(t.call(this, e));
                              })
                            : this.each(function () {
                                  var e = _(this),
                                      n = e.contents();
                                  n.length ? n.wrapAll(t) : e.append(t);
                              });
                    },
                    wrap: function (t) {
                        var e = y(t);
                        return this.each(function (n) {
                            _(this).wrapAll(e ? t.call(this, n) : t);
                        });
                    },
                    unwrap: function (t) {
                        return (
                            this.parent(t)
                                .not("body")
                                .each(function () {
                                    _(this).replaceWith(this.childNodes);
                                }),
                            this
                        );
                    },
                }),
                (_.expr.pseudos.hidden = function (t) {
                    return !_.expr.pseudos.visible(t);
                }),
                (_.expr.pseudos.visible = function (t) {
                    return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
                }),
                (_.ajaxSettings.xhr = function () {
                    try {
                        return new n.XMLHttpRequest();
                    } catch (t) {}
                });
            var Qe = { 0: 200, 1223: 204 },
                Xe = _.ajaxSettings.xhr();
            (g.cors = !!Xe && "withCredentials" in Xe),
                (g.ajax = Xe = !!Xe),
                _.ajaxTransport(function (t) {
                    var e, i;
                    if (g.cors || (Xe && !t.crossDomain))
                        return {
                            send: function (r, o) {
                                var s,
                                    a = t.xhr();
                                if ((a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                                for (s in (t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r)) a.setRequestHeader(s, r[s]);
                                (e = function (t) {
                                    return function () {
                                        e &&
                                            ((e = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                                            "abort" === t
                                                ? a.abort()
                                                : "error" === t
                                                ? "number" != typeof a.status
                                                    ? o(0, "error")
                                                    : o(a.status, a.statusText)
                                                : o(
                                                      Qe[a.status] || a.status,
                                                      a.statusText,
                                                      "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText },
                                                      a.getAllResponseHeaders()
                                                  ));
                                    };
                                }),
                                    (a.onload = e()),
                                    (i = a.onerror = a.ontimeout = e("error")),
                                    void 0 !== a.onabort
                                        ? (a.onabort = i)
                                        : (a.onreadystatechange = function () {
                                              4 === a.readyState &&
                                                  n.setTimeout(function () {
                                                      e && i();
                                                  });
                                          }),
                                    (e = e("abort"));
                                try {
                                    a.send((t.hasContent && t.data) || null);
                                } catch (t) {
                                    if (e) throw t;
                                }
                            },
                            abort: function () {
                                e && e();
                            },
                        };
                }),
                _.ajaxPrefilter(function (t) {
                    t.crossDomain && (t.contents.script = !1);
                }),
                _.ajaxSetup({
                    accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                    contents: { script: /\b(?:java|ecma)script\b/ },
                    converters: {
                        "text script": function (t) {
                            return _.globalEval(t), t;
                        },
                    },
                }),
                _.ajaxPrefilter("script", function (t) {
                    void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
                }),
                _.ajaxTransport("script", function (t) {
                    var e, n;
                    if (t.crossDomain || t.scriptAttrs)
                        return {
                            send: function (i, r) {
                                (e = _("<script>")
                                    .attr(t.scriptAttrs || {})
                                    .prop({ charset: t.scriptCharset, src: t.url })
                                    .on(
                                        "load error",
                                        (n = function (t) {
                                            e.remove(), (n = null), t && r("error" === t.type ? 404 : 200, t.type);
                                        })
                                    )),
                                    s.head.appendChild(e[0]);
                            },
                            abort: function () {
                                n && n();
                            },
                        };
                });
            var Ge,
                Ue = [],
                Ze = /(=)\?(?=&|$)|\?\?/;
            _.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var t = Ue.pop() || _.expando + "_" + Pe++;
                    return (this[t] = !0), t;
                },
            }),
                _.ajaxPrefilter("json jsonp", function (t, e, i) {
                    var r,
                        o,
                        s,
                        a = !1 !== t.jsonp && (Ze.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ze.test(t.data) && "data");
                    if (a || "jsonp" === t.dataTypes[0])
                        return (
                            (r = t.jsonpCallback = y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                            a ? (t[a] = t[a].replace(Ze, "$1" + r)) : !1 !== t.jsonp && (t.url += (ke.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
                            (t.converters["script json"] = function () {
                                return s || _.error(r + " was not called"), s[0];
                            }),
                            (t.dataTypes[0] = "json"),
                            (o = n[r]),
                            (n[r] = function () {
                                s = arguments;
                            }),
                            i.always(function () {
                                void 0 === o ? _(n).removeProp(r) : (n[r] = o), t[r] && ((t.jsonpCallback = e.jsonpCallback), Ue.push(r)), s && y(o) && o(s[0]), (s = o = void 0);
                            }),
                            "script"
                        );
                }),
                (g.createHTMLDocument = (((Ge = s.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Ge.childNodes.length)),
                (_.parseHTML = function (t, e, n) {
                    return "string" != typeof t
                        ? []
                        : ("boolean" == typeof e && ((n = e), (e = !1)),
                          e || (g.createHTMLDocument ? (((i = (e = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href), e.head.appendChild(i)) : (e = s)),
                          (o = !n && []),
                          (r = O.exec(t)) ? [e.createElement(r[1])] : ((r = Tt([t], e, o)), o && o.length && _(o).remove(), _.merge([], r.childNodes)));
                    var i, r, o;
                }),
                (_.fn.load = function (t, e, n) {
                    var i,
                        r,
                        o,
                        s = this,
                        a = t.indexOf(" ");
                    return (
                        a > -1 && ((i = Ae(t.slice(a))), (t = t.slice(0, a))),
                        y(e) ? ((n = e), (e = void 0)) : e && "object" == typeof e && (r = "POST"),
                        s.length > 0 &&
                            _.ajax({ url: t, type: r || "GET", dataType: "html", data: e })
                                .done(function (t) {
                                    (o = arguments), s.html(i ? _("<div>").append(_.parseHTML(t)).find(i) : t);
                                })
                                .always(
                                    n &&
                                        function (t, e) {
                                            s.each(function () {
                                                n.apply(this, o || [t.responseText, e, t]);
                                            });
                                        }
                                ),
                        this
                    );
                }),
                _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
                    _.fn[e] = function (t) {
                        return this.on(e, t);
                    };
                }),
                (_.expr.pseudos.animated = function (t) {
                    return _.grep(_.timers, function (e) {
                        return t === e.elem;
                    }).length;
                }),
                (_.offset = {
                    setOffset: function (t, e, n) {
                        var i,
                            r,
                            o,
                            s,
                            a,
                            l,
                            u = _.css(t, "position"),
                            c = _(t),
                            h = {};
                        "static" === u && (t.style.position = "relative"),
                            (a = c.offset()),
                            (o = _.css(t, "top")),
                            (l = _.css(t, "left")),
                            ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? ((s = (i = c.position()).top), (r = i.left)) : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
                            y(e) && (e = e.call(t, n, _.extend({}, a))),
                            null != e.top && (h.top = e.top - a.top + s),
                            null != e.left && (h.left = e.left - a.left + r),
                            "using" in e ? e.using.call(t, h) : c.css(h);
                    },
                }),
                _.fn.extend({
                    offset: function (t) {
                        if (arguments.length)
                            return void 0 === t
                                ? this
                                : this.each(function (e) {
                                      _.offset.setOffset(this, t, e);
                                  });
                        var e,
                            n,
                            i = this[0];
                        return i ? (i.getClientRects().length ? ((e = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
                    },
                    position: function () {
                        if (this[0]) {
                            var t,
                                e,
                                n,
                                i = this[0],
                                r = { top: 0, left: 0 };
                            if ("fixed" === _.css(i, "position")) e = i.getBoundingClientRect();
                            else {
                                for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === _.css(t, "position"); ) t = t.parentNode;
                                t && t !== i && 1 === t.nodeType && (((r = _(t).offset()).top += _.css(t, "borderTopWidth", !0)), (r.left += _.css(t, "borderLeftWidth", !0)));
                            }
                            return { top: e.top - r.top - _.css(i, "marginTop", !0), left: e.left - r.left - _.css(i, "marginLeft", !0) };
                        }
                    },
                    offsetParent: function () {
                        return this.map(function () {
                            for (var t = this.offsetParent; t && "static" === _.css(t, "position"); ) t = t.offsetParent;
                            return t || st;
                        });
                    },
                }),
                _.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, e) {
                    var n = "pageYOffset" === e;
                    _.fn[t] = function (i) {
                        return V(
                            this,
                            function (t, i, r) {
                                var o;
                                if ((w(t) ? (o = t) : 9 === t.nodeType && (o = t.defaultView), void 0 === r)) return o ? o[e] : t[i];
                                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : (t[i] = r);
                            },
                            t,
                            i,
                            arguments.length
                        );
                    };
                }),
                _.each(["top", "left"], function (t, e) {
                    _.cssHooks[e] = Xt(g.pixelPosition, function (t, n) {
                        if (n) return (n = Qt(t, e)), qt.test(n) ? _(t).position()[e] + "px" : n;
                    });
                }),
                _.each({ Height: "height", Width: "width" }, function (t, e) {
                    _.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (n, i) {
                        _.fn[i] = function (r, o) {
                            var s = arguments.length && (n || "boolean" != typeof r),
                                a = n || (!0 === r || !0 === o ? "margin" : "border");
                            return V(
                                this,
                                function (e, n, r) {
                                    var o;
                                    return w(e)
                                        ? 0 === i.indexOf("outer")
                                            ? e["inner" + t]
                                            : e.document.documentElement["client" + t]
                                        : 9 === e.nodeType
                                        ? ((o = e.documentElement), Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t]))
                                        : void 0 === r
                                        ? _.css(e, n, a)
                                        : _.style(e, n, r, a);
                                },
                                e,
                                s ? r : void 0,
                                s
                            );
                        };
                    });
                }),
                _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
                    _.fn[e] = function (t, n) {
                        return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
                    };
                }),
                _.fn.extend({
                    hover: function (t, e) {
                        return this.mouseenter(t).mouseleave(e || t);
                    },
                }),
                _.fn.extend({
                    bind: function (t, e, n) {
                        return this.on(t, null, e, n);
                    },
                    unbind: function (t, e) {
                        return this.off(t, null, e);
                    },
                    delegate: function (t, e, n, i) {
                        return this.on(e, t, n, i);
                    },
                    undelegate: function (t, e, n) {
                        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
                    },
                }),
                (_.proxy = function (t, e) {
                    var n, i, r;
                    if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), y(t)))
                        return (
                            (i = l.call(arguments, 2)),
                            ((r = function () {
                                return t.apply(e || this, i.concat(l.call(arguments)));
                            }).guid = t.guid = t.guid || _.guid++),
                            r
                        );
                }),
                (_.holdReady = function (t) {
                    t ? _.readyWait++ : _.ready(!0);
                }),
                (_.isArray = Array.isArray),
                (_.parseJSON = JSON.parse),
                (_.nodeName = M),
                (_.isFunction = y),
                (_.isWindow = w),
                (_.camelCase = G),
                (_.type = x),
                (_.now = Date.now),
                (_.isNumeric = function (t) {
                    var e = _.type(t);
                    return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
                }),
                void 0 ===
                    (i = function () {
                        return _;
                    }.apply(e, [])) || (t.exports = i);
            var Je = n.jQuery,
                Ke = n.$;
            return (
                (_.noConflict = function (t) {
                    return n.$ === _ && (n.$ = Ke), t && n.jQuery === _ && (n.jQuery = Je), _;
                }),
                r || (n.jQuery = n.$ = _),
                _
            );
        });
    },
    function (t, e, n) {
        (function (e) {
            var i = n(6),
                r = n(1),
                o = n(12);
            t.exports = i.View.extend(
                r.extend({}, i.Events, {
                    initialize: function (t) {
                        (this.options = t || {}), (this.views = {}), !1 === this.options.server && this.setElement(e(""));
                    },
                    isRendered: function () {
                        return !!this.$el.length;
                    },
                    $parent: function () {
                        return null;
                    },
                    attach: function () {
                        var t = this.$parent();
                        t && t.append(this.$el);
                    },
                    renderData: function () {
                        return this.data || {};
                    },
                    render: function () {
                        var t = this.renderData();
                        return (t.viewOptions = this.options), this.setElement(this.template.render(t)), this.attach(), this;
                    },
                    activate: function () {
                        return (
                            this.viewName && e("html").attr("data-activeView", this.viewName),
                            this.loadData()
                                .then(
                                    function () {
                                        (this.isRendered() && 0 != this.$el.parents("html").length) || this.render(), this.viewsRegistration();
                                    }.bind(this)
                                )
                                .then(
                                    function () {
                                        var t = o.createEmptyPromise();
                                        return (
                                            this.views &&
                                                (t = Promise.all(
                                                    r.map(this.views, function (t) {
                                                        return t.activate();
                                                    })
                                                )),
                                            t
                                        );
                                    }.bind(this)
                                )
                        );
                    },
                    deactivate: function (t) {
                        t = t || {};
                        var e = o.createEmptyPromise();
                        return (
                            this.views &&
                                (e = Promise.all(
                                    r.map(this.views, function (e) {
                                        return e.deactivate(t);
                                    })
                                )),
                            e.then(
                                function () {
                                    t.destroy && this.destroy();
                                }.bind(this)
                            )
                        );
                    },
                    destroy: function () {
                        this.undelegateEvents(), this.$el.removeData().unbind(), this.remove();
                    },
                    viewsRegistration: function () {
                        var t = this.VIEWS_TO_REGISTER || {};
                        r.each(
                            t,
                            function (t, n) {
                                this.$(t.selector).each(
                                    function (i, r) {
                                        if (!e(r).closest(".Section-content").length || !this.$el.hasClass("Section")) {
                                            var o = { el: r };
                                            this.registerView(n + (i ? " " + i : ""), new t.viewConstructor(o));
                                        }
                                    }.bind(this)
                                );
                            }.bind(this)
                        );
                    },
                    registerView: function (t, e) {
                        return (e.parent = this), (this.views[t] = e), e;
                    },
                    addView: function (t) {
                        this.views.push(t);
                    },
                    getView: function (t) {
                        return this.views[t];
                    },
                    destroyView: function (t) {
                        this.views[t].destroy(), delete this.views[t];
                    },
                    proceedDataOnLoad: function (t) {
                        this.data = t;
                    },
                    onDataLoadStart: function () {},
                    onDataLoadEnd: function () {},
                    forceLoadData: function (t) {
                        var n,
                            i = this;
                        return (t = t || this.apiUrl)
                            ? ((n = r.isFunction(t) ? t() : t),
                              i.onDataLoadStart(),
                              Promise.resolve(
                                  e
                                      .getJSON(n)
                                      .then(
                                          function (t) {
                                              this.proceedDataOnLoad(t), i.onDataLoadEnd();
                                          }.bind(this)
                                      )
                                      .fail(function () {
                                          console.log("Data load error"), i.onDataLoadEnd(), app.router.navigateBack();
                                      })
                              ))
                            : o.createEmptyPromise();
                    },
                    loadData: function () {
                        var t = r.isFunction(this.apiUrl) ? this.apiUrl() : this.apiUrl;
                        return !this.data && t
                            ? this.disableCache
                                ? this.forceLoadData(t)
                                : void 0 !== window.app.cache[t]
                                ? ((this.data = window.app.cache[t]), o.createEmptyPromise())
                                : this.forceLoadData(t).then(
                                      function () {
                                          window.app.cache[t] = this.data;
                                      }.bind(this)
                                  )
                            : o.createEmptyPromise();
                    },
                    playIn: function () {
                        return o.createEmptyPromise();
                    },
                    playOut: function () {
                        return o.createEmptyPromise();
                    },
                })
            );
        }.call(this, n(2)));
    },
    function (t, e) {
        var n;
        n = (function () {
            return this;
        })();
        try {
            n = n || new Function("return this")();
        } catch (t) {
            "object" == typeof window && (n = window);
        }
        t.exports = n;
    },
    function (t, e, n) {
        var i = n(1),
            r = n(13);
        n(25);
        var o = n(26),
            s = n(28),
            a = n(30),
            l = n(32),
            u = n(37),
            c = n(39),
            h = n(41),
            p = n(43),
            f = n(45),
            d = n(47),
            m = n(49),
            v = n(51),
            g = n(55),
            y = n(69);
        t.exports = r.extend({
            collapseSubviewUpdatePlayInOut: !1,
            noAnimationOnEqualSubviews: !1,
            VIEWS_TO_REGISTER: {
                AboutAwards: { selector: ".AboutAwards", viewConstructor: o },
                AboutCapabilities: { selector: ".AboutCapabilities", viewConstructor: s },
                AboutGallery: { selector: ".AboutGallery", viewConstructor: a },
                AboutQuotes: { selector: ".AboutQuotes", viewConstructor: l },
                AboutWhatWeDo: { selector: ".AboutWhatWeDo", viewConstructor: u },
                ClientsList: { selector: ".ClientsList", viewConstructor: c },
                IndexAbout: { selector: ".IndexAbout", viewConstructor: h },
                IndexDescription: { selector: ".IndexDescription", viewConstructor: p },
                IndexFaq: { selector: ".IndexFaq", viewConstructor: f },
                IndexLogos: { selector: ".IndexLogos", viewConstructor: d },
                IndexNews: { selector: ".IndexNews", viewConstructor: m },
                ProjectsList: { selector: ".ProjectsList", viewConstructor: v },
                VideoHead: { selector: ".VideoHead", viewConstructor: g },
                WorksList: { selector: ".WorksList", viewConstructor: y },
            },
            initialize: function (t) {
                (this.isSection = !0), r.prototype.initialize.call(this, t);
                var e = this.options.view;
                this.registerView("view", new e(i.defaults(this.options.viewData, { inAnimated: !1, server: this.options.server }))), (this.$content = this.$(".Section-content"));
            },
            render: function () {
                var t = r.prototype.render.call(this);
                return (this.$content = this.$(".Section-content")), t;
            },
            viewsRegistration: function () {
                r.prototype.viewsRegistration.call(this);
            },
            activate: function () {
                return r.prototype.activate.call(this);
            },
            update: function (t, e) {
                var n = this.getView("view");
                this.options.viewData = e.viewData;
                var r = new t(i.defaults(this.options.viewData, { inAnimated: !0, server: !1 }));
                this.registerView("view", r);
                var o = n.constructor === r.constructor && r.noAnimationOnEqualSubviews,
                    s = e.fastNavigate ? 0 : 500;
                o
                    ? this.loadData()
                          .then(function () {
                              return r.activate();
                          })
                          .then(function () {
                              return n.playOut({ duration: 0, view: r });
                          })
                          .then(function () {
                              return n.deactivate({ destroy: !0 });
                          })
                          .then(function () {
                              return r.playIn({ duration: 0, view: r });
                          })
                    : this.collapseSubviewUpdatePlayInOut
                    ? this.loadData()
                          .then(function () {
                              return r.activate();
                          })
                          .then(function () {
                              return Promise.all([n.playOut({ duration: s, view: r }), r.playIn({ duration: s, zoom: e.zoomNavigate, view: r })]);
                          })
                          .then(function () {
                              return n.deactivate({ destroy: !0 });
                          })
                    : Promise.all([n.playOut({ duration: s, view: r }), this.loadData()])
                          .then(function () {
                              return n.deactivate({ destroy: !0 });
                          })
                          .then(function () {
                              return r.activate();
                          })
                          .then(function () {
                              return r.playIn({ duration: s, view: r });
                          });
            },
            deactivate: function (t) {
                return r.prototype.deactivate.call(this, t);
            },
            loadData: function () {
                return Promise.all([r.prototype.loadData.call(this), this.getView("view").loadData()]);
            },
        });
    },
    function (t, e, n) {
        (function (i) {
            var r, o, s;
            (s = ("object" == typeof self && self.self === self && self) || ("object" == typeof i && i.global === i && i)),
                (r = [n(1), n(2), e]),
                void 0 ===
                    (o = function (t, e, n) {
                        s.Backbone = (function (t, e, n, i) {
                            var r = t.Backbone,
                                o = Array.prototype.slice;
                            (e.VERSION = "1.4.0"),
                                (e.$ = i),
                                (e.noConflict = function () {
                                    return (t.Backbone = r), this;
                                }),
                                (e.emulateHTTP = !1),
                                (e.emulateJSON = !1);
                            var s,
                                a = (e.Events = {}),
                                l = /\s+/,
                                u = function (t, e, i, r, o) {
                                    var s,
                                        a = 0;
                                    if (i && "object" == typeof i) {
                                        void 0 !== r && "context" in o && void 0 === o.context && (o.context = r);
                                        for (s = n.keys(i); a < s.length; a++) e = u(t, e, s[a], i[s[a]], o);
                                    } else if (i && l.test(i)) for (s = i.split(l); a < s.length; a++) e = t(e, s[a], r, o);
                                    else e = t(e, i, r, o);
                                    return e;
                                };
                            (a.on = function (t, e, n) {
                                return (this._events = u(c, this._events || {}, t, e, { context: n, ctx: this, listening: s })), s && (((this._listeners || (this._listeners = {}))[s.id] = s), (s.interop = !1)), this;
                            }),
                                (a.listenTo = function (t, e, i) {
                                    if (!t) return this;
                                    var r = t._listenId || (t._listenId = n.uniqueId("l")),
                                        o = this._listeningTo || (this._listeningTo = {}),
                                        a = (s = o[r]);
                                    a || (this._listenId || (this._listenId = n.uniqueId("l")), (a = s = o[r] = new v(this, t)));
                                    var l = h(t, e, i, this);
                                    if (((s = void 0), l)) throw l;
                                    return a.interop && a.on(e, i), this;
                                });
                            var c = function (t, e, n, i) {
                                    if (n) {
                                        var r = t[e] || (t[e] = []),
                                            o = i.context,
                                            s = i.ctx,
                                            a = i.listening;
                                        a && a.count++, r.push({ callback: n, context: o, ctx: o || s, listening: a });
                                    }
                                    return t;
                                },
                                h = function (t, e, n, i) {
                                    try {
                                        t.on(e, n, i);
                                    } catch (t) {
                                        return t;
                                    }
                                };
                            (a.off = function (t, e, n) {
                                return this._events ? ((this._events = u(p, this._events, t, e, { context: n, listeners: this._listeners })), this) : this;
                            }),
                                (a.stopListening = function (t, e, i) {
                                    var r = this._listeningTo;
                                    if (!r) return this;
                                    for (var o = t ? [t._listenId] : n.keys(r), s = 0; s < o.length; s++) {
                                        var a = r[o[s]];
                                        if (!a) break;
                                        a.obj.off(e, i, this), a.interop && a.off(e, i);
                                    }
                                    return n.isEmpty(r) && (this._listeningTo = void 0), this;
                                });
                            var p = function (t, e, i, r) {
                                if (t) {
                                    var o,
                                        s = r.context,
                                        a = r.listeners,
                                        l = 0;
                                    if (e || s || i) {
                                        for (o = e ? [e] : n.keys(t); l < o.length; l++) {
                                            var u = t[(e = o[l])];
                                            if (!u) break;
                                            for (var c = [], h = 0; h < u.length; h++) {
                                                var p = u[h];
                                                if ((i && i !== p.callback && i !== p.callback._callback) || (s && s !== p.context)) c.push(p);
                                                else {
                                                    var f = p.listening;
                                                    f && f.off(e, i);
                                                }
                                            }
                                            c.length ? (t[e] = c) : delete t[e];
                                        }
                                        return t;
                                    }
                                    for (o = n.keys(a); l < o.length; l++) a[o[l]].cleanup();
                                }
                            };
                            (a.once = function (t, e, n) {
                                var i = u(f, {}, t, e, this.off.bind(this));
                                return "string" == typeof t && null == n && (e = void 0), this.on(i, e, n);
                            }),
                                (a.listenToOnce = function (t, e, n) {
                                    var i = u(f, {}, e, n, this.stopListening.bind(this, t));
                                    return this.listenTo(t, i);
                                });
                            var f = function (t, e, i, r) {
                                if (i) {
                                    var o = (t[e] = n.once(function () {
                                        r(e, o), i.apply(this, arguments);
                                    }));
                                    o._callback = i;
                                }
                                return t;
                            };
                            a.trigger = function (t) {
                                if (!this._events) return this;
                                for (var e = Math.max(0, arguments.length - 1), n = Array(e), i = 0; i < e; i++) n[i] = arguments[i + 1];
                                return u(d, this._events, t, void 0, n), this;
                            };
                            var d = function (t, e, n, i) {
                                    if (t) {
                                        var r = t[e],
                                            o = t.all;
                                        r && o && (o = o.slice()), r && m(r, i), o && m(o, [e].concat(i));
                                    }
                                    return t;
                                },
                                m = function (t, e) {
                                    var n,
                                        i = -1,
                                        r = t.length,
                                        o = e[0],
                                        s = e[1],
                                        a = e[2];
                                    switch (e.length) {
                                        case 0:
                                            for (; ++i < r; ) (n = t[i]).callback.call(n.ctx);
                                            return;
                                        case 1:
                                            for (; ++i < r; ) (n = t[i]).callback.call(n.ctx, o);
                                            return;
                                        case 2:
                                            for (; ++i < r; ) (n = t[i]).callback.call(n.ctx, o, s);
                                            return;
                                        case 3:
                                            for (; ++i < r; ) (n = t[i]).callback.call(n.ctx, o, s, a);
                                            return;
                                        default:
                                            for (; ++i < r; ) (n = t[i]).callback.apply(n.ctx, e);
                                            return;
                                    }
                                },
                                v = function (t, e) {
                                    (this.id = t._listenId), (this.listener = t), (this.obj = e), (this.interop = !0), (this.count = 0), (this._events = void 0);
                                };
                            (v.prototype.on = a.on),
                                (v.prototype.off = function (t, e) {
                                    var n;
                                    this.interop ? ((this._events = u(p, this._events, t, e, { context: void 0, listeners: void 0 })), (n = !this._events)) : (this.count--, (n = 0 === this.count)), n && this.cleanup();
                                }),
                                (v.prototype.cleanup = function () {
                                    delete this.listener._listeningTo[this.obj._listenId], this.interop || delete this.obj._listeners[this.id];
                                }),
                                (a.bind = a.on),
                                (a.unbind = a.off),
                                n.extend(e, a);
                            var g = (e.Model = function (t, e) {
                                var i = t || {};
                                e || (e = {}),
                                    this.preinitialize.apply(this, arguments),
                                    (this.cid = n.uniqueId(this.cidPrefix)),
                                    (this.attributes = {}),
                                    e.collection && (this.collection = e.collection),
                                    e.parse && (i = this.parse(i, e) || {});
                                var r = n.result(this, "defaults");
                                (i = n.defaults(n.extend({}, r, i), r)), this.set(i, e), (this.changed = {}), this.initialize.apply(this, arguments);
                            });
                            n.extend(g.prototype, a, {
                                changed: null,
                                validationError: null,
                                idAttribute: "id",
                                cidPrefix: "c",
                                preinitialize: function () {},
                                initialize: function () {},
                                toJSON: function (t) {
                                    return n.clone(this.attributes);
                                },
                                sync: function () {
                                    return e.sync.apply(this, arguments);
                                },
                                get: function (t) {
                                    return this.attributes[t];
                                },
                                escape: function (t) {
                                    return n.escape(this.get(t));
                                },
                                has: function (t) {
                                    return null != this.get(t);
                                },
                                matches: function (t) {
                                    return !!n.iteratee(t, this)(this.attributes);
                                },
                                set: function (t, e, i) {
                                    if (null == t) return this;
                                    var r;
                                    if (("object" == typeof t ? ((r = t), (i = e)) : ((r = {})[t] = e), i || (i = {}), !this._validate(r, i))) return !1;
                                    var o = i.unset,
                                        s = i.silent,
                                        a = [],
                                        l = this._changing;
                                    (this._changing = !0), l || ((this._previousAttributes = n.clone(this.attributes)), (this.changed = {}));
                                    var u = this.attributes,
                                        c = this.changed,
                                        h = this._previousAttributes;
                                    for (var p in r) (e = r[p]), n.isEqual(u[p], e) || a.push(p), n.isEqual(h[p], e) ? delete c[p] : (c[p] = e), o ? delete u[p] : (u[p] = e);
                                    if ((this.idAttribute in r && (this.id = this.get(this.idAttribute)), !s)) {
                                        a.length && (this._pending = i);
                                        for (var f = 0; f < a.length; f++) this.trigger("change:" + a[f], this, u[a[f]], i);
                                    }
                                    if (l) return this;
                                    if (!s) for (; this._pending; ) (i = this._pending), (this._pending = !1), this.trigger("change", this, i);
                                    return (this._pending = !1), (this._changing = !1), this;
                                },
                                unset: function (t, e) {
                                    return this.set(t, void 0, n.extend({}, e, { unset: !0 }));
                                },
                                clear: function (t) {
                                    var e = {};
                                    for (var i in this.attributes) e[i] = void 0;
                                    return this.set(e, n.extend({}, t, { unset: !0 }));
                                },
                                hasChanged: function (t) {
                                    return null == t ? !n.isEmpty(this.changed) : n.has(this.changed, t);
                                },
                                changedAttributes: function (t) {
                                    if (!t) return !!this.hasChanged() && n.clone(this.changed);
                                    var e,
                                        i = this._changing ? this._previousAttributes : this.attributes,
                                        r = {};
                                    for (var o in t) {
                                        var s = t[o];
                                        n.isEqual(i[o], s) || ((r[o] = s), (e = !0));
                                    }
                                    return !!e && r;
                                },
                                previous: function (t) {
                                    return null != t && this._previousAttributes ? this._previousAttributes[t] : null;
                                },
                                previousAttributes: function () {
                                    return n.clone(this._previousAttributes);
                                },
                                fetch: function (t) {
                                    t = n.extend({ parse: !0 }, t);
                                    var e = this,
                                        i = t.success;
                                    return (
                                        (t.success = function (n) {
                                            var r = t.parse ? e.parse(n, t) : n;
                                            if (!e.set(r, t)) return !1;
                                            i && i.call(t.context, e, n, t), e.trigger("sync", e, n, t);
                                        }),
                                        q(this, t),
                                        this.sync("read", this, t)
                                    );
                                },
                                save: function (t, e, i) {
                                    var r;
                                    null == t || "object" == typeof t ? ((r = t), (i = e)) : ((r = {})[t] = e);
                                    var o = (i = n.extend({ validate: !0, parse: !0 }, i)).wait;
                                    if (r && !o) {
                                        if (!this.set(r, i)) return !1;
                                    } else if (!this._validate(r, i)) return !1;
                                    var s = this,
                                        a = i.success,
                                        l = this.attributes;
                                    (i.success = function (t) {
                                        s.attributes = l;
                                        var e = i.parse ? s.parse(t, i) : t;
                                        if ((o && (e = n.extend({}, r, e)), e && !s.set(e, i))) return !1;
                                        a && a.call(i.context, s, t, i), s.trigger("sync", s, t, i);
                                    }),
                                        q(this, i),
                                        r && o && (this.attributes = n.extend({}, l, r));
                                    var u = this.isNew() ? "create" : i.patch ? "patch" : "update";
                                    "patch" !== u || i.attrs || (i.attrs = r);
                                    var c = this.sync(u, this, i);
                                    return (this.attributes = l), c;
                                },
                                destroy: function (t) {
                                    t = t ? n.clone(t) : {};
                                    var e = this,
                                        i = t.success,
                                        r = t.wait,
                                        o = function () {
                                            e.stopListening(), e.trigger("destroy", e, e.collection, t);
                                        };
                                    t.success = function (n) {
                                        r && o(), i && i.call(t.context, e, n, t), e.isNew() || e.trigger("sync", e, n, t);
                                    };
                                    var s = !1;
                                    return this.isNew() ? n.defer(t.success) : (q(this, t), (s = this.sync("delete", this, t))), r || o(), s;
                                },
                                url: function () {
                                    var t = n.result(this, "urlRoot") || n.result(this.collection, "url") || W();
                                    if (this.isNew()) return t;
                                    var e = this.get(this.idAttribute);
                                    return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e);
                                },
                                parse: function (t, e) {
                                    return t;
                                },
                                clone: function () {
                                    return new this.constructor(this.attributes);
                                },
                                isNew: function () {
                                    return !this.has(this.idAttribute);
                                },
                                isValid: function (t) {
                                    return this._validate({}, n.extend({}, t, { validate: !0 }));
                                },
                                _validate: function (t, e) {
                                    if (!e.validate || !this.validate) return !0;
                                    t = n.extend({}, this.attributes, t);
                                    var i = (this.validationError = this.validate(t, e) || null);
                                    return !i || (this.trigger("invalid", this, i, n.extend(e, { validationError: i })), !1);
                                },
                            });
                            var y = (e.Collection = function (t, e) {
                                    e || (e = {}),
                                        this.preinitialize.apply(this, arguments),
                                        e.model && (this.model = e.model),
                                        void 0 !== e.comparator && (this.comparator = e.comparator),
                                        this._reset(),
                                        this.initialize.apply(this, arguments),
                                        t && this.reset(t, n.extend({ silent: !0 }, e));
                                }),
                                w = { add: !0, remove: !0, merge: !0 },
                                A = { add: !0, remove: !1 },
                                b = function (t, e, n) {
                                    n = Math.min(Math.max(n, 0), t.length);
                                    var i,
                                        r = Array(t.length - n),
                                        o = e.length;
                                    for (i = 0; i < r.length; i++) r[i] = t[i + n];
                                    for (i = 0; i < o; i++) t[i + n] = e[i];
                                    for (i = 0; i < r.length; i++) t[i + o + n] = r[i];
                                };
                            n.extend(y.prototype, a, {
                                model: g,
                                preinitialize: function () {},
                                initialize: function () {},
                                toJSON: function (t) {
                                    return this.map(function (e) {
                                        return e.toJSON(t);
                                    });
                                },
                                sync: function () {
                                    return e.sync.apply(this, arguments);
                                },
                                add: function (t, e) {
                                    return this.set(t, n.extend({ merge: !1 }, e, A));
                                },
                                remove: function (t, e) {
                                    e = n.extend({}, e);
                                    var i = !n.isArray(t);
                                    t = i ? [t] : t.slice();
                                    var r = this._removeModels(t, e);
                                    return !e.silent && r.length && ((e.changes = { added: [], merged: [], removed: r }), this.trigger("update", this, e)), i ? r[0] : r;
                                },
                                set: function (t, e) {
                                    if (null != t) {
                                        (e = n.extend({}, w, e)).parse && !this._isModel(t) && (t = this.parse(t, e) || []);
                                        var i = !n.isArray(t);
                                        t = i ? [t] : t.slice();
                                        var r = e.at;
                                        null != r && (r = +r), r > this.length && (r = this.length), r < 0 && (r += this.length + 1);
                                        var o,
                                            s,
                                            a = [],
                                            l = [],
                                            u = [],
                                            c = [],
                                            h = {},
                                            p = e.add,
                                            f = e.merge,
                                            d = e.remove,
                                            m = !1,
                                            v = this.comparator && null == r && !1 !== e.sort,
                                            g = n.isString(this.comparator) ? this.comparator : null;
                                        for (s = 0; s < t.length; s++) {
                                            o = t[s];
                                            var y = this.get(o);
                                            if (y) {
                                                if (f && o !== y) {
                                                    var A = this._isModel(o) ? o.attributes : o;
                                                    e.parse && (A = y.parse(A, e)), y.set(A, e), u.push(y), v && !m && (m = y.hasChanged(g));
                                                }
                                                h[y.cid] || ((h[y.cid] = !0), a.push(y)), (t[s] = y);
                                            } else p && (o = t[s] = this._prepareModel(o, e)) && (l.push(o), this._addReference(o, e), (h[o.cid] = !0), a.push(o));
                                        }
                                        if (d) {
                                            for (s = 0; s < this.length; s++) h[(o = this.models[s]).cid] || c.push(o);
                                            c.length && this._removeModels(c, e);
                                        }
                                        var x = !1,
                                            _ = !v && p && d;
                                        if (
                                            (a.length && _
                                                ? ((x =
                                                      this.length !== a.length ||
                                                      n.some(this.models, function (t, e) {
                                                          return t !== a[e];
                                                      })),
                                                  (this.models.length = 0),
                                                  b(this.models, a, 0),
                                                  (this.length = this.models.length))
                                                : l.length && (v && (m = !0), b(this.models, l, null == r ? this.length : r), (this.length = this.models.length)),
                                            m && this.sort({ silent: !0 }),
                                            !e.silent)
                                        ) {
                                            for (s = 0; s < l.length; s++) null != r && (e.index = r + s), (o = l[s]).trigger("add", o, this, e);
                                            (m || x) && this.trigger("sort", this, e), (l.length || c.length || u.length) && ((e.changes = { added: l, removed: c, merged: u }), this.trigger("update", this, e));
                                        }
                                        return i ? t[0] : t;
                                    }
                                },
                                reset: function (t, e) {
                                    e = e ? n.clone(e) : {};
                                    for (var i = 0; i < this.models.length; i++) this._removeReference(this.models[i], e);
                                    return (e.previousModels = this.models), this._reset(), (t = this.add(t, n.extend({ silent: !0 }, e))), e.silent || this.trigger("reset", this, e), t;
                                },
                                push: function (t, e) {
                                    return this.add(t, n.extend({ at: this.length }, e));
                                },
                                pop: function (t) {
                                    var e = this.at(this.length - 1);
                                    return this.remove(e, t);
                                },
                                unshift: function (t, e) {
                                    return this.add(t, n.extend({ at: 0 }, e));
                                },
                                shift: function (t) {
                                    var e = this.at(0);
                                    return this.remove(e, t);
                                },
                                slice: function () {
                                    return o.apply(this.models, arguments);
                                },
                                get: function (t) {
                                    if (null != t) return this._byId[t] || this._byId[this.modelId(this._isModel(t) ? t.attributes : t)] || (t.cid && this._byId[t.cid]);
                                },
                                has: function (t) {
                                    return null != this.get(t);
                                },
                                at: function (t) {
                                    return t < 0 && (t += this.length), this.models[t];
                                },
                                where: function (t, e) {
                                    return this[e ? "find" : "filter"](t);
                                },
                                findWhere: function (t) {
                                    return this.where(t, !0);
                                },
                                sort: function (t) {
                                    var e = this.comparator;
                                    if (!e) throw new Error("Cannot sort a set without a comparator");
                                    t || (t = {});
                                    var i = e.length;
                                    return n.isFunction(e) && (e = e.bind(this)), 1 === i || n.isString(e) ? (this.models = this.sortBy(e)) : this.models.sort(e), t.silent || this.trigger("sort", this, t), this;
                                },
                                pluck: function (t) {
                                    return this.map(t + "");
                                },
                                fetch: function (t) {
                                    var e = (t = n.extend({ parse: !0 }, t)).success,
                                        i = this;
                                    return (
                                        (t.success = function (n) {
                                            var r = t.reset ? "reset" : "set";
                                            i[r](n, t), e && e.call(t.context, i, n, t), i.trigger("sync", i, n, t);
                                        }),
                                        q(this, t),
                                        this.sync("read", this, t)
                                    );
                                },
                                create: function (t, e) {
                                    var i = (e = e ? n.clone(e) : {}).wait;
                                    if (!(t = this._prepareModel(t, e))) return !1;
                                    i || this.add(t, e);
                                    var r = this,
                                        o = e.success;
                                    return (
                                        (e.success = function (t, e, n) {
                                            i && r.add(t, n), o && o.call(n.context, t, e, n);
                                        }),
                                        t.save(null, e),
                                        t
                                    );
                                },
                                parse: function (t, e) {
                                    return t;
                                },
                                clone: function () {
                                    return new this.constructor(this.models, { model: this.model, comparator: this.comparator });
                                },
                                modelId: function (t) {
                                    return t[this.model.prototype.idAttribute || "id"];
                                },
                                values: function () {
                                    return new _(this, T);
                                },
                                keys: function () {
                                    return new _(this, C);
                                },
                                entries: function () {
                                    return new _(this, S);
                                },
                                _reset: function () {
                                    (this.length = 0), (this.models = []), (this._byId = {});
                                },
                                _prepareModel: function (t, e) {
                                    if (this._isModel(t)) return t.collection || (t.collection = this), t;
                                    (e = e ? n.clone(e) : {}).collection = this;
                                    var i = new this.model(t, e);
                                    return i.validationError ? (this.trigger("invalid", this, i.validationError, e), !1) : i;
                                },
                                _removeModels: function (t, e) {
                                    for (var n = [], i = 0; i < t.length; i++) {
                                        var r = this.get(t[i]);
                                        if (r) {
                                            var o = this.indexOf(r);
                                            this.models.splice(o, 1), this.length--, delete this._byId[r.cid];
                                            var s = this.modelId(r.attributes);
                                            null != s && delete this._byId[s], e.silent || ((e.index = o), r.trigger("remove", r, this, e)), n.push(r), this._removeReference(r, e);
                                        }
                                    }
                                    return n;
                                },
                                _isModel: function (t) {
                                    return t instanceof g;
                                },
                                _addReference: function (t, e) {
                                    this._byId[t.cid] = t;
                                    var n = this.modelId(t.attributes);
                                    null != n && (this._byId[n] = t), t.on("all", this._onModelEvent, this);
                                },
                                _removeReference: function (t, e) {
                                    delete this._byId[t.cid];
                                    var n = this.modelId(t.attributes);
                                    null != n && delete this._byId[n], this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this);
                                },
                                _onModelEvent: function (t, e, n, i) {
                                    if (e) {
                                        if (("add" === t || "remove" === t) && n !== this) return;
                                        if (("destroy" === t && this.remove(e, i), "change" === t)) {
                                            var r = this.modelId(e.previousAttributes()),
                                                o = this.modelId(e.attributes);
                                            r !== o && (null != r && delete this._byId[r], null != o && (this._byId[o] = e));
                                        }
                                    }
                                    this.trigger.apply(this, arguments);
                                },
                            });
                            var x = "function" == typeof Symbol && Symbol.iterator;
                            x && (y.prototype[x] = y.prototype.values);
                            var _ = function (t, e) {
                                    (this._collection = t), (this._kind = e), (this._index = 0);
                                },
                                T = 1,
                                C = 2,
                                S = 3;
                            x &&
                                (_.prototype[x] = function () {
                                    return this;
                                }),
                                (_.prototype.next = function () {
                                    if (this._collection) {
                                        if (this._index < this._collection.length) {
                                            var t,
                                                e = this._collection.at(this._index);
                                            if ((this._index++, this._kind === T)) t = e;
                                            else {
                                                var n = this._collection.modelId(e.attributes);
                                                t = this._kind === C ? n : [n, e];
                                            }
                                            return { value: t, done: !1 };
                                        }
                                        this._collection = void 0;
                                    }
                                    return { value: void 0, done: !0 };
                                });
                            var P = (e.View = function (t) {
                                    (this.cid = n.uniqueId("view")), this.preinitialize.apply(this, arguments), n.extend(this, n.pick(t, E)), this._ensureElement(), this.initialize.apply(this, arguments);
                                }),
                                k = /^(\S+)\s*(.*)$/,
                                E = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
                            n.extend(P.prototype, a, {
                                tagName: "div",
                                $: function (t) {
                                    return this.$el.find(t);
                                },
                                preinitialize: function () {},
                                initialize: function () {},
                                render: function () {
                                    return this;
                                },
                                remove: function () {
                                    return this._removeElement(), this.stopListening(), this;
                                },
                                _removeElement: function () {
                                    this.$el.remove();
                                },
                                setElement: function (t) {
                                    return this.undelegateEvents(), this._setElement(t), this.delegateEvents(), this;
                                },
                                _setElement: function (t) {
                                    (this.$el = t instanceof e.$ ? t : e.$(t)), (this.el = this.$el[0]);
                                },
                                delegateEvents: function (t) {
                                    if ((t || (t = n.result(this, "events")), !t)) return this;
                                    for (var e in (this.undelegateEvents(), t)) {
                                        var i = t[e];
                                        if ((n.isFunction(i) || (i = this[i]), i)) {
                                            var r = e.match(k);
                                            this.delegate(r[1], r[2], i.bind(this));
                                        }
                                    }
                                    return this;
                                },
                                delegate: function (t, e, n) {
                                    return this.$el.on(t + ".delegateEvents" + this.cid, e, n), this;
                                },
                                undelegateEvents: function () {
                                    return this.$el && this.$el.off(".delegateEvents" + this.cid), this;
                                },
                                undelegate: function (t, e, n) {
                                    return this.$el.off(t + ".delegateEvents" + this.cid, e, n), this;
                                },
                                _createElement: function (t) {
                                    return document.createElement(t);
                                },
                                _ensureElement: function () {
                                    if (this.el) this.setElement(n.result(this, "el"));
                                    else {
                                        var t = n.extend({}, n.result(this, "attributes"));
                                        this.id && (t.id = n.result(this, "id")), this.className && (t.class = n.result(this, "className")), this.setElement(this._createElement(n.result(this, "tagName"))), this._setAttributes(t);
                                    }
                                },
                                _setAttributes: function (t) {
                                    this.$el.attr(t);
                                },
                            });
                            var M = function (t, e, i, r) {
                                    n.each(i, function (n, i) {
                                        e[i] &&
                                            (t.prototype[i] = (function (t, e, n, i) {
                                                switch (e) {
                                                    case 1:
                                                        return function () {
                                                            return t[n](this[i]);
                                                        };
                                                    case 2:
                                                        return function (e) {
                                                            return t[n](this[i], e);
                                                        };
                                                    case 3:
                                                        return function (e, r) {
                                                            return t[n](this[i], O(e, this), r);
                                                        };
                                                    case 4:
                                                        return function (e, r, o) {
                                                            return t[n](this[i], O(e, this), r, o);
                                                        };
                                                    default:
                                                        return function () {
                                                            var e = o.call(arguments);
                                                            return e.unshift(this[i]), t[n].apply(t, e);
                                                        };
                                                }
                                            })(e, n, i, r));
                                    });
                                },
                                O = function (t, e) {
                                    return n.isFunction(t)
                                        ? t
                                        : n.isObject(t) && !e._isModel(t)
                                        ? I(t)
                                        : n.isString(t)
                                        ? function (e) {
                                              return e.get(t);
                                          }
                                        : t;
                                },
                                I = function (t) {
                                    var e = n.matches(t);
                                    return function (t) {
                                        return e(t.attributes);
                                    };
                                };
                            n.each(
                                [
                                    [
                                        y,
                                        {
                                            forEach: 3,
                                            each: 3,
                                            map: 3,
                                            collect: 3,
                                            reduce: 0,
                                            foldl: 0,
                                            inject: 0,
                                            reduceRight: 0,
                                            foldr: 0,
                                            find: 3,
                                            detect: 3,
                                            filter: 3,
                                            select: 3,
                                            reject: 3,
                                            every: 3,
                                            all: 3,
                                            some: 3,
                                            any: 3,
                                            include: 3,
                                            includes: 3,
                                            contains: 3,
                                            invoke: 0,
                                            max: 3,
                                            min: 3,
                                            toArray: 1,
                                            size: 1,
                                            first: 3,
                                            head: 3,
                                            take: 3,
                                            initial: 3,
                                            rest: 3,
                                            tail: 3,
                                            drop: 3,
                                            last: 3,
                                            without: 0,
                                            difference: 0,
                                            indexOf: 3,
                                            shuffle: 1,
                                            lastIndexOf: 3,
                                            isEmpty: 1,
                                            chain: 1,
                                            sample: 3,
                                            partition: 3,
                                            groupBy: 3,
                                            countBy: 3,
                                            sortBy: 3,
                                            indexBy: 3,
                                            findIndex: 3,
                                            findLastIndex: 3,
                                        },
                                        "models",
                                    ],
                                    [g, { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0, omit: 0, chain: 1, isEmpty: 1 }, "attributes"],
                                ],
                                function (t) {
                                    var e = t[0],
                                        i = t[1],
                                        r = t[2];
                                    (e.mixin = function (t) {
                                        var i = n.reduce(
                                            n.functions(t),
                                            function (t, e) {
                                                return (t[e] = 0), t;
                                            },
                                            {}
                                        );
                                        M(e, t, i, r);
                                    }),
                                        M(e, n, i, r);
                                }
                            ),
                                (e.sync = function (t, i, r) {
                                    var o = $[t];
                                    n.defaults(r || (r = {}), { emulateHTTP: e.emulateHTTP, emulateJSON: e.emulateJSON });
                                    var s = { type: o, dataType: "json" };
                                    if (
                                        (r.url || (s.url = n.result(i, "url") || W()),
                                        null != r.data || !i || ("create" !== t && "update" !== t && "patch" !== t) || ((s.contentType = "application/json"), (s.data = JSON.stringify(r.attrs || i.toJSON(r)))),
                                        r.emulateJSON && ((s.contentType = "application/x-www-form-urlencoded"), (s.data = s.data ? { model: s.data } : {})),
                                        r.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o))
                                    ) {
                                        (s.type = "POST"), r.emulateJSON && (s.data._method = o);
                                        var a = r.beforeSend;
                                        r.beforeSend = function (t) {
                                            if ((t.setRequestHeader("X-HTTP-Method-Override", o), a)) return a.apply(this, arguments);
                                        };
                                    }
                                    "GET" === s.type || r.emulateJSON || (s.processData = !1);
                                    var l = r.error;
                                    r.error = function (t, e, n) {
                                        (r.textStatus = e), (r.errorThrown = n), l && l.call(r.context, t, e, n);
                                    };
                                    var u = (r.xhr = e.ajax(n.extend(s, r)));
                                    return i.trigger("request", i, u, r), u;
                                });
                            var $ = { create: "POST", update: "PUT", patch: "PATCH", delete: "DELETE", read: "GET" };
                            e.ajax = function () {
                                return e.$.ajax.apply(e.$, arguments);
                            };
                            var D = (e.Router = function (t) {
                                    t || (t = {}), this.preinitialize.apply(this, arguments), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
                                }),
                                L = /\((.*?)\)/g,
                                N = /(\(\?)?:\w+/g,
                                R = /\*\w+/g,
                                j = /[\-{}\[\]+?.,\\\^$|#\s]/g;
                            n.extend(D.prototype, a, {
                                preinitialize: function () {},
                                initialize: function () {},
                                route: function (t, i, r) {
                                    n.isRegExp(t) || (t = this._routeToRegExp(t)), n.isFunction(i) && ((r = i), (i = "")), r || (r = this[i]);
                                    var o = this;
                                    return (
                                        e.history.route(t, function (n) {
                                            var s = o._extractParameters(t, n);
                                            !1 !== o.execute(r, s, i) && (o.trigger.apply(o, ["route:" + i].concat(s)), o.trigger("route", i, s), e.history.trigger("route", o, i, s));
                                        }),
                                        this
                                    );
                                },
                                execute: function (t, e, n) {
                                    t && t.apply(this, e);
                                },
                                navigate: function (t, n) {
                                    return e.history.navigate(t, n), this;
                                },
                                _bindRoutes: function () {
                                    if (this.routes) {
                                        this.routes = n.result(this, "routes");
                                        for (var t, e = n.keys(this.routes); null != (t = e.pop()); ) this.route(t, this.routes[t]);
                                    }
                                },
                                _routeToRegExp: function (t) {
                                    return (
                                        (t = t
                                            .replace(j, "\\$&")
                                            .replace(L, "(?:$1)?")
                                            .replace(N, function (t, e) {
                                                return e ? t : "([^/?]+)";
                                            })
                                            .replace(R, "([^?]*?)")),
                                        new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
                                    );
                                },
                                _extractParameters: function (t, e) {
                                    var i = t.exec(e).slice(1);
                                    return n.map(i, function (t, e) {
                                        return e === i.length - 1 ? t || null : t ? decodeURIComponent(t) : null;
                                    });
                                },
                            });
                            var F = (e.History = function () {
                                    (this.handlers = []), (this.checkUrl = this.checkUrl.bind(this)), "undefined" != typeof window && ((this.location = window.location), (this.history = window.history));
                                }),
                                z = /^[#\/]|\s+$/g,
                                H = /^\/+|\/+$/g,
                                B = /#.*$/;
                            (F.started = !1),
                                n.extend(F.prototype, a, {
                                    interval: 50,
                                    atRoot: function () {
                                        return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch();
                                    },
                                    matchRoot: function () {
                                        return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root;
                                    },
                                    decodeFragment: function (t) {
                                        return decodeURI(t.replace(/%25/g, "%2525"));
                                    },
                                    getSearch: function () {
                                        var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
                                        return t ? t[0] : "";
                                    },
                                    getHash: function (t) {
                                        var e = (t || this).location.href.match(/#(.*)$/);
                                        return e ? e[1] : "";
                                    },
                                    getPath: function () {
                                        var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                                        return "/" === t.charAt(0) ? t.slice(1) : t;
                                    },
                                    getFragment: function (t) {
                                        return null == t && (t = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), t.replace(z, "");
                                    },
                                    start: function (t) {
                                        if (F.started) throw new Error("Backbone.history has already been started");
                                        if (
                                            ((F.started = !0),
                                            (this.options = n.extend({ root: "/" }, this.options, t)),
                                            (this.root = this.options.root),
                                            (this._wantsHashChange = !1 !== this.options.hashChange),
                                            (this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7)),
                                            (this._useHashChange = this._wantsHashChange && this._hasHashChange),
                                            (this._wantsPushState = !!this.options.pushState),
                                            (this._hasPushState = !(!this.history || !this.history.pushState)),
                                            (this._usePushState = this._wantsPushState && this._hasPushState),
                                            (this.fragment = this.getFragment()),
                                            (this.root = ("/" + this.root + "/").replace(H, "/")),
                                            this._wantsHashChange && this._wantsPushState)
                                        ) {
                                            if (!this._hasPushState && !this.atRoot()) {
                                                var e = this.root.slice(0, -1) || "/";
                                                return this.location.replace(e + "#" + this.getPath()), !0;
                                            }
                                            this._hasPushState && this.atRoot() && this.navigate(this.getHash(), { replace: !0 });
                                        }
                                        if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                                            (this.iframe = document.createElement("iframe")), (this.iframe.src = "javascript:0"), (this.iframe.style.display = "none"), (this.iframe.tabIndex = -1);
                                            var i = document.body,
                                                r = i.insertBefore(this.iframe, i.firstChild).contentWindow;
                                            r.document.open(), r.document.close(), (r.location.hash = "#" + this.fragment);
                                        }
                                        var o =
                                            window.addEventListener ||
                                            function (t, e) {
                                                return attachEvent("on" + t, e);
                                            };
                                        if (
                                            (this._usePushState
                                                ? o("popstate", this.checkUrl, !1)
                                                : this._useHashChange && !this.iframe
                                                ? o("hashchange", this.checkUrl, !1)
                                                : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
                                            !this.options.silent)
                                        )
                                            return this.loadUrl();
                                    },
                                    stop: function () {
                                        var t =
                                            window.removeEventListener ||
                                            function (t, e) {
                                                return detachEvent("on" + t, e);
                                            };
                                        this._usePushState ? t("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && t("hashchange", this.checkUrl, !1),
                                            this.iframe && (document.body.removeChild(this.iframe), (this.iframe = null)),
                                            this._checkUrlInterval && clearInterval(this._checkUrlInterval),
                                            (F.started = !1);
                                    },
                                    route: function (t, e) {
                                        this.handlers.unshift({ route: t, callback: e });
                                    },
                                    checkUrl: function (t) {
                                        var e = this.getFragment();
                                        if ((e === this.fragment && this.iframe && (e = this.getHash(this.iframe.contentWindow)), e === this.fragment)) return !1;
                                        this.iframe && this.navigate(e), this.loadUrl();
                                    },
                                    loadUrl: function (t) {
                                        return (
                                            !!this.matchRoot() &&
                                            ((t = this.fragment = this.getFragment(t)),
                                            n.some(this.handlers, function (e) {
                                                if (e.route.test(t)) return e.callback(t), !0;
                                            }))
                                        );
                                    },
                                    navigate: function (t, e) {
                                        if (!F.started) return !1;
                                        (e && !0 !== e) || (e = { trigger: !!e }), (t = this.getFragment(t || ""));
                                        var n = this.root;
                                        ("" !== t && "?" !== t.charAt(0)) || (n = n.slice(0, -1) || "/");
                                        var i = n + t;
                                        t = t.replace(B, "");
                                        var r = this.decodeFragment(t);
                                        if (this.fragment !== r) {
                                            if (((this.fragment = r), this._usePushState)) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, i);
                                            else {
                                                if (!this._wantsHashChange) return this.location.assign(i);
                                                if ((this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getHash(this.iframe.contentWindow))) {
                                                    var o = this.iframe.contentWindow;
                                                    e.replace || (o.document.open(), o.document.close()), this._updateHash(o.location, t, e.replace);
                                                }
                                            }
                                            return e.trigger ? this.loadUrl(t) : void 0;
                                        }
                                    },
                                    _updateHash: function (t, e, n) {
                                        if (n) {
                                            var i = t.href.replace(/(javascript:|#).*$/, "");
                                            t.replace(i + "#" + e);
                                        } else t.hash = "#" + e;
                                    },
                                }),
                                (e.history = new F()),
                                (g.extend = y.extend = D.extend = P.extend = F.extend = function (t, e) {
                                    var i,
                                        r = this;
                                    return (
                                        (i =
                                            t && n.has(t, "constructor")
                                                ? t.constructor
                                                : function () {
                                                      return r.apply(this, arguments);
                                                  }),
                                        n.extend(i, r, e),
                                        (i.prototype = n.create(r.prototype, t)),
                                        (i.prototype.constructor = i),
                                        (i.__super__ = r.prototype),
                                        i
                                    );
                                });
                            var W = function () {
                                    throw new Error('A "url" property or function must be specified');
                                },
                                q = function (t, e) {
                                    var n = e.error;
                                    e.error = function (i) {
                                        n && n.call(e.context, t, i, e), t.trigger("error", t, i, e);
                                    };
                                };
                            return e;
                        })(s, n, t, e);
                    }.apply(e, r)) || (t.exports = o);
        }.call(this, n(4)));
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "TimelineLite", function () {
                return r;
            }),
            n.d(e, "default", function () {
                return r;
            });
        var i = n(0);
        /*!
         * VERSION: 2.1.3
         * DATE: 2019-05-17
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         */ i.k._gsDefine(
            "TimelineLite",
            ["core.Animation", "core.SimpleTimeline", "TweenLite"],
            function () {
                var t = function (t) {
                        i.i.call(this, t);
                        var e,
                            n,
                            r = this.vars;
                        for (n in ((this._labels = {}), (this.autoRemoveChildren = !!r.autoRemoveChildren), (this.smoothChildTiming = !!r.smoothChildTiming), (this._sortChildren = !0), (this._onUpdate = r.onUpdate), r))
                            (e = r[n]), o(e) && -1 !== e.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(e));
                        o(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger);
                    },
                    e = i.l._internals,
                    n = (t._internals = {}),
                    r = e.isSelector,
                    o = e.isArray,
                    s = e.lazyTweens,
                    a = e.lazyRender,
                    l = i.k._gsDefine.globals,
                    u = function (t) {
                        var e,
                            n = {};
                        for (e in t) n[e] = t[e];
                        return n;
                    },
                    c = function (t, e, n) {
                        var i,
                            r,
                            o = t.cycle;
                        for (i in o) (r = o[i]), (t[i] = "function" == typeof r ? r(n, e[n], e) : r[n % r.length]);
                        delete t.cycle;
                    },
                    h = (n.pauseCallback = function () {}),
                    p = function (t, e, n, i) {
                        var r = "immediateRender";
                        return r in e || (e[r] = !((n && !1 === n[r]) || i)), e;
                    },
                    f = function (t) {
                        if ("function" == typeof t) return t;
                        var e = "object" == typeof t ? t : { each: t },
                            n = e.ease,
                            i = e.from || 0,
                            r = e.base || 0,
                            o = {},
                            s = isNaN(i),
                            a = e.axis,
                            l = { center: 0.5, end: 1 }[i] || 0;
                        return function (t, u, c) {
                            var h,
                                p,
                                f,
                                d,
                                m,
                                v,
                                g,
                                y,
                                w,
                                A = (c || e).length,
                                b = o[A];
                            if (!b) {
                                if (!(w = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                                    for (g = -1 / 0; g < (g = c[w++].getBoundingClientRect().left) && w < A; );
                                    w--;
                                }
                                for (b = o[A] = [], h = s ? Math.min(w, A) * l - 0.5 : i % w, p = s ? (A * l) / w - 0.5 : (i / w) | 0, g = 0, y = 1 / 0, v = 0; v < A; v++)
                                    (f = (v % w) - h), (d = p - ((v / w) | 0)), (b[v] = m = a ? Math.abs("y" === a ? d : f) : Math.sqrt(f * f + d * d)), m > g && (g = m), m < y && (y = m);
                                (b.max = g - y), (b.min = y), (b.v = A = e.amount || e.each * (w > A ? A - 1 : a ? ("y" === a ? A / w : w) : Math.max(w, A / w)) || 0), (b.b = A < 0 ? r - A : r);
                            }
                            return (A = (b[t] - b.min) / b.max), b.b + (n ? n.getRatio(A) : A) * b.v;
                        };
                    },
                    d = (t.prototype = new i.i());
                return (
                    (t.version = "2.1.3"),
                    (t.distribute = f),
                    (d.constructor = t),
                    (d.kill()._gc = d._forcingPlayhead = d._hasPause = !1),
                    (d.to = function (t, e, n, r) {
                        var o = (n.repeat && l.TweenMax) || i.l;
                        return e ? this.add(new o(t, e, n), r) : this.set(t, n, r);
                    }),
                    (d.from = function (t, e, n, r) {
                        return this.add(((n.repeat && l.TweenMax) || i.l).from(t, e, p(0, n)), r);
                    }),
                    (d.fromTo = function (t, e, n, r, o) {
                        var s = (r.repeat && l.TweenMax) || i.l;
                        return (r = p(0, r, n)), e ? this.add(s.fromTo(t, e, n, r), o) : this.set(t, r, o);
                    }),
                    (d.staggerTo = function (e, n, o, s, a, l, h, p) {
                        var d,
                            m,
                            v = new t({ onComplete: l, onCompleteParams: h, callbackScope: p, smoothChildTiming: this.smoothChildTiming }),
                            g = f(o.stagger || s),
                            y = o.startAt,
                            w = o.cycle;
                        for (
                            "string" == typeof e && (e = i.l.selector(e) || e),
                                r((e = e || [])) &&
                                    (e = (function (t) {
                                        var e,
                                            n = [],
                                            i = t.length;
                                        for (e = 0; e !== i; n.push(t[e++]));
                                        return n;
                                    })(e)),
                                m = 0;
                            m < e.length;
                            m++
                        )
                            (d = u(o)), y && ((d.startAt = u(y)), y.cycle && c(d.startAt, e, m)), w && (c(d, e, m), null != d.duration && ((n = d.duration), delete d.duration)), v.to(e[m], n, d, g(m, e[m], e));
                        return this.add(v, a);
                    }),
                    (d.staggerFrom = function (t, e, n, i, r, o, s, a) {
                        return (n.runBackwards = !0), this.staggerTo(t, e, p(0, n), i, r, o, s, a);
                    }),
                    (d.staggerFromTo = function (t, e, n, i, r, o, s, a, l) {
                        return (i.startAt = n), this.staggerTo(t, e, p(0, i, n), r, o, s, a, l);
                    }),
                    (d.call = function (t, e, n, r) {
                        return this.add(i.l.delayedCall(0, t, e, n), r);
                    }),
                    (d.set = function (t, e, n) {
                        return this.add(new i.l(t, 0, p(0, e, null, !0)), n);
                    }),
                    (t.exportRoot = function (e, n) {
                        null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
                        var r,
                            o,
                            s,
                            a,
                            l = new t(e),
                            u = l._timeline;
                        for (null == n && (n = !0), u._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = u._time, s = u._first; s; )
                            (a = s._next), (n && s instanceof i.l && s.target === s.vars.onComplete) || ((o = s._startTime - s._delay) < 0 && (r = 1), l.add(s, o)), (s = a);
                        return u.add(l, 0), r && l.totalDuration(), l;
                    }),
                    (d.add = function (e, n, r, s) {
                        var a, l, u, c, h, p;
                        if (("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, e)), !(e instanceof i.a))) {
                            if (e instanceof Array || (e && e.push && o(e))) {
                                for (r = r || "normal", s = s || 0, a = n, l = e.length, u = 0; u < l; u++)
                                    o((c = e[u])) && (c = new t({ tweens: c })),
                                        this.add(c, a),
                                        "string" != typeof c && "function" != typeof c && ("sequence" === r ? (a = c._startTime + c.totalDuration() / c._timeScale) : "start" === r && (c._startTime -= c.delay())),
                                        (a += s);
                                return this._uncache(!0);
                            }
                            if ("string" == typeof e) return this.addLabel(e, n);
                            if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                            e = i.l.delayedCall(0, e);
                        }
                        if (
                            (i.i.prototype.add.call(this, e, n),
                            (e._time || (!e._duration && e._initted)) &&
                                ((a = (this.rawTime() - e._startTime) * e._timeScale), (!e._duration || Math.abs(Math.max(0, Math.min(e.totalDuration(), a))) - e._totalTime > 1e-5) && e.render(a, !1, !1)),
                            (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        )
                            for (p = (h = this).rawTime() > e._startTime; h._timeline; ) p && h._timeline.smoothChildTiming ? h.totalTime(h._totalTime, !0) : h._gc && h._enabled(!0, !1), (h = h._timeline);
                        return this;
                    }),
                    (d.remove = function (t) {
                        if (t instanceof i.a) {
                            this._remove(t, !1);
                            var e = (t._timeline = t.vars.useFrames ? i.a._rootFramesTimeline : i.a._rootTimeline);
                            return (t._startTime = (t._paused ? t._pauseTime : e._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale), this;
                        }
                        if (t instanceof Array || (t && t.push && o(t))) {
                            for (var n = t.length; --n > -1; ) this.remove(t[n]);
                            return this;
                        }
                        return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t);
                    }),
                    (d._remove = function (t, e) {
                        return (
                            i.i.prototype._remove.call(this, t, e),
                            this._last ? this._time > this.duration() && ((this._time = this._duration), (this._totalTime = this._totalDuration)) : (this._time = this._totalTime = this._duration = this._totalDuration = 0),
                            this
                        );
                    }),
                    (d.append = function (t, e) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
                    }),
                    (d.insert = d.insertMultiple = function (t, e, n, i) {
                        return this.add(t, e || 0, n, i);
                    }),
                    (d.appendMultiple = function (t, e, n, i) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t), n, i);
                    }),
                    (d.addLabel = function (t, e) {
                        return (this._labels[t] = this._parseTimeOrLabel(e)), this;
                    }),
                    (d.addPause = function (t, e, n, r) {
                        var o = i.l.delayedCall(0, h, n, r || this);
                        return (o.vars.onComplete = o.vars.onReverseComplete = e), (o.data = "isPause"), (this._hasPause = !0), this.add(o, t);
                    }),
                    (d.removeLabel = function (t) {
                        return delete this._labels[t], this;
                    }),
                    (d.getLabelTime = function (t) {
                        return null != this._labels[t] ? this._labels[t] : -1;
                    }),
                    (d._parseTimeOrLabel = function (t, e, n, r) {
                        var s, a;
                        if (r instanceof i.a && r.timeline === this) this.remove(r);
                        else if (r && (r instanceof Array || (r.push && o(r)))) for (a = r.length; --a > -1; ) r[a] instanceof i.a && r[a].timeline === this && this.remove(r[a]);
                        if (((s = "number" != typeof t || e ? (this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration) : 0), "string" == typeof e))
                            return this._parseTimeOrLabel(e, n && "number" == typeof t && null == this._labels[e] ? t - s : 0, n);
                        if (((e = e || 0), "string" != typeof t || (!isNaN(t) && null == this._labels[t]))) null == t && (t = s);
                        else {
                            if (-1 === (a = t.indexOf("="))) return null == this._labels[t] ? (n ? (this._labels[t] = s + e) : e) : this._labels[t] + e;
                            (e = parseInt(t.charAt(a - 1) + "1", 10) * Number(t.substr(a + 1))), (t = a > 1 ? this._parseTimeOrLabel(t.substr(0, a - 1), 0, n) : s);
                        }
                        return Number(t) + e;
                    }),
                    (d.seek = function (t, e) {
                        return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e);
                    }),
                    (d.stop = function () {
                        return this.paused(!0);
                    }),
                    (d.gotoAndPlay = function (t, e) {
                        return this.play(t, e);
                    }),
                    (d.gotoAndStop = function (t, e) {
                        return this.pause(t, e);
                    }),
                    (d.render = function (t, e, n) {
                        this._gc && this._enabled(!0, !1);
                        var i,
                            r,
                            o,
                            l,
                            u,
                            c,
                            h,
                            p,
                            f = this._time,
                            d = this._dirty ? this.totalDuration() : this._totalDuration,
                            m = this._startTime,
                            v = this._timeScale,
                            g = this._paused;
                        if ((f !== this._time && (t += this._time - f), this._hasPause && !this._forcingPlayhead && !e)) {
                            if (t > f) for (i = this._first; i && i._startTime <= t && !c; ) i._duration || "isPause" !== i.data || i.ratio || (0 === i._startTime && 0 === this._rawPrevTime) || (c = i), (i = i._next);
                            else for (i = this._last; i && i._startTime >= t && !c; ) i._duration || ("isPause" === i.data && i._rawPrevTime > 0 && (c = i)), (i = i._prev);
                            c && ((this._time = this._totalTime = t = c._startTime), (p = this._startTime + (this._reversed ? this._duration - t : t) / this._timeScale));
                        }
                        if (t >= d - 1e-8 && t >= 0)
                            (this._totalTime = this._time = d),
                                this._reversed ||
                                    this._hasPausedChild() ||
                                    ((r = !0),
                                    (l = "onComplete"),
                                    (u = !!this._timeline.autoRemoveChildren),
                                    0 === this._duration &&
                                        ((t <= 0 && t >= -1e-8) || this._rawPrevTime < 0 || 1e-8 === this._rawPrevTime) &&
                                        this._rawPrevTime !== t &&
                                        this._first &&
                                        ((u = !0), this._rawPrevTime > 1e-8 && (l = "onReverseComplete"))),
                                (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8),
                                (t = d + 1e-4);
                        else if (t < 1e-8)
                            if (
                                ((this._totalTime = this._time = 0),
                                t > -1e-8 && (t = 0),
                                (0 !== f || (0 === this._duration && 1e-8 !== this._rawPrevTime && (this._rawPrevTime > 0 || (t < 0 && this._rawPrevTime >= 0)))) && ((l = "onReverseComplete"), (r = this._reversed)),
                                t < 0)
                            )
                                (this._active = !1), this._timeline.autoRemoveChildren && this._reversed ? ((u = r = !0), (l = "onReverseComplete")) : this._rawPrevTime >= 0 && this._first && (u = !0), (this._rawPrevTime = t);
                            else {
                                if (((this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8), 0 === t && r)) for (i = this._first; i && 0 === i._startTime; ) i._duration || (r = !1), (i = i._next);
                                (t = 0), this._initted || (u = !0);
                            }
                        else this._totalTime = this._time = this._rawPrevTime = t;
                        if ((this._time !== f && this._first) || n || u || c) {
                            if (
                                (this._initted || (this._initted = !0),
                                this._active || (!this._paused && this._time !== f && t > 0 && (this._active = !0)),
                                0 === f && this.vars.onStart && ((0 === this._time && this._duration) || e || this._callback("onStart")),
                                (h = this._time) >= f)
                            )
                                for (i = this._first; i && ((o = i._next), h === this._time && (!this._paused || g)); )
                                    (i._active || (i._startTime <= h && !i._paused && !i._gc)) &&
                                        (c === i && (this.pause(), (this._pauseTime = p)),
                                        i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)),
                                        (i = o);
                            else
                                for (i = this._last; i && ((o = i._prev), h === this._time && (!this._paused || g)); ) {
                                    if (i._active || (i._startTime <= f && !i._paused && !i._gc)) {
                                        if (c === i) {
                                            for (c = i._prev; c && c.endTime() > this._time; ) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, n), (c = c._prev);
                                            (c = null), this.pause(), (this._pauseTime = p);
                                        }
                                        i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n);
                                    }
                                    i = o;
                                }
                            this._onUpdate && (e || (s.length && a(), this._callback("onUpdate"))),
                                l &&
                                    (this._gc ||
                                        (m !== this._startTime && v === this._timeScale) ||
                                        ((0 === this._time || d >= this.totalDuration()) &&
                                            (r && (s.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !e && this.vars[l] && this._callback(l))));
                        }
                    }),
                    (d._hasPausedChild = function () {
                        for (var e = this._first; e; ) {
                            if (e._paused || (e instanceof t && e._hasPausedChild())) return !0;
                            e = e._next;
                        }
                        return !1;
                    }),
                    (d.getChildren = function (t, e, n, r) {
                        r = r || -9999999999;
                        for (var o = [], s = this._first, a = 0; s; )
                            s._startTime < r || (s instanceof i.l ? !1 !== e && (o[a++] = s) : (!1 !== n && (o[a++] = s), !1 !== t && (a = (o = o.concat(s.getChildren(!0, e, n))).length))), (s = s._next);
                        return o;
                    }),
                    (d.getTweensOf = function (t, e) {
                        var n,
                            r,
                            o = this._gc,
                            s = [],
                            a = 0;
                        for (o && this._enabled(!0, !0), r = (n = i.l.getTweensOf(t)).length; --r > -1; ) (n[r].timeline === this || (e && this._contains(n[r]))) && (s[a++] = n[r]);
                        return o && this._enabled(!1, !0), s;
                    }),
                    (d.recent = function () {
                        return this._recent;
                    }),
                    (d._contains = function (t) {
                        for (var e = t.timeline; e; ) {
                            if (e === this) return !0;
                            e = e.timeline;
                        }
                        return !1;
                    }),
                    (d.shiftChildren = function (t, e, n) {
                        n = n || 0;
                        for (var i, r = this._first, o = this._labels; r; ) r._startTime >= n && (r._startTime += t), (r = r._next);
                        if (e) for (i in o) o[i] >= n && (o[i] += t);
                        return this._uncache(!0);
                    }),
                    (d._kill = function (t, e) {
                        if (!t && !e) return this._enabled(!1, !1);
                        for (var n = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), i = n.length, r = !1; --i > -1; ) n[i]._kill(t, e) && (r = !0);
                        return r;
                    }),
                    (d.clear = function (t) {
                        var e = this.getChildren(!1, !0, !0),
                            n = e.length;
                        for (this._time = this._totalTime = 0; --n > -1; ) e[n]._enabled(!1, !1);
                        return !1 !== t && (this._labels = {}), this._uncache(!0);
                    }),
                    (d.invalidate = function () {
                        for (var t = this._first; t; ) t.invalidate(), (t = t._next);
                        return i.a.prototype.invalidate.call(this);
                    }),
                    (d._enabled = function (t, e) {
                        if (t === this._gc) for (var n = this._first; n; ) n._enabled(t, !0), (n = n._next);
                        return i.i.prototype._enabled.call(this, t, e);
                    }),
                    (d.totalTime = function (t, e, n) {
                        this._forcingPlayhead = !0;
                        var r = i.a.prototype.totalTime.apply(this, arguments);
                        return (this._forcingPlayhead = !1), r;
                    }),
                    (d.duration = function (t) {
                        return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration);
                    }),
                    (d.totalDuration = function (t) {
                        if (!arguments.length) {
                            if (this._dirty) {
                                for (var e, n, i = 0, r = this, o = r._last, s = 999999999999; o; )
                                    (e = o._prev),
                                        o._dirty && o.totalDuration(),
                                        o._startTime > s && r._sortChildren && !o._paused && !r._calculatingDuration ? ((r._calculatingDuration = 1), r.add(o, o._startTime - o._delay), (r._calculatingDuration = 0)) : (s = o._startTime),
                                        o._startTime < 0 &&
                                            !o._paused &&
                                            ((i -= o._startTime),
                                            r._timeline.smoothChildTiming && ((r._startTime += o._startTime / r._timeScale), (r._time -= o._startTime), (r._totalTime -= o._startTime), (r._rawPrevTime -= o._startTime)),
                                            r.shiftChildren(-o._startTime, !1, -9999999999),
                                            (s = 0)),
                                        (n = o._startTime + o._totalDuration / o._timeScale) > i && (i = n),
                                        (o = e);
                                (r._duration = r._totalDuration = i), (r._dirty = !1);
                            }
                            return this._totalDuration;
                        }
                        return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this;
                    }),
                    (d.paused = function (t) {
                        if (!1 === t && this._paused) for (var e = this._first; e; ) e._startTime === this._time && "isPause" === e.data && (e._rawPrevTime = 0), (e = e._next);
                        return i.a.prototype.paused.apply(this, arguments);
                    }),
                    (d.usesFrames = function () {
                        for (var t = this._timeline; t._timeline; ) t = t._timeline;
                        return t === i.a._rootFramesTimeline;
                    }),
                    (d.rawTime = function (t) {
                        return t && (this._paused || (this._repeat && this.time() > 0 && this.totalProgress() < 1))
                            ? this._totalTime % (this._duration + this._repeatDelay)
                            : this._paused
                            ? this._totalTime
                            : (this._timeline.rawTime(t) - this._startTime) * this._timeScale;
                    }),
                    t
                );
            },
            !0
        );
        var r = i.m.TimelineLite;
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "Back", function () {
                return r;
            }),
            n.d(e, "Elastic", function () {
                return o;
            }),
            n.d(e, "Bounce", function () {
                return s;
            }),
            n.d(e, "RoughEase", function () {
                return a;
            }),
            n.d(e, "SlowMo", function () {
                return l;
            }),
            n.d(e, "SteppedEase", function () {
                return u;
            }),
            n.d(e, "Circ", function () {
                return c;
            }),
            n.d(e, "Expo", function () {
                return h;
            }),
            n.d(e, "Sine", function () {
                return p;
            }),
            n.d(e, "ExpoScaleEase", function () {
                return f;
            });
        var i = n(0);
        n.d(e, "Linear", function () {
            return i.c;
        }),
            n.d(e, "Power0", function () {
                return i.d;
            }),
            n.d(e, "Power1", function () {
                return i.e;
            }),
            n.d(e, "Power2", function () {
                return i.f;
            }),
            n.d(e, "Power3", function () {
                return i.g;
            }),
            n.d(e, "Power4", function () {
                return i.h;
            }),
            /*!
             * VERSION: 1.16.1
             * DATE: 2018-08-27
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
             * This work is subject to the terms at http://greensock.com/standard-license or for
             * Club GreenSock members, the software agreement that was issued with your membership.
             *
             * @author: Jack Doyle, jack@greensock.com
             **/
            i.k._gsDefine(
                "easing.Back",
                ["easing.Ease"],
                function () {
                    var t,
                        e,
                        n,
                        r,
                        o = i.k.GreenSockGlobals || i.k,
                        s = o.com.greensock,
                        a = 2 * Math.PI,
                        l = Math.PI / 2,
                        u = s._class,
                        c = function (t, e) {
                            var n = u("easing." + t, function () {}, !0),
                                r = (n.prototype = new i.b());
                            return (r.constructor = n), (r.getRatio = e), n;
                        },
                        h = i.b.register || function () {},
                        p = function (t, e, n, i, r) {
                            var o = u("easing." + t, { easeOut: new e(), easeIn: new n(), easeInOut: new i() }, !0);
                            return h(o, t), o;
                        },
                        f = function (t, e, n) {
                            (this.t = t), (this.v = e), n && ((this.next = n), (n.prev = this), (this.c = n.v - e), (this.gap = n.t - t));
                        },
                        d = function (t, e) {
                            var n = u(
                                    "easing." + t,
                                    function (t) {
                                        (this._p1 = t || 0 === t ? t : 1.70158), (this._p2 = 1.525 * this._p1);
                                    },
                                    !0
                                ),
                                r = (n.prototype = new i.b());
                            return (
                                (r.constructor = n),
                                (r.getRatio = e),
                                (r.config = function (t) {
                                    return new n(t);
                                }),
                                n
                            );
                        },
                        m = p(
                            "Back",
                            d("BackOut", function (t) {
                                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
                            }),
                            d("BackIn", function (t) {
                                return t * t * ((this._p1 + 1) * t - this._p1);
                            }),
                            d("BackInOut", function (t) {
                                return (t *= 2) < 1 ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2) : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
                            })
                        ),
                        v = u(
                            "easing.SlowMo",
                            function (t, e, n) {
                                (e = e || 0 === e ? e : 0.7), null == t ? (t = 0.7) : t > 1 && (t = 1), (this._p = 1 !== t ? e : 0), (this._p1 = (1 - t) / 2), (this._p2 = t), (this._p3 = this._p1 + this._p2), (this._calcEnd = !0 === n);
                            },
                            !0
                        ),
                        g = (v.prototype = new i.b());
                    return (
                        (g.constructor = v),
                        (g.getRatio = function (t) {
                            var e = t + (0.5 - t) * this._p;
                            return t < this._p1
                                ? this._calcEnd
                                    ? 1 - (t = 1 - t / this._p1) * t
                                    : e - (t = 1 - t / this._p1) * t * t * t * e
                                : t > this._p3
                                ? this._calcEnd
                                    ? 1 === t
                                        ? 0
                                        : 1 - (t = (t - this._p3) / this._p1) * t
                                    : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
                                : this._calcEnd
                                ? 1
                                : e;
                        }),
                        (v.ease = new v(0.7, 0.7)),
                        (g.config = v.config = function (t, e, n) {
                            return new v(t, e, n);
                        }),
                        ((g = (t = u(
                            "easing.SteppedEase",
                            function (t, e) {
                                (t = t || 1), (this._p1 = 1 / t), (this._p2 = t + (e ? 0 : 1)), (this._p3 = e ? 1 : 0);
                            },
                            !0
                        )).prototype = new i.b()).constructor = t),
                        (g.getRatio = function (t) {
                            return t < 0 ? (t = 0) : t >= 1 && (t = 0.999999999), (((this._p2 * t) | 0) + this._p3) * this._p1;
                        }),
                        (g.config = t.config = function (e, n) {
                            return new t(e, n);
                        }),
                        ((g = (e = u(
                            "easing.ExpoScaleEase",
                            function (t, e, n) {
                                (this._p1 = Math.log(e / t)), (this._p2 = e - t), (this._p3 = t), (this._ease = n);
                            },
                            !0
                        )).prototype = new i.b()).constructor = e),
                        (g.getRatio = function (t) {
                            return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2;
                        }),
                        (g.config = e.config = function (t, n, i) {
                            return new e(t, n, i);
                        }),
                        ((g = (n = u(
                            "easing.RoughEase",
                            function (t) {
                                for (
                                    var e,
                                        n,
                                        r,
                                        o,
                                        s,
                                        a,
                                        l = (t = t || {}).taper || "none",
                                        u = [],
                                        c = 0,
                                        h = 0 | (t.points || 20),
                                        p = h,
                                        d = !1 !== t.randomize,
                                        m = !0 === t.clamp,
                                        v = t.template instanceof i.b ? t.template : null,
                                        g = "number" == typeof t.strength ? 0.4 * t.strength : 0.4;
                                    --p > -1;

                                )
                                    (e = d ? Math.random() : (1 / h) * p),
                                        (n = v ? v.getRatio(e) : e),
                                        (r = "none" === l ? g : "out" === l ? (o = 1 - e) * o * g : "in" === l ? e * e * g : e < 0.5 ? (o = 2 * e) * o * 0.5 * g : (o = 2 * (1 - e)) * o * 0.5 * g),
                                        d ? (n += Math.random() * r - 0.5 * r) : p % 2 ? (n += 0.5 * r) : (n -= 0.5 * r),
                                        m && (n > 1 ? (n = 1) : n < 0 && (n = 0)),
                                        (u[c++] = { x: e, y: n });
                                for (
                                    u.sort(function (t, e) {
                                        return t.x - e.x;
                                    }),
                                        a = new f(1, 1, null),
                                        p = h;
                                    --p > -1;

                                )
                                    (s = u[p]), (a = new f(s.x, s.y, a));
                                this._prev = new f(0, 0, 0 !== a.t ? a : a.next);
                            },
                            !0
                        )).prototype = new i.b()).constructor = n),
                        (g.getRatio = function (t) {
                            var e = this._prev;
                            if (t > e.t) {
                                for (; e.next && t >= e.t; ) e = e.next;
                                e = e.prev;
                            } else for (; e.prev && t <= e.t; ) e = e.prev;
                            return (this._prev = e), e.v + ((t - e.t) / e.gap) * e.c;
                        }),
                        (g.config = function (t) {
                            return new n(t);
                        }),
                        (n.ease = new n()),
                        p(
                            "Bounce",
                            c("BounceOut", function (t) {
                                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                            }),
                            c("BounceIn", function (t) {
                                return (t = 1 - t) < 1 / 2.75
                                    ? 1 - 7.5625 * t * t
                                    : t < 2 / 2.75
                                    ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                                    : t < 2.5 / 2.75
                                    ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                                    : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
                            }),
                            c("BounceInOut", function (t) {
                                var e = t < 0.5;
                                return (
                                    (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75
                                        ? (t *= 7.5625 * t)
                                        : (t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                                    e ? 0.5 * (1 - t) : 0.5 * t + 0.5
                                );
                            })
                        ),
                        p(
                            "Circ",
                            c("CircOut", function (t) {
                                return Math.sqrt(1 - (t -= 1) * t);
                            }),
                            c("CircIn", function (t) {
                                return -(Math.sqrt(1 - t * t) - 1);
                            }),
                            c("CircInOut", function (t) {
                                return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
                            })
                        ),
                        p(
                            "Elastic",
                            (r = function (t, e, n) {
                                var r = u(
                                        "easing." + t,
                                        function (t, e) {
                                            (this._p1 = t >= 1 ? t : 1), (this._p2 = (e || n) / (t < 1 ? t : 1)), (this._p3 = (this._p2 / a) * (Math.asin(1 / this._p1) || 0)), (this._p2 = a / this._p2);
                                        },
                                        !0
                                    ),
                                    o = (r.prototype = new i.b());
                                return (
                                    (o.constructor = r),
                                    (o.getRatio = e),
                                    (o.config = function (t, e) {
                                        return new r(t, e);
                                    }),
                                    r
                                );
                            })(
                                "ElasticOut",
                                function (t) {
                                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1;
                                },
                                0.3
                            ),
                            r(
                                "ElasticIn",
                                function (t) {
                                    return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2);
                                },
                                0.3
                            ),
                            r(
                                "ElasticInOut",
                                function (t) {
                                    return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -0.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * 0.5 + 1;
                                },
                                0.45
                            )
                        ),
                        p(
                            "Expo",
                            c("ExpoOut", function (t) {
                                return 1 - Math.pow(2, -10 * t);
                            }),
                            c("ExpoIn", function (t) {
                                return Math.pow(2, 10 * (t - 1)) - 0.001;
                            }),
                            c("ExpoInOut", function (t) {
                                return (t *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (t - 1)) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
                            })
                        ),
                        p(
                            "Sine",
                            c("SineOut", function (t) {
                                return Math.sin(t * l);
                            }),
                            c("SineIn", function (t) {
                                return 1 - Math.cos(t * l);
                            }),
                            c("SineInOut", function (t) {
                                return -0.5 * (Math.cos(Math.PI * t) - 1);
                            })
                        ),
                        u(
                            "easing.EaseLookup",
                            {
                                find: function (t) {
                                    return i.b.map[t];
                                },
                            },
                            !0
                        ),
                        h(o.SlowMo, "SlowMo", "ease,"),
                        h(n, "RoughEase", "ease,"),
                        h(t, "SteppedEase", "ease,"),
                        m
                    );
                },
                !0
            );
        var r = i.m.Back,
            o = i.m.Elastic,
            s = i.m.Bounce,
            a = i.m.RoughEase,
            l = i.m.SlowMo,
            u = i.m.SteppedEase,
            c = i.m.Circ,
            h = i.m.Expo,
            p = i.m.Sine,
            f = i.m.ExpoScaleEase;
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "CSSPlugin", function () {
                return r;
            }),
            n.d(e, "default", function () {
                return r;
            });
        var i = n(0);
        /*!
         * VERSION: 2.1.3
         * DATE: 2019-05-17
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         */ i.k._gsDefine(
            "plugins.CSSPlugin",
            ["plugins.TweenPlugin", "TweenLite"],
            function () {
                var t,
                    e,
                    n,
                    r,
                    o = function () {
                        i.j.call(this, "css"), (this._overwriteProps.length = 0), (this.setRatio = o.prototype.setRatio);
                    },
                    s = i.k._gsDefine.globals,
                    a = {},
                    l = (o.prototype = new i.j("css"));
                (l.constructor = o),
                    (o.version = "2.1.3"),
                    (o.API = 2),
                    (o.defaultTransformPerspective = 0),
                    (o.defaultSkewType = "compensated"),
                    (o.defaultSmoothOrigin = !0),
                    (l = "px"),
                    (o.suffixMap = { top: l, right: l, bottom: l, left: l, width: l, height: l, fontSize: l, padding: l, margin: l, perspective: l, lineHeight: "" });
                var u,
                    c,
                    h,
                    p,
                    f,
                    d,
                    m,
                    v,
                    g = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    A = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,
                    b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    x = /(?:\d|\-|\+|=|#|\.)*/g,
                    _ = /opacity *= *([^)]*)/i,
                    T = /opacity:([^;]*)/i,
                    C = /alpha\(opacity *=.+?\)/i,
                    S = /^(rgb|hsl)/,
                    P = /([A-Z])/g,
                    k = /-([a-z])/gi,
                    E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    M = function (t, e) {
                        return e.toUpperCase();
                    },
                    O = /(?:Left|Right|Width)/i,
                    I = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    $ = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    D = /,(?=[^\)]*(?:\(|$))/gi,
                    L = /[\s,\(]/i,
                    N = Math.PI / 180,
                    R = 180 / Math.PI,
                    j = {},
                    F = { style: {} },
                    z = i.k.document || {
                        createElement: function () {
                            return F;
                        },
                    },
                    H = function (t, e) {
                        var n = z.createElementNS ? z.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : z.createElement(t);
                        return n.style ? n : z.createElement(t);
                    },
                    B = H("div"),
                    W = H("img"),
                    q = (o._internals = { _specialProps: a }),
                    V = (i.k.navigator || {}).userAgent || "",
                    Y = (function () {
                        var t = V.indexOf("Android"),
                            e = H("a");
                        return (
                            (h = -1 !== V.indexOf("Safari") && -1 === V.indexOf("Chrome") && (-1 === t || parseFloat(V.substr(t + 8, 2)) > 3)),
                            (f = h && parseFloat(V.substr(V.indexOf("Version/") + 8, 2)) < 6),
                            (p = -1 !== V.indexOf("Firefox")),
                            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) && (d = parseFloat(RegExp.$1)),
                            !!e && ((e.style.cssText = "top:1px;opacity:.55;"), /^0.55/.test(e.style.opacity))
                        );
                    })(),
                    Q = function (t) {
                        return _.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
                    },
                    X = function (t) {
                        i.k.console && console.log(t);
                    },
                    G = "",
                    U = "",
                    Z = function (t, e) {
                        var n,
                            i,
                            r = (e = e || B).style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; --i > -1 && void 0 === r[n[i] + t]; );
                        return i >= 0 ? ((G = "-" + (U = 3 === i ? "ms" : n[i]).toLowerCase() + "-"), U + t) : null;
                    },
                    J = "undefined" != typeof window ? window : z.defaultView || { getComputedStyle: function () {} },
                    K = function (t) {
                        return J.getComputedStyle(t);
                    },
                    tt = (o.getStyle = function (t, e, n, i, r) {
                        var o;
                        return Y || "opacity" !== e
                            ? (!i && t.style[e] ? (o = t.style[e]) : (n = n || K(t)) ? (o = n[e] || n.getPropertyValue(e) || n.getPropertyValue(e.replace(P, "-$1").toLowerCase())) : t.currentStyle && (o = t.currentStyle[e]),
                              null == r || (o && "none" !== o && "auto" !== o && "auto auto" !== o) ? o : r)
                            : Q(t);
                    }),
                    et = (q.convertToPixels = function (t, e, n, r, s) {
                        if ("px" === r || (!r && "lineHeight" !== e)) return n;
                        if ("auto" === r || !n) return 0;
                        var a,
                            l,
                            u,
                            c = O.test(e),
                            h = t,
                            p = B.style,
                            f = n < 0,
                            d = 1 === n;
                        if ((f && (n = -n), d && (n *= 100), "lineHeight" !== e || r))
                            if ("%" === r && -1 !== e.indexOf("border")) a = (n / 100) * (c ? t.clientWidth : t.clientHeight);
                            else {
                                if (((p.cssText = "border:0 solid red;position:" + tt(t, "position") + ";line-height:0;"), "%" !== r && h.appendChild && "v" !== r.charAt(0) && "rem" !== r))
                                    p[c ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                                else {
                                    if (((h = t.parentNode || z.body), -1 !== tt(h, "display").indexOf("flex") && (p.position = "absolute"), (l = h._gsCache), (u = i.l.ticker.frame), l && c && l.time === u)) return (l.width * n) / 100;
                                    p[c ? "width" : "height"] = n + r;
                                }
                                h.appendChild(B),
                                    (a = parseFloat(B[c ? "offsetWidth" : "offsetHeight"])),
                                    h.removeChild(B),
                                    c && "%" === r && !1 !== o.cacheWidths && (((l = h._gsCache = h._gsCache || {}).time = u), (l.width = (a / n) * 100)),
                                    0 !== a || s || (a = et(t, e, n, r, !0));
                            }
                        else (l = K(t).lineHeight), (t.style.lineHeight = n), (a = parseFloat(K(t).lineHeight)), (t.style.lineHeight = l);
                        return d && (a /= 100), f ? -a : a;
                    }),
                    nt = (q.calculateOffset = function (t, e, n) {
                        if ("absolute" !== tt(t, "position", n)) return 0;
                        var i = "left" === e ? "Left" : "Top",
                            r = tt(t, "margin" + i, n);
                        return t["offset" + i] - (et(t, e, parseFloat(r), r.replace(x, "")) || 0);
                    }),
                    it = function (t, e) {
                        var n,
                            i,
                            r,
                            o = {};
                        if ((e = e || K(t)))
                            if ((n = e.length)) for (; --n > -1; ) (-1 !== (r = e[n]).indexOf("-transform") && Dt !== r) || (o[r.replace(k, M)] = e.getPropertyValue(r));
                            else for (n in e) (-1 !== n.indexOf("Transform") && $t !== n) || (o[n] = e[n]);
                        else if ((e = t.currentStyle || t.style)) for (n in e) "string" == typeof n && void 0 === o[n] && (o[n.replace(k, M)] = e[n]);
                        return (
                            Y || (o.opacity = Q(t)),
                            (i = Qt(t, e, !1)),
                            (o.rotation = i.rotation),
                            (o.skewX = i.skewX),
                            (o.scaleX = i.scaleX),
                            (o.scaleY = i.scaleY),
                            (o.x = i.x),
                            (o.y = i.y),
                            Nt && ((o.z = i.z), (o.rotationX = i.rotationX), (o.rotationY = i.rotationY), (o.scaleZ = i.scaleZ)),
                            o.filters && delete o.filters,
                            o
                        );
                    },
                    rt = function (t, e, n, i, r) {
                        var o,
                            s,
                            a,
                            l = {},
                            u = t.style;
                        for (s in n)
                            "cssText" !== s &&
                                "length" !== s &&
                                isNaN(s) &&
                                (e[s] !== (o = n[s]) || (r && r[s])) &&
                                -1 === s.indexOf("Origin") &&
                                (("number" != typeof o && "string" != typeof o) ||
                                    ((l[s] = "auto" !== o || ("left" !== s && "top" !== s) ? (("" !== o && "auto" !== o && "none" !== o) || "string" != typeof e[s] || "" === e[s].replace(b, "") ? o : 0) : nt(t, s)),
                                    void 0 !== u[s] && (a = new wt(u, s, u[s], a))));
                        if (i) for (s in i) "className" !== s && (l[s] = i[s]);
                        return { difs: l, firstMPT: a };
                    },
                    ot = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                    st = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    at = function (t, e, n) {
                        if ("svg" === (t.nodeName + "").toLowerCase()) return (n || K(t))[e] || 0;
                        if (t.getCTM && qt(t)) return t.getBBox()[e] || 0;
                        var i = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = ot[e],
                            o = r.length;
                        for (n = n || K(t); --o > -1; ) (i -= parseFloat(tt(t, "padding" + r[o], n, !0)) || 0), (i -= parseFloat(tt(t, "border" + r[o] + "Width", n, !0)) || 0);
                        return i;
                    },
                    lt = function (t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null != t && "" !== t) || (t = "0 0");
                        var n,
                            i = t.split(" "),
                            r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        if (i.length > 3 && !e) {
                            for (i = t.split(", ").join(",").split(","), t = [], n = 0; n < i.length; n++) t.push(lt(i[n]));
                            return t.join(",");
                        }
                        return (
                            null == o ? (o = "center" === r ? "50%" : "0") : "center" === o && (o = "50%"),
                            ("center" === r || (isNaN(parseFloat(r)) && -1 === (r + "").indexOf("="))) && (r = "50%"),
                            (t = r + " " + o + (i.length > 2 ? " " + i[2] : "")),
                            e &&
                                ((e.oxp = -1 !== r.indexOf("%")),
                                (e.oyp = -1 !== o.indexOf("%")),
                                (e.oxr = "=" === r.charAt(1)),
                                (e.oyr = "=" === o.charAt(1)),
                                (e.ox = parseFloat(r.replace(b, ""))),
                                (e.oy = parseFloat(o.replace(b, ""))),
                                (e.v = t)),
                            e || t
                        );
                    },
                    ut = function (t, e) {
                        return "function" == typeof t && (t = t(v, m)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0;
                    },
                    ct = function (t, e) {
                        "function" == typeof t && (t = t(v, m));
                        var n = "string" == typeof t && "=" === t.charAt(1);
                        return (
                            "string" == typeof t && "v" === t.charAt(t.length - 2) && (t = (n ? t.substr(0, 2) : 0) + window["inner" + ("vh" === t.substr(-2) ? "Height" : "Width")] * (parseFloat(n ? t.substr(2) : t) / 100)),
                            null == t ? e : n ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                        );
                    },
                    ht = function (t, e, n, i) {
                        var r, o, s, a;
                        return (
                            "function" == typeof t && (t = t(v, m)),
                            null == t
                                ? (s = e)
                                : "number" == typeof t
                                ? (s = t)
                                : (360,
                                  (r = t.split("_")),
                                  (o = ((a = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : R) - (a ? 0 : e)),
                                  r.length &&
                                      (i && (i[n] = e + o),
                                      -1 !== t.indexOf("short") && (o %= 360) !== o % 180 && (o = o < 0 ? o + 360 : o - 360),
                                      -1 !== t.indexOf("_cw") && o < 0 ? (o = ((o + 3599999999640) % 360) - 360 * ((o / 360) | 0)) : -1 !== t.indexOf("ccw") && o > 0 && (o = ((o - 3599999999640) % 360) - 360 * ((o / 360) | 0))),
                                  (s = e + o)),
                            s < 1e-6 && s > -1e-6 && (s = 0),
                            s
                        );
                    },
                    pt = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0],
                    },
                    ft = function (t, e, n) {
                        return (255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < 0.5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) + 0.5) | 0;
                    },
                    dt = (o.parseColor = function (t, e) {
                        var n, i, r, o, s, a, l, u, c, h, p;
                        if (t)
                            if ("number" == typeof t) n = [t >> 16, (t >> 8) & 255, 255 & t];
                            else {
                                if (("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), pt[t])) n = pt[t];
                                else if ("#" === t.charAt(0))
                                    4 === t.length && ((i = t.charAt(1)), (r = t.charAt(2)), (o = t.charAt(3)), (t = "#" + i + i + r + r + o + o)), (n = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & 255, 255 & t]);
                                else if ("hsl" === t.substr(0, 3))
                                    if (((n = p = t.match(g)), e)) {
                                        if (-1 !== t.indexOf("=")) return t.match(y);
                                    } else
                                        (s = (Number(n[0]) % 360) / 360),
                                            (a = Number(n[1]) / 100),
                                            (i = 2 * (l = Number(n[2]) / 100) - (r = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                                            n.length > 3 && (n[3] = Number(n[3])),
                                            (n[0] = ft(s + 1 / 3, i, r)),
                                            (n[1] = ft(s, i, r)),
                                            (n[2] = ft(s - 1 / 3, i, r));
                                else n = t.match(g) || pt.transparent;
                                (n[0] = Number(n[0])), (n[1] = Number(n[1])), (n[2] = Number(n[2])), n.length > 3 && (n[3] = Number(n[3]));
                            }
                        else n = pt.black;
                        return (
                            e &&
                                !p &&
                                ((i = n[0] / 255),
                                (r = n[1] / 255),
                                (o = n[2] / 255),
                                (l = ((u = Math.max(i, r, o)) + (c = Math.min(i, r, o))) / 2),
                                u === c ? (s = a = 0) : ((h = u - c), (a = l > 0.5 ? h / (2 - u - c) : h / (u + c)), (s = u === i ? (r - o) / h + (r < o ? 6 : 0) : u === r ? (o - i) / h + 2 : (i - r) / h + 4), (s *= 60)),
                                (n[0] = (s + 0.5) | 0),
                                (n[1] = (100 * a + 0.5) | 0),
                                (n[2] = (100 * l + 0.5) | 0)),
                            n
                        );
                    }),
                    mt = function (t, e) {
                        var n,
                            i,
                            r,
                            o = t.match(vt) || [],
                            s = 0,
                            a = "";
                        if (!o.length) return t;
                        for (n = 0; n < o.length; n++)
                            (i = o[n]),
                                (s += (r = t.substr(s, t.indexOf(i, s) - s)).length + i.length),
                                3 === (i = dt(i, e)).length && i.push(1),
                                (a += r + (e ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")");
                        return a + t.substr(s);
                    },
                    vt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (l in pt) vt += "|" + l + "\\b";
                (vt = new RegExp(vt + ")", "gi")),
                    (o.colorStringFilter = function (t) {
                        var e,
                            n = t[0] + " " + t[1];
                        vt.test(n) && ((e = -1 !== n.indexOf("hsl(") || -1 !== n.indexOf("hsla(")), (t[0] = mt(t[0], e)), (t[1] = mt(t[1], e))), (vt.lastIndex = 0);
                    }),
                    i.l.defaultStringFilter || (i.l.defaultStringFilter = o.colorStringFilter);
                var gt = function (t, e, n, i) {
                        if (null == t)
                            return function (t) {
                                return t;
                            };
                        var r,
                            o = e ? (t.match(vt) || [""])[0] : "",
                            s = t.split(o).join("").match(w) || [],
                            a = t.substr(0, t.indexOf(s[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            u = -1 !== t.indexOf(" ") ? " " : ",",
                            c = s.length,
                            h = c > 0 ? s[0].replace(g, "") : "";
                        return c
                            ? (r = e
                                  ? function (t) {
                                        var e, p, f, d;
                                        if ("number" == typeof t) t += h;
                                        else if (i && D.test(t)) {
                                            for (d = t.replace(D, "|").split("|"), f = 0; f < d.length; f++) d[f] = r(d[f]);
                                            return d.join(",");
                                        }
                                        if (((e = (t.match(vt) || [o])[0]), (f = (p = t.split(e).join("").match(w) || []).length), c > f--)) for (; ++f < c; ) p[f] = n ? p[((f - 1) / 2) | 0] : s[f];
                                        return a + p.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "");
                                    }
                                  : function (t) {
                                        var e, o, p;
                                        if ("number" == typeof t) t += h;
                                        else if (i && D.test(t)) {
                                            for (o = t.replace(D, "|").split("|"), p = 0; p < o.length; p++) o[p] = r(o[p]);
                                            return o.join(",");
                                        }
                                        if (((p = (e = t.match("," === u ? w : A) || []).length), c > p--)) for (; ++p < c; ) e[p] = n ? e[((p - 1) / 2) | 0] : s[p];
                                        return ((a && "none" !== t && t.substr(0, t.indexOf(e[0]))) || a) + e.join(u) + l;
                                    })
                            : function (t) {
                                  return t;
                              };
                    },
                    yt = function (t) {
                        return (
                            (t = t.split(",")),
                            function (e, n, i, r, o, s, a) {
                                var l,
                                    u = (n + "").split(" ");
                                for (a = {}, l = 0; l < 4; l++) a[t[l]] = u[l] = u[l] || u[((l - 1) / 2) >> 0];
                                return r.parse(e, a, o, s);
                            }
                        );
                    },
                    wt =
                        ((q._setPluginRatio = function (t) {
                            this.plugin.setRatio(t);
                            for (var e, n, i, r, o, s = this.data, a = s.proxy, l = s.firstMPT; l; ) (e = a[l.v]), l.r ? (e = l.r(e)) : e < 1e-6 && e > -1e-6 && (e = 0), (l.t[l.p] = e), (l = l._next);
                            if ((s.autoRotate && (s.autoRotate.rotation = s.mod ? s.mod.call(this._tween, a.rotation, this.t, this._tween) : a.rotation), 1 === t || 0 === t))
                                for (l = s.firstMPT, o = 1 === t ? "e" : "b"; l; ) {
                                    if ((n = l.t).type) {
                                        if (1 === n.type) {
                                            for (r = n.xs0 + n.s + n.xs1, i = 1; i < n.l; i++) r += n["xn" + i] + n["xs" + (i + 1)];
                                            n[o] = r;
                                        }
                                    } else n[o] = n.s + n.xs0;
                                    l = l._next;
                                }
                        }),
                        function (t, e, n, i, r) {
                            (this.t = t), (this.p = e), (this.v = n), (this.r = r), i && ((i._prev = this), (this._next = i));
                        }),
                    At =
                        ((q._parseToProxy = function (t, e, n, i, r, o) {
                            var s,
                                a,
                                l,
                                u,
                                c,
                                h = i,
                                p = {},
                                f = {},
                                d = n._transform,
                                m = j;
                            for (n._transform = null, j = e, i = c = n.parse(t, e, i, r), j = m, o && ((n._transform = d), h && ((h._prev = null), h._prev && (h._prev._next = null))); i && i !== h; ) {
                                if (i.type <= 1 && ((f[(a = i.p)] = i.s + i.c), (p[a] = i.s), o || ((u = new wt(i, "s", a, u, i.r)), (i.c = 0)), 1 === i.type))
                                    for (s = i.l; --s > 0; ) (l = "xn" + s), (f[(a = i.p + "_" + l)] = i.data[l]), (p[a] = i[l]), o || (u = new wt(i, l, a, u, i.rxp[l]));
                                i = i._next;
                            }
                            return { proxy: p, end: f, firstMPT: u, pt: c };
                        }),
                        (q.CSSPropTween = function (e, n, i, o, s, a, l, u, c, h, p) {
                            (this.t = e),
                                (this.p = n),
                                (this.s = i),
                                (this.c = o),
                                (this.n = l || n),
                                e instanceof At || r.push(this.n),
                                (this.r = u ? ("function" == typeof u ? u : Math.round) : u),
                                (this.type = a || 0),
                                c && ((this.pr = c), (t = !0)),
                                (this.b = void 0 === h ? i : h),
                                (this.e = void 0 === p ? i + o : p),
                                s && ((this._next = s), (s._prev = this));
                        })),
                    bt = function (t, e, n, i, r, o) {
                        var s = new At(t, e, n, i - n, r, -1, o);
                        return (s.b = n), (s.e = s.xs0 = i), s;
                    },
                    xt = (o.parseComplex = function (t, e, n, i, r, s, a, l, c, h) {
                        (n = n || s || ""),
                            "function" == typeof i && (i = i(v, m)),
                            (a = new At(t, e, 0, 0, a, h ? 2 : 1, null, !1, l, n, i)),
                            (i += ""),
                            r && vt.test(i + n) && ((i = [n, i]), o.colorStringFilter(i), (n = i[0]), (i = i[1]));
                        var p,
                            f,
                            d,
                            w,
                            A,
                            b,
                            x,
                            _,
                            T,
                            C,
                            S,
                            P,
                            k,
                            E = n.split(", ").join(",").split(" "),
                            M = i.split(", ").join(",").split(" "),
                            O = E.length,
                            I = !1 !== u;
                        for (
                            (-1 === i.indexOf(",") && -1 === n.indexOf(",")) ||
                                (-1 !== (i + n).indexOf("rgb") || -1 !== (i + n).indexOf("hsl")
                                    ? ((E = E.join(" ").replace(D, ", ").split(" ")), (M = M.join(" ").replace(D, ", ").split(" ")))
                                    : ((E = E.join(" ").split(",").join(", ").split(" ")), (M = M.join(" ").split(",").join(", ").split(" "))),
                                (O = E.length)),
                                O !== M.length && (O = (E = (s || "").split(" ")).length),
                                a.plugin = c,
                                a.setRatio = h,
                                vt.lastIndex = 0,
                                p = 0;
                            p < O;
                            p++
                        )
                            if (((w = E[p]), (A = M[p] + ""), (_ = parseFloat(w)) || 0 === _)) a.appendXtra("", _, ut(A, _), A.replace(y, ""), !(!I || -1 === A.indexOf("px")) && Math.round, !0);
                            else if (r && vt.test(w))
                                (P = ")" + ((P = A.indexOf(")") + 1) ? A.substr(P) : "")),
                                    (k = -1 !== A.indexOf("hsl") && Y),
                                    (C = A),
                                    (w = dt(w, k)),
                                    (A = dt(A, k)),
                                    (T = w.length + A.length > 6) && !Y && 0 === A[3]
                                        ? ((a["xs" + a.l] += a.l ? " transparent" : "transparent"), (a.e = a.e.split(M[p]).join("transparent")))
                                        : (Y || (T = !1),
                                          k
                                              ? a
                                                    .appendXtra(C.substr(0, C.indexOf("hsl")) + (T ? "hsla(" : "hsl("), w[0], ut(A[0], w[0]), ",", !1, !0)
                                                    .appendXtra("", w[1], ut(A[1], w[1]), "%,", !1)
                                                    .appendXtra("", w[2], ut(A[2], w[2]), T ? "%," : "%" + P, !1)
                                              : a
                                                    .appendXtra(C.substr(0, C.indexOf("rgb")) + (T ? "rgba(" : "rgb("), w[0], A[0] - w[0], ",", Math.round, !0)
                                                    .appendXtra("", w[1], A[1] - w[1], ",", Math.round)
                                                    .appendXtra("", w[2], A[2] - w[2], T ? "," : P, Math.round),
                                          T && ((w = w.length < 4 ? 1 : w[3]), a.appendXtra("", w, (A.length < 4 ? 1 : A[3]) - w, P, !1))),
                                    (vt.lastIndex = 0);
                            else if ((b = w.match(g))) {
                                if (!(x = A.match(y)) || x.length !== b.length) return a;
                                for (d = 0, f = 0; f < b.length; f++)
                                    (S = b[f]), (C = w.indexOf(S, d)), a.appendXtra(w.substr(d, C - d), Number(S), ut(x[f], S), "", !(!I || "px" !== w.substr(C + S.length, 2)) && Math.round, 0 === f), (d = C + S.length);
                                a["xs" + a.l] += w.substr(d);
                            } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + A : A;
                        if (-1 !== i.indexOf("=") && a.data) {
                            for (P = a.xs0 + a.data.s, p = 1; p < a.l; p++) P += a["xs" + p] + a.data["xn" + p];
                            a.e = P + a["xs" + p];
                        }
                        return a.l || ((a.type = -1), (a.xs0 = a.e)), a.xfirst || a;
                    }),
                    _t = 9;
                for ((l = At.prototype).l = l.pr = 0; --_t > 0; ) (l["xn" + _t] = 0), (l["xs" + _t] = "");
                (l.xs0 = ""),
                    (l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null),
                    (l.appendXtra = function (t, e, n, i, r, o) {
                        var s = this,
                            a = s.l;
                        return (
                            (s["xs" + a] += o && (a || s["xs" + a]) ? " " + t : t || ""),
                            n || 0 === a || s.plugin
                                ? (s.l++,
                                  (s.type = s.setRatio ? 2 : 1),
                                  (s["xs" + s.l] = i || ""),
                                  a > 0
                                      ? ((s.data["xn" + a] = e + n), (s.rxp["xn" + a] = r), (s["xn" + a] = e), s.plugin || ((s.xfirst = new At(s, "xn" + a, e, n, s.xfirst || s, 0, s.n, r, s.pr)), (s.xfirst.xs0 = 0)), s)
                                      : ((s.data = { s: e + n }), (s.rxp = {}), (s.s = e), (s.c = n), (s.r = r), s))
                                : ((s["xs" + a] += e + (i || "")), s)
                        );
                    });
                var Tt = function (t, e) {
                        (e = e || {}),
                            (this.p = (e.prefix && Z(t)) || t),
                            (a[t] = a[this.p] = this),
                            (this.format = e.formatter || gt(e.defaultValue, e.color, e.collapsible, e.multi)),
                            e.parser && (this.parse = e.parser),
                            (this.clrs = e.color),
                            (this.multi = e.multi),
                            (this.keyword = e.keyword),
                            (this.dflt = e.defaultValue),
                            (this.allowFunc = e.allowFunc),
                            (this.pr = e.priority || 0);
                    },
                    Ct = (q._registerComplexSpecialProp = function (t, e, n) {
                        "object" != typeof e && (e = { parser: n });
                        var i,
                            r = t.split(","),
                            o = e.defaultValue;
                        for (n = n || [o], i = 0; i < r.length; i++) (e.prefix = 0 === i && e.prefix), (e.defaultValue = n[i] || o), new Tt(r[i], e);
                    }),
                    St = (q._registerPluginProp = function (t) {
                        if (!a[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            Ct(t, {
                                parser: function (t, n, i, r, o, l, u) {
                                    var c = s.com.greensock.plugins[e];
                                    return c ? (c._cssRegister(), a[i].parse(t, n, i, r, o, l, u)) : (X("Error: " + e + " js file not loaded."), o);
                                },
                            });
                        }
                    });
                ((l = Tt.prototype).parseComplex = function (t, e, n, i, r, o) {
                    var s,
                        a,
                        l,
                        u,
                        c,
                        h,
                        p = this.keyword;
                    if ((this.multi && (D.test(n) || D.test(e) ? ((a = e.replace(D, "|").split("|")), (l = n.replace(D, "|").split("|"))) : p && ((a = [e]), (l = [n]))), l)) {
                        for (u = l.length > a.length ? l.length : a.length, s = 0; s < u; s++)
                            (e = a[s] = a[s] || this.dflt), (n = l[s] = l[s] || this.dflt), p && (c = e.indexOf(p)) !== (h = n.indexOf(p)) && (-1 === h ? (a[s] = a[s].split(p).join("")) : -1 === c && (a[s] += " " + p));
                        (e = a.join(", ")), (n = l.join(", "));
                    }
                    return xt(t, this.p, e, n, this.clrs, this.dflt, i, this.pr, r, o);
                }),
                    (l.parse = function (t, e, i, r, o, s, a) {
                        return this.parseComplex(t.style, this.format(tt(t, this.p, n, !1, this.dflt)), this.format(e), o, s);
                    }),
                    (o.registerSpecialProp = function (t, e, n) {
                        Ct(t, {
                            parser: function (t, i, r, o, s, a, l) {
                                var u = new At(t, r, 0, 0, s, 2, r, !1, n);
                                return (u.plugin = a), (u.setRatio = e(t, i, o._tween, r)), u;
                            },
                            priority: n,
                        });
                    }),
                    (o.useSVGTransformAttr = !0);
                var Pt,
                    kt,
                    Et,
                    Mt,
                    Ot,
                    It = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    $t = Z("transform"),
                    Dt = G + "transform",
                    Lt = Z("transformOrigin"),
                    Nt = null !== Z("perspective"),
                    Rt = (q.Transform = function () {
                        (this.perspective = parseFloat(o.defaultTransformPerspective) || 0), (this.force3D = !(!1 === o.defaultForce3D || !Nt) && (o.defaultForce3D || "auto"));
                    }),
                    jt = i.k.SVGElement,
                    Ft = function (t, e, n) {
                        var i,
                            r = z.createElementNS("http://www.w3.org/2000/svg", t),
                            o = /([a-z])([A-Z])/g;
                        for (i in n) r.setAttributeNS(null, i.replace(o, "$1-$2").toLowerCase(), n[i]);
                        return e.appendChild(r), r;
                    },
                    zt = z.documentElement || {},
                    Ht =
                        ((Ot = d || (/Android/i.test(V) && !i.k.chrome)),
                        z.createElementNS &&
                            zt.appendChild &&
                            !Ot &&
                            ((kt = Ft("svg", zt)),
                            (Mt = (Et = Ft("rect", kt, { width: 100, height: 50, x: 100 })).getBoundingClientRect().width),
                            (Et.style[Lt] = "50% 50%"),
                            (Et.style[$t] = "scaleX(0.5)"),
                            (Ot = Mt === Et.getBoundingClientRect().width && !(p && Nt)),
                            zt.removeChild(kt)),
                        Ot),
                    Bt = function (t, e, n, i, r, s) {
                        var a,
                            l,
                            u,
                            c,
                            h,
                            p,
                            f,
                            d,
                            m,
                            v,
                            g,
                            y,
                            w,
                            A,
                            b = t._gsTransform,
                            x = Yt(t, !0);
                        b && ((w = b.xOrigin), (A = b.yOrigin)),
                            (!i || (a = i.split(" ")).length < 2) &&
                                (0 === (f = t.getBBox()).x &&
                                    0 === f.y &&
                                    f.width + f.height === 0 &&
                                    (f = {
                                        x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                                        y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                                        width: 0,
                                        height: 0,
                                    }),
                                (a = [
                                    (-1 !== (e = lt(e).split(" "))[0].indexOf("%") ? (parseFloat(e[0]) / 100) * f.width : parseFloat(e[0])) + f.x,
                                    (-1 !== e[1].indexOf("%") ? (parseFloat(e[1]) / 100) * f.height : parseFloat(e[1])) + f.y,
                                ])),
                            (n.xOrigin = c = parseFloat(a[0])),
                            (n.yOrigin = h = parseFloat(a[1])),
                            i &&
                                x !== Vt &&
                                ((p = x[0]),
                                (f = x[1]),
                                (d = x[2]),
                                (m = x[3]),
                                (v = x[4]),
                                (g = x[5]),
                                (y = p * m - f * d) && ((l = c * (m / y) + h * (-d / y) + (d * g - m * v) / y), (u = c * (-f / y) + h * (p / y) - (p * g - f * v) / y), (c = n.xOrigin = a[0] = l), (h = n.yOrigin = a[1] = u))),
                            b &&
                                (s && ((n.xOffset = b.xOffset), (n.yOffset = b.yOffset), (b = n)),
                                r || (!1 !== r && !1 !== o.defaultSmoothOrigin) ? ((l = c - w), (u = h - A), (b.xOffset += l * x[0] + u * x[2] - l), (b.yOffset += l * x[1] + u * x[3] - u)) : (b.xOffset = b.yOffset = 0)),
                            s || t.setAttribute("data-svg-origin", a.join(" "));
                    },
                    Wt = function (t) {
                        var e,
                            n = H("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
                            i = this.parentNode,
                            r = this.nextSibling,
                            o = this.style.cssText;
                        if ((zt.appendChild(n), n.appendChild(this), (this.style.display = "block"), t))
                            try {
                                (e = this.getBBox()), (this._originalGetBBox = this.getBBox), (this.getBBox = Wt);
                            } catch (t) {}
                        else this._originalGetBBox && (e = this._originalGetBBox());
                        return r ? i.insertBefore(this, r) : i.appendChild(this), zt.removeChild(n), (this.style.cssText = o), e;
                    },
                    qt = function (t) {
                        return !(
                            !jt ||
                            !t.getCTM ||
                            (t.parentNode && !t.ownerSVGElement) ||
                            !(function (t) {
                                try {
                                    return t.getBBox();
                                } catch (e) {
                                    return Wt.call(t, !0);
                                }
                            })(t)
                        );
                    },
                    Vt = [1, 0, 0, 1, 0, 0],
                    Yt = function (t, e) {
                        var n,
                            i,
                            r,
                            o,
                            s,
                            a,
                            l,
                            u = t._gsTransform || new Rt(),
                            c = t.style;
                        if (
                            ($t
                                ? (i = tt(t, Dt, null, !0))
                                : t.currentStyle && (i = (i = t.currentStyle.filter.match(I)) && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), u.x || 0, u.y || 0].join(",") : ""),
                            (n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i),
                            $t &&
                                n &&
                                !t.offsetParent &&
                                t !== zt &&
                                ((o = c.display),
                                (c.display = "block"),
                                ((l = t.parentNode) && t.offsetParent) || ((s = 1), (a = t.nextSibling), zt.appendChild(t)),
                                (n = !(i = tt(t, Dt, null, !0)) || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i),
                                o ? (c.display = o) : Zt(c, "display"),
                                s && (a ? l.insertBefore(t, a) : l ? l.appendChild(t) : zt.removeChild(t))),
                            (u.svg || (t.getCTM && qt(t))) &&
                                (n && -1 !== (c[$t] + "").indexOf("matrix") && ((i = c[$t]), (n = 0)),
                                (r = t.getAttribute("transform")),
                                n && r && ((i = "matrix(" + (r = t.transform.baseVal.consolidate().matrix).a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")"), (n = 0))),
                            n)
                        )
                            return Vt;
                        for (r = (i || "").match(g) || [], _t = r.length; --_t > -1; ) (o = Number(r[_t])), (r[_t] = (s = o - (o |= 0)) ? ((1e5 * s + (s < 0 ? -0.5 : 0.5)) | 0) / 1e5 + o : o);
                        return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r;
                    },
                    Qt = (q.getTransform = function (t, e, n, r) {
                        if (t._gsTransform && n && !r) return t._gsTransform;
                        var s,
                            a,
                            l,
                            u,
                            c,
                            h,
                            p = (n && t._gsTransform) || new Rt(),
                            f = p.scaleX < 0,
                            d = (Nt && (parseFloat(tt(t, Lt, e, !1, "0 0 0").split(" ")[2]) || p.zOrigin)) || 0,
                            m = parseFloat(o.defaultTransformPerspective) || 0;
                        if (((p.svg = !(!t.getCTM || !qt(t))), p.svg && (Bt(t, tt(t, Lt, e, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), (Pt = o.useSVGTransformAttr || Ht)), (s = Yt(t)) !== Vt)) {
                            if (16 === s.length) {
                                var v,
                                    g,
                                    y,
                                    w,
                                    A,
                                    b = s[0],
                                    x = s[1],
                                    _ = s[2],
                                    T = s[3],
                                    C = s[4],
                                    S = s[5],
                                    P = s[6],
                                    k = s[7],
                                    E = s[8],
                                    M = s[9],
                                    O = s[10],
                                    I = s[12],
                                    $ = s[13],
                                    D = s[14],
                                    L = s[11],
                                    N = Math.atan2(P, O);
                                p.zOrigin && ((I = E * (D = -p.zOrigin) - s[12]), ($ = M * D - s[13]), (D = O * D + p.zOrigin - s[14])),
                                    (p.rotationX = N * R),
                                    N &&
                                        ((v = C * (w = Math.cos(-N)) + E * (A = Math.sin(-N))),
                                        (g = S * w + M * A),
                                        (y = P * w + O * A),
                                        (E = C * -A + E * w),
                                        (M = S * -A + M * w),
                                        (O = P * -A + O * w),
                                        (L = k * -A + L * w),
                                        (C = v),
                                        (S = g),
                                        (P = y)),
                                    (N = Math.atan2(-_, O)),
                                    (p.rotationY = N * R),
                                    N && ((g = x * (w = Math.cos(-N)) - M * (A = Math.sin(-N))), (y = _ * w - O * A), (M = x * A + M * w), (O = _ * A + O * w), (L = T * A + L * w), (b = v = b * w - E * A), (x = g), (_ = y)),
                                    (N = Math.atan2(x, b)),
                                    (p.rotation = N * R),
                                    N && ((v = b * (w = Math.cos(N)) + x * (A = Math.sin(N))), (g = C * w + S * A), (y = E * w + M * A), (x = x * w - b * A), (S = S * w - C * A), (M = M * w - E * A), (b = v), (C = g), (E = y)),
                                    p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && ((p.rotationX = p.rotation = 0), (p.rotationY = 180 - p.rotationY)),
                                    (N = Math.atan2(C, S)),
                                    (p.scaleX = ((1e5 * Math.sqrt(b * b + x * x + _ * _) + 0.5) | 0) / 1e5),
                                    (p.scaleY = ((1e5 * Math.sqrt(S * S + P * P) + 0.5) | 0) / 1e5),
                                    (p.scaleZ = ((1e5 * Math.sqrt(E * E + M * M + O * O) + 0.5) | 0) / 1e5),
                                    (b /= p.scaleX),
                                    (C /= p.scaleY),
                                    (x /= p.scaleX),
                                    (S /= p.scaleY),
                                    Math.abs(N) > 2e-5 ? ((p.skewX = N * R), (C = 0), "simple" !== p.skewType && (p.scaleY *= 1 / Math.cos(N))) : (p.skewX = 0),
                                    (p.perspective = L ? 1 / (L < 0 ? -L : L) : 0),
                                    (p.x = I),
                                    (p.y = $),
                                    (p.z = D),
                                    p.svg && ((p.x -= p.xOrigin - (p.xOrigin * b - p.yOrigin * C)), (p.y -= p.yOrigin - (p.yOrigin * x - p.xOrigin * S)));
                            } else if (!Nt || r || !s.length || p.x !== s[4] || p.y !== s[5] || (!p.rotationX && !p.rotationY)) {
                                var j = s.length >= 6,
                                    F = j ? s[0] : 1,
                                    z = s[1] || 0,
                                    H = s[2] || 0,
                                    B = j ? s[3] : 1;
                                (p.x = s[4] || 0),
                                    (p.y = s[5] || 0),
                                    (l = Math.sqrt(F * F + z * z)),
                                    (u = Math.sqrt(B * B + H * H)),
                                    (c = F || z ? Math.atan2(z, F) * R : p.rotation || 0),
                                    (h = H || B ? Math.atan2(H, B) * R + c : p.skewX || 0),
                                    (p.scaleX = l),
                                    (p.scaleY = u),
                                    (p.rotation = c),
                                    (p.skewX = h),
                                    Nt && ((p.rotationX = p.rotationY = p.z = 0), (p.perspective = m), (p.scaleZ = 1)),
                                    p.svg && ((p.x -= p.xOrigin - (p.xOrigin * F + p.yOrigin * H)), (p.y -= p.yOrigin - (p.xOrigin * z + p.yOrigin * B)));
                            }
                            for (a in (Math.abs(p.skewX) > 90 &&
                                Math.abs(p.skewX) < 270 &&
                                (f ? ((p.scaleX *= -1), (p.skewX += p.rotation <= 0 ? 180 : -180), (p.rotation += p.rotation <= 0 ? 180 : -180)) : ((p.scaleY *= -1), (p.skewX += p.skewX <= 0 ? 180 : -180))),
                            (p.zOrigin = d),
                            p))
                                p[a] < 2e-5 && p[a] > -2e-5 && (p[a] = 0);
                        }
                        return (
                            n &&
                                ((t._gsTransform = p),
                                p.svg &&
                                    (Pt && t.style[$t]
                                        ? i.l.delayedCall(0.001, function () {
                                              Zt(t.style, $t);
                                          })
                                        : !Pt &&
                                          t.getAttribute("transform") &&
                                          i.l.delayedCall(0.001, function () {
                                              t.removeAttribute("transform");
                                          }))),
                            p
                        );
                    }),
                    Xt = function (t) {
                        var e,
                            n,
                            i = this.data,
                            r = -i.rotation * N,
                            o = r + i.skewX * N,
                            s = ((Math.cos(r) * i.scaleX * 1e5) | 0) / 1e5,
                            a = ((Math.sin(r) * i.scaleX * 1e5) | 0) / 1e5,
                            l = ((Math.sin(o) * -i.scaleY * 1e5) | 0) / 1e5,
                            u = ((Math.cos(o) * i.scaleY * 1e5) | 0) / 1e5,
                            c = this.t.style,
                            h = this.t.currentStyle;
                        if (h) {
                            (n = a), (a = -l), (l = -n), (e = h.filter), (c.filter = "");
                            var p,
                                f,
                                m = this.t.offsetWidth,
                                v = this.t.offsetHeight,
                                g = "absolute" !== h.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + a + ", M21=" + l + ", M22=" + u,
                                w = i.x + (m * i.xPercent) / 100,
                                A = i.y + (v * i.yPercent) / 100;
                            if (
                                (null != i.ox && ((w += (p = (i.oxp ? m * i.ox * 0.01 : i.ox) - m / 2) - (p * s + (f = (i.oyp ? v * i.oy * 0.01 : i.oy) - v / 2) * a)), (A += f - (p * l + f * u))),
                                (y += g ? ", Dx=" + ((p = m / 2) - (p * s + (f = v / 2) * a) + w) + ", Dy=" + (f - (p * l + f * u) + A) + ")" : ", sizingMethod='auto expand')"),
                                -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? (c.filter = e.replace($, y)) : (c.filter = y + " " + e),
                                (0 !== t && 1 !== t) ||
                                    (1 === s &&
                                        0 === a &&
                                        0 === l &&
                                        1 === u &&
                                        ((g && -1 === y.indexOf("Dx=0, Dy=0")) || (_.test(e) && 100 !== parseFloat(RegExp.$1)) || (-1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")))),
                                !g)
                            ) {
                                var b,
                                    T,
                                    C,
                                    S = d < 8 ? 1 : -1;
                                for (
                                    p = i.ieOffsetX || 0,
                                        f = i.ieOffsetY || 0,
                                        i.ieOffsetX = Math.round((m - ((s < 0 ? -s : s) * m + (a < 0 ? -a : a) * v)) / 2 + w),
                                        i.ieOffsetY = Math.round((v - ((u < 0 ? -u : u) * v + (l < 0 ? -l : l) * m)) / 2 + A),
                                        _t = 0;
                                    _t < 4;
                                    _t++
                                )
                                    (C =
                                        (n = -1 !== (b = h[(T = st[_t])]).indexOf("px") ? parseFloat(b) : et(this.t, T, parseFloat(b), b.replace(x, "")) || 0) !== i[T]
                                            ? _t < 2
                                                ? -i.ieOffsetX
                                                : -i.ieOffsetY
                                            : _t < 2
                                            ? p - i.ieOffsetX
                                            : f - i.ieOffsetY),
                                        (c[T] = (i[T] = Math.round(n - C * (0 === _t || 2 === _t ? 1 : S))) + "px");
                            }
                        }
                    },
                    Gt = (q.set3DTransformRatio = q.setTransformRatio = function (t) {
                        var e,
                            n,
                            i,
                            r,
                            o,
                            s,
                            a,
                            l,
                            u,
                            c,
                            h,
                            f,
                            d,
                            m,
                            v,
                            g,
                            y,
                            w,
                            A,
                            b,
                            x = this.data,
                            _ = this.t.style,
                            T = x.rotation,
                            C = x.rotationX,
                            S = x.rotationY,
                            P = x.scaleX,
                            k = x.scaleY,
                            E = x.scaleZ,
                            M = x.x,
                            O = x.y,
                            I = x.z,
                            $ = x.svg,
                            D = x.perspective,
                            L = x.force3D,
                            R = x.skewY,
                            j = x.skewX;
                        if ((R && ((j += R), (T += R)), !((((1 !== t && 0 !== t) || "auto" !== L || (this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime)) && L) || I || D || S || C || 1 !== E) || (Pt && $) || !Nt))
                            T || j || $
                                ? ((T *= N),
                                  (b = j * N),
                                  1e5,
                                  (n = Math.cos(T) * P),
                                  (o = Math.sin(T) * P),
                                  (i = Math.sin(T - b) * -k),
                                  (s = Math.cos(T - b) * k),
                                  b && "simple" === x.skewType && ((e = Math.tan(b - R * N)), (i *= e = Math.sqrt(1 + e * e)), (s *= e), R && ((e = Math.tan(R * N)), (n *= e = Math.sqrt(1 + e * e)), (o *= e))),
                                  $ &&
                                      ((M += x.xOrigin - (x.xOrigin * n + x.yOrigin * i) + x.xOffset),
                                      (O += x.yOrigin - (x.xOrigin * o + x.yOrigin * s) + x.yOffset),
                                      Pt && (x.xPercent || x.yPercent) && ((v = this.t.getBBox()), (M += 0.01 * x.xPercent * v.width), (O += 0.01 * x.yPercent * v.height)),
                                      M < (v = 1e-6) && M > -v && (M = 0),
                                      O < v && O > -v && (O = 0)),
                                  (A = ((1e5 * n) | 0) / 1e5 + "," + ((1e5 * o) | 0) / 1e5 + "," + ((1e5 * i) | 0) / 1e5 + "," + ((1e5 * s) | 0) / 1e5 + "," + M + "," + O + ")"),
                                  $ && Pt ? this.t.setAttribute("transform", "matrix(" + A) : (_[$t] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix(" : "matrix(") + A))
                                : (_[$t] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix(" : "matrix(") + P + ",0,0," + k + "," + M + "," + O + ")");
                        else {
                            if ((p && (P < (v = 1e-4) && P > -v && (P = E = 2e-5), k < v && k > -v && (k = E = 2e-5), !D || x.z || x.rotationX || x.rotationY || (D = 0)), T || j))
                                (T *= N),
                                    (g = n = Math.cos(T)),
                                    (y = o = Math.sin(T)),
                                    j &&
                                        ((T -= j * N),
                                        (g = Math.cos(T)),
                                        (y = Math.sin(T)),
                                        "simple" === x.skewType && ((e = Math.tan((j - R) * N)), (g *= e = Math.sqrt(1 + e * e)), (y *= e), x.skewY && ((e = Math.tan(R * N)), (n *= e = Math.sqrt(1 + e * e)), (o *= e)))),
                                    (i = -y),
                                    (s = g);
                            else {
                                if (!(S || C || 1 !== E || D || $))
                                    return void (_[$t] =
                                        (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) translate3d(" : "translate3d(") +
                                        M +
                                        "px," +
                                        O +
                                        "px," +
                                        I +
                                        "px)" +
                                        (1 !== P || 1 !== k ? " scale(" + P + "," + k + ")" : ""));
                                (n = s = 1), (i = o = 0);
                            }
                            (c = 1),
                                (r = a = l = u = h = f = 0),
                                (d = D ? -1 / D : 0),
                                (m = x.zOrigin),
                                (v = 1e-6),
                                ",",
                                "0",
                                (T = S * N) && ((g = Math.cos(T)), (l = -(y = Math.sin(T))), (h = d * -y), (r = n * y), (a = o * y), (c = g), (d *= g), (n *= g), (o *= g)),
                                (T = C * N) && ((e = i * (g = Math.cos(T)) + r * (y = Math.sin(T))), (w = s * g + a * y), (u = c * y), (f = d * y), (r = i * -y + r * g), (a = s * -y + a * g), (c *= g), (d *= g), (i = e), (s = w)),
                                1 !== E && ((r *= E), (a *= E), (c *= E), (d *= E)),
                                1 !== k && ((i *= k), (s *= k), (u *= k), (f *= k)),
                                1 !== P && ((n *= P), (o *= P), (l *= P), (h *= P)),
                                (m || $) &&
                                    (m && ((M += r * -m), (O += a * -m), (I += c * -m + m)),
                                    $ && ((M += x.xOrigin - (x.xOrigin * n + x.yOrigin * i) + x.xOffset), (O += x.yOrigin - (x.xOrigin * o + x.yOrigin * s) + x.yOffset)),
                                    M < v && M > -v && (M = "0"),
                                    O < v && O > -v && (O = "0"),
                                    I < v && I > -v && (I = 0)),
                                (A = x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix3d(" : "matrix3d("),
                                (A += (n < v && n > -v ? "0" : n) + "," + (o < v && o > -v ? "0" : o) + "," + (l < v && l > -v ? "0" : l)),
                                (A += "," + (h < v && h > -v ? "0" : h) + "," + (i < v && i > -v ? "0" : i) + "," + (s < v && s > -v ? "0" : s)),
                                C || S || 1 !== E
                                    ? ((A += "," + (u < v && u > -v ? "0" : u) + "," + (f < v && f > -v ? "0" : f) + "," + (r < v && r > -v ? "0" : r)),
                                      (A += "," + (a < v && a > -v ? "0" : a) + "," + (c < v && c > -v ? "0" : c) + "," + (d < v && d > -v ? "0" : d) + ","))
                                    : (A += ",0,0,0,0,1,0,"),
                                (A += M + "," + O + "," + I + "," + (D ? 1 + -I / D : 1) + ")"),
                                (_[$t] = A);
                        }
                    });
                ((l = Rt.prototype).x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = l.xOffset = l.yOffset = 0),
                    (l.scaleX = l.scaleY = l.scaleZ = 1),
                    Ct(
                        "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
                        {
                            parser: function (t, e, i, r, s, a, l) {
                                if (r._lastParsedTransform === l) return s;
                                r._lastParsedTransform = l;
                                var u = l.scale && "function" == typeof l.scale ? l.scale : 0;
                                u && (l.scale = u(v, t));
                                var c,
                                    h,
                                    p,
                                    f,
                                    d,
                                    g,
                                    y,
                                    w,
                                    A,
                                    b = t._gsTransform,
                                    x = t.style,
                                    _ = It.length,
                                    T = l,
                                    C = {},
                                    S = Qt(t, n, !0, T.parseTransform),
                                    P = T.transform && ("function" == typeof T.transform ? T.transform(v, m) : T.transform);
                                if (((S.skewType = T.skewType || S.skewType || o.defaultSkewType), (r._transform = S), "rotationZ" in T && (T.rotation = T.rotationZ), P && "string" == typeof P && $t))
                                    ((h = B.style)[$t] = P),
                                        (h.display = "block"),
                                        (h.position = "absolute"),
                                        -1 !== P.indexOf("%") && ((h.width = tt(t, "width")), (h.height = tt(t, "height"))),
                                        z.body.appendChild(B),
                                        (c = Qt(B, null, !1)),
                                        "simple" === S.skewType && (c.scaleY *= Math.cos(c.skewX * N)),
                                        S.svg &&
                                            ((g = S.xOrigin),
                                            (y = S.yOrigin),
                                            (c.x -= S.xOffset),
                                            (c.y -= S.yOffset),
                                            (T.transformOrigin || T.svgOrigin) &&
                                                ((P = {}), Bt(t, lt(T.transformOrigin), P, T.svgOrigin, T.smoothOrigin, !0), (g = P.xOrigin), (y = P.yOrigin), (c.x -= P.xOffset - S.xOffset), (c.y -= P.yOffset - S.yOffset)),
                                            (g || y) && ((w = Yt(B, !0)), (c.x -= g - (g * w[0] + y * w[2])), (c.y -= y - (g * w[1] + y * w[3])))),
                                        z.body.removeChild(B),
                                        c.perspective || (c.perspective = S.perspective),
                                        null != T.xPercent && (c.xPercent = ct(T.xPercent, S.xPercent)),
                                        null != T.yPercent && (c.yPercent = ct(T.yPercent, S.yPercent));
                                else if ("object" == typeof T) {
                                    if (
                                        ((c = {
                                            scaleX: ct(null != T.scaleX ? T.scaleX : T.scale, S.scaleX),
                                            scaleY: ct(null != T.scaleY ? T.scaleY : T.scale, S.scaleY),
                                            scaleZ: ct(T.scaleZ, S.scaleZ),
                                            x: ct(T.x, S.x),
                                            y: ct(T.y, S.y),
                                            z: ct(T.z, S.z),
                                            xPercent: ct(T.xPercent, S.xPercent),
                                            yPercent: ct(T.yPercent, S.yPercent),
                                            perspective: ct(T.transformPerspective, S.perspective),
                                        }),
                                        null != (d = T.directionalRotation))
                                    )
                                        if ("object" == typeof d) for (h in d) T[h] = d[h];
                                        else T.rotation = d;
                                    "string" == typeof T.x && -1 !== T.x.indexOf("%") && ((c.x = 0), (c.xPercent = ct(T.x, S.xPercent))),
                                        "string" == typeof T.y && -1 !== T.y.indexOf("%") && ((c.y = 0), (c.yPercent = ct(T.y, S.yPercent))),
                                        (c.rotation = ht("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : S.rotation, S.rotation, "rotation", C)),
                                        Nt &&
                                            ((c.rotationX = ht("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : S.rotationX || 0, S.rotationX, "rotationX", C)),
                                            (c.rotationY = ht("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : S.rotationY || 0, S.rotationY, "rotationY", C))),
                                        (c.skewX = ht(T.skewX, S.skewX)),
                                        (c.skewY = ht(T.skewY, S.skewY));
                                }
                                for (
                                    Nt && null != T.force3D && ((S.force3D = T.force3D), (f = !0)),
                                        (p = S.force3D || S.z || S.rotationX || S.rotationY || c.z || c.rotationX || c.rotationY || c.perspective) || null == T.scale || (c.scaleZ = 1);
                                    --_ > -1;

                                )
                                    ((P = c[(A = It[_])] - S[A]) > 1e-6 || P < -1e-6 || null != T[A] || null != j[A]) &&
                                        ((f = !0), (s = new At(S, A, S[A], P, s)), A in C && (s.e = C[A]), (s.xs0 = 0), (s.plugin = a), r._overwriteProps.push(s.n));
                                return (
                                    (P = "function" == typeof T.transformOrigin ? T.transformOrigin(v, m) : T.transformOrigin),
                                    S.svg &&
                                        (P || T.svgOrigin) &&
                                        ((g = S.xOffset),
                                        (y = S.yOffset),
                                        Bt(t, lt(P), c, T.svgOrigin, T.smoothOrigin),
                                        (s = bt(S, "xOrigin", (b ? S : c).xOrigin, c.xOrigin, s, "transformOrigin")),
                                        (s = bt(S, "yOrigin", (b ? S : c).yOrigin, c.yOrigin, s, "transformOrigin")),
                                        (g === S.xOffset && y === S.yOffset) || ((s = bt(S, "xOffset", b ? g : S.xOffset, S.xOffset, s, "transformOrigin")), (s = bt(S, "yOffset", b ? y : S.yOffset, S.yOffset, s, "transformOrigin"))),
                                        (P = "0px 0px")),
                                    (P || (Nt && p && S.zOrigin)) &&
                                        ($t
                                            ? ((f = !0),
                                              (A = Lt),
                                              P || (P = (P = (tt(t, A, n, !1, "50% 50%") + "").split(" "))[0] + " " + P[1] + " " + S.zOrigin + "px"),
                                              (P += ""),
                                              ((s = new At(x, A, 0, 0, s, -1, "transformOrigin")).b = x[A]),
                                              (s.plugin = a),
                                              Nt
                                                  ? ((h = S.zOrigin),
                                                    (P = P.split(" ")),
                                                    (S.zOrigin = (P.length > 2 ? parseFloat(P[2]) : h) || 0),
                                                    (s.xs0 = s.e = P[0] + " " + (P[1] || "50%") + " 0px"),
                                                    ((s = new At(S, "zOrigin", 0, 0, s, -1, s.n)).b = h),
                                                    (s.xs0 = s.e = S.zOrigin))
                                                  : (s.xs0 = s.e = P))
                                            : lt(P + "", S)),
                                    f && (r._transformType = (S.svg && Pt) || (!p && 3 !== this._transformType) ? 2 : 3),
                                    u && (l.scale = u),
                                    s
                                );
                            },
                            allowFunc: !0,
                            prefix: !0,
                        }
                    ),
                    Ct("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }),
                    Ct("clipPath", { defaultValue: "inset(0%)", prefix: !0, multi: !0, formatter: gt("inset(0% 0% 0% 0%)", !1, !0) }),
                    Ct("borderRadius", {
                        defaultValue: "0px",
                        parser: function (t, i, r, o, s, a) {
                            i = this.format(i);
                            var l,
                                u,
                                c,
                                h,
                                p,
                                f,
                                d,
                                m,
                                v,
                                g,
                                y,
                                w,
                                A,
                                b,
                                x,
                                _,
                                T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                C = t.style;
                            for (v = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), l = i.split(" "), u = 0; u < T.length; u++)
                                this.p.indexOf("border") && (T[u] = Z(T[u])),
                                    -1 !== (p = h = tt(t, T[u], n, !1, "0px")).indexOf(" ") && ((h = p.split(" ")), (p = h[0]), (h = h[1])),
                                    (f = c = l[u]),
                                    (d = parseFloat(p)),
                                    (w = p.substr((d + "").length)),
                                    (A = "=" === f.charAt(1))
                                        ? ((m = parseInt(f.charAt(0) + "1", 10)), (f = f.substr(2)), (m *= parseFloat(f)), (y = f.substr((m + "").length - (m < 0 ? 1 : 0)) || ""))
                                        : ((m = parseFloat(f)), (y = f.substr((m + "").length))),
                                    "" === y && (y = e[r] || w),
                                    y !== w &&
                                        ((b = et(t, "borderLeft", d, w)),
                                        (x = et(t, "borderTop", d, w)),
                                        "%" === y ? ((p = (b / v) * 100 + "%"), (h = (x / g) * 100 + "%")) : "em" === y ? ((p = b / (_ = et(t, "borderLeft", 1, "em")) + "em"), (h = x / _ + "em")) : ((p = b + "px"), (h = x + "px")),
                                        A && ((f = parseFloat(p) + m + y), (c = parseFloat(h) + m + y))),
                                    (s = xt(C, T[u], p + " " + h, f + " " + c, !1, "0px", s));
                            return s;
                        },
                        prefix: !0,
                        formatter: gt("0px 0px 0px 0px", !1, !0),
                    }),
                    Ct("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                        defaultValue: "0px",
                        parser: function (t, e, i, r, o, s) {
                            return xt(t.style, i, this.format(tt(t, i, n, !1, "0px 0px")), this.format(e), !1, "0px", o);
                        },
                        prefix: !0,
                        formatter: gt("0px 0px", !1, !0),
                    }),
                    Ct("backgroundPosition", {
                        defaultValue: "0 0",
                        parser: function (t, e, i, r, o, s) {
                            var a,
                                l,
                                u,
                                c,
                                h,
                                p,
                                f = "background-position",
                                m = n || K(t),
                                v = this.format((m ? (d ? m.getPropertyValue(f + "-x") + " " + m.getPropertyValue(f + "-y") : m.getPropertyValue(f)) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                                g = this.format(e);
                            if ((-1 !== v.indexOf("%")) != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (p = tt(t, "backgroundImage").replace(E, "")) && "none" !== p) {
                                for (a = v.split(" "), l = g.split(" "), W.setAttribute("src", p), u = 2; --u > -1; )
                                    (c = -1 !== (v = a[u]).indexOf("%")) !== (-1 !== l[u].indexOf("%")) &&
                                        ((h = 0 === u ? t.offsetWidth - W.width : t.offsetHeight - W.height), (a[u] = c ? (parseFloat(v) / 100) * h + "px" : (parseFloat(v) / h) * 100 + "%"));
                                v = a.join(" ");
                            }
                            return this.parseComplex(t.style, v, g, o, s);
                        },
                        formatter: lt,
                    }),
                    Ct("backgroundSize", {
                        defaultValue: "0 0",
                        formatter: function (t) {
                            return "co" === (t += "").substr(0, 2) ? t : lt(-1 === t.indexOf(" ") ? t + " " + t : t);
                        },
                    }),
                    Ct("perspective", { defaultValue: "0px", prefix: !0 }),
                    Ct("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
                    Ct("transformStyle", { prefix: !0 }),
                    Ct("backfaceVisibility", { prefix: !0 }),
                    Ct("userSelect", { prefix: !0 }),
                    Ct("margin", { parser: yt("marginTop,marginRight,marginBottom,marginLeft") }),
                    Ct("padding", { parser: yt("paddingTop,paddingRight,paddingBottom,paddingLeft") }),
                    Ct("clip", {
                        defaultValue: "rect(0px,0px,0px,0px)",
                        parser: function (t, e, i, r, o, s) {
                            var a, l, u;
                            return (
                                d < 9
                                    ? ((l = t.currentStyle), (u = d < 8 ? " " : ","), (a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")"), (e = this.format(e).split(",").join(u)))
                                    : ((a = this.format(tt(t, this.p, n, !1, this.dflt))), (e = this.format(e))),
                                this.parseComplex(t.style, a, e, o, s)
                            );
                        },
                    }),
                    Ct("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }),
                    Ct("autoRound,strictUnits", {
                        parser: function (t, e, n, i, r) {
                            return r;
                        },
                    }),
                    Ct("border", {
                        defaultValue: "0px solid #000",
                        parser: function (t, e, i, r, o, s) {
                            var a = tt(t, "borderTopWidth", n, !1, "0px"),
                                l = this.format(e).split(" "),
                                u = l[0].replace(x, "");
                            return (
                                "px" !== u && (a = parseFloat(a) / et(t, "borderTopWidth", 1, u) + u),
                                this.parseComplex(t.style, this.format(a + " " + tt(t, "borderTopStyle", n, !1, "solid") + " " + tt(t, "borderTopColor", n, !1, "#000")), l.join(" "), o, s)
                            );
                        },
                        color: !0,
                        formatter: function (t) {
                            var e = t.split(" ");
                            return e[0] + " " + (e[1] || "solid") + " " + (t.match(vt) || ["#000"])[0];
                        },
                    }),
                    Ct("borderWidth", { parser: yt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }),
                    Ct("float,cssFloat,styleFloat", {
                        parser: function (t, e, n, i, r, o) {
                            var s = t.style,
                                a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                            return new At(s, a, 0, 0, r, -1, n, !1, 0, s[a], e);
                        },
                    });
                var Ut = function (t) {
                    var e,
                        n = this.t,
                        i = n.filter || tt(this.data, "filter") || "",
                        r = (this.s + this.c * t) | 0;
                    100 === r && (-1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (n.removeAttribute("filter"), (e = !tt(this.data, "filter"))) : ((n.filter = i.replace(C, "")), (e = !0))),
                        e || (this.xn1 && (n.filter = i = i || "alpha(opacity=" + r + ")"), -1 === i.indexOf("pacity") ? (0 === r && this.xn1) || (n.filter = i + " alpha(opacity=" + r + ")") : (n.filter = i.replace(_, "opacity=" + r)));
                };
                Ct("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function (t, e, i, r, o, s) {
                        var a = parseFloat(tt(t, "opacity", n, !1, "1")),
                            l = t.style,
                            u = "autoAlpha" === i;
                        return (
                            "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a),
                            u && 1 === a && "hidden" === tt(t, "visibility", n) && 0 !== e && (a = 0),
                            Y
                                ? (o = new At(l, "opacity", a, e - a, o))
                                : (((o = new At(l, "opacity", 100 * a, 100 * (e - a), o)).xn1 = u ? 1 : 0),
                                  (l.zoom = 1),
                                  (o.type = 2),
                                  (o.b = "alpha(opacity=" + o.s + ")"),
                                  (o.e = "alpha(opacity=" + (o.s + o.c) + ")"),
                                  (o.data = t),
                                  (o.plugin = s),
                                  (o.setRatio = Ut)),
                            u && (((o = new At(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit"), r._overwriteProps.push(o.n), r._overwriteProps.push(i)),
                            o
                        );
                    },
                });
                var Zt = function (t, e) {
                        e && (t.removeProperty ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) || (e = "-" + e), t.removeProperty(e.replace(P, "-$1").toLowerCase())) : t.removeAttribute(e));
                    },
                    Jt = function (t) {
                        if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, n = this.t.style; e; ) e.v ? (n[e.p] = e.v) : Zt(n, e.p), (e = e._next);
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
                    };
                Ct("className", {
                    parser: function (e, i, r, o, s, a, l) {
                        var u,
                            c,
                            h,
                            p,
                            f,
                            d = e.getAttribute("class") || "",
                            m = e.style.cssText;
                        if ((((s = o._classNamePT = new At(e, r, 0, 0, s, 2)).setRatio = Jt), (s.pr = -11), (t = !0), (s.b = d), (c = it(e, n)), (h = e._gsClassPT))) {
                            for (p = {}, f = h.data; f; ) (p[f.p] = 1), (f = f._next);
                            h.setRatio(1);
                        }
                        return (
                            (e._gsClassPT = s),
                            (s.e = "=" !== i.charAt(1) ? i : d.replace(new RegExp("(?:\\s|^)" + i.substr(2) + "(?![\\w-])"), "") + ("+" === i.charAt(0) ? " " + i.substr(2) : "")),
                            e.setAttribute("class", s.e),
                            (u = rt(e, c, it(e), l, p)),
                            e.setAttribute("class", d),
                            (s.data = u.firstMPT),
                            e.style.cssText !== m && (e.style.cssText = m),
                            (s = s.xfirst = o.parse(e, u.difs, s, a))
                        );
                    },
                });
                var Kt = function (t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e,
                            n,
                            i,
                            r,
                            o,
                            s = this.t.style,
                            l = a.transform.parse;
                        if ("all" === this.e) (s.cssText = ""), (r = !0);
                        else for (i = (e = this.e.split(" ").join("").split(",")).length; --i > -1; ) (n = e[i]), a[n] && (a[n].parse === l ? (r = !0) : (n = "transformOrigin" === n ? Lt : a[n].p)), Zt(s, n);
                        r && (Zt(s, $t), (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform));
                    }
                };
                for (
                    Ct("clearProps", {
                        parser: function (e, n, i, r, o) {
                            return ((o = new At(e, i, 0, 0, o, 2)).setRatio = Kt), (o.e = n), (o.pr = -10), (o.data = r._tween), (t = !0), o;
                        },
                    }),
                        l = "bezier,throwProps,physicsProps,physics2D".split(","),
                        _t = l.length;
                    _t--;

                )
                    St(l[_t]);
                ((l = o.prototype)._firstPT = l._lastParsedTransform = l._transform = null),
                    (l._onInitTween = function (i, s, l, p) {
                        if (!i.nodeType) return !1;
                        (this._target = m = i), (this._tween = l), (this._vars = s), (v = p), (u = s.autoRound), (t = !1), (e = s.suffixMap || o.suffixMap), (n = K(i)), (r = this._overwriteProps);
                        var d,
                            g,
                            y,
                            w,
                            A,
                            b,
                            x,
                            _,
                            C,
                            S = i.style;
                        if (
                            (c && "" === S.zIndex && (("auto" !== (d = tt(i, "zIndex", n)) && "" !== d) || this._addLazySet(S, "zIndex", 0)),
                            "string" == typeof s && ((w = S.cssText), (d = it(i, n)), (S.cssText = w + ";" + s), (d = rt(i, d, it(i)).difs), !Y && T.test(s) && (d.opacity = parseFloat(RegExp.$1)), (s = d), (S.cssText = w)),
                            s.className ? (this._firstPT = g = a.className.parse(i, s.className, "className", this, null, null, s)) : (this._firstPT = g = this.parse(i, s, null)),
                            this._transformType)
                        ) {
                            for (
                                C = 3 === this._transformType,
                                    $t
                                        ? h &&
                                          ((c = !0),
                                          "" === S.zIndex && (("auto" !== (x = tt(i, "zIndex", n)) && "" !== x) || this._addLazySet(S, "zIndex", 0)),
                                          f && this._addLazySet(S, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (C ? "visible" : "hidden")))
                                        : (S.zoom = 1),
                                    y = g;
                                y && y._next;

                            )
                                y = y._next;
                            (_ = new At(i, "transform", 0, 0, null, 2)), this._linkCSSP(_, null, y), (_.setRatio = $t ? Gt : Xt), (_.data = this._transform || Qt(i, n, !0)), (_.tween = l), (_.pr = -1), r.pop();
                        }
                        if (t) {
                            for (; g; ) {
                                for (b = g._next, y = w; y && y.pr > g.pr; ) y = y._next;
                                (g._prev = y ? y._prev : A) ? (g._prev._next = g) : (w = g), (g._next = y) ? (y._prev = g) : (A = g), (g = b);
                            }
                            this._firstPT = w;
                        }
                        return !0;
                    }),
                    (l.parse = function (t, i, r, o) {
                        var s,
                            l,
                            c,
                            h,
                            p,
                            f,
                            d,
                            g,
                            y,
                            w,
                            A = t.style;
                        for (s in i) {
                            if (((f = i[s]), (l = a[s]), "function" != typeof f || (l && l.allowFunc) || (f = f(v, m)), l)) r = l.parse(t, f, s, this, r, o, i);
                            else {
                                if ("--" === s.substr(0, 2)) {
                                    this._tween._propLookup[s] = this._addTween.call(this._tween, t.style, "setProperty", K(t).getPropertyValue(s) + "", f + "", s, !1, s);
                                    continue;
                                }
                                (p = tt(t, s, n) + ""),
                                    (y = "string" == typeof f),
                                    "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || (y && S.test(f))
                                        ? (y || (f = ((f = dt(f)).length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), (r = xt(A, s, p, f, !0, "transparent", r, 0, o)))
                                        : y && L.test(f)
                                        ? (r = xt(A, s, p, f, !0, null, r, 0, o))
                                        : ((d = (c = parseFloat(p)) || 0 === c ? p.substr((c + "").length) : ""),
                                          ("" !== p && "auto" !== p) ||
                                              ("width" === s || "height" === s ? ((c = at(t, s, n)), (d = "px")) : "left" === s || "top" === s ? ((c = nt(t, s, n)), (d = "px")) : ((c = "opacity" !== s ? 0 : 1), (d = ""))),
                                          (w = y && "=" === f.charAt(1)) ? ((h = parseInt(f.charAt(0) + "1", 10)), (f = f.substr(2)), (h *= parseFloat(f)), (g = f.replace(x, ""))) : ((h = parseFloat(f)), (g = y ? f.replace(x, "") : "")),
                                          "" === g && (g = s in e ? e[s] : d),
                                          (f = h || 0 === h ? (w ? h + c : h) + g : i[s]),
                                          d !== g &&
                                              (("" === g && "lineHeight" !== s) ||
                                                  ((h || 0 === h) &&
                                                      c &&
                                                      ((c = et(t, s, c, d)),
                                                      "%" === g
                                                          ? ((c /= et(t, s, 100, "%") / 100), !0 !== i.strictUnits && (p = c + "%"))
                                                          : "em" === g || "rem" === g || "vw" === g || "vh" === g
                                                          ? (c /= et(t, s, 1, g))
                                                          : "px" !== g && ((h = et(t, s, h, g)), (g = "px")),
                                                      w && (h || 0 === h) && (f = h + c + g)))),
                                          w && (h += c),
                                          (!c && 0 !== c) || (!h && 0 !== h)
                                              ? void 0 !== A[s] && (f || (f + "" != "NaN" && null != f))
                                                  ? ((r = new At(A, s, h || c || 0, 0, r, -1, s, !1, 0, p, f)).xs0 = "none" !== f || ("display" !== s && -1 === s.indexOf("Style")) ? f : p)
                                                  : X("invalid " + s + " tween value: " + i[s])
                                              : ((r = new At(A, s, c, h - c, r, 0, s, !1 !== u && ("px" === g || "zIndex" === s), 0, p, f)).xs0 = g));
                            }
                            o && r && !r.plugin && (r.plugin = o);
                        }
                        return r;
                    }),
                    (l.setRatio = function (t) {
                        var e,
                            n,
                            i,
                            r = this._firstPT;
                        if (1 !== t || (this._tween._time !== this._tween._duration && 0 !== this._tween._time))
                            if (t || (this._tween._time !== this._tween._duration && 0 !== this._tween._time) || -1e-6 === this._tween._rawPrevTime)
                                for (; r; ) {
                                    if (((e = r.c * t + r.s), r.r ? (e = r.r(e)) : e < 1e-6 && e > -1e-6 && (e = 0), r.type))
                                        if (1 === r.type)
                                            if (2 === (i = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                            else if (3 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                            else if (4 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                            else if (5 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                            else {
                                                for (n = r.xs0 + e + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                                r.t[r.p] = n;
                                            }
                                        else -1 === r.type ? (r.t[r.p] = r.xs0) : r.setRatio && r.setRatio(t);
                                    else r.t[r.p] = e + r.xs0;
                                    r = r._next;
                                }
                            else for (; r; ) 2 !== r.type ? (r.t[r.p] = r.b) : r.setRatio(t), (r = r._next);
                        else
                            for (; r; ) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (((e = r.r(r.s + r.c)), r.type)) {
                                            if (1 === r.type) {
                                                for (i = r.l, n = r.xs0 + e + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                                r.t[r.p] = n;
                                            }
                                        } else r.t[r.p] = e + r.xs0;
                                    else r.t[r.p] = r.e;
                                else r.setRatio(t);
                                r = r._next;
                            }
                    }),
                    (l._enableTransforms = function (t) {
                        (this._transform = this._transform || Qt(this._target, n, !0)), (this._transformType = (this._transform.svg && Pt) || (!t && 3 !== this._transformType) ? 2 : 3);
                    });
                var te = function (t) {
                    (this.t[this.p] = this.e), this.data._linkCSSP(this, this._next, null, !0);
                };
                (l._addLazySet = function (t, e, n) {
                    var i = (this._firstPT = new At(t, e, 0, 0, this._firstPT, 2));
                    (i.e = n), (i.setRatio = te), (i.data = this);
                }),
                    (l._linkCSSP = function (t, e, n, i) {
                        return (
                            t &&
                                (e && (e._prev = t),
                                t._next && (t._next._prev = t._prev),
                                t._prev ? (t._prev._next = t._next) : this._firstPT === t && ((this._firstPT = t._next), (i = !0)),
                                n ? (n._next = t) : i || null !== this._firstPT || (this._firstPT = t),
                                (t._next = e),
                                (t._prev = n)),
                            t
                        );
                    }),
                    (l._mod = function (t) {
                        for (var e = this._firstPT; e; ) "function" == typeof t[e.p] && (e.r = t[e.p]), (e = e._next);
                    }),
                    (l._kill = function (t) {
                        var e,
                            n,
                            r,
                            o = t;
                        if (t.autoAlpha || t.alpha) {
                            for (n in ((o = {}), t)) o[n] = t[n];
                            (o.opacity = 1), o.autoAlpha && (o.visibility = 1);
                        }
                        for (
                            t.className &&
                                (e = this._classNamePT) &&
                                ((r = e.xfirst) && r._prev ? this._linkCSSP(r._prev, e._next, r._prev._prev) : r === this._firstPT && (this._firstPT = e._next),
                                e._next && this._linkCSSP(e._next, e._next._next, r._prev),
                                (this._classNamePT = null)),
                                e = this._firstPT;
                            e;

                        )
                            e.plugin && e.plugin !== n && e.plugin._kill && (e.plugin._kill(t), (n = e.plugin)), (e = e._next);
                        return i.j.prototype._kill.call(this, o);
                    });
                var ee = function (t, e, n) {
                    var i, r, o, s;
                    if (t.slice) for (r = t.length; --r > -1; ) ee(t[r], e, n);
                    else for (r = (i = t.childNodes).length; --r > -1; ) (s = (o = i[r]).type), o.style && (e.push(it(o)), n && n.push(o)), (1 !== s && 9 !== s && 11 !== s) || !o.childNodes.length || ee(o, e, n);
                };
                return (
                    (o.cascadeTo = function (t, e, n) {
                        var r,
                            o,
                            s,
                            a,
                            l = i.l.to(t, e, n),
                            u = [l],
                            c = [],
                            h = [],
                            p = [],
                            f = i.l._internals.reservedProps;
                        for (t = l._targets || l.target, ee(t, c, p), l.render(e, !0, !0), ee(t, h), l.render(0, !0, !0), l._enabled(!0), r = p.length; --r > -1; )
                            if ((o = rt(p[r], c[r], h[r])).firstMPT) {
                                for (s in ((o = o.difs), n)) f[s] && (o[s] = n[s]);
                                for (s in ((a = {}), o)) a[s] = c[r][s];
                                u.push(i.l.fromTo(p[r], e, a, o));
                            }
                        return u;
                    }),
                    i.j.activate([o]),
                    o
                );
            },
            !0
        );
        var r = i.m.CSSPlugin;
    },
    function (t, e, n) {
        "use strict";
        e.a = function (t) {
            var e = this.constructor;
            return this.then(
                function (n) {
                    return e.resolve(t()).then(function () {
                        return n;
                    });
                },
                function (n) {
                    return e.resolve(t()).then(function () {
                        return e.reject(n);
                    });
                }
            );
        };
    },
    function (t, e) {
        var n,
            i,
            r = (t.exports = {});
        function o() {
            throw new Error("setTimeout has not been defined");
        }
        function s() {
            throw new Error("clearTimeout has not been defined");
        }
        function a(t) {
            if (n === setTimeout) return setTimeout(t, 0);
            if ((n === o || !n) && setTimeout) return (n = setTimeout), setTimeout(t, 0);
            try {
                return n(t, 0);
            } catch (e) {
                try {
                    return n.call(null, t, 0);
                } catch (e) {
                    return n.call(this, t, 0);
                }
            }
        }
        !(function () {
            try {
                n = "function" == typeof setTimeout ? setTimeout : o;
            } catch (t) {
                n = o;
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : s;
            } catch (t) {
                i = s;
            }
        })();
        var l,
            u = [],
            c = !1,
            h = -1;
        function p() {
            c && l && ((c = !1), l.length ? (u = l.concat(u)) : (h = -1), u.length && f());
        }
        function f() {
            if (!c) {
                var t = a(p);
                c = !0;
                for (var e = u.length; e; ) {
                    for (l = u, u = []; ++h < e; ) l && l[h].run();
                    (h = -1), (e = u.length);
                }
                (l = null),
                    (c = !1),
                    (function (t) {
                        if (i === clearTimeout) return clearTimeout(t);
                        if ((i === s || !i) && clearTimeout) return (i = clearTimeout), clearTimeout(t);
                        try {
                            i(t);
                        } catch (e) {
                            try {
                                return i.call(null, t);
                            } catch (e) {
                                return i.call(this, t);
                            }
                        }
                    })(t);
            }
        }
        function d(t, e) {
            (this.fun = t), (this.array = e);
        }
        function m() {}
        (r.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            u.push(new d(t, e)), 1 !== u.length || c || a(f);
        }),
            (d.prototype.run = function () {
                this.fun.apply(null, this.array);
            }),
            (r.title = "browser"),
            (r.browser = !0),
            (r.env = {}),
            (r.argv = []),
            (r.version = ""),
            (r.versions = {}),
            (r.on = m),
            (r.addListener = m),
            (r.once = m),
            (r.off = m),
            (r.removeListener = m),
            (r.removeAllListeners = m),
            (r.emit = m),
            (r.prependListener = m),
            (r.prependOnceListener = m),
            (r.listeners = function (t) {
                return [];
            }),
            (r.binding = function (t) {
                throw new Error("process.binding is not supported");
            }),
            (r.cwd = function () {
                return "/";
            }),
            (r.chdir = function (t) {
                throw new Error("process.chdir is not supported");
            }),
            (r.umask = function () {
                return 0;
            });
    },
    function (t, e, n) {
        "use strict";
        (function (e, i) {
            var r,
                o = n(1),
                s = n(7).TimelineLite,
                a = n(8).Expo,
                l = (n(9).CSSPlugin, n(23));
            (e.easing.easeOutExpo = function (t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
            }),
                (e.fn.setAttrIf = function (t, e, n) {
                    return t ? this.attr(e, n) : this.removeAttr(e);
                }),
                (SVGElement.prototype.hasClass = function (t) {
                    return new RegExp("(\\s|^)" + t + "(\\s|$)").test(this.getAttribute("class"));
                }),
                (SVGElement.prototype.addClass = function (t) {
                    this.hasClass(t) || this.setAttribute("class", (this.getAttribute("class") || "") + " " + t);
                }),
                (SVGElement.prototype.removeClass = function (t) {
                    var e = this.getAttribute("class").replace(new RegExp("(\\s|^)" + t + "(\\s|$)", "g"), "$2");
                    this.hasClass(t) && this.setAttribute("class", e);
                }),
                (SVGElement.prototype.toggleClass = function (t) {
                    this.hasClass(t) ? this.removeClass(t) : this.addClass(t);
                }),
                (e.fn.flashClass = function (t, e) {
                    var n,
                        i = this;
                    return (
                        this.addClass(t),
                        clearTimeout(this.data("timeout")),
                        (n = setTimeout(function () {
                            "object" == typeof i && i.length && (i.removeClass(t), i.data("timeout", null));
                        }, e)),
                        this.data("timeout", n),
                        this
                    );
                }),
                (e.fn.onCustom = function (t, n) {
                    return (
                        this.each(function (i, r) {
                            var o = e(r).data("listeners");
                            o && o[t] && o[t].push(n);
                        }),
                        this
                    );
                }),
                (e.fn.triggerCustom = function (t, n) {
                    return (
                        this.each(function (i, r) {
                            for (var o = e(r).data("listeners")[t], s = 0; s < o.length; s++) o[s]({}, n);
                        }),
                        this
                    );
                }),
                (e.fn.offCustom = function (t) {
                    return (
                        this.each(function (n, i) {
                            var r = e(i).data("listeners");
                            r && r[t] && (r[t] = []);
                        }),
                        this
                    );
                }),
                (function () {
                    for (var t = 0, e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length && !window.requestAnimationFrame; ++n)
                        (window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"]), (window.cancelAnimationFrame = window[e[n] + "CancelAnimationFrame"] || window[e[n] + "CancelRequestAnimationFrame"]);
                    window.requestAnimationFrame ||
                        (window.requestAnimationFrame = function (e) {
                            var n = new Date().getTime(),
                                i = Math.max(0, 16 - (n - t)),
                                r = window.setTimeout(function () {
                                    e(n + i);
                                }, i);
                            return (t = n + i), r;
                        }),
                        window.cancelAnimationFrame ||
                            (window.cancelAnimationFrame = function (t) {
                                clearTimeout(t);
                            });
                })(),
                (t.exports = {
                    stubVideo:
                        "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAATdbW9vdgAAAGxtdmhkAAAAANhKx+XYSsflAAAD6AAAA+gAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhpb2RzAAAAABCAgIAHAE/////+/wAAA590cmFrAAAAXHRraGQAAAAD2ErH5dhKx+UAAAABAAAAAAAAA+gAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAoAAAAHgAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPoAAAXcAABAAAAAAMXbWRpYQAAACBtZGhkAAAAANhKx+XYSsflAAFfkAABX5BVxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACwm1pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAoJzdGJsAAAAnHN0c2QAAAAAAAAAAQAAAIxhdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAoAB4ABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAANmF2Y0MBTUAo/+EAHWdNQCi5QiBQHtgLUGAQZAAAAwAEAAr8gDxgxhGAAQAGaMhCAZSyAAAAGHN0dHMAAAAAAAAAAQAAAB4AAAu4AAAAFHN0c3MAAAAAAAAAAQAAAAEAAAAqc2R0cAAAAAAgEBAYGBgYGBgYGBgYGBgYGBgQEBgYGBgYGBgYGBgAAABYY3R0cwAAAAAAAAAJAAAAAQAAF3AAAAABAADS8AAAAAEAAF3AAAAABwAAAAAAAAAIAAALuAAAAAEAAJhYAAAAAQAARlAAAAAFAAAAAAAAAAUAAAu4AAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAAGkAAAAA0AAAANAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADgAAAA0AAAANAAAADQAAAA0AAAANAAAADQAAAA0AAAANAAAADQAAAA0AAAANAAAAiHN0Y28AAAAAAAAAHgAABQ0AAAudAAALqgAAC7cAAAvDAAALzwAAC9sAAAvnAAAL8wAAC/8AAAwLAAAMFwAADCMAAAwvAAAMOwAADEcAAAxTAAAMXwAADGsAAAx5AAAMhgAADJMAAAygAAAMrQAADLoAAAzHAAAM1AAADOEAAAzuAAAM+wAAALJ1ZHRhAAAAqm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAfWlsc3QAAAAhqW5hbQAAABlkYXRhAAAAAQAAAABQcm9qZWN0IDEAAAAiqWRheQAAABpkYXRhAAAAAQAAAAAyMDE4LTEyLTI3AAAAMql0b28AAAAqZGF0YQAAAAEAAAAASGFuZEJyYWtlIDEuMS4yIDIwMTgwOTA1MDAAAAAIZnJlZQAACANtZGF0AAAC+QYF///13EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE1NSByMjkwMSA3ZDBmZjIyIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxOCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTAgcmVmPTE2IGRlYmxvY2s9MDowOjAgYW5hbHlzZT0weDE6MHgxMzEgbWU9dGVzYSBzdWJtZT0xMSBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTI0IGNocm9tYV9tZT0xIHRyZWxsaXM9MiA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTAgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEyIGxvb2thaGVhZF90aHJlYWRzPTMgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MTYgYl9weXJhbWlkPTIgYl9hZGFwdD0yIGJfYmlhcz0wIGRpcmVjdD0zIHdlaWdodGI9MCBvcGVuX2dvcD0wIHdlaWdodHA9MCBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD02MCByYz1jcmYgbWJ0cmVlPTEgY3JmPTUxLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAADj2WIgQAGomKAAeunc99999999999999999999999999999999999999bvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrwAAAACUGaCRYJQASxgAAAAAlBnhCDgSgAljAAAAAIAZ4YE0UAEsYAAAAIAZ4YI0UAEsYAAAAIAZ4YM0UAEsYAAAAIAZ4YQ0UAEsYAAAAIAZ4YU0UAEsYAAAAIAZ4YY0UAEsYAAAAIAZ4Yc0UAEsYAAAAIAZ4YlqUAEsYAAAAIAZ4YpqUAEsYAAAAIAZ4YtqUAEsYAAAAIAZ4YxqUAEsYAAAAIAZ4Y1qUAEsYAAAAIAZ4Y5qUAEsYAAAAIAZ4Y9qUAEsYAAAAIAZ4ZBqUAEsYAAAAKQZoZ1eloigAljAAAAAlBniFy4OgAljAAAAAJAZ4pItFABLGAAAAACQGeKTLRQASxgAAAAAkBnilC0UAEsYAAAAAJAZ4pUtFABLGAAAAACQGeKWLRQASxgAAAAAkBnimGSUAEsYAAAAAJAZ4plklABLGAAAAACQGeKaZJQASxgAAAAAkBnim2SUAEsYAAAAAJAZ4pxklABLGA",
                    detectVideoAutoplayFeature: function (t) {
                        const n = e('<video muted playsinline crossorigin loop preload="auto">').attr("src", app.utils.stubVideo).css({ position: "absolute", top: -9999 }).appendTo("body"),
                            i = n[0].play();
                        if (void 0 === i || app.settings.isIE || app.settings.isEdge) n.remove(), t(!0);
                        else {
                            let e;
                            i.then(() => {
                                e = !0;
                            })
                                .catch(() => {
                                    e = !1;
                                })
                                .finally(() => {
                                    n.remove(), t(e);
                                });
                        }
                    },
                    createEmptyPromise: function () {
                        return new Promise(function (t) {
                            t();
                        });
                    },
                    easingFunctions: function (t, e, n, i) {
                        return {
                            linearTween: function (t, e, n, i) {
                                return (n * t) / i + e;
                            },
                            easeInQuad: function (t, e, n, i) {
                                return n * (t /= i) * t + e;
                            },
                            easeOutQuad: function (t, e, n, i) {
                                return -n * (t /= i) * (t - 2) + e;
                            },
                            easeInOutQuad: function (t, e, n, i) {
                                return (t /= i / 2) < 1 ? (n / 2) * t * t + e : (-n / 2) * (--t * (t - 2) - 1) + e;
                            },
                            easeInCubic: function (t, e, n, i) {
                                return n * (t /= i) * t * t + e;
                            },
                            easeOutCubic: function (t, e, n, i) {
                                return (t /= i), n * (--t * t * t + 1) + e;
                            },
                            easeInOutCubic: function (t, e, n, i) {
                                return (t /= i / 2) < 1 ? (n / 2) * t * t * t + e : (n / 2) * ((t -= 2) * t * t + 2) + e;
                            },
                            easeInQuart: function (t, e, n, i) {
                                return n * (t /= i) * t * t * t + e;
                            },
                            easeOutQuart: function (t, e, n, i) {
                                return (t /= i), -n * (--t * t * t * t - 1) + e;
                            },
                            easeInOutQuart: function (t, e, n, i) {
                                return (t /= i / 2) < 1 ? (n / 2) * t * t * t * t + e : (-n / 2) * ((t -= 2) * t * t * t - 2) + e;
                            },
                            easeInQuint: function (t, e, n, i) {
                                return n * (t /= i) * t * t * t * t + e;
                            },
                            easeOutQuint: function (t, e, n, i) {
                                return (t /= i), n * (--t * t * t * t * t + 1) + e;
                            },
                            easeInOutQuint: function (t, e, n, i) {
                                return (t /= i / 2) < 1 ? (n / 2) * t * t * t * t * t + e : (n / 2) * ((t -= 2) * t * t * t * t + 2) + e;
                            },
                            easeInSine: function (t, e, n, i) {
                                return -n * Math.cos((t / i) * (Math.PI / 2)) + n + e;
                            },
                            easeOutSine: function (t, e, n, i) {
                                return n * Math.sin((t / i) * (Math.PI / 2)) + e;
                            },
                            easeInOutSine: function (t, e, n, i) {
                                return (-n / 2) * (Math.cos((Math.PI * t) / i) - 1) + e;
                            },
                            easeInExpo: function (t, e, n, i) {
                                return n * Math.pow(2, 10 * (t / i - 1)) + e;
                            },
                            easeOutExpo: function (t, e, n, i) {
                                return n * (1 - Math.pow(2, (-10 * t) / i)) + e;
                            },
                            easeInOutExpo: function (t, e, n, i) {
                                return (t /= i / 2) < 1 ? (n / 2) * Math.pow(2, 10 * (t - 1)) + e : (t--, (n / 2) * (2 - Math.pow(2, -10 * t)) + e);
                            },
                            easeInCirc: function (t, e, n, i) {
                                return (t /= i), -n * (Math.sqrt(1 - t * t) - 1) + e;
                            },
                            easeOutCirc: function (t, e, n, i) {
                                return (t /= i), t--, n * Math.sqrt(1 - t * t) + e;
                            },
                            easeInOutCirc: function (t, e, n, i) {
                                return (t /= i / 2) < 1 ? (-n / 2) * (Math.sqrt(1 - t * t) - 1) + e : ((t -= 2), (n / 2) * (Math.sqrt(1 - t * t) + 1) + e);
                            },
                        }[i](n, t, e - t, 1);
                    },
                    splitMultilineToSeparateSpans: function (t) {
                        var n = t.$container[0].innerHTML,
                            i =
                                (t.$container.text().split(" "),
                                {
                                    $container: t.$container,
                                    className: t.className,
                                    cancel: function (e) {
                                        app.vent.off("resize-started", r), app.vent.off("resize-ended", o), e && (t.$container[0].innerHTML = n);
                                    },
                                }),
                            r = function () {
                                t.$container[0].innerHTML = n;
                            },
                            o = function () {
                                var n = new l(t.$container, { type: "lines", linesClass: t.className });
                                e(n.lines).css({
                                    display: t.autoWidth && (app.settings.isIE || app.settings.isEdge) ? "inline-block" : "block",
                                    width: app.settings.isFF ? "-moz-fit-content" : "fit-content",
                                    opacity: t.transparent && !i.animated ? "0" : "",
                                    "will-change": "opacity, transform",
                                });
                            };
                        return window.app.state.pageLoaded && o(), app.vent.on("resize-started", r), app.vent.on("resize-ended", o), i;
                    },
                    getScrollbarWidth: function () {
                        if (void 0 !== r) return r;
                        var t = document.createElement("div");
                        (t.style.visibility = "hidden"), (t.style.width = "100px"), (t.style.msOverflowStyle = "scrollbar"), document.body.appendChild(t);
                        var e = t.offsetWidth;
                        t.style.overflow = "scroll";
                        var n = document.createElement("div");
                        (n.style.width = "100%"), t.appendChild(n);
                        var i = n.offsetWidth;
                        return t.parentNode.removeChild(t), (r = e - i);
                    },
                    isElementInViewport: function (t, e) {
                        "function" == typeof i && t instanceof i && (t = t[0]), (e = e || 0);
                        var n = t.getBoundingClientRect();
                        return n.bottom + e > 0 && n.right > 0 && n.left < (window.innerWidth || document.documentElement.clientWidth) && n.top - e < (window.innerHeight || document.documentElement.clientHeight);
                    },
                    specialLettersAnimation: function (t) {
                        t[0].innerHTML;
                        var n = [];
                        t.css("opacity", 1),
                            t.find("span").each(function (t, i) {
                                var r = e(i).text().split(" ");
                                e(i).empty(),
                                    o.each(r, function (t, s) {
                                        s < r.length - 1 && (t += " ");
                                        var a = o.map(t.split(""), function (t) {
                                            var i = e("<em>").text(t);
                                            return n.push({ $letter: i, letter: t }), i;
                                        });
                                        e(i).append(e("<em>").append(a).css("white-space", "nowrap"));
                                    });
                            });
                        var i = [];
                        if (n.length > 1) for (var r = 0; r < n.length; r++) i.push(1 - app.utils.easingFunctions(0, 1, r / (n.length - 1), "easeOutQuart"));
                        else i.push(1);
                        i = o.shuffle(i);
                        var s = 0;
                        o.each(n, function (t, n) {
                            (t.width = t.$letter.width()), (t.color = t.$letter.css("color")), (t.done = !1), (s = Math.max(t.width, s)), t.$letter.css({ position: "relative", color: "transparent" });
                            var r = e("<em>").text(t.letter);
                            r.css({ position: "absolute", color: t.color, left: 0, top: 0 }), t.$letter.append(r), (t.endTime = +new Date() + 800 * i[n]), (t.$innerLetter = r);
                        });
                        var a = [];
                        o.each("!@#$%^&*€∆æµΩ≈åß∂ƒ©π∞¢£™œ∏¿Ç◊ÅŒØ".split(""), function (t, e) {
                            n[0].$innerLetter.text(t), a.push({ symbol: t, width: n[0].$innerLetter.width() });
                        }),
                            n[0].$innerLetter.text(n[0].letter),
                            (a = o.sortBy(a, function (t) {
                                return t.width;
                            }));
                        var l = {},
                            u = 0;
                        for (r = 0; r <= s; r++) {
                            for (; u < a.length && r >= a[u].width; ) u++;
                            --u < 0 && (u = 0), (l[r] = u);
                        }
                        var c = 0,
                            h = function () {
                                var t = +new Date(),
                                    e = !1;
                                o.each(n, function (n, i) {
                                    n.done ||
                                        " " == n.letter ||
                                        ((e = !0),
                                        Math.random() > Math.pow((1e3 * c) / 60 / 800, 0.5) && ((u = l[n.width]), n.$innerLetter.text(a[Math.floor(Math.random() * (u + 1))].symbol)),
                                        t >= n.endTime && ((n.done = !0), n.$innerLetter.text(n.letter)));
                                }),
                                    c++,
                                    e && requestAnimationFrame(h);
                            };
                        h();
                    },
                    animateNumber: function (t, e, n, i, r, o, s, a) {
                        var l = new RegExp("\\" + (a || "") + "+", "g"),
                            u = null == e ? parseFloat(t.text().replace(l, ""), 10) : e,
                            c = n - 0,
                            h = +new Date() + i,
                            p = h + r,
                            f = t.contents().last()[0];
                        u < c ? ((u = Math.ceil(u)), (c = Math.floor(c))) : ((u = Math.floor(u)), (c = Math.ceil(c))),
                            window.cancelAnimationFrame(t.data("animateNumberTimer")),
                            (function e() {
                                var i,
                                    l,
                                    d = Math.min(Math.max(+new Date(), h), p);
                                i = r > 0 ? (d - h) / r : 1;
                                (l = Math.round(app.utils.easingFunctions(u, c, i, s))), 1 == i && (l = n - 0);
                                o ? o(l) : (f.nodeValue = l.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a || "")), i < 1 && t.data("animateNumberTimer", window.requestAnimationFrame(e));
                            })();
                    },
                    animateTextByLines: function (t, e, n, i, r, o, l) {
                        var u = new s(),
                            c = t.$container.find("." + t.className);
                        return (
                            (o = o || 30),
                            (l = l || 0),
                            (t.animated = !0),
                            u.staggerFromTo(c, e / 1e3, { y: o, opacity: 0.01 }, { y: 0, opacity: 1, ease: a.easeOut }, n / 1e3, 0),
                            u.delay(l / 1e3),
                            u.add(function () {
                                c.css({ transform: "", opacity: "" }), r && t.cancel(!0), i && i();
                            }),
                            u.play(),
                            c.length
                        );
                    },
                    showAnimation: function (t) {
                        t.css({ "will-change": "opacity, transform" });
                        var e = new s({ paused: !0 });
                        return (
                            e.staggerFromTo(t.toArray(), app.settings.animationDuration / 1e3, { y: 30, opacity: 0.01 }, { y: 0, opacity: 1, ease: a.easeOut }, app.settings.animationDelay / 1e3, 0),
                            e.add(function () {
                                t.css({ transform: "", opacity: "" });
                            }),
                            e
                        );
                    },
                    accordeonAnimation: function (t, n, i, r) {
                        var o = new s(),
                            l = new s(),
                            u = n.$container;
                        n.animated = !0;
                        var c = (function () {
                                var e = [];
                                return (
                                    u.find("." + r).each(function (n, i) {
                                        "show" == t ? e.push(i) : e.unshift(i);
                                    }),
                                    e
                                );
                            })(),
                            h = 0;
                        i.children().each(function () {
                            h += e(this).outerHeight(!0);
                        }),
                            u.data("initiated")
                                ? (u.data("tl").stop(),
                                  u.data("tlWrapper").stop(),
                                  "show" == t
                                      ? (o.staggerTo(c, 0.67, { y: 0, opacity: 1, ease: a.easeOut }, 0.03, 0), l.to(i, 0.67, { height: h, ease: a.easeOut }, 0))
                                      : (o.staggerTo(c, 0.5, { y: -30, ease: a.easeOut }, 0.01, 0), o.staggerTo(c, 0.33, { opacity: 0, ease: a.easeOut }, 0.01, 0), l.to(i, 0.67, { height: 0, ease: a.easeOut }, 0)))
                                : (u.data("initiated", !0),
                                  "show" == t
                                      ? (o.staggerFromTo(c, 0.67, { y: 30, opacity: 0 }, { y: 0, opacity: 1, ease: a.easeOut }, 0.03, 0), l.fromTo(i, 0.67, { height: 0 }, { height: h, ease: a.easeOut }, 0))
                                      : (o.staggerFromTo(c, 0.5, { y: 0 }, { y: -30, ease: a.easeOut }, 0.01, 0),
                                        o.staggerFromTo(c, 0.33, { opacity: 1 }, { opacity: 0, ease: a.easeOut }, 0.01, 0),
                                        l.fromTo(i, 0.67, { height: h }, { height: 0, ease: a.easeOut }, 0))),
                            u.data("tl", o),
                            u.data("tlWrapper", l),
                            l.add(function () {
                                app.vent.trigger("page-height-changed");
                            }),
                            o.play(),
                            l.play();
                    },
                });
        }.call(this, n(2), n(2)));
    },
    function (t, e, n) {
        (function (e) {
            var i = n(1),
                r = n(3);
            t.exports = r.extend({
                type: "",
                title: void 0,
                initialize: function (t) {
                    r.prototype.initialize.call(this, t),
                        this.options.view &&
                            ((this.onResize = this.onResize.bind(this)),
                            (this.onScroll = this.onScroll.bind(this)),
                            (this.resourcesAndVideoCheckDone = this.resourcesAndVideoCheckDone.bind(this)),
                            (this.rootNode = document.documentElement || document.body.parentNode || document.body),
                            (this.lastScrollEvent = +new Date()),
                            (this.scrollItems = []),
                            e("[data-scroll]").each(
                                function (t, n) {
                                    this.scrollItems.push({
                                        el: n,
                                        $el: e(n),
                                        offset: (e(n).attr("data-scroll-offset") - 0) * (app.settings.isPhone ? 1 : 2),
                                        screenPosition: -1,
                                        listeners: { "screen-position": [], "screen-bottom": [], "screen-enter": [], "screen-leave": [] },
                                    }),
                                        e(n).data("listeners", this.scrollItems[this.scrollItems.length - 1].listeners);
                                }.bind(this)
                            ),
                            (this.scrollSections = []),
                            e("[data-theme]").each(
                                function (t, n) {
                                    this.scrollSections.push({ el: n, $el: e(n), theme: e(n).attr("data-theme") });
                                }.bind(this)
                            ),
                            (this.lazyImgs = []),
                            e("[data-lazy]").each(
                                function (t, n) {
                                    this.lazyImgs.push({ el: n, $el: e(n), src: e(n).attr("data-src"), srcset: e(n).attr("data-srcset"), sizes: e(n).attr("data-sizes") });
                                }.bind(this)
                            ),
                            app.vent.on("page-height-changed", this.onResize),
                            this.resourcesAndVideoCheckDone());
                },
                setTitle: function (t) {
                    (t = t || this.title) && (document.title = t ? e("<div>" + t + "</div>").text() : "");
                },
                $parent: function () {
                    return app.els.$content;
                },
                viewsRegistration: function () {
                    r.prototype.viewsRegistration.call(this);
                },
                activate: function (t) {
                    return this.setTitle(), r.prototype.activate.call(this, t);
                },
                deactivate: function (t) {
                    return e(window).off("resize.page"), window.removeEventListener("scroll", this.onScroll), r.prototype.deactivate.call(this, t);
                },
                resourcesAndVideoCheckDone: function () {
                    var t = i.debounce(
                            function () {
                                app.vent.trigger("resize-started");
                            },
                            500,
                            !0
                        ),
                        n = i.debounce(function () {
                            app.vent.trigger("resize-ended");
                        }, 500),
                        r = i.throttle(this.onResize, 133.3333328);
                    app.vent.trigger("resize-ended"),
                        e(".Content").css({ visibility: "visible" }),
                        e("body").on("click", function (t) {
                            app.vent.trigger("document-click", t.target);
                        }),
                        window.app.vent.on("fonts-loaded", function () {
                            console.log("recalc on font load"), app.vent.trigger("resize-started"), app.vent.trigger("resize-ended");
                        }),
                        setTimeout(
                            function () {
                                e(window).scrollTop(0), (window.app.state.pageLoaded = !0), app.vent.trigger("page-loaded");
                                var i = window.innerWidth;
                                e(window).on("resize.page", function () {
                                    var e = window.innerWidth;
                                    e != i && (t(), n(), r()), (i = e);
                                }),
                                    window.addEventListener("scroll", this.onScroll),
                                    r(),
                                    e(window).on("load", r);
                            }.bind(this),
                            app.settings.isDesktop ? 200 : 1e3
                        );
                },
                updateItemsPos: function () {
                    this.scrollItems.forEach(
                        function (t, e) {
                            (t.height = t.$el.height()), (t.top = t.$el.offset().top);
                        }.bind(this)
                    );
                },
                updateSectionsPos: function () {
                    this.scrollSections.forEach(
                        function (t, e) {
                            (t.height = t.$el.height()), (t.top = t.$el.offset().top);
                        }.bind(this)
                    );
                },
                updateLazyPos: function () {
                    this.lazyImgs.forEach(
                        function (t, e) {
                            (t.height = t.$el.height()), (t.top = t.$el.offset().top);
                        }.bind(this)
                    );
                },
                onResize: function () {
                    this.updateItemsPos(), this.updateSectionsPos(), this.updateLazyPos(), (this.windowHeight = window.innerHeight), this.onScroll();
                },
                onScroll: function (t, e) {
                    var n = window.pageYOffset,
                        i = this,
                        r = +new Date();
                    this.lastScrollEvent + 500 < r && (this.updateItemsPos(), this.updateSectionsPos(), this.updateLazyPos()), (this.lastScrollEvent = r);
                    var o = function (t, e, n) {
                        for (var i = t.listeners[e], r = 0; r < i.length; r++) i[r]({}, n);
                    };
                    i.scrollItems.forEach(function (t, e) {
                        var r = (n - (t.top - i.windowHeight + t.offset)) / (t.height + i.windowHeight - t.offset),
                            s = Math.min(Math.max(r, 0), 1),
                            a = n + i.windowHeight - (t.top + t.height);
                        t.screenPositionConstrained !== s && (o(t, "screen-position", { $el: t.$el, screenPosition: s, height: t.height }), (t.screenPositionConstrained = s)),
                            o(t, "screen-bottom", { $el: t.$el, screenBottom: a, height: t.height }),
                            ((t.screenPosition < 0 && r >= 0) || (t.screenPosition > 1 && r <= 1)) && "enter" !== t["data-scroll-state"] && (o(t, "screen-enter", { $el: t.$el }), (t["data-scroll-state"] = "enter")),
                            ((t.screenPosition >= 0 && r < 0) || (t.screenPosition <= 1 && r > 1)) && "leave" !== t["data-scroll-state"] && (o(t, "screen-leave", { $el: t.$el }), (t["data-scroll-state"] = "leave")),
                            (t.screenPosition = r);
                    });
                    var s = i.scrollSections[0].theme,
                        a = -99999999;
                    return (
                        i.scrollSections.forEach(function (t, e) {
                            var i = t.top - n - 78;
                            i <= 0 && i > a && ((s = t.theme), (a = i));
                        }),
                        s != i.navbarTheme && ((i.navbarTheme = s), "dark" == s ? app.views.topNav && app.views.topNav.setDarkMode() : app.views.topNav && app.views.topNav.setLightMode()),
                        app.views.topNav && app.views.topNav.onScroll(n),
                        i.lazyImgs.forEach(function (t, e) {
                            t.loaded || (t.top <= n + 2 * i.windowHeight && ((t.loaded = !0), t.sizes && t.el.setAttribute("sizes", t.sizes), t.srcset && t.el.setAttribute("srcset", t.srcset), t.src && t.el.setAttribute("src", t.src)));
                        }),
                        n
                    );
                },
            });
        }.call(this, n(2)));
    },
    function (t, e, n) {
        "use strict";
        (function (t) {
            var i = n(10),
                r = setTimeout;
            function o(t) {
                return Boolean(t && void 0 !== t.length);
            }
            function s() {}
            function a(t) {
                if (!(this instanceof a)) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof t) throw new TypeError("not a function");
                (this._state = 0), (this._handled = !1), (this._value = void 0), (this._deferreds = []), f(t, this);
            }
            function l(t, e) {
                for (; 3 === t._state; ) t = t._value;
                0 !== t._state
                    ? ((t._handled = !0),
                      a._immediateFn(function () {
                          var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                          if (null !== n) {
                              var i;
                              try {
                                  i = n(t._value);
                              } catch (t) {
                                  return void c(e.promise, t);
                              }
                              u(e.promise, i);
                          } else (1 === t._state ? u : c)(e.promise, t._value);
                      }))
                    : t._deferreds.push(e);
            }
            function u(t, e) {
                try {
                    if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var n = e.then;
                        if (e instanceof a) return (t._state = 3), (t._value = e), void h(t);
                        if ("function" == typeof n)
                            return void f(
                                ((i = n),
                                (r = e),
                                function () {
                                    i.apply(r, arguments);
                                }),
                                t
                            );
                    }
                    (t._state = 1), (t._value = e), h(t);
                } catch (e) {
                    c(t, e);
                }
                var i, r;
            }
            function c(t, e) {
                (t._state = 2), (t._value = e), h(t);
            }
            function h(t) {
                2 === t._state &&
                    0 === t._deferreds.length &&
                    a._immediateFn(function () {
                        t._handled || a._unhandledRejectionFn(t._value);
                    });
                for (var e = 0, n = t._deferreds.length; e < n; e++) l(t, t._deferreds[e]);
                t._deferreds = null;
            }
            function p(t, e, n) {
                (this.onFulfilled = "function" == typeof t ? t : null), (this.onRejected = "function" == typeof e ? e : null), (this.promise = n);
            }
            function f(t, e) {
                var n = !1;
                try {
                    t(
                        function (t) {
                            n || ((n = !0), u(e, t));
                        },
                        function (t) {
                            n || ((n = !0), c(e, t));
                        }
                    );
                } catch (t) {
                    if (n) return;
                    (n = !0), c(e, t);
                }
            }
            (a.prototype.catch = function (t) {
                return this.then(null, t);
            }),
                (a.prototype.then = function (t, e) {
                    var n = new this.constructor(s);
                    return l(this, new p(t, e, n)), n;
                }),
                (a.prototype.finally = i.a),
                (a.all = function (t) {
                    return new a(function (e, n) {
                        if (!o(t)) return n(new TypeError("Promise.all accepts an array"));
                        var i = Array.prototype.slice.call(t);
                        if (0 === i.length) return e([]);
                        var r = i.length;
                        function s(t, o) {
                            try {
                                if (o && ("object" == typeof o || "function" == typeof o)) {
                                    var a = o.then;
                                    if ("function" == typeof a)
                                        return void a.call(
                                            o,
                                            function (e) {
                                                s(t, e);
                                            },
                                            n
                                        );
                                }
                                (i[t] = o), 0 == --r && e(i);
                            } catch (t) {
                                n(t);
                            }
                        }
                        for (var a = 0; a < i.length; a++) s(a, i[a]);
                    });
                }),
                (a.resolve = function (t) {
                    return t && "object" == typeof t && t.constructor === a
                        ? t
                        : new a(function (e) {
                              e(t);
                          });
                }),
                (a.reject = function (t) {
                    return new a(function (e, n) {
                        n(t);
                    });
                }),
                (a.race = function (t) {
                    return new a(function (e, n) {
                        if (!o(t)) return n(new TypeError("Promise.race accepts an array"));
                        for (var i = 0, r = t.length; i < r; i++) a.resolve(t[i]).then(e, n);
                    });
                }),
                (a._immediateFn =
                    ("function" == typeof t &&
                        function (e) {
                            t(e);
                        }) ||
                    function (t) {
                        r(t, 0);
                    }),
                (a._unhandledRejectionFn = function (t) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
                }),
                (e.a = a);
        }.call(this, n(17).setImmediate));
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        n(16);
        var i = n(2);
        (window.jQuery = i), (window.$ = i);
        var r = n(6),
            o = n(1),
            s = n(20),
            a = n(12),
            l = n(24),
            u = n(85),
            c = n(86);
        n(87);
        var h = n(89),
            p = n(93);
        function f(t, e) {
            e || (e = window.location.href), (t = t.replace(/[\[\]]/g, "\\$&"));
            var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
            return n ? (n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "") : null;
        }
        n(95), n(96), n(97), n(98), app.settings.isDesktop || c.attach(document.body);
        var d = f("exclude");
        d &&
            d.split(",").forEach(function (t) {
                var e = i("." + t),
                    n = e.height();
                i("<div>").height(n).insertAfter(e), e.remove();
            });
        (app.configure = s.configure), app.configure(), (window.app.vent = o.extend({}, r.Events)), (window.app.state = {}), (window.app.cache = {}), (window.app.utils = a);
        var m = new u("Graphic-webNormal");
        if (
            (Promise.all([m.load()]).then(
                function () {
                    console.log("Fonts loaded"), (window.app.state.fontsLoaded = !0), window.app.vent.trigger("fonts-loaded");
                },
                function () {
                    console.log("Fonts is not available");
                }
            ),
            (window.app.state = {}),
            (window.app.els = { $window: i(window), $body: i("body"), $htmlBody: i("html,body"), $content: i(".Content-body") }),
            i.get("/static/svg/front/symbol/svg/sprite.symbol.svg", function (t) {
                var e = document.createElement("div");
                (e.style.display = "none"), (e.innerHTML = new XMLSerializer().serializeToString(t.documentElement)), document.body.insertBefore(e, document.body.childNodes[0]);
            }),
            (app.settings.iOSVersion = 0),
            /iP(hone|od|ad)/.test(navigator.platform))
        ) {
            var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
            app.settings.iOSVersion = parseInt(v[1], 10);
        }
        (app.settings.ipadModel = (function () {
            var t = document.createElement("canvas");
            if (t) {
                var e = t.getContext("webgl") || t.getContext("experimental-webgl");
                if (e) {
                    var n = e.getExtension("WEBGL_debug_renderer_info");
                    if (n) var i = e.getParameter(n.UNMASKED_RENDERER_WEBGL);
                }
            }
            if (window.screen.height / window.screen.width == 1024 / 768)
                if (1 === window.devicePixelRatio)
                    switch (i) {
                        default:
                            return "iPad, iPad 2, iPad Mini";
                        case "PowerVR SGX 535":
                            return "iPad";
                        case "PowerVR SGX 543":
                            return "iPad 2 or Mini";
                    }
                else
                    switch (i) {
                        default:
                            return "iPad 3, 4, 5, Mini 2, Mini 3, Mini 4, Air, Air 2";
                        case "PowerVR SGX 543":
                            return "iPad 3";
                        case "PowerVR SGX 554":
                            return "iPad 4";
                        case "Apple A7 GPU":
                            return "iPad Air, Mini 2, Mini 3";
                        case "Apple A8X GPU":
                            return "iPad Air 2";
                        case "Apple A8 GPU":
                            return "iPad Mini 4";
                        case "Apple A9 GPU":
                            return "iPad 5, Pro 9.7";
                    }
            else {
                if (window.screen.height / window.screen.width == 1112 / 834) return "iPad Pro 10.5";
                if (window.screen.height / window.screen.width != 1366 / 1024) return "Not an iPad";
                switch (i) {
                    default:
                        return "iPad Pro 12.9, Pro 12.9 (2nd Gen)";
                    case "Apple A10X GPU":
                        return "iPad Pro 12.9 (2nd Gen)";
                    case "Apple A9 GPU":
                        return "iPad Pro 12.9";
                }
            }
        })()),
            (app.settings.lazyVideo = "true" == f("lazyVideo")),
            (app.router = new l()),
            app.els.$body.on("click", ".u-Route", function (t) {
                if (!app.els.$body.hasClass("Page404")) {
                    r.history.getFragment();
                    var e = i(t.target).closest("a").attr("href"),
                        n = i(t.currentTarget).attr("href") || e;
                    t.preventDefault(), r.history.navigate(n, { trigger: "true" });
                }
            }),
            app.utils.detectVideoAutoplayFeature(function (t) {
                (app.settings.canAutoplay = t), app.router.start(), app.settings.isIE && objectFitImages();
            }),
            (app.views = {}),
            i(".TopNav").length && (app.views.topNav = new h({ el: i(".TopNav") })),
            i(".Footer").length && (app.views.footer = new p({ el: i(".Footer") })),
            app.settings.isDesktop &&
                setTimeout(function () {
                    i("*").off("touchstart touchmove touchend");
                }, 100);
    },
    function (t, e, n) {
        "use strict";
        (function (t) {
            var e = n(14),
                i = n(10),
                r = (function () {
                    if ("undefined" != typeof self) return self;
                    if ("undefined" != typeof window) return window;
                    if (void 0 !== t) return t;
                    throw new Error("unable to locate global object");
                })();
            "Promise" in r ? r.Promise.prototype.finally || (r.Promise.prototype.finally = i.a) : (r.Promise = e.a);
        }.call(this, n(4)));
    },
    function (t, e, n) {
        (function (t) {
            var i = (void 0 !== t && t) || ("undefined" != typeof self && self) || window,
                r = Function.prototype.apply;
            function o(t, e) {
                (this._id = t), (this._clearFn = e);
            }
            (e.setTimeout = function () {
                return new o(r.call(setTimeout, i, arguments), clearTimeout);
            }),
                (e.setInterval = function () {
                    return new o(r.call(setInterval, i, arguments), clearInterval);
                }),
                (e.clearTimeout = e.clearInterval = function (t) {
                    t && t.close();
                }),
                (o.prototype.unref = o.prototype.ref = function () {}),
                (o.prototype.close = function () {
                    this._clearFn.call(i, this._id);
                }),
                (e.enroll = function (t, e) {
                    clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
                }),
                (e.unenroll = function (t) {
                    clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
                }),
                (e._unrefActive = e.active = function (t) {
                    clearTimeout(t._idleTimeoutId);
                    var e = t._idleTimeout;
                    e >= 0 &&
                        (t._idleTimeoutId = setTimeout(function () {
                            t._onTimeout && t._onTimeout();
                        }, e));
                }),
                n(18),
                (e.setImmediate = ("undefined" != typeof self && self.setImmediate) || (void 0 !== t && t.setImmediate) || (this && this.setImmediate)),
                (e.clearImmediate = ("undefined" != typeof self && self.clearImmediate) || (void 0 !== t && t.clearImmediate) || (this && this.clearImmediate));
        }.call(this, n(4)));
    },
    function (t, e, n) {
        (function (t, e) {
            !(function (t, n) {
                "use strict";
                if (!t.setImmediate) {
                    var i,
                        r,
                        o,
                        s,
                        a,
                        l = 1,
                        u = {},
                        c = !1,
                        h = t.document,
                        p = Object.getPrototypeOf && Object.getPrototypeOf(t);
                    (p = p && p.setTimeout ? p : t),
                        "[object process]" === {}.toString.call(t.process)
                            ? (i = function (t) {
                                  e.nextTick(function () {
                                      d(t);
                                  });
                              })
                            : !(function () {
                                  if (t.postMessage && !t.importScripts) {
                                      var e = !0,
                                          n = t.onmessage;
                                      return (
                                          (t.onmessage = function () {
                                              e = !1;
                                          }),
                                          t.postMessage("", "*"),
                                          (t.onmessage = n),
                                          e
                                      );
                                  }
                              })()
                            ? t.MessageChannel
                                ? (((o = new MessageChannel()).port1.onmessage = function (t) {
                                      d(t.data);
                                  }),
                                  (i = function (t) {
                                      o.port2.postMessage(t);
                                  }))
                                : h && "onreadystatechange" in h.createElement("script")
                                ? ((r = h.documentElement),
                                  (i = function (t) {
                                      var e = h.createElement("script");
                                      (e.onreadystatechange = function () {
                                          d(t), (e.onreadystatechange = null), r.removeChild(e), (e = null);
                                      }),
                                          r.appendChild(e);
                                  }))
                                : (i = function (t) {
                                      setTimeout(d, 0, t);
                                  })
                            : ((s = "setImmediate$" + Math.random() + "$"),
                              (a = function (e) {
                                  e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(s) && d(+e.data.slice(s.length));
                              }),
                              t.addEventListener ? t.addEventListener("message", a, !1) : t.attachEvent("onmessage", a),
                              (i = function (e) {
                                  t.postMessage(s + e, "*");
                              })),
                        (p.setImmediate = function (t) {
                            "function" != typeof t && (t = new Function("" + t));
                            for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                            var r = { callback: t, args: e };
                            return (u[l] = r), i(l), l++;
                        }),
                        (p.clearImmediate = f);
                }
                function f(t) {
                    delete u[t];
                }
                function d(t) {
                    if (c) setTimeout(d, 0, t);
                    else {
                        var e = u[t];
                        if (e) {
                            c = !0;
                            try {
                                !(function (t) {
                                    var e = t.callback,
                                        n = t.args;
                                    switch (n.length) {
                                        case 0:
                                            e();
                                            break;
                                        case 1:
                                            e(n[0]);
                                            break;
                                        case 2:
                                            e(n[0], n[1]);
                                            break;
                                        case 3:
                                            e(n[0], n[1], n[2]);
                                            break;
                                        default:
                                            e.apply(void 0, n);
                                    }
                                })(e);
                            } finally {
                                f(t), (c = !1);
                            }
                        }
                    }
                }
            })("undefined" == typeof self ? (void 0 === t ? this : t) : self);
        }.call(this, n(4), n(11)));
    },
    function (t, e) {
        t.exports = function (t) {
            return (
                t.webpackPolyfill ||
                    ((t.deprecate = function () {}),
                    (t.paths = []),
                    t.children || (t.children = []),
                    Object.defineProperty(t, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return t.l;
                        },
                    }),
                    Object.defineProperty(t, "id", {
                        enumerable: !0,
                        get: function () {
                            return t.i;
                        },
                    }),
                    (t.webpackPolyfill = 1)),
                t
            );
        };
    },
    function (t, e, n) {
        (function (e) {
            var i = n(1),
                r = n(21);
            t.exports = {
                configure: function () {
                    e.ajaxSetup({
                        beforeSend: function (t, e) {
                            var n, i;
                            (i = e.type), /^(GET|HEAD|OPTIONS|TRACE)$/.test(i) || this.crossDomain || ((n = r.get("csrftoken")), t.setRequestHeader("X-CSRFToken", n));
                        },
                    }),
                        (Backbone.Model.prototype.toJSON = function () {
                            var t,
                                e = i.clone(this.attributes);
                            for (t in e) (e[t] instanceof Backbone.Model || e[t] instanceof Backbone.Collection) && (e[t] = e[t].toJSON());
                            return e;
                        });
                },
            };
        }.call(this, n(2)));
    },
    function (t, e, n) {
        var i, r;
        /*!
         * JavaScript Cookie v2.2.1
         * https://github.com/js-cookie/js-cookie
         *
         * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
         * Released under the MIT license
         */ !(function (o) {
            if ((void 0 === (r = "function" == typeof (i = o) ? i.call(e, n, e, t) : i) || (t.exports = r), !0, (t.exports = o()), !!0)) {
                var s = window.Cookies,
                    a = (window.Cookies = o());
                a.noConflict = function () {
                    return (window.Cookies = s), a;
                };
            }
        })(function () {
            function t() {
                for (var t = 0, e = {}; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) e[i] = n[i];
                }
                return e;
            }
            function e(t) {
                return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
            }
            return (function n(i) {
                function r() {}
                function o(e, n, o) {
                    if ("undefined" != typeof document) {
                        "number" == typeof (o = t({ path: "/" }, r.defaults, o)).expires && (o.expires = new Date(1 * new Date() + 864e5 * o.expires)), (o.expires = o.expires ? o.expires.toUTCString() : "");
                        try {
                            var s = JSON.stringify(n);
                            /^[\{\[]/.test(s) && (n = s);
                        } catch (t) {}
                        (n = i.write ? i.write(n, e) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent)),
                            (e = encodeURIComponent(String(e))
                                .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                                .replace(/[\(\)]/g, escape));
                        var a = "";
                        for (var l in o) o[l] && ((a += "; " + l), !0 !== o[l] && (a += "=" + o[l].split(";")[0]));
                        return (document.cookie = e + "=" + n + a);
                    }
                }
                function s(t, n) {
                    if ("undefined" != typeof document) {
                        for (var r = {}, o = document.cookie ? document.cookie.split("; ") : [], s = 0; s < o.length; s++) {
                            var a = o[s].split("="),
                                l = a.slice(1).join("=");
                            n || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                            try {
                                var u = e(a[0]);
                                if (((l = (i.read || i)(l, u) || e(l)), n))
                                    try {
                                        l = JSON.parse(l);
                                    } catch (t) {}
                                if (((r[u] = l), t === u)) break;
                            } catch (t) {}
                        }
                        return t ? r[t] : r;
                    }
                }
                return (
                    (r.set = o),
                    (r.get = function (t) {
                        return s(t, !1);
                    }),
                    (r.getJSON = function (t) {
                        return s(t, !0);
                    }),
                    (r.remove = function (e, n) {
                        o(e, "", t(n, { expires: -1 }));
                    }),
                    (r.defaults = {}),
                    (r.withConverter = n),
                    r
                );
            })(function () {});
        });
    },
    function (t, e) {
        t.exports = function (t) {
            if (!t.webpackPolyfill) {
                var e = Object.create(t);
                e.children || (e.children = []),
                    Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return e.l;
                        },
                    }),
                    Object.defineProperty(e, "id", {
                        enumerable: !0,
                        get: function () {
                            return e.i;
                        },
                    }),
                    Object.defineProperty(e, "exports", { enumerable: !0 }),
                    (e.webpackPolyfill = 1);
            }
            return e;
        };
    },
    function (t, e, n) {
        (function (n) {
            var i,
                r,
                o,
                s = t.exports && void 0 !== n ? n : this || window;
            /*!
             * VERSION: 0.7.0
             * DATE: 2019-02-07
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
             * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
             * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
             * This work is subject to the software agreement that was issued with your membership.
             *
             * @author: Jack Doyle, jack@greensock.com
             */ !(function (t) {
                "use strict";
                var e = t.GreenSockGlobals || t,
                    n = (function (t) {
                        var n,
                            i = t.split("."),
                            r = e;
                        for (n = 0; n < i.length; n++) r[i[n]] = r = r[i[n]] || {};
                        return r;
                    })("com.greensock.utils"),
                    i = function (t) {
                        var e = t.nodeType,
                            n = "";
                        if (1 === e || 9 === e || 11 === e) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += i(t);
                        } else if (3 === e || 4 === e) return t.nodeValue;
                        return n;
                    },
                    r = s.document || {},
                    o = void 0 !== t ? t : r.defaultView || { getComputedStyle: function () {} },
                    a = function (t) {
                        return o.getComputedStyle(t);
                    },
                    l = /([A-Z])/g,
                    u = function (t, e, n, i) {
                        var r;
                        return (n = n || a(t)) ? (r = (t = n.getPropertyValue(e.replace(l, "-$1").toLowerCase())) || n.length ? t : n[e]) : t.currentStyle && (r = (n = t.currentStyle)[e]), i ? r : parseInt(r, 10) || 0;
                    },
                    c = function (t) {
                        return !!(t.length && t[0] && ((t[0].nodeType && t[0].style && !t.nodeType) || (t[0].length && t[0][0])));
                    },
                    h = function (t, e) {
                        for (var n, i = e.length; --i > -1; ) if (((n = e[i]), t.substr(0, n.length) === n)) return n.length;
                    },
                    p = /(?:\r|\n|\t\t)/g,
                    f = /(?:\s\s+)/g,
                    d = 127462,
                    m = 127487,
                    v = function (t) {
                        return ((t.charCodeAt(0) - 55296) << 10) + (t.charCodeAt(1) - 56320) + 65536;
                    },
                    g = " style='position:relative;display:inline-block;" + (r.all && !r.addEventListener ? "*display:inline;*zoom:1;'" : "'"),
                    y = function (t, e) {
                        var n = -1 !== (t = t || "").indexOf("++"),
                            i = 1;
                        return (
                            n && (t = t.split("++").join("")),
                            function () {
                                return "<" + e + g + (t ? " class='" + t + (n ? i++ : "") + "'>" : ">");
                            }
                        );
                    },
                    w = (n.SplitText = e.SplitText = function (t, e) {
                        if (("string" == typeof t && (t = w.selector(t)), !t)) throw "cannot split a null element.";
                        (this.elements = c(t)
                            ? (function (t) {
                                  var e,
                                      n,
                                      i,
                                      r = [],
                                      o = t.length;
                                  for (e = 0; o > e; e++)
                                      if (((n = t[e]), c(n))) for (i = n.length, i = 0; i < n.length; i++) r.push(n[i]);
                                      else r.push(n);
                                  return r;
                              })(t)
                            : [t]),
                            (this.chars = []),
                            (this.words = []),
                            (this.lines = []),
                            (this._originals = []),
                            (this.vars = e || {}),
                            this.split(e);
                    }),
                    A = function (t, e, n) {
                        var i = t.nodeType;
                        if (1 === i || 9 === i || 11 === i) for (t = t.firstChild; t; t = t.nextSibling) A(t, e, n);
                        else (3 === i || 4 === i) && (t.nodeValue = t.nodeValue.split(e).join(n));
                    },
                    b = function (t, e) {
                        for (var n = e.length; --n > -1; ) t.push(e[n]);
                    },
                    x = function (t) {
                        var e,
                            n = [],
                            i = t.length;
                        for (e = 0; e !== i; n.push(t[e++]));
                        return n;
                    },
                    _ = function (t, e, n) {
                        for (var i; t && t !== e; ) {
                            if ((i = t._next || t.nextSibling)) return i.textContent.charAt(0) === n;
                            t = t.parentNode || t._parent;
                        }
                        return !1;
                    },
                    T = function (t) {
                        var e,
                            n,
                            i = x(t.childNodes),
                            r = i.length;
                        for (e = 0; r > e; e++)
                            (n = i[e])._isSplit
                                ? T(n)
                                : (e && 3 === n.previousSibling.nodeType ? (n.previousSibling.nodeValue += 3 === n.nodeType ? n.nodeValue : n.firstChild.nodeValue) : 3 !== n.nodeType && t.insertBefore(n.firstChild, n), t.removeChild(n));
                    },
                    C = function (t, e, n, i, o, s, l) {
                        var c,
                            h,
                            p,
                            f,
                            d,
                            m,
                            v,
                            g,
                            y,
                            w,
                            x,
                            C,
                            S = a(t),
                            P = u(t, "paddingLeft", S),
                            k = -999,
                            E = u(t, "borderBottomWidth", S) + u(t, "borderTopWidth", S),
                            M = u(t, "borderLeftWidth", S) + u(t, "borderRightWidth", S),
                            O = u(t, "paddingTop", S) + u(t, "paddingBottom", S),
                            I = u(t, "paddingLeft", S) + u(t, "paddingRight", S),
                            $ = 0.2 * u(t, "fontSize"),
                            D = u(t, "textAlign", S, !0),
                            L = [],
                            N = [],
                            R = [],
                            j = e.wordDelimiter || " ",
                            F = e.tag ? e.tag : e.span ? "span" : "div",
                            z = e.type || e.split || "chars,words,lines",
                            H = o && -1 !== z.indexOf("lines") ? [] : null,
                            B = -1 !== z.indexOf("words"),
                            W = -1 !== z.indexOf("chars"),
                            q = "absolute" === e.position || !0 === e.absolute,
                            V = e.linesClass,
                            Y = -1 !== (V || "").indexOf("++"),
                            Q = [];
                        for (Y && (V = V.split("++").join("")), p = (h = t.getElementsByTagName("*")).length, d = [], c = 0; p > c; c++) d[c] = h[c];
                        if (H || q)
                            for (c = 0; p > c; c++)
                                ((m = (f = d[c]).parentNode === t) || q || (W && !B)) &&
                                    ((C = f.offsetTop),
                                    H && m && Math.abs(C - k) > $ && ("BR" !== f.nodeName || 0 === c) && ((v = []), H.push(v), (k = C)),
                                    q && ((f._x = f.offsetLeft), (f._y = C), (f._w = f.offsetWidth), (f._h = f.offsetHeight)),
                                    H &&
                                        (((f._isSplit && m) || (!W && m) || (B && m) || (!B && f.parentNode.parentNode === t && !f.parentNode._isSplit)) && (v.push(f), (f._x -= P), _(f, t, j) && (f._wordEnd = !0)),
                                        "BR" === f.nodeName && ((f.nextSibling && "BR" === f.nextSibling.nodeName) || 0 === c) && H.push([])));
                        for (c = 0; p > c; c++)
                            (m = (f = d[c]).parentNode === t),
                                "BR" !== f.nodeName
                                    ? (q &&
                                          ((y = f.style),
                                          B || m || ((f._x += f.parentNode._x), (f._y += f.parentNode._y)),
                                          (y.left = f._x + "px"),
                                          (y.top = f._y + "px"),
                                          (y.position = "absolute"),
                                          (y.display = "block"),
                                          (y.width = f._w + 1 + "px"),
                                          (y.height = f._h + "px")),
                                      !B && W
                                          ? f._isSplit
                                              ? ((f._next = f.nextSibling), f.parentNode.appendChild(f))
                                              : f.parentNode._isSplit
                                              ? ((f._parent = f.parentNode),
                                                !f.previousSibling && f.firstChild && (f.firstChild._isFirst = !0),
                                                f.nextSibling && " " === f.nextSibling.textContent && !f.nextSibling.nextSibling && Q.push(f.nextSibling),
                                                (f._next = f.nextSibling && f.nextSibling._isFirst ? null : f.nextSibling),
                                                f.parentNode.removeChild(f),
                                                d.splice(c--, 1),
                                                p--)
                                              : m ||
                                                ((C = !f.nextSibling && _(f.parentNode, t, j)),
                                                f.parentNode._parent && f.parentNode._parent.appendChild(f),
                                                C && f.parentNode.appendChild(r.createTextNode(" ")),
                                                "span" === F && (f.style.display = "inline"),
                                                L.push(f))
                                          : f.parentNode._isSplit && !f._isSplit && "" !== f.innerHTML
                                          ? N.push(f)
                                          : W && !f._isSplit && ("span" === F && (f.style.display = "inline"), L.push(f)))
                                    : H || q
                                    ? (f.parentNode && f.parentNode.removeChild(f), d.splice(c--, 1), p--)
                                    : B || t.appendChild(f);
                        for (c = Q.length; --c > -1; ) Q[c].parentNode.removeChild(Q[c]);
                        if (H) {
                            for (
                                q && ((w = r.createElement(F)), t.appendChild(w), (x = w.offsetWidth + "px"), (C = w.offsetParent === t ? 0 : t.offsetLeft), t.removeChild(w)), y = t.style.cssText, t.style.cssText = "display:none;";
                                t.firstChild;

                            )
                                t.removeChild(t.firstChild);
                            for (g = " " === j && (!q || (!B && !W)), c = 0; c < H.length; c++) {
                                for (
                                    v = H[c],
                                        (w = r.createElement(F)).style.cssText = "display:block;text-align:" + D + ";position:" + (q ? "absolute;" : "relative;"),
                                        V && (w.className = V + (Y ? c + 1 : "")),
                                        R.push(w),
                                        p = v.length,
                                        h = 0;
                                    p > h;
                                    h++
                                )
                                    "BR" !== v[h].nodeName &&
                                        ((f = v[h]),
                                        w.appendChild(f),
                                        g && f._wordEnd && w.appendChild(r.createTextNode(" ")),
                                        q && (0 === h && ((w.style.top = f._y + "px"), (w.style.left = P + C + "px")), (f.style.top = "0px"), C && (f.style.left = f._x - C + "px")));
                                0 === p ? (w.innerHTML = "&nbsp;") : B || W || (T(w), A(w, String.fromCharCode(160), " ")), q && ((w.style.width = x), (w.style.height = f._h + "px")), t.appendChild(w);
                            }
                            t.style.cssText = y;
                        }
                        q &&
                            (l > t.clientHeight && ((t.style.height = l - O + "px"), t.clientHeight < l && (t.style.height = l + E + "px")),
                            s > t.clientWidth && ((t.style.width = s - I + "px"), t.clientWidth < s && (t.style.width = s + M + "px"))),
                            b(n, L),
                            B && b(i, N),
                            b(o, R);
                    },
                    S = function (t, e, n, o) {
                        var s,
                            a,
                            l,
                            u,
                            c,
                            g,
                            y,
                            w,
                            b,
                            x,
                            _ = e.tag ? e.tag : e.span ? "span" : "div",
                            T = -1 !== (e.type || e.split || "chars,words,lines").indexOf("chars"),
                            C = "absolute" === e.position || !0 === e.absolute,
                            S = e.wordDelimiter || " ",
                            P = " " !== S ? "" : C ? "&#173; " : " ",
                            k = "</" + _ + ">",
                            E = !0,
                            M = e.specialChars ? ("function" == typeof e.specialChars ? e.specialChars : h) : null,
                            O = r.createElement("div"),
                            I = t.parentNode;
                        for (
                            I.insertBefore(O, t),
                                O.textContent = t.nodeValue,
                                I.removeChild(t),
                                y = -1 !== (s = i((t = O))).indexOf("<"),
                                !1 !== e.reduceWhiteSpace && (s = s.replace(f, " ").replace(p, "")),
                                y && (s = s.split("<").join("{{LT}}")),
                                c = s.length,
                                a = (" " === s.charAt(0) ? P : "") + n(),
                                l = 0;
                            c > l;
                            l++
                        )
                            if (((g = s.charAt(l)), M && (x = M(s.substr(l), e.specialChars)))) (g = s.substr(l, x || 1)), (a += T && " " !== g ? o() + g + "</" + _ + ">" : g), (l += x - 1);
                            else if (g === S && s.charAt(l - 1) !== S && l) {
                                for (a += E ? k : "", E = !1; s.charAt(l + 1) === S; ) (a += P), l++;
                                l === c - 1 ? (a += P) : ")" !== s.charAt(l + 1) && ((a += P + n()), (E = !0));
                            } else
                                "{" === g && "{{LT}}" === s.substr(l, 6)
                                    ? ((a += T ? o() + "{{LT}}</" + _ + ">" : "{{LT}}"), (l += 5))
                                    : (g.charCodeAt(0) >= 55296 && g.charCodeAt(0) <= 56319) || (s.charCodeAt(l + 1) >= 65024 && s.charCodeAt(l + 1) <= 65039)
                                    ? ((w = v(s.substr(l, 2))),
                                      (b = v(s.substr(l + 2, 2))),
                                      (u = (w >= d && m >= w && b >= d && m >= b) || (b >= 127995 && 127999 >= b) ? 4 : 2),
                                      (a += T && " " !== g ? o() + s.substr(l, u) + "</" + _ + ">" : s.substr(l, u)),
                                      (l += u - 1))
                                    : (a += T && " " !== g ? o() + g + "</" + _ + ">" : g);
                        (t.outerHTML = a + (E ? k : "")), y && A(I, "{{LT}}", "<");
                    },
                    P = function (t, e, n, i) {
                        var r,
                            o,
                            s = x(t.childNodes),
                            a = s.length,
                            l = "absolute" === e.position || !0 === e.absolute;
                        if (3 !== t.nodeType || a > 1) {
                            for (e.absolute = !1, r = 0; a > r; r++)
                                (3 !== (o = s[r]).nodeType || /\S+/.test(o.nodeValue)) &&
                                    (l && 3 !== o.nodeType && "inline" === u(o, "display", null, !0) && ((o.style.display = "inline-block"), (o.style.position = "relative")), (o._isSplit = !0), P(o, e, n, i));
                            return (e.absolute = l), void (t._isSplit = !0);
                        }
                        S(t, e, n, i);
                    },
                    k = w.prototype;
                (k.split = function (t) {
                    this.isSplit && this.revert(), (this.vars = t = t || this.vars), (this._originals.length = this.chars.length = this.words.length = this.lines.length = 0);
                    for (var e, n, i, r = this.elements.length, o = t.tag ? t.tag : t.span ? "span" : "div", s = y(t.wordsClass, o), a = y(t.charsClass, o); --r > -1; )
                        (i = this.elements[r]), (this._originals[r] = i.innerHTML), (e = i.clientHeight), (n = i.clientWidth), P(i, t, s, a), C(i, t, this.chars, this.words, this.lines, n, e);
                    return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), (this.isSplit = !0), this;
                }),
                    (k.revert = function () {
                        if (!this._originals) throw "revert() call wasn't scoped properly.";
                        for (var t = this._originals.length; --t > -1; ) this.elements[t].innerHTML = this._originals[t];
                        return (this.chars = []), (this.words = []), (this.lines = []), (this.isSplit = !1), this;
                    }),
                    (w.selector =
                        t.$ ||
                        t.jQuery ||
                        function (e) {
                            var n = t.$ || t.jQuery;
                            return n ? ((w.selector = n), n(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e);
                        }),
                    (w.version = "0.7.0");
            })(s),
                (function (n) {
                    "use strict";
                    var a = function () {
                        return (s.GreenSockGlobals || s).SplitText;
                    };
                    t.exports ? (t.exports = a()) : ((r = []), void 0 === (o = "function" == typeof (i = a) ? i.apply(e, r) : i) || (t.exports = o));
                })();
        }.call(this, n(4)));
    },
    function (t, e, n) {
        (function (e) {
            var i = n(6),
                r = n(1),
                o = n(5),
                s = n(71),
                a = n(73),
                l = n(75),
                u = n(77),
                c = n(79),
                h = n(81),
                p = n(83);
            t.exports = i.Router.extend({
                routes: { "": "index", "about(/)": "about", "work(/)": "work", "clients(/)": "clients", "news/:slug(/)": "news" },
                index: function () {
                    this.activate(a, { view: s, viewData: {} });
                },
                about: function () {
                    this.activate(l, { view: s, viewData: {} });
                },
                work: function () {
                    this.activate(u, { view: s, viewData: {} });
                },
                clients: function () {
                    this.activate(c, { view: s, viewData: {} });
                },
                news: function (t) {
                    this.activate(h, { view: s, viewData: { slug: t } });
                },
                notFound: function () {
                    this.activate(p, { view: s, viewData: {} });
                },
                activate: function (t, e) {
                    if (((e = e || {}), !app.state.view)) return (e.server = !0), (e.inAnimated = !1), (app.state.viewConstructor = t), (app.state.view = new t(e)), app.state.view.activate(), void (app.state.currentViewClass = t);
                    (app.state.prevView = app.state.view), this.isSectionLogic(app.state.prevView, t, e) ? this.activateSectionLogic(e) : this.activateStandardLogic(t, e), (app.state.currentViewClass = t);
                },
                activateStandardLogic: function (t, n) {
                    var i = r.defaults({ server: !1, inAnimated: !0 }, n);
                    app.state.viewConstructor = t;
                    var o = new t(i),
                        s = n.fastNavigate ? 0 : 500;
                    return Promise.all([app.state.view.playOut({ duration: s, zoom: n.zoomNavigate, view: o }), o.loadData()])
                        .then(function () {
                            return app.els.$content.css({ minHeight: app.els.$content.height() }), app.state.view.deactivate({ destroy: !0 });
                        })
                        .then(function () {
                            (app.state.isServer = !1),
                                (app.state.view = o),
                                app.state.view.activate(i).then(function () {
                                    return app.els.$content.css({ minHeight: "" }), e(window).scrollTop(0), app.state.view.playIn({ duration: s, zoom: n.zoomNavigate, view: o });
                                });
                        });
                },
                activateSectionLogic: function (t) {
                    var e = t.view,
                        n = r.omit(t, "view");
                    (n.server = !1), (n.inAnimated = !0), app.state.view.update(e, n), (app.state.isServer = !1);
                },
                isSectionLogic: function (t, e, n) {
                    return app.state.prevView instanceof o && app.state.prevView.constructor === e;
                },
                start: function () {
                    var t = app.els.$body.hasClass("Page404");
                    i.history.start({ pushState: !0, hashChange: !1, silent: t }), e(window).scrollTop(0), t && this.notFound();
                },
            });
        }.call(this, n(2)));
    },
    function (t, e, n) {},
    function (t, e, n) {
        var i = n(1),
            r = n(3);
        n(27),
            (t.exports = r.extend({
                el: ".AboutAwards",
                events: { "click #webby": "onWebbyClick", "click #apple": "onAppleClick", "click #cssawards": "onCssawardsClick", "click #awwwards": "onAwwwardsClick", "click #commarts": "onCommartsClick" },
                initialize: function (t) {
                    i.bindAll(this, "onDocumentClick"),
                        (this.isWebbyActive = !1),
                        (this.isAppleActive = !1),
                        (this.isCssawardsActive = !1),
                        (this.isAwwwardsActive = !1),
                        (this.isCommartsActive = !1),
                        (this.isNotPhonePort = !1),
                        app.vent.on("document-click", this.onDocumentClick);
                    var e = this,
                        n = (window.screen.orientation && "landscape-primary" === window.screen.orientation.type) || (window.orientation && (90 === window.orientation || -90 === window.orientation));
                    (e.isNotPhonePort = app.settings.isDesktop || app.settings.isTablet || (app.settings.isMobile && n)),
                        e.isNotPhonePort &&
                            (this.$("#webby").on("mouseenter touchstart", function () {
                                e.isWebbyActive ||
                                    (e.$("#webby-wrapper").addClass("show"), e.$("#webby-1").addClass("show"), e.$("#webby-2").addClass("show"), e.$("#webby-3").addClass("show"), e.$("#webby-4").addClass("show"), e.upLogo(".svg--webby"));
                            }),
                            this.$("#webby").on("mouseleave touchmove", function () {
                                e.$("#webby-1").removeClass("show"),
                                    e.$("#webby-2").removeClass("show"),
                                    e.$("#webby-3").removeClass("show"),
                                    e.$("#webby-4").removeClass("show"),
                                    e.downLogo(".svg--webby"),
                                    setTimeout(function () {
                                        e.$("#webby-wrapper").removeClass("show");
                                    }, 100),
                                    e.downLogo(".svg--webby"),
                                    (e.isWebbyActive = !1);
                            }),
                            this.$("#apple").on("mouseenter touchstart", function () {
                                e.isAppleActive ||
                                    (e.$("#apple-wrapper").addClass("show"),
                                    e.$("#apple-1").addClass("show"),
                                    e.$("#apple-2").addClass("show"),
                                    e.$("#apple-3").addClass("show"),
                                    e.$("#apple-4").addClass("show"),
                                    e.upLogo(".svg--apple-logo"));
                            }),
                            this.$("#apple").on("mouseleave touchmove", function () {
                                e.$("#apple-1").removeClass("show"),
                                    e.$("#apple-2").removeClass("show"),
                                    e.$("#apple-3").removeClass("show"),
                                    e.$("#apple-4").removeClass("show"),
                                    setTimeout(function () {
                                        e.$("#apple-wrapper").removeClass("show");
                                    }, 100),
                                    e.downLogo(".svg--apple-logo"),
                                    (e.isAppleActive = !1);
                            }),
                            this.$("#cssawards").on("mouseenter touchstart", function () {
                                e.isCssawardsActive ||
                                    (e.$("#cssawards-wrapper").addClass("show"),
                                    e.$("#cssawards-1").addClass("show"),
                                    e.$("#cssawards-2").addClass("show"),
                                    e.$("#cssawards-3").addClass("show"),
                                    e.$("#cssawards-4").addClass("show"),
                                    e.upLogo(".svg--cssawards"));
                            }),
                            this.$("#cssawards").on("mouseleave touchmove", function () {
                                e.$("#cssawards-1").removeClass("show"),
                                    e.$("#cssawards-2").removeClass("show"),
                                    e.$("#cssawards-3").removeClass("show"),
                                    e.$("#cssawards-4").removeClass("show"),
                                    setTimeout(function () {
                                        e.$("#cssawards-wrapper").removeClass("show");
                                    }, 100),
                                    e.downLogo(".svg--cssawards"),
                                    (e.isCssawardsActive = !1);
                            }),
                            this.$("#awwwards").on("mouseenter touchstart", function () {
                                e.isAwwwardsActive ||
                                    (e.$("#awwwards-wrapper").addClass("show"),
                                    e.$("#awwwards-1").addClass("show"),
                                    e.$("#awwwards-2").addClass("show"),
                                    e.$("#awwwards-3").addClass("show"),
                                    e.$("#awwwards-4").addClass("show"),
                                    e.upLogo(".svg--awwwards"));
                            }),
                            this.$("#awwwards").on("mouseleave touchmove", function () {
                                e.$("#awwwards-1").removeClass("show"),
                                    e.$("#awwwards-2").removeClass("show"),
                                    e.$("#awwwards-3").removeClass("show"),
                                    e.$("#awwwards-4").removeClass("show"),
                                    setTimeout(function () {
                                        e.$("#awwwards-wrapper").removeClass("show");
                                    }, 100),
                                    e.downLogo(".svg--awwwards"),
                                    (e.isAwwwardsActive = !1);
                            }),
                            this.$("#commarts").on("mouseenter", function () {
                                e.isCommartsActive ||
                                    (e.$("#commarts-wrapper").addClass("show"),
                                    e.$("#commarts-1").addClass("show"),
                                    e.$("#commarts-2").addClass("show"),
                                    e.$("#commarts-3").addClass("show"),
                                    e.$("#commarts-4").addClass("show"),
                                    e.upLogo(".svg--commarts"));
                            }),
                            this.$("#commarts").on("mouseleave touchmove", function () {
                                e.$("#commarts-1").removeClass("show"),
                                    e.$("#commarts-2").removeClass("show"),
                                    e.$("#commarts-3").removeClass("show"),
                                    e.$("#commarts-4").removeClass("show"),
                                    setTimeout(function () {
                                        e.$("#commarts-wrapper").removeClass("show");
                                    }, 100),
                                    e.downLogo(".svg--commarts"),
                                    (e.isCommartsActive = !1);
                            })),
                        r.prototype.initialize.call(this, t);
                },
                onWebbyClick: function () {
                    this.isNotPhonePort &&
                        (this.isWebbyActive
                            ? (this.$("#webby-1").removeClass("show"),
                              this.$("#webby-2").removeClass("show"),
                              this.$("#webby-3").removeClass("show"),
                              this.$("#webby-4").removeClass("show"),
                              setTimeout(
                                  function () {
                                      this.$("#webby-wrapper").removeClass("show");
                                  }.bind(this),
                                  100
                              ),
                              this.downLogo(".svg--webby"))
                            : (this.$("#webby-wrapper").addClass("show"),
                              this.$("#webby-1").addClass("show"),
                              this.$("#webby-2").addClass("show"),
                              this.$("#webby-3").addClass("show"),
                              this.$("#webby-4").addClass("show"),
                              this.upLogo(".svg--webby")),
                        (this.isWebbyActive = !this.isWebbyActive));
                },
                onAppleClick: function () {
                    this.isNotPhonePort &&
                        (this.isAppleActive
                            ? (this.$("#apple-1").removeClass("show"),
                              this.$("#apple-2").removeClass("show"),
                              this.$("#apple-3").removeClass("show"),
                              this.$("#apple-4").removeClass("show"),
                              setTimeout(
                                  function () {
                                      this.$("#apple-wrapper").removeClass("show");
                                  }.bind(this),
                                  100
                              ),
                              this.downLogo(".svg--apple-logo"))
                            : (this.$("#apple-wrapper").addClass("show"),
                              this.$("#apple-1").addClass("show"),
                              this.$("#apple-2").addClass("show"),
                              this.$("#apple-3").addClass("show"),
                              this.$("#apple-4").addClass("show"),
                              this.upLogo(".svg--apple-logo")),
                        (this.isAppleActive = !this.isAppleActive));
                },
                onCssawardsClick: function () {
                    this.isNotPhonePort &&
                        (this.isCssawardsActive
                            ? (this.$("#cssawards-1").removeClass("show"),
                              this.$("#cssawards-2").removeClass("show"),
                              this.$("#cssawards-3").removeClass("show"),
                              this.$("#cssawards-4").removeClass("show"),
                              setTimeout(
                                  function () {
                                      this.$("#cssawards-wrapper").removeClass("show");
                                  }.bind(this),
                                  100
                              ),
                              this.downLogo(".svg--cssawards"))
                            : (this.$("#cssawards-wrapper").addClass("show"),
                              this.$("#cssawards-1").addClass("show"),
                              this.$("#cssawards-2").addClass("show"),
                              this.$("#cssawards-3").addClass("show"),
                              this.$("#cssawards-4").addClass("show"),
                              this.upLogo(".svg--cssawards")),
                        (this.isCssawardsActive = !this.isCssawardsActive));
                },
                onAwwwardsClick: function () {
                    this.isNotPhonePort &&
                        (this.isAwwwardsActive
                            ? (this.$("#awwwards-1").removeClass("show"),
                              this.$("#awwwards-2").removeClass("show"),
                              this.$("#awwwards-3").removeClass("show"),
                              this.$("#awwwards-4").removeClass("show"),
                              setTimeout(
                                  function () {
                                      this.$("#awwwards-wrapper").removeClass("show");
                                  }.bind(this),
                                  100
                              ),
                              this.downLogo(".svg--awwwards"))
                            : (this.$("#awwwards-wrapper").addClass("show"),
                              this.$("#awwwards-1").addClass("show"),
                              this.$("#awwwards-2").addClass("show"),
                              this.$("#awwwards-3").addClass("show"),
                              this.$("#awwwards-4").addClass("show"),
                              this.upLogo(".svg--awwwards")),
                        (this.isAwwwardsActive = !this.isAwwwardsActive));
                },
                onCommartsClick: function () {
                    this.isNotPhonePort &&
                        (this.isCommartsActive
                            ? (this.$("#commarts-1").removeClass("show"),
                              this.$("#commarts-2").removeClass("show"),
                              this.$("#commarts-3").removeClass("show"),
                              this.$("#commarts-4").removeClass("show"),
                              setTimeout(
                                  function () {
                                      this.$("#commarts-wrapper").removeClass("show");
                                  }.bind(this),
                                  100
                              ),
                              this.downLogo(".svg--commarts"))
                            : (this.$("#commarts-wrapper").addClass("show"),
                              this.$("#commarts-1").addClass("show"),
                              this.$("#commarts-2").addClass("show"),
                              this.$("#commarts-3").addClass("show"),
                              this.$("#commarts-4").addClass("show"),
                              this.upLogo(".svg--commarts")),
                        (this.isCommartsActive = !this.isCommartsActive));
                },
                onDocumentClick: function () {},
                upLogo: function (t) {
                    this.$(t).css("opacity", "1"), this.$(t).css("transform", "translateY(-20px)"), this.$(t).css("transition", "fill 450ms, transform 450ms, opacity 450ms");
                },
                downLogo: function (t) {
                    this.$(t).css("opacity", "0.5"), this.$(t).css("transform", "translateY(0)"), this.$(t).css("transition", "fill 630ms, transform 630ms, opacity 630ms");
                },
            }));
    },
    function (t, e, n) {},
    function (t, e, n) {
        (function (e) {
            n(1);
            var i = n(3);
            n(29);
            n(7).TimelineLite, n(8).Expo, n(9).CSSPlugin;
            t.exports = i.extend({
                el: ".AboutCapabilities",
                events: {},
                initialize: function (t) {
                    this.$(".AboutCapabilities-title").each(
                        function (t, n) {
                            var i = app.utils.showAnimation(e(n).find("p"));
                            e(n).onCustom(
                                "screen-position",
                                function (t, e) {
                                    e.screenPosition > 0 && (e.$el.offCustom("screen-position"), i.play());
                                }.bind(this)
                            );
                        }.bind(this)
                    ),
                        this.$(".AboutCapabilities-category").each(
                            function (t, n) {
                                var i = app.utils.showAnimation(e(n).find(".AboutCapabilities-title-text p, .AboutCapabilities-category-item p"));
                                e(n).onCustom(
                                    "screen-position",
                                    function (t, e) {
                                        e.screenPosition > 0 && (e.$el.offCustom("screen-position"), i.play());
                                    }.bind(this)
                                );
                            }.bind(this)
                        ),
                        i.prototype.initialize.call(this, t);
                },
            });
        }.call(this, n(2)));
    },
    function (t, e, n) {},
    function (t, e, n) {
        (function (e) {
            var i = n(1),
                r = n(3);
            n(31),
                (t.exports = r.extend({
                    el: ".AboutGallery",
                    events: {
                        "mouseenter .AboutGallery-right-hover-area": "onMouseenterRight",
                        "mouseleave .AboutGallery-right-hover-area": "onMouseleave",
                        "mouseenter .AboutGallery-left-hover-area": "onMouseenterLeft",
                        "mouseleave .AboutGallery-left-hover-area": "onMouseleave",
                        "mouseenter .AboutGallery-right-index-hover-area": "onMouseenterRight",
                        "mouseleave .AboutGallery-right-index-hover-area": "onMouseleave",
                        "mouseenter .AboutGallery-left-index-hover-area": "onMouseenterLeft",
                        "mouseleave .AboutGallery-left-index-hover-area": "onMouseleave",
                    },
                    initialize: function (t) {
                        i.bindAll(this, "makeShiftStep", "stopShiftAnimation"), (this.$wrapper = this.$(".AboutGallery-shift-wrapper")), (this.shiftData = { val: 0, delta: 0 });
                        var n = this;
                        e(window).on("resize", this.onResize),
                            app.settings.isDesktop &&
                                this.$(".AboutGallery-shift-wrapper").onCustom(
                                    "screen-position",
                                    function (t, e) {
                                        e.screenPosition > 0 && (e.$el.offCustom("screen-position"), this.startShiftAnimation(-1, 8), (this.stopFadeTimeout = setTimeout(this.stopShiftAnimation, 900)));
                                    }.bind(this)
                                ),
                            e(document).ready(function () {
                                (n.cycleLength = Math.ceil(n.$(".AboutGallery-img-wrapper").width() / 3)), app.settings.isDesktop && n.$wrapper.css("transform", "translate3d(" + n.cycleLength + "px, 0, 0)");
                            });
                    },
                    onMouseenterRight: function () {
                        app.settings.isDesktop && this.startShiftAnimation(-1, 4);
                    },
                    onMouseenterLeft: function () {
                        app.settings.isDesktop && this.startShiftAnimation(1, 4);
                    },
                    onMouseleave: function () {
                        app.settings.isDesktop && this.stopShiftAnimation();
                    },
                    startShiftAnimation: function (t, e) {
                        clearTimeout(this.stopFadeTimeout),
                            clearTimeout(this.stopTimeout),
                            window.cancelAnimationFrame(this.shiftData.frameID),
                            (this.shiftData.stop = !1),
                            (this.shiftData.dir = t),
                            (this.shiftData.speed = e),
                            this.makeShiftStep();
                    },
                    stopShiftAnimation: function () {
                        clearTimeout(this.stopTimeout), (this.shiftData.stop = !0);
                        var t = this;
                        this.stopTimeout = setTimeout(
                            function () {
                                window.cancelAnimationFrame(t.shiftData.frameID), (t.shiftData.delta = 0);
                            }.bind(this),
                            2e3
                        );
                    },
                    makeShiftStep: function () {
                        (this.shiftData.delta += 0.01 * (this.shiftData.stop ? -5 : 2)),
                            (this.shiftData.delta = Math.min(Math.max(this.shiftData.delta, 0), 2)),
                            (this.shiftData.val += this.shiftData.dir * Math.pow(this.shiftData.delta, 0.9) * this.shiftData.speed),
                            (this.shiftData.val = (this.shiftData.val + this.cycleLength) % this.cycleLength),
                            this.$wrapper.css("transform", "translate3d(" + this.shiftData.val + "px, 0, 0)"),
                            (this.shiftData.frameID = window.requestAnimationFrame(this.makeShiftStep));
                    },
                    onResize: function () {
                        this.cycleLength = Math.ceil(this.$(".AboutGallery-img-wrapper").width() / 3);
                    },
                }));
        }.call(this, n(2)));
    },
    function (t, e, n) {},
    function (t, e, n) {
        (function (e) {
            var i = n(1),
                r = n(3);
            n(33), n(34), n(35);
            n(7).TimelineLite, n(8).Expo, n(9).CSSPlugin;
            t.exports = r.extend({
                el: ".AboutQuotes",
                events: {
                    "mouseenter .AboutQuotes-nav-arrows-wrapper": "onArrowsWrapperMouseEnter",
                    "mouseleave .AboutQuotes-nav-arrows-wrapper": "onArrowsWrapperMouseLeave",
                    "mouseenter .AboutQuotes-nav-arrow-hover-area-right": "onArrowHoverAreaRightMouseEnter",
                    "mouseenter .AboutQuotes-nav-arrow-hover-area-left": "onArrowHoverAreaLeftMouseEnter",
                    "mouseleave .AboutQuotes-nav-arrow-hover-area-right": "onArrowHoverAreaRightMouseLeave",
                    "mouseleave .AboutQuotes-nav-arrow-hover-area-left": "onArrowHoverAreaLeftMouseLeave",
                    "click .AboutQuotes-nav-arrow-hover-area-left": "goPrev",
                    "click .AboutQuotes-nav-arrow-hover-area-right": "goNext",
                },
                initialize: function (t) {
                    i.bindAll(this, "onArrowsWrapperMouseEnter", "onArrowsWrapperMouseLeave", "onResize"),
                        (this.countOfQuotes = 5),
                        (this.activeQuote = 1),
                        (this.ww = e(window).width()),
                        (this.partsCount = 7),
                        (this.quoteAnimating = !0),
                        e(window).on("resize", this.onResize);
                    var n = this,
                        r = this.$("#quote-" + this.activeQuote);
                    r.css({ display: "block" }),
                        (this.containerOffsetLeft = this.$("#quote-" + this.activeQuote).offset().left),
                        (this.containerWidth = this.$("#quote-" + this.activeQuote).width()),
                        this.$(".AboutQuotes-nav-arrows-wrapper").each(
                            function (t, n) {
                                var i = app.utils.showAnimation(e(n).find(".AboutQuotes-nav-arrow-left")),
                                    r = app.utils.showAnimation(e(n).find(".AboutQuotes-nav-arrow-right"));
                                e(n).onCustom(
                                    "screen-position",
                                    function (t, e) {
                                        e.screenPosition > 0 && (e.$el.offCustom("screen-position"), i.play(), r.play());
                                    }.bind(this)
                                );
                            }.bind(this)
                        ),
                        r.each(
                            function (t, n) {
                                var i = r.find(".AboutQuotes-quote-text span"),
                                    o = app.utils.splitMultilineToSeparateSpans({ $container: i, className: "AboutQuotes-quote-line", transparent: !0 });
                                e(n).onCustom(
                                    "screen-position",
                                    function (t, e) {
                                        e.screenPosition > 0 &&
                                            (e.$el.offCustom("screen-position"),
                                            app.utils.animateTextByLines(
                                                o,
                                                app.settings.animationDuration,
                                                app.settings.animationDelay,
                                                function () {
                                                    o.cancel(!1), (this.quoteAnimating = !1);
                                                }.bind(this),
                                                !1,
                                                30,
                                                0
                                            ));
                                    }.bind(this)
                                );
                            }.bind(this)
                        ),
                        r.find(".AboutQuotes-quote-author").each(
                            function (t, n) {
                                var i = app.utils.showAnimation(r.find(".AboutQuotes-quote-author p"));
                                e(n).onCustom(
                                    "screen-position",
                                    function (t, e) {
                                        e.screenPosition > 0 &&
                                            (e.$el.offCustom("screen-position"),
                                            e.$el.css({ transition: "none" }).addClass("show"),
                                            i.play(),
                                            setTimeout(function () {
                                                e.$el.css({ transition: "" });
                                            }, 100));
                                    }.bind(this)
                                );
                            }.bind(this)
                        ),
                        this.$("#quote-" + this.activeQuote + " span.row").addClass("show"),
                        this.$(".AboutQuotes-quotes-wrapper").swipe({
                            swipeLeft: function (t, e) {
                                n.goNext();
                            },
                            swipeRight: function (t, e) {
                                n.goPrev();
                            },
                        }),
                        this.$(".AboutQuotes-nav-arrows-wrapper").swipe({
                            swipeLeft: function (t, e) {
                                n.goNext();
                            },
                            swipeRight: function (t, e) {
                                n.goPrev();
                            },
                        });
                },
                prepareQuote: function (t) {
                    var e = this.$("#quote-" + t)
                        .css("display", "block")
                        .find(".AboutQuotes-quote-text span.row");
                    e.hasClass("splitted") || e.addClass("splitted").lettering();
                },
                goNext: function () {
                    if (!this.quoteAnimating) {
                        (this.quoteAnimating = !0),
                            setTimeout(
                                function () {
                                    this.quoteAnimating = !1;
                                }.bind(this),
                                1e3
                            ),
                            this.prepareQuote(this.activeQuote),
                            this.removeQuote(!0);
                        var t = this,
                            e = this.getNextQuoteNumber();
                        this.$("#quote-" + this.activeQuote + " .AboutQuotes-quote-author").removeClass("show"),
                            this.prepareQuote(e),
                            setTimeout(function () {
                                t.$("#quote-" + e + " .AboutQuotes-quote-author").addClass("show"), t.showQuote(e, !0);
                            }, 10),
                            this.removeAllClasses(),
                            this.setNextActiveQuote(1),
                            this.setNewClasses(1);
                    }
                },
                goPrev: function () {
                    if (!this.quoteAnimating) {
                        (this.quoteAnimating = !0),
                            setTimeout(
                                function () {
                                    this.quoteAnimating = !1;
                                }.bind(this),
                                1e3
                            ),
                            this.prepareQuote(this.activeQuote),
                            this.removeQuote(!1);
                        var t = this,
                            e = this.getPrevQuoteNumber();
                        this.$("#quote-" + this.activeQuote + " .AboutQuotes-quote-author").removeClass("show"),
                            this.prepareQuote(e),
                            setTimeout(function () {
                                t.$("#quote-" + e + " .AboutQuotes-quote-author").addClass("show"), t.showQuote(e, !1);
                            }, 10),
                            this.removeAllClasses(),
                            this.setNextActiveQuote(-1),
                            this.setNewClasses(-1);
                    }
                },
                removeQuote: function (t) {
                    var e = this.activeQuote,
                        n = (this.$("#quote-" + e + " span.row"), this.$("#quote-" + e + " span.row > span")),
                        i = t ? this.partsCount : 0;
                    this.animateLetters(n, i, e, t, !0);
                },
                showQuote: function (t, e) {
                    this.$("#quote-" + t + " span.row");
                    var n = this.$("#quote-" + t + " span.row > span"),
                        i = e ? this.partsCount : 0;
                    this.animateLetters(n, i, t, e, !1);
                },
                animateLetters: function (t, e, n, i, r) {
                    for (var o = 0, s = 0; s <= this.partsCount; s++) {
                        for (
                            var a = i ? this.partsCount - e : e,
                                l = this.containerOffsetLeft + (e * this.containerWidth) / this.partsCount + (0 === e ? -15 : 0),
                                u = this.containerOffsetLeft + ((e + 1) * this.containerWidth) / this.partsCount,
                                c = 0;
                            c < t.length;
                            c++
                        ) {
                            var h = t.eq(c),
                                p = h.offset().left;
                            if (p >= l && p < u) {
                                var f = 50 * a + Math.round(170 * Math.random()) + (r ? 0 : 40);
                                h.css("transition-delay", f + "ms"), (o = Math.max(o, f));
                            }
                        }
                        i ? e-- : e++;
                    }
                    var d = this.$("#quote-" + n + " span.row");
                    d.toggleClass("show", !r).addClass("accelerated"), clearTimeout(d.attr("data-timer"));
                    var m = setTimeout(function () {
                        d.removeClass("accelerated");
                    }, o + 400);
                    d.attr("data-timer", m);
                },
                onArrowsWrapperMouseEnter: function () {
                    this.$(".AboutQuotes-nav-arrow-left").addClass("area-hover"), this.$(".AboutQuotes-nav-arrow-right").addClass("area-hover");
                },
                onArrowsWrapperMouseLeave: function () {
                    this.$(".AboutQuotes-nav-arrow-left").removeClass("area-hover"), this.$(".AboutQuotes-nav-arrow-right").removeClass("area-hover");
                },
                removeAllClasses: function () {
                    for (var t = 0; t < this.countOfQuotes; t++) {
                        var e = "#line" + (t + 1);
                        this.$(e).removeClass("prev-active"), this.$(e).removeClass("prev-active-arrow-hover"), this.$(e).removeClass("next-active"), this.$(e).removeClass("next-active-arrow-hover"), this.$(e).removeClass("active");
                    }
                },
                setNewClasses: function (t) {
                    var e = "#line" + this.activeQuote;
                    this.$(e).addClass("active");
                    var n = "#line" + this.getPrevQuoteNumber();
                    this.$(n).addClass("prev-active"), -1 !== t || app.settings.isMobile || this.$(n).addClass("prev-active-arrow-hover");
                    var i = "#line" + this.getNextQuoteNumber();
                    this.$(i).addClass("next-active"), 1 !== t || app.settings.isMobile || this.$(i).addClass("next-active-arrow-hover");
                },
                setNextActiveQuote: function (t) {
                    this.activeQuote = -1 === t ? this.getPrevQuoteNumber() : this.getNextQuoteNumber();
                },
                getPrevQuoteNumber: function () {
                    return 1 !== this.activeQuote ? this.activeQuote - 1 : this.countOfQuotes;
                },
                getNextQuoteNumber: function () {
                    return this.activeQuote !== this.countOfQuotes ? this.activeQuote + 1 : 1;
                },
                onArrowHoverAreaRightMouseEnter: function () {
                    this.$(".next-active").addClass("next-active-arrow-hover");
                },
                onArrowHoverAreaRightMouseLeave: function () {
                    this.$(".next-active").removeClass("next-active-arrow-hover");
                },
                onArrowHoverAreaLeftMouseEnter: function () {
                    this.$(".prev-active").addClass("prev-active-arrow-hover");
                },
                onArrowHoverAreaLeftMouseLeave: function () {
                    this.$(".prev-active").removeClass("prev-active-arrow-hover");
                },
                onResize: function () {
                    (this.ww = e(window).width()), (this.containerOffsetLeft = this.$("#quote-" + this.activeQuote).offset().left), (this.containerWidth = this.$("#quote-" + this.activeQuote).width());
                },
            });
        }.call(this, n(2)));
    },
    function (t, e, n) {},
    function (t, e, n) {
        (function (t) {
            /*!
             * Lettering.JS 0.7.0
             *
             * Copyright 2010, Dave Rupert http://daverupert.com
             * Released under the WTFPL license
             * http://sam.zoy.org/wtfpl/
             *
             * Thanks to Paul Irish - http://paulirish.com - for the feedback.
             *
             * Date: Mon Sep 20 17:14:00 2010 -0600
             */
            !(function (t) {
                function e(e, n, i, r) {
                    var o = e.text(),
                        s = o.split(n),
                        a = "";
                    s.length &&
                        (t(s).each(function (t, e) {
                            a += '<span class="' + i + (t + 1) + '" aria-hidden="true">' + e + "</span>" + r;
                        }),
                        e.attr("aria-label", o).empty().append(a));
                }
                var n = {
                    init: function () {
                        return this.each(function () {
                            e(t(this), "", "char", "");
                        });
                    },
                    words: function () {
                        return this.each(function () {
                            e(t(this), " ", "word", " ");
                        });
                    },
                    lines: function () {
                        return this.each(function () {
                            var n = "eefec303079ad17405c889e092e105b0";
                            e(t(this).children("br").replaceWith(n).end(), n, "line", "");
                        });
                    },
                };
                t.fn.lettering = function (e) {
                    return e && n[e] ? n[e].apply(this, [].slice.call(arguments, 1)) : "letters" !== e && e ? (t.error("Method " + e + " does not exist on jQuery.lettering"), this) : n.init.apply(this, [].slice.call(arguments, 0));
                };
            })(t);
        }.call(this, n(2)));
    },
    function (t, e, n) {
        (function (i) {
            var r, o, s, a;
            /*!
             * @fileOverview TouchSwipe - jQuery Plugin
             * @version 1.6.18
             *
             * @author Matt Bryson http://www.github.com/mattbryson
             * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
             * @see http://labs.rampinteractive.co.uk/touchSwipe/
             * @see http://plugins.jquery.com/project/touchSwipe
             * @license
             * Copyright (c) 2010-2015 Matt Bryson
             * Dual licensed under the MIT or GPL Version 2 licenses.
             *
             */ (a = function (t) {
                "use strict";
                function e(e) {
                    return (
                        !e || void 0 !== e.allowPageScroll || (void 0 === e.swipe && void 0 === e.swipeStatus) || (e.allowPageScroll = u),
                        void 0 !== e.click && void 0 === e.tap && (e.tap = e.click),
                        e || (e = {}),
                        (e = t.extend({}, t.fn.swipe.defaults, e)),
                        this.each(function () {
                            var i = t(this),
                                r = i.data(P);
                            r || ((r = new n(this, e)), i.data(P, r));
                        })
                    );
                }
                function n(e, n) {
                    function k(e) {
                        if (!(!0 === xt.data(P + "_intouch") || t(e.target).closest(n.excludedElements, xt).length > 0)) {
                            var a = e.originalEvent ? e.originalEvent : e;
                            if (!a.pointerType || "mouse" != a.pointerType || 0 != n.fallbackToMouseEvents) {
                                var l,
                                    u = a.touches,
                                    c = u ? u[0] : a;
                                return (
                                    (_t = A),
                                    u ? (Tt = u.length) : !1 !== n.preventDefaultEvents && e.preventDefault(),
                                    (pt = 0),
                                    (ft = null),
                                    (dt = null),
                                    (At = null),
                                    (mt = 0),
                                    (vt = 0),
                                    (gt = 0),
                                    (yt = 1),
                                    (wt = 0),
                                    ((h = {})[i] = et(i)),
                                    (h[r] = et(r)),
                                    (h[o] = et(o)),
                                    (h[s] = et(s)),
                                    (bt = h),
                                    G(),
                                    J(0, c),
                                    !u || Tt === n.fingers || n.fingers === y || H() ? ((St = ot()), 2 == Tt && (J(1, u[1]), (vt = gt = it(Ct[0].start, Ct[1].start))), (n.swipeStatus || n.pinchStatus) && (l = L(a, _t))) : (l = !1),
                                    !1 === l
                                        ? (L(a, (_t = _)), l)
                                        : (n.hold &&
                                              (It = setTimeout(
                                                  t.proxy(function () {
                                                      xt.trigger("hold", [a.target]), n.hold && (l = n.hold.call(xt, a, a.target));
                                                  }, this),
                                                  n.longTapThreshold
                                              )),
                                          Z(!0),
                                          null)
                                );
                            }
                        }
                        var h;
                    }
                    function E(e) {
                        var h,
                            p,
                            f,
                            d,
                            m = e.originalEvent ? e.originalEvent : e;
                        if (_t !== x && _t !== _ && !U()) {
                            var w,
                                A = m.touches,
                                T = K(A ? A[0] : m);
                            if (
                                ((Pt = ot()),
                                A && (Tt = A.length),
                                n.hold && clearTimeout(It),
                                (_t = b),
                                2 == Tt &&
                                    (0 == vt ? (J(1, A[1]), (vt = gt = it(Ct[0].start, Ct[1].start))) : (K(A[1]), (gt = it(Ct[0].end, Ct[1].end)), Ct[0].end, Ct[1].end, (At = 1 > yt ? l : a)),
                                    (yt = ((gt / vt) * 1).toFixed(2)),
                                    (wt = Math.abs(vt - gt))),
                                Tt === n.fingers || n.fingers === y || !A || H())
                            ) {
                                if (
                                    ((ft = rt(T.start, T.end)),
                                    (function (t, e) {
                                        if (!1 !== n.preventDefaultEvents)
                                            if (n.allowPageScroll === u) t.preventDefault();
                                            else {
                                                var a = n.allowPageScroll === c;
                                                switch (e) {
                                                    case i:
                                                        ((n.swipeLeft && a) || (!a && n.allowPageScroll != v)) && t.preventDefault();
                                                        break;
                                                    case r:
                                                        ((n.swipeRight && a) || (!a && n.allowPageScroll != v)) && t.preventDefault();
                                                        break;
                                                    case o:
                                                        ((n.swipeUp && a) || (!a && n.allowPageScroll != g)) && t.preventDefault();
                                                        break;
                                                    case s:
                                                        ((n.swipeDown && a) || (!a && n.allowPageScroll != g)) && t.preventDefault();
                                                }
                                            }
                                    })(e, (dt = rt(T.last, T.end))),
                                    (f = T.start),
                                    (d = T.end),
                                    (pt = Math.round(Math.sqrt(Math.pow(d.x - f.x, 2) + Math.pow(d.y - f.y, 2)))),
                                    (mt = nt()),
                                    (function (t, e) {
                                        t != u && ((e = Math.max(e, tt(t))), (bt[t].distance = e));
                                    })(ft, pt),
                                    (w = L(m, _t)),
                                    !n.triggerOnTouchEnd || n.triggerOnTouchLeave)
                                ) {
                                    var C = !0;
                                    if (n.triggerOnTouchLeave) {
                                        var S = { left: (p = (h = t((h = this))).offset()).left, right: p.left + h.outerWidth(), top: p.top, bottom: p.top + h.outerHeight() };
                                        C = (function (t, e) {
                                            return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom;
                                        })(T.end, S);
                                    }
                                    !n.triggerOnTouchEnd && C ? (_t = D(b)) : n.triggerOnTouchLeave && !C && (_t = D(x)), (_t != _ && _t != x) || L(m, _t);
                                }
                            } else L(m, (_t = _));
                            !1 === w && L(m, (_t = _));
                        }
                    }
                    function M(t) {
                        var e = t.originalEvent ? t.originalEvent : t,
                            i = e.touches;
                        if (i) {
                            if (i.length && !U())
                                return (
                                    (function (t) {
                                        (kt = ot()), (Et = t.touches.length + 1);
                                    })(e),
                                    !0
                                );
                            if (i.length && U()) return !0;
                        }
                        return (
                            U() && (Tt = Et),
                            (Pt = ot()),
                            (mt = nt()),
                            j() || !R()
                                ? L(e, (_t = _))
                                : n.triggerOnTouchEnd || (!1 === n.triggerOnTouchEnd && _t === b)
                                ? (!1 !== n.preventDefaultEvents && !1 !== t.cancelable && t.preventDefault(), L(e, (_t = x)))
                                : !n.triggerOnTouchEnd && Y()
                                ? N(e, (_t = x), f)
                                : _t === b && L(e, (_t = _)),
                            Z(!1),
                            null
                        );
                    }
                    function O() {
                        (Tt = 0), (Pt = 0), (St = 0), (vt = 0), (gt = 0), (yt = 1), G(), Z(!1);
                    }
                    function I(t) {
                        var e = t.originalEvent ? t.originalEvent : t;
                        n.triggerOnTouchLeave && L(e, (_t = D(x)));
                    }
                    function $() {
                        xt.off(at, k), xt.off(ht, O), xt.off(lt, E), xt.off(ut, M), ct && xt.off(ct, I), Z(!1);
                    }
                    function D(t) {
                        var e = t,
                            i = F(),
                            r = R(),
                            o = j();
                        return !i || o ? (e = _) : !r || t != b || (n.triggerOnTouchEnd && !n.triggerOnTouchLeave) ? !r && t == x && n.triggerOnTouchLeave && (e = _) : (e = x), e;
                    }
                    function L(t, e) {
                        var i,
                            r = t.touches;
                        return (
                            (!(!B() || !W()) || W()) && (i = N(t, e, h)),
                            (!(!z() || !H()) || H()) && !1 !== i && (i = N(t, e, p)),
                            X() && Q() && !1 !== i
                                ? (i = N(t, e, d))
                                : mt > n.longTapThreshold && w > pt && n.longTap && !1 !== i
                                ? (i = N(t, e, m))
                                : !((1 !== Tt && T) || !(isNaN(pt) || pt < n.threshold) || !Y()) && !1 !== i && (i = N(t, e, f)),
                            e === _ && O(),
                            e === x && ((r && r.length) || O()),
                            i
                        );
                    }
                    function N(e, u, c) {
                        var v;
                        if (c == h) {
                            if ((xt.trigger("swipeStatus", [u, ft || null, pt || 0, mt || 0, Tt, Ct, dt]), n.swipeStatus && !1 === (v = n.swipeStatus.call(xt, e, u, ft || null, pt || 0, mt || 0, Tt, Ct, dt)))) return !1;
                            if (u == x && B()) {
                                if ((clearTimeout(Ot), clearTimeout(It), xt.trigger("swipe", [ft, pt, mt, Tt, Ct, dt]), n.swipe && !1 === (v = n.swipe.call(xt, e, ft, pt, mt, Tt, Ct, dt)))) return !1;
                                switch (ft) {
                                    case i:
                                        xt.trigger("swipeLeft", [ft, pt, mt, Tt, Ct, dt]), n.swipeLeft && (v = n.swipeLeft.call(xt, e, ft, pt, mt, Tt, Ct, dt));
                                        break;
                                    case r:
                                        xt.trigger("swipeRight", [ft, pt, mt, Tt, Ct, dt]), n.swipeRight && (v = n.swipeRight.call(xt, e, ft, pt, mt, Tt, Ct, dt));
                                        break;
                                    case o:
                                        xt.trigger("swipeUp", [ft, pt, mt, Tt, Ct, dt]), n.swipeUp && (v = n.swipeUp.call(xt, e, ft, pt, mt, Tt, Ct, dt));
                                        break;
                                    case s:
                                        xt.trigger("swipeDown", [ft, pt, mt, Tt, Ct, dt]), n.swipeDown && (v = n.swipeDown.call(xt, e, ft, pt, mt, Tt, Ct, dt));
                                }
                            }
                        }
                        if (c == p) {
                            if ((xt.trigger("pinchStatus", [u, At || null, wt || 0, mt || 0, Tt, yt, Ct]), n.pinchStatus && !1 === (v = n.pinchStatus.call(xt, e, u, At || null, wt || 0, mt || 0, Tt, yt, Ct)))) return !1;
                            if (u == x && z())
                                switch (At) {
                                    case a:
                                        xt.trigger("pinchIn", [At || null, wt || 0, mt || 0, Tt, yt, Ct]), n.pinchIn && (v = n.pinchIn.call(xt, e, At || null, wt || 0, mt || 0, Tt, yt, Ct));
                                        break;
                                    case l:
                                        xt.trigger("pinchOut", [At || null, wt || 0, mt || 0, Tt, yt, Ct]), n.pinchOut && (v = n.pinchOut.call(xt, e, At || null, wt || 0, mt || 0, Tt, yt, Ct));
                                }
                        }
                        return (
                            c == f
                                ? (u !== _ && u !== x) ||
                                  (clearTimeout(Ot),
                                  clearTimeout(It),
                                  Q() && !X()
                                      ? ((Mt = ot()),
                                        (Ot = setTimeout(
                                            t.proxy(function () {
                                                (Mt = null), xt.trigger("tap", [e.target]), n.tap && (v = n.tap.call(xt, e, e.target));
                                            }, this),
                                            n.doubleTapThreshold
                                        )))
                                      : ((Mt = null), xt.trigger("tap", [e.target]), n.tap && (v = n.tap.call(xt, e, e.target))))
                                : c == d
                                ? (u !== _ && u !== x) || (clearTimeout(Ot), clearTimeout(It), (Mt = null), xt.trigger("doubletap", [e.target]), n.doubleTap && (v = n.doubleTap.call(xt, e, e.target)))
                                : c == m && ((u !== _ && u !== x) || (clearTimeout(Ot), (Mt = null), xt.trigger("longtap", [e.target]), n.longTap && (v = n.longTap.call(xt, e, e.target)))),
                            v
                        );
                    }
                    function R() {
                        var t = !0;
                        return null !== n.threshold && (t = pt >= n.threshold), t;
                    }
                    function j() {
                        var t = !1;
                        return null !== n.cancelThreshold && null !== ft && (t = tt(ft) - pt >= n.cancelThreshold), t;
                    }
                    function F() {
                        return !(n.maxTimeThreshold && mt >= n.maxTimeThreshold);
                    }
                    function z() {
                        var t = q(),
                            e = V(),
                            i = null === n.pinchThreshold || wt >= n.pinchThreshold;
                        return t && e && i;
                    }
                    function H() {
                        return !!(n.pinchStatus || n.pinchIn || n.pinchOut);
                    }
                    function B() {
                        var t = F(),
                            e = R(),
                            n = q(),
                            i = V();
                        return !j() && i && n && e && t;
                    }
                    function W() {
                        return !!(n.swipe || n.swipeStatus || n.swipeLeft || n.swipeRight || n.swipeUp || n.swipeDown);
                    }
                    function q() {
                        return Tt === n.fingers || n.fingers === y || !T;
                    }
                    function V() {
                        return 0 !== Ct[0].end.x;
                    }
                    function Y() {
                        return !!n.tap;
                    }
                    function Q() {
                        return !!n.doubleTap;
                    }
                    function X() {
                        if (null == Mt) return !1;
                        var t = ot();
                        return Q() && t - Mt <= n.doubleTapThreshold;
                    }
                    function G() {
                        (kt = 0), (Et = 0);
                    }
                    function U() {
                        var t = !1;
                        return kt && ot() - kt <= n.fingerReleaseThreshold && (t = !0), t;
                    }
                    function Z(t) {
                        xt && (!0 === t ? (xt.on(lt, E), xt.on(ut, M), ct && xt.on(ct, I)) : (xt.off(lt, E, !1), xt.off(ut, M, !1), ct && xt.off(ct, I, !1)), xt.data(P + "_intouch", !0 === t));
                    }
                    function J(t, e) {
                        var n = { start: { x: 0, y: 0 }, last: { x: 0, y: 0 }, end: { x: 0, y: 0 } };
                        return (n.start.x = n.last.x = n.end.x = e.pageX || e.clientX), (n.start.y = n.last.y = n.end.y = e.pageY || e.clientY), (Ct[t] = n), n;
                    }
                    function K(t) {
                        var e = void 0 !== t.identifier ? t.identifier : 0,
                            n = (function (t) {
                                return Ct[t] || null;
                            })(e);
                        return null === n && (n = J(e, t)), (n.last.x = n.end.x), (n.last.y = n.end.y), (n.end.x = t.pageX || t.clientX), (n.end.y = t.pageY || t.clientY), n;
                    }
                    function tt(t) {
                        return bt[t] ? bt[t].distance : void 0;
                    }
                    function et(t) {
                        return { direction: t, distance: 0 };
                    }
                    function nt() {
                        return Pt - St;
                    }
                    function it(t, e) {
                        var n = Math.abs(t.x - e.x),
                            i = Math.abs(t.y - e.y);
                        return Math.round(Math.sqrt(n * n + i * i));
                    }
                    function rt(t, e) {
                        if (((a = e), (n = t).x == a.x && n.y == a.y)) return u;
                        var n,
                            a,
                            l = (function (t, e) {
                                var n = t.x - e.x,
                                    i = e.y - t.y,
                                    r = Math.atan2(i, n),
                                    o = Math.round((180 * r) / Math.PI);
                                return 0 > o && (o = 360 - Math.abs(o)), o;
                            })(t, e);
                        return 45 >= l && l >= 0 ? i : 360 >= l && l >= 315 ? i : l >= 135 && 225 >= l ? r : l > 45 && 135 > l ? s : o;
                    }
                    function ot() {
                        return new Date().getTime();
                    }
                    n = t.extend({}, n);
                    var st = T || S || !n.fallbackToMouseEvents,
                        at = st ? (S ? (C ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
                        lt = st ? (S ? (C ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
                        ut = st ? (S ? (C ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
                        ct = st ? (S ? "mouseleave" : null) : "mouseleave",
                        ht = S ? (C ? "MSPointerCancel" : "pointercancel") : "touchcancel",
                        pt = 0,
                        ft = null,
                        dt = null,
                        mt = 0,
                        vt = 0,
                        gt = 0,
                        yt = 1,
                        wt = 0,
                        At = 0,
                        bt = null,
                        xt = t(e),
                        _t = "start",
                        Tt = 0,
                        Ct = {},
                        St = 0,
                        Pt = 0,
                        kt = 0,
                        Et = 0,
                        Mt = 0,
                        Ot = null,
                        It = null;
                    try {
                        xt.on(at, k), xt.on(ht, O);
                    } catch (e) {
                        t.error("events not supported " + at + "," + ht + " on jQuery.swipe");
                    }
                    (this.enable = function () {
                        return this.disable(), xt.on(at, k), xt.on(ht, O), xt;
                    }),
                        (this.disable = function () {
                            return $(), xt;
                        }),
                        (this.destroy = function () {
                            $(), xt.data(P, null), (xt = null);
                        }),
                        (this.option = function (e, i) {
                            if ("object" == typeof e) n = t.extend(n, e);
                            else if (void 0 !== n[e]) {
                                if (void 0 === i) return n[e];
                                n[e] = i;
                            } else {
                                if (!e) return n;
                                t.error("Option " + e + " does not exist on jQuery.swipe.options");
                            }
                            return null;
                        });
                }
                var i = "left",
                    r = "right",
                    o = "up",
                    s = "down",
                    a = "in",
                    l = "out",
                    u = "none",
                    c = "auto",
                    h = "swipe",
                    p = "pinch",
                    f = "tap",
                    d = "doubletap",
                    m = "longtap",
                    v = "horizontal",
                    g = "vertical",
                    y = "all",
                    w = 10,
                    A = "start",
                    b = "move",
                    x = "end",
                    _ = "cancel",
                    T = "ontouchstart" in window,
                    C = window.navigator.msPointerEnabled && !window.PointerEvent && !T,
                    S = (window.PointerEvent || window.navigator.msPointerEnabled) && !T,
                    P = "TouchSwipe";
                (t.fn.swipe = function (n) {
                    var i = t(this),
                        r = i.data(P);
                    if (r && "string" == typeof n) {
                        if (r[n]) return r[n].apply(r, Array.prototype.slice.call(arguments, 1));
                        t.error("Method " + n + " does not exist on jQuery.swipe");
                    } else if (r && "object" == typeof n) r.option.apply(r, arguments);
                    else if (!(r || ("object" != typeof n && n))) return e.apply(this, arguments);
                    return i;
                }),
                    (t.fn.swipe.version = "1.6.18"),
                    (t.fn.swipe.defaults = {
                        fingers: 1,
                        threshold: 75,
                        cancelThreshold: null,
                        pinchThreshold: 20,
                        maxTimeThreshold: null,
                        fingerReleaseThreshold: 250,
                        longTapThreshold: 500,
                        doubleTapThreshold: 200,
                        swipe: null,
                        swipeLeft: null,
                        swipeRight: null,
                        swipeUp: null,
                        swipeDown: null,
                        swipeStatus: null,
                        pinchIn: null,
                        pinchOut: null,
                        pinchStatus: null,
                        click: null,
                        tap: null,
                        doubleTap: null,
                        longTap: null,
                        hold: null,
                        triggerOnTouchEnd: !0,
                        triggerOnTouchLeave: !1,
                        allowPageScroll: "auto",
                        fallbackToMouseEvents: !0,
                        excludedElements: ".noSwipe",
                        preventDefaultEvents: !0,
                    }),
                    (t.fn.swipe.phases = { PHASE_START: A, PHASE_MOVE: b, PHASE_END: x, PHASE_CANCEL: _ }),
                    (t.fn.swipe.directions = { LEFT: i, RIGHT: r, UP: o, DOWN: s, IN: a, OUT: l }),
                    (t.fn.swipe.pageScroll = { NONE: u, HORIZONTAL: v, VERTICAL: g, AUTO: c }),
                    (t.fn.swipe.fingers = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5, ALL: y });
            }),
                n(36).jQuery ? ((o = [n(2)]), void 0 === (s = "function" == typeof (r = a) ? r.apply(e, o) : r) || (t.exports = s)) : a(t.exports ? n(2) : i);
        }.call(this, n(2)));
    },
    function (t, e) {
        (function (e) {
            t.exports = e;
        }.call(this, {}));
    },
    function (t, e, n) {
        (function (e) {
            n(1);
            var i = n(3);
            n(38);
            n(7).TimelineLite, n(8).Expo, n(9).CSSPlugin;
            t.exports = i.extend({
                el: ".AboutWhatWeDo",
                events: {},
                initialize: function (t) {
                    var n = +new Date();
                    app.vent.on(
                        "page-loaded",
                        function () {
                            n = +new Date();
                        }.bind(this)
                    ),
                        this.$('[data-animation-type="image"]').each(
                            function (t, i) {
                                var r = app.utils.showAnimation(e(i)),
                                    o = !1,
                                    s = e(i).find("img");
                                e(i).onCustom(
                                    "screen-position",
                                    function (t, e) {
                                        if (app.settings.isDesktop) {
                                            var i = app.utils.easingFunctions(0, 1, e.screenPosition, "easeOutQuad"),
                                                a = Math.round(50 - 100 * i);
                                            s.css({ transform: "translate3d(0, " + a + "px, 0)" });
                                        }
                                        e.screenPosition > 0 && !o && ((o = !0), r.delay((+new Date() < n + app.settings.animationDelay ? 4 * app.settings.animationDelay + 180 : 0) / 1e3), r.play());
                                    }.bind(this)
                                );
                            }.bind(this)
                        ),
                        this.$('[data-animation-type="title"]').each(
                            function (t, i) {
                                var r = app.utils.splitMultilineToSeparateSpans({ $container: e(i).find("p"), className: "AboutWhatWeDo-title-line", transparent: !0 });
                                e(i).onCustom(
                                    "screen-position",
                                    function (t, e) {
                                        if (e.screenPosition > 0) {
                                            e.$el.offCustom("screen-position");
                                            var i = +new Date() < n + app.settings.animationDelay ? 4 * app.settings.animationDelay + 180 : 0;
                                            app.utils.animateTextByLines(r, app.settings.animationDuration, app.settings.animationDelay, null, !1, 30, i);
                                        }
                                    }.bind(this)
                                );
                            }.bind(this)
                        ),
                        this.$('[data-animation-type="text"]').each(
                            function (t, i) {
                                var r = app.utils.splitMultilineToSeparateSpans({ $container: e(i).find("p"), className: "AboutWhatWeDo-text-line", transparent: !0 });
                                e(i).onCustom(
                                    "screen-position",
                                    function (t, e) {
                                        if (e.screenPosition > 0) {
                                            e.$el.offCustom("screen-position");
                                            var i = +new Date() < n + app.settings.animationDelay ? 4 * app.settings.animationDelay + 180 : 0;
                                            (i += 2 * app.settings.animationDelay), app.utils.animateTextByLines(r, app.settings.animationDuration, app.settings.animationDelay, null, !1, 30, i);
                                        }
                                    }.bind(this)
                                );
                            }.bind(this)
                        ),
                        i.prototype.initialize.call(this, t);
                },
            });
        }.call(this, n(2)));
    },
    function (t, e, n) {},
    function (t, e, n) {
        (function (e) {
            var i = n(1),
                r = n(3);
            n(40),
                (t.exports = r.extend({
                    el: ".ClientsList",
                    events: {},
                    SWITCH_PATTERNS: [2, 1, 3, 8, 4, 1, 5, 7, 3, 8, 1, 4, 3, 7, 5, 1, 2, 8, 4, 3, 2, 7, 4, 3, 8, 5, 1, 4, 5, 2, 8, 7, 1, 5, 4, 1, 7, 4, 2, 8, 5, 7, 3, 2, 8, 5, 2, 7, 1, 3, 8, 5, 7, 3, 4, 2],
                    initialize: function (t) {
                        i.bindAll(this, "switchLogoGroup", "resumeAnimation", "pauseAnimation");
                        var n,
                            o = this;
                        (this.LOGOS = {
                            1: { active: 0, logos: ["facebook", "slack"] },
                            2: { active: 0, logos: ["google", "coinbase"] },
                            3: { active: 0, logos: ["uber", "toyota"] },
                            4: { active: 0, logos: ["sony", "coca-cola"] },
                            5: { active: 0, logos: ["wd", "t-mobile"] },
                            6: { active: 0, logos: ["huawei", "vmware"] },
                            7: { active: 0, logos: ["samsung", "fossil"] },
                            8: { active: 0, logos: ["adp", "oppo"] },
                        }),
                            this.$(".ClientsList-title").each(
                                function (t, n) {
                                    var i = app.utils.showAnimation(e(n).find("p"));
                                    e(n).onCustom(
                                        "screen-position",
                                        function (t, e) {
                                            e.screenPosition > 0 && (e.$el.offCustom("screen-position"), i.play());
                                        }.bind(this)
                                    );
                                }.bind(this)
                            );
                        var s = [];
                        this.$("#ClientsList-logos-wrapper-desktop .ClientsList-logos-row").onCustom(
                            "screen-position",
                            function (t, r) {
                                r.screenPosition > 0 && (r.$el.offCustom("screen-position"), s.push(r.$el)),
                                    clearTimeout(n),
                                    (n = setTimeout(
                                        function () {
                                            if (s.length) {
                                                var t = s[0].offset().top,
                                                    n = 0,
                                                    r = 0;
                                                i.each(s, function (i, o) {
                                                    var s = i.offset().top;
                                                    s > t && ((t = s), (n += 100), (r = 0)),
                                                        e(".svg", i).each(function (t, i) {
                                                            setTimeout(function () {
                                                                e(i).addClass("show");
                                                            }, r + n),
                                                                (r += 50);
                                                        });
                                                }),
                                                    (s = []);
                                            }
                                        }.bind(this),
                                        0
                                    ));
                            }.bind(this)
                        ),
                            o.$("#ClientsList-logos-wrapper-mobile").onCustom("screen-position", function (t, e) {
                                e.screenPosition > 0 && (e.$el.offCustom("screen-position"), o.$(".svg-mobile").addClass("show"));
                            }),
                            (this.wasShown = !1),
                            (this.currentPattern = -1),
                            this.$("#ClientsList-logos-wrapper-mobile").onCustom(
                                "screen-enter",
                                function (t, n) {
                                    clearTimeout(this.firstTimeAnimationTimer), !this.firstTimeAnimationTimer && e(window).scrollTop() <= 0 ? (this.firstTimeAnimationTimer = setTimeout(this.resumeAnimation, 1300)) : this.resumeAnimation();
                                }.bind(this)
                            ),
                            this.$("#ClientsList-logos-wrapper-mobile").onCustom(
                                "screen-leave",
                                function (t, e) {
                                    clearTimeout(this.firstTimeAnimationTimer), this.pauseAnimation();
                                }.bind(this)
                            ),
                            r.prototype.initialize.call(this, t);
                    },
                    resumeAnimation: function () {
                        var t = this;
                        clearTimeout(this.switchLogoTimer);
                        var e = 0,
                            n = function () {
                                e++, (t.currentPattern = (t.currentPattern + 1) % t.SWITCH_PATTERNS.length);
                                var i = t.SWITCH_PATTERNS[t.currentPattern],
                                    r = t.switchLogoGroup(i);
                                t.switchLogoTimer = setTimeout(n, e % 2 == 0 ? r + 700 : 100);
                            };
                        this.wasShown
                            ? n()
                            : (i.each(
                                  this.LOGOS,
                                  function (t, e) {
                                      setTimeout(
                                          function () {
                                              this.switchLogoGroup(e, !0);
                                          }.bind(this),
                                          300 * Math.floor((e - 1) / 5)
                                      );
                                  }.bind(this)
                              ),
                              (this.switchLogoTimer = setTimeout(n, 2500))),
                            (this.wasShown = !0);
                    },
                    pauseAnimation: function () {
                        clearTimeout(this.switchLogoTimer);
                    },
                    switchLogoGroup: function (t, n) {
                        if (void 0 === t) {
                            do {
                                t = Math.floor(5 * Math.random()) + 1;
                            } while (t === this.prevGroup);
                            this.prevGroup = t;
                        }
                        var r = this.LOGOS[t],
                            o = this.$(".ClientsList-place--" + t),
                            s = function (t, e) {
                                var r = t.find("g > g").toArray(),
                                    o = function (t, i) {
                                        i !== t.length &&
                                            (t[i].addClass(e),
                                            setTimeout(
                                                function () {
                                                    o(t, i + 1);
                                                },
                                                n ? 60 : 100
                                            ));
                                    };
                                (r = i.shuffle(r)), o(r, 0);
                            }.bind(this);
                        if (r.$prev) {
                            var a = r.$prev;
                            s(a, "hide"),
                                setTimeout(function () {
                                    a.remove();
                                }, 2e3);
                        }
                        var l = r.logos[r.active],
                            u = e(i.template(this.$("#logo-" + l).text())());
                        o.append(u), (r.$prev = u), (r.active = (r.active + 1) % r.logos.length);
                        var c = n ? 17 : 750,
                            h = c + u.find("g > g").length * (n ? 60 : 100);
                        return (
                            setTimeout(
                                function () {
                                    s(u, n ? "show-first-time" : "show");
                                }.bind(this),
                                c
                            ),
                            h
                        );
                    },
                }));
        }.call(this, n(2)));
    },
    function (t, e, n) {},
    function (t, e, n) {
        (function (e) {
            var i = n(1),
                r = n(3);
            n(42),
                (t.exports = r.extend({
                    el: ".IndexAbout",
                    events: {},
                    initialize: function (t) {
                        (this.options = t || {}),
                            i.bindAll(this, "onPageLoaded", "onResize", "setPanelSizeAndPos"),
                            (this.setPanelSizeAndPos.__debounced = i.debounce(this.setPanelSizeAndPos, 100)),
                            e(window).on("resize", this.onResize),
                            this.onResize(),
                            app.vent.on("page-loaded", this.onPageLoaded),
                            this.$(".IndexAbout-numbers").each(function (t, n) {
                                var i = app.utils.showAnimation(e(n));
                                e(n).onCustom("screen-position", function (t, e) {
                                    if (e.screenPosition > 0) {
                                        e.$el.offCustom("screen-position"), i.play();
                                        var n = e.$el.find(".IndexAbout-number span");
                                        if (!n.length) return;
                                        app.utils.animateNumber(n, n.attr("data-start"), n.attr("data-end"), 0, 1e3, null, "easeOutQuart", ",");
                                    }
                                });
                            }),
                            this.$(".IndexAbout-text").each(
                                function (t, n) {
                                    var i = app.utils.splitMultilineToSeparateSpans({ $container: e(n), className: "IndexAbout-text-line", transparent: !0 }),
                                        r = app.utils.showAnimation(this.$(".IndexAbout-more-wrapper"));
                                    e(n).onCustom("screen-position", function (t, e) {
                                        if (e.screenPosition > 0) {
                                            e.$el.offCustom("screen-position");
                                            var n = app.utils.animateTextByLines(i, app.settings.animationDuration, app.settings.animationDelay, null, !1, 30, 0);
                                            r.delay((n * app.settings.animationDelay) / 1e3), r.play();
                                        }
                                    });
                                }.bind(this)
                            ),
                            r.prototype.initialize.call(this, t);
                    },
                    onPageLoaded: function () {
                        this.onResize();
                    },
                    onResize: function () {
                        this.setPanelSizeAndPos(), this.setPanelSizeAndPos.__debounced();
                    },
                    setPanelSizeAndPos: function () {
                        for (
                            var t = document.body.clientWidth,
                                e = [
                                    { ww: 0, margin: -249 },
                                    { ww: 498, margin: 0 },
                                    { ww: 542, margin: 22 },
                                    { ww: 667, margin: 22 },
                                    { ww: 671, margin: 24 },
                                    { ww: 768, margin: 24 },
                                    { ww: 786, margin: 33 },
                                    { ww: 1024, margin: 33 },
                                    { ww: 1038, margin: 40 },
                                    { ww: 1152, margin: 40 },
                                    { ww: 1162, margin: 45 },
                                    { ww: 1280, margin: 45 },
                                    { ww: 1440, margin: 45 },
                                    { ww: 1e4, margin: 4325 },
                                ],
                                n = e.length - 1;
                            n >= 0 && !(e[n].ww <= t);
                            n--
                        );
                        var i = e[n],
                            r = e[n + 1],
                            o = (t - i.ww) / (r.ww - i.ww),
                            s = (r.margin - i.margin) * o + i.margin,
                            a = t - 2 * s,
                            l = 0,
                            u = window.innerWidth,
                            c = app.utils.getScrollbarWidth();
                        u >= 768 && u < 1024 && (l = Math.round((337 * (this.$(".IndexAbout-padder").width() - 720 + c)) / 720 / 2)),
                            u >= 1024 && u < 1152 && (l = Math.round((453 * (this.$(".IndexAbout-padder").width() - 958 + c)) / 958 / 2)),
                            u >= 1152 && u < 1280 && (l = Math.round((497 * (this.$(".IndexAbout-padder").width() - 1072 + c)) / 1072 / 2)),
                            u >= 1280 && (l = Math.round((536 * (this.$(".IndexAbout-padder").width() - 1190 + c)) / 1190 / 2)),
                            this.$(".IndexAbout-padder").css({ padding: l + "px 0" }),
                            this.$(".IndexAbout-wrapper").css({ width: Math.round(a), "margin-left": Math.round(s) }),
                            app.vent.trigger("about-margin", Math.round(s));
                    },
                }));
        }.call(this, n(2)));
    },
    function (t, e, n) {},
    function (t, e, n) {
        (function (e) {
            n(1);
            var i = n(3);
            n(44),
                (t.exports = i.extend({
                    el: ".IndexDescription",
                    initialize: function (t) {
                        this.options = t || {};
                        var n = 0;
                        app.vent.on(
                            "page-loaded",
                            function () {
                                n = +new Date();
                            }.bind(this)
                        ),
                            this.$(".IndexDescription-text").each(
                                function (t, i) {
                                    var r = app.utils.showAnimation(e(i).find('.IndexDescription-text-line[data-index="1"]')),
                                        o = app.utils.showAnimation(e(i).find('.IndexDescription-text-line[data-index="2"]'));
                                    e(i).onCustom(
                                        "screen-position",
                                        function (t, e) {
                                            if (e.screenPosition > 0) {
                                                e.$el.offCustom("screen-position");
                                                var i = 0;
                                                +new Date() < n + app.settings.animationDelay && (i = (283 + 4 * app.settings.animationDelay) / 1e3), r.delay(0 + i), o.delay(app.settings.animationDelay / 1e3 + i), r.play(), o.play();
                                            }
                                        }.bind(this)
                                    );
                                }.bind(this)
                            ),
                            this.$(".IndexDescription-items").each(
                                function (t, i) {
                                    var r = app.utils.showAnimation(e(i).find(".IndexDescription-item-title"));
                                    e(i).onCustom(
                                        "screen-position",
                                        function (e, i) {
                                            if (i.screenPosition > 0) {
                                                i.$el.offCustom("screen-position");
                                                var o = 0;
                                                +new Date() < n + app.settings.animationDelay && (o = (283 + 4 * app.settings.animationDelay) / 1e3), r.delay((t * app.settings.animationDelay) / 1e3 + o), r.play();
                                            }
                                        }.bind(this)
                                    );
                                }.bind(this)
                            ),
                            this.$(".IndexDescription-item").each(function (t, n) {
                                var i,
                                    r = "IndexDescription-item-text-line",
                                    o = e(n).find(".IndexDescription-item-title"),
                                    s = e(n).find(".IndexDescription-item-wrapper"),
                                    a = !0;
                                o.on("click", function (t) {
                                    a && (s.show(), (i = app.utils.splitMultilineToSeparateSpans({ $container: e(n).find(".IndexDescription-item-text p"), className: r, transparent: !0 })), (a = !1)),
                                        o.hasClass("-active") ? (o.removeClass("-active"), app.utils.accordeonAnimation("hide", i, s, r)) : (o.addClass("-active"), app.utils.accordeonAnimation("show", i, s, r));
                                });
                            }),
                            i.prototype.initialize.call(this, t);
                    },
                }));
        }.call(this, n(2)));
    },
    function (t, e, n) {},
    function (t, e, n) {
        (function (e) {
            n(1);
            var i = n(3);
            n(46),
                (t.exports = i.extend({
                    el: ".IndexFaq",
                    events: { "click .IndexFaq-item-title": "onItemTitleClick" },
                    initialize: function (t) {
                        (this.options = t || {}),
                            this.$(".IndexFaq-text").each(
                                function (t, n) {
                                    var i = app.utils.showAnimation(e(n).find("div"));
                                    e(n).onCustom(
                                        "screen-position",
                                        function (t, e) {
                                            e.screenPosition > 0 && (e.$el.offCustom("screen-position"), i.play());
                                        }.bind(this)
                                    );
                                }.bind(this)
                            ),
                            this.$(".IndexFaq-items").each(
                                function (t, n) {
                                    var i = app.utils.showAnimation(e(n).find(".IndexFaq-item-title"));
                                    if (0 == t) var r = app.utils.showAnimation(e(n).find(".IndexFaq-item-wrapper"));
                                    e(n).onCustom(
                                        "screen-position",
                                        function (e, n) {
                                            n.screenPosition > 0 && (n.$el.offCustom("screen-position"), i.delay((t * app.settings.animationDelay) / 1e3), i.play(), 0 == t && (r.delay(app.settings.animationDelay / 1e3), r.play()));
                                        }.bind(this)
                                    );
                                }.bind(this)
                            ),
                            this.$(".IndexFaq-item").each(function (t, n) {
                                var i,
                                    r = "IndexFaq-item-text-line",
                                    o = e(n).find(".IndexFaq-item-title"),
                                    s = e(n).find(".IndexFaq-item-wrapper"),
                                    a = !0;
                                o.on("click", function (t) {
                                    a && (s.show(), (i = app.utils.splitMultilineToSeparateSpans({ $container: e(n).find(".IndexFaq-item-text p"), className: r, transparent: !1 })), (a = !1)),
                                        o.hasClass("-active") ? (o.removeClass("-active"), app.utils.accordeonAnimation("hide", i, s, r)) : (o.addClass("-active"), app.utils.accordeonAnimation("show", i, s, r));
                                });
                            }),
                            i.prototype.initialize.call(this, t);
                    },
                }));
        }.call(this, n(2)));
    },
    function (t, e, n) {},
    function (t, e, n) {
        (function (e) {
            var i = n(1),
                r = n(3);
            n(48),
                (t.exports = r.extend({
                    el: ".IndexLogos",
                    events: {},
                    SWITCH_PATTERNS: [1, 7, 8, 12, 3, 8, 10, 9, 11, 5, 8, 13, 5, 1, 9, 7, 12, 6, 8, 7, 11, 9, 7, 3, 7, 13, 7, 3, 8, 9, 4, 5, 6, 7, 1, 3, 13, 9, 8, 10, 7, 7, 5, 11, 1, 3],
                    initialize: function (t) {
                        (this.options = t || {}),
                            i.bindAll(this, "switchLogoGroup", "resumeAnimation", "pauseAnimation"),
                            (this.LOGOS = {
                                1: { active: 0, logos: ["facebook", "huawei"] },
                                2: { active: 0, logos: ["google", "fossil"] },
                                3: { active: 0, logos: ["slack", "wd"] },
                                4: { active: 0, logos: ["coinbase", "toyota"] },
                                5: { active: 0, logos: ["coca-cola", "oppo"] },
                                6: { active: 0, logos: ["amazon", "sony"] },
                                7: { active: 0, logos: ["stripe", "vmware"] },
                                8: { active: 0, logos: ["cisco", "t-mobile"] },
                                9: { active: 0, logos: ["uber", "sandisk"] },
                                10: { active: 0, logos: ["ups", "google"] },
                                11: { active: 0, logos: ["coinbase", "toyota"] },
                                12: { active: 0, logos: ["uber", "sandisk"] },
                                13: { active: 0, logos: ["coca-cola", "oppo"] },
                            }),
                            (this.wasShown = !1),
                            (this.currentPattern = -1),
                            this.initialLogoCreate(),
                            this.$(".IndexLogos-container").onCustom("screen-enter", this.resumeAnimation),
                            this.$(".IndexLogos-container").onCustom("screen-leave", this.pauseAnimation),
                            this.$(".IndexLogos-show-more-wrapper").each(function (t, n) {
                                var i = app.utils.showAnimation(e(n).find("span"));
                                e(n).onCustom("screen-position", function (t, e) {
                                    e.screenPosition > 0 && e.$el.offCustom("screen-position"), i.play();
                                });
                            }),
                            r.prototype.initialize.call(this, t);
                    },
                    initialLogoCreate: function () {
                        i.each(
                            this.LOGOS,
                            function (t, n) {
                                t = this.LOGOS[n];
                                var r = this.$(".IndexLogos-place--" + n),
                                    o = t.logos[t.active],
                                    s = e(i.template(this.$("#logo-" + o).text())());
                                r.append(s), (t.$prev = s);
                            }.bind(this)
                        );
                    },
                    resumeAnimation: function () {
                        var t = this;
                        clearTimeout(this.switchLogoTimer);
                        var e = 0,
                            n = function () {
                                e++, (t.currentPattern = (t.currentPattern + 1) % t.SWITCH_PATTERNS.length);
                                var i = t.SWITCH_PATTERNS[t.currentPattern],
                                    r = t.switchLogoGroup(i);
                                t.switchLogoTimer = setTimeout(n, e % 2 == 0 ? r + 700 : 100);
                            };
                        this.wasShown
                            ? n()
                            : (i.each(
                                  this.LOGOS,
                                  function (t, e) {
                                      setTimeout(
                                          function () {
                                              this.switchLogoGroup(e, !0);
                                          }.bind(this),
                                          300 * Math.floor((e - 1) / 5)
                                      );
                                  }.bind(this)
                              ),
                              (this.switchLogoTimer = setTimeout(n, 2500))),
                            (this.wasShown = !0);
                    },
                    pauseAnimation: function () {
                        clearTimeout(this.switchLogoTimer);
                    },
                    switchLogoGroup: function (t, n) {
                        if (void 0 === t) {
                            do {
                                t = Math.floor(5 * Math.random()) + 1;
                            } while (t === this.prevGroup);
                            this.prevGroup = t;
                        }
                        var r = this.LOGOS[t],
                            o = this.$(".IndexLogos-place--" + t),
                            s = function (t, e) {
                                var r = t.find("g > g").toArray(),
                                    o = function (t, i) {
                                        i !== t.length &&
                                            (t[i].addClass(e),
                                            setTimeout(
                                                function () {
                                                    o(t, i + 1);
                                                },
                                                n ? 60 : 100
                                            ));
                                    };
                                (r = i.shuffle(r)), o(r, 0);
                            }.bind(this);
                        if (r.$prev && !n) {
                            var a = r.$prev;
                            s(a, "hide"),
                                setTimeout(function () {
                                    a.remove();
                                }, 2e3);
                        }
                        if (!n) {
                            var l = r.logos[r.active],
                                u = e(i.template(this.$("#logo-" + l).text())());
                            o.append(u), (r.$prev = u);
                        }
                        r.active = (r.active + 1) % r.logos.length;
                        var c = n ? 17 : 750,
                            h = c + r.$prev.find("g > g").length * (n ? 60 : 100);
                        return (
                            setTimeout(
                                function () {
                                    s(r.$prev, n ? "show-first-time" : "show");
                                }.bind(this),
                                c
                            ),
                            h
                        );
                    },
                }));
        }.call(this, n(2)));
    },
    function (t, e, n) {},
    function (t, e, n) {
        (function (e) {
            var i = n(1),
                r = n(3);
            n(50),
                (t.exports = r.extend({
                    el: ".IndexNews",
                    events: { "mouseenter .IndexNews-link a": "onLinkMouseEnter", "mousemove .IndexNews-link a": "onLinkMouseMove", "mouseleave .IndexNews-link a": "onLinkMouseLeave", "touchstart .IndexNews-link a": "onLinkTouchStart" },
                    initialize: function (t) {
                        (this.options = t || {}),
                            i.bindAll(this, "onSideMarginChanged"),
                            app.vent.on("about-margin", this.onSideMarginChanged),
                            (this.moveImage.__throttled = i.throttle(this.moveImage.bind(this), 30)),
                            this.$(".IndexNews-title p").each(
                                function (t, n) {
                                    var i = app.utils.showAnimation(e(n));
                                    e(n).onCustom(
                                        "screen-position",
                                        function (t, e) {
                                            e.screenPosition > 0 && (e.$el.offCustom("screen-position"), i.play());
                                        }.bind(this)
                                    );
                                }.bind(this)
                            ),
                            this.$("li").each(
                                function (t, n) {
                                    var i = app.utils.showAnimation(e(n).find(".IndexNews-date span")),
                                        r = app.utils.splitMultilineToSeparateSpans({ $container: e(n).find(".IndexNews-link-inner"), className: "IndexNews-link-line", autoWidth: !0, transparent: !0 });
                                    e(n).onCustom(
                                        "screen-position",
                                        function (t, e) {
                                            e.screenPosition > 0 && (e.$el.offCustom("screen-position"), i.play(), app.utils.animateTextByLines(r, app.settings.animationDuration, app.settings.animationDelay, null, !1, 30, 0));
                                        }.bind(this)
                                    );
                                }.bind(this)
                            ),
                            r.prototype.initialize.call(this, t);
                    },
                    onSideMarginChanged: function (t) {
                        (t = Math.max(t, 20)),
                            setTimeout(
                                function () {
                                    this.$(".IndexNews-imageContainer").each(function (n, i) {
                                        e(i).css("transform", "");
                                        var r = e("body").width() - (e(i).offset().left + e(i).width());
                                        r < t && e(i).css("transform", "translateX(" + -(t - r) + "px)");
                                    });
                                }.bind(this),
                                500
                            );
                    },
                    onLinkMouseEnter: function (t) {
                        app.settings.isMobile || e(t.target).closest("li").find(".IndexNews-imageContainer").addClass("show");
                    },
                    onLinkTouchStart: function (t) {
                        if (!app.settings.isDesktop) {
                            var n = e(t.target).closest("li").find(".IndexNews-imageContainer");
                            n.addClass("show");
                            var i = function (t) {
                                (t.originalEvent.touches.length && "touchcancel" != t.type) || (n.removeClass("show"), e("body").off("touchend touchcancel", i));
                            };
                            e("body").on("touchend touchcancel", i);
                        }
                    },
                    onLinkMouseMove: function (t) {
                        this.moveImage.__throttled(t);
                    },
                    moveImage: function (t) {
                        var n = e(t.currentTarget),
                            i = n.closest("li").find(".IndexNews-imageContainer img"),
                            r = n.offset(),
                            o = r.left,
                            s = r.top,
                            a = n.width(),
                            l = n.height(),
                            u = (t.pageX - o) / a,
                            c = (t.pageY - s) / l;
                        window.innerWidth < 1024 ? i.css("transform", "translate(" + 30 * u + "px, " + 20 * c + "px)") : i.css("transform", "translate(" + 60 * u + "px, " + 40 * c + "px)");
                    },
                    onLinkMouseLeave: function (t) {
                        app.settings.isMobile || e(t.target).closest("li").find(".IndexNews-imageContainer").removeClass("show");
                    },
                }));
        }.call(this, n(2)));
    },
    function (t, e, n) {},
    function (t, e, n) {
        n(1);
        var i = n(3),
            r = n(52);
        n(54),
            (t.exports = i.extend({
                el: ".ProjectsList",
                events: {},
                initialize: function (t) {
                    (this.options = t || {}),
                        this.$(".ProjectsItem").each(function (t, e) {
                            new r({ el: this, ind: t });
                        }),
                        i.prototype.initialize.call(this, t);
                },
            }));
    },
    function (t, e, n) {
        (function (e) {
            var i = n(1),
                r = n(3);
            n(53),
                (t.exports = r.extend({
                    events: {
                        mouseenter: "onMouseEnter",
                        mouseleave: "onMouseLeave",
                        "mouseenter .ProjectsItem-imageWrapper": "onImageMouseEnter",
                        "mouseleave .ProjectsItem-imageWrapper": "onImageMouseLeave",
                        "mousemove .ProjectsItem-imageWrapper": "onImageMouseMove",
                        click: "onClick",
                        touchstart: "onTouchStart",
                    },
                    initialize: function (t) {
                        if (
                            ((this.options = t || {}),
                            i.bindAll(
                                this,
                                "onPageLoaded",
                                "resumeLoop",
                                "pauseLoop",
                                "loadVideo",
                                "createVideo",
                                "proceedVideoFrame",
                                "onVideoProgressShadow",
                                "onVideoProgressTexts",
                                "playVideo",
                                "onUpdateShadow",
                                "onSomeCardTapped",
                                "onThemeChange",
                                "onBodyTouchstart"
                            ),
                            app.vent.on("page-loaded", this.onPageLoaded),
                            (this.$coming = this.$(".ProjectsItem-coming")),
                            this.$coming.length)
                        ) {
                            var n = this.$coming.attr("data-timeline");
                            (this.comingTimeline = n && JSON.parse(n)), this.$coming.attr("data-color", this.comingTimeline[0].color);
                        }
                        (this.$texts = this.$(".ProjectsItem-textsItem")),
                            this.$texts.length &&
                                ((this.textsTimeline = []),
                                this.$texts.each(
                                    function (t, e) {
                                        this.textsTimeline.push({ start: e.getAttribute("data-start"), end: e.getAttribute("data-end"), color: e.getAttribute("data-color") });
                                    }.bind(this)
                                )),
                            (this.theme = "light"),
                            app.vent.on("card-tapped", this.onSomeCardTapped),
                            app.vent.on("update-shadow", this.onUpdateShadow),
                            app.vent.on("theme-change", this.onThemeChange);
                        var o = this.$el.attr("data-shape"),
                            s = this.$el.attr("data-order");
                        if (((this.shift = 0), app.settings.isDesktop)) {
                            var a = "0" === s ? ("rect" === o ? 22 : 30) : "rect" === o ? 11 : 15,
                                l = this.$(".ProjectsItem-innerWrapper"),
                                u = l[0],
                                c = this.$(".ProjectsItem-paralaxWrapper")[0];
                            l.css("top", Math.round((a / 100) * l.height()));
                        }
                        this.$el.onCustom(
                            "screen-leave",
                            function (t, e) {
                                t.target === t.currentTarget && this.onSomeCardTapped();
                            }.bind(this)
                        ),
                            this.$el.onCustom(
                                "screen-position",
                                function (t, e) {
                                    if (t.target === t.currentTarget) {
                                        var n = app.utils.easingFunctions(0, 1, e.screenPosition, "easeOutQuad");
                                        if (app.settings.isDesktop) {
                                            var i = "0" === s ? ("rect" === o ? 22 : 30) : "rect" === o ? 11 : 15,
                                                r = Math.round((e.height * n * i) / 100);
                                            e.height != this.prevDataHeight && ((u.style.top = Math.round((i / 100) * e.height) + "px"), (this.prevDataHeight = e.height)),
                                                this.shift != r && ((c.style.transform = "translate3d(0, " + -r + "px, 0)"), (this.shift = r));
                                        } else this.shift = 0;
                                        this.shift += 0.14 * e.height;
                                    }
                                }.bind(this)
                            );
                        var h = this;
                        app.vent.on(
                            "second-card-shown",
                            function () {
                                0 === t.ind && this.$(".ProjectsItem-imageClipper").triggerCustom("screen-position", { screenPosition: 1, $el: this.$(".ProjectsItem-imageClipper") });
                            }.bind(this)
                        ),
                            this.$(".ProjectsItem-imageClipper").onCustom(
                                "screen-position",
                                function (n, i) {
                                    if (i.screenPosition > 0) {
                                        var r = function () {
                                            h.$el.addClass("show"), i.$el.addClass("remove-clipping");
                                        };
                                        e(window).scrollTop() <= 0 ? (this.firstTimeAnimationTimer = setTimeout(r, 0)) : r(),
                                            i.$el.offCustom("screen-position"),
                                            app.settings.lazyVideo && !app.settings.isMobile && this.loadVideo(),
                                            1 === t.ind && app.vent.trigger("second-card-shown");
                                    }
                                }.bind(this)
                            ),
                            this.$(".ProjectsItem-title").onCustom(
                                "screen-bottom",
                                function (t, e) {
                                    e.screenBottom + this.shift > 50 && e.$el.addClass("show").offCustom("screen-bottom");
                                }.bind(this)
                            ),
                            this.$(".ProjectsItem-description").onCustom(
                                "screen-bottom",
                                function (t, e) {
                                    e.screenBottom + this.shift > 50 && e.$el.addClass("show").offCustom("screen-bottom");
                                }.bind(this)
                            ),
                            r.prototype.initialize.call(this, t),
                            this.createVideo(),
                            app.vent.trigger("update-shadow", {}),
                            app.settings.lazyVideo ||
                                (app.settings.isMobile ? (app.settings.canAutoplay ? setTimeout(this.loadVideo, 100 * this.options.ind) : e("body").one("touchstart", this.loadVideo)) : setTimeout(this.loadVideo, 100 * this.options.ind));
                    },
                    onPageLoaded: function () {},
                    onImageMouseEnter: function (t) {
                        app.settings.isMobile ||
                            (clearTimeout(this.showCursorTimeout),
                            clearTimeout(this.hideCursorTimeout),
                            this.$(".ProjectsItem-cursor").show(),
                            (this.showCursorTimeout = setTimeout(
                                function () {
                                    this.$(".ProjectsItem-cursor").addClass("show");
                                }.bind(this),
                                17
                            )));
                    },
                    onImageMouseLeave: function (t) {
                        app.settings.isMobile ||
                            (clearTimeout(this.showCursorTimeout),
                            clearTimeout(this.hideCursorTimeout),
                            this.$(".ProjectsItem-cursor").removeClass("show"),
                            (this.hideCursorTimeout = setTimeout(
                                function () {
                                    this.$(".ProjectsItem-cursor").hide();
                                }.bind(this),
                                670
                            )));
                    },
                    onImageMouseMove: function (t) {
                        if (!app.settings.isMobile) {
                            var e = t.pageX - this.$(".ProjectsItem-imageWrapper").offset().left,
                                n = t.pageY - this.$(".ProjectsItem-imageWrapper").offset().top;
                            this.$(".ProjectsItem-cursor").css({ transform: "translate3d(" + e + "px, " + n + "px, 0)" });
                        }
                    },
                    loadVideo: function () {
                        this.loadInitiated || (e(this.video).attr("src", e(this.video).attr("data-src")), this.video.load(), (this.loadInitiated = !0));
                    },
                    onSomeCardTapped: function (t) {
                        this !== t && app.settings.isMobile && this.$el.hasClass("tapped") && (this.pauseLoop(), this.$el.removeClass("tapped"));
                    },
                    onThemeChange: function (t) {
                        (this.overlayColors = { r: "light" === t ? 255 : 0, g: "light" === t ? 255 : 0, b: "light" === t ? 255 : 0 }), (this.theme = t), this.onUpdateShadow();
                    },
                    onClick: function (t) {
                        if (app.settings.isMobile) {
                            if ((app.settings.lazyVideo && this.loadVideo(), clearTimeout(this.supressResetTimeout), this.supressClick))
                                return (this.supressClick = !1), void (window.innerWidth <= window.app.settings.phonePortrait && this.$el.flashClass("clicked", 167));
                            this.$el.hasClass("tapped") && (this.$el.attr("data-url"), this.$el.flashClass("clicked", 167));
                        } else this.$el.flashClass("clicked", 167);
                    },
                    onTouchStart: function (t) {
                        app.settings.isMobile &&
                            (this.$el.hasClass("tapped") ||
                                (app.vent.trigger("card-tapped", this),
                                this.resumeLoop(),
                                this.$el.attr("data-url") && (t.preventDefault(), t.stopPropagation()),
                                this.$el.addClass("tapped"),
                                clearTimeout(this.supressResetTimeout),
                                (this.supressClick = !0),
                                (this.supressResetTimeout = setTimeout(
                                    function () {
                                        this.supressClick = !1;
                                    }.bind(this),
                                    750
                                )),
                                e("body").off("touchstart", this.onBodyTouchstart),
                                e("body").on("touchstart", this.onBodyTouchstart)));
                    },
                    onBodyTouchstart: function (t) {
                        e(t.target).closest(".ProjectsItem").length || (e("body").off("click", this.onBodyTouchstart), app.vent.trigger("card-tapped", null));
                    },
                    isWeakDevice: function () {
                        if (app.settings.isDesktop) return !1;
                        if (app.settings.iOSVersion < 11) return !0;
                        if (app.settings.isPhone) return !1;
                        return !!{ "iPad 2 or Mini": !0, "iPad 3": !0, "iPad 4": !0, "iPad Air 2": !0, "iPad Air, Mini 2, Mini 3": !0, iPad: !0, "iPad, iPad 2, iPad Mini": !0, "Not an iPad": !0 }[app.settings.ipadModel];
                    },
                    createVideo: function () {
                        if (!this.video) {
                            var t = this.isWeakDevice() ? this.$el.attr("data-video-min") : this.$el.attr("data-video"),
                                n = e('<video muted playsinline crossorigin loop preload="auto" src="' + app.utils.stubVideo + '" data-src="' + t + '"></video>');
                            this.$(".ProjectsItem-videoWrapper").prepend(n), n.addClass("ProjectsItem-video"), (this.video = n.get(0));
                            var i = e("<canvas>");
                            this.$(".ProjectsItem-shadowWrapper").prepend(i),
                                this.video &&
                                    this.video.addEventListener(
                                        "ended",
                                        function () {
                                            this.video.play();
                                        }.bind(this),
                                        !1
                                    ),
                                (this.canvas = i[0]),
                                (this.ctx = this.canvas.getContext("2d")),
                                (this.overlayColors = { r: "dark" === this.theme ? 0 : 255, g: "dark" === this.theme ? 0 : 255, b: "dark" === this.theme ? 0 : 255 });
                        }
                    },
                    onMouseEnter: function (t) {
                        app.settings.isMobile || this.resumeLoop();
                    },
                    onMouseLeave: function (t) {
                        app.settings.isMobile || this.pauseLoop();
                    },
                    onVideoProgressTexts: function () {
                        var t = 1e3 * this.video.currentTime,
                            e = this.comingTimeline,
                            n = this.textsTimeline;
                        if (e)
                            for (var i = 0; i < e.length; i++)
                                if (e[i].start <= t && t <= e[i].end) {
                                    this.$coming.attr("data-color", e[i].color);
                                    break;
                                }
                        if (n) for (i = 0; i < n.length; i++) n[i].start <= t && t <= n[i].end ? this.$texts.eq(i).addClass("show") : this.$texts.eq(i).removeClass("show");
                    },
                    onVideoProgressShadow: function () {
                        if (this.canvas && (3 === this.video.readyState || 4 === this.video.readyState) && !app.settings.isIE) {
                            new Date();
                            var t = +new Date() - this.progressStartTime - 400;
                            t > 0 && this.drawShadow(t);
                        }
                    },
                    onUpdateShadow: function (t) {
                        (this.shadowParams = t),
                            ("#controls" === window.location.hash && "rint.network" !== window.location.hostname.toLowerCase()) ||
                                ("light" === this.theme && (this.shadowParams = { crop: 0, resolution: 0.3, opacity: 0.3, blur: 22, spread: 1, shift: 2, overlayOpacity: 0.7, overallOpacity: 0.4 }),
                                "dark" === this.theme && (this.shadowParams = { crop: 0, resolution: 0.3, opacity: 1, blur: 22, spread: 1, shift: 3, overlayOpacity: 0.52, overallOpacity: 0.4 })),
                            this.updateShadow();
                    },
                    updateShadow: function () {
                        this.canvas && e(this.canvas).css({ filter: "blur(" + this.shadowParams.blur + "px)", "margin-top": this.shadowParams.shift + "%" }),
                            (this.shadowParams.cw = e(this.canvas).width() * this.shadowParams.resolution),
                            (this.shadowParams.ch = e(this.canvas).height() * this.shadowParams.resolution),
                            this.canvas && ((this.canvas.width = this.shadowParams.cw), (this.canvas.height = this.shadowParams.ch));
                    },
                    drawShadow: function (t) {
                        var e = this.shadowParams;
                        this.ctx.drawImage(this.video, -e.cw * e.crop, -e.ch * e.crop, e.cw * (1 + 2 * e.crop), e.ch * (1 + 2 * e.crop));
                        var n,
                            i,
                            r = -4,
                            o = 0,
                            s = 0,
                            a = 0,
                            l = 0,
                            u = (n = this.ctx.getImageData(0, 0, e.cw, e.ch)).data;
                        for (i = u.length; (r += 20) < i; ) ++o, (s += u[r]), (a += u[r + 1]), (l += u[r + 2]);
                        var c,
                            h,
                            p = (0.2126 * s + 0.7152 * a + 0.0722 * l) / o;
                        (s = ~~(s / o)),
                            (a = ~~(a / o)),
                            (l = ~~(l / o)),
                            (this.overlayColors.r = this.overlayColors.r - 0.45 * (this.overlayColors.r - s)),
                            (this.overlayColors.g = this.overlayColors.g - 0.45 * (this.overlayColors.g - a)),
                            (this.overlayColors.b = this.overlayColors.b - 0.45 * (this.overlayColors.b - l)),
                            (c = "light" === this.theme ? Math.min(Math.max(Math.pow(p / 255, 0.5), 0.4), 1) * e.opacity + (1 - e.opacity) : Math.min(Math.max(Math.pow(1 - p / 255, 0.5), 0.4), 1) * e.opacity + (1 - e.opacity));
                        var f;
                        (f = "light" === this.theme ? (Math.min(Math.max(p / 255, 0.8), 1) - 0.8) / (1 - 0.8) : (Math.min(Math.max((1 - p) / 255, 0.8), 1) - 0.8) / (1 - 0.8)), (h = e.overlayOpacity + f * (1 - e.overlayOpacity));
                        var d = e.overallOpacity * (Math.min(t, 1e3) / 1e3);
                        (c *= d), (h *= d), (r = -4);
                        for (var m = Math.round(255 * c); (r += 4) < i; ) u[r + 3] = m;
                        this.ctx.putImageData(n, 0, 0),
                            (this.ctx.globalAlpha = h),
                            (this.ctx.fillStyle = "rgb(" + Math.round(this.overlayColors.r) + ", " + Math.round(this.overlayColors.g) + ", " + Math.round(this.overlayColors.b) + ")"),
                            this.ctx.fillRect(0, 0, e.cw, e.ch),
                            (this.ctx.globalAlpha = 1),
                            "dark" === this.theme &&
                                ((this.ctx.globalAlpha = 0.3),
                                (this.ctx.globalCompositeOperation = "luminosity"),
                                (this.ctx.fillStyle = "rgb(0, 0, 0)"),
                                this.ctx.fillRect(0, 0, e.cw, e.ch),
                                (this.ctx.globalCompositeOperation = "source-over"),
                                (this.ctx.globalAlpha = 1));
                    },
                    positionTexts: function () {
                        this.$texts.filter('[data-positionv="center"]').each(
                            function (t, n) {
                                var i = e(n).height(),
                                    r = parseInt(e(n).css("font-size"), 10);
                                e(n).css("margin-top", -Math.round(i / 2 - (16 * r) / 24));
                            }.bind(this)
                        );
                    },
                    proceedVideoFrame: function () {
                        var t = app.settings.isMobile && this.isWeakDevice() ? 3 : 2;
                        this.frameCounter % t && this.onVideoProgressShadow(), this.onVideoProgressTexts(), this.frameCounter++, (this.videoFrameID = window.requestAnimationFrame(this.proceedVideoFrame));
                    },
                    resumeLoop: function () {
                        clearTimeout(this.pauseTimeout),
                            clearTimeout(this.shadowHideTimeout),
                            clearTimeout(this.playTimeout),
                            window.cancelAnimationFrame(this.videoFrameID),
                            this.positionTexts(),
                            this.loadVideo(),
                            this.videoReady || 3 === this.video.readyState || 4 === this.video.readyState ? this.playVideo() : (e(this.video).on("canplay", this.playVideo), e(this.video).on("canplaythrough", this.playVideo));
                    },
                    playVideo: function () {
                        e(this.video).off("canplay", this.onVideoCanPlay),
                            e(this.video).off("canplaythrough", this.onVideoCanPlay),
                            (this.videoReady = !0),
                            this.$el.addClass("show-video"),
                            (this.playTimeout = setTimeout(
                                function () {
                                    this.$el.addClass("show-shadow"), (this.progressStartTime = +new Date()), (this.frameCounter = 0), this.proceedVideoFrame();
                                }.bind(this),
                                350
                            )),
                            this.$(".ProjectsItem-texts").show(),
                            this.shadowVisible || (this.$(".ProjectsItem-shadowWrapper").css("display", "block"), (this.shadowVisible = !0)),
                            this.updateShadow(),
                            this.drawShadow(1),
                            this.video.play();
                    },
                    pauseLoop: function () {
                        e(this.video).off("canplay", this.onVideoCanPlay),
                            e(this.video).off("canplaythrough", this.onVideoCanPlay),
                            clearTimeout(this.pauseTimeout),
                            clearTimeout(this.shadowHideTimeout),
                            clearTimeout(this.playTimeout),
                            window.cancelAnimationFrame(this.videoFrameID),
                            this.$texts.hide(),
                            this.$texts.removeClass("show"),
                            this.$texts.outerHeight(),
                            this.$texts.show(),
                            this.$el.removeClass("show-video"),
                            this.$el.removeClass("show-shadow"),
                            this.video && this.video.pause(),
                            (this.pauseTimeout = setTimeout(
                                function () {
                                    this.video && (this.video.currentTime = 0), this.$(".ProjectsItem-texts").hide();
                                }.bind(this),
                                350
                            )),
                            (this.shadowHideTimeout = setTimeout(
                                function () {
                                    this.shadowVisible && (this.$(".ProjectsItem-shadowWrapper").css("display", ""), (this.shadowVisible = !1));
                                }.bind(this),
                                1e3
                            ));
                    },
                }));
        }.call(this, n(2)));
    },
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {
        (function (e) {
            var i = n(1),
                r = n(3);
            n(56);
            var o = n(57);
            t.exports = r.extend({
                el: ".VideoHead",
                events: { "click .VideoHead-reel-inner": "onPlayClick", "click .VideoHead-popup-video": "onVideoClose" },
                initialize: function (t) {
                    (this.options = t || {}),
                        i.bindAll(this, "onPageLoaded", "onResize", "getReelParalaxDuration", "playLoopVideo", "resumeLoop", "pauseLoop", "setOnScrollPopup", "onScrollPopup"),
                        (this.indexPageMode = this.$el.hasClass("VideoHead--darkThemeOnReel"));
                    this.$(".VideoHead-header").onCustom("screen-position", function (t, e) {
                        +new Date(), e.screenPosition > 0 && e.$el.addClass("show").offCustom("screen-position");
                    }),
                        this.$(".VideoHead-reel").onCustom(
                            "screen-position",
                            function (t, e) {
                                if (e.screenPosition > 0) {
                                    e.$el.offCustom("screen-position"), e.$el.addClass("show");
                                    var i = 1e3 * parseFloat(e.$el.css("transition-duration").split(",")[0]),
                                        r = 1e3 * parseFloat(e.$el.css("transition-delay").split(",")[0]);
                                    setTimeout(function () {
                                        (n.shown = !0), n.entered && n.resumeLoop(), e.$el.addClass("shown");
                                    }, i + r + 100);
                                }
                            }.bind(this)
                        );
                    var n = this;
                    this.$(".VideoHead-reel").onCustom("screen-enter", function (t, e) {
                        (n.entered = !0), n.shown && n.resumeLoop();
                    }),
                        this.$(".VideoHead-reel").onCustom("screen-leave", function (t, e) {
                            (n.entered = !1), n.shown && n.pauseLoop();
                        }),
                        e(window).on("resize", this.onResize),
                        this.onResize(),
                        app.vent.on("page-loaded", this.onPageLoaded),
                        r.prototype.initialize.call(this, t);
                },
                onPageLoaded: function () {
                    this.windowScrollTop = e(window).scrollTop();
                    var t = e('<video muted playsinline crossorigin loop preload="auto" src="' + this.$(".VideoHead-reel").attr("data-video") + '"></video>');
                    t.insertBefore(this.$(".VideoHead-reel-inner img")),
                        (this.video = t.get(0)),
                        this.video &&
                            this.video.addEventListener(
                                "ended",
                                function () {
                                    this.video.play();
                                }.bind(this),
                                !1
                            );
                },
                onResize: function () {
                    for (
                        var t = document.body.clientWidth,
                            n =
                                (e(window).height(),
                                [
                                    { ww: 0, margin: -249 },
                                    { ww: 498, margin: 0 },
                                    { ww: 542, margin: 22 },
                                    { ww: 667, margin: 22 },
                                    { ww: 671, margin: 24 },
                                    { ww: 768, margin: 24 },
                                    { ww: 786, margin: 33 },
                                    { ww: 1024, margin: 33 },
                                    { ww: 1038, margin: 40 },
                                    { ww: 1152, margin: 40 },
                                    { ww: 1162, margin: 45 },
                                    { ww: 1280, margin: 45 },
                                    { ww: 1440, margin: 45 },
                                    { ww: 1e4, margin: 4325 },
                                ]),
                            i = n.length - 1;
                        i >= 0 && !(n[i].ww <= t);
                        i--
                    );
                    var r = n[i],
                        o = n[i + 1],
                        s = (t - r.ww) / (o.ww - r.ww),
                        a = (o.margin - r.margin) * s + r.margin,
                        l = t - 2 * a;
                    this.$(".VideoHead-reel").css({ width: Math.round(l), "margin-left": Math.round(a) }), this.setYTVideoSizeAndPos(a), (this.reelBottomPos = this.$(".VideoHead-reel").offset().top + this.$(".VideoHead-reel").height());
                },
                setYTVideoSizeAndPos: function (t) {
                    var n,
                        i,
                        r = this.$(".VideoHead-popup-video-container"),
                        o = this.$(".VideoHead-popup-video-placeholder"),
                        s = r.width(),
                        a = r.height();
                    s / a < 16 / 9 ? ((n = s), (i = s / (16 / 9))) : ((n = a * (16 / 9)), (i = a));
                    var l = -(n - s) / 2,
                        u = -(i - a) / 2;
                    o.css({ left: l, top: u, width: n, height: i }), this.$("#player-mobile").css({ width: Math.round(e(window).width()), left: Math.round(-1 * t) });
                },
                resumeLoop: function () {
                    app.settings.isMobile ? (app.settings.canAutoplay || this.videoReady ? this.playLoopVideo() : e("body").one("touchstart", this.playLoopVideo)) : this.playLoopVideo();
                },
                playLoopVideo: function () {
                    this.video.play(),
                        (this.checkPlayInterval = setInterval(
                            function () {
                                this.video.currentTime > 0 &&
                                    (clearInterval(this.checkPlayInterval),
                                    this.$(".VideoHead-reel img").addClass("hidden"),
                                    setTimeout(
                                        function () {
                                            this.$(".VideoHead-reel img").remove();
                                        }.bind(this),
                                        500
                                    ));
                            }.bind(this),
                            30
                        )),
                        (this.videoReady = !0);
                },
                pauseLoop: function () {
                    e("body").off("touchstart", this.playLoopVideo), clearInterval(this.checkPlayInterval), this.videoReady && this.video.pause();
                },
                getReelParalaxDuration: function () {
                    return this.reelBottomPos;
                },
                onPlayClick: function () {
                    if (!this.isPlayClicked) {
                        if ((clearTimeout(this.stopTimeout), clearInterval(this.volumeInterval), !this.player)) {
                            app.settings.isDesktop && (this.$(".VideoHead-popup-video").show(), this.onResize());
                            var t = app.settings.isDesktop ? "player" : "player-mobile";
                            (this.player = o(t, { videoId: "QOSdNbElLXo", playerVars: { autoplay: 0, controls: 1, autohide: 1, wmode: "opaque", origin: "https://rint.network" } })),
                                this.player.on("ready", function (t) {
                                    t.target.playVideo();
                                });
                            var e = this;
                            app.settings.isDesktop ||
                                this.player.on("stateChange", function (t) {
                                    t && 2 === t.data
                                        ? (e.videoPauseTimeout = setTimeout(function () {
                                              e.onVideoPauseMobile();
                                          }, 100))
                                        : e.videoPauseTimeout && clearTimeout(e.videoPauseTimeout);
                                });
                        }
                        (this.isPlayClicked = !0),
                            this.$(".VideoHead-reel-innerPlay").flashClass("pushed", 170),
                            app.settings.isDesktop
                                ? (void 0 !== this.lastVolume && this.player.setVolume(this.lastVolume),
                                  this.$(".VideoHead-reel-overlay").show(),
                                  setTimeout(
                                      function () {
                                          this.$(".VideoHead-reel-overlay").addClass("show");
                                      }.bind(this),
                                      30
                                  ),
                                  this.player.playVideo(),
                                  this.pauseLoop(),
                                  this.setDarkTheme(),
                                  setTimeout(
                                      function () {
                                          this.setOnScrollPopup(), this.$(".VideoHead-popup-video").addClass("show"), this.indexPageMode || this.disableGlobalScroll(), (this.isPlayClicked = !1);
                                      }.bind(this),
                                      300
                                  ))
                                : (this.$(".VideoHead-reel-inner").css("visibility", "hidden"), this.$("#player-mobile").addClass("show"), this.player.playVideo(), this.pauseLoop());
                    }
                },
                setOnScrollPopup: function () {
                    (this.windowScrollTop = e(window).scrollTop()), e(window).on("scroll", this.onScrollPopup);
                },
                onScrollPopup: function (t) {
                    if (this.indexPageMode && this.$(".VideoHead-popup-video").hasClass("show") && e(window).scrollTop() > this.windowScrollTop + 100) {
                        this.setDarkTheme();
                        var n = this;
                        setTimeout(function () {
                            n.onVideoClose(), n.setDarkTheme();
                        }, 500);
                    }
                },
                onVideoClose: function (t) {
                    clearTimeout(this.stopTimeout),
                        clearInterval(this.volumeInterval),
                        this.$(".VideoHead-popup-video").removeClass("show"),
                        this.resumeLoop(),
                        e(window).off("scroll", this.onScrollPopup),
                        this.$(".VideoHead-reel-overlay").removeClass("show"),
                        setTimeout(
                            function () {
                                this.$(".VideoHead-reel-overlay").hide();
                            }.bind(this),
                            1e3
                        );
                    var n = this;
                    if ((this.indexPageMode || this.enableGlobalScroll(), app.settings.isDesktop)) {
                        var i = +new Date(),
                            r = i + 350;
                        this.resetDarkTheme(),
                            this.player.getVolume().then(function (t) {
                                (n.lastVolume = t),
                                    (n.volumeInterval = setInterval(function () {
                                        var e = +new Date(),
                                            o = r - i;
                                        if (((e = Math.min(Math.max(e, i), r)), o)) var s = (e - i) / o;
                                        else s = 1;
                                        (s = 1 - s), n.player.setVolume(Math.round(t * s)), 0 === s && clearInterval(n.volumeInterval);
                                    }, 17));
                            });
                    }
                    this.stopTimeout = setTimeout(function () {
                        n.player.stopVideo();
                    }, 350);
                },
                disableGlobalScroll: function () {
                    e("html").css("overflow", "hidden");
                },
                enableGlobalScroll: function () {
                    e("html").css("overflow", "");
                },
                setDarkTheme: function () {
                    this.indexPageMode && (e("html").addClass("dark-theme").flashClass("dark-theme-transition", 1500), app.vent.trigger("theme-change", "dark"));
                },
                resetDarkTheme: function () {
                    this.indexPageMode && (e("html").removeClass("dark-theme").flashClass("dark-theme-transition", 1500), app.vent.trigger("theme-change", "light"));
                },
                onVideoPauseMobile: function () {
                    (this.isPlayClicked = !1), this.$(".VideoHead-reel-inner").css("visibility", "visible"), this.$("#player-mobile").removeClass("show"), this.resumeLoop();
                },
            });
        }.call(this, n(2)));
    },
    function (t, e, n) {},
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      },
            r = a(n(58)),
            o = a(n(59)),
            s = a(n(61));
        function a(t) {
            return t && t.__esModule ? t : { default: t };
        }
        var l = void 0;
        (e.default = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                a = (0, r.default)();
            if ((l || (l = (0, o.default)(a)), e.events)) throw new Error("Event handlers cannot be overwritten.");
            if ("string" == typeof t && !document.getElementById(t)) throw new Error('Element "' + t + '" does not exist.');
            e.events = s.default.proxyEvents(a);
            var u = new Promise(function (n) {
                    "object" === (void 0 === t ? "undefined" : i(t)) && t.playVideo instanceof Function
                        ? n(t)
                        : l.then(function (i) {
                              var r = new i.Player(t, e);
                              return (
                                  a.on("ready", function () {
                                      n(r);
                                  }),
                                  null
                              );
                          });
                }),
                c = s.default.promisifyPlayer(u, n);
            return (c.on = a.on), (c.off = a.off), c;
        }),
            (t.exports = e.default);
    },
    function (t, e, n) {
        "use strict";
        var i;
        /**
         * @link https://github.com/gajus/sister for the canonical source repository
         * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
         */ (i = function () {
            var t = {},
                e = {};
            return (
                (t.on = function (t, n) {
                    var i = { name: t, handler: n };
                    return (e[t] = e[t] || []), e[t].unshift(i), i;
                }),
                (t.off = function (t) {
                    var n = e[t.name].indexOf(t);
                    -1 !== n && e[t.name].splice(n, 1);
                }),
                (t.trigger = function (t, n) {
                    var i,
                        r = e[t];
                    if (r) for (i = r.length; i--; ) r[i].handler(n);
                }),
                t
            );
        }),
            (t.exports = i);
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i,
            r = n(60),
            o = (i = r) && i.__esModule ? i : { default: i };
        (e.default = function (t) {
            return new Promise(function (e) {
                if (window.YT && window.YT.Player && window.YT.Player instanceof Function) e(window.YT);
                else {
                    var n = "http:" === window.location.protocol ? "http:" : "https:";
                    (0, o.default)(n + "//www.youtube.com/iframe_api", function (e) {
                        e && t.trigger("error", e);
                    });
                    var i = window.onYouTubeIframeAPIReady;
                    window.onYouTubeIframeAPIReady = function () {
                        i && i(), e(window.YT);
                    };
                }
            });
        }),
            (t.exports = e.default);
    },
    function (t, e) {
        function n(t, e) {
            (t.onload = function () {
                (this.onerror = this.onload = null), e(null, t);
            }),
                (t.onerror = function () {
                    (this.onerror = this.onload = null), e(new Error("Failed to load " + this.src), t);
                });
        }
        function i(t, e) {
            t.onreadystatechange = function () {
                ("complete" != this.readyState && "loaded" != this.readyState) || ((this.onreadystatechange = null), e(null, t));
            };
        }
        t.exports = function (t, e, r) {
            var o = document.head || document.getElementsByTagName("head")[0],
                s = document.createElement("script");
            "function" == typeof e && ((r = e), (e = {})),
                (e = e || {}),
                (r = r || function () {}),
                (s.type = e.type || "text/javascript"),
                (s.charset = e.charset || "utf8"),
                (s.async = !("async" in e) || !!e.async),
                (s.src = t),
                e.attrs &&
                    (function (t, e) {
                        for (var n in e) t.setAttribute(n, e[n]);
                    })(s, e.attrs),
                e.text && (s.text = "" + e.text),
                ("onload" in s ? n : i)(s, r),
                s.onload || n(s, r),
                o.appendChild(s);
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = a(n(62)),
            r = a(n(65)),
            o = a(n(66)),
            s = a(n(67));
        function a(t) {
            return t && t.__esModule ? t : { default: t };
        }
        var l = (0, i.default)("youtube-player"),
            u = {
                proxyEvents: function (t) {
                    var e = {},
                        n = function (n) {
                            var i = "on" + n.slice(0, 1).toUpperCase() + n.slice(1);
                            e[i] = function (e) {
                                l('event "%s"', i, e), t.trigger(n, e);
                            };
                        },
                        i = !0,
                        r = !1,
                        s = void 0;
                    try {
                        for (var a, u = o.default[Symbol.iterator](); !(i = (a = u.next()).done); i = !0) {
                            n(a.value);
                        }
                    } catch (t) {
                        (r = !0), (s = t);
                    } finally {
                        try {
                            !i && u.return && u.return();
                        } finally {
                            if (r) throw s;
                        }
                    }
                    return e;
                },
                promisifyPlayer: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = {},
                        i = function (i) {
                            e && s.default[i]
                                ? (n[i] = function () {
                                      for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                      return t.then(function (t) {
                                          var e = s.default[i],
                                              r = t.getPlayerState(),
                                              o = t[i].apply(t, n);
                                          return e.stateChangeRequired || (Array.isArray(e.acceptableStates) && -1 === e.acceptableStates.indexOf(r))
                                              ? new Promise(function (n) {
                                                    t.addEventListener("onStateChange", function i() {
                                                        var r = t.getPlayerState(),
                                                            o = void 0;
                                                        "number" == typeof e.timeout &&
                                                            (o = setTimeout(function () {
                                                                t.removeEventListener("onStateChange", i), n();
                                                            }, e.timeout)),
                                                            Array.isArray(e.acceptableStates) && -1 !== e.acceptableStates.indexOf(r) && (t.removeEventListener("onStateChange", i), clearTimeout(o), n());
                                                    });
                                                }).then(function () {
                                                    return o;
                                                })
                                              : o;
                                      });
                                  })
                                : (n[i] = function () {
                                      for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                      return t.then(function (t) {
                                          return t[i].apply(t, n);
                                      });
                                  });
                        },
                        o = !0,
                        a = !1,
                        l = void 0;
                    try {
                        for (var u, c = r.default[Symbol.iterator](); !(o = (u = c.next()).done); o = !0) {
                            var h = u.value;
                            i(h);
                        }
                    } catch (t) {
                        (a = !0), (l = t);
                    } finally {
                        try {
                            !o && c.return && c.return();
                        } finally {
                            if (a) throw l;
                        }
                    }
                    return n;
                },
            };
        (e.default = u), (t.exports = e.default);
    },
    function (t, e, n) {
        (function (i) {
            function r() {
                var t;
                try {
                    t = e.storage.debug;
                } catch (t) {}
                return !t && void 0 !== i && "env" in i && (t = Object({ NODE_ENV: "production" }).DEBUG), t;
            }
            ((e = t.exports = n(63)).log = function () {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
            }),
                (e.formatArgs = function (t) {
                    var n = this.useColors;
                    if (((t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff)), !n)) return;
                    var i = "color: " + this.color;
                    t.splice(1, 0, i, "color: inherit");
                    var r = 0,
                        o = 0;
                    t[0].replace(/%[a-zA-Z%]/g, function (t) {
                        "%%" !== t && (r++, "%c" === t && (o = r));
                    }),
                        t.splice(o, 0, i);
                }),
                (e.save = function (t) {
                    try {
                        null == t ? e.storage.removeItem("debug") : (e.storage.debug = t);
                    } catch (t) {}
                }),
                (e.load = r),
                (e.useColors = function () {
                    if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
                    return (
                        ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
                        ("undefined" != typeof window && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
                        ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
                        ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
                    );
                }),
                (e.storage =
                    "undefined" != typeof chrome && void 0 !== chrome.storage
                        ? chrome.storage.local
                        : (function () {
                              try {
                                  return window.localStorage;
                              } catch (t) {}
                          })()),
                (e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"]),
                (e.formatters.j = function (t) {
                    try {
                        return JSON.stringify(t);
                    } catch (t) {
                        return "[UnexpectedJSONParseError]: " + t.message;
                    }
                }),
                e.enable(r());
        }.call(this, n(11)));
    },
    function (t, e, n) {
        var i;
        function r(t) {
            function n() {
                if (n.enabled) {
                    var t = n,
                        r = +new Date(),
                        o = r - (i || r);
                    (t.diff = o), (t.prev = i), (t.curr = r), (i = r);
                    for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                    (s[0] = e.coerce(s[0])), "string" != typeof s[0] && s.unshift("%O");
                    var l = 0;
                    (s[0] = s[0].replace(/%([a-zA-Z%])/g, function (n, i) {
                        if ("%%" === n) return n;
                        l++;
                        var r = e.formatters[i];
                        if ("function" == typeof r) {
                            var o = s[l];
                            (n = r.call(t, o)), s.splice(l, 1), l--;
                        }
                        return n;
                    })),
                        e.formatArgs.call(t, s);
                    var u = n.log || e.log || console.log.bind(console);
                    u.apply(t, s);
                }
            }
            return (
                (n.namespace = t),
                (n.enabled = e.enabled(t)),
                (n.useColors = e.useColors()),
                (n.color = (function (t) {
                    var n,
                        i = 0;
                    for (n in t) (i = (i << 5) - i + t.charCodeAt(n)), (i |= 0);
                    return e.colors[Math.abs(i) % e.colors.length];
                })(t)),
                "function" == typeof e.init && e.init(n),
                n
            );
        }
        ((e = t.exports = r.debug = r.default = r).coerce = function (t) {
            return t instanceof Error ? t.stack || t.message : t;
        }),
            (e.disable = function () {
                e.enable("");
            }),
            (e.enable = function (t) {
                e.save(t), (e.names = []), (e.skips = []);
                for (var n = ("string" == typeof t ? t : "").split(/[\s,]+/), i = n.length, r = 0; r < i; r++)
                    n[r] && ("-" === (t = n[r].replace(/\*/g, ".*?"))[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")));
            }),
            (e.enabled = function (t) {
                var n, i;
                for (n = 0, i = e.skips.length; n < i; n++) if (e.skips[n].test(t)) return !1;
                for (n = 0, i = e.names.length; n < i; n++) if (e.names[n].test(t)) return !0;
                return !1;
            }),
            (e.humanize = n(64)),
            (e.names = []),
            (e.skips = []),
            (e.formatters = {});
    },
    function (t, e) {
        var n = 1e3,
            i = 6e4,
            r = 36e5,
            o = 24 * r;
        function s(t, e, n) {
            if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s";
        }
        t.exports = function (t, e) {
            e = e || {};
            var a,
                l = typeof t;
            if ("string" === l && t.length > 0)
                return (function (t) {
                    if ((t = String(t)).length > 100) return;
                    var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
                    if (!e) return;
                    var s = parseFloat(e[1]);
                    switch ((e[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return 315576e5 * s;
                        case "days":
                        case "day":
                        case "d":
                            return s * o;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return s * r;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return s * i;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return s * n;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return s;
                        default:
                            return;
                    }
                })(t);
            if ("number" === l && !1 === isNaN(t))
                return e.long
                    ? s((a = t), o, "day") || s(a, r, "hour") || s(a, i, "minute") || s(a, n, "second") || a + " ms"
                    : (function (t) {
                          if (t >= o) return Math.round(t / o) + "d";
                          if (t >= r) return Math.round(t / r) + "h";
                          if (t >= i) return Math.round(t / i) + "m";
                          if (t >= n) return Math.round(t / n) + "s";
                          return t + "ms";
                      })(t);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = [
                "cueVideoById",
                "loadVideoById",
                "cueVideoByUrl",
                "loadVideoByUrl",
                "playVideo",
                "pauseVideo",
                "stopVideo",
                "getVideoLoadedFraction",
                "cuePlaylist",
                "loadPlaylist",
                "nextVideo",
                "previousVideo",
                "playVideoAt",
                "setShuffle",
                "setLoop",
                "getPlaylist",
                "getPlaylistIndex",
                "setOption",
                "mute",
                "unMute",
                "isMuted",
                "setVolume",
                "getVolume",
                "seekTo",
                "getPlayerState",
                "getPlaybackRate",
                "setPlaybackRate",
                "getAvailablePlaybackRates",
                "getPlaybackQuality",
                "setPlaybackQuality",
                "getAvailableQualityLevels",
                "getCurrentTime",
                "getDuration",
                "removeEventListener",
                "getVideoUrl",
                "getVideoEmbedCode",
                "getOptions",
                "getOption",
                "addEventListener",
                "destroy",
                "setSize",
                "getIframe",
            ]),
            (t.exports = e.default);
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"]), (t.exports = e.default);
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i,
            r = n(68),
            o = (i = r) && i.__esModule ? i : { default: i };
        (e.default = {
            pauseVideo: { acceptableStates: [o.default.ENDED, o.default.PAUSED], stateChangeRequired: !1 },
            playVideo: { acceptableStates: [o.default.ENDED, o.default.PLAYING], stateChangeRequired: !1 },
            seekTo: { acceptableStates: [o.default.ENDED, o.default.PLAYING, o.default.PAUSED], stateChangeRequired: !0, timeout: 3e3 },
        }),
            (t.exports = e.default);
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = { BUFFERING: 3, ENDED: 0, PAUSED: 2, PLAYING: 1, UNSTARTED: -1, VIDEO_CUED: 5 }), (t.exports = e.default);
    },
    function (t, e, n) {
        (function (e) {
            var i = n(1),
                r = n(3);
            n(70),
                (t.exports = r.extend({
                    el: ".WorksList",
                    events: {
                        "mouseenter .WorksList-listItem-title": "onItemMouseEnter",
                        "mousemove .WorksList-listItem-title": "onItemMouseMove",
                        "mouseleave .WorksList-listItem-title": "onItemMouseLeave",
                        "click .WorksList-listItem-title": "onItemClick",
                    },
                    initialize: function (t) {
                        (this.options = t || {}), i.bindAll(this, "moveImage"), (this.moveImage.__throttled = i.throttle(this.moveImage.bind(this), 30)), r.prototype.initialize.call(this, t);
                    },
                    onItemMouseEnter: function (t) {
                        if (app.settings.isDesktop) {
                            var n = e(t.target).closest(".WorksList-listItem"),
                                i = n.find(".WorksList-listItem-title");
                            n.find(".WorksList-listItem-imageWrapper");
                            this.$(".WorksList-listItem").removeClass("active inactive");
                            var r = window.getComputedStyle(i[0], ":after"),
                                o = parseInt(r.getPropertyValue("margin-top"), 10),
                                s = parseInt(r.getPropertyValue("left"), 10),
                                a = parseInt(r.getPropertyValue("width"), 10),
                                l = parseInt(r.getPropertyValue("height"), 10);
                            (this.hoverArea = { x: i.offset().left + s, y: i.offset().top + o, w: a, h: l }), n.addClass("active").siblings().addClass("inactive");
                        }
                    },
                    onItemMouseMove: function (t) {
                        this.moveImage.__throttled(t);
                    },
                    moveImage: function (t) {
                        if (app.settings.isDesktop) {
                            var n = e(t.currentTarget).closest(".WorksList-listItem").find(".WorksList-listItem-hoverWrapper"),
                                i = t.pageX,
                                r = t.pageY,
                                o = (i - this.hoverArea.x) / this.hoverArea.w,
                                s = (r - this.hoverArea.y) / this.hoverArea.h;
                            window.innerWidth < 1024 ? n.css("transform", "translate(" + (30 * o - 15) + "px, " + (20 * s - 10) + "px)") : n.css("transform", "translate(" + (60 * o - 30) + "px, " + (40 * s - 20) + "px)");
                        }
                    },
                    onItemMouseLeave: function (t) {
                        app.settings.isDesktop && this.$(".WorksList-listItem").removeClass("active inactive");
                    },
                    onItemClick: function (t) {
                        if (!app.settings.isDesktop) {
                            var n = e(t.target).closest(".WorksList-listItem"),
                                i = n.hasClass("active");
                            this.$(".WorksList-listItem").removeClass("active inactive"), i || n.addClass("active").siblings().addClass("inactive");
                        }
                    },
                }));
        }.call(this, n(2)));
    },
    function (t, e, n) {},
    function (t, e, n) {
        var i = n(72);
        t.exports = i.extend({
            initialize: function (t) {
                (this.isSubSectionDummy = !0), i.prototype.initialize.call(this, t);
            },
            isRendered: function () {
                return !0;
            },
            attach: function () {},
            render: function () {
                return this;
            },
            activate: function (t) {
                return this.parent.setTitle(), i.prototype.activate.call(this, t);
            },
            destroy: function () {
                return i.prototype.destroy.call(this);
            },
            deactivate: function (t) {
                return i.prototype.deactivate.call(this, t);
            },
        });
    },
    function (t, e, n) {
        n(1);
        var i = n(13);
        t.exports = i.extend({
            noAnimationOnEqualSubviews: !0,
            initialize: function (t) {
                (this.isSubSection = !0), i.prototype.initialize.call(this, t);
            },
            $parent: function () {
                return this.parent.$content;
            },
        });
    },
    function (t, e, n) {
        n(1);
        var i = n(5);
        n(74),
            (t.exports = i.extend({
                el: ".Index",
                events: {},
                initialize: function (t) {
                    i.prototype.initialize.call(this, t);
                },
            }));
    },
    function (t, e, n) {},
    function (t, e, n) {
        "use strict";
        (function (e) {
            n(6), n(1);
            var i = n(5);
            n(76),
                (t.exports = i.extend({
                    el: ".About",
                    events: {},
                    initialize: function (t) {
                        i.prototype.initialize.call(this, t),
                            e(".About-title").onCustom("screen-position", function (t, e) {
                                e.screenPosition > 0 && e.$el.addClass("show").offCustom("screen-position");
                            });
                        app.settings.animationDelay;
                        this.$(".About-subtitle").each(
                            function (t, n) {
                                var i = app.utils.splitMultilineToSeparateSpans({ $container: e(n).find("h1"), className: "About-subtitle-line", transparent: !0 }),
                                    r = app.utils.splitMultilineToSeparateSpans({ $container: e(n).find("p"), className: "About-subtitle-line", transparent: !0 });
                                e(n).onCustom(
                                    "screen-position",
                                    function (t, e) {
                                        if (e.screenPosition > 0) {
                                            e.$el.offCustom("screen-position");
                                            var n = app.settings.animationDelay + 180,
                                                o = app.utils.animateTextByLines(i, app.settings.animationDuration, app.settings.animationDelay, null, !1, 30, n);
                                            app.utils.animateTextByLines(r, app.settings.animationDuration, app.settings.animationDelay, null, !1, 30, o * app.settings.animationDelay + n);
                                        }
                                    }.bind(this)
                                );
                            }.bind(this)
                        ),
                            e(".svg--hand").onCustom("screen-position", function (t, e) {
                                e.screenPosition > 0 && e.$el.addClass("show").offCustom("screen-position");
                            });
                    },
                }));
        }.call(this, n(2)));
    },
    function (t, e, n) {},
    function (t, e, n) {
        "use strict";
        (function (e) {
            n(6), n(1);
            var i = n(5);
            n(78),
                (t.exports = i.extend({
                    el: ".Work",
                    events: {},
                    initialize: function (t) {
                        i.prototype.initialize.call(this, t),
                            this.$(".Work-header").onCustom("screen-position", function (t, e) {
                                e.screenPosition > 0 && e.$el.addClass("show").offCustom("screen-position");
                            }),
                            e(window).on("resize", this.onWorkResize),
                            this.onWorkResize();
                    },
                    onWorkResize: function () {
                        e(window).width() <= 375 ? e(".Work-header").addClass("Work-header-margin") : e(".Work-header").removeClass("Work-header-margin");
                    },
                }));
        }.call(this, n(2)));
    },
    function (t, e, n) {},
    function (t, e, n) {
        "use strict";
        (function (e) {
            n(6);
            var i = n(1),
                r = n(5);
            n(80),
                (t.exports = r.extend({
                    el: ".Clients",
                    events: { "click .Clients-show-more": "showMoreClients" },
                    initialize: function (t) {
                        var e;
                        r.prototype.initialize.call(this, t),
                            this.$(".Clients-header").onCustom("screen-position", function (t, e) {
                                e.screenPosition > 0 && e.$el.addClass("show").offCustom("screen-position");
                            }),
                            this.$(".Clients-description").onCustom("screen-position", function (t, e) {
                                e.screenPosition > 0 && e.$el.addClass("show").offCustom("screen-position");
                            });
                        var n = [];
                        this.$(".Clients-client").onCustom(
                            "screen-position",
                            function (t, r) {
                                r.screenPosition > 0 && (r.$el.offCustom("screen-position"), n.push(r.$el)),
                                    clearTimeout(e),
                                    (e = setTimeout(
                                        function () {
                                            if (n.length) {
                                                var t = n[0].offset().top,
                                                    e = 0,
                                                    r = 0;
                                                i.each(n, function (n, i) {
                                                    var o = n.offset().top;
                                                    o > t && ((t = o), (e += 100), (r = 0)),
                                                        setTimeout(function () {
                                                            n.addClass("show");
                                                        }, r + e),
                                                        (r += 50);
                                                }),
                                                    (n = []);
                                            }
                                        }.bind(this),
                                        0
                                    ));
                            }.bind(this)
                        );
                    },
                    showMoreClients: function (t) {
                        this.$(".Clients-clients-others").css("max-height", this.$(".Clients-clients-others-container").height());
                        var n = this.$(".Clients-clients-others .Clients-client.show");
                        n.removeClass("show"),
                            n.css("transition", "none"),
                            setTimeout(
                                function () {
                                    var t = 0;
                                    n.css("transition", ""),
                                        n.each(function (n, i) {
                                            setTimeout(function () {
                                                e(i).addClass("show");
                                            }, t),
                                                (t += 50);
                                        });
                                }.bind(this),
                                300
                            ),
                            setTimeout(
                                function () {
                                    this.$(".Clients-clients-others").css("max-height", "none");
                                }.bind(this),
                                2e3
                            ),
                            e(t.target).slideUp(1500, function () {
                                e(this).remove();
                            });
                    },
                }));
        }.call(this, n(2)));
    },
    function (t, e, n) {},
    function (t, e, n) {
        "use strict";
        (function (e) {
            var i = n(1),
                r = n(5);
            n(82),
                (t.exports = r.extend({
                    el: ".News",
                    events: { "click .News-back-to-top": "onBackToTopClick" },
                    initialize: function (t) {
                        if (
                            ((this.$arrow = this.$(".News-back-to-top")),
                            (this.footer = e(".Footer")[0]),
                            (this.footerBottom = e(".Footer-bottom")[0]),
                            i.bindAll(this, "onScroll", "onResizeInner"),
                            e(window).on("resize", this.onResizeInner),
                            this.onResizeInner(),
                            r.prototype.initialize.call(this, t),
                            this.$(".News-title").onCustom("screen-position", function (t, e) {
                                e.screenPosition > 0 && e.$el.addClass("show").offCustom("screen-position");
                            }),
                            this.$(".News-news-content-wrapper").onCustom("screen-position", function (t, e) {
                                e.screenPosition > 0 && e.$el.addClass("show").offCustom("screen-position");
                            }),
                            this.$(".Long-news-title").onCustom("screen-position", function (t, e) {
                                e.screenPosition > 0 && e.$el.addClass("show").offCustom("screen-position");
                            }),
                            this.$(".News-img-wrapper").onCustom("screen-position", function (t, e) {
                                e.screenPosition > 0 && e.$el.addClass("show").offCustom("screen-position");
                            }),
                            e(".News-invision-container").length && app.settings.isDesktop)
                        ) {
                            var n = document.createElement("iframe");
                            (n.title = "Invision"), (n.width = "100%"), (n.height = "870"), (n.src = "https://invis.io/J7S72JY8Z4E"), e(".News-invision-container").append(n);
                        }
                        function o(t) {
                            var e = t.target.dataset.block;
                            document.getElementById(e).scrollIntoView({ behavior: "smooth" });
                        }
                        this.$(".link").each(function (t, e) {
                            e.addEventListener("click", o);
                        });
                    },
                    onResizeInner: function () {
                        (this.windowWidth = window.innerWidth),
                            (this.windowHeight = window.innerHeight),
                            (this.footerHeight = this.footer.offsetHeight),
                            (this.footerBottomPadding = this.footerHeight - this.footerBottom.offsetTop - this.footerBottom.offsetHeight + (this.windowWidth < 666 ? 5 : 22)),
                            (this.arrowBottom = parseInt(this.$arrow.css("bottom"))),
                            (this.arrowScrollShow = this.$(".News-content").width() / (this.windowWidth < 666 ? 0.9 : 2.6));
                    },
                    onScroll: function () {
                        if (!this.scrollingToTop) {
                            var t = r.prototype.onScroll.call(this),
                                e = this.footer.offsetTop,
                                n = e < t + this.windowHeight - this.arrowBottom,
                                i = t > this.arrowScrollShow,
                                o = Math.max(t - (e + this.footerHeight - this.windowHeight - this.footerBottomPadding + this.arrowBottom), 0);
                            n != this.prevIsDarkBg && this.$arrow.toggleClass("dark-bg", n),
                                i != this.prevIsVisible && this.$arrow.toggleClass("visible", i),
                                o != this.prevFixedMargin && this.$arrow.css("margin-bottom", o),
                                (this.prevIsDarkBg = n),
                                (this.prevIsVisible = i),
                                (this.prevFixedMargin = o);
                        }
                    },
                    onBackToTopClick: function () {
                        window.pageYOffset;
                        this.scrollingToTop ||
                            (this.$arrow.removeClass("visible"),
                            (this.scrollingToTop = !0),
                            e("body, html").animate(
                                { scrollTop: 0 },
                                600,
                                function () {
                                    (this.scrollingToTop = !1), this.onScroll();
                                }.bind(this)
                            ));
                    },
                }));
        }.call(this, n(2)));
    },
    function (t, e, n) {},
    function (t, e, n) {
        n(1);
        var i = n(5);
        n(84),
            (t.exports = i.extend({
                el: ".NotFound",
                events: {},
                initialize: function (t) {
                    (this.options = t || {}), i.prototype.initialize.call(this, t);
                },
            }));
    },
    function (t, e, n) {},
    function (t, e, n) {
        !(function () {
            function e(t, e) {
                document.addEventListener ? t.addEventListener("scroll", e, !1) : t.attachEvent("scroll", e);
            }
            function n(t) {
                (this.a = document.createElement("div")),
                    this.a.setAttribute("aria-hidden", "true"),
                    this.a.appendChild(document.createTextNode(t)),
                    (this.b = document.createElement("span")),
                    (this.c = document.createElement("span")),
                    (this.h = document.createElement("span")),
                    (this.f = document.createElement("span")),
                    (this.g = -1),
                    (this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
                    (this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
                    (this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
                    (this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"),
                    this.b.appendChild(this.h),
                    this.c.appendChild(this.f),
                    this.a.appendChild(this.b),
                    this.a.appendChild(this.c);
            }
            function i(t, e) {
                t.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + e + ";";
            }
            function r(t) {
                var e = t.a.offsetWidth,
                    n = e + 100;
                return (t.f.style.width = n + "px"), (t.c.scrollLeft = n), (t.b.scrollLeft = t.b.scrollWidth + 100), t.g !== e && ((t.g = e), !0);
            }
            function o(t, n) {
                function i() {
                    var t = o;
                    r(t) && t.a.parentNode && n(t.g);
                }
                var o = t;
                e(t.b, i), e(t.c, i), r(t);
            }
            function s(t, e) {
                var n = e || {};
                (this.family = t), (this.style = n.style || "normal"), (this.weight = n.weight || "normal"), (this.stretch = n.stretch || "normal");
            }
            var a = null,
                l = null,
                u = null,
                c = null;
            function h() {
                return null === c && (c = !!document.fonts), c;
            }
            function p() {
                if (null === u) {
                    var t = document.createElement("div");
                    try {
                        t.style.font = "condensed 100px sans-serif";
                    } catch (t) {}
                    u = "" !== t.style.font;
                }
                return u;
            }
            function f(t, e) {
                return [t.style, t.weight, p() ? t.stretch : "", "100px", e].join(" ");
            }
            (s.prototype.load = function (t, e) {
                var r = this,
                    s = t || "BESbswy",
                    u = 0,
                    c = e || 3e3,
                    p = new Date().getTime();
                return new Promise(function (t, e) {
                    if (
                        h() &&
                        !(function () {
                            if (null === l)
                                if (h() && /Apple/.test(window.navigator.vendor)) {
                                    var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                                    l = !!t && 603 > parseInt(t[1], 10);
                                } else l = !1;
                            return l;
                        })()
                    ) {
                        var d = new Promise(function (t, e) {
                                !(function n() {
                                    new Date().getTime() - p >= c
                                        ? e(Error(c + "ms timeout exceeded"))
                                        : document.fonts.load(f(r, '"' + r.family + '"'), s).then(function (e) {
                                              1 <= e.length ? t() : setTimeout(n, 25);
                                          }, e);
                                })();
                            }),
                            m = new Promise(function (t, e) {
                                u = setTimeout(function () {
                                    e(Error(c + "ms timeout exceeded"));
                                }, c);
                            });
                        Promise.race([m, d]).then(function () {
                            clearTimeout(u), t(r);
                        }, e);
                    } else
                        !(function (t) {
                            document.body
                                ? t()
                                : document.addEventListener
                                ? document.addEventListener("DOMContentLoaded", function e() {
                                      document.removeEventListener("DOMContentLoaded", e), t();
                                  })
                                : document.attachEvent("onreadystatechange", function e() {
                                      ("interactive" != document.readyState && "complete" != document.readyState) || (document.detachEvent("onreadystatechange", e), t());
                                  });
                        })(function () {
                            function l() {
                                var e;
                                (e = (-1 != v && -1 != g) || (-1 != v && -1 != y) || (-1 != g && -1 != y)) &&
                                    ((e = v != g && v != y && g != y) ||
                                        (null === a && ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent)), (a = !!e && (536 > parseInt(e[1], 10) || (536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))))),
                                        (e = a && ((v == w && g == w && y == w) || (v == A && g == A && y == A) || (v == b && g == b && y == b)))),
                                    (e = !e)),
                                    e && (x.parentNode && x.parentNode.removeChild(x), clearTimeout(u), t(r));
                            }
                            var h = new n(s),
                                d = new n(s),
                                m = new n(s),
                                v = -1,
                                g = -1,
                                y = -1,
                                w = -1,
                                A = -1,
                                b = -1,
                                x = document.createElement("div");
                            (x.dir = "ltr"),
                                i(h, f(r, "sans-serif")),
                                i(d, f(r, "serif")),
                                i(m, f(r, "monospace")),
                                x.appendChild(h.a),
                                x.appendChild(d.a),
                                x.appendChild(m.a),
                                document.body.appendChild(x),
                                (w = h.a.offsetWidth),
                                (A = d.a.offsetWidth),
                                (b = m.a.offsetWidth),
                                (function t() {
                                    if (new Date().getTime() - p >= c) x.parentNode && x.parentNode.removeChild(x), e(Error(c + "ms timeout exceeded"));
                                    else {
                                        var n = document.hidden;
                                        (!0 !== n && void 0 !== n) || ((v = h.a.offsetWidth), (g = d.a.offsetWidth), (y = m.a.offsetWidth), l()), (u = setTimeout(t, 50));
                                    }
                                })(),
                                o(h, function (t) {
                                    (v = t), l();
                                }),
                                i(h, f(r, '"' + r.family + '",sans-serif')),
                                o(d, function (t) {
                                    (g = t), l();
                                }),
                                i(d, f(r, '"' + r.family + '",serif')),
                                o(m, function (t) {
                                    (y = t), l();
                                }),
                                i(m, f(r, '"' + r.family + '",monospace'));
                        });
                });
            }),
                (t.exports = s);
        })();
    },
    function (t, e, n) {
        var i;
        !(function () {
            "use strict";
            /**
             * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
             *
             * @codingstandard ftlabs-jsv2
             * @copyright The Financial Times Limited [All Rights Reserved]
             * @license MIT License (see LICENSE.txt)
             */ function r(t, e) {
                var n;
                if (
                    ((e = e || {}),
                    (this.trackingClick = !1),
                    (this.trackingClickStart = 0),
                    (this.targetElement = null),
                    (this.touchStartX = 0),
                    (this.touchStartY = 0),
                    (this.lastTouchIdentifier = 0),
                    (this.touchBoundary = e.touchBoundary || 10),
                    (this.layer = t),
                    (this.tapDelay = e.tapDelay || 200),
                    (this.tapTimeout = e.tapTimeout || 700),
                    !r.notNeeded(t))
                ) {
                    for (var i = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], o = 0, a = i.length; o < a; o++) this[i[o]] = l(this[i[o]], this);
                    s && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)),
                        t.addEventListener("click", this.onClick, !0),
                        t.addEventListener("touchstart", this.onTouchStart, !1),
                        t.addEventListener("touchmove", this.onTouchMove, !1),
                        t.addEventListener("touchend", this.onTouchEnd, !1),
                        t.addEventListener("touchcancel", this.onTouchCancel, !1),
                        Event.prototype.stopImmediatePropagation ||
                            ((t.removeEventListener = function (e, n, i) {
                                var r = Node.prototype.removeEventListener;
                                "click" === e ? r.call(t, e, n.hijacked || n, i) : r.call(t, e, n, i);
                            }),
                            (t.addEventListener = function (e, n, i) {
                                var r = Node.prototype.addEventListener;
                                "click" === e
                                    ? r.call(
                                          t,
                                          e,
                                          n.hijacked ||
                                              (n.hijacked = function (t) {
                                                  t.propagationStopped || n(t);
                                              }),
                                          i
                                      )
                                    : r.call(t, e, n, i);
                            })),
                        "function" == typeof t.onclick &&
                            ((n = t.onclick),
                            t.addEventListener(
                                "click",
                                function (t) {
                                    n(t);
                                },
                                !1
                            ),
                            (t.onclick = null));
                }
                function l(t, e) {
                    return function () {
                        return t.apply(e, arguments);
                    };
                }
            }
            var o = navigator.userAgent.indexOf("Windows Phone") >= 0,
                s = navigator.userAgent.indexOf("Android") > 0 && !o,
                a = /iP(ad|hone|od)/.test(navigator.userAgent) && !o,
                l = a && /OS 4_\d(_\d)?/.test(navigator.userAgent),
                u = a && /OS [6-7]_\d/.test(navigator.userAgent),
                c = navigator.userAgent.indexOf("BB10") > 0;
            (r.prototype.needsClick = function (t) {
                switch (t.nodeName.toLowerCase()) {
                    case "button":
                    case "select":
                    case "textarea":
                        if (t.disabled) return !0;
                        break;
                    case "input":
                        if ((a && "file" === t.type) || t.disabled) return !0;
                        break;
                    case "label":
                    case "iframe":
                    case "video":
                        return !0;
                }
                return /\bneedsclick\b/.test(t.className);
            }),
                (r.prototype.needsFocus = function (t) {
                    switch (t.nodeName.toLowerCase()) {
                        case "textarea":
                            return !0;
                        case "select":
                            return !s;
                        case "input":
                            switch (t.type) {
                                case "button":
                                case "checkbox":
                                case "file":
                                case "image":
                                case "radio":
                                case "submit":
                                    return !1;
                            }
                            return !t.disabled && !t.readOnly;
                        default:
                            return /\bneedsfocus\b/.test(t.className);
                    }
                }),
                (r.prototype.sendClick = function (t, e) {
                    var n, i;
                    document.activeElement && document.activeElement !== t && document.activeElement.blur(),
                        (i = e.changedTouches[0]),
                        (n = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null),
                        (n.forwardedTouchEvent = !0),
                        t.dispatchEvent(n);
                }),
                (r.prototype.determineEventType = function (t) {
                    return s && "select" === t.tagName.toLowerCase() ? "mousedown" : "click";
                }),
                (r.prototype.focus = function (t) {
                    var e;
                    a && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? ((e = t.value.length), t.setSelectionRange(e, e)) : t.focus();
                }),
                (r.prototype.updateScrollParent = function (t) {
                    var e, n;
                    if (!(e = t.fastClickScrollParent) || !e.contains(t)) {
                        n = t;
                        do {
                            if (n.scrollHeight > n.offsetHeight) {
                                (e = n), (t.fastClickScrollParent = n);
                                break;
                            }
                            n = n.parentElement;
                        } while (n);
                    }
                    e && (e.fastClickLastScrollTop = e.scrollTop);
                }),
                (r.prototype.getTargetElementFromEventTarget = function (t) {
                    return t.nodeType === Node.TEXT_NODE ? t.parentNode : t;
                }),
                (r.prototype.onTouchStart = function (t) {
                    var e, n, i;
                    if (t.targetTouches.length > 1) return !0;
                    if (((e = this.getTargetElementFromEventTarget(t.target)), (n = t.targetTouches[0]), a)) {
                        if ((i = window.getSelection()).rangeCount && !i.isCollapsed) return !0;
                        if (!l) {
                            if (n.identifier && n.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                            (this.lastTouchIdentifier = n.identifier), this.updateScrollParent(e);
                        }
                    }
                    return (
                        (this.trackingClick = !0),
                        (this.trackingClickStart = t.timeStamp),
                        (this.targetElement = e),
                        (this.touchStartX = n.pageX),
                        (this.touchStartY = n.pageY),
                        t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(),
                        !0
                    );
                }),
                (r.prototype.touchHasMoved = function (t) {
                    var e = t.changedTouches[0],
                        n = this.touchBoundary;
                    return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n;
                }),
                (r.prototype.onTouchMove = function (t) {
                    return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && ((this.trackingClick = !1), (this.targetElement = null)), !0);
                }),
                (r.prototype.findControl = function (t) {
                    return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
                }),
                (r.prototype.onTouchEnd = function (t) {
                    var e,
                        n,
                        i,
                        r,
                        o,
                        c = this.targetElement;
                    if (!this.trackingClick) return !0;
                    if (t.timeStamp - this.lastClickTime < this.tapDelay) return (this.cancelNextClick = !0), !0;
                    if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
                    if (
                        ((this.cancelNextClick = !1),
                        (this.lastClickTime = t.timeStamp),
                        (n = this.trackingClickStart),
                        (this.trackingClick = !1),
                        (this.trackingClickStart = 0),
                        u && ((o = t.changedTouches[0]), ((c = document.elementFromPoint(o.pageX - window.pageXOffset, o.pageY - window.pageYOffset) || c).fastClickScrollParent = this.targetElement.fastClickScrollParent)),
                        "label" === (i = c.tagName.toLowerCase()))
                    ) {
                        if ((e = this.findControl(c))) {
                            if ((this.focus(c), s)) return !1;
                            c = e;
                        }
                    } else if (this.needsFocus(c))
                        return t.timeStamp - n > 100 || (a && window.top !== window && "input" === i)
                            ? ((this.targetElement = null), !1)
                            : (this.focus(c), this.sendClick(c, t), (a && "select" === i) || ((this.targetElement = null), t.preventDefault()), !1);
                    return !(!a || l || !(r = c.fastClickScrollParent) || r.fastClickLastScrollTop === r.scrollTop) || (this.needsClick(c) || (t.preventDefault(), this.sendClick(c, t)), !1);
                }),
                (r.prototype.onTouchCancel = function () {
                    (this.trackingClick = !1), (this.targetElement = null);
                }),
                (r.prototype.onMouse = function (t) {
                    return (
                        !this.targetElement ||
                        !!t.forwardedTouchEvent ||
                        !t.cancelable ||
                        !(!this.needsClick(this.targetElement) || this.cancelNextClick) ||
                        (t.stopImmediatePropagation ? t.stopImmediatePropagation() : (t.propagationStopped = !0), t.stopPropagation(), t.preventDefault(), !1)
                    );
                }),
                (r.prototype.onClick = function (t) {
                    var e;
                    return this.trackingClick ? ((this.targetElement = null), (this.trackingClick = !1), !0) : ("submit" === t.target.type && 0 === t.detail) || ((e = this.onMouse(t)) || (this.targetElement = null), e);
                }),
                (r.prototype.destroy = function () {
                    var t = this.layer;
                    s && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)),
                        t.removeEventListener("click", this.onClick, !0),
                        t.removeEventListener("touchstart", this.onTouchStart, !1),
                        t.removeEventListener("touchmove", this.onTouchMove, !1),
                        t.removeEventListener("touchend", this.onTouchEnd, !1),
                        t.removeEventListener("touchcancel", this.onTouchCancel, !1);
                }),
                (r.notNeeded = function (t) {
                    var e, n, i;
                    if (void 0 === window.ontouchstart) return !0;
                    if ((n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1])) {
                        if (!s) return !0;
                        if ((e = document.querySelector("meta[name=viewport]"))) {
                            if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                            if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0;
                        }
                    }
                    if (c && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] >= 10 && i[2] >= 3 && (e = document.querySelector("meta[name=viewport]"))) {
                        if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                        if (document.documentElement.scrollWidth <= window.outerWidth) return !0;
                    }
                    return (
                        "none" === t.style.msTouchAction ||
                        "manipulation" === t.style.touchAction ||
                        !!(
                            +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] >= 27 &&
                            (e = document.querySelector("meta[name=viewport]")) &&
                            (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)
                        ) ||
                        "none" === t.style.touchAction ||
                        "manipulation" === t.style.touchAction
                    );
                }),
                (r.attach = function (t, e) {
                    return new r(t, e);
                }),
                void 0 ===
                    (i = function () {
                        return r;
                    }.call(e, n, e, t)) || (t.exports = i);
        })();
    },
    function (t, e, n) {
        n(88);
    },
    function (t, e, n) {},
    function (t, e, n) {
        (function (e) {
            var i = n(1),
                r = n(3);
            n(90);
            var o = n(91);
            t.exports = r.extend({
                events: { "click .TopNav-logo": "onLogoClick" },
                initialize: function (t) {
                    (this.options = t || {}),
                        i.bindAll(this, "onPageLoad", "onThemeChange"),
                        (this.menu = new o({ page: this })),
                        (this.logoScale = 1),
                        (this.logo = this.$(".TopNav-logo")[0]),
                        (this.logoIcon = this.$(".TopNav-logo .logo-icon")[0]),
                        app.vent.on("page-loaded", this.onPageLoad),
                        app.vent.on("theme-change", this.onThemeChange),
                        (this.theme = "light"),
                        r.prototype.initialize.call(this, t);
                },
                onScroll: function (t) {
                    var e = Math.min(Math.max(t - (app.settings.isPhone ? 0 : 400), 0), 250) / 250,
                        n = app.settings.isPhone ? 0.74 : 0.64,
                        i = 1 - e * (1 - n);
                    i < 1 && (i = n), i != this.logoScale && ((this.logo.style.transform = "scale(" + i + ") translate3d(0,0,0)"), (this.logoScale = i));
                },
                onLogoClick: function () {
                    var t = window.pageYOffset;
                    e("main").hasClass("Index")
                        ? t > 0 &&
                          !this.scrollingToTop &&
                          ((this.scrollingToTop = !0),
                          e("body, html").animate(
                              { scrollTop: 0 },
                              600,
                              function () {
                                  this.scrollingToTop = !1;
                              }.bind(this)
                          ))
                        : (window.location.href = "/");
                },
                onPageLoad: function () {
                    this.logoIcon.addClass("stop-loader");
                },
                setDarkMode: function () {
                    "dark" != this.theme && (this.el.classList.add("dark-theme"), (this.theme = "dark"));
                },
                setLightMode: function () {
                    "light" != this.theme && (this.el.classList.remove("dark-theme"), (this.theme = "light"));
                },
                onThemeChange: function () {},
            });
        }.call(this, n(2)));
    },
    function (t, e, n) {},
    function (t, e, n) {
        (function (e) {
            var i = n(1),
                r = n(3);
            n(92),
                (t.exports = r.extend({
                    el: ".TopNavMenu",
                    events: { "click .TopNavMenu-hamburger": "onHamburgerClick", "click .TopNavMenu-logo": "onLogoClick", "touchmove .TopNavMenu-popup": "onMenuTouchMove" },
                    initialize: function (t) {
                        i.bindAll(this, "onDocumentClick", "onPageLoad"),
                            (this.isMenuActive = !1),
                            this.$el.css("display", ""),
                            app.vent.on("document-click", this.onDocumentClick),
                            app.vent.on("page-loaded", this.onPageLoad),
                            r.prototype.initialize.call(this, t);
                    },
                    onPageLoad: function () {
                        this.$el.addClass("show");
                    },
                    onHamburgerClick: function () {
                        this.$el.toggleClass("open", !this.isMenuActive), (this.isMenuActive = !this.isMenuActive);
                    },
                    onLogoClick: function () {
                        e("main").hasClass("Index") || (window.location.href = "/");
                    },
                    onMenuTouchMove: function (t) {
                        t.preventDefault();
                    },
                    onDocumentClick: function (t) {
                        this.isMenuActive && !e(t).closest(".TopNavMenu").length && this.onHamburgerClick();
                    },
                }));
        }.call(this, n(2)));
    },
    function (t, e, n) {},
    function (t, e, n) {
        (function (e) {
            n(1);
            var i = n(3);
            n(94),
                (t.exports = i.extend({
                    events: { "click .Footer-logo": "onLogoClick" },
                    initialize: function (t) {
                        (this.options = t || {}), i.prototype.initialize.call(this, t);
                    },
                    onLogoClick: function () {
                        if ("/" === location.pathname) {
                            var t = e("html");
                            t.toggleClass("dark-theme").flashClass("dark-theme-transition", 1500), app.vent.trigger("theme-change", t.hasClass("dark-theme") ? "dark" : "light");
                        }
                    },
                }));
        }.call(this, n(2)));
    },
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
]);
