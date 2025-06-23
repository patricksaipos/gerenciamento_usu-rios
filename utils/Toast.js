class Toast {
    constructor(){}

    success(position, icon, title){

        const Toast = Swal.mixin({
            toast: true,
            position: position,
            showConfirmButton: false,
            timer: 60000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: icon,
            title: title
          });
    
    }
}