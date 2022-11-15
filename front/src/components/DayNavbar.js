import React from 'react';

import "./DayNavbar.css"

const DayNavbar = () => {
    return (
        <div className="daynavbar">
            
            <div id="Dayless">
                <h3>Programme Journée 1</h3>
                <p>26/07</p>
            </div>
            <div id="Today">
                <h3>Programme Journée 2</h3>
                <p>27/07</p>
            </div>
            <div id="Dayplus">
                <h3>Programme Journée 3</h3>
                <p>28/07</p>

            </div>

        </div>
    )
}

export default DayNavbar;