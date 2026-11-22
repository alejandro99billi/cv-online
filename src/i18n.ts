import cvIt from "../cv.json"
import cvEn from "../cv.en.json"

export const LANGS = ["it", "en"] as const
export type Lang = (typeof LANGS)[number]
export const DEFAULT_LANG: Lang = "it"

const CV = { it: cvIt, en: cvEn }

export const getCv = (lang: Lang) => CV[lang]

/** Percorso della pagina in una lingua: l'italiano è alla radice, le altre in /<lang>/ */
export const langPath = (lang: Lang) => (lang === DEFAULT_LANG ? "/" : `/${lang}/`)

export const ui = {
  it: {
    locale: "it-IT",
    pageTitle: (name: string, label: string) => `CV di ${name} - ${label}`,
    about: "Chi sono",
    experience: "Esperienza professionale",
    education: "Formazione",
    projects: "Progetti",
    skills: "Competenze",
    languages: "Lingue",
    present: "Presente",
    see: (name: string) => `Vedi ${name}`,
    seeProject: (name: string) => `Vedi il progetto ${name}`,
    seeCode: (name: string) => `Vedi il codice sorgente di ${name}`,
    sendMail: (name: string, email: string) => `Invia una email a ${name} (${email})`,
    call: (name: string, phone: string) => `Chiama ${name} al numero ${phone}`,
    visitProfile: (name: string, network: string) => `Visita il profilo di ${name} su ${network}`,
    visit: (network: string) => `Visita ${network}`,
    searchCommand: "Cerca comando",
    print: "Stampa / Salva PDF",
    actions: "Azioni",
    paletteHint: "Premi <kbd>Cmd</kbd> + <kbd>K</kbd> per aprire la palette dei comandi.",
    switchTo: "Read in English",
    languageNames: { Spanish: "Spagnolo", Italian: "Italiano", English: "Inglese" } as Record<string, string>,
  },
  en: {
    locale: "en-GB",
    pageTitle: (name: string, label: string) => `${name} - ${label} | CV`,
    about: "About me",
    experience: "Work experience",
    education: "Education",
    projects: "Projects",
    skills: "Skills",
    languages: "Languages",
    present: "Present",
    see: (name: string) => `Visit ${name}`,
    seeProject: (name: string) => `See the ${name} project`,
    seeCode: (name: string) => `See the source code of ${name}`,
    sendMail: (name: string, email: string) => `Send an email to ${name} (${email})`,
    call: (name: string, phone: string) => `Call ${name} at ${phone}`,
    visitProfile: (name: string, network: string) => `Visit ${name}'s ${network} profile`,
    visit: (network: string) => `Visit ${network}`,
    searchCommand: "Search command",
    print: "Print / Save PDF",
    actions: "Actions",
    paletteHint: "Press <kbd>Cmd</kbd> + <kbd>K</kbd> to open the command palette.",
    switchTo: "Leggi in italiano",
    languageNames: { Spanish: "Spanish", Italian: "Italian", English: "English" } as Record<string, string>,
  },
} satisfies Record<Lang, unknown>
