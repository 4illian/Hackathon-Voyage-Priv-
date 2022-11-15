import React from 'react';
import "./Card.css"
import "./flag-icons-main/css/flag-icons.css"
import "./flag-icons-main/css/flag-icons.min.css"

const Card = () => {
    return (
        < div className="card">
            {<article className="cardactiv1">
                <div class="namehour">
                    <h1>110m haies</h1>
                    <p class="hour"> 10h30 - 11h30</p>
                </div>
                <div class="list">
                    <p class="Athlete1"> Usain Bolt v Asafa Powell</p> 
                    <a class="link1" href="https://www.france.tv/france-2/direct.html">Regarder l'évènement sur France 2</a>
                    <p class="time"> Vainqueur et temps</p>
                    <p class="time"> Lieu et map</p>
                    <p class="time"> Foodtruck</p>
                </div>
                <button class="favorite styled" type="button">
                Me notifier</button>

            
            

                </article>}
        </div>
    );
};

export default Card;
