// Get the input fields
const $name = document.querySelector('.name');
const $lastName = document.getElementById('lastName');
const $password = document.querySelector(".password");
const $phone = document.querySelector('.phone');
const $email = document.getElementById('email');
const $address = document.getElementById('address');
//seleccionamos tambien los inputs para poder manipularlos
const $inputs = document.querySelectorAll('input');

// Get the error elements
const $errorPassword = document.getElementById("errorPassword");
const $errorName = document.getElementById('errorName');
const $errorLastName = document.getElementById('errorLastName') ;
const $errorPhone = document.getElementById('errorPhone');
const $errorEmail = document.getElementById('errorEmail')  ;
const $errorAddress = document.getElementById('errorAddress');

// Exercise 6



function validate(event) {
    event.preventDefault();

    // Validate fields entered by the user: name, phone, password, and email
    const regName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regPhone= /^\+?(6\d{2}|7[1-9]\d{1})\d{6}$/;
    const regPassword = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;  
    const regAddress = /^[a-zA-Z0-9\s,.'-]{3,}$/ ;
    //........validacion name.........
     if(!regName.test($name.value)){
            //mensaje de error
        $errorName.innerHTML = "Numbers in the name are not valid";
            //añadimos clase para poder modificar estilo cuando mostremos error
        $name.classList.add('invalid');   
     }else if($name.value.length < 3){
        $errorName.innerHTML = "Please, at least 3 characters";
        $name.classList.add('invalid');
     } else{
         $name.classList.add('valid');
     }
    
    

    //.......validacion email............
    if(!regEmail.test($email.value)){
            //mensaje de error + invalid class
        $errorEmail.innerHTML = "Enter a valid email address";
        $email.classList.add('invalid');
        
    }else{
        $email.classList.add('valid');
    }

    //...........validacion address................
    if(!regAddress.test($address.value)){
            //mensaje error + invalid class
        $errorAddress.innerHTML = "Invalid address";
        $address.classList.add('invalid');
    }else{
        $address.classList.add('valid');
    }

    //...........validacion lastName..................
    if(!regName.test($lastName.value)){
            //mensaje error + invalid class
        $errorLastName.innerHTML = "Numbers in the Lastname are not valid";
        $lastName.classList.add('invalid');
    }else if($lastName.value.length < 3){
        $errorLastName.innerHTML = "Please, at least 3 characters";
        $lastName.classList.add('invalid');
    }else{
        $lastName.classList.add('valid');
    }

     //.......validacion password...................
     if(!regPassword.test($password.value)){
            //mensaje error + invalid class
        $errorPassword.innerHTML = "Enter a correct password";
        $password.classList.add('invalid');
    }else{
        $password.classList.add('valid');
    }

    //.......validacion phone................
    if(!regPhone.test($phone.value) ){
            //mensaje error + invalid class
        $errorPhone.innerHTML = "Invalid phone number!!";
        $phone.classList.add('invalid');
    }else{
        $phone.classList.add('valid');
    }

   
}
