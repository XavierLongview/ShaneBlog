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
