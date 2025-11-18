import { Header, Footer } from "../organisms/index.js";

/**
 * Template: Layout
 * Layout principal de l'application avec Header et Footer
 */
export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

