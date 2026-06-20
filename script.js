document.addEventListener("DOMContentLoaded", function() {
    const newsletterForm = document.getElementById("newsletterForm");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const userEmail = document.getElementById("userEmail").value;
            // uji coba code masukkin email apakah terdaftar atau tidak//
            if (userEmail.trim() !== "") {
                alert('Terimakasih! Email (${userEmail}) Anda berhasil terdaftar ke sistem newsletter SorotNet.');
                newsletterForm.reset(); 
            } else {
                alert("Silahkan masukkan alamat email yang valid.");
            }
        })
    }
})