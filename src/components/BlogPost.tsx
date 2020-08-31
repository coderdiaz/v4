import Link from 'next/link';

const BlogPost = ({ frontMatter }) => {
  const slug = frontMatter.__resourcePath
    .replace('.mdx', '');
  return <article className="pb-8 text-gray-700">
    <dl>
      <dt className="sr-only">Publicado el</dt>
      <dd className="text-base leading-6 font-medium text-gray-500">
        <time dateTime="2020-08-10T13:30:00.000Z">31 de Agosto, 2020</time>
      </dd>
    </dl>
    <h3 className="mb-1 text-lg md:text-xl font-display text-dark-900 dark:text-gray-200 hover:text-primary-800 dark-hover:text-primary-500 transition duration-300 ease-in-out">
      <Link href={slug}>
        <a>{frontMatter.title}</a>
      </Link>
    </h3>
    <p className="md:text-lg leading-relaxed dark:text-gray-500">{frontMatter.description}</p>
  </article>
}

export default BlogPost;