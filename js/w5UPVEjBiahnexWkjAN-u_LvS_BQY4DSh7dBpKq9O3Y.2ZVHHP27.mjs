import { a as Be, b as He, c as Te } from "./chunk-HRCDG6CY.mjs";
import { a as re } from "./chunk-OZFCEB6G.mjs";
import { a as Se, b as Me, c as Oe } from "./chunk-D2J4TU2J.mjs";
import { c as Ge, d as Ne, e as je, f as le, g as Z, h as $, i as ee, j as se, k as De, l as ze, m as Le, o as me, p as qe, q as Ae, r as Ve, s as Ye, t as Xe, u as Pe, v as fe } from "./chunk-2MTAU4LG.mjs";
import "./chunk-42U43NKG.mjs";
import { A as G, Ca as _e, Ea as Ie, Ka as J, Na as D, Oa as Ce, P as Ue, Q as N, Qa as p, Ua as z, Va as x, W as H, Wa as h, Z as T, aa as w, ba as X, c as l, da as Q, ea as g, ga as K, h as k, ia as j, ja as Fe, ka as Re, l as O, m as be, n as _, o as we, pa as v, q as B, qa as Ee, r as I, sa as y, ta as ke, u as ve, v as e, w as i, wa as W, y as C, z as n } from "./chunk-NV2CJCYN.mjs";
import "./chunk-JR5VT52U.mjs";
import "./chunk-RIUMFBNJ.mjs";
var or = X(n.div)
    , ir = {
        MxYY6VepE: {
            hover: !0,
            pressed: !0
        }
    }
    , lr = ["MxYY6VepE", "E5w60H4RM", "cmn6lb73D", "jDO3zFlHK", "JjjrhrI0q"]
    , sr = "framer-lgn8F"
    , mr = {
        cmn6lb73D: "framer-v-1osi2nw",
        E5w60H4RM: "framer-v-13f19mw",
        jDO3zFlHK: "framer-v-1ot2lkh",
        JjjrhrI0q: "framer-v-1ho5mdk",
        MxYY6VepE: "framer-v-kypcgs"
    };
function Qe(a, ...r) {
    let s = {};
    return r?.forEach(o => o && Object.assign(s, a[o])),
        s
}
var fr = {
    delay: 0,
    duration: .2,
    ease: [.44, 0, .56, 1],
    type: "tween"
}
    , cr = {
        delay: 0,
        duration: 1,
        ease: [0, 0, 1, 1],
        type: "tween"
    }
    , dr = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0
    }
    , pr = (a, r) => `translateX(-50%) ${r}`
    , ur = ({ value: a, children: r }) => {
        let s = O(C)
            , o = a ?? s.transition
            , m = B(() => ({
                ...s,
                transition: o
            }), [JSON.stringify(o)]);
        return e(C.Provider, {
            value: m,
            children: r
        })
    }
    , hr = n.create(l)
    , yr = {
        Default: "MxYY6VepE",
        Disabled: "cmn6lb73D",
        Error: "JjjrhrI0q",
        Loading: "E5w60H4RM",
        Success: "jDO3zFlHK"
    }
    , gr = ({ height: a, id: r, width: s, ...o }) => {
        var m, f;
        return {
            ...o,
            variant: (f = (m = yr[o.variant]) !== null && m !== void 0 ? m : o.variant) !== null && f !== void 0 ? f : "MxYY6VepE"
        }
    }
    , xr = (a, r) => a.layoutDependency ? r.join("-") + a.layoutDependency : r.join("-")
    , br = k(function (a, r) {
        let { activeLocale: s, setLocale: o } = N()
            , { style: m, className: f, layoutId: u, variant: L, ...q } = gr(a)
            , { baseVariant: d, classNames: M, clearLoadingGesture: ye, gestureHandlers: A, gestureVariant: V, isLoading: ae, setGestureState: ne, setVariant: Y, variants: c } = J({
                cycleOrder: lr,
                defaultVariant: "MxYY6VepE",
                enabledGestures: ir,
                variant: L,
                variantClassNames: mr
            })
            , t = xr(a, c)
            , F = I(null)
            , R = () => d !== "E5w60H4RM"
            , E = () => d === "E5w60H4RM"
            , oe = _()
            , b = [ee]
            , ge = Q();
        return e(G, {
            id: u ?? oe,
            children: e(hr, {
                animate: c,
                initial: !1,
                children: e(ur, {
                    value: fr,
                    children: i(n.button, {
                        ...q,
                        ...A,
                        className: w(sr, ...b, "framer-kypcgs", f, M),
                        "data-framer-name": "Default",
                        "data-reset": "button",
                        layoutDependency: t,
                        layoutId: "MxYY6VepE",
                        ref: r ?? F,
                        style: {
                            backgroundColor: "var(--token-cfc14950-46a7-4194-b7f8-93f75318b007, rgb(17, 17, 17))",
                            borderBottomLeftRadius: 14,
                            borderBottomRightRadius: 14,
                            borderTopLeftRadius: 14,
                            borderTopRightRadius: 14,
                            opacity: 1,
                            ...m
                        },
                        variants: {
                            "MxYY6VepE-hover": {
                                backgroundColor: "rgba(17, 17, 17, 0.8)"
                            },
                            "MxYY6VepE-pressed": {
                                backgroundColor: "rgba(17, 17, 17, 0.2)"
                            },
                            cmn6lb73D: {
                                opacity: .5
                            },
                            JjjrhrI0q: {
                                backgroundColor: "rgba(255, 0, 68, 0.15)"
                            }
                        },
                        ...Qe({
                            "MxYY6VepE-hover": {
                                "data-framer-name": void 0
                            },
                            "MxYY6VepE-pressed": {
                                "data-framer-name": void 0
                            },
                            cmn6lb73D: {
                                "data-framer-name": "Disabled"
                            },
                            E5w60H4RM: {
                                "data-framer-name": "Loading"
                            },
                            jDO3zFlHK: {
                                "data-framer-name": "Success"
                            },
                            JjjrhrI0q: {
                                "data-framer-name": "Error"
                            }
                        }, d, V),
                        children: [R() && e(p, {
                            __fromCanvasComponent: !0,
                            children: e(l, {
                                children: e(n.p, {
                                    className: "framer-styles-preset-1yqtg1q",
                                    "data-styles-preset": "Die60VzNz",
                                    style: {
                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, rgb(255, 255, 255)))"
                                    },
                                    children: "Submit"
                                })
                            }),
                            className: "framer-1ptvt23",
                            fonts: ["Inter"],
                            layoutDependency: t,
                            layoutId: "ULA9R4e5Y",
                            style: {
                                "--extracted-r6o4lv": "var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, rgb(255, 255, 255))",
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline"
                            },
                            variants: {
                                jDO3zFlHK: {
                                    "--extracted-r6o4lv": "rgb(255, 255, 255)"
                                },
                                JjjrhrI0q: {
                                    "--extracted-r6o4lv": "rgb(255, 34, 68)"
                                }
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...Qe({
                                jDO3zFlHK: {
                                    children: e(l, {
                                        children: e(n.p, {
                                            style: {
                                                "--font-selector": "SW50ZXItTWVkaXVt",
                                                "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                "--framer-font-size": "14px",
                                                "--framer-font-weight": "500",
                                                "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                            },
                                            children: "Thank you"
                                        })
                                    }),
                                    fonts: ["Inter-Medium"]
                                },
                                JjjrhrI0q: {
                                    children: e(l, {
                                        children: e(n.p, {
                                            style: {
                                                "--font-selector": "SW50ZXItTWVkaXVt",
                                                "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                "--framer-font-size": "14px",
                                                "--framer-font-weight": "500",
                                                "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 34, 68))"
                                            },
                                            children: "Something went wrong"
                                        })
                                    }),
                                    fonts: ["Inter-Medium"]
                                }
                            }, d, V)
                        }), E() && e(n.div, {
                            className: "framer-u2rv2w",
                            "data-framer-name": "Spinner",
                            layoutDependency: t,
                            layoutId: "uiTFimVNm",
                            style: {
                                mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
                                WebkitMask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add"
                            },
                            children: e(or, {
                                __framer__loop: dr,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: "loop",
                                __framer__loopTransition: cr,
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                className: "framer-17a7gu8",
                                "data-framer-name": "Conic",
                                layoutDependency: t,
                                layoutId: "jyGTUvl9W",
                                style: {
                                    background: "conic-gradient(from 180deg at 50% 50%, #4cf 0deg, #4cf 360deg)",
                                    backgroundColor: "rgb(68, 204, 255)",
                                    mask: "none",
                                    WebkitMask: "none"
                                },
                                variants: {
                                    E5w60H4RM: {
                                        background: "conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)",
                                        backgroundColor: "rgba(0, 0, 0, 0)",
                                        mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
                                        WebkitMask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add"
                                    }
                                },
                                children: e(n.div, {
                                    className: "framer-127waf3",
                                    "data-framer-name": "Rounding",
                                    layoutDependency: t,
                                    layoutId: "MlVqscfa2",
                                    style: {
                                        backgroundColor: "rgb(255, 255, 255)",
                                        borderBottomLeftRadius: 1,
                                        borderBottomRightRadius: 1,
                                        borderTopLeftRadius: 1,
                                        borderTopRightRadius: 1
                                    },
                                    transformTemplate: pr
                                })
                            })
                        })]
                    })
                })
            })
        })
    })
    , wr = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-lgn8F.framer-1q9io1y, .framer-lgn8F .framer-1q9io1y { display: block; }", ".framer-lgn8F.framer-kypcgs { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 12px; position: relative; width: 240px; }", ".framer-lgn8F .framer-1ptvt23 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }", ".framer-lgn8F .framer-u2rv2w { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }", ".framer-lgn8F .framer-17a7gu8 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }", ".framer-lgn8F .framer-127waf3 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-lgn8F.framer-kypcgs { gap: 0px; } .framer-lgn8F.framer-kypcgs > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-lgn8F.framer-kypcgs > :first-child { margin-left: 0px; } .framer-lgn8F.framer-kypcgs > :last-child { margin-right: 0px; } }", ".framer-lgn8F.framer-v-13f19mw.framer-kypcgs { cursor: unset; padding: 18px; }", ".framer-lgn8F.framer-v-13f19mw .framer-17a7gu8 { overflow: hidden; }", ".framer-lgn8F.framer-v-1osi2nw.framer-kypcgs, .framer-lgn8F.framer-v-1ot2lkh.framer-kypcgs, .framer-lgn8F.framer-v-1ho5mdk.framer-kypcgs { cursor: unset; }", ...$]
    , P = j(br, wr, "framer-lgn8F")
    , ce = P;
