import rss from '@astrojs/rss';
import { SITE } from '../config';
import { getPosts } from '../lib/posts';

export async function GET(context) {
  const posts = await getPosts();
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return rss({
    title: SITE.name,
    description: SITE.standfirst,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.dek,
      pubDate: post.data.date,
      link: `${base}/posts/${post.id}/`,
    })),
  });
}
