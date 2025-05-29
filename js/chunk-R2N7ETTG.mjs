import { A as Tt, B as qt, C as Gt, D as Ut, E as Kt, F as Xt, G as Yt, U as Ot, W as y, Z as Zt, b as it, e as wt, g as St, k as $t, m as ot, q as Ft, r as L, s as Ht, v as D, w as xt, x as _t, z as Nt } from "./chunk-NV2CJCYN.mjs";
import { c as m } from "./chunk-RIUMFBNJ.mjs";
var U = t => t;
var st = {
    ms: t => 1e3 * t,
    s: t => t / 1e3
};
function Et(t, e) {
    return e ? t * (1e3 / e) : 0
}
var Jt = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t
    , Se = 1e-7
    , xe = 12;
function _e(t, e, r, n, i) {
    let o, s, h = 0;
    do
        s = e + (r - e) / 2,
            o = Jt(s, n, i) - t,
            o > 0 ? r = s : e = s;
    while (Math.abs(o) > Se && ++h < xe);
    return s
}
function tt(t, e, r, n) {
    if (t === e && r === n)
        return U;
    let i = o => _e(o, 0, 1, t, r);
    return o => o === 0 || o === 1 ? o : Jt(i(o), e, n)
}
var wn = {
    ease: tt(.25, .1, .25, 1),
    "ease-in": tt(.42, 0, 1, 1),
    "ease-in-out": tt(.42, 0, .58, 1),
    "ease-out": tt(0, 0, .58, 1)
};
function Qt(t, e) {
    var r = {};
    for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function") {
        var i = 0;
        for (n = Object.getOwnPropertySymbols(t); i < n.length; i++)
            e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]])
    }
    return r
}
var J = {};
Object.defineProperty(J, "__esModule", {
    value: !0
});
J.warning = function () { }
    ;
J.invariant = function () { }
    ;
var On = J.__esModule
    , En = J.warning
    , Ce = J.invariant;
var Pe = 5;
function at(t, e, r) {
    let n = Math.max(e - Pe, 0);
    return Et(r - t(n), e - n)
}
var Q = {
    stiffness: 100,
    damping: 10,
    mass: 1
}
    , je = (t = Q.stiffness, e = Q.damping, r = Q.mass) => e / (2 * Math.sqrt(t * r));
function Re(t, e, r) {
    return t < e && r >= e || t > e && r <= e
}
var Mt = ({ stiffness: t = Q.stiffness, damping: e = Q.damping, mass: r = Q.mass, from: n = 0, to: i = 1, velocity: o = 0, restSpeed: s = 2, restDistance: h = .5 } = {}) => {
    o = o ? st.s(o) : 0;
    let f = {
        done: !1,
        hasReachedTarget: !1,
        current: n,
        target: i
    }, d = i - n, c = Math.sqrt(t / r) / 1e3, a = je(t, e, r), w;
    if (a < 1) {
        let g = c * Math.sqrt(1 - a * a);
        w = v => i - Math.exp(-a * c * v) * ((a * c * d - o) / g * Math.sin(g * v) + d * Math.cos(g * v))
    } else
        w = g => i - Math.exp(-c * g) * (d + (c * d - o) * g);
    return g => {
        f.current = w(g);
        let v = g === 0 ? o : at(w, g, f.current)
            , V = Math.abs(v) <= s
            , S = Math.abs(i - f.current) <= h;
        return f.done = V && S,
            f.hasReachedTarget = Re(n, i, f.current),
            f
    }
}
    , te = ({ from: t = 0, velocity: e = 0, power: r = .8, decay: n = .325, bounceDamping: i, bounceStiffness: o, changeTarget: s, min: h, max: f, restDistance: d = .5, restSpeed: c }) => {
        n = st.ms(n);
        let a = {
            hasReachedTarget: !1,
            done: !1,
            current: t,
            target: t
        }
            , w = l => h !== void 0 && l < h || f !== void 0 && l > f
            , g = l => h === void 0 ? f : f === void 0 || Math.abs(h - l) < Math.abs(f - l) ? h : f
            , v = r * e
            , V = t + v
            , S = s === void 0 ? V : s(V);
        a.target = S,
            S !== V && (v = S - t);
        let N = l => -v * Math.exp(-l / n), B = l => S + N(l), M = l => {
            let x = N(l)
                , z = B(l);
            a.done = Math.abs(x) <= d,
                a.current = a.done ? S : z
        }
            , _, A, W = l => {
                w(a.current) && (_ = l,
                    A = Mt({
                        from: a.current,
                        to: g(a.current),
                        velocity: at(B, l, a.current),
                        damping: i,
                        stiffness: o,
                        restDistance: d,
                        restSpeed: c
                    }))
            }
            ;
        return W(0),
            l => {
                let x = !1;
                return !A && _ === void 0 && (x = !0,
                    M(l),
                    W(l)),
                    _ !== void 0 && l > _ ? (a.hasReachedTarget = !0,
                        A(l - _)) : (a.hasReachedTarget = !1,
                            !x && M(l),
                            a)
            }
    }
    , At = 10
    , ke = 1e4;
