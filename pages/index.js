import Layout from "../component/user/layout";
import Link from "next/dist/client/link";
export default function Home() {
  return (
    <div>
      <Layout>
        <div>
          <header
            className="text-center text-white d-flex masthead"
            id="about"
            style={{ backgroundImage: 'url("header.jpg")' }}
          >
            <div className="container my-auto">
              <div className="row">
                <div className="col-lg-10 mx-auto">
                  <h1 className="text-uppercase">
                    <strong>Yupick Rental</strong>
                  </h1>
                  <hr />
                </div>
              </div>
              <div className="col-lg-8 mx-auto">
                <p className="text-faded mb-5">
                  Bingung mau keluar tidak punya kendaraan? YUPICK RENTAL adalah
                  solusinya, harga terjangkau dan mudah proses transaksinya.
                </p>
                <a
                  className="btn btn-primary btn-xl"
                  role="button"
                  href="#transaksi"
                >
                  rental yuk
                </a>
              </div>
            </div>
          </header>
          <section id="transaksi" className="bg-primary">
            <div className="container">
              <div className="row">
                <div className="col offset-lg-8 text-center mx-auto">
                  <h2 className="text-white section-heading">
                    Cara Melakukan Rental dan Transaksi
                  </h2>
                  <hr className="light my-4" />
                  <p className="text-faded mb-4">
                    1. Lihat dan pilih mobil rental keinginan anda.
                  </p>
                  <p className="text-faded mb-4">
                    2. Isi Identitas diri pada halaman Rental
                  </p>
                  <p className="text-faded mb-4">
                    3. Untuk penmbayaran admin akan menghubungi dan
                    mengkonfirmasi anda bila anda telah membooking
                  </p>
                  <p className="text-faded mb-4">
                    4. Silahkan ambil kendaraan yang telah dibooking di kantor
                    kami
                  </p>
                  <p className="text-faded mb-4" />
                </div>
                <div className="col offset-lg-8 text-center mx-auto">
                  <h2 className="text-white section-heading">Persyaratan</h2>
                  <hr className="light my-4" />
                  <p className="text-faded mb-4">1. KTP asli pembooking</p>
                  <p className="text-faded mb-4">
                    2. Jika pengembalian melebihi batas waktu yang dijanjikan
                    maka akan dikenakan denda 10% dari harga rental untuk setiap
                    perjam nya.
                  </p>
                  <p className="text-faded mb-4">
                    3. KTP akan dikembalikan setelah kendaraan telah
                    dikembalikan
                  </p>
                  <p className="text-faded mb-4" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div
                  className="col offset-xxl-0"
                  style={{ textAlign: "center" }}
                >
                  <a
                    className="btn btn-light btn-xl"
                    role="button"
                    href="#rental"
                  >
                    Rental kendaraan
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section id="rental">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading">Kendaraan Rental</h2>
                  <hr className="my-4" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col-xxl-8 offset-xxl-2">
                      <img
                        className="img-fluid"
                        src="jazz.jpg"
                        style={{ borderRadius: 13 }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col" style={{ textAlign: "center" }}>
                      <h2>HONDA JAZZ</h2>
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Spesifikasi</th>
                              <th>Keterangan</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Tempat duduk</td>
                              <td>7 Kursi</td>
                            </tr>
                            <tr />
                            <tr>
                              <td>Jenis Transmisi</td>
                              <td>Manual</td>
                            </tr>
                            <tr>
                              <td>Harga sewa/Hari</td>
                              <td>500.000</td>
                            </tr>
                            <tr>
                              <td>Status Kendaraan</td>
                              <td
                                style={{
                                  borderRadius: 50,
                                  borderWidth: 2,
                                  borderColor: "var(--bs-teal)",
                                }}
                              >
                                Sedang Di Rental
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <a
                        href="/user/rental"
                        className="btn btn-primary"
                        type="button"
                      >
                        Rental
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-xxl-8 offset-xxl-2">
                      <img
                        className="img-fluid"
                        src="avanza.jpg"
                        style={{ borderRadius: 13 }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col" style={{ textAlign: "center" }}>
                      <h2>AVANZA VELOZ</h2>
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Spesifikasi</th>
                              <th>Keterangan</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Tempat duduk</td>
                              <td>7 Kursi</td>
                            </tr>
                            <tr />
                            <tr>
                              <td>Jenis Transmisi</td>
                              <td>Manual</td>
                            </tr>
                            <tr>
                              <td>Harga sewa/Hari</td>
                              <td>500.000</td>
                            </tr>
                            <tr>
                              <td>Status Kendaraan</td>
                              <td
                                style={{
                                  borderRadius: 50,
                                  borderWidth: 2,
                                  borderColor: "var(--bs-teal)",
                                }}
                              >
                                Sedang Di Rental
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <a
                        href="/user/rental"
                        className="btn btn-primary"
                        type="button"
                      >
                        Rental
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <hr className="my-4" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col-xxl-8 offset-xxl-2">
                      <img
                        className="img-fluid"
                        src="elf.jpg"
                        style={{ borderRadius: 13 }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col" style={{ textAlign: "center" }}>
                      <h2>TRAVEL ELF</h2>
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Spesifikasi</th>
                              <th>Keterangan</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Tempat duduk</td>
                              <td>12 Kursi</td>
                            </tr>
                            <tr />
                            <tr>
                              <td>Jenis Transmisi</td>
                              <td>Manual</td>
                            </tr>
                            <tr>
                              <td>Harga sewa/Hari</td>
                              <td>750.000</td>
                            </tr>
                            <tr>
                              <td>Status Kendaraan</td>
                              <td
                                style={{
                                  borderRadius: 50,
                                  borderWidth: 2,
                                  borderColor: "var(--bs-teal)",
                                }}
                              >
                                Sedang Di Rental
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <a
                        href="/user/rental"
                        className="btn btn-primary"
                        type="button"
                      >
                        Rental
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-xxl-8 offset-xxl-2">
                      <img
                        className="img-fluid"
                        src="brio.jpg"
                        style={{ borderRadius: 13 }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col" style={{ textAlign: "center" }}>
                      <h2>HONDA BRIO</h2>
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Spesifikasi</th>
                              <th>Keterangan</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Tempat duduk</td>
                              <td>4 Kursi</td>
                            </tr>
                            <tr />
                            <tr>
                              <td>Jenis Transmisi</td>
                              <td>Manual</td>
                            </tr>
                            <tr>
                              <td>Harga sewa/Hari</td>
                              <td>400.000</td>
                            </tr>
                            <tr>
                              <td>Status Kendaraan</td>
                              <td
                                style={{
                                  borderRadius: 50,
                                  borderWidth: 2,
                                  borderColor: "var(--bs-teal)",
                                }}
                              >
                                Sedang Di Rental
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <a
                        href="/user/rental"
                        className="btn btn-primary"
                        type="button"
                      >
                        Rental
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Gallery</h2>
              <hr className="my-4" />
            </div>
          </div>
          <section id="portfolio" className="p-0">
            <div className="container-fluid p-0">
              <div className="row g-0 popup-gallery">
                <div className="col-sm-6 col-lg-4">
                  <a className="portfolio-box">
                    <img className="img-fluid" src="avanza.jpg" />
                    <div className="portfolio-box-caption">
                      <div className="portfolio-box-caption-content">
                        <div className="project-category text-faded">
                          <span>Category</span>
                        </div>
                        <div className="project-name">
                          <span>Project Name</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <a className="portfolio-box">
                    <img className="img-fluid" src="elf.jpg" />
                    <div className="portfolio-box-caption">
                      <div className="portfolio-box-caption-content">
                        <div className="project-category text-faded">
                          <span>Category</span>
                        </div>
                        <div className="project-name">
                          <span>Project Name</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <a className="portfolio-box">
                    <img className="img-fluid" src="avanza.jpg" />
                    <div className="portfolio-box-caption">
                      <div className="portfolio-box-caption-content">
                        <div className="project-category text-faded">
                          <span>Category</span>
                        </div>
                        <div className="project-name">
                          <span>Project Name</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <a className="portfolio-box">
                    <img className="img-fluid" src="/avanza.jpg" />
                    <div className="portfolio-box-caption">
                      <div className="portfolio-box-caption-content">
                        <div className="project-category text-faded">
                          <span>Category</span>
                        </div>
                        <div className="project-name">
                          <span>Project Name</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <a className="portfolio-box">
                    <img className="img-fluid" src="brio.jpg" />
                    <div className="portfolio-box-caption">
                      <div className="portfolio-box-caption-content">
                        <div className="project-category text-faded">
                          <span>Category</span>
                        </div>
                        <div className="project-name">
                          <span>Project Name</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <a className="portfolio-box">
                    <img className="img-fluid" src="jazz.jpg" />
                    <div className="portfolio-box-caption">
                      <div className="portfolio-box-caption-content">
                        <div className="project-category text-faded">
                          <span>Category</span>
                        </div>
                        <div className="project-name">
                          <span>Project Name</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section id="contact">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 text-center mx-auto">
                  <h2 className="section-heading">Customer Service</h2>
                  <hr className="my-4" />
                  <p className="mb-5">
                    Silahkan hubungi kontak yang tertera dibawah jika mengalami
                    kendala dalam pemesanan, maupun keterlambatan konfirmasi.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 text-center ms-auto">
                  <i
                    className="fa fa-phone fa-3x mb-3 sr-contact"
                    data-aos="zoom-in"
                    data-aos-duration={300}
                    data-aos-once="true"
                  />
                  <p>+62 81234567890</p>
                </div>
                <div className="col-lg-4 text-center me-auto">
                  <i
                    className="fa fa-envelope-o fa-3x mb-3 sr-contact"
                    data-aos="zoom-in"
                    data-aos-duration={300}
                    data-aos-delay={300}
                    data-aos-once="true"
                  />
                  <p>
                    <a href="mailto:your-email@your-domain.com">
                      yupick@rental.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
}
