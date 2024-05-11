document.getElementById('user-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Validação
    var nome = document.getElementById('nome').value.trim();
    var idade = document.getElementById('idade').value.trim();
    var rua = document.getElementById('rua').value.trim();
    var bairro = document.getElementById('bairro').value.trim();
    var state = document.getElementById('state').value.trim();

    if (nome === "" || idade === "" || rua === "" || bairro === "" || state === "") {
        alert("Todos os campos são obrigatórios.");
        return;
    }

    // Atualizações das informações após os campos preenchidos
    var rua = document.getElementById('rua').value.trim();
    var bairro = document.getElementById('bairro').value.trim();
    var estado = document.getElementById('state').value.trim();
    var biografia = document.getElementById('biografia').value.trim();

    document.getElementById('user-info').innerHTML = `
        
    <h4>${nome}</h4>
    <p>Idade: <span>${idade}</span></p>
    <p>Rua: <span>${rua}</span></p>
    <p>Bairro: <span>${bairro}</span></p>
    <p>Estado: <span>${estado}</span></p>
    <p>Biografia: <span>${biografia}</span></p>
            `;
});

// Imagem selecionada é exibida
document.getElementById('changeImageButton').addEventListener('click', function () {
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.addEventListener('change', function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            document.getElementById('uploadedImage').src = event.target.result;
        };
        reader.readAsDataURL(file);
    });
    fileInput.click();
});

