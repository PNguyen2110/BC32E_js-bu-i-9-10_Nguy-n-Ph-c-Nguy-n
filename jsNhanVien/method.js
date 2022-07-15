  function kiemTraRong(id1, id2, id3 = 'Vui lòng nhập thông tin!') {
    var valueInput = document.getElementById(id1);
    var thongBao = document.getElementById(id2);
    
    if ((valueInput.value).trim() == "" || valueInput.selectedIndex == 0) {
      thongBao.innerHTML = `<span class='text-danger'>${id3}</span>`;
      thongBao.style.display = 'block'
     return false;
    } else {
      thongBao.innerHTML = "";
      return true;
    }
    
  };
  
  function kiemTraSo (id1,id2){
   
    var valueInput = document.getElementById(id1).value;
      var kiemTra = /^[0-9]+$/;
      if(valueInput.match(kiemTra)){
          document.getElementById(id2).innerHTML = '';
          return true;
      }else{
        document.getElementById(id2).innerHTML = 'Trường này phải là số!';
        document.getElementById(id2).style.display = 'block'
          return false;
      }
     
  };

  function kiemTraText(id1, id2){
    
    var inputText = document.getElementById(id1).value;
    var text = /^[a-zA-Z]+$/;
    if(inputText.match(text)){
      document.getElementById(id2).innerHTML = ''
      return true;
    }else{
      document.getElementById(id2).innerHTML = 'Trường này phải là chữ'
      document.getElementById(id2).style.display = 'block'
      return false;
    }
    
  }
  
  function kiemTraDoDai (id1, id2, min, max, thongBao){
    var inputValue = document.getElementById(id1).value;
   
    if(inputValue.length <= max && inputValue.length >= min){
     
      document.getElementById(id2).innerHTML = '';
     return true;
    }else{
      document.getElementById(id2).innerHTML = thongBao ;
      document.getElementById(id2).style.display = 'block';
      return false; 
    }
    
  }
  
  function kiemTraEmail(id1,id2){
    
    var inputEmail = document.getElementById(id1).value;
    var kiemTraEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
    if(!(inputEmail.match(kiemTraEmail))){
      document.getElementById(id2).innerHTML = 'Email không hợp lệ'
      document.getElementById(id2).style.display = 'block'
      return false;
    }else{
      document.getElementById(id2).innerHTML = '';
      return true;
    }
    
  }
  
  function kiemTraDacBiet(id1,id2){
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    var valuePass = document.getElementById(id1).value
    if(valuePass.match(regex)){
      document.getElementById(id2).innerHTML = ''
      return true;
    }else{
      document.getElementById(id2).innerHTML = 'Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt';
      return false;
    }
  };
  
  function kiemTraDate(id1, id2) {
    regex = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
    var valueDate = document.getElementById(id1).value;
    if(valueDate.match(regex)){
      document.getElementById(id2).innerHTML = '';
      return true;
    }
    document.getElementById(id2).innerHTML = 'Ngày làm phải đúng định dạng mm/dd/yyyy';
    document.getElementById(id2).style.display = 'block';
      return false;
  }
  
  function kiemTraMinMax (id1, id2, name, min, max){
    var value = +document.getElementById(id1).value;
    if(value >= min && value <= max){
      
      document.getElementById(id2).innerHTML = '';
      return true;
    }else{
      document.getElementById(id2).innerHTML = `${name} Phải từ ${min} đến ${max}`
      document.getElementById(id2).style.display = 'block'
      return false;
    }
  }
  
  function validation(){
    
    var valid = true;
    valid = kiemTraRong('tknv','tbTKNV') && kiemTraRong('name','tbTen') && kiemTraRong('email','tbEmail') && kiemTraRong('password','tbMatKhau') 
    && kiemTraRong('datepicker','tbNgay') && kiemTraRong('luongCB','tbLuongCB') && kiemTraRong('gioLam','tbGiolam') && kiemTraRong('chucvu','tbChucVu','Vui lòng chọn chức vụ')
    && kiemTraMinMax('gioLam','tbGiolam','Giờ làm', 80, 200) && kiemTraMinMax('luongCB','tbLuongCB','Lương cơ bản', 1e6, 20e6) &&  kiemTraDate('datepicker','tbNgay')
    && kiemTraDacBiet('password','tbMatKhau') &&  kiemTraEmail('email','tbEmail') &&  kiemTraEmail('email','tbEmail') &&  kiemTraText('name','tbTen')
    &&  kiemTraDoDai('tknv','tbTKNV', 4, 6, 'Độ dài từ 4 - 6 kí số') &&  kiemTraSo('tknv','tbTKNV');
    
    // Làm sao để validation hiện ra từng thông báo vậy mentor ơi,
    //  làm thế này thì hiện được nhưng thấy lặp code nhiều quá, khi đi làm thì làm như nào vậy mentor ơi
    
        if( kiemTraRong('tknv','tbTKNV')){
            kiemTraSo('tknv','tbTKNV')
           if(  kiemTraSo('tknv','tbTKNV')){
              kiemTraDoDai('tknv','tbTKNV', 4, 6, 'Độ dài từ 4 - 6 kí số')
           }
           
         }
         // name
         if(  kiemTraRong('name','tbTen') ){
            kiemTraText('name','tbTen') 
           
         }
     
         // email
        if( kiemTraRong('email','tbEmail')){
          kiemTraEmail('email','tbEmail')
        }
        // password
        if( kiemTraRong('password','tbMatKhau')){
         kiemTraDacBiet('password','tbMatKhau')
        }
        //Ngày làm
        if( kiemTraRong('datepicker','tbNgay')){
            kiemTraDate('datepicker','tbNgay')
        }
        //lương cơ bản
        if(  kiemTraRong('luongCB','tbLuongCB')){
          kiemTraMinMax('luongCB','tbLuongCB','Lương cơ bản', 1e6, 20e6)
        }
        //giờ làm
        if( kiemTraRong('gioLam','tbGiolam')){
          kiemTraMinMax('gioLam','tbGiolam','Giờ làm', 80, 200)
        }
     
         kiemTraRong('chucvu','tbChucVu','Vui lòng chọn chức vụ');
     
         if(valid){
            return true;
        }else{
            return false
        }
  }