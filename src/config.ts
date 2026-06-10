// Site-wide settings. Everything user-facing and tweakable lives here.

export const SITE = {
  name: 'Shane Carroll',
  title: "Shane Carroll — Writing for the World We're Owed",
  // The hero headline, split across two lines; the second line prints red.
  headline: ["Writing for the", "World We're Owed"],
  // [placeholder] — your words. Shown under the headline on the front page
  // and used as the site description for SEO/RSS.
  standfirst:
    'Essays on AI product work, the Maker Framework, building Relay — and the systems thinking that connects good machines to good politics.',
  slogan: 'The future was kept public',
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
