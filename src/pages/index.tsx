import SiteData from '@/seo-next.config';
import OssProjects from '@/data/oss-projects.json';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Shots from '@/components/Shots';
import IShot from '@/interfaces/IShot';
import OpenSourceItem from '@/components/OpenSourceItem';
import Head from '@/components/Head';
import BlogPost from '@/components/BlogPost';

interface IIndexPageProps {
  shots: IShot[];
}

export { getStaticProps } from '@/getStaticProps';

import { frontMatter as ManyToManyPartOne } from './blog/creando-relaciones-many-to-many-con-typeorm-parte-1.mdx';

const IndexPage = ({ shots }: IIndexPageProps) => {
  return <Layout>
    <Head meta={{
      title: "Javier Diaz - Ingeniero de Software y Diseñador UI",
      description: "Ingeniero de Software en Ciudad de México creando increíbles experiencías a través de Jamstack y Microservicios"
    }} />
    <section className="py-5 md:py-10 lg:pt-10 lg:pb-5 bg-repeat-x">
      <Container className="max-w-3xl">
        <h1 className="text-3.5xl font-inter font-bold md:text-4xl text-dark-600 dark:text-gray-200 leading-tight mb-6">
          Hola, soy Javier Diaz
        </h1>
        <p className="text-gray-900 dark:text-gray-500 md:text-lg leading-loose mb-4">Soy <span className="font-semibold">Ingeniero de Software y Diseñador UI</span>. Vivo en Ciudad de México, Ajuaaaa!! Actualmente, estoy desarrollando plataformas y sitios web utilizando Jamstack y trabajando como Líder Técnico en <a className="font-semibold text-primary-300 hover:text-primary-400 transition duration-300 ease-in-out border-b-2 border-primary-300 hover:border-primary-400" href="https://bedu.org">Bedu</a>. Principalmente hago desarrollo <span className="font-medium text-yellow-600">front-end</span> pero también hago <span className="font-medium text-dark dark:text-gray-200">back-end</span>.</p>
      </Container>
    </section>
    <section className="py-5 md:pt-5 md:pb-0">
      <Container className="max-w-3xl">
        <h2 className="inline-block font-inter font-bold text-dark-900 dark:text-gray-200 text-xl md:text-2.5xl mb-6">
          Más popular
        </h2>
        <BlogPost frontMatter={ManyToManyPartOne} />
      </Container>
    </section>
    <section className="py-5 md:py-10">
      <Container className="max-w-3xl">
        <h2 className="inline-block font-inter font-bold text-dark-900 dark:text-gray-200 text-xl md:text-2.5xl mb-6">Últimos diseños</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Shots shots={shots} />
        </div>
        <div className="py-10 text-center">
          <a className="inline-flex items-center p-4 md:py-4 md:px-6 rounded-lg text-primary-400 dark:text-primary-300 font-semibold bg-gray-50 lg:bg-transparent lg:hover:bg-gray-50 dark:bg-dark-800 lg:dark:bg-transparent lg:dark-hover:bg-dark-800 transition duration-300 ease-in-out" href={SiteData.social.dribbble}>
            <span className="hidden md:inline-flex items-center py-1 px-2 bg-primary-400 dark:bg-primary-300 text-white dark:text-darken text-sm rounded uppercase mr-3 leading-none">Nuevo</span>
            <span className="inline-flex mr-2 md:mr-4">Descubre más en Dribbble</span>
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
          Proyectos Open Source
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