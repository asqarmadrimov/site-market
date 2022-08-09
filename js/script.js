let elSiteForm = document.querySelector (".form");
let elFormInput = elSiteForm.querySelector (".form__input");
let elFormList = document.querySelector (".form__list");


elSiteForm,addEventListener ("submit", function(evt) {
  evt.preventDefault();

  let inputValue = elFormInput.value;

  let tableList = [""]
  
  for ( tableList of inputValue ) {

    let elItem = document.createElement("li");
    elItem.textContent = inputValue;
    elFormList.appendChild(elItem);
    elItem+= cars[i];
    inputValue + tableList.push;
  }
})




