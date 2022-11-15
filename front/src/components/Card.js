import React from 'react';
import "./Card.css"
import "./flag-icons-main/css/flag-icons.css"
import "./flag-icons-main/css/flag-icons.min.css"

const Card = () => {
    return (
        < div className="card">
            {<article className="cardactiv1">
                <h3>110m haies</h3>
                <p class="fi fi-jm"> Usain Bolt</p>
                <p class="fi fi-jm"> Asafa Poweell</p>
                <p> Vainqueur et temps</p>
                <p> Heure de l'épreuve</p>
            
            <a class="link1" href="https://www.france.tv/france-2/direct.html">Regarder l'évènement sur France 2</a>

                </article>}
        </div>
    );
};

export default Card;
