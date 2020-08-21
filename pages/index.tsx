import Layout from '../components/Layout';
import Container from '../components/Container';

const IndexPage = () => {
  return <Layout>
    <section className="py-5 md:pt-10 md:pb-20 lg:py-20">
      <Container>
        <h1 className="text-2.5xl sm:text-3.5xl md:text-7.5xl lg:text-10xl font-extrabold text-dark-600 leading-tight mb-6">
          Software Engineer <br />and UI Designer
        </h1>
        <p className="text-gray-900 md:text-lg lg:text-xl leading-loose mb-4">Hi there, my name is <span className="font-semibold">Javier</span>. I'm based on Mexico City, Mexico, Ajuaaa!! Currently, I'm creating platforms and websites using the Jamstack approach; and working as a Tech Lead of Developers Squad at <a className="font-semibold text-primary-300 hover:text-primary-600 transition duration-300 ease-in-out underline" href="https://bedu.org">Bedu</a>. I mostly do <span className="font-medium text-yellow-600">front-end</span> but I also do <span className="font-medium text-alternative-600">back-end</span> development.</p>
        <p className="text-gray-900 md:text-lg lg:text-xl leading-loose mb-2">Now, I'm learning Flutter to create an application to manage my personal finances and web subscriptions. Too, I also share what I learn at meetups and conferences and sometimes I teach about web development.</p>
      </Container>
    </section>
  </Layout>;
};

export default IndexPage;