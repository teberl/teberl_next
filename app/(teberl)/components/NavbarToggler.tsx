"use client";

export default function NavbarToggler() {
  const handleClick = () => {
    const navigation = document.getElementById("navigation");
    if (navigation && navigation.classList.contains("show")) {
      navigation.classList.remove("show");
    } else {
      document.getElementById("navigation")?.classList.add("show");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="navbar-toggler"
      type="button"
      aria-controls="navigation"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
}