function ee(t, e = U) {
    let r, n = At, i = t(0), o = [e(i.current)];
    for (; !i.done && n < ke;)
        i = t(n),
            o.push(e(i.done ? i.target : i.current)),
            r === void 0 && i.hasReachedTarget && (r = n),
            n += At;
    let s = n - At;
    return o.length === 1 && o.push(i.current),
    {
        keyframes: o,
        duration: s / 1e3,
        overshootDuration: (r ?? s) / 1e3
    }
}
var Ie = ["", "X", "Y", "Z"]
    , Le = ["translate", "scale", "rotate", "skew"];
var ne = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: t => t + "deg"
}
    , De = {
        translate: {
            syntax: "<length-percentage>",
            initialValue: "0px",
            toDefaultUnit: t => t + "px"
        },
        rotate: ne,
        scale: {
            syntax: "<number>",
            initialValue: 1,
            toDefaultUnit: U
        },
        skew: ne
    }
    , Ve = new Map
    , Be = t => `--motion-${t}`
    , ae = ["x", "y", "z"];
Le.forEach(t => {
    Ie.forEach(e => {
        ae.push(t + e),
            Ve.set(Be(t + e), De[t])
    }
    )
}
);
var Zn = new Set(ae);
var re = t => document.createElement("div").animate(t, {
    duration: .001
})
    , ie = {
        cssRegisterProperty: () => typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
        waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
        partialKeyframes: () => {
            try {
                re({
                    opacity: [1]
                })
            } catch {
                return !1
            }
            return !0
        }
        ,
        finished: () => !!re({
            opacity: [0, 1]
        }).finished
    }
    , Ct = {}
    , We = {};
for (let t in ie)
    We[t] = () => (Ct[t] === void 0 && (Ct[t] = ie[t]()),
        Ct[t]);
