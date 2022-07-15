function nhanVien(){
    this.stt = '';
    this.taiKhoan = '';
    this.hoTen = '';
    this.email =  ''; 
    this.ngayLam = '';
    this.password = '';
    this.chucVu = '';
    this.luongCB = 0;
    this.gioLam = 0;
    
}

nhanVien.prototype.tongLuong = function(luongCB) {
    var tongLuong;
    if(this.chucVu == 'Sếp'){
        tongLuong = (luongCB * 3).toLocaleString();
    }else if(this.chucVu == 'Trưởng phòng'){
        tongLuong = (luongCB * 2).toLocaleString();
    }else if(this.chucVu == 'Nhân viên'){
        tongLuong = (luongCB * 1).toLocaleString();
    }
    return tongLuong;
}

nhanVien.prototype.loaiNhanVien = function(gioLam){
    let xepLoai;
    if(gioLam >= 192){
        xepLoai = 'nhân viên xuất sắc'
    }else if(gioLam >= 176){
        xepLoai = 'nhân viên giỏi'
    }else if(gioLam >= 160){
        xepLoai = 'nhân viên khá'
    }else if(gioLam < 160){
        xepLoai = 'nhân viên trung bình'
    }
    return xepLoai;
}