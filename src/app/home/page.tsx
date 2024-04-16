import Head from 'next/head';
import NavigationBar from "../components/NavigationBar";
import WelcomeBanner from "../components/WelcomeBanner";
import Footer from '../components/Footer';

export default function Home() {
    return (
      <div>
      <Head>
          <title>AI Academia Projects</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <main>
          <WelcomeBanner />
          {/* Placeholder sections */}
          <section id="features" className="container mx-auto my-12">
            <h2 className="text-center text-3xl font-bold">Features</h2>
            <p className="text-center mt-4">Details about the features.</p>
          </section>
          <section id="about" className="container mx-auto my-12">
            <h2 className="text-center text-3xl font-bold">About Us</h2>
            <p className="text-center mt-4">Information about the organization.</p>
          </section>
          <section id="contact" className="container mx-auto my-12">
            <h2 className="text-center text-3xl font-bold">Contact Us</h2>
            <p className="text-center mt-4">How users can reach out.</p>
          </section>
      </main>
      <Footer />
  </div>
    );
  }
  