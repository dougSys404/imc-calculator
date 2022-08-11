var btnSend = document.querySelector("#send");

btnSend.addEventListener("click", function(){
    event.preventDefault();

    var form = document.querySelector("#form");

    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var documentId = form.documentId.value;
    var address = form.address.value;

    var spanFirstName = document.querySelector("#result-first-name");
    var spanLastName = document.querySelector("#result-last-name");
    var spanDocumentId = document.querySelector("#result-document-id");
    var spanAddress = document.querySelector("#result-address");

    spanFirstName.textContent = firstName;
    spanLastName.textContent = lastName;
    spanDocumentId.textContent = documentId;
    spanAddress.textContent = address;

    var formResult = document.querySelector("#result");
    formResult.classList.replace('disabled', 'form-result');
});



