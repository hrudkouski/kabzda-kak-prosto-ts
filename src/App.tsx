import React from 'react';
import Accordion from "./components/Accordion";
import {Ratings} from "./components/Ratings";

function App() {
    return (
        <div>
            <PageTittle titlePage='This is App component'/>
            <Ratings value={3}/>
            <Accordion titleValue={'new menuuu'} collapsed={true}/>
            <Ratings value={4}/>
            <Accordion titleValue={'NEW MENUUU'} collapsed={false}/>
            <Ratings value={1}/>
            <PageTittle titlePage='This is component'/>
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