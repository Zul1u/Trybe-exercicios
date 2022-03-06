/* const login = {}

const key = (objeto, nomeDaChave, valor) => {
  let namekey = nomeDaChave
  const value = valor
  objeto[nomeDaChave] = valor 
  return objeto
}

key(login, 'nome', 'Arthur');
key(login, 'idade', 18);
key(login, 'cidade', 'Igarapé');
key(login, 'sobreNome', 'Martins Leal Peixoto')
key(login, 'nomeCompleto', `${login.nome} ${login.sobreNome}`);
console.log(login); */


const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

const skills = student => {
    const students = Object.keys(student);
    for (let index in students){
        console.log(`${students[index]}, Nivel: ${student[students[index]]}`);
    }
}
//console.log(skills(student1))
skills(student2);