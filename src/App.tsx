import './App.css';
import Layout from './app/_layout'; // Ensure this matches your file name
// import GalleryPage from './page/gallery/gallery';
import ContactUs from './page/contactUs/contact'

function App() {
  return (
    <Layout>
      {/* <GalleryPage /> */}
      <ContactUs />
    </Layout>
  );
}

export default App;