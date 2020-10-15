import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import es from 'date-fns/locale/es';

const BlogPost = ({ frontMatter }) => {
  const slug = frontMatter.__resourcePath
    .replace('.mdx', '');
  return <article className="pb-8 text-gray-700">
    <dl className="mb-1">
      <dt className="sr-only">Publicado el</dt>
      <dd className="text-sm leading-6 tracking-widest font-semibold text-gray-500 uppercase">
        <time dateTime={frontMatter.date}>
          {format(parseISO(frontMatter.date), 'MMMM dd, yyyy', { locale: es })}
        </time>
      </dd>
    </dl>
    <Link href={slug}>
      <a className="font-inter mb-2 inline-block text-lg font-semibold text-gray-50 hover:text-gray-100 transition duration-300 ease-in-out leading-tight">{frontMatter.title}</a>
    </Link>
    <p className="leading-relaxed text-gray-300">{frontMatter.description}</p>
  </article>
}

export default BlogPost;