const form = document.getElementById('registro-form');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const claveInput = document.getElementById('clave');
const confirmaClaveInput = document.getElementById('confirma-clave');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validarNombre() && validarEmail() && validarClave() && validarConfirmaClave()) {
    alert('Inscripción exitosa!');
    form.reset();
  }
});

function validarNombre() {
  const nombre = nombreInput.value.trim();

  if (/^\d+$/.test(nombre)) {
    nombreInput.style.borderColor = 'red';
    return false;
  } else {
    nombreInput.style.borderColor = 'green';
    return true;
  }
}

function validarEmail() {
  const email = emailInput.value.trim();

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailInput.style.borderColor = 'green';
    return true;
  } else {
    emailInput.style.borderColor = 'red';
    return false;
  }
}

function validarClave() {
  const clave = claveInput.value.trim();

  if (clave.length >= 8) {
    claveInput.style.borderColor = 'green';
    return true;
  } else {
    claveInput.style.borderColor = 'red';
    return false;
  }
}

function validarConfirmaClave() {
  const clave = claveInput.value.trim();
  const confirmaClave = confirmaClaveInput.value.trim();

  if (clave === confirmaClave) {
    confirmaClaveInput.style.borderColor = 'green';
    return true;
  } else {
    confirmaClaveInput.style.borderColor = 'red';
    return false;
  }
}
		if (nombre.match(/[0-9]/)) {
			alert("El campo Nombre debe ser de tipo Texto, cualquier carácter numérico no será admitido.");
			return false;
		}

		if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
			alert("El campo Email no tiene un formato válido.");
			return false;
		}

		if (clave.length < 8) {
			alert("El campo Clave debe tener al menos 8 caracteres.");
			return false;
		}

		if (clave !== confirmarClave) {
			alert("El valor introducido en los campos Clave y Confirme su clave no son idénticos.");
			return false;
		}

		alert("La inscripción ha sido correcta.");
		return true;
	}