function ce(t, e) {
    var r;
    return typeof t == "string" ? e ? ((r = e[t]) !== null && r !== void 0 || (e[t] = document.querySelectorAll(t)),
        t = e[t]) : t = document.querySelectorAll(t) : t instanceof Element && (t = [t]),
        Array.from(t || [])
}
function le(t) {
    let e = new WeakMap;
    return (r = {}) => {
        let n = new Map
            , i = (s = 0, h = 100, f = 0, d = !1) => {
                let c = `${s}-${h}-${f}-${d}`;
                return n.has(c) || n.set(c, t(Object.assign({
                    from: s,
                    to: h,
                    velocity: f,
                    restSpeed: d ? .05 : 2,
                    restDistance: d ? .01 : .5
                }, r))),
                    n.get(c)
            }
            , o = s => (e.has(s) || e.set(s, ee(s)),
                e.get(s));
        return {
            createAnimation: (s, h, f, d, c) => {
                var a, w;
                let g, v = s.length;
                if (f && v <= 2 && s.every(ze)) {
                    let S = s[v - 1]
                        , N = v === 1 ? null : s[0]
                        , B = 0
                        , M = 0
                        , _ = c?.generator;
                    if (_) {
                        let { animation: l, generatorStartTime: x } = c
                            , z = l?.startTime || x || 0
                            , K = l?.currentTime || performance.now() - z
                            , q = _(K).current;
                        M = (a = N) !== null && a !== void 0 ? a : q,
                            (v === 1 || v === 2 && s[0] === null) && (B = at(G => _(G).current, K, q))
                    } else
                        M = (w = N) !== null && w !== void 0 ? w : parseFloat(h());
                    let A = i(M, S, B, d?.includes("scale"))
                        , W = o(A);
                    g = Object.assign(Object.assign({}, W), {
                        easing: "linear"
                    }),
                        c && (c.generator = A,
                            c.generatorStartTime = performance.now())
                } else
                    g = {
                        easing: "ease",
                        duration: o(i(0, 100)).overshootDuration
                    };
                return g
            }
        }
    }
}
var ze = t => typeof t != "string"
    , Jn = le(Mt)
    , Qn = le(te)
    , $e = {
        any: 0,
        all: 1
    };
function Fe(t, e, { root: r, margin: n, amount: i = "any" } = {}) {
    if (typeof IntersectionObserver > "u")
        return () => { }
            ;
    let o = ce(t)
        , s = new WeakMap
        , h = d => {
            d.forEach(c => {
                let a = s.get(c.target);
                if (c.isIntersecting !== !!a)
                    if (c.isIntersecting) {
                        let w = e(c);
                        typeof w == "function" ? s.set(c.target, w) : f.unobserve(c.target)
                    } else
                        a && (a(c),
                            s.delete(c.target))
            }
            )
        }
        , f = new IntersectionObserver(h, {
            root: r,
            rootMargin: n,
            threshold: typeof i == "number" ? i : $e[i]
        });
    return o.forEach(d => f.observe(d)),
        () => f.disconnect()
}
var ct = new WeakMap, H;
function He(t, e) {
    if (e) {
        let { inlineSize: r, blockSize: n } = e[0];
        return {
            width: r,
            height: n
        }
    }
    return t instanceof SVGElement && "getBBox" in t ? t.getBBox() : {
        width: t.offsetWidth,
        height: t.offsetHeight
    }
}
function Ne({ target: t, contentRect: e, borderBoxSize: r }) {
    var n;
    (n = ct.get(t)) === null || n === void 0 || n.forEach(i => {
        i({
            target: t,
            contentSize: e,
            get size() {
                return He(t, r)
            }
        })
    }
    )
}
function qe(t) {
    t.forEach(Ne)
}
function Ge() {
    typeof ResizeObserver < "u" && (H = new ResizeObserver(qe))
}
function Ue(t, e) {
    H || Ge();
    let r = ce(t);
    return r.forEach(n => {
        let i = ct.get(n);
        i || (i = new Set,
            ct.set(n, i)),
            i.add(e),
            H?.observe(n)
    }
    ),
        () => {
            r.forEach(n => {
                let i = ct.get(n);
                i?.delete(e),
                    i?.size || H?.unobserve(n)
            }
            )
        }
}
var lt = new Set, et;
function Ke() {
    et = () => {
        let t = {
            width: m.innerWidth,
            height: m.innerHeight
        }
            , e = {
                target: m,
                size: t,
                contentSize: t
            };
        lt.forEach(r => r(e))
    }
        ,
        m.addEventListener("resize", et)
}
function Xe(t) {
    return lt.add(t),
        et || Ke(),
        () => {
            lt.delete(t),
                !lt.size && et && (et = void 0)
        }
}
function ue(t, e) {
    return typeof t == "function" ? Xe(t) : Ue(t, e)
}
function Pt(t, e, r) {
    t.dispatchEvent(new CustomEvent(e, {
        detail: {
            originalEvent: r
        }
    }))
}
function oe(t, e, r) {
    t.dispatchEvent(new CustomEvent(e, {
        detail: {
            originalEntry: r
        }
    }))
}
var Ye = {
    isActive: t => !!t.inView,
    subscribe: (t, { enable: e, disable: r }, { inViewOptions: n = {} }) => {
        let { once: i } = n
            , o = Qt(n, ["once"]);
        return Fe(t, s => {
            if (e(),
                oe(t, "viewenter", s),
                !i)
                return h => {
                    r(),
                        oe(t, "viewleave", h)
                }
        }
            , o)
    }
}
    , se = (t, e, r) => n => {
        (!n.pointerType || n.pointerType === "mouse") && (r(),
            Pt(t, e, n))
    }
    , Ze = {
        isActive: t => !!t.hover,
        subscribe: (t, { enable: e, disable: r }) => {
            let n = se(t, "hoverstart", e)
                , i = se(t, "hoverend", r);
            return t.addEventListener("pointerenter", n),
                t.addEventListener("pointerleave", i),
                () => {
                    t.removeEventListener("pointerenter", n),
                        t.removeEventListener("pointerleave", i)
                }
        }
    }
    , Je = {
        isActive: t => !!t.press,
        subscribe: (t, { enable: e, disable: r }) => {
            let n = o => {
                r(),
                    Pt(t, "pressend", o),
                    m.removeEventListener("pointerup", n)
            }
                , i = o => {
                    e(),
                        Pt(t, "pressstart", o),
                        m.addEventListener("pointerup", n)
                }
                ;
            return t.addEventListener("pointerdown", i),
                () => {
                    t.removeEventListener("pointerdown", i),
                        m.removeEventListener("pointerup", n)
                }
        }
    }
    , Qe = {
        inView: Ye,
        hover: Ze,
        press: Je
    }
    , tr = ["initial", "animate", ...Object.keys(Qe), "exit"];
