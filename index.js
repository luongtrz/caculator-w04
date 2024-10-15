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


//check liệu có giá trị không phải là số thập phân
function isValidDecimal(value) {
    if (value.trim() === "") {return true;} // Cho phép di chuyển ra nếu ô trống
    return !isNaN(value);
}

document.getElementById('so-thu-nhat').addEventListener('blur', function() {
    const value = this.value;
    
    if (!isValidDecimal(value)) {
        showModal('Số thứ nhất không phải là số thập phân hợp lệ');

        //Chép kết quả vào ô thông báo
        document.getElementById('thong-bao').innerHTML = 'Số thứ nhất không phải là số thập phân hợp lệ';

        this.focus();  // Đưa con trỏ lại hộp nhập nếu nhập sai
    }
});

document.getElementById('so-thu-hai').addEventListener('blur', function() {
    const value = this.value;

    if (!isValidDecimal(value)) {
        showModal('Số thứ hai không phải là số thập phân hợp lệ');

        //Chép kết quả vào ô thông báo
        document.getElementById('thong-bao').innerHTML = 'Số thứ hai không phải là số thập phân hợp lệ';

        this.focus();  // Đưa con trỏ lại hộp nhập nếu nhập sai
    }

});

const tinhtoan = document.getElementById('tinh-toan');
tinhtoan.addEventListener('click', () => {
    //xóa thông báo cũ
    document.getElementById('thong-bao').innerHTML = '';

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
                //Chép kết quả vào ô thông báo
                document.getElementById('thong-bao').innerHTML = 'Không thể chia cho 0';

                ketQua = 'Không thể chia cho 0';
            }
            break;
        default:
            showModal("Chưa chọn phép tính");
    }
    if (isNaN(ketQua) && ketQua != 'Không thể chia cho 0') {
        showModal('Chưa nhập đủ hai số');
        //Chép kết quả vào ô thông báo
        document.getElementById('thong-bao').innerHTML = 'Chưa nhập đủ hai số';
    }
    else{
        //hủy kết quả ở case trên
        if (ketQua == 'Không thể chia cho 0') {
            ketQua = '';
        }

        //Chép kết quả vào ô kết quả
        document.getElementById('ket-qua').value = ketQua;
    }
});