P.displayName = "Button: Form";
P.defaultProps = {
    height: 45,
    width: 240
};
T(P, {
    variant: {
        options: ["MxYY6VepE", "E5w60H4RM", "cmn6lb73D", "jDO3zFlHK", "JjjrhrI0q"],
        optionTitles: ["Default", "Loading", "Disabled", "Success", "Error"],
        title: "Variant",
        type: H.Enum
    }
});
z(P, [{
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
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2",
        weight: "500"
    }]
}, ...h(Z)], {
    supportsExplicitInterCodegen: !0
});
var vr = x(ce)
    , Ur = ["e61oE_hL3", "Lvhe1VLMd", "zELInqdwO"]
    , Fr = "framer-ERw93"
    , Rr = {
        e61oE_hL3: "framer-v-yrwnjh",
        Lvhe1VLMd: "framer-v-caterf",
        zELInqdwO: "framer-v-xyvizg"
    };
function Er(a, ...r) {
    let s = {};
    return r?.forEach(o => o && Object.assign(s, a[o])),
        s
}
var kr = {
    damping: 60,
    delay: 0,
    mass: 1,
    stiffness: 500,
    type: "spring"
}
    , _r = (a, r, s) => {
        switch (a.state) {
            case "success":
                var o;
                return (o = r.success) !== null && o !== void 0 ? o : s;
            case "pending":
                var m;
                return (m = r.pending) !== null && m !== void 0 ? m : s;
            case "error":
                var f;
                return (f = r.error) !== null && f !== void 0 ? f : s;
            case "incomplete":
                var u;
                return (u = r.incomplete) !== null && u !== void 0 ? u : s
        }
    }
    , Ir = ({ value: a, children: r }) => {
        let s = O(C)
            , o = a ?? s.transition
            , m = B(() => ({
                ...s,
                transition: o
            }), [JSON.stringify(o)]);
        return e(C.Provider, {
            value: m,
            children: r
        })
    }
    , Cr = n.create(l)
    , Gr = {
        Default: "e61oE_hL3",
        Loading: "zELInqdwO",
        Thanks: "Lvhe1VLMd"
    }
    , Nr = ({ height: a, id: r, width: s, ...o }) => {
        var m, f;
        return {
            ...o,
            variant: (f = (m = Gr[o.variant]) !== null && m !== void 0 ? m : o.variant) !== null && f !== void 0 ? f : "e61oE_hL3"
        }
    }
    , jr = (a, r) => a.layoutDependency ? r.join("-") + a.layoutDependency : r.join("-")
    , Dr = k(function (a, r) {
        let { activeLocale: s, setLocale: o } = N()
            , { style: m, className: f, layoutId: u, variant: L, ...q } = Nr(a)
            , { baseVariant: d, classNames: M, clearLoadingGesture: ye, gestureHandlers: A, gestureVariant: V, isLoading: ae, setGestureState: ne, setVariant: Y, variants: c } = J({
                cycleOrder: Ur,
                defaultVariant: "e61oE_hL3",
                variant: L,
                variantClassNames: Rr
            })
            , t = jr(a, c)
            , { activeVariantCallback: F, delay: R } = _e(d)
            , E = F(async (...xe) => {
                Y("Lvhe1VLMd")
            }
            )
            , oe = I(null)
            , b = () => d !== "Lvhe1VLMd"
            , ge = _()
            , ar = [ee]
            , ie = Q();
        return e(G, {
            id: u ?? ge,
            children: e(Cr, {
                animate: c,
                initial: !1,
                children: e(Ir, {
                    value: kr,
                    children: e(Ee, {
                        ...q,
                        ...A,
                        action: "https://api.framer.com/forms/v1/forms/f77b1593-e706-4994-9a9b-b8182fa541d8/submit",
                        className: w(Fr, ...ar, "framer-yrwnjh", f, M),
                        "data-framer-name": "Default",
                        "data-highlight": !0,
                        layoutDependency: t,
                        layoutId: "e61oE_hL3",
                        onSuccess: E,
                        ref: r ?? oe,
                        style: {
                            ...m
                        },
                        ...Er({
                            Lvhe1VLMd: {
                                "data-framer-name": "Thanks"
                            },
                            zELInqdwO: {
                                "data-framer-name": "Loading"
                            }
                        }, d, V),
                        children: xe => i(ve, {
                            children: [b() && i(n.div, {
                                className: "framer-ue5apy",
                                "data-framer-name": "Fields",
                                layoutDependency: t,
                                layoutId: "YXQ2dLbw4",
                                style: {
                                    opacity: 1
                                },
                                variants: {
                                    zELInqdwO: {
                                        opacity: .5
                                    }
                                },
                                children: [i(n.label, {
                                    className: "framer-j4ym8",
                                    layoutDependency: t,
                                    layoutId: "UWYdkxK2u",
                                    children: [e(p, {
                                        __fromCanvasComponent: !0,
                                        children: e(l, {
                                            children: e(n.p, {
                                                className: "framer-styles-preset-1yqtg1q",
                                                "data-styles-preset": "Die60VzNz",
                                                children: "First name"
                                            })
                                        }),
                                        className: "framer-zd9nz0",
                                        fonts: ["Inter"],
                                        layoutDependency: t,
                                        layoutId: "N3wx3GB_I",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(D, {
                                        autofillEnabled: !1,
                                        className: "framer-dvnlhl",
                                        inputName: "First Name",
                                        layoutDependency: t,
                                        layoutId: "IRTbLytI9",
                                        placeholder: "Jane",
                                        required: !0,
                                        style: {
                                            "--framer-input-background": "var(--token-a3c395b2-feb8-4959-a202-34d19c05e988, rgb(250, 250, 250))",
                                            "--framer-input-border-radius-bottom-left": "10px",
                                            "--framer-input-border-radius-bottom-right": "10px",
                                            "--framer-input-border-radius-top-left": "10px",
                                            "--framer-input-border-radius-top-right": "10px",
                                            "--framer-input-font-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))",
                                            "--framer-input-icon-mask-image": "none",
                                            "--framer-input-placeholder-color": "var(--token-21c6069c-1433-4acb-82a8-8b87ddca87df, rgb(173, 172, 176))"
                                        },
                                        type: "text"
                                    })]
                                }), i(n.label, {
                                    className: "framer-v3qo0o",
                                    layoutDependency: t,
                                    layoutId: "vL3VwD5pZ",
                                    children: [e(p, {
                                        __fromCanvasComponent: !0,
                                        children: e(l, {
                                            children: e(n.p, {
                                                className: "framer-styles-preset-1yqtg1q",
                                                "data-styles-preset": "Die60VzNz",
                                                children: "Last name"
                                            })
                                        }),
                                        className: "framer-bzv6x7",
                                        fonts: ["Inter"],
                                        layoutDependency: t,
                                        layoutId: "qzvHUoKmn",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(D, {
                                        autofillEnabled: !1,
                                        className: "framer-1fa4rj7",
                                        inputName: "Last Name",
                                        layoutDependency: t,
                                        layoutId: "x4jcd0NR5",
                                        placeholder: "Doe",
                                        required: !0,
                                        style: {
                                            "--framer-input-background": "var(--token-a3c395b2-feb8-4959-a202-34d19c05e988, rgb(250, 250, 250))",
                                            "--framer-input-border-radius-bottom-left": "10px",
                                            "--framer-input-border-radius-bottom-right": "10px",
                                            "--framer-input-border-radius-top-left": "10px",
                                            "--framer-input-border-radius-top-right": "10px",
                                            "--framer-input-font-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))",
                                            "--framer-input-icon-mask-image": "none",
                                            "--framer-input-placeholder-color": "var(--token-21c6069c-1433-4acb-82a8-8b87ddca87df, rgb(173, 172, 176))"
                                        },
                                        type: "text"
                                    })]
                                })]
                            }), b() && e(n.div, {
                                className: "framer-1gd4333",
                                "data-framer-name": "Fields",
                                layoutDependency: t,
                                layoutId: "S6o3EWFtU",
                                style: {
                                    opacity: 1
                                },
                                variants: {
                                    zELInqdwO: {
                                        opacity: .5
                                    }
                                },
                                children: i(n.label, {
                                    className: "framer-rka7nn",
                                    layoutDependency: t,
                                    layoutId: "im1MNbJcJ",
                                    children: [e(p, {
                                        __fromCanvasComponent: !0,
                                        children: e(l, {
                                            children: e(n.p, {
                                                className: "framer-styles-preset-1yqtg1q",
                                                "data-styles-preset": "Die60VzNz",
                                                children: "Email"
                                            })
                                        }),
                                        className: "framer-jvh522",
                                        fonts: ["Inter"],
                                        layoutDependency: t,
                                        layoutId: "hQek6k7o0",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(D, {
                                        autofillEnabled: !1,
                                        className: "framer-15biz8o",
                                        inputName: "Email",
                                        layoutDependency: t,
                                        layoutId: "rEQERUoKL",
                                        placeholder: "jane@mail.com",
                                        required: !0,
                                        style: {
                                            "--framer-input-background": "var(--token-a3c395b2-feb8-4959-a202-34d19c05e988, rgb(250, 250, 250))",
                                            "--framer-input-border-radius-bottom-left": "10px",
                                            "--framer-input-border-radius-bottom-right": "10px",
                                            "--framer-input-border-radius-top-left": "10px",
                                            "--framer-input-border-radius-top-right": "10px",
                                            "--framer-input-font-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))",
                                            "--framer-input-icon-mask-image": "none",
                                            "--framer-input-placeholder-color": "var(--token-21c6069c-1433-4acb-82a8-8b87ddca87df, rgb(173, 172, 176))"
                                        },
                                        type: "email"
                                    })]
                                })
                            }), b() && i(n.div, {
                                className: "framer-q8xv60",
                                "data-framer-name": "Fields",
                                layoutDependency: t,
                                layoutId: "utJRbBLWk",
                                style: {
                                    opacity: 1
                                },
                                variants: {
                                    zELInqdwO: {
                                        opacity: .5
                                    }
                                },
                                children: [i(n.label, {
                                    className: "framer-1rh2jqu",
                                    layoutDependency: t,
                                    layoutId: "zTyqpXrrV",
                                    children: [e(p, {
                                        __fromCanvasComponent: !0,
                                        children: e(l, {
                                            children: e(n.p, {
                                                className: "framer-styles-preset-1yqtg1q",
                                                "data-styles-preset": "Die60VzNz",
                                                children: "Business"
                                            })
                                        }),
                                        className: "framer-nk24sg",
                                        fonts: ["Inter"],
                                        layoutDependency: t,
                                        layoutId: "egJQGQsu0",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(D, {
                                        autofillEnabled: !1,
                                        className: "framer-195l331",
                                        inputName: "Email",
                                        layoutDependency: t,
                                        layoutId: "GnE7gy6GK",
                                        placeholder: "Your Business",
                                        required: !0,
                                        style: {
                                            "--framer-input-background": "var(--token-a3c395b2-feb8-4959-a202-34d19c05e988, rgb(250, 250, 250))",
                                            "--framer-input-border-radius-bottom-left": "10px",
                                            "--framer-input-border-radius-bottom-right": "10px",
                                            "--framer-input-border-radius-top-left": "10px",
                                            "--framer-input-border-radius-top-right": "10px",
                                            "--framer-input-font-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))",
                                            "--framer-input-icon-mask-image": "none",
                                            "--framer-input-placeholder-color": "var(--token-21c6069c-1433-4acb-82a8-8b87ddca87df, rgb(173, 172, 176))"
                                        },
                                        type: "email"
                                    })]
                                }), i(n.label, {
                                    className: "framer-49bhoj",
                                    layoutDependency: t,
                                    layoutId: "NkRbF0eFU",
                                    children: [e(p, {
                                        __fromCanvasComponent: !0,
                                        children: e(l, {
                                            children: e(n.p, {
                                                className: "framer-styles-preset-1yqtg1q",
                                                "data-styles-preset": "Die60VzNz",
                                                children: "Budget"
                                            })
                                        }),
                                        className: "framer-18z0j1y",
                                        fonts: ["Inter"],
                                        layoutDependency: t,
                                        layoutId: "VToITTQNM",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(Ce, {
                                        className: "framer-13tl9sw",
                                        defaultValue: "",
                                        inputName: "Describe yourself",
                                        layoutDependency: t,
                                        layoutId: "ghiq9qglc",
                                        required: !0,
                                        selectOptions: [{
                                            disabled: !0,
                                            title: "Select\u2026",
                                            type: "option",
                                            value: ""
                                        }, {
                                            title: "$5,000 - $10,000",
                                            type: "option",
                                            value: "$5,000 - $10,000"
                                        }, {
                                            title: "$10,000 - $30,000",
                                            type: "option",
                                            value: "$10,000 - $30,000"
                                        }, {
                                            title: "$30,000 - $50,000",
                                            type: "option",
                                            value: "$30,000 - $50,000"
                                        }, {
                                            title: "$50,000 +",
                                            type: "option",
                                            value: "$50,000 +"
                                        }],
                                        style: {
                                            "--framer-input-background": "var(--token-a3c395b2-feb8-4959-a202-34d19c05e988, rgb(250, 250, 250))",
                                            "--framer-input-border-radius-bottom-left": "10px",
                                            "--framer-input-border-radius-bottom-right": "10px",
                                            "--framer-input-border-radius-top-left": "10px",
                                            "--framer-input-border-radius-top-right": "10px",
                                            "--framer-input-font-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))",
                                            "--framer-input-icon-color": "var(--token-21c6069c-1433-4acb-82a8-8b87ddca87df, rgb(173, 172, 176))",
                                            "--framer-input-invalid-text-color": "var(--token-21c6069c-1433-4acb-82a8-8b87ddca87df, rgb(173, 172, 176))"
                                        }
                                    })]
                                })]
                            }), b() && e(n.div, {
                                className: "framer-669tjw",
                                "data-framer-name": "Field",
                                layoutDependency: t,
                                layoutId: "i9lWJxT6p",
                                style: {
                                    opacity: 1
                                },
                                variants: {
                                    zELInqdwO: {
                                        opacity: .5
                                    }
                                },
                                children: i(n.label, {
                                    className: "framer-11c909l",
                                    layoutDependency: t,
                                    layoutId: "R2FI3w7mE",
                                    children: [e(p, {
                                        __fromCanvasComponent: !0,
                                        children: e(l, {
                                            children: e(n.p, {
                                                className: "framer-styles-preset-1yqtg1q",
                                                "data-styles-preset": "Die60VzNz",
                                                children: "Message"
                                            })
                                        }),
                                        className: "framer-vl3rrb",
                                        fonts: ["Inter"],
                                        layoutDependency: t,
                                        layoutId: "tq1HrrRze",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(D, {
                                        autofillEnabled: !1,
                                        className: "framer-ef6m1q",
                                        inputName: "Message",
                                        layoutDependency: t,
                                        layoutId: "OEHHS5Tov",
                                        placeholder: "Your Message...",
                                        required: !1,
                                        style: {
                                            "--framer-input-background": "var(--token-a3c395b2-feb8-4959-a202-34d19c05e988, rgb(250, 250, 250))",
                                            "--framer-input-border-radius-bottom-left": "10px",
                                            "--framer-input-border-radius-bottom-right": "10px",
                                            "--framer-input-border-radius-top-left": "10px",
                                            "--framer-input-border-radius-top-right": "10px",
                                            "--framer-input-font-color": "var(--token-cfc14950-46a7-4194-b7f8-93f75318b007, rgb(17, 17, 17))",
                                            "--framer-input-icon-mask-image": "none",
                                            "--framer-input-placeholder-color": "var(--token-c1100009-1539-436e-9a98-ebb66f398324, rgb(173, 173, 173))"
                                        },
                                        type: "textarea"
                                    })]
                                })
                            }), b() && e(n.div, {
                                className: "framer-m6xvo1",
                                "data-framer-name": "Button",
                                layoutDependency: t,
                                layoutId: "IvJVhlagl",
                                children: e(g, {
                                    height: 45,
                                    width: `max(${ie?.width || "100vw"}, 1px)`,
                                    children: e(n.div, {
                                        className: "framer-1hrjfs2-container",
                                        layoutDependency: t,
                                        layoutId: "m7mj6K0AM-container",
                                        children: e(ce, {
                                            height: "100%",
                                            id: "m7mj6K0AM",
                                            layoutId: "m7mj6K0AM",
                                            style: {
                                                width: "100%"
                                            },
                                            type: "submit",
                                            variant: _r(xe, {
                                                pending: "E5w60H4RM",
                                                success: "jDO3zFlHK"
                                            }, "MxYY6VepE"),
                                            width: "100%"
                                        })
                                    })
                                })
                            })]
                        })
                    })
                })
            })
        })
    })
    , zr = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-ERw93.framer-ltz76q, .framer-ERw93 .framer-ltz76q { display: block; }", ".framer-ERw93.framer-yrwnjh { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 400px; }", ".framer-ERw93 .framer-ue5apy, .framer-ERw93 .framer-1gd4333, .framer-ERw93 .framer-q8xv60, .framer-ERw93 .framer-669tjw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-ERw93 .framer-j4ym8, .framer-ERw93 .framer-v3qo0o, .framer-ERw93 .framer-rka7nn, .framer-ERw93 .framer-1rh2jqu, .framer-ERw93 .framer-49bhoj, .framer-ERw93 .framer-11c909l { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }", ".framer-ERw93 .framer-zd9nz0, .framer-ERw93 .framer-bzv6x7, .framer-ERw93 .framer-jvh522, .framer-ERw93 .framer-nk24sg, .framer-ERw93 .framer-18z0j1y, .framer-ERw93 .framer-vl3rrb { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", '.framer-ERw93 .framer-dvnlhl, .framer-ERw93 .framer-1fa4rj7, .framer-ERw93 .framer-15biz8o, .framer-ERw93 .framer-195l331 { --framer-input-focused-box-shadow: 0px 0px 0px 1px #0099ff; --framer-input-focused-transition: all 0.2s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.5em; --framer-input-font-size: 14px; --framer-input-font-text-alignment: left; --framer-input-font-weight: 400; --framer-input-padding: 12px; flex: none; height: 40px; position: relative; width: 100%; }', '.framer-ERw93 .framer-13tl9sw { --framer-input-focused-box-shadow: 0px 0px 0px 1px #0099ff; --framer-input-focused-transition: all 0.2s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.5em; --framer-input-font-size: 14px; --framer-input-font-text-alignment: left; --framer-input-font-weight: 400; --framer-input-padding: 12px; --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }', '.framer-ERw93 .framer-ef6m1q { --framer-input-focused-box-shadow: 0px 0px 0px 1px #0099ff; --framer-input-focused-transition: all 0.2s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.5em; --framer-input-font-size: 14px; --framer-input-font-text-alignment: left; --framer-input-font-weight: 400; --framer-input-padding: 12px; --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 120px; position: relative; width: 100%; }', ".framer-ERw93 .framer-m6xvo1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 10px 0px 0px 0px; position: relative; width: 100%; }", ".framer-ERw93 .framer-1hrjfs2-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ERw93.framer-yrwnjh, .framer-ERw93 .framer-ue5apy, .framer-ERw93 .framer-j4ym8, .framer-ERw93 .framer-v3qo0o, .framer-ERw93 .framer-1gd4333, .framer-ERw93 .framer-rka7nn, .framer-ERw93 .framer-q8xv60, .framer-ERw93 .framer-1rh2jqu, .framer-ERw93 .framer-49bhoj, .framer-ERw93 .framer-669tjw, .framer-ERw93 .framer-11c909l, .framer-ERw93 .framer-m6xvo1 { gap: 0px; } .framer-ERw93.framer-yrwnjh > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-ERw93.framer-yrwnjh > :first-child, .framer-ERw93 .framer-j4ym8 > :first-child, .framer-ERw93 .framer-v3qo0o > :first-child, .framer-ERw93 .framer-rka7nn > :first-child, .framer-ERw93 .framer-1rh2jqu > :first-child, .framer-ERw93 .framer-49bhoj > :first-child, .framer-ERw93 .framer-11c909l > :first-child { margin-top: 0px; } .framer-ERw93.framer-yrwnjh > :last-child, .framer-ERw93 .framer-j4ym8 > :last-child, .framer-ERw93 .framer-v3qo0o > :last-child, .framer-ERw93 .framer-rka7nn > :last-child, .framer-ERw93 .framer-1rh2jqu > :last-child, .framer-ERw93 .framer-49bhoj > :last-child, .framer-ERw93 .framer-11c909l > :last-child { margin-bottom: 0px; } .framer-ERw93 .framer-ue5apy > *, .framer-ERw93 .framer-1gd4333 > *, .framer-ERw93 .framer-q8xv60 > *, .framer-ERw93 .framer-669tjw > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-ERw93 .framer-ue5apy > :first-child, .framer-ERw93 .framer-1gd4333 > :first-child, .framer-ERw93 .framer-q8xv60 > :first-child, .framer-ERw93 .framer-669tjw > :first-child, .framer-ERw93 .framer-m6xvo1 > :first-child { margin-left: 0px; } .framer-ERw93 .framer-ue5apy > :last-child, .framer-ERw93 .framer-1gd4333 > :last-child, .framer-ERw93 .framer-q8xv60 > :last-child, .framer-ERw93 .framer-669tjw > :last-child, .framer-ERw93 .framer-m6xvo1 > :last-child { margin-right: 0px; } .framer-ERw93 .framer-j4ym8 > *, .framer-ERw93 .framer-v3qo0o > *, .framer-ERw93 .framer-rka7nn > *, .framer-ERw93 .framer-1rh2jqu > *, .framer-ERw93 .framer-49bhoj > *, .framer-ERw93 .framer-11c909l > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-ERw93 .framer-m6xvo1 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }", ".framer-ERw93.framer-v-caterf.framer-yrwnjh { align-content: center; align-items: center; justify-content: center; min-height: 86px; }", ...$]
    , S = j(Dr, zr, "framer-ERw93")
    , de = S;
S.displayName = "Form";
S.defaultProps = {
    height: 504,
    width: 400
};
T(S, {
    variant: {
        options: ["e61oE_hL3", "Lvhe1VLMd", "zELInqdwO"],
        optionTitles: ["Default", "Thanks", "Loading"],
        title: "Variant",
        type: H.Enum
    }
});
z(S, [{
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
    }]
}, ...vr, ...h(Z)], {
    supportsExplicitInterCodegen: !0
});
var Lr = x(le)
    , pe = W(K)
    , qr = x(me)
    , Ar = x(se)
    , Vr = W(p)
    , Yr = x(de)
    , Xr = W(n.div)
    , ue = X(n.div)
    , Pr = x(fe)
    , Sr = X(K)
    , Mr = {
        JK5JQQQ_5: "(min-width: 1200px)",
        tXdLw_lRR: "(max-width: 809px)",
        vRgxHesXZ: "(min-width: 810px) and (max-width: 1199px)"
    }
    , Or = () => typeof document < "u"
    , $e = "framer-U5lGn"
    , Br = {
        JK5JQQQ_5: "framer-v-3z4cjy",
        tXdLw_lRR: "framer-v-1lfy3bo",
        vRgxHesXZ: "framer-v-16r5m4y"
    }
    , U = {
        damping: 30,
        delay: 0,
        mass: 2,
        stiffness: 100,
        type: "spring"
    }
    , er = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: U,
        x: 0,
        y: 0
    }
    , Hr = {
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
    , rr = (a, r) => {
        if (!(!a || typeof a != "object"))
            return {
                ...a,
                alt: r
            }
    }
    , Tr = (a, r) => `translateX(-50%) ${r}`
    , Qr = {
        damping: 30,
        delay: .3,
        mass: 2,
        stiffness: 100,
        type: "spring"
    }
    , Kr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: Qr,
        x: 0,
        y: 0
    }
    , Wr = {
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
    , Jr = {
        damping: 30,
        delay: .6,
        mass: 2,
        stiffness: 100,
        type: "spring"
    }
    , Zr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: Jr,
        x: 0,
        y: 0
    }
    , $r = {
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
    , et = {
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
    , rt = {
        damping: 30,
        delay: .2,
        mass: 2,
        stiffness: 100,
        type: "spring"
    }
    , tt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: rt,
        x: 0,
        y: 0
    }
    , at = {
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
    , nt = {
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
    , ot = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: U,
        x: 0,
        y: 60
    }
    , it = {
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
    , lt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: U,
        x: 0,
        y: 90
    }
    , st = {
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
    , mt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: U,
        x: 0,
        y: 120
    }
    , ft = {
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
    , tr = {
        delay: 0,
        duration: .3,
        ease: [.44, 0, .56, 1],
        type: "tween"
    }
    , ct = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: tr,
        x: 0,
        y: 160
    }
    , he = re()
    , dt = {
        Desktop: "JK5JQQQ_5",
        Phone: "tXdLw_lRR",
        Tablet: "vRgxHesXZ"
    }
    , pt = ({ height: a, id: r, width: s, ...o }) => {
        var m, f;
        return {
            ...o,
            variant: (f = (m = dt[o.variant]) !== null && m !== void 0 ? m : o.variant) !== null && f !== void 0 ? f : "JK5JQQQ_5"
        }
    }
    , ut = k(function (a, r) {
        let { activeLocale: s, setLocale: o } = N()
            , { style: m, className: f, layoutId: u, variant: L, ...q } = pt(a);
        be(() => {
            let c = re(void 0, s);
            if (c.robots) {
                let t = document.querySelector('meta[name="robots"]');
                t ? t.setAttribute("content", c.robots) : (t = document.createElement("meta"),
                    t.setAttribute("name", "robots"),
                    t.setAttribute("content", c.robots),
                    document.head.appendChild(t))
            }
        }
            , [void 0, s]),
            we(() => {
                let c = re(void 0, s);
                if (document.title = c.title || "",
                    c.viewport) {
                    var t;
                    (t = document.querySelector('meta[name="viewport"]')) === null || t === void 0 || t.setAttribute("content", c.viewport)
                }
                let F = c.bodyClassName;
                if (F) {
                    let R = document.body;
                    R.classList.forEach(E => E.startsWith("framer-body-") && R.classList.remove(E)),
                        R.classList.add(`${c.bodyClassName}-framer-U5lGn`)
                }
                return () => {
                    F && document.body.classList.remove(`${c.bodyClassName}-framer-U5lGn`)
                }
            }
                , [void 0, s]);
        let [d, M] = Ie(L, Mr, !1)
            , ye = void 0
            , A = I(null)
            , V = Ue()
            , ae = () => Or() ? d !== "tXdLw_lRR" : !0
            , ne = _()
            , Y = [Te, Oe, Le, je, Pe, Ve];
        return Fe({}),
            e(Re.Provider, {
                value: {
                    primaryVariantId: "JK5JQQQ_5",
                    variantClassNames: Br
                },
                children: i(G, {
                    id: u ?? ne,
                    children: [i(n.div, {
                        ...q,
                        className: w($e, ...Y, "framer-3z4cjy", f),
                        ref: r ?? A,
                        style: {
                            ...m
                        },
                        children: [e(ke, {
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
                            children: c => e(g, {
                                children: e(pe, {
                                    animate: er,
                                    className: "framer-oib4h2-container",
                                    "data-framer-appear-id": "oib4h2",
                                    "data-framer-name": "Process Logo",
                                    initial: Hr,
                                    layoutScroll: !0,
                                    name: "Process Logo",
                                    optimized: !0,
                                    style: {
                                        transformPerspective: 1200
                                    },
                                    children: e(y, {
                                        breakpoint: d,
                                        overrides: {
                                            tXdLw_lRR: {
                                                ifUOndEDH: c[2],
                                                variant: "zWV8cxgzT"
                                            },
                                            vRgxHesXZ: {
                                                ifUOndEDH: c[1],
                                                variant: "zWV8cxgzT"
                                            }
                                        },
                                        children: e(le, {
                                            bXKDVwltS: rr({
                                                src: "https://framerusercontent.com/images/z7hVHMwW8KD8HamBNBKSVx55T0.png"
                                            }, ""),
                                            height: "100%",
                                            id: "H2FQhc0iP",
                                            ifUOndEDH: c[0],
                                            l6Wo4ULiJ: "Process",
                                            layoutId: "H2FQhc0iP",
                                            name: "Process Logo",
                                            variant: "sP4e3iZKf",
                                            width: "100%",
                                            YIltgZQMx: rr({
                                                src: "https://framerusercontent.com/images/ImiRltpaArpM8U7EiaG6I0bxE.png"
                                            }, "")
                                        })
                                    })
                                })
                            })
                        }), e(g, {
                            children: e(y, {
                                breakpoint: d,
                                overrides: {
                                    tXdLw_lRR: {
                                        transformTemplate: void 0
                                    }
                                },
                                children: e(pe, {
                                    animate: Kr,
                                    className: "framer-16flt7f-container",
                                    "data-framer-appear-id": "16flt7f",
                                    initial: Wr,
                                    layoutScroll: !0,
                                    optimized: !0,
                                    style: {
                                        transformPerspective: 1200
                                    },
                                    transformTemplate: Tr,
                                    children: e(y, {
                                        breakpoint: d,
                                        overrides: {
                                            tXdLw_lRR: {
                                                style: {
                                                    width: "100%"
                                                },
                                                variant: "xZMChLWbK"
                                            },
                                            vRgxHesXZ: {
                                                variant: "zWjVcnPlS"
                                            }
                                        },
                                        children: e(me, {
                                            height: "100%",
                                            id: "S7fCUazve",
                                            layoutId: "S7fCUazve",
                                            variant: "ebLRlZjPs",
                                            width: "100%"
                                        })
                                    })
                                })
                            })
                        }), e("div", {
                            className: "framer-rh892c",
                            "data-framer-name": "Landing",
                            name: "Landing",
                            children: e(Vr, {
                                __fromCanvasComponent: !0,
                                animate: er,
                                children: e(l, {
                                    children: i("h3", {
                                        className: "framer-styles-preset-1q1tllb",
                                        "data-styles-preset": "IOEcq6nbj",
                                        style: {
                                            "--framer-text-alignment": "center"
                                        },
                                        children: ["Get in touch. ", e("span", {
                                            style: {
                                                "--framer-text-color": "var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115))"
                                            },
                                            children: "Partner with us and make magic happen."
                                        })]
                                    })
                                }),
                                className: "framer-1pk0sdq",
                                "data-framer-appear-id": "1pk0sdq",
                                fonts: ["Inter"],
                                initial: et,
                                optimized: !0,
                                style: {
                                    transformPerspective: 1200
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        }), i("div", {
                            className: "framer-q7tdyx",
                            "data-framer-name": "Content",
                            name: "Content",
                            children: [i(Xr, {
                                animate: tt,
                                className: "framer-x29ia",
                                "data-border": !0,
                                "data-framer-appear-id": "x29ia",
                                "data-framer-name": "Form",
                                initial: at,
                                name: "Form",
                                optimized: !0,
                                style: {
                                    transformPerspective: 1200
                                },
                                children: [i("div", {
                                    className: "framer-25nuf8",
                                    "data-framer-name": "Copy",
                                    name: "Copy",
                                    children: [e(y, {
                                        breakpoint: d,
                                        overrides: {
                                            tXdLw_lRR: {
                                                children: e(l, {
                                                    children: i("h3", {
                                                        className: "framer-styles-preset-1q1tllb",
                                                        "data-styles-preset": "IOEcq6nbj",
                                                        style: {
                                                            "--framer-text-alignment": "center"
                                                        },
                                                        children: ["Work together. ", e("span", {
                                                            style: {
                                                                "--framer-text-color": "var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115))"
                                                            },
                                                            children: "Start today."
                                                        })]
                                                    })
                                                })
                                            },
                                            vRgxHesXZ: {
                                                children: e(l, {
                                                    children: i("h3", {
                                                        className: "framer-styles-preset-1q1tllb",
                                                        "data-styles-preset": "IOEcq6nbj",
                                                        style: {
                                                            "--framer-text-alignment": "center"
                                                        },
                                                        children: ["Work together. ", e("span", {
                                                            style: {
                                                                "--framer-text-color": "var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115))"
                                                            },
                                                            children: "Start today."
                                                        })]
                                                    })
                                                })
                                            }
                                        },
                                        children: e(p, {
                                            __fromCanvasComponent: !0,
                                            children: e(l, {
                                                children: i("h3", {
                                                    className: "framer-styles-preset-1q1tllb",
                                                    "data-styles-preset": "IOEcq6nbj",
                                                    children: ["Work together. ", e("span", {
                                                        style: {
                                                            "--framer-text-color": "var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115))"
                                                        },
                                                        children: "Start today."
                                                    })]
                                                })
                                            }),
                                            className: "framer-rvgk75",
                                            fonts: ["Inter"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    }), e(y, {
                                        breakpoint: d,
                                        overrides: {
                                            tXdLw_lRR: {
                                                children: e(l, {
                                                    children: i("h5", {
                                                        className: "framer-styles-preset-1jm41cg",
                                                        "data-styles-preset": "TjJlMJ6w8",
                                                        style: {
                                                            "--framer-text-alignment": "center",
                                                            "--framer-text-color": "var(--token-5553722d-43da-4a73-a7ce-d2499d28fa68, rgb(135, 134, 138))"
                                                        },
                                                        children: ["Please fill out this form, and we will respond to you within one business day. Alternatively, you can drop us an ", e(v, {
                                                            href: "https://layoutgallery.lemonsqueezy.com/checkout/buy/0030e544-6138-4335-89ee-3f3721c1decd",
                                                            nodeId: "gUJCOMK0j",
                                                            openInNewTab: !0,
                                                            smoothScroll: !1,
                                                            children: e("a", {
                                                                className: "framer-styles-preset-1wicq5s",
                                                                "data-styles-preset": "ro7OPezbn",
                                                                children: "email"
                                                            })
                                                        }), "."]
                                                    })
                                                })
                                            },
                                            vRgxHesXZ: {
                                                children: e(l, {
                                                    children: i("h5", {
                                                        className: "framer-styles-preset-1jm41cg",
                                                        "data-styles-preset": "TjJlMJ6w8",
                                                        style: {
                                                            "--framer-text-alignment": "center",
                                                            "--framer-text-color": "var(--token-5553722d-43da-4a73-a7ce-d2499d28fa68, rgb(135, 134, 138))"
                                                        },
                                                        children: ["Please fill out this form, and we will respond to you within one business day. Alternatively, you can drop us an ", e(v, {
                                                            href: "https://layoutgallery.lemonsqueezy.com/checkout/buy/0030e544-6138-4335-89ee-3f3721c1decd",
                                                            nodeId: "gUJCOMK0j",
                                                            openInNewTab: !0,
                                                            smoothScroll: !1,
                                                            children: e("a", {
                                                                className: "framer-styles-preset-1wicq5s",
                                                                "data-styles-preset": "ro7OPezbn",
                                                                children: "email"
                                                            })
                                                        }), "."]
                                                    })
                                                })
                                            }
                                        },
                                        children: e(p, {
                                            __fromCanvasComponent: !0,
                                            children: e(l, {
                                                children: i("h5", {
                                                    className: "framer-styles-preset-1jm41cg",
                                                    "data-styles-preset": "TjJlMJ6w8",
                                                    style: {
                                                        "--framer-text-color": "var(--token-5553722d-43da-4a73-a7ce-d2499d28fa68, rgb(135, 134, 138))"
                                                    },
                                                    children: ["Please fill out this form, and we will respond to you within one business day. Alternatively, you can drop us an ", e(v, {
                                                        href: "https://layoutgallery.lemonsqueezy.com/checkout/buy/0030e544-6138-4335-89ee-3f3721c1decd",
                                                        nodeId: "gUJCOMK0j",
                                                        openInNewTab: !0,
                                                        smoothScroll: !1,
                                                        children: e("a", {
                                                            className: "framer-styles-preset-1wicq5s",
                                                            "data-styles-preset": "ro7OPezbn",
                                                            children: "email"
                                                        })
                                                    }), "."]
                                                })
                                            }),
                                            className: "framer-1h9xr76",
                                            fonts: ["Inter"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })]
                                }), e("div", {
                                    className: "framer-11ficlk",
                                    "data-framer-name": "Form",
                                    name: "Form",
                                    children: e(y, {
                                        breakpoint: d,
                                        overrides: {
                                            tXdLw_lRR: {
                                                width: "max(min(min(100vw, 1200px) - 40px, 800px) - 80px, 1px)",
                                                y: 473.8
                                            },
                                            vRgxHesXZ: {
                                                width: "max(min(min(100vw, 1200px) - 80px, 800px) - 160px, 1px)",
                                                y: 553.8
                                            }
                                        },
                                        children: e(g, {
                                            height: 504,
                                            width: "max(max((min(100vw, 1200px) - 200px) / 2, 1px) - 40px, 1px)",
                                            y: 355.2,
                                            children: e(K, {
                                                className: "framer-3zvohf-container",
                                                children: e(de, {
                                                    height: "100%",
                                                    id: "hxBPW2HGO",
                                                    layoutId: "hxBPW2HGO",
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    variant: "e61oE_hL3",
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    })
                                })]
                            })]
                        }), e("div", {
                            className: "framer-14w2k0m",
                            "data-framer-name": "Footer",
                            name: "Footer",
                            children: e(y, {
                                breakpoint: d,
                                overrides: {
                                    tXdLw_lRR: {
                                        width: "calc(100vw - 40px)",
                                        y: 1697.8
                                    },
                                    vRgxHesXZ: {
                                        y: 1547.8
                                    }
                                },
                                children: e(g, {
                                    height: 432,
                                    width: "max(100vw - 80px, 1px)",
                                    y: 1349.2,
                                    children: e(Sr, {
                                        __framer__animate: {
                                            transition: tr
                                        },
                                        __framer__animateOnce: !0,
                                        __framer__enter: ft,
                                        __framer__exit: ct,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: .5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: "framer-157l2mw-container",
                                        style: {
                                            transformPerspective: 1200
                                        },
                                        children: e(y, {
                                            breakpoint: d,
                                            overrides: {
                                                tXdLw_lRR: {
                                                    variant: "imnebtjsk"
                                                },
                                                vRgxHesXZ: {
                                                    variant: "uo5u8vAKR"
                                                }
                                            },
                                            children: e(fe, {
                                                height: "100%",
                                                id: "zcVYRK1ic",
                                                layoutId: "zcVYRK1ic",
                                                style: {
                                                    width: "100%"
                                                },
                                                variant: "bp9Y39OvE",
                                                width: "100%"
                                            })
                                        })
                                    })
                                })
                            })
                        })]
                    }), e("div", {
                        className: w($e, ...Y),
                        id: "overlay"
                    })]
                })
            })
    })
    , ht = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", `.${he.bodyClassName}-framer-U5lGn { background: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, rgb(255, 255, 255)); }`, ".framer-U5lGn.framer-3m8ppv, .framer-U5lGn .framer-3m8ppv { display: block; }", ".framer-U5lGn.framer-3z4cjy { align-content: center; align-items: center; background-color: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }", ".framer-U5lGn .framer-oib4h2-container { flex: none; height: auto; left: 40px; position: fixed; top: 40px; width: auto; z-index: 10; }", ".framer-U5lGn .framer-16flt7f-container { flex: none; height: auto; left: 50%; position: fixed; top: 40px; transform: translateX(-50%); width: auto; z-index: 9; }", ".framer-U5lGn .framer-1mrltpx-container { flex: none; height: auto; position: fixed; right: 40px; top: 40px; width: auto; z-index: 3; }", ".framer-U5lGn .framer-rh892c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 180px 40px 80px 40px; position: relative; width: 100%; z-index: 1; }", ".framer-U5lGn .framer-1pk0sdq { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 600px; position: relative; white-space: pre-wrap; width: 600px; word-break: break-word; word-wrap: break-word; }", '.framer-U5lGn .framer-q7tdyx { align-content: center; align-items: center; background: radial-gradient(50% 50% at 50% 50%, var(--token-a3c395b2-feb8-4959-a202-34d19c05e988, #fafafa) /* {"name":"Gray 100"} */ 10.97972972972973%, rgb(255, 255, 255) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; z-index: 1; }', ".framer-U5lGn .framer-x29ia { --border-bottom-width: 1px; --border-color: rgba(212, 212, 212, 0.6); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, #ffffff); border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 2; }", ".framer-U5lGn .framer-25nuf8 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 500px; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-U5lGn .framer-rvgk75, .framer-U5lGn .framer-1dmt8ul, .framer-U5lGn .framer-etztqv, .framer-U5lGn .framer-1xvuvpd { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-U5lGn .framer-1h9xr76, .framer-U5lGn .framer-1az14c5, .framer-U5lGn .framer-1oxjlby, .framer-U5lGn .framer-zf8g1x { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-U5lGn .framer-11ficlk { align-content: center; align-items: center; background-color: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, #ffffff); border-bottom-left-radius: 28px; border-bottom-right-radius: 28px; border-top-left-radius: 28px; border-top-right-radius: 28px; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: visible; padding: 20px; position: relative; width: 1px; }", ".framer-U5lGn .framer-3zvohf-container, .framer-U5lGn .framer-157l2mw-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }", ".framer-U5lGn .framer-1tg9v67 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-U5lGn .framer-alm6j4, .framer-U5lGn .framer-1qa6p80 { --border-bottom-width: 1px; --border-color: rgba(212, 212, 212, 0.6); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; aspect-ratio: 0.99 / 1; background-color: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, #ffffff); border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: var(--framer-aspect-ratio-supported, 350px); justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }", ".framer-U5lGn .framer-12l3axt { --border-bottom-width: 1px; --border-color: rgba(212, 212, 212, 0.6); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; aspect-ratio: 0.9914285714285714 / 1; background-color: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, #ffffff); border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: var(--framer-aspect-ratio-supported, 350px); justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }", ".framer-U5lGn .framer-14w2k0m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-U5lGn.framer-3z4cjy, .framer-U5lGn .framer-rh892c, .framer-U5lGn .framer-q7tdyx, .framer-U5lGn .framer-x29ia, .framer-U5lGn .framer-25nuf8, .framer-U5lGn .framer-11ficlk, .framer-U5lGn .framer-1tg9v67, .framer-U5lGn .framer-alm6j4, .framer-U5lGn .framer-12l3axt, .framer-U5lGn .framer-1qa6p80, .framer-U5lGn .framer-14w2k0m { gap: 0px; } .framer-U5lGn.framer-3z4cjy > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-U5lGn.framer-3z4cjy > :first-child, .framer-U5lGn .framer-rh892c > :first-child, .framer-U5lGn .framer-q7tdyx > :first-child, .framer-U5lGn .framer-25nuf8 > :first-child, .framer-U5lGn .framer-alm6j4 > :first-child, .framer-U5lGn .framer-12l3axt > :first-child, .framer-U5lGn .framer-1qa6p80 > :first-child { margin-top: 0px; } .framer-U5lGn.framer-3z4cjy > :last-child, .framer-U5lGn .framer-rh892c > :last-child, .framer-U5lGn .framer-q7tdyx > :last-child, .framer-U5lGn .framer-25nuf8 > :last-child, .framer-U5lGn .framer-alm6j4 > :last-child, .framer-U5lGn .framer-12l3axt > :last-child, .framer-U5lGn .framer-1qa6p80 > :last-child { margin-bottom: 0px; } .framer-U5lGn .framer-rh892c > *, .framer-U5lGn .framer-q7tdyx > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-U5lGn .framer-x29ia > *, .framer-U5lGn .framer-1tg9v67 > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-U5lGn .framer-x29ia > :first-child, .framer-U5lGn .framer-11ficlk > :first-child, .framer-U5lGn .framer-1tg9v67 > :first-child, .framer-U5lGn .framer-14w2k0m > :first-child { margin-left: 0px; } .framer-U5lGn .framer-x29ia > :last-child, .framer-U5lGn .framer-11ficlk > :last-child, .framer-U5lGn .framer-1tg9v67 > :last-child, .framer-U5lGn .framer-14w2k0m > :last-child { margin-right: 0px; } .framer-U5lGn .framer-25nuf8 > *, .framer-U5lGn .framer-alm6j4 > *, .framer-U5lGn .framer-12l3axt > *, .framer-U5lGn .framer-1qa6p80 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-U5lGn .framer-11ficlk > * { margin: 0px; margin-left: calc(80px / 2); margin-right: calc(80px / 2); } .framer-U5lGn .framer-14w2k0m > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }", `@media (min-width: 810px) and (max-width: 1199px) { .${he.bodyClassName}-framer-U5lGn { background: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, rgb(255, 255, 255)); } .framer-U5lGn.framer-3z4cjy { width: 810px; } .framer-U5lGn .framer-q7tdyx, .framer-U5lGn .framer-1tg9v67 { gap: 20px; } .framer-U5lGn .framer-x29ia { flex-direction: column; gap: 100px; max-width: 800px; padding: 80px; } .framer-U5lGn .framer-25nuf8 { align-content: center; align-items: center; flex: none; width: 100%; } .framer-U5lGn .framer-11ficlk { flex: none; padding: 0px; width: 100%; } .framer-U5lGn .framer-alm6j4, .framer-U5lGn .framer-12l3axt, .framer-U5lGn .framer-1qa6p80 { height: var(--framer-aspect-ratio-supported, 232px); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-U5lGn .framer-q7tdyx, .framer-U5lGn .framer-x29ia, .framer-U5lGn .framer-1tg9v67 { gap: 0px; } .framer-U5lGn .framer-q7tdyx > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-U5lGn .framer-q7tdyx > :first-child, .framer-U5lGn .framer-x29ia > :first-child { margin-top: 0px; } .framer-U5lGn .framer-q7tdyx > :last-child, .framer-U5lGn .framer-x29ia > :last-child { margin-bottom: 0px; } .framer-U5lGn .framer-x29ia > * { margin: 0px; margin-bottom: calc(100px / 2); margin-top: calc(100px / 2); } .framer-U5lGn .framer-1tg9v67 > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-U5lGn .framer-1tg9v67 > :first-child { margin-left: 0px; } .framer-U5lGn .framer-1tg9v67 > :last-child { margin-right: 0px; } }}`, `@media (max-width: 809px) { .${he.bodyClassName}-framer-U5lGn { background: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, rgb(255, 255, 255)); } .framer-U5lGn.framer-3z4cjy { width: 390px; } .framer-U5lGn .framer-oib4h2-container { left: 20px; top: 35px; } .framer-U5lGn .framer-16flt7f-container { left: 0px; right: 0px; top: 35px; transform: unset; width: unset; } .framer-U5lGn .framer-rh892c { padding: 180px 20px 80px 20px; } .framer-U5lGn .framer-1pk0sdq { max-width: 280px; width: 100%; } .framer-U5lGn .framer-q7tdyx { gap: 20px; padding: 0px 20px 0px 20px; } .framer-U5lGn .framer-x29ia { flex-direction: column; gap: 60px; max-width: 800px; } .framer-U5lGn .framer-25nuf8 { align-content: center; align-items: center; flex: none; max-width: unset; width: 100%; } .framer-U5lGn .framer-11ficlk { flex: none; padding: 0px; width: 100%; } .framer-U5lGn .framer-1tg9v67 { flex-direction: column; gap: 20px; } .framer-U5lGn .framer-alm6j4, .framer-U5lGn .framer-12l3axt, .framer-U5lGn .framer-1qa6p80 { aspect-ratio: 1.55 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 226px); width: 100%; } .framer-U5lGn .framer-14w2k0m { flex-direction: column; padding: 20px; } .framer-U5lGn .framer-157l2mw-container { flex: none; width: 100%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-U5lGn .framer-q7tdyx, .framer-U5lGn .framer-x29ia, .framer-U5lGn .framer-1tg9v67, .framer-U5lGn .framer-14w2k0m { gap: 0px; } .framer-U5lGn .framer-q7tdyx > *, .framer-U5lGn .framer-1tg9v67 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-U5lGn .framer-q7tdyx > :first-child, .framer-U5lGn .framer-x29ia > :first-child, .framer-U5lGn .framer-1tg9v67 > :first-child, .framer-U5lGn .framer-14w2k0m > :first-child { margin-top: 0px; } .framer-U5lGn .framer-q7tdyx > :last-child, .framer-U5lGn .framer-x29ia > :last-child, .framer-U5lGn .framer-1tg9v67 > :last-child, .framer-U5lGn .framer-14w2k0m > :last-child { margin-bottom: 0px; } .framer-U5lGn .framer-x29ia > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-U5lGn .framer-14w2k0m > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }}`, ...He, ...Me, ...ze, ...Ne, ...Xe, ...Ae, '.framer-U5lGn[data-border="true"]::after, .framer-U5lGn [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }']
    , te = j(ut, ht, "framer-U5lGn")
    , St = te;
te.displayName = "Contact";
te.defaultProps = {
    height: 1856.5,
    width: 1200
};
z(te, [{
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
    }]
}, ...Lr, ...qr, ...Ar, ...Yr, ...Pr, ...h(Be), ...h(Se), ...h(De), ...h(Ge), ...h(Ye), ...h(qe)], {
    supportsExplicitInterCodegen: !0
});
var Mt = {
    exports: {
        Props: {
            type: "tsType",
            annotations: {
                framerContractVersion: "1"
            }
        },
        default: {
            type: "reactComponent",
            name: "FramersuCmzpHhM",
            slots: [],
            annotations: {
                framerComponentViewportWidth: "true",
                framerContractVersion: "1",
                framerResponsiveScreen: "",
                framerIntrinsicHeight: "1856.5",
                framerImmutableVariables: "true",
                framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"vRgxHesXZ":{"layout":["fixed","auto"]},"tXdLw_lRR":{"layout":["fixed","auto"]}}}',
                framerIntrinsicWidth: "1200",
                framerDisplayContentsDiv: "false"
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
export { Mt as __FramerMetadata__, St as default };
//# sourceMappingURL=w5UPVEjBiahnexWkjAN-u_LvS_BQY4DSh7dBpKq9O3Y.2ZVHHP27.mjs.map