var tn = 100
    , en = 5e6
    , ut = "--ticker-offset"
    , jt = typeof Animation < "u" && typeof Animation.prototype.updatePlaybackRate == "function"
    , pe = !0;
if (typeof m < "u")
    try {
        m.CSS.registerProperty({
            name: ut,
            syntax: "<length>",
            initialValue: "0px",
            inherits: !1
        })
    } catch {
        pe = !1
    }
function Rt(t) {
    let { slots: e, gap: r, padding: n, paddingPerSide: i, paddingTop: o, paddingRight: s, paddingBottom: h, paddingLeft: f, speed: d, hoverFactor: c, direction: a, alignment: w, sizingOptions: g, fadeOptions: v, style: V } = t
        , { fadeContent: S, overflow: N, fadeWidth: B, fadeInset: M, fadeAlpha: _ } = v
        , { widthType: A, heightType: W } = g
        , l = i ? `${o}px ${s}px ${h}px ${f}px` : `${n}px`
        , x = Ot.current() === Ot.canvas
        , z = e.filter(Boolean)
        , K = it.count(z)
        , q = K > 0;
    a === !0 && (a = "left");
    let G = a === "left" || a === "right"
        , kt = qt(0)
        , nt = G ? "X" : "Y"
        , ft = a === "left" || a === "top" ? "-" : ""
        , he = Gt(() => `translate${nt}(${ft}${kt.get()}px)`)
        , X = L(null)
        , dt = Ft(() => [St(), St()], [])
        , [C, me] = Ht({
            parent: null,
            children: null,
            childrenArea: null
        })
        , It = []
        , pt = []
        , Y = 0
        , ht = 0;
    x && (Y = K ? Math.floor(10 / K) : 0,
        ht = 1),
        !x && q && C.parent && (Y = Math.round(C.parent / C.children * 2) + 1,
            Y = Math.min(Y, tn),
            ht = 1);
    let Lt = C.childrenArea === null ? null : C.childrenArea * (Y + 1)
        , P = Lt === null ? null : Lt > en
        , Dt = $t(() => {
            if (q && X.current) {
                let p = G ? X.current.offsetWidth : X.current.offsetHeight
                    , [u, b] = dt
                    , T = u.current ? u.current.offsetLeft : 0
                    , j = b.current ? b.current.offsetLeft + b.current.offsetWidth : 0
                    , R = u.current ? u.current.offsetTop : 0
                    , k = b.current ? b.current.offsetTop + b.current.offsetHeight : 0
                    , I = j - T
                    , Z = k - R
                    , bt = I * Z
                    , we = (G ? I : Z) + r;
                me({
                    parent: p,
                    children: we,
                    childrenArea: bt
                })
            }
        }
            , [])
        , Vt = x ? {
            contentVisibility: "auto"
        } : {};
    if (q) {
        if (!x) {
            let p = L(!0);
            ot(() => (_t.read(Dt),
                ue(X.current, ({ contentSize: u }) => {
                    !p.current && (u.width || u.height) && _t.read(Dt),
                        p.current = !1
                }
                )), [])
        }
        It = it.map(z, (p, u) => {
            var b, T, j, R;
            let k;
            u === 0 && (k = dt[0]),
                u === z.length - 1 && (k = dt[1]);
            let I = {
                width: A ? (b = p.props) === null || b === void 0 ? void 0 : b.width : "100%",
                height: W ? (T = p.props) === null || T === void 0 ? void 0 : T.height : "100%"
            };
            return D(Tt, {
                inherit: "id",
                children: D("li", {
                    ref: k,
                    style: I,
                    children: wt(p, {
                        style: {
                            ...(j = p.props) === null || j === void 0 ? void 0 : j.style,
                            ...I,
                            flexShrink: 0,
                            ...Vt
                        },
                        layoutId: p.props.layoutId ? p.props.layoutId + "-original-" + u : void 0
                    }, (R = p.props) === null || R === void 0 ? void 0 : R.children)
                })
            }, u + "-original")
        }
        )
    }
    if (!x)
        for (let p = 0; p < Y; p++)
            pt = [...pt, ...it.map(z, (u, b) => {
                var T, j, R, k, I, Z;
                let bt = {
                    width: A ? (T = u.props) === null || T === void 0 ? void 0 : T.width : "100%",
                    height: W ? (j = u.props) === null || j === void 0 ? void 0 : j.height : "100%",
                    willChange: P === !0 ? "auto" : "transform"
                };
                return D(Tt, {
                    inherit: "id",
                    children: D("li", {
                        style: bt,
                        "aria-hidden": !0,
                        children: wt(u, {
                            key: p + " " + b,
                            style: {
                                ...(R = u.props) === null || R === void 0 ? void 0 : R.style,
                                width: A ? (k = u.props) === null || k === void 0 ? void 0 : k.width : "100%",
                                height: W ? (I = u.props) === null || I === void 0 ? void 0 : I.height : "100%",
                                flexShrink: 0,
                                ...Vt
                            },
                            layoutId: u.props.layoutId ? u.props.layoutId + "-dupe-" + p : void 0
                        }, (Z = u.props) === null || Z === void 0 ? void 0 : Z.children)
                    }, p + "li" + b)
                }, p + "lg" + b)
            }
            )];
    let O = C.children + C.children * Math.round(C.parent / C.children)
        , mt = L(null)
        , gt = L(null)
        , rt = L(0)
        , yt = L(!1)
        , Bt = Kt()
        , Wt = L(null)
        , E = L(null);
    if (!x) {
        let p = Yt(X);
        jt && (!P || P && pe) ? (ot(() => {
            if (Bt || !O || !d || P === null)
                return;
            if (P)
                try {
                    m.CSS.registerProperty({
                        name: ut,
                        syntax: "<length>",
                        initialValue: "0px",
                        inherits: !1
                    })
                } catch { }
            let u = P ? {
                [ut]: ["0px", `${ft}${O}px`]
            } : {
                transform: [`translate${nt}(0px)`, `translate${nt}(${ft}${O}px)`]
            };
            return E.current = Wt.current.animate(u, {
                duration: Math.abs(O) / d * 1e3,
                iterations: 1 / 0,
                easing: "linear"
            }),
                () => E.current.cancel()
        }
            , [c, O, d, P]),
            ot(() => {
                E.current && (p && E.current.playState === "paused" ? E.current.play() : !p && E.current.playState === "running" && E.current.pause())
            }
                , [p])) : Ut(u => {
                    if (!O || Bt || jt)
                        return;
                    mt.current === null && (mt.current = u),
                        u = u - mt.current;
                    let T = (gt.current === null ? 0 : u - gt.current) * (d / 1e3);
                    yt.current && (T *= c),
                        rt.current += T,
                        rt.current = Xt(0, O, rt.current),
                        gt.current = u,
                        p && kt.set(rt.current)
                }
                )
    }
    let ge = G ? "to right" : "to bottom"
        , zt = B / 2
        , ye = 100 - B / 2
        , ve = an(M, 0, zt)
        , be = 100 - M
        , vt = `linear-gradient(${ge}, rgba(0, 0, 0, ${_}) ${ve}%, rgba(0, 0, 0, 1) ${zt}%, rgba(0, 0, 0, 1) ${ye}%, rgba(0, 0, 0, ${_}) ${be}%)`;
    return q ? D("section", {
        style: {
            ...fe,
            opacity: ht,
            WebkitMaskImage: S ? vt : void 0,
            MozMaskImage: S ? vt : void 0,
            maskImage: S ? vt : void 0,
            overflow: N ? "visible" : "hidden",
            padding: l
        },
        ref: X,
        children: xt(Nt.ul, {
            ref: Wt,
            style: {
                ...fe,
                gap: r,
                top: a === "bottom" && de(O) ? -O : void 0,
                left: a === "right" && de(O) ? -O : void 0,
                placeItems: w,
                position: "relative",
                flexDirection: G ? "row" : "column",
                ...V,
                willChange: x || P ? "auto" : "transform",
                transform: jt ? P ? `translate${nt}(var(${ut}))` : "none" : he
            },
            onMouseEnter: () => {
                yt.current = !0,
                    E.current && (E.current.playbackRate = c)
            }
            ,
            onMouseLeave: () => {
                yt.current = !1,
                    E.current && (E.current.playbackRate = 1)
            }
            ,
            children: [It, pt]
        })
    }) : xt("section", {
        style: nn,
        children: [D("div", {
            style: rn,
            children: "\u2728"
        }), D("p", {
            style: on,
            children: "Connect to Content"
        }), D("p", {
            style: sn,
            children: "Add layers or components to infinitely loop on your page."
        })]
    })
}
Rt.defaultProps = {
    gap: 10,
    padding: 10,
    sizingOptions: {
        widthType: !0,
        heightType: !0
    },
    fadeOptions: {
        fadeContent: !0,
        overflow: !1,
        fadeWidth: 25,
        fadeAlpha: 0,
        fadeInset: 0
    },
    direction: !0
};
Zt(Rt, {
    slots: {
        type: y.Array,
        title: "Children",
        control: {
            type: y.ComponentInstance
        }
    },
    speed: {
        type: y.Number,
        title: "Speed",
        min: 0,
        max: 1e3,
        defaultValue: 100,
        unit: "%",
        displayStepper: !0,
        step: 5
    },
    direction: {
        type: y.Enum,
        title: "Direction",
        options: ["left", "right", "top", "bottom"],
        optionIcons: ["direction-left", "direction-right", "direction-up", "direction-down"],
        optionTitles: ["Left", "Right", "Top", "Bottom"],
        defaultValue: "left",
        displaySegmentedControl: !0
    },
    alignment: {
        type: y.Enum,
        title: "Align",
        options: ["flex-start", "center", "flex-end"],
        optionIcons: {
            direction: {
                right: ["align-top", "align-middle", "align-bottom"],
                left: ["align-top", "align-middle", "align-bottom"],
                top: ["align-left", "align-center", "align-right"],
                bottom: ["align-left", "align-center", "align-right"]
            }
        },
        defaultValue: "center",
        displaySegmentedControl: !0
    },
    gap: {
        type: y.Number,
        title: "Gap"
    },
    padding: {
        title: "Padding",
        type: y.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["Padding", "Padding per side"],
        valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
        valueLabels: ["T", "R", "B", "L"],
        min: 0
    },
    sizingOptions: {
        type: y.Object,
        title: "Sizing",
        controls: {
            widthType: {
                type: y.Boolean,
                title: "Width",
                enabledTitle: "Auto",
                disabledTitle: "Stretch",
                defaultValue: !0
            },
            heightType: {
                type: y.Boolean,
                title: "Height",
                enabledTitle: "Auto",
                disabledTitle: "Stretch",
                defaultValue: !0
            }
        }
    },
    fadeOptions: {
        type: y.Object,
        title: "Clipping",
        controls: {
            fadeContent: {
                type: y.Boolean,
                title: "Fade",
                defaultValue: !0
            },
            overflow: {
                type: y.Boolean,
                title: "Overflow",
                enabledTitle: "Show",
                disabledTitle: "Hide",
                defaultValue: !1,
                hidden(t) {
                    return t.fadeContent === !0
                }
            },
            fadeWidth: {
                type: y.Number,
                title: "Width",
                defaultValue: 25,
                min: 0,
                max: 100,
                unit: "%",
                hidden(t) {
                    return t.fadeContent === !1
                }
            },
            fadeInset: {
                type: y.Number,
                title: "Inset",
                defaultValue: 0,
                min: 0,
                max: 100,
                unit: "%",
                hidden(t) {
                    return t.fadeContent === !1
                }
            },
            fadeAlpha: {
                type: y.Number,
                title: "Opacity",
                defaultValue: 0,
                min: 0,
                max: 1,
                step: .05,
                hidden(t) {
                    return t.fadeContent === !1
                }
            }
        }
    },
    hoverFactor: {
        type: y.Number,
        title: "Hover",
        min: 0,
        max: 1,
        unit: "x",
        defaultValue: 1,
        step: .1,
        displayStepper: !0,
        description: "Slows down the speed while you are hovering."
    }
});
var fe = {
    display: "flex",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none"
}
    , nn = {
        display: "flex",
        width: "100%",
        height: "100%",
        placeContent: "center",
        placeItems: "center",
        flexDirection: "column",
        color: "#96F",
        background: "rgba(136, 85, 255, 0.1)",
        fontSize: 11,
        overflow: "hidden",
        padding: "20px 20px 30px 20px"
    }
    , rn = {
        fontSize: 32,
        marginBottom: 10
    }
    , on = {
        margin: 0,
        marginBottom: 10,
        fontWeight: 600,
        textAlign: "center"
    }
    , sn = {
        margin: 0,
        opacity: .7,
        maxWidth: 150,
        lineHeight: 1.5,
        textAlign: "center"
    }
    , an = (t, e, r) => Math.min(Math.max(t, e), r)
    , de = t => typeof t == "number" && !isNaN(t);
export { Rt as a };
//# sourceMappingURL=chunk-R2N7ETTG.mjs.map
