document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-pendataan");
    const tabelBody = document.getElementById("tabel-body");
    const printTabelBody = document.getElementById("print-tabel-body");
    const btnCetak = document.getElementById("btn-cetak");
    const btnReset = document.getElementById("btn-reset");
    const tglCetak = document.getElementById("tanggal-cetak");

    // Ambil data dari localStorage atau buat array kosong jika belum ada
    let dataPersonel = JSON.parse(localStorage.getItem("dataPersonel")) || [];

    // Fungsi untuk me-render tabel di dashboard dan di surat tugas
    function renderTable() {
        tabelBody.innerHTML = "";
        printTabelBody.innerHTML = "";

        dataPersonel.forEach((person, index) => {
            // Render Tabel Dashboard
            tabelBody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${person.nama}</td>
                    <td>${person.nip}</td>
                    <td>${person.jabatan}</td>
                    <td>${person.lokasi}</td>
                    <td>
                        <button class="btn btn-sm btn-danger" onclick="hapusData(${index})">Hapus</button>
                    </td>
                </tr>
            `;

            // Render Tabel Cetak Surat Tugas
            printTabelBody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${person.nama}</td>
                    <td>${person.nip}</td>
                    <td>${person.jabatan}</td>
                    <td>${person.lokasi}</td>
                </tr>
            `;
        });
    }

    // Fungsi Submit Form
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const newPerson = {
            nama: document.getElementById("nama").value,
            nip: document.getElementById("nip").value,
            jabatan: document.getElementById("jabatan").value,
            lokasi: document.getElementById("lokasi").value
        };

        dataPersonel.push(newPerson);
        localStorage.setItem("dataPersonel", JSON.stringify(dataPersonel));
        
        form.reset();
        renderTable();
    });

    // Fungsi Hapus Data Individual (Global Function)
    window.hapusData = function(index) {
        dataPersonel.splice(index, 1);
        localStorage.setItem("dataPersonel", JSON.stringify(dataPersonel));
        renderTable();
    }

    // Fungsi Reset Semua Data
    btnReset.addEventListener("click", () => {
        if(confirm("Apakah Anda yakin ingin menghapus semua data?")) {
            dataPersonel = [];
            localStorage.removeItem("dataPersonel");
            renderTable();
        }
    });

    // Fungsi Cetak (Print)
    btnCetak.addEventListener("click", () => {
        if(dataPersonel.length === 0) {
            alert("Data masih kosong! Silakan tambahkan personel terlebih dahulu.");
            return;
        }
        
        // Set tanggal hari ini otomatis di surat
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        tglCetak.innerText = today.toLocaleDateString('id-ID', options);

        window.print();
    });

    // Panggil render pertama kali halaman dimuat
    renderTable();
});
