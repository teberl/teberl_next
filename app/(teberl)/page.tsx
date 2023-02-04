import Image from "next/image";

import Footer from "./components/Footer";
import Header from "./components/Header";

import profilePic from "../../public/portrait_800x600.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <div className="main-wrapper">
        <section className="about-me-section p-3 p-lg-5 theme-bg-light">
          <div className="container">
            <div className="profile-teaser row">
              <div className="col">
                <h2 className="name font-weight-bold mb-1">Thomas Eberl</h2>
                <div className="tagline mb-3">Senior Software Engineer</div>
                <div className="bio mb-4">
                  I am a senior software engineer currently working with a great
                  team at{" "}
                  <a
                    className="text-link"
                    href="https://www.zeiss.com/corporate/int/home.html"
                  >
                    @ZEISS
                  </a>{" "}
                  in Munich / Germany. I am professional at making stuff using
                  .NET, Node.js, React and Next.js. I am fluent in TypeScript /
                  JS and C#. I love to try out new languages and technologies,
                  especially in the field of functional programming. I am a huge
                  fan of{" "}
                  <a className="text-link" href="https://elixir-lang.org/">
                    elixir
                  </a>{" "}
                  /erlang and{" "}
                  <a className="text-link" href="https://fsharp.org/">
                    F#
                  </a>{" "}
                  as well as{" "}
                  <a
                    className="text-link"
                    href="https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor"
                  >
                    Blazor
                  </a>{" "}
                  from Microsoft.
                  <br />
                </div>
                <div className="mb-4">
                  <a className="btn btn-primary me-2 mb-3" href="/">
                    <i className="bi bi-arrow-right-circle me-2"></i>
                    View Portfolio
                  </a>
                  <a className="btn btn-secondary mb-3" href="/resume">
                    <i className="bi bi-card-list me-2"></i>
                    View Resume
                  </a>
                </div>
              </div>

              <div className="col-md-5 col-lg-5">
                <Image
                  src={profilePic}
                  className="profile-image img-fluid mb-3 mb-lg-0 me-md-0"
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
