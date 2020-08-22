import { GetStaticProps } from 'next';
import Link from 'next/link';
import SiteData from '../site.json';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Shots from '../components/Shots';
import IShot from '../interfaces/IShot';

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.dribbble.com/v2/user/shots?per_page=4', {
    headers: {
      authorization: `Bearer ${process.env.DRIBBBLE_TOKEN}`,
    },
  });
  const shots = await res.json();

  return {
    props: {
      shots,
    },
  };
}

interface IIndexPageProps {
  shots: IShot[];
}

const IndexPage = ({ shots }: IIndexPageProps) => {
  return <Layout>
    <section className="py-5 md:py-10 lg:py-20">
      <Container>
        <h1 className="text-2.5xl sm:text-3.5xl md:text-7.5xl lg:text-10xl font-extrabold text-dark-600 leading-tight mb-6">
          Software Engineer <br />and UI Designer
        </h1>
        <p className="text-gray-900 md:text-lg lg:text-xl leading-loose mb-4">Hi there, my name is <span className="font-semibold">Javier</span>. I'm based on Mexico City, Mexico, Ajuaaa!! Currently, I'm creating platforms and websites using the Jamstack approach; and working as a Tech Lead of Developers Squad at <a className="font-semibold text-primary-300 hover:text-primary-600 transition duration-300 ease-in-out underline" href="https://bedu.org">Bedu</a>. I mostly do <span className="font-medium text-yellow-600">front-end</span> but I also do <span className="font-medium text-alternative-600">back-end</span> development.</p>
        <p className="text-gray-900 md:text-lg lg:text-xl leading-loose mb-2">Now, I'm learning Flutter to create an application to manage my personal finances and web subscriptions. Too, I also share what I learn at meetups and conferences and sometimes I teach about web development.</p>
      </Container>
    </section>
    <section className="py-5 md:py-10">
      <Container>
        <h2 className="inline-block font-extrabold text-dark-900 text-xl md:text-2.5xl mb-6">Latests Posts</h2>
        <div className="">
          <article className="pb-8 text-gray-700">
            <dl>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base leading-6 font-medium text-gray-500">
                <time dateTime="2020-08-10T13:30:00.000Z">August 21, 2020</time>
              </dd>
            </dl>
            <h3 className="mb-1 text-lg md:text-xl font-semibold text-dark-900 hover:text-primary-800 transition duration-300 ease-in-out">
              <Link href="/">
                <a>Loremp Ipsum</a>
              </Link>
            </h3>
            <p className="md:text-lg leading-relaxed">Alias culpa quae pariatur veniam explicabo vero quas optio. Nihil et error vel ut exercitationem fuga. Magni perspiciatis nulla corrupti fugiat.</p>
          </article>
        </div>
      </Container>
    </section>
    <section className="py-5 md:py-10">
      <Container>
        <h2 className="inline-block font-extrabold text-dark-900 text-xl md:text-2.5xl mb-6">My Recent Shots</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Shots shots={shots} />
        </div>
        <div className="py-10 text-center">
          <a className="inline-flex items-center py-4 px-6 rounded-lg text-primary-400 font-medium bg-gray-50 lg:bg-transparent lg:hover:bg-gray-50 transition duration-300 ease-in-out" href={SiteData.social.dribbble}>
            <span className="inline-flex items-center py-1 px-2 bg-primary-400 text-white text-sm rounded uppercase mr-3">New</span>
            Discover all shots on Dribbble
          </a>
        </div>
      </Container>
    </section>
    <section className="py-10">
      <Container>
        <h2 className="inline-block font-extrabold text-dark-900 text-xl md:text-2.5xl mb-6">
          OSS Projects
        </h2>
        <div className="-mx-4">
          <a href="https://github.com/coderdiaz/vue-datasource" className="px-4 py-2 grid lg:grid-cols-12 items-center cursor-pointer hover:bg-gray-50 rounded mb-2 transition duration-300 ease-in-out">
            <div className="lg:col-span-3 font-semibold inline-block">
              <span className="inline-flex mr-2">⏭️</span> Tiny Pagination
            </div>
            <p className="lg:col-span-7 text-gray-600">
              A component to create a tiny pagination using Flexbox
            </p>
            <div className="lg:col-span-2 flex items-center justify-start">
              <div className="w-3 h-3 rounded-full bg-green-400 mr-2" />
              <span className="inline-flex text-base text-gray-600">Vue</span>
            </div>
          </a>
          <a href="https://github.com/coderdiaz/react-card-brand" className="px-4 py-2 grid lg:grid-cols-12 items-center cursor-pointer hover:bg-gray-50 rounded mb-2 transition duration-300 ease-in-out">
            <div className="lg:col-span-3 font-semibold inline-block">
              <span className="inline-flex mr-2">💳️</span> Card Brand
            </div>
            <p className="lg:col-span-7 text-gray-600">
              A zero-dependency Hook to show a brand based on card type
            </p>
            <div className="lg:col-span-2 flex items-center justify-start">
              <div className="w-3 h-3 rounded-full bg-alternative-400 mr-2" />
              <span className="inline-flex text-base text-gray-600">React</span>
            </div>
          </a>
          <a href="https://github.com/coderdiaz/vue-datasource" className="px-4 py-2 grid lg:grid-cols-12 items-center cursor-pointer hover:bg-gray-50 rounded mb-2 transition duration-300 ease-in-out">
            <div className="lg:col-span-3 font-semibold inline-block">
              <span className="inline-flex mr-2">🧺</span> Datasource
            </div>
            <p className="lg:col-span-7 text-gray-600">
              A component to create dynamic tables with Vue 2.x
            </p>
            <div className="lg:col-span-2 flex items-center justify-start">
              <div className="w-3 h-3 rounded-full bg-green-400 mr-2" />
              <span className="inline-flex text-base text-gray-600">Vue</span>
            </div>
          </a>
          <a href="https://github.com/coderdiaz/scoreboard" className="px-4 py-2 grid lg:grid-cols-12 items-center cursor-pointer hover:bg-gray-50 rounded mb-2 transition duration-300 ease-in-out">
            <div className="lg:col-span-3 font-semibold inline-block">
              <span className="inline-flex mr-2">🧮</span> Scoreboard
            </div>
            <p className="lg:col-span-7 text-gray-600">
              A board for display a gamescore
            </p>
            <div className="lg:col-span-2 flex items-center justify-start">
              <div className="w-3 h-3 rounded-full bg-green-400 mr-2" />
              <span className="inline-flex text-base text-gray-600">Vue</span>
            </div>
          </a>
          <a href="https://github.com/coderdiaz/yell-vscode-theme" className="px-4 py-2 grid lg:grid-cols-12 items-center cursor-pointer hover:bg-gray-50 rounded mb-2 transition duration-300 ease-in-out">
            <div className="lg:col-span-3 font-semibold inline-block">
              <span className="inline-flex mr-2">💖</span> Yell Theme
            </div>
            <p className="lg:col-span-7 text-gray-600">
              VS Code theme for dark lovers with accessible colors
            </p>
            <div className="lg:col-span-2 flex items-center justify-start">
              <div className="w-3 h-3 rounded-full bg-gray-600 mr-2" />
              <span className="inline-flex text-base text-gray-600">VS Code</span>
            </div>
          </a>
          <a href="https://github.com/coderdiaz/vue-status-indicator" className="px-4 py-2 grid lg:grid-cols-12 items-center cursor-pointer hover:bg-gray-50 rounded mb-2 transition duration-300 ease-in-out">
            <div className="lg:col-span-3 font-semibold inline-block">
              <span className="inline-flex mr-2">🧷</span> Status Indicator
            </div>
            <p className="lg:col-span-7 text-gray-600">
              A component to show an indicator as colored dots
            </p>
            <div className="lg:col-span-2 flex items-center justify-start">
              <div className="w-3 h-3 rounded-full bg-green-400 mr-2" />
              <span className="inline-flex text-base text-gray-600">Vue</span>
            </div>
          </a>
        </div>
      </Container>
    </section>
  </Layout>;
};


export default IndexPage;