import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

/*
* 
@author Yanni et Jimmy
* 
*/

const data = {
    title: "FAQ",
    rows: [
        {
            title: "Comment prendre un rendez-vous",
            content: `Aller dans la seciton rendez-vous et remplissez tous les champs .`,
        },
        {
            title: "Comment voir les resultats des rendez-vous",
            content:
                "Après un rendez-vous, les docteurs vont soumettres les resultats qui sera afficher au home page.",
        },
        {
            title: "Comment savoir les symptomes les plus commun ",
            content: `Aller dans la section services pour voir les symptomes les plus communs `,
        },
        
        {
            title: "Comment rechercher un docteur",
            content: `Pour rechercher un docteur, il faut aller dans la section rechercher et ecrire le nom ou le prenom du docteur `,
        },
        
        {
            title: "Est ce que l'application est gratuite?",
            content: `Oui elle est gratuite et est accessible pour tout le monde `,
        },

        {
            title: "Comment communiquer avec nous?",
            content: `Pour communiquer, allez dans la page contact pour savoir divers facon de communiquer avec nous `,
        },

        
        {
            title: "La version de l'application",
            content: <p>current version is 1.1</p>,
        },
    ],
};

const styles = {
    bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    rowContentColor: 'grey',
    arrowColor: "red",
};

const config = {
    animate: true,
    arrowIcon: "V",
    tabFocus: true
};

export default function faq() {

    return (
        <div className="hero">
            <div className="container">
                <div>
                    <Faq
                        data={data}
                        styles={styles}
                        config={config}
                    />
                </div>
            </div>
        </div>
    );
}