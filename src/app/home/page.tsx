import Head from 'next/head';
import NavigationBar from '@/app/components/Navbar/NavigationBar';
import WelcomeBanner from '@/app/components/WelcomeBanner/WelcomeBanner';
import Footer from '@/app/components/Footer/Footer';

export default function Home() {
    return (
      <div>
          <Head>
            <title>AI Academia Projects</title>
            <meta name="description" content="Explore top AI projects, learn new skills, and enhance your understanding of artificial intelligence through hands-on experience." />
            <meta name="keywords" content="AI projects, artificial intelligence, student projects, academia, AI education"/>
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="AI Academia Projects for Students"/>
            <meta property="og:description" content="Dive into our AI projects specifically tailored for students and boost your AI knowledge."/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://aiacademiaprojects.akashimmanuel.in"/>
            <meta property="og:site_name" content="AI Academia Projects"/>
            <link rel="canonical" href="https://aiacademiaprojects.akashimmanuel.in"/>
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
  