// validation

var mangNhanVien = [];
const btnThemNV = document.getElementById("btnThemNV");
btnThemNV.onclick = function () {

    var nhanvien = new nhanVien();

    nhanvien.hoTen = document.querySelector("#name").value;
    nhanvien.taiKhoan = document.querySelector("#tknv").value;
    nhanvien.email = document.querySelector("#email").value;
    nhanvien.ngayLam = document.querySelector("#datepicker").value;
    nhanvien.luongCB = document.querySelector("#luongCB").value;
    nhanvien.password = document.querySelector("#password").value;
    nhanvien.chucVu = document.querySelector("#chucvu").value;

    nhanvien.gioLam = document.querySelector("#gioLam").value;

// validation
   var kq = validation() 
  if(kq){

    mangNhanVien.push(nhanvien)
     render(mangNhanVien)
  }

    
};

// render ra table
 
function render(arrayNV){

    var html = '';
    for(var i=0; i<arrayNV.length; i++){
      var nhanvien = arrayNV[i]
      nhanvien.tongLuong = function(){
        var tongLuong;
        if(this.chucVu == 'Sếp'){
            tongLuong = (this.luongCB * 3).toLocaleString();
        }else if(this.chucVu == 'Trưởng phòng'){
            tongLuong = (this.luongCB * 2).toLocaleString();
        }else if(this.chucVu == 'Nhân viên'){
            tongLuong = (this.luongCB * 1).toLocaleString();
        }
        return tongLuong;
      }
  
      nhanvien.loaiNhanVien = function () {
        let xepLoai;
        if(this.gioLam >= 192){
            xepLoai = 'nhân viên xuất sắc'
        }else if(this.gioLam >= 176 && this.gioLam < 192){
            xepLoai = 'nhân viên giỏi'
        }else if(this.gioLam >= 160 && this.gioLam < 176){
            xepLoai = 'nhân viên khá'
        }else if(this.gioLam < 160){
            xepLoai = 'nhân viên trung bình'
        }
        return xepLoai;
      }

      
      html += 
      `
      <tr>
        <td>${i}</td>
        <td>${nhanvien.taiKhoan}</td>
        <td>${nhanvien.hoTen}</td>
        <td>${nhanvien.email}</td>
        <td>${nhanvien.ngayLam}</td>
        <td>${nhanvien.chucVu}</td>
        <td>${nhanvien.tongLuong()}</td>
        <td>${nhanvien.loaiNhanVien()}</td>
        <td>

        <button class="btn btn-danger" onclick="xoaSinhVien('${nhanvien.taiKhoan}')">Xoá</button>
        <button class="btn btn-primary sua" onclick="chinhSua('${nhanvien.taiKhoan}')">Chỉnh sửa</button>
        </td>
      </tr>

      `
    }
    
    
    document.querySelector("#tableDanhSach").innerHTML = html;
}



// Xoá sinh viên
function xoaSinhVien(click){
  var indexXoa = mangNhanVien.findIndex(indexXoa => indexXoa.taiKhoan === click);
    if(indexXoa !== -1){
      mangNhanVien.splice(indexXoa, 1);
    }
  
  render(mangNhanVien)
 
}

// chỉnh sửa
function chinhSua(suaClick) {
    // gọi modal
  var up = document.querySelector('#myModal');
  up.setAttribute('class','modal show fade ')
  up.style.display = 'block';
  
  var indexSua = mangNhanVien.findIndex(indexSua => indexSua.taiKhoan === suaClick);
   

        document.querySelector("#name").value = mangNhanVien[indexSua ].hoTen;
        document.querySelector("#tknv").value = mangNhanVien[indexSua].taiKhoan;
        document.querySelector("#email").value = mangNhanVien[indexSua ].email;
        document.querySelector("#datepicker").value = mangNhanVien[indexSua ].ngayLam;
        document.querySelector("#luongCB").value = mangNhanVien[indexSua].luongCB;
        document.querySelector("#password").value = mangNhanVien[indexSua ].password;
        document.querySelector("#chucvu").value = mangNhanVien[indexSua ].chucVu;
        document.querySelector("#gioLam").value =mangNhanVien[indexSua ].gioLam;

        document.querySelector("#tknv").disabled = true
      
    // }
  
}


// cập nhật

document.querySelector("#btnCapNhat").onclick = function(){
  
  var nhanvien = new nhanVien();
    
    nhanvien.hoTen = document.querySelector("#name").value;
    nhanvien.taiKhoan = document.querySelector("#tknv").value;
    nhanvien.email = document.querySelector("#email").value;
    nhanvien.ngayLam = document.querySelector("#datepicker").value;
    nhanvien.luongCB = document.querySelector("#luongCB").value;
    nhanvien.password = document.querySelector("#password").value;
    nhanvien.chucVu = document.querySelector("#chucvu").value;
    nhanvien.gioLam = document.querySelector("#gioLam").value;
    

    indexCapNhat = mangNhanVien.findIndex(indexCapNhat => indexCapNhat.taiKhoan === nhanvien.taiKhoan);

    mangNhanVien[indexCapNhat].taiKhoan = nhanvien.taiKhoan
    mangNhanVien[indexCapNhat].hoTen = nhanvien.hoTen
    mangNhanVien[indexCapNhat].email = nhanvien.email
    mangNhanVien[indexCapNhat].ngayLam = nhanvien.ngayLam
    mangNhanVien[indexCapNhat].luongCB = nhanvien.luongCB
    mangNhanVien[indexCapNhat].chucVu = nhanvien.chucVu
    mangNhanVien[indexCapNhat].gioLam = nhanvien.gioLam
    mangNhanVien[indexCapNhat].password = nhanvien.password

  //  validation trước khi render
  var kq = validation()
  if(kq){

    render(mangNhanVien)
    document.querySelector("#tknv").disabled = false
    var up = document.querySelector('#myModal');
    up.style.display = 'none'
  }

}

// btn đóng
var btnDong = document.querySelector("#btnDong");
btnDong.onclick = function() {
  document.querySelector("#myModal").style.display = "none";
}

  

// Tìm nhân viên theo loại: Xuất sắc, Giỏi, Khá, Trung bình
var tagP = document.createElement('p');

tagP.innerHTML = `<p class='text bg-primary text-light'></p>`
document.querySelector('.input-group').insertAdjacentElement('afterend',tagP)

document.getElementById('btnTimNV').onclick = function() {
  var html='';
  var inputLoai = document.querySelector('#searchName').value;
  
  mangNhanVien.forEach(function(item){
    if(inputLoai == 'Xuất sắc' || inputLoai == 'xuất sắc'){
      if(item.gioLam >= 192)
      html += item.hoTen + '<br/>';
    }else if(inputLoai == 'Giỏi' || inputLoai == 'giỏi'){
      if(item.gioLam < 192 && item.gioLam >= 176 )
      html += item.hoTen + '<br/>';
    }else if(inputLoai == 'Khá' || inputLoai == 'khá'){
      if(item.gioLam < 176 && item.gioLam >= 160 )
      html += item.hoTen + '<br/>';
    }else if(inputLoai == 'Trung bình' || inputLoai == 'trung bình'){
      if(item.gioLam < 160 )
      html += item.hoTen + '<br/>';
    }
  })
  
  document.querySelector('.text').innerHTML = html 


  
}


