import { $ as R, A as g, Da as L, Ka as v, Pa as U, Ua as H, W as n, Z as b, aa as h, h as c, ia as W, q as l, r as u, v as r, z as x } from "./chunk-NV2CJCYN.mjs";
function A(t) {
    let e = u(null);
    return e.current === null && (e.current = t()),
        e.current
}
var S = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function O(t = 5) {
    return Array(t).fill(0).map(() => S[Math.floor(Math.random() * S.length)]).join("")
}
function j(t = 5) {
    return A(() => O(t))
}
var B = ["AD1uRb789", "t6uYX0tBZ", "AnI2DvQZf", "JG7MxGgTY", "snFARdAmz", "Nz_Z2NTH0", "cHv8JY9g7", "tR7FlThNE", "bg0lLngd2", "FKNQjSL73", "UozSdcuUY", "EgLxQrxHD", "vol5AdrV3", "rbMcqs1eA", "OY_j7HdJV", "mcvPgNUgN", "Jj_gJ6raO", "UYFenO8zH", "RpMB9X2cU", "tExww8aRk", "anaA6RL0b", "y8osi5SA0", "v2n6jd8d8", "vrPxXX3Sq", "YC5psLXzO", "wQ9whLvFH", "hUi9TraZo", "ji0e3Gqv5", "nMHdUM1t6", "Stnp3oRU4", "TxmZTsvXB", "bNhqIdQoj", "OYkCSZPL0", "bOMpuyzc_", "NqCoJY2pH"]
    , Q = {
        AD1uRb789: "framer-v-rqhbs3",
        t6uYX0tBZ: "framer-v-ina8tq",
        AnI2DvQZf: "framer-v-lwbc2o",
        JG7MxGgTY: "framer-v-vqryag",
        snFARdAmz: "framer-v-kwp1i3",
        Nz_Z2NTH0: "framer-v-1h8ejmh",
        cHv8JY9g7: "framer-v-c75qsa",
        tR7FlThNE: "framer-v-1ftwjq5",
        bg0lLngd2: "framer-v-osfy8l",
        FKNQjSL73: "framer-v-5qhg5s",
        UozSdcuUY: "framer-v-5ats54",
        EgLxQrxHD: "framer-v-z5mnn6",
        vol5AdrV3: "framer-v-6xnqop",
        rbMcqs1eA: "framer-v-xmx6ye",
        OY_j7HdJV: "framer-v-a1v8wx",
        mcvPgNUgN: "framer-v-1oj0oue",
        Jj_gJ6raO: "framer-v-19e1lqz",
        UYFenO8zH: "framer-v-16en86l",
        RpMB9X2cU: "framer-v-1vzsblg",
        tExww8aRk: "framer-v-1kgllbw",
        anaA6RL0b: "framer-v-zia1yx",
        y8osi5SA0: "framer-v-9mi1m7",
        v2n6jd8d8: "framer-v-zgdwlg",
        vrPxXX3Sq: "framer-v-1dgnypb",
        YC5psLXzO: "framer-v-rum36c",
        wQ9whLvFH: "framer-v-1u5c2u8",
        hUi9TraZo: "framer-v-1dt8e1w",
        ji0e3Gqv5: "framer-v-1rkl824",
        nMHdUM1t6: "framer-v-17d51pb",
        Stnp3oRU4: "framer-v-158neyh",
        TxmZTsvXB: "framer-v-1atb71u",
        bNhqIdQoj: "framer-v-1x8h963",
        OYkCSZPL0: "framer-v-hblyuj",
        bOMpuyzc_: "framer-v-cra8ie",
        NqCoJY2pH: "framer-v-1sz721s"
    }
    , G = {
        Jason: "AD1uRb789",
        Jess: "t6uYX0tBZ",
        Olli: "AnI2DvQZf",
        Myah: "JG7MxGgTY",
        Ammaar: "snFARdAmz",
        Siena: "Nz_Z2NTH0",
        Cheryl: "cHv8JY9g7",
        Aleeza: "tR7FlThNE",
        Elli: "bg0lLngd2",
        Piotr: "FKNQjSL73",
        Ayisha: "UozSdcuUY",
        Nataniel: "EgLxQrxHD",
        Nikita: "vol5AdrV3",
        Tim: "rbMcqs1eA",
        Carley: "OY_j7HdJV",
        Arda: "mcvPgNUgN",
        "Lacey-Mae": "Jj_gJ6raO",
        Bo: "UYFenO8zH",
        Shelbie: "RpMB9X2cU",
        Dillon: "tExww8aRk",
        Selin: "OYkCSZPL0",
        Rhian: "y8osi5SA0",
        Ada: "v2n6jd8d8",
        Lois: "vrPxXX3Sq",
        Maisie: "YC5psLXzO",
        Lori: "wQ9whLvFH",
        Jardel: "hUi9TraZo",
        Jethro: "ji0e3Gqv5",
        Carmen: "nMHdUM1t6",
        Patrik: "Stnp3oRU4",
        Barry: "TxmZTsvXB",
        Alejandro: "bNhqIdQoj",
        Denny: "bOMpuyzc_",
        Becca: "NqCoJY2pH"
    }
    , z = {
        default: {
            type: "spring",
            ease: [.44, 0, .56, 1],
            duration: .3,
            delay: 0,
            stiffness: 500,
            damping: 60,
            mass: 1
        }
    }
    , T = c(function ({ style: t, className: e, layoutId: d, width: C, height: J, variant: f = "AD1uRb789", background: w = "rgb(255, 219, 222)", radius: s = 60, rotation: Z = 0, ...F }, k) {
        let o = G[f] || f
            , { variants: N, baseVariant: _, gestureVariant: M, classNames: q, transition: m, setVariant: E, setGestureState: i } = v({
                defaultVariant: "AD1uRb789",
                variant: o,
                transitions: z,
                variantClassNames: Q,
                cycleOrder: B
            })
            , D = l(() => ({
                t6uYX0tBZ: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Jess",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: '../assets/images/dashboard/tech/framer.png',
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                AnI2DvQZf: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Olli",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/qCpU7HJtiveCC9wTFuh7L4wc8YM.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                JG7MxGgTY: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Myah",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/Q8IGGb6PvVKrjNuovM2HijDWFU.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                snFARdAmz: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Ammaar",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/iGk4x1NJSVgWzFvuQQADJp9I.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                Nz_Z2NTH0: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Siena",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/ikD34vgzaLM6N50MKdcR9HVBnk.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                cHv8JY9g7: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Cheryl",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: '../assets/images/dashboard/tech/spring-boot.png',
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                tR7FlThNE: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Aleeza",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/62fnqd1V6QN3j0vPr4hlpB3HnQ.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                bg0lLngd2: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Elli",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/Vu8TxX7VMCMZDjoliFK7D0nOyX0.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                FKNQjSL73: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Piotr",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/ofIUD8MCjke7Xz8jkh29AWqajJo.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                UozSdcuUY: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Ayisha",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/5nnqp2inSINDktAAWpI7gxJei0w.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                EgLxQrxHD: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Nataniel",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/lKaaStgbmdIe8TfrIkFlKzHazV0.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                vol5AdrV3: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Nikita",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/bpeWvtoxuajqEtlukZhUFt9KM.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                rbMcqs1eA: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Tim",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/GoWNvgKZvVTzmZQKHoh2Ccnk4E.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                OY_j7HdJV: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Carley",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/40ioqcNOrsoBIVnpfGVsXh9jpM.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                mcvPgNUgN: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Arda",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/U8RU6HcYtcK32VUY2uTSF9QTqo.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                Jj_gJ6raO: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Lacey-Mae",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: '../assets/images/dashboard/tech/react.jpeg',
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                UYFenO8zH: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Bo",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/Tlwk5hINm0ferm6DGDyUoqL6pc.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                RpMB9X2cU: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Shelbie",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: '../assets/images/dashboard/tech/next-logo.png',
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                tExww8aRk: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Dillon",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: './assets/images/dashboard/tech/figma.png',
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                anaA6RL0b: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Selin",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: '../assets/images/dashboard/tech/postgres.png',
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                y8osi5SA0: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Rhian",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/LEd8c4Zf28fU29XZ4c04ImOzs.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                v2n6jd8d8: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Ada",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/3oPVBjvZEnTN9DZf7tUMW54TS2k.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                vrPxXX3Sq: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Lois",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/99qcDQP7xzsxlgXsq47uID7sAm4.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                YC5psLXzO: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Maisie",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/BRu6MhHhp9NjldqU9TTCEAEoGKg.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                wQ9whLvFH: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Lori",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: '../assets/images/dashboard/tech/node.png',
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                hUi9TraZo: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Jardel",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/B8580pOtLEBrg7wIFp62oXfFQ.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                ji0e3Gqv5: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Jethro",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/szTmT1K4f8nn5CutvLWFlBdt8k.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                nMHdUM1t6: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Carmen",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/e6GZhp0s96FXaIiLYSRyZYZYypo.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                Stnp3oRU4: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Patrik",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/6xGPl1j87mG8XoUzCwRYzEohM8.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                TxmZTsvXB: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Barry",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/mhC7dhzvLcqmUofPcC2BW8vh4.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                bNhqIdQoj: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Alejandro",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/YynUn6LSLWVQia4pOtIxhY77SSA.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                OYkCSZPL0: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Selin",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/u2K6WSbQVKHiOUvOF3auFya79y8.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                bOMpuyzc_: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Denny",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/BJytCbStiWSy9rxpQ0wU6I3SNiI.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                },
                NqCoJY2pH: {
                    AD1uRb789: {
                        center: !1,
                        "data-framer-name": "Becca",
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "0px 0px 0px 0px"
                        }
                    },
                    XGgsiaAin: {
                        background: {
                            src: new URL("assets/xyIaIR0LhPm1PVVUVrQ7TDGTyA.png", "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js").href,
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        intrinsicWidth: 440,
                        intrinsicHeight: 440
                    }
                }
            }), [])
            , p = L(_, M, D)
            , I = j();
        return r(g, {
            id: d ?? I,
            children: r(x.div, {
                initial: o,
                animate: N,
                className: h("framer-47hmZ", q),
                style: {
                    display: "contents"
                },
                onHoverStart: () => i({
                    isHovered: !0
                }),
                onHoverEnd: () => i({
                    isHovered: !1
                }),
                onTapStart: () => i({
                    isPressed: !0
                }),
                onTap: () => i({
                    isPressed: !1
                }),
                onTapCancel: () => i({
                    isPressed: !1
                }),
                children: r(R, {
                    ...F,
                    layoutId: "AD1uRb789",
                    className: h("framer-rqhbs3", e),
                    style: {
                        borderBottomLeftRadius: s,
                        borderBottomRightRadius: s,
                        borderTopRightRadius: s,
                        borderTopLeftRadius: s,
                        backgroundColor: w,
                        ...t
                    },
                    direction: "horizontal",
                    distribution: "center",
                    alignment: "center",
                    gap: 10,
                    __fromCanvasComponent: !0,
                    __contentWrapperStyle: {
                        width: "100%",
                        height: "100%",
                        padding: "0px 0px 0px 0px"
                    },
                    center: !1,
                    "data-framer-name": "Jason",
                    transition: m,
                    ref: k,
                    ...p("AD1uRb789"),
                    children: r(U, {
                        layoutId: "XGgsiaAin",
                        className: "framer-kj56m6",
                        style: {
                            borderBottomLeftRadius: 60,
                            borderBottomRightRadius: 60,
                            borderTopRightRadius: 60,
                            borderTopLeftRadius: 60,
                            rotate: Z
                        },
                        background: {
                            src: '../assets/images/dashboard/tech/flutter.png',
                            pixelWidth: 440,
                            pixelHeight: 440,
                            intrinsicWidth: 440,
                            intrinsicHeight: 440,
                            fit: "fill"
                        },
                        "data-framer-name": "Avatar",
                        variants: {
                            t6uYX0tBZ: {
                                borderBottomLeftRadius: 60,
                                borderBottomRightRadius: 60,
                                borderTopRightRadius: 60,
                                borderTopLeftRadius: 60
                            }
                        },
                        transition: m,
                        ...p("XGgsiaAin")
                    })
                })
            })
        })
    })
    , Y = ['.framer-47hmZ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}', ".framer-47hmZ .framer-rqhbs3 { position: relative; overflow: hidden; width: 100px; height: 100px; }", ".framer-47hmZ .framer-kj56m6 { position: relative; overflow: visible; width: 1px; height: 100%; flex: 1 0 0px; }", ".framer-47hmZ.framer-v-ina8tq .framer-rqhbs3, .framer-47hmZ.framer-v-lwbc2o .framer-rqhbs3, .framer-47hmZ.framer-v-vqryag .framer-rqhbs3, .framer-47hmZ.framer-v-kwp1i3 .framer-rqhbs3, .framer-47hmZ.framer-v-1h8ejmh .framer-rqhbs3, .framer-47hmZ.framer-v-c75qsa .framer-rqhbs3, .framer-47hmZ.framer-v-1ftwjq5 .framer-rqhbs3, .framer-47hmZ.framer-v-osfy8l .framer-rqhbs3, .framer-47hmZ.framer-v-5qhg5s .framer-rqhbs3, .framer-47hmZ.framer-v-5ats54 .framer-rqhbs3, .framer-47hmZ.framer-v-z5mnn6 .framer-rqhbs3, .framer-47hmZ.framer-v-6xnqop .framer-rqhbs3, .framer-47hmZ.framer-v-xmx6ye .framer-rqhbs3, .framer-47hmZ.framer-v-a1v8wx .framer-rqhbs3, .framer-47hmZ.framer-v-1oj0oue .framer-rqhbs3, .framer-47hmZ.framer-v-19e1lqz .framer-rqhbs3, .framer-47hmZ.framer-v-16en86l .framer-rqhbs3, .framer-47hmZ.framer-v-1vzsblg .framer-rqhbs3, .framer-47hmZ.framer-v-1kgllbw .framer-rqhbs3, .framer-47hmZ.framer-v-zia1yx .framer-rqhbs3, .framer-47hmZ.framer-v-9mi1m7 .framer-rqhbs3, .framer-47hmZ.framer-v-zgdwlg .framer-rqhbs3, .framer-47hmZ.framer-v-1dgnypb .framer-rqhbs3, .framer-47hmZ.framer-v-rum36c .framer-rqhbs3, .framer-47hmZ.framer-v-1u5c2u8 .framer-rqhbs3, .framer-47hmZ.framer-v-1dt8e1w .framer-rqhbs3, .framer-47hmZ.framer-v-1rkl824 .framer-rqhbs3, .framer-47hmZ.framer-v-17d51pb .framer-rqhbs3, .framer-47hmZ.framer-v-158neyh .framer-rqhbs3, .framer-47hmZ.framer-v-1atb71u .framer-rqhbs3, .framer-47hmZ.framer-v-1x8h963 .framer-rqhbs3, .framer-47hmZ.framer-v-hblyuj .framer-rqhbs3, .framer-47hmZ.framer-v-cra8ie .framer-rqhbs3, .framer-47hmZ.framer-v-1sz721s .framer-rqhbs3 { width: 100px; height: 100px; }", ".framer-47hmZ.framer-v-1ftwjq5 .framer-kj56m6, .framer-47hmZ.framer-v-osfy8l .framer-kj56m6 { width: 1px; height: 100%; right: auto; bottom: auto; left: auto; top: auto; flex: 1 0 0px; }"]
    , a = W(T, Y)
    , ft = a;
