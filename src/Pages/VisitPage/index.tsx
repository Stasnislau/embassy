import React from "react";

const VisitPage = (id: number) => {
    // try catch for extracting and finding id
    const found = false;
    return (
        <div className="visit-page"
        {found && (
            <div className="visit-container">
                <h1>Visit to the office</h1>
                
            </div>
            )
        }
        </div>
    );
}