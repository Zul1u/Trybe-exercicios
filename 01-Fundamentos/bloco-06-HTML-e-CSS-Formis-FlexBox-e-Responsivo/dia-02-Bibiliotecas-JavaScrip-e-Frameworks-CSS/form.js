/* let bntEnviar = document.querySelector('#submit');
bntEnviar.addEventListener('click', function(event){
    event.preventDefault()
}) */

const validation = new JustValidate('#form');
validation 
    .addField('#nome', [
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Nome incompleto!',
        },
        {
            rule: 'maxLength',
            value: 30,
        },
        {
            rule: 'required',
            errorMessage: 'Digite o seu nome completo',
        }
    ])
    .addField('#email', [
        {
            rule: 'required',
            errorMessage: 'Email obrigatorio!',
        },
        {
            rule: 'email',
            errorMessage: 'Email invalido',
        },
    ])
    .addRequiredGroup('#options', 'Escolha uma opcão');
