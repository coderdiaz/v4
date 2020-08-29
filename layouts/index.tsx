import Head from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import importScript from '../components/import-script';
import PageContainer from '../components/PageContainer';

export default function Layout(frontMatter) {
  return ({ children: content }) => {
    importScript('/js/prevent.flash.js');

    return (
      <>
        <Head meta={{
          title: frontMatter.title
        }} />
        <Header language={frontMatter.language}/>
        <main>
          <PageContainer>
            {content}
          </PageContainer>
        </main>
        <Footer />
      </>
    )
  }
}