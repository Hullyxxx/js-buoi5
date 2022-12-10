
function diemKhuVuc(khuVucUuTien) {
    if (khuVucUuTien == 'X') {
        return 0;
    } else if (khuVucUuTien == 'A') {
        return 2;
    }
     else if (khuVucUuTien == 'B') {
        return 1;
    }
     else if (khuVucUuTien == 'C') {
        return 0.5;
    }
}
function diemDoiTuong(doiTuongUuTien) {
    if (doiTuongUuTien == '0') {
        return 0;
    } else if (doiTuongUuTien == '1') {
        return 2.5;
    }
     else if (doiTuongUuTien == '2') {
        return 1.5;
    }
     else if (khuVdoiTuongUuTienucUuTien == '3') {
        return 1;
    }
}


function ketQuaTuyenSinh() {
    var diemChuan = document.getElementById('txtDiemChuan').value * 1
    var diemMon1 = document.getElementById('txtDiemMon1').value * 1
    var diemMon2 = document.getElementById('txtDiemMon2').value * 1
    var diemMon3 = document.getElementById('txtDiemMon3').value * 1
    var khuVuc = document.getElementById('khuVuc').value
    var doiTuong = document.getElementById('doiTuong').value

    var diemKhuVucUuTien = diemKhuVuc(khuVuc)
    var diemDoiTuongUuTien = diemDoiTuong(doiTuong)

    var tongDiemThi = diemMon1 + diemMon2 + diemMon3 + diemKhuVucUuTien + diemDoiTuongUuTien

    if ( tongDiemThi >= diemChuan ) {
        alert(`Điểm thi của bạn là: ${tongDiemThi}. Chúc mừng bạn đã đậu!!`)
    } else {
        alert(`Điểm thi của bạn là: ${tongDiemThi}. Chia buồn bạn đã rớt`)
    }
}

function tienDien(soDienDaXai) {
    if ( soDienDaXai <= 50 ) {
        return soDienDaXai * 500
    } else if ( soDienDaXai <= 100 ) {
        return ((50 * 500) + ((soDienDaXai-50)*650)) 
    } else if ( soDienDaXai <= 200) {
        return ((50 * 500) + (50*650) + ((soDienDaXai-100)*850)) 
    } else if ( soDienDaXai <= 350) {
        return ((50 * 500) + (50*650) + (100*850) + ((soDienDaXai-200)*1100)) 
    } else if (soDienDaXai > 350) {
        return ((50 * 500) + (50*650) + (100*850) + (150*1100) + ((soDienDaXai - 350)*1300))  
    }
}

function tinhTienDien() {
    var soDienTieuThu = document.getElementById('txtSoDien').value * 1

    var tienCanTra = tienDien(soDienTieuThu)
    var ketQua = document.getElementById('result')
    
    ketQua.value = `Số tiền điện bạn cần trả là: ${tienCanTra} vnd`
}