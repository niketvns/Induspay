import styles from "./App.module.css";
import { Header } from "./sections/Header";
import { HeroBanner } from "./sections/HeroBanner";
import { Footer } from "./sections/Footer";
import { ReactElement } from "react";
import { OurServices } from "./sections/OurServices";
import { ReviewContainer } from "./sections/ReviewContainer";

function App(): ReactElement {
  return (
    <>
      <div className={styles.headerHeroBanner}>
        <Header />
        <HeroBanner />
      </div>
      <main className={styles.main}>
        <OurServices />
        <ReviewContainer />
      </main>
      <Footer />
    </>
  );
}

export default App;
