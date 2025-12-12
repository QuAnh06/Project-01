document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const appName = document.getElementById('appName');
    const appCode = document.getElementById('appCode');
    const codePattern = /^[a-zA-Z0-9_-]+$/;

    form.addEventListener('submit', function (e) {
      e.preventDefault(); 
      appName.classList.remove('is-invalid');
      appCode.classList.remove('is-invalid');

      if (!appName.value.trim()) {
        appName.classList.add('is-invalid');
        // alert('Vui lòng nhập Tên App.');
        appName.focus();
        return; 
      }

      const cancelBtn = document.querySelector('.btn-secondary');
      if(cancelBtn){
        cancelBtn.addEventListener('click', ()=>{
          form.reset();
          [appName, appCode].forEach(i=> i.classList.remove('is-invalid','is-valid'));
        });
      }

      const code = appCode.value.trim();
      if(!code){
        appCode.classList.add('is-invalid');
        const errorMessage = appCode.nextElementSibling;  
        if (errorMessage && errorMessage.classList.contains('invalid-feedback')) {
          errorMessage.textContent = 'Vui lòng nhập App Code.';
        }
        appCode.focus();
        return;
      }
      if (!codePattern.test(code)) {
        appCode.classList.add('is-invalid');
        const errorMessage = appCode.nextElementSibling;
        if (errorMessage && errorMessage.classList.contains('invalid-feedback')) {
          errorMessage.textContent = 'App Code không hợp lệ.';
        }
        // alert('App Code không hợp lệ. Chỉ chấp nhận chữ, số, dấu gạch ngang (-) và gạch dưới (_).');
        appCode.focus();
        return;
      }
      form.submit();
    });
  });