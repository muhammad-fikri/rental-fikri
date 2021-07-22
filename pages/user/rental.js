import Layout from "../../component/user/layout";
import { useState } from "react";
const form = () => {
  const [kendaraan, setKendaraan] = useState("");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nomer, setNomer] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tanggal, setTanggal] = useState("");

  // console.log(setPaket);
  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/tambah", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kendaraan,
          nama,
          email,
          nomer,
          alamat,
          tanggal,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      alert("Berhasil Di Rental");
      window.alert(
        "Anda akan dihubungi oleh admin"
      );
      window.location.href = "/user/rental";
    } catch (e) {
      throw Error(e.message);
    }
  }
  return (
    <div>
      <Layout>
        <main className="page hire-me-page">
          <section className="portfolio-block hire-me">
            <div className="container">
              <section>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 text-center">
                      <h2 className="section-heading">Rental</h2>
                      <hr className="my-4" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="row">
                        <div className="col-xxl-8 offset-xxl-2">
                          <img
                            className="img-fluid"
                            src="../jazz.jpg"
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
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col-xxl-8 offset-xxl-2">
                          <img
                            className="img-fluid"
                            src="../avanza.jpg"
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
                            src="../elf.jpg"
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
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col-xxl-8 offset-xxl-2">
                          <img
                            className="img-fluid"
                            src="../brio.jpg"
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="container-lg">
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-5">
                    <form
                      style={{ background: "rgb(217,216,211)" }}
                      onSubmit={submitHandler}
                    >
                      <div className="mb-3">
                        <label className="form-label" htmlFor="number">
                          Pilih Kendaraan
                        </label>
                        <div class="row">
                          <select
                            style={{
                              width: 331,
                              background: "var(--bs-danger)",
                              color: "var(--bs-light)",
                            }}
                            className="form-select"
                            name=""
                            value={kendaraan}
                            onChange={(e) => setKendaraan(e.target.value)}
                            required
                          >
                            <option value="Honda Jazz" selected>
                              Honda Jazz
                            </option>
                            <option value="Avanza Veloz">Avanza Veloz</option>
                            <option value="Travel Elf">Travel Elf</option>
                            <option value="Honda Brio">Honda Brio</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="number">
                          Nama Lengkap
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          required
                          onChange={(e) => setNama(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          id="email"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="number">
                          NO HP / Whatsapp
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          required
                          onChange={(e) => setNomer(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="message">
                          Alamat
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          onChange={(e) => setAlamat(e.target.value)}
                          defaultValue={""}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="row">
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="hire-date">
                              Tanggal
                            </label>
                            <input
                              className="form-control"
                              id="hire-date"
                              type="date"
                              onChange={(e) => setTanggal(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 button">
                        <button
                          className="btn btn-primary d-block w-100"
                          type="submit"
                          style={{ background: "var(--bs-danger)" }}
                        >
                          Rental
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-3"></div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
};
export default form;
