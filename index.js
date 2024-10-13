function showModal(message) {
    const modalMessage = document.getElementById('modalMessage');
    modalMessage.innerText = message;
    // Hiển thị modal bằng cách loại bỏ lớp 'hidden'
    document.getElementById('myModal').classList.remove('hidden');
}

function closeModal() {
    // Ẩn modal bằng cách thêm lớp 'hidden'
    document.getElementById('myModal').classList.add('hidden');
}

// Để đóng modal khi người dùng nhấn ra ngoài modal
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    // Nếu nhấn vào bên trong modal thì target sẽ là con của modal
    if (event.target == modal) {
        closeModal();
    }
}

const tinhtoan = document.getElementById('tinh-toan');
tinhtoan.addEventListener('click', () => {
    // Lấy giá trị từ các input
    const soThuNhat = parseFloat(document.getElementById('so-thu-nhat').value);
    const soThuHai = parseFloat(document.getElementById('so-thu-hai').value);
    const phepTinh = document.querySelector('input[name="phep-tinh"]:checked').value;

    let ketQua;
    // Thực hiện phép tính dựa trên lựa chọn
    switch (phepTinh) {
        case 'cong':
            ketQua = soThuNhat + soThuHai;
            break;
        case 'tru':
            ketQua = soThuNhat - soThuHai;
            break;
        case 'nhan':
            ketQua = soThuNhat * soThuHai;
            break;
        case 'chia':
            // Kiểm tra chia cho 0
            if (soThuHai !== 0) {
                ketQua = soThuNhat / soThuHai;
            } else {
                showModal("Không thể chia cho 0");
                ketQua = 'Không thể chia cho 0';
            }
            break;
        default:
            ketQua = 'Chọn phép tính hợp lệ';
    }
    if (isNaN(ketQua) && ketQua != 'Không thể chia cho 0') {
        showModal('Chưa nhập hoặc nhập không hợp lệ');
        ketQua = 'Chưa nhập hoặc nhập không hợp lệ';
    }
    // Hiển thị kết quả vào ô input kết quả
    const ketQuaInput = document.getElementById('ket-qua');
    ketQuaInput.value = ketQua;
});
