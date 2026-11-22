# CV online – Alejandro Salvatierra

CV personale in versione web e stampabile (PDF), costruito con [Astro](https://astro.build/).
Basato sul template [minimalist-portfolio-json](https://github.com/midudev/minimalist-portfolio-json) di midudev
(schema dati [JSON Resume](https://jsonresume.org/schema/)).

Online: https://alejandro-salvatierra.netlify.app/

## Aggiornare i contenuti

Il CV è disponibile in italiano (`/`, predefinito) e in inglese (`/en/`), con un pulsante IT/EN in alto.

- `cv.json`: contenuti in italiano
- `cv.en.json`: contenuti in inglese (tienilo allineato a `cv.json`)
- `src/i18n.ts`: testi dell'interfaccia (titoli delle sezioni, ecc.)
La foto è `public/me.webp`.

## Comandi

| Comando        | Azione                                      |
| -------------- | ------------------------------------------- |
| `pnpm install` | Installa le dipendenze                      |
| `pnpm dev`     | Server locale su `localhost:4321` |
| `pnpm build`   | Type check + build in `./dist/`             |
| `pnpm preview` | Anteprima della build                       |

Per il PDF: apri la pagina e premi `Cmd/Ctrl + K` → "Stampa / Salva PDF".

## Deploy

Ogni push su `master` viene pubblicato automaticamente da Netlify (configurazione in `netlify.toml`).

## Licenza

MIT – vedi `LICENSE.txt`.
