import React from 'react';
import Accordion from "./components/Accordion";
import {OnOff} from './components/OnOff';
import {Ratings} from "./components/Ratings";
import UncontrolledAccordion from './components/UncontrolledAccordion';
import {UncontrolledRatings} from "./components/Uncontrolled.Ratings";

function App() {
    return (
        <div>
            {/*<Ratings value={0}/>*/}
            {/*<PageTittle titlePage='This is App component'/>*/}
            {/*<Ratings value={1}/>*/}
            {/*<Accordion titleValue={'new menu'} collapsed={true}/>*/}
            {/*<Ratings value={2}/>*/}
            {/*<Accordion titleValue={'NEW MENU'} collapsed={false}/>*/}
            {/*<Ratings value={3}/>*/}
            {/*<PageTittle titlePage='This is component'/>*/}
            {/*<Ratings value={4}/>*/}
            <OnOff/>
            <OnOff/>
            <UncontrolledAccordion titleValue={'new'}/>
            <UncontrolledAccordion titleValue={'menu'}/>
            <UncontrolledRatings/>
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