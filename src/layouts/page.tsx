import Head from '../components/Head';
import Header from '../components/Header';
import Container from '../components/Container';
import importScript from '../components/import-script';
import Footer from '../components/Footer';

export default function Layout({ children: content, frontMatter }) {
  importScript('/js/prevent.flash.js');
  return (
    <>
      <Head language={frontMatter.language} meta={{
        title: frontMatter.title,
        description: frontMatter.description
      }} />
      <Header language={frontMatter.language}/>
      <main className="py-5 md:py-10">
        <Container className="prose max-w-3xl">
          {content}
        </Container>
      </main>
      <Footer />
    </>
  );
}