import Head from '@/components/Head';
import Header from '@/components/Header';
import Container from '@/components/Container';
import importScript from '@/components/import-script';
import Footer from '@/components/Footer';
import Avatar from '@/assets/images/avatar.png';

export default function Layout(frontMatter) {
  return ({ children: content }) => {
    importScript('/js/prevent.flash.js');

    return (
      <>
        <Head meta={{
          title: frontMatter.title
        }} />
        <Header language={frontMatter.language}/>
        <main className="py-5 md:py-10">
          <article>
            <Container className="max-w-2xl mb-10">
              <h1 className="dark:text-white font-display text-2xl md:text-2.5xl lg:text-3.5xl leading-tight mb-4">
                {frontMatter.title}
              </h1>
              <div className="flex items-center">
                <img className="w-6 rounded-full mr-2" src={Avatar} />
                <div className="inline-block text-gray-600 dark:text-gray-400 text-base">
                  Javier Diaz / {frontMatter.date}
                </div>
              </div>
            </Container>
            <Container className="prose max-w-2xl">
              {content}
            </Container>
          </article>
        </main>
        <Footer />
      </>
    )
  }
}