import Link from 'next/link';
import SiteData from '@/seo-next.config';
import OssProjects from '@/data/oss-projects.json';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Shots from '@/components/Shots';
import IShot from '@/interfaces/IShot';
import OpenSourceItem from '@/components/OpenSourceItem';
import Head from '@/components/Head';
import SoftwareEngineering from '@/assets/images/software-engineering.svg';
import UIImage from '@/assets/images/ui-design.svg';
import Mentoring from '@/assets/images/mentoring.svg';
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
    <section className="py-5 md:py-10 lg:pt-10 lg:pb-10 bg-repeat-x" style={{
      backgroundImage: "url('/images/hero-cover.svg')"
    }}>
      <Container className="max-w-3xl">
        <h1 className="text-3.5xl font-display md:text-7.5xl lg:text-8.5xl text-dark-600 dark:text-gray-200 leading-tight mb-6">
          Software Engineer <br /> y Diseñador UI
        </h1>
        <p className="text-gray-900 dark:text-gray-500 md:text-lg leading-loose mb-4">Hola, me llamo <span className="font-semibold">Javier</span> y vivo en Ciudad de México, Ajuaaaa!! Actualmente, estoy desarrollando plataformas y sitios web utilizando Jamstack y trabajando como Líder Técnico en <a className="font-semibold text-primary-300 hover:text-primary-500 transition duration-300 ease-in-out border-b-2 border-primary-300 hover:border-primary-500" href="https://bedu.org">Bedu</a>. Principalmente hago desarrollo <span className="font-medium text-yellow-600">front-end</span> pero también hago <span className="font-medium text-dark dark:text-gray-200">back-end</span>. Además, me gusta compartir y enseñar lo que he aprendido en meetups y conferencias sobre desarrollo web.</p>
        <ul className="flex flex-col">
          <li className="mb-2">
            <a className="inline-block font-semibold text-lg text-primary-300 hover:text-primary-500 transition duration-300 ease-in-out border-b-2 border-primary-300 hover:border-primary-500" href={SiteData.social.twitter}>Encuentrame como @coderdiaz en twitter</a>
          </li>
          <li>
            <Link href="/acerca">
              <a className="inline-block font-semibold text-lg text-primary-300 hover:text-primary-500 transition duration-300 ease-in-out border-b-2 border-primary-300 hover:border-primary-500">Conoce más acerca de mí</a>
            </Link>
          </li>
        </ul>
      </Container>
    </section>
    <section className="py-5 md:pt-10 md:pb-0">
      <Container className="max-w-3xl">
        <h2 className="inline-block font-display text-dark-900 dark:text-gray-200 text-xl md:text-2.5xl mb-6">
          Publicaciones más recientes
        </h2>
        <BlogPost frontMatter={ManyToManyPartOne} />
      </Container>
    </section>
    <section className="pt-5 pb-10 md:py-10 lg:py-20">
      <Container className="max-w-3xl">
        <h2 className="inline-block font-display text-dark-900 dark:text-gray-200 text-xl md:text-2.5xl mb-6">
          En que puedo ayudarte
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="col-span-2 md:col-span-1 p-8 bg-gray-50 dark:bg-gray-300 dark:bg-opacity-50 text-darken text-opacity-75 rounded-lg">
            <img className="mb-4" src={SoftwareEngineering} />
            <h4 className="font-display text-lg md:text-xl mb-2">Desarrollo de Software</h4>
            <p className="text-opacity-50">Construyo experiencias de software increíbles utilizando mis mejores habilidades y tecnologías acorde a tu producto.</p>
          </div>
          <div className="col-span-2 md:col-span-1 p-8 bg-gray-50 dark:bg-gray-300 dark:bg-opacity-50 text-darken text-opacity-75 rounded-lg">
            <img className="mb-4" src={UIImage} />
            <h4 className="font-display text-lg md:text-xl mb-2">Interfaces de Usuario</h4>
            <p className="text-opacity-50">Diseño productos <span className="font-medium">amigables y elegantes</span> para el usuario. Construyo <span className="font-medium">experiencias placenteras</span> que permita a tus usuarios cumplir sus objetivos.</p>
          </div>
          <div className="col-span-2 p-8 bg-gray-50 dark:bg-gray-300 dark:bg-opacity-50 text-darken text-opacity-75 rounded-lg flex flex-col md:flex-row md:items-center">
            <img width="370" className="mb-4 md:mb-0" src={Mentoring} />
            <div className="md:ml-4">
              <h4 className="font-display text-lg md:text-xl mb-2">Mentoría</h4>
              <p className="text-opacity-50">Tienes alguna ídea, consulta o duda sobre algún tema en específico reunámonos y puedo ayudarte a encontrar una solución.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
    <section className="py-5 md:py-10">
      <Container className="max-w-3xl">
        <h2 className="inline-block font-display text-dark-900 dark:text-gray-200 text-xl md:text-2.5xl mb-6">Últimos diseños</h2>
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
        <h2 className="inline-block font-display text-dark-900 dark:text-gray-200 text-xl md:text-2.5xl mb-6">
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