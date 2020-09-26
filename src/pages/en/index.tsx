import SiteData from '@/seo-next.config';
import OssProjects from '@/data/en/oss-projects.json';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Shots from '@/components/Shots';
import IShot from '@/interfaces/IShot';
import OpenSourceItem from '@/components/OpenSourceItem';
import Head from '@/components/Head';

export { getStaticProps } from '@/getStaticProps';

interface IIndexPageProps {
  shots: IShot[];
}

const IndexPage = ({ shots }: IIndexPageProps) => {
  return <Layout language="en">
    <Head meta={{
      image: '/og-en.png',
    }} />
    <section className="py-5 md:py-10 lg:pt-10 lg:pb-5 bg-repeat-x">
      <Container className="max-w-3xl">
        <h1 className="text-3.5xl font-inter font-bold md:text-4xl text-dark-600 dark:text-gray-200 leading-tight mb-6">
          Hey, I'm Javier Diaz
        </h1>
        <p className="text-gray-900 dark:text-gray-500 md:text-lg leading-loose mb-4">I'm <span className="font-semibold">Software Engineer and UI Designer</span>. I'm located in Mexico City, Ajuaaa!! Currently, I'm developing platforms and websites using the Jamstack approach, and working as a Tech Lead of Developers Squad at <a className="font-semibold text-primary-300 hover:text-primary-500 transition duration-300 ease-in-out border-b-2 border-primary-300 hover:border-primary-500" href="https://bedu.org">Bedu</a>. I mostly do <span className="font-medium text-yellow-600">front-end</span> development but also <span className="font-medium text-dark dark:text-gray-200">back-end</span>.</p>
      </Container>
    </section>
    <section className="py-5 md:py-10">
      <Container className="max-w-3xl">
        <h2 className="inline-block font-inter font-bold text-dark-900 dark:text-gray-200 text-xl md:text-2.5xl mb-6">My Recent Shots</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Shots shots={shots} />
        </div>
        <div className="py-10 text-center">
          <a className="inline-flex items-center p-4 md:py-4 md:px-6 rounded-lg text-primary-400 dark:text-primary-300 font-semibold bg-gray-50 lg:bg-transparent lg:hover:bg-gray-50 dark:bg-dark-800 lg:dark:bg-transparent lg:dark-hover:bg-dark-800 transition duration-300 ease-in-out" href={SiteData.social.dribbble}>
            <span className="hidden md:inline-flex items-center py-1 px-2 bg-primary-400 dark:bg-primary-300 text-white dark:text-darken text-sm rounded uppercase mr-3 leading-none">New</span>
            <span className="hidden md:inline-flex mr-2 md:mr-4">Discover all shots on Dribbble</span>
            <span className="inline-flex md:hidden mr-2 md:mr-4">Discover more on Dribbble</span>
            <svg width="20" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </Container>
    </section>
    <section className="py-5 md:py-10">
      <Container className="max-w-3xl">
        <h2 className="inline-block font-inter font-bold text-dark-900 dark:text-gray-200 text-xl md:text-2.5xl mb-6">
          OSS Projects
        </h2>
        <div className="-mx-4">
          {OssProjects.projects.map(
            (project, index) => <OpenSourceItem key={index} item={project} />
          )}
        </div>
      </Container>
    </section>
  </Layout>;
};


export default IndexPage;