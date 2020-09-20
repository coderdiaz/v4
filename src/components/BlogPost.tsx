import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import es from 'date-fns/locale/es';

const BlogPost = ({ frontMatter }) => {
  const slug = frontMatter.__resourcePath
    .replace('.mdx', '');
  return <article className="pb-8 text-gray-700">
    <dl className="mb-1">
      <dt className="sr-only">Publicado el</dt>
      <dd className="text-sm leading-6 tracking-wider font-medium text-gray-500 uppercase">
        <time dateTime={frontMatter.date}>
          {format(parseISO(frontMatter.date), 'MMMM dd, yyyy', { locale: es })}
        </time>
      </dd>
    </dl>
    <Link href={slug}>
      <a className="mb-2 inline-block text-lg font-semibold text-primary-500 hover:text-primary-600 dark:text-primary-300 dark-hover:text-primary-400 transition duration-300 ease-in-out leading-tight">{frontMatter.title}</a>
    </Link>
    <p className="leading-relaxed dark:text-gray-500">{frontMatter.description}</p>
  </article>
}

export default BlogPost;