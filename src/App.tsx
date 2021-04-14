import React, {useState} from 'react';
import Accordion, {AccordionCollapsedType} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from './components/OnOff/UncontrolledOnOff';
import {Ratings, RatingValueType} from "./components/Rating/Ratings";
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';
import {UncontrolledRatings} from "./components/Rating/Uncontrolled.Ratings";
import './App.css'
import {OnOff, SwitchOnType} from './components/OnOff/OnOff';

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(3);
    let [accordionCollapsed, setAccordionCollapsed] = useState<AccordionCollapsedType>(false);
    let [switchOn, setSwitchOn] = useState<SwitchOnType>(true);

    return (
        <div className={'appWrapper'}>
            <PageTittle titlePage='This is App component'/>

            <UncontrolledOnOff/>
            <OnOff onClick={setSwitchOn}
                   on={switchOn}
            />

            <UncontrolledAccordion titleValue={'Uncontrolled Accordion'}/>
            <Accordion
                titleValue={'Controlled Accordion'}
                collapsed={accordionCollapsed}
                onClick={setAccordionCollapsed}
            />

            <UncontrolledRatings/>
            <Ratings
                onClick={setRatingValue}
                value={ratingValue}
            />

        </div>
    );
}

type propsPageTittleType = {
    titlePage: string
}

function PageTittle(props: propsPageTittleType) {
    return (
        <h1>{props.titlePage}</h1>
    )
}

export default App;