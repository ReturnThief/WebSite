const p = "modulepreload",
	f = function (o) {
		return "/" + o;
	},
	c = {},
	h = function (l, s, w) {
		let a = Promise.resolve();
		if (s && s.length > 0) {
			document.getElementsByTagName("link");
			const r = document.querySelector("meta[property=csp-nonce]"),
				n = r?.nonce || r?.getAttribute("nonce");
			a = Promise.all(
				s.map((e) => {
					if (((e = f(e)), e in c)) return;
					c[e] = !0;
					const i = e.endsWith(".css"),
						u = i ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${e}"]${u}`)) return;
					const t = document.createElement("link");
					if (
						((t.rel = i ? "stylesheet" : p),
						i || ((t.as = "script"), (t.crossOrigin = "")),
						(t.href = e),
						n && t.setAttribute("nonce", n),
						document.head.appendChild(t),
						i)
					)
						return new Promise((d, m) => {
							t.addEventListener("load", d),
								t.addEventListener("error", () =>
									m(
										new Error(
											`Unable to preload CSS for ${e}`,
										),
									),
								);
						});
				}),
			);
		}
		return a
			.then(() => l())
			.catch((r) => {
				const n = new Event("vite:preloadError", { cancelable: !0 });
				if (
					((n.payload = r),
					window.dispatchEvent(n),
					!n.defaultPrevented)
				)
					throw r;
			});
	};
(
	await h(async () => {
		const { initializeApp: o } = await import("./index.esm.BoasBFnU.js");
		return { initializeApp: o };
	}, [])
).initializeApp({
	apiKey: "AIzaSyDY8gxW4POoBJbhYJl9s6ZSZ3WlVcKTCww",
	authDomain: "returnthief.firebaseapp.com",
	projectId: "returnthief",
	storageBucket: "returnthief.appspot.com",
	messagingSenderId: "890963614794",
	appId: "1:890963614794:web:663adf5b59dad366d1dab3",
	measurementId: "G-D1GFQDDFPD",
});
//# sourceMappingURL=Base.astro_astro_type_script_index_0_lang.C84ZuHxZ.js.map
