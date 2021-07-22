export default function Home() {
  return (
    <div>
      <nav
        className="navbar navbar-light navbar-expand-lg fixed-top"
        id="mainNav"
        style={{ background: "#f05f40", color: "var(--bs-light)" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            YUPICK
          </a>
          <button
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            className="navbar-toggler navbar-toggler-right"
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-align-justify" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  style={{ color: "var(--bs-light)" }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#transaksi"
                  style={{ color: "var(--bs-light)" }}
                >
                  Transaksi &amp; Persyaratan
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#rental"
                  style={{ color: "var(--bs-light)" }}
                >
                  Pilih Kendaraan
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/user/rental"
                  style={{ color: "var(--bs-light)" }}
                >
                  Rental
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contact"
                  style={{ color: "var(--bs-light)" }}
                >
                  Contact
                </a>
              </li>
              <li className="nav-item" />
            </ul>
          </div>
          <a
            href="/admin/login"
            className="btn btn-primary"
            type="button"
            style={{ background: "var(--bs-light)", color: "var(--bs-red)" }}
          >
            login
          </a>
        </div>
      </nav>
    </div>
  );
}
