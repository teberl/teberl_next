import { version } from "../../../package.json";

export default function Footer() {
  return (
    <footer className="footer text-center py-4">
      <small className="copyright">
        Made with{" "}
        <a className="text-link" href="https://nextjs.org/">
          Next.js 13
        </a>{" "}
        in Munich with 🥨,🍺 and ☕ currently on v{version}
      </small>
    </footer>
  );
}
