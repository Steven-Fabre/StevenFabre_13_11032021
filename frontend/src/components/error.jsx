import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="error">
      <p className="error-text">
        Congratulations ! <br /> You reach the <br /> No Code's land ! <br />
      </p>
      <p className="error-code">Error 404 : Page Not Found</p>
      <Link className="error-link" to="/">
        Get back to Home
      </Link>
    </section>
  );
}
