// ===== 1. Tema claro/escuro (todas as páginas) =====
const botaoTema = document.getElementById("theme-toggle");

function aplicarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  botaoTema.textContent = tema === "dark" ? "Modo claro" : "Modo escuro";
  botaoTema.setAttribute("aria-pressed", String(tema === "dark"));
}

let temaGuardado = "light";
try { temaGuardado = localStorage.getItem("tema") || "light"; } catch (e) {}
aplicarTema(temaGuardado);

botaoTema.addEventListener("click", () => {
  const novo = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  aplicarTema(novo);
  try { localStorage.setItem("tema", novo); } catch (e) {}
});

// ===== 2. Saudação, relógio e contador (index.html) =====
const saudacao = document.getElementById("saudacao");
if (saudacao) {
  const hora = new Date().getHours();
  saudacao.textContent = hora < 12 ? "Bom dia!" : hora < 20 ? "Boa tarde!" : "Boa noite!";

  const relogio = document.getElementById("relogio");
  const contador = document.getElementById("contador");
  let segundos = 0;

  setInterval(() => {
    relogio.textContent = new Date().toLocaleTimeString("pt-PT");
    segundos++;
    contador.textContent = segundos + " s";
  }, 1000);
  relogio.textContent = new Date().toLocaleTimeString("pt-PT");
}

// ===== 3. Validação do formulário (contactos.html) =====
const form = document.getElementById("form-contacto");
if (form) {
  const aviso = document.getElementById("aviso");

  const mostrarAviso = (texto, tipo) => {
    aviso.textContent = texto;
    aviso.className = "alert alert-" + tipo;
  };

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const campos = ["nome", "email", "mensagem"].map((id) => document.getElementById(id));
    let erros = [];

    campos.forEach((campo) => {
      const valor = campo.value.trim();
      const invalido = valor === "" || (campo.type === "email" && !/^\S+@\S+\.\S+$/.test(valor));
      campo.classList.toggle("invalido", invalido);
      if (invalido) erros.push(campo.previousElementSibling.textContent);
    });

    if (erros.length > 0) {
      mostrarAviso("Corrige os campos: " + erros.join(", ") + ".", "danger");
      return;
    }

    mostrarAviso("Obrigado, " + campos[0].value.trim() + "! A tua mensagem foi registada.", "success");
    form.reset();
  });
}
