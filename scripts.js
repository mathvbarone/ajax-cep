(() => {

    const ui =  {
        inputs: {
            cep: document.querySelector("#cep"),
            logradouro: document.querySelector("#logradouro"),
            bairro: document.querySelector("#bairro"),
            localidade: document.querySelector("#localidade"),
            uf: document.querySelector("#uf"),
        }  
    }


  //FUNÇÃO RESPONSÁVEL POR VALIDAR O TIPO DE CARACTERE QUE O INPUT ACEITARÁ
  const validateEntry = function(e){
    this.value = this.value.replace(/\D/g,"");
    this.value = this.value.replace(/^(\d{5})(\d)/,"$1-$2");
  }  

  const getAddress = () => {

  }

  const validadeLength = () => {

  }

  const getAddressSuccess = () => {

  }

  const getAddressError = () => {
    
  }

  const init = function(){
      cep.addEventListener("input", validateEntry);
  }();



})();