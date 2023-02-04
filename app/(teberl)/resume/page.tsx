import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Resume() {
  return (
    <>
      <Header />
      <div className="main-wrapper">
        <section className="cta-section theme-bg-light py-5">
          <div className="container text-center single-col-max-width">
            <h2 className="heading mb-3">Online Resume</h2>
            <a className="btn btn-primary" href="/resume" target="_blank">
              <i className="fas fa-file-pdf me-2"></i>Download PDF Version
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
