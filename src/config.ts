// Site-wide settings. Everything user-facing and tweakable lives here.

export const SITE = {
  name: 'Shane Carroll',
  title: "Shane Carroll — Product, Systems, and AI",
  // The hero headline, split across two lines; the second line prints red.
  headline: ["A Million Monkeys Typing", "A Million Hampsters Running"],
  // [placeholder] — your words. Shown under the headline on the front page
  // and used as the site description for SEO/RSS.
  standfirst:
    'Personal thoughts on product development in the age of automated intelligence; tenuous scribbles desperately shouted into the void. ',
  email: 'scarroll825@gmail.com',
  github: 'https://github.com/XavierLongview',
  relay: '#', // link to Relay when it has a home
  // GoatCounter site code (the "xyz" in https://xyz.goatcounter.com).
  // Leave empty to ship zero analytics. Create a free account at
  // https://www.goatcounter.com, pick a code, and paste it here.
  goatcounter: '',
};

// Strand → banner color. Strands are free-form; unknown strands fall back
// to ink. One palette, strict jobs.
export const STRAND_COLORS: Record<string, string> = {
  PRACTICE: 'var(--blue)',
  RELAY: 'var(--green)',
  SYSTEMS: 'var(--gold)',
  META: 'var(--red)',
};
