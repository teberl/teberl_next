import Image from "next/image";

import profilePicture from "../../../public/portrait_square.jpg";

import NavbarToggler from "./NavbarToggler";

export default function Header() {
  return (
    <header className="header text-center">
      <div className="force-overflow">
        <h1 className="blog-name pt-lg-4 mb-0">
          <a className="no-text-decoration" href="/home">
            Thomas Eberl
          </a>
        </h1>

        <nav className="navbar navbar-expand-lg navbar-dark">
          <NavbarToggler />

          <div id="navigation" className="collapse navbar-collapse flex-column">
            <div className="profile-section pt-3 pt-lg-0">
              <Image
                className="profile-image mb-3 rounded-circle mx-auto"
                src={profilePicture}
                alt="Profile picture of the author"
              />

              <div className="bio mb-3">
                Hi, my name is Thomas and I am a senior software engineer
                @ZEISS. Welcome to my personal website!
              </div>

              <ul className="social-list list-inline py-2 mx-auto">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="bi bi-linkedin" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="bi bi-github" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="bi bi-stack-overflow" />
                  </a>
                </li>
              </ul>
              <hr />
            </div>
            {/* profile-section */}

            <ul className="navbar-nav flex-column text-start">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  <i className="bi bi-person-fill me-2" />
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="bi bi-file-earmark-person me-2" />
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="bi bi-megaphone me-2" />
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-laptop me-2" />
                  Portfolio
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Gartenbau
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
