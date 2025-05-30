import { a as je } from "./chunk-NV5QYLJ5.mjs";
import { a as ne } from "./chunk-APJ7DU42.mjs";
import { a as Ve } from "./chunk-R2N7ETTG.mjs";
import { a as gr, b as xr, c as _r } from "./chunk-HRCDG6CY.mjs";
import { a as Te, b as Fe, c as Pe } from "./chunk-DFDKHUND.mjs";
import { a as dr, b as pr, c as hr } from "./chunk-D2J4TU2J.mjs";
import { a as ie, f as Le, g as Ae, h as ke, i as Ie, j as Me, n as Ce, o as Ge, s as lr, t as fr, u as cr, v as He } from "./chunk-2MTAU4LG.mjs";
import "./chunk-42U43NKG.mjs";
import { A as M, Ea as sr, Ka as te, La as mr, P as ar, Pa as pe, Q as G, Qa as p, T as we, Ta as me, Ua as W, Va as I, W as j, Wa as he, Z as ae, _ as tr, aa as O, ba as xe, c as s, ea as n, ga as u, h as V, ia as H, ja as ir, ka as nr, l as ee, m as er, n as L, o as rr, q as re, r as X, sa as d, ta as or, v as e, w as t, wa as Ne, y as E, z as f } from "./chunk-NV2CJCYN.mjs";
import "./chunk-JR5VT52U.mjs";
import "./chunk-RIUMFBNJ.mjs";
var Tr = ["PoMWIiCFO", "nCpsiHhdD", "uRzzhUv_v", "la6cqvTPU", "ULcxem9Un", "PrN0RONGC"]
    , Fr = "framer-hTtXB"
    , Pr = {
        la6cqvTPU: "framer-v-1shvj7v",
        nCpsiHhdD: "framer-v-1m4li2o",
        PoMWIiCFO: "framer-v-1fnxuu8",
        PrN0RONGC: "framer-v-1ounpgf",
        ULcxem9Un: "framer-v-1rdu782",
        uRzzhUv_v: "framer-v-stndr0"
    };
