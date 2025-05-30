import { a as we } from "./chunk-4HHC2VHD.mjs";
import { a as ne } from "./chunk-YSDFOZIS.mjs";
import { a as $e, b as er, c as rr } from "./chunk-HRCDG6CY.mjs";
import { a as We, b as Ze, c as Ge } from "./chunk-DFDKHUND.mjs";
import { f as xe, j as ge, n as _e, o as ye, s as Ue, t as Ke, u as Be, v as be } from "./chunk-2MTAU4LG.mjs";
import "./chunk-42U43NKG.mjs";
import { A as z, Ea as Ve, Ia as ve, J as Ee, Ja as De, Ka as Je, P as Te, Pa as N, Q as ee, Qa as c, S as ze, Ua as te, Va as P, W as I, Wa as ie, Z as Oe, aa as O, ba as L, c as m, ea as j, ga as F, h as Z, ia as re, ja as Le, ka as qe, l as Ne, m as Pe, ma as Ae, n as G, o as Ce, oa as Ye, pa as Xe, q as Fe, r as $, sa as l, ta as ae, u as Re, v as e, w as a, wa as He, y as he, z as y } from "./chunk-NV2CJCYN.mjs";
import "./chunk-JR5VT52U.mjs";
import "./chunk-RIUMFBNJ.mjs";
var yr = {
    Hdo8Dfjyh: {
        hover: !0
    }
}
    , br = ["Hdo8Dfjyh"]
    , wr = "framer-1JI5L"
    , kr = {
        Hdo8Dfjyh: "framer-v-1jft3uc"
    };
