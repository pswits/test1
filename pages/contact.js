import Head from 'next/head';
import Link from 'next/link';
import '../app/globals.css'
const Home = () => {
  return (
    <div className="bg-black text-white">
      <Head>
        <title>Interior Design Order</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     

      <main className="pt-20">
        <section className="hero bg-cover bg-center h-screen flex items-center">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-bold mb-4">Contact</h2>
            <p className="text-xl mb-8">
              For contact, the numbers are <span role="img" aria-label="India Flag">🇮🇳</span> +91 9920664117.
              <br />
              You can call or use WhatsApp for more <Link href="/about">information</Link>.
            </p>
            <a href="tel:+919920664117" className="btn-primary">
              Call Now
            </a>
          </div>
        </section>

       
       
      </main>

      <footer className="py-4 bg-black text-center">
        <p className="text-white">&copy; Reteriors 2023 . All rights reserved.</p>
      </footer>
      <style jsx>{`
     .btn-primary {
      background-color: #000;

      padding: 10px 20px;
      border-radius: 4px;
      font-size: 18px;
      font-weight: bold;
      text-decoration: none;
      transition: background-color 0.3s, color 0.3s;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    
    .btn-primary:hover {
      background-color: #333;
    }
    
    .btn-primary:focus,
    .btn-primary:active {
      outline: none;
      background-color: #222;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    }
    
      `}</style>
    </div>
  );
};

export default Home;
