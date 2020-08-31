import Link from 'next/link';
import { parseISO, format } from 'date-fns';

const BlogPost = ({ frontMatter }) => {
  const slug = frontMatter.__resourcePath
    .replace('.mdx', '');
  return <article className="pb-8 text-gray-700">
    <dl>
      <dt className="sr-only">Publicado el</dt>
      <dd className="text-base leading-6 font-medium text-gray-500">
        <time dateTime="2020-08-10T13:30:00.000Z">{format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}</time>
      </dd>
    </dl>
    <Link href={slug}>
      <a className="mb-2 inline-block text-lg md:text-xl font-display text-dark-900 dark:text-gray-200 hover:text-primary-300 dark-hover:text-primary-300 transition duration-300 ease-in-out border-b-2 border-dark-900 dark:border-gray-200 hover:border-primary-300 leading-tight">{frontMatter.title}</a>
    </Link>
    <p className="leading-relaxed dark:text-gray-500">{frontMatter.description}</p>
  </article>
}

export default BlogPost;