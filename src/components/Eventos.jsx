import React, { useState } from 'react';

const Eventos = () => {
    // Estado para armazenar o texto digitado no input
    const [texto, setTexto] = useState('');

    // Função chamada ao clicar no botão
    const handleClick = () => {
        alert(`Botão clicado! Texto atual: ${texto}`);
    };

    // Função chamada ao digitar no input
    const handleChange = (event) => {
        setTexto(event.target.value);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px'}}>
            <h2>Manipulação de Eventos</h2>

            {/* Input para capturar mudanças */}
            <input 
                type="text" 
                placeholder="Digite algo..." 
                value={texto} 
                onChange={handleChange} 
                style={{ padding: '8px', marginRight: '10px' }}
            />

            {/* Botão que exibe um alerta com o texto digitado */}
            <button onClick={handleClick}>Exibir Texto</button>

            {/* Exibição dinâmica do texto digitado */}
            <p>Texto digitado: {texto}</p>
        </div>
    );
};

export default Eventos;
