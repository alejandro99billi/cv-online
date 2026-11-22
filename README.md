# CV online – Alejandro Salvatierra

CV personale in versione web e stampabile (PDF), costruito con [Astro](https://astro.build/).
Basato sul template [minimalist-portfolio-json](https://github.com/midudev/minimalist-portfolio-json) di midudev
(schema dati [JSON Resume](https://jsonresume.org/schema/)).

Online: https://alejandro99billi.github.io/cv-online/

## Aggiornare i contenuti

Tutti i dati stanno in `cv.json` (esperienze, formazione, progetti, competenze, lingue).
La foto è `public/me.webp`.

## Comandi

| Comando        | Azione                                      |
| -------------- | ------------------------------------------- |
| `pnpm install` | Installa le dipendenze                      |
| `pnpm dev`     | Server locale su `localhost:4321/cv-online` |
| `pnpm build`   | Type check + build in `./dist/`             |
| `pnpm preview` | Anteprima della build                       |

Per il PDF: apri la pagina e premi `Cmd/Ctrl + K` → "Stampa / Salva PDF".

## Deploy

Ogni push su `master` pubblica il sito su GitHub Pages (`.github/workflows/deploy.yml`).
In *Settings → Pages* la sorgente deve essere **GitHub Actions**.

## Licenza

MIT – vedi `LICENSE.txt`.
