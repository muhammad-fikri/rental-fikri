import Link from "next/dist/client/link";
import Router from "next/router";
import { mutate } from "swr";
import LayoutAdmin from "../../component/admin/layoutAdmin";
import { useRental } from "../../lib/swr-fetch";
export default function Home() {
  const { data, error } = useRental();
  if (error) {
    return <div>Error Loading</div>;
  }
  if (!data) {
    return <div>Loading.....</div>;
  }
  // console.log(data);

  async function hapusRental(id_rental) {
    //setDeleting (true)
    let res = await fetch(`/api/hapusRental?id_rental=${id_rental}`, {
      method: "DELETE",
    });
    let json = await res.json();
    if (!res.ok) throw Error(json.message);
    mutate(`/api/hapusRental`);
    //setDeleting (false)
    alert("Data telah dihapus");
    Router.push("/admin/rental");
  }
  return (
    <>
      <LayoutAdmin>
        <hr/>
        <hr/>
        <hr/>
        <div className="col" style={{ textAlign: "center" }}>
          <h1 style={{ fontFamily: "ABeeZee, sans-serif" }}>Konfirmasi Rental</h1>
          <div className="row">
            <div className="col">
              <div className="table-responsive">
                <table className="table">
                  <thead
                    style={{
                      background: "var(--bs-danger)",
                      color: "var(--bs-light)",
                    }}
                  >
                    <tr>
                      <th>Nama</th>
                      <th>Kendaraan</th>
                      <th>Email</th>
                      <th>Nomer</th>
                      <th>Alamat</th>
                      <th>Tanggal</th>
                      <th style={{ textAlign: "center" }}>Aksi</th>
                    </tr>
                  </thead>
                  <tbody
                    style={{ color: "var(--white)", background: "#636161" }}
                  >
                    {data.map((rental, idx) => (
                      <tr style={{ color: "var(--bs-light)" }}>
                        <td>{rental.nama}</td>
                        <td>{rental.kendaraan}</td>
                        <td>{rental.email}</td>
                        <td>{rental.nomer}</td>
                        <td>{rental.alamat}</td>
                        <td>{rental.tanggal}</td>
                        <td style={{ width: 278 }}>
                          <button
                            className="btn btn-primary"
                            type="button"
                            style={{ background: "var(--bs-red)" }}
                            value={rental.id_rental}
                            onClick={(e) => hapusRental(e.target.value)}
                          >
                            TOLAK
                          </button>
                          <span>&nbsp; &nbsp; &nbsp;&nbsp;</span>
                            {/* <button
                              className="btn btn-primary"
                              type="button"
                              style={{ background: "var(--bs-yellow)" }}
                              onClick={(e) => pindahData(e.target.value)}
                            >
                              TERIMA
                            </button> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </LayoutAdmin>
    </>
  );
}
