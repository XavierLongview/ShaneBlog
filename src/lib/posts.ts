import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'> & { number: number; minutes: number };

const WORDS_PER_MINUTE = 220;

function readingMinutes(body: string | undefined): number {
  if (!body) return 1;
  const words = body
    .replace(/```[\s\S]*?```/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

/**
 * All publishable posts, numbered chronologically (№ 1 = oldest) and
 * returned newest-first. Drafts are included in dev, excluded in builds.
 */
export async function getPosts(): Promise<Post[]> {
  const all = await getCollection('posts', ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );
  const chronological = all.sort(
    (a, b) => a.data.date.valueOf() - b.data.date.valueOf(),
  );
  const numbered = chronological.map((post, i) => ({
    ...post,
    number: i + 1,
    minutes: readingMinutes(post.body),
  }));
  return numbered.reverse();
}

export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function monthYear(d: Date): string {
  return d
    .toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' })
    .toUpperCase();
}
