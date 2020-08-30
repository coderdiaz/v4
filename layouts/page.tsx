import Head from '../components/Head';
import Header from '../components/Header';
import PageContainer from '../components/PageContainer';
import importScript from '../components/import-script';
import Footer from '../components/Footer';

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
          <PageContainer className="prose">
            {content}
          </PageContainer>
        </main>
        <Footer />
      </>
    )
  }
}