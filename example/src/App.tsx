import * as React from "react";
import { hot } from "react-hot-loader";
import { Hello, Button } from "../../src";
// import CalendarDemo from "./CalendarDemo"
import Calendar from "./Calendar"

function App() {
    return (
        <>
            {/* <Hello name="Jay" />
            <Button onClick={() => console.log("button")}>Button</Button> */}
            {/* <CalendarDemo /> */}
            <Calendar />
        </>
    );
}

export default hot(module)(App);
