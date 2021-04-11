import React from 'react';
import Accordion from "./components/Accordion";
import {Ratings} from "./components/Ratings";

function App() {
    return (
        <div>
            <Ratings value={0}/>
            <PageTittle titlePage='This is App component'/>
            <Ratings value={1}/>
            <Accordion titleValue={'new menuuu'} collapsed={true}/>
            <Ratings value={2}/>
            <Accordion titleValue={'NEW MENUUU'} collapsed={false}/>
            <Ratings value={3}/>
            <PageTittle titlePage='This is component'/>
            <Ratings value={4}/>
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