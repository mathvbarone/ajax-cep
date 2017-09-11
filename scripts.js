(() => {

    const ui =  {
        inputs: {
            cep: document.querySelector("#cep"),
            logradouro: document.querySelector("#logradouro"),
            bairro: document.querySelector("#bairro"),
            localidade: document.querySelector("#localidade"),
            uf: document.querySelector("#uf"),
        },
        fields: document.querySelectorAll("input")  
    }


  //FUNÇÃO RESPONSÁVEL POR VALIDAR O TIPO DE CARACTERE QUE O INPUT ACEITARÁ
  const validateEntry = function(e){
    this.value = this.value.replace(/\D/g,"");
    this.value = this.value.replace(/^(\d{5})(\d)/,"$1-$2");
  }  

  //FUNÇÃO QUE VALIDA O NÚMERO DE CARACTERES A SER DIGITADO, E LIMPA OS CAMPOS CASO O INPUT ESTEJA VAZIO
  const validadeLength = () => {
    const cep = ui.inputs.cep;

    cep.value.length < 9 ? (
        cep.classList.add("error"),
        cep.focus())
    : (cep.classList.remove("error")
    );

    cep.value.length === 0 ? (
        ui.fields.forEach(field => {
            field.value = "";
        })
    ) : ("");
        

  }

  const getAddress = () => {
    
  }


  const getAddressSuccess = () => {

  }

  const getAddressError = () => {
    
  }

  const init = function(){
      cep.addEventListener("input", validateEntry);
      cep.addEventListener("focusout", validadeLength);
  }();



})();