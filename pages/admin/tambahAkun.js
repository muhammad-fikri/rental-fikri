import LayoutAdmin from "../../component/admin/layoutAdmin";
import { useState } from "react";
export default function Home() {
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [keterangan, setKeterangan] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/tambahAkun", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama,
          username,
          password,
          email,
          keterangan
        }),
      });
      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      alert("User Berhasil Di Tambahkan");
      window.location.href='/admin/tambahAkun';
    } catch (e) {
      throw Error(e.message);
    }
  }
  return (
    <>
      <LayoutAdmin>
        <div className="col" style={{ textAlign: "center" }}>
          <h1 style={{ fontFamily: "ABeeZee, sans-serif" }}>ADD ACCOUNT</h1>
          <div className="row">
            <div className="col">
              <section className="contact-clean">
                <form method="post" style={{ background: "var(--bs-danger)" }} onSubmit={submitHandler}>
                  <h2 className="text-center" style={{ color: "var(--bs-light)" }}>Buat Akun</h2>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Masukkan Nama"
                      required
                      onChange={(e) => setNama(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="username"
                      placeholder="Masukkan Username"
                      required
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Masukkan Password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Masukkan Email"
                      name="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3" />
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Masukkan Keterangan"
                      rows={14}
                      defaultValue={""}
                      onChange={(e) => setKeterangan(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <button
                      className="btn btn-light"
                      type="submit"
                      style={{
                        background: "var(--bs-light)",
                        color: "var(--bs-danger)",
                      }}
                    >
                      Buat Akun
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </LayoutAdmin>
    </>
  );
}
