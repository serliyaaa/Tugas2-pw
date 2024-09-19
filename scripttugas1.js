document.getElementById('kirim').addEventListener('click', function() {
    // Get input values
    const nama = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;
    const kelas = document.getElementById('kelas').value;
    const alamat = document.getElementById('alamat').value;

    // Update the output container
    document.getElementById('output-nama').innerText = nama;
    document.getElementById('output-nim').innerText = nim;
    document.getElementById('output-kelas').innerText = kelas;
    document.getElementById('output-alamat').innerText = alamat;

    // Optionally clear the form after submission
    document.getElementById('form-pendaftaran').reset();
});
