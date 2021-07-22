const navbar = () => {
  return (
    <>
     <nav
        className="navbar navbar-light navbar-expand-lg fixed-top"
        id="mainNav"
        style={{ background: "var(--bs-danger)", color: "var(--bs-light)" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            ADMIN
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
                  href="/admin/rental"
                  style={{ color: "var(--bs-light)" }}
                >
                  Rental
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/admin/akun"
                  style={{ color: "var(--bs-light)" }}
                >
                  Akun
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/admin/tambahAkun"
                  style={{ color: "var(--bs-light)" }}
                >
                  Registrasi
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/admin/login"
                  style={{ color: "var(--bs-light)" }}
                >
                  Keluar
                </a>
              </li>
              <li className="nav-item" />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