a.displayName = "Memoji";
a.defaultProps = {
    width: 100,
    height: 100
};
b(a, {
    variant: {
        type: n.Enum,
        title: "Variant",
        options: ["AD1uRb789", "t6uYX0tBZ", "AnI2DvQZf", "JG7MxGgTY", "snFARdAmz", "Nz_Z2NTH0", "cHv8JY9g7", "tR7FlThNE", "bg0lLngd2", "FKNQjSL73", "UozSdcuUY", "EgLxQrxHD", "vol5AdrV3", "rbMcqs1eA", "OY_j7HdJV", "mcvPgNUgN", "Jj_gJ6raO", "UYFenO8zH", "RpMB9X2cU", "tExww8aRk", "anaA6RL0b", "y8osi5SA0", "v2n6jd8d8", "vrPxXX3Sq", "YC5psLXzO", "wQ9whLvFH", "hUi9TraZo", "ji0e3Gqv5", "nMHdUM1t6", "Stnp3oRU4", "TxmZTsvXB", "bNhqIdQoj", "OYkCSZPL0", "bOMpuyzc_", "NqCoJY2pH"],
        optionTitles: ["Jason", "Jess", "Olli", "Myah", "Ammaar", "Siena", "Cheryl", "Aleeza", "Elli", "Piotr", "Ayisha", "Nataniel", "Nikita", "Tim", "Carley", "Arda", "Lacey-Mae", "Bo", "Shelbie", "Dillon", "Selin", "Rhian", "Ada", "Lois", "Maisie", "Lori", "Jardel", "Jethro", "Carmen", "Patrik", "Barry", "Alejandro", "Selin", "Denny", "Becca"]
    },
    VurELiPqN: {
        type: n.Color,
        title: "Background",
        defaultValue: "rgb(255, 219, 222)"
    },
    Z2NuoQS1k: {
        type: n.Number,
        title: "Radius",
        defaultValue: 60,
        min: 0
    },
    tc_6nmlts: {
        type: n.Number,
        title: "Rotation",
        defaultValue: 0,
        min: -180,
        max: 180,
        unit: "\xB0"
    }
});
H(a, []);
export { ft as a };
//# sourceMappingURL=chunk-APJ7DU42.mjs.map
