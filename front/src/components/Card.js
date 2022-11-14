import React from 'react';

import "./Card.css"

const Card = () => {
    return (
        < div className="card">
            {<article className="cardactiv1">
                <h3>110m haies</h3>
                <p> Nom de l'athlète1</p>
                <p> Nom de l'athlète2</p>
                <p> Vainqueur et temps</p>
                <p> Heure de l'épreuve</p>
            <img src="./flag-icons-main/flags/1x1/ac.svg" alt=""/>
            <img src="./flag-icons-main/flags/1x1/ac.svg" alt=""/>
            <a class="link1" href="https://www.france.tv/france-2/direct.html">Regarder l'évènement sur France 2</a>

                </article>}
            {<article className="cardactiv2">
                <h3>110m haies</h3>
                <p> Nom de l'athlète1</p>
                <p> Nom de l'athlète2</p>
                <p> Vainqueur et temps</p>
                <p> Heure de l'épreuve</p>
            <img src="./flag-icons-main/flags/1x1/ac.svg" alt=""/>
            <img src="./flag-icons-main/flags/1x1/ac.svg" alt=""/>
            <a class="link1" href="https://www.france.tv/france-2/direct.html">Regarder l'évènement sur France 2</a>

                </article>}
        </div>
    );
};

export default Card;
