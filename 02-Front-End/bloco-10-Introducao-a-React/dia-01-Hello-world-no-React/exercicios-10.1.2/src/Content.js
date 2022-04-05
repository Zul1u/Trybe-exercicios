import React from "react";

const conteudos = [
    {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
    },
    {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
    },
    {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
    },
    {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
    },
];

class Content extends React.Component {
    render() {
        return (
            conteudos.map((elmt) => {
                return (
                    <section className="content">
                        <span> O conteudo é: {elmt.conteudo} </span>
                        <span> Status: {elmt.status} </span>
                        <span> Bloco {elmt.bloco} </span>
                    </section>
                )
            })
        )
    }
}

export default Content;