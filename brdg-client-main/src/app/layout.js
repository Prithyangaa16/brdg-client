import '../styles/globals.css';
import Layout from '../components/Layout';

export const metadata = {
  title: 'BRDG – Work. Bank. Play.'
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}