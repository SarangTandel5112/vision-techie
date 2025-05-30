import { a as me, b as ce, c as de } from "./chunk-DFDKHUND.mjs";
import { a as fe, b as le, c as oe } from "./chunk-D2J4TU2J.mjs";
import { f as q, g as re, h as te, i as ae, j as I, o as V, s as ie, t as ne, u as se, v as P } from "./chunk-2MTAU4LG.mjs";
import "./chunk-42U43NKG.mjs";
import { A as E, Ea as $, P as F, Q as K, Qa as x, T as z, Ua as ee, Va as h, aa as T, ba as L, c as m, ga as b, h as H, ia as O, ka as M, n as Z, p as j, r as y, sa as n, ta as J, v as e, w as o, xa as r, z as B, za as t } from "./chunk-NV2CJCYN.mjs";
import "./chunk-JR5VT52U.mjs";
import { a as S } from "./chunk-X5AWGAEJ.mjs";
import "./chunk-RIUMFBNJ.mjs";
var Re = h(q)
    , De = h(V)
    , We = h(I)
    , Xe = h(P)
    , Ae = L(b);
var Ce = {
    mo9BElk8N: "(min-width: 810px) and (max-width: 1199px)",
    NU5I9dQxa: "(min-width: 1200px)",
    XkhVUi1yU: "(max-width: 809px)"
}
    , Ye = () => typeof document < "u"
    , pe = "framer-bc3h6"
    , Qe = {
        mo9BElk8N: "framer-v-duraz8",
        NU5I9dQxa: "framer-v-r68n5q",
        XkhVUi1yU: "framer-v-5k2sj2"
    }
    , Ue = {
        default: {
            duration: 0
        }
    }
    , U = {
        damping: 30,
        delay: 0,
        mass: 2,
        stiffness: 100,
        type: "spring"
    }
    , Ge = {
        opacity: 0,
        rotate: 0,
        scale: 1,
        transition: U,
        x: 0,
        y: -10
    }
    , a = (l, s) => `perspective(1200px) ${s}`
    , c = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        transition: U,
        x: 0,
        y: 0
    }
    , _ = {
        opacity: .001,
        rotate: 0,
        scale: 1,
        x: 0,
        y: -10
    }
    , be = (l, s) => {
        if (!(!l || typeof l != "object"))
            return {
                ...l,
                alt: s
            }
    }
    , xe = {
        damping: 30,
        delay: .3,
        mass: 2,
        stiffness: 100,
        type: "spring"
    }
    , He = {
        opacity: 0,
        rotate: 0,
        scale: 1,
        transition: xe,
        x: 0,
        y: -30
    }
    , he = (l, s) => `perspective(1200px) translateX(-50%) ${s}`
    , R = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        transition: xe,
        x: 0,
        y: 0
    }
    , D = {
        opacity: .001,
        rotate: 0,
        scale: 1,
        x: 0,
        y: -30
    }
    , ue = {
        damping: 30,
        delay: .6,
        mass: 2,
        stiffness: 100,
        type: "spring"
    }
    , Ze = {
        opacity: 0,
        rotate: 0,
        scale: 1,
        transition: ue,
        x: 0,
        y: -50
    }
    , ge = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        transition: ue,
        x: 0,
        y: 0
    }
    , ye = {
        opacity: .001,
        rotate: 0,
        scale: 1,
        x: 0,
        y: -50
    }
    , je = {
        opacity: 0,
        rotate: 0,
        scale: 1,
        transition: U,
        x: 0,
        y: 60
    }
    , W = {
        opacity: .001,
        rotate: 0,
        scale: 1,
        x: 0,
        y: 60
    }
    , ke = {
        damping: 30,
        delay: .2,
        mass: 2,
        stiffness: 100,
        type: "spring"
    }
    , Be = {
        opacity: 0,
        rotate: 0,
        scale: 1,
        transition: ke,
        x: 0,
        y: 90
    }
    , X = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        transition: ke,
        x: 0,
        y: 0
    }
    , A = {
        opacity: .001,
        rotate: 0,
        scale: 1,
        x: 0,
        y: 90
    }
    , ve = {
        damping: 30,
        delay: .4,
        mass: 2,
        stiffness: 100,
        type: "spring"
    }
    , Ee = {
        opacity: 0,
        rotate: 0,
        scale: 1,
        transition: ve,
        x: 0,
        y: 120
    }
    , C = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        transition: ve,
        x: 0,
        y: 0
    }
    , Y = {
        opacity: .001,
        rotate: 0,
        scale: 1,
        x: 0,
        y: 120
    }
    , Fe = {
        opacity: 0,
        rotate: 0,
        scale: 1,
        x: 0,
        y: 160
    }
    , Ne = {
        delay: 0,
        duration: .3,
        ease: [.44, 0, .56, 1],
        type: "tween"
    }
    , Ke = {
        opacity: 0,
        rotate: 0,
        scale: 1,
        transition: Ne,
        x: 0,
        y: 160
    }
    , Q = S()
    , Le = {
        Desktop: "NU5I9dQxa",
        Phone: "XkhVUi1yU",
        Tablet: "mo9BElk8N"
    }
    , Oe = ({ height: l, id: s, width: k, ...g }) => {
        var d, p;
        return {
            ...g,
            variant: (p = (d = Le[g.variant]) !== null && d !== void 0 ? d : g.variant) !== null && p !== void 0 ? p : "NU5I9dQxa"
        }
    }
    , Me = H(function (l, s) {
        let { activeLocale: k, setLocale: g } = K()
            , { style: d, className: p, layoutId: v, variant: we, ...ze } = Oe(l);
        j(() => {
            let f = S(void 0, k);
            if (document.title = f.title || "",
                f.viewport) {
                var N;
                (N = document.querySelector('meta[name="viewport"]')) === null || N === void 0 || N.setAttribute("content", f.viewport)
            }
            if (f.bodyClassName)
                return Array.from(document.body.classList).filter(w => w.startsWith("framer-body-")).map(w => document.body.classList.remove(w)),
                    document.body.classList.add(`${f.bodyClassName}-framer-bc3h6`),
                    () => {
                        document.body.classList.remove(`${f.bodyClassName}-framer-bc3h6`)
                    }
        }
            , [void 0, k]);
        let [i, $e] = $(we, Ce, !1)
            , er = void 0
            , rr = Ue.default
            , Te = y(null)
            , tr = F()
            , qe = () => i === "XkhVUi1yU" ? !Ye() : !0
            , Ie = z("U_B_JUMef")
            , Ve = y(null)
            , Pe = z("IiPGPGp3g")
            , Se = y(null)
            , _e = Z()
            , G = [de, oe, se, ae];
        return e(M.Provider, {
            value: {
                primaryVariantId: "NU5I9dQxa",
                variantClassNames: Qe
            },
            children: o(E, {
                id: v ?? _e,
                children: [o(B.div, {
                    ...ze,
                    className: T(pe, ...G, "framer-r68n5q", p),
                    ref: s ?? Te,
                    style: {
                        ...d
                    },
                    children: [e(J, {
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
                        children: f => e(n, {
                            breakpoint: i,
                            overrides: {
                                mo9BElk8N: {
                                    "data-framer-appear-id": "1ikeer2",
                                    animate: r("animate", "1ikeer2", c, "duraz8"),
                                    initial: r("initial", "1ikeer2", _, "duraz8"),
                                    transformTemplate: t("1ikeer2", a)
                                },
                                XkhVUi1yU: {
                                    "data-framer-appear-id": "dbmozg",
                                    animate: r("animate", "dbmozg", c, "5k2sj2"),
                                    initial: r("initial", "dbmozg", _, "5k2sj2"),
                                    transformTemplate: t("dbmozg", a)
                                }
                            },
                            children: e(b, {
                                animate: r("animate", "12n34xo", c, "r68n5q"),
                                className: "framer-12n34xo-container",
                                "data-framer-appear-id": "12n34xo",
                                "data-framer-name": "Vision Techie Logo",
                                exit: Ge,
                                initial: r("initial", "12n34xo", _, "r68n5q"),
                                layoutScroll: !0,
                                name: "Vision Techie Logo",
                                transformTemplate: t("12n34xo", a),
                                children: e(n, {
                                    breakpoint: i,
                                    overrides: {
                                        mo9BElk8N: {
                                            ifUOndEDH: f[1],
                                            variant: "zWV8cxgzT"
                                        },
                                        XkhVUi1yU: {
                                            ifUOndEDH: f[2],
                                            variant: "zWV8cxgzT"
                                        }
                                    },
                                    children: e(q, {
                                        bXKDVwltS: be({
                                            src: "../assets/logo/logo-black.svg"
                                        }, ""),
                                        height: "100%",
                                        id: "VUubQl_iM",
                                        ifUOndEDH: f[0],
                                        l6Wo4ULiJ: "Vision Techie",
                                        layoutId: "VUubQl_iM",
                                        name: "Vision Techie Logo",
                                        variant: "sP4e3iZKf",
                                        width: "100%",
                                        YIltgZQMx: be({
                                            src: "../assets/logo/logo-white.svg"
                                        }, "")
                                    })
                                })
                            })
                        })
                    }), e(n, {
                        breakpoint: i,
                        overrides: {
                            mo9BElk8N: {
                                "data-framer-appear-id": "1n6fbhy",
                                animate: r("animate", "1n6fbhy", R, "duraz8"),
                                initial: r("initial", "1n6fbhy", D, "duraz8"),
                                transformTemplate: t("1n6fbhy", he)
                            },
                            XkhVUi1yU: {
                                "data-framer-appear-id": "1bugipr",
                                animate: r("animate", "1bugipr", R, "5k2sj2"),
                                initial: r("initial", "1bugipr", D, "5k2sj2"),
                                transformTemplate: t("1bugipr", a)
                            }
                        },
                        children: e(b, {
                            animate: r("animate", "nz0sb1", R, "r68n5q"),
                            className: "framer-nz0sb1-container",
                            "data-framer-appear-id": "nz0sb1",
                            exit: He,
                            initial: r("initial", "nz0sb1", D, "r68n5q"),
                            layoutScroll: !0,
                            transformTemplate: t("nz0sb1", he),
                            children: e(n, {
                                breakpoint: i,
                                overrides: {
                                    mo9BElk8N: {
                                        variant: "zWjVcnPlS"
                                    },
                                    XkhVUi1yU: {
                                        style: {
                                            width: "100%"
                                        },
                                        variant: "xZMChLWbK"
                                    }
                                },
                                children: e(V, {
                                    height: "100%",
                                    id: "oOFr30pit",
                                    layoutId: "oOFr30pit",
                                    variant: "ebLRlZjPs",
                                    width: "100%"
                                })
                            })
                        })
                    }), qe() && e(n, {
                        breakpoint: i,
                        overrides: {
                            mo9BElk8N: {
                                "data-framer-appear-id": "1m0216",
                                animate: r("animate", "1m0216", ge, "duraz8"),
                                initial: r("initial", "1m0216", ye, "duraz8"),
                                transformTemplate: t("1m0216", a)
                            }
                        },
                        children: e(b, {
                            animate: r("animate", "1kd5x8w", ge, "r68n5q"),
                            className: "framer-1kd5x8w-container hidden-5k2sj2",
                            "data-framer-appear-id": "1kd5x8w",
                            exit: Ze,
                            initial: r("initial", "1kd5x8w", ye, "r68n5q"),
                            layoutScroll: !0,
                            transformTemplate: t("1kd5x8w", a),
                            children: e(n, {
                                breakpoint: i,
                                overrides: {
                                    mo9BElk8N: {
                                        variant: "B8mqnSe2z"
                                    }
                                },
                                children: e(I, {
                                    EF5O7womS: "Buy this template",
                                    height: "100%",
                                    id: "C6K6hC3fQ",
                                    layoutId: "C6K6hC3fQ",
                                    rFP3b0sNK: "https://layoutgallery.lemonsqueezy.com/checkout/buy/0030e544-6138-4335-89ee-3f3721c1decd",
                                    variant: "GN40eO7yZ",
                                    width: "100%"
                                })
                            })
                        })
                    }), o("div", {
                        className: "framer-yhd283",
                        "data-framer-name": "Landing",
                        id: Ie,
                        name: "Landing",
                        ref: Ve,
                        children: [e(n, {
                            breakpoint: i,
                            overrides: {
                                mo9BElk8N: {
                                    "data-framer-appear-id": "1iiwkfa",
                                    animate: r("animate", "1iiwkfa", c, "duraz8"),
                                    initial: r("initial", "1iiwkfa", W, "duraz8"),
                                    transformTemplate: t("1iiwkfa", a)
                                },
                                XkhVUi1yU: {
                                    "data-framer-appear-id": "1muqadq",
                                    animate: r("animate", "1muqadq", c, "5k2sj2"),
                                    initial: r("initial", "1muqadq", W, "5k2sj2"),
                                    transformTemplate: t("1muqadq", a)
                                }
                            },
                            children: e(x, {
                                __fromCanvasComponent: !0,
                                animate: r("animate", "1ffwiup", c, "r68n5q"),
                                children: e(m, {
                                    children: e("h1", {
                                        className: "framer-styles-preset-1sgigkb",
                                        "data-styles-preset": "BRyT8PKiE",
                                        style: {
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                        },
                                        children: "Terms of Service"
                                    })
                                }),
                                className: "framer-1ffwiup",
                                "data-framer-appear-id": "1ffwiup",
                                exit: je,
                                initial: r("initial", "1ffwiup", W, "r68n5q"),
                                transformTemplate: t("1ffwiup", a),
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        }), e(n, {
                            breakpoint: i,
                            overrides: {
                                mo9BElk8N: {
                                    "data-framer-appear-id": "1008afz",
                                    animate: r("animate", "1008afz", X, "duraz8"),
                                    initial: r("initial", "1008afz", A, "duraz8"),
                                    transformTemplate: t("1008afz", a)
                                },
                                XkhVUi1yU: {
                                    "data-framer-appear-id": "yh6k9u",
                                    animate: r("animate", "yh6k9u", X, "5k2sj2"),
                                    initial: r("initial", "yh6k9u", A, "5k2sj2"),
                                    transformTemplate: t("yh6k9u", a)
                                }
                            },
                            children: e(x, {
                                __fromCanvasComponent: !0,
                                animate: r("animate", "gq6stx", X, "r68n5q"),
                                children: e(m, {
                                    children: e("h5", {
                                        className: "framer-styles-preset-1jm41cg",
                                        "data-styles-preset": "TjJlMJ6w8",
                                        style: {
                                            "--framer-text-color": "var(--token-5553722d-43da-4a73-a7ce-d2499d28fa68, rgb(135, 134, 138))"
                                        },
                                        children: "Last update: November 2023"
                                    })
                                }),
                                className: "framer-gq6stx",
                                "data-framer-appear-id": "gq6stx",
                                exit: Be,
                                initial: r("initial", "gq6stx", A, "r68n5q"),
                                transformTemplate: t("gq6stx", a),
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        })]
                    }), e("div", {
                        className: "framer-17eklv8",
                        "data-framer-name": "Content",
                        id: Pe,
                        name: "Content",
                        ref: Se,
                        children: e(n, {
                            breakpoint: i,
                            overrides: {
                                mo9BElk8N: {
                                    "data-framer-appear-id": "9jc367",
                                    animate: r("animate", "9jc367", C, "duraz8"),
                                    children: o(m, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: "Acceptance of Terms"
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: "By subscribing to our monthly unlimited design service, you agree to comply with and be bound by the following Terms of Service. If you do not agree with these terms, please refrain from using our services."
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: "Subscription Plans"
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: "Our monthly unlimited design service offers various subscription plans. Details of each plan, including pricing, features, and limitations, can be found on our website. We reserve the right to modify subscription plans with prior notice."
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: "Payment and Billing"
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: "Payment for the service is billed on a monthly basis. You authorize us to charge your provided payment method for the subscription fee. Any changes to billing information must be promptly updated."
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: "Cancellation and Refunds"
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: "You can cancel your subscription at any time by logging into your account. Refunds are not provided for the current or previous subscription periods. Cancellation takes effect at the end of the current billing cycle."
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: "Intellectual Property"
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: "All designs created during the subscription period are the intellectual property of the subscriber upon final delivery. We retain the right to display the completed work in our portfolio and marketing materials."
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: "Confidentiality"
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: "We respect the confidentiality of your projects. We will not disclose, reproduce, or share your design concepts with any third parties without your explicit consent."
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: "Termination of Service"
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: "We reserve the right to terminate or suspend your subscription at our discretion for violation of these Terms of Service or any illegal or inappropriate activities."
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: "Changes to Terms"
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: "We may update these Terms of Service from time to time. Subscribers will be notified of any changes, and continued use of the service after modifications implies acceptance of the updated terms."
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: "Contact Information"
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: "For any inquiries or concerns regarding the our service, please contact us at contact@visiontechie.com"
                                        })]
                                    }),
                                    fonts: ["GF;Inter Tight-500"],
                                    initial: r("initial", "9jc367", Y, "duraz8"),
                                    transformTemplate: t("9jc367", a)
                                },
                                XkhVUi1yU: {
                                    "data-framer-appear-id": "k9lhcf",
                                    animate: r("animate", "k9lhcf", C, "5k2sj2"),
                                    children: o(m, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: "Acceptance of Terms"
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: "By subscribing to our monthly unlimited design service, you agree to comply with and be bound by the following Terms of Service. If you do not agree with these terms, please refrain from using our services."
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: "Subscription Plans"
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: "Our monthly unlimited design service offers various subscription plans. Details of each plan, including pricing, features, and limitations, can be found on our website. We reserve the right to modify subscription plans with prior notice."
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: "Payment and Billing"
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: "Payment for the service is billed on a monthly basis. You authorize us to charge your provided payment method for the subscription fee. Any changes to billing information must be promptly updated."
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: "Cancellation and Refunds"
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: "You can cancel your subscription at any time by logging into your account. Refunds are not provided for the current or previous subscription periods. Cancellation takes effect at the end of the current billing cycle."
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: "Intellectual Property"
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: "All designs created during the subscription period are the intellectual property of the subscriber upon final delivery. We retain the right to display the completed work in our portfolio and marketing materials."
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: "Confidentiality"
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: "We respect the confidentiality of your projects. We will not disclose, reproduce, or share your design concepts with any third parties without your explicit consent."
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: "Termination of Service"
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: "We reserve the right to terminate or suspend your subscription at our discretion for violation of these Terms of Service or any illegal or inappropriate activities."
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: "Changes to Terms"
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: "We may update these Terms of Service from time to time. Subscribers will be notified of any changes, and continued use of the service after modifications implies acceptance of the updated terms."
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw",
                                                "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                            },
                                            children: "Contact Information"
                                        }), e("p", {
                                            className: "framer-styles-preset-1yqtg1q",
                                            "data-styles-preset": "Die60VzNz",
                                            style: {
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                            },
                                            children: "For any inquiries or concerns regarding the our service, please contact us at contact@visiontechie.com"
                                        })]
                                    }),
                                    fonts: ["GF;Inter Tight-500"],
                                    initial: r("initial", "k9lhcf", Y, "5k2sj2"),
                                    transformTemplate: t("k9lhcf", a)
                                }
                            },
                            children: e(x, {
                                __fromCanvasComponent: !0,
                                animate: r("animate", "a45dnh", C, "r68n5q"),
                                children: o(m, {
                                    children: [e("p", {
                                        className: "framer-styles-preset-1n7ng81",
                                        "data-styles-preset": "bxP2b_0Ko",
                                        style: {
                                            "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                        },
                                        children: "Acceptance of Terms"
                                    }), e("p", {
                                        className: "framer-styles-preset-1yqtg1q",
                                        "data-styles-preset": "Die60VzNz",
                                        style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                        },
                                        children: "By subscribing to our monthly unlimited design service, you agree to comply with and be bound by the following Terms of Service. If you do not agree with these terms, please refrain from using our services."
                                    }), e("p", {
                                        className: "framer-styles-preset-1yqtg1q",
                                        "data-styles-preset": "Die60VzNz",
                                        style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                        },
                                        children: e("br", {
                                            className: "trailing-break"
                                        })
                                    }), e("p", {
                                        className: "framer-styles-preset-1n7ng81",
                                        "data-styles-preset": "bxP2b_0Ko",
                                        style: {
                                            "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                        },
                                        children: e("br", {
                                            className: "trailing-break"
                                        })
                                    }), e("p", {
                                        className: "framer-styles-preset-1n7ng81",
                                        "data-styles-preset": "bxP2b_0Ko",
                                        style: {
                                            "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                        },
                                        children: "Subscription Plans"
                                    }), e("p", {
                                        className: "framer-styles-preset-1yqtg1q",
                                        "data-styles-preset": "Die60VzNz",
                                        style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                        },
                                        children: "Our monthly unlimited design service offers various subscription plans. Details of each plan, including pricing, features, and limitations, can be found on our website. We reserve the right to modify subscription plans with prior notice."
                                    }), e("p", {
                                        className: "framer-styles-preset-1yqtg1q",
                                        "data-styles-preset": "Die60VzNz",
                                        style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                        },
                                        children: e("br", {
                                            className: "trailing-break"
                                        })
                                    }), e("p", {
                                        className: "framer-styles-preset-1yqtg1q",
                                        "data-styles-preset": "Die60VzNz",
                                        style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                        },
                                        children: e("br", {
                                            className: "trailing-break"
                                        })
                                    }), e("p", {
                                        className: "framer-styles-preset-1n7ng81",
                                        "data-styles-preset": "bxP2b_0Ko",
                                        style: {
                                            "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                        },
                                        children: "Payment and Billing"
                                    }), e("p", {
                                        className: "framer-styles-preset-1yqtg1q",
                                        "data-styles-preset": "Die60VzNz",
                                        style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                        },
                                        children: "Payment for the service is billed on a monthly basis. You authorize us to charge your provided payment method for the subscription fee. Any changes to billing information must be promptly updated."
                                    }), e("p", {
                                        className: "framer-styles-preset-1yqtg1q",
                                        "data-styles-preset": "Die60VzNz",
                                        style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                        },
                                        children: e("br", {
                                            className: "trailing-break"
                                        })
                                    }), e("p", {
                                        className: "framer-styles-preset-1n7ng81",
                                        "data-styles-preset": "bxP2b_0Ko",
                                        style: {
                                            "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                        },
                                        children: e("br", {
                                            className: "trailing-break"
                                        })
                                    }), e("p", {
                                        className: "framer-styles-preset-1n7ng81",
                                        "data-styles-preset": "bxP2b_0Ko",
                                        style: {
                                            "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                        },
                                        children: "Cancellation and Refunds"
                                    }), e("p", {
                                        className: "framer-styles-preset-1yqtg1q",
                                        "data-styles-preset": "Die60VzNz",
                                        style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                        },
                                        children: "You can cancel your subscription at any time by logging into your account. Refunds are not provided for the current or previous subscription periods. Cancellation takes effect at the end of the current billing cycle."
                                    }), e("p", {
                                        className: "framer-styles-preset-1yqtg1q",
                                        "data-styles-preset": "Die60VzNz",
                                        style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                        },
                                        children: e("br", {
                                            className: "trailing-break"
                                        })
                                    }), e("p", {
                                        className: "framer-styles-preset-1n7ng81",
                                        "data-styles-preset": "bxP2b_0Ko",
                                        style: {
                                            "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                        },
                                        children: e("br", {
                                            className: "trailing-break"
                                        })
                                    }), e("p", {
                                        className: "framer-styles-preset-1n7ng81",
                                        "data-styles-preset": "bxP2b_0Ko",
                                        style: {
                                            "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                        },
                                        children: "Intellectual Property"
                                    }), e("p", {
                                        className: "framer-styles-preset-1yqtg1q",
                                        "data-styles-preset": "Die60VzNz",
                                        style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                        },
                                        children: "All designs created during the subscription period are the intellectual property of the subscriber upon final delivery. We retain the right to display the completed work in our portfolio and marketing materials."
                                    }), e("p", {
                                        className: "framer-styles-preset-1yqtg1q",
                                        "data-styles-preset": "Die60VzNz",
                                        style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                        },
                                        children: e("br", {
                                            className: "trailing-break"
                                        })
                                    }), e("p", {
                                        className: "framer-styles-preset-1n7ng81",
                                        "data-styles-preset": "bxP2b_0Ko",
                                        style: {
                                            "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                        },
                                        children: e("br", {
                                            className: "trailing-break"
                                        })
                                    }), e("p", {
                                        className: "framer-styles-preset-1n7ng81",
                                        "data-styles-preset": "bxP2b_0Ko",
                                        style: {
                                            "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                        },
                                        children: "Confidentiality"
                                    }), e("p", {
                                        className: "framer-styles-preset-1yqtg1q",
                                        "data-styles-preset": "Die60VzNz",
                                        style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                        },
                                        children: "We respect the confidentiality of your projects. We will not disclose, reproduce, or share your design concepts with any third parties without your explicit consent."
                                    }), e("p", {
                                        className: "framer-styles-preset-1yqtg1q",
                                        "data-styles-preset": "Die60VzNz",
                                        style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                        },
                                        children: e("br", {
                                            className: "trailing-break"
                                        })
                                    }), e("p", {
                                        className: "framer-styles-preset-1n7ng81",
                                        "data-styles-preset": "bxP2b_0Ko",
                                        style: {
                                            "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                        },
                                        children: e("br", {
                                            className: "trailing-break"
                                        })
                                    }), e("p", {
                                        className: "framer-styles-preset-1n7ng81",
                                        "data-styles-preset": "bxP2b_0Ko",
                                        style: {
                                            "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                        },
                                        children: "Termination of Service"
                                    }), e("p", {
                                        className: "framer-styles-preset-1yqtg1q",
                                        "data-styles-preset": "Die60VzNz",
                                        style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                        },
                                        children: "We reserve the right to terminate or suspend your subscription at our discretion for violation of these Terms of Service or any illegal or inappropriate activities."
                                    }), e("p", {
                                        className: "framer-styles-preset-1yqtg1q",
                                        "data-styles-preset": "Die60VzNz",
                                        style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                        },
                                        children: e("br", {
                                            className: "trailing-break"
                                        })
                                    }), e("p", {
                                        className: "framer-styles-preset-1n7ng81",
                                        "data-styles-preset": "bxP2b_0Ko",
                                        style: {
                                            "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                        },
                                        children: e("br", {
                                            className: "trailing-break"
                                        })
                                    }), e("p", {
                                        className: "framer-styles-preset-1n7ng81",
                                        "data-styles-preset": "bxP2b_0Ko",
                                        style: {
                                            "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                        },
                                        children: "Changes to Terms"
                                    }), e("p", {
                                        className: "framer-styles-preset-1yqtg1q",
                                        "data-styles-preset": "Die60VzNz",
                                        style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                        },
                                        children: "We may update these Terms of Service from time to time. Subscribers will be notified of any changes, and continued use of the service after modifications implies acceptance of the updated terms."
                                    }), e("p", {
                                        className: "framer-styles-preset-1yqtg1q",
                                        "data-styles-preset": "Die60VzNz",
                                        style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                        },
                                        children: e("br", {
                                            className: "trailing-break"
                                        })
                                    }), e("p", {
                                        className: "framer-styles-preset-1n7ng81",
                                        "data-styles-preset": "bxP2b_0Ko",
                                        style: {
                                            "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                        },
                                        children: e("br", {
                                            className: "trailing-break"
                                        })
                                    }), e("p", {
                                        className: "framer-styles-preset-1n7ng81",
                                        "data-styles-preset": "bxP2b_0Ko",
                                        style: {
                                            "--framer-text-color": "var(--token-d4389f1b-5b95-4515-8b2f-79789fffb29d, rgb(19, 19, 20))"
                                        },
                                        children: "Contact Information"
                                    }), e("p", {
                                        className: "framer-styles-preset-1yqtg1q",
                                        "data-styles-preset": "Die60VzNz",
                                        style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--token-7ba9acdf-338f-43d0-9fd7-a40ca1655446, rgb(100, 100, 102))"
                                        },
                                        children: "For any inquiries or concerns regarding the our service, please contact us at contact@visiontechie.com"
                                    })]
                                }),
                                className: "framer-a45dnh",
                                "data-framer-appear-id": "a45dnh",
                                exit: Ee,
                                initial: r("initial", "a45dnh", Y, "r68n5q"),
                                transformTemplate: t("a45dnh", a),
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        })
                    }), e("div", {
                        className: "framer-1k738bi",
                        "data-framer-name": "Footer",
                        name: "Footer",
                        children: e(Ae, {
                            __framer__animate: {
                                transition: Ne
                            },
                            __framer__animateOnce: !0,
                            __framer__enter: Fe,
                            __framer__exit: Ke,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: .5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-kssf6a-container",
                            transformTemplate: a,
                            children: e(n, {
                                breakpoint: i,
                                overrides: {
                                    mo9BElk8N: {
                                        variant: "uo5u8vAKR"
                                    },
                                    XkhVUi1yU: {
                                        variant: "imnebtjsk"
                                    }
                                },
                                children: e(P, {
                                    height: "100%",
                                    id: "dbvzEuJ27",
                                    layoutId: "dbvzEuJ27",
                                    style: {
                                        width: "100%"
                                    },
                                    variant: "bp9Y39OvE",
                                    width: "100%"
                                })
                            })
                        })
                    })]
                }), e("div", {
                    className: T(pe, ...G),
                    id: "overlay"
                })]
            })
        })
    })
    , Je = ['.framer-bc3h6[data-border="true"]::after, .framer-bc3h6 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", `.${Q.bodyClassName}-framer-bc3h6 { background: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, rgb(255, 255, 255)); }`, ".framer-bc3h6.framer-17oim8r, .framer-bc3h6 .framer-17oim8r { display: block; }", ".framer-bc3h6.framer-r68n5q { align-content: center; align-items: center; background-color: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1200px; }", ".framer-bc3h6 .framer-12n34xo-container { flex: none; height: auto; left: 40px; position: fixed; top: 40px; transform: perspective(1200px); width: auto; z-index: 10; }", ".framer-bc3h6 .framer-nz0sb1-container { flex: none; height: auto; left: 50%; position: fixed; top: 40px; transform: perspective(1200px) translateX(-50%); width: auto; z-index: 9; }", ".framer-bc3h6 .framer-1kd5x8w-container { flex: none; height: auto; position: fixed; right: 40px; top: 40px; transform: perspective(1200px); width: auto; z-index: 3; }", ".framer-bc3h6 .framer-yhd283 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: center; max-width: 1200px; overflow: visible; padding: 180px 40px 80px 40px; position: relative; scroll-margin-top: 200px; width: 100%; z-index: 1; }", ".framer-bc3h6 .framer-1ffwiup, .framer-bc3h6 .framer-gq6stx { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; transform: perspective(1200px); white-space: pre; width: auto; }", ".framer-bc3h6 .framer-17eklv8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: center; max-width: 600px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; scroll-margin-top: 200px; width: 100%; z-index: 1; }", ".framer-bc3h6 .framer-a45dnh { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; transform: perspective(1200px); white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-bc3h6 .framer-1k738bi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 80px 40px 40px 40px; position: relative; width: 100%; }", ".framer-bc3h6 .framer-kssf6a-container { flex: 1 0 0px; height: auto; position: relative; transform: perspective(1200px); width: 1px; }", "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-bc3h6.framer-r68n5q, .framer-bc3h6 .framer-yhd283, .framer-bc3h6 .framer-17eklv8, .framer-bc3h6 .framer-1k738bi { gap: 0px; } .framer-bc3h6.framer-r68n5q > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-bc3h6.framer-r68n5q > :first-child, .framer-bc3h6 .framer-yhd283 > :first-child, .framer-bc3h6 .framer-17eklv8 > :first-child { margin-top: 0px; } .framer-bc3h6.framer-r68n5q > :last-child, .framer-bc3h6 .framer-yhd283 > :last-child, .framer-bc3h6 .framer-17eklv8 > :last-child { margin-bottom: 0px; } .framer-bc3h6 .framer-yhd283 > *, .framer-bc3h6 .framer-17eklv8 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-bc3h6 .framer-1k738bi > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-bc3h6 .framer-1k738bi > :first-child { margin-left: 0px; } .framer-bc3h6 .framer-1k738bi > :last-child { margin-right: 0px; } }", "@media (min-width: 1200px) { .framer-bc3h6 .hidden-r68n5q { display: none !important; } }", `@media (min-width: 810px) and (max-width: 1199px) { .framer-bc3h6 .hidden-duraz8 { display: none !important; } .${Q.bodyClassName}-framer-bc3h6 { background: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, rgb(255, 255, 255)); } .framer-bc3h6.framer-r68n5q { width: 810px; } .framer-bc3h6 .framer-yhd283 { gap: 24px; max-width: unset; } .framer-bc3h6 .framer-17eklv8 { gap: 24px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-bc3h6 .framer-yhd283, .framer-bc3h6 .framer-17eklv8 { gap: 0px; } .framer-bc3h6 .framer-yhd283 > *, .framer-bc3h6 .framer-17eklv8 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-bc3h6 .framer-yhd283 > :first-child, .framer-bc3h6 .framer-17eklv8 > :first-child { margin-top: 0px; } .framer-bc3h6 .framer-yhd283 > :last-child, .framer-bc3h6 .framer-17eklv8 > :last-child { margin-bottom: 0px; } }}`, `@media (max-width: 809px) { .framer-bc3h6 .hidden-5k2sj2 { display: none !important; } .${Q.bodyClassName}-framer-bc3h6 { background: var(--token-bc858b8b-52d3-487d-9657-b26f5f9e69a6, rgb(255, 255, 255)); } .framer-bc3h6.framer-r68n5q { width: 390px; } .framer-bc3h6 .framer-12n34xo-container { left: 20px; top: 35px; } .framer-bc3h6 .framer-nz0sb1-container { left: 0px; right: 0px; top: 35px; transform: perspective(1200px); width: unset; } .framer-bc3h6 .framer-yhd283 { gap: 24px; max-width: unset; padding: 140px 20px 80px 20px; } .framer-bc3h6 .framer-17eklv8 { gap: 24px; max-width: unset; padding: 0px 20px 0px 20px; } .framer-bc3h6 .framer-1k738bi { flex-direction: column; padding: 80px 20px 20px 20px; } .framer-bc3h6 .framer-kssf6a-container { flex: none; width: 100%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-bc3h6 .framer-yhd283, .framer-bc3h6 .framer-17eklv8, .framer-bc3h6 .framer-1k738bi { gap: 0px; } .framer-bc3h6 .framer-yhd283 > *, .framer-bc3h6 .framer-17eklv8 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-bc3h6 .framer-yhd283 > :first-child, .framer-bc3h6 .framer-17eklv8 > :first-child, .framer-bc3h6 .framer-1k738bi > :first-child { margin-top: 0px; } .framer-bc3h6 .framer-yhd283 > :last-child, .framer-bc3h6 .framer-17eklv8 > :last-child, .framer-bc3h6 .framer-1k738bi > :last-child { margin-bottom: 0px; } .framer-bc3h6 .framer-1k738bi > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }}`, ...ce, ...le, ...ne, ...te]
    , u = O(Me, Je, "framer-bc3h6")
    , ur = u;
u.displayName = "Terms Of Service";
u.defaultProps = {
    height: 1975,
    width: 1200
};
ee(u, [{
    family: "Inter Tight",
    source: "google",
    style: "normal",
    url: "https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjPQ-qWSRToK8EPg.woff2",
    weight: "500"
}, ...Re, ...De, ...We, ...Xe, ...me, ...fe, ...ie, ...re]);
var kr = {
    exports: {
        Props: {
            type: "tsType",
            annotations: {
                framerContractVersion: "1"
            }
        },
        default: {
            type: "reactComponent",
            name: "Framerq_h_cFRrY",
            slots: [],
            annotations: {
                framerDisplayContentsDiv: "false",
                framerIntrinsicHeight: "1975",
                framerContractVersion: "1",
                framerIntrinsicWidth: "1200",
                framerResponsiveScreen: "",
                framerImmutableVariables: "true",
                framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"mo9BElk8N":{"layout":["fixed","auto"]},"XkhVUi1yU":{"layout":["fixed","auto"]}}}'
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
export { kr as __FramerMetadata__, ur as default };
//# sourceMappingURL=2V-gOizifoJ6irpw1qG7fsswPlsmRQCpPbrt37YgctY.PFNWOQUX.mjs.map
