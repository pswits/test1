import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Head>
        <title>Interior Design Order</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="py-4 bg-black fixed w-full z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold hidden md:block">Interior Design Order</h1>

          <ul className="flex space-x-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="pt-20">
        <section className="hero bg-cover bg-center h-screen flex items-center">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-bold mb-4">Welcome to Our Interior Design Service</h2>
            <p className="text-xl mb-8">We create beautiful and functional spaces tailored to your needs.</p>
            <a href="#" className="btn-primary">Get Started</a>
          </div>
        </section>

        <section className="services py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="service-card">
                <img src="/service1.jpg" alt="Service 1" className="w-full h-64 object-cover mb-4" />
                <h3 className="text-2xl font-bold mb-2">Residential Interior Design</h3>
                <p>Designing comfortable and stylish homes.</p>
              </div>
              <div className="service-card">
                <img src="/service2.jpg" alt="Service 2" className="w-full h-64 object-cover mb-4" />
                <h3 className="text-2xl font-bold mb-2">Commercial Interior Design</h3>
                <p>Creating functional and appealing workspaces.</p>
              </div>
              <div className="service-card">
                <img src="/service3.jpg" alt="Service 3" className="w-full h-64 object-cover mb-4" />
                <h3 className="text-2xl font-bold mb-2">Renovation</h3>
                <p>Transforming existing spaces into something new.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Images</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="portfolio-item">
                <img src="/image.jpg" alt="Portfolio 1" className="w-full h-64 object-cover" />
              </div>
              <div className="portfolio-item">
                <img src="/image1.jpg" alt="Portfolio 2" className="w-full h-64 object-cover" />
              </div>
              <div className="portfolio-item">
                <img src="/image2.jpg" alt="Portfolio 3" className="w-full h-64 object-cover" />
              </div>
              <div className="portfolio-item">
                <img src="/image3.jpg" alt="Portfolio 4" className="w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="contact py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl mb-8">Ready to discuss your project? Contact us now.</p>
            <Link href="/contact" className="btn-primary">Contact</Link>
          </div>
        </section>
      </main>

      <footer className="py-4 bg-black text-center">
        <p className="text-white">&copy; Reteriors 2023 . All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