function ar(r, ...t) {
    let d = {};
    return t?.forEach(p => p && Object.assign(d, r[p])),
        d
}
var Sr = {
    default: {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    }
}
    , ke = r => typeof r == "object" && r !== null && typeof r.src == "string" ? r : typeof r == "string" ? {
        src: r
    } : void 0
    , Qr = {
        delay: 0,
        duration: .35,
        ease: [.44, 0, .5, 1],
        type: "tween"
    }
    , Mr = {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: Qr
    }
    , Ir = ({ value: r, children: t }) => {
        let d = Ne(he)
            , p = r ?? d.transition
            , u = Fe(() => ({
                ...d,
                transition: p
            }), [JSON.stringify(p)]);
        return e(he.Provider, {
            value: u,
            children: t
        })
    }
    , jr = ({ height: r, iconImage: t, id: d, link: p, tagline: u, thumbnailImage: f, thumbnailImageHover: i, title: b, width: X, ...h }) => {
        var M, w;
        return {
            ...h,
            Jx4BuwdB1: t ?? h.Jx4BuwdB1,
            kHidhWEAZ: i ?? h.kHidhWEAZ,
            lf8sQqtMz: f ?? h.lf8sQqtMz,
            Sx6Oq4i5H: (M = u ?? h.Sx6Oq4i5H) !== null && M !== void 0 ? M : "Tagline",
            XjkTk7R5a: p ?? h.XjkTk7R5a,
            zeBHfhhT2: (w = b ?? h.zeBHfhhT2) !== null && w !== void 0 ? w : "Title"
        }
    }
    , Nr = (r, t) => t.join("-") + r.layoutDependency
    , Pr = Z(function (r, t) {
        let { activeLocale: d, setLocale: p } = ee()
            , { style: u, className: f, layoutId: i, variant: b, XjkTk7R5a: X, lf8sQqtMz: h, kHidhWEAZ: M, Jx4BuwdB1: w, zeBHfhhT2: fe, Sx6Oq4i5H: H, ...se } = jr(r)
            , { baseVariant: V, classNames: le, gestureVariant: D, setGestureState: k, setVariant: ce, transition: J, variants: T } = Je({
                cycleOrder: br,
                defaultVariant: "Hdo8Dfjyh",
                enabledGestures: yr,
                transitions: Sr,
                variant: b,
                variantClassNames: kr
            })
            , _ = Nr(r, T)
            , U = $(null)
            , K = G()
            , B = [];
        return e(z, {
            id: i ?? K,
            children: e(Ir, {
                value: J,
                children: e(Xe, {
                    href: X,
                    children: a(y.a, {
                        ...se,
                        animate: T,
                        className: `${O(wr, ...B, "framer-1jft3uc", f, le)} framer-1druoxl`,
                        "data-framer-name": "Card",
                        initial: b,
                        layoutDependency: _,
                        layoutId: "Hdo8Dfjyh",
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
                        ref: t ?? U,
                        style: {
                            ...u
                        },
                        ...ar({
                            "Hdo8Dfjyh-hover": {
                                "data-framer-name": void 0
                            }
                        }, V, D),
                        children: [e(N, {
                            background: {
                                alt: "",
                                fit: "fill",
                                sizes: "min(540px, 100vw)",
                                ...ke(h)
                            },
                            className: "framer-1s6th16",
                            "data-border": !0,
                            "data-framer-name": "Thumbnail",
                            layoutDependency: _,
                            layoutId: "uEGu2CGkZ",
                            style: {
                                "--border-bottom-width": "1px",
                                "--border-color": "rgba(212, 212, 212, 0.6)",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                borderBottomLeftRadius: 18,
                                borderBottomRightRadius: 18,
                                borderTopLeftRadius: 18,
                                borderTopRightRadius: 18
                            },
                            ...ar({
                                "Hdo8Dfjyh-hover": {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        sizes: "min(540px, 100vw)",
                                        ...ke(M)
                                    },
                                    whileHover: Mr
                                }
                            }, V, D)
                        }), a(y.div, {
                            className: "framer-1d8osih",
                            "data-framer-name": "Project Information",
                            layoutDependency: _,
                            layoutId: "wrK9GMZso",
                            children: [e(N, {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1024,
                                    intrinsicWidth: 1024,
                                    pixelHeight: 1024,
                                    pixelWidth: 1024,
                                    sizes: "40px",
                                    ...ke(w)
                                },
                                className: "framer-r0jzmx",
                                "data-framer-name": "Icon",
                                layoutDependency: _,
                                layoutId: "Xwh1BzBOv",
                                style: {
                                    borderBottomLeftRadius: 8,
                                    borderBottomRightRadius: 8,
                                    borderTopLeftRadius: 8,
                                    borderTopRightRadius: 8
                                }
                            }), a(y.div, {
                                className: "framer-1t3o69t",
                                "data-framer-name": "Title and Tagline",
                                layoutDependency: _,
                                layoutId: "n_tdooY4q",
                                children: [e(c, {
                                    __fromCanvasComponent: !0,
                                    children: e(m, {
                                        children: e(y.p, {
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
                                            children: "Migrate Globe"
                                        })
                                    }),
                                    className: "framer-9a0qjz",
                                    "data-framer-name": "Title",
                                    fonts: ["GF;Inter Tight-500"],
                                    layoutDependency: _,
                                    layoutId: "whZa5O6Ma",
                                    style: {
                                        "--extracted-r6o4lv": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))",
                                        "--framer-paragraph-spacing": "0px"
                                    },
                                    text: fe,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), e(c, {
                                    __fromCanvasComponent: !0,
                                    children: e(m, {
                                        children: e(y.p, {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "14px",
                                                "--framer-font-weight": "500",
                                                "--framer-letter-spacing": "0.1px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5553722d-43da-4a73-a7ce-d2499d28fa68, rgb(135, 134, 138)))"
                                            },
                                            children: "Crafting a stellar user experience"
                                        })
                                    }),
                                    className: "framer-a2mb4k",
                                    fonts: ["GF;Inter Tight-500"],
                                    layoutDependency: _,
                                    layoutId: "A63_tb1_a",
                                    style: {
                                        "--extracted-r6o4lv": "var(--token-5553722d-43da-4a73-a7ce-d2499d28fa68, rgb(135, 134, 138))",
                                        "--framer-paragraph-spacing": "0px"
                                    },
                                    text: H,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })]
                            })]
                        })]
                    })
                })
            })
        })
    })
    , Cr = ['.framer-1JI5L[data-border="true"]::after, .framer-1JI5L [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-1JI5L.framer-1druoxl, .framer-1JI5L .framer-1druoxl { display: block; }", ".framer-1JI5L.framer-1jft3uc { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: wrap; gap: 20px; height: auto; justify-content: flex-start; padding: 0px 0px 40px 0px; position: relative; text-decoration: none; width: 540px; }", ".framer-1JI5L .framer-1s6th16 { aspect-ratio: 1.4 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 386px); position: relative; width: 100%; }", ".framer-1JI5L .framer-1d8osih { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-1JI5L .framer-r0jzmx { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); overflow: hidden; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }", ".framer-1JI5L .framer-1t3o69t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: auto; }", ".framer-1JI5L .framer-9a0qjz, .framer-1JI5L .framer-a2mb4k { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-1JI5L.framer-1jft3uc, .framer-1JI5L .framer-1d8osih, .framer-1JI5L .framer-1t3o69t { gap: 0px; } .framer-1JI5L.framer-1jft3uc > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-1JI5L.framer-1jft3uc > :first-child, .framer-1JI5L .framer-1t3o69t > :first-child { margin-top: 0px; } .framer-1JI5L.framer-1jft3uc > :last-child, .framer-1JI5L .framer-1t3o69t > :last-child { margin-bottom: 0px; } .framer-1JI5L .framer-1d8osih > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-1JI5L .framer-1d8osih > :first-child { margin-left: 0px; } .framer-1JI5L .framer-1d8osih > :last-child { margin-right: 0px; } .framer-1JI5L .framer-1t3o69t > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }"]
    , q = re(Pr, Cr, "framer-1JI5L")
    , Se = q;
q.displayName = "Work Card (Related Works)";
q.defaultProps = {
    height: 487.5,
    width: 540
};
Oe(q, {
    XjkTk7R5a: {
        title: "Link",
        type: I.Link
    },
    lf8sQqtMz: {
        title: "Thumbnail Image",
        type: I.ResponsiveImage
    },
    kHidhWEAZ: {
        title: "Thumbnail Image (Hover)",
        type: I.ResponsiveImage
    },
    Jx4BuwdB1: {
        title: "Icon Image",
        type: I.ResponsiveImage
    },
    zeBHfhhT2: {
        defaultValue: "Title",
        title: "Title",
        type: I.String
    },
    Sx6Oq4i5H: {
        defaultValue: "Tagline",
        displayTextArea: !1,
        title: "Tagline",
        type: I.String
    }
});
te(q, [{
    family: "Inter Tight",
    style: "normal",
    url: "https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjPQ-qWSRToK8EPg.woff2",
    weight: "500"
}]);
var Fr = P(xe)
    , Rr = P(ye)
    , Er = P(ge)
    , Tr = He(N)
    , R = L(y.div)
    , tr = L(c)
    , C = L(N)
    , zr = P(_e)
    , ir = L(F)
    , Or = P(Se)
    , Lr = P(be);
var qr = {
    Hi8JQm8K9: "(max-width: 809px)",
    KZIq8cYyN: "(min-width: 810px) and (max-width: 1199px)",
    Vvuh1GplE: "(min-width: 1200px)"
}
    , Ar = () => typeof document < "u"
    , nr = "framer-MvuQS"
    , Yr = {
        Hi8JQm8K9: "framer-v-1h08ztg",
        KZIq8cYyN: "framer-v-rgv0ak",
        Vvuh1GplE: "framer-v-10re34y"
    }
    , Q = {
        damping: 30,
        delay: 0,
        mass: 2,
        stiffness: 100,
        type: "spring"
    }
    , Xr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: Q,
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
    , or = (r, t) => {
        if (!(!r || typeof r != "object"))
            return {
                ...r,
                alt: t
            }
    }
    , Vr = (r, t) => `translateX(-50%) ${t}`
    , Dr = {
        damping: 30,
        delay: .3,
        mass: 2,
        stiffness: 100,
        type: "spring"
    }
    , Jr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: Dr,
        x: 0,
        y: 0
    }
    , Ur = {
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
    , Kr = {
        damping: 30,
        delay: .6,
        mass: 2,
        stiffness: 100,
        type: "spring"
    }
    , Br = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: Kr,
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
        y: -50
    }
    , o = r => typeof r == "object" && r !== null && typeof r.src == "string" ? r : typeof r == "string" ? {
        src: r
    } : void 0
    , Y = {
        damping: 30,
        delay: .4,
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
        transition: Y,
        x: 0,
        y: 0
    }
    , Gr = {
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
    , v = {
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
    , g = {
        damping: 30,
        delay: .2,
        mass: 2,
        stiffness: 100,
        type: "spring"
    }
    , A = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: g,
        x: 0,
        y: 60
    }
    , $r = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: Y,
        x: 0,
        y: 60
    }
    , oe = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        x: 0,
        y: 80
    }
    , Qe = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: g,
        x: 0,
        y: 80
    }
    , ea = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: Y,
        x: 0,
        y: 80
    }
    , E = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: Q,
        x: 0,
        y: 60
    }
    , ra = {
        delay: 0,
        duration: .35,
        ease: [.44, 0, .5, 1],
        type: "tween"
    }
    , aa = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: ra,
        y: -20
    }
    , ta = ({ query: r, children: t }) => {
        let d = ve(r);
        return t(d)
    }
    , ia = {
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
    , mr = {
        delay: 0,
        duration: .3,
        ease: [.44, 0, .56, 1],
        type: "tween"
    }
    , na = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: mr,
        x: 0,
        y: 160
    }
    , Me = ne()
    , oa = {
        Desktop: "Vvuh1GplE",
        Phone: "Hi8JQm8K9",
        Tablet: "KZIq8cYyN"
    }
    , ma = ({ height: r, id: t, width: d, ...p }) => {
        var u, f;
        return {
            ...p,
            variant: (f = (u = oa[p.variant]) !== null && u !== void 0 ? u : p.variant) !== null && f !== void 0 ? f : "Vvuh1GplE"
        }
    }
    , fa = Z(function (r, t) {
        let { activeLocale: d, setLocale: p } = ee()
            , u = ze()
            , [f] = ve({
                from: {
                    alias: "default",
                    data: we,
                    type: "Collection"
                },
                select: [{
                    collection: "default",
                    name: "lL7OOh74T",
                    type: "Identifier"
                }, {
                    collection: "default",
                    name: "VZ8KJACVN",
                    type: "Identifier"
                }, {
                    collection: "default",
                    name: "kfjd9Ya4_",
                    type: "Identifier"
                }, {
                    collection: "default",
                    name: "Jy0fa1GAv",
                    type: "Identifier"
                }, {
                    collection: "default",
                    name: "YVnVQFNKE",
                    type: "Identifier"
                }, {
                    collection: "default",
                    name: "PHX41LvzW",
                    type: "Identifier"
                }, {
                    collection: "default",
                    name: "GfBmDO6MT",
                    type: "Identifier"
                }, {
                    collection: "default",
                    name: "p5sisUhhM",
                    type: "Identifier"
                }, {
                    collection: "default",
                    name: "sNO3yr_hW",
                    type: "Identifier"
                }, {
                    collection: "default",
                    name: "TiOayYHWE",
                    type: "Identifier"
                }, {
                    collection: "default",
                    name: "Q5JPDFoy2",
                    type: "Identifier"
                }, {
                    collection: "default",
                    name: "IGQrkpwtq",
                    type: "Identifier"
                }, {
                    collection: "default",
                    name: "DsLv6_dsg",
                    type: "Identifier"
                }, {
                    collection: "default",
                    name: "t4IJRLL1k",
                    type: "Identifier"
                }, {
                    collection: "default",
                    name: "poey3Yk8j",
                    type: "Identifier"
                }, {
                    collection: "default",
                    name: "w87x6cqd9",
                    type: "Identifier"
                }, {
                    collection: "default",
                    name: "RdSY2goge",
                    type: "Identifier"
                }],
                where: De(u)
            })
            , i = n => {
                if (!f)
                    throw new Ee(`No data matches path variables: ${JSON.stringify(u)}`);
                return f[n]
            }
            , { style: b, className: X, layoutId: h, variant: M, Jy0fa1GAv: w = i("Jy0fa1GAv"), kfjd9Ya4_: fe = i("kfjd9Ya4_"), lL7OOh74T: H = i("lL7OOh74T"), YVnVQFNKE: se = i("YVnVQFNKE"), PHX41LvzW: V = i("PHX41LvzW"), GfBmDO6MT: le = i("GfBmDO6MT"), p5sisUhhM: D = i("p5sisUhhM"), sNO3yr_hW: k = i("sNO3yr_hW"), TiOayYHWE: ce = i("TiOayYHWE"), Q5JPDFoy2: J = i("Q5JPDFoy2"), IGQrkpwtq: T = i("IGQrkpwtq"), DsLv6_dsg: _ = i("DsLv6_dsg"), t4IJRLL1k: U = i("t4IJRLL1k"), poey3Yk8j: K = i("poey3Yk8j"), w87x6cqd9: B = i("w87x6cqd9"), RdSY2goge: fr = i("RdSY2goge"), eqfqUBAEODbEeTqp83: la, VZ8KJACVNDbEeTqp83: ca, y_wIuADU_DbEeTqp83: da, kfjd9Ya4_DbEeTqp83: pa, lL7OOh74TDbEeTqp83: ua, Ia_oYNfo3DbEeTqp83: ha, idDbEeTqp83: va, ...sr } = ma(r);
        Pe(() => {
            let n = ne(f, d);
            if (n.robots) {
                let x = document.querySelector('meta[name="robots"]');
                x ? x.setAttribute("content", n.robots) : (x = document.createElement("meta"),
                    x.setAttribute("name", "robots"),
                    x.setAttribute("content", n.robots),
                    document.head.appendChild(x))
            }
        }
            , [f, d]),
            Ce(() => {
                let n = ne(f, d);
                if (document.title = n.title || "",
                    n.viewport) {
                    var x;
                    (x = document.querySelector('meta[name="viewport"]')) === null || x === void 0 || x.setAttribute("content", n.viewport)
                }
                let pe = n.bodyClassName;
                if (pe) {
                    let S = document.body;
                    S.classList.forEach(W => W.startsWith("framer-body-") && S.classList.remove(W)),
                        S.classList.add(`${n.bodyClassName}-framer-MvuQS`)
                }
                return () => {
                    pe && document.body.classList.remove(`${n.bodyClassName}-framer-MvuQS`)
                }
            }
                , [f, d]);
        let [s, xa] = Ve(M, qr, !1)
            , ga = void 0
            , lr = $(null)
            , _a = Te()
            , de = () => Ar() ? s !== "Hi8JQm8K9" : !0
            , cr = G()
            , Ie = [Ge, rr, Be];
        return Le({}),
            e(qe.Provider, {
                value: {
                    primaryVariantId: "Vvuh1GplE",
                    variantClassNames: Yr
                },
                children: a(z, {
                    id: h ?? cr,
                    children: [a(y.div, {
                        ...sr,
                        className: O(nr, ...Ie, "framer-10re34y", X),
                        ref: t ?? lr,
                        style: {
                            ...b
                        },
                        children: [e(ae, {
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
                            children: n => e(j, {
                                children: e(F, {
                                    animate: Xr,
                                    className: "framer-hn9ru4-container",
                                    "data-framer-appear-id": "hn9ru4",
                                    "data-framer-name": "Vision Techie Logo",
                                    initial: Hr,
                                    layoutScroll: !0,
                                    name: "Vision Techie Logo",
                                    optimized: !0,
                                    style: {
                                        transformPerspective: 1200
                                    },
                                    children: e(l, {
                                        breakpoint: s,
                                        overrides: {
                                            Hi8JQm8K9: {
                                                ifUOndEDH: n[2],
                                                variant: "zWV8cxgzT"
                                            },
                                            KZIq8cYyN: {
                                                ifUOndEDH: n[1],
                                                variant: "zWV8cxgzT"
                                            }
                                        },
                                        children: e(xe, {
                                            bXKDVwltS: or({
                                                src: "../assets/logo/logo-black.svg"
                                            }, ""),
                                            height: "100%",
                                            id: "no3BOaHD1",
                                            ifUOndEDH: n[0],
                                            l6Wo4ULiJ: "Vision Techie",
                                            layoutId: "no3BOaHD1",
                                            name: "Vision Techie Logo",
                                            variant: "sP4e3iZKf",
                                            width: "100%",
                                            YIltgZQMx: or({
                                                src: "../assets/logo/logo-white.svg"
                                            }, "")
                                        })
                                    })
                                })
                            })
                        }), e(j, {
                            children: e(l, {
                                breakpoint: s,
                                overrides: {
                                    Hi8JQm8K9: {
                                        transformTemplate: void 0
                                    }
                                },
                                children: e(F, {
                                    animate: Jr,
                                    className: "framer-1tsy8gr-container",
                                    "data-framer-appear-id": "1tsy8gr",
                                    initial: Ur,
                                    layoutScroll: !0,
                                    optimized: !0,
                                    style: {
                                        transformPerspective: 1200
                                    },
                                    transformTemplate: Vr,
                                    children: e(l, {
                                        breakpoint: s,
                                        overrides: {
                                            Hi8JQm8K9: {
                                                style: {
                                                    width: "100%"
                                                },
                                                variant: "xZMChLWbK"
                                            },
                                            KZIq8cYyN: {
                                                variant: "zWjVcnPlS"
                                            }
                                        },
                                        children: e(ye, {
                                            height: "100%",
                                            id: "XCk_QQx8b",
                                            layoutId: "XCk_QQx8b",
                                            variant: "ebLRlZjPs",
                                            width: "100%"
                                        })
                                    })
                                })
                            })
                        }), e("div", {
                            className: "framer-fknpgo",
                            "data-framer-name": "Landing",
                            name: "Landing",
                            children: e(l, {
                                breakpoint: s,
                                overrides: {
                                    Hi8JQm8K9: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            sizes: "calc(100vw - 40px)",
                                            ...o(w)
                                        }
                                    }
                                },
                                children: e(Tr, {
                                    animate: Zr,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        sizes: "max(100vw - 80px, 1px)",
                                        ...o(w)
                                    },
                                    className: "framer-1e3j79w",
                                    "data-framer-appear-id": "1e3j79w",
                                    "data-framer-name": "Key Image",
                                    initial: Gr,
                                    name: "Key Image",
                                    optimized: !0,
                                    style: {
                                        transformPerspective: 1200
                                    }
                                })
                            })
                        }), a("div", {
                            className: "framer-1ovgega",
                            "data-framer-name": "Post",
                            name: "Post",
                            children: [a("div", {
                                className: "framer-1wfkdg0",
                                "data-framer-name": "Title + Description",
                                name: "Title + Description",
                                children: [a(R, {
                                    __framer__animate: {
                                        transition: g
                                    },
                                    __framer__animateOnce: !0,
                                    __framer__enter: v,
                                    __framer__exit: A,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-juyjv0",
                                    "data-framer-name": "Icon + Title",
                                    name: "Icon + Title",
                                    style: {
                                        transformPerspective: 1200
                                    },
                                    children: [e(N, {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            sizes: "60px",
                                            ...o(fe)
                                        },
                                        className: "framer-n34gtj",
                                        "data-framer-name": "Icon",
                                        name: "Icon"
                                    }), e(c, {
                                        __fromCanvasComponent: !0,
                                        children: e(m, {
                                            children: e("h1", {
                                                className: "framer-styles-preset-1sgigkb",
                                                "data-styles-preset": "BRyT8PKiE",
                                                children: "Snape"
                                            })
                                        }),
                                        className: "framer-s0dtq1",
                                        "data-framer-name": "Title",
                                        fonts: ["Inter"],
                                        name: "Title",
                                        text: H,
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })]
                                }), e(tr, {
                                    __framer__animate: {
                                        transition: Y
                                    },
                                    __framer__animateOnce: !0,
                                    __framer__enter: v,
                                    __framer__exit: $r,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: e(m, {
                                        children: e("h3", {
                                            className: "framer-styles-preset-1q1tllb",
                                            "data-styles-preset": "IOEcq6nbj",
                                            style: {
                                                "--framer-text-color": "var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115))"
                                            },
                                            children: "Revolutionizing workflow efficiency for photographers, we crafted a custom web solution tailored to streamline project management and elevate the user experience."
                                        })
                                    }),
                                    className: "framer-mi1jxd",
                                    "data-framer-name": "Description",
                                    fonts: ["Inter"],
                                    name: "Description",
                                    style: {
                                        transformPerspective: 1200
                                    },
                                    text: se,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })]
                            }), a("div", {
                                className: "framer-1pxbh0x",
                                "data-framer-name": "Project Details",
                                name: "Project Details",
                                children: [a(R, {
                                    __framer__animate: {
                                        transition: g
                                    },
                                    __framer__animateOnce: !0,
                                    __framer__enter: oe,
                                    __framer__exit: Qe,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-9ivify",
                                    "data-framer-name": "Category + Year Completed",
                                    name: "Category + Year Completed",
                                    style: {
                                        transformPerspective: 1200
                                    },
                                    children: [a("div", {
                                        className: "framer-u1svxc",
                                        "data-framer-name": "Category",
                                        name: "Category",
                                        children: [e(c, {
                                            __fromCanvasComponent: !0,
                                            children: e(m, {
                                                children: e("p", {
                                                    className: "framer-styles-preset-1n7ng81",
                                                    "data-styles-preset": "bxP2b_0Ko",
                                                    children: "What we worked on"
                                                })
                                            }),
                                            className: "framer-1lkcoi4",
                                            "data-framer-name": "Title",
                                            fonts: ["Inter"],
                                            name: "Title",
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), e("div", {
                                            className: "framer-truhyy",
                                            "data-framer-name": "Categories",
                                            name: "Categories",
                                            children: e(c, {
                                                __fromCanvasComponent: !0,
                                                children: e(m, {
                                                    children: a("p", {
                                                        className: "framer-styles-preset-1n7ng81",
                                                        "data-styles-preset": "bxP2b_0Ko",
                                                        children: [e("span", {
                                                            style: {
                                                                "--framer-text-color": "var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115))"
                                                            },
                                                            children: "Product Graphic System"
                                                        }), e("span", {
                                                            style: {
                                                                "--framer-text-color": "rgb(0, 0, 0)"
                                                            },
                                                            children: e("br", {})
                                                        }), e("span", {
                                                            style: {
                                                                "--framer-text-color": "var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115))"
                                                            },
                                                            children: "Brand Identity"
                                                        }), e("span", {
                                                            style: {
                                                                "--framer-text-color": "rgb(0, 0, 0)"
                                                            },
                                                            children: e("br", {})
                                                        }), e("span", {
                                                            style: {
                                                                "--framer-text-color": "var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115))"
                                                            },
                                                            children: "UI Design"
                                                        }), e("span", {
                                                            style: {
                                                                "--framer-text-color": "rgb(0, 0, 0)"
                                                            },
                                                            children: e("br", {})
                                                        }), e("span", {
                                                            style: {
                                                                "--framer-text-color": "var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115))"
                                                            },
                                                            children: "Brand Strategy"
                                                        })]
                                                    })
                                                }),
                                                className: "framer-16dx4lt",
                                                "data-framer-name": "Web Development",
                                                fonts: ["Inter"],
                                                name: "Web Development",
                                                text: V,
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })
                                        })]
                                    }), a("div", {
                                        className: "framer-3dbz3i",
                                        "data-framer-name": "Year Completed",
                                        name: "Year Completed",
                                        children: [e(c, {
                                            __fromCanvasComponent: !0,
                                            children: e(m, {
                                                children: e("p", {
                                                    className: "framer-styles-preset-1n7ng81",
                                                    "data-styles-preset": "bxP2b_0Ko",
                                                    children: "Year completed"
                                                })
                                            }),
                                            className: "framer-1kwr0ll",
                                            "data-framer-name": "Title",
                                            fonts: ["Inter"],
                                            name: "Title",
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), e(c, {
                                            __fromCanvasComponent: !0,
                                            children: e(m, {
                                                children: e("p", {
                                                    className: "framer-styles-preset-1n7ng81",
                                                    "data-styles-preset": "bxP2b_0Ko",
                                                    style: {
                                                        "--framer-text-color": "var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115))"
                                                    },
                                                    children: "2024"
                                                })
                                            }),
                                            className: "framer-ypcri9",
                                            "data-framer-name": "Year",
                                            fonts: ["Inter"],
                                            name: "Year",
                                            text: le,
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })]
                                    })]
                                }), a(R, {
                                    __framer__animate: {
                                        transition: Y
                                    },
                                    __framer__animateOnce: !0,
                                    __framer__enter: oe,
                                    __framer__exit: ea,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-1f9exgi",
                                    "data-framer-name": "Introduction",
                                    name: "Introduction",
                                    style: {
                                        transformPerspective: 1200
                                    },
                                    children: [e(c, {
                                        __fromCanvasComponent: !0,
                                        children: e(m, {
                                            children: e("p", {
                                                className: "framer-styles-preset-1n7ng81",
                                                "data-styles-preset": "bxP2b_0Ko",
                                                children: "Background"
                                            })
                                        }),
                                        className: "framer-umveb3",
                                        "data-framer-name": "Title",
                                        fonts: ["Inter"],
                                        name: "Title",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(c, {
                                        __fromCanvasComponent: !0,
                                        children: e(m, {
                                            children: e("p", {
                                                className: "framer-styles-preset-1n7ng81",
                                                "data-styles-preset": "bxP2b_0Ko",
                                                style: {
                                                    "--framer-text-color": "var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115))"
                                                },
                                                children: "Rover is an all-in-one finance app designed to revolutionize the way users manage their money. Offering a comprehensive suite of financial services, Rover aims to simplify everyday banking, investing, and currency exchange for individuals and businesses alike. With its intuitive interface, seamless transactions, and innovative features, Rover empowers users to take control of their finances with ease and confidence."
                                            })
                                        }),
                                        className: "framer-z93ay5",
                                        "data-framer-name": "Introduction",
                                        fonts: ["Inter"],
                                        name: "Introduction",
                                        text: D,
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })]
                                })]
                            }), a("div", {
                                className: "framer-4ro4ek",
                                "data-framer-name": "Images",
                                name: "Images",
                                children: [e(l, {
                                    breakpoint: s,
                                    overrides: {
                                        Hi8JQm8K9: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                sizes: "calc(min(100vw, 1200px) - 40px)",
                                                ...o(k)
                                            }
                                        }
                                    },
                                    children: e(C, {
                                        __framer__animate: {
                                            transition: Q
                                        },
                                        __framer__animateOnce: !0,
                                        __framer__enter: v,
                                        __framer__exit: E,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: .5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: "lazy",
                                            sizes: "calc(min(100vw, 1200px) - 80px)",
                                            ...o(k)
                                        },
                                        className: "framer-17ilmd4",
                                        "data-framer-name": "Image",
                                        name: "Image",
                                        style: {
                                            transformPerspective: 1200
                                        }
                                    })
                                }), a("div", {
                                    className: "framer-10xnvmn",
                                    "data-framer-name": "Images",
                                    name: "Images",
                                    children: [e(l, {
                                        breakpoint: s,
                                        overrides: {
                                            Hi8JQm8K9: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    sizes: "max((min(100vw, 1200px) - 60px) / 2, 1px)",
                                                    ...o(ce)
                                                }
                                            }
                                        },
                                        children: e(C, {
                                            __framer__animate: {
                                                transition: Q
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: v,
                                            __framer__exit: E,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: .5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: "lazy",
                                                sizes: "max((min(100vw, 1200px) - 100px) / 2, 1px)",
                                                ...o(ce)
                                            },
                                            className: "framer-6hu2iy",
                                            "data-framer-name": "Image (Left)",
                                            name: "Image (Left)",
                                            style: {
                                                transformPerspective: 1200
                                            }
                                        })
                                    }), e(l, {
                                        breakpoint: s,
                                        overrides: {
                                            Hi8JQm8K9: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    sizes: "max((min(100vw, 1200px) - 60px) / 2, 1px)",
                                                    ...o(J)
                                                }
                                            }
                                        },
                                        children: e(C, {
                                            __framer__animate: {
                                                transition: g
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: v,
                                            __framer__exit: A,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: .5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: "lazy",
                                                sizes: "max((min(100vw, 1200px) - 100px) / 2, 1px)",
                                                ...o(J)
                                            },
                                            className: "framer-j4rlfk",
                                            "data-framer-name": "Image (Right)",
                                            name: "Image (Right)",
                                            style: {
                                                transformPerspective: 1200
                                            }
                                        })
                                    })]
                                }), e(l, {
                                    breakpoint: s,
                                    overrides: {
                                        Hi8JQm8K9: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                sizes: "calc(min(100vw, 1200px) - 40px)",
                                                ...o(T)
                                            }
                                        }
                                    },
                                    children: e(C, {
                                        __framer__animate: {
                                            transition: Q
                                        },
                                        __framer__animateOnce: !0,
                                        __framer__enter: v,
                                        __framer__exit: E,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: .5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: "lazy",
                                            sizes: "calc(min(100vw, 1200px) - 80px)",
                                            ...o(T)
                                        },
                                        className: "framer-axxvbp",
                                        "data-framer-name": "Image",
                                        name: "Image",
                                        style: {
                                            transformPerspective: 1200
                                        }
                                    })
                                })]
                            }), a(R, {
                                __framer__animate: {
                                    transition: g
                                },
                                __framer__animateOnce: !0,
                                __framer__enter: oe,
                                __framer__exit: Qe,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: .5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-emfn9p",
                                "data-framer-name": "Challenges",
                                name: "Challenges",
                                style: {
                                    transformPerspective: 1200
                                },
                                children: [a("div", {
                                    className: "framer-1snfj5l",
                                    "data-framer-name": "Challenges",
                                    name: "Challenges",
                                    children: [e(c, {
                                        __fromCanvasComponent: !0,
                                        children: e(m, {
                                            children: e("p", {
                                                className: "framer-styles-preset-1n7ng81",
                                                "data-styles-preset": "bxP2b_0Ko",
                                                children: "Client Requirement"
                                            })
                                        }),
                                        className: "framer-1kdpbv4",
                                        "data-framer-name": "Title",
                                        fonts: ["Inter"],
                                        name: "Title",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(c, {
                                        __fromCanvasComponent: !0,
                                        children: e(m, {
                                            children: e("p", {
                                                className: "framer-styles-preset-1n7ng81",
                                                "data-styles-preset": "bxP2b_0Ko",
                                                style: {
                                                    "--framer-text-color": "var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115))"
                                                },
                                                children: "The design team encountered several challenges in developing Rover to meet the diverse needs of its users. Firstly, integrating multiple financial services into a cohesive and user-friendly platform required meticulous planning and design. Additionally, ensuring the security and privacy of users' sensitive financial data was of utmost importance. Furthermore, creating a seamless user experience across various devices and operating systems presented a technical challenge."
                                            })
                                        }),
                                        className: "framer-6p5b59",
                                        "data-framer-name": "Challenges",
                                        fonts: ["Inter"],
                                        name: "Challenges",
                                        text: _,
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })]
                                })]
                            }), a("div", {
                                className: "framer-6r923n",
                                "data-framer-name": "Images",
                                name: "Images",
                                children: [a("div", {
                                    className: "framer-1s5xpk5",
                                    "data-framer-name": "Images",
                                    name: "Images",
                                    children: [e(l, {
                                        breakpoint: s,
                                        overrides: {
                                            Hi8JQm8K9: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    sizes: "max((min(100vw, 1200px) - 60px) / 2, 1px)",
                                                    ...o(U)
                                                }
                                            }
                                        },
                                        children: e(C, {
                                            __framer__animate: {
                                                transition: Q
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: v,
                                            __framer__exit: E,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: .5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: "lazy",
                                                sizes: "max((min(100vw, 1200px) - 100px) / 2, 1px)",
                                                ...o(U)
                                            },
                                            className: "framer-1k0ca4y",
                                            "data-framer-name": "Image (Left)",
                                            name: "Image (Left)",
                                            style: {
                                                transformPerspective: 1200
                                            }
                                        })
                                    }), e(l, {
                                        breakpoint: s,
                                        overrides: {
                                            Hi8JQm8K9: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    sizes: "max((min(100vw, 1200px) - 60px) / 2, 1px)",
                                                    ...o(K)
                                                }
                                            }
                                        },
                                        children: e(C, {
                                            __framer__animate: {
                                                transition: g
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: v,
                                            __framer__exit: A,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: .5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: "lazy",
                                                sizes: "max((min(100vw, 1200px) - 100px) / 2, 1px)",
                                                ...o(K)
                                            },
                                            className: "framer-1o7mkkn",
                                            "data-framer-name": "Image (Right)",
                                            name: "Image (Right)",
                                            style: {
                                                transformPerspective: 1200
                                            }
                                        })
                                    })]
                                }), e(l, {
                                    breakpoint: s,
                                    overrides: {
                                        Hi8JQm8K9: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                sizes: "calc(min(100vw, 1200px) - 40px)",
                                                ...o(B)
                                            }
                                        }
                                    },
                                    children: e(C, {
                                        __framer__animate: {
                                            transition: Q
                                        },
                                        __framer__animateOnce: !0,
                                        __framer__enter: v,
                                        __framer__exit: E,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: .5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: "lazy",
                                            sizes: "calc(min(100vw, 1200px) - 80px)",
                                            ...o(B)
                                        },
                                        className: "framer-61w7ki",
                                        "data-framer-name": "Image",
                                        name: "Image",
                                        style: {
                                            transformPerspective: 1200
                                        }
                                    })
                                })]
                            }), a(R, {
                                __framer__animate: {
                                    transition: g
                                },
                                __framer__animateOnce: !0,
                                __framer__enter: oe,
                                __framer__exit: Qe,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: .5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-14q8rqj",
                                "data-framer-name": "Challenges",
                                name: "Challenges",
                                style: {
                                    transformPerspective: 1200
                                },
                                children: [a("div", {
                                    className: "framer-10qujvi",
                                    "data-framer-name": "Challenges",
                                    name: "Challenges",
                                    children: [e(c, {
                                        __fromCanvasComponent: !0,
                                        children: e(m, {
                                            children: e("p", {
                                                className: "framer-styles-preset-1n7ng81",
                                                "data-styles-preset": "bxP2b_0Ko",
                                                children: "Challenges"
                                            })
                                        }),
                                        className: "framer-dg6yi2",
                                        "data-framer-name": "Title",
                                        fonts: ["Inter"],
                                        name: "Title",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(c, {
                                        __fromCanvasComponent: !0,
                                        children: e(m, {
                                            children: e("p", {
                                                className: "framer-styles-preset-1n7ng81",
                                                "data-styles-preset": "bxP2b_0Ko",
                                                style: {
                                                    "--framer-text-color": "var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115))"
                                                },
                                                children: "Rover offers users a seamless and intuitive experience, with features such as instant money transfers, budgeting tools, and investment opportunities all within a single app. The incorporation of advanced security measures ensures that users' financial information is protected at all times. Moreover, Rover's sleek design and user-friendly interface have received widespread acclaim, positioning it as a leading contender in the competitive finance app market. Overall, Rover has transformed the way users interact with their money, making financial management simpler, smarter, and more accessible than ever before."
                                            })
                                        }),
                                        className: "framer-4t0pcu",
                                        "data-framer-name": "Challenges",
                                        fonts: ["Inter"],
                                        name: "Challenges",
                                        text: fr,
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })]
                                })]
                            })]
                        }), a("div", {
                            className: "framer-1yjppp9",
                            "data-framer-name": "Related Projects",
                            name: "Related Projects",
                            children: [a("div", {
                                className: "framer-51oanl",
                                "data-framer-name": "Other Projects",
                                name: "Other Projects",
                                children: [e(tr, {
                                    __framer__animate: {
                                        transition: Q
                                    },
                                    __framer__animateOnce: !0,
                                    __framer__enter: v,
                                    __framer__exit: E,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: e(m, {
                                        children: a("h3", {
                                            className: "framer-styles-preset-1q1tllb",
                                            "data-styles-preset": "IOEcq6nbj",
                                            children: [e("span", {
                                                style: {
                                                    "--framer-text-color": "var(--token-06538032-c0a4-4346-b17b-14a1de931108, rgb(113, 112, 115))"
                                                },
                                                children: "Other "
                                            }), "projects"]
                                        })
                                    }),
                                    className: "framer-1cmgdf2",
                                    fonts: ["Inter"],
                                    style: {
                                        transformPerspective: 1200
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), e(ae, {
                                    links: [{
                                        href: {
                                            webPageId: "fGRtGn2hR"
                                        },
                                        implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            webPageId: "fGRtGn2hR"
                                        },
                                        implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            webPageId: "fGRtGn2hR"
                                        },
                                        implicitPathVariables: void 0
                                    }],
                                    children: n => e(j, {
                                        children: e(ir, {
                                            __framer__animate: {
                                                transition: g
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: v,
                                            __framer__exit: A,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: .5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: "framer-vos8j3-container",
                                            style: {
                                                transformPerspective: 1200
                                            },
                                            children: e(l, {
                                                breakpoint: s,
                                                overrides: {
                                                    Hi8JQm8K9: {
                                                        PnO3OYt7r: n[2]
                                                    },
                                                    KZIq8cYyN: {
                                                        PnO3OYt7r: n[1]
                                                    }
                                                },
                                                children: e(_e, {
                                                    b_W5AvWzW: "View All",
                                                    fJtjEwYlK: "CalendarPlus",
                                                    height: "100%",
                                                    id: "psrT2nhXS",
                                                    layoutId: "psrT2nhXS",
                                                    lVoRmzQeF: !1,
                                                    PnO3OYt7r: n[0],
                                                    UZvmDPR6t: !0,
                                                    variant: "Hy8wLciUI",
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    })
                                })]
                            }), e(R, {
                                __framer__animate: {
                                    transition: g
                                },
                                __framer__animateOnce: !0,
                                __framer__enter: v,
                                __framer__exit: A,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: .5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-8mkz8q",
                                style: {
                                    transformPerspective: 1200
                                },
                                children: e(Ae, {
                                    children: e(ta, {
                                        query: {
                                            from: {
                                                alias: "default",
                                                data: we,
                                                type: "Collection"
                                            },
                                            limit: {
                                                type: "LiteralValue",
                                                value: 2
                                            },
                                            select: [{
                                                collection: "default",
                                                name: "eqfqUBAEO",
                                                type: "Identifier"
                                            }, {
                                                collection: "default",
                                                name: "VZ8KJACVN",
                                                type: "Identifier"
                                            }, {
                                                collection: "default",
                                                name: "y_wIuADU_",
                                                type: "Identifier"
                                            }, {
                                                collection: "default",
                                                name: "kfjd9Ya4_",
                                                type: "Identifier"
                                            }, {
                                                collection: "default",
                                                name: "lL7OOh74T",
                                                type: "Identifier"
                                            }, {
                                                collection: "default",
                                                name: "Ia_oYNfo3",
                                                type: "Identifier"
                                            }, {
                                                collection: "default",
                                                name: "id",
                                                type: "Identifier"
                                            }],
                                            where: {
                                                operator: "not",
                                                type: "UnaryOperation",
                                                value: {
                                                    left: {
                                                        collection: "default",
                                                        name: "lL7OOh74T",
                                                        type: "Identifier"
                                                    },
                                                    operator: "==",
                                                    right: {
                                                        type: "LiteralValue",
                                                        value: H
                                                    },
                                                    type: "BinaryOperation"
                                                }
                                            }
                                        },
                                        children: (n, x, pe) => e(Re, {
                                            children: n.map(({ eqfqUBAEO: S, VZ8KJACVN: W, y_wIuADU_: dr, kfjd9Ya4_: pr, lL7OOh74T: ur, Ia_oYNfo3: hr, id: je }, ya) => e(z, {
                                                id: `DbEeTqp83-${je}`,
                                                children: e(Ye.Provider, {
                                                    value: {
                                                        eqfqUBAEO: S
                                                    },
                                                    children: e(ae, {
                                                        links: [{
                                                            href: {
                                                                pathVariables: {
                                                                    eqfqUBAEO: S
                                                                },
                                                                webPageId: "MkaaTZygt"
                                                            },
                                                            implicitPathVariables: void 0
                                                        }, {
                                                            href: {
                                                                pathVariables: {
                                                                    eqfqUBAEO: S
                                                                },
                                                                webPageId: "MkaaTZygt"
                                                            },
                                                            implicitPathVariables: void 0
                                                        }, {
                                                            href: {
                                                                pathVariables: {
                                                                    eqfqUBAEO: S
                                                                },
                                                                webPageId: "MkaaTZygt"
                                                            },
                                                            implicitPathVariables: void 0
                                                        }],
                                                        children: ue => e(j, {
                                                            children: e(F, {
                                                                className: "framer-1n0r390-container",
                                                                whileHover: aa,
                                                                children: e(l, {
                                                                    breakpoint: s,
                                                                    overrides: {
                                                                        Hi8JQm8K9: {
                                                                            XjkTk7R5a: ue[2]
                                                                        },
                                                                        KZIq8cYyN: {
                                                                            XjkTk7R5a: ue[1]
                                                                        }
                                                                    },
                                                                    children: e(Se, {
                                                                        height: "100%",
                                                                        id: "QKfRP6tur",
                                                                        Jx4BuwdB1: o(pr),
                                                                        kHidhWEAZ: o(dr),
                                                                        layoutId: "QKfRP6tur",
                                                                        lf8sQqtMz: o(W),
                                                                        style: {
                                                                            width: "100%"
                                                                        },
                                                                        Sx6Oq4i5H: hr,
                                                                        width: "100%",
                                                                        XjkTk7R5a: ue[0],
                                                                        zeBHfhhT2: ur
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            }, je))
                                        })
                                    })
                                })
                            })]
                        }), e("div", {
                            className: "framer-1xhdmsa",
                            "data-framer-name": "Footer",
                            name: "Footer",
                            children: e(j, {
                                children: e(ir, {
                                    __framer__animate: {
                                        transition: mr
                                    },
                                    __framer__animateOnce: !0,
                                    __framer__enter: ia,
                                    __framer__exit: na,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-p4r72o-container",
                                    style: {
                                        transformPerspective: 1200
                                    },
                                    children: e(l, {
                                        breakpoint: s,
                                        overrides: {
                                            Hi8JQm8K9: {
                                                variant: "imnebtjsk"
                                            },
                                            KZIq8cYyN: {
                                                variant: "uo5u8vAKR"
                                            }
                                        },
                                        children: e(be, {
                                            height: "100%",
                                            id: "L6rK_o1mj",
                                            layoutId: "L6rK_o1mj",
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
                        className: O(nr, ...Ie),
                        id: "overlay"
                    })]
                })
            })
    })
    , sa = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", `.${Me.bodyClassName}-framer-MvuQS { background: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, rgb(255, 255, 255)); }`, ".framer-MvuQS.framer-gtkqtx, .framer-MvuQS .framer-gtkqtx { display: block; }", ".framer-MvuQS.framer-10re34y { align-content: center; align-items: center; background-color: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }", ".framer-MvuQS .framer-hn9ru4-container { flex: none; height: auto; left: 40px; position: fixed; top: 40px; width: auto; z-index: 10; }", ".framer-MvuQS .framer-1tsy8gr-container { flex: none; height: auto; left: 50%; position: fixed; top: 40px; transform: translateX(-50%); width: auto; z-index: 9; }", ".framer-MvuQS .framer-hs6bui-container { flex: none; height: auto; position: fixed; right: 40px; top: 40px; width: auto; z-index: 3; }", ".framer-MvuQS .framer-fknpgo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 120px 40px 40px 40px; position: relative; width: 100%; }", ".framer-MvuQS .framer-1e3j79w { aspect-ratio: 2.036363636363636 / 1; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 550px); position: relative; width: 1px; }", ".framer-MvuQS .framer-1ovgega { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1200px; padding: 0px 40px 0px 40px; position: relative; width: 100%; }", ".framer-MvuQS .framer-1wfkdg0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 140px 0px; position: relative; width: 100%; }", ".framer-MvuQS .framer-juyjv0 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-MvuQS .framer-n34gtj { aspect-ratio: 1 / 1; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; flex: none; height: 60px; overflow: visible; position: relative; width: var(--framer-aspect-ratio-supported, 60px); }", ".framer-MvuQS .framer-s0dtq1 { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 2; }", ".framer-MvuQS .framer-mi1jxd { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 2; }", ".framer-MvuQS .framer-1pxbh0x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 60px 0px; position: relative; width: 100%; }", ".framer-MvuQS .framer-9ivify { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-MvuQS .framer-u1svxc, .framer-MvuQS .framer-3dbz3i { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-MvuQS .framer-1lkcoi4, .framer-MvuQS .framer-16dx4lt, .framer-MvuQS .framer-1kwr0ll, .framer-MvuQS .framer-ypcri9 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-MvuQS .framer-truhyy { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-MvuQS .framer-1f9exgi, .framer-MvuQS .framer-1snfj5l, .framer-MvuQS .framer-10qujvi { align-content: flex-end; align-items: flex-end; background-color: #ffffff; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-MvuQS .framer-umveb3, .framer-MvuQS .framer-z93ay5, .framer-MvuQS .framer-1kdpbv4, .framer-MvuQS .framer-6p5b59, .framer-MvuQS .framer-dg6yi2, .framer-MvuQS .framer-4t0pcu { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-MvuQS .framer-4ro4ek, .framer-MvuQS .framer-6r923n { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-MvuQS .framer-17ilmd4, .framer-MvuQS .framer-axxvbp, .framer-MvuQS .framer-61w7ki { aspect-ratio: 1.7230769230769232 / 1; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; flex: none; height: var(--framer-aspect-ratio-supported, 650px); position: relative; width: 100%; }", ".framer-MvuQS .framer-10xnvmn, .framer-MvuQS .framer-1s5xpk5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-MvuQS .framer-6hu2iy, .framer-MvuQS .framer-j4rlfk, .framer-MvuQS .framer-1k0ca4y, .framer-MvuQS .framer-1o7mkkn { aspect-ratio: 1 / 1; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 550px); position: relative; width: 1px; }", ".framer-MvuQS .framer-emfn9p, .framer-MvuQS .framer-14q8rqj { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 80px 0px 80px 0px; position: relative; width: 100%; }", ".framer-MvuQS .framer-9sncx7, .framer-MvuQS .framer-3s038 { align-self: stretch; background-color: #ffffff; flex: 1 0 0px; height: auto; overflow: hidden; position: relative; width: 1px; }", ".framer-MvuQS .framer-1yjppp9 { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 1200px; overflow: hidden; padding: 40px; position: relative; width: 100%; }", ".framer-MvuQS .framer-51oanl { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-MvuQS .framer-1cmgdf2 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-MvuQS .framer-vos8j3-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-MvuQS .framer-8mkz8q { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 1200px; padding: 0px; position: relative; width: 100%; }", ".framer-MvuQS .framer-1n0r390-container, .framer-MvuQS .framer-p4r72o-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }", ".framer-MvuQS .framer-1xhdmsa { align-content: center; align-items: center; background-color: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, #ffffff); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-MvuQS.framer-10re34y, .framer-MvuQS .framer-fknpgo, .framer-MvuQS .framer-1ovgega, .framer-MvuQS .framer-1wfkdg0, .framer-MvuQS .framer-juyjv0, .framer-MvuQS .framer-1pxbh0x, .framer-MvuQS .framer-9ivify, .framer-MvuQS .framer-u1svxc, .framer-MvuQS .framer-truhyy, .framer-MvuQS .framer-3dbz3i, .framer-MvuQS .framer-1f9exgi, .framer-MvuQS .framer-4ro4ek, .framer-MvuQS .framer-10xnvmn, .framer-MvuQS .framer-emfn9p, .framer-MvuQS .framer-1snfj5l, .framer-MvuQS .framer-6r923n, .framer-MvuQS .framer-1s5xpk5, .framer-MvuQS .framer-14q8rqj, .framer-MvuQS .framer-10qujvi, .framer-MvuQS .framer-1yjppp9, .framer-MvuQS .framer-8mkz8q, .framer-MvuQS .framer-1xhdmsa { gap: 0px; } .framer-MvuQS.framer-10re34y > *, .framer-MvuQS .framer-1ovgega > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-MvuQS.framer-10re34y > :first-child, .framer-MvuQS .framer-1ovgega > :first-child, .framer-MvuQS .framer-9ivify > :first-child, .framer-MvuQS .framer-u1svxc > :first-child, .framer-MvuQS .framer-truhyy > :first-child, .framer-MvuQS .framer-3dbz3i > :first-child, .framer-MvuQS .framer-1f9exgi > :first-child, .framer-MvuQS .framer-4ro4ek > :first-child, .framer-MvuQS .framer-1snfj5l > :first-child, .framer-MvuQS .framer-6r923n > :first-child, .framer-MvuQS .framer-10qujvi > :first-child, .framer-MvuQS .framer-1yjppp9 > :first-child { margin-top: 0px; } .framer-MvuQS.framer-10re34y > :last-child, .framer-MvuQS .framer-1ovgega > :last-child, .framer-MvuQS .framer-9ivify > :last-child, .framer-MvuQS .framer-u1svxc > :last-child, .framer-MvuQS .framer-truhyy > :last-child, .framer-MvuQS .framer-3dbz3i > :last-child, .framer-MvuQS .framer-1f9exgi > :last-child, .framer-MvuQS .framer-4ro4ek > :last-child, .framer-MvuQS .framer-1snfj5l > :last-child, .framer-MvuQS .framer-6r923n > :last-child, .framer-MvuQS .framer-10qujvi > :last-child, .framer-MvuQS .framer-1yjppp9 > :last-child { margin-bottom: 0px; } .framer-MvuQS .framer-fknpgo > *, .framer-MvuQS .framer-1pxbh0x > *, .framer-MvuQS .framer-1xhdmsa > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-MvuQS .framer-fknpgo > :first-child, .framer-MvuQS .framer-1wfkdg0 > :first-child, .framer-MvuQS .framer-juyjv0 > :first-child, .framer-MvuQS .framer-1pxbh0x > :first-child, .framer-MvuQS .framer-10xnvmn > :first-child, .framer-MvuQS .framer-emfn9p > :first-child, .framer-MvuQS .framer-1s5xpk5 > :first-child, .framer-MvuQS .framer-14q8rqj > :first-child, .framer-MvuQS .framer-8mkz8q > :first-child, .framer-MvuQS .framer-1xhdmsa > :first-child { margin-left: 0px; } .framer-MvuQS .framer-fknpgo > :last-child, .framer-MvuQS .framer-1wfkdg0 > :last-child, .framer-MvuQS .framer-juyjv0 > :last-child, .framer-MvuQS .framer-1pxbh0x > :last-child, .framer-MvuQS .framer-10xnvmn > :last-child, .framer-MvuQS .framer-emfn9p > :last-child, .framer-MvuQS .framer-1s5xpk5 > :last-child, .framer-MvuQS .framer-14q8rqj > :last-child, .framer-MvuQS .framer-8mkz8q > :last-child, .framer-MvuQS .framer-1xhdmsa > :last-child { margin-right: 0px; } .framer-MvuQS .framer-1wfkdg0 > *, .framer-MvuQS .framer-juyjv0 > *, .framer-MvuQS .framer-10xnvmn > *, .framer-MvuQS .framer-emfn9p > *, .framer-MvuQS .framer-1s5xpk5 > *, .framer-MvuQS .framer-14q8rqj > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-MvuQS .framer-9ivify > *, .framer-MvuQS .framer-1yjppp9 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-MvuQS .framer-u1svxc > *, .framer-MvuQS .framer-3dbz3i > *, .framer-MvuQS .framer-1f9exgi > *, .framer-MvuQS .framer-1snfj5l > *, .framer-MvuQS .framer-10qujvi > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-MvuQS .framer-truhyy > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-MvuQS .framer-4ro4ek > *, .framer-MvuQS .framer-6r923n > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-MvuQS .framer-8mkz8q > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } }", "@media (min-width: 1200px) { .framer-MvuQS .hidden-10re34y { display: none !important; } }", `@media (min-width: 810px) and (max-width: 1199px) { .framer-MvuQS .hidden-rgv0ak { display: none !important; } .${Me.bodyClassName}-framer-MvuQS { background: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, rgb(255, 255, 255)); } .framer-MvuQS.framer-10re34y { width: 810px; } .framer-MvuQS .framer-1e3j79w { aspect-ratio: 2.0277777777777777 / 1; height: var(--framer-aspect-ratio-supported, 360px); } .framer-MvuQS .framer-17ilmd4, .framer-MvuQS .framer-axxvbp, .framer-MvuQS .framer-61w7ki { aspect-ratio: 1.6222222222222222 / 1; height: var(--framer-aspect-ratio-supported, 450px); } .framer-MvuQS .framer-6hu2iy, .framer-MvuQS .framer-j4rlfk, .framer-MvuQS .framer-1k0ca4y, .framer-MvuQS .framer-1o7mkkn { height: var(--framer-aspect-ratio-supported, 355px); } .framer-MvuQS .framer-8mkz8q { gap: 20px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-MvuQS .framer-8mkz8q { gap: 0px; } .framer-MvuQS .framer-8mkz8q > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-MvuQS .framer-8mkz8q > :first-child { margin-left: 0px; } .framer-MvuQS .framer-8mkz8q > :last-child { margin-right: 0px; } }}`, `@media (max-width: 809px) { .framer-MvuQS .hidden-1h08ztg { display: none !important; } .${Me.bodyClassName}-framer-MvuQS { background: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, rgb(255, 255, 255)); } .framer-MvuQS.framer-10re34y { width: 390px; } .framer-MvuQS .framer-hn9ru4-container { left: 20px; top: 35px; } .framer-MvuQS .framer-1tsy8gr-container { left: 0px; right: 0px; top: 35px; transform: unset; width: unset; } .framer-MvuQS .framer-fknpgo { flex-direction: column; padding: 100px 20px 20px 20px; } .framer-MvuQS .framer-1e3j79w { aspect-ratio: 1.4583333333333333 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 137px); width: 100%; } .framer-MvuQS .framer-1ovgega { padding: 0px 20px 0px 20px; } .framer-MvuQS .framer-1wfkdg0 { flex-direction: column; } .framer-MvuQS .framer-juyjv0, .framer-MvuQS .framer-mi1jxd, .framer-MvuQS .framer-9ivify, .framer-MvuQS .framer-1f9exgi, .framer-MvuQS .framer-1n0r390-container, .framer-MvuQS .framer-p4r72o-container { flex: none; width: 100%; } .framer-MvuQS .framer-1pxbh0x { flex-direction: column; gap: 40px; } .framer-MvuQS .framer-17ilmd4, .framer-MvuQS .framer-axxvbp, .framer-MvuQS .framer-61w7ki { aspect-ratio: 1.4583333333333333 / 1; height: var(--framer-aspect-ratio-supported, 137px); } .framer-MvuQS .framer-6hu2iy, .framer-MvuQS .framer-j4rlfk, .framer-MvuQS .framer-1k0ca4y, .framer-MvuQS .framer-1o7mkkn { height: var(--framer-aspect-ratio-supported, 200px); } .framer-MvuQS .framer-1yjppp9 { padding: 20px; } .framer-MvuQS .framer-8mkz8q { flex-direction: column; gap: 20px; } .framer-MvuQS .framer-1xhdmsa { flex-direction: column; padding: 20px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-MvuQS .framer-fknpgo, .framer-MvuQS .framer-1wfkdg0, .framer-MvuQS .framer-1pxbh0x, .framer-MvuQS .framer-8mkz8q, .framer-MvuQS .framer-1xhdmsa { gap: 0px; } .framer-MvuQS .framer-fknpgo > *, .framer-MvuQS .framer-1xhdmsa > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-MvuQS .framer-fknpgo > :first-child, .framer-MvuQS .framer-1wfkdg0 > :first-child, .framer-MvuQS .framer-1pxbh0x > :first-child, .framer-MvuQS .framer-8mkz8q > :first-child, .framer-MvuQS .framer-1xhdmsa > :first-child { margin-top: 0px; } .framer-MvuQS .framer-fknpgo > :last-child, .framer-MvuQS .framer-1wfkdg0 > :last-child, .framer-MvuQS .framer-1pxbh0x > :last-child, .framer-MvuQS .framer-8mkz8q > :last-child, .framer-MvuQS .framer-1xhdmsa > :last-child { margin-bottom: 0px; } .framer-MvuQS .framer-1wfkdg0 > *, .framer-MvuQS .framer-8mkz8q > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-MvuQS .framer-1pxbh0x > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } }}`, ...Ze, ...er, ...Ke]
    , me = re(fa, sa, "framer-MvuQS")
    , Aa = me;
me.displayName = "work";
me.defaultProps = {
    height: 6321.5,
    width: 1200
};
te(me, [{
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
}, ...Fr, ...Rr, ...Er, ...zr, ...Or, ...Lr, ...ie(We), ...ie($e), ...ie(Ue)], {
    supportsExplicitInterCodegen: !0
});
var Ya = {
    exports: {
        Props: {
            type: "tsType",
            annotations: {
                framerContractVersion: "1"
            }
        },
        default: {
            type: "reactComponent",
            name: "FramerMkaaTZygt",
            slots: [],
            annotations: {
                framerIntrinsicHeight: "6321.5",
                framerDisplayContentsDiv: "false",
                framerImmutableVariables: "true",
                framerIntrinsicWidth: "1200",
                framerComponentViewportWidth: "true",
                framerContractVersion: "1",
                framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"KZIq8cYyN":{"layout":["fixed","auto"]},"Hi8JQm8K9":{"layout":["fixed","auto"]}}}',
                framerResponsiveScreen: ""
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
export { Ya as __FramerMetadata__, Aa as default };
//# sourceMappingURL=ZvYUXglG_AfUrTzm3XDEuURrjmmU8GJRJY58BRB1V3o.DRNHBJGS.mjs.map
