(() => {
	const botaoTema = document.getElementById("temaBtn");
	if (!botaoTema) return;

	const chaveTema = "techsolutions-tema";

	const aplicarTema = (tema) => {
		const escuro = tema === "escuro";
		document.body.classList.toggle("tema-escuro", escuro);
		botaoTema.textContent = escuro ? "Mudar para tema claro" : "Mudar para tema escuro";
	};

	const temaSalvo = localStorage.getItem(chaveTema);
	const prefereEscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const temaInicial = temaSalvo || (prefereEscuro ? "escuro" : "claro");

	aplicarTema(temaInicial);

	botaoTema.addEventListener("click", () => {
		const temaAtual = document.body.classList.contains("tema-escuro") ? "escuro" : "claro";
		const proximoTema = temaAtual === "escuro" ? "claro" : "escuro";
		aplicarTema(proximoTema);
		localStorage.setItem(chaveTema, proximoTema);
	});
})();
