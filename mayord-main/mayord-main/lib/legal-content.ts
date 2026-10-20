import { PHONE, siteConfig } from "@/lib/data"
import type { Locale } from "@/lib/i18n"

export const LEGAL_LAST_UPDATED = "2026-10-20"

export interface LegalSection {
  id: string
  heading: string
  paragraphs?: string[]
  list?: string[]
  table?: { headers: string[]; rows: string[][] }
}

export interface LegalDocument {
  title: string
  updatedLabel: string
  intro: string
  sections: LegalSection[]
}

export type LegalDocKey = "privacy" | "cookies" | "terms"

const ADDRESS = siteConfig.address.full
const NAME = siteConfig.name

const cookieRowsEn: string[][] = [
  ["mayord_consent", "Strictly necessary", NAME, "Stores your cookie choices so we do not ask again.", "12 months"],
  ["_ga, _ga_*", "Analytics", "Google Analytics", "Distinguishes visitors and measures page views. Only set after you opt in.", "Up to 13 months"],
  ["_gcl_au, _gcl_aw", "Marketing", "Google Ads", "Attributes calls and form leads to an ad click. Only set after you opt in.", "90 days"],
  ["NID, AEC and related", "Functional", "Google Maps (google.com)", "Set by the embedded map when you choose to load it.", "Up to 6 months"],
]

const cookieRowsEs: string[][] = [
  ["mayord_consent", "Estrictamente necesaria", NAME, "Guarda sus preferencias de cookies para no volver a preguntarle.", "12 meses"],
  ["_ga, _ga_*", "Analítica", "Google Analytics", "Distingue visitantes y mide visitas. Solo se instala si usted lo acepta.", "Hasta 13 meses"],
  ["_gcl_au, _gcl_aw", "Marketing", "Google Ads", "Atribuye llamadas y formularios a un clic de anuncio. Solo si usted lo acepta.", "90 días"],
  ["NID, AEC y relacionadas", "Funcional", "Google Maps (google.com)", "Las instala el mapa incrustado cuando usted decide cargarlo.", "Hasta 6 meses"],
]

