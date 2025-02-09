import { c as createComponent, a as createAstro, r as renderTemplate, b as renderHead, e as renderSlot, m as maybeRenderHead, f as addAttribute, g as renderScript, h as renderComponent } from '../chunks/astro/server_BCYpTdWV.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "C:/Users/DELL/Desktop/astro/guiasweb/src/layouts/Layout.astro", void 0);

const myLogo = new Proxy({"src":"/_astro/logo2.Dp8_hACC.jpg","width":686,"height":386,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/DELL/Desktop/astro/guiasweb/src/assets/logo2.jpg";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-3ef6ksr2> <img${addAttribute(myLogo.src, "src")} alt="GunBound Logo" class="logo" data-astro-cid-3ef6ksr2> <nav class="nav" data-astro-cid-3ef6ksr2> <a href="#" data-astro-cid-3ef6ksr2>Inicio</a> <a href="#" data-astro-cid-3ef6ksr2>Jugar</a> <a href="#" data-astro-cid-3ef6ksr2>Ranking</a> <a href="#" data-astro-cid-3ef6ksr2>Foro</a> </nav> </header> `;
}, "C:/Users/DELL/Desktop/astro/guiasweb/src/components/Header.astro", void 0);

const $$GunboundForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-hwpakuyk> <h2 class="float" data-astro-cid-hwpakuyk>GunBound 2004 - Triko Calculador</h2> <input type="number" id="numeroInput" placeholder="Ingresa una posición (1-40)" min="1" max="40" data-astro-cid-hwpakuyk> <select class="Direction" id="direccionSelect" data-astro-cid-hwpakuyk> <option value="RIGHT" data-astro-cid-hwpakuyk>Derecha</option> <option value="LEFT" data-astro-cid-hwpakuyk>Izquierda</option> </select> <div class="table-container" id="tablaContainer" data-astro-cid-hwpakuyk></div> </div> ${renderScript($$result, "C:/Users/DELL/Desktop/astro/guiasweb/src/components/GunboundForm.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/DELL/Desktop/astro/guiasweb/src/components/GunboundForm.astro", void 0);

const $$NewsCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="card" data-astro-cid-ibl2wg7k> <h3 data-astro-cid-ibl2wg7k>Noticias GunBound</h3> <p data-astro-cid-ibl2wg7k>
¡Nuevo evento de temporada! Participa en batallas especiales y gana
        recompensas exclusivas. No te pierdas la oportunidad de demostrar tus
        habilidades y obtener objetos únicos para tu móvil.
</p> </div> `;
}, "C:/Users/DELL/Desktop/astro/guiasweb/src/components/NewsCard.astro", void 0);

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const mobiles = [
    {
      name: "Armor",
      image: "https://headicon.trovo.live/user/hslaqbqaaaaaa6ym4b7a6mgwcy.png?ext=png&t=0"
    },
    {
      name: "Mage",
      image: "https://preview.redd.it/3unf79s9mdh11.jpg?auto=webp&s=b692374a8716bfa332b50142255b4631b8cf62dc"
    },
    {
      name: "Nak",
      image: "https://www.gunbound.pe/Image/slide/01.png"
    },
    {
      name: "Trico",
      image: "https://vgmsite.com/soundtracks/gunbound-2001/Gunbound.png"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="gallery" data-astro-cid-ihllb3az> ${mobiles.map((mobile) => renderTemplate`<img${addAttribute(mobile.image || "/placeholder.svg", "src")}${addAttribute(mobile.name, "alt")} data-astro-cid-ihllb3az>`)} </div> `;
}, "C:/Users/DELL/Desktop/astro/guiasweb/src/components/Gallery.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>
&copy; 2003-2025 ErvicL. Todos los derechos reservados. <a href="#" data-astro-cid-sz7xmlte>Términos de Servicio</a> | <a href="#" data-astro-cid-sz7xmlte>Política de Privacidad</a> </p> </footer> `;
}, "C:/Users/DELL/Desktop/astro/guiasweb/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "GunBound 2007", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<div class="main-content" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "GunboundForm", $$GunboundForm, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "NewsCard", $$NewsCard, { "data-astro-cid-j7pv25f6": true })} </div> ${renderComponent($$result2, "Gallery", $$Gallery, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "C:/Users/DELL/Desktop/astro/guiasweb/src/pages/index.astro", void 0);

const $$file = "C:/Users/DELL/Desktop/astro/guiasweb/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
