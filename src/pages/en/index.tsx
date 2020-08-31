import { GetStaticProps } from 'next';
import Link from 'next/link';
import SiteData from '@/seo-next.config';
import OssProjects from '@/data/en/oss-projects.json';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Shots from '@/components/Shots';
import IShot from '@/interfaces/IShot';
import OpenSourceItem from '@/components/OpenSourceItem';
import SoftwareEngineering from '@/assets/images/software-engineering.svg';
import UIImage from '@/assets/images/ui-design.svg';
import Mentoring from '@/assets/images/mentoring.svg';
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
    <section className="py-5 md:py-10 lg:pt-20 lg:pb-0 bg-repeat-x" style={{
      backgroundImage: "url('/images/hero-cover.svg')"
    }}>
      <Container className="max-w-3xl">
        <h1 className="text-3.5xl font-display md:text-7.5xl lg:text-8.5xl text-dark-600 dark:text-gray-200 leading-tight mb-6">
          Software Engineer <br />and UI Designer
        </h1>
        <p className="text-gray-900 dark:text-gray-500 md:text-lg leading-loose mb-4">Hi there, my name is <span className="font-semibold">Javier</span>. I'm located in Mexico City, Ajuaaa!! Currently, I'm developing platforms and websites using the Jamstack approach, and working as a Tech Lead of Developers Squad at <a className="font-semibold text-primary-300 hover:text-primary-500 transition duration-300 ease-in-out border-b-2 border-primary-300 hover:border-primary-500" href="https://bedu.org">Bedu</a>. I mostly do <span className="font-medium text-yellow-600">front-end</span> development but also <span className="font-medium text-dark dark:text-gray-200">back-end</span>.</p>
        <p className="text-gray-900 dark:text-gray-500 md:text-lg leading-loose mb-4">Also, I like to share and teach what I learned in meetings and conferences about web development and also help people grow using software. If you want to learn about web development and software engineering, I am creating educative content on Youtube on my channel called <a className="font-semibold text-primary-300 hover:text-primary-500 transition duration-300 ease-in-out border-b-2 border-primary-300 hover:border-primary-500" href="https://twitter.com/dimeloencodigo">@dimeloencodigo</a>.
        </p>
        <ul className="flex flex-col">
          <li className="mb-2">
            <a className="inline-block font-semibold text-primary-300 hover:text-primary-500 transition duration-300 ease-in-out border-b-2 border-primary-300 hover:border-primary-500" href={SiteData.social.twitter}>@coderdiaz on twitter</a>
          </li>
          <li>
            <Link href="/acerca">
              <a className="inline-block font-semibold text-primary-300 hover:text-primary-500 transition duration-300 ease-in-out border-b-2 border-primary-300 hover:border-primary-500">More about me</a>
            </Link>
          </li>
        </ul>
      </Container>
    </section>
    <section className="pt-5 pb-10 md:py-10 lg:py-20">
      <Container className="max-w-3xl">
        <h2 className="inline-block font-display text-dark-900 dark:text-gray-200 text-xl md:text-2.5xl mb-6">
          What I can help you with
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="col-span-2 md:col-span-1 p-8 bg-gray-50 dark:bg-gray-300 dark:bg-opacity-50 text-darken text-opacity-75 rounded-lg">
            <img className="mb-4" src={SoftwareEngineering} />
            <h4 className="font-display text-lg md:text-xl mb-2">Software Development</h4>
            <p className="text-opacity-75">I build awesome software experiences using the best skills and technologies according to product.</p>
          </div>
          <div className="col-span-2 md:col-span-1 p-8 bg-gray-50 dark:bg-gray-300 dark:bg-opacity-50 text-darken text-opacity-75 rounded-lg">
            <img className="mb-4" src={UIImage} />
            <h4 className="font-display text-lg md:text-xl mb-2">UI Design</h4>
            <p className="text-opacity-75">I design <span className="font-medium">user friendly and visually</span> products. I craft <span className="font-medium">delightful experiences</span> that let users achieve their goals.</p>
          </div>
          <div className="col-span-2 p-8 bg-gray-50 dark:bg-gray-300 dark:bg-opacity-50 text-darken text-opacity-75 rounded-lg flex flex-col md:flex-row md:items-center">
            <img width="370" className="mb-4" src={Mentoring} />
            <div className="md:ml-4">
              <h4 className="font-display text-lg md:text-xl mb-2">Mentoring</h4>
              <p className="text-opacity-50">Do you have any ideas, questions or doubts about a specific topic, let's meet and I can help you find a solution.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
    <section className="hidden py-5 md:py-10">
      <Container className="max-w-3xl">
        <h2 className="inline-block font-display text-dark-900 dark:text-gray-200 text-xl md:text-2.5xl mb-6">Latests Posts</h2>
        <div className="">
          <article className="pb-8 text-gray-700">
            <dl>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base leading-6 font-medium text-gray-500">
                <time dateTime="2020-08-10T13:30:00.000Z">August 21, 2020</time>
              </dd>
            </dl>
            <h3 className="mb-1 text-lg md:text-xl font-semibold text-dark-900 dark:text-gray-200 hover:text-primary-800 dark-hover:text-primary-500 transition duration-300 ease-in-out">
              <Link href="/">
                <a>Loremp Ipsum</a>
              </Link>
            </h3>
            <p className="md:text-lg leading-relaxed dark:text-gray-500">Alias culpa quae pariatur veniam explicabo vero quas optio. Nihil et error vel ut exercitationem fuga. Magni perspiciatis nulla corrupti fugiat.</p>
          </article>
        </div>
      </Container>
    </section>
    <section className="py-5 md:py-10">
      <Container className="max-w-3xl">
        <h2 className="inline-block font-display text-dark-900 dark:text-gray-200 text-xl md:text-2.5xl mb-6">My Recent Shots</h2>
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
        <h2 className="inline-block font-display text-dark-900 dark:text-gray-200 text-xl md:text-2.5xl mb-6">
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