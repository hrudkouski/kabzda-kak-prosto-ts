import React, {useState} from 'react';
import Accordion from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from './components/OnOff/UncontrolledOnOff';
import {Ratings, RatingValueType} from "./components/Rating/Ratings";
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';
// import {UncontrolledRatings} from "./components/Rating/UncontrolledRatings";
import './App.css'
// import {OnOff} from './components/OnOff/OnOff';

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(true);

    return (
        <div className={'appWrapper'}>
            <PageTittle titlePage='This is App component'/>

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            {/*<OnOff*/}
            {/*    onClick={setSwitchOn}*/}
            {/*    on={switchOn}*/}
            {/*    // onChange = { (on) => setSwitchOn(on) }*/}
            {/*/>*/}

            <UncontrolledAccordion titleValue={'Uncontrolled Accordion'}/>
            {/*<Accordion*/}
            {/*    titleValue={'Controlled Accordion'}*/}
            {/*    collapsed={accordionCollapsed}*/}
            {/*    onChange={() => setAccordionCollapsed(!accordionCollapsed)}*/}
            {/*    items={}*/}
            {/*/>*/}

            {/*<UncontrolledRatings />*/}
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