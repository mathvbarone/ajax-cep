(() => {
  const ui = {
    inputs: {
      cep: document.querySelector("#cep"),
      logradouro: document.querySelector("#logradouro"),
      bairro: document.querySelector("#bairro"),
      localidade: document.querySelector("#localidade"),
      uf: document.querySelector("#uf")
    },
    fields: document.querySelectorAll("input")
  };

  //FUNÇÃO RESPONSÁVEL POR VALIDAR O TIPO DE CARACTERE QUE O INPUT ACEITARÁ
  const validateEntry = function(e) {
    this.value = this.value.replace(/\D/g, "");
    this.value = this.value.replace(/^(\d{5})(\d)/, "$1-$2");
  };

  //FUNÇÃO QUE VALIDA O NÚMERO DE CARACTERES A SER DIGITADO, E LIMPA OS CAMPOS CASO O INPUT ESTEJA VAZIO
  const validadeLength = () => {
    const cep = ui.inputs.cep;

    cep.value.length < 9
      ? (cep.classList.add("error"), cep.focus())
      : cep.classList.remove("error", getAddress(cep));

    cep.value.length === 0
      ? ui.fields.forEach(field => {
          field.value = "";
        })
      : "";
  };

  // FUNÇÃO QUE FAZ A REQUISIÇÃO PARA A API, E RETORNA O JSON COM AS INFORMAÇÕES DE CEP

  const getAddress = () => {
    let cepValue = cep.value;

    const headers = new Headers();
    headers.append("Content-type", "application/json");

    const conf = {
      method: "GET",
      headers
    };

    fetch(`https://viacep.com.br/ws/${cepValue}/json/`, conf)
      .then(res => {
        return res.json();
      })
      .then(getAddressSuccess)
      .catch(getAddressError);
  };


  const getAddressSuccess = address => {
          
    Object.keys(address).map(key => {
        let value = address[key];    
        let element =  document.querySelectorAll(`#${key}`);  
        element.forEach(() => {
          element[0].value = value;
        });
     }); 

  };

  const getAddressError = () => {
    console.log("Fail!");
  };

  const init = (function() {
    cep.addEventListener("input", validateEntry);
    cep.addEventListener("focusout", validadeLength);
  })();
})();
