import { a as ea } from "./chunk-W3LQSTL7.mjs";
import { a as Na } from "./chunk-4HHC2VHD.mjs";
import { a as Aa, b as Sa, c as Da } from "./chunk-DFDKHUND.mjs";
import { a as qa, b as Ia, c as Pa } from "./chunk-D2J4TU2J.mjs";
import { f as J, j as U, o as $, v as aa } from "./chunk-2MTAU4LG.mjs";
import "./chunk-42U43NKG.mjs";
import { A as j, Ea as Ra, Ia as _a, Ka as ja, P as Ta, Pa as Q, Q as C, Qa as B, Ua as V, Va as F, W as w, Z as ka, aa as q, ba as Ea, c as E, ga as z, h as S, ia as L, ka as za, l as ba, n as D, oa as Ba, p as wa, pa as Fa, q as va, r as N, sa as f, ta as Y, v as a, w as b, xa as t, y as Z, z as u, za as i } from "./chunk-NV2CJCYN.mjs";
import "./chunk-JR5VT52U.mjs";
import "./chunk-RIUMFBNJ.mjs";
var ie = {
    Lq7qlHyRb: {
        hover: !0
    }
}
    , ne = ["Lq7qlHyRb"]
    , oe = "framer-Da0As"
    , se = {
        Lq7qlHyRb: "framer-v-1tmtg76"
    };