const en: Record<LegalDocKey, LegalDocument> = {
  privacy: {
    title: "Privacy Policy",
    updatedLabel: "Last updated",
    intro: `This Privacy Policy explains how ${NAME} ("we", "us") collects, uses, and protects personal information when you visit mayord.us, call or message us, or request a service. We keep data collection to the minimum needed to serve you.`,
    sections: [
      {
        id: "information-we-collect",
        heading: "Information we collect",
        list: [
          "Information you give us: your name, phone number, email (optional), vehicle details, the service you need, and any message you send through our contact form, phone, or WhatsApp.",
          "Location you share: if you request mobile tire service, the address or location where you need help.",
          "Device and usage data: pages visited, approximate location derived from IP, browser type, and referring ad — collected only through analytics or advertising cookies you have allowed.",
        ],
        paragraphs: [
          "We do not collect payment card numbers through this website. Payments are made in person at the shop or at the service location.",
        ],
      },
      {
        id: "how-we-use",
        heading: "How we use your information",
        list: [
          "To respond to your request, give quotes, and schedule or perform tire services.",
          "To contact you by phone, text, WhatsApp, or email about your request.",
          "To understand how our website performs and improve it (only with analytics consent).",
          "To measure which ads lead to calls or requests (only with marketing consent).",
          "To keep our website secure, prevent abuse, and comply with legal obligations.",
        ],
      },
      {
        id: "sharing",
        heading: "How we share information",
        paragraphs: [
          "We do not sell your personal information and we do not share it for cross-context behavioral advertising without your consent.",
          "We share data only with service providers that help us operate: our website host (Vercel), Google (Analytics, Ads, and Maps, when you allow them), and WhatsApp/Meta when you choose to message us there. These providers process data under their own privacy terms. We may also disclose information when required by law or to protect our rights and safety.",
        ],
      },
      {
        id: "cookies",
        heading: "Cookies and your choices",
        paragraphs: [
          "Non-essential cookies are off by default. You can accept, reject, or customize them in our cookie banner, and change your choice at any time with the “Cookie settings” link in the footer. We honor the Global Privacy Control (GPC) browser signal as a request to opt out of analytics and advertising cookies. See our Cookie Policy for details.",
        ],
      },
      {
        id: "retention",
        heading: "Data retention",
        paragraphs: [
          "We keep contact requests and service records only as long as needed to serve you and meet tax, warranty, and legal obligations — generally no longer than 3 years. Analytics data is retained for up to 14 months.",
        ],
      },
      {
        id: "security",
        heading: "How we protect your information",
        paragraphs: [
          "Our website is served exclusively over HTTPS with HSTS, uses strict security headers, and limits which third parties can load content. Access to customer information is restricted to staff who need it. No method of transmission or storage is 100% secure, but we work to protect your data and will notify you as required by Maryland law if a breach affects you.",
        ],
      },
      {
        id: "your-rights",
        heading: "Your privacy rights",
        paragraphs: [
          "Depending on where you live, including under the Maryland Online Data Privacy Act, you may have the right to:",
        ],
        list: [
          "Know and access the personal information we hold about you.",
          "Correct inaccurate information.",
          "Delete your personal information.",
          "Get a portable copy of your information.",
          "Opt out of targeted advertising, the sale of personal data, and profiling.",
          "Appeal our decision if we deny your request.",
        ],
      },
      {
        id: "exercise-rights",
        heading: "How to exercise your rights",
        paragraphs: [
          `Call or text us at ${PHONE}, or visit us at ${ADDRESS}. We will verify your request and respond within 45 days. If we decline, you may appeal by replying to our decision; if you remain unsatisfied, you may contact the Maryland Attorney General’s Consumer Protection Division. We will never discriminate against you for exercising your rights.`,
        ],
      },
      {
        id: "children",
        heading: "Children’s privacy",
        paragraphs: [
          "Our website and services are intended for adults. We do not knowingly collect personal information from children under 13, and we do not process data of anyone under 18 for targeted advertising.",
        ],
      },
      {
        id: "changes",
        heading: "Changes to this policy",
        paragraphs: [
          "We may update this policy from time to time. The “Last updated” date above shows when it was last changed. Material changes will be highlighted on this page.",
        ],
      },
      {
        id: "contact",
        heading: "Contact us",
        paragraphs: [`${NAME}, ${ADDRESS}. Phone: ${PHONE}.`],
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    updatedLabel: "Last updated",
    intro: `This Cookie Policy explains which cookies and similar technologies ${NAME} uses on mayord.us, why, and how you control them. Only strictly necessary storage is used until you make a choice.`,
    sections: [
      {
        id: "what-are-cookies",
        heading: "What are cookies?",
        paragraphs: [
          "Cookies are small text files a website stores in your browser. Some are needed for the site to work; others help us measure visits or show the embedded map. Similar technologies such as pixels and local storage are covered by this policy too.",
        ],
      },
      {
        id: "categories",
        heading: "Categories we use",
        list: [
          "Strictly necessary — remember your cookie choices and keep the site secure. Always on.",
          "Functional — load the embedded Google Map. Off until you allow it or click “Load map”.",
          "Analytics — Google Analytics measures traffic in aggregate. Off until you opt in.",
          "Marketing — Google Ads conversion tracking measures which ads lead to calls or requests. Off until you opt in.",
        ],
      },
      {
        id: "cookie-list",
        heading: "Cookies on this site",
        table: {
          headers: ["Cookie", "Category", "Provider", "Purpose", "Duration"],
          rows: cookieRowsEn,
        },
      },
      {
        id: "consent-mode",
        heading: "Google Consent Mode",
        paragraphs: [
          "We use Google Consent Mode v2. Until you consent, Google tags run in a restricted mode that sets no analytics or advertising cookies and sends no ad identifiers. If you reject, nothing changes. If you accept, the tags begin storing cookies as described above.",
        ],
      },
      {
        id: "manage",
        heading: "Managing your preferences",
        paragraphs: [
          "Use the button below or the “Cookie settings” link in the footer at any time to review or withdraw consent. Withdrawing consent stops future collection; you can also delete existing cookies in your browser settings. If your browser sends a Global Privacy Control signal, we treat it as a refusal of analytics and marketing cookies.",
        ],
      },
      {
        id: "contact",
        heading: "Questions",
        paragraphs: [`Call or text ${PHONE}, or visit ${ADDRESS}.`],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updatedLabel: "Last updated",
    intro: `These Terms govern your use of mayord.us and the information on it, operated by ${NAME}. By using the site you agree to these Terms.`,
    sections: [
      {
        id: "website-use",
        heading: "Use of the website",
        paragraphs: [
          "You may use this website for personal, lawful purposes. You agree not to attempt to disrupt the site, probe it for vulnerabilities without permission, scrape it at scale, or submit false, abusive, or automated requests.",
        ],
      },
      {
        id: "quotes",
        heading: "Prices, quotes, and availability",
        paragraphs: [
          "Prices, tire inventory, hours, and mobile service coverage shown on the website are informational and may change without notice. A quote is confirmed only after we inspect your vehicle or confirm details with you. Used tire availability is limited to stock on hand.",
        ],
      },
      {
        id: "services",
        heading: "Services and safety",
        paragraphs: [
          "All work is performed according to industry safety standards. Some tires cannot be safely repaired; in that case we will recommend replacement. Guidance on this website is general information, not a substitute for an in-person inspection.",
        ],
      },
      {
        id: "communications",
        heading: "Calls, texts, and WhatsApp",
        paragraphs: [
          "When you contact us, you agree that we may reply by the channel you used or the details you provided, only about your request. We do not send marketing text messages without your separate consent. Message and data rates may apply.",
        ],
      },
      {
        id: "third-party",
        heading: "Third-party links and services",
        paragraphs: [
          "The website links to or embeds services such as Google Maps, Yelp, Facebook, and WhatsApp. We are not responsible for their content or privacy practices, which are governed by their own terms.",
        ],
      },
      {
        id: "ip",
        heading: "Intellectual property",
        paragraphs: [
          `The ${NAME} name, logo, photos, and website content belong to us or our licensors and may not be copied for commercial use without permission.`,
        ],
      },
      {
        id: "disclaimer",
        heading: "Disclaimer and limitation of liability",
        paragraphs: [
          "The website is provided “as is”. To the extent permitted by law, we are not liable for indirect or consequential damages arising from use of the website. Nothing in these Terms limits rights you have under Maryland consumer protection law or any warranty that applies to work we perform.",
        ],
      },
      {
        id: "law",
        heading: "Governing law",
        paragraphs: ["These Terms are governed by the laws of the State of Maryland, USA."],
      },
      {
        id: "contact",
        heading: "Contact",
        paragraphs: [`${NAME}, ${ADDRESS}. Phone: ${PHONE}.`],
      },
    ],
  },
}

const es: Record<LegalDocKey, LegalDocument> = {
  privacy: {
    title: "Política de Privacidad",
    updatedLabel: "Última actualización",
    intro: `Esta Política de Privacidad explica cómo ${NAME} ("nosotros") recopila, usa y protege su información personal cuando visita mayord.us, nos llama o escribe, o solicita un servicio. Recopilamos solo lo necesario para atenderle.`,
    sections: [
      {
        id: "informacion-que-recopilamos",
        heading: "Información que recopilamos",
        list: [
          "Información que usted nos da: nombre, teléfono, correo (opcional), datos del vehículo, el servicio que necesita y cualquier mensaje enviado por el formulario, teléfono o WhatsApp.",
          "Ubicación que comparte: si solicita servicio móvil, la dirección o lugar donde necesita ayuda.",
          "Datos del dispositivo y de uso: páginas visitadas, ubicación aproximada por IP, tipo de navegador y anuncio de origen — solo mediante cookies de analítica o publicidad que usted haya permitido.",
        ],
        paragraphs: [
          "No recopilamos números de tarjeta a través de este sitio. Los pagos se realizan en persona en el taller o en el lugar del servicio.",
        ],
      },
      {
        id: "como-usamos",
        heading: "Cómo usamos su información",
        list: [
          "Para responder a su solicitud, dar cotizaciones y programar o realizar servicios.",
          "Para contactarle por teléfono, mensaje de texto, WhatsApp o correo sobre su solicitud.",
          "Para entender y mejorar el funcionamiento del sitio (solo con consentimiento de analítica).",
          "Para medir qué anuncios generan llamadas o solicitudes (solo con consentimiento de marketing).",
          "Para mantener el sitio seguro, prevenir abusos y cumplir obligaciones legales.",
        ],
      },
      {
        id: "compartir",
        heading: "Cómo compartimos la información",
        paragraphs: [
          "No vendemos su información personal ni la compartimos para publicidad conductual sin su consentimiento.",
          "Solo compartimos datos con proveedores que nos ayudan a operar: nuestro hosting (Vercel), Google (Analytics, Ads y Maps, cuando usted los permite) y WhatsApp/Meta cuando decide escribirnos por ahí. Estos proveedores tratan los datos según sus propias políticas. También podemos divulgar información cuando la ley lo exija o para proteger nuestros derechos y seguridad.",
        ],
      },
      {
        id: "cookies",
        heading: "Cookies y sus opciones",
        paragraphs: [
          "Las cookies no esenciales están desactivadas por defecto. Puede aceptarlas, rechazarlas o personalizarlas en el aviso de cookies y cambiar su decisión en cualquier momento con el enlace “Configuración de cookies” del pie de página. Respetamos la señal Global Privacy Control (GPC) como una solicitud de exclusión de analítica y publicidad. Consulte nuestra Política de Cookies.",
        ],
      },
      {
        id: "conservacion",
        heading: "Conservación de datos",
        paragraphs: [
          "Conservamos solicitudes y registros de servicio solo el tiempo necesario para atenderle y cumplir obligaciones fiscales, de garantía y legales — generalmente no más de 3 años. Los datos de analítica se conservan hasta 14 meses.",
        ],
      },
      {
        id: "seguridad",
        heading: "Cómo protegemos su información",
        paragraphs: [
          "Nuestro sitio funciona exclusivamente con HTTPS y HSTS, usa cabeceras de seguridad estrictas y limita qué terceros pueden cargar contenido. El acceso a la información de clientes se restringe al personal que la necesita. Ningún sistema es 100% seguro, pero trabajamos para proteger sus datos y le notificaremos según la ley de Maryland si una brecha le afecta.",
        ],
      },
      {
        id: "sus-derechos",
        heading: "Sus derechos de privacidad",
        paragraphs: [
          "Según donde viva, incluida la Ley de Privacidad de Datos en Línea de Maryland (MODPA), usted puede tener derecho a:",
        ],
        list: [
          "Conocer y acceder a la información personal que tenemos sobre usted.",
          "Corregir información inexacta.",
          "Eliminar su información personal.",
          "Obtener una copia portátil de su información.",
          "Excluirse de la publicidad dirigida, la venta de datos personales y la elaboración de perfiles.",
          "Apelar nuestra decisión si rechazamos su solicitud.",
        ],
      },
      {
        id: "ejercer-derechos",
        heading: "Cómo ejercer sus derechos",
        paragraphs: [
          `Llámenos o escríbanos al ${PHONE}, o visítenos en ${ADDRESS}. Verificaremos su solicitud y responderemos en un plazo de 45 días. Si la rechazamos, puede apelar respondiendo a nuestra decisión; si sigue inconforme, puede contactar a la División de Protección al Consumidor del Fiscal General de Maryland. Nunca le discriminaremos por ejercer sus derechos.`,
        ],
      },
      {
        id: "menores",
        heading: "Privacidad de menores",
        paragraphs: [
          "Nuestro sitio y servicios están dirigidos a adultos. No recopilamos a sabiendas información de menores de 13 años ni tratamos datos de menores de 18 para publicidad dirigida.",
        ],
      },
      {
        id: "cambios",
        heading: "Cambios a esta política",
        paragraphs: [
          "Podemos actualizar esta política. La fecha de “Última actualización” indica el último cambio. Los cambios importantes se destacarán en esta página.",
        ],
      },
      {
        id: "contacto",
        heading: "Contáctenos",
        paragraphs: [`${NAME}, ${ADDRESS}. Teléfono: ${PHONE}.`],
      },
    ],
  },
  cookies: {
    title: "Política de Cookies",
    updatedLabel: "Última actualización",
    intro: `Esta Política de Cookies explica qué cookies y tecnologías similares usa ${NAME} en mayord.us, para qué y cómo puede controlarlas. Hasta que usted decida, solo se usa el almacenamiento estrictamente necesario.`,
    sections: [
      {
        id: "que-son",
        heading: "¿Qué son las cookies?",
        paragraphs: [
          "Las cookies son pequeños archivos de texto que un sitio guarda en su navegador. Algunas son necesarias para que funcione; otras nos ayudan a medir visitas o mostrar el mapa. Esta política también cubre tecnologías similares como píxeles y almacenamiento local.",
        ],
      },
      {
        id: "categorias",
        heading: "Categorías que usamos",
        list: [
          "Estrictamente necesarias — recuerdan sus preferencias y mantienen el sitio seguro. Siempre activas.",
          "Funcionales — cargan el mapa de Google. Desactivadas hasta que las permita o pulse “Cargar mapa”.",
          "Analítica — Google Analytics mide el tráfico de forma agregada. Desactivadas hasta que las acepte.",
          "Marketing — la medición de conversiones de Google Ads indica qué anuncios generan llamadas o solicitudes. Desactivadas hasta que las acepte.",
        ],
      },
      {
        id: "lista-de-cookies",
        heading: "Cookies en este sitio",
        table: {
          headers: ["Cookie", "Categoría", "Proveedor", "Finalidad", "Duración"],
          rows: cookieRowsEs,
        },
      },
      {
        id: "consent-mode",
        heading: "Google Consent Mode",
        paragraphs: [
          "Usamos Google Consent Mode v2. Hasta que usted dé su consentimiento, las etiquetas de Google funcionan en modo restringido: no instalan cookies de analítica ni publicidad y no envían identificadores publicitarios. Si rechaza, nada cambia. Si acepta, comienzan a usar las cookies descritas arriba.",
        ],
      },
      {
        id: "gestionar",
        heading: "Cómo gestionar sus preferencias",
        paragraphs: [
          "Use el botón de abajo o el enlace “Configuración de cookies” del pie de página en cualquier momento para revisar o retirar su consentimiento. Retirarlo detiene la recopilación futura; también puede borrar las cookies existentes en su navegador. Si su navegador envía la señal Global Privacy Control, la tratamos como un rechazo de analítica y marketing.",
        ],
      },
      {
        id: "preguntas",
        heading: "Preguntas",
        paragraphs: [`Llame o escriba al ${PHONE}, o visítenos en ${ADDRESS}.`],
      },
    ],
  },
  terms: {
    title: "Términos de Servicio",
    updatedLabel: "Última actualización",
    intro: `Estos Términos rigen el uso de mayord.us y su contenido, operado por ${NAME}. Al usar el sitio, usted acepta estos Términos.`,
    sections: [
      {
        id: "uso-del-sitio",
        heading: "Uso del sitio",
        paragraphs: [
          "Puede usar este sitio con fines personales y legales. Se compromete a no intentar interrumpirlo, buscar vulnerabilidades sin permiso, extraer contenido de forma masiva ni enviar solicitudes falsas, abusivas o automatizadas.",
        ],
      },
      {
        id: "precios",
        heading: "Precios, cotizaciones y disponibilidad",
        paragraphs: [
          "Los precios, inventario, horarios y cobertura del servicio móvil son informativos y pueden cambiar sin aviso. Una cotización se confirma solo después de inspeccionar su vehículo o confirmar los detalles con usted. La disponibilidad de llantas usadas se limita al inventario existente.",
        ],
      },
      {
        id: "servicios",
        heading: "Servicios y seguridad",
        paragraphs: [
          "Todo el trabajo se realiza según estándares de seguridad de la industria. Algunas llantas no pueden repararse con seguridad; en ese caso recomendaremos reemplazarlas. La información de este sitio es general y no sustituye una inspección en persona.",
        ],
      },
      {
        id: "comunicaciones",
        heading: "Llamadas, mensajes y WhatsApp",
        paragraphs: [
          "Al contactarnos, acepta que le respondamos por el mismo medio o con los datos que proporcionó, solo sobre su solicitud. No enviamos mensajes de marketing sin su consentimiento por separado. Pueden aplicar cargos de mensajes y datos.",
        ],
      },
      {
        id: "terceros",
        heading: "Enlaces y servicios de terceros",
        paragraphs: [
          "El sitio enlaza o incrusta servicios como Google Maps, Yelp, Facebook y WhatsApp. No somos responsables de su contenido ni de sus prácticas de privacidad, que se rigen por sus propios términos.",
        ],
      },
      {
        id: "propiedad-intelectual",
        heading: "Propiedad intelectual",
        paragraphs: [
          `El nombre, logotipo, fotos y contenido de ${NAME} nos pertenecen a nosotros o a nuestros licenciantes y no pueden copiarse con fines comerciales sin permiso.`,
        ],
      },
      {
        id: "limitacion",
        heading: "Exención y limitación de responsabilidad",
        paragraphs: [
          "El sitio se ofrece “tal cual”. En la medida permitida por la ley, no somos responsables de daños indirectos derivados de su uso. Nada en estos Términos limita sus derechos bajo la ley de protección al consumidor de Maryland ni las garantías aplicables al trabajo que realizamos.",
        ],
      },
      {
        id: "ley",
        heading: "Ley aplicable",
        paragraphs: ["Estos Términos se rigen por las leyes del Estado de Maryland, EE. UU."],
      },
      {
        id: "contacto",
        heading: "Contacto",
        paragraphs: [`${NAME}, ${ADDRESS}. Teléfono: ${PHONE}.`],
      },
    ],
  },
}

export const legalContent: Record<Locale, Record<LegalDocKey, LegalDocument>> = { en, es }
