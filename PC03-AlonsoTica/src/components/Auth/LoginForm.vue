<template>
  
  <div class="container">
    <div class="row">
    <!-- Left Blank Side -->
    <div class="col-lg-6"></div>

  <!-- Right Side Form -->
    <div class="col-lg-6 d-flex align-items-center justify-content-center right-side">
      <div class="form-2-wrapper">
          <div class="logo text-center">
            
          </div>
          <h2 class="text-center mb-4">Iniciar sesión en su cuenta</h2>
          
            <div class="mb-3 form-box">
              <input type="email" class="form-control" id="email" name="email" placeholder="Ingresa tu correo" required>
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="password" name="password" placeholder="Intresa tu contraseña" required>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="rememberMe">
                <label class="form-check-label" for="rememberMe">Recuerdame</label>
                <a href="forget-3.html" class="text-decoration-none float-end">Olvide mi contraseña</a>
              </div>

            </div>
            <button type="submit" class="btn btn-outline-secondary login-btn w-100 mb-3">Login</button>
            <div class="social-login mb-3 type--A">
              <h5 class="text-center mb-3">Social Login</h5>
              <button class="btn btn-outline-secondary  mb-3"><i class="fa-brands fa-google text-danger"></i> Entrar con Google</button>
              <button class="btn btn-outline-secondary mb-3"><i class="fa-brands fa-facebook-f text-primary"></i> Entrar con Facebook</button>
            </div>
          </div>
      </div>
    </div>
  </div>
       

</template>

<script>

</script>

<style>
  body{
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('../../assets/imagenes/log1.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
}

.form-2-wrapper {
    background: #f8f9fa;
    padding: 50px;
    border-radius: 8px;
}
input.form-control{
    padding: 11px;
    border: none;
    border: 2px solid #405c7cb8;
    border-radius: 30px;
    background-color: transparent;
    font-family: Arial, Helvetica, sans-serif;
   
   
}
input.form-control:focus{
    box-shadow: none !important;
    outline: 0px !important;
    background-color: transparent;
}
button.login-btn{
    background: #b400ff;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 30px;
}
.register-test a{
    color: #000;
}
.social-login button{
    border-radius: 30px;
}

</style>