function Ca(e, ...r) {
    let m = {};
    return r?.forEach(o => o && Object.assign(m, e[o])),
        m
}
var de = {
    default: {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    }
}
    , ta = e => typeof e == "object" && e !== null && typeof e.src == "string" ? e : typeof e == "string" ? {
        src: e
    } : void 0
    , me = {
        delay: 0,
        duration: .35,
        ease: [.44, 0, .5, 1],
        type: "tween"
    }
    , le = {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: me
    }
    , fe = ({ value: e, children: r }) => {
        let m = ba(Z)
            , o = e ?? m.transition
            , l = va(() => ({
                ...m,
                transition: o
            }), [JSON.stringify(o)]);
        return a(Z.Provider, {
            value: l,
            children: r
        })
    }
    , pe = ({ height: e, iconImage: r, id: m, link: o, tagline: l, thumbnailImage: p, thumbnailImageHover: c, title: g, width: M, ...h }) => {
        var v, T;
        return {
            ...h,
            Jx4BuwdB1: r ?? h.Jx4BuwdB1,
            kHidhWEAZ: c ?? h.kHidhWEAZ,
            lf8sQqtMz: p ?? h.lf8sQqtMz,
            Sx6Oq4i5H: (v = l ?? h.Sx6Oq4i5H) !== null && v !== void 0 ? v : "Tagline",
            XjkTk7R5a: o ?? h.XjkTk7R5a,
            zeBHfhhT2: (T = g ?? h.zeBHfhhT2) !== null && T !== void 0 ? T : "Title"
        }
    }
    , ce = (e, r) => r.join("-") + e.layoutDependency
    , he = S(function (e, r) {
        let { activeLocale: m, setLocale: o } = C()
            , { style: l, className: p, layoutId: c, variant: g, XjkTk7R5a: M, lf8sQqtMz: h, kHidhWEAZ: v, Jx4BuwdB1: T, zeBHfhhT2: xa, Sx6Oq4i5H: ua, ...ga } = pe(e)
            , { baseVariant: P, classNames: s, gestureVariant: O, setGestureState: k, setVariant: Ya, transition: X, variants: W } = ja({
                cycleOrder: ne,
                defaultVariant: "Lq7qlHyRb",
                enabledGestures: ie,
                transitions: de,
                variant: g,
                variantClassNames: se
            })
            , x = ce(e, W)
            , G = N(null)
            , A = D()
            , d = [];
        return a(j, {
            id: c ?? A,
            children: a(fe, {
                value: X,
                children: a(Fa, {
                    href: M,
                    children: b(u.a, {
                        ...ga,
                        animate: W,
                        className: `${q(oe, ...d, "framer-1tmtg76", p, s)} framer-1o1tuvz`,
                        "data-framer-name": "Card",
                        initial: g,
                        layoutDependency: x,
                        layoutId: "Lq7qlHyRb",
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
                        ref: r ?? G,
                        style: {
                            ...l
                        },
                        ...Ca({
                            "Lq7qlHyRb-hover": {
                                "data-framer-name": void 0
                            }
                        }, P, O),
                        children: [a(Q, {
                            background: {
                                alt: "",
                                fit: "fill",
                                sizes: "min(300px, 100vw)",
                                ...ta(h)
                            },
                            className: "framer-10qccwn",
                            "data-border": !0,
                            "data-framer-name": "Thumbnail",
                            layoutDependency: x,
                            layoutId: "cbg8fY2ob",
                            style: {
                                "--border-bottom-width": "1px",
                                "--border-color": "rgba(212, 212, 212, 0.6)",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                borderBottomLeftRadius: 24,
                                borderBottomRightRadius: 24,
                                borderTopLeftRadius: 24,
                                borderTopRightRadius: 24
                            },
                            ...Ca({
                                "Lq7qlHyRb-hover": {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        sizes: "min(300px, 100vw)",
                                        ...ta(v)
                                    },
                                    whileHover: le
                                }
                            }, P, O)
                        }), b(u.div, {
                            className: "framer-doj0pp",
                            "data-framer-name": "Project Information",
                            layoutDependency: x,
                            layoutId: "rFNQrkcWF",
                            children: [a(Q, {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1024,
                                    intrinsicWidth: 1024,
                                    pixelHeight: 1024,
                                    pixelWidth: 1024,
                                    sizes: "40px",
                                    ...ta(T)
                                },
                                className: "framer-g3ijii",
                                "data-framer-name": "Icon",
                                layoutDependency: x,
                                layoutId: "zwHVySQTM",
                                style: {
                                    borderBottomLeftRadius: 8,
                                    borderBottomRightRadius: 8,
                                    borderTopLeftRadius: 8,
                                    borderTopRightRadius: 8
                                }
                            }), b(u.div, {
                                className: "framer-1o8ekji",
                                "data-framer-name": "Title and Tagline",
                                layoutDependency: x,
                                layoutId: "EGr8hx8YC",
                                children: [a(B, {
                                    __fromCanvasComponent: !0,
                                    children: a(E, {
                                        children: a(u.p, {
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
                                            children: "Arrival"
                                        })
                                    }),
                                    className: "framer-1e62rbn",
                                    "data-framer-name": "Title",
                                    fonts: ["GF;Inter Tight-500"],
                                    layoutDependency: x,
                                    layoutId: "gXYLImfrs",
                                    style: {
                                        "--extracted-r6o4lv": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                    },
                                    text: xa,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), a(B, {
                                    __fromCanvasComponent: !0,
                                    children: a(E, {
                                        children: a(u.p, {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "14px",
                                                "--framer-font-weight": "500",
                                                "--framer-letter-spacing": "0.1px",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5553722d-43da-4a73-a7ce-d2499d28fa68, rgb(135, 134, 138)))"
                                            },
                                            children: "Tagline"
                                        })
                                    }),
                                    className: "framer-1016n21",
                                    fonts: ["GF;Inter Tight-500"],
                                    layoutDependency: x,
                                    layoutId: "QWfl3epOd",
                                    style: {
                                        "--extracted-r6o4lv": "var(--token-5553722d-43da-4a73-a7ce-d2499d28fa68, rgb(135, 134, 138))"
                                    },
                                    text: ua,
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
    , xe = ['.framer-Da0As[data-border="true"]::after, .framer-Da0As [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-Da0As.framer-1o1tuvz, .framer-Da0As .framer-1o1tuvz { display: block; }", ".framer-Da0As.framer-1tmtg76 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: wrap; gap: 20px; height: auto; justify-content: flex-start; padding: 0px 0px 40px 0px; position: relative; text-decoration: none; width: 300px; }", ".framer-Da0As .framer-10qccwn { aspect-ratio: 0.6 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 500px); position: relative; width: 100%; }", ".framer-Da0As .framer-doj0pp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-Da0As .framer-g3ijii { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); overflow: hidden; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }", ".framer-Da0As .framer-1o8ekji { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }", ".framer-Da0As .framer-1e62rbn, .framer-Da0As .framer-1016n21 { flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Da0As.framer-1tmtg76, .framer-Da0As .framer-doj0pp, .framer-Da0As .framer-1o8ekji { gap: 0px; } .framer-Da0As.framer-1tmtg76 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-Da0As.framer-1tmtg76 > :first-child, .framer-Da0As .framer-1o8ekji > :first-child { margin-top: 0px; } .framer-Da0As.framer-1tmtg76 > :last-child, .framer-Da0As .framer-1o8ekji > :last-child { margin-bottom: 0px; } .framer-Da0As .framer-doj0pp > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-Da0As .framer-doj0pp > :first-child { margin-left: 0px; } .framer-Da0As .framer-doj0pp > :last-child { margin-right: 0px; } .framer-Da0As .framer-1o8ekji > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }"]
    , I = L(he, xe, "framer-Da0As")
    , ra = I;
I.displayName = "Work Card";
I.defaultProps = {
    height: 600.5,
    width: 300
};
ka(I, {
    XjkTk7R5a: {
        title: "Link",
        type: w.Link
    },
    lf8sQqtMz: {
        title: "Thumbnail Image",
        type: w.ResponsiveImage
    },
    kHidhWEAZ: {
        title: "Thumbnail Image (Hover)",
        type: w.ResponsiveImage
    },
    Jx4BuwdB1: {
        title: "Icon Image",
        type: w.ResponsiveImage
    },
    zeBHfhhT2: {
        defaultValue: "Title",
        title: "Title",
        type: w.String
    },
    Sx6Oq4i5H: {
        defaultValue: "Tagline",
        displayTextArea: !1,
        title: "Tagline",
        type: w.String
    }
});
V(I, [{
    family: "Inter Tight",
    style: "normal",
    url: "https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjPQ-qWSRToK8EPg.woff2",
    weight: "500"
}]);
var ue = F(J)
    , ge = F($)
    , ye = F(U)
    , be = F(ra)
    , we = F(aa)
    , ve = Ea(z);
var Te = {
    KTPTXS8Ms: "(min-width: 810px) and (max-width: 1199px)",
    Rx3dbch4G: "(max-width: 809px)",
    TEbWMZzp_: "(min-width: 1200px)"
}
    , ke = () => typeof document < "u"
    , La = "framer-aEdBF"
    , Ee = {
        KTPTXS8Ms: "framer-v-tznpr4",
        Rx3dbch4G: "framer-v-xa9w0x",
        TEbWMZzp_: "framer-v-louqoa"
    }
    , ze = {
        default: {
            duration: 0
        }
    }
    , ha = {
        damping: 30,
        delay: 0,
        mass: 2,
        stiffness: 100,
        type: "spring"
    }
    , Be = {
        opacity: 0,
        rotate: 0,
        scale: 1,
        transition: ha,
        x: 0,
        y: -10
    }
    , n = (e, r) => `perspective(1200px) ${r}`
    , R = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        transition: ha,
        x: 0,
        y: 0
    }
    , ia = {
        opacity: .001,
        rotate: 0,
        scale: 1,
        x: 0,
        y: -10
    }
    , Va = (e, r) => {
        if (!(!e || typeof e != "object"))
            return {
                ...e,
                alt: r
            }
    }
    , Xa = {
        damping: 30,
        delay: .3,
        mass: 2,
        stiffness: 100,
        type: "spring"
    }
    , Fe = {
        opacity: 0,
        rotate: 0,
        scale: 1,
        transition: Xa,
        x: 0,
        y: -30
    }
    , Ha = (e, r) => `perspective(1200px) translateX(-50%) ${r}`
    , na = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        transition: Xa,
        x: 0,
        y: 0
    }
    , oa = {
        opacity: .001,
        rotate: 0,
        scale: 1,
        x: 0,
        y: -30
    }
    , Wa = {
        damping: 30,
        delay: .6,
        mass: 2,
        stiffness: 100,
        type: "spring"
    }
    , Re = {
        opacity: 0,
        rotate: 0,
        scale: 1,
        transition: Wa,
        x: 0,
        y: -50
    }
    , Ma = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        transition: Wa,
        x: 0,
        y: 0
    }
    , Oa = {
        opacity: .001,
        rotate: 0,
        scale: 1,
        x: 0,
        y: -50
    }
    , _e = {
        opacity: 0,
        rotate: 0,
        scale: 1,
        transition: ha,
        x: 0,
        y: 60
    }
    , sa = {
        opacity: .001,
        rotate: 0,
        scale: 1,
        x: 0,
        y: 60
    }
    , Ga = {
        damping: 30,
        delay: .2,
        mass: 2,
        stiffness: 100,
        type: "spring"
    }
    , je = {
        opacity: 0,
        rotate: 0,
        scale: 1,
        transition: Ga,
        x: 0,
        y: 90
    }
    , da = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        transition: Ga,
        x: 0,
        y: 0
    }
    , ma = {
        opacity: .001,
        rotate: 0,
        scale: 1,
        x: 0,
        y: 90
    }
    , Ka = {
        damping: 30,
        delay: .4,
        mass: 2,
        stiffness: 100,
        type: "spring"
    }
    , qe = {
        opacity: 0,
        rotate: 0,
        scale: 1,
        transition: Ka,
        x: 0,
        y: 120
    }
    , la = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        transition: Ka,
        x: 0,
        y: 0
    }
    , fa = {
        opacity: .001,
        rotate: 0,
        scale: 1,
        x: 0,
        y: 120
    }
    , Ie = {
        delay: 0,
        duration: .35,
        ease: [.44, 0, .5, 1],
        type: "tween"
    }
    , Pe = {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: Ie,
        y: -20
    }
    , pa = e => typeof e == "object" && e !== null && typeof e.src == "string" ? e : typeof e == "string" ? {
        src: e
    } : void 0
    , Ae = ({ query: e, children: r }) => {
        let m = _a(e);
        return r(m)
    }
    , Se = {
        opacity: 0,
        rotate: 0,
        scale: 1,
        x: 0,
        y: 160
    }
    , Za = {
        delay: 0,
        duration: .3,
        ease: [.44, 0, .56, 1],
        type: "tween"
    }
    , De = {
        opacity: 0,
        rotate: 0,
        scale: 1,
        transition: Za,
        x: 0,
        y: 160
    }
    , ca = ea()
    , Ne = {
        Desktop: "TEbWMZzp_",
        Phone: "Rx3dbch4G",
        Tablet: "KTPTXS8Ms"
    }
    , Ce = ({ height: e, id: r, width: m, ...o }) => {
        var l, p;
        return {
            ...o,
            variant: (p = (l = Ne[o.variant]) !== null && l !== void 0 ? l : o.variant) !== null && p !== void 0 ? p : "TEbWMZzp_"
        }
    }
    , Le = S(function (e, r) {
        let { activeLocale: m, setLocale: o } = C()
            , { style: l, className: p, layoutId: c, variant: g, eqfqUBAEOOOx3LE_rL: M, VZ8KJACVNOOx3LE_rL: h, y_wIuADU_OOx3LE_rL: v, kfjd9Ya4_OOx3LE_rL: T, lL7OOh74TOOx3LE_rL: xa, Ia_oYNfo3OOx3LE_rL: ua, idOOx3LE_rL: ga, ...P } = Ce(e);
        wa(() => {
            let d = ea(void 0, m);
            if (document.title = d.title || "",
                d.viewport) {
                var y;
                (y = document.querySelector('meta[name="viewport"]')) === null || y === void 0 || y.setAttribute("content", d.viewport)
            }
            if (d.bodyClassName)
                return Array.from(document.body.classList).filter(_ => _.startsWith("framer-body-")).map(_ => document.body.classList.remove(_)),
                    document.body.classList.add(`${d.bodyClassName}-framer-aEdBF`),
                    () => {
                        document.body.classList.remove(`${d.bodyClassName}-framer-aEdBF`)
                    }
        }
            , [void 0, m]);
        let [s, O] = Ra(g, Te, !1)
            , k = void 0
            , Ya = ze.default
            , X = N(null)
            , W = Ta()
            , x = () => s === "Rx3dbch4G" ? !ke() : !0
            , G = D()
            , A = [Da, Pa];
        return a(za.Provider, {
            value: {
                primaryVariantId: "TEbWMZzp_",
                variantClassNames: Ee
            },
            children: b(j, {
                id: c ?? G,
                children: [b(u.div, {
                    ...P,
                    className: q(La, ...A, "framer-louqoa", p),
                    ref: r ?? X,
                    style: {
                        ...l
                    },
                    children: [a(Y, {
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
                        children: d => a(f, {
                            breakpoint: s,
                            overrides: {
                                KTPTXS8Ms: {
                                    "data-framer-appear-id": "rgoh68",
                                    animate: t("animate", "rgoh68", R, "tznpr4"),
                                    initial: t("initial", "rgoh68", ia, "tznpr4"),
                                    transformTemplate: i("rgoh68", n)
                                },
                                Rx3dbch4G: {
                                    "data-framer-appear-id": "12c9yrz",
                                    animate: t("animate", "12c9yrz", R, "xa9w0x"),
                                    initial: t("initial", "12c9yrz", ia, "xa9w0x"),
                                    transformTemplate: i("12c9yrz", n)
                                }
                            },
                            children: a(z, {
                                animate: t("animate", "ocekcd", R, "louqoa"),
                                className: "framer-ocekcd-container",
                                "data-framer-appear-id": "ocekcd",
                                "data-framer-name": "Process Logo",
                                exit: Be,
                                initial: t("initial", "ocekcd", ia, "louqoa"),
                                layoutScroll: !0,
                                name: "Process Logo",
                                transformTemplate: i("ocekcd", n),
                                children: a(f, {
                                    breakpoint: s,
                                    overrides: {
                                        KTPTXS8Ms: {
                                            ifUOndEDH: d[1],
                                            variant: "zWV8cxgzT"
                                        },
                                        Rx3dbch4G: {
                                            ifUOndEDH: d[2],
                                            variant: "zWV8cxgzT"
                                        }
                                    },
                                    children: a(J, {
                                        bXKDVwltS: Va({
                                            src: "https://framerusercontent.com/images/z7hVHMwW8KD8HamBNBKSVx55T0.png"
                                        }, ""),
                                        height: "100%",
                                        id: "IX1Cs7SOR",
                                        ifUOndEDH: d[0],
                                        l6Wo4ULiJ: "Process",
                                        layoutId: "IX1Cs7SOR",
                                        name: "Process Logo",
                                        variant: "sP4e3iZKf",
                                        width: "100%",
                                        YIltgZQMx: Va({
                                            src: "https://framerusercontent.com/images/ImiRltpaArpM8U7EiaG6I0bxE.png"
                                        }, "")
                                    })
                                })
                            })
                        })
                    }), a(f, {
                        breakpoint: s,
                        overrides: {
                            KTPTXS8Ms: {
                                "data-framer-appear-id": "1u7rgs0",
                                animate: t("animate", "1u7rgs0", na, "tznpr4"),
                                initial: t("initial", "1u7rgs0", oa, "tznpr4"),
                                transformTemplate: i("1u7rgs0", Ha)
                            },
                            Rx3dbch4G: {
                                "data-framer-appear-id": "1lzg9az",
                                animate: t("animate", "1lzg9az", na, "xa9w0x"),
                                initial: t("initial", "1lzg9az", oa, "xa9w0x"),
                                transformTemplate: i("1lzg9az", n)
                            }
                        },
                        children: a(z, {
                            animate: t("animate", "v6vun8", na, "louqoa"),
                            className: "framer-v6vun8-container",
                            "data-framer-appear-id": "v6vun8",
                            exit: Fe,
                            initial: t("initial", "v6vun8", oa, "louqoa"),
                            layoutScroll: !0,
                            transformTemplate: i("v6vun8", Ha),
                            children: a(f, {
                                breakpoint: s,
                                overrides: {
                                    KTPTXS8Ms: {
                                        variant: "zWjVcnPlS"
                                    },
                                    Rx3dbch4G: {
                                        style: {
                                            width: "100%"
                                        },
                                        variant: "xZMChLWbK"
                                    }
                                },
                                children: a($, {
                                    height: "100%",
                                    id: "nfGfyXsx9",
                                    layoutId: "nfGfyXsx9",
                                    variant: "ebLRlZjPs",
                                    width: "100%"
                                })
                            })
                        })
                    }), x() && a(f, {
                        breakpoint: s,
                        overrides: {
                            KTPTXS8Ms: {
                                "data-framer-appear-id": "fnxevw",
                                animate: t("animate", "fnxevw", Ma, "tznpr4"),
                                initial: t("initial", "fnxevw", Oa, "tznpr4"),
                                transformTemplate: i("fnxevw", n)
                            }
                        },

                    }), b("div", {
                        className: "framer-8zmbdq",
                        "data-framer-name": "Landing",
                        name: "Landing",
                        children: [a(f, {
                            breakpoint: s,
                            overrides: {
                                KTPTXS8Ms: {
                                    "data-framer-appear-id": "1nvxo90",
                                    animate: t("animate", "1nvxo90", R, "tznpr4"),
                                    initial: t("initial", "1nvxo90", sa, "tznpr4"),
                                    transformTemplate: i("1nvxo90", n)
                                },
                                Rx3dbch4G: {
                                    "data-framer-appear-id": "znr13v",
                                    animate: t("animate", "znr13v", R, "xa9w0x"),
                                    initial: t("initial", "znr13v", sa, "xa9w0x"),
                                    transformTemplate: i("znr13v", n)
                                }
                            },
                            children: a(B, {
                                __fromCanvasComponent: !0,
                                animate: t("animate", "1cwaf40", R, "louqoa"),
                                children: a(E, {
                                    children: a("h1", {
                                        className: "framer-styles-preset-1sgigkb",
                                        "data-styles-preset": "BRyT8PKiE",
                                        style: {
                                            "--framer-text-alignment": "center"
                                        },
                                        children: "Explore our works"
                                    })
                                }),
                                className: "framer-1cwaf40",
                                "data-framer-appear-id": "1cwaf40",
                                exit: _e,
                                initial: t("initial", "1cwaf40", sa, "louqoa"),
                                transformTemplate: i("1cwaf40", n),
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        }), a(f, {
                            breakpoint: s,
                            overrides: {
                                KTPTXS8Ms: {
                                    "data-framer-appear-id": "171h2kw",
                                    animate: t("animate", "171h2kw", da, "tznpr4"),
                                    initial: t("initial", "171h2kw", ma, "tznpr4"),
                                    transformTemplate: i("171h2kw", n)
                                },
                                Rx3dbch4G: {
                                    "data-framer-appear-id": "91ra4n",
                                    animate: t("animate", "91ra4n", da, "xa9w0x"),
                                    initial: t("initial", "91ra4n", ma, "xa9w0x"),
                                    transformTemplate: i("91ra4n", n)
                                }
                            },
                            children: a(B, {
                                __fromCanvasComponent: !0,
                                animate: t("animate", "euz0w0", da, "louqoa"),
                                children: a(E, {
                                    children: a("h5", {
                                        className: "framer-styles-preset-1jm41cg",
                                        "data-styles-preset": "TjJlMJ6w8",
                                        style: {
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "var(--token-5553722d-43da-4a73-a7ce-d2499d28fa68, rgb(135, 134, 138))"
                                        },
                                        children: "We partner with forward-thinking brands to create compelling stories that resonate deeply."
                                    })
                                }),
                                className: "framer-euz0w0",
                                "data-framer-appear-id": "euz0w0",
                                exit: je,
                                initial: t("initial", "euz0w0", ma, "louqoa"),
                                transformTemplate: i("euz0w0", n),
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        })]
                    }), a(f, {
                        breakpoint: s,
                        overrides: {
                            KTPTXS8Ms: {
                                "data-framer-appear-id": "cuhtzm",
                                animate: t("animate", "cuhtzm", la, "tznpr4"),
                                initial: t("initial", "cuhtzm", fa, "tznpr4"),
                                transformTemplate: i("cuhtzm", n)
                            },
                            Rx3dbch4G: {
                                "data-framer-appear-id": "1505wua",
                                animate: t("animate", "1505wua", la, "xa9w0x"),
                                initial: t("initial", "1505wua", fa, "xa9w0x"),
                                transformTemplate: i("1505wua", n)
                            }
                        },
                        children: a(u.div, {
                            animate: t("animate", "1l310om", la, "louqoa"),
                            className: "framer-1l310om",
                            "data-framer-appear-id": "1l310om",
                            exit: qe,
                            initial: t("initial", "1l310om", fa, "louqoa"),
                            transformTemplate: i("1l310om", n),
                            children: a(Ae, {
                                query: {
                                    from: {
                                        data: Na,
                                        type: "Collection"
                                    },
                                    select: [{
                                        name: "eqfqUBAEO",
                                        type: "Identifier"
                                    }, {
                                        name: "VZ8KJACVN",
                                        type: "Identifier"
                                    }, {
                                        name: "y_wIuADU_",
                                        type: "Identifier"
                                    }, {
                                        name: "kfjd9Ya4_",
                                        type: "Identifier"
                                    }, {
                                        name: "lL7OOh74T",
                                        type: "Identifier"
                                    }, {
                                        name: "Ia_oYNfo3",
                                        type: "Identifier"
                                    }, {
                                        name: "id",
                                        type: "Identifier"
                                    }]
                                },
                                children: d => d.map(({ eqfqUBAEO: y, VZ8KJACVN: _, y_wIuADU_: Qa, kfjd9Ya4_: Ja, lL7OOh74T: Ua, Ia_oYNfo3: $a, id: ya }, He) => a(j, {
                                    id: `OOx3LE_rL-${ya}`,
                                    children: a(Ba.Provider, {
                                        value: {
                                            eqfqUBAEO: y
                                        },
                                        children: a(Y, {
                                            links: [{
                                                href: {
                                                    pathVariables: {
                                                        eqfqUBAEO: y
                                                    },
                                                    webPageId: "MkaaTZygt"
                                                },
                                                implicitPathVariables: void 0
                                            }, {
                                                href: {
                                                    pathVariables: {
                                                        eqfqUBAEO: y
                                                    },
                                                    webPageId: "MkaaTZygt"
                                                },
                                                implicitPathVariables: void 0
                                            }, {
                                                href: {
                                                    pathVariables: {
                                                        eqfqUBAEO: y
                                                    },
                                                    webPageId: "MkaaTZygt"
                                                },
                                                implicitPathVariables: void 0
                                            }],
                                            children: K => a(z, {
                                                className: "framer-nheqb6-container",
                                                whileHover: Pe,
                                                children: a(f, {
                                                    breakpoint: s,
                                                    overrides: {
                                                        KTPTXS8Ms: {
                                                            XjkTk7R5a: K[1]
                                                        },
                                                        Rx3dbch4G: {
                                                            XjkTk7R5a: K[2]
                                                        }
                                                    },
                                                    children: a(ra, {
                                                        height: "100%",
                                                        id: "TsosVqfD4",
                                                        Jx4BuwdB1: pa(Ja),
                                                        kHidhWEAZ: pa(Qa),
                                                        layoutId: "TsosVqfD4",
                                                        lf8sQqtMz: pa(_),
                                                        style: {
                                                            width: "100%"
                                                        },
                                                        Sx6Oq4i5H: $a,
                                                        width: "100%",
                                                        XjkTk7R5a: K[0],
                                                        zeBHfhhT2: Ua
                                                    })
                                                })
                                            })
                                        })
                                    })
                                }, ya))
                            })
                        })
                    }), a("div", {
                        className: "framer-jtfj7h",
                        "data-framer-name": "Footer",
                        name: "Footer",
                        children: a(ve, {
                            __framer__animate: {
                                transition: Za
                            },
                            __framer__animateOnce: !0,
                            __framer__enter: Se,
                            __framer__exit: De,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: .5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-125gyrd-container",
                            transformTemplate: n,
                            children: a(f, {
                                breakpoint: s,
                                overrides: {
                                    KTPTXS8Ms: {
                                        variant: "uo5u8vAKR"
                                    },
                                    Rx3dbch4G: {
                                        variant: "imnebtjsk"
                                    }
                                },
                                children: a(aa, {
                                    height: "100%",
                                    id: "ptS9vb8F6",
                                    layoutId: "ptS9vb8F6",
                                    style: {
                                        width: "100%"
                                    },
                                    variant: "bp9Y39OvE",
                                    width: "100%"
                                })
                            })
                        })
                    })]
                }), a("div", {
                    className: q(La, ...A),
                    id: "overlay"
                })]
            })
        })
    })
    , Ve = ['.framer-aEdBF[data-border="true"]::after, .framer-aEdBF [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", `.${ca.bodyClassName}-framer-aEdBF { background: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, rgb(255, 255, 255)); }`, ".framer-aEdBF.framer-1se5jt2, .framer-aEdBF .framer-1se5jt2 { display: block; }", ".framer-aEdBF.framer-louqoa { align-content: center; align-items: center; background-color: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1200px; }", ".framer-aEdBF .framer-ocekcd-container { flex: none; height: auto; left: 40px; position: fixed; top: 40px; transform: perspective(1200px); width: auto; z-index: 10; }", ".framer-aEdBF .framer-v6vun8-container { flex: none; height: auto; left: 50%; position: fixed; top: 40px; transform: perspective(1200px) translateX(-50%); width: auto; z-index: 9; }", ".framer-aEdBF .framer-1y6wkzq-container { flex: none; height: auto; position: fixed; right: 40px; top: 40px; transform: perspective(1200px); width: auto; z-index: 3; }", ".framer-aEdBF .framer-8zmbdq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: center; max-width: 1200px; overflow: visible; padding: 180px 40px 80px 40px; position: relative; width: 100%; z-index: 1; }", ".framer-aEdBF .framer-1cwaf40 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; transform: perspective(1200px); white-space: pre; width: auto; }", ".framer-aEdBF .framer-euz0w0 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 500px; position: relative; transform: perspective(1200px); white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-aEdBF .framer-1l310om { display: grid; flex: none; gap: 40px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(200px, 1fr)); height: min-content; justify-content: center; padding: 0px 40px 0px 40px; position: relative; transform: perspective(1200px); width: 100%; }", ".framer-aEdBF .framer-nheqb6-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }", ".framer-aEdBF .framer-jtfj7h { align-content: center; align-items: center; background-color: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, #ffffff); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 80px 40px 40px 40px; position: relative; width: 100%; }", ".framer-aEdBF .framer-125gyrd-container { flex: 1 0 0px; height: auto; position: relative; transform: perspective(1200px); width: 1px; }", "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-aEdBF.framer-louqoa, .framer-aEdBF .framer-8zmbdq, .framer-aEdBF .framer-jtfj7h { gap: 0px; } .framer-aEdBF.framer-louqoa > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-aEdBF.framer-louqoa > :first-child, .framer-aEdBF .framer-8zmbdq > :first-child { margin-top: 0px; } .framer-aEdBF.framer-louqoa > :last-child, .framer-aEdBF .framer-8zmbdq > :last-child { margin-bottom: 0px; } .framer-aEdBF .framer-8zmbdq > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-aEdBF .framer-jtfj7h > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-aEdBF .framer-jtfj7h > :first-child { margin-left: 0px; } .framer-aEdBF .framer-jtfj7h > :last-child { margin-right: 0px; } }", "@media (min-width: 1200px) { .framer-aEdBF .hidden-louqoa { display: none !important; } }", `@media (min-width: 810px) and (max-width: 1199px) { .framer-aEdBF .hidden-tznpr4 { display: none !important; } .${ca.bodyClassName}-framer-aEdBF { background: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, rgb(255, 255, 255)); } .framer-aEdBF.framer-louqoa { width: 810px; } .framer-aEdBF .framer-1cwaf40 { max-width: 600px; white-space: pre-wrap; word-break: break-word; word-wrap: break-word; } .framer-aEdBF .framer-euz0w0 { max-width: 600px; } .framer-aEdBF .framer-1l310om { gap: 20px; grid-template-columns: repeat(3, minmax(200px, 1fr)); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-aEdBF .framer-1l310om { gap: 0px; } .framer-aEdBF .framer-1l310om > *, .framer-aEdBF .framer-1l310om > :first-child, .framer-aEdBF .framer-1l310om > :last-child { margin: 0px; } }}`, `@media (max-width: 809px) { .framer-aEdBF .hidden-xa9w0x { display: none !important; } .${ca.bodyClassName}-framer-aEdBF { background: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, rgb(255, 255, 255)); } .framer-aEdBF.framer-louqoa { width: 390px; } .framer-aEdBF .framer-ocekcd-container { left: 20px; top: 35px; } .framer-aEdBF .framer-v6vun8-container { left: 0px; right: 0px; top: 35px; transform: perspective(1200px); width: unset; } .framer-aEdBF .framer-1cwaf40 { max-width: 280px; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-aEdBF .framer-1l310om { gap: 20px; grid-template-columns: repeat(1, minmax(120px, 1fr)); padding: 0px 20px 0px 20px; } .framer-aEdBF .framer-jtfj7h { flex-direction: column; padding: 80px 20px 20px 20px; } .framer-aEdBF .framer-125gyrd-container { flex: none; width: 100%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-aEdBF .framer-1l310om, .framer-aEdBF .framer-jtfj7h { gap: 0px; } .framer-aEdBF .framer-1l310om > *, .framer-aEdBF .framer-1l310om > :first-child, .framer-aEdBF .framer-1l310om > :last-child { margin: 0px; } .framer-aEdBF .framer-jtfj7h > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-aEdBF .framer-jtfj7h > :first-child { margin-top: 0px; } .framer-aEdBF .framer-jtfj7h > :last-child { margin-bottom: 0px; } }}`, ...Sa, ...Ia]
    , H = L(Le, Ve, "framer-aEdBF")
    , nt = H;
H.displayName = "Page";
H.defaultProps = {
    height: 2015.5,
    width: 1200
};
V(H, [...ue, ...ge, ...ye, ...be, ...we, ...Aa, ...qa]);
var ot = {
    exports: {
        default: {
            type: "reactComponent",
            name: "FramerfGRtGn2hR",
            slots: [],
            annotations: {
                framerDisplayContentsDiv: "false",
                framerIntrinsicWidth: "1200",
                framerResponsiveScreen: "",
                framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"KTPTXS8Ms":{"layout":["fixed","auto"]},"Rx3dbch4G":{"layout":["fixed","auto"]}}}',
                framerContractVersion: "1",
                framerImmutableVariables: "true",
                framerIntrinsicHeight: "2015.5"
            }
        },
        Props: {
            type: "tsType",
            annotations: {
                framerContractVersion: "1"
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
export { ot as __FramerMetadata__, nt as default };
//# sourceMappingURL=83zHtU5pVgO18aLhxdxyAz-nvKf3h5iJxVEo6vO3DO8.YEXFMWZ5.mjs.map
