import React from "react";
import CardItem from './CardItem';
import './Cards.css';


function Cards () {
    return (
        <div className = 'cards'>
{/* ---------------------------------CURRENT PROJECTS--------------------- */}
            <h1 className = 'cards__title'>Current Projects</h1>
            <div className = 'cards__containter'>
                <div className = 'cards__wrapper'>
                    <ul className = 'cards__items'>
                        <CardItem
                        src = "images/img-9.jpg"
                        text = "Medicine Transportation in Hospital"
                        label = 'Medical'
                        path = '/project'
                        />

                        <CardItem
                        src = "images/img-8.jpg"
                        text = "RFID First Aid Bags and Cabinets in Smart Hospital"
                        label = 'Medical'
                        path = '/project'
                        />  

                        <CardItem
                        src = "images/img-7.jpg"
                        text = "Semi-Automation Shrimps Tempura Frying Production Line"
                        label = 'Food Processing'
                        path = '/project'
                        />  

                        <CardItem
                        src = "images/img-6.jpg"
                        text = "Salt Processing Automation System"
                        label = 'Food Processing'
                        path = '/project'
                        /> 

                    </ul>
                </div>
            </div>
{/* ------------------------RESOURCES------------------------ */}
            <h1 className = 'cards__title'>Human Resources</h1>
            <div className = 'cards__containter'>
                <div className = 'cards__wrapper'>
                    <ul className = 'cards__items'>
                        <CardItem
                        src = "images/img-boss.jpg"
                        text = "Prof. Tuong Quan Vo"
                        label = 'Assocciate Proffesor'
                        path = '/resources'
                        />

                        <CardItem
                        src = "images/imgCong.jpg"
                        text = "Mr. Thanh Cong Vu Tran"
                        label = 'Chief Engineer'
                        path = '/resources'
                        />  

                        <CardItem
                        src = "images/imgLoc.jpg"
                        text = "Mr. Huu Loc Khuu Nguyen"
                        label = 'Mechatronics Engineer'
                        path = '/resources'
                        />  

                        <CardItem
                        src = "images/imgDien.jpg"
                        text = "Mr. Quoc Dien Le"
                        label = 'Mechatronics Engineer'
                        path = '/resources'
                        /> 

                    </ul>
                </div>
            </div>

        </div>

    )
}

export default Cards;