function ur(r, ...a) {
    let m = {};
    return a?.forEach(o => o && Object.assign(m, r[o])),
        m
}
var jr = {
    default: {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    }
}
    , zr = ({ value: r, children: a }) => {
        let m = ee(E)
            , o = r ?? m.transition
            , l = re(() => ({
                ...m,
                transition: o
            }), [JSON.stringify(o)]);
        return e(E.Provider, {
            value: l,
            children: a
        })
    }
    , qr = {
        "Variant 1": "PoMWIiCFO",
        "Variant 2": "nCpsiHhdD",
        "Variant 3": "uRzzhUv_v",
        "Variant 4": "la6cqvTPU",
        "Variant 5": "ULcxem9Un",
        "Variant 6": "PrN0RONGC"
    }
    , Xr = ({ height: r, id: a, width: m, ...o }) => {
        var l, g;
        return {
            ...o,
            variant: (g = (l = qr[o.variant]) !== null && l !== void 0 ? l : o.variant) !== null && g !== void 0 ? g : "PoMWIiCFO"
        }
    }
    , Rr = (r, a) => a.join("-") + r.layoutDependency
    , Sr = V(function (r, a) {
        let { activeLocale: m, setLocale: o } = G()
            , { style: l, className: g, layoutId: c, variant: b, ...x } = Xr(r)
            , { baseVariant: i, classNames: z, gestureVariant: q, setGestureState: w, setVariant: k, transition: F, variants: _ } = te({
                cycleOrder: Tr,
                defaultVariant: "PoMWIiCFO",
                transitions: jr,
                variant: b,
                variantClassNames: Pr
            })
            , D = Rr(r, _)
            , P = X(null)
            , K = L()
            , h = [Pe];
        return e(M, {
            id: c ?? K,
            children: e(zr, {
                value: F,
                children: e(f.div, {
                    ...x,
                    animate: _,
                    className: O(Fr, ...h, "framer-1fnxuu8", g, z),
                    "data-framer-name": "Variant 1",
                    initial: b,
                    layoutDependency: D,
                    layoutId: "PoMWIiCFO",
                    onHoverEnd: () => w({
                        isHovered: !1
                    }),
                    onHoverStart: () => w({
                        isHovered: !0
                    }),
                    onTap: () => w({
                        isPressed: !1
                    }),
                    onTapCancel: () => w({
                        isPressed: !1
                    }),
                    onTapStart: () => w({
                        isPressed: !0
                    }),
                    ref: a ?? P,
                    style: {
                        ...l
                    },
                    ...ur({
                        la6cqvTPU: {
                            "data-framer-name": "Variant 4"
                        },
                        nCpsiHhdD: {
                            "data-framer-name": "Variant 2"
                        },
                        PrN0RONGC: {
                            "data-framer-name": "Variant 6"
                        },
                        ULcxem9Un: {
                            "data-framer-name": "Variant 5"
                        },
                        uRzzhUv_v: {
                            "data-framer-name": "Variant 3"
                        }
                    }, i, q),
                    children: e(p, {
                        __fromCanvasComponent: !0,
                        children: e(s, {
                            children: e(f.h1, {
                                className: "framer-styles-preset-1sgigkb",
                                "data-styles-preset": "BRyT8PKiE",
                                children: e(f.span, {
                                    "data-text-fill": "true",
                                    style: {
                                        backgroundImage: "linear-gradient(110deg, rgb(247, 255, 253) 8.02187%, rgb(112, 255, 205) 27.0693%, rgb(15, 191, 255) 53.121%, rgb(0, 119, 255) 71.6216%, rgb(171, 192, 217) 84.0055%)"
                                    },
                                    children: "Fintech"
                                })
                            })
                        }),
                        className: "framer-1e1e7k2",
                        layoutDependency: D,
                        layoutId: "KZ7zg0Bhi",
                        style: {
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline"
                        },
                        variants: {
                            la6cqvTPU: {
                                "--extracted-gdpscs": "rgb(0, 0, 0)"
                            },
                            nCpsiHhdD: {
                                "--extracted-gdpscs": "rgb(0, 0, 0)"
                            },
                            PrN0RONGC: {
                                "--extracted-gdpscs": "rgb(0, 0, 0)"
                            },
                            ULcxem9Un: {
                                "--extracted-gdpscs": "rgb(0, 0, 0)"
                            },
                            uRzzhUv_v: {
                                "--extracted-gdpscs": "rgb(0, 0, 0)"
                            }
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                        ...ur({
                            la6cqvTPU: {
                                children: e(s, {
                                    children: e(f.h1, {
                                        className: "framer-styles-preset-1sgigkb",
                                        "data-styles-preset": "BRyT8PKiE",
                                        style: {
                                            "--framer-text-color": "var(--extracted-gdpscs, rgb(0, 0, 0))"
                                        },
                                        children: e(f.span, {
                                            "data-text-fill": "true",
                                            style: {
                                                backgroundImage: "linear-gradient(111deg, rgb(0, 156, 21) 17.5676%, rgb(59, 255, 62) 45.726%, rgb(246, 255, 166) 74.6639%)"
                                            },
                                            children: "Healthcare"
                                        })
                                    })
                                })
                            },
                            nCpsiHhdD: {
                                children: e(s, {
                                    children: e(f.h1, {
                                        className: "framer-styles-preset-1sgigkb",
                                        "data-styles-preset": "BRyT8PKiE",
                                        style: {
                                            "--framer-text-color": "var(--extracted-gdpscs, rgb(0, 0, 0))"
                                        },
                                        children: e(f.span, {
                                            "data-text-fill": "true",
                                            style: {
                                                backgroundImage: "linear-gradient(111deg, rgb(170, 0, 255) 30.3174%, rgb(255, 51, 228) 50.9646%, rgb(255, 201, 248) 84.6847%)"
                                            },
                                            children: "AI"
                                        })
                                    })
                                })
                            },
                            PrN0RONGC: {
                                children: e(s, {
                                    children: e(f.h1, {
                                        className: "framer-styles-preset-1sgigkb",
                                        "data-styles-preset": "BRyT8PKiE",
                                        style: {
                                            "--framer-text-color": "var(--extracted-gdpscs, rgb(0, 0, 0))"
                                        },
                                        children: e(f.span, {
                                            "data-text-fill": "true",
                                            style: {
                                                backgroundImage: "linear-gradient(111deg, rgb(107, 57, 0) 7.45883%, rgb(255, 128, 0) 26.163%, rgb(255, 8, 94) 61.4727%, rgb(255, 138, 239) 84.6847%)"
                                            },
                                            children: "Blockchain"
                                        })
                                    })
                                })
                            },
                            ULcxem9Un: {
                                children: e(s, {
                                    children: e(f.h1, {
                                        className: "framer-styles-preset-1sgigkb",
                                        "data-styles-preset": "BRyT8PKiE",
                                        style: {
                                            "--framer-text-color": "var(--extracted-gdpscs, rgb(0, 0, 0))"
                                        },
                                        children: e(f.span, {
                                            "data-text-fill": "true",
                                            style: {
                                                backgroundImage: "linear-gradient(111deg, rgb(191, 0, 255) 5.85586%, rgb(231, 161, 255) 26.163%, rgb(0, 186, 171) 61.4575%, rgb(0, 202, 247) 80.8983%)"
                                            },
                                            children: "Ecommerce"
                                        })
                                    })
                                })
                            },
                            uRzzhUv_v: {
                                children: e(s, {
                                    children: e(f.h1, {
                                        className: "framer-styles-preset-1sgigkb",
                                        "data-styles-preset": "BRyT8PKiE",
                                        style: {
                                            "--framer-text-color": "var(--extracted-gdpscs, rgb(0, 0, 0))"
                                        },
                                        children: e(f.span, {
                                            "data-text-fill": "true",
                                            style: {
                                                backgroundImage: "linear-gradient(111deg, rgb(11, 2, 250) 1.35135%, rgb(48, 166, 240) 24.7379%, rgb(186, 194, 193) 61.4727%, rgb(232, 255, 252) 84.6847%)"
                                            },
                                            children: "Cybersecurity"
                                        })
                                    })
                                })
                            }
                        }, i, q)
                    })
                })
            })
        })
    })
    , Er = ['.framer-hTtXB[data-border="true"]::after, .framer-hTtXB [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-hTtXB.framer-1roloh2, .framer-hTtXB .framer-1roloh2 { display: block; }", ".framer-hTtXB.framer-1fnxuu8 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 77px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-hTtXB .framer-1e1e7k2 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-hTtXB.framer-1fnxuu8 { gap: 0px; } .framer-hTtXB.framer-1fnxuu8 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-hTtXB.framer-1fnxuu8 > :first-child { margin-left: 0px; } .framer-hTtXB.framer-1fnxuu8 > :last-child { margin-right: 0px; } }", ...Fe]
    , _e = H(Sr, Er, "framer-hTtXB")
    , oe = _e;
_e.displayName = "Industry";
_e.defaultProps = {
    height: 77,
    width: 198.5
};
ae(_e, {
    variant: {
        options: ["PoMWIiCFO", "nCpsiHhdD", "uRzzhUv_v", "la6cqvTPU", "ULcxem9Un", "PrN0RONGC"],
        optionTitles: ["Variant 1", "Variant 2", "Variant 3", "Variant 4", "Variant 5", "Variant 6"],
        title: "Variant",
        type: j.Enum
    }
});
W(_e, [...Te]);
var Yr = ["OK_UuSTsz", "ZrfTCO5Za", "SYSxh9PA5"]
    , Ur = "framer-6DmpM"
    , Or = {
        OK_UuSTsz: "framer-v-j8bdez",
        SYSxh9PA5: "framer-v-1ov79pu",
        ZrfTCO5Za: "framer-v-18ynpkr"
    };
function yr(r, ...a) {
    let m = {};
    return a?.forEach(o => o && Object.assign(m, r[o])),
        m
}
var Dr = {
    default: {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    }
}
    , We = r => typeof r == "object" && r !== null && typeof r.src == "string" ? r : typeof r == "string" ? {
        src: r
    } : void 0
    , Vr = ({ value: r, children: a }) => {
        let m = ee(E)
            , o = r ?? m.transition
            , l = re(() => ({
                ...m,
                transition: o
            }), [JSON.stringify(o)]);
        return e(E.Provider, {
            value: l,
            children: a
        })
    }
    , Lr = {
        Desktop: "OK_UuSTsz",
        Mobile: "SYSxh9PA5",
        Tablet: "ZrfTCO5Za"
    }
    , Mr = ({ height: r, id: a, image: m, width: o, ...l }) => {
        var g, c;
        return {
            ...l,
            CsQbKjwc1: m ?? l.CsQbKjwc1,
            variant: (c = (g = Lr[l.variant]) !== null && g !== void 0 ? g : l.variant) !== null && c !== void 0 ? c : "OK_UuSTsz"
        }
    }
    , Gr = (r, a) => a.join("-") + r.layoutDependency
    , Hr = V(function (r, a) {
        let { activeLocale: m, setLocale: o } = G()
            , { style: l, className: g, layoutId: c, variant: b, CsQbKjwc1: x, ...i } = Mr(r)
            , { baseVariant: z, classNames: q, gestureVariant: w, setGestureState: k, setVariant: F, transition: _, variants: D } = te({
                cycleOrder: Yr,
                defaultVariant: "OK_UuSTsz",
                transitions: Dr,
                variant: b,
                variantClassNames: Or
            })
            , P = Gr(r, D)
            , K = X(null)
            , h = L()
            , $ = [];
        return e(M, {
            id: c ?? h,
            children: e(Vr, {
                value: _,
                children: e(f.div, {
                    ...i,
                    animate: D,
                    className: O(Ur, ...$, "framer-j8bdez", g, q),
                    "data-framer-name": "Desktop",
                    initial: b,
                    layoutDependency: P,
                    layoutId: "OK_UuSTsz",
                    onHoverEnd: () => k({
                        isHovered: !1
                    }),
                    onHoverStart: () => k({
                        isHovered: !0
                    }),
                    onTap: () => k({
                        isPressed: !1
                    }),
                    onTapCancel: () => k({
                        isPressed: !1
                    }),
                    onTapStart: () => k({
                        isPressed: !0
                    }),
                    ref: a ?? K,
                    style: {
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        boxShadow: "0px 0.8243573314583045px 2.802814926958235px 0px rgba(0, 0, 0, 0.00471), 0px 2.107655556210375px 7.166028891115275px 0px rgba(0, 0, 0, 0.01204), 0px 4.225385750432906px 14.366311551471881px 0px rgba(0, 0, 0, 0.02415), 0px 8.0098665613521px 27.23354630859714px 0px rgba(0, 0, 0, 0.04577), 0px 15.921221646778575px 54.13215359904716px 0px rgba(0, 0, 0, 0.09098), 0px 35px 119px 0px rgba(0, 0, 0, 0.2)",
                        ...l
                    },
                    ...yr({
                        SYSxh9PA5: {
                            "data-framer-name": "Mobile"
                        },
                        ZrfTCO5Za: {
                            "data-framer-name": "Tablet"
                        }
                    }, z, w),
                    children: e(pe, {
                        background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 600,
                            intrinsicWidth: 600,
                            pixelHeight: 1200,
                            pixelWidth: 1200,
                            sizes: "min(370px, 100vw)",
                            ...We(x)
                        },
                        className: "framer-mu77c9",
                        "data-framer-name": "Image",
                        layoutDependency: P,
                        layoutId: "F_DZ14HWo",
                        ...yr({
                            SYSxh9PA5: {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 600,
                                    intrinsicWidth: 600,
                                    pixelHeight: 1200,
                                    pixelWidth: 1200,
                                    sizes: "min(150px, 100vw)",
                                    ...We(x)
                                }
                            },
                            ZrfTCO5Za: {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 600,
                                    intrinsicWidth: 600,
                                    pixelHeight: 1200,
                                    pixelWidth: 1200,
                                    sizes: "min(300px, 100vw)",
                                    ...We(x)
                                }
                            }
                        }, z, w)
                    })
                })
            })
        })
    })
    , Wr = ['.framer-6DmpM[data-border="true"]::after, .framer-6DmpM [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-6DmpM.framer-u0bfnd, .framer-6DmpM .framer-u0bfnd { display: block; }", ".framer-6DmpM.framer-j8bdez { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 370px; will-change: var(--framer-will-change-override, transform); }", ".framer-6DmpM .framer-mu77c9 { aspect-ratio: 0.8222222222222222 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 450px); overflow: visible; position: relative; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-6DmpM.framer-j8bdez { gap: 0px; } .framer-6DmpM.framer-j8bdez > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-6DmpM.framer-j8bdez > :first-child { margin-top: 0px; } .framer-6DmpM.framer-j8bdez > :last-child { margin-bottom: 0px; } }", ".framer-6DmpM.framer-v-18ynpkr.framer-j8bdez { width: 300px; }", ".framer-6DmpM.framer-v-18ynpkr .framer-mu77c9 { height: var(--framer-aspect-ratio-supported, 365px); }", ".framer-6DmpM.framer-v-1ov79pu.framer-j8bdez { width: 150px; }", ".framer-6DmpM.framer-v-1ov79pu .framer-mu77c9 { aspect-ratio: 0.8241758241758241 / 1; height: var(--framer-aspect-ratio-supported, 182px); }"]
    , ue = H(Hr, Wr, "framer-6DmpM")
    , le = ue;
ue.displayName = "Scroll Card";
ue.defaultProps = {
    height: 450,
    width: 370
};
ae(ue, {
    variant: {
        options: ["OK_UuSTsz", "ZrfTCO5Za", "SYSxh9PA5"],
        optionTitles: ["Desktop", "Tablet", "Mobile"],
        title: "Variant",
        type: j.Enum
    },
    CsQbKjwc1: {
        title: "Image",
        type: j.ResponsiveImage
    }
});
W(ue, []);
var Jr = ["PWWS7jA0w"]
    , Br = "framer-g1XIE"
    , Kr = {
        PWWS7jA0w: "framer-v-1tbrc51"
    };
var Zr = {
    default: {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    }
}
    , $r = r => typeof r == "object" && r !== null && typeof r.src == "string" ? r : typeof r == "string" ? {
        src: r
    } : void 0
    , ea = (r, a) => `translate(-50%, -50%) ${a}`
    , ra = ({ value: r, children: a }) => {
        let m = ee(E)
            , o = r ?? m.transition
            , l = re(() => ({
                ...m,
                transition: o
            }), [JSON.stringify(o)]);
        return e(E.Provider, {
            value: l,
            children: a
        })
    }
    , aa = ({ description: r, height: a, id: m, image: o, title: l, width: g, ...c }) => {
        var b, x;
        return {
            ...c,
            DjPvuQl3b: (b = r ?? c.DjPvuQl3b) !== null && b !== void 0 ? b : "Description",
            I67aA0FzH: o ?? c.I67aA0FzH,
            rFdTcFlmi: (x = l ?? c.rFdTcFlmi) !== null && x !== void 0 ? x : "Title"
        }
    }
    , ta = (r, a) => a.join("-") + r.layoutDependency
    , ia = V(function (r, a) {
        let { activeLocale: m, setLocale: o } = G()
            , { style: l, className: g, layoutId: c, variant: b, I67aA0FzH: x, rFdTcFlmi: i, DjPvuQl3b: z, ...q } = aa(r)
            , { baseVariant: w, classNames: k, gestureVariant: F, setGestureState: _, setVariant: D, transition: P, variants: K } = te({
                cycleOrder: Jr,
                defaultVariant: "PWWS7jA0w",
                transitions: Zr,
                variant: b,
                variantClassNames: Kr
            })
            , h = ta(r, K)
            , $ = X(null)
            , U = L()
            , de = [Ie];
        return e(M, {
            id: c ?? U,
            children: e(ra, {
                value: P,
                children: t(f.div, {
                    ...q,
                    animate: K,
                    className: O(Br, ...de, "framer-1tbrc51", g, k),
                    "data-framer-name": "Variant 1",
                    initial: b,
                    layoutDependency: h,
                    layoutId: "PWWS7jA0w",
                    onHoverEnd: () => _({
                        isHovered: !1
                    }),
                    onHoverStart: () => _({
                        isHovered: !0
                    }),
                    onTap: () => _({
                        isPressed: !1
                    }),
                    onTapCancel: () => _({
                        isPressed: !1
                    }),
                    onTapStart: () => _({
                        isPressed: !0
                    }),
                    ref: a ?? $,
                    style: {
                        ...l
                    },
                    children: [e(f.div, {
                        className: "framer-1rzsgdj",
                        "data-framer-name": "Background",
                        layoutDependency: h,
                        layoutId: "L3x1eLbp0",
                        style: {
                            backgroundColor: "var(--token-a3c395b2-feb8-4959-a202-34d19c05e988, rgb(250, 250, 250))",
                            borderBottomLeftRadius: 18,
                            borderBottomRightRadius: 18,
                            borderTopLeftRadius: 18,
                            borderTopRightRadius: 18
                        },
                        children: e(pe, {
                            background: {
                                alt: "",
                                fit: "fit",
                                intrinsicHeight: 56,
                                intrinsicWidth: 201,
                                sizes: "calc(min(265px, 100vw) * 0.55)",
                                ...$r(x),
                                positionX: "center",
                                positionY: "center"
                            },
                            className: "framer-1cw7vxj",
                            "data-framer-name": "Logo",
                            layoutDependency: h,
                            layoutId: "ufrCy641d",
                            transformTemplate: ea
                        })
                    }), e(f.div, {
                        className: "framer-5k33i3",
                        "data-framer-name": "Project Information",
                        layoutDependency: h,
                        layoutId: "YiOkUTH_g",
                        children: t(f.div, {
                            className: "framer-wxn00c",
                            "data-framer-name": "Title and Tagline",
                            layoutDependency: h,
                            layoutId: "UxnUxTFl9",
                            children: [e(p, {
                                __fromCanvasComponent: !0,
                                children: e(s, {
                                    children: e(f.p, {
                                        className: "framer-styles-preset-1yqtg1q",
                                        "data-styles-preset": "Die60VzNz",
                                        style: {
                                            "--framer-text-alignment": "left"
                                        },
                                        children: "Title"
                                    })
                                }),
                                className: "framer-1yu2ywm",
                                "data-framer-name": "Title",
                                layoutDependency: h,
                                layoutId: "LSQIsF_5C",
                                text: i,
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            }), e(p, {
                                __fromCanvasComponent: !0,
                                children: e(s, {
                                    children: e(f.p, {
                                        style: {
                                            "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                            "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "500",
                                            "--framer-letter-spacing": "0.1px",
                                            "--framer-line-height": "1.4em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115)))"
                                        },
                                        children: "Description"
                                    })
                                }),
                                className: "framer-1rrnfq",
                                fonts: ["GF;Inter Tight-500"],
                                layoutDependency: h,
                                layoutId: "euUGuCXgP",
                                style: {
                                    "--extracted-r6o4lv": "var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115))"
                                },
                                text: z,
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })]
                        })
                    })]
                })
            })
        })
    })
    , na = ['.framer-g1XIE[data-border="true"]::after, .framer-g1XIE [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-g1XIE.framer-dgz9ln, .framer-g1XIE .framer-dgz9ln { display: block; }", ".framer-g1XIE.framer-1tbrc51 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: center; overflow: hidden; padding: 0px 0px 40px 0px; position: relative; width: 265px; }", ".framer-g1XIE .framer-1rzsgdj { aspect-ratio: 0.9464285714285714 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 280px); position: relative; width: 100%; }", ".framer-g1XIE .framer-1cw7vxj { aspect-ratio: 2.92 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 50px); left: 50%; overflow: visible; position: absolute; top: 50%; width: 55%; }", ".framer-g1XIE .framer-5k33i3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-g1XIE .framer-wxn00c { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }", ".framer-g1XIE .framer-1yu2ywm, .framer-g1XIE .framer-1rrnfq { flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-g1XIE.framer-1tbrc51, .framer-g1XIE .framer-5k33i3, .framer-g1XIE .framer-wxn00c { gap: 0px; } .framer-g1XIE.framer-1tbrc51 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-g1XIE.framer-1tbrc51 > :first-child, .framer-g1XIE .framer-wxn00c > :first-child { margin-top: 0px; } .framer-g1XIE.framer-1tbrc51 > :last-child, .framer-g1XIE .framer-wxn00c > :last-child { margin-bottom: 0px; } .framer-g1XIE .framer-5k33i3 > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-g1XIE .framer-5k33i3 > :first-child { margin-left: 0px; } .framer-g1XIE .framer-5k33i3 > :last-child { margin-right: 0px; } .framer-g1XIE .framer-wxn00c > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }", ...ke]
    , ye = H(ia, na, "framer-g1XIE")
    , Q = ye;
ye.displayName = "Client Card";
ye.defaultProps = {
    height: 380.5,
    width: 265
};
ae(ye, {
    I67aA0FzH: {
        title: "Image",
        type: j.ResponsiveImage
    },
    rFdTcFlmi: {
        defaultValue: "Title",
        displayTextArea: !1,
        title: "Title",
        type: j.String
    },
    DjPvuQl3b: {
        defaultValue: "Description",
        displayTextArea: !1,
        title: "Description",
        type: j.String
    }
});
W(ye, [{
    family: "Inter Tight",
    style: "normal",
    url: "https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjPQ-qWSRToK8EPg.woff2",
    weight: "500"
}, ...Ae]);
var oa = I(ne)
    , Se = tr(ne)
    , sa = {
        sTFrQ1PwU: {
            hover: !0
        }
    }
    , ma = ["sTFrQ1PwU"]
    , la = "framer-siutW"
    , fa = {
        sTFrQ1PwU: "framer-v-bsl5ck"
    };
function ca(r, ...a) {
    let m = {};
    return a?.forEach(o => o && Object.assign(m, r[o])),
        m
}
var da = {
    default: {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    }
}
    , pa = (r, a) => `translate(-50%, -50%) ${a}`
    , ha = ({ value: r, children: a }) => {
        let m = ee(E)
            , o = r ?? m.transition
            , l = re(() => ({
                ...m,
                transition: o
            }), [JSON.stringify(o)]);
        return e(E.Provider, {
            value: l,
            children: a
        })
    }
    , ga = {
        "Lacey-Mae": "Jj_gJ6raO",
        Ada: "v2n6jd8d8",
        Aleeza: "tR7FlThNE",
        Alejandro: "bNhqIdQoj",
        Ammaar: "snFARdAmz",
        Arda: "mcvPgNUgN",
        Ayisha: "UozSdcuUY",
        Barry: "TxmZTsvXB",
        Becca: "NqCoJY2pH",
        Bo: "UYFenO8zH",
        Carley: "OY_j7HdJV",
        Carmen: "nMHdUM1t6",
        Cheryl: "cHv8JY9g7",
        Denny: "bOMpuyzc_",
        Dillon: "tExww8aRk",
        Elli: "bg0lLngd2",
        Jardel: "hUi9TraZo",
        Jason: "AD1uRb789",
        Jess: "t6uYX0tBZ",
        Jethro: "ji0e3Gqv5",
        Lois: "vrPxXX3Sq",
        Lori: "wQ9whLvFH",
        Maisie: "YC5psLXzO",
        Myah: "JG7MxGgTY",
        Nataniel: "EgLxQrxHD",
        Nikita: "vol5AdrV3",
        Olli: "AnI2DvQZf",
        Patrik: "Stnp3oRU4",
        Piotr: "FKNQjSL73",
        Rhian: "y8osi5SA0",
        Selin: "OYkCSZPL0",
        Shelbie: "RpMB9X2cU",
        Siena: "Nz_Z2NTH0",
        Tim: "rbMcqs1eA"
    }
    , xa = ({ backgroundColor: r, height: a, id: m, jobTitle: o, memoji: l, memojiBackground: g, name1: c, width: b, ...x }) => {
        var i, z, q, w, k, F, _;
        return {
            ...x,
            DjPvuQl3b: (i = o ?? x.DjPvuQl3b) !== null && i !== void 0 ? i : "Job Title",
            MsiYP1JG6: (z = g ?? x.MsiYP1JG6) !== null && z !== void 0 ? z : 'var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, rgb(255, 255, 255)) /* {"name":"White"} */',
            NE1LXjayq: (k = (w = (q = ga[l]) !== null && q !== void 0 ? q : l) !== null && w !== void 0 ? w : x.NE1LXjayq) !== null && k !== void 0 ? k : "tExww8aRk",
            rFdTcFlmi: (F = c ?? x.rFdTcFlmi) !== null && F !== void 0 ? F : "Name",
            RtgP_R5rA: (_ = r ?? x.RtgP_R5rA) !== null && _ !== void 0 ? _ : 'var(--token-a3c395b2-feb8-4959-a202-34d19c05e988, rgb(250, 250, 250)) /* {"name":"Gray 100"} */'
        }
    }
    , _a = (r, a) => a.join("-") + r.layoutDependency
    , ua = V(function (r, a) {
        let { activeLocale: m, setLocale: o } = G()
            , { style: l, className: g, layoutId: c, variant: b, rFdTcFlmi: x, DjPvuQl3b: i, NE1LXjayq: z, MsiYP1JG6: q, RtgP_R5rA: w, ...k } = xa(r)
            , { baseVariant: F, classNames: _, gestureVariant: D, setGestureState: P, setVariant: K, transition: h, variants: $ } = te({
                cycleOrder: ma,
                defaultVariant: "sTFrQ1PwU",
                enabledGestures: sa,
                transitions: da,
                variant: b,
                variantClassNames: fa
            })
            , U = _a(r, $)
            , de = X(null)
            , A = L()
            , S = [];
        return e(M, {
            id: c ?? A,
            children: e(ha, {
                value: h,
                children: t(f.div, {
                    ...k,
                    animate: $,
                    className: O(la, ...S, "framer-bsl5ck", g, _),
                    "data-framer-name": "Variant 1",
                    initial: b,
                    layoutDependency: U,
                    layoutId: "sTFrQ1PwU",
                    onHoverEnd: () => P({
                        isHovered: !1
                    }),
                    onHoverStart: () => P({
                        isHovered: !0
                    }),
                    onTap: () => P({
                        isPressed: !1
                    }),
                    onTapCancel: () => P({
                        isPressed: !1
                    }),
                    onTapStart: () => P({
                        isPressed: !0
                    }),
                    ref: a ?? de,
                    style: {
                        ...l
                    },
                    ...ca({
                        "sTFrQ1PwU-hover": {
                            "data-framer-name": void 0
                        }
                    }, F, D),
                    children: [e(f.div, {
                        className: "framer-1t64zet",
                        "data-framer-name": "Background",
                        layoutDependency: U,
                        layoutId: "VPbzsSTwh",
                        style: {
                            backgroundColor: w,
                            borderBottomLeftRadius: 18,
                            borderBottomRightRadius: 18,
                            borderTopLeftRadius: 18,
                            borderTopRightRadius: 18
                        },
                        children: e(f.div, {
                            className: "framer-fzal1u-container",
                            layoutDependency: U,
                            layoutId: "MvbSyzxSX-container",
                            transformTemplate: pa,
                            children: e(ne, {
                                background: q,
                                height: "100%",
                                id: "MvbSyzxSX",
                                layoutId: "MvbSyzxSX",
                                radius: 60,
                                rotation: 0,
                                style: {
                                    height: "100%",
                                    width: "100%"
                                },
                                variant: z,
                                width: "100%"
                            })
                        })
                    }), e(f.div, {
                        className: "framer-shjor6",
                        "data-framer-name": "Project Information",
                        layoutDependency: U,
                        layoutId: "XUAGQKym_",
                        children: t(f.div, {
                            className: "framer-1ifvllx",
                            "data-framer-name": "Title and Tagline",
                            layoutDependency: U,
                            layoutId: "L_Q3RGm_j",
                            children: [e(p, {
                                __fromCanvasComponent: !0,
                                children: e(s, {
                                    children: e(f.p, {
                                        style: {
                                            "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                            "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "500",
                                            "--framer-letter-spacing": "0.1px",
                                            "--framer-line-height": "1.5em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20)))"
                                        },
                                        children: "Title"
                                    })
                                }),
                                className: "framer-1v04s75",
                                "data-framer-name": "Title",
                                fonts: ["GF;Inter Tight-500"],
                                layoutDependency: U,
                                layoutId: "eI5W3wISH",
                                style: {
                                    "--extracted-r6o4lv": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))",
                                    "--framer-paragraph-spacing": "0px"
                                },
                                text: x,
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            }), e(p, {
                                __fromCanvasComponent: !0,
                                children: e(s, {
                                    children: e(f.p, {
                                        style: {
                                            "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                            "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "500",
                                            "--framer-letter-spacing": "0.1px",
                                            "--framer-line-height": "1.5em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115)))"
                                        },
                                        children: "Description"
                                    })
                                }),
                                className: "framer-nae1x7",
                                fonts: ["GF;Inter Tight-500"],
                                layoutDependency: U,
                                layoutId: "Drk6T3Zr8",
                                style: {
                                    "--extracted-r6o4lv": "var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115))",
                                    "--framer-paragraph-spacing": "0px"
                                },
                                text: i,
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })]
                        })
                    })]
                })
            })
        })
    })
    , ya = ['.framer-siutW[data-border="true"]::after, .framer-siutW [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-siutW.framer-hemqvi, .framer-siutW .framer-hemqvi { display: block; }", ".framer-siutW.framer-bsl5ck { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: center; overflow: hidden; padding: 0px 0px 40px 0px; position: relative; width: 265px; }", ".framer-siutW .framer-1t64zet { aspect-ratio: 0.9464285714285714 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 280px); position: relative; width: 100%; }", ".framer-siutW .framer-fzal1u-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 100px); left: 50%; position: absolute; top: 50%; width: 100px; }", ".framer-siutW .framer-shjor6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-siutW .framer-1ifvllx { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }", ".framer-siutW .framer-1v04s75, .framer-siutW .framer-nae1x7 { flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-siutW.framer-bsl5ck, .framer-siutW .framer-shjor6, .framer-siutW .framer-1ifvllx { gap: 0px; } .framer-siutW.framer-bsl5ck > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-siutW.framer-bsl5ck > :first-child, .framer-siutW .framer-1ifvllx > :first-child { margin-top: 0px; } .framer-siutW.framer-bsl5ck > :last-child, .framer-siutW .framer-1ifvllx > :last-child { margin-bottom: 0px; } .framer-siutW .framer-shjor6 > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-siutW .framer-shjor6 > :first-child { margin-left: 0px; } .framer-siutW .framer-shjor6 > :last-child { margin-right: 0px; } .framer-siutW .framer-1ifvllx > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }", ".framer-siutW.framer-v-bsl5ck.hover .framer-fzal1u-container { height: var(--framer-aspect-ratio-supported, 150px); width: 150px; }"]
    , be = H(ua, ya, "framer-siutW")
    , J = be;
be.displayName = "Team Card";
be.defaultProps = {
    height: 382,
    width: 265
};
ae(be, {
    rFdTcFlmi: {
        defaultValue: "Name",
        displayTextArea: !1,
        title: "Name",
        type: j.String
    },
    DjPvuQl3b: {
        defaultValue: "Job Title",
        displayTextArea: !1,
        title: "Job Title",
        type: j.String
    },
    NE1LXjayq: Se?.variant && {
        ...Se.variant,
        defaultValue: "tExww8aRk",
        hidden: void 0,
        title: "Memoji"
    },
    MsiYP1JG6: {
        defaultValue: 'var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, rgb(255, 255, 255)) /* {"name":"White"} */',
        title: "Memoji Background",
        type: j.Color
    },
    RtgP_R5rA: {
        defaultValue: 'var(--token-a3c395b2-feb8-4959-a202-34d19c05e988, rgb(250, 250, 250)) /* {"name":"Gray 100"} */',
        title: "Background Color",
        type: j.Color
    }
});
W(be, [{
    family: "Inter Tight",
    style: "normal",
    url: "https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjPQ-qWSRToK8EPg.woff2",
    weight: "500"
}, ...oa]);
var ba = I(Le)
    , va = mr(Le)
    , Qe = Ne(u)
    , wa = I(Ge)
    , Na = I(Me)
    , Aa = Ne(p)
    , ka = I(le)
    , y = xe(u)
    , Ia = Ne(f.div)
    , Z = xe(f.div)
    , br = xe(pe)
    , Ca = I(ie)
    , Ta = I(ne)
    , Fa = I(oe)
    , Pa = I(Ve)
    , Je = xe(p)
    , ja = I(Q)
    , za = I(J)
    , qa = I(Ce)
    , Xa = I(He)
    , Ra = {
        GzqFYGAAq: "(max-width: 809px)",
        psHQbI6Oa: "(min-width: 1200px)",
        UrJVvqg6I: "(min-width: 810px) and (max-width: 1199px)"
    }
    , Sa = () => typeof document < "u"
    , vr = "framer-3NeA1"
    , Ea = {
        GzqFYGAAq: "framer-v-g5fskk",
        psHQbI6Oa: "framer-v-t2rj8",
        UrJVvqg6I: "framer-v-1gseef5"
    }
    , B = {
        damping: 30,
        delay: 0,
        mass: 2,
        stiffness: 100,
        type: "spring"
    }
    , Ya = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: B,
        x: 0,
        y: 0
    }
    , Ua = {
        opacity: .001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        x: 0,
        y: -10
    }
    , C = (r, a) => {
        if (!(!r || typeof r != "object"))
            return {
                ...r,
                alt: a
            }
    }
    , Oa = (r, a) => `translateX(-50%) ${a}`
    , Da = {
        damping: 30,
        delay: .3,
        mass: 2,
        stiffness: 100,
        type: "spring"
    }
    , Va = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: Da,
        x: 0,
        y: 0
    }
    , La = {
        opacity: .001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        x: 0,
        y: -30
    }
    , Ma = {
        damping: 30,
        delay: .6,
        mass: 2,
        stiffness: 100,
        type: "spring"
    }
    , wr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: Ma,
        x: 0,
        y: 0
    }
    , Ga = {
        opacity: .001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        x: 0,
        y: -50
    }
    , Ha = {
        damping: 30,
        delay: .1,
        mass: 2,
        stiffness: 100,
        type: "spring"
    }
    , Wa = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: Ha,
        x: 0,
        y: 0
    }
    , Qa = {
        opacity: .001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        x: 0,
        y: 60
    }
    , Ja = {
        opacity: .001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        x: 0,
        y: 90
    }
    , Ee = (r, a) => `translateY(-50%) ${a}`
    , fe = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        x: 0,
        y: 60
    }
    , Ye = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: B,
        x: 0,
        y: 60
    }
    , Ba = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        x: 0,
        y: 90
    }
    , Ka = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: B,
        x: 0,
        y: 90
    }
    , Nr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        x: 0,
        y: 120
    }
    , Za = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: B,
        x: 0,
        y: 120
    }
    , v = {
        delay: 0,
        duration: .3,
        ease: [.44, 0, .56, 1],
        type: "tween"
    }
    , Be = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: v,
        x: 0,
        y: 60
    }
    , Ar = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: .6,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        x: 0,
        y: 0
    }
    , kr = {
        delay: 0,
        duration: .4,
        ease: [.44, 0, .56, 1],
        type: "tween"
    }
    , $a = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: .6,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: kr,
        x: 0,
        y: 0
    }
    , Ir = {
        delay: .1,
        duration: .8,
        ease: [.44, 0, .56, 1],
        type: "tween"
    }
    , et = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: .6,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: Ir,
        x: 0,
        y: 0
    }
    , T = {
        delay: 0,
        duration: .6,
        ease: [.44, 0, .56, 1],
        type: "tween"
    }
    , rt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: T,
        x: 0,
        y: 120
    }
    , N = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        x: 0,
        y: 160
    }
    , R = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: v,
        x: 0,
        y: 160
    }
    , Y = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: T,
        x: 0,
        y: 160
    }
    , ce = {
        delay: 0,
        duration: .9,
        ease: [.44, 0, .56, 1],
        type: "tween"
    }
    , ge = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: ce,
        x: 0,
        y: 160
    }
    , ve = {
        delay: 0,
        duration: 1.2,
        ease: [.44, 0, .56, 1],
        type: "tween"
    }
    , Ue = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: ve,
        x: 0,
        y: 160
    }
    , at = {
        delay: 0,
        duration: .35,
        ease: [.44, 0, .5, 1],
        type: "tween"
    }
    , se = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: at,
        y: -20
    }
    , Ke = je()
    , tt = {
        Desktop: "psHQbI6Oa",
        Phone: "GzqFYGAAq",
        Tablet: "UrJVvqg6I"
    }
    , it = ({ height: r, id: a, width: m, ...o }) => {
        var l, g;
        return {
            ...o,
            variant: (g = (l = tt[o.variant]) !== null && l !== void 0 ? l : o.variant) !== null && g !== void 0 ? g : "psHQbI6Oa"
        }
    }
    , nt = V(function (r, a) {
        let { activeLocale: m, setLocale: o } = G()
            , { style: l, className: g, layoutId: c, variant: b, ...x } = it(r);
        er(() => {
            let A = je(void 0, m);
            if (A.robots) {
                let S = document.querySelector('meta[name="robots"]');
                S ? S.setAttribute("content", A.robots) : (S = document.createElement("meta"),
                    S.setAttribute("name", "robots"),
                    S.setAttribute("content", A.robots),
                    document.head.appendChild(S))
            }
        }
            , [void 0, m]),
            rr(() => {
                let A = je(void 0, m);
                if (document.title = A.title || "",
                    A.viewport) {
                    var S;
                    (S = document.querySelector('meta[name="viewport"]')) === null || S === void 0 || S.setAttribute("content", A.viewport)
                }
                let Ze = A.bodyClassName;
                if (Ze) {
                    let De = document.body;
                    De.classList.forEach($e => $e.startsWith("framer-body-") && De.classList.remove($e)),
                        De.classList.add(`${A.bodyClassName}-framer-3NeA1`)
                }
                return () => {
                    Ze && document.body.classList.remove(`${A.bodyClassName}-framer-3NeA1`)
                }
            }
                , [void 0, m]);
        let [i, z] = sr(b, Ra, !1)
            , q = void 0
            , w = X(null)
            , k = ar()
            , F = X(null)
            , _ = X(null)
            , D = () => Sa() ? i !== "GzqFYGAAq" : !0
            , P = we("fOhK_VRnJ")
            , K = we("K_t7MZl3C")
            , h = X(null)
            , $ = we("osXSxMxjM")
            , U = L()
            , de = [Pe, cr, _r, Ie, hr];
        return ir({}),
            e(nr.Provider, {
                value: {
                    primaryVariantId: "psHQbI6Oa",
                    variantClassNames: Ea
                },
                children: t(M, {
                    id: c ?? U,
                    children: [t(f.div, {
                        ...x,
                        className: O(vr, ...de, "framer-t2rj8", g),
                        ref: a ?? w,
                        style: {
                            ...l
                        },
                        children: [e(or, {
                            links: [{
                                href: {
                                    webPageId: "augiA20Il"
                                },
                                implicitPathVariables: void 0
                            }, {
                                href: {
                                    webPageId: "augiA20Il"
                                },
                                implicitPathVariables: void 0
                            }, {
                                href: {
                                    webPageId: "augiA20Il"
                                },
                                implicitPathVariables: void 0
                            }],
                            children: A => e(n, {
                                children: e(Qe, {
                                    animate: Ya,
                                    className: "framer-1x69kgu-container",
                                    "data-framer-appear-id": "1x69kgu",
                                    "data-framer-name": "Vision Techie Logo",
                                    initial: Ua,
                                    layoutScroll: !0,
                                    name: "Vision Techie Logo",
                                    optimized: !0,
                                    style: {
                                        transformPerspective: 1200
                                    },
                                    children: e(d, {
                                        breakpoint: i,
                                        overrides: {
                                            GzqFYGAAq: {
                                                __framer__targets: [{
                                                    offset: 200,
                                                    ref: F,
                                                    target: "DgTHk90iK"
                                                }, {
                                                    offset: 0,
                                                    ref: _,
                                                    target: "zWV8cxgzT"
                                                }],
                                                ifUOndEDH: A[2],
                                                variant: "DgTHk90iK"
                                            },
                                            UrJVvqg6I: {
                                                __framer__targets: [{
                                                    offset: 200,
                                                    ref: F,
                                                    target: "DgTHk90iK"
                                                }, {
                                                    offset: 0,
                                                    ref: _,
                                                    target: "zWV8cxgzT"
                                                }],
                                                ifUOndEDH: A[1],
                                                variant: "DgTHk90iK"
                                            }
                                        },
                                        children: e(va, {
                                            __framer__animateOnce: !1,
                                            __framer__targets: [{
                                                offset: 200,
                                                ref: F,
                                                target: "tbYjNRrlu"
                                            }, {
                                                offset: 0,
                                                ref: _,
                                                target: "sP4e3iZKf"
                                            }],
                                            __framer__threshold: 0,
                                            __framer__variantAppearEffectEnabled: !0,
                                            bXKDVwltS: C({
                                                src: "../assets/logo/logo-black.svg"
                                            }, ""),
                                            height: "100%",
                                            id: "ztYMx5vrW",
                                            ifUOndEDH: A[0],
                                            l6Wo4ULiJ: "Vision Techie",
                                            layoutId: "ztYMx5vrW",
                                            name: "Vision Techie Logo",
                                            variant: "tbYjNRrlu",
                                            width: "100%",
                                            YIltgZQMx: C({
                                                src: "../assets/logo/logo-white.svg"
                                            }, "")
                                        })
                                    })
                                })
                            })
                        }), e(n, {
                            children: e(d, {
                                breakpoint: i,
                                overrides: {
                                    GzqFYGAAq: {
                                        transformTemplate: void 0
                                    }
                                },
                                children: e(Qe, {
                                    animate: Va,
                                    className: "framer-7wjwtn-container",
                                    "data-framer-appear-id": "7wjwtn",
                                    initial: La,
                                    layoutScroll: !0,
                                    optimized: !0,
                                    style: {
                                        transformPerspective: 1200
                                    },
                                    transformTemplate: Oa,
                                    children: e(d, {
                                        breakpoint: i,
                                        overrides: {
                                            GzqFYGAAq: {
                                                style: {
                                                    width: "100%"
                                                },
                                                variant: "xZMChLWbK"
                                            },
                                            UrJVvqg6I: {
                                                variant: "zWjVcnPlS"
                                            }
                                        },
                                        children: e(Ge, {
                                            height: "100%",
                                            id: "ZxUzinx68",
                                            layoutId: "ZxUzinx68",
                                            variant: "ebLRlZjPs",
                                            width: "100%"
                                        })
                                    })
                                })
                            })
                        })

                            , t("div", {
                                className: "framer-13s5uhq",
                                "data-framer-name": "Landing",
                                id: P,
                                name: "Landing",
                                ref: F,
                                children: [e(Aa, {
                                    __fromCanvasComponent: !0,
                                    animate: Wa,
                                    children: e(s, {
                                        children: e("h1", {
                                            className: "framer-styles-preset-1sgigkb",
                                            "data-styles-preset": "BRyT8PKiE",
                                            style: {
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, rgb(255, 255, 255))"
                                            },
                                            children: "We partner with forward-thinking brands to create compelling stories."
                                        })
                                    }),
                                    className: "framer-451qk2",
                                    "data-framer-appear-id": "451qk2",
                                    fonts: ["Inter"],
                                    initial: Qa,
                                    optimized: !0,
                                    style: {
                                        transformPerspective: 1200
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), t(Ia, {
                                    animate: wr,
                                    className: "framer-1rsxfaf",
                                    "data-framer-appear-id": "1rsxfaf",
                                    "data-framer-name": "Scrolling Cards",
                                    id: K,
                                    initial: Ja,
                                    name: "Scrolling Cards",
                                    optimized: !0,
                                    ref: h,
                                    style: {
                                        transformPerspective: 1200
                                    },
                                    children: [e(n, {
                                        children: e(d, {
                                            breakpoint: i,
                                            overrides: {
                                                GzqFYGAAq: {
                                                    __framer__transformTargets: [{
                                                        target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: 1,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 0,
                                                            y: 0
                                                        }
                                                    }, {
                                                        ref: h,
                                                        target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: .7,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: -100,
                                                            y: 0
                                                        }
                                                    }]
                                                },
                                                UrJVvqg6I: {
                                                    __framer__transformTargets: [{
                                                        target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: 1,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 0,
                                                            y: 0
                                                        }
                                                    }, {
                                                        ref: h,
                                                        target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: .7,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: -250,
                                                            y: 0
                                                        }
                                                    }]
                                                }
                                            },
                                            children: e(y, {
                                                __framer__spring: {
                                                    damping: 60,
                                                    delay: 0,
                                                    duration: .3,
                                                    ease: [.44, 0, .56, 1],
                                                    mass: 1,
                                                    stiffness: 500,
                                                    type: "spring"
                                                },
                                                __framer__styleTransformEffectEnabled: !0,
                                                __framer__transformTargets: [{
                                                    target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 0
                                                    }
                                                }, {
                                                    ref: h,
                                                    target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: .7,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: -380,
                                                        y: 0
                                                    }
                                                }],
                                                __framer__transformTrigger: "onScrollTarget",
                                                __framer__transformViewportThreshold: 1,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: "framer-11ocnxz-container",
                                                "data-framer-name": "Left 2",
                                                name: "Left 2",
                                                style: {
                                                    transformPerspective: 1200
                                                },
                                                transformTemplate: Ee,
                                                children: e(d, {
                                                    breakpoint: i,
                                                    overrides: {
                                                        GzqFYGAAq: {
                                                            variant: "SYSxh9PA5"
                                                        },
                                                        UrJVvqg6I: {
                                                            variant: "ZrfTCO5Za"
                                                        }
                                                    },
                                                    children: e(le, {
                                                        CsQbKjwc1: C({
                                                            src: "../assets/images/about/viargos.jpeg",
                                                            srcSet: "../assets/images/about/viargos.jpeg?scale-down-to=1024 655w,../assets/images/about/viargos.jpeg?scale-down-to=2048 1310w,../assets/images/about/viargos.jpeg?scale-down-to=4096 2621w,../assets/images/about/viargos.jpeg 3072w"
                                                        }, ""),
                                                        height: "100%",
                                                        id: "C57hVzS16",
                                                        layoutId: "C57hVzS16",
                                                        name: "Left 2",
                                                        style: {
                                                            width: "100%"
                                                        },
                                                        variant: "OK_UuSTsz",
                                                        width: "100%"
                                                    })
                                                })
                                            })
                                        })
                                    }), e(n, {
                                        children: e(d, {
                                            breakpoint: i,
                                            overrides: {
                                                GzqFYGAAq: {
                                                    __framer__transformTargets: [{
                                                        target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: 1,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 0,
                                                            y: 0
                                                        }
                                                    }, {
                                                        ref: h,
                                                        target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: .7,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 100,
                                                            y: 0
                                                        }
                                                    }]
                                                },
                                                UrJVvqg6I: {
                                                    __framer__transformTargets: [{
                                                        target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: 1,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 0,
                                                            y: 0
                                                        }
                                                    }, {
                                                        ref: h,
                                                        target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: .7,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 250,
                                                            y: 0
                                                        }
                                                    }]
                                                }
                                            },
                                            children: e(y, {
                                                __framer__spring: {
                                                    damping: 60,
                                                    delay: 0,
                                                    duration: .3,
                                                    ease: [.44, 0, .56, 1],
                                                    mass: 1,
                                                    stiffness: 500,
                                                    type: "spring"
                                                },
                                                __framer__styleTransformEffectEnabled: !0,
                                                __framer__transformTargets: [{
                                                    target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 0
                                                    }
                                                }, {
                                                    ref: h,
                                                    target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: .7,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 380,
                                                        y: 0
                                                    }
                                                }],
                                                __framer__transformTrigger: "onScrollTarget",
                                                __framer__transformViewportThreshold: 1,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: "framer-se6df6-container",
                                                "data-framer-name": "Right 2",
                                                name: "Right 2",
                                                style: {
                                                    transformPerspective: 1200
                                                },
                                                transformTemplate: Ee,
                                                children: e(d, {
                                                    breakpoint: i,
                                                    overrides: {
                                                        GzqFYGAAq: {
                                                            variant: "SYSxh9PA5"
                                                        },
                                                        UrJVvqg6I: {
                                                            variant: "ZrfTCO5Za"
                                                        }
                                                    },
                                                    children: e(le, {
                                                        CsQbKjwc1: C({
                                                            src: "../assets/images/about/hul.png",
                                                            srcSet: "../assets/images/about/hul.png?scale-down-to=1024 655w,../assets/images/about/hul.png?scale-down-to=2048 1310w,../assets/images/about/hul.png?scale-down-to=4096 2621w,../assets/images/about/hul.png 3072w"
                                                        }, ""),
                                                        height: "100%",
                                                        id: "hURnB4HME",
                                                        layoutId: "hURnB4HME",
                                                        name: "Right 2",
                                                        style: {
                                                            width: "100%"
                                                        },
                                                        variant: "OK_UuSTsz",
                                                        width: "100%"
                                                    })
                                                })
                                            })
                                        })
                                    }), e(n, {
                                        children: e(d, {
                                            breakpoint: i,
                                            overrides: {
                                                GzqFYGAAq: {
                                                    __framer__transformTargets: [{
                                                        target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: 1,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 0,
                                                            y: 0
                                                        }
                                                    }, {
                                                        ref: h,
                                                        target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: .9,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: -50,
                                                            y: 0
                                                        }
                                                    }]
                                                },
                                                UrJVvqg6I: {
                                                    __framer__transformTargets: [{
                                                        target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: 1,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 0,
                                                            y: 0
                                                        }
                                                    }, {
                                                        ref: h,
                                                        target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: .9,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: -135,
                                                            y: 0
                                                        }
                                                    }]
                                                }
                                            },
                                            children: e(y, {
                                                __framer__spring: {
                                                    damping: 60,
                                                    delay: 0,
                                                    duration: .3,
                                                    ease: [.44, 0, .56, 1],
                                                    mass: 1,
                                                    stiffness: 500,
                                                    type: "spring"
                                                },
                                                __framer__styleTransformEffectEnabled: !0,
                                                __framer__transformTargets: [{
                                                    target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 0
                                                    }
                                                }, {
                                                    ref: h,
                                                    target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: .9,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: -200,
                                                        y: 0
                                                    }
                                                }],
                                                __framer__transformTrigger: "onScrollTarget",
                                                __framer__transformViewportThreshold: 1,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: "framer-fv148n-container",
                                                "data-framer-name": "Left 1",
                                                name: "Left 1",
                                                style: {
                                                    transformPerspective: 1200
                                                },
                                                transformTemplate: Ee,
                                                children: e(d, {
                                                    breakpoint: i,
                                                    overrides: {
                                                        GzqFYGAAq: {
                                                            variant: "SYSxh9PA5"
                                                        },
                                                        UrJVvqg6I: {
                                                            variant: "ZrfTCO5Za"
                                                        }
                                                    },
                                                    children: e(le, {
                                                        CsQbKjwc1: C({
                                                            src: "../assets/images/about/track.png",
                                                            srcSet: "../assets/images/about/track.png?scale-down-to=1024 655w,../assets/images/about/track.png?scale-down-to=2048 1310w,../assets/images/about/track.png 2048w"
                                                        }, ""),
                                                        height: "100%",
                                                        id: "HR1fGSp8l",
                                                        layoutId: "HR1fGSp8l",
                                                        name: "Left 1",
                                                        style: {
                                                            width: "100%"
                                                        },
                                                        variant: "OK_UuSTsz",
                                                        width: "100%"
                                                    })
                                                })
                                            })
                                        })
                                    }), e(n, {
                                        children: e(d, {
                                            breakpoint: i,
                                            overrides: {
                                                GzqFYGAAq: {
                                                    __framer__transformTargets: [{
                                                        target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: 1,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 0,
                                                            y: 0
                                                        }
                                                    }, {
                                                        ref: h,
                                                        target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: .9,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 50,
                                                            y: 0
                                                        }
                                                    }]
                                                },
                                                UrJVvqg6I: {
                                                    __framer__transformTargets: [{
                                                        target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: 1,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 0,
                                                            y: 0
                                                        }
                                                    }, {
                                                        ref: h,
                                                        target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: .9,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 135,
                                                            y: 0
                                                        }
                                                    }]
                                                }
                                            },
                                            children: e(y, {
                                                __framer__spring: {
                                                    damping: 60,
                                                    delay: 0,
                                                    duration: .3,
                                                    ease: [.44, 0, .56, 1],
                                                    mass: 1,
                                                    stiffness: 500,
                                                    type: "spring"
                                                },
                                                __framer__styleTransformEffectEnabled: !0,
                                                __framer__transformTargets: [{
                                                    target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 0
                                                    }
                                                }, {
                                                    ref: h,
                                                    target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: .9,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 200,
                                                        y: 0
                                                    }
                                                }],
                                                __framer__transformTrigger: "onScrollTarget",
                                                __framer__transformViewportThreshold: 1,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: "framer-k06l0j-container",
                                                "data-framer-name": "Right 1",
                                                name: "Right 1",
                                                style: {
                                                    transformPerspective: 1200
                                                },
                                                transformTemplate: Ee,
                                                children: e(d, {
                                                    breakpoint: i,
                                                    overrides: {
                                                        GzqFYGAAq: {
                                                            variant: "SYSxh9PA5"
                                                        },
                                                        UrJVvqg6I: {
                                                            variant: "ZrfTCO5Za"
                                                        }
                                                    },
                                                    children: e(le, {
                                                        CsQbKjwc1: C({
                                                            src: "../assets/images/about/snape.jpg",
                                                            srcSet: "../assets/images/about/snape.jpg?scale-down-to=1024 655w,../assets/images/about/snape.jpg?scale-down-to=2048 1310w,../assets/images/about/snape.jpg 2048w"
                                                        }, ""),
                                                        height: "100%",
                                                        id: "b2riXzFfL",
                                                        layoutId: "b2riXzFfL",
                                                        name: "Right 1",
                                                        style: {
                                                            width: "100%"
                                                        },
                                                        variant: "OK_UuSTsz",
                                                        width: "100%"
                                                    })
                                                })
                                            })
                                        })
                                    }), e(n, {
                                        children: e(u, {
                                            className: "framer-1x4ajha-container",
                                            "data-framer-name": "Middle Card",
                                            name: "Middle Card",
                                            children: e(d, {
                                                breakpoint: i,
                                                overrides: {
                                                    GzqFYGAAq: {
                                                        variant: "SYSxh9PA5"
                                                    },
                                                    UrJVvqg6I: {
                                                        variant: "ZrfTCO5Za"
                                                    }
                                                },
                                                children: e(le, {
                                                    CsQbKjwc1: C({
                                                        src: "../assets/images/about/eigen.png",
                                                        srcSet: "../assets/images/about/eigen.png?scale-down-to=1024 655w,../assets/images/about/eigen.png?scale-down-to=2048 1310w,../assets/images/about/eigen.png 2048w"
                                                    }, ""),
                                                    height: "100%",
                                                    id: "C6l7TDeln",
                                                    layoutId: "C6l7TDeln",
                                                    name: "Middle Card",
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    variant: "OK_UuSTsz",
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    })]
                                })]
                            }), e("div", {
                                className: "framer-1mdri4q",
                                "data-framer-name": "Stats",
                                name: "Stats",
                                children: t("div", {
                                    className: "framer-japwaz",
                                    "data-framer-name": "Cards",
                                    name: "Cards",
                                    children: [t(Z, {
                                        __framer__animate: {
                                            transition: B
                                        },
                                        __framer__animateOnce: !0,
                                        __framer__enter: fe,
                                        __framer__exit: Ye,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: .5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: "framer-picdsj",
                                        "data-framer-name": "Card",
                                        name: "Card",
                                        style: {
                                            transformPerspective: 1200
                                        },
                                        children: [e(p, {
                                            __fromCanvasComponent: !0,
                                            children: e(s, {
                                                children: e("p", {
                                                    className: "framer-styles-preset-1n7ng81",
                                                    "data-styles-preset": "bxP2b_0Ko",
                                                    style: {
                                                        "--framer-text-color": "var(--token-5553722d-43da-4a73-a7ce-d2499d28fa68, rgb(135, 134, 138))"
                                                    },
                                                    children: "Year founded"
                                                })
                                            }),
                                            className: "framer-28esjz",
                                            fonts: ["Inter"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), e(p, {
                                            __fromCanvasComponent: !0,
                                            children: e(s, {
                                                children: e("h1", {
                                                    className: "framer-styles-preset-1sgigkb",
                                                    "data-styles-preset": "BRyT8PKiE",
                                                    style: {
                                                        "--framer-text-color": "rgb(0, 0, 0)"
                                                    },
                                                    children: e("span", {
                                                        "data-text-fill": "true",
                                                        style: {
                                                            backgroundImage: "linear-gradient(111deg, rgb(14, 0, 107) 7.45883%, rgb(65, 13, 255) 26.163%, rgb(255, 23, 104) 54.4741%, rgb(255, 158, 242) 84.6847%)"
                                                        },
                                                        children: "2022"
                                                    })
                                                })
                                            }),
                                            className: "framer-1phrdvw",
                                            fonts: ["Inter"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })]
                                    }), t(Z, {
                                        __framer__animate: {
                                            transition: B
                                        },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Ba,
                                        __framer__exit: Ka,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: .5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: "framer-4hwlrp",
                                        "data-framer-name": "Card",
                                        name: "Card",
                                        style: {
                                            transformPerspective: 1200
                                        },
                                        children: [e(p, {
                                            __fromCanvasComponent: !0,
                                            children: e(s, {
                                                children: e("p", {
                                                    className: "framer-styles-preset-1n7ng81",
                                                    "data-styles-preset": "bxP2b_0Ko",
                                                    style: {
                                                        "--framer-text-color": "var(--token-5553722d-43da-4a73-a7ce-d2499d28fa68, rgb(135, 134, 138))"
                                                    },
                                                    children: "Successful Projects Delivered"
                                                })
                                            }),
                                            className: "framer-11rd4he",
                                            fonts: ["Inter"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), e(p, {
                                            __fromCanvasComponent: !0,
                                            children: e(s, {
                                                children: e("h1", {
                                                    className: "framer-styles-preset-1sgigkb",
                                                    "data-styles-preset": "BRyT8PKiE",
                                                    style: {
                                                        "--framer-text-color": "rgb(0, 0, 0)"
                                                    },
                                                    children: e("span", {
                                                        "data-text-fill": "true",
                                                        style: {
                                                            backgroundImage: "linear-gradient(111deg, rgb(0, 148, 148) 29.3831%, rgb(191, 117, 255) 54.845%, rgb(242, 164, 255) 72.1865%, rgb(235, 107, 255) 87.2537%)"
                                                        },
                                                        children: "100+"
                                                    })
                                                })
                                            }),
                                            className: "framer-l13zkv",
                                            fonts: ["Inter"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })]
                                    }), t(Z, {
                                        __framer__animate: {
                                            transition: B
                                        },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Nr,
                                        __framer__exit: Za,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: .5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: "framer-5kphau",
                                        "data-framer-name": "Card",
                                        name: "Card",
                                        style: {
                                            transformPerspective: 1200
                                        },
                                        children: [e(p, {
                                            __fromCanvasComponent: !0,
                                            children: e(s, {
                                                children: e("p", {
                                                    className: "framer-styles-preset-1n7ng81",
                                                    "data-styles-preset": "bxP2b_0Ko",
                                                    style: {
                                                        "--framer-text-color": "var(--token-5553722d-43da-4a73-a7ce-d2499d28fa68, rgb(135, 134, 138))"
                                                    },
                                                    children: "Happy Clients & Success Stories"
                                                })
                                            }),
                                            className: "framer-xws19u",
                                            fonts: ["Inter"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), e(p, {
                                            __fromCanvasComponent: !0,
                                            children: e(s, {
                                                children: e("h1", {
                                                    className: "framer-styles-preset-1sgigkb",
                                                    "data-styles-preset": "BRyT8PKiE",
                                                    style: {
                                                        "--framer-text-color": "rgb(0, 0, 0)"
                                                    },
                                                    children: e("span", {
                                                        "data-text-fill": "true",
                                                        style: {
                                                            backgroundImage: "linear-gradient(111deg, rgb(17, 0, 255) 18.7993%, rgb(105, 232, 255) 43.7103%, rgb(72, 154, 165) 69.2901%, rgb(25, 82, 94) 85.3744%)"
                                                        },
                                                        children: "70+"
                                                    })
                                                })
                                            }),
                                            className: "framer-57rhvf",
                                            fonts: ["Inter"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })]
                                    })]
                                })
                            }), t("div", {
                                className: "framer-yf88wj",
                                "data-framer-name": "Cards",
                                name: "Cards",
                                children: [t("div", {
                                    className: "framer-1u25z86",
                                    "data-framer-name": "Service + Approach",
                                    name: "Service + Approach",
                                    children: [t(Z, {
                                        __framer__animate: {
                                            transition: v
                                        },
                                        __framer__animateOnce: !0,
                                        __framer__enter: fe,
                                        __framer__exit: Be,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: .5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: "framer-kiqx0e",
                                        "data-border": !0,
                                        "data-framer-name": "Our Service",
                                        name: "Our Service",
                                        style: {
                                            transformPerspective: 1200
                                        },
                                        children: [e(p, {
                                            __fromCanvasComponent: !0,
                                            children: e(s, {
                                                children: t("h3", {
                                                    className: "framer-styles-preset-1q1tllb",
                                                    "data-styles-preset": "IOEcq6nbj",
                                                    style: {
                                                        "--framer-text-color": "var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115))"
                                                    },
                                                    children: [e("span", {
                                                        style: {
                                                            "--framer-text-color": "var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, rgb(255, 255, 255))"
                                                        },
                                                        children: "Our service. "
                                                    }), "We collaborate with visionary brands to craft digital experiences that drive measurable business results and lasting customer connections."]
                                                })
                                            }),
                                            className: "framer-1k7hv0g",
                                            fonts: ["Inter"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), t("div", {
                                            className: "framer-1ltzqq5",
                                            "data-framer-name": "Content",
                                            name: "Content",
                                            children: [e(d, {
                                                breakpoint: i,
                                                overrides: {
                                                    GzqFYGAAq: {
                                                        background: {
                                                            alt: "",
                                                            fit: "fill",
                                                            intrinsicHeight: 751,
                                                            intrinsicWidth: 1200,
                                                            loading: me(1929),
                                                            pixelHeight: 751,
                                                            pixelWidth: 1200,
                                                            sizes: "calc((min(100vw - 40px, 1200px) - 40px) * 0.8)",
                                                            src: "../assets/images/about/tech58-1.png",
                                                            srcSet: "../assets/images/about/tech58-1.png?scale-down-to=512 512w,../assets/images/about/tech58-1.png?scale-down-to=1024 1024w,../assets/images/about/tech58-1.png 1200w"
                                                        }
                                                    },
                                                    UrJVvqg6I: {
                                                        background: {
                                                            alt: "",
                                                            fit: "fill",
                                                            intrinsicHeight: 751,
                                                            intrinsicWidth: 1200,
                                                            loading: me(1726.8),
                                                            pixelHeight: 751,
                                                            pixelWidth: 1200,
                                                            sizes: "calc((min(max((min(100vw - 80px, 1200px) - 20px) / 2, 1px), 1200px) - 80px) * 0.8)",
                                                            src: "../assets/images/about/tech58-1.png",
                                                            srcSet: "../assets/images/about/tech58-1.png?scale-down-to=512 512w,../assets/images/about/tech58-1.png?scale-down-to=1024 1024w,../assets/images/about/tech58-1.png 1200w"
                                                        }
                                                    }
                                                },
                                                children: e(br, {
                                                    __framer__animate: {
                                                        transition: kr
                                                    },
                                                    __framer__animateOnce: !1,
                                                    __framer__enter: Ar,
                                                    __framer__exit: $a,
                                                    __framer__styleAppearEffectEnabled: !0,
                                                    __framer__threshold: .5,
                                                    __perspectiveFX: !1,
                                                    __targetOpacity: 1,
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        intrinsicHeight: 751,
                                                        intrinsicWidth: 1200,
                                                        loading: me(1883.8),
                                                        pixelHeight: 751,
                                                        pixelWidth: 1200,
                                                        sizes: "321px",
                                                        src: "../assets/images/about/tech58-1.png",
                                                        srcSet: "../assets/images/about/tech58-1.png?scale-down-to=512 512w,../assets/images/about/tech58-1.png?scale-down-to=1024 1024w,../assets/images/about/tech58-1.png 1200w"
                                                    },
                                                    className: "framer-14eenos",
                                                    "data-framer-name": "Image",
                                                    name: "Image",
                                                    style: {
                                                        transformPerspective: 1200
                                                    }
                                                })
                                            }), e(d, {
                                                breakpoint: i,
                                                overrides: {
                                                    GzqFYGAAq: {
                                                        background: {
                                                            alt: "",
                                                            fit: "fill",
                                                            intrinsicHeight: 500,
                                                            intrinsicWidth: 500,
                                                            loading: me(2149),
                                                            pixelHeight: 500,
                                                            pixelWidth: 500,
                                                            src: "https://framerusercontent.com/images/UGd1rK20Or9WsDVPUQyx6mbju8.png"
                                                        }
                                                    },
                                                    UrJVvqg6I: {
                                                        background: {
                                                            alt: "",
                                                            fit: "fill",
                                                            intrinsicHeight: 500,
                                                            intrinsicWidth: 500,
                                                            loading: me(1946.8),
                                                            pixelHeight: 500,
                                                            pixelWidth: 500,
                                                            src: "https://framerusercontent.com/images/UGd1rK20Or9WsDVPUQyx6mbju8.png"
                                                        }
                                                    }
                                                },
                                                children: e(br, {
                                                    __framer__animate: {
                                                        transition: Ir
                                                    },
                                                    __framer__animateOnce: !1,
                                                    __framer__enter: Ar,
                                                    __framer__exit: et,
                                                    __framer__styleAppearEffectEnabled: !0,
                                                    __framer__threshold: .5,
                                                    __perspectiveFX: !1,
                                                    __targetOpacity: 1,
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        intrinsicHeight: 500,
                                                        intrinsicWidth: 500,
                                                        loading: me(2029.8000000000002),
                                                        pixelHeight: 500,
                                                        pixelWidth: 500,
                                                        src: "https://framerusercontent.com/images/UGd1rK20Or9WsDVPUQyx6mbju8.png"
                                                    },
                                                    className: "framer-829e6u",
                                                    "data-framer-name": "Image",
                                                    name: "Image",
                                                    style: {
                                                        transformPerspective: 1200
                                                    }
                                                })
                                            })]
                                        })]
                                    }), t(Z, {
                                        __framer__animate: {
                                            transition: T
                                        },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Nr,
                                        __framer__exit: rt,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: .5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: "framer-1lmdtpc",
                                        "data-border": !0,
                                        "data-framer-name": "Our Approach",
                                        name: "Our Approach",
                                        style: {
                                            transformPerspective: 1200
                                        },
                                        children: [e(p, {
                                            __fromCanvasComponent: !0,
                                            children: e(s, {
                                                children: t("h3", {
                                                    className: "framer-styles-preset-1q1tllb",
                                                    "data-styles-preset": "IOEcq6nbj",
                                                    style: {
                                                        "--framer-text-color": "var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115))"
                                                    },
                                                    children: [e("span", {
                                                        style: {
                                                            "--framer-text-color": "var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, rgb(255, 255, 255))"
                                                        },
                                                        children: "Our approach. "
                                                    }), "From concept to code, we break projects into agile steps for faster, smoother delivery."]
                                                })
                                            }),
                                            className: "framer-1yeubo",
                                            fonts: ["Inter"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), t("div", {
                                            className: "framer-wpk16h",
                                            children: [e(Z, {
                                                __framer__spring: {
                                                    damping: 60,
                                                    delay: 0,
                                                    duration: .3,
                                                    ease: [.44, 0, .56, 1],
                                                    mass: 1,
                                                    stiffness: 300,
                                                    type: "spring"
                                                },
                                                __framer__styleTransformEffectEnabled: !0,
                                                __framer__transformTargets: [{
                                                    target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 800,
                                                        y: 0
                                                    }
                                                }, {
                                                    target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 0
                                                    }
                                                }],
                                                __framer__transformTrigger: "onInView",
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: "framer-snrucn",
                                                "data-border": !0,
                                                "data-framer-name": "Task Card",
                                                name: "Task Card",
                                                style: {
                                                    transformPerspective: 1200
                                                },
                                                children: t("div", {
                                                    className: "framer-1fbv9v",
                                                    "data-framer-name": "Content",
                                                    name: "Content",
                                                    children: [t("div", {
                                                        className: "framer-bhybgx",
                                                        "data-framer-name": "Category Tag + More Info",
                                                        name: "Category Tag + More Info",
                                                        children: [e("button", {
                                                            className: "framer-1ljqb0c",
                                                            "data-border": !0,
                                                            "data-framer-name": "More Info",
                                                            "data-reset": "button",
                                                            name: "More Info",
                                                            children: e(p, {
                                                                __fromCanvasComponent: !0,
                                                                children: e(s, {
                                                                    children: e("p", {
                                                                        style: {
                                                                            "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                                            "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                            "--framer-font-size": "12px",
                                                                            "--framer-font-weight": "500",
                                                                            "--framer-letter-spacing": "0px",
                                                                            "--framer-line-height": "1.4em",
                                                                            "--framer-text-alignment": "center",
                                                                            "--framer-text-color": "rgb(74, 15, 252)"
                                                                        },
                                                                        children: "Design"
                                                                    })
                                                                }),
                                                                className: "framer-wdfryz",
                                                                fonts: ["GF;Inter Tight-500"],
                                                                verticalAlignment: "top",
                                                                withExternalLayout: !0
                                                            })
                                                        }), e("button", {
                                                            className: "framer-1heh12b",
                                                            "data-framer-name": "Category Tag",
                                                            "data-reset": "button",
                                                            name: "Category Tag",
                                                            children: e(n, {
                                                                children: e(u, {
                                                                    className: "framer-1xoruxu-container",
                                                                    children: e(ie, {
                                                                        color: "var(--token-5553722d-43da-4a73-a7ce-d2499d28fa68, rgb(135, 134, 138))",
                                                                        height: "100%",
                                                                        iconSearch: "Home",
                                                                        iconSelection: "MoreHoriz",
                                                                        iconStyle15: "Outlined",
                                                                        iconStyle2: "Filled",
                                                                        iconStyle7: "Filled",
                                                                        id: "D4ttimvKD",
                                                                        layoutId: "D4ttimvKD",
                                                                        mirrored: !1,
                                                                        selectByList: !0,
                                                                        style: {
                                                                            height: "100%",
                                                                            width: "100%"
                                                                        },
                                                                        width: "100%"
                                                                    })
                                                                })
                                                            })
                                                        })]
                                                    }), e(d, {
                                                        breakpoint: i,
                                                        overrides: {
                                                            GzqFYGAAq: {
                                                                children: e(s, {
                                                                    children: e("p", {
                                                                        className: "framer-styles-preset-1yqtg1q",
                                                                        "data-styles-preset": "Die60VzNz",
                                                                        children: "Create banner graphics"
                                                                    })
                                                                })
                                                            },
                                                            UrJVvqg6I: {
                                                                children: e(s, {
                                                                    children: e("p", {
                                                                        className: "framer-styles-preset-1yqtg1q",
                                                                        "data-styles-preset": "Die60VzNz",
                                                                        children: "Create banner graphics"
                                                                    })
                                                                })
                                                            }
                                                        },
                                                        children: e(p, {
                                                            __fromCanvasComponent: !0,
                                                            children: e(s, {
                                                                children: e("p", {
                                                                    className: "framer-styles-preset-1n7ng81",
                                                                    "data-styles-preset": "bxP2b_0Ko",
                                                                    children: "Create banner graphics"
                                                                })
                                                            }),
                                                            className: "framer-ai3j48",
                                                            fonts: ["Inter"],
                                                            verticalAlignment: "top",
                                                            withExternalLayout: !0
                                                        })
                                                    }), t("div", {
                                                        className: "framer-1bzbzqu",
                                                        "data-framer-name": "Comments, Attachment & Icon",
                                                        name: "Comments, Attachment & Icon",
                                                        children: [t("div", {
                                                            className: "framer-65pnzc",
                                                            "data-framer-name": "Comments & Attachments",
                                                            name: "Comments & Attachments",
                                                            children: [t("div", {
                                                                className: "framer-1p1q2t8",
                                                                "data-framer-name": "Comments",
                                                                name: "Comments",
                                                                children: [e(n, {
                                                                    children: e(u, {
                                                                        className: "framer-rwwpv5-container",
                                                                        "data-framer-name": "Icon",
                                                                        name: "Icon",
                                                                        children: e(ie, {
                                                                            color: "var(--token-21c6069c-1433-4acb-82a8-8b87ddca87df, rgb(173, 172, 176))",
                                                                            height: "100%",
                                                                            iconSearch: "Home",
                                                                            iconSelection: "ChatBubbleOutline",
                                                                            iconStyle15: "Outlined",
                                                                            iconStyle2: "Filled",
                                                                            iconStyle7: "Filled",
                                                                            id: "POfmUZWB_",
                                                                            layoutId: "POfmUZWB_",
                                                                            mirrored: !1,
                                                                            name: "Icon",
                                                                            selectByList: !0,
                                                                            style: {
                                                                                height: "100%",
                                                                                width: "100%"
                                                                            },
                                                                            width: "100%"
                                                                        })
                                                                    })
                                                                }), e(p, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: e(s, {
                                                                        children: e("p", {
                                                                            style: {
                                                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                                "--framer-font-size": "14px",
                                                                                "--framer-font-weight": "500",
                                                                                "--framer-letter-spacing": "0.1px",
                                                                                "--framer-line-height": "1.5em",
                                                                                "--framer-text-alignment": "center",
                                                                                "--framer-text-color": "var(--token-5553722d-43da-4a73-a7ce-d2499d28fa68, rgb(135, 134, 138))"
                                                                            },
                                                                            children: "3"
                                                                        })
                                                                    }),
                                                                    className: "framer-ic561i",
                                                                    fonts: ["GF;Inter Tight-500"],
                                                                    verticalAlignment: "top",
                                                                    withExternalLayout: !0
                                                                })]
                                                            }), t("div", {
                                                                className: "framer-y26qw1",
                                                                "data-framer-name": "Attachments",
                                                                name: "Attachments",
                                                                children: [e(n, {
                                                                    children: e(u, {
                                                                        className: "framer-ajoq9d-container",
                                                                        "data-framer-name": "Icon",
                                                                        name: "Icon",
                                                                        children: e(ie, {
                                                                            color: "var(--token-21c6069c-1433-4acb-82a8-8b87ddca87df, rgb(173, 172, 176))",
                                                                            height: "100%",
                                                                            iconSearch: "Home",
                                                                            iconSelection: "AttachFile",
                                                                            iconStyle15: "Outlined",
                                                                            iconStyle2: "Filled",
                                                                            iconStyle7: "Filled",
                                                                            id: "X4iV1gRAK",
                                                                            layoutId: "X4iV1gRAK",
                                                                            mirrored: !1,
                                                                            name: "Icon",
                                                                            selectByList: !0,
                                                                            style: {
                                                                                height: "100%",
                                                                                width: "100%"
                                                                            },
                                                                            width: "100%"
                                                                        })
                                                                    })
                                                                }), e(p, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: e(s, {
                                                                        children: e("p", {
                                                                            style: {
                                                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                                "--framer-font-size": "14px",
                                                                                "--framer-font-weight": "500",
                                                                                "--framer-letter-spacing": "0.1px",
                                                                                "--framer-line-height": "1.5em",
                                                                                "--framer-text-alignment": "center",
                                                                                "--framer-text-color": "var(--token-5553722d-43da-4a73-a7ce-d2499d28fa68, rgb(135, 134, 138))"
                                                                            },
                                                                            children: "1"
                                                                        })
                                                                    }),
                                                                    className: "framer-1646qll",
                                                                    fonts: ["GF;Inter Tight-500"],
                                                                    verticalAlignment: "top",
                                                                    withExternalLayout: !0
                                                                })]
                                                            })]
                                                        }), e(n, {
                                                            children: e(u, {
                                                                className: "framer-144abz9-container",
                                                                children: e(ne, {
                                                                    background: "rgb(255, 192, 33)",
                                                                    height: "100%",
                                                                    id: "wFknfwdbb",
                                                                    layoutId: "wFknfwdbb",
                                                                    radius: 60,
                                                                    rotation: 0,
                                                                    style: {
                                                                        height: "100%",
                                                                        width: "100%"
                                                                    },
                                                                    variant: "wQ9whLvFH",
                                                                    width: "100%"
                                                                })
                                                            })
                                                        })]
                                                    })]
                                                })
                                            }), e(Z, {
                                                __framer__spring: {
                                                    damping: 60,
                                                    delay: 0,
                                                    duration: .3,
                                                    ease: [.44, 0, .56, 1],
                                                    mass: 1,
                                                    stiffness: 300,
                                                    type: "spring"
                                                },
                                                __framer__styleTransformEffectEnabled: !0,
                                                __framer__transformTargets: [{
                                                    target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 400,
                                                        y: 0
                                                    }
                                                }, {
                                                    target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 0
                                                    }
                                                }],
                                                __framer__transformTrigger: "onInView",
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: "framer-19k4inp",
                                                "data-border": !0,
                                                "data-framer-name": "Task Card",
                                                name: "Task Card",
                                                style: {
                                                    transformPerspective: 1200
                                                },
                                                children: t("div", {
                                                    className: "framer-gu18re",
                                                    "data-framer-name": "Content",
                                                    name: "Content",
                                                    children: [t("div", {
                                                        className: "framer-sjxoao",
                                                        "data-framer-name": "Category Tag + More Info",
                                                        name: "Category Tag + More Info",
                                                        children: [e("button", {
                                                            className: "framer-13wwnn5",
                                                            "data-border": !0,
                                                            "data-framer-name": "More Info",
                                                            "data-reset": "button",
                                                            name: "More Info",
                                                            children: e(p, {
                                                                __fromCanvasComponent: !0,
                                                                children: e(s, {
                                                                    children: e("p", {
                                                                        style: {
                                                                            "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                                            "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                            "--framer-font-size": "12px",
                                                                            "--framer-font-weight": "500",
                                                                            "--framer-letter-spacing": "0px",
                                                                            "--framer-line-height": "1.4em",
                                                                            "--framer-text-alignment": "center",
                                                                            "--framer-text-color": "rgb(74, 15, 252)"
                                                                        },
                                                                        children: "Design"
                                                                    })
                                                                }),
                                                                className: "framer-yhvdzf",
                                                                fonts: ["GF;Inter Tight-500"],
                                                                verticalAlignment: "top",
                                                                withExternalLayout: !0
                                                            })
                                                        }), e("button", {
                                                            className: "framer-516zye",
                                                            "data-framer-name": "Category Tag",
                                                            "data-reset": "button",
                                                            name: "Category Tag",
                                                            children: e(n, {
                                                                children: e(u, {
                                                                    className: "framer-3l31p4-container",
                                                                    children: e(ie, {
                                                                        color: "var(--token-5553722d-43da-4a73-a7ce-d2499d28fa68, rgb(135, 134, 138))",
                                                                        height: "100%",
                                                                        iconSearch: "Home",
                                                                        iconSelection: "MoreHoriz",
                                                                        iconStyle15: "Outlined",
                                                                        iconStyle2: "Filled",
                                                                        iconStyle7: "Filled",
                                                                        id: "Q2FXf0xut",
                                                                        layoutId: "Q2FXf0xut",
                                                                        mirrored: !1,
                                                                        selectByList: !0,
                                                                        style: {
                                                                            height: "100%",
                                                                            width: "100%"
                                                                        },
                                                                        width: "100%"
                                                                    })
                                                                })
                                                            })
                                                        })]
                                                    }), e(d, {
                                                        breakpoint: i,
                                                        overrides: {
                                                            GzqFYGAAq: {
                                                                children: e(s, {
                                                                    children: e("p", {
                                                                        className: "framer-styles-preset-1yqtg1q",
                                                                        "data-styles-preset": "Die60VzNz",
                                                                        children: "Create 3 social media posts"
                                                                    })
                                                                })
                                                            },
                                                            UrJVvqg6I: {
                                                                children: e(s, {
                                                                    children: e("p", {
                                                                        className: "framer-styles-preset-1yqtg1q",
                                                                        "data-styles-preset": "Die60VzNz",
                                                                        children: "Create 3 social media posts"
                                                                    })
                                                                })
                                                            }
                                                        },
                                                        children: e(p, {
                                                            __fromCanvasComponent: !0,
                                                            children: e(s, {
                                                                children: e("p", {
                                                                    className: "framer-styles-preset-1n7ng81",
                                                                    "data-styles-preset": "bxP2b_0Ko",
                                                                    children: "Create 3 social media posts"
                                                                })
                                                            }),
                                                            className: "framer-aduw82",
                                                            fonts: ["Inter"],
                                                            verticalAlignment: "top",
                                                            withExternalLayout: !0
                                                        })
                                                    }), t("div", {
                                                        className: "framer-1m3yvrc",
                                                        "data-framer-name": "Comments, Attachment & Icon",
                                                        name: "Comments, Attachment & Icon",
                                                        children: [t("div", {
                                                            className: "framer-1r2v0jp",
                                                            "data-framer-name": "Comments & Attachments",
                                                            name: "Comments & Attachments",
                                                            children: [t("div", {
                                                                className: "framer-yj7ljg",
                                                                "data-framer-name": "Comments",
                                                                name: "Comments",
                                                                children: [e(n, {
                                                                    children: e(u, {
                                                                        className: "framer-1l538ap-container",
                                                                        "data-framer-name": "Icon",
                                                                        name: "Icon",
                                                                        children: e(ie, {
                                                                            color: "var(--token-21c6069c-1433-4acb-82a8-8b87ddca87df, rgb(173, 172, 176))",
                                                                            height: "100%",
                                                                            iconSearch: "Home",
                                                                            iconSelection: "ChatBubbleOutline",
                                                                            iconStyle15: "Outlined",
                                                                            iconStyle2: "Filled",
                                                                            iconStyle7: "Filled",
                                                                            id: "vl38vk5Kz",
                                                                            layoutId: "vl38vk5Kz",
                                                                            mirrored: !1,
                                                                            name: "Icon",
                                                                            selectByList: !0,
                                                                            style: {
                                                                                height: "100%",
                                                                                width: "100%"
                                                                            },
                                                                            width: "100%"
                                                                        })
                                                                    })
                                                                }), e(p, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: e(s, {
                                                                        children: e("p", {
                                                                            style: {
                                                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                                "--framer-font-size": "14px",
                                                                                "--framer-font-weight": "500",
                                                                                "--framer-letter-spacing": "0.1px",
                                                                                "--framer-line-height": "1.5em",
                                                                                "--framer-text-alignment": "center",
                                                                                "--framer-text-color": "var(--token-5553722d-43da-4a73-a7ce-d2499d28fa68, rgb(135, 134, 138))"
                                                                            },
                                                                            children: "6"
                                                                        })
                                                                    }),
                                                                    className: "framer-2ycihs",
                                                                    fonts: ["GF;Inter Tight-500"],
                                                                    verticalAlignment: "top",
                                                                    withExternalLayout: !0
                                                                })]
                                                            }), t("div", {
                                                                className: "framer-87l9xu",
                                                                "data-framer-name": "Attachments",
                                                                name: "Attachments",
                                                                children: [e(n, {
                                                                    children: e(u, {
                                                                        className: "framer-1m3arcn-container",
                                                                        "data-framer-name": "Icon",
                                                                        name: "Icon",
                                                                        children: e(ie, {
                                                                            color: "var(--token-21c6069c-1433-4acb-82a8-8b87ddca87df, rgb(173, 172, 176))",
                                                                            height: "100%",
                                                                            iconSearch: "Home",
                                                                            iconSelection: "AttachFile",
                                                                            iconStyle15: "Outlined",
                                                                            iconStyle2: "Filled",
                                                                            iconStyle7: "Filled",
                                                                            id: "ksZ5cH7N9",
                                                                            layoutId: "ksZ5cH7N9",
                                                                            mirrored: !1,
                                                                            name: "Icon",
                                                                            selectByList: !0,
                                                                            style: {
                                                                                height: "100%",
                                                                                width: "100%"
                                                                            },
                                                                            width: "100%"
                                                                        })
                                                                    })
                                                                }), e(p, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: e(s, {
                                                                        children: e("p", {
                                                                            style: {
                                                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                                "--framer-font-size": "14px",
                                                                                "--framer-font-weight": "500",
                                                                                "--framer-letter-spacing": "0.1px",
                                                                                "--framer-line-height": "1.5em",
                                                                                "--framer-text-alignment": "center",
                                                                                "--framer-text-color": "var(--token-5553722d-43da-4a73-a7ce-d2499d28fa68, rgb(135, 134, 138))"
                                                                            },
                                                                            children: "2"
                                                                        })
                                                                    }),
                                                                    className: "framer-17j6l5c",
                                                                    fonts: ["GF;Inter Tight-500"],
                                                                    verticalAlignment: "top",
                                                                    withExternalLayout: !0
                                                                })]
                                                            })]
                                                        }), e(n, {
                                                            children: e(u, {
                                                                className: "framer-1temrn0-container",
                                                                children: e(ne, {
                                                                    background: "rgb(212, 184, 255)",
                                                                    height: "100%",
                                                                    id: "RK5AHlGJB",
                                                                    layoutId: "RK5AHlGJB",
                                                                    radius: 60,
                                                                    rotation: 0,
                                                                    style: {
                                                                        height: "100%",
                                                                        width: "100%"
                                                                    },
                                                                    variant: "tExww8aRk",
                                                                    width: "100%"
                                                                })
                                                            })
                                                        })]
                                                    })]
                                                })
                                            })]
                                        })]
                                    })]
                                }), t(Z, {
                                    __framer__animate: {
                                        transition: v
                                    },
                                    __framer__animateOnce: !0,
                                    __framer__enter: fe,
                                    __framer__exit: Be,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-ungixq",
                                    "data-border": !0,
                                    "data-framer-name": "Industries",
                                    name: "Industries",
                                    style: {
                                        transformPerspective: 1200
                                    },
                                    children: [e("div", {
                                        className: "framer-1dsg6ue",
                                        "data-framer-name": "Content (Left)",
                                        name: "Content (Left)",
                                        children: e(p, {
                                            __fromCanvasComponent: !0,
                                            children: e(s, {
                                                children: t("h3", {
                                                    className: "framer-styles-preset-1q1tllb",
                                                    "data-styles-preset": "IOEcq6nbj",
                                                    style: {
                                                        "--framer-text-color": "var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115))"
                                                    },
                                                    children: [e("span", {
                                                        style: {
                                                            "--framer-text-color": "var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, rgb(255, 255, 255))"
                                                        },
                                                        children: "Industries. "
                                                    }), "Our expertise lies in guiding clients to achieve their next stage of growth across different sectors."]
                                                })
                                            }),
                                            className: "framer-1vccyfk",
                                            fonts: ["Inter"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    }), e("div", {
                                        className: "framer-1p9dtzk",
                                        "data-framer-name": "Content (Right)",
                                        name: "Content (Right)",
                                        children: e(n, {
                                            children: e(u, {
                                                className: "framer-1akx8h1-container",
                                                children: e(Ve, {
                                                    alignment: "center",
                                                    direction: "top",
                                                    fadeOptions: {
                                                        fadeAlpha: 0,
                                                        fadeContent: !0,
                                                        fadeInset: 0,
                                                        fadeWidth: 25,
                                                        overflow: !1
                                                    },
                                                    gap: 32,
                                                    height: "100%",
                                                    hoverFactor: .6,
                                                    id: "a3gFkgVE3",
                                                    layoutId: "a3gFkgVE3",
                                                    padding: 0,
                                                    paddingBottom: 0,
                                                    paddingLeft: 0,
                                                    paddingPerSide: !1,
                                                    paddingRight: 0,
                                                    paddingTop: 0,
                                                    sizingOptions: {
                                                        heightType: !0,
                                                        widthType: !0
                                                    },
                                                    slots: [e(n, {
                                                        children: e(u, {
                                                            className: "framer-gw80s4-container",
                                                            children: e(oe, {
                                                                height: "100%",
                                                                id: "Bj91uRM7B",
                                                                layoutId: "Bj91uRM7B",
                                                                style: {
                                                                    height: "100%"
                                                                },
                                                                variant: "PoMWIiCFO",
                                                                width: "100%"
                                                            })
                                                        })
                                                    }), e(n, {
                                                        children: e(u, {
                                                            className: "framer-24yc2i-container",
                                                            children: e(oe, {
                                                                height: "100%",
                                                                id: "NtFM_Q9Rr",
                                                                layoutId: "NtFM_Q9Rr",
                                                                style: {
                                                                    height: "100%"
                                                                },
                                                                variant: "nCpsiHhdD",
                                                                width: "100%"
                                                            })
                                                        })
                                                    }), e(n, {
                                                        children: e(u, {
                                                            className: "framer-1ce24yy-container",
                                                            children: e(oe, {
                                                                height: "100%",
                                                                id: "eZNfaQWvX",
                                                                layoutId: "eZNfaQWvX",
                                                                style: {
                                                                    height: "100%"
                                                                },
                                                                variant: "uRzzhUv_v",
                                                                width: "100%"
                                                            })
                                                        })
                                                    }), e(n, {
                                                        children: e(u, {
                                                            className: "framer-7wae6-container",
                                                            children: e(oe, {
                                                                height: "100%",
                                                                id: "vKBYPjlzQ",
                                                                layoutId: "vKBYPjlzQ",
                                                                style: {
                                                                    height: "100%"
                                                                },
                                                                variant: "la6cqvTPU",
                                                                width: "100%"
                                                            })
                                                        })
                                                    }), e(n, {
                                                        children: e(u, {
                                                            className: "framer-19nk2te-container",
                                                            children: e(oe, {
                                                                height: "100%",
                                                                id: "PHhYunkVl",
                                                                layoutId: "PHhYunkVl",
                                                                style: {
                                                                    height: "100%"
                                                                },
                                                                variant: "ULcxem9Un",
                                                                width: "100%"
                                                            })
                                                        })
                                                    }), e(n, {
                                                        children: e(u, {
                                                            className: "framer-1qexrow-container",
                                                            children: e(oe, {
                                                                height: "100%",
                                                                id: "EhGHcqybD",
                                                                layoutId: "EhGHcqybD",
                                                                style: {
                                                                    height: "100%"
                                                                },
                                                                variant: "PrN0RONGC",
                                                                width: "100%"
                                                            })
                                                        })
                                                    })],
                                                    speed: 100,
                                                    style: {
                                                        height: "100%",
                                                        width: "100%"
                                                    },
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    })]
                                })]
                            }), t("div", {
                                className: "framer-u1rl26",
                                "data-framer-name": "Partners",
                                id: $,
                                name: "Partners",
                                ref: _,
                                children: [e(Je, {
                                    __framer__animate: {
                                        transition: B
                                    },
                                    __framer__animateOnce: !0,
                                    __framer__enter: fe,
                                    __framer__exit: Ye,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: e(s, {
                                        children: t("h3", {
                                            className: "framer-styles-preset-1q1tllb",
                                            "data-styles-preset": "IOEcq6nbj",
                                            style: {
                                                "--framer-text-alignment": "center"
                                            },
                                            children: ["Trusted by industry partners. ", e("span", {
                                                style: {
                                                    "--framer-text-color": "var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115))"
                                                },
                                                children: "We have earned the trust of ambitious brands to facilitate their growth journey."
                                            })]
                                        })
                                    }),
                                    className: "framer-id54b7",
                                    fonts: ["Inter"],
                                    style: {
                                        transformPerspective: 1200
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), t("div", {
                                    className: "framer-1iga3tq",
                                    "data-framer-name": "Cards",
                                    name: "Cards",
                                    children: [e(n, {
                                        children: e(y, {
                                            __framer__animate: {
                                                transition: v
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: N,
                                            __framer__exit: R,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: .5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: "framer-nu8d2g-container",
                                            style: {
                                                transformPerspective: 1200
                                            },
                                            children: e(Q, {
                                                DjPvuQl3b: "Consumer Goods Company",
                                                height: "100%",
                                                I67aA0FzH: C({
                                                    src: "../assets/images/logo/hul.png"
                                                }, ""),
                                                id: "dHxQxDSm5",
                                                layoutId: "dHxQxDSm5",
                                                rFdTcFlmi: "Hindustan Unilever",
                                                style: {
                                                    width: "100%"
                                                },
                                                width: "100%"
                                            })
                                        })
                                    }), e(n, {
                                        children: e(y, {
                                            __framer__animate: {
                                                transition: T
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: N,
                                            __framer__exit: Y,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: .5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: "framer-1b3nhy5-container",
                                            style: {
                                                transformPerspective: 1200
                                            },
                                            children: e(Q, {
                                                DjPvuQl3b: "Non-Banking Financial Company",
                                                height: "100%",
                                                I67aA0FzH: C({
                                                    src: "../assets/images/logo/avanse.png"
                                                }, ""),
                                                id: "cXCkjXXEj",
                                                layoutId: "cXCkjXXEj",
                                                rFdTcFlmi: "Avanse",
                                                style: {
                                                    width: "100%"
                                                },
                                                width: "100%"
                                            })
                                        })
                                    }), e(n, {
                                        children: e(d, {
                                            breakpoint: i,
                                            overrides: {
                                                GzqFYGAAq: {
                                                    __framer__animate: {
                                                        transition: v
                                                    },
                                                    __framer__exit: R
                                                }
                                            },
                                            children: e(y, {
                                                __framer__animate: {
                                                    transition: ce
                                                },
                                                __framer__animateOnce: !0,
                                                __framer__enter: N,
                                                __framer__exit: ge,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__threshold: .5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: "framer-1ol0pak-container",
                                                style: {
                                                    transformPerspective: 1200
                                                },
                                                children: e(Q, {
                                                    DjPvuQl3b: "Conversational AI",
                                                    height: "100%",
                                                    I67aA0FzH: C({
                                                        src: "../assets/images/logo/eigen-talk.svg"
                                                    }, ""),
                                                    id: "l3mN3pVTI",
                                                    layoutId: "l3mN3pVTI",
                                                    rFdTcFlmi: "Eigen Track",
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    }), e(n, {
                                        children: e(d, {
                                            breakpoint: i,
                                            overrides: {
                                                GzqFYGAAq: {
                                                    __framer__animate: {
                                                        transition: T
                                                    },
                                                    __framer__exit: Y
                                                },
                                                UrJVvqg6I: {
                                                    __framer__animate: {
                                                        transition: v
                                                    },
                                                    __framer__exit: R
                                                }
                                            },
                                            children: e(y, {
                                                __framer__animate: {
                                                    transition: ve
                                                },
                                                __framer__animateOnce: !0,
                                                __framer__enter: N,
                                                __framer__exit: Ue,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__threshold: .5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: "framer-1nkz3r1-container",
                                                style: {
                                                    transformPerspective: 1200
                                                },
                                                children: e(Q, {
                                                    DjPvuQl3b: "Migration Assistant Company",
                                                    height: "100%",
                                                    I67aA0FzH: C({
                                                        src: "../assets/images/logo/migrate-globe.svg"
                                                    }, ""),
                                                    id: "Cp0vNxSxu",
                                                    layoutId: "Cp0vNxSxu",
                                                    rFdTcFlmi: "Migrate Globe",
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    }), e(n, {
                                        children: e(d, {
                                            breakpoint: i,
                                            overrides: {
                                                UrJVvqg6I: {
                                                    __framer__animate: {
                                                        transition: T
                                                    },
                                                    __framer__exit: Y
                                                }
                                            },
                                            children: e(y, {
                                                __framer__animate: {
                                                    transition: v
                                                },
                                                __framer__animateOnce: !0,
                                                __framer__enter: N,
                                                __framer__exit: R,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__threshold: .5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: "framer-9bzk6-container",
                                                style: {
                                                    transformPerspective: 1200
                                                },
                                                children: e(Q, {
                                                    DjPvuQl3b: "Photography Company",
                                                    height: "100%",
                                                    I67aA0FzH: C({
                                                        src: "../assets/images/logo/snape.svg"
                                                    }, ""),
                                                    id: "umRKBr275",
                                                    layoutId: "umRKBr275",
                                                    rFdTcFlmi: "Snape",
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    }), e(n, {
                                        children: e(d, {
                                            breakpoint: i,
                                            overrides: {
                                                UrJVvqg6I: {
                                                    __framer__animate: {
                                                        transition: ce
                                                    },
                                                    __framer__exit: ge
                                                }
                                            },
                                            children: e(y, {
                                                __framer__animate: {
                                                    transition: T
                                                },
                                                __framer__animateOnce: !0,
                                                __framer__enter: N,
                                                __framer__exit: Y,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__threshold: .5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: "framer-dkzqkd-container",
                                                style: {
                                                    transformPerspective: 1200
                                                },
                                                children: e(Q, {
                                                    DjPvuQl3b: "Hiring Company",
                                                    height: "100%",
                                                    I67aA0FzH: C({
                                                        src: "../assets/images/logo/headcin.png"
                                                    }, ""),
                                                    id: "G1SlL4YZS",
                                                    layoutId: "G1SlL4YZS",
                                                    rFdTcFlmi: "Headsin",
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    }), e(n, {
                                        children: e(d, {
                                            breakpoint: i,
                                            overrides: {
                                                GzqFYGAAq: {
                                                    __framer__animate: {
                                                        transition: v
                                                    },
                                                    __framer__exit: R
                                                },
                                                UrJVvqg6I: {
                                                    __framer__animate: {
                                                        transition: v
                                                    },
                                                    __framer__exit: R
                                                }
                                            },
                                            children: e(y, {
                                                __framer__animate: {
                                                    transition: ce
                                                },
                                                __framer__animateOnce: !0,
                                                __framer__enter: N,
                                                __framer__exit: ge,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__threshold: .5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: "framer-1mic0h6-container",
                                                style: {
                                                    transformPerspective: 1200
                                                },
                                                children: e(Q, {
                                                    DjPvuQl3b: "IT company",
                                                    height: "100%",
                                                    I67aA0FzH: C({
                                                        src: "../assets/images/logo/tech-logo.png"
                                                    }, ""),
                                                    id: "xt9ys3cSc",
                                                    layoutId: "xt9ys3cSc",
                                                    rFdTcFlmi: "Tech58",
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    }), e(n, {
                                        children: e(d, {
                                            breakpoint: i,
                                            overrides: {
                                                GzqFYGAAq: {
                                                    __framer__animate: {
                                                        transition: T
                                                    },
                                                    __framer__exit: Y
                                                },
                                                UrJVvqg6I: {
                                                    __framer__animate: {
                                                        transition: T
                                                    },
                                                    __framer__exit: Y
                                                }
                                            },
                                            children: e(y, {
                                                __framer__animate: {
                                                    transition: ve
                                                },
                                                __framer__animateOnce: !0,
                                                __framer__enter: N,
                                                __framer__exit: Ue,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__threshold: .5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: "framer-1cotub1-container",
                                                style: {
                                                    transformPerspective: 1200
                                                },
                                                children: e(Q, {
                                                    DjPvuQl3b: "Social Media Application",
                                                    height: "100%",
                                                    I67aA0FzH: C({
                                                        src: "../assets/images/logo/viargos.svg"
                                                    }, ""),
                                                    id: "JXR42G5OB",
                                                    layoutId: "JXR42G5OB",
                                                    rFdTcFlmi: "Viargos",
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    })]
                                })]
                            }), t("div", {
                                className: "framer-nac2qy",
                                "data-framer-name": "Team",
                                name: "Team",
                                children: [e(Je, {
                                    __framer__animate: {
                                        transition: B
                                    },
                                    __framer__animateOnce: !0,
                                    __framer__enter: fe,
                                    __framer__exit: Ye,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: e(s, {
                                        children: t("h3", {
                                            className: "framer-styles-preset-1q1tllb",
                                            "data-styles-preset": "IOEcq6nbj",
                                            style: {
                                                "--framer-text-alignment": "center"
                                            },
                                            children: ["Top-Tier Tech Stack ", e("span", {
                                                style: {
                                                    "--framer-text-color": "var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115))"
                                                },
                                                children: "We build with the best. Our applications are powered by modern, battle-tested technologies - ensuring speed, scalability, and long-term reliability."
                                            })]
                                        })
                                    }),
                                    className: "framer-w3efny",
                                    fonts: ["Inter"],
                                    style: {
                                        transformPerspective: 1200
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), t("div", {
                                    className: "framer-1vcrsju",
                                    "data-framer-name": "Cards",
                                    name: "Cards",
                                    children: [e(n, {
                                        children: e(y, {
                                            __framer__animate: {
                                                transition: v
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: N,
                                            __framer__exit: R,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: .5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: "framer-dju0zg-container",
                                            "data-framer-name": "Team Card",
                                            name: "Team Card",
                                            style: {
                                                transformPerspective: 1200
                                            },
                                            whileHover: se,
                                            children: e(J, {
                                                DjPvuQl3b: "JavaScript Runtime",
                                                height: "100%",
                                                id: "nvNuomgHK",
                                                layoutId: "nvNuomgHK",
                                                MsiYP1JG6: "rgb(255, 192, 33)",
                                                name: "Team Card",
                                                NE1LXjayq: "wQ9whLvFH",
                                                rFdTcFlmi: "Node.js",
                                                RtgP_R5rA: "rgb(108, 203, 85, 0.5)",
                                                style: {
                                                    width: "100%"
                                                },
                                                width: "100%"
                                            })
                                        })
                                    }), e(n, {
                                        children: e(y, {
                                            __framer__animate: {
                                                transition: T
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: N,
                                            __framer__exit: Y,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: .5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: "framer-t4wi0f-container",
                                            "data-framer-name": "Team Card",
                                            name: "Team Card",
                                            style: {
                                                transformPerspective: 1200
                                            },
                                            whileHover: se,
                                            children: e(J, {
                                                DjPvuQl3b: "Design Tool",
                                                height: "100%",
                                                id: "WWj3GGrPZ",
                                                layoutId: "WWj3GGrPZ",
                                                MsiYP1JG6: "rgb(180, 130, 255)",
                                                name: "Team Card",
                                                NE1LXjayq: "tExww8aRk",
                                                rFdTcFlmi: "Figma",
                                                RtgP_R5rA: "rgb(231, 217, 255)",
                                                style: {
                                                    width: "100%"
                                                },
                                                width: "100%"
                                            })
                                        })
                                    }), e(n, {
                                        children: e(d, {
                                            breakpoint: i,
                                            overrides: {
                                                GzqFYGAAq: {
                                                    __framer__animate: {
                                                        transition: v
                                                    },
                                                    __framer__exit: R
                                                }
                                            },
                                            children: e(y, {
                                                __framer__animate: {
                                                    transition: ce
                                                },
                                                __framer__animateOnce: !0,
                                                __framer__enter: N,
                                                __framer__exit: ge,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__threshold: .5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: "framer-1i6lmm6-container",
                                                "data-framer-name": "Team Card",
                                                name: "Team Card",
                                                style: {
                                                    transformPerspective: 1200
                                                },
                                                whileHover: se,
                                                children: e(J, {
                                                    DjPvuQl3b: "Java Framework",
                                                    height: "100%",
                                                    id: "NLm_ZvH7t",
                                                    layoutId: "NLm_ZvH7t",
                                                    MsiYP1JG6: "rgb(1, 215, 151)",
                                                    name: "Team Card",
                                                    NE1LXjayq: "cHv8JY9g7",
                                                    rFdTcFlmi: "Spring boot",
                                                    RtgP_R5rA: "rgb(133, 220, 76, 0.5)",
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    }), e(n, {
                                        children: e(d, {
                                            breakpoint: i,
                                            overrides: {
                                                GzqFYGAAq: {
                                                    __framer__animate: {
                                                        transition: T
                                                    },
                                                    __framer__exit: Y
                                                },
                                                UrJVvqg6I: {
                                                    __framer__animate: {
                                                        transition: v
                                                    },
                                                    __framer__exit: R
                                                }
                                            },
                                            children: e(y, {
                                                __framer__animate: {
                                                    transition: ve
                                                },
                                                __framer__animateOnce: !0,
                                                __framer__enter: N,
                                                __framer__exit: Ue,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__threshold: .5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: "framer-19647vx-container",
                                                "data-framer-name": "Team Card",
                                                name: "Team Card",
                                                style: {
                                                    transformPerspective: 1200
                                                },
                                                whileHover: se,
                                                children: e(J, {
                                                    DjPvuQl3b: "React Framework",
                                                    height: "100%",
                                                    id: "z88p0xKL0",
                                                    layoutId: "z88p0xKL0",
                                                    MsiYP1JG6: "rgb(71, 68, 112)",
                                                    name: "Team Card",
                                                    NE1LXjayq: "RpMB9X2cU",
                                                    rFdTcFlmi: "Next.js",
                                                    RtgP_R5rA: "rgb(223, 223, 232)",
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    }), e(n, {
                                        children: e(d, {
                                            breakpoint: i,
                                            overrides: {
                                                UrJVvqg6I: {
                                                    __framer__animate: {
                                                        transition: T
                                                    },
                                                    __framer__exit: Y
                                                }
                                            },
                                            children: e(y, {
                                                __framer__animate: {
                                                    transition: v
                                                },
                                                __framer__animateOnce: !0,
                                                __framer__enter: N,
                                                __framer__exit: R,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__threshold: .5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: "framer-1ci9gf8-container",
                                                "data-framer-name": "Team Card",
                                                name: "Team Card",
                                                style: {
                                                    transformPerspective: 1200
                                                },
                                                whileHover: se,
                                                children: e(J, {
                                                    DjPvuQl3b: "UI Library",
                                                    height: "100%",
                                                    id: "s_cF6mPQX",
                                                    layoutId: "s_cF6mPQX",
                                                    MsiYP1JG6: "rgb(247, 15, 243)",
                                                    name: "Team Card",
                                                    NE1LXjayq: "Jj_gJ6raO",
                                                    rFdTcFlmi: "React.js",
                                                    RtgP_R5rA: "rgb(191, 228, 239)",
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    }), e(n, {
                                        children: e(d, {
                                            breakpoint: i,
                                            overrides: {
                                                UrJVvqg6I: {
                                                    __framer__animate: {
                                                        transition: ce
                                                    },
                                                    __framer__exit: ge
                                                }
                                            },
                                            children: e(y, {
                                                __framer__animate: {
                                                    transition: T
                                                },
                                                __framer__animateOnce: !0,
                                                __framer__enter: N,
                                                __framer__exit: Y,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__threshold: .5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: "framer-1lru370-container",
                                                "data-framer-name": "Team Card",
                                                name: "Team Card",
                                                style: {
                                                    transformPerspective: 1200
                                                },
                                                whileHover: se,
                                                children: e(J, {
                                                    DjPvuQl3b: "Relational Database",
                                                    height: "100%",
                                                    id: "HpUj_Gtn0",
                                                    layoutId: "HpUj_Gtn0",
                                                    MsiYP1JG6: "rgb(201, 107, 0)",
                                                    name: "Team Card",
                                                    NE1LXjayq: "anaA6RL0b",
                                                    rFdTcFlmi: "PostreSQL",
                                                    RtgP_R5rA: "rgb(124, 162, 204, 0.5)",
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    }), e(n, {
                                        children: e(d, {
                                            breakpoint: i,
                                            overrides: {
                                                GzqFYGAAq: {
                                                    __framer__animate: {
                                                        transition: v
                                                    },
                                                    __framer__exit: R
                                                },
                                                UrJVvqg6I: {
                                                    __framer__animate: {
                                                        transition: v
                                                    },
                                                    __framer__exit: R
                                                }
                                            },
                                            children: e(y, {
                                                __framer__animate: {
                                                    transition: ce
                                                },
                                                __framer__animateOnce: !0,
                                                __framer__enter: N,
                                                __framer__exit: ge,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__threshold: .5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: "framer-1la6wp8-container",
                                                "data-framer-name": "Team Card",
                                                name: "Team Card",
                                                style: {
                                                    transformPerspective: 1200
                                                },
                                                whileHover: se,
                                                children: e(J, {
                                                    DjPvuQl3b: "Design Platform",
                                                    height: "100%",
                                                    id: "NPTYa_8_g",
                                                    layoutId: "NPTYa_8_g",
                                                    MsiYP1JG6: "rgb(46, 74, 255)",
                                                    name: "Team Card",
                                                    NE1LXjayq: "t6uYX0tBZ",
                                                    rFdTcFlmi: "Framer",
                                                    RtgP_R5rA: "rgb(223, 223, 232)",
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    }), e(n, {
                                        children: e(d, {
                                            breakpoint: i,
                                            overrides: {
                                                GzqFYGAAq: {
                                                    __framer__animate: {
                                                        transition: T
                                                    },
                                                    __framer__exit: Y
                                                },
                                                UrJVvqg6I: {
                                                    __framer__animate: {
                                                        transition: T
                                                    },
                                                    __framer__exit: Y
                                                }
                                            },
                                            children: e(y, {
                                                __framer__animate: {
                                                    transition: ve
                                                },
                                                __framer__animateOnce: !0,
                                                __framer__enter: N,
                                                __framer__exit: Ue,
                                                __framer__styleAppearEffectEnabled: !0,
                                                __framer__threshold: .5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: "framer-1me7lb5-container",
                                                "data-framer-name": "Team Card",
                                                name: "Team Card",
                                                style: {
                                                    transformPerspective: 1200
                                                },
                                                whileHover: se,
                                                children: e(J, {
                                                    DjPvuQl3b: "UI Toolkit",
                                                    height: "100%",
                                                    id: "z3slZaclx",
                                                    layoutId: "z3slZaclx",
                                                    MsiYP1JG6: "rgb(245, 34, 48)",
                                                    name: "Team Card",
                                                    NE1LXjayq: "AD1uRb789",
                                                    rFdTcFlmi: "Flutter",
                                                    RtgP_R5rA: "rgb(135, 217, 243, 0.5)",
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    })]
                                })]
                            }), t("div", {
                                className: "framer-har6qh",
                                "data-framer-name": "Contact",
                                name: "Contact",
                                children: [e(Je, {
                                    __framer__animate: {
                                        transition: B
                                    },
                                    __framer__animateOnce: !0,
                                    __framer__enter: fe,
                                    __framer__exit: Ye,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: e(s, {
                                        children: t("h3", {
                                            className: "framer-styles-preset-1q1tllb",
                                            "data-styles-preset": "IOEcq6nbj",
                                            style: {
                                                "--framer-text-alignment": "center"
                                            },
                                            children: ["Let's work together. ", e("span", {
                                                style: {
                                                    "--framer-text-color": "var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115))"
                                                },
                                                children: "Partner with us and make magic happen."
                                            })]
                                        })
                                    }),
                                    className: "framer-cpkv67",
                                    fonts: ["Inter"],
                                    style: {
                                        transformPerspective: 1200
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), t(Z, {
                                    __framer__animate: {
                                        transition: v
                                    },
                                    __framer__animateOnce: !0,
                                    __framer__enter: fe,
                                    __framer__exit: Be,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-19fa4ox",
                                    "data-framer-name": "Card",
                                    name: "Card",
                                    style: {
                                        transformPerspective: 1200
                                    },
                                    children: [e(p, {
                                        __fromCanvasComponent: !0,
                                        children: e(s, {
                                            children: e("h5", {
                                                className: "framer-styles-preset-1jm41cg",
                                                "data-styles-preset": "TjJlMJ6w8",
                                                style: {
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-5553722d-43da-4a73-a7ce-d2499d28fa68, rgb(135, 134, 138))"
                                                },
                                                children: "Embark on an exciting journey with Process today and unlock a world of possibilities! Partner with us as we explore innovative solutions, streamline operations, and optimize efficiency to drive your business towards success."
                                            })
                                        }),
                                        className: "framer-ef4k2h",
                                        fonts: ["Inter"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), t("div", {
                                        className: "framer-sayok1",
                                        "data-framer-name": "Buttons",
                                        name: "Buttons",
                                        children: [e(n, {
                                            children: e(u, {
                                                className: "framer-1y5hoyt-container",
                                                children: e(Ce, {
                                                    b_W5AvWzW: "Contact Us",
                                                    fJtjEwYlK: "CalendarPlus",
                                                    height: "100%",
                                                    id: "zTm1HkSia",
                                                    layoutId: "zTm1HkSia",
                                                    lVoRmzQeF: !1,
                                                    PnO3OYt7r: "https://layoutgallery.lemonsqueezy.com/checkout/buy/0030e544-6138-4335-89ee-3f3721c1decd",
                                                    UZvmDPR6t: !0,
                                                    variant: "Hy8wLciUI",
                                                    width: "100%"
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            }), e("div", {
                                className: "framer-1iq2vj5",
                                "data-framer-name": "Footer",
                                name: "Footer",
                                children: e(n, {
                                    children: e(y, {
                                        __framer__animate: {
                                            transition: v
                                        },
                                        __framer__animateOnce: !0,
                                        __framer__enter: N,
                                        __framer__exit: R,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: .5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: "framer-1b441tx-container",
                                        style: {
                                            transformPerspective: 1200
                                        },
                                        children: e(d, {
                                            breakpoint: i,
                                            overrides: {
                                                GzqFYGAAq: {
                                                    variant: "imnebtjsk"
                                                },
                                                UrJVvqg6I: {
                                                    variant: "uo5u8vAKR"
                                                }
                                            },
                                            children: e(He, {
                                                height: "100%",
                                                id: "oRqKeEn9M",
                                                layoutId: "oRqKeEn9M",
                                                style: {
                                                    width: "100%"
                                                },
                                                variant: "bp9Y39OvE",
                                                width: "100%"
                                            })
                                        })
                                    })
                                })
                            })]
                    }), e("div", {
                        className: O(vr, ...de),
                        id: "overlay"
                    })]
                })
            })
    })
    , ot = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", `.${Ke.bodyClassName}-framer-3NeA1 { background: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, rgb(255, 255, 255)); }`, ".framer-3NeA1.framer-yxenkk, .framer-3NeA1 .framer-yxenkk { display: block; }", ".framer-3NeA1.framer-t2rj8 { align-content: center; align-items: center; background-color: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }", ".framer-3NeA1 .framer-1x69kgu-container { flex: none; height: auto; left: 40px; position: fixed; top: 40px; width: auto; z-index: 10; }", ".framer-3NeA1 .framer-7wjwtn-container { flex: none; height: auto; left: 50%; position: fixed; top: 40px; transform: translateX(-50%); width: auto; z-index: 9; }", ".framer-3NeA1 .framer-i5tays-container { flex: none; height: auto; position: fixed; right: 40px; top: 40px; width: auto; z-index: 3; }", ".framer-3NeA1 .framer-13s5uhq { align-content: center; align-items: center; background-color: var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, #131314); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 240px; height: min-content; justify-content: center; overflow: visible; padding: 180px 40px 160px 40px; position: relative; scroll-margin-top: 200px; width: 100%; z-index: 1; }", ".framer-3NeA1 .framer-451qk2 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 1200px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-3NeA1 .framer-1rsxfaf { flex: none; height: 450px; overflow: visible; position: relative; width: 370px; }", ".framer-3NeA1 .framer-11ocnxz-container, .framer-3NeA1 .framer-se6df6-container { flex: none; height: auto; left: 0px; position: absolute; right: 0px; top: 50%; transform: translateY(-50%); z-index: 1; }", ".framer-3NeA1 .framer-fv148n-container, .framer-3NeA1 .framer-k06l0j-container { flex: none; height: auto; left: 0px; position: absolute; right: 0px; top: 50%; transform: translateY(-50%); z-index: 2; }", ".framer-3NeA1 .framer-1x4ajha-container { flex: none; height: auto; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 370px; z-index: 3; }", ".framer-3NeA1 .framer-1mdri4q { align-content: center; align-items: center; background-color: var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, #131314); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 80px 40px 80px 40px; position: relative; width: 100%; }", ".framer-3NeA1 .framer-japwaz { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-3NeA1 .framer-picdsj, .framer-3NeA1 .framer-4hwlrp, .framer-3NeA1 .framer-5kphau { align-content: flex-start; align-items: flex-start; aspect-ratio: 1 / 1; background-color: rgba(61, 61, 61, 0.4); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: var(--framer-aspect-ratio-supported, 347px); justify-content: space-between; overflow: hidden; padding: 18px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }", ".framer-3NeA1 .framer-28esjz, .framer-3NeA1 .framer-11rd4he, .framer-3NeA1 .framer-xws19u { flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-3NeA1 .framer-1phrdvw, .framer-3NeA1 .framer-l13zkv, .framer-3NeA1 .framer-57rhvf { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-3NeA1 .framer-yf88wj { align-content: center; align-items: center; background-color: var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, #131314); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 80px 40px 160px 40px; position: relative; width: 100%; }", ".framer-3NeA1 .framer-1u25z86 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-3NeA1 .framer-kiqx0e { --border-bottom-width: 1px; --border-color: rgba(212, 212, 212, 0.3); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 550px; justify-content: space-between; max-width: 1200px; overflow: hidden; padding: 40px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-3NeA1 .framer-1k7hv0g, .framer-3NeA1 .framer-1yeubo, .framer-3NeA1 .framer-1vccyfk { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 600px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-3NeA1 .framer-1ltzqq5 { aspect-ratio: 1.5333333333333334 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 300px); overflow: visible; position: relative; width: 100%; }", ".framer-3NeA1 .framer-14eenos { aspect-ratio: 1.605 / 1; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; flex: none; height: var(--framer-aspect-ratio-supported, 200px); left: 111px; overflow: hidden; position: absolute; top: 27px; width: 321px; will-change: var(--framer-will-change-override, transform); }", ".framer-3NeA1 .framer-829e6u { aspect-ratio: 1 / 1; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; bottom: 27px; box-shadow: 10px 4px 20px 0px rgba(0, 0, 0, 0.25); flex: none; height: var(--framer-aspect-ratio-supported, 100px); left: 45px; overflow: hidden; position: absolute; width: 100px; will-change: var(--framer-will-change-override, transform); z-index: 2; }", ".framer-3NeA1 .framer-1lmdtpc { --border-bottom-width: 1px; --border-color: rgba(212, 212, 212, 0.4); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 550px; justify-content: space-between; max-width: 1200px; overflow: hidden; padding: 40px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-3NeA1 .framer-wpk16h { aspect-ratio: 1.5333333333333334 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 300px); overflow: hidden; position: relative; width: 100%; }", ".framer-3NeA1 .framer-snrucn { --border-bottom-width: 1px; --border-color: rgba(212, 212, 212, 0.5); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-a3c395b2-feb8-4959-a202-34d19c05e988, #f7f7f7); border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; bottom: 40px; box-shadow: 1.6796045531809796px 0.33592091063619595px 1.7128672783578212px -0.21875px rgba(0, 0, 0, 0.07), 3.9809593676181976px 0.7961918735236395px 4.059797899661036px -0.4375px rgba(0, 0, 0, 0.07239), 7.261681379313813px 1.4523362758627625px 7.4054910109229px -0.65625px rgba(0, 0, 0, 0.07436), 12.07253071552259px 2.414506143104518px 12.311613939379589px -0.875px rgba(0, 0, 0, 0.07724), 19.496152721956605px 3.899230544391321px 19.882252633848363px -1.09375px rgba(0, 0, 0, 0.0817), 31.91326760742231px 6.382653521484461px 32.545274854550975px -1.3125px rgba(0, 0, 0, 0.08915), 54.952491763368016px 10.990498352673603px 56.04076556439206px -1.53125px rgba(0, 0, 0, 0.10297), 100px 20px 101.9803902718557px -1.75px rgba(0, 0, 0, 0.13); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 30px; overflow: visible; padding: 16px; position: absolute; width: 320px; z-index: 2; }", ".framer-3NeA1 .framer-1fbv9v, .framer-3NeA1 .framer-gu18re { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-3NeA1 .framer-bhybgx, .framer-3NeA1 .framer-sjxoao { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-3NeA1 .framer-1ljqb0c, .framer-3NeA1 .framer-13wwnn5 { --border-bottom-width: 1px; --border-color: rgba(74, 15, 252, 0.3); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(227, 209, 255, 0.5); border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border-top-left-radius: 100px; border-top-right-radius: 100px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; padding: 6px 8px 4px 8px; position: relative; width: min-content; }", ".framer-3NeA1 .framer-wdfryz, .framer-3NeA1 .framer-ai3j48, .framer-3NeA1 .framer-ic561i, .framer-3NeA1 .framer-1646qll, .framer-3NeA1 .framer-yhvdzf, .framer-3NeA1 .framer-aduw82, .framer-3NeA1 .framer-2ycihs, .framer-3NeA1 .framer-17j6l5c { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }", ".framer-3NeA1 .framer-1heh12b, .framer-3NeA1 .framer-516zye { align-content: center; align-items: center; background-color: var(--token-a3c395b2-feb8-4959-a202-34d19c05e988, #f7f7f7); border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border-top-left-radius: 100px; border-top-right-radius: 100px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; padding: 6px 8px 4px 8px; position: relative; width: min-content; }", ".framer-3NeA1 .framer-1xoruxu-container, .framer-3NeA1 .framer-rwwpv5-container, .framer-3NeA1 .framer-ajoq9d-container, .framer-3NeA1 .framer-3l31p4-container, .framer-3NeA1 .framer-1l538ap-container, .framer-3NeA1 .framer-1m3arcn-container { flex: none; height: 20px; position: relative; width: 16px; }", ".framer-3NeA1 .framer-1bzbzqu, .framer-3NeA1 .framer-1m3yvrc { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-3NeA1 .framer-65pnzc, .framer-3NeA1 .framer-1r2v0jp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-3NeA1 .framer-1p1q2t8, .framer-3NeA1 .framer-y26qw1, .framer-3NeA1 .framer-yj7ljg, .framer-3NeA1 .framer-87l9xu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-3NeA1 .framer-144abz9-container, .framer-3NeA1 .framer-1temrn0-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); position: relative; width: 32px; }", ".framer-3NeA1 .framer-19k4inp { --border-bottom-width: 1px; --border-color: rgba(212, 212, 212, 0.5); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-a3c395b2-feb8-4959-a202-34d19c05e988, #f7f7f7); border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; box-shadow: 0px 0.7961918735236395px 0.7961918735236395px -0.4375px rgba(0, 0, 0, 0.02), 0px 2.414506143104518px 2.414506143104518px -0.875px rgba(0, 0, 0, 0.01931), 0px 6.382653521484461px 6.382653521484461px -1.3125px rgba(0, 0, 0, 0.02229), 0px 20px 20px -1.75px rgba(0, 0, 0, 0.0325); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 16px; position: absolute; right: 30px; top: 40px; width: 320px; z-index: 1; }", ".framer-3NeA1 .framer-ungixq { --border-bottom-width: 1px; --border-color: rgba(212, 212, 212, 0.4); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: 580px; justify-content: center; max-width: 1200px; overflow: hidden; padding: 40px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-3NeA1 .framer-1dsg6ue { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-3NeA1 .framer-1p9dtzk { align-content: center; align-items: center; background-color: var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, #131314); border-bottom-left-radius: 28px; border-bottom-right-radius: 28px; border-top-left-radius: 28px; border-top-right-radius: 28px; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: wrap; gap: 80px; height: 100%; justify-content: center; overflow: visible; padding: 20px; position: relative; width: 1px; }", ".framer-3NeA1 .framer-1akx8h1-container { aspect-ratio: 1.0212765957446808 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 470px); position: relative; width: 1px; }", ".framer-3NeA1 .framer-gw80s4-container, .framer-3NeA1 .framer-24yc2i-container, .framer-3NeA1 .framer-1ce24yy-container, .framer-3NeA1 .framer-7wae6-container, .framer-3NeA1 .framer-19nk2te-container, .framer-3NeA1 .framer-1qexrow-container { height: 77px; position: relative; width: auto; }", ".framer-3NeA1 .framer-u1rl26 { align-content: center; align-items: center; background-color: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; overflow: visible; padding: 160px 40px 120px 40px; position: relative; width: 100%; }", ".framer-3NeA1 .framer-id54b7, .framer-3NeA1 .framer-w3efny, .framer-3NeA1 .framer-cpkv67 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 600px; position: relative; white-space: pre-wrap; width: 600px; word-break: break-word; word-wrap: break-word; }", ".framer-3NeA1 .framer-1iga3tq, .framer-3NeA1 .framer-1vcrsju { display: grid; flex: none; gap: 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(200px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-3NeA1 .framer-nu8d2g-container, .framer-3NeA1 .framer-1b3nhy5-container, .framer-3NeA1 .framer-1ol0pak-container, .framer-3NeA1 .framer-1nkz3r1-container, .framer-3NeA1 .framer-9bzk6-container, .framer-3NeA1 .framer-dkzqkd-container, .framer-3NeA1 .framer-1mic0h6-container, .framer-3NeA1 .framer-1cotub1-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }", ".framer-3NeA1 .framer-nac2qy { align-content: center; align-items: center; background-color: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; overflow: hidden; padding: 120px 40px 120px 40px; position: relative; width: 100%; }", ".framer-3NeA1 .framer-dju0zg-container, .framer-3NeA1 .framer-t4wi0f-container, .framer-3NeA1 .framer-1i6lmm6-container, .framer-3NeA1 .framer-19647vx-container, .framer-3NeA1 .framer-1ci9gf8-container, .framer-3NeA1 .framer-1lru370-container, .framer-3NeA1 .framer-1la6wp8-container, .framer-3NeA1 .framer-1me7lb5-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }", ".framer-3NeA1 .framer-har6qh { align-content: center; align-items: center; background-color: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; overflow: hidden; padding: 120px 40px 160px 40px; position: relative; width: 100%; }", ".framer-3NeA1 .framer-19fa4ox { align-content: center; align-items: center; background-color: var(--token-a3c395b2-feb8-4959-a202-34d19c05e988, #fafafa); border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 800px; overflow: hidden; padding: 80px 20px 80px 20px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-3NeA1 .framer-ef4k2h { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 500px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-3NeA1 .framer-sayok1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-3NeA1 .framer-1y5hoyt-container, .framer-3NeA1 .framer-wu2mt1-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-3NeA1 .framer-1iq2vj5 { align-content: center; align-items: center; background-color: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, #ffffff); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 100%; }", ".framer-3NeA1 .framer-1b441tx-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }", "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-3NeA1.framer-t2rj8, .framer-3NeA1 .framer-13s5uhq, .framer-3NeA1 .framer-1mdri4q, .framer-3NeA1 .framer-japwaz, .framer-3NeA1 .framer-yf88wj, .framer-3NeA1 .framer-1u25z86, .framer-3NeA1 .framer-snrucn, .framer-3NeA1 .framer-1fbv9v, .framer-3NeA1 .framer-1ljqb0c, .framer-3NeA1 .framer-1heh12b, .framer-3NeA1 .framer-65pnzc, .framer-3NeA1 .framer-1p1q2t8, .framer-3NeA1 .framer-y26qw1, .framer-3NeA1 .framer-19k4inp, .framer-3NeA1 .framer-gu18re, .framer-3NeA1 .framer-13wwnn5, .framer-3NeA1 .framer-516zye, .framer-3NeA1 .framer-1r2v0jp, .framer-3NeA1 .framer-yj7ljg, .framer-3NeA1 .framer-87l9xu, .framer-3NeA1 .framer-ungixq, .framer-3NeA1 .framer-1dsg6ue, .framer-3NeA1 .framer-1p9dtzk, .framer-3NeA1 .framer-u1rl26, .framer-3NeA1 .framer-nac2qy, .framer-3NeA1 .framer-har6qh, .framer-3NeA1 .framer-19fa4ox, .framer-3NeA1 .framer-sayok1, .framer-3NeA1 .framer-1iq2vj5 { gap: 0px; } .framer-3NeA1.framer-t2rj8 > *, .framer-3NeA1 .framer-snrucn > *, .framer-3NeA1 .framer-19k4inp > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-3NeA1.framer-t2rj8 > :first-child, .framer-3NeA1 .framer-13s5uhq > :first-child, .framer-3NeA1 .framer-yf88wj > :first-child, .framer-3NeA1 .framer-snrucn > :first-child, .framer-3NeA1 .framer-1fbv9v > :first-child, .framer-3NeA1 .framer-19k4inp > :first-child, .framer-3NeA1 .framer-gu18re > :first-child, .framer-3NeA1 .framer-1dsg6ue > :first-child, .framer-3NeA1 .framer-u1rl26 > :first-child, .framer-3NeA1 .framer-nac2qy > :first-child, .framer-3NeA1 .framer-har6qh > :first-child, .framer-3NeA1 .framer-19fa4ox > :first-child { margin-top: 0px; } .framer-3NeA1.framer-t2rj8 > :last-child, .framer-3NeA1 .framer-13s5uhq > :last-child, .framer-3NeA1 .framer-yf88wj > :last-child, .framer-3NeA1 .framer-snrucn > :last-child, .framer-3NeA1 .framer-1fbv9v > :last-child, .framer-3NeA1 .framer-19k4inp > :last-child, .framer-3NeA1 .framer-gu18re > :last-child, .framer-3NeA1 .framer-1dsg6ue > :last-child, .framer-3NeA1 .framer-u1rl26 > :last-child, .framer-3NeA1 .framer-nac2qy > :last-child, .framer-3NeA1 .framer-har6qh > :last-child, .framer-3NeA1 .framer-19fa4ox > :last-child { margin-bottom: 0px; } .framer-3NeA1 .framer-13s5uhq > * { margin: 0px; margin-bottom: calc(240px / 2); margin-top: calc(240px / 2); } .framer-3NeA1 .framer-1mdri4q > *, .framer-3NeA1 .framer-sayok1 > *, .framer-3NeA1 .framer-1iq2vj5 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-3NeA1 .framer-1mdri4q > :first-child, .framer-3NeA1 .framer-japwaz > :first-child, .framer-3NeA1 .framer-1u25z86 > :first-child, .framer-3NeA1 .framer-1ljqb0c > :first-child, .framer-3NeA1 .framer-1heh12b > :first-child, .framer-3NeA1 .framer-65pnzc > :first-child, .framer-3NeA1 .framer-1p1q2t8 > :first-child, .framer-3NeA1 .framer-y26qw1 > :first-child, .framer-3NeA1 .framer-13wwnn5 > :first-child, .framer-3NeA1 .framer-516zye > :first-child, .framer-3NeA1 .framer-1r2v0jp > :first-child, .framer-3NeA1 .framer-yj7ljg > :first-child, .framer-3NeA1 .framer-87l9xu > :first-child, .framer-3NeA1 .framer-ungixq > :first-child, .framer-3NeA1 .framer-1p9dtzk > :first-child, .framer-3NeA1 .framer-sayok1 > :first-child, .framer-3NeA1 .framer-1iq2vj5 > :first-child { margin-left: 0px; } .framer-3NeA1 .framer-1mdri4q > :last-child, .framer-3NeA1 .framer-japwaz > :last-child, .framer-3NeA1 .framer-1u25z86 > :last-child, .framer-3NeA1 .framer-1ljqb0c > :last-child, .framer-3NeA1 .framer-1heh12b > :last-child, .framer-3NeA1 .framer-65pnzc > :last-child, .framer-3NeA1 .framer-1p1q2t8 > :last-child, .framer-3NeA1 .framer-y26qw1 > :last-child, .framer-3NeA1 .framer-13wwnn5 > :last-child, .framer-3NeA1 .framer-516zye > :last-child, .framer-3NeA1 .framer-1r2v0jp > :last-child, .framer-3NeA1 .framer-yj7ljg > :last-child, .framer-3NeA1 .framer-87l9xu > :last-child, .framer-3NeA1 .framer-ungixq > :last-child, .framer-3NeA1 .framer-1p9dtzk > :last-child, .framer-3NeA1 .framer-sayok1 > :last-child, .framer-3NeA1 .framer-1iq2vj5 > :last-child { margin-right: 0px; } .framer-3NeA1 .framer-japwaz > *, .framer-3NeA1 .framer-1u25z86 > *, .framer-3NeA1 .framer-ungixq > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-3NeA1 .framer-yf88wj > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-3NeA1 .framer-1fbv9v > *, .framer-3NeA1 .framer-gu18re > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-3NeA1 .framer-1ljqb0c > *, .framer-3NeA1 .framer-1heh12b > *, .framer-3NeA1 .framer-13wwnn5 > *, .framer-3NeA1 .framer-516zye > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-3NeA1 .framer-65pnzc > *, .framer-3NeA1 .framer-1r2v0jp > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-3NeA1 .framer-1p1q2t8 > *, .framer-3NeA1 .framer-y26qw1 > *, .framer-3NeA1 .framer-yj7ljg > *, .framer-3NeA1 .framer-87l9xu > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } .framer-3NeA1 .framer-1dsg6ue > *, .framer-3NeA1 .framer-19fa4ox > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-3NeA1 .framer-1p9dtzk > * { margin: 0px; margin-left: calc(80px / 2); margin-right: calc(80px / 2); } .framer-3NeA1 .framer-u1rl26 > *, .framer-3NeA1 .framer-nac2qy > *, .framer-3NeA1 .framer-har6qh > * { margin: 0px; margin-bottom: calc(100px / 2); margin-top: calc(100px / 2); } }", `@media (min-width: 810px) and (max-width: 1199px) { .${Ke.bodyClassName}-framer-3NeA1 { background: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, rgb(255, 255, 255)); } .framer-3NeA1.framer-t2rj8 { width: 810px; } .framer-3NeA1 .framer-13s5uhq { gap: 200px; } .framer-3NeA1 .framer-1rsxfaf { height: 360px; width: 300px; } .framer-3NeA1 .framer-1x4ajha-container { width: 300px; } .framer-3NeA1 .framer-japwaz, .framer-3NeA1 .framer-yf88wj, .framer-3NeA1 .framer-1u25z86 { gap: 20px; } .framer-3NeA1 .framer-picdsj, .framer-3NeA1 .framer-4hwlrp, .framer-3NeA1 .framer-5kphau { height: var(--framer-aspect-ratio-supported, 230px); } .framer-3NeA1 .framer-1ltzqq5 { align-content: center; align-items: center; aspect-ratio: 0.9166666666666666 / 1; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; justify-content: center; padding: 0px; } .framer-3NeA1 .framer-14eenos { height: var(--framer-aspect-ratio-supported, 137px); left: unset; position: relative; top: unset; width: 80%; } .framer-3NeA1 .framer-829e6u { bottom: unset; height: var(--framer-aspect-ratio-supported, 80px); left: unset; position: relative; width: 80px; } .framer-3NeA1 .framer-wpk16h { align-content: center; align-items: center; aspect-ratio: 0.9166666666666666 / 1; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; justify-content: center; overflow: visible; padding: 0px; } .framer-3NeA1 .framer-snrucn { bottom: unset; left: unset; position: relative; width: 100%; } .framer-3NeA1 .framer-19k4inp { position: relative; right: unset; top: unset; width: 100%; z-index: 2; } .framer-3NeA1 .framer-ungixq { height: 450px; } .framer-3NeA1 .framer-1akx8h1-container { aspect-ratio: 0.8142857142857143 / 1; height: var(--framer-aspect-ratio-supported, 350px); } .framer-3NeA1 .framer-1iga3tq { grid-template-columns: repeat(3, minmax(200px, 1fr)); } .framer-3NeA1 .framer-1vcrsju { grid-template-columns: repeat(3, minmax(200px, 1fr)); grid-template-rows: repeat(3, minmax(0, 1fr)); } .framer-3NeA1 .framer-har6qh { padding: 120px 40px 120px 40px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-3NeA1 .framer-13s5uhq, .framer-3NeA1 .framer-japwaz, .framer-3NeA1 .framer-yf88wj, .framer-3NeA1 .framer-1u25z86, .framer-3NeA1 .framer-1ltzqq5, .framer-3NeA1 .framer-wpk16h { gap: 0px; } .framer-3NeA1 .framer-13s5uhq > * { margin: 0px; margin-bottom: calc(200px / 2); margin-top: calc(200px / 2); } .framer-3NeA1 .framer-13s5uhq > :first-child, .framer-3NeA1 .framer-yf88wj > :first-child, .framer-3NeA1 .framer-1ltzqq5 > :first-child, .framer-3NeA1 .framer-wpk16h > :first-child { margin-top: 0px; } .framer-3NeA1 .framer-13s5uhq > :last-child, .framer-3NeA1 .framer-yf88wj > :last-child, .framer-3NeA1 .framer-1ltzqq5 > :last-child, .framer-3NeA1 .framer-wpk16h > :last-child { margin-bottom: 0px; } .framer-3NeA1 .framer-japwaz > *, .framer-3NeA1 .framer-1u25z86 > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-3NeA1 .framer-japwaz > :first-child, .framer-3NeA1 .framer-1u25z86 > :first-child { margin-left: 0px; } .framer-3NeA1 .framer-japwaz > :last-child, .framer-3NeA1 .framer-1u25z86 > :last-child { margin-right: 0px; } .framer-3NeA1 .framer-yf88wj > *, .framer-3NeA1 .framer-1ltzqq5 > *, .framer-3NeA1 .framer-wpk16h > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } }}`, `@media (max-width: 809px) { .${Ke.bodyClassName}-framer-3NeA1 { background: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, rgb(255, 255, 255)); } .framer-3NeA1.framer-t2rj8 { width: 390px; } .framer-3NeA1 .framer-1x69kgu-container { left: 20px; top: 35px; } .framer-3NeA1 .framer-7wjwtn-container { left: 0px; right: 0px; top: 35px; transform: unset; width: unset; } .framer-3NeA1 .framer-13s5uhq { gap: 200px; padding: 180px 20px 60px 20px; } .framer-3NeA1 .framer-451qk2 { max-width: unset; } .framer-3NeA1 .framer-1rsxfaf { height: 184px; width: 150px; } .framer-3NeA1 .framer-1x4ajha-container { width: 150px; } .framer-3NeA1 .framer-1mdri4q { flex-direction: column; padding: 80px 20px 40px 20px; } .framer-3NeA1 .framer-japwaz { flex: none; flex-direction: column; gap: 20px; width: 100%; } .framer-3NeA1 .framer-picdsj, .framer-3NeA1 .framer-4hwlrp, .framer-3NeA1 .framer-5kphau { flex: none; height: var(--framer-aspect-ratio-supported, 350px); width: 100%; } .framer-3NeA1 .framer-yf88wj { gap: 20px; padding: 60px 20px 120px 20px; } .framer-3NeA1 .framer-1u25z86 { flex-direction: column; gap: 20px; } .framer-3NeA1 .framer-kiqx0e, .framer-3NeA1 .framer-1lmdtpc { flex: none; gap: 28px; height: min-content; justify-content: center; padding: 20px; width: 100%; } .framer-3NeA1 .framer-1ltzqq5 { align-content: center; align-items: center; aspect-ratio: 0.6571428571428571 / 1; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: var(--framer-aspect-ratio-supported, 472px); justify-content: center; padding: 0px; } .framer-3NeA1 .framer-14eenos { height: var(--framer-aspect-ratio-supported, 155px); left: unset; position: relative; top: unset; width: 80%; } .framer-3NeA1 .framer-829e6u { bottom: unset; height: var(--framer-aspect-ratio-supported, 80px); left: unset; position: relative; width: 80px; } .framer-3NeA1 .framer-wpk16h { align-content: center; align-items: center; aspect-ratio: 0.7714285714285715 / 1; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: var(--framer-aspect-ratio-supported, 402px); justify-content: center; overflow: visible; padding: 0px; } .framer-3NeA1 .framer-snrucn { bottom: unset; left: unset; position: relative; width: 240px; } .framer-3NeA1 .framer-19k4inp { position: relative; right: unset; top: unset; width: 240px; z-index: 2; } .framer-3NeA1 .framer-ungixq { flex-direction: column; gap: 28px; height: min-content; padding: 20px; } .framer-3NeA1 .framer-1dsg6ue, .framer-3NeA1 .framer-1b441tx-container { flex: none; width: 100%; } .framer-3NeA1 .framer-1p9dtzk { aspect-ratio: 0.6571428571428571 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 490px); padding: 0px; width: 100%; } .framer-3NeA1 .framer-1akx8h1-container { aspect-ratio: 0.6333333333333333 / 1; height: var(--framer-aspect-ratio-supported, 490px); } .framer-3NeA1 .framer-u1rl26, .framer-3NeA1 .framer-nac2qy, .framer-3NeA1 .framer-har6qh { padding: 80px 20px 80px 20px; } .framer-3NeA1 .framer-id54b7, .framer-3NeA1 .framer-w3efny, .framer-3NeA1 .framer-cpkv67 { max-width: 280px; width: 100%; } .framer-3NeA1 .framer-1iga3tq { grid-template-columns: repeat(2, minmax(120px, 1fr)); } .framer-3NeA1 .framer-1vcrsju { grid-template-columns: repeat(2, minmax(120px, 1fr)); grid-template-rows: repeat(3, minmax(0, 1fr)); } .framer-3NeA1 .framer-1iq2vj5 { flex-direction: column; padding: 20px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-3NeA1 .framer-13s5uhq, .framer-3NeA1 .framer-1mdri4q, .framer-3NeA1 .framer-japwaz, .framer-3NeA1 .framer-yf88wj, .framer-3NeA1 .framer-1u25z86, .framer-3NeA1 .framer-kiqx0e, .framer-3NeA1 .framer-1ltzqq5, .framer-3NeA1 .framer-1lmdtpc, .framer-3NeA1 .framer-wpk16h, .framer-3NeA1 .framer-ungixq, .framer-3NeA1 .framer-1iq2vj5 { gap: 0px; } .framer-3NeA1 .framer-13s5uhq > * { margin: 0px; margin-bottom: calc(200px / 2); margin-top: calc(200px / 2); } .framer-3NeA1 .framer-13s5uhq > :first-child, .framer-3NeA1 .framer-1mdri4q > :first-child, .framer-3NeA1 .framer-japwaz > :first-child, .framer-3NeA1 .framer-yf88wj > :first-child, .framer-3NeA1 .framer-1u25z86 > :first-child, .framer-3NeA1 .framer-kiqx0e > :first-child, .framer-3NeA1 .framer-1ltzqq5 > :first-child, .framer-3NeA1 .framer-1lmdtpc > :first-child, .framer-3NeA1 .framer-wpk16h > :first-child, .framer-3NeA1 .framer-ungixq > :first-child, .framer-3NeA1 .framer-1iq2vj5 > :first-child { margin-top: 0px; } .framer-3NeA1 .framer-13s5uhq > :last-child, .framer-3NeA1 .framer-1mdri4q > :last-child, .framer-3NeA1 .framer-japwaz > :last-child, .framer-3NeA1 .framer-yf88wj > :last-child, .framer-3NeA1 .framer-1u25z86 > :last-child, .framer-3NeA1 .framer-kiqx0e > :last-child, .framer-3NeA1 .framer-1ltzqq5 > :last-child, .framer-3NeA1 .framer-1lmdtpc > :last-child, .framer-3NeA1 .framer-wpk16h > :last-child, .framer-3NeA1 .framer-ungixq > :last-child, .framer-3NeA1 .framer-1iq2vj5 > :last-child { margin-bottom: 0px; } .framer-3NeA1 .framer-1mdri4q > *, .framer-3NeA1 .framer-1iq2vj5 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3NeA1 .framer-japwaz > *, .framer-3NeA1 .framer-yf88wj > *, .framer-3NeA1 .framer-1u25z86 > *, .framer-3NeA1 .framer-1ltzqq5 > *, .framer-3NeA1 .framer-wpk16h > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-3NeA1 .framer-kiqx0e > *, .framer-3NeA1 .framer-1lmdtpc > *, .framer-3NeA1 .framer-ungixq > * { margin: 0px; margin-bottom: calc(28px / 2); margin-top: calc(28px / 2); } }}`, ...Fe, ...fr, ...xr, ...ke, ...pr, '.framer-3NeA1[data-border="true"]::after, .framer-3NeA1 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }']
    , Oe = H(nt, ot, "framer-3NeA1")
    , Wt = Oe;
Oe.displayName = "Page";
Oe.defaultProps = {
    height: 6873.5,
    width: 1200
};
W(Oe, [{
    explicitInter: !0,
    fonts: [{
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
        weight: "400"
    }, {
        family: "Inter Tight",
        source: "google",
        style: "normal",
        url: "https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjPQ-qWSRToK8EPg.woff2",
        weight: "500"
    }]
}, ...ba, ...wa, ...Na, ...ka, ...Ca, ...Ta, ...Fa, ...Pa, ...ja, ...za, ...qa, ...Xa, ...he(Te), ...he(lr), ...he(gr), ...he(Ae), ...he(dr)], {
    supportsExplicitInterCodegen: !0
});
var Qt = {
    exports: {
        Props: {
            type: "tsType",
            annotations: {
                framerContractVersion: "1"
            }
        },
        default: {
            type: "reactComponent",
            name: "FramerO9kyV_AwX",
            slots: [],
            annotations: {
                framerContractVersion: "1",
                framerIntrinsicHeight: "6873.5",
                framerResponsiveScreen: "",
                framerComponentViewportWidth: "true",
                framerDisplayContentsDiv: "false",
                framerImmutableVariables: "true",
                framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"UrJVvqg6I":{"layout":["fixed","auto"]},"GzqFYGAAq":{"layout":["fixed","auto"]}}}',
                framerIntrinsicWidth: "1200"
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
export { Qt as __FramerMetadata__, Wt as default };
//# sourceMappingURL=qfqyZF9dOBTKssWS1vH6IRl5hLUcK3IT_p6ozNq45Ko.Q2BB7363.mjs.map
