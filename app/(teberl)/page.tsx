import Image from "next/image";

import profilePic from "../../public/portrait_800x600.jpg";

import Header from "./Header";

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
                  I am a software engineer specializing in front-end and
                  back-end development for complex, scalable web applications. I
                  work professionally with TS and C# to build rich web
                  applications and web services. My favorite stacks are ReactJS
                  for the frontend and nodejs or Asp.Net for the backend. I love
                  to try out new languages and technologies, especially in the
                  field of functional programming. I am a huge fan of{" "}
                  <a className="text-link" href="https://elixir-lang.org/">
                    elixir
                  </a>{" "}
                  and{" "}
                  <a className="text-link" href="https://fsharp.org/">
                    F#
                  </a>{" "}
                  as well as Next.js from vercel and Blazor from Microsoft.{" "}
                  <br />
                  Currently I am working with an awesome Team at{" "}
                  <a
                    className="text-link"
                    href="https://www.zeiss.com/corporate/int/home.html"
                  >
                    ZEISS
                  </a>{" "}
                  where we are part of the digital transformation process.
                </div>
                <div className="mb-4">
                  <a className="btn btn-primary me-2 mb-3" href="/">
                    <i className="bi bi-arrow-right-circle me-2"></i>
                    View Portfolio
                  </a>
                  <a className="btn btn-secondary mb-3" href="">
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
      </div>
    </>
  );
